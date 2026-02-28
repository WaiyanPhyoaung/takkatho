import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const borderExample = new Proxy({"src":"/_astro/border.C8ect7UI.png","width":2014,"height":652,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/css/border.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Borders (ဘောင်များ)",
  "description": "ဘောင်ခတ်ခြင်းနှင့် ထောင့်ကွေးခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "border-style",
    "text": "Border Style"
  }, {
    "depth": 3,
    "slug": "border-radius-ထောင့်ကွေးခြင်း",
    "text": "Border Radius (ထောင့်ကွေးခြင်း)"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ဘောင်ခတ်မယ်",
      "set:html": "<p>Element တွေကို နယ်နိမိတ် သတ်မှတ်ဖို့ Border တွေ သုံးပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"border-style\">Border Style</h3><a class=\"sl-anchor-link\" href=\"#border-style\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Border Style”</span></a></div>\n<p>Border တစ်ခုမှာ အနည်းဆုံး (၃) ချက် ပြောပြရပါတယ်:</p>\n<ol>\n<li><strong>Width:</strong> ဘောင်အထူ (ဥပမာ - <code dir=\"auto\">1px</code>)</li>\n<li><strong>Style:</strong> ဘောင်ပုံစံ (<code dir=\"auto\">solid</code>, <code dir=\"auto\">dashed</code>, <code dir=\"auto\">dotted</code>)</li>\n<li><strong>Color:</strong> ဘောင်အရောင် (<code dir=\"auto\">red</code>, <code dir=\"auto\">#000</code>)</li>\n</ol>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.box</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">border</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">2</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#FF6D6D;--1:#984E4D\">solid</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#7FDBCA;--1:#096E72\">black</span><span style=\"--0:#D6DEEB;--1:#403F53\">; </span><span style=\"--0:#919F9F;--1:#5F636F\">/* 2px အထူ၊ မျဉ်းဖြောင့်၊ အမည်းရောင် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.dashed-box</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">border</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">2</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#FF6D6D;--1:#984E4D\">dashed</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#7FDBCA;--1:#096E72\">red</span><span style=\"--0:#D6DEEB;--1:#403F53\">; </span><span style=\"--0:#919F9F;--1:#5F636F\">/* မျဉ်းပြတ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".box {  border: 2px solid black; /* 2px အထူ၊ မျဉ်းဖြောင့်၊ အမည်းရောင် */}.dashed-box {  border: 2px dashed red; /* မျဉ်းပြတ် */}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"border-radius-ထောင့်ကွေးခြင်း\">Border Radius (ထောင့်ကွေးခြင်း)</h3><a class=\"sl-anchor-link\" href=\"#border-radius-ထောင့်ကွေးခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Border Radius (ထောင့်ကွေးခြင်း)”</span></a></div>\n<p>လေးထောင့်စွန်းတွေကို ဝိုင်းချင်ရင် <code dir=\"auto\">border-radius</code> သုံးပါတယ်။</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.card</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">border</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">1</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#FF6D6D;--1:#984E4D\">solid</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">#</span><span style=\"--0:#FFEB95\">ccc</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">border-radius</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">10</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">; </span><span style=\"--0:#919F9F;--1:#5F636F\">/* ထောင့်တွေကို 10px စာ ဝိုင်းမယ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.circle</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">width</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">100</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">height</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">100</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">border-radius</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">50</span><span style=\"--0:#FFEB95\">%</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">; </span><span style=\"--0:#919F9F;--1:#5F636F\">/* လုံးဝ အဝိုင်းဖြစ်သွားမယ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".card {  border: 1px solid #ccc;  border-radius: 10px; /* ထောင့်တွေကို 10px စာ ဝိုင်းမယ် */}.circle {  width: 100px;  height: 100px;  border-radius: 50%; /* လုံးဝ အဝိုင်းဖြစ်သွားမယ် */}\"><div></div></button></div></figure></div>\n"
    }), createVNode($$ContentImage, {
      src: borderExample,
      alt: "CSS Border Example"
    }), "\n", createVNode($$Aside, {
      type: "tip",
      "set:html": "<p>ခေတ်မီတဲ့ ဒီဇိုင်းတွေမှာ <code dir=\"auto\">border-radius</code> ကို သုံးပြီး နူးညံ့တဲ့ ခံစားမှု ပေးလေ့ရှိပါတယ်။\nButton တွေ၊ Card တွေမှာ အသုံးများပါတယ်။</p>"
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

const url = "src/content/docs/css/box-model/borders.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/css/box-model/borders.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/css/box-model/borders.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
