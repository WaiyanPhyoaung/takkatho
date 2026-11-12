// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeNova from "starlight-theme-nova";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
// import vercelStatic from "@astrojs/vercel/static";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

import { sidebar } from "./src/config/sidebar.mjs";
import { OG_IMAGE, SITE, SITE_NAME } from "./src/config/site.mjs";
import { courseRootRedirects, courses } from "./src/lib/course-stats.mjs";
import { burmeseUiStrings } from "./src/lib/starlight-burmese-ui.mjs";

// Lessons declare <html lang="my"> (they are written in Burmese), but the
// search index stays English. Pagefind has no stemmer for Burmese, so an index
// built as "my" would stop "branch" matching "branches" in the English terms
// the lessons use. Starlight runs Pagefind as a child process, which inherits
// this variable.
// https://pagefind.app/docs/config-options/
process.env.PAGEFIND_FORCE_LANGUAGE ??= "en";

// Remembers the last lesson opened, for the homepage's "continue learning"
// link. Stores only a path, the lesson title and a timestamp, in this
// browser's localStorage; nothing leaves the device. Runs on lesson pages only:
// the first path segment must be a known course folder.
const RECORD_LAST_LESSON = `(() => {
  const courses = ${JSON.stringify(Object.fromEntries(courses.map((c) => [c.dir, c.label])))};
  const dir = location.pathname.split("/").filter(Boolean)[0];
  if (!dir || !Object.hasOwn(courses, dir)) return;
  addEventListener("DOMContentLoaded", () => {
    const heading = document.getElementById("_top");
    const title = (heading ? heading.textContent : document.title.split(" | ")[0]).trim();
    try {
      localStorage.setItem("takkatho-last-lesson", JSON.stringify({
        path: location.pathname, title, course: courses[dir], at: Date.now(),
      }));
    } catch {}
  });
})();`;

// starlight-theme-nova 0.12.3 stores its mobile menu's open/closed state in
// aria-controls ("true"/"false"), overwriting the correct value, the id of the
// sidebar. Lighthouse flags that as an invalid ARIA value on every lesson page.
// This moves the state to aria-expanded and restores aria-controls. It only
// acts on the values "true" and "false", so once Nova fixes the bug upstream
// it does nothing and can be deleted. Overriding Nova's header to swap in a
// fixed button was tried first and broke the header's search box layout.
const FIX_NOVA_MENU_ARIA = `addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("nova-mobile-menu-toggle");
  if (!toggle) return;
  const fix = () => {
    const value = toggle.getAttribute("aria-controls");
    if (value !== "true" && value !== "false") return;
    toggle.setAttribute("aria-expanded", value);
    toggle.setAttribute("aria-controls", "starlight__sidebar");
  };
  new MutationObserver(fix).observe(toggle, { attributes: true, attributeFilter: ["aria-controls"] });
  fix();
});`;

const FONT_STYLESHEET =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400..800&family=Noto+Sans+Myanmar:wght@400..700&display=swap";

