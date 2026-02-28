import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const carModule = new Proxy({"src":"/_astro/car-module.CIXkOIui.jpeg","width":1024,"height":627,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/frontend-architecture/car-module.jpeg";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Modern Frameworks & Monolith",
  "description": "Modern Frameworks & Monolith"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "modern-frameworks--modern-cars",
    "text": "Modern Frameworks = Modern Cars"
  }, {
    "depth": 3,
    "slug": "ဘယ်အချိန်မှာ-monolith-မသုံးသင့်ဘူးလဲ-micro-frontends-သုံးသင့်ချိန်",
    "text": "ဘယ်အချိန်မှာ Monolith မသုံးသင့်ဘူးလဲ? (Micro-Frontends သုံးသင့်ချိန်)"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ခေတ်သစ် Monolith",
      "set:html": "<p>Next.js, Remix, Angular တို့လို Modern Framework တွေက Monolith ကို အားပေးပါတယ်။ ဒါပေမဲ့ သူတို့သွားနေတာက <strong>“Modular Monolith”</strong> ပါ။\nဒါကို <strong>“Modern Car (Tesla)”</strong> နဲ့ နှိုင်းယှဉ်ကြည့်ရအောင်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"modern-frameworks--modern-cars\">Modern Frameworks = Modern Cars</h3><a class=\"sl-anchor-link\" href=\"#modern-frameworks--modern-cars\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Modern Frameworks = Modern Cars”</span></a></div>\n<p>Tesla ကားတစ်စီးဟာ အပြင်ကကြည့်ရင် တစ်စီးတည်း (One Unit) ပါ။ ဒါပေမဲ့ အတွင်းပိုင်းမှာ Battery Module, Motor Module, AI Module ဆိုပြီး သီးခြားစီ ဖွဲ့စည်းထားပါတယ်။</p>\n"
    }), createVNode($$ContentImage, {
      src: carModule,
      alt: "car modules",
      width: "400"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<ul>\n<li>\n<p><strong>Next.js / Remix:</strong>\nPage တွေ၊ Component တွေ ခွဲရေးထားပေမယ့်၊ နောက်ဆုံး Deploy လုပ်ရင် Server တစ်လုံးတည်း (သို့မဟုတ် Lambda Function တစ်စု) အနေနဲ့ တက်သွားပါတယ်။ ဒါဟာ <strong>Monolith</strong> ပါ။ ဒါပေမဲ့ အရမ်း စနစ်ကျတဲ့ Monolith ပါ။</p>\n</li>\n<li>\n<p><strong>Angular:</strong>\nModule System (NgModules) နဲ့ Feature တွေကို သီးခြားစီ ခွဲထုတ်ထားပါတယ်။ ဒါပေမဲ့ နောက်ဆုံးမှာ <code dir=\"auto\">main.js</code> bundle တစ်ခုတည်း ထွက်လာပါတယ်။</p>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဘယ်အချိန်မှာ-monolith-မသုံးသင့်ဘူးလဲ-micro-frontends-သုံးသင့်ချိန်\">ဘယ်အချိန်မှာ Monolith မသုံးသင့်ဘူးလဲ? (Micro-Frontends သုံးသင့်ချိန်)</h3><a class=\"sl-anchor-link\" href=\"#ဘယ်အချိန်မှာ-monolith-မသုံးသင့်ဘူးလဲ-micro-frontends-သုံးသင့်ချိန်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘယ်အချိန်မှာ Monolith မသုံးသင့်ဘူးလဲ? (Micro-Frontends သုံးသင့်ချိန်)”</span></a></div>\n<p>Tesla ကားတစ်စီး ဝယ်စီးတာက လူတိုင်းအတွက် အဆင်ပြေပါတယ်။ ဒါပေမဲ့ အောက်ပါ အခြေအနေတွေမှာတော့ မရတော့ပါဘူး။</p>\n<ol>\n<li>\n<p><strong>Team Scale အရမ်းကြီးလာတဲ့အခါ:</strong>\nDeveloper ၁၀၀ ကျော်လောက် ရှိလာပြီး၊ Team တစ်ခုချင်းစီက သီးခြား Feature တွေကို တာဝန်ယူရတဲ့အခါ (ဥပမာ - Checkout Team, Search Team, User Profile Team)။</p>\n</li>\n<li>\n<p><strong>Independent Deployment လိုအပ်တဲ့အခါ:</strong>\nCheckout Team က သူတို့ Feature ကို ပြင်လိုက်ရင်၊ Search Team ရဲ့ Code ကို ပြန် Build/Deploy လုပ်စရာ မလိုချင်တဲ့အခါ။</p>\n</li>\n<li>\n<p><strong>Technology Diversity လိုချင်တဲ့အခါ:</strong>\nLegacy Code တွေကို Angular နဲ့ ဆက်ထားပြီး၊ Feature အသစ်တွေကို React နဲ့ ရေးချင်တဲ့အခါမျိုး။</p>\n</li>\n</ol>\n"
    }), createVNode($$Aside, {
      title: "အနှစ်ချုပ်",
      type: "tip",
      "set:html": "<ul>\n<li><strong>Monolith</strong> ဆိုတာ Deployment Unit တစ်ခုတည်း ဖြစ်ခြင်းကို ဆိုလိုတာပါ။ Code တွေ ရှုပ်ပွနေတာကို ဆိုလိုတာ မဟုတ်ပါဘူး။</li>\n<li><strong>Micro-Frontend</strong> ဆိုတာ Team တွေ၊ Deployment တွေကို ခွဲထုတ်ချင်မှသာ သုံးသင့်တဲ့ Advanced Pattern တစ်ခုပါ။ မလိုအပ်ဘဲ သုံးရင် ရှုပ်ထွေးမှု (Complexity) သာ တိုးလာပါလိမ့်မယ်။</li>\n</ul>"
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

const url = "src/content/docs/fe-architecture/monolithic/modern.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/fe-architecture/monolithic/modern.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/fe-architecture/monolithic/modern.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
