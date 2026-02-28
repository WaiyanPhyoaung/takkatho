import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "Type Annotation(:) နဲ့ Type Assertion (as) ရဲ့ ပြဿနာ",
  "description": "Type Annotation(:), Type Assertion (as) ရဲ့ ပြဿနာ"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "type-annotation--ကြောင့်-ဖြစ်တဲ့-ပြဿနာ-type-ကျယ်ပြန့်သွားခြင်း-the-widening-effect",
    "text": "Type Annotation (:) ကြောင့် ဖြစ်တဲ့ ပြဿနာ: Type ကျယ်ပြန့်သွားခြင်း (The Widening Effect)"
  }, {
    "depth": 4,
    "slug": "အဓိက-ပြဿနာက-the-crux",
    "text": "အဓိက ပြဿနာက (The Crux)"
  }, {
    "depth": 3,
    "slug": "တစ်စိတ်တစ်ပိုင်း-ဖြေရှင်းနည်း-as-const",
    "text": "တစ်စိတ်တစ်ပိုင်း ဖြေရှင်းနည်း: as const"
  }];
}
const typeAnnotation = `
const annotatedConfig: AppConfig = { // AppConfig နဲ့ Type annotation လုပ်လိုက်တယ်။
  env: "development",
  port: 3000,
  featureFlags: {
    darkMode: true,
    newOnboarding: false
  }
};
`;
const annotationProblem = `
// console.log(annotatedConfig.featureFlags.darkMode);
// ^^^^ Error ပြလိမ့်မယ်: Property 'darkMode' does not exist on type 'Record<string, boolean>'.
// TypeScript က 'featureFlags' ထဲမှာ string key မျိုးစုံက boolean ကို ပြန်ပေးနိုင်တယ်လို့ပဲ သိတယ်။
// 'darkMode' ဆိုတာ အတိအကျ ပါတယ်လို့ မသိတော့ဘူး။
`;
const asKeyword = `
const constConfig = {
  env: "development",
  port: 3000,
  featureFlags: { darkMode: true, newOnboarding: false }
} as const; // ဒီ Object ကို 'as const' လို့ ပြောလိုက်တယ်။

// ဒါဆိုရင် TypeScript က constConfig အကြောင်း ဒီလို အသေးစိတ် သိသွားမယ်:
// {
// readonly env: "development"; // 'development' လို့ အတိအကျ သိတယ်။ ပြီးတော့ ပြင်လို့မရဘူး (readonly)။
// readonly port: 3000; // 3000 လို့ အတိအကျ သိတယ်။ ပြီးတော့ ပြင်လို့မရဘူး။
// readonly featureFlags: {
// readonly darkMode: true; // 'darkMode' ပါတယ်လို့ အတိအကျ သိတယ်။ ပြင်လို့မရဘူး။
// readonly newOnboarding: false; // 'newOnboarding' ပါတယ်လို့ အတိအကျ သိတယ်။ ပြင်လို့မရဘူး။
// };
// }
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"type-annotation--ကြောင့်-ဖြစ်တဲ့-ပြဿနာ-type-ကျယ်ပြန့်သွားခြင်း-the-widening-effect\">Type Annotation (:) ကြောင့် ဖြစ်တဲ့ ပြဿနာ: Type ကျယ်ပြန့်သွားခြင်း (The Widening Effect)</h3><a class=\"sl-anchor-link\" href=\"#type-annotation--ကြောင့်-ဖြစ်တဲ့-ပြဿနာ-type-ကျယ်ပြန့်သွားခြင်း-the-widening-effect\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Type Annotation (:) ကြောင့် ဖြစ်တဲ့ ပြဿနာ: Type ကျယ်ပြန့်သွားခြင်း (The Widening Effect)”</span></a></div>\n<p>ပြီးခဲ့တဲ့ သင်ခန်းစာက myAppConfig က AppConfig ဖြစ်ကြောင်း type annotation ကို သုံးပြီး သေချာအောင် လုပ်ချင်ရင် ဘာဖြစ်မလဲ။</p>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: typeAnnotation,
      title: "config.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>ဒီလို annotatedConfig: AppConfig လို့ ရေးလိုက်တာနဲ့ TypeScript က annotatedConfig အကြောင်း ဘာတွေသိလဲ ကြည့်ရအောင်။”</p>\n<ul>\n<li>annotatedConfig.env: သူ့ရဲ့ Type က အခု “development” | “production” | “test” ဖြစ်သွားပြီ။\n<ul>\n<li>အရေးကြီးတာက “development” လို့ အတိအကျ သိခဲ့တဲ့ အသေးစိတ် အချက်အလက်က ပျောက်သွားပြီ။ TypeScript က ‘ဒီ env က သုံးခုထဲက တစ်ခုခုပဲ ဖြစ်နိုင်တယ်။ ဘယ်ဟာလဲဆိုတာ အတိအကျ တော့ မသိတော့ဘူး’ လို့ ဖြစ်သွားတယ်။</li>\n</ul>\n</li>\n<li>annotatedConfig.featureFlags: သူ့ရဲ့ Type က Record&#x3C;string, boolean> ဖြစ်တယ်။\n<ul>\n<li>ဒီမှာလည်း ပြဿနာက darkMode နဲ့ newOnboarding ဆိုတဲ့ Key တွေ ပါတယ်ဆိုတာ TypeScript က မသိတော့ဘူး။ သူက ‘Key က စာသား ဖြစ်ရမယ်၊ Value က true/false ဖြစ်ရမယ်’ လို့ပဲ ယေဘုယျ သိတော့တယ်။</li>\n</ul>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"အဓိက-ပြဿနာက-the-crux\"><strong>အဓိက ပြဿနာက (The Crux)</strong></h4><a class=\"sl-anchor-link\" href=\"#အဓိက-ပြဿနာက-the-crux\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အဓိက ပြဿနာက (The Crux)”</span></a></div>\n<p>အကယ်၍ ကျွန်တော်တို့က annotatedConfig.featureFlags.darkMode လိုမျိုး အတိအကျ access လုပ်ဖို့ ကြိုးစားရင်</p>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: annotationProblem,
      title: "config.ts"
    }), "\n", createVNode($$Aside, {
      title: "ရှင်းပြချက်",
      "set:html": "<p>AppConfig ဆိုတဲ့ Type ကို : လေးနဲ့ သတ်မှတ်လိုက်တဲ့အတွက် ကျွန်တော်တို့က ‘ဒီ Object က AppConfig ရဲ့ စည်းမျဉ်းအတိုင်းပဲ’ လို့ TypeScript ကို ပြောလိုက်တာပဲ။ TypeScript ကလည်း စည်းမျဉ်းအတိုင်း ဟုတ်မဟုတ်တော့ စစ်ပေးတယ်။ (ဥပမာ port ကို စာလုံးပေါင်းမှားရင် ဒါမှမဟုတ် စာသား ထည့်မိရင် Error ပြလိမ့်မယ်)။ ဒါပေမယ့် ဒီလို စစ်ပေးလိုက်တော့ env မှာ အတိအကျ “development” ဆိုတဲ့ အသေးစိတ်၊ ဒါမှမဟုတ် featureFlags ထဲမှာ darkMode ဆိုတဲ့ Key ပါတယ်ဆိုတဲ့ အသေးစိတ်တွေကို သူက Record&#x3C;string, boolean> လိုမျိုး ယေဘုယျ Type အဖြစ် ပြောင်းလိုက်လို့ မသိတော့ဘူး။ ဒါကြောင့် အဲဒီ အသေးစိတ်တွေကို ခေါ်သုံးဖို့ ခက်သွားတာပေါ့။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"တစ်စိတ်တစ်ပိုင်း-ဖြေရှင်းနည်း-as-const\">တစ်စိတ်တစ်ပိုင်း ဖြေရှင်းနည်း: as const</h3><a class=\"sl-anchor-link\" href=\"#တစ်စိတ်တစ်ပိုင်း-ဖြေရှင်းနည်း-as-const\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “တစ်စိတ်တစ်ပိုင်း ဖြေရှင်းနည်း: as const”</span></a></div>\n<p>ဒီပြဿနာကို ခဏဖြေရှင်းဖို့ as const ဆိုတာ သုံးလို့ရတယ်။</p>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: asKeyword,
      title: "config.ts"
    }), "\n", createVNode($$Aside, {
      title: "ရှင်းပြချက်",
      "set:html": "<p>as const က ‘ဒီ Object က အတိအကျ အဲဒီအတိုင်းပဲ ဖြစ်နေမယ်။ ဘာမှ မပြောင်းလဲဘူး’\nလို့ ပြောလိုက်တာပါ။ ဒါကြောင့် as const လုပ်လိုက်ရင် TypeScript က အတိအကျ\nသိသွားပါတယ်။ ပြီးတော့ ဘယ်တော့မှ ပြင်လို့မရအောင် (Readonly) လုပ်ပေးတယ်။\nဒါပေမယ့် သူက constConfig ဟာ AppConfig ဆိုတဲ့ စည်းမျဉ်းနဲ့ ကိုက်ညီမှု\nရှိမရှိတော့ မစစ်ပေးဘူး။ ဥပမာ env ကို တခြားစာလုံး environment လို့\nရေးမိရင်တောင် as const လို့ သုံးထားရင် TypeScript က ဘာ Error မှ ပြမှာ\nမဟုတ်ဘူး။</p>"
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

const url = "src/content/docs/advanced-typescript/satisfies/solving-types.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/satisfies/solving-types.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/satisfies/solving-types.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, annotationProblem, asKeyword, Content as default, file, frontmatter, getHeadings, typeAnnotation, url };
