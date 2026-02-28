import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const websocketComparison = new Proxy({"src":"/_astro/websocket-comparison.CF0BKAwv.png","width":2048,"height":970,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/websockets/websocket-comparison.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "HTTP နှင့် Real-Time",
  "description": "HTTP ဖြင့် Real-Time အတုလုပ်ခြင်း - Workarounds များ"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "http-ရဲ့-ပြဿနာကို-ကျော်လွှားဖို့-ကြိုးစားခြင်း",
    "text": "HTTP ရဲ့ ပြဿနာကို ကျော်လွှားဖို့ ကြိုးစားခြင်း"
  }, {
    "depth": 3,
    "slug": "polling-အချိန်မှန်-လိုက်မေးခြင်း",
    "text": "Polling (အချိန်မှန် လိုက်မေးခြင်း)"
  }, {
    "depth": 3,
    "slug": "polling--အားနည်းချက်များ",
    "text": "Polling ၏ အားနည်းချက်များ"
  }, {
    "depth": 3,
    "slug": "long-polling-စောင့်ပြီးမှ-ဖြေခြင်း--comet",
    "text": "Long Polling (စောင့်ပြီးမှ ဖြေခြင်း / Comet)"
  }, {
    "depth": 3,
    "slug": "long-polling--အားနည်းချက်များ",
    "text": "Long Polling ၏ အားနည်းချက်များ"
  }, {
    "depth": 3,
    "slug": "ပိုကောင်းသော-နည်းလမ်း",
    "text": "ပိုကောင်းသော နည်းလမ်း"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"http-ရဲ့-ပြဿနာကို-ကျော်လွှားဖို့-ကြိုးစားခြင်း\">HTTP ရဲ့ ပြဿနာကို ကျော်လွှားဖို့ ကြိုးစားခြင်း</h3><a class=\"sl-anchor-link\" href=\"#http-ရဲ့-ပြဿနာကို-ကျော်လွှားဖို့-ကြိုးစားခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “HTTP ရဲ့ ပြဿနာကို ကျော်လွှားဖို့ ကြိုးစားခြင်း”</span></a></div>\n<p>WebSocket မပေါ်ခင်တုန်းက Developer တွေဟာ Website တွေကို Real-time လိုမျိုး ချက်ချင်းအပြောင်းအလဲ ပြသနိုင်အောင် HTTP ရဲ့ ကိုယ်က တောင်းဆိုမှ Server က ပြန်ပို့ပေးတဲ့ စနစ် (Request/Response) ကိုပဲ အသုံးပြုပြီး နည်းလမ်းအမျိုးမျိုးနဲ့ ကြိုးစားခဲ့ကြပါတယ်။ ဒါပေမယ့် ဒီနည်းလမ်းတွေဟာ အကောင်းဆုံးနဲ့ အထိရောက်ဆုံး ဖြေရှင်းနည်းတွေတော့ မဟုတ်ခဲ့ပါဘူး။ Server ကနေ Client ဆီကို အချက်အလက်အသစ်ရတာနဲ့ ချက်ချင်းပို့ပေးဖို့ အားနည်းနေတဲ့ HTTP ရဲ့ ပြဿနာကို ကျော်လွှားဖို့ ကြိုးစားခဲ့တဲ့ နည်းလမ်းတွေပါ။ ဘယ်လို နည်းလမ်းတွေလဲဆိုတော့…</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"polling-အချိန်မှန်-လိုက်မေးခြင်း\">Polling (အချိန်မှန် လိုက်မေးခြင်း)</h3><a class=\"sl-anchor-link\" href=\"#polling-အချိန်မှန်-လိုက်မေးခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Polling (အချိန်မှန် လိုက်မေးခြင်း)”</span></a></div>\n<p>ဒီနည်းလမ်းမှာ Client ဘက် (ကိုယ့် Browser) ကနေ Server ဆီကို အချိန်မှန်မှန်လေးတွေ သတ်မှတ်ပြီး (ဥပမာ - ၅ စက္ကန့် ဒါမှမဟုတ် ၁၀ စက္ကန့် တစ်ကြိမ်) ‘အချက်အလက်အသစ် ဘာများ ရှိလဲ’ လို့ HTTP Request တွေ ပို့ပြီး ဆက်တိုက် လိုက်မေးနေတာပါ။ (ဒါဟာ ကိုယ်က သူငယ်ချင်းတစ်ယောက်ဆီကို ‘သတင်းထူး ဘာရှိလဲ’ လို့ အချိန်တိုင်း ဖုန်းခေါ်ပြီး လိုက်မေးနေတာနဲ့ တူပါတယ်)</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"polling--အားနည်းချက်များ\">Polling ၏ အားနည်းချက်များ</h3><a class=\"sl-anchor-link\" href=\"#polling--အားနည်းချက်များ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Polling ၏ အားနည်းချက်များ”</span></a></div>\n<p>အချက်အလက်အသစ် ဘာမှ မရှိရင်တောင် Client က Request တွေ ဆက်တိုက် ပို့နေရတဲ့အတွက် မလိုအပ်တဲ့ အင်တာနက် အသွားအလာ (Network Traffic) တွေ အရမ်းများစေတယ်၊ Server ကိုလည်း မလိုအပ်ဘဲ အလုပ်တွေ ပိုစေတယ် (Server Load များတယ်)။ နောက်ပြီး အချက်အလက်အသစ် ရောက်တာနဲ့ ချက်ချင်း မသိရဘဲ ကိုယ့်ဘက်က နောက်တစ်ကြိမ် လိုက်မေးတဲ့ အချိန်ကျမှ သိရတတ်တဲ့အတွက် အချက်အလက် ရောက်ရှိမှု နှောင့်နှေးတာ (Latency) မြင့်မားပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"long-polling-စောင့်ပြီးမှ-ဖြေခြင်း--comet\">Long Polling (စောင့်ပြီးမှ ဖြေခြင်း / Comet)</h3><a class=\"sl-anchor-link\" href=\"#long-polling-စောင့်ပြီးမှ-ဖြေခြင်း--comet\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Long Polling (စောင့်ပြီးမှ ဖြေခြင်း / Comet)”</span></a></div>\n<p>ဒီနည်းလမ်းက Polling ထက်တော့ နည်းနည်း ပိုကောင်းပါတယ်။ Client က Server ဆီကို Update အသစ်အတွက် Request ပို့လိုက်ပြီး Server က အဲဒီ Update အသစ်တစ်ခုခု တကယ်ရလာတဲ့အထိ ဒါမှမဟုတ် ကြိုသတ်မှတ်ထားတဲ့ အချိန်တစ်ခု ကုန်တဲ့အထိ Connection ကို မပိတ်ဘဲ ဖွင့်ထားပေးပါတယ်။ Update ရတာနဲ့ အဲဒီ ဖွင့်ထားတဲ့ ချိတ်ဆက်မှုကနေ Response ပြန်ပို့ပြီးမှ Connection ကို ပိတ်လိုက်ပါတယ်။ Client ကလည်း Response ရတာနဲ့ နောက်ထပ် Update အသစ်ကို ထပ်စောင့်ဖို့ Connection အသစ်တစ်ခုကို ချက်ချင်း ပြန်ဖွင့်ပြီး ထပ်စောင့်ပါတယ်။ (သူငယ်ချင်းဆီ ဖုန်းခေါ်ပြီး ‘သတင်းထူးရရင် ဖုန်းမချဘဲ ကိုင်ထားနော်၊ ရတာနဲ့ ပြောပြီး လိုင်းချလိုက်၊ ငါလည်း မင်းပြောတာပြီးတာနဲ့ ချက်ချင်း ပြန်ခေါ်ပြီး နောက်ထပ် သတင်းထူးကို ထပ်စောင့်နေမယ်’ လို့ ပြောထားတာနဲ့ တူပါတယ်)</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"long-polling--အားနည်းချက်များ\">Long Polling ၏ အားနည်းချက်များ</h3><a class=\"sl-anchor-link\" href=\"#long-polling--အားနည်းချက်များ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Long Polling ၏ အားနည်းချက်များ”</span></a></div>\n<p>Polling လိုမျိုး အမြဲတမ်း လိုက်မေးနေစရာ မလိုတော့ပေမယ့် Connection အသစ်တွေ ခဏခဏ ထူထောင်လိုက်၊ ဖြတ်တောက်လိုက် လုပ်နေရတဲ့အတွက် အလုပ်ရှုပ်ပြီး မလိုအပ်တဲ့ အားထုတ်မှုတွေ (Connection ထူထောင်ခြင်းနှင့် ဖြတ်တောက်ခြင်း Overhead) ရှိနေတုန်းပါပဲ။ Server ဘက်မှာလည်း Connection အများကြီးကို တစ်ပြိုင်နက် ဖွင့်ထားပြီး ကိုင်တွယ်ရတာ ပိုမို ရှုပ်ထွေးနိုင်ပါတယ်။ အရေးအကြီးဆုံးကတော့ ဒါဟာ တကယ်ကြီး နှစ်ဖက်ပြိုင်တူ စိတ်ကြိုက် ပြောဆိုလို့ရတဲ့ Communication (bi-directional) မဟုတ်သေးပါဘူး။ Server က Update အသစ်ရရင်တောင် Client က စောင့်နေတဲ့ Request (စောင့်နေဖို့ တောင်းဆိုထားတာ) ကို တုံ့ပြန်တဲ့အနေနဲ့ပဲ ပို့လို့ရတာဖြစ်ပါတယ်။ Server ကနေ Client ဆီကို တောင်းဆိုမှု မရှိဘဲ စပြီး အချက်အလက် တွန်းပို့ (Push) လုပ်တာမျိုး မဟုတ်သေးပါဘူး။</p>\n"
    }), createVNode($$ContentImage, {
      src: websocketComparison,
      alt: "websocket comparison"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ပိုကောင်းသော-နည်းလမ်း\">ပိုကောင်းသော နည်းလမ်း</h3><a class=\"sl-anchor-link\" href=\"#ပိုကောင်းသော-နည်းလမ်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ပိုကောင်းသော နည်းလမ်း”</span></a></div>\n<p>ဒီနည်းလမ်းတွေဟာ HTTP ရဲ့ မူလ ပုံစံအရ Server ကနေ Client ဆီကို အချက်အလက်အသစ် ချက်ချင်း တွန်းပို့လို့ မရတဲ့ အားနည်းချက်ကို ကျော်လွှားဖို့ ကြိုးစားခဲ့တဲ့ နည်းလမ်းတွေပါ။ ဒီနည်းလမ်းတွေရဲ့ အားနည်းချက်တွေကြောင့် Server ကနေ Client ဆီကို Client က တောင်းဆိုမှုမရှိဘဲ အချက်အလက်အသစ် ရတာနဲ့ ချက်ချင်း ပို့နိုင်တဲ့ ပိုကောင်းတဲ့၊ ပိုမိုထိရောက်တဲ့ နည်းလမ်းတစ်ခု Real-time Application တွေအတွက် မဖြစ်မနေ လိုအပ်နေပြီဆိုတာ ပိုပြီး ပေါ်လွင်လာပါတယ်။ အဲဒီလိုအပ်ချက်ကို ဖြည့်ဆည်းပေးဖို့ WebSocket ပေါ်ပေါက်လာတာ ဖြစ်ပါတယ်။</p>"
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

const url = "src/content/docs/websocket/http/http-realtime.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/websocket/http/http-realtime.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/websocket/http/http-realtime.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
