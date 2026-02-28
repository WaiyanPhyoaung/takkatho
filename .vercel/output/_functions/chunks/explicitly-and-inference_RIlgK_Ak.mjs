import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "Generic Function ကို သုံးပုံ: တိုက်ရိုက်ပြောပြခြင်း နဲ့ သူဘာသာသိခြင်း (Inference)",
  "description": "(Generic Function ကို သုံးပုံ): တိုက်ရိုက်ပြောပြခြင်း နဲ့ TypeScript က သူဘာသာ မှန်းသိခြင်း (Inference)"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "နည်းလမ်း-၁-type-ကို-ကိုယ်တိုင်-တိုက်ရိုက်-ပြောပြခြင်း",
    "text": "နည်းလမ်း ၁: Type ကို ကိုယ်တိုင် တိုက်ရိုက် ပြောပြခြင်း"
  }, {
    "depth": 3,
    "slug": "နည်းလမ်း-၂-type-inference-typescript-က-သူဘာသာ-သိခြင်း",
    "text": "နည်းလမ်း ၂: Type Inference (TypeScript က သူဘာသာ သိခြင်း):"
  }];
}
const code = `
// T က string ဖြစ်ရမယ်လို့ ကိုယ်တိုင် ပြောလိုက်တာ
let outputString = identity<string>("Hello Generics!");

// T က number ဖြစ်ရမယ်လို့ ကိုယ်တိုင် ပြောလိုက်တာ
let outputNumber = identity<number>(123);

// T က User ဖြစ်ရမယ်လို့ ကိုယ်တိုင် ပြောလိုက်တာ
interface User { name: string; } // User Type ကို ပြန်ထည့်ပေးထားပါတယ်
let outputUser = identity<User>({ name: "Alice" });

console.log(outputString.toUpperCase()); // Type က string မှန်း သိလို့ toUpperCase() ခေါ်လို့ရတယ်၊ TypeScript က စစ်ပေးထားတယ်!
console.log(outputNumber.toFixed(2)); // Type က number မှန်း သိလို့ toFixed(2) ခေါ်လို့ရတယ်၊ စိတ်ချရတယ်!
console.log(outputUser.name); // Type က User မှန်း သိလို့ name ကို သုံးလို့ရတယ်၊ စိတ်ချရတယ်!
`;
const code2 = `// "Hello Inference!" ဆိုတဲ့ string ကို ထည့်လိုက်တာနဲ့ T က string လို့ TypeScript က ခန့်မှန်းသိတယ်
let inferredString = identity("Hello Inference!");

// 456 ဆိုတဲ့ number ကို ထည့်လိုက်တာနဲ့ T က number လို့ TypeScript က ခန့်မှန်းသိတယ်
let inferredNumber = identity(456);

// { name: "Bob" } ဆိုတဲ့ object ကို ထည့်လိုက်တာနဲ့ T က { name: string } လို့ TypeScript က ခန့်မှန်းသိတယ်
let inferredUser = identity({ name: "Bob" });

console.log(inferredString.toUpperCase()); // ခန့်မှန်းသိပေမယ့် Type က မှန်နေလို့ စိတ်ချရတုန်းပဲ!
console.log(inferredNumber.toFixed(2));
console.log(inferredUser.name);
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>ဒီလိုမျိုး Generic ရေးထားတဲ့ Function ကို ဘယ်လို ခေါ်သုံးရမလဲ? နည်းလမ်း နှစ်ခု ရှိပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"နည်းလမ်း-၁-type-ကို-ကိုယ်တိုင်-တိုက်ရိုက်-ပြောပြခြင်း\">နည်းလမ်း ၁: Type ကို ကိုယ်တိုင် တိုက်ရိုက် ပြောပြခြင်း</h3><a class=\"sl-anchor-link\" href=\"#နည်းလမ်း-၁-type-ကို-ကိုယ်တိုင်-တိုက်ရိုက်-ပြောပြခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “နည်းလမ်း ၁: Type ကို ကိုယ်တိုင် တိုက်ရိုက် ပြောပြခြင်း”</span></a></div>\n<p>Function ကို ခေါ်သုံးတဲ့အခါ Angle Bracket &#x3C;> ထဲမှာ T နေရာမှာ ဘယ် Type ဖြစ်ရမယ်ဆိုတာကို ကျွန်တော်တို့ ကိုယ်တိုင် ထည့်ပြောပေးလို့ရတယ်။</p>\n"
    }), createVNode(Code, {
      code: code,
      lang: "typescript",
      title: "index.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"နည်းလမ်း-၂-type-inference-typescript-က-သူဘာသာ-သိခြင်း\">နည်းလမ်း ၂: Type Inference (TypeScript က သူဘာသာ သိခြင်း):</h3><a class=\"sl-anchor-link\" href=\"#နည်းလမ်း-၂-type-inference-typescript-က-သူဘာသာ-သိခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “နည်းလမ်း ၂: Type Inference (TypeScript က သူဘာသာ သိခြင်း):”</span></a></div>\n<p>အများစု အချိန်တွေမှာတော့ TypeScript က ကျွန်တော်တို့ ထည့်လိုက်တဲ့ Data ရဲ့ တန်ဖိုးကို ကြည့်ပြီး T နေရာမှာ ဘယ် Type ဖြစ်သင့်လဲဆိုတာကို သူဘာသာသူ ခန့်မှန်းပြီး သိတယ်။ ဒီလိုမျိုး TypeScript က ကိုယ်တိုင် သိတာကို Inference လို့ခေါ်တယ်။ ဒီနည်းက Code ရေးရတာ ပိုလွယ်တယ်။</p>\n"
    }), createVNode(Code, {
      code: code2,
      lang: "typescript",
      title: "index.ts"
    }), "\n", createVNode($$Aside, {
      title: "မှတ်ချက်",
      "set:html": "<p>အများအားဖြင့်တော့ Inference ကိုပဲ သုံးကြလိမ့်မယ်။ ဒါပေမယ့် တိုက်ရိုက်\nပြောပြလို့ရတယ်ဆိုတာ သိထားတာက ပိုရှုပ်ထွေးတဲ့ အခြေအနေတွေမှာ အရေးကြီးတယ်။ အဓိက\nမှတ်ထားရမှာက Type Safety (Type မှန်ကန်စိတ်ချရမှု)ပဲ။ Generic Function ထဲကို\nဘယ် Type ထည့်လိုက်သည်ဖြစ်စေ၊ TypeScript က အဲဒီ Function ကနေ ပြန်ထွက်လာမယ့်\nData ကလည်း အဲဒီ Type ပဲ ဖြစ်လိမ့်မယ်လို့ သေချာ သိနေတယ်။ ဒါကြောင့် Code တွေ\nပိုစိတ်ချရလာတာပေါ့။</p>"
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

const url = "src/content/docs/advanced-typescript/generics/explicitly-and-inference.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/generics/explicitly-and-inference.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/generics/explicitly-and-inference.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, code, code2, Content as default, file, frontmatter, getHeadings, url };
