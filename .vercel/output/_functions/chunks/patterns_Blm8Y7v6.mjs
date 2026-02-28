import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const queueVsPubsub = new Proxy({"src":"/_astro/queue-vs-pubsub.B7r_8amJ.png","width":1981,"height":1100,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/software-architecture/queue-vs-pubsub.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Architectural Patterns: Message Queues & Pub/Sub",
  "description": "Architectural Patterns: Message Queues & Pub/Sub"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "စာတိုက်ပုံး---the-message-broker",
    "text": "“စာတိုက်ပုံး” - The Message Broker"
  }, {
    "depth": 4,
    "slug": "pattern-1-message-queues-တစ်ဦးမှ-တစ်ဦးသို့",
    "text": "Pattern 1: Message Queues (တစ်ဦးမှ တစ်ဦးသို့)"
  }, {
    "depth": 4,
    "slug": "pattern-2-publishsubscribe-pubsub",
    "text": "Pattern 2: Publish/Subscribe (Pub/Sub)"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>Asynchronous Communication အတွက် အဓိက Pattern နှစ်ခုကို လေ့လာရန်နှင့် ၎င်းတို့၏ မတူညီသော အသုံးပြုပုံများကို နားလည်စေရန် ဖြစ်ပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"စာတိုက်ပုံး---the-message-broker\">“စာတိုက်ပုံး” - The Message Broker</h3><a class=\"sl-anchor-link\" href=\"#စာတိုက်ပုံး---the-message-broker\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled ““စာတိုက်ပုံး” - The Message Broker”</span></a></div>\n<p>ဒီ Pattern နှစ်ခုလုံးက Message Broker (ဥပမာ - RabbitMQ, Apache Kafka, AWS SQS) လို့ခေါ်တဲ့ Infrastructure Software တစ်ခုကို ဗဟိုက “စာတိုက်ပုံး” အဖြစ် အသုံးပြုကြပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"pattern-1-message-queues-တစ်ဦးမှ-တစ်ဦးသို့\">Pattern 1: Message Queues (တစ်ဦးမှ တစ်ဦးသို့)</h4><a class=\"sl-anchor-link\" href=\"#pattern-1-message-queues-တစ်ဦးမှ-တစ်ဦးသို့\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Pattern 1: Message Queues (တစ်ဦးမှ တစ်ဦးသို့)”</span></a></div>\n<ul>\n<li>\n<p><strong>ဘာလဲ -</strong> ဒီ Pattern မှာ၊ Producer က “Queue” (တန်းစီ) ထဲကို Message တစ်စောင်ပို့လိုက်ပြီး၊ အဲဒီ Message ကို လက်ခံသူ (Consumer) <strong>တစ်ဦးတည်းကသာ</strong> ယူပြီး အလုပ်လုပ်ပါတယ်။ ဒါက Command-Based (အမိန့်ပေးခိုင်းစေတဲ့) အလုပ်တွေအတွက် ဒီဇိုင်းဆွဲထားတာပါ။</p>\n</li>\n<li>\n<p><strong>ဥပမာနှိုင်းယှဉ်ချက် - Supermarket က ပိုက်ဆံရှင်းတဲ့တန်း -</strong> တန်းစီနေတဲ့ Customer တစ်ယောက်ချင်းစီက Message တစ်စောင်ပါ။ အဆင်သင့်ဖြစ်နေတဲ့ ငွေရှင်းကောင်တာက Consumer ပါ။ ငွေရှင်းကောင်တာတစ်ခုက တစ်ကြိမ်မှာ Customer တစ်ယောက်ကိုပဲ ဝန်ဆောင်မှုပေးပါတယ်။</p>\n</li>\n</ul>\n<blockquote>\n<p>Message ဆိုတာက အလုပ်တစ်ခုလုပ်ဖို့ “အမိန့်ပေးခိုင်းစေချက်” တစ်ခုဖြစ်ပြီး၊ အဲဒီအလုပ်ပြီးသွားရင် Queue ထဲကနေ ဖယ်ရှားလိုက်ပါတယ်။</p>\n</blockquote>\n<ul>\n<li>\n<p><strong>အသင့်တော်ဆုံးအသုံးပြုပုံ -</strong> တစ်ကြိမ်ပဲ လုပ်ဖို့လိုတဲ့ Background Job တွေအတွက် သင့်တော်ပါတယ်။</p>\n<ul>\n<li><strong>ဥပမာ -</strong> Image Service က “ProcessThisImage” ဆိုတဲ့ Command တစ်ခုကို Queue ကနေ လက်ခံရရှိတယ်။ Worker တစ်ခုက Message ကိုယူ၊ ပုံကို Resize လုပ်၊ ပြီးတော့ Message ကို ဖျက်လိုက်ပါတယ်။</li>\n</ul>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"pattern-2-publishsubscribe-pubsub\">Pattern 2: Publish/Subscribe (Pub/Sub)</h4><a class=\"sl-anchor-link\" href=\"#pattern-2-publishsubscribe-pubsub\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Pattern 2: Publish/Subscribe (Pub/Sub)”</span></a></div>\n<ul>\n<li>\n<p><strong>ဘာလဲ -</strong> ဒီ Pattern မှာ၊ Publisher က Message (Event) တစ်ခုကို ထုတ်လွှင့်လိုက်ပြီး၊ စိတ်ဝင်စားတဲ့ Subscriber (စောင့်ကြည့်သူ) အားလုံးက အဲဒီ Message တစ်စောင်စီကို လက်ခံရရှိကြပါတယ်။ ဒါက <strong>သတင်းအချက်အလက်ကို ဖြန့်ဝေ</strong>ဖို့အတွက် ဒီဇိုင်းဆွဲထားတာပါ။</p>\n</li>\n<li>\n<p><strong>ဥပမာနှိုင်းယှဉ်ချက် - မြို့ထဲမှာ သတင်းလိုက်ကြေညာတဲ့သူ -</strong> သတင်းကြေညာသူက မြို့လယ်မှာ သတင်းတစ်ခု (“မင်္ဂလာပွဲတော်ကို နောက်အပတ်ကျင်းပမယ်!”) လို့ အော်ဟစ်ကြေညာလိုက်တယ်။ အဲဒီသတင်းကို စိတ်ဝင်စားတဲ့သူတိုင်း—မုန့်ဖုတ်သမား၊ အပ်ချုပ်သမား၊ တည်းခိုခန်းပိုင်ရှင် (Subscribers) —က သင့်တော်သလို တုံ့ပြန်နိုင်ကြတယ်။ စိတ်မဝင်စားတဲ့သူတွေကတော့ သတင်းကို လျစ်လျူရှုလိုက်ရုံပါပဲ။ သတင်းက ဘယ်သူတစ်ဦးတစ်ယောက်ကိုမှ သီးသန့်ညွှန်းပြီး ကြေညာတာမဟုတ်ပါဘူး။</p>\n</li>\n<li>\n<p><strong>အသင့်တော်ဆုံးအသုံးပြုပုံ -</strong> System ရဲ့ မတူညီတဲ့ အစိတ်အပိုင်းအများအပြားက စိတ်ဝင်စားနိုင်တဲ့ Event တစ်ခုခုဖြစ်ပွားတဲ့အခါ သုံးပါတယ်။ ဒါက <strong>Event-Driven Architecture</strong> ရဲ့ အခြေခံအုတ်မြစ်ပါပဲ။</p>\n<ul>\n<li><strong>ဥပမာ -</strong> Order Service က “OrderPlaced” Event တစ်ခုကို ထုတ်လွှင့်မယ့်အချိန်ကို Shipping Service က ပစ္စည်းပို့ရန် စောင့်ကြည့်နေနိုင်တယ်၊ Notifications Service က Email ပို့ဖို့ စောင့်ကြည့်နေနိုင်တယ်၊ ပြီးတော့ Analytics Service က အရောင်း Report တွေကို Update လုပ်ဖို့ စောင့်ကြည့်နေနိုင်ပါတယ်။ Service သုံးခုလုံးက <strong>တူညီတဲ့ Event တစ်ခုတည်းကို</strong> သင့်တော်သလို တုံ့ပြန်ကြတာပါ။</li>\n</ul>\n</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: queueVsPubsub,
      alt: "Queue vs Pubsub"
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

const url = "src/content/docs/software-architecture/async/patterns.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/async/patterns.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/async/patterns.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
