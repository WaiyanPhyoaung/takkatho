import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const syncVsAsync = new Proxy({"src":"/_astro/syncvsasync.CZBSTEGG.png","width":1240,"height":758,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/software-architecture/syncvsasync.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Asynchronous Communication",
  "description": "Asynchronous Communication"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "asynchronous-communication--အစွမ်း",
    "text": "Asynchronous Communication ၏ အစွမ်း"
  }, {
    "depth": 3,
    "slug": "asynchronous-communication-ဆိုတာ-တကယ်တော့-ဘာလဲ",
    "text": "Asynchronous Communication ဆိုတာ တကယ်တော့ ဘာလဲ?"
  }, {
    "depth": 3,
    "slug": "decoupling-တိုက်ရိုက်မချိတ်ဆက်ဘဲ-ခွဲထုတ်ထားခြင်း",
    "text": "Decoupling (တိုက်ရိုက်မချိတ်ဆက်ဘဲ ခွဲထုတ်ထားခြင်း)"
  }, {
    "depth": 4,
    "slug": "၁-ပိုမိုကောင်းမွန်သော-resilience-ပြဿနာများကို-ကြံ့ကြံ့ခံနိုင်ခြင်း",
    "text": "၁။ ပိုမိုကောင်းမွန်သော Resilience (ပြဿနာများကို ကြံ့ကြံ့ခံနိုင်ခြင်း)"
  }, {
    "depth": 4,
    "slug": "၂-ပိုမိုကောင်းမွန်သော-scalability-အလုပ်ပိုများကို-ကိုင်တွယ်နိုင်ခြင်း",
    "text": "၂။ ပိုမိုကောင်းမွန်သော Scalability (အလုပ်ပိုများကို ကိုင်တွယ်နိုင်ခြင်း)"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>Service များကို တိုက်ရိုက်မချိတ်ဆက်ဘဲ ခွဲထုတ်ထားခြင်း (Decoupling) မှ ရရှိလာသော Asynchronous Communication ၏ အဓိကအကျိုးကျေးဇူးများ (Resilience နှင့် Scalability) ကို နားလည်စေရန် ဖြစ်ပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>အရင်အခန်းမှာ Service တွေက တစ်ခုနဲ့တစ်ခု တိုက်ရိုက် “စကားပြော” ပြီး အဖြေကိုစောင့်တဲ့ (Synchronous Communication) ပုံစံကို ကျွန်တော်တို့ အဓိကထားလေ့လာခဲ့ပါတယ်။ ဒါပေမဲ့ ချက်ချင်းအဖြေမလိုအပ်တဲ့အခါ ဘာဖြစ်မလဲ။ ဒီအခန်းမှာတော့ Asynchronous Communication ကို အသေးစိတ်လေ့လာပါမယ်။ ဒါက နောက်ကွယ်မှာ အလုပ်တွေကို ကိုင်တွယ်နိုင်တဲ့၊ <strong>ဒဏ်ခံနိုင်ရည်ရှိပြီး အလွန်အမင်း Scale လုပ်နိုင်တဲ့ System တွေ</strong> တည်ဆောက်ရာမှာ အစွမ်းထက်တဲ့ ချဉ်းကပ်မှုတစ်ခု ဖြစ်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"asynchronous-communication--အစွမ်း\">Asynchronous Communication ၏ အစွမ်း</h3><a class=\"sl-anchor-link\" href=\"#asynchronous-communication--အစွမ်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Asynchronous Communication ၏ အစွမ်း”</span></a></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"asynchronous-communication-ဆိုတာ-တကယ်တော့-ဘာလဲ\">Asynchronous Communication ဆိုတာ တကယ်တော့ ဘာလဲ?</h3><a class=\"sl-anchor-link\" href=\"#asynchronous-communication-ဆိုတာ-တကယ်တော့-ဘာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Asynchronous Communication ဆိုတာ တကယ်တော့ ဘာလဲ?”</span></a></div>\n<p>ကျွန်တော်တို့ရဲ့ ရိုးရှင်းတဲ့ ဥပမာနဲ့ နှိုင်းယှဉ်ကြည့်ကြရအောင်:</p>\n<ul>\n<li>\n<p><strong>Synchronous Communication က ဖုန်းခေါ်တာနဲ့တူတယ် -</strong> သင်က တစ်စုံတစ်ယောက်ကို ဖုန်းခေါ်တယ်၊ ပြီးတော့ သူတို့ဖုန်းကိုင်ပြီး သင်လိုအပ်တဲ့အချက်အလက်ကို ပေးတဲ့အထိ လိုင်းပေါ်မှာ စောင့်နေရမယ်။ သူတို့ဖုန်းမကိုင်ရင် သင့်ခေါ်ဆိုမှုက မအောင်မြင်ဘူး၊ သင်လည်း ဘာမှဆက်လုပ်လို့မရတော့ဘူး။</p>\n</li>\n<li>\n<p><strong>Asynchronous Communication က စာပို့တာ (Text Message) နဲ့တူတယ် -</strong> သင်က Message တစ်စောင်ပို့လိုက်တယ်၊ ပြီးတော့ သင့်ဖုန်းကို ချက်ချင်းချပြီး တခြားအလုပ်တစ်ခုခု ဆက်လုပ်လို့ရတယ်။ တခြားလူက Message ကိုတွေ့ပြီး နောက်မှသင့်ကို ပြန်ဆက်သွယ်လိမ့်မယ်လို့ ယုံကြည်ထားတယ်။ သင်က ကိုယ့်အလုပ်ကိုယ်ဆက်လုပ်နေတာကို ရပ်တန့်ထားစရာမလိုဘူး။</p>\n</li>\n</ul>\n<p>Software မှာတော့၊ ဒါက Service တစ်ခုက နောက်တစ်ခုကို Message တစ်စောင်ပို့လိုက်ပြီး ချက်ချင်းအဖြေပြန်မစောင့်ဘဲ အလုပ်ဆက်လုပ်နေတာကို ဆိုလိုပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"decoupling-တိုက်ရိုက်မချိတ်ဆက်ဘဲ-ခွဲထုတ်ထားခြင်း\">Decoupling (တိုက်ရိုက်မချိတ်ဆက်ဘဲ ခွဲထုတ်ထားခြင်း)</h3><a class=\"sl-anchor-link\" href=\"#decoupling-တိုက်ရိုက်မချိတ်ဆက်ဘဲ-ခွဲထုတ်ထားခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Decoupling (တိုက်ရိုက်မချိတ်ဆက်ဘဲ ခွဲထုတ်ထားခြင်း)”</span></a></div>\n<p>Asynchronous Communication ရဲ့ အဓိကအကျိုးကျေးဇူးက <strong>Decoupling</strong> ပါ။ ဒါက Service တွေက တစ်ခုနဲ့တစ်ခု တိုက်ရိုက်သိနေစရာမလိုဘူးလို့ ဆိုလိုပါတယ်။ Message ပို့တဲ့ Service က လက်ခံမယ့် Service က Online မှာရှိနေလား၊ အလုပ်ရှုပ်နေလား၊ ဒါမှမဟုတ် အစားထိုးခံလိုက်ရပြီလားဆိုတာ သိစရာမလိုပါဘူး။ သူက သူ့ Message ကို ဗဟိုက “စာတိုက်ပုံး” (Message Broker) တစ်ခုဆီ ပို့လိုက်ရုံပါပဲ၊ နောက်မှတစ်စုံတစ်ယောက်က ဒါကို လာယူလိမ့်မယ်လို့ ယုံကြည်လိုက်ရုံပါပဲ။</p>\n<p>ဒီ Decoupling က ကျွန်တော်တို့ကို အဓိကအားသာချက်ကြီးနှစ်ခု ပေးပါတယ်-</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"၁-ပိုမိုကောင်းမွန်သော-resilience-ပြဿနာများကို-ကြံ့ကြံ့ခံနိုင်ခြင်း\">၁။ ပိုမိုကောင်းမွန်သော Resilience (ပြဿနာများကို ကြံ့ကြံ့ခံနိုင်ခြင်း)</h4><a class=\"sl-anchor-link\" href=\"#၁-ပိုမိုကောင်းမွန်သော-resilience-ပြဿနာများကို-ကြံ့ကြံ့ခံနိုင်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “၁။ ပိုမိုကောင်းမွန်သော Resilience (ပြဿနာများကို ကြံ့ကြံ့ခံနိုင်ခြင်း)”</span></a></div>\n<ul>\n<li>\n<p><strong>ဘယ်လိုအလုပ်လုပ်လဲ -</strong> သင့် Order Service က Confirmation Email တစ်စောင်ပို့ဖို့ Email Service ကို ပြောဖို့လိုတယ်ဆိုပါစို့။</p>\n<ul>\n<li>\n<p><strong>Sync System မှာဆိုရင် -</strong> Email Service က ပျက်နေရင် ဒါမှမဟုတ် နှေးနေရင်၊ Order Service က Error ပြန်ရပြီး Order ကို အောင်မြင်အောင် မလုပ်နိုင်တော့တာမျိုး ဖြစ်နိုင်တယ်။</p>\n</li>\n<li>\n<p><strong>Async System မှာဆိုရင် -</strong> Order Service က “OrderPlaced” ဆိုတဲ့ Message တစ်ခုကို စာတိုက်ပုံးထဲကို ပို့လိုက်ရုံပဲ။ Email Service Online မှာရှိမရှိ သူစိတ်မဝင်စားဘူး။ Email Service က ပျက်နေရင်တောင်၊ Message က စာတိုက်ပုံးထဲမှာ ဘေးကင်းစွာရှိနေလိမ့်မယ်။ Email Service ပြန်တက်လာတဲ့အခါ၊ Message ကိုတွေ့ပြီး Email ပို့ပါလိမ့်မယ်။ Order Service ကတော့ လုံးဝမထိခိုက်သွားပါဘူး။</p>\n</li>\n</ul>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"၂-ပိုမိုကောင်းမွန်သော-scalability-အလုပ်ပိုများကို-ကိုင်တွယ်နိုင်ခြင်း\">၂။ ပိုမိုကောင်းမွန်သော Scalability (အလုပ်ပိုများကို ကိုင်တွယ်နိုင်ခြင်း)</h4><a class=\"sl-anchor-link\" href=\"#၂-ပိုမိုကောင်းမွန်သော-scalability-အလုပ်ပိုများကို-ကိုင်တွယ်နိုင်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “၂။ ပိုမိုကောင်းမွန်သော Scalability (အလုပ်ပိုများကို ကိုင်တွယ်နိုင်ခြင်း)”</span></a></div>\n<ul>\n<li>\n<p><strong>ဘယ်လိုအလုပ်လုပ်လဲ -</strong> သင့် Website မှာ User အသစ် Sign Up လုပ်တဲ့သူတွေ ရုတ်တရက် အများကြီးတိုးလာတယ်ဆိုပါစို့။ Sign Up တစ်ခုချင်းစီအတွက် Welcome Email တစ်စောင်ပို့ဖို့ လိုအပ်ပါတယ်။</p>\n</li>\n<li>\n<p>Async နဲ့ဆိုရင် Sign Up Request တစ်ခုချင်းစီက “SendWelcomeEmail” Message တစ်စောင်ကို စာတိုက်ပုံးထဲကို ထည့်ပေးပါတယ်။ Email Service တစ်ခုတည်းက ကိုင်တွယ်နိုင်တာထက် Message တွေ ပိုများလာရင် သင်က Email Service Copy တွေကို အလွယ်တကူ ထပ်ပြီး Run ပေးလိုက်ရုံပါပဲ။ သူတို့အားလုံးက စာတိုက်ပုံးထဲက Message တွေကို အတူတကွ ဝိုင်းပြီး ရှင်းလင်းပေးနိုင်ပါတယ်၊ ဒါက တန်းစီနေတဲ့ Customer တွေအများကြီးကို ကိုင်တွယ်ဖို့ ပိုက်ဆံရှင်းကောင်တာတွေ ထပ်ဖွင့်ပေးလိုက်သလိုပါပဲ။ Sign Up Process ကို မနှေးကွေးစေဘဲ အလုပ်တွေကို Scale လုပ်နိုင်ပါတယ်။</p>\n</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: syncVsAsync,
      alt: "Sync vs Async Communication"
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

const url = "src/content/docs/software-architecture/async/asynchronous.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/async/asynchronous.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/async/asynchronous.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
