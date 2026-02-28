import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const distributedMonolith = new Proxy({"src":"/_astro/distribute-monolith.CfktP_Ye.png","width":1080,"height":680,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/software-architecture/distribute-monolith.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Microservices တွေရဲ့ စိန်ခေါ်မှုများ",
  "description": "Microservices တွေရဲ့ စိန်ခေါ်မှုများ"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "လက်တွေ့အခြေအနေ---ဒါက-မလွယ်ပါဘူး",
    "text": "လက်တွေ့အခြေအနေ - ဒါက မလွယ်ပါဘူး"
  }, {
    "depth": 4,
    "slug": "စိန်ခေါ်မှု-၁-နေရာအနှံ့ရှိ-data-များကို-စီမံခန့်ခွဲခြင်း",
    "text": "စိန်ခေါ်မှု ၁: နေရာအနှံ့ရှိ Data များကို စီမံခန့်ခွဲခြင်း"
  }, {
    "depth": 4,
    "slug": "စိန်ခေါ်မှု-၂-လုပ်ငန်းလည်ပတ်မှုဆိုင်ရာ-ရှုပ်ထွေးမှု-operational-complexity",
    "text": "စိန်ခေါ်မှု ၂: လုပ်ငန်းလည်ပတ်မှုဆိုင်ရာ ရှုပ်ထွေးမှု (Operational Complexity)"
  }, {
    "depth": 4,
    "slug": "နံပါတ်-၁-ထောင်ချောက်---the-distributed-monolith",
    "text": "နံပါတ် ၁ ထောင်ချောက် - The Distributed Monolith"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>Microservices Architecture ကနေ ဖြစ်ပေါ်လာတဲ့ သိသာထင်ရှားတဲ့ ရှုပ်ထွေးမှုတွေနဲ့ အပေးအယူလုပ်ရတာတွေကို လက်တွေ့ကျကျ နားလည်နိုင်ရန် ဖြစ်ပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"လက်တွေ့အခြေအနေ---ဒါက-မလွယ်ပါဘူး\">လက်တွေ့အခြေအနေ - ဒါက မလွယ်ပါဘူး</h3><a class=\"sl-anchor-link\" href=\"#လက်တွေ့အခြေအနေ---ဒါက-မလွယ်ပါဘူး\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “လက်တွေ့အခြေအနေ - ဒါက မလွယ်ပါဘူး”</span></a></div>\n<p>Microservices တွေက အစွမ်းထက်ပေမယ့်၊ သူတို့က သိသိသာသာ ရှုပ်ထွေးမှုတွေကို ဖြစ်ပေါ်စေပါတယ်။ သင်က Monolith ရဲ့ ပြဿနာတွေကို Distributed Systems တွေရဲ့ ပြဿနာအသစ်တွေနဲ့ လဲလှယ်လိုက်တာပါပဲ။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"စိန်ခေါ်မှု-၁-နေရာအနှံ့ရှိ-data-များကို-စီမံခန့်ခွဲခြင်း\">စိန်ခေါ်မှု ၁: နေရာအနှံ့ရှိ Data များကို စီမံခန့်ခွဲခြင်း</h4><a class=\"sl-anchor-link\" href=\"#စိန်ခေါ်မှု-၁-နေရာအနှံ့ရှိ-data-များကို-စီမံခန့်ခွဲခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “စိန်ခေါ်မှု ၁: နေရာအနှံ့ရှိ Data များကို စီမံခန့်ခွဲခြင်း”</span></a></div>\n<ul>\n<li>\n<p><strong>Eventual Consistency -</strong> Service တစ်ခုချင်းစီမှာ ကိုယ်ပိုင် Database ရှိတဲ့အတွက်၊ System တစ်ခုလုံးအနေနဲ့ ယာယီအားဖြင့် Data တွေကွဲလွဲနေနိုင်ပါတယ်။</p>\n<ul>\n<li>ဥပမာ - User တစ်ယောက်က “User Service” မှာ သူ့ရဲ့ ပို့ဆောင်ရမယ့်လိပ်စာကို ပြောင်းလိုက်ရင်၊ “Shipping Service” က ဒီအပြောင်းအလဲကို သိဖို့ အချိန်ခဏလောက် ယူရနိုင်ပါတယ်။ System က နောက်ဆုံးမှာတော့ Data တွေ ကိုက်ညီသွားလိမ့်မယ်၊ ဒါပေမဲ့ ချက်ချင်းတော့ မဟုတ်ပါဘူး။</li>\n</ul>\n</li>\n<li>\n<p><strong>Distributed Transactions -</strong> Service အများအပြားမှာ Data တွေကို Update လုပ်ရမယ့် လုပ်ဆောင်ချက်တစ်ခုကို ဘယ်လိုကိုင်တွယ်မလဲ။</p>\n<ul>\n<li>ဥပမာ - Order တစ်ခုတင်လိုက်ရင် “Orders Service,” “Payments Service,” နှင့် “Inventory Service” တို့ကို Update လုပ်ရပါမယ်။ သင်က သမားရိုးကျ Database Transaction ကို သုံးလို့မရပါဘူး။ ဒါက များသောအားဖြင့် Saga Pattern လို ရှုပ်ထွေးတဲ့ Pattern တစ်ခု လိုအပ်လာပါတယ်။</li>\n</ul>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"စိန်ခေါ်မှု-၂-လုပ်ငန်းလည်ပတ်မှုဆိုင်ရာ-ရှုပ်ထွေးမှု-operational-complexity\">စိန်ခေါ်မှု ၂: လုပ်ငန်းလည်ပတ်မှုဆိုင်ရာ ရှုပ်ထွေးမှု (Operational Complexity)</h4><a class=\"sl-anchor-link\" href=\"#စိန်ခေါ်မှု-၂-လုပ်ငန်းလည်ပတ်မှုဆိုင်ရာ-ရှုပ်ထွေးမှု-operational-complexity\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “စိန်ခေါ်မှု ၂: လုပ်ငန်းလည်ပတ်မှုဆိုင်ရာ ရှုပ်ထွေးမှု (Operational Complexity)”</span></a></div>\n<ul>\n<li>\n<p><strong>Deployment:</strong> သင်က Application တစ်ခုတည်းကို Deploy လုပ်နေတာ မဟုတ်တော့ပါဘူး။ သေးငယ်တဲ့ Application ဒါဇင်ပေါင်းများစွာကို Deploy လုပ်ပြီး စီမံခန့်ခွဲနေရတာပါ။ ဒါက အလိုအလျောက်စနစ် (CI/CD Pipelines) တွေ အများကြီးလိုအပ်ပါတယ်။</p>\n</li>\n<li>\n<p><strong>Monitoring:</strong> System တစ်ခုလုံး ကောင်းကောင်း အလုပ်လုပ်ရဲ့လားဆိုတာ ဘယ်လိုသိမလဲ။ User Request တစ်ခုက Service ငါးခုလောက်ဆီကို “ခုန်ကူး” သွားနိုင်တယ်။ ပြဿနာဘယ်မှာဖြစ်လဲဆိုတာ အတိအကျသိဖို့ Distributed Tracing လိုမျိုး ရှုပ်ထွေးတဲ့ Tool တွေ လိုအပ်ပါတယ်။</p>\n</li>\n<li>\n<p><strong>Debugging:</strong> Error တစ်ခုရဲ့ အရင်းအမြစ်ကို ရှာရတာ အများကြီးပိုခက်ပါတယ်။ ပြဿနာက Service သုံးခုထဲက တစ်ခုခုမှာဖြစ်နိုင်သလို၊ သူတို့ကြားက Network ဆက်သွယ်မှုမှာလည်း ဖြစ်နိုင်ပါတယ်။</p>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"နံပါတ်-၁-ထောင်ချောက်---the-distributed-monolith\">နံပါတ် ၁ ထောင်ချောက် - The Distributed Monolith</h4><a class=\"sl-anchor-link\" href=\"#နံပါတ်-၁-ထောင်ချောက်---the-distributed-monolith\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “နံပါတ် ၁ ထောင်ချောက် - The Distributed Monolith”</span></a></div>\n<ul>\n<li>\n<p>ဒါက အဆိုးဆုံးအခြေအနေပါ။ ဘာလဲဆိုတော့ သင်က Application ကို Service အသေးလေးတွေအဖြစ် ခွဲထုတ်လိုက်ပေမယ့်၊ သူတို့က တစ်ခုနဲ့တစ်ခု အရမ်းကို တင်းကျပ်စွာ ချိတ်ဆက် (Tightly Coupled) နေလို့၊ Service တစ်ခုမှာ အပြောင်းအလဲလုပ်လိုက်တာနဲ့ တခြား Service အများအပြားကိုပါ လိုက်ပြီးအတူတူ Deploy လုပ်နေရတာမျိုးပါ။</p>\n</li>\n<li>\n<p>ရလဒ်အနေနဲ့ သင်က Distributed System ရဲ့ အခက်အခဲတွေအားလုံးကို ရရှိပြီး၊ Monolith ရဲ့ အားသာချက်ရော၊ Microservices ရဲ့ အားသာချက်ပါ ဘာတစ်ခုမှ မရလိုက်ပါဘူး။</p>\n</li>\n<li>\n<p>ဘယ်လိုရှောင်မလဲဆိုရင် အစကတည်းက Service တွေကြား လွတ်လပ်တဲ့ချိတ်ဆက်မှု (Loose Coupling) နဲ့ Service တစ်ခုချင်းစီကို လွတ်လပ်စွာ Deploy လုပ်နိုင်ဖို့ကိုပဲ အာရုံစိုက်ပါ။</p>\n</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: distributedMonolith,
      alt: "Anti-Pattern: The Distributed Monolith"
    }), "\n", createVNode($$Aside, {
      title: "အနှစ်ချုပ်",
      "set:html": "<ul>\n<li>\n<p>Monolith တစ်ခုကို ခွဲခြမ်းလိုက်တဲ့အခါ၊ Network မတည်ငြိမ်မှုနဲ့ Latency လိုမျိုး သူ့ကိုယ်ပိုင်စိန်ခေါ်မှုတွေရှိတဲ့ Distributed Systems လောကထဲကို ရောက်ရှိလာပါတယ်။</p>\n</li>\n<li>\n<p>Service-Oriented Architecture (SOA) က Service တွေဖန်တီးဖို့ အစောပိုင်းကြိုးပမ်းမှုတစ်ခုဖြစ်ပြီး၊ များသောအားဖြင့် ရှုပ်ထွေးတဲ့ ဗဟို “Bus” (ESB) ကို အားကိုးရလေ့ရှိတယ်။</p>\n</li>\n<li>\n<p>Microservices ကတော့ ခေတ်မီတိုးတက်ပြောင်းလဲမှုတစ်ခုဖြစ်ပြီး၊ ကိုယ်ပိုင် Data ပိုင်ဆိုင်ကာ ရိုးရှင်းတဲ့ API တွေကနေတစ်ဆင့် ဆက်သွယ်တဲ့ သေးငယ်ပြီး လွတ်လပ်တဲ့ Service အများအပြားကို ဦးစားပေးတယ်။</p>\n</li>\n<li>\n<p>Microservices တွေက အစွမ်းထက်ပေမယ့်၊ Data စီမံခန့်ခွဲမှု၊ Deployment, နှင့် Monitoring တို့မှာ သိသိသာသာ ရှုပ်ထွေးမှုတွေ ဖြစ်ပေါ်စေပြီး၊ “Distributed Monolith” ထောင်ချောက်ကို ရှောင်ရှားဖို့ သတိပြုရပါမယ်။</p>\n</li>\n</ul>"
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

const url = "src/content/docs/software-architecture/microservices/challenges.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/microservices/challenges.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/microservices/challenges.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
