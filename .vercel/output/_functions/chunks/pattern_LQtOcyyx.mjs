import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const level1 = new Proxy({"src":"/_astro/lvl-1.5XKZMcmB.png","width":1153,"height":1040,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/software-architecture/lvl-1.png";
							}
							
							return target[name];
						}
					});

const level2 = new Proxy({"src":"/_astro/lvl-2.ChbHqP1k.png","width":1400,"height":1040,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/software-architecture/lvl-2.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "အပေါ်ယံခြုံငုံသုံးသပ် ဒီဇိုင်းဆွဲခြင်းနှင့် Pattern ရွေးချယ်ခြင်း",
  "description": "အပေါ်ယံခြုံငုံသုံးသပ် ဒီဇိုင်းဆွဲခြင်းနှင့် Pattern ရွေးချယ်ခြင်း"
};
function getHeadings() {
  return [{
    "depth": 4,
    "slug": "အဆင့်-၃-အဓိက-architectural-pattern-တစ်ခုကို-ရွေးချယ်ခြင်း",
    "text": "အဆင့် ၃: အဓိက Architectural Pattern တစ်ခုကို ရွေးချယ်ခြင်း"
  }, {
    "depth": 4,
    "slug": "အဆင့်-၄-service-နယ်နိမိတ်များကို-သတ်မှတ်ခြင်း",
    "text": "အဆင့် ၄: Service နယ်နိမိတ်များကို သတ်မှတ်ခြင်း"
  }, {
    "depth": 4,
    "slug": "အဆင့်-၅-high-level-ပုံကြမ်းများဆွဲခြင်း-c4-model",
    "text": "အဆင့် ၅: High-Level ပုံကြမ်းများဆွဲခြင်း (C4 Model)"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>ကျွန်တော်တို့ application အတွက် အဓိက architectural pattern တစ်ခုကို ရွေးချယ်ရန်၊ နှင့် high-level service နယ်နိမိတ်များကို သတ်မှတ်ကာ C4 ပုံကြမ်းများဖြင့် မြင်သာအောင်ပြသရန်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"အဆင့်-၃-အဓိက-architectural-pattern-တစ်ခုကို-ရွေးချယ်ခြင်း\">အဆင့် ၃: အဓိက Architectural Pattern တစ်ခုကို ရွေးချယ်ခြင်း</h4><a class=\"sl-anchor-link\" href=\"#အဆင့်-၃-အဓိက-architectural-pattern-တစ်ခုကို-ရွေးချယ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အဆင့် ၃: အဓိက Architectural Pattern တစ်ခုကို ရွေးချယ်ခြင်း”</span></a></div>\n<p>ကျွန်တော်တို့ရဲ့ လိုအပ်ချက်တွေအပေါ် အခြေခံပြီး၊ အဓိက pattern တွေကို သုံးသပ်ကြည့်ကြရအောင်:</p>\n<ul>\n<li>\n<p><strong>Monolith လား?</strong> Application တစ်ခုတည်းကတော့ အခက်အခဲတွေ့နိုင်ပါတယ်။ <code dir=\"auto\">Real-time location tracking feature</code> က scale လုပ်ဖို့လိုအပ်ပုံနဲ့ <code dir=\"auto\">user profile management feature</code> က scale လုပ်ဖို့လိုအပ်ပုံက အများကြီးကွာခြားပါတယ်။ ပြီးတော့၊ အစိတ်အပိုင်းတစ်ခုမှာ ပြဿနာတက်တာ (ဥပမာ - driver sign up လုပ်ငန်းစဉ်) က system တစ်ခုလုံးကို ရပ်တန့်သွားစေနိုင်ပြီး၊ ဒါက ကျွန်တော်တို့ရဲ့ အမြဲတမ်းရရှိနိုင်ရမယ်(High Availability) ဆိုတဲ့ အဓိကလိုအပ်ချက်နဲ့ မကိုက်ညီပါဘူး။ ဒါကြောင့် monolith က သင့်တော်တဲ့ရွေးချယ်မှု မဟုတ်ပါဘူး။</p>\n</li>\n<li>\n<p><strong>Microservices လား?</strong> ဒါကတော့ အလားအလာကောင်းပုံရပါတယ်။ ကျွန်တော်တို့က မတူညီတဲ့ function တွေအတွက် သီးခြား service တွေ (ဥပမာ - Location, Trip, Driver management) တည်ဆောက်နိုင်ပါတယ်။ ဒါက အစိတ်အပိုင်းတစ်ခုချင်းစီကို လွတ်လပ်စွာ scale လုပ်နိုင်စေပြီး အမှားအယွင်းခံနိုင်ရည် (fault tolerance) ကိုလည်း တိုးတက်စေပါတယ်။ <code dir=\"auto\">Driver signup service</code> သာ ပျက်နေရင်တောင်၊ ကားငှားသူတွေက ခရီးစဉ်တွေကို တောင်းဆိုပြီး စီးနင်းလို့ရနေဦးမှာပါ။</p>\n</li>\n</ul>\n<p><strong>ဆုံးဖြတ်ချက် -</strong> ကျွန်တော်တို့ <strong>microservices architecture</strong> ကို အသုံးပြုပါမယ်။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"အဆင့်-၄-service-နယ်နိမိတ်များကို-သတ်မှတ်ခြင်း\">အဆင့် ၄: Service နယ်နိမိတ်များကို သတ်မှတ်ခြင်း</h4><a class=\"sl-anchor-link\" href=\"#အဆင့်-၄-service-နယ်နိမိတ်များကို-သတ်မှတ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အဆင့် ၄: Service နယ်နိမိတ်များကို သတ်မှတ်ခြင်း”</span></a></div>\n<p>အခု application ကို လုပ်ငန်းဆောင်တာအလိုက် (our Bounded Contexts) ယုတ္တိကျတဲ့ service တွေအဖြစ် ခွဲထုတ်ကြည့်ကြရအောင်။</p>\n<ul>\n<li>\n<p><strong>Rider Service:</strong> ကားငှားသူတွေရဲ့ profile၊ rating၊ နှင့် ငွေပေးချေမှုနည်းလမ်းတွေကို စီမံခန့်ခွဲပါတယ်။</p>\n</li>\n<li>\n<p><strong>Driver Service:</strong> ကားသမားတွေရဲ့ profile၊ ကားအချက်အလက်၊ rating၊ နှင့် အဆင်သင့်ဖြစ်မှုအခြေအနေ (availability status) ကို စီမံခန့်ခွဲပါတယ်။</p>\n</li>\n<li>\n<p><strong>Trip Service:</strong> System ရဲ့ အဓိကကျောရိုးဖြစ်ပါတယ်။ ခရီးစဉ်တစ်ခုရဲ့ အစအဆုံး lifecycle (တောင်းဆိုခြင်း၊ လက်ခံခြင်း၊ ပြီးဆုံးခြင်း) အပါအဝင်၊ ဈေးနှုန်းတွက်ချက်ခြင်းနှင့် ငွေပေးချေခြင်းတို့ကိုပါ စီစဉ်ညွှန်ကြားပေးပါတယ်။</p>\n</li>\n<li>\n<p><strong>Location Service:</strong> ကားသမားထောင်ပေါင်းများစွာဆီက real-time GPS location update အများအပြားကို ကိုင်တွယ်ဖို့ အထူးဒီဇိုင်းဆွဲထားတဲ့ service ဖြစ်ပါတယ်။</p>\n</li>\n<li>\n<p><strong>Notification Service:</strong> User တွေဆီကို SMS, email, နှင့် push notification များ ပေးပို့ရန် တာဝန်ယူသော ယေဘုယျ service တစ်ခုဖြစ်ပါတယ်။</p>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"အဆင့်-၅-high-level-ပုံကြမ်းများဆွဲခြင်း-c4-model\">အဆင့် ၅: High-Level ပုံကြမ်းများဆွဲခြင်း (C4 Model)</h4><a class=\"sl-anchor-link\" href=\"#အဆင့်-၅-high-level-ပုံကြမ်းများဆွဲခြင်း-c4-model\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အဆင့် ၅: High-Level ပုံကြမ်းများဆွဲခြင်း (C4 Model)”</span></a></div>\n"
    }), createVNode($$ContentImage, {
      src: level1,
      alt: "C4 model level 1",
      height: 400
    }), "\n", createVNode($$ContentImage, {
      src: level2,
      alt: "C4 model level 2",
      height: 400
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

const url = "src/content/docs/software-architecture/practical/pattern.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/practical/pattern.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/practical/pattern.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
