import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import 'clsx';

const frontmatter = {
  "title": "WebSocket ပေါ်ပေါက်လာခြင်းနှင့် ရည်ရွယ်ချက်",
  "description": "WebSocket ပေါ်ပေါက်လာခြင်းနှင့် ရည်ရွယ်ချက်"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "websocket-ဘယ်အချိန်-ဘာကြောင့်-ပေါ်လာတာလဲ",
    "text": "WebSocket ဘယ်အချိန် ဘာကြောင့် ပေါ်လာတာလဲ?"
  }, {
    "depth": 3,
    "slug": "ဘာကြောင့်ဘယ်သူတွေ-ဖန်တီးခဲ့လဲ",
    "text": "ဘာကြောင့်/ဘယ်သူတွေ ဖန်တီးခဲ့လဲ"
  }, {
    "depth": 3,
    "slug": "အဓိက-ရည်ရွယ်ချက်",
    "text": "အဓိက ရည်ရွယ်ချက်"
  }, {
    "depth": 3,
    "slug": "websocket--အဓိက-ကောင်းကွက်များ",
    "text": "WebSocket ၏ အဓိက ကောင်းကွက်များ"
  }, {
    "depth": 4,
    "slug": "နှစ်ဖက်စလုံး-အချိန်မရွေး-ပြောဆိုနိုင်ခြင်း-full-duplex-communication",
    "text": "နှစ်ဖက်စလုံး အချိန်မရွေး ပြောဆိုနိုင်ခြင်း (Full-Duplex Communication)"
  }, {
    "depth": 4,
    "slug": "ချက်ချင်း-update-များ-ရရှိခြင်း-low-latency",
    "text": "ချက်ချင်း Update များ ရရှိခြင်း (Low Latency)"
  }, {
    "depth": 4,
    "slug": "မလိုအပ်တဲ့-အပိုအလုပ်-နည်းခြင်း-reduced-overhead",
    "text": "မလိုအပ်တဲ့ အပိုအလုပ် နည်းခြင်း (Reduced Overhead)"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>အရင်တုန်းက HTTP ကို အသုံးပြုပြီး Real-time လိုမျိုး လုပ်ဆောင်ဖို့ ကြိုးစားခဲ့တဲ့ နည်းလမ်းဟောင်းတွေ (Polling, Long Polling) မှာ အားနည်းချက်တွေ ရှိနေတာကြောင့် WebSocket ဆိုတဲ့ Protocol အသစ်တစ်ခု ပေါ်ပေါက်လာဖို့ တွန်းအားဖြစ်စေခဲ့ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"websocket-ဘယ်အချိန်-ဘာကြောင့်-ပေါ်လာတာလဲ\">WebSocket ဘယ်အချိန် ဘာကြောင့် ပေါ်လာတာလဲ?</h3><a class=\"sl-anchor-link\" href=\"#websocket-ဘယ်အချိန်-ဘာကြောင့်-ပေါ်လာတာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “WebSocket ဘယ်အချိန် ဘာကြောင့် ပေါ်လာတာလဲ?”</span></a></div>\n<p>WebSocket ရဲ့ အိုင်ဒီယာကို ၂၀၀၈ ခုနှစ်လောက်မှာ စတင် ဆွေးနွေးခဲ့ကြပြီး ၂၀၁၁ ခုနှစ်မှာ အင်တာနက် နည်းပညာ စံနှုန်းသတ်မှတ်ရေးအဖွဲ့ (IETF) ကနေ တရားဝင် စံအဖြစ် သတ်မှတ်ထုတ်ပြန်ခဲ့ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဘာကြောင့်ဘယ်သူတွေ-ဖန်တီးခဲ့လဲ\">ဘာကြောင့်/ဘယ်သူတွေ ဖန်တီးခဲ့လဲ</h3><a class=\"sl-anchor-link\" href=\"#ဘာကြောင့်ဘယ်သူတွေ-ဖန်တီးခဲ့လဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘာကြောင့်/ဘယ်သူတွေ ဖန်တီးခဲ့လဲ”</span></a></div>\n<p>Michael Carter နဲ့ Ian Hickson လို ပညာရှင်တွေက Website တွေမှာ ချက်ချင်းအပြောင်းအလဲရှိတဲ့ ဆက်သွယ်မှု (Real-time Communication) အတွက် ပိုပြီး ထိရောက်တဲ့ နည်းလမ်းတစ်ခု၊ လူတိုင်း သုံးလို့ရတဲ့ စံတစ်ခု လိုအပ်နေပြီဆိုတာ သိမြင်ပြီး ဒီ WebSocket Protocol ကို စတင် အကောင်အထည်ဖော်ဖို့ ဦးဆောင်ခဲ့ကြတာပါ။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အဓိက-ရည်ရွယ်ချက်\">အဓိက ရည်ရွယ်ချက်</h3><a class=\"sl-anchor-link\" href=\"#အဓိက-ရည်ရွယ်ချက်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အဓိက ရည်ရွယ်ချက်”</span></a></div>\n<p>သူ့ရဲ့ အဓိက ရည်ရွယ်ချက်ကတော့ HTTP ရဲ့ ကိုယ်က တောင်းဆိုမှ Server က ပြန်ပို့ပေးတဲ့ ကန့်သတ်ချက်တွေကို ကျော်လွှားပြီး Client (Browser) နဲ့ Server ကြားမှာ အချက်အလက်တွေ ချက်ချင်း၊ နှစ်ဖက်စလုံး စိတ်ကြိုက် အပြန်အလှန်ပို့နိုင်တဲ့ အမြဲတမ်း ဖွင့်ထားတဲ့ လမ်းကြောင်းတစ်ခုကို ဖန်တီးပေးဖို့ပါ။ (ဒါကို နည်းပညာအခေါ်အဝေါ်အရ Low-latency, Full-duplex, Persistent Communication Channel လို့ ခေါ်ပါတယ်) ဒါမှ Website Application တွေက Chat ခန်းတွေလို၊ Online Game တွေလို ပိုပြီး အသက်ဝင်လာပြီး ကိုယ်လုပ်တာကို ချက်ချင်း တုံ့ပြန်လာနိုင်မှာပါ။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"websocket--အဓိက-ကောင်းကွက်များ\">WebSocket ၏ အဓိက ကောင်းကွက်များ</h3><a class=\"sl-anchor-link\" href=\"#websocket--အဓိက-ကောင်းကွက်များ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “WebSocket ၏ အဓိက ကောင်းကွက်များ”</span></a></div>\n<p>WebSocket ကို အသုံးပြုခြင်းအားဖြင့် Real-time Web Application တွေအတွက် အောက်ပါ ကောင်းကျိုးတွေကို ရရှိစေပါတယ်။</p>\n<p>အမြဲတမ်း ဖွင့်ထားတဲ့ ချိတ်ဆက်မှု (Persistent Connection): အစပိုင်း Handshake (စတင်ချိတ်ဆက်ဖို့ အသိအမှတ်ပြုတဲ့ လုပ်ငန်းစဉ်) တစ်ကြိမ်လုပ်ပြီး Connection ဖွင့်လိုက်တာနဲ့ အဲဒီလမ်းကြောင်းက အမြဲတမ်း ဆက်လက် ဖွင့်ထားပြီးသား ဖြစ်နေပါတယ်။ အချက်အလက်အသစ် ပို့ချင်ယူချင်တိုင်း Connection ကို အသစ်ထပ်ထပ် ဖွင့်နေစရာ မလိုတော့ပါဘူး။ (ဖုန်းကြိုးကို စကားပြောနေသရွေ့ အမြဲတမ်း ဖွင့်ထားသလိုမျိုး)</p>\n<ul>\n<li>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"နှစ်ဖက်စလုံး-အချိန်မရွေး-ပြောဆိုနိုင်ခြင်း-full-duplex-communication\">နှစ်ဖက်စလုံး အချိန်မရွေး ပြောဆိုနိုင်ခြင်း (Full-Duplex Communication)</h4><a class=\"sl-anchor-link\" href=\"#နှစ်ဖက်စလုံး-အချိန်မရွေး-ပြောဆိုနိုင်ခြင်း-full-duplex-communication\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “နှစ်ဖက်စလုံး အချိန်မရွေး ပြောဆိုနိုင်ခြင်း (Full-Duplex Communication)”</span></a></div>\n<p>HTTP လိုမျိုး ကိုယ်က တောင်းဆိုမှ ပြန်ဖြေတာမျိုး မဟုတ်တော့ဘဲ Client နဲ့ Server နှစ်ခုလုံးဟာ Data ကို တစ်ပြိုင်နက်၊ ကိုယ်ပို့ချင်တဲ့အချိန် ကိုယ် အချက်အလက် ပို့လို့ရပါတယ်။ (ဖုန်းပြောတဲ့အခါ နှစ်ဘက်စလုံး တစ်ပြိုင်တည်း ပြောလို့ရသလိုမျိုး)</p>\n</li>\n<li>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"ချက်ချင်း-update-များ-ရရှိခြင်း-low-latency\">ချက်ချင်း Update များ ရရှိခြင်း (Low Latency)</h4><a class=\"sl-anchor-link\" href=\"#ချက်ချင်း-update-များ-ရရှိခြင်း-low-latency\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ချက်ချင်း Update များ ရရှိခြင်း (Low Latency)”</span></a></div>\n<p>Server မှာ အချက်အလက်အသစ် (ဥပမာ - Chat Message အသစ်ဝင်လာတာ) ရတာနဲ့ ဖွင့်ထားတဲ့ Connection ကနေ Client ဆီကို ချက်ချင်း၊ ချက်ချင်း ပို့ပေးနိုင်ပါတယ်။ ဒါ့ကြောင့် အချက်အလက်တွေ ရောက်ရှိတာ အရမ်းမြန်ဆန်ပြီး နှောင့်နှေးမှု (Delay) လုံးဝ နည်းပါတယ်။</p>\n</li>\n<li>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"မလိုအပ်တဲ့-အပိုအလုပ်-နည်းခြင်း-reduced-overhead\">မလိုအပ်တဲ့ အပိုအလုပ် နည်းခြင်း (Reduced Overhead)</h4><a class=\"sl-anchor-link\" href=\"#မလိုအပ်တဲ့-အပိုအလုပ်-နည်းခြင်း-reduced-overhead\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “မလိုအပ်တဲ့ အပိုအလုပ် နည်းခြင်း (Reduced Overhead)”</span></a></div>\n<p>HTTP Request/Response တွေလို ခဏခဏ Connection ဖွင့်/ပိတ် လုပ်နေရတာနဲ့စာရင်၊ WebSocket Connection တစ်ခု ဖွင့်ထားပြီးတာနဲ့ အချက်အလက် တစ်ခုချင်းစီ ပို့တဲ့အခါ ပါသွားတဲ့ ထပ်ဆောင်းအချက်အလက် (Header) တွေက နည်းပါးပါတယ်။ ဒါ့ကြောင့် Network ပေါ်မှာ ပို့ရတဲ့ အချက်အလက် ပမာဏ သက်သာပြီး ပိုပြီး ထိရောက် မြန်ဆန်ပါတယ်။</p>\n</li>\n</ul>"
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
const url = "src/content/docs/websocket/about-websocket/birth-websocket.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/websocket/about-websocket/birth-websocket.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/websocket/about-websocket/birth-websocket.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
