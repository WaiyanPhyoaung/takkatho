import { existsSync, readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";

/**
 * Starlight plugin: gives the Burmese ("my") locale Starlight's English
 * interface strings.
 *
 * The lessons declare lang="my" so screen readers read them with a Burmese
 * voice. Starlight ships no Burmese interface translations, and it only falls
 * back to the site's own default language, which is now "my". Without this
 * plugin every page shows raw keys such as "search.label" and
 * "tableOfContents.onThisPage".
 *
 * The strings are read from the installed Starlight at build time, so keys
 * added by a future Starlight upgrade are picked up without editing anything.
 * To translate some of them into Burmese, override them after the spread, e.g.
 *   injectTranslations({ my: { ...en, "search.label": "ရှာရန်" } });
 */
export function burmeseUiStrings() {
  return {
    name: "takkatho-burmese-ui-strings",
    hooks: {
      // Starlight rejects plugins without this hook; there is nothing to configure.
      "config:setup"() {},
      "i18n:setup"({ injectTranslations }) {
        injectTranslations({ my: loadStarlightEnglish() });
      },
    },
  };
}

/**
 * Starlight's English strings are not in its package exports, and their
 * location changed between versions (translations/en.json up to 0.37,
 * dist/translations/en.js from 0.42). Find the package folder through Node's
 * module search paths, which ignore the exports map, then read whichever
 * file this version ships.
 *
 * Uses Node's own require, not import(): Astro 7 loads this file through
 * Vite's module runner and closes it before plugin hooks run, so an import()
 * here fails with "Vite module runner has been closed". Requiring an ES module
 * is supported from Node 22.12; package.json pins Node 26.
 */
export function loadStarlightEnglish() {
  const require = createRequire(import.meta.url);
  const packageDir = (require.resolve.paths("@astrojs/starlight") ?? [])
    .map((dir) => join(dir, "@astrojs", "starlight"))
    .find((dir) => existsSync(join(dir, "package.json")));
  if (!packageDir) throw new Error("burmeseUiStrings: @astrojs/starlight is not installed.");

  const moduleFile = join(packageDir, "dist", "translations", "en.js");
  if (existsSync(moduleFile)) {
    return require(moduleFile).default;
  }
  const jsonFile = join(packageDir, "translations", "en.json");
  if (existsSync(jsonFile)) {
    return JSON.parse(readFileSync(jsonFile, "utf8"));
  }
  throw new Error(
    `burmeseUiStrings: no English strings found in ${packageDir}. ` +
      "Starlight may have moved them again; check its dist/translations folder.",
  );
}
