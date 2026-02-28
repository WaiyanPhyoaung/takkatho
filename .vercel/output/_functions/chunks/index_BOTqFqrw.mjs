import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import { c as createSvgComponent } from './runtime_nY0uhreE.mjs';
import 'clsx';

const tsVsJs = createSvgComponent({"meta":{"src":"/_astro/ts-vs-js.Cd93DbMD.svg","width":800,"height":400,"format":"svg"},"attributes":{"viewBox":"0 0 800 400"},"children":"\n  <defs>\n    <style>\n      .box { fill: #f8f9fa; stroke: #343a40; stroke-width: 2; rx: 8; }\n      .text-title { font-family: Arial, sans-serif; font-size: 18px; font-weight: bold; fill: #212529; text-anchor: middle; }\n      .text-desc { font-family: Arial, sans-serif; font-size: 14px; fill: #495057; text-anchor: middle; }\n      .arrow { stroke: #3178c6; stroke-width: 3; fill: none; marker-end: url(#arrowhead); }\n      .ts-box { fill: #e0f0ff; stroke: #3178c6; stroke-width: 2; rx: 8; }\n      .js-box { fill: #fff9c4; stroke: #f7df1e; stroke-width: 2; rx: 8; }\n    </style>\n    <marker id=\"arrowhead\" markerWidth=\"10\" markerHeight=\"7\" refX=\"9\" refY=\"3.5\" orient=\"auto\">\n      <polygon points=\"0 0, 10 3.5, 0 7\" fill=\"#3178c6\" />\n    </marker>\n  </defs><!-- Title -->\n  <text x=\"400\" y=\"50\" class=\"text-title\" style=\"font-size: 24px;\">How TypeScript Works</text><!-- TypeScript Code -->\n  <rect x=\"100\" y=\"150\" width=\"180\" height=\"100\" class=\"ts-box\" />\n  <text x=\"190\" y=\"190\" class=\"text-title\" style=\"fill: #3178c6;\">TypeScript</text>\n  <text x=\"190\" y=\"215\" class=\"text-desc\">app.ts</text>\n  <text x=\"190\" y=\"235\" class=\"text-desc\">(Has Types & Errors)</text><!-- Compiler -->\n  <rect x=\"350\" y=\"165\" width=\"100\" height=\"70\" class=\"box\" />\n  <text x=\"400\" y=\"195\" class=\"text-title\">Compiler</text>\n  <text x=\"400\" y=\"215\" class=\"text-desc\">(tsc)</text><!-- JavaScript Code -->\n  <rect x=\"520\" y=\"150\" width=\"180\" height=\"100\" class=\"js-box\" />\n  <text x=\"610\" y=\"190\" class=\"text-title\" style=\"fill: #bfa600;\">JavaScript</text>\n  <text x=\"610\" y=\"215\" class=\"text-desc\">app.js</text>\n  <text x=\"610\" y=\"235\" class=\"text-desc\">(Runs in Browser/Node)</text><!-- Arrows -->\n  <path d=\"M 280 200 L 340 200\" class=\"arrow\" />\n  <path d=\"M 450 200 L 510 200\" class=\"arrow\" /><!-- Note -->\n  <text x=\"400\" y=\"320\" class=\"text-desc\" style=\"font-style: italic;\">Browsers and Node.js cannot run TypeScript directly.</text>\n  <text x=\"400\" y=\"340\" class=\"text-desc\" style=\"font-style: italic;\">It must be compiled (transpiled) into plain JavaScript first.</text>\n"});

