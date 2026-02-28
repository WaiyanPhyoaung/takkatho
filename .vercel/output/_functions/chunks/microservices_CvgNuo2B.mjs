import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const microservice = new Proxy({"src":"/_astro/microservice.B86WFXWH.webp","width":889,"height":478,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/software-architecture/microservice.webp";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Microservices Architecture ကို အသေးစိတ်လေ့လာခြင်း",
  "description": "Microservices Architecture ကို အသေးစိတ်လေ့လာခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "microservices-ဆိုတာဘာလဲ",
    "text": "Microservices ဆိုတာဘာလဲ?"
  }, {
    "depth": 4,
    "slug": "ဥပမာနှိုင်းယှဉ်ချက်---shopping-mall",
    "text": "ဥပမာနှိုင်းယှဉ်ချက် - Shopping Mall"
  }, {
    "depth": 3,
    "slug": "အဓိက-လက္ခဏာရပ်များ",
    "text": "အဓိက လက္ခဏာရပ်များ"
  }, {
    "depth": 3,
    "slug": "service-boundaries-တွေကို-ဘယ်လိုသတ်မှတ်မလဲ",
    "text": "Service Boundaries တွေကို ဘယ်လိုသတ်မှတ်မလဲ"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>Microservices Architecture ရဲ့ အဓိကလက္ခဏာရပ်တွေကို နားလည်ပြီး၊ Service တွေကို ဘယ်လိုပုံစံဒီဇိုင်းဆွဲရမလဲဆိုတာကို စဉ်းစားတတ်လာစေရန် ဖြစ်ပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"microservices-ဆိုတာဘာလဲ\">Microservices ဆိုတာဘာလဲ?</h3><a class=\"sl-anchor-link\" href=\"#microservices-ဆိုတာဘာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Microservices ဆိုတာဘာလဲ?”</span></a></div>\n<p>Microservices Architecture ဆိုတာ SOA ကို တစ်ဆင့်တက် ပြောင်းလဲတိုးတက်လာတဲ့ပုံစံတစ်ခုဖြစ်ပြီး၊ ပိုသေးငယ်၊ ပိုပြီးတိကျတဲ့ Service လေးတွေနဲ့ ရိုးရှင်းတဲ့ဆက်သွယ်မှုပုံစံတွေကို ဦးစားပေးပါတယ်။ ဒါကို SOA ကို ပုံစံတစ်မျိုးနဲ့လုပ်ဆောင်တယ်လို့ မြင်နိုင်ပါတယ် - ဗဟိုက “ပိုက်လိုင်း” အကြီးကြီးတစ်ခုတည်းကနေမဟုတ်ဘဲ၊ သေးငယ်ပြီး လွတ်လပ်တဲ့ Service တွေက “ပိုက်လိုင်းငယ်တွေ” (ရိုးရှင်းတဲ့ API တွေလိုမျိုး) ကနေတစ်ဆင့် ဆက်သွယ်ကြတာပါ။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"ဥပမာနှိုင်းယှဉ်ချက်---shopping-mall\">ဥပမာနှိုင်းယှဉ်ချက် - Shopping Mall</h4><a class=\"sl-anchor-link\" href=\"#ဥပမာနှိုင်းယှဉ်ချက်---shopping-mall\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဥပမာနှိုင်းယှဉ်ချက် - Shopping Mall”</span></a></div>\n<p>Monolith က ကုန်တိုက်ကြီး (Department Store) တစ်ခုဆိုရင်၊ Microservices Architecture က Shopping Mall တစ်ခုနဲ့တူပါတယ်။ Shopping Mall က အခြေခံအဆောက်အအုံ (မီး၊ သွားလမ်း) တွေ ပံ့ပိုးပေးပေမယ့်၊ ဆိုင်ခန်းလေးတစ်ခုချင်းစီ (Microservice တစ်ခုစီ) ကတော့ လွတ်လပ်ပါတယ်။ သူ့မှာ ကိုယ်ပိုင်ဝန်ထမ်း၊ ကိုယ်ပိုင်ကုန်ပစ္စည်း (Database)၊ ကိုယ်ပိုင်အထူးပြုချက်တွေ ရှိပြီး၊ သူက တခြားဘယ်ဆိုင်ကိုမှ မထိခိုက်စေဘဲ သူ့ဆိုင်ကို အလှဆင်တာ၊ ဖွင့်ချိန်ပြောင်းတာတွေ လုပ်နိုင်ပါတယ်။</p>\n"
    }), createVNode($$ContentImage, {
      src: microservice,
      alt: "Microservices"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အဓိက-လက္ခဏာရပ်များ\">အဓိက လက္ခဏာရပ်များ</h3><a class=\"sl-anchor-link\" href=\"#အဓိက-လက္ခဏာရပ်များ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အဓိက လက္ခဏာရပ်များ”</span></a></div>\n<ul>\n<li>\n<p><strong>လုပ်ငန်းဆောင်တာတစ်ခုတည်းကိုသာ အာရုံစိုက်ခြင်း (Single Business Capability):</strong> Service တစ်ခုချင်းစီက သေးငယ်ပြီး အလုပ်တစ်ခုတည်းကို ကောင်းကောင်းလုပ်ဖို့ အာရုံစိုက်ပါတယ်။ “Payments” service က ငွေပေးချေမှုတွေကိုပဲ ကိုင်တွယ်တယ်။ User တွေ ဘယ်လို sign up လုပ်လဲဆိုတာကို သူက မသိသလို၊ စိတ်လည်းမဝင်စားပါဘူး။</p>\n</li>\n<li>\n<p><strong>သီးခြား Deploy လုပ်နိုင်ခြင်း (Independently Deployable):</strong> ဒါက အလွန်ကြီးမားတဲ့ အကျိုးကျေးဇူးတစ်ခုပါ။ သင်က “Payments” service ကို “Users” service ကို လုံးဝမထိခိုက်၊ ပြန် deploy မလုပ်ဘဲ တစ်နေ့ကို အကြိမ်များစွာ update လုပ်၊ test လုပ်၊ deploy လုပ်နိုင်ပါတယ်။</p>\n</li>\n<li>\n<p><strong>ကိုယ်ပိုင် Data ကို ပိုင်ဆိုင်ခြင်း (Owns Its Own Data):</strong> “Payments” service မှာ သူ့ကိုယ်ပိုင် Database ရှိပါတယ်။ တခြားဘယ် Service ကမှ ဒီ Database ကို တိုက်ရိုက် access လုပ်ခွင့်မရှိပါဘူး။ “Orders” service က ငွေပေးချေမှုအချက်အလက်လိုချင်ရင်၊ “Payments” service ဆီကို API ကနေတစ်ဆင့် တောင်းဆိုရပါမယ်။</p>\n</li>\n<li>\n<p><strong>နည်းပညာအမျိုးမျိုး သုံးနိုင်ခြင်း (Technology Diversity):</strong> “Payments” service ကို တည်ဆောက်တဲ့ team က Java ကို သုံးနိုင်သလို၊ “Notifications” service ကို တည်ဆောက်တဲ့ team က Python ကို သုံးနိုင်ပါတယ်။ ဘာလို့လဲဆိုတော့ သူတို့က လုံးဝသီးခြား Application တွေဖြစ်နေလို့ပါ။</p>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"service-boundaries-တွေကို-ဘယ်လိုသတ်မှတ်မလဲ\">Service Boundaries တွေကို ဘယ်လိုသတ်မှတ်မလဲ</h3><a class=\"sl-anchor-link\" href=\"#service-boundaries-တွေကို-ဘယ်လိုသတ်မှတ်မလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Service Boundaries တွေကို ဘယ်လိုသတ်မှတ်မလဲ”</span></a></div>\n<p>Microservices ဒီဇိုင်းဆွဲရာမှာ အခက်ခဲဆုံးအပိုင်းက Service တစ်ခုချင်းစီထဲမှာ ဘာတွေထည့်မလဲဆိုတာ ဆုံးဖြတ်ရတာပါပဲ။ ကောင်းမွန်တဲ့ စည်းမျဉ်းတစ်ခုကတော့ <strong>Domain-Driven Design (DDD)</strong> ဖြစ်ပါတယ် - လုပ်ငန်းသဘောတရားအရ အတူတကွပြောင်းလဲလေ့ရှိတဲ့အရာတွေကို အုပ်စုဖွဲ့ပါ။ ဒါကို <strong>“Bounded Context”</strong> ကို ရှာဖွေခြင်းလို့ခေါ်ပါတယ်။ ဥပမာ - “User တစ်ယောက်ရဲ့ Shopping Cart ကို စီမံခန့်ခွဲခြင်း” နဲ့ပတ်သက်တဲ့ Logic အားလုံးက “Cart Service” တစ်ခုတည်းမှာပဲ ရှိသင့်ပါတယ်။</p>"
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

const url = "src/content/docs/software-architecture/microservices/microservices.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/microservices/microservices.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/microservices/microservices.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
