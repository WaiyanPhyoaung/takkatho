import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "အားလုံးကို ပေါင်းစပ်အသုံးပြုခြင်း: ပူးပေါင်းဆောင်ရွက်ခြင်း!",
  "description": "အားလုံးကို ပေါင်းစပ်အသုံးပြုခြင်း: ပူးပေါင်းဆောင်ရွက်ခြင်း!"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "generics-နဲ့-utility-types-တွေကို-ပေါင်းစပ်အသုံးပြုခြင်း",
    "text": "Generics နဲ့ Utility Types တွေကို ပေါင်းစပ်အသုံးပြုခြင်း"
  }, {
    "depth": 4,
    "slug": "utility-types-တွေဟာ-generic-ဖြစ်ပါတယ်",
    "text": "Utility Types တွေဟာ Generic ဖြစ်ပါတယ်!"
  }, {
    "depth": 3,
    "slug": "generics-နဲ့-utility-types-တွေကို-သုံးပြီး-ကိုယ်ပိုင်-functiontype-တွေ-ဖန်တီးခြင်း",
    "text": "Generics နဲ့ Utility Types တွေကို သုံးပြီး ကိုယ်ပိုင် Function/Type တွေ ဖန်တီးခြင်း:"
  }, {
    "depth": 3,
    "slug": "utility-types-တွေကို-ပေါင်းစပ်အသုံးပြုခြင်း",
    "text": "Utility Types တွေကို ပေါင်းစပ်အသုံးပြုခြင်း:"
  }];
}
const mappedType = `
// Mapped Types ကို အကြမ်းဖျင်း ကြည့်ရှုခြင်း
// type Partial<T> = {
//   [P in keyof T]?: T[P]; // T (Object) ထဲက property P (တစ်ခုချင်းစီ) တိုင်းကို optional ဖြစ်စေ (?:) ။
// };
`;
const pickAndStringify = `
function pickAndStringifyValues<T extends object, K extends keyof T>( // <T extends object, K extends keyof T> ဆိုတာ Generic ပါ။
    obj: T, // obj က T ဆိုတဲ့ Type ဖြစ်ရမယ်။
    keys: K[]): Record<K, string | null> { // ပြန်လာမယ့် Type မှာ Record utility type ကို သုံးထားတယ်။
    const result = {} as Record<K, string | null>; // အစမှာတော့ 'as' ကိုသုံးပြီး ဗလာ object တစ်ခု ဖန်တီးပါ။
    for (const key of keys) { // keys array ထဲက key တစ်ခုချင်းစီကို စစ်ဆေးမယ်။
        if (obj.hasOwnProperty(key)) { // obj မှာ ဒီ key ပါလား စစ်မယ်။
            const value = obj[key]; // key နဲ့ ကိုက်ညီတဲ့ value ကို ယူမယ်။
            result[key] = value !== null && value !== undefined ? String(value) : null; // value ကို string ပြောင်း၊ မဟုတ်ရင် null ထား။
        }
    }
    return result; // result object ကို ပြန်ပေး။
}

const sampleUser = { name: "Alice", age: 30, isActive: true };
const stringifiedInfo = pickAndStringifyValues(sampleUser, ["name", "age"]);

// typeof stringifiedInfo သည် Record<"name" | "age", string | null> ဖြစ်သည်။
// stringifiedInfo = { name: "Alice", age: "30" }
console.log(stringifiedInfo.name); // "Alice" (string)
// console.log(stringifiedInfo.isActive); // Error: 'isActive' ဆိုတဲ့ property မရှိပါ။ (ဒီနေရာမှာ error ပြလိမ့်မယ်။)
`;
const combineUtility = `
interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  tags: string[];
}

// product update အတွက် payload type တစ်ခု လိုချင်ပါတယ်။
// - 'id' ကလွဲလို့ 'name', 'price', 'description', 'tags' တွေပဲ ပြောင်းလို့ရရမယ်။ (Omit 'id' ကို သုံး)
// - ပြောင်းလို့ရတဲ့ field တွေ အားလုံးက optional ဖြစ်ရမယ်။ (Partial ကို သုံး)
// - ဒီ object တစ်ခုလုံးက လက်ခံတဲ့ function အတွက် readonly ဖြစ်ရမယ်။ (Readonly ကို သုံး)

type ProductUpdatePayload = Readonly<Partial<Omit<Product, "id">>>;

// ဒါကို တစ်ဆင့်ချင်း ရှင်းပြပါမယ်။
// 1. Omit<Product, "id"> -> { name: string; price: number; description?: string; tags: string[]; } (id ကို ဖယ်လိုက်)
// 2. Partial<Result of 1> -> { name?: string; price?: number; description?: string; tags?: string[]; } (အားလုံးကို optional ဖြစ်စေ)
// 3. Readonly<Result of 2> -> { readonly name?: string; readonly price?: number; ... } (အားလုံးကို ပြောင်းမရအောင် လုပ်)

function handleProductUpdate(payload: ProductUpdatePayload) {
// payload.name = "New Name"; // Error! Readonly ဖြစ်နေလို့ပါ။
if (payload.price !== undefined) {
console.log("Price update:", payload.price);
}
}

handleProductUpdate({ name: "Super Gadget", price: 199.99 });
handleProductUpdate({ description: "The best gadget ever." });
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      type: "tip",
      "set:html": "<p>Generics၊ Utility Types နဲ့ <code dir=\"auto\">satisfies</code> keyword တွေကို လက်တွေ့မှာ ဘယ်လို\nပေါင်းစပ်အသုံးချမလဲဆိုတာ လေ့လာကြမယ်။ သူတို့ အချင်းချင်း ဘယ်လိုကူညီတယ်\n(ပူးပေါင်းဆောင်ရွက်တယ်) ဆိုတာ ပြသဖို့ mini-project သေးသေးလေး တစ်ခုလည်း\nလုပ်ကြည့်မယ်။ နောက်ပြီးတော့ အဆင့်မြင့် Type တွေအကြောင်းကို နည်းနည်း\nမိတ်ဆက်ပေးမယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"generics-နဲ့-utility-types-တွေကို-ပေါင်းစပ်အသုံးပြုခြင်း\">Generics နဲ့ Utility Types တွေကို ပေါင်းစပ်အသုံးပြုခြင်း</h3><a class=\"sl-anchor-link\" href=\"#generics-နဲ့-utility-types-တွေကို-ပေါင်းစပ်အသုံးပြုခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Generics နဲ့ Utility Types တွေကို ပေါင်းစပ်အသုံးပြုခြင်း”</span></a></div>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"utility-types-တွေဟာ-generic-ဖြစ်ပါတယ်\">Utility Types တွေဟာ Generic ဖြစ်ပါတယ်!</h4><a class=\"sl-anchor-link\" href=\"#utility-types-တွေဟာ-generic-ဖြစ်ပါတယ်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Utility Types တွေဟာ Generic ဖြစ်ပါတယ်!”</span></a></div>\n<p><code dir=\"auto\">Partial\\&#x3C;T></code>၊ <code dir=\"auto\">Pick\\&#x3C;T, K></code>၊ <code dir=\"auto\">Readonly\\&#x3C;T></code> လိုမျိုး <code dir=\"auto\">Utility Types</code> တွေကို မှတ်မိသေးလား။ သူတို့မှာ ပါတဲ့ <code dir=\"auto\">\\&#x3C;T></code> နဲ့ <code dir=\"auto\">\\&#x3C;K></code> ဆိုတာတွေက ဘာတွေလဲဆိုတော့ <code dir=\"auto\">Generic Type Parameters</code> (Type ရဲ့ နေရာမှာ အစားထိုးခံရမယ့် အမျိုးအစားကို ကိုယ်စားပြုတဲ့ အမည်) တွေပါပဲ။</p>\n<p><code dir=\"auto\">Utility Types</code> အများစုက အခြေခံအားဖြင့် <code dir=\"auto\">Generic Types</code> တွေပါပဲ။ သူတို့က Types တွေကို ပုံစံပြောင်းလဲပေးတဲ့ အလုပ်တွေကို လုပ်ဆောင်ပါတယ်။ TypeScript က ဒါတွေကို အသင့်ပေးထားတာဖြစ်ပေမယ့်၊ <code dir=\"auto\">Generic</code> တွေရဲ့ သဘောတရားအတိုင်းပဲ အလုပ်လုပ်တာပါ။</p>\n<p>ဥပမာအနေနဲ့၊ <code dir=\"auto\">Partial\\&#x3C;T></code> ရဲ့ ရိုးရှင်းတဲ့ ပုံစံကို ကြည့်ရအောင် (ဒါက <code dir=\"auto\">Mapped Types</code> ကို အသုံးပြုထားတာပါ၊ နောက်မှ အသေးစိတ် လေ့လာပါမယ်)။</p>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: mappedType,
      title: "utils.ts"
    }), "\n", createVNode($$Aside, {
      title: "ရှင်းပြချက်",
      type: "note",
      "set:html": "<p>အဓိက မှတ်ထားရမှာက <code dir=\"auto\">Generics</code> တွေဟာ ‘template’ (ပုံစံခွက်) တစ်ခုလို လုပ်ပေးတယ်။\nပြီးတော့ <code dir=\"auto\">Utility Types</code> တွေကတော့ ဒီ <code dir=\"auto\">Generic Pattern</code> (ပုံစံခွက်) တွေကို\nပုံမှန်သုံးရတဲ့ အလုပ်တွေ (ဥပမာ - properties တွေကို optional\nဖြစ်အောင်လုပ်တာမျိုး) အတွက် ကြိုတင်တည်ဆောက်ထားတဲ့ ‘အသင့်သုံး’ ပုံစံတွေပဲ\nဖြစ်တယ်ဆိုတာပါပဲ။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"generics-နဲ့-utility-types-တွေကို-သုံးပြီး-ကိုယ်ပိုင်-functiontype-တွေ-ဖန်တီးခြင်း\"><code dir=\"auto\">Generics</code> နဲ့ <code dir=\"auto\">Utility</code> Types တွေကို သုံးပြီး ကိုယ်ပိုင် Function/Type တွေ ဖန်တီးခြင်း:</h3><a class=\"sl-anchor-link\" href=\"#generics-နဲ့-utility-types-တွေကို-သုံးပြီး-ကိုယ်ပိုင်-functiontype-တွေ-ဖန်တီးခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Generics နဲ့ Utility Types တွေကို သုံးပြီး ကိုယ်ပိုင် Function/Type တွေ ဖန်တီးခြင်း:”</span></a></div>\n<p>Generics နဲ့ Utility Types တွေကို ပေါင်းစပ်ပြီး လက်တွေ့ ဥပမာတစ်ခု လုပ်ကြည့်ရအောင်။ object တစ်ခုနဲ့၊ အဲဒီ object ထဲက key တွေ (properties တွေရဲ့ နာမည်) ပါတဲ့ array တစ်ခုကို လက်ခံတဲ့ function တစ်ခုကို စဉ်းစားကြည့်ပါ။ ဒီ function ကနေ အဲဒီ key တွေနဲ့ ကိုက်ညီတဲ့ properties တွေကိုပဲ ရွေးထုတ်ပြီး object အသစ်တစ်ခု ပြန်ပေးမယ်။ ဒါပေမယ့် ပြန်ပေးတဲ့ properties တွေရဲ့ value တွေကိုတော့ string အဖြစ် ပြောင်းထားမယ် (ဒါမှမဟုတ် string ပြောင်းလို့မရရင် null ဖြစ်စေမယ်)။</p>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: pickAndStringify,
      title: "utils.ts"
    }), "\n", createVNode($$Aside, {
      title: "ရှင်းပြချက်",
      type: "note",
      "set:html": "<ul>\n<li>ဒီ function မှာ <code dir=\"auto\">Generics</code> တွေဖြစ်တဲ့ <code dir=\"auto\">\\&#x3C;T extends object, K extends keyof T></code> ကို သုံးထားပါတယ်။ <code dir=\"auto\">T</code> က ကျွန်တော်တို့ရဲ့ အဓိက object ရဲ့ Type ကို ကိုယ်စားပြုပြီး၊ <code dir=\"auto\">K</code> ကတော့ အဲဒီ <code dir=\"auto\">T</code> (object) ထဲမှာပါတဲ့ properties တွေရဲ့ နာမည် (key) တွေကို စုပေါင်းထားတဲ့ Type ပါ။</li>\n<li><code dir=\"auto\">keys: K[]</code> ဆိုတာက ဒီ function ဟာ <code dir=\"auto\">T</code> (ကျွန်တော်တို့ရဲ့ object) ထဲမှာ ရှိရမယ့် properties တွေရဲ့ နာမည် (key) တွေ ပါဝင်တဲ့ array တစ်ခုကို လက်ခံတယ်လို့ ပြောတာပါ။</li>\n<li><code dir=\"auto\">Record\\&#x3C;K, string | null></code> ဆိုတာ ပြန်လာမယ့် object ရဲ့ Type ကို ပြောတာပါ။ ဒီ object ထဲမှာ ကျွန်တော်တို့ ရွေးလိုက်တဲ့ key တွေ (<code dir=\"auto\">K</code>) ပဲ ပါဝင်မယ်။ ပြီးတော့ သူတို့ရဲ့ value တွေက <code dir=\"auto\">string</code> သို့မဟုတ် <code dir=\"auto\">null</code> ဖြစ်ရပါမယ်။ ဒီနေရာမှာ <code dir=\"auto\">Record</code> utility type ကို အသုံးဝင်အောင် သုံးထားတာပါ။</li>\n</ul>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"utility-types-တွေကို-ပေါင်းစပ်အသုံးပြုခြင်း\">Utility Types တွေကို ပေါင်းစပ်အသုံးပြုခြင်း:</h3><a class=\"sl-anchor-link\" href=\"#utility-types-တွေကို-ပေါင်းစပ်အသုံးပြုခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Utility Types တွေကို ပေါင်းစပ်အသုံးပြုခြင်း:”</span></a></div>\n<p>တစ်ခါတလေကျတော့ type ကို ပြောင်းလဲဖို့အတွက် <code dir=\"auto\">Utility Types</code> အများကြီးကို ပေါင်းစပ်ပြီး သုံးဖို့ လိုအပ်တတ်ပါတယ်။</p>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: combineUtility,
      title: "utils.ts"
    }), "\n", createVNode($$Aside, {
      title: "ရှင်းပြချက်",
      type: "note",
      "set:html": "<p>ကျွန်တော်တို့ <code dir=\"auto\">Utility Types</code> တွေကို အလွှာလိုက် ပေါင်းစပ်ပြီး (တစ်ခုပြီးတစ်ခု\nထပ်ဆင့်ပြီး) ရှုပ်ထွေးတဲ့ type တွေကို တိုတိုရှင်းရှင်းနဲ့ ဖန်တီးနိုင်ပါတယ်။ ဒီ\n<code dir=\"auto\">ProductUpdatePayload</code> type က data ရဲ့ ပုံစံနဲ့ ဘယ်လို ကန့်သတ်ချက်တွေ\nရှိလဲဆိုတာကို ရှင်းရှင်းလင်းလင်း ဖော်ပြပေးပါတယ်။</p>"
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

const url = "src/content/docs/advanced-typescript/all-together/generics-utility.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/all-together/generics-utility.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/all-together/generics-utility.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, combineUtility, Content as default, file, frontmatter, getHeadings, mappedType, pickAndStringify, url };