// https://astro.build/config
export default defineConfig({
  site: SITE,
  output: "static",
  // Astro 7 changed the default to "jsx", which drops whitespace that contains
  // a line break. Many templates here put Burmese text and a link on separate
  // lines ("...အတွက်" then <a>), and would lose the space between them.
  // https://docs.astro.build/en/guides/upgrade-to/v7/
  compressHTML: true,
  // Bare course URLs such as /git-course used to 404 because those courses
  // have no overview page. Each now 301s to the course's first lesson.
  redirects: courseRootRedirects,
  integrations: [
    // No changefreq, priority or lastmod: Google ignores the first two, and
    // only trusts lastmod when it is accurate. Stamping every URL with the
    // build time on every deploy is not.
    // https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
    sitemap(),
    react(),
    starlight({
      plugins: [
        // "css": Nova ships its own precompiled styles. Its default, "detect"
        // (new in 0.11), switches it to Tailwind mode when it sees the Tailwind
        // Vite plugin. Tailwind skips node_modules when scanning for classes,
        // so Nova's header classes were never generated and the lesson header
        // became a full-screen overlay. Nova's own tailwind.css would fix that
        // but also moves this site's md/lg breakpoints and Starlight's colors.
        starlightThemeNova({ stylingSystem: "css" }),
        burmeseUiStrings(),
      ],
      // Lessons are Burmese. Without this every page declared lang="en", so
      // screen readers read Burmese text with an English voice.
      locales: {
        root: { label: "မြန်မာ", lang: "my" },
      },
      // src/pages/404.astro is the 404 page. Without this Starlight also
      // injected its own, and Astro warned the collision will become an error.
      disable404Route: true,
      expressiveCode: true,
      title: "တက္ကသိုလ် (Takkatho) - Myanmar Programming Learning Platform",
      description:
        "လေ့လာပါ မြန်မာဘာသာဖြင့် programming သင်ခန်းစာများ။ TypeScript, WebSocket, Git, Web Performance, Software Architecture နှင့် Database များကို ကျွမ်းကျင်အောင် သင်ယူပါ။ Myanmar developers များအတွက် အထူးပြုလုပ်ထားသည့် ခေတ်မီ learning platform။",
      // A "./" path into src/assets, as Starlight documents. The old
      // "public/favicon.svg" only resolved by accident under Vite 5, and
      // Vite 8's bundler rejects it. Same file as public/favicon.svg, which
      // stays where it is for the browser tab icon.
      logo: {
        replacesTitle: true,
        src: "./src/assets/logo.svg",
        alt: "Takkatho University",
      },
      customCss: ["./src/styles/global.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/WaiyanPhyoaung/takkatho",
        },
      ],
      head: [
        // Fonts load here rather than via @import in global.css; see the note
        // at the top of that file. crossorigin is required on the gstatic
        // preconnect because font files are fetched in CORS mode.
        { tag: "link", attrs: { rel: "preconnect", href: "https://fonts.googleapis.com" } },
        {
          tag: "link",
          attrs: { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true },
        },
        { tag: "link", attrs: { rel: "stylesheet", href: FONT_STYLESHEET } },

        // Starlight already emits the SVG favicon (its `favicon` default).
        {
          tag: "link",
          attrs: { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        },
        {
          tag: "link",
          attrs: { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        },
        {
          tag: "link",
          attrs: { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        },
        { tag: "link", attrs: { rel: "manifest", href: "/site.webmanifest" } },
        { tag: "meta", attrs: { name: "theme-color", content: "#111827" } },
        { tag: "meta", attrs: { name: "msapplication-TileColor", content: "#111827" } },
        { tag: "meta", attrs: { name: "msapplication-config", content: "/browserconfig.xml" } },
        { tag: "meta", attrs: { name: "application-name", content: SITE_NAME } },
        { tag: "meta", attrs: { name: "mobile-web-app-capable", content: "yes" } },
        { tag: "meta", attrs: { name: "apple-mobile-web-app-title", content: SITE_NAME } },
        { tag: "meta", attrs: { name: "author", content: "Takkatho Team" } },
        {
          tag: "meta",
          attrs: {
            name: "robots",
            content: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
          },
        },

        // Link previews. Starlight already writes og:title, og:description,
        // og:url, og:type ("article") and twitter:card for each lesson, and
        // entries here override its own by name. The old config set
        // og:type "website" here, which relabelled every lesson.
        { tag: "meta", attrs: { property: "og:site_name", content: SITE_NAME } },
        { tag: "meta", attrs: { property: "og:image", content: `${SITE}${OG_IMAGE.path}` } },
        { tag: "meta", attrs: { property: "og:image:width", content: String(OG_IMAGE.width) } },
        { tag: "meta", attrs: { property: "og:image:height", content: String(OG_IMAGE.height) } },
        { tag: "meta", attrs: { property: "og:image:alt", content: OG_IMAGE.alt } },
        // Facebook wants language_TERRITORY; Starlight would write plain "my".
        { tag: "meta", attrs: { property: "og:locale", content: "my_MM" } },
        { tag: "meta", attrs: { name: "twitter:image", content: `${SITE}${OG_IMAGE.path}` } },
        { tag: "meta", attrs: { name: "twitter:creator", content: "@takkatho_mm" } },
        { tag: "meta", attrs: { name: "geo.region", content: "MM" } },

        { tag: "script", content: RECORD_LAST_LESSON },
        { tag: "script", content: FIX_NOVA_MENU_ARIA },

        // No JSON-LD here any more. This array used to put four blocks on
        // every lesson: a course list of 7 (there are 24) whose URLs all
        // 404, a "Certificate of Completion" the site does not award, a
        // search box pointing at a URL that ignores its query, and the same
        // two-item breadcrumb on every page. Organization and WebSite now live
        // on the homepage, and the course list on /courses, all generated
        // from real data in StandaloneLayout.astro and courses.astro.
      ],
      routeMiddleware: "./src/routeMiddleware.ts",
      sidebar,
    }),
  ],

  vite: {
    // The "@/..." import alias comes from `paths` in tsconfig.json, which Astro
    // reads itself. The Vite alias that used to sit here had the key "@/*",
    // which Vite matches literally, so it never applied to any import.
    plugins: [tailwindcss()],
  },

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
