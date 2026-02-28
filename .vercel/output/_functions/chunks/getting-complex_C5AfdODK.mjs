import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "ကြုံလာနိုင်တဲ့ အခက်အခဲအသစ်များ - ပိုကြီးလာတဲ့အခါ ပိုရှုပ်ထွေးလာခြင်း ",
  "description": "ကြုံလာနိုင်တဲ့ အခက်အခဲအသစ်များ - ပိုကြီးလာတဲ့အခါ ပိုရှုပ်ထွေးလာခြင်း "
};
function getHeadings() {
  return [];
}
const code = `
// number Array အတွက် ပထမဆုံး Element ယူတဲ့ Function
function getFirstNumber(arr: number[]): number | undefined {
  return arr[0];
}

// string Array အတွက် ပထမဆုံး Element ယူတဲ့ Function
function getFirstString(arr: string[]): string | undefined {
return arr[0];
}

// Object Array အတွက် ပထမဆုံး Element ယူတဲ့ Function
interface User { name: string; age: number; }

function getFirstUser(arr: User[]): User | undefined {
return arr[0];
}

// အခု ဒီ Function သုံးခုလုံးက ပထမဆုံး Element ကိုပဲ ယူတဲ့ အလုပ်ကိုပဲ လုပ်တာပါ။
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>အခြေခံ TypeScript က Error အများကြီးကို ကာကွယ်ပေးနိုင်ပေမယ့် Program တွေ၊ Project တွေ ပိုကြီးလာ၊ ပိုရှုပ်ထွေးလာတဲ့အခါ အခက်အခဲအသစ်တွေ ပေါ်လာပြန်တယ်။</p>\n<ul>\n<li><strong>Code တွေ ထပ်ရေးနေရခြင်း(Repeating)</strong>: ပုံစံတူ အလုပ်တစ်ခုကိုပဲ Data အမျိုးမျိုး (number၊ string၊ Object) အတွက် သီးသန့် Code တွေ ခွဲရေးနေရတာမျိုး။ ဒါက Code တွေ အများကြီး ဖြစ်လာပြီး ပြင်ရခက်စေတယ်။</li>\n<li><strong>Type တွေ အများကြီး ထပ်လုပ်နေရခြင်း</strong>: ရှိပြီးသား Data ပုံစံ (Type) ကနေ နည်းနည်းလေး ပြောင်းသုံးချင်တာမျိုး (ဥပမာ အချို့ အချက်အလက်နဲနဲပဲ လိုတာမျိုး) လုပ်ချင်ရင် Data ပုံစံအသစ် (Type အသစ်) တွေ ထပ်ခွဲလုပ်နေရတာမျိုး။</li>\n<li><strong>Data ရဲ့ အသေးစိတ်ကို မပျောက်စေဘဲ ပုံစံမှန်မမှန် စစ်ဆေးခြင်း</strong>: Data တစ်ခုက ငါလိုချင်တဲ့ ပုံစံ (Type) နဲ့ ကိုက်ညီရဲ့လား စစ်ချင်တယ်၊ ဒါပေမယ့် အဲဒီ Data ရဲ့ တိကျတဲ့ တန်ဖိုးလေးတွေကိုလည်း သုံးချင်တာမျိုး။ (ဥပမာ number type ဖြစ်ရမယ် ဆိုတာထက် constant “5” ဆိုတာကိုပဲ သုံးချင်တာမျိုး)။</li>\n</ul>\n"
    }), createVNode(Code, {
      code: code,
      lang: "typescript",
      title: "index.ts"
    }), "\n", createVNode($$Aside, {
      title: "ရှင်းပြချက်",
      "set:html": "<p>မြင်တဲ့အတိုင်းပဲ Function သုံးခုလုံးက return arr[0]; ဆိုတဲ့ အလုပ်\nတစ်ခုတည်းကိုပဲ လုပ်တာပါ။ ဒါပေမယ့် Array ထဲက Data Type မတူတာကြောင့် Function\nသုံးခု ခွဲရေးလိုက်ရတယ်။ ဒါက Code Duplication (Code ထပ်ခြင်း) ပါပဲ။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>“ဒီလို Code တွေ ထပ်နေတော့ ဘာဖြစ်လဲဆိုတော့… အကယ်၍ ဒီ Function ရဲ့ အလုပ်လုပ်ပုံလေး\nနည်းနည်း ပြောင်းချင်တယ်ဆိုပါစို့ (ဥပမာ Array က null ဖြစ်နေလား အရင်စစ်ချင်တာမျိုး)။\nအဲဒီအခါကျရင် ကျွန်တော်တို့ ခုနက ရေးထားတဲ့ getFirstNumber, getFirstString, getFirstUser\nဆိုတဲ့ Function သုံးခုလုံးကို လိုက်ပြင်နေရတော့မယ်။ Code များရင် ပြင်ရတာ ပိုရှုပ်၊\nပိုမှားနိုင်တာပေါ့။”</p>\n<p>ဒီအခက်အခဲတွေက Code တွေကို ရေးရတာ ပိုများစေတယ်၊ နားလည်ရခက်စေတယ်၊ ပြင်ရတာ ပိုကြာစေတယ်။ Typescript\nသုံးခြင်းရဲ့ အကျိုးကျေးဇူးလဲ မရတော့ပါဘူး။</p>"
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

const url = "src/content/docs/advanced-typescript/why-is-advanced-ts-needed/getting-complex.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/why-is-advanced-ts-needed/getting-complex.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/why-is-advanced-ts-needed/getting-complex.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, code, Content as default, file, frontmatter, getHeadings, url };
