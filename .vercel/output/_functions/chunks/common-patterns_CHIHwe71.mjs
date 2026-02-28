import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "Real-World Generics: အသုံးများသော ပုံစံများ",
  "description": "Real-World Generics: အသုံးများသော ပုံစံများ"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "data-များကို-generic-ပုံစံဖြင့်-ယူခြင်း-fetching-data",
    "text": "Data များကို Generic ပုံစံဖြင့် ယူခြင်း (Fetching Data):"
  }, {
    "depth": 3,
    "slug": "ui-component-များ-ဥပမာ-react",
    "text": "UI Component များ (ဥပမာ: React):"
  }];
}
const dataFetching = `
// အရင်က ပြောခဲ့တဲ့ ApiResponse Interface (Data ရဲ့ Type ကို Generic လုပ်ထားတာ)
interface ApiResponse<DataType> {
  data: DataType; 
  success: boolean; 
  error?: string; 
}

// API ကနေ User Data ပြန်လာရင် ဘယ်လိုပုံစံ ဖြစ်မယ်ဆိုတာ
interface User {
id: number;
name: string;
email: string;
}

// API ကနေ Data ယူတဲ့ Generic Function (ရိုးရှင်းအောင် ရေးထားတာ)
// ဒီ Function က ResponseType ဆိုတဲ့ Generic Type နဲ့ အလုပ်လုပ်မယ်
// ပြန်ထွက်လာမယ့် Data ကတော့ ApiResponse<ResponseType> ပုံစံ ဖြစ်မယ်လို့ Promise လုပ်ထားတယ်
async function fetchData<ResponseType>(url: string): Promise<ApiResponse<ResponseType>> {
try {
const response = await fetch(url);
if (!response.ok) {
throw new Error(\`HTTP error! status: \${response.status}\`);
}
const data: ApiResponse<ResponseType> = await response.json();
if (!data.success) {
throw new Error(data.error || "API returned success: false");
}
return data;
} catch (error) {
const message = error instanceof Error ? error.message : "Unknown fetch error";
// data ကို null လို့ သတ်မှတ်ထားတယ်၊ ဒါပေမယ့် ResponseType ဖြစ်ရမယ်လို့ 'as ResponseType' နဲ့ ပြောထားတယ်
return { data: null as ResponseType, success: false, error: message };
}
}

// ဒီ Generic fetchData Function ကို ဘယ်လို သုံးလဲ ကြည့်ရအောင်
async function getUser(userId: number) {
// fetchData ကို ခေါ်တဲ့အခါ ApiResponse ထဲက data က User Type ဖြစ်ရမယ်လို့ <User> နဲ့ ပြောလိုက်တယ်
const userResponse = await fetchData<User>(\`/api/users/\${userId}\`);
if (userResponse.success) {
// userResponse.data ရဲ့ Type က User ဖြစ်မှန်း TypeScript က သိနေပြီ။ ဒါ့ကြောင့် .name ကို သုံးလို့ရတယ်
console.log("Fetched User:", userResponse.data.name);
} else {
// Error ရှိရင်လည်း userResponse.error ကို သုံးလို့ရတယ်
console.error("Failed to fetch user:", userResponse.error);
}
}
`;
const react = `
import React from 'react';

// ValueType ဆိုတဲ့ Generic Type ကို သုံးထားတယ်
interface SelectOption<ValueType> {
label: string;
value: ValueType;
}

interface SelectProps<ValueType> {
options: SelectOption<ValueType>[];
selectedValue: ValueType | null;
onChange: (selectedValue: ValueType) => void;
label: string;
}

// Select Component (ValueType ရဲ့ Type အပေါ် Generic ဖြစ်အောင် ရေးထားတယ်)
// ValueType ဟာ string ဒါမှမဟုတ် number Type ထဲက တစ်ခုခု ဖြစ်ရမယ်လို့ ကန့်သတ်ထားတယ် (ဥပမာအတွက်)
function Select<ValueType extends string | number>(props: SelectProps<ValueType>) {

const { options, selectedValue, onChange, label } = props;

    // Generic Type ကြောင့် props တွေရဲ့ Type ကို TypeScript က အတိအကျ သိနေပြီ
    console.log("Received options:", options); // options ရဲ့ Type က SelectOption<ValueType>[] မှန်း သိတယ်
    console.log("Received selectedValue:", selectedValue); // selectedValue ရဲ့ Type က ValueType | null မှန်း သိတယ်



    return (
        <div>
            <p>{label} Select Component Placeholder</p>
            {/* တကယ့် select box UI rendering logic တွေ ဒီနေရာမှာ ရေးမယ် */}
        </div>
    );

}

// ဒီ Generic Select Component ကို ဘယ်လို သုံးမလဲ (Usage က Generic ရဲ့ အားသာချက်ကို ပြတယ်)
// Theme ရွေးဖို့ Dropdown (ValueType က Theme literal union)
type Theme = 'light' | 'dark'; // Theme Type ကို သတ်မှတ်လိုက်တယ် (string)

const themeOptions: SelectOption<Theme>[] = [ // options array ရဲ့ Type က SelectOption<Theme>[] ဖြစ်မယ်
{ label: "Light Mode", value: 'light' }, // value ရဲ့ Type က Theme (string)
{ label: "Dark Mode", value: 'dark' }
];

<Select
  options={themeOptions}
  selectedValue={currentTheme}
  onChange={handleThemeChange}
  label="Theme"
/>
// ဒီလို သုံးလိုက်တာနဲ့ Select ရဲ့ ValueType က Theme ဖြစ်သွားပြီ၊ onChange callback
ကလည်း Theme Type ကိုပဲ ပြန်ပို့ပေးမယ်လို့ TypeScript က သိတယ်

// Rating ရွေးဖို့ Dropdown (ValueType က number)
const ratingOptions: SelectOption<number>[] = [ // options array ရဲ့ Type က SelectOption<number>[] ဖြစ်မယ်
{ label: "⭐", value: 1 }, // value ရဲ့ Type က number
{ label: "⭐⭐", value: 2 },
{ label: "⭐⭐⭐", value: 3 }
];

// <Select options={ratingOptions} selectedValue={currentRating} onChange={handleRatingChange} label="Rating" />
// ဒီလို သုံးလိုက်တာနဲ့ Select Component ရဲ့ ValueType က number ဖြစ်သွားပြီ၊ onChange callback ကလည်း number Type ကိုပဲ ပြန်ပို့ပေးမယ်လို့ TypeScript က သိတယ်
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"data-များကို-generic-ပုံစံဖြင့်-ယူခြင်း-fetching-data\">Data များကို Generic ပုံစံဖြင့် ယူခြင်း (Fetching Data):</h3><a class=\"sl-anchor-link\" href=\"#data-များကို-generic-ပုံစံဖြင့်-ယူခြင်း-fetching-data\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Data များကို Generic ပုံစံဖြင့် ယူခြင်း (Fetching Data):”</span></a></div>\n<p>ကျွန်တော်တို့ Code ရေးတဲ့အခါ အပြင်က API (Application Programming Interface) တွေကနေ Data တွေ သွားယူရတာ အမြဲလိုလို လုပ်ရပါတယ်။ ဒီ Data ယူတဲ့ Logic (အလုပ်လုပ်ပုံ) ကို Generic ဖြစ်အောင် ရေးထားတာက အရမ်း အသုံးဝင်ပြီး လုပ်ရိုးလုပ်စဉ်လို ဖြစ်နေပါပြီ။</p>\n<p>အရင် သင်ခန်းစာမှာ ကျွန်တော်တို့ ApiResponse ဆိုတဲ့ Generic Interface လေးတစ်ခု သတ်မှတ်ခဲ့တာ မှတ်မိဦးမယ် ထင်ပါတယ်။ API ကနေ ဘယ်လို Data အမျိုးအစား ပြန်လာလာ၊ ဒီ ApiResponse ပုံစံအတိုင်း ထည့်သုံးလို့ရတာပေါ့။</p>\n"
    }), createVNode(Code, {
      code: dataFetching,
      lang: "typescript",
      title: "index.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<br>\n"
    }), createVNode($$Aside, {
      title: "ရှင်းပြချက်",
      children: `ဒီ Function ကို ကြည့်ရင် ResponseType ဆိုတဲ့ Generic Type နဲ့ ရေးထားတာ တွေ့ပါမယ်။ ဒီ Function ကို ခေါ်တဲ့အခါ (ဥပမာ fetchData<User>('/api/users/123') လိုမျိုး) ResponseType နေရာမှာ ဘယ် Type (ဥပမာ User) ဖြစ်ရမယ်ဆိုတာ ကျွန်တော်တို့ သတ်မှတ်ပေးလိုက်တယ်။ ဒါ့ကြောင့် API ကနေ ပြန်လာမယ့် ApiResponse ထဲက data Field ဟာ ကျွန်တော်တို့ သတ်မှတ်လိုက်တဲ့ User Type ဖြစ်ရမယ်လို့ TypeScript က သိသွားပြီ။ ဒီလိုရေးတာက API Call တွေကို Type မှန်ကန်စိတ်ချရစေပြီး Data ယူတဲ့ Logic ကိုလည်း ပြန်လည် အသုံးပြုလို့ရအောင် လုပ်ပေးတယ်။ Axios လိုမျိုး Data ယူတဲ့ Library တွေမှာလည်း ဒီလို Generic နည်းလမ်းတွေ သုံးထားတာ တွေ့ရပါမယ်။`
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ui-component-များ-ဥပမာ-react\">UI Component များ (ဥပမာ: React):</h3><a class=\"sl-anchor-link\" href=\"#ui-component-များ-ဥပမာ-react\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “UI Component များ (ဥပမာ: React):”</span></a></div>\n<p>Website ဒါမှမဟုတ် Application တွေအတွက် UI (User Interface) Component တွေ ရေးတဲ့အခါ (ဥပမာ list တွေ၊ table တွေ၊ dropdown တွေ) Data အမျိုးမျိုးကို ပြသနိုင်တဲ့ Component တွေ လိုလာတတ်တယ်။ ဒီလို Component တွေကို Generic သုံးပြီး ရေးတာက တကယ် အသုံးဝင်ပါတယ်။</p>\n<p>React Framework ကို ဥပမာယူပြီး ရေးထားတဲ့ Code လေး ကြည့်ရအောင် (ဒါက Concept ကို ပြချင်တာပါ၊ React Syntax ကို အသေးစိတ် နားမလည်ရင်လည်း ကိစ္စမရှိပါဘူး)။ Dropdown List (Select Box) Component လေးတစ်ခု ရေးကြည့်မယ်။</p>\n"
    }), createVNode(Code, {
      code: react,
      lang: "typescript",
      title: "index.ts"
    }), "\n", createVNode($$Aside, {
      title: "ရှင်းပြချက်",
      type: "note",
      children: `ဒီ Select Component ဟာ ValueType ဆိုတဲ့ Generic Type တစ်ခုပေါ်မှာ မူတည်ပြီး အလုပ်လုပ်တယ်။ သူက Option တွေမှာ ပါတဲ့ တကယ့် တန်ဖိုး (value) က string Type ဖြစ်နေစေ၊ number Type ဖြစ်နေစေ (ဒါမှမဟုတ် extends string | number လို့ ကန့်သတ်ထားတဲ့ တခြား ရိုးရှင်းတဲ့ Type တွေ) လက်ခံပြီး အလုပ်လုပ်နိုင်တယ်။ Option ပြောင်းတဲ့အခါ ခေါ်မယ့် onChange Function ကလည်း မှန်ကန်တဲ့ ValueType အတိုင်း Data ကို ပြန်ပို့ပေးတယ်။ ဒါ့ကြောင့် ThemeSelect, RatingSelect စသဖြင့် Type တစ်ခုချင်းစီအတွက် Component တွေ ခွဲရေးနေစရာ မလိုတော့ဘူး။ Select Component တစ်ခုတည်းနဲ့ Data အမျိုးမျိုးအတွက် ပြန်သုံးလို့ရသွားပြီ။`
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

const url = "src/content/docs/advanced-typescript/generics/common-patterns.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/generics/common-patterns.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/generics/common-patterns.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, dataFetching, Content as default, file, frontmatter, getHeadings, react, url };
