import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "Component-Based Architecture ရဲ့ အားသာချက်များ",
  "description": "Component-Based Architecture ရဲ့ အားသာချက်များ"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "1-ပြန်လည်အသုံးပြုနိုင်ခြင်း-reusability",
    "text": "1. ပြန်လည်အသုံးပြုနိုင်ခြင်း (Reusability)"
  }, {
    "depth": 3,
    "slug": "2-ပြုပြင်ထိန်းသိမ်းရ-လွယ်ကူခြင်း-maintainability",
    "text": "2. ပြုပြင်ထိန်းသိမ်းရ လွယ်ကူခြင်း (Maintainability)"
  }, {
    "depth": 3,
    "slug": "3-သီးခြားခွဲထုတ်ထားခြင်း-encapsulation",
    "text": "3. သီးခြားခွဲထုတ်ထားခြင်း (Encapsulation)"
  }, {
    "depth": 3,
    "slug": "4-ပူးပေါင်းဆောင်ရွက်ရ-လွယ်ကူခြင်း-collaboration",
    "text": "4. ပူးပေါင်းဆောင်ရွက်ရ လွယ်ကူခြင်း (Collaboration)"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Component-Based Architecture ကို ဘာကြောင့် လူကြိုက်များရတာလဲ? အဓိက အားသာချက် (၄) ချက် ရှိပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"1-ပြန်လည်အသုံးပြုနိုင်ခြင်း-reusability\">1. ပြန်လည်အသုံးပြုနိုင်ခြင်း (Reusability)</h3><a class=\"sl-anchor-link\" href=\"#1-ပြန်လည်အသုံးပြုနိုင်ခြင်း-reusability\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “1. ပြန်လည်အသုံးပြုနိုင်ခြင်း (Reusability)”</span></a></div>\n<p>ဒါက အထင်ရှားဆုံး အားသာချက်ပါ။ <code dir=\"auto\">Button</code> Component တစ်ခု ရေးထားပြီးရင်၊ Login page မှာလည်း သုံးလို့ရသလို၊ Register page မှာလည်း သုံးလို့ရပါတယ်။ Payment page မှာလည်း သုံးလို့ရပါတယ်။\nCode တွေ ထပ်ခါထပ်ခါ ရေးနေစရာ မလိုတော့ပါဘူး။ <strong>“Write Once, Use Everywhere”</strong> ပါ။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"2-ပြုပြင်ထိန်းသိမ်းရ-လွယ်ကူခြင်း-maintainability\">2. ပြုပြင်ထိန်းသိမ်းရ လွယ်ကူခြင်း (Maintainability)</h3><a class=\"sl-anchor-link\" href=\"#2-ပြုပြင်ထိန်းသိမ်းရ-လွယ်ကူခြင်း-maintainability\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “2. ပြုပြင်ထိန်းသိမ်းရ လွယ်ကူခြင်း (Maintainability)”</span></a></div>\n<p>ဆိုပါစို့… Website တစ်ခုလုံးမှာ ရှိတဲ့ Button တွေကို အပြာရောင် ကနေ အနီရောင် ပြောင်းချင်တယ်။</p>\n<ul>\n<li><strong>Old Way:</strong> HTML file တိုင်းကို လိုက်ဖွင့်၊ Button Code တွေ လိုက်ရှာပြီး အရောင်လိုက်ပြောင်းရမယ်။ (အခု ၁၀၀ ရှိရင် အခါ ၁၀၀ ပြင်ရမယ်)</li>\n<li><strong>Component Way:</strong> <code dir=\"auto\">Button</code> Component ဖိုင်တစ်ခုတည်းကို ဖွင့်၊ အရောင်ပြောင်းလိုက်တာနဲ့ တခြားနေရာ အားလုံးမှာ အလိုလို လိုက်ပြောင်းသွားမယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"3-သီးခြားခွဲထုတ်ထားခြင်း-encapsulation\">3. သီးခြားခွဲထုတ်ထားခြင်း (Encapsulation)</h3><a class=\"sl-anchor-link\" href=\"#3-သီးခြားခွဲထုတ်ထားခြင်း-encapsulation\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “3. သီးခြားခွဲထုတ်ထားခြင်း (Encapsulation)”</span></a></div>\n<p>Component တစ်ခုဟာ သူ့ကမ္ဘာနဲ့သူ ရှိပါတယ်။ <code dir=\"auto\">Navbar</code> Component ထဲက CSS က <code dir=\"auto\">Footer</code> Component ကို သွားပြီး သက်ရောက်မှု မရှိပါဘူး။\nအရင်တုန်းက CSS file တစ်ခုတည်းမှာ အကုန်ရေးရင် class name တွေ တူပြီး ဒီဇိုင်းတွေ ပျက်စီးတတ်ပါတယ်။ Component တွေကတော့ ကိုယ့်စည်း ကိုယ့်ဘောင်နဲ့မို့လို့ ပိုပြီး စိတ်ချရပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"4-ပူးပေါင်းဆောင်ရွက်ရ-လွယ်ကူခြင်း-collaboration\">4. ပူးပေါင်းဆောင်ရွက်ရ လွယ်ကူခြင်း (Collaboration)</h3><a class=\"sl-anchor-link\" href=\"#4-ပူးပေါင်းဆောင်ရွက်ရ-လွယ်ကူခြင်း-collaboration\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “4. ပူးပေါင်းဆောင်ရွက်ရ လွယ်ကူခြင်း (Collaboration)”</span></a></div>\n<p>Team နဲ့ အလုပ်လုပ်တဲ့အခါ အရမ်း အဆင်ပြေပါတယ်။</p>\n<ul>\n<li>Developer A က <code dir=\"auto\">Header</code> ကို ရေးနေချိန်မှာ</li>\n<li>Developer B က <code dir=\"auto\">Sidebar</code> ကို ရေးလို့ရတယ်။</li>\n<li>Developer C က <code dir=\"auto\">Content</code> ကို ရေးလို့ရတယ်။</li>\n</ul>\n<p>ဖိုင်တစ်ခုတည်းမှာ လူတွေ ဝိုင်းရေးပြီး Code တွေ ငြိတာ (Merge Conflict) မျိုးတွေ သက်သာသွားပါတယ်။</p>\n"
    }), createVNode($$Aside, {
      title: "သတိပြုရန် (Trade-offs)",
      type: "danger",
      "set:html": "<p>ကောင်းကွက်တွေ ရှိသလို သတိထားရမယ့် အချက်တွေလည်း ရှိပါတယ်။</p><ol>\n<li><strong>Complexity</strong>: Component တွေ အရမ်းများလာရင် ဘယ် Component က ဘယ်မှာလဲ ဆိုတာ ရှာရခက်လာနိုင်ပါတယ်။</li>\n<li><strong>Data Flow</strong>: Component တစ်ခုနဲ့ တစ်ခု Data ပို့ရတာ (Props Drilling) နည်းနည်း ရှုပ်ထွေးနိုင်ပါတယ်။ (ဒါကို ဖြေရှင်းဖို့ State Management တွေ ပေါ်လာတာပါ)</li>\n</ol>"
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

const url = "src/content/docs/fe-architecture/component/advantages.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/fe-architecture/component/advantages.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/fe-architecture/component/advantages.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
