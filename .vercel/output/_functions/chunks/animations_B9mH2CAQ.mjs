import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "Animations (လှုပ်ရှားမှုများ)",
  "description": "Keyframes အသုံးပြု၍ Animation ဖန်တီးခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "step-1-keyframes-ကြေညာခြင်း",
    "text": "Step 1: Keyframes ကြေညာခြင်း"
  }, {
    "depth": 3,
    "slug": "step-2-animation-ကို-ခေါ်သုံးခြင်း",
    "text": "Step 2: Animation ကို ခေါ်သုံးခြင်း"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရုပ်ရှင်ရိုက်မယ်",
      "set:html": "<p>Transition က A ကနေ B ကို ပြောင်းရုံပဲ ရပါတယ်။\nAnimation ကတော့ A -> B -> C -> D ဆိုပြီး အဆင့်ဆင့် ပြောင်းလဲလို့ ရပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"step-1-keyframes-ကြေညာခြင်း\">Step 1: Keyframes ကြေညာခြင်း</h3><a class=\"sl-anchor-link\" href=\"#step-1-keyframes-ကြေညာခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Step 1: Keyframes ကြေညာခြင်း”</span></a></div>\n<p>အရင်ဆုံး Animation ဇာတ်ညွှန်း (Keyframes) ရေးရပါတယ်။ နာမည်တစ်ခု ပေးရပါမယ်။</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">@keyframes</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\"> </span><span style=\"--0:#D7DBE0\">bounce</span><span style=\"--0:#D6DEEB\"> {</span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">0% {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#80CBC4;--1:#096E72\">transform</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#C5E478;--1:#3B61B0\">translateY</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">50% {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#80CBC4;--1:#096E72\">transform</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#C5E478;--1:#3B61B0\">translateY</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">-20</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">); </span><span style=\"--0:#919F9F;--1:#5F636F\">/* အပေါ် ခုန်တက် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">100% {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#80CBC4;--1:#096E72\">transform</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#C5E478;--1:#3B61B0\">translateY</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">); </span><span style=\"--0:#919F9F;--1:#5F636F\">/* ပြန်ကျ */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"@keyframes bounce {  0% {    transform: translateY(0);  }  50% {    transform: translateY(-20px); /* အပေါ် ခုန်တက် */  }  100% {    transform: translateY(0); /* ပြန်ကျ */  }}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"step-2-animation-ကို-ခေါ်သုံးခြင်း\">Step 2: Animation ကို ခေါ်သုံးခြင်း</h3><a class=\"sl-anchor-link\" href=\"#step-2-animation-ကို-ခေါ်သုံးခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Step 2: Animation ကို ခေါ်သုံးခြင်း”</span></a></div>\n<p>Element မှာ <code dir=\"auto\">animation</code> property နဲ့ ချိတ်ဆက်ရပါမယ်။</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.ball</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">width</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">50</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">height</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">50</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">background-color</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#7FDBCA;--1:#096E72\">red</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">border-radius</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">50</span><span style=\"--0:#FFEB95\">%</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5F636F\">/* Name, Duration, Timing, Iteration */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">animation</span><span style=\"--0:#D6DEEB;--1:#403F53\">: bounce </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">1</span><span style=\"--0:#FFEB95\">s</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#FF6D6D;--1:#984E4D\">infinite</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".ball {  width: 50px;  height: 50px;  background-color: red;  border-radius: 50%;  /* Name, Duration, Timing, Iteration */  animation: bounce 1s infinite;}\"><div></div></button></div></figure></div>\n<ul>\n<li><strong>bounce:</strong> Keyframe နာမည်။</li>\n<li><strong>1s:</strong> တစ်ခါလုပ်ရင် ၁ စက္ကန့် ကြာမယ်။</li>\n<li><strong>infinite:</strong> အဆုံးမရှိ လုပ်နေမယ် (Loop)။</li>\n<li><strong>alternate:</strong> (Optional) အသွားအပြန် လုပ်မယ် (ဥပမာ - ကြီးလိုက် သေးလိုက်)။</li>\n</ul>\n"
    }), createVNode($$Aside, {
      type: "tip",
      "set:html": "<p>Animation တွေက CPU/GPU ကို သုံးတဲ့အတွက် လိုအပ်မှသာ သုံးပါ။ အများကြီးသုံးရင် Site လေးသွားနိုင်ပါတယ်။</p>"
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

const url = "src/content/docs/css/interactivity/animations.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/css/interactivity/animations.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/css/interactivity/animations.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
