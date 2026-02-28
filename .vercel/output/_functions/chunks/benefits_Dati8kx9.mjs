import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "Micro-Frontend ရဲ့ အားသာချက်များ",
  "description": "Micro-Frontend ရဲ့ အားသာချက်များ"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "၁-independent-deployment-သီးခြား-deploy-လုပ်နိုင်ခြင်း",
    "text": "၁။ Independent Deployment (သီးခြား Deploy လုပ်နိုင်ခြင်း)"
  }, {
    "depth": 3,
    "slug": "၂-technology-agnostic-ကြိုက်ရာ-နည်းပညာ-သုံးနိုင်ခြင်း",
    "text": "၂။ Technology Agnostic (ကြိုက်ရာ နည်းပညာ သုံးနိုင်ခြင်း)"
  }, {
    "depth": 3,
    "slug": "၃-isolated-faults-ပြဿနာ-သီးခြားဖြစ်ခြင်း",
    "text": "၃။ Isolated Faults (ပြဿနာ သီးခြားဖြစ်ခြင်း)"
  }, {
    "depth": 3,
    "slug": "စိန်ခေါ်မှုများ-challenges",
    "text": "စိန်ခေါ်မှုများ (Challenges)"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Micro-Frontend ကို သုံးခြင်းရဲ့ အဓိက အကျိုးကျေးဇူးကတော့ <strong>“လွတ်လပ်ခြင်း (Independence)”</strong> ပါပဲ။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"၁-independent-deployment-သီးခြား-deploy-လုပ်နိုင်ခြင်း\">၁။ Independent Deployment (သီးခြား Deploy လုပ်နိုင်ခြင်း)</h3><a class=\"sl-anchor-link\" href=\"#၁-independent-deployment-သီးခြား-deploy-လုပ်နိုင်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “၁။ Independent Deployment (သီးခြား Deploy လုပ်နိုင်ခြင်း)”</span></a></div>\n<p>ဒါက အရေးအကြီးဆုံး အချက်ပါ။</p>\n<ul>\n<li><code dir=\"auto\">Checkout</code> Team က သူတို့ Feature ပြီးတာနဲ့ တန်းပြီး Deploy လုပ်လို့ရတယ်။</li>\n<li><code dir=\"auto\">Profile</code> Team မပြီးသေးလို့ စောင့်နေစရာ မလိုဘူး။\nRelease Cycle တွေ မြန်ဆန်လာပါတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"၂-technology-agnostic-ကြိုက်ရာ-နည်းပညာ-သုံးနိုင်ခြင်း\">၂။ Technology Agnostic (ကြိုက်ရာ နည်းပညာ သုံးနိုင်ခြင်း)</h3><a class=\"sl-anchor-link\" href=\"#၂-technology-agnostic-ကြိုက်ရာ-နည်းပညာ-သုံးနိုင်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “၂။ Technology Agnostic (ကြိုက်ရာ နည်းပညာ သုံးနိုင်ခြင်း)”</span></a></div>\n<ul>\n<li>Team A က React ကျွမ်းကျင်ရင် React သုံး။</li>\n<li>Team B က Vue ကျွမ်းကျင်ရင် Vue သုံး။</li>\n<li>Team C က Angular ကျွမ်းကျင်ရင် Angular သုံး။\nနောက်ဆုံးမှာ အားလုံး ပေါင်းစည်းသွားမှာပါ။ (ဒါပေမယ့် Performance အရ Framework တွေ အများကြီး ရောသုံးတာကို သတိထားသင့်ပါတယ်)</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"၃-isolated-faults-ပြဿနာ-သီးခြားဖြစ်ခြင်း\">၃။ Isolated Faults (ပြဿနာ သီးခြားဖြစ်ခြင်း)</h3><a class=\"sl-anchor-link\" href=\"#၃-isolated-faults-ပြဿနာ-သီးခြားဖြစ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “၃။ Isolated Faults (ပြဿနာ သီးခြားဖြစ်ခြင်း)”</span></a></div>\n<p><code dir=\"auto\">Checkout</code> Micro-Frontend မှာ Error တက်ပြီး ပျက်သွားရင်တောင်၊ <code dir=\"auto\">Product List</code> က ဆက်လုပ်နေမှာပါ။ App တစ်ခုလုံး “ဖြူ” သွားတာ (White Screen of Death) မျိုး မဖြစ်တော့ပါဘူး။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"စိန်ခေါ်မှုများ-challenges\">စိန်ခေါ်မှုများ (Challenges)</h3><a class=\"sl-anchor-link\" href=\"#စိန်ခေါ်မှုများ-challenges\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “စိန်ခေါ်မှုများ (Challenges)”</span></a></div>\n<p>Micro-Frontend က ကောင်းပေမယ့် အလကား မရပါဘူး။</p>\n<ol>\n<li><strong>Complexity:</strong> Setup လုပ်ရတာ အရမ်း ရှုပ်ထွေးပါတယ်။ (Webpack Module Federation, Single-SPA စတာတွေ သိဖို့ လိုပါတယ်)</li>\n<li><strong>Performance:</strong> Framework တွေ ထပ်နေရင် (React 2 ခါ Load လုပ်မိတာမျိုး) Site က လေးသွားနိုင်ပါတယ်။</li>\n<li><strong>Consistency:</strong> Team တွေ မတူတော့ Button ဒီဇိုင်းတွေ၊ Font တွေ မတူတာမျိုး ဖြစ်တတ်ပါတယ်။ (Design System ကောင်းကောင်း လိုပါတယ်)</li>\n</ol>\n"
    }), createVNode($$Aside, {
      title: "သုံးသင့်လား?",
      type: "caution",
      "set:html": "<p>Startups တွေ၊ Project အသေးတွေအတွက် Micro-Frontend က <strong>Overkill</strong> (မလိုအပ်ဘဲ ပိုလုပ်မိခြင်း) ဖြစ်တတ်ပါတယ်။ Monolith သို့မဟုတ် Modular Monolith က ပိုသင့်တော်ပါတယ်။</p>"
    }), "\n", createVNode($$Aside, {
      title: "အနှစ်ချုပ်",
      type: "tip",
      "set:html": "<ul>\n<li>\n<p><strong>Micro-frontend</strong> တွေက application အကြီးကြီးတွေကို သေးငယ်ပြီး သီးခြားစီ deploy လုပ်နိုင်တဲ့ unit လေးတွေအဖြစ် ခွဲထုတ်ပေးတယ်။</p>\n</li>\n<li>\n<p>Micro-frontend တစ်ခုချင်းစီကို team မတူတာတွေက <strong>သီးခြားစီ develop လုပ်၊ test လုပ်၊ deploy လုပ်</strong> နိုင်တယ်။</p>\n</li>\n<li>\n<p><strong>အကျိုးကျေးဇူးများ -</strong> တိုးချဲ့ရလွယ်ကူခြင်း၊ သီးခြား deploy လုပ်နိုင်ခြင်း၊ team collaboration ကောင်းခြင်း၊ technology အမျိုးမျိုးသုံးနိုင်ခြင်း။</p>\n</li>\n<li>\n<p><strong>စိန်ခေါ်မှုများ -</strong> ပေါင်းစပ်ရခက်ခဲခြင်း၊ performance၊ shared state စီမံခန့်ခွဲရခြင်းနဲ့ UI တသမတ်တည်းဖြစ်အောင်ထိန်းသိမ်းရခြင်း။</p>\n</li>\n<li>\n<p><strong>Webpack Module Federation နဲ့ Single SPA</strong> တို့လို ခေတ်မီ tool တွေက micro-frontend တွေကို ထိထိရောက်ရောက် ပေါင်းစပ်ဖို့ ပိုလွယ်ကူစေတယ်။</p>\n</li>\n</ul>"
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

const url = "src/content/docs/fe-architecture/micro-frontend/benefits.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/fe-architecture/micro-frontend/benefits.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/fe-architecture/micro-frontend/benefits.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
