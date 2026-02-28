import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const esb = new Proxy({"src":"/_astro/esb.BRKstuSv.png","width":1320,"height":880,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/software-architecture/esb.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Monolith ကို ခွဲခြမ်းစိတ်ဖြာခြင်း - SOA နဲ့ Microservices",
  "description": "Monolith ကို ခွဲခြမ်းစိတ်ဖြာခြင်း - SOA နဲ့ Microservices"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "တစ်ခုတည်းကနေ-အများကြီးဆီသို့",
    "text": "တစ်ခုတည်းကနေ အများကြီးဆီသို့"
  }, {
    "depth": 3,
    "slug": "စည်းမျဉ်းအသစ်များ---distributed-systems-တွေရဲ့-စိန်ခေါ်မှုများ",
    "text": "စည်းမျဉ်းအသစ်များ - Distributed Systems တွေရဲ့ စိန်ခေါ်မှုများ"
  }, {
    "depth": 3,
    "slug": "ရှေ့ပြေးဖြစ်ခဲ့သော---soa-service-oriented-architecture",
    "text": "ရှေ့ပြေးဖြစ်ခဲ့သော - SOA (Service-Oriented Architecture)"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>Application အကြီးကြီးတစ်ခုတည်းကနေ Service အများအပြား ဆက်သွယ်အလုပ်လုပ်တဲ့ပုံစံ (Distributed Systems) ကို နားလည်ပြီး၊ Microservices မတိုင်ခင်က ခေတ်စားခဲ့တဲ့ SOA အကြောင်းကို လေ့လာဖို့ဖြစ်ပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>အရင်အခန်းမှာ၊ Application အကြီးကြီးတစ်ခုဖြစ်တဲ့ Monolith က စီမံခန့်ခွဲရတာ ဘယ်လောက်ခက်ခဲလာနိုင်လဲဆိုတာကို ကျွန်တော်တို့တွေ့ခဲ့ရပါတယ်။ ဒါကြောင့် အဓိပ္ပါယ်အရှိဆုံး ဖြေရှင်းချက်ကတော့ အဲ့ဒီ Application အကြီးကြီးကို အပိုင်းသေးသေးလေးတွေအဖြစ် ခွဲထုတ်ဖို့ပါပဲ။ ဒီအခန်းမှာတော့ <strong>Distributed Systems</strong> (နေရာအနှံ့မှာ ခွဲပြီးထားတဲ့ System) တွေအကြောင်းကို လေ့လာပါမယ်။ <strong>Service-Oriented Architecture (SOA)</strong> လို့ခေါ်တဲ့ အစောပိုင်းကြိုးပမ်းမှုတစ်ခုကနေစပြီး၊ သူ့ရဲ့ခေတ်မီပြီး လူကြိုက်များတဲ့ ပြောင်းလဲတိုးတက်မှုဖြစ်တဲ့ <strong>Microservices</strong> အကြောင်းကို အသေးစိတ်လေ့လာသွားပါမယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"တစ်ခုတည်းကနေ-အများကြီးဆီသို့\">တစ်ခုတည်းကနေ အများကြီးဆီသို့</h3><a class=\"sl-anchor-link\" href=\"#တစ်ခုတည်းကနေ-အများကြီးဆီသို့\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “တစ်ခုတည်းကနေ အများကြီးဆီသို့”</span></a></div>\n<p>Distributed System ဆိုတာက Component တစ်ခုချင်းစီက Network ကနေ ဆက်သွယ်ပြီး အတူတကွအလုပ်လုပ်တဲ့ System တစ်ခုပါ။ Code အားလုံးက တစ်နေရာတည်းမှာ (Monolith ထဲမှာ) run မယ့်အစား၊ မတူညီတဲ့ Process တွေ၊ Computer တွေပေါ်မှာ ခွဲပြီးထားတာဖြစ်ပါတယ်။ ဒါက Modern Large-scale Application အားလုံးနီးပါးရဲ့ အခြေခံအုတ်မြစ်ပါပဲ။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"စည်းမျဉ်းအသစ်များ---distributed-systems-တွေရဲ့-စိန်ခေါ်မှုများ\">စည်းမျဉ်းအသစ်များ - Distributed Systems တွေရဲ့ စိန်ခေါ်မှုများ</h3><a class=\"sl-anchor-link\" href=\"#စည်းမျဉ်းအသစ်များ---distributed-systems-တွေရဲ့-စိန်ခေါ်မှုများ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “စည်းမျဉ်းအသစ်များ - Distributed Systems တွေရဲ့ စိန်ခေါ်မှုများ”</span></a></div>\n<p>Monolith ကနေ Distributed System ကို ပြောင်းလိုက်တဲ့အခါ၊ ကြားထဲမှာ Network ကို ထည့်သွင်းလိုက်ရပြီး၊ Network ဆိုတာက ကြိုတင်ခန့်မှန်းလို့မရပါဘူး။</p>\n<ul>\n<li>\n<p><strong>Network က အမြဲတမ်း အားကိုးလို့မရဘူး:</strong> Connection တွေက ဘယ်အချိန်မဆို ပြတ်တောက်သွားနိုင်တယ်၊ ပျက်သွားနိုင်တယ်။</p>\n</li>\n<li>\n<p><strong>Latency (Data သွားလာချိန် ကြန့်ကြာမှု) အမြဲတမ်းရှိတယ်:</strong> Network ကနေ Data တွေသွားလာဖို့ အမြဲတမ်း အချိန်ယူရတယ်။ Monolith ထဲက Function တစ်ခုကိုခေါ်တာက မျက်စိတစ်မှိတ်အတွင်းဖြစ်ပေမယ့်၊ Network Call တစ်ခုက အဆထောင်ပေါင်းများစွာ ပိုနှေးတယ်။</p>\n</li>\n<li>\n<p><strong>Bandwidth က အကန့်အသတ်ရှိတယ်:</strong> သင်က Data အများကြီးကို Network ကနေ ချက်ချင်းပို့လို့မရဘူး။</p>\n</li>\n</ul>\n<p>Network က ပြီးပြည့်စုံတယ်လို့ ဘယ်တော့မှ မယူဆသင့်ပါဘူး။ ကောင်းမွန်တဲ့ <strong>Distributed Architecture</strong> တစ်ခုက ဒီစိန်ခေါ်မှုတွေကို ထည့်သွင်းစဉ်းစားပြီး ဒီဇိုင်းဆွဲထားပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ရှေ့ပြေးဖြစ်ခဲ့သော---soa-service-oriented-architecture\">ရှေ့ပြေးဖြစ်ခဲ့သော - SOA (Service-Oriented Architecture)</h3><a class=\"sl-anchor-link\" href=\"#ရှေ့ပြေးဖြစ်ခဲ့သော---soa-service-oriented-architecture\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ရှေ့ပြေးဖြစ်ခဲ့သော - SOA (Service-Oriented Architecture)”</span></a></div>\n<p>SOA ဆိုတာ Monolith ကို ခွဲခြမ်းဖို့အတွက် ပထမဆုံးလူကြိုက်များခဲ့တဲ့ Architectural Style တွေထဲက တစ်ခုပါ။</p>\n<ul>\n<li>\n<p><strong>ဘာလဲဆိုတော့:</strong> SOA က Application အကြီးကြီးတစ်ခုကို <strong>Business Function အလိုက်ခွဲထားတဲ့ Service</strong> တစ်ခုစီအဖြစ် ခွဲထုတ်တာပါ (ဥပမာ - “Human Resources Service,” “Finance Service”)။ ဒီ Service တွေက လုပ်ငန်းတစ်ခုလုံးမှာ ပြန်လည်အသုံးပြုနိုင်ဖို့ ရည်ရွယ်ပါတယ်။</p>\n</li>\n<li>\n<p><strong>အဓိကအချက် (အားနည်းချက်) The ESB:</strong> SOA မှာ Service တွေက များသောအားဖြင့် <strong>Enterprise Service Bus (ESB)</strong> လို့ခေါ်တဲ့ အဓိက “ပိုက်လိုင်းကြီး” ကနေတစ်ဆင့် ဆက်သွယ်ကြတယ်။ ESB က Message တွေ ဘယ်ကိုသွားရမလဲဆိုတာ လမ်းကြောင်းပေးတာ၊ Data တွေကို Format ပြောင်းပေးတာ၊ နဲ့ Business Rule တွေကို ထိန်းချုပ်တာတွေ ပြုလုပ်တယ်။ ဒါက ESB ကို အလွန်ရှုပ်ထွေးစေပြီး၊ သူပျက်သွားရင် အကုန်လုံးရပ်သွားနိုင်တဲ့ အားနည်းချက် (Single Point of Failure) ဖြစ်စေပါတယ်။</p>\n</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: esb,
      alt: "SOA with ESB",
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

const url = "src/content/docs/software-architecture/microservices/soa.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/microservices/soa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/microservices/soa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
