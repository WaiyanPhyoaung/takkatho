import { c as createAstro, a as createComponent, e as renderHead, d as renderSlot, r as renderComponent, b as renderTemplate } from './astro/server_Dso1QYyF.mjs';
import 'piccolore';
import { $ as $$Index$1 } from './index_hH86I2-_.mjs';
import { $ as $$Index } from './index_DiM2KO5A.mjs';
/* empty css                         */

const $$Astro = createAstro("https://takkatho.dev");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { frontmatter, headings, slug } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Astro</title><link rel="icon" href="/favicon.svg">${renderHead()}</head> <body class="min-h-screen bg-white m-0 p-2 text-gray-900"> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "SpeedInsights", $$Index, {})} ${renderComponent($$result, "Analytics", $$Index$1, {})} </body></html>`;
}, "/Users/waiyanphyoaung/code/waiyanphyoaung/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $ };
