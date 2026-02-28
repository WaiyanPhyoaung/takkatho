import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "Parameters<T>, ReturnType<T>, Awaited<T>",
  "description": "Parameters<T>, ReturnType<T>, Awaited<T>"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "utility-type-များ-အမြန်ကြည့်-နိုင်ရန်-cheat-sheet",
    "text": "Utility Type များ အမြန်ကြည့် နိုင်ရန် (Cheat Sheet):"
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
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"utility-type-များ-အမြန်ကြည့်-နိုင်ရန်-cheat-sheet\">Utility Type များ အမြန်ကြည့် နိုင်ရန် (Cheat Sheet):</h3><a class=\"sl-anchor-link\" href=\"#utility-type-များ-အမြန်ကြည့်-နိုင်ရန်-cheat-sheet\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Utility Type များ အမြန်ကြည့် နိုင်ရန် (Cheat Sheet):”</span></a></div>\n<p>Utility Type တွေရဲ့ အဓိက အချက်အလက်တွေကို အတိုချုပ် စာရင်း ပြန်လုပ်ပေးထားပါတယ်။</p>\n<ul>\n<li><strong>Partial&#x3C;T>: All properties optional.</strong> <br>\nT ရဲ့ Property အားလုံးကို Optional (ပါချင်မှပါ) ဖြစ်အောင် လုပ်ပေးတယ်။\n<br>\n<br>\n</li>\n<li><strong>Required&#x3C;T>: All properties required.</strong><br> T ရဲ့ Property အားလုံးကို မဖြစ်မနေ (Required) ဖြစ်အောင် လုပ်ပေးတယ်။\n<br>\n<br>\n</li>\n<li><strong>Readonly&#x3C;T>: All properties readonly.</strong><br> T ရဲ့ Property အားလုံးကို ပြင်လို့မရအောင် (Readonly) လုပ်ပေးတယ်။\n<br>\n<br>\n</li>\n<li><strong>Pick&#x3C;T, K>: Selects properties K from T.</strong><br> T ထဲက ကိုယ်လိုချင်တဲ့ Property K တွေကို ရွေးထုတ်ပေးတယ်။\n<br>\n<br>\n</li>\n<li><strong>Omit&#x3C;T, K>: Removes properties K from T.</strong><br> T ထဲက ကိုယ်မလိုချင်တဲ့ Property K တွေကို ဖယ်ထုတ်ပေးတယ်။\n<br>\n<br>\n</li>\n<li><strong>Record&#x3C;K, T>: Object with keys of type K and values of type T.</strong><br> Key တွေက K Type ဖြစ်ပြီး Value တွေက T Type ဖြစ်တဲ့ Object တစ်ခုကို လုပ်ပေးတယ်။\n<br>\n<br>\n</li>\n<li><strong>Exclude&#x3C;T, U>: From union T, remove types assignable to U.</strong><br> Union Type T ထဲက U နဲ့ တူတဲ့ Type တွေကို ဖယ်ထုတ်ပေးတယ်။\n<br>\n<br>\n</li>\n<li><strong>Extract&#x3C;T, U>: From union T, keep only types assignable to U.</strong><br> Union Type T ထဲက U နဲ့ တူတဲ့ Type တွေကိုပဲ ထားပေးတယ်။\n<br>\n<br>\n</li>\n<li>**NonNullable&#x3C;T>: Remove null and undefined from T. **<br> T ထဲက null နဲ့ undefined Type တွေကို ဖယ်ထုတ်ပေးတယ်။\n<br>\n<br>\n</li>\n<li><strong>Parameters&#x3C;F>: Tuple of function F’s parameter types.</strong><br> Function F ရဲ့ Parameter တွေရဲ့ Type ကို Tuple အနေနဲ့ ထုတ်ပေးတယ်။\n<br>\n<br>\n</li>\n<li><strong>ReturnType&#x3C;F>: Return type of function F.</strong><br> Function F ရဲ့ ပြန်လာသော result ရဲ့ Type ကို ထုတ်ပေးတယ်။\n<br>\n<br>\n</li>\n<li><strong>Awaited&#x3C;P>: Resolved type of Promise P.</strong><br> Promise P ရဲ့ အထဲက ပြန်လာမယ့် (resolved) Type ကို ထုတ်ပေးတယ်။</li>\n</ul>"
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
const url = "src/content/docs/advanced-typescript/utility/utility-cheat-sheet.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/utility/utility-cheat-sheet.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/utility/utility-cheat-sheet.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, awaited, Content as default, file, frontmatter, getHeadings, parameters, returnType, url };
