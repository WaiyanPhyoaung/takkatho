import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const saga = new Proxy({"src":"/_astro/saga.DqSOdEaj.png","width":1850,"height":850,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/software-architecture/saga.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Distributed Systems များတွင် Data ကို စီမံခန့်ခွဲခြင်း",
  "description": "Distributed Systems များတွင် Data ကို စီမံခန့်ခွဲခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "service-တစ်ခု-database-တစ်ခု-စိန်ခေါ်မှု",
    "text": "“Service တစ်ခု၊ Database တစ်ခု” စိန်ခေါ်မှု"
  }, {
    "depth": 4,
    "slug": "data-synchronization-patterns-data-များကို-တူညီအောင်-ထိန်းညှိခြင်း",
    "text": "Data Synchronization Patterns (Data များကို တူညီအောင် ထိန်းညှိခြင်း)"
  }, {
    "depth": 3,
    "slug": "the-saga-pattern-service-များတစ်လျှောက်-transaction-များ-ပြုလုပ်ခြင်း",
    "text": "The Saga Pattern: Service များတစ်လျှောက် Transaction များ ပြုလုပ်ခြင်း"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>Microservice တစ်ခုစီက ကိုယ်ပိုင် Database ပိုင်ဆိုင်ထားတဲ့အခါ Data စီမံခန့်ခွဲရာမှာ ကြုံတွေ့ရတဲ့ စိန်ခေါ်မှုတွေကို နားလည်ရန်နှင့် ၎င်းတို့ကိုဖြေရှင်းရန် <strong>Saga</strong> ကဲ့သို့သော အသုံးများသည့် Pattern များကို လေ့လာရန် ဖြစ်ပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"service-တစ်ခု-database-တစ်ခု-စိန်ခေါ်မှု\">“Service တစ်ခု၊ Database တစ်ခု” စိန်ခေါ်မှု</h3><a class=\"sl-anchor-link\" href=\"#service-တစ်ခု-database-တစ်ခု-စိန်ခေါ်မှု\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled ““Service တစ်ခု၊ Database တစ်ခု” စိန်ခေါ်မှု”</span></a></div>\n<p>Microservices တွေမှာ Service တစ်ခုစီက သူ့ရဲ့ ကိုယ်ပိုင်သီးသန့် Database ကို ပိုင်ဆိုင်သင့်တယ်လို့ ကျွန်တော်တို့ လေ့လာခဲ့ပါတယ်။ ဒါက လွတ်လပ်မှုအတွက် အရမ်းကောင်းပေမယ့်၊ ပြဿနာအသစ်တစ်ခုကို ဖြစ်ပေါ်စေပါတယ် - <strong>Service တွေအများကြီးစီက Data တွေကို လိုအပ်တဲ့အခါ ဘယ်လိုလုပ်မလဲ?</strong></p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"data-synchronization-patterns-data-များကို-တူညီအောင်-ထိန်းညှိခြင်း\">Data Synchronization Patterns (Data များကို တူညီအောင် ထိန်းညှိခြင်း)</h4><a class=\"sl-anchor-link\" href=\"#data-synchronization-patterns-data-များကို-တူညီအောင်-ထိန်းညှိခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Data Synchronization Patterns (Data များကို တူညီအောင် ထိန်းညှိခြင်း)”</span></a></div>\n<p>Service တစ်ခုက တခြား Service တစ်ခုရဲ့ Data ကို Query လုပ်ချင်တယ်ဆိုရင်၊ ရွေးချယ်စရာ နည်းလမ်းအနည်းငယ်ရှိပါတယ်:</p>\n<ol>\n<li>\n<p><strong>Synchronous API Calls (တိုက်ရိုက် API ခေါ်ယူခြင်း) -</strong> အရိုးရှင်းဆုံးနည်းလမ်းပါ။ Service A က သူလိုအပ်တဲ့ Data ကိုရဖို့ Service B ရဲ့ API ကို တိုက်ရိုက်ခေါ်ယူလိုက်တာ ဖြစ်ပါတယ်။ အားနည်းချက်ကတော့ Service B သာ ပျက်နေရင်၊ Service A ပါ အလုပ်ဆက်လုပ်လို့မရတော့ပါဘူး။</p>\n</li>\n<li>\n<p><strong>Asynchronous Events (Event များဖြင့် ဆက်သွယ်ခြင်း) -</strong> Service B က သူ့ Data ပြောင်းလဲသွားတိုင်း “UserDataUpdated” ဆိုတဲ့ Event တစ်ခု ထုတ်လွှင့်ပေးပါတယ်။ Service A က အဲဒီ Event ကိုနားထောင်ပြီး သူ့ဆီမှာရှိတဲ့ Data Copy ကို Update လုပ်ပါတယ်။ ဒါက ပိုပြီး ခံနိုင်ရည်ရှိပေမယ့်၊ <strong>Eventual Consistency (ချက်ချင်း Data မတူပေမယ့်၊ နောက်ဆုံးမှာတော့ တူညီသွားတဲ့အခြေအနေ)</strong> ကို ဖြစ်ပေါ်စေပါတယ်။</p>\n</li>\n</ol>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"the-saga-pattern-service-များတစ်လျှောက်-transaction-များ-ပြုလုပ်ခြင်း\">The Saga Pattern: Service များတစ်လျှောက် Transaction များ ပြုလုပ်ခြင်း</h3><a class=\"sl-anchor-link\" href=\"#the-saga-pattern-service-များတစ်လျှောက်-transaction-များ-ပြုလုပ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “The Saga Pattern: Service များတစ်လျှောက် Transaction များ ပြုလုပ်ခြင်း”</span></a></div>\n<p>ဒီ Pattern က Service တွေမှာ <strong>All or Nothing</strong> ဆိုတဲ့ လုပ်ဆောင်ချက်တွေရဲ့ ပြဿနာကို ဖြေရှင်းပေးပါတယ်။</p>\n<ul>\n<li><strong>ပြဿနာ -</strong> Order တစ်ခုတင်တာကို မြင်ယောင်ကြည့်ပါ။ ဒါက -\n<ol>\n<li>Order Service မှာ Order အသစ်တစ်ခုဖန်တီးရမယ်</li>\n<li>Payment Service မှာ ငွေပေးချေရမယ်၊ ပြီးတော့</li>\n<li>Inventory Service မှာ ပစ္စည်းအရေအတွက်ကို သီးသန့်ဖယ်ထားရပါမယ်။</li>\n</ol>\n</li>\n</ul>\n<p>အကယ်၍ အဆင့် ၃ က မအောင်မြင်ခဲ့ရင်၊ အဆင့် ၁ နဲ့ ၂ ကို ပြန်ပြီး ဖျက်သိမ်း (Undo) ရပါမယ်။ သမားရိုးကျ Database Transaction တစ်ခုက မတူညီတဲ့ Database တွေပေါ်မှာ ဒီလိုအလုပ်မျိုး မလုပ်နိုင်ပါဘူး။</p>\n<ul>\n<li>\n<p><strong>Saga ၏ ဖြေရှင်းချက် -</strong> Saga ဆိုတာက Local Transaction အဆင့်ဆင့်ကို ဆက်တိုက်လုပ်ဆောင်တာပါ။ Transaction တစ်ခုချင်းစီက Service တစ်ခုကို Update လုပ်ပြီး၊ နောက် Transaction တစ်ဆင့်ကို စတင်ဖို့အတွက် Event ဒါမှမဟုတ် Message တစ်ခု ထုတ်လွှင့်ပေးပါတယ်။</p>\n</li>\n<li>\n<p><strong>အလွန်အရေးကြီးသော သဘောတရား - Compensation (ပြန်လည်ပြင်ဆင်ခြင်း) -</strong> Saga ထဲက အဆင့်တစ်ခုခု မအောင်မြင်ခဲ့ရင်၊ သူက “Compensating Transactions” (လုပ်ပြီးသားအဆင့်တွေကို ပြန်ပြီးဖျက်သိမ်းတဲ့ လုပ်ဆောင်ချက်) တွေကို ပြောင်းပြန်အစဉ်လိုက် လုပ်ဆောင်ပါတယ်။ ဥပမာ - ပစ္စည်းအရေအတွက်ဖယ်ထားတာ မအောင်မြင်ခဲ့ရင်၊ Saga က Payment Service မှာ “ငွေပြန်အမ်းခြင်း” Transaction ကို စတင်စေပြီး၊ Order Service မှာ “Order ဖျက်သိမ်းခြင်း” Transaction ကို စတင်စေပါလိမ့်မယ်။</p>\n</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: saga,
      alt: "Saga Pattern"
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

const url = "src/content/docs/software-architecture/communications/data-distributed.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/communications/data-distributed.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/communications/data-distributed.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
