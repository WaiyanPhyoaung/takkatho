import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "field-sizing Property",
  "description": "Form element များ၏ အရွယ်အစားကို Content အလိုက် အလိုအလျောက် ချိန်ညှိခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "အသုံးပြုပုံ",
    "text": "အသုံးပြုပုံ"
  }, {
    "depth": 3,
    "slug": "ဘာတွေ-ကောင်းသွားလဲ",
    "text": "ဘာတွေ ကောင်းသွားလဲ?"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "No More JavaScript Hacks",
      "set:html": "<p>အရင်တုန်းက Textarea တစ်ခုကို စာရိုက်ရင် အလိုအလျောက် ကြီးလာအောင်လုပ်ဖို့ JavaScript တွေ သုံးခဲ့ရပါတယ်။ အခု CSS တစ်ကြောင်းတည်းနဲ့ ရပါပြီ။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အသုံးပြုပုံ\">အသုံးပြုပုံ</h3><a class=\"sl-anchor-link\" href=\"#အသုံးပြုပုံ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အသုံးပြုပုံ”</span></a></div>\n<p><code dir=\"auto\">field-sizing</code> property ဟာ input, textarea နဲ့ select element တွေရဲ့ အရွယ်အစားကို သူတို့ရဲ့ content ပေါ်မူတည်ပြီး ပြောင်းလဲပေးပါတယ်။</p>\n<ul>\n<li><code dir=\"auto\">fixed</code>: (Default) ပုံသေ အရွယ်အစား (အရင်လိုပဲ)။</li>\n<li><code dir=\"auto\">content</code>: အတွင်းက စာသား (Content) အနည်းအများပေါ် မူတည်ပြီး ကြီးမယ်၊ သေးမယ်။</li>\n</ul>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#FF6D6D;--1:#984E4D\">textarea</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5F636F\">/* စာရိုက်လိုက်ရင် အောက်ကို ရှည်ထွက်လာမယ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">field-sizing</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6D6D;--1:#984E4D\">content</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5F636F\">/* အနည်းဆုံးနဲ့ အများဆုံး အမြင့် သတ်မှတ်ပေးသင့်ပါတယ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">min-height</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">40</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">max-height</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">200</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#FF6D6D;--1:#984E4D\">input</span><span style=\"--0:#C792EA;--1:#8844AE\">[</span><span style=\"--0:#C5E478;--1:#3B61B0\">type</span><span style=\"--0:#7FDBCA;--1:#096E72\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">text</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C792EA;--1:#8844AE\">]</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5F636F\">/* စာရိုက်ရင် ဘေးကို ရှည်ထွက်လာမယ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">field-sizing</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6D6D;--1:#984E4D\">content</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">min-width</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">100</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"textarea {  /* စာရိုက်လိုက်ရင် အောက်ကို ရှည်ထွက်လာမယ် */  field-sizing: content;  /* အနည်းဆုံးနဲ့ အများဆုံး အမြင့် သတ်မှတ်ပေးသင့်ပါတယ် */  min-height: 40px;  max-height: 200px;}input[type=&#x22;text&#x22;] {  /* စာရိုက်ရင် ဘေးကို ရှည်ထွက်လာမယ် */  field-sizing: content;  min-width: 100px;}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဘာတွေ-ကောင်းသွားလဲ\">ဘာတွေ ကောင်းသွားလဲ?</h3><a class=\"sl-anchor-link\" href=\"#ဘာတွေ-ကောင်းသွားလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘာတွေ ကောင်းသွားလဲ?”</span></a></div>\n<ol>\n<li><strong>Performance:</strong> JavaScript event listener တွေ မလိုတော့လို့ ပိုမြန်တယ်။</li>\n<li><strong>UX:</strong> User က စာရိုက်နေရင်း scroll bar ပေါ်လာတာမျိုး မကြုံရတော့ဘူး။</li>\n<li><strong>Simplicity:</strong> Code တစ်ကြောင်းတည်းနဲ့ ပြီးတယ်။</li>\n</ol>"
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

const url = "src/content/docs/advanced-css/layout-sizing/field-sizing.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-css/layout-sizing/field-sizing.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-css/layout-sizing/field-sizing.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
