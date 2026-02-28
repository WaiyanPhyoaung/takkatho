import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "satisfies ကို လက်တွေ့ အသုံးပြုနိုင်သော နေရာများ",
  "description": "satisfies ကို လက်တွေ့ အသုံးပြုနိုင်သော နေရာများ"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "configuration-objects",
    "text": "Configuration Objects"
  }, {
    "depth": 3,
    "slug": "satisfies-ရဲ့-အကျိုးကျေးဇူးများ",
    "text": "satisfies ရဲ့ အကျိုးကျေးဇူးများ"
  }, {
    "depth": 3,
    "slug": "key-တွေ-အတိအကျ-သိထားတဲ့-object-တွေ-ဒါမှမဟုတ်-dictionary-တွေ-ကို-အသုံးပြုခြင်း",
    "text": "Key တွေ အတိအကျ သိထားတဲ့ Object တွေ (ဒါမှမဟုတ် Dictionary တွေ) ကို အသုံးပြုခြင်း"
  }, {
    "depth": 3,
    "slug": "arraytuple-တစ်ခုမှာ-ခွင့်ပြုထားတဲ့-type-တွေပဲ-ပါကြောင်း-သေချာစေခြင်း",
    "text": "Array/Tuple တစ်ခုမှာ ခွင့်ပြုထားတဲ့ Type တွေပဲ ပါကြောင်း သေချာစေခြင်း"
  }];
}
const configuration = `
type ThemeColors = "light" | "dark";

type ComponentSettings = {
padding: number;
font: string;
features?: Record<string, boolean>;
};

interface AppTheme {
activeTheme: ThemeColors;
componentDefaults: Record<string, ComponentSettings>;
}

const myAppTheme = {
activeTheme: "dark", // ဒီမှာ "dark" လို့ အတိအကျ သိတယ်။
componentDefaults: {
button: { padding: 10, font: "Arial", features: { roundedCorners: true } },
card: { padding: 15, font: "Georgia" }
// modal: { paddng: 5, font: "Verdana" } // ERROR: 'paddng' ဆိုပြီး စာလုံးပေါင်း မှားနေတာ။ \`satisfies AppTheme\` က ဒါကို ဖမ်းမိမှာ။
}
} satisfies AppTheme;
`;
const benefits = `
const currentThemeMode = myAppTheme.activeTheme; // Type က "dark" လို့ အတိအကျ သိတယ်။ ThemeColors ထဲက တစ်ခုခုလို့ မမှတ်တော့ဘူး။
const buttonPadding = myAppTheme.componentDefaults.button.padding; // Type က number လို့ အတိအကျပဲ။
const buttonHasRoundedCorners = myAppTheme.componentDefaults.button.features?.roundedCorners; // Type က boolean (true/false) ဒါမှမဟုတ် undefined လို့ အတိအကျ သိတယ်။
`;
const dictionary = `
type Permissions = "read" | "write" | "delete";
type UserRolePermissions = Record<Permissions, boolean>;

const adminPermissions = {
read: true,
write: true,
delete: true,
// moderate: true // ဒီနေရာမှာ 'moderate' လိုမျိုး မပါတဲ့ key ထည့်မိရင် error တက်မယ်။
} satisfies UserRolePermissions;

const guestPermissions = {
read: true,
write: false,
// delete property မပါဘူး!
} // satisfies UserRolePermissions; // ဒီနေရာမှာ \`satisfies UserRolePermissions\` ထည့်လိုက်ရင် error ပြမယ်။

// adminPermissions.read ရဲ့ type က \`true\` ဖြစ်တယ်၊ \`boolean\` မဟုတ်ဘူး။
`;
const array = `
type Color = "red" | "green" | "blue" | {custom: string};

const primaryPalette = [
"red",
"green",
{custom: "#FFA500"} // Orange
] satisfies Color[];

// primaryPalette[0] ရဲ့ Type က "red" လို့ အတိအကျပဲ။
// primaryPalette[2].custom ရဲ့ Type က string လို့ အတိအကျပဲ။
// const invalidPalette = [
// "red", "yellow"
// "yellow" က Color type ထဲမှာ မပါလို့ error တက်မယ်။
// ] satisfies Color[]; // ERROR!

type Command =
| { command: "navigate", path: string }
| { command: "wait", duration: number }
| { command: "log", message: string };

const userJourney = [
{ command: "navigate", path: "/home" },
{ command: "wait", duration: 500 },
{ command: "log", message: "User waited" },
// { command: "click", element: "button" } // ဒါက မှန်ကန်တဲ့ Command မဟုတ်လို့ error တက်မယ်။
] satisfies Command[];

// command type ကို ကြည့်ပြီး properties တွေကို လွယ်လွယ် ခေါ်သုံးလို့ရတယ်။
userJourney.forEach(step => {
if (step.command === "navigate") {
console.log(step.path); // step.path ရဲ့ type က string လို့ အတိအကျပဲ။
}
});
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      type: "tip",
      "set:html": "<p>satisfies ကို ဘယ်လိုနေရာတွေမှာ အသုံးဝင်လဲ၊ အကောင်းဆုံး ဘယ်လိုသုံးလို့ရလဲဆိုတာ\nလေ့လာကြည့်ရအောင်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"configuration-objects\">Configuration Objects</h3><a class=\"sl-anchor-link\" href=\"#configuration-objects\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Configuration Objects”</span></a></div>\n<p>Configuration ဆိုတာ setting တွေ စုထားတဲ့ object တွေပေါ့။ ဥပမာ - website ရဲ့ theme (အရောင်) တွေ၊ font တွေ၊ padding တွေ စသဖြင့်ပေါ့။ ဒီလို setting တွေကို စီမံခန့်ခွဲတဲ့အခါ satisfies က အရမ်းအသုံးဝင်ပါတယ်။ ပုံစံမှန်အောင် ထိန်းပေးရုံတင်မကဘဲ၊ setting တစ်ခုချင်းစီရဲ့ အသေးစိတ်အချက်အလက်တွေကိုပါ လုံလုံခြုံခြုံ ပြန်ထုတ်သုံးလို့ရအောင် ကူညီပေးပါတယ်။</p>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: configuration,
      title: "config.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"satisfies-ရဲ့-အကျိုးကျေးဇူးများ\"><code dir=\"auto\">satisfies</code> ရဲ့ အကျိုးကျေးဇူးများ</h3><a class=\"sl-anchor-link\" href=\"#satisfies-ရဲ့-အကျိုးကျေးဇူးများ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “satisfies ရဲ့ အကျိုးကျေးဇူးများ”</span></a></div>\n<p>၁။ စစ်ဆေးပေးခြင်း (Validation): <code dir=\"auto\">myAppTheme</code> object ဟာ <code dir=\"auto\">AppTheme</code> ဆိုတဲ့ သတ်မှတ်ထားတဲ့ ပုံစံနဲ့ ကိုက်ညီရဲ့လားဆိုတာ <code dir=\"auto\">satisfies</code> က စစ်ဆေးပေးတယ်။</p>\n<ul>\n<li><code dir=\"auto\">activeTheme</code> ကို “blue” လို့ ထားမိရင် error တက်မယ်။</li>\n<li><code dir=\"auto\">button.padding</code> ကို number မဟုတ်ဘဲ string (“10px”) ထည့်မိရင်လည်း error တက်မယ်။</li>\n<li><code dir=\"auto\">button.extraProp</code> ဆိုပြီး မရှိတဲ့ property ထပ်ထည့်မိရင်လည်း error တက်မယ်။</li>\n</ul>\n<p>၂။ အသေးစိတ် အချက်အလက် မပျောက်ဆုံးခြင်း (Specificity):</p>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: benefits,
      title: "config.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"key-တွေ-အတိအကျ-သိထားတဲ့-object-တွေ-ဒါမှမဟုတ်-dictionary-တွေ-ကို-အသုံးပြုခြင်း\">Key တွေ အတိအကျ သိထားတဲ့ Object တွေ (ဒါမှမဟုတ် Dictionary တွေ) ကို အသုံးပြုခြင်း</h3><a class=\"sl-anchor-link\" href=\"#key-တွေ-အတိအကျ-သိထားတဲ့-object-တွေ-ဒါမှမဟုတ်-dictionary-တွေ-ကို-အသုံးပြုခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Key တွေ အတိအကျ သိထားတဲ့ Object တွေ (ဒါမှမဟုတ် Dictionary တွေ) ကို အသုံးပြုခြင်း”</span></a></div>\n<p>Object တွေကို key-value pair တွေ စုထားတဲ့ dictionary လိုမျိုး သုံးရတဲ့အခါမျိုးမှာ <code dir=\"auto\">satisfies</code> က အရမ်းအသုံးဝင်ပါတယ်။ key တွေ အကုန်ပါရဲ့လား၊ value တွေက မှန်ရဲ့လားဆိုတာ သေချာအောင် လုပ်ပေးနိုင်သလို၊ ဒီ object ကို တစ်ခုချင်း လိုက်စစ်တာတို့၊ <code dir=\"auto\">Record</code> တစ်ခုလို သုံးတာတို့လည်း လုပ်လို့ရပါတယ်။</p>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: dictionary,
      title: "permission.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"arraytuple-တစ်ခုမှာ-ခွင့်ပြုထားတဲ့-type-တွေပဲ-ပါကြောင်း-သေချာစေခြင်း\">Array/Tuple တစ်ခုမှာ ခွင့်ပြုထားတဲ့ Type တွေပဲ ပါကြောင်း သေချာစေခြင်း</h3><a class=\"sl-anchor-link\" href=\"#arraytuple-တစ်ခုမှာ-ခွင့်ပြုထားတဲ့-type-တွေပဲ-ပါကြောင်း-သေချာစေခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Array/Tuple တစ်ခုမှာ ခွင့်ပြုထားတဲ့ Type တွေပဲ ပါကြောင်း သေချာစေခြင်း”</span></a></div>\n<p>အရောင်တွေကို စီစဉ်တဲ့ palettes တွေ၊ ခိုင်းစေချက်တွေ ဆင့်ခေါ်တဲ့ command sequences တွေလိုမျိုး နေရာတွေမှာ သုံးလို့ကောင်းတယ်။</p>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: array,
      title: "palette.ts"
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

const url = "src/content/docs/advanced-typescript/satisfies/satisfies-practical-use-cases.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/satisfies/satisfies-practical-use-cases.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/satisfies/satisfies-practical-use-cases.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, array, benefits, configuration, Content as default, dictionary, file, frontmatter, getHeadings, url };
