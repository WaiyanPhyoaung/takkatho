import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "Generics တွေရဲ့ အသုံးဝင်ပုံ - Functions, Interfaces, Classes တွေမှာ သုံးခြင်း",
  "description": "Generics တွေရဲ့ အသုံးဝင်ပုံ - Functions, Interfaces, Classes တွေမှာ သုံးခြင်း"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "generic-functions",
    "text": "Generic Functions"
  }, {
    "depth": 2,
    "slug": "generic-interfaces",
    "text": "Generic Interfaces"
  }, {
    "depth": 2,
    "slug": "generic-classes",
    "text": "Generic Classes"
  }];
}
const code = `
// Generic Type Variable <T> ကို သုံးမယ်
function wrapInArray<T>(input: T): T[] {
  return [input];
}

// wrapInArray Function ကို သုံးကြည့်မယ်
let numberArray = wrapInArray(10); // 10 ဆိုတဲ့ number ထည့်လိုက်တော့ T က number လို့ မှန်းသိတယ်၊ ပြန်ထွက်တဲ့ Type က number[] ဖြစ်သွားတယ်
console.log(numberArray); // Output: [10]

let stringArray = wrapInArray("World"); // "World" ဆိုတဲ့ string ထည့်လိုက်တော့ T က string ဖြစ်သွားတယ်၊ ပြန်ထွက်တဲ့ Type က string[] ဖြစ်သွားတယ်
console.log(stringArray); // Output: ["World"]

let userObject = { id: 1, name: "Admin" };
let userArray = wrapInArray(userObject); // { id: number; name: string; } ဆိုတဲ့ object ထည့်လိုက်တော့ T က အဲဒီ object Type ဖြစ်သွားတယ်၊ ပြန်ထွက်တဲ့ Type က အဲဒီ object Type ရဲ့ array[] ဖြစ်သွားတယ်
console.log(userArray); // Output: [{ id: 1, name: "Admin" }]
`;
const code2 = `// ApiResponse ဆိုတဲ့ Interface ကို Generic ဖြစ်အောင် လုပ်မယ်
// <DataType> ဆိုတာ ကျွန်တော်တို့ရဲ့ Generic Type Variable ပေါ့
interface ApiResponse<DataType> {
  data: DataType; // API ကနေ ပြန်လာမယ့် တကယ့် Data ရဲ့ Type က ဒီ DataType ပဲ
  success: boolean; // အောင်မြင်လား မအောင်မြင်ဘူးလား
  timestamp: Date; // ဘယ်အချိန်လဲ
  error?: string; // Error ရှိရင် စာသားပြမယ် (ပါချင်မှ ပါမယ်)
}

// ဒီ Generic Interface ကို ဘယ်လို သုံးမလဲ ကြည့်ရအောင်
interface User { id: number; username: string; } // User Object ရဲ့ ပုံစံ
interface Product { sku: string; price: number; name: string; } // Product Object ရဲ့ ပုံစံ

// API ကနေ User တစ်ယောက်ရဲ့ Data ပြန်လာမယ်ဆိုရင် ApiResponse<User> လို့ သုံးမယ်
let userResponse: ApiResponse<User> = {
data: { id: 1, username: "ts_fan" }, // data ရဲ့ Type က User ဖြစ်ရမယ်
success: true,
timestamp: new Date()
};

// API ကနေ Product တွေရဲ့ Array ပြန်လာမယ်ဆိုရင် ApiResponse<Product[]> လို့ သုံးမယ်
let productsResponse: ApiResponse<Product[]> = {
data: [ // data ရဲ့ Type က Product Array ဖြစ်ရမယ်
{ sku: "TSHIRT01", price: 25.99, name: "TypeScript Logo Tee" },
{ sku: "MUG004", price: 12.50, name: "Generic Mug" }
],
success: true,
timestamp: new Date()
};

// ဒီလို သုံးလိုက်တော့ TypeScript က data ထဲမှာ ဘာ Type ရှိလဲဆိုတာ သိနေပြီ
console.log(userResponse.data.username); // data က User ဖြစ်လို့ username ကို သုံးလို့ရတယ်
console.log(productsResponse.data[0].price); // data က Product[] ဖြစ်လို့ data[0] က Product တစ်ခု ဖြစ်မယ်၊ သူ့ရဲ့ price ကို သုံးလို့ရတယ်
`;
const classGenerics = `
// Stack Class ကို Generic ဖြစ်အောင် <ElementType> သုံးလိုက်မယ်
// ဒီ Stack ထဲမှာ ဘယ် Type က Data တွေ ထည့်မလဲဆိုတာ ElementType က သတ်မှတ်ပေးမယ်
class Stack<ElementType> {
// ဒီ Stack ထဲက data တွေကို ထိန်းသိမ်းမယ့် array
private items: ElementType[] = [];

// Stack ထဲကို Data ထည့်မယ့် Function
push(item: ElementType): void { // ထည့်မယ့် item ရဲ့ Type က Stack ရဲ့ ElementType ဖြစ်ရမယ်
this.items.push(item);
}

// Stack ထဲက နောက်ဆုံး Data ကို ပြန်ထုတ်မယ့် Function
pop(): ElementType | undefined { // ပြန်ထွက်လာမယ့် Data ရဲ့ Type က Stack ရဲ့ ElementType ပဲ ဖြစ်မယ်၊ ဒါမှမဟုတ် ဘာမှ မရှိရင် undefined
return this.items.pop();
}

// Stack ထဲက နောက်ဆုံး Data ကို ကြည့်မယ့် Function (ထုတ်ယူခြင်းမရှိ)
peek(): ElementType | undefined { // Type က pop လိုပဲ
return this.items[this.items.length - 1];
}
}

// အခု ဒီ Generic Stack Class ကို သုံးပြီး Stack Object တွေ ဖန်တီးကြည့်မယ်
// number တွေပဲ ထည့်လို့ရမယ့် Stack တစ်ခု ဖန်တီးမယ်
let numberStack = new Stack<number>(); // Stack<number> လို့ သတ်မှတ်လိုက်တော့ ElementType က number ဖြစ်သွားပြီ

numberStack.push(10); // number ထည့်လို့ရတယ်
numberStack.push(20); // number ထပ်ထည့်လို့ရတယ်

let lastNumber = numberStack.pop(); // pop လုပ်လိုက်ရင် number | undefined ပြန်ထွက်မယ်။ တကယ်တော့ 20 (number) ပြန်ထွက်တယ်
console.log(lastNumber); // Output: 20

// string တွေပဲ ထည့်လို့ရမယ့် Stack တစ်ခု ဖန်တီးမယ်
let stringStack = new Stack<string>(); // Stack<string> လို့ သတ်မှတ်လိုက်တော့ ElementType က string ဖြစ်သွားပြီ

stringStack.push("first"); // string ထည့်လို့ရတယ်
stringStack.push("second"); // string ထပ်ထည့်လို့ရတယ်

let lastString = stringStack.pop(); // pop လုပ်လိုက်ရင် string | undefined ပြန်ထွက်မယ်။ တကယ်တော့ "second" (string) ပြန်ထွက်တယ်
console.log(lastString); // Output: "second"

// stringStack.push(123); // ERROR: stringStack က string တွေအတွက် Stack ဖြစ်လို့ number လာထည့်လို့ မရဘူး။ TypeScript က Error ပြပြီ!`;
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"generic-functions\">Generic Functions</h2><a class=\"sl-anchor-link\" href=\"#generic-functions\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Generic Functions”</span></a></div>\n<p>Generics က ခုနက ပြောခဲ့တဲ့ Identity Function လို ရိုးရိုးလေးတွေတင်မကပါဘူး။ တခြား Function အမျိုးမျိုးမှာလည်း သုံးလို့ရတယ်။ ဥပမာအနေနဲ့ Data တစ်ခုခုကို လက်ခံပြီး အဲဒီ Data တစ်ခုတည်း ပါဝင်တဲ့ array တစ်ခု ပြန်ထုတ်ပေးမယ့် Function လေးတစ်ခု ရေးကြည့်ရအောင်။</p>\n"
    }), createVNode(Code, {
      code: code,
      lang: "typescript",
      title: "index.ts"
    }), "\n", createVNode($$Aside, {
      title: "မှတ်ချက်",
      "set:html": "<p>ဒီ wrapInArray Function မှာဆိုရင်လည်း Generic Type T ကို သုံးထားတာ တွေ့ရပါမယ်။\nFunction ကို ခေါ်လိုက်တဲ့အခါ ကျွန်တော်တို့ ထည့်လိုက်တဲ့ input Data ရဲ့ Type\nကို ကြည့်ပြီး TypeScript က T က ဘာလဲဆိုတာကို သူဘာသာသူ မှန်းသိသွားတယ်။ Function\nက ပြန်ထုတ်ပေးမယ့် Type ကိုတော့ T[] (အဲဒီ Type T ရဲ့ array) လို့ တိတိကျကျ\nသတ်မှတ်ပေးထားတယ်။ ဒီလို Generic သုံးထားတော့ Function တစ်ခုတည်းနဲ့ မတူညီတဲ့\nData Type တွေရဲ့ array တွေကို လွယ်လွယ် ဖန်တီးလို့ ရသွားပြီပေါ့။ ပြန်လည်\nအသုံးပြုလို့ရတယ် (Reusable) ဖြစ်သွားပြီ။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"generic-interfaces\">Generic Interfaces</h2><a class=\"sl-anchor-link\" href=\"#generic-interfaces\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Generic Interfaces”</span></a></div>\n<p>Interfaces တွေက object တွေရဲ့ ပုံစံ (shape) ကို သတ်မှတ်ပေးတယ်ဆိုတာ သိထားပြီးသားနော်။ ဒီ Interface တွေရဲ့ ပုံစံကိုလည်း Generics သုံးပြီး ပိုပြီး လိုက်လျောညီထွေ ဖြစ်အောင် လုပ်လို့ရတယ်။ API ကနေ ပြန်လာတဲ့ Response တွေအတွက် Standard ပုံစံတစ်ခု သတ်မှတ်တာက Generic Interface ရဲ့ အကောင်းဆုံး ဥပမာတစ်ခုပဲ။</p>\n"
    }), createVNode(Code, {
      code: code2,
      lang: "typescript",
      title: "service.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<br>\n"
    }), createVNode($$Aside, {
      title: "မှတ်ချက်",
      children: `ApiResponse<DataType> လို့ Generic Interface တစ်ခုတည်း ရေးလိုက်ရုံနဲ့ API ကနေ User Data ပြန်လာရင် ApiResponse<User> လို့ သုံး၊ Product Data ပြန်လာရင် ApiResponse<Product> လို့ သုံး၊ Product Array ပြန်လာရင် ApiResponse<Product[]> လို့ သုံး... စသဖြင့် လိုအပ်တဲ့ Data Type ကို DataType နေရာမှာ အစားထိုးပြီး သုံးသွားလို့ရပြီ။ UserApiResponse, ProductsApiResponse စသဖြင့် Interface တွေ အများကြီး ထပ်လုပ်နေစရာ မလိုတော့ဘူး။ ဒါက API Response တွေကို ကိုင်တွယ်တဲ့နေရာမှာ ပုံစံတူညီစေပြီး Type မှန်ကန်စိတ်ချရစေတယ်။`
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"generic-classes\">Generic Classes</h2><a class=\"sl-anchor-link\" href=\"#generic-classes\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Generic Classes”</span></a></div>\n<p>Classes တွေမှာလည်း Generics ကို သုံးလို့ရတယ်။ ဥပမာအားဖြင့် Data တွေကို အစီအစဉ်အတိုင်း ထည့်သွင်းပြီး နောက်ဆုံးမှ ထည့်တဲ့ Data ကို အရင်ဆုံး ပြန်ထုတ်ယူရတဲ့ Data Structure တစ်ခုဖြစ်တဲ့ Stack (Last-In, First-Out) ရိုးရိုးလေးတစ်ခုကို Class နဲ့ တည်ဆောက်ကြည့်ရအောင်။</p>\n"
    }), createVNode(Code, {
      code: classGenerics,
      lang: "typescript",
      title: "Stack.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<br>\n"
    }), createVNode($$Aside, {
      title: "မှတ်ချက်",
      children: `Stack<ElementType> Class ကို Generic ဖြစ်အောင် ရေးလိုက်တော့ ဒီ Class က ဘယ် Type ရဲ့ Data တွေကိုမဆို ထိန်းသိမ်းထားနိုင်သွားပြီ။ ဘယ် Type ကို ထိန်းသိမ်းမလဲဆိုတာကို new Stack<number>() ဒါမှမဟုတ် new Stack<string>() လိုမျိုး Object အသစ် ဖန်တီးတဲ့အချိန်မှာ သတ်မှတ်ပေးလိုက်ရုံပဲ။`
    }), "\n", createVNode(_components.blockquote, {
      "set:html": "\n<p>Class ထဲက Method တွေဖြစ်တဲ့ push, pop, peek တွေ အားလုံးကလည်း အဲဒီ သတ်မှတ်လိုက်တဲ့\nElementType Type အတိုင်းပဲ အလုပ်လုပ်တော့ Type Safety ကို သေချာစေတယ်။ numberStack\nထဲကို string သွားထည့်လို့ မရဘူး၊ stringStack ထဲကို number သွားထည့်လို့ မရဘူး။ ဒါကြောင့်\nCode တွေ ပိုစိတ်ချရပြီး ပြန်သုံးရ ပိုလွယ်လာတာပေါ့။</p>\n"
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

const url = "src/content/docs/advanced-typescript/generics/usage-of-generics.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/generics/usage-of-generics.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/generics/usage-of-generics.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, classGenerics, code, code2, Content as default, file, frontmatter, getHeadings, url };