const frontmatter = {
  "title": "TypeScript မိတ်ဆက်",
  "description": "TypeScript ဆိုတာ ဘာလဲ၊ ဘာကြောင့် သုံးသင့်တာလဲ"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "typescript-ဆိုတာ-ဘာလဲ",
    "text": "TypeScript ဆိုတာ ဘာလဲ?"
  }, {
    "depth": 3,
    "slug": "ဘာလို့-typescript-ကို-သုံးသင့်တာလဲ",
    "text": "ဘာလို့ TypeScript ကို သုံးသင့်တာလဲ?"
  }, {
    "depth": 3,
    "slug": "javascript-နဲ့-ဘာကွာလဲ",
    "text": "JavaScript နဲ့ ဘာကွာလဲ?"
  }, {
    "depth": 3,
    "slug": "ဒီ-course-မှာ-ဘာတွေ-သင်ရမလဲ",
    "text": "ဒီ Course မှာ ဘာတွေ သင်ရမလဲ?"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "မင်္ဂလာပါ",
      "set:html": "<p>TypeScript Course ကနေ ကြိုဆိုပါတယ်။ ဒီ Course မှာ JavaScript ကို ပိုမို စနစ်ကျပြီး အမှားကင်းအောင် ရေးနိုင်မယ့် TypeScript ကို အခြေခံကနေ စပြီး လေ့လာသွားမှာ ဖြစ်ပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"typescript-ဆိုတာ-ဘာလဲ\">TypeScript ဆိုတာ ဘာလဲ?</h3><a class=\"sl-anchor-link\" href=\"#typescript-ဆိုတာ-ဘာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “TypeScript ဆိုတာ ဘာလဲ?”</span></a></div>\n<p>TypeScript ဆိုတာ Microsoft ကနေ ဖန်တီးထားတဲ့ Programming Language တစ်ခုပါ။ သူ့ကို <strong>“JavaScript with Syntax for Types”</strong> လို့ ခေါ်ပါတယ်။</p>\n<p>ရိုးရှင်းအောင် ပြောရရင် TypeScript ဆိုတာ JavaScript ပါပဲ။ ဒါပေမယ့် JavaScript မှာ မပါတဲ့ <strong>“စည်းကမ်းချက်တွေ (Types)”</strong> ကို ထပ်ပေါင်းထည့်ထားတာ ဖြစ်ပါတယ်။</p>\n"
    }), createVNode($$ContentImage, {
      src: tsVsJs,
      alt: "How TypeScript Works"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဘာလို့-typescript-ကို-သုံးသင့်တာလဲ\">ဘာလို့ TypeScript ကို သုံးသင့်တာလဲ?</h3><a class=\"sl-anchor-link\" href=\"#ဘာလို့-typescript-ကို-သုံးသင့်တာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘာလို့ TypeScript ကို သုံးသင့်တာလဲ?”</span></a></div>\n<p>JavaScript ဟာ အရမ်း လွတ်လပ်လွန်းတဲ့ Language တစ်ခုပါ။ Variable တစ်ခုကို ဂဏန်း (Number) ထည့်ထားပြီး၊ နောက်တစ်ကြောင်းမှာ စာသား (String) ပြောင်းထည့်လိုက်လည်း ရပါတယ်။ အဲ့ဒီလို လွတ်လပ်လွန်းတဲ့အတွက် Project ကြီးလာတဲ့အခါ <strong>မထင်မှတ်ထားတဲ့ အမှား (Bugs) တွေ</strong> အများကြီး တက်တတ်ပါတယ်။</p>\n<p>TypeScript က အဲ့ဒီ ပြဿနာကို ဖြေရှင်းပေးပါတယ်။</p>\n<ul>\n<li><strong>အမှားများကို ကြိုသိနိုင်ခြင်း:</strong> Code ရေးနေတုန်းမှာတင် (Compile Time) မှားနေရင် မျဉ်းနီလေးတွေ တားပြီး သတိပေးပါတယ်။ Browser ပေါ်ရောက်မှ Error တက်တာမျိုးကို လျှော့ချပေးပါတယ်။</li>\n<li><strong>Auto-completion ပိုကောင်းခြင်း:</strong> VS Code လို Editor တွေမှာ Code ရိုက်တဲ့အခါ ဘာတွေ ဆက်ရိုက်လို့ရလဲ ဆိုတာကို အတိအကျ ပြပေးနိုင်ပါတယ်။</li>\n<li><strong>Code ဖတ်ရလွယ်ခြင်း:</strong> တခြားသူ ရေးထားတဲ့ Code ကို ဖတ်တဲ့အခါ ဒီ Variable က ဘာအမျိုးအစားလဲ ဆိုတာ ချက်ချင်း သိနိုင်ပါတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"javascript-နဲ့-ဘာကွာလဲ\">JavaScript နဲ့ ဘာကွာလဲ?</h3><a class=\"sl-anchor-link\" href=\"#javascript-နဲ့-ဘာကွာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “JavaScript နဲ့ ဘာကွာလဲ?”</span></a></div>\n<p><strong>JavaScript:</strong></p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">let </span><span style=\"--0:#D7DBE0;--1:#403F53\">age</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#F78C6C;--1:#AA0982\">20</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#403F53\"><span style=\"--0:#D7DBE0\">age</span><span style=\"--0:#D6DEEB\"> </span></span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Twenty</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">; </span><span style=\"--0:#919F9F;--1:#5D6376\">// JS မှာ ဒါမျိုး လုပ်လို့ရပါတယ်။ (ဒါပေမယ့် ပြဿနာ တက်နိုင်ပါတယ်)</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"let age = 20;age = &#x22;Twenty&#x22;; // JS မှာ ဒါမျိုး လုပ်လို့ရပါတယ်။ (ဒါပေမယ့် ပြဿနာ တက်နိုင်ပါတယ်)\"><div></div></button></div></figure></div>\n<p><strong>TypeScript:</strong></p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"typescript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">let </span><span style=\"--0:#D6DEEB;--1:#403F53\">age</span><span style=\"--0:#7FDBCA;--1:#096E72\">:</span><span style=\"--0:#C792EA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">number</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#F78C6C;--1:#AA0982\">20</span><span style=\"--0:#D6DEEB;--1:#403F53\">; </span><span style=\"--0:#919F9F;--1:#5D6376\">// ဂဏန်းပဲ လက်ခံမယ်လို့ စည်းကမ်း သတ်မှတ်လိုက်ပါပြီ</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">age </span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Twenty</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">; </span><span style=\"--0:#919F9F;--1:#5D6376\">// ❌ Error: Type 'string' is not assignable to type 'number'.</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"let age: number = 20; // ဂဏန်းပဲ လက်ခံမယ်လို့ စည်းကမ်း သတ်မှတ်လိုက်ပါပြီage = &#x22;Twenty&#x22;; // ❌ Error: Type &#x27;string&#x27; is not assignable to type &#x27;number&#x27;.\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဒီ-course-မှာ-ဘာတွေ-သင်ရမလဲ\">ဒီ Course မှာ ဘာတွေ သင်ရမလဲ?</h3><a class=\"sl-anchor-link\" href=\"#ဒီ-course-မှာ-ဘာတွေ-သင်ရမလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဒီ Course မှာ ဘာတွေ သင်ရမလဲ?”</span></a></div>\n<ol>\n<li><strong>Basic Types:</strong> String, Number, Boolean စတဲ့ အခြေခံ အမျိုးအစားများ။</li>\n<li><strong>Functions:</strong> Function တွေမှာ Type တွေ ဘယ်လို သတ်မှတ်မလဲ။</li>\n<li><strong>Interfaces &#x26; Objects:</strong> Object တွေရဲ့ ပုံစံကြမ်း (Blueprint) ဖန်တီးခြင်း။</li>\n<li><strong>Union &#x26; Intersection:</strong> Type တွေကို ပေါင်းစပ် အသုံးပြုခြင်း။</li>\n<li><strong>Enums &#x26; Tuples:</strong> တိကျတဲ့ တန်ဖိုးတွေနဲ့ Array တွေကို သတ်မှတ်ခြင်း။</li>\n<li><strong>Classes (OOP):</strong> TypeScript မှာ Object-Oriented ရေးသားခြင်း။</li>\n<li><strong>Generics:</strong> ပြန်လည်အသုံးပြုလို့ရတဲ့ (Reusable) Type များ ဖန်တီးခြင်း။</li>\n<li><strong>Mini Project:</strong> TypeScript ကို သုံးပြီး ရိုးရှင်းတဲ့ Todo List Logic ရေးကြည့်ခြင်း။</li>\n</ol>\n<p>ကဲ… TypeScript လောကထဲကို ဝင်ရောက်ကြည့်ကြရအောင်!</p>"
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

const url = "src/content/docs/typescript/index.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/typescript/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/typescript/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
