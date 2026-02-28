import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "Anchor Positioning",
  "description": "Element များကို အခြား Element တစ်ခုအား မှီခို၍ နေရာချခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "အခြေခံ-သဘောတရား",
    "text": "အခြေခံ သဘောတရား"
  }, {
    "depth": 3,
    "slug": "code-ဥပမာ",
    "text": "Code ဥပမာ"
  }, {
    "depth": 3,
    "slug": "fallback-နေရာမလောက်ရင်-ဘာလုပ်မလဲ",
    "text": "Fallback (နေရာမလောက်ရင် ဘာလုပ်မလဲ?)"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "Tooltips & Popovers Made Easy",
      "set:html": "<p>Tooltip တွေ၊ Dropdown Menu တွေကို သက်ဆိုင်ရာ Button နားမှာ ကပ်ထားဖို့ အရင်က JavaScript (Popper.js, Floating UI) လိုအပ်ပါတယ်။ အခု CSS Native ရပါပြီ။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အခြေခံ-သဘောတရား\">အခြေခံ သဘောတရား</h3><a class=\"sl-anchor-link\" href=\"#အခြေခံ-သဘောတရား\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အခြေခံ သဘောတရား”</span></a></div>\n<ol>\n<li><strong>Anchor Element:</strong> မှီခိုအားထားရမယ့် တိုင် (ဥပမာ - Button)။ <code dir=\"auto\">anchor-name</code> ပေးရမယ်။</li>\n<li><strong>Positioned Element:</strong> ကပ်မယ့် ကောင် (ဥပမာ - Tooltip)။ <code dir=\"auto\">position-anchor</code> နဲ့ ချိတ်ရမယ်။</li>\n</ol>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"code-ဥပမာ\">Code ဥပမာ</h3><a class=\"sl-anchor-link\" href=\"#code-ဥပမာ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Code ဥပမာ”</span></a></div>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">/* 1. Anchor (Button) */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.trigger-btn</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">anchor-name</span><span style=\"--0:#D6DEEB;--1:#403F53\">: --my-anchor;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">/* 2. Positioned Element (Tooltip) */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.tooltip</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">position</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6D6D;--1:#984E4D\">absolute</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">position-anchor</span><span style=\"--0:#D6DEEB;--1:#403F53\">: --my-anchor; </span><span style=\"--0:#919F9F;--1:#5F636F\">/* Button ကို လှမ်းချိတ် */</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5F636F\">/* Button ရဲ့ အပေါ် (top) မှာ ကပ်မယ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">bottom</span><span style=\"--0:#D6DEEB;--1:#403F53\">: anchor(</span><span style=\"--0:#FF6D6D;--1:#984E4D\">top</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5F636F\">/* Button ရဲ့ အလယ် (center) နဲ့ ညှိမယ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">left</span><span style=\"--0:#D6DEEB;--1:#403F53\">: anchor(</span><span style=\"--0:#FF6D6D;--1:#984E4D\">center</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">transform</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#C5E478;--1:#3B61B0\">translateX</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">-50</span><span style=\"--0:#FFEB95\">%</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"/* 1. Anchor (Button) */.trigger-btn {  anchor-name: --my-anchor;}/* 2. Positioned Element (Tooltip) */.tooltip {  position: absolute;  position-anchor: --my-anchor; /* Button ကို လှမ်းချိတ် */  /* Button ရဲ့ အပေါ် (top) မှာ ကပ်မယ် */  bottom: anchor(top);  /* Button ရဲ့ အလယ် (center) နဲ့ ညှိမယ် */  left: anchor(center);  transform: translateX(-50%);}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"fallback-နေရာမလောက်ရင်-ဘာလုပ်မလဲ\">Fallback (နေရာမလောက်ရင် ဘာလုပ်မလဲ?)</h3><a class=\"sl-anchor-link\" href=\"#fallback-နေရာမလောက်ရင်-ဘာလုပ်မလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Fallback (နေရာမလောက်ရင် ဘာလုပ်မလဲ?)”</span></a></div>\n<p>Screen အဆုံးရောက်နေလို့ Tooltip ပြစရာနေရာမရှိရင် အလိုအလျောက် နေရာရွှေ့ဖို့ <code dir=\"auto\">@position-try</code> ကို သုံးနိုင်ပါတယ်။</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.tooltip</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5F636F\">/* ပုံမှန်ဆို အပေါ်မှာ ပြမယ်၊ မရရင် အောက်မှာ ပြမယ် (flip-block) */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">position-try-fallbacks</span><span style=\"--0:#D6DEEB;--1:#403F53\">: flip-block;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".tooltip {  /* ပုံမှန်ဆို အပေါ်မှာ ပြမယ်၊ မရရင် အောက်မှာ ပြမယ် (flip-block) */  position-try-fallbacks: flip-block;}\"><div></div></button></div></figure></div>\n"
    }), createVNode($$Aside, {
      type: "tip",
      "set:html": "<p>DOM Structure အရ Button နဲ့ Tooltip က အဝေးကြီး ဖြစ်နေလည်း (ဥပမာ - Tooltip က <code dir=\"auto\">&#x3C;body></code> အောက်ဆုံးမှာ ရှိနေလည်း) ဒီနည်းနဲ့ လှမ်းချိတ်လို့ ရပါတယ်။</p>"
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

const url = "src/content/docs/advanced-css/layout-sizing/anchor-positioning.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-css/layout-sizing/anchor-positioning.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-css/layout-sizing/anchor-positioning.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
