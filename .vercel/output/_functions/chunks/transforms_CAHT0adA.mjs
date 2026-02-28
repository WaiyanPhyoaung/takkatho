import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const transformExample = new Proxy({"src":"/_astro/transform.CZYI-asY.png","width":1841,"height":489,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/css/transform.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Transforms (ပုံသဏ္ဍာန်ပြောင်းခြင်း)",
  "description": "Element များကို လှည့်ခြင်း၊ ချဲ့ခြင်း၊ ရွှေ့ခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "1-rotate-လှည့်ခြင်း",
    "text": "1. Rotate (လှည့်ခြင်း)"
  }, {
    "depth": 3,
    "slug": "2-scale-ချဲ့ခြင်းချုံ့ခြင်း",
    "text": "2. Scale (ချဲ့ခြင်း/ချုံ့ခြင်း)"
  }, {
    "depth": 3,
    "slug": "3-translate-နေရာရွှေ့ခြင်း",
    "text": "3. Translate (နေရာရွှေ့ခြင်း)"
  }, {
    "depth": 3,
    "slug": "4-skew-ရွဲ့ခြင်း",
    "text": "4. Skew (ရွဲ့ခြင်း)"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ပုံစံပြောင်းမယ်",
      "set:html": "<p>Element တွေကို နေရာမရွှေ့ဘဲ ပုံစံပြောင်းချင်ရင် (လှည့်တာ၊ ကြီးတာ) <code dir=\"auto\">transform</code> ကို သုံးပါတယ်။\nဒါက Layout ကို မထိခိုက်စေပါဘူး။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"1-rotate-လှည့်ခြင်း\">1. Rotate (လှည့်ခြင်း)</h3><a class=\"sl-anchor-link\" href=\"#1-rotate-လှည့်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “1. Rotate (လှည့်ခြင်း)”</span></a></div>\n<p>ဒီဂရီ (<code dir=\"auto\">deg</code>) နဲ့ သတ်မှတ်ရပါတယ်။</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.box:hover</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">transform</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#C5E478;--1:#3B61B0\">rotate</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">45</span><span style=\"--0:#FFEB95\">deg</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">); </span><span style=\"--0:#919F9F;--1:#5F636F\">/* ၄၅ ဒီဂရီ လှည့်မယ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".box:hover {  transform: rotate(45deg); /* ၄၅ ဒီဂရီ လှည့်မယ် */}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"2-scale-ချဲ့ခြင်းချုံ့ခြင်း\">2. Scale (ချဲ့ခြင်း/ချုံ့ခြင်း)</h3><a class=\"sl-anchor-link\" href=\"#2-scale-ချဲ့ခြင်းချုံ့ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “2. Scale (ချဲ့ခြင်း/ချုံ့ခြင်း)”</span></a></div>\n<p>မူလအရွယ်အစားက <code dir=\"auto\">1</code> ပါ။ <code dir=\"auto\">1</code> ထက်ကြီးရင် ကြီးမယ်၊ ငယ်ရင် သေးမယ်။</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.box:hover</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">transform</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#C5E478;--1:#3B61B0\">scale</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">1.2</span><span style=\"--0:#D6DEEB;--1:#403F53\">); </span><span style=\"--0:#919F9F;--1:#5F636F\">/* ၂၀% ပိုကြီးသွားမယ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".box:hover {  transform: scale(1.2); /* ၂၀% ပိုကြီးသွားမယ် */}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"3-translate-နေရာရွှေ့ခြင်း\">3. Translate (နေရာရွှေ့ခြင်း)</h3><a class=\"sl-anchor-link\" href=\"#3-translate-နေရာရွှေ့ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “3. Translate (နေရာရွှေ့ခြင်း)”</span></a></div>\n<p><code dir=\"auto\">position: relative</code> နဲ့ ရွှေ့တာနဲ့ တူပေမယ့်၊ <code dir=\"auto\">transform</code> က Performance ပိုကောင်းပါတယ်။ Animation လုပ်ရင် ဒါကို သုံးသင့်ပါတယ်။</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.box:hover</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">transform</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#C5E478;--1:#3B61B0\">translateY</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">-10</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">); </span><span style=\"--0:#919F9F;--1:#5F636F\">/* အပေါ်ကို 10px တက်သွားမယ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".box:hover {  transform: translateY(-10px); /* အပေါ်ကို 10px တက်သွားမယ် */}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"4-skew-ရွဲ့ခြင်း\">4. Skew (ရွဲ့ခြင်း)</h3><a class=\"sl-anchor-link\" href=\"#4-skew-ရွဲ့ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “4. Skew (ရွဲ့ခြင်း)”</span></a></div>\n<p>Element ကို စောင်းသွားအောင် လုပ်တာပါ။</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.box</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">transform</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#C5E478;--1:#3B61B0\">skewX</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">20</span><span style=\"--0:#FFEB95\">deg</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".box {  transform: skewX(20deg);}\"><div></div></button></div></figure></div>\n"
    }), createVNode($$ContentImage, {
      src: transformExample,
      alt: "CSS Transform Examples"
    }), "\n", createVNode($$Aside, {
      type: "tip",
      "set:html": "<p><strong>Transition နဲ့ တွဲသုံးပါ:</strong>\nTransform တွေကို Transition နဲ့ တွဲသုံးလိုက်ရင် အရမ်းမိုက်တဲ့ Effect တွေ ရပါတယ်။\nဥပမာ - Card ကို Hover လုပ်ရင် အပေါ်နည်းနည်း ကြွတက်လာတာမျိုး။</p><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.card</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">transition</span><span style=\"--0:#D6DEEB;--1:#403F53\">: transform </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">0.3</span><span style=\"--0:#FFEB95\">s</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.card:hover</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">transform</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#C5E478;--1:#3B61B0\">translateY</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">-10</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".card {  transition: transform 0.3s;}.card:hover {  transform: translateY(-10px);}\"><div></div></button></div></figure></div>"
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

const url = "src/content/docs/css/interactivity/transforms.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/css/interactivity/transforms.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/css/interactivity/transforms.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
