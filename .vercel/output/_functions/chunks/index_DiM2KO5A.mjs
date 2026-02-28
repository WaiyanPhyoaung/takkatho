import { c as createAstro, a as createComponent, r as renderComponent, g as renderScript, b as renderTemplate } from './astro/server_Dso1QYyF.mjs';
import 'piccolore';

const $$Astro = createAstro("https://takkatho.dev");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/Users/waiyanphyoaung/code/waiyanphyoaung/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/waiyanphyoaung/code/waiyanphyoaung/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

export { $$Index as $ };
