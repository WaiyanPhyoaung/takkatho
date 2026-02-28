import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "Generic များကို ထိန်းချုပ်ခြင်း: ကန့်သတ်ချက်များ (Constraints)",
  "description": "Generic များကို ထိန်းချုပ်ခြင်း: ကန့်သတ်ချက်များ (Constraints)"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "အဓိက-ပြဿနာ-generic-တွေက-တစ်ခါတလေ-ပိုပြီး-လိုက်လျောလွန်းနေခြင်း",
    "text": "အဓိက ပြဿနာ: Generic တွေက တစ်ခါတလေ ပိုပြီး လိုက်လျောလွန်းနေခြင်း"
  }, {
    "depth": 3,
    "slug": "ဖြေရှင်းနည်း-extends-ကို-အသုံးပြု-ကန့်သတ်ခြင်း-constraints",
    "text": "ဖြေရှင်းနည်း: extends ကို အသုံးပြု၍ ကန့်သတ်ခြင်း (Constraints)"
  }, {
    "depth": 3,
    "slug": "ကန့်သတ်ထားသော-generic-များကို-အသုံးပြုခြင်း",
    "text": "ကန့်သတ်ထားသော Generic များကို အသုံးပြုခြင်း"
  }];
}
const logLengthFunction = `
function logLength<T>(arg: T): void {
  // TypeScript က Error ပြလိမ့်မယ်!
  // console.log(arg.length); // ERROR: Property 'length' does not exist on type 'T'.
}
`;
const extendsCode = `
// ကျွန်တော်တို့ လိုအပ်တဲ့ Property ရှိကြောင်း ဖော်ပြမယ့် Interface လေးတစ်ခု အရင်သတ်မှတ်မယ်
interface Lengthwise {
  length: number;
}

// T ကို ကန့်သတ်လိုက်မယ်: T ဟာ Lengthwise Interface မှာ ရှိတဲ့ Property တွေ ပါကို ပါရမယ်
function logLength<T extends Lengthwise>(arg: T): void {
// အခုဆိုရင် TypeScript က arg မှာ .length Property ရှိကြောင်း သိနေပြီ!
console.log(\`Length: \${arg.length}\`);
}
`;
const extendsCode2 = `
logLength("Hello TypeScript!"); // အလုပ်လုပ်တယ် (string မှာ length ရှိတယ်)
logLength([1, 2, 3, 4]); // အလုပ်လုပ်တယ် (array မှာ length ရှိတယ်)
logLength({ length: 10, value: "Data" }); // အလုပ်လုပ်တယ် (ဒီ object မှာ length property ပါတယ်)

// logLength(123); // ERROR: number Type က Lengthwise Type နဲ့ မကိုက်ညီဘူးလို့ TypeScript က Error ပြပြီ။
// logLength({ name: "No length" }); // ERROR: length Property ပျောက်နေတယ်လို့ Error ပြပြီ။
// logLength({}); // ERROR: length Property ပျောက်နေတယ်လို့ Error ပြပြီ။
`;
const extendsCode3 = `
// T က မည်သည့် object type မဆို ဖြစ်ရမယ်၊ K ကတော့ T ရဲ့ Property နာမည်တွေထဲက တစ်ခု ဖြစ်ရမယ်လို့ သတ်မှတ်လိုက်တာ
function getProperty<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]; // obj ထဲက key ဆိုတဲ့ property ရဲ့ တန်ဖိုးကို ပြန်ထုတ်မယ်
}

let user = { name: "Alice", age: 30 }; // user က { name: string; age: number; } Type

// user object ထဲက "name" ဆိုတဲ့ property ကို ယူမယ်
let userName = getProperty(user, "name"); // Works! K က "name" ဖြစ်သွားတယ်၊ T က user ရဲ့ Type
console.log(userName); // Output: Alice

// user object ထဲက "address" ဆိုတဲ့ property ကို ယူကြည့်မယ်
// let userAddress = getProperty(user, "address"); // ERROR: "address" ဆိုတာ user ရဲ့ Property နာမည်တွေ ("name" | "age") ထဲမှာ မပါဘူးလို့ TypeScript က Error ပြပြီ။
`;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အဓိက-ပြဿနာ-generic-တွေက-တစ်ခါတလေ-ပိုပြီး-လိုက်လျောလွန်းနေခြင်း\">အဓိက ပြဿနာ: Generic တွေက တစ်ခါတလေ ပိုပြီး လိုက်လျောလွန်းနေခြင်း</h3><a class=\"sl-anchor-link\" href=\"#အဓိက-ပြဿနာ-generic-တွေက-တစ်ခါတလေ-ပိုပြီး-လိုက်လျောလွန်းနေခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အဓိက ပြဿနာ: Generic တွေက တစ်ခါတလေ ပိုပြီး လိုက်လျောလွန်းနေခြင်း”</span></a></div>\n<p>Generic တွေက T က ဘာ Type မဆို ဖြစ်လို့ရတယ်ဆိုတဲ့အတွက် တကယ် အစွမ်းထက်ပါတယ်။ ဒါပေမယ့် တစ်ခါတလေကျတော့ အဲဒီ လိုက်လျောလွန်းတာကြီးကပဲ ပြဿနာ ပြန်ဖြစ်တတ်တယ်။ ဥပမာ - ကျွန်တော်တို့ရဲ့ Generic Function ထဲမှာ argument (လက်ခံရရှိတဲ့ Data) ရဲ့ Property တစ်ခုခုကို သုံးချင်တယ်ဆိုပါစို့။</p>\n<p>ဥပမာအနေနဲ့၊ လက်ခံရရှိတဲ့ Data ရဲ့ Length ကို Console မှာ ထုတ်ပြမယ့် Function လေးတစ်ခု ရေးကြည့်ရအောင်။</p>\n"
    }), createVNode(Code, {
      code: logLengthFunction,
      lang: "typescript",
      title: "index.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<br>\n"
    }), `ဒီမှာ TypeScript က မှန်မှန်ကန်ကန်ပဲ Error ပြတယ်။ ဘာလို့လဲ? ဘာလို့လဲဆိုတော့ T က ဘယ် Type မဆို ဖြစ်နိုင်တယ်လေ။ တကယ်လို့ တစ်ယောက်ယောက်က logLength(123) လို့ ခေါ်လိုက်ရင် ဘာဖြစ်မလဲ? number Type တွေမှာ .length ဆိုတဲ့ Property မှ မရှိတာ။ ဒါမှမဟုတ် logLength({ name: 'Bob' }) လို့ ခေါ်ရင်ရော? အဲဒီ object မှာလည်း .length ဆိုတာ မရှိဘူး။ ဒီလိုမျိုး T က တကယ့်ကို ဘာမဆို ဖြစ်နိုင်နေရင် ကျွန်တော်တို့ရဲ့ Function က Type Safety မဖြစ်တော့ဘူး (စိတ်မချရတော့ဘူး)။ `, "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဖြေရှင်းနည်း-extends-ကို-အသုံးပြု-ကန့်သတ်ခြင်း-constraints\">ဖြေရှင်းနည်း: extends ကို အသုံးပြု၍ ကန့်သတ်ခြင်း (Constraints)</h3><a class=\"sl-anchor-link\" href=\"#ဖြေရှင်းနည်း-extends-ကို-အသုံးပြု-ကန့်သတ်ခြင်း-constraints\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဖြေရှင်းနည်း: extends ကို အသုံးပြု၍ ကန့်သတ်ခြင်း (Constraints)”</span></a></div>\n<p>ဒီတော့ ကျွန်တော်တို့ TypeScript ကို ပြောပြဖို့ လိုလာပြီ။ ‘အိုကေ၊ T က Flexible ဖြစ်ပါစေ၊ ဒါပေမယ့် သူဟာ length ဆိုတဲ့ Property တစ်ခု ပါကို ပါရမယ် (ပြီးတော့ အဲဒီ Property က ဖြစ်နိုင်ရင် number Type ဖြစ်သင့်တယ်)’ လို့ သတ်မှတ်ပေးရမယ်။</p>\n<p>ဒီလို သတ်မှတ်တာကို Generic ကြေညာတဲ့နေရာမှာ extends Keyword ကို အသုံးပြုပြီး လုပ်ပါတယ်။</p>\n"
    }), createVNode(Code, {
      code: extendsCode,
      lang: "typescript",
      title: "index.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<br>\n"
    }), createVNode($$Aside, {
      title: "ရှင်းပြချက်",
      children: `<T extends Lengthwise> ဆိုတာကို ဖတ်ရရင် 'T က ဘယ် Type မဆို ဖြစ်လို့ရတယ်၊ ဒါပေမယ့် သူဟာ Lengthwise Interface ကို extends လုပ်ထားရမယ် (ဒါမှမဟုတ် Lengthwise Interface နဲ့ ပုံစံ (shape) တူရမယ်၊ Lengthwise မှာပါတဲ့ Property တွေ ပါရမယ်)' လို့ ပြောလိုက်တာပါပဲ။ ဒါ့ကြောင့် T Type ဟာ length ဆိုတဲ့ number Type Property တစ်ခု သေချာပေါက် ပါဝင်ရမယ်လို့ အာမခံလိုက်တာပါပဲ။`
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ကန့်သတ်ထားသော-generic-များကို-အသုံးပြုခြင်း\">ကန့်သတ်ထားသော Generic များကို အသုံးပြုခြင်း</h3><a class=\"sl-anchor-link\" href=\"#ကန့်သတ်ထားသော-generic-များကို-အသုံးပြုခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ကန့်သတ်ထားသော Generic များကို အသုံးပြုခြင်း”</span></a></div>\n<p>ဒီလို ကန့်သတ်ချက် ထည့်လိုက်တော့ ကျွန်တော်တို့ရဲ့ Function က ကန့်သတ်ချက်နဲ့ ကိုက်ညီတဲ့ Type တွေနဲ့ စိတ်ချစွာ အလုပ်လုပ်နိုင်သွားပြီ။</p>\n"
    }), createVNode(Code, {
      code: extendsCode2,
      lang: "typescript",
      title: "index.ts"
    }), "\n", createVNode($$Aside, {
      title: "ကောင်းကျိုး",
      type: "tip",
      "set:html": "<p>Constraints တွေက ကျွန်တော်တို့ကို အကောင်းဆုံး နှစ်မျိုးလုံး ပေးတယ်။ Generic\nရဲ့ Flexible ဖြစ်မှု နဲ့ လိုချင်တဲ့ Property ဒါမှမဟုတ် Method တွေ ရှိကြောင်း\nသိရတဲ့ Type Safety ပေါ့။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>တစ်ခါတလေကျတော့ သီးခြား Interface တစ်ခု သတ်မှတ်ဖို့တောင် မလိုပါဘူး။ တခြား Type တစ်ခုရဲ့ ပုံစံ (shape) အတိုင်း တိုက်ရိုက် ကန့်သတ်လို့ရတယ်။ keyof T လိုမျိုး Keyword တွေကို သုံးတာပေါ့။ keyof T ဆိုတာက T Type မှာရှိတဲ့ Property တွေရဲ့ နာမည်တွေကို ပြောတာ။</p>\n"
    }), createVNode(Code, {
      code: extendsCode3,
      lang: "typescript",
      title: "index.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<br>\n"
    }), createVNode($$Aside, {
      title: "ရှင်းပြချက်",
      type: "note",
      children: `getProperty<T extends object, K extends keyof T> Function မှာ Generic Type နှစ်ခု (T နဲ့ K) သုံးထားတယ်။ T extends object ဆိုတာ T က object Type တစ်ခုခု ဖြစ်ရမယ်လို့ ကန့်သတ်တာ။ K extends keyof T ဆိုတာက K ဟာ T မှာ ရှိတဲ့ Property တွေရဲ့ နာမည်(key) တွေထဲက တစ်ခု ဖြစ်ရမယ်လို့ ကန့်သတ်တာ။`
    }), "\n", createVNode(_components.p, {
      "set:html": "ဒီလို သတ်မှတ်လိုက်တော့ getProperty Function ကို ခေါ်တဲ့အခါ obj ဆိုတဲ့ object ရယ်၊ အဲဒီ object ထဲမှာ တကယ်ရှိတဲ့ Property ရဲ့ နာမည် (key) ရယ် ပဲ လက်ခံတယ်။ မရှိတဲ့ Property နာမည်ကို ထည့်ခေါ်ရင် Code ရေးနေတုန်းမှာတင် TypeScript က Error ပြပေးတယ်။ ပြန်ထွက်လာမယ့် Data ရဲ့ Type ကလည်း T[K] (T ထဲက K ဆိုတဲ့ Property ရဲ့ Type) လို့ တိတိကျကျ သိရတယ်။"
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

const url = "src/content/docs/advanced-typescript/generics/generics-constraints.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/generics/generics-constraints.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/generics/generics-constraints.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, extendsCode, extendsCode2, extendsCode3, file, frontmatter, getHeadings, logLengthFunction, url };
