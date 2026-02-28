import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "satisfies ကို မိတ်ဆက်ခြင်း: အကောင်းဆုံးနှစ်ခုပေါင်းစပ်ခြင်း (The Best of Both Worlds)",
  "description": "Type Annotation(:), Type Assertion (as) ရဲ့ ပြဿနာ"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "ဖြေရှင်းနည်း-the-satisfies-operator",
    "text": "ဖြေရှင်းနည်း: The satisfies Operator"
  }, {
    "depth": 3,
    "slug": "ဘယ်လိုအလုပ်လုပ်လဲ-ပြောင်းလဲခြင်းမရှိဘဲ-စစ်ဆေးခြင်း-validation-without-transformation",
    "text": "ဘယ်လိုအလုပ်လုပ်လဲ: ပြောင်းလဲခြင်းမရှိဘဲ စစ်ဆေးခြင်း (Validation without Transformation)"
  }, {
    "depth": 4,
    "slug": "validation-check",
    "text": "Validation Check:"
  }, {
    "depth": 4,
    "slug": "specificity-တိကျမှု-ကို-ထိန်းသိမ်းပေးခြင်း",
    "text": "Specificity (တိကျမှု) ကို ထိန်းသိမ်းပေးခြင်း:"
  }, {
    "depth": 3,
    "slug": "အကျိုးကျေးဇူးများ",
    "text": "အကျိုးကျေးဇူးများ"
  }];
}
const satisfies = `
interface AppConfig {
  env: "development" | "production" | "test";
  port: number;
  featureFlags: Record<string, boolean>;
}

const myConfig = { // ကျွန်တော်တို့ရဲ့ မူရင်း အတိအကျ object
env: "development",
port: 3000,
featureFlags: {
darkMode: true,
newOnboarding: false
// extraFeature: "yes" // ဒီ property ကို ထည့်ကြည့်ပါ၊ error ပြပါလိမ့်မယ်။
}
} satisfies AppConfig; // ဒီနေရာမှာ satisfies operator ကို သုံးလိုက်တယ်။
`;
const still = `
// typeof myConfig is STILL:
// {
//   env: "development";
//   port: number; // or 3000 if TS infers it as literal
//   featureFlags: {
//     darkMode: boolean; // or true
//     newOnboarding: boolean; // or false
//   };
// }
`;
const benefits = `
console.log(myConfig.env); // Type is "development"
// myConfig.env = "production"; // ဒီနေရာမှာ myConfig.env ရဲ့ type က "development" အတိအကျ ဖြစ်နေသေးလို့ "production" လို့ ပြန်ပြောင်းပေးရင် error ပြပါမယ်။

console.log(myConfig.featureFlags.darkMode); // အလုပ်လုပ်ပါတယ်။ Type က boolean (ဒါမှမဟုတ် true) ဖြစ်တယ်။
// console.log(myConfig.featureFlags.someOtherFlag); // ဒါက error ပဲ၊ 'someOtherFlag' က မူရင်း myConfig Object မှာ မပါလို့။
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      type: "tip",
      "set:html": "<p>satisfies operator ရဲ့ syntax နဲ့ behavior ကို သင်ယူဖို့၊ ပြီးတော့ မူရင်း\nအတိုင်း အတိအကျ type ကို မပြောင်းလဲဘဲ type ကို ဘယ်လို စစ်ဆေး ပေးလဲဆိုတာ သိဖို့\nဖြစ်ပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဖြေရှင်းနည်း-the-satisfies-operator\">ဖြေရှင်းနည်း: The satisfies Operator</h3><a class=\"sl-anchor-link\" href=\"#ဖြေရှင်းနည်း-the-satisfies-operator\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဖြေရှင်းနည်း: The satisfies Operator”</span></a></div>\n<p>TypeScript (version 4.9 ကစပြီး) satisfies operator ကို မိတ်ဆက်ခဲ့ပါတယ်။ ဒီပြဿနာကို satisfies operator က ဖြေရှင်းပေးဖို့ပါ။</p>\n<p><strong>Syntax</strong>: expression satisfies Type</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဘယ်လိုအလုပ်လုပ်လဲ-ပြောင်းလဲခြင်းမရှိဘဲ-စစ်ဆေးခြင်း-validation-without-transformation\">ဘယ်လိုအလုပ်လုပ်လဲ: ပြောင်းလဲခြင်းမရှိဘဲ စစ်ဆေးခြင်း (Validation without Transformation)</h3><a class=\"sl-anchor-link\" href=\"#ဘယ်လိုအလုပ်လုပ်လဲ-ပြောင်းလဲခြင်းမရှိဘဲ-စစ်ဆေးခြင်း-validation-without-transformation\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘယ်လိုအလုပ်လုပ်လဲ: ပြောင်းလဲခြင်းမရှိဘဲ စစ်ဆေးခြင်း (Validation without Transformation)”</span></a></div>\n<p>AppConfig ဥပမာကို satisfies နဲ့ ပြန်ကြည့်ရအောင်။</p>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: satisfies,
      title: "config.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p><code dir=\"auto\">satisfies AppConfig</code> က ဘာလုပ်ပေးလဲ:</p>\n<ul>\n<li>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"validation-check\"><strong>Validation Check</strong>:</h4><a class=\"sl-anchor-link\" href=\"#validation-check\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Validation Check:”</span></a></div>\n<p><code dir=\"auto\">satisfies AppConfig</code> က ဘယ်ဘက်က object literal ဟာ <code dir=\"auto\">AppConfig</code> နဲ့ ကိုက်ညီမှု ရှိမရှိ TypeScript က စစ်ဆေးပေးပါတယ်။</p>\n<ul>\n<li><code dir=\"auto\">port</code> ကို <code dir=\"auto\">prt</code> လို့ စာလုံးပေါင်းမှားရင် TypeScript က error ပြပါမယ်။</li>\n<li><code dir=\"auto\">env</code> က <code dir=\"auto\">\"staging\"</code> (AppConfig.env union မှာ မပါရင်)၊ TypeScript က error ပြပါမယ်။</li>\n<li><code dir=\"auto\">featureFlags.darkMode</code> က <code dir=\"auto\">number</code> ဖြစ်နေရင် (<code dir=\"auto\">boolean</code> မဟုတ်ရင်)၊ TypeScript က error ပြပါမယ်။ (<code dir=\"auto\">Record\\&#x3C;string, boolean></code> က <code dir=\"auto\">boolean</code> values တွေကိုပဲ လက်ခံလို့ပါ။ )</li>\n</ul>\n</li>\n</ul>\n<br>\n<ul>\n<li>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"specificity-တိကျမှု-ကို-ထိန်းသိမ်းပေးခြင်း\"><strong>Specificity (တိကျမှု) ကို ထိန်းသိမ်းပေးခြင်း</strong>:</h4><a class=\"sl-anchor-link\" href=\"#specificity-တိကျမှု-ကို-ထိန်းသိမ်းပေးခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Specificity (တိကျမှု) ကို ထိန်းသိမ်းပေးခြင်း:”</span></a></div>\n<p>အရေးကြီးတာက <code dir=\"auto\">myConfig</code> ရဲ့ type ဟာ Type Annotation (:) တုန်းကလို Type Widening (Type ကျယ်ပြန့်ခြင်း) ဖြစ်မသွားပါဘူး။ သတ်မှတ်ထားတဲ့ Type အတိုင်း အတိအကျပဲ ဆက်ဖြစ်နေပြီး <code dir=\"auto\">AppConfig</code> နဲ့ လဲ ကိုက်ညီမှုရှိမရှိ စစ်ဆေးပေးပါတယ်။</p>\n</li>\n</ul>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: still,
      title: "config.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အကျိုးကျေးဇူးများ\">အကျိုးကျေးဇူးများ</h3><a class=\"sl-anchor-link\" href=\"#အကျိုးကျေးဇူးများ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အကျိုးကျေးဇူးများ”</span></a></div>\n<p>အခုဆိုရင် အတိအကျ properties တွေကို safely access လုပ်နိုင်ပါပြီ။</p>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: benefits,
      title: "config.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p><strong>ဥပမာခိုင်းနှိုင်းချက်:</strong></p>\n<p>“<code dir=\"auto\">satisfies</code> ကို စစ်ဆေးရေးမှူး တစ်ယောက်က checklist (<code dir=\"auto\">AppConfig</code>) နဲ့ စစ်ဆေးနေတာမျိုး စဉ်းစားကြည့်ပါ။”</p>\n<p>“သင်က inspector ကို သင်ကိုယ်တိုင် အတိအကျ ဖန်တီးထားတဲ့ item (<code dir=\"auto\">myConfig</code> object literal) ကို ပေးလိုက်တယ်။”</p>\n<p>“Inspector က သင့် item ဟာ checklist ထဲက စံနှုန်းတွေနဲ့ ကိုက်ညီမှု ရှိမရှိ စစ်ဆေးပါတယ်။ မကိုက်ညီရင် ငြင်းပယ်လိမ့်မယ်။ (TypeScript error ပြမယ်)။”</p>\n<p>“အကယ်၍ စစ်ဆေးမှု အောင်မြင်ရင် သင့် item ကို ဘာမှ မပြောင်းလဲဘဲပြန်ပေး လိမ့်မယ်။ သူတို့က item ကို ပြောင်းလဲတာ ဒါမှမဟုတ် checklist ထဲက generic version (ယေဘုယျ ပုံစံ) နဲ့ အစားထိုး တာမျိုး မလုပ်ပါဘူး။ သင်က သင့်ရဲ့ မူရင်း အတိအကျ item ကို ပြန်ရမှာ ဖြစ်သလို၊ ဒါဟာ standards တွေနဲ့ ကိုက်ညီတယ်ဆိုတဲ့ အာမခံချက် ကိုပါ ရရှိပါမယ်။”</p>"
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

const url = "src/content/docs/advanced-typescript/satisfies/satisfies-introduction.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/satisfies/satisfies-introduction.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/satisfies/satisfies-introduction.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, benefits, Content as default, file, frontmatter, getHeadings, satisfies, still, url };
