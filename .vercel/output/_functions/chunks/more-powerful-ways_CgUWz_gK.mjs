import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import './Content-image_C5QzPmj4.mjs';
import 'clsx';

const frontmatter = {
  "title": "ပိုအစွမ်းထက်တဲ့ ကိရိယာများ(Generics, Utility Types)",
  "description": "ပိုအစွမ်းထက်တဲ့ ကိရိယာများ"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "generics",
    "text": "Generics"
  }, {
    "depth": 3,
    "slug": "utility-types",
    "text": "Utility Types"
  }];
}
const code = `
function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

// အခုဆို ဒီ getFirst Function လေးကို Type အမျိုးမျိုးနဲ့ သုံးလို့ရပြီ

let firstNumber = getFirst([1, 2, 3]); // number Array နဲ့ သုံးလို့ရပြီ
// firstNumber ရဲ့ Type က number | undefined လို့ TypeScript က သိတယ်

let firstString = getFirst(["a", "b", "c"]); // string Array နဲ့လည်း သုံးလို့ရပြီ
// firstString ရဲ့ Type က string | undefined လို့ TypeScript က သိတယ်

interface User { name: string; age: number; }
let users: User[] = [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }];
let firstUser = getFirst(users); // ကိုယ်ပိုင် Object Array နဲ့လည်း သုံးလို့ရပြီ
// firstUser ရဲ့ Type က User | undefined လို့ TypeScript က သိတယ်
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>ဒီလို အခက်အခဲတွေကို ဖြေရှင်းဖို့ TypeScript မှာ ပိုအစွမ်းထက်တဲ့ ကိရိယာတွေ ရှိတယ်။ အဲဒါတွေကတော့ Generics, Utility Types, နဲ့ satisfies Keyword တွေပဲ ဖြစ်တယ်။</p>\n<ul>\n<li>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"generics\">Generics</h3><a class=\"sl-anchor-link\" href=\"#generics\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Generics”</span></a></div>\n</li>\n</ul>\n<p>Code တစ်ခုတည်းကိုပဲ Data Type အမျိုးမျိုးနဲ့ ပြန်လည် အသုံးပြုနိုင်အောင် လုပ်ပေးတယ်။ Code တွေ ထပ်ရေးရတာ သက်သာသွားတယ်။ (ပုံစံတူ လုပ်ဆောင်ချက်ကိုပဲ မတူညီတဲ့ Type တွေနဲ့ သုံးနိုင်စေတဲ့ မှော်ဆန်တဲ့ Box လိုမျိုးပေါ့။)</p>\n<ul>\n<li>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"utility-types\">Utility Types</h3><a class=\"sl-anchor-link\" href=\"#utility-types\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Utility Types”</span></a></div>\n<p>ရှိပြီးသား Data ပုံစံ (Type) တွေကနေ လိုအပ်သလို ပြောင်းထားတဲ့ Data ပုံစံအသစ်တွေ (Type အသစ်တွေ) ကို အလွယ်တကူ မြန်မြန် ဖန်တီးနိုင်စေတယ်။ (Data ပုံစံတွေကို အမြန် ပြင်ဆင်နိုင်တဲ့ ကိရိယာမျိုးစုံ ပါတဲ့ Box လိုမျိုးပေါ့။)</p>\n</li>\n</ul>\n"
    }), createVNode($$Aside, {
      title: "မှတ်ချက်",
      "set:html": "<p>“ဒီအရာတွေကို လေ့လာခြင်းအားဖြင့် Program တွေ ရေးတဲ့အခါ Code တွေ ပိုပြီး\nသပ်ရပ်လာမယ်၊ ပြန်သုံးလို့ရတာ များလာမယ်(Reusable)၊ ထိန်းသိမ်းရတာ\nပိုလွယ်ကူလာမယ်(Maintainable)၊ အရေးကြီးဆုံးကတော့ ပိုပြီး ခိုင်မာစိတ်ချရတဲ့\nProgram တွေ ရေးနိုင်လာပါလိမ့်မယ်။”</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>ဥပမာ၊ အရင် သင်ခန်းစာက Code တွေ ထပ်နေတဲ့ ပြဿနာ (Type အမျိုးမျိုးအတွက် Array ထဲက ပထမဆုံး Element ယူတဲ့ Function ကို ခွဲရေးရတာ) ကို မှတ်မိသေးလား?”</p>\n<p>“အဲဒီလို ပြဿနာမျိုးအတွက် Generics ဆိုတာကို သုံးလို့ရတယ်။ Generics နဲ့ဆို အဲဒီ ပထမဆုံး Element ယူတဲ့ Function ကို Code တစ်ကြောင်းတည်းနဲ့ Type အမျိုးမျိုးအတွက် လွယ်လွယ်လေး ရေးလို့ရပြီ။ အောက်က Code လေးကို ကြည့်လိုက်ပါ။”</p>\n"
    }), createVNode(Code, {
      code: code,
      lang: "typescript",
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

const url = "src/content/docs/advanced-typescript/why-is-advanced-ts-needed/more-powerful-ways.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/why-is-advanced-ts-needed/more-powerful-ways.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/why-is-advanced-ts-needed/more-powerful-ways.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, code, Content as default, file, frontmatter, getHeadings, url };
