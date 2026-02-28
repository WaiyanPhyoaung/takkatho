import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "Redux ရဲ့ အားသာချက်များ",
  "description": "Redux ရဲ့ အားသာချက်များ"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "၁-predictable-state-ခန့်မှန်းရ-လွယ်ကူခြင်း",
    "text": "၁. Predictable State (ခန့်မှန်းရ လွယ်ကူခြင်း)"
  }, {
    "depth": 3,
    "slug": "၂-debugging-time-travel-debugging",
    "text": "၂. Debugging (Time Travel Debugging)"
  }, {
    "depth": 3,
    "slug": "၃-centralized-state-တစ်နေရာတည်းမှာ-စုစည်းထားခြင်း",
    "text": "၃. Centralized State (တစ်နေရာတည်းမှာ စုစည်းထားခြင်း)"
  }, {
    "depth": 3,
    "slug": "၄-testing-စမ်းသပ်ရ-လွယ်ကူခြင်း",
    "text": "၄. Testing (စမ်းသပ်ရ လွယ်ကူခြင်း)"
  }, {
    "depth": 3,
    "slug": "ဘယ်အချိန်မှာ-redux-မသုံးသင့်ဘူးလဲ",
    "text": "ဘယ်အချိန်မှာ Redux မသုံးသင့်ဘူးလဲ?"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ဘာကြောင့် Redux သုံးသင့်လဲ?",
      "set:html": "<p>Redux သုံးရတာ Code ပိုရေးရပေမယ့်၊ သူပေးတဲ့ အကျိုးကျေးဇူးက အများကြီးပါ။ အထူးသဖြင့် <strong>“CCTV Camera”</strong> လိုမျိုး အရာအားလုံးကို မှတ်တမ်းတင်ထားနိုင်တာပါပဲ။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"၁-predictable-state-ခန့်မှန်းရ-လွယ်ကူခြင်း\">၁. Predictable State (ခန့်မှန်းရ လွယ်ကူခြင်း)</h3><a class=\"sl-anchor-link\" href=\"#၁-predictable-state-ခန့်မှန်းရ-လွယ်ကူခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “၁. Predictable State (ခန့်မှန်းရ လွယ်ကူခြင်း)”</span></a></div>\n<p>Redux မှာ State တစ်ခု ပြောင်းလဲဖို့အတွက် Action တစ်ခု မဖြစ်မနေ လိုပါတယ်။</p>\n<ul>\n<li>ဘယ်သူက ပြောင်းလိုက်တာလဲ?</li>\n<li>ဘယ်အချိန်မှာ ပြောင်းလိုက်တာလဲ?</li>\n<li>ဘာကြောင့် ပြောင်းလိုက်တာလဲ?</li>\n</ul>\n<p>ဒါတွေအားလုံးကို တိတိကျကျ သိနိုင်ပါတယ်။ CCTV မှတ်တမ်း ပြန်ကြည့်သလိုပါပဲ။ “ပိုက်ဆံ ပျောက်သွားတယ်” ဆိုရင် ဘယ်သူ ယူသွားလဲ ချက်ချင်း သိနိုင်သလို၊ Bug ဖြစ်ရင်လည်း ဘယ် Action ကြောင့် ဖြစ်လဲ ချက်ချင်း သိနိုင်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"၂-debugging-time-travel-debugging\">၂. Debugging (Time Travel Debugging)</h3><a class=\"sl-anchor-link\" href=\"#၂-debugging-time-travel-debugging\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “၂. Debugging (Time Travel Debugging)”</span></a></div>\n<p>Redux DevTools ကို သုံးပြီး <strong>“Time Travel”</strong> လုပ်လို့ ရပါတယ်။</p>\n<ul>\n<li>လွန်ခဲ့တဲ့ ၅ မိနစ်က State ကို ပြန်သွားကြည့်မလား?</li>\n<li>Action တစ်ခုချင်းစီကို ပြန် Play ကြည့်မလား?</li>\n</ul>\n<p>Video Tape ကို အနောက်ပြန်ရစ် (Rewind) လုပ်သလိုမျိုး Application ရဲ့ အခြေအနေကို စိတ်ကြိုက် ပြန်ကြည့်လို့ ရတာက Redux ရဲ့ Superpower ပါပဲ။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"၃-centralized-state-တစ်နေရာတည်းမှာ-စုစည်းထားခြင်း\">၃. Centralized State (တစ်နေရာတည်းမှာ စုစည်းထားခြင်း)</h3><a class=\"sl-anchor-link\" href=\"#၃-centralized-state-တစ်နေရာတည်းမှာ-စုစည်းထားခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “၃. Centralized State (တစ်နေရာတည်းမှာ စုစည်းထားခြင်း)”</span></a></div>\n<p>Data အားလုံးကို Store တစ်ခုတည်းမှာ သိမ်းထားတဲ့အတွက်:</p>\n<ul>\n<li>Data တွေကို နေရာတကာ လိုက်ရှာစရာ မလိုတော့ဘူး။</li>\n<li>Server ကနေ လာတဲ့ Data တွေကို Cache လုပ်ထားဖို့ လွယ်တယ်။</li>\n<li>App တစ်ခုလုံးရဲ့ အရောင် (Theme) ပြောင်းချင်ရင် တစ်နေရာတည်း ပြင်ရုံနဲ့ ရတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"၄-testing-စမ်းသပ်ရ-လွယ်ကူခြင်း\">၄. Testing (စမ်းသပ်ရ လွယ်ကူခြင်း)</h3><a class=\"sl-anchor-link\" href=\"#၄-testing-စမ်းသပ်ရ-လွယ်ကူခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “၄. Testing (စမ်းသပ်ရ လွယ်ကူခြင်း)”</span></a></div>\n<p>Redux ရဲ့ Reducer တွေက <strong>Pure Functions</strong> တွေ ဖြစ်ပါတယ်။</p>\n<ul>\n<li>Input (Old State + Action) ပေးလိုက်ရင် Output (New State) အမြဲတမ်း တူတူပဲ ထွက်ပါတယ်။</li>\n<li>ဒါကြောင့် Test ရေးရတာ အရမ်း လွယ်ကူပါတယ်။ “ဒီ Action ပေးရင် ဒီ State ထွက်လား” ဆိုတာ စစ်ဆေးရုံပါပဲ။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဘယ်အချိန်မှာ-redux-မသုံးသင့်ဘူးလဲ\">ဘယ်အချိန်မှာ Redux မသုံးသင့်ဘူးလဲ?</h3><a class=\"sl-anchor-link\" href=\"#ဘယ်အချိန်မှာ-redux-မသုံးသင့်ဘူးလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘယ်အချိန်မှာ Redux မသုံးသင့်ဘူးလဲ?”</span></a></div>\n<ul>\n<li>Project အသေးလေးတွေ (To-Do List လောက်ပဲ)</li>\n<li>State တွေ သိပ်မရှုပ်ထွေးတဲ့ App တွေ</li>\n<li>Team Member တွေက Redux မကျွမ်းကျင်သေးရင်</li>\n</ul>\n<p>“ယင်ကောင်ကို ပုဆိန်နဲ့ ပေါက်” သလို မဖြစ်စေဖို့ လိုအပ်မှသာ Redux ကို သုံးသင့်ပါတယ်။</p>"
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

const url = "src/content/docs/fe-architecture/redux/benefits.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/fe-architecture/redux/benefits.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/fe-architecture/redux/benefits.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
