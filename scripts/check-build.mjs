/**
 * Post-build checks on dist/. Runs after `astro build` (see package.json), so
 * a failed check fails the Vercel build and production stays on the last good
 * deploy.
 *
 * Each check guards against a regression this site has actually had. They are
 * structural, not tied to numbers or wording, so adding a course or editing a
 * lesson does not trip them.
 *
 *   npm run check        check an existing dist/ without rebuilding
 */
import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { SITE } from "../src/config/site.mjs";
import { courseRootRedirects, totalLessons } from "../src/lib/course-stats.mjs";
import { loadStarlightEnglish } from "../src/lib/starlight-burmese-ui.mjs";

// Optional argument: another build folder, used to test this script itself.
const DIST = process.argv[2] ?? "dist";
const failures = [];
const fail = (check, detail) => failures.push(`${check}\n    ${detail}`);

if (!existsSync(DIST)) {
  console.error("check-build: dist/ not found. Run `npm run build` first.");
  process.exit(1);
}

/** Every built page except Pagefind's own files. */
const pages = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) {
      if (name !== "pagefind" && name !== "_astro") walk(path);
    } else if (name.endsWith(".html")) {
      pages.push({ file: relative(DIST, path), html: readFileSync(path, "utf8") });
    }
  }
})(DIST);

const read = (file) => readFileSync(join(DIST, file), "utf8");
const meta = (html, key) =>
  html.match(new RegExp(`<meta (?:property|name)="${key}" content="([^"]*)"`))?.[1];
const isLesson = (html) => html.includes('data-pagefind-body');

// Starlight prints raw keys ("search.label") when a UI string is missing, as
// happened when the site's language changed to Burmese. Built from Starlight's
// own key list, so lesson text such as "page.tsx" is not mistaken for one.
const escape = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const RAW_KEY = new RegExp(
  `(?:>|")(?:${Object.keys(loadStarlightEnglish()).map(escape).join("|")})(?:<|")`,
);

for (const { file, html } of pages) {
  const key = html.match(RAW_KEY);
  if (key) fail("No raw interface translation keys", `${file}: ${key[0]}`);

  // A raw YouTube iframe loads about 980 KB on page load; use YouTube.astro.
  if (/<iframe[^>]+youtube(?:-nocookie)?\.com\/embed/.test(html)) {
    fail("No raw YouTube iframes", `${file}: use src/components/YouTube.astro`);
  }

  // src/ is never served, so a path into it is always a broken image.
  if (/<img[^>]+src="\/src\//.test(html)) fail("No /src/ image paths", file);

  if (file === "404.html") continue;

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (!canonical?.startsWith(`${SITE}/`)) {
    fail("Canonical URL on the served origin", `${file}: ${canonical ?? "missing"}`);
  }
  for (const key of ["og:title", "og:image", "twitter:card"]) {
    if (!meta(html, key)) fail("Link preview tags present", `${file}: no ${key}`);
  }
  if (isLesson(html) && !/<html lang="my"/.test(html)) {
    fail('Lessons declare lang="my"', `${file}: ${html.match(/<html[^>]*>/)?.[0]}`);
  }
}

// /courses must ship its cards in the HTML, not render them after JavaScript.
const courses = read("courses/index.html");
const listUrls = [...courses.matchAll(/"@type":"ListItem","position":\d+,"url":"([^"]+)"/g)].map((m) => m[1]);
const cards = (courses.match(/Start Learning/g) ?? []).length;
if (!listUrls.length) fail("Course list structured data", "no ItemList URLs on /courses");
if (cards !== listUrls.length) {
  fail("Every course card server-rendered", `${cards} cards in the HTML, ${listUrls.length} courses in the ItemList`);
}
for (const url of listUrls) {
  const path = url.replace(SITE, "").replace(/^\/|\/$/g, "");
  if (!existsSync(join(DIST, path, "index.html"))) {
    fail("Course list URLs are real pages", `${url} has no built page`);
  }
}

// The homepage lesson count must match the sidebar.
const home = read("index.html");
if (!new RegExp(`>\\s*${totalLessons}\\s*<`).test(home)) {
  fail("Homepage lesson count matches the sidebar", `expected ${totalLessons}`);
}

// Sitemap and robots.txt must point at the served origin.
const sitemap = read("sitemap-0.xml");
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const offOrigin = locs.filter((url) => !url.startsWith(`${SITE}/`));
if (!locs.length || offOrigin.length) {
  fail("Sitemap URLs on the served origin", offOrigin[0] ?? "sitemap has no URLs");
}
if (/<(lastmod|changefreq|priority)>/.test(sitemap)) {
  fail("Sitemap has no lastmod, changefreq or priority", "Google ignores two and distrusts build-time lastmod");
}
if (!read("robots.txt").includes(`Sitemap: ${SITE}/sitemap-index.xml`)) {
  fail("robots.txt names the sitemap on the served origin", "update public/robots.txt");
}

// Bare course URLs must redirect (Vercel adapter output, when present).
const vercelConfig = process.argv[2] ? join(DIST, "..", "vercel-config.json") : ".vercel/output/config.json";
if (existsSync(vercelConfig)) {
  const routes = JSON.parse(readFileSync(vercelConfig, "utf8")).routes ?? [];
  for (const [from, to] of Object.entries(courseRootRedirects)) {
    const hit = routes.find((r) => r.src === `^${from}$` && r.headers?.Location === to);
    if (!hit) fail("Course root redirects", `${from} -> ${to} missing from ${vercelConfig}`);
  }
}

// Three DSA diagrams were byte-for-byte copies of other diagrams, so lessons
// showed the wrong picture under the right caption. The bundler merges
// identical files into one asset, so dist/ can't show this; hash the source
// images that lessons reference instead. Optional third argument: another
// docs folder, used to test this script itself.
const DOCS = process.argv[3] ?? "src/content/docs";
const IMAGE_REF = /(?:\]\(|from\s+["'])(\.{1,2}\/[^)"'\s]+\.(?:svg|png|jpe?g|webp|gif|avif))/g;
const imagesByHash = new Map();
(function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walk(path);
    else if (/\.mdx?$/.test(entry.name)) {
      for (const [, ref] of readFileSync(path, "utf8").matchAll(IMAGE_REF)) {
        const image = resolve(dirname(path), ref);
        if (!existsSync(image)) continue; // astro build already fails on these
        const hash = createHash("sha256").update(readFileSync(image)).digest("hex");
        if (!imagesByHash.has(hash)) imagesByHash.set(hash, new Set());
        imagesByHash.get(hash).add(relative(process.cwd(), image));
      }
    }
  }
})(DOCS);
for (const images of imagesByHash.values()) {
  if (images.size > 1) fail("Lesson images are not copies of each other", [...images].join(" = "));
}

if (failures.length) {
  console.error(`check-build: ${failures.length} problem(s) in ${pages.length} pages\n`);
  for (const f of failures.slice(0, 40)) console.error(`  x ${f}`);
  process.exit(1);
}
console.log(`check-build: ${pages.length} pages OK`);
