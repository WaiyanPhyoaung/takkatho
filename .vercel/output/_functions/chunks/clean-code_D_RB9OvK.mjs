import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import 'clsx';

const frontmatter = {
  "title": "Writing Clean JavaScript",
  "description": "Code ကောင်း ရေးသားနည်း"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "1-naming-conventions-နာမည်ပေးခြင်း",
    "text": "1. Naming Conventions (နာမည်ပေးခြင်း)"
  }, {
    "depth": 2,
    "slug": "2-comments-မှတ်ချက်-ရေးခြင်း",
    "text": "2. Comments (မှတ်ချက် ရေးခြင်း)"
  }, {
    "depth": 2,
    "slug": "3-formatting-သပ်ရပ်မှု",
    "text": "3. Formatting (သပ်ရပ်မှု)"
  }, {
    "depth": 2,
    "slug": "4-dont-repeat-yourself-dry",
    "text": "4. Don’t Repeat Yourself (DRY)"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>Code ရေးတယ်ဆိုတာ ကွန်ပျူတာ နားလည်ဖို့တင် မဟုတ်ပါဘူး။ လူ (ကိုယ့်ကိုယ်တိုင်နဲ့ တခြား Developer တွေ) နားလည်ဖို့လည်း အရေးကြီးပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"1-naming-conventions-နာမည်ပေးခြင်း\">1. Naming Conventions (နာမည်ပေးခြင်း)</h2><a class=\"sl-anchor-link\" href=\"#1-naming-conventions-နာမည်ပေးခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “1. Naming Conventions (နာမည်ပေးခြင်း)”</span></a></div>\n<p>နာမည်ပေးတဲ့အခါ အဓိပ္ပာယ်ရှိတဲ့ နာမည် ပေးရပါမယ်။ <strong>CamelCase</strong> ကို သုံးတာ Standard ပါ။</p>\n<ul>\n<li>❌ <code dir=\"auto\">let x = 10;</code> (ဘာ ၁၀ လဲ မသိရဘူး)</li>\n<li>✅ <code dir=\"auto\">let studentAge = 10;</code> (ရှင်းလင်းတယ်)</li>\n<li>❌ <code dir=\"auto\">function abc() {}</code></li>\n<li>✅ <code dir=\"auto\">function calculateTax() {}</code></li>\n</ul>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"2-comments-မှတ်ချက်-ရေးခြင်း\">2. Comments (မှတ်ချက် ရေးခြင်း)</h2><a class=\"sl-anchor-link\" href=\"#2-comments-မှတ်ချက်-ရေးခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “2. Comments (မှတ်ချက် ရေးခြင်း)”</span></a></div>\n<p>Code က ဘာလုပ်တာလဲ ဆိုတာကို ရှင်းပြထားသင့်ပါတယ်။ ဒါပေမဲ့ လိုအပ်မှ ရေးပါ။ Code က သူ့ဟာသူ ရှင်းနေရင် မလိုပါဘူး။</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// Good Comment: ဘာကြောင့် ဒီလိုရေးရလဲ ရှင်းပြတာ</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// We use 3.14 because simpler precision is enough here</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">pi</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#F78C6C;--1:#AA0982\">3.14</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// Bad Comment: ကုဒ်က ဘာလုပ်လဲ ဆိုတာ လိုက်ပြောနေတာ (Code ဖတ်ရင် သိတာကို)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">let </span><span style=\"--0:#D7DBE0;--1:#403F53\">age</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#F78C6C;--1:#AA0982\">20</span><span style=\"--0:#D6DEEB;--1:#403F53\">; </span><span style=\"--0:#919F9F;--1:#5D6376\">// set age to 20 (မလိုပါဘူး)</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"// Good Comment: ဘာကြောင့် ဒီလိုရေးရလဲ ရှင်းပြတာ// We use 3.14 because simpler precision is enough hereconst pi = 3.14;// Bad Comment: ကုဒ်က ဘာလုပ်လဲ ဆိုတာ လိုက်ပြောနေတာ (Code ဖတ်ရင် သိတာကို)let age = 20; // set age to 20 (မလိုပါဘူး)\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"3-formatting-သပ်ရပ်မှု\">3. Formatting (သပ်ရပ်မှု)</h2><a class=\"sl-anchor-link\" href=\"#3-formatting-သပ်ရပ်မှု\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “3. Formatting (သပ်ရပ်မှု)”</span></a></div>\n<p><code dir=\"auto\">{}</code> တွေ၊ နေရာခြားတာ (Indentation) တွေကို သပ်ရပ်အောင် ထားပါ။\n<strong>Prettier</strong> လို Extension မျိုး သုံးရင် အလိုအလျောက် လုပ်ပေးသွားပါလိမ့်မယ်။</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"4-dont-repeat-yourself-dry\">4. Don’t Repeat Yourself (DRY)</h2><a class=\"sl-anchor-link\" href=\"#4-dont-repeat-yourself-dry\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “4. Don’t Repeat Yourself (DRY)”</span></a></div>\n<p>Code တူတွေ ခဏခဏ ရေးနေရပြီဆိုရင် Function ခွဲထုတ်လိုက်ပါ။ ပြင်ရခက်တာ၊ မှားလွယ်တာတွေ သက်သာသွားပါလိမ့်မယ်။</p>"
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
const url = "src/content/docs/javascript/best-practices/clean-code.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/javascript/best-practices/clean-code.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/javascript/best-practices/clean-code.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
