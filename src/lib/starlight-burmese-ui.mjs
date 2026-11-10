import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";

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
        // translations/en.json is not in Starlight's package exports, so
        // resolve the package entry point and read the file beside it.
        const require = createRequire(import.meta.url);
        const starlightDir = dirname(require.resolve("@astrojs/starlight"));
        const en = JSON.parse(
          readFileSync(join(starlightDir, "translations", "en.json"), "utf8"),
        );
        injectTranslations({ my: en });
      },
    },
  };
}
