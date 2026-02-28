import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const cqrsAndEventSourcing = new Proxy({"src":"/_astro/cqrs-eventsourcing.Bkk0zpAm.png","width":1860,"height":1153,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/software-architecture/cqrs-eventsourcing.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Advanced Patterns: CQRS & Event Sourcing",
  "description": "Advanced Patterns: CQRS & Event Sourcing"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "cqrs-အလုပ်လုပ်တဲ့အပိုင်း-နဲ့-data-ဖတ်တဲ့အပိုင်း-ကို-ခွဲထုတ်ခြင်း",
    "text": "CQRS: “အလုပ်လုပ်တဲ့အပိုင်း” နဲ့ “Data ဖတ်တဲ့အပိုင်း” ကို ခွဲထုတ်ခြင်း"
  }, {
    "depth": 4,
    "slug": "event-sourcing-ဘယ်တော့မှ-မပျောက်ပျက်စေခြင်း",
    "text": "Event Sourcing: ဘယ်တော့မှ မပျောက်ပျက်စေခြင်း"
  }, {
    "depth": 4,
    "slug": "cqrs-နှင့်-event-sourcing-ဘယ်လို-အတူတကွ-အလုပ်လုပ်သလဲ",
    "text": "CQRS နှင့် Event Sourcing ဘယ်လို အတူတကွ အလုပ်လုပ်သလဲ"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>ရှုပ်ထွေးပြီး <strong>Event-driven Systems</strong> တွေမှာ မကြာခဏအသုံးပြုလေ့ရှိတဲ့ အဆင့်မြင့် pattern နှစ်ခုကို အခြေခံနားလည်နိုင်ရန်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"cqrs-အလုပ်လုပ်တဲ့အပိုင်း-နဲ့-data-ဖတ်တဲ့အပိုင်း-ကို-ခွဲထုတ်ခြင်း\">CQRS: “အလုပ်လုပ်တဲ့အပိုင်း” နဲ့ “Data ဖတ်တဲ့အပိုင်း” ကို ခွဲထုတ်ခြင်း</h3><a class=\"sl-anchor-link\" href=\"#cqrs-အလုပ်လုပ်တဲ့အပိုင်း-နဲ့-data-ဖတ်တဲ့အပိုင်း-ကို-ခွဲထုတ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “CQRS: “အလုပ်လုပ်တဲ့အပိုင်း” နဲ့ “Data ဖတ်တဲ့အပိုင်း” ကို ခွဲထုတ်ခြင်း”</span></a></div>\n<ul>\n<li>\n<p><strong>သူဖြေရှင်းပေးတဲ့ ပြဿနာ -</strong> တစ်ခါတလေမှာ၊ သင်က data ကို create or update လုပ်ရတဲ့ ပုံစံက business rule တွေ၊ validation တွေအများကြီးနဲ့ အလွန်ရှုပ်ထွေးနေတတ်ပါတယ်။ ဒါပေမဲ့ အဲဒီ data ကို ပြန်ဖတ်ရတဲ့ပုံစံကတော့ ရိုးရှင်းပြီး အလွန်မြန်ဖို့လိုအပ်ပါတယ်။ နှစ်ခုလုံးအတွက် data model တစ်ခုတည်းကို သုံးတာက ထိရောက်မှုမရှိနိုင်ပါဘူး။</p>\n</li>\n<li>\n<p><strong>CQRS (Command Query Responsibility Segregation) -</strong> ဒီ pattern က application model ကို သီးခြားအပိုင်းနှစ်ခုအဖြစ် ခွဲထုတ်ခြင်းဖြင့် ပြဿနာကို ဖြေရှင်းပေးပါတယ်-</p>\n<ol>\n<li>\n<p><strong>Commands -</strong> ဒါတွေက system ရဲ့ state ကို ပြောင်းလဲဖို့  Wrtie လုပ်တဲ့ command တွေပါ (ဥပမာ - <code dir=\"auto\">PlaceOrderCommand</code>, <code dir=\"auto\">UpdateUserAddressCommand</code>)။ ဒီလို command တွေကို ကိုင်တွယ်ဖို့နဲ့ business rule တွေကို ထိန်းချုပ်ဖို့အတွက် “Write Side” ကို optimize လုပ်ထားတဲ့ Data Model ကိုသုံးပါတယ်။</p>\n</li>\n<li>\n<p><strong>Queries -</strong> ဒါတွေက system ကနေ data ဖတ်ဖို့ တောင်းဆိုချက်တွေပါ (ဥပမာ - <code dir=\"auto\">GetOrderHistoryQuery</code>)။ “Read side” (ဖတ်တဲ့အပိုင်း) အတွက်ကျ ကြိုတင် format ချထားပြီး မြန်မြန်ဆန်ဆန်၊ လွယ်လွယ်ကူကူ query လုပ်လို့ရအောင် optimize လုပ်ထားတဲ့ data model ကို သုံးပါတယ်။</p>\n</li>\n</ol>\n</li>\n<li>\n<p><strong>ဥပမာနှိုင်းယှဉ်ချက် - စာကြည့်တိုက် -</strong> Command side က စာကြည့်တိုက်မှူးတစ်ယောက် စာအုပ်အသစ်တစ်အုပ်ထည့်တဲ့ ရှုပ်ထွေးတဲ့ လုပ်ငန်းစဉ်နဲ့တူပါတယ် - ISBN ကိုစစ်ဆေး၊ အမျိုးအစားခွဲ၊ တံဆိပ်ကပ်၊ ပြီးတော့ မှန်ကန်တဲ့စင်ကိုရှာ။ ဒါက ဂရုတစိုက်နဲ့  ပုံစံကျတဲ့ လုပ်ငန်းစဉ်တစ်ခုပါ။ Query side ကတော့ သင်စာအုပ်တစ်အုပ်ရဲ့ တည်နေရာကို ချက်ချင်းရှာတွေ့နိုင်အောင် category ခွဲထားတာမျိုးပါ။ ဒီ system နှစ်ခုက သီးခြားစီဖြစ်ပြီး အလုပ်တွေအတွက် optimize လုပ်ထားကြပါတယ်။</p>\n</li>\n</ul>\n<blockquote>\n<p>Write commands တွေကို write လုပ်တဲ့ လုပ်ငန်းစဉ် တွေမြန်အောင် optimize လုပ်ထားပြီး Read လုပ်တာတွေ အတွက်လဲ သက်သက်စီ optimize လုပ်ထားတာမျိုးပါ။</p>\n</blockquote>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"event-sourcing-ဘယ်တော့မှ-မပျောက်ပျက်စေခြင်း\">Event Sourcing: ဘယ်တော့မှ မပျောက်ပျက်စေခြင်း</h4><a class=\"sl-anchor-link\" href=\"#event-sourcing-ဘယ်တော့မှ-မပျောက်ပျက်စေခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Event Sourcing: ဘယ်တော့မှ မပျောက်ပျက်စေခြင်း”</span></a></div>\n<ul>\n<li>\n<p><strong>ဘာလဲ -</strong> Application အများစုက data ရဲ့ လက်ရှိအခြေအနေ (current state) ကိုပဲ သိမ်းဆည်းလေ့ရှိပါတယ်။ ဥပမာ - သင့်ဘဏ်အကောင့်ထဲမှာ လက်ကျန်ငွေက $50 ဖြစ်ပါတယ်။ Event Sourcing ကတော့ ချဉ်းကပ်ပုံတစ်မျိုးပြောင်းလိုက်ပါတယ် - နောက်ဆုံးအခြေအနေကို သိမ်းမယ့်အစား၊ ဖြစ်ပျက်ခဲ့တဲ့ event (ဖြစ်ရပ်) တွေရဲ့ History အပြည့်အစုံ ကို သိမ်းဆည်းပါတယ်။</p>\n</li>\n<li>\n<p><strong>ဥပမာ -</strong> “Balance: $50” ဆိုတာအစား၊ event-sourced system တစ်ခုက ဒီလိုသိမ်းဆည်းပါတယ်-</p>\n<ol>\n<li>\n<p>AccountCreated (အကောင့်ဖွင့်ခဲ့သည်)</p>\n</li>\n<li>\n<p>Deposited: $100 (ငွေ $100 သွင်းခဲ့သည်)</p>\n</li>\n<li>\n<p>Withdrew: $20 (ငွေ $20 ထုတ်ခဲ့သည်)</p>\n</li>\n<li>\n<p>Withdrew: $30 (ငွေ $30 ထုတ်ခဲ့သည်)</p>\n</li>\n</ol>\n</li>\n<li>\n<p>လက်ရှိလက်ကျန်ငွေ ($50) ကို event အားလုံးကို အစဉ်လိုက် ပြန်လည်တွက်ချက်ခြင်းဖြင့် ရရှိပါတယ်။</p>\n</li>\n<li>\n<p><strong>အဓိကအကျိုးကျေးဇူးများ -</strong> ဖြစ်ပျက်ခဲ့သမျှအရာအားလုံးအတွက် ပြည့်စုံတဲ့ audit log (စစ်ဆေးမှုမှတ်တမ်း) တစ်ခု သင့်မှာရှိနေပါမယ်။ တိကျတဲ့ History ကို ကြည့်ပြီး ပြဿနာတွေကို debug လုပ်နိုင်သလို၊ event တွေကို ပုံစံအမျိုးမျိုးနဲ့ ပြန်လည်တွက်ချက်ပြီး data တွေ ကို နေရာအမျိုးမျိုးအတွက် အသုံးပြုနိုင်ပါတယ်။</p>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"cqrs-နှင့်-event-sourcing-ဘယ်လို-အတူတကွ-အလုပ်လုပ်သလဲ\">CQRS နှင့် Event Sourcing ဘယ်လို အတူတကွ အလုပ်လုပ်သလဲ</h4><a class=\"sl-anchor-link\" href=\"#cqrs-နှင့်-event-sourcing-ဘယ်လို-အတူတကွ-အလုပ်လုပ်သလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “CQRS နှင့် Event Sourcing ဘယ်လို အတူတကွ အလုပ်လုပ်သလဲ”</span></a></div>\n<p>ဒီ pattern နှစ်ခုက တစ်ခုနဲ့တစ်ခု အလွန်လိုက်ဖက်ညီပါတယ်-</p>\n<ul>\n<li>\n<p>CQRS system တစ်ခုရဲ့ <strong>Command side (ရေးတဲ့အပိုင်း)</strong> က <strong>Event Sourcing</strong> ကို သုံးနိုင်ပါတယ်။ Command တစ်ခုကို process လုပ်လိုက်တဲ့အခါ၊ သူက database record ကို update မလုပ်ဘဲ၊ event အသစ်တစ်ခု သို့မဟုတ် တစ်ခုထက်ပိုပြီး ဖန်တီးပြီး သိမ်းဆည်းလိုက်ရုံပါပဲ။</p>\n</li>\n<li>\n<p>ပြီးတော့ <strong>Query side (ဖတ်တဲ့အပိုင်း)</strong> က ဒီ event stream ကို နားထောင်ပြီး၊ သူ့ရဲ့ ရိုးရှင်းပြီး optimize လုပ်ထားတဲ့ read model တွေကို တည်ဆောက်၊ ထိန်းသိမ်းပါတယ်။</p>\n</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: cqrsAndEventSourcing,
      alt: "CQRS and Event Sourcing"
    }), "\n", createVNode($$Aside, {
      title: "အနှစ်ချုပ်",
      "set:html": "<ul>\n<li>\n<p><strong>Asynchronous communication</strong> က service များကို <strong>decouple (တိုက်ရိုက်မချိတ်ဆက််)</strong> ဖြစ်ပြီး system များကို ပြဿနာများမှ ဒဏ်ခံနိုင်ရည်ရှိပြီး scale လုပ်ရလွယ်ကူ စေသည်။</p>\n</li>\n<li>\n<p>အဓိက <strong>Async pattern</strong> နှစ်ခုမှာ <strong>Message Queues</strong> (တစ်ဦးမှတစ်ဦး command process လုပ်ရန်) နှင့် <strong>Publish/Subscribe</strong> (တစ်ဦးမှအများသို့ event ဖြန့်ဝေရန်) တို့ဖြစ်သည်။</p>\n</li>\n<li>\n<p><strong>CQRS</strong> (write နှင့် read model များခွဲခြားခြင်း) နှင့် <strong>Event Sourcing</strong> ( Event History ကို သိမ်းဆည်းခြင်း) ကဲ့သို့သော အဆင့်မြင့် pattern များကို အလွန်ရှုပ်ထွေးသော system များတည်ဆောက်ရန် အသုံးပြုနိုင်သည်။</p>\n</li>\n</ul>"
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

const url = "src/content/docs/software-architecture/async/advanced.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/async/advanced.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/async/advanced.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
