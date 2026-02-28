import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const boxShadowImg = new Proxy({"src":"/_astro/box-shadow.1dS9Wn3o.png","width":780,"height":378,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/css/box-shadow.png";
							}
							
							return target[name];
						}
					});

const textShadowImg = new Proxy({"src":"/_astro/text-shadow.hTO8WmV0.png","width":720,"height":240,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/css/text-shadow.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Shadows (အရိပ်များ)",
  "description": "Element များကို ကြွတက်လာအောင် ပြုလုပ်ခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "box-shadow",
    "text": "Box Shadow"
  }, {
    "depth": 3,
    "slug": "text-shadow-စာလုံး-အရိပ်",
    "text": "Text Shadow (စာလုံး အရိပ်)"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "3D ခံစားမှု",
      "set:html": "<p>အရိပ် (Shadow) ထည့်လိုက်ရင် ပြားကပ်နေတဲ့ 2D ဒီဇိုင်းကနေ ကြွတက်လာတဲ့ 3D ခံစားမှုကို ရစေပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"box-shadow\">Box Shadow</h3><a class=\"sl-anchor-link\" href=\"#box-shadow\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Box Shadow”</span></a></div>\n<p>Element တစ်ခုလုံးကို အရိပ်ချတာပါ။\nတန်ဖိုး (၄) ခု နဲ့ အရောင် လိုပါတယ်။\n<code dir=\"auto\">offset-x</code> (ဘယ်ညာ), <code dir=\"auto\">offset-y</code> (အပေါ်အောက်), <code dir=\"auto\">blur-radius</code> (ဝါးမယ့်ပမာဏ), <code dir=\"auto\">spread-radius</code> (အရိပ်အရွယ်အစား - Optional)</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.card</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5F636F\">/* x-offset, y-offset, blur, color */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">box-shadow</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">5</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">5</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">10</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">rgba</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">0.2</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">padding</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">10</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">border-radius</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">5</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".card {  /* x-offset, y-offset, blur, color */  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);  padding: 10px;  border-radius: 5px;}\"><div></div></button></div></figure></div>\n<ul>\n<li><strong>5px (x):</strong> ညာဘက်ကို 5px ရွေ့မယ်။</li>\n<li><strong>5px (y):</strong> အောက်ဘက်ကို 5px ရွေ့မယ်။</li>\n<li><strong>10px (blur):</strong> အရိပ်ကို ဝါးဝါးလေး ဖြစ်စေမယ် (ဒါမှ သဘာဝကျမှာပါ)။</li>\n<li><strong>rgba(…):</strong> အရောင် (အမည်းရောင်ကို Opacity 0.2 နဲ့ သုံးတာ ပိုလှပါတယ်)။</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: boxShadowImg,
      alt: "Box Shadow Example"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"text-shadow-စာလုံး-အရိပ်\">Text Shadow (စာလုံး အရိပ်)</h3><a class=\"sl-anchor-link\" href=\"#text-shadow-စာလုံး-အရိပ်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Text Shadow (စာလုံး အရိပ်)”</span></a></div>\n<p>စာသားတွေကို အရိပ်ချတာပါ။ ခေါင်းစဉ်ကြီးတွေမှာ သုံးရင် လှပါတယ်။</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#FF6D6D;--1:#984E4D\">h1</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">text-shadow</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">2</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">2</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">4</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">#</span><span style=\"--0:#FFEB95\">000000</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"h1 {  text-shadow: 2px 2px 4px #000000;}\"><div></div></button></div></figure></div>\n"
    }), createVNode($$ContentImage, {
      src: textShadowImg,
      alt: "Text Shadow Example"
    }), "\n", createVNode($$Aside, {
      type: "tip",
      "set:html": "<p><strong>Soft Shadow:</strong> ခေတ်မီတဲ့ ဒီဇိုင်းတွေမှာ အရိပ်ကို မည်းမည်းကြီး မသုံးဘဲ၊ ဝါးဝါးလေးနဲ့ ကျယ်ကျယ်လေး (Large Blur, Low Opacity) သုံးတာ ပိုပြီး Modern ဖြစ်ပါတယ်။</p>"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/docs/css/effects/shadows.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/css/effects/shadows.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/css/effects/shadows.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
