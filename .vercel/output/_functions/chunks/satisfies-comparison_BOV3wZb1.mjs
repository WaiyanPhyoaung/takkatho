import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "satisfies vs. Type Annotation (:) vs. as (သုံးမျိုး နှိုင်းယှဉ်ချက်)",
  "description": "satisfies vs. Type Annotation (:) vs. as (သုံးမျိုး နှိုင်းယှဉ်ချက်)"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "အဓိက-ကွာခြားချက်များ-အကျဉ်းချုပ်-key-distinctions-summarized",
    "text": "အဓိက ကွာခြားချက်များ အကျဉ်းချုပ် (Key Distinctions Summarized):"
  }];
}
const examples = `
type Fruit = "apple" | "banana" | "orange";

const myFruitLiteral = "apple"; // Inferred type: "apple"

// ၁။ Type သတ်မှတ်ခြင်း (Annotation)
const fruit1: Fruit = myFruitLiteral;
// fruit1 ရဲ့ typeof က "apple" | "banana" | "orange" ဖြစ်သွားတယ်။ "apple" ဆိုတဲ့ အတိအကျ အချက်အလက်ဟာ fruit1 အတွက် widened (ကျယ်ပြန့်) သွားတယ်။

// ၂။ Type အတည်ပြုခြင်း (Assertion)
const fruit2 = myFruitLiteral as Fruit;
// fruit2 ရဲ့ typeof က "apple" | "banana" | "orange" ဖြစ်သွားတယ်။ type သတ်မှတ်တာနဲ့ ဆင်တူပါတယ်။
const fruitMaybe = "grape" as Fruit; // UNSAFE (မလုံခြုံ)! "grape" က Fruit မဟုတ်ဘူး၊ ဒါပေမယ့် TypeScript က as ကို ခွင့်ပြုတယ်။

// ၃။ စစ်ဆေးကိုက်ညီခြင်း (Satisfaction)
const fruit3 = myFruitLiteral satisfies Fruit;
// fruit3 ရဲ့ typeof က "apple" ဖြစ်တယ်။ အတိအကျ အချက်အလက် ထိန်းသိမ်းထားတယ်။
// const notFruit = "grape" satisfies Fruit; // ERROR: Type '"grape"' is not assignable to type 'Fruit'.

`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      type: "tip",
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p><code dir=\"auto\">satisfies</code> ကို type annotations နဲ့ type assertions တို့နဲ့\nရှင်းရှင်းလင်းလင်း ခွဲခြားသိမြင်ဖို့နဲ့ တစ်ခုချင်းစီကို ဘယ်အချိန်မှာ\nသုံးရမယ်ဆိုတာ နားလည်ဖို့ ဖြစ်ပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>;</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>ဘယ်လိုအချက်လဲ (Feature)</th><th>Type သတ်မှတ်ခြင်း (:)<br>const x: Type = val;</th><th>Type အတည်ပြုခြင်း (as)<br>const x = val as Type;</th><th>စစ်ဆေးကိုက်ညီခြင်း (satisfies)<br>const x = val satisfies Type;</th></tr></thead><tbody><tr><td>ရည်ရွယ်ချက် (Purpose)</td><td>x ကို ဒီ Type ပဲ ဖြစ်စေချင်တယ်။ val ကလည်း ဒီ Type နဲ့ ကိုက်ညီလား စစ်တယ်။</td><td>val ကို ဒီ Type အတိုင်း မှတ်ခိုင်းတာ။ TypeScript က မဟုတ်ဘူးပြောရင်တောင် ‘ငါ့ကို ယုံ’ လို့ ပြောတာမျိုး။</td><td>val က ဒီ Type အတိုင်း ဟုတ်မဟုတ် စစ်တယ်။ ဒါပေမယ့် x က val ရဲ့ မူရင်း အတိအကျ ပုံစံကိုပဲ ဆက်သိနေစေတယ်။</td></tr><tr><td>x ရဲ့ Type မှာ ဘာဖြစ်လဲ</td><td>x ကို Type လို့ မှတ်လိုက်တယ်။</td><td>x ကို Type လို့ မှတ်လိုက်တယ်။</td><td>x က val ရဲ့ မူရင်း အတိအကျ ပုံစံကိုပဲ သိနေတယ်။</td></tr><tr><td>အတိအကျမှု ပျောက်ဆုံးလား</td><td>များသောအားဖြင့် ပျောက်သွားတယ်။ val ရဲ့ အတိအကျ ပုံစံက ပိုကျယ်တဲ့ Type ဖြစ်သွားတယ်။</td><td>ပျောက်ချင်လည်းပျောက်၊ မပျောက်ချင်လည်း မပျောက်ဘူး။ Type ကို အတင်းပြောင်းလိုက်လို့ unsafe ဖြစ်နိုင်တယ်။</td><td>လုံးဝမပျောက်ဘူး။ val ရဲ့ အတိအကျ ပုံစံကို x က သိနေဆဲပဲ။</td></tr><tr><td>လုံခြုံမှု (Safety)</td><td>အများစုက လုံခြုံတယ်။</td><td>မလုံခြုံနိုင်ဘူး။ TypeScript ရဲ့ စစ်ဆေးမှုတွေကို ကျော်သွားနိုင်လို့ သတိထားပြီး သုံးပါ။</td><td>လုံခြုံတယ်။ မှန်မမှန် စစ်ပေးပြီး အတိအကျ ပုံစံကိုလည်း ထိန်းထားပေးတယ်။</td></tr><tr><td>Error ဘယ်မှာပြလဲ</td><td>val က Type နဲ့ မကိုက်ရင် val မှာ error ပြတယ်။</td><td>ချက်ချင်း error နည်းတယ်။ (TypeScript က ယုံပေးလို့)။ ဒါပေမယ့် program Run တဲ့အခါ (runtime မှာ) error တွေ ဖြစ်လာနိုင်တယ်။</td><td>val က Type နဲ့ မကိုက်ရင် val မှာ error ပြတယ်။</td></tr><tr><td>အသုံးများတဲ့ နေရာ</td><td>Function မှာ input (parameters) တွေ၊ output (return types) တွေ၊ ဒါမှမဟုတ် variable တွေကို type သတ်မှတ်ဖို့ သုံးတယ်။</td><td>TypeScript မဟုတ်တဲ့ code တွေနဲ့ အလုပ်လုပ်တဲ့အခါ၊ ဒါမှမဟုတ် library type တွေ မှားနေတာကို ပြင်တဲ့အခါ (သတိထားပြီး) သုံးတယ်။</td><td>Configuration object တွေမှာ သုံးတယ်။ object တစ်ခုက သူ့ရဲ့ ပုံစံနဲ့ ကိုက်ညီလား စစ်ပြီး၊ သူ့ရဲ့ မူရင်း အတိအကျ အချက်အလက်တွေကို ထိန်းသိမ်းချင်တဲ့အခါ သုံးတယ်။</td></tr></tbody></table>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အဓိက-ကွာခြားချက်များ-အကျဉ်းချုပ်-key-distinctions-summarized\">အဓိက ကွာခြားချက်များ အကျဉ်းချုပ် (Key Distinctions Summarized):</h3><a class=\"sl-anchor-link\" href=\"#အဓိက-ကွာခြားချက်များ-အကျဉ်းချုပ်-key-distinctions-summarized\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အဓိက ကွာခြားချက်များ အကျဉ်းချုပ် (Key Distinctions Summarized):”</span></a></div>\n<ul>\n<li><strong><code dir=\"auto\">: (Type သတ်မှတ်ခြင်း):</code></strong> x ကို ဒီ Type ပဲ ဖြစ်စေချင်တယ်။ val ကလည်း ဒီ Type နဲ့ ကိုက်ညီလား စစ်တယ်။ (ဒါပေမယ့် val ရဲ့ Type က ကျယ်ပြန့်သွားနိုင်တယ်။)</li>\n<li><strong><code dir=\"auto\">as (Type အတည်ပြုခြင်း):</code></strong> val ကို ဒီ Type အတိုင်း မှတ်ခိုင်းတာ။ TypeScript က မဟုတ်ဘူးပြောရင်တောင် ‘ငါ့ကို ယုံ’ လို့ ပြောတာမျိုး။ (မလုံခြုံနိုင်ဘူး)</li>\n<li><strong><code dir=\"auto\">satisfies (စစ်ဆေးကိုက်ညီခြင်း):</code></strong> val က ဒီ Type အတိုင်း ဟုတ်မဟုတ် စစ်တယ်။ ဒါပေမယ့် x က val ရဲ့ မူရင်း အတိအကျ ပုံစံကိုပဲ ဆက်သိနေစေတယ်။ (လုံခြုံတယ်၊ အတိအကျ အချက်အလက်ကို ထိန်းသိမ်းပေးတယ်။)</li>\n</ul>\n<p>ဥပမာများ -</p>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: examples,
      title: "index.ts"
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

const url = "src/content/docs/advanced-typescript/satisfies/satisfies-comparison.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/satisfies/satisfies-comparison.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/satisfies/satisfies-comparison.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, examples, file, frontmatter, getHeadings, url };
