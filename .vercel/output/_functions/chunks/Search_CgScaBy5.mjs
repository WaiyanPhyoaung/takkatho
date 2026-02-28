import { c as createAstro, a as createComponent, b as renderTemplate, g as renderScript, r as renderComponent, m as maybeRenderHead, f as addAttribute } from './astro/server_Dso1QYyF.mjs';
import 'piccolore';
import { $ as $$Icon } from './Icon_CK40Z_jw.mjs';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://takkatho.dev");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const pagefindTranslations = {
    placeholder: Astro2.locals.t("search.label"),
    ...Object.fromEntries(
      Object.entries(Astro2.locals.t.all()).filter(([key]) => key.startsWith("pagefind.")).map(([key, value]) => [key.replace("pagefind.", ""), value])
    )
  };
  const dataAttributes = { "data-translations": JSON.stringify(pagefindTranslations) };
  return renderTemplate(_a || (_a = __template(["", "  <script>\n	(() => {\n		const openBtn = document.querySelector('button[data-open-modal]');\n		const shortcut = openBtn?.querySelector('kbd');\n		if (!openBtn || !(shortcut instanceof HTMLElement)) return;\n		const platformKey = shortcut.querySelector('kbd');\n		if (platformKey && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {\n			platformKey.textContent = '⌘';\n			openBtn.setAttribute('aria-keyshortcuts', 'Meta+K');\n		}\n		shortcut.style.display = '';\n	})();\n</script> ", "  "])), renderComponent($$result, "site-search", "site-search", { "class": (Astro2.props.class ?? "") + " astro-v37mnknz", ...dataAttributes }, { "default": () => renderTemplate` ${maybeRenderHead()}<button data-open-modal disabled${addAttribute(Astro2.locals.t("search.label"), "aria-label")} aria-keyshortcuts="Control+K" class="astro-v37mnknz"> ${renderComponent($$result, "Icon", $$Icon, { "name": "magnifier", "class": "astro-v37mnknz" })} <span class="sl-hidden md:sl-block astro-v37mnknz" aria-hidden="true">${Astro2.locals.t("search.label")}</span> <kbd class="sl-hidden md:sl-flex astro-v37mnknz" style="display: none;"> <kbd class="astro-v37mnknz">${Astro2.locals.t("search.ctrlKey")}</kbd><kbd class="astro-v37mnknz">K</kbd> </kbd> </button> <dialog style="padding:0"${addAttribute(Astro2.locals.t("search.label"), "aria-label")} class="astro-v37mnknz"> <div class="dialog-frame sl-flex astro-v37mnknz">  <button data-close-modal class="sl-flex md:sl-hidden astro-v37mnknz"> ${Astro2.locals.t("search.cancelLabel")} </button> ${renderTemplate`<div class="search-container astro-v37mnknz"> <div id="starlight__search" class="astro-v37mnknz"></div> </div>`} </div> </dialog> ` }), renderScript($$result, "/Users/waiyanphyoaung/code/waiyanphyoaung/node_modules/@astrojs/starlight/components/Search.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/waiyanphyoaung/code/waiyanphyoaung/node_modules/@astrojs/starlight/components/Search.astro", void 0);

export { $$Search as $ };
