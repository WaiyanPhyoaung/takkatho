import { a as createComponent, c as createAstro, m as maybeRenderHead, f as addAttribute, b as renderTemplate, r as renderComponent } from './astro/server_Dso1QYyF.mjs';
import 'piccolore';
import { $ as $$Image } from './_astro_assets_BIClmwXi.mjs';

const $$Astro = createAstro("https://takkatho.dev");
const $$ContentImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContentImage;
  const { src, alt, width, height } = Astro2.props;
  const isGif = typeof src === "string" && src.toLowerCase().endsWith(".gif") || typeof src === "object" && "format" in src && src.format === "gif";
  const imageSrc = typeof src === "string" ? src : src.src;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center p-4"> ${isGif ? renderTemplate`<img${addAttribute(imageSrc, "src")}${addAttribute(alt, "alt")}${addAttribute(width ? Number(width) : void 0, "width")}${addAttribute(height ? Number(height) : void 0, "height")}>` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "width": width ? Number(width) : void 0, "height": height ? Number(height) : void 0 })}`} </div>`;
}, "/Users/waiyanphyoaung/code/waiyanphyoaung/src/components/Content-image.astro", void 0);

export { $$ContentImage as $ };
