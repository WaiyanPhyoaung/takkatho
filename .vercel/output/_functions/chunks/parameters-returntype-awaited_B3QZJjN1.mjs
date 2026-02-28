import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "Parameters<T>, ReturnType<T>, Awaited<T>",
  "description": "Parameters<T>, ReturnType<T>, Awaited<T>"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "parameterst-function-ရဲ့-parameter-type-တွေကို-ရယူခြင်း",
    "text": "Parameters<T>: Function ရဲ့ Parameter Type တွေကို ရယူခြင်း"
  }, {
    "depth": 3,
    "slug": "returntypet-function-ရဲ့-ပြန်လာသော-result-ရဲ့type-ကို-ရယူခြင်း",
    "text": "ReturnType<T>: Function ရဲ့ ပြန်လာသော result ရဲ့Type ကို ရယူခြင်း"
  }, {
    "depth": 3,
    "slug": "awaitedt-promise-ရဲ့-အထဲက-resolved-type-ကို-ရယူခြင်း",
    "text": "Awaited<T>: Promise ရဲ့ အထဲက (Resolved) Type ကို ရယူခြင်း"
  }];
}
const parameters = `
function greet(name: string, age: number, options?: { verbose: boolean }): void {
  console.log(\`Hello \${name}, age \${age}\`);
}

// GreetParams ဆိုတဲ့ type အသစ် လုပ်မယ်။ သူက greet function ရဲ့ parameter တွေရဲ့ type ဖြစ်မယ်။
type GreetParams = Parameters<typeof greet>; // ရလာမယ့် Type: [name: string, age: number, options?: { verbose: boolean }]

function callGreetWithStoredParams(args: GreetParams) {
greet(...args); // tuple ကို arguments တွေအဖြစ် ပို့ဖို့ spread operator (...) ကို သုံးတယ်။
}

callGreetWithStoredParams(["Bob", 42, { verbose: true }]);
`;
const returnType = `
function fetchUser(id: number): Promise<{ id: number; name: string }> {
  return Promise.resolve({ id, name: "User " + id });
}

// FetchUserReturn ဆိုတဲ့ Type အသစ် လုပ်မယ်။ သူက fetchUser function ရဲ့ return type ဖြစ်မယ်။
type FetchUserReturn = ReturnType<typeof fetchUser>; // ရလာမယ့် Type: Promise<{ id: number; name: string }>

let userPromise: FetchUserReturn = fetchUser(1);
userPromise.then(userData => console.log(userData.name));
`;
const awaited = `async function getUserData(): Promise<{ name: string; age: number }> {
return { name: "Carol", age: 25 };
}

async function getNestedPromise(): Promise<Promise<string>> {
return Promise.resolve(Promise.resolve("Deeply nested!"));
}

// UserData ဆိုတဲ့ Type အသစ် လုပ်မယ်။ သူက getUserData ရဲ့ Return Type (Promise) ကို Awaited လုပ်ထားတာ။
type UserData = Awaited<ReturnType<typeof getUserData>>; // ရလာမယ့် Type: { name: string; age: number }

// NestedString ဆိုတဲ့ Type အသစ် လုပ်မယ်။ သူက getNestedPromise ရဲ့ Return Type (Promise<Promise<string>>) ကို Awaited လုပ်ထားတာ။
type NestedString = Awaited<ReturnType<typeof getNestedPromise>>; // ရလာမယ့် Type: string

async function displayUser() {
const user: UserData = await getUserData(); // user ရဲ့ Type က { name: string; age: number } ဖြစ်သွားပြီ။
console.log(user.name);

const nested: NestedString = await getNestedPromise(); // nested ရဲ့ Type က string ဖြစ်သွားပြီ။
console.log(nested.toUpperCase()); // string function ကို စိတ်ချစွာ ခေါ်သုံးနိုင်ပြီ။
}

displayUser();
};`;
function _createMdxContent(props) {
  const _components = {
    ul: "ul",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      type: "tip",
      "set:html": "<p>Function တွေနဲ့ Promise တွေဆီကနေ Type အချက်အလက်တွေကို ထုတ်ယူပေးတဲ့ Utility\nType တွေကို သုံးတတ်အောင် သင်ယူဖို့ ဖြစ်ပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"parameterst-function-ရဲ့-parameter-type-တွေကို-ရယူခြင်း\">Parameters&#x3C;T>: Function ရဲ့ Parameter Type တွေကို ရယူခြင်း</h3><a class=\"sl-anchor-link\" href=\"#parameterst-function-ရဲ့-parameter-type-တွေကို-ရယူခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Parameters&#x3C;T>: Function ရဲ့ Parameter Type တွေကို ရယူခြင်း”</span></a></div>\n<ul>\n<li><strong>ဘာလုပ်ပေးလဲ</strong>: Parameters&#x3C;Type> က Function တစ်ခုရဲ့ Parameter တွေရဲ့ Type တွေကို tuple (အစဉ်လိုက် စုစည်းထားတဲ့) Type တစ်ခုအနေနဲ့ လုပ်ပေးတယ်။</li>\n<li><strong>ဘယ်လို သုံးမလဲ</strong>: Parameters&#x3C;typeof myFunction> (မှတ်ချက်: typeof ကို Function ကိုယ်တိုင်ရဲ့ Type ကို ရယူဖို့ သုံးတာပါ)</li>\n</ul>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: parameters,
      title: "index.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<ul>\n<li><strong>ဘယ်အခါသုံးမလဲ</strong>:Function တွေကို ထပ်ဆင့်ခေါ်တဲ့ Higher-Order Function တွေ၊ Decorator တွေလိုမျိုးမှာ အသုံးဝင်တယ်။ ဒါမှမဟုတ် တခြား Function တစ်ခုရဲ့ Signature ကို လိုက်ပြီး Function အသစ်တစ်ခု လုပ်ချင်တဲ့အခါ၊ ဒါမှမဟုတ် Parameter တွေကို Type ပါတဲ့ tuple အဖြစ် သိမ်းထားချင်တဲ့အခါမျိုးမှာ သုံးနိုင်တယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"returntypet-function-ရဲ့-ပြန်လာသော-result-ရဲ့type-ကို-ရယူခြင်း\">ReturnType&#x3C;T>: Function ရဲ့ ပြန်လာသော result ရဲ့Type ကို ရယူခြင်း</h3><a class=\"sl-anchor-link\" href=\"#returntypet-function-ရဲ့-ပြန်လာသော-result-ရဲ့type-ကို-ရယူခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ReturnType&#x3C;T>: Function ရဲ့ ပြန်လာသော result ရဲ့Type ကို ရယူခြင်း”</span></a></div>\n<ul>\n<li><strong>ဘာလုပ်ပေးလဲ</strong>: ReturnType&#x3C;Type> က Function Type တစ်ခုရဲ့ ပြန်လာတဲ့ result ရဲ့Type ကို ရယူပြီး Type အသစ်တစ်ခု လုပ်ပေးတယ်။</li>\n<li><strong>ဘယ်လို သုံးမလဲ</strong>: ReturnType&#x3C;typeof myFunction></li>\n</ul>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: returnType,
      title: "index.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<ul>\n<li><strong>ဘယ်အခါသုံးမလဲ</strong>: Function တစ်ခုရဲ့ Result ကို သိမ်းမယ့် Variable ကို Type သတ်မှတ်ချင်တဲ့အခါ အသုံးဝင်တယ်။ ဒါမှမဟုတ် Function တစ်ခုရဲ့ Return Type ကို manually ရေးဖို့ ခက်ခဲနေတဲ့ Generic Function တွေနဲ့ အလုပ်လုပ်တဲ့အခါမျိုးမှာ အထောက်အကူပြုတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"awaitedt-promise-ရဲ့-အထဲက-resolved-type-ကို-ရယူခြင်း\">Awaited&#x3C;T>: Promise ရဲ့ အထဲက (Resolved) Type ကို ရယူခြင်း</h3><a class=\"sl-anchor-link\" href=\"#awaitedt-promise-ရဲ့-အထဲက-resolved-type-ကို-ရယူခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Awaited&#x3C;T>: Promise ရဲ့ အထဲက (Resolved) Type ကို ရယူခြင်း”</span></a></div>\n<ul>\n<li>\n<p><strong>ဘာလုပ်ပေးလဲ</strong>: Awaited&#x3C;Type> က Promise Type တွေကို အဆင့်ဆင့် unwraps (အထဲက Type ကို ထုတ်ယူ) လုပ်ပေးတယ်။</p>\n<ul>\n<li>Type က Awaited&#x3C;Promise&#x3C;X>> ဆိုရင် (X) ကို ရမယ်။</li>\n<li>Type က Promise မဟုတ်ရင် မူရင်း Type ကိုပဲ ပြန်ပေးမယ်။</li>\n<li>Nested Promise တွေ (Promise ထဲမှာ Promise ထပ်ပါတာ) ကိုလည်း ထုတ်ပေးနိုင်တယ်။</li>\n</ul>\n</li>\n<li>\n<p><strong>ဘယ်လို သုံးမလဲ</strong>: Awaited&#x3C;PromiseType></p>\n</li>\n</ul>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: awaited,
      title: "index.ts"
    }), "\n", createVNode(_components.ul, {
      "set:html": "\n<li><strong>ဘယ်အခါသုံးမလဲ</strong>: Asynchronous Operation တွေ (ဥပမာ API ခေါ်တာတွေ) ကနေ ပြန်လာမယ့် Promise ရဲ့ တကယ့် Value Type ကို သိချင်တဲ့အခါ အရမ်း အရေးကြီးတယ်။ အထူးသဖြင့် Promise Type က Generic ဖြစ်နေရင် ဒါမှမဟုတ် Promise ထဲမှာ Promise ထပ်ပါနေရင် အထဲက Data Type ကို အလွယ်တကူ ထုတ်ယူဖို့ ကူညီပေးတယ်။</li>\n"
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

const url = "src/content/docs/advanced-typescript/utility/parameters-returntype-awaited.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/utility/parameters-returntype-awaited.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/utility/parameters-returntype-awaited.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, awaited, Content as default, file, frontmatter, getHeadings, parameters, returnType, url };
