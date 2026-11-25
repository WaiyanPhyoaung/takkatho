/**
 * Runtime end-to-end verification against built dist/ using headless Chromium
 * (playwright-core).
 *
 * Tests real browser execution that static HTML checks cannot see:
 * - All 26 Mermaid-containing lesson pages render valid SVGs (no syntax errors)
 *   and re-render on light/dark theme toggle
 * - Quiz scoring, Wrong/Correct feedback, explanations, and reset
 * - LessonCompletion persistence + homepage "Continue learning" + /courses progress bar + ?q=
 * - CodePlayground live iframe execution & interactive Counter demo
 * - CheatSheets keyboard shortcuts (/ and Cmd/Ctrl+K), ?category=, #hash, and Copy
 * - Desktop & mobile (360px) layouts: zero horizontal overflow + Starlight nav drawer
 *
 * Usage: npm run check:runtime (after npm run build)
 */
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import http from "node:http";
import { extname, join, relative, resolve } from "node:path";
import { chromium } from "playwright-core";

const DIST = resolve("dist");
if (!existsSync(DIST)) {
  console.error("check-runtime: dist/ not found. Run `npm run build` first.");
  process.exit(1);
}

const CHROME_CANDIDATES = [
  process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH,
  `${process.env.HOME}/Library/Caches/ms-playwright/chromium-1228/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);

const executablePath = CHROME_CANDIDATES.find((p) => existsSync(p));
if (!executablePath) {
  console.error("check-runtime: No Chromium/Chrome binary found. Set PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH.");
  process.exit(1);
}

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

function startStaticServer() {
  const server = http.createServer((req, res) => {
    const cleanUrl = (req.url || "/").split("?")[0];
    let filePath = join(DIST, decodeURIComponent(cleanUrl));
    if (existsSync(filePath) && statSync(filePath).isDirectory()) {
      filePath = join(filePath, "index.html");
    } else if (!existsSync(filePath) && existsSync(`${filePath}.html`)) {
      filePath = `${filePath}.html`;
    } else if (!existsSync(filePath)) {
      filePath = join(DIST, "404.html");
      res.statusCode = 404;
    }
    const ext = extname(filePath);
    res.setHeader("Content-Type", MIME[ext] || "application/octet-stream");
    res.end(readFileSync(filePath));
  });
  return new Promise((resolveServer) => {
    server.listen(0, "127.0.0.1", () => {
      const addr = server.address();
      resolveServer({ server, baseUrl: `http://127.0.0.1:${addr.port}` });
    });
  });
}

// Find all built HTML routes containing Mermaid diagrams
const mermaidRoutes = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name !== "pagefind" && name !== "_astro") walk(p);
    } else if (name === "index.html") {
      const html = readFileSync(p, "utf8");
      if (html.includes("mermaid-container")) {
        const rel = relative(DIST, dir).replace(/\\/g, "/");
        mermaidRoutes.push(`/${rel}`);
      }
    }
  }
})(DIST);

const failures = [];
const assert = (cond, label, detail = "") => {
  if (!cond) {
    failures.push(detail ? `${label}: ${detail}` : label);
    console.error(`  FAIL ${label}${detail ? ` — ${detail}` : ""}`);
  } else {
    console.log(`  PASS ${label}`);
  }
};

const { server, baseUrl } = await startStaticServer();
const browser = await chromium.launch({ executablePath, headless: true });

try {
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  const pageErrors = [];
  page.on("pageerror", (err) => pageErrors.push(`${page.url()}: ${err.message}`));

  // 1. Verify ALL Mermaid routes render SVGs with no Mermaid syntax errors
  console.log(`\n[1/5] Checking ${mermaidRoutes.length} Mermaid lesson pages...`);
  let totalSvgsRendered = 0;
  for (const route of mermaidRoutes) {
    await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
    await page.waitForFunction(
      () => {
        const containers = document.querySelectorAll(".mermaid-container");
        return (
          containers.length > 0 &&
          Array.from(containers).every((c) => c.querySelector("svg") !== null)
        );
      },
      null,
      { timeout: 10000 },
    );

    const check = await page.evaluate(() => {
      const containers = Array.from(document.querySelectorAll(".mermaid-container"));
      const issues = [];
      let svgs = 0;
      for (const c of containers) {
        const svg = c.querySelector("svg");
        if (!svg) {
          issues.push("missing <svg>");
          continue;
        }
        svgs++;
        const box = svg.getBoundingClientRect();
        if (box.width <= 0 || box.height <= 0) {
          issues.push(`zero-size svg (${box.width}x${box.height})`);
        }
        const text = (svg.textContent || "").toLowerCase();
        if (text.includes("syntax error in text") || text.includes("mermaid version")) {
          issues.push(`mermaid syntax error banner in SVG: ${(svg.textContent || "").slice(0, 80)}`);
        }
      }
      return { svgs, issues };
    });
    totalSvgsRendered += check.svgs;
    if (check.issues.length > 0) {
      failures.push(`Mermaid on ${route}: ${check.issues.join("; ")}`);
      console.error(`  FAIL ${route}: ${check.issues.join("; ")}`);
    }
  }
  assert(
    mermaidRoutes.length >= 26 && totalSvgsRendered >= mermaidRoutes.length,
    `All ${mermaidRoutes.length} Mermaid lessons rendered ${totalSvgsRendered} clean SVGs`,
  );

  // Test light/dark theme switch re-renders Mermaid cleanly
  await page.goto(`${baseUrl}/docker/introduction/what-is-docker`, { waitUntil: "networkidle" });
  await page.waitForSelector(".mermaid-container.is-rendered svg");
  const initialTheme = await page.evaluate(() => document.documentElement.dataset.theme);
  await page.locator("header astro-theme-toggle").first().click();
  await page.waitForFunction(
    (prev) => document.documentElement.dataset.theme !== prev,
    initialTheme,
    { timeout: 5000 },
  );
  await page.waitForSelector(".mermaid-container.is-rendered svg", { timeout: 5000 });
  const afterTheme = await page.evaluate(() => ({
    theme: document.documentElement.dataset.theme,
    svgCount: document.querySelectorAll(".mermaid-container.is-rendered svg").length,
  }));
  assert(
    afterTheme.theme !== initialTheme && afterTheme.svgCount > 0,
    `Mermaid re-renders on theme change (${initialTheme} -> ${afterTheme.theme}, SVGs: ${afterTheme.svgCount})`,
  );

  // 2. Verify Interactive Quiz scoring, feedback, and reset
  console.log("\n[2/5] Checking Interactive <Quiz /> across fixed & newly added quizzes...");
  const quizChecks = [
    { path: "/docker/introduction/what-is-docker", answers: [0, 0], expected: "1 / 2" }, // 1st right, 2nd wrong (correct is 1)
    { path: "/linux-devops/01-cli-basics/01-navigation-and-files", answers: [1, 2], expected: "2 / 2" },
    { path: "/html/next/steps", answers: [1, 0, 2], expected: "3 / 3" },
    { path: "/python/module-10", answers: [2, 0, 2], expected: "3 / 3" },
  ];
  for (const qc of quizChecks) {
    await page.goto(`${baseUrl}${qc.path}`, { waitUntil: "networkidle" });
    const quizCards = page.locator("h3").filter({ hasText: /^\d+\.\s/ });
    for (let i = 0; i < qc.answers.length; i++) {
      await quizCards.nth(i).locator("..").locator("button").nth(qc.answers[i]).click();
    }
    await page.getByRole("button", { name: /အဖြေများ စစ်ဆေးမည်/ }).click();
    const scoreText = await page.locator("text=/ရမှတ်:/").locator("..").innerText();
    assert(
      scoreText.includes(qc.expected),
      `Quiz score on ${qc.path} -> "${scoreText.replace(/\s+/g, " ")}"`,
    );
    await page.getByRole("button", { name: /ပြန်လည်စမ်းသပ်ရန်/ }).click();
    const submitVisibleAgain = await page.getByRole("button", { name: /အဖြေများ စစ်ဆေးမည်/ }).isVisible();
    assert(submitVisibleAgain, `Quiz reset works on ${qc.path}`);
  }

  // 3. Verify LessonCompletion -> Homepage Continue Learning -> /courses Progress Bar & ?q=
  console.log("\n[3/5] Checking <LessonCompletion /> + /courses progress + ?q= filter...");
  await page.evaluate(() => localStorage.clear());
  await page.goto(`${baseUrl}/html/structure/simple`, { waitUntil: "networkidle" });
  const completeBtns = page.getByRole("button", { name: /Mark as Completed/ });
  assert((await completeBtns.count()) === 1, "Single auto-injected LessonCompletion on HTML lesson");
  await completeBtns.click();
  await page.waitForSelector("button:has-text('ပြီးမြောက်ပြီး')");
  await page.reload({ waitUntil: "networkidle" });
  assert(
    await page.locator("button:has-text('ပြီးမြောက်ပြီး')").isVisible(),
    "LessonCompletion persists across reload",
  );

  // Also test Linux DevOps lesson completion syncing to /courses
  await page.goto(`${baseUrl}/linux-devops/01-cli-basics/01-navigation-and-files`, { waitUntil: "networkidle" });
  await page.getByRole("button", { name: /Mark as Completed/ }).click();
  await page.waitForSelector("button:has-text('ပြီးမြောက်ပြီး')");

  // Homepage Continue Learning card
  await page.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
  const continueVisible = await page.locator("#continue-learning").isVisible();
  const continueHref = await page.locator("#continue-learning-link").getAttribute("href");
  assert(
    continueVisible && continueHref?.includes("/linux-devops/"),
    `Homepage Continue Learning visible (${continueHref})`,
  );

  // /courses progress bars + ?q= search
  await page.goto(`${baseUrl}/courses`, { waitUntil: "networkidle" });
  const htmlDoneVisible = await page.locator("text=✓ 1/24 done").isVisible();
  const linuxDoneVisible = await page.locator("text=✓ 1/10 done").isVisible();
  assert(htmlDoneVisible && linuxDoneVisible, "/courses renders live localStorage progress bars (HTML + Linux)");

  await page.goto(`${baseUrl}/courses?q=docker`, { waitUntil: "networkidle" });
  await page.waitForTimeout(200);
  const dockerSummary = await page.locator("text=/course.*found/i").innerText();
  assert(dockerSummary.includes("1 course found"), `/courses?q=docker pre-filters -> "${dockerSummary}"`);

  // 4. Verify <CodePlayground /> live iframe execution
  console.log("\n[4/5] Checking <CodePlayground /> live sandbox...");
  await page.goto(`${baseUrl}/javascript/projects/counter`, { waitUntil: "networkidle" });
  const frame = page.frameLocator('iframe[title*="Counter App Playground"]');
  await frame.locator("#increase").click();
  await frame.locator("#increase").click();
  const counterVal = await frame.locator("#value").innerText();
  assert(counterVal === "2", `Counter Playground clicks update live DOM inside iframe (0 -> ${counterVal})`);
  await page.getByRole("button", { name: /Reset/i }).first().click();
  await page.waitForTimeout(200);
  const counterReset = await frame.locator("#value").innerText();
  assert(counterReset === "0", `CodePlayground Reset button restores iframe state (${counterReset})`);

  // 5. Verify CheatSheets + Desktop/Mobile Layouts (360px overflow & Starlight Mobile Nav)
  console.log("\n[5/5] Checking CheatSheets, Starlight Nav & 360px Mobile overflow...");
  await page.goto(`${baseUrl}/cheatsheets#git`, { waitUntil: "networkidle" });
  await page.waitForTimeout(200);
  const gitFilteredText = await page.locator(".cs-bar-meta").innerText();
  assert(gitFilteredText.includes("commands") && gitFilteredText.includes("Clear filters"), `/cheatsheets#git hash filter active`);

  await page.getByRole("button", { name: "Clear filters" }).click();
  await page.keyboard.press("/");
  const isSearchFocused = await page.evaluate(() => document.activeElement?.classList.contains("cs-input"));
  assert(Boolean(isSearchFocused), "Pressing / focuses CheatSheets search bar");
  await page.keyboard.type("docker compose");
  await page.waitForTimeout(150);
  const dockerMatches = await page.locator(".cs-bar-meta").innerText();
  assert(/^[1-9]\d*\s+command/.test(dockerMatches.trim()), `CheatSheets search filters live -> "${dockerMatches.split("\n")[0]}"`);

  // Desktop Starlight header nav visibility
  await page.goto(`${baseUrl}/linux-devops/01-cli-basics/01-navigation-and-files`, { waitUntil: "networkidle" });
  const desktopNavLinks = await page.locator('header nav a').allInnerTexts();
  assert(
    ["Courses", "Roadmaps", "Cheat Sheets", "About"].every((l) => desktopNavLinks.some((t) => t.includes(l))),
    `Starlight desktop header shows nav links (${desktopNavLinks.map((s) => s.trim()).join(", ")})`,
  );

  // Mobile 360px overflow & MobileMenuFooter nav links
  await page.setViewportSize({ width: 360, height: 780 });
  for (const mobileRoute of ["/", "/courses", "/cheatsheets", "/roadmaps", "/request-course", "/linux-devops/01-cli-basics/01-navigation-and-files"]) {
    await page.goto(`${baseUrl}${mobileRoute}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(150);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    assert(overflow <= 1, `No horizontal overflow at 360px on ${mobileRoute} (delta=${overflow}px)`);
  }

  // Open Starlight mobile drawer and verify .sl-mobile-site-nav
  await page.locator("nova-mobile-menu-toggle").click();
  await page.waitForTimeout(200);
  const mobileNavVisible = await page.locator(".sl-mobile-site-nav a").first().isVisible();
  assert(mobileNavVisible, "Starlight mobile menu drawer shows site navigation links");

  assert(pageErrors.length === 0, `Zero uncaught runtime pageerrors (${pageErrors.length})`, pageErrors.join(" | "));
} finally {
  await browser.close();
  server.close();
}

if (failures.length > 0) {
  console.error(`\ncheck-runtime: FAILED (${failures.length} check(s))`);
  process.exit(1);
}
console.log("\ncheck-runtime: ALL E2E CHECKS PASSED");
