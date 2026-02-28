import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const requestResponse = new Proxy({"src":"/_astro/request-response.CXNS54e8.png","width":1276,"height":462,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/websockets/request-response.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "HTTP ရဲ့ သမိုင်းနှင့် ကန့်သတ်ချက်များ",
  "description": "HTTP ရဲ့ သမိုင်းနှင့် ကန့်သတ်ချက်များ (TCP အပေါ်မှာ)"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "http-ဆိုတာ-ဘာလဲ",
    "text": "HTTP ဆိုတာ ဘာလဲ?"
  }, {
    "depth": 3,
    "slug": "http-ရဲ့-အဓိက-လုပ်ငန်းပုံ-requestresponse-model",
    "text": "HTTP ရဲ့ အဓိက လုပ်ငန်းပုံ (Request/Response Model)"
  }, {
    "depth": 3,
    "slug": "ဆက်သွယ်မှုပုံစံ",
    "text": "ဆက်သွယ်မှုပုံစံ"
  }, {
    "depth": 3,
    "slug": "static-content-များအတွက်-သင့်တော်ခြင်း",
    "text": "Static Content များအတွက် သင့်တော်ခြင်း"
  }, {
    "depth": 3,
    "slug": "real-time-ဆက်သွယ်မှုအတွက်-အားနည်းချက်များ",
    "text": "Real-time ဆက်သွယ်မှုအတွက် အားနည်းချက်များ"
  }, {
    "depth": 3,
    "slug": "server-to-client-data-pushing",
    "text": "Server-to-Client Data Pushing"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"http-ဆိုတာ-ဘာလဲ\">HTTP ဆိုတာ ဘာလဲ?</h3><a class=\"sl-anchor-link\" href=\"#http-ဆိုတာ-ဘာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “HTTP ဆိုတာ ဘာလဲ?”</span></a></div>\n<p>အချက်အလက်တွေ ယုံကြည်စိတ်ချစွာ ပို့နိုင်ဖို့ TCP က ဘယ်လို အခြေခံချိတ်ဆက်မှု လုပ်ပေးလဲဆိုတာ သိသွားပြီဆိုတော့၊ အဲဒီ TCP ချိတ်ဆက်မှုပေါ်ကနေ အလုပ်လုပ်တဲ့ HTTP Protocol အကြောင်းကို ဆက်ကြည့်ရအောင်။ WebSocket မပေါ်ခင်တုန်းက Website တွေ အချက်အလက် အပြန်အလှန်ပို့ဖို့အတွက် HTTP (Hypertext Transfer Protocol) ကိုပဲ အဓိကထား သုံးခဲ့ကြပါတယ်။ HTTP က Website တွေရဲ့ လည်ပတ်မှုအတွက် အင်မတန် အရေးကြီးပေမယ့်၊ အချိန်နဲ့တပြေးညီ ချက်ချင်းအပြောင်းအလဲရှိတဲ့ (Real-time) ဆက်သွယ်မှုတွေ (ဥပမာ - Live Chat, Online Game) အတွက်ကျတော့ အားနည်းချက် တချို့ ရှိခဲ့ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"http-ရဲ့-အဓိက-လုပ်ငန်းပုံ-requestresponse-model\">HTTP ရဲ့ အဓိက လုပ်ငန်းပုံ (Request/Response Model)</h3><a class=\"sl-anchor-link\" href=\"#http-ရဲ့-အဓိက-လုပ်ငန်းပုံ-requestresponse-model\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “HTTP ရဲ့ အဓိက လုပ်ငန်းပုံ (Request/Response Model)”</span></a></div>\n<p>HTTP ဘယ်လို အလုပ်လုပ်လဲဆိုတဲ့ အခြေခံကတော့ “တောင်းဆိုခြင်း/တုံ့ပြန်ခြင်း” (Request/Response) ပုံစံပဲ ဖြစ်ပါတယ်။ ဒါက ဘာကိုပြောလဲဆိုတော့…</p>\n<ul>\n<li><strong>ကိုယ့်ဘက်က တောင်းဆိုခြင်း (Client Request)</strong>: ကိုယ့် Browser (Client) ကနေ Website Server ဆီကို ‘ဒီ Website ရဲ့ စာမျက်နှာကို ပြပါ’ လိုမျိုး၊ ဒါမှမဟုတ် ‘ဒီပုံလေးကို လိုချင်တယ်’ လိုမျိုး အချက်အလက်တစ်ခုခုကို “တောင်းဆိုခြင်း (Request)” လုပ်ပါတယ်။ (ဒါဟာ ကိုယ်က Server ကို မေးခွန်းတစ်ခု မေးလိုက်တာနဲ့တူပါတယ်)</li>\n<li><strong>Server ဘက်က ပြန်ပို့ပေးခြင်း (Server Response)</strong>: Server က Client ရဲ့ တောင်းဆိုမှုကို လက်ခံရရှိတာနဲ့ တောင်းဆိုထားတဲ့ အချက်အလက်ကို ရှာပြီး “တုံ့ပြန်ခြင်း (Response)” အနေနဲ့ ပြန်ပို့ပေးပါတယ်။ (Server က ကိုယ်မေးတဲ့ မေးခွန်းကို ပြန်ဖြေပေးတာပါ)</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: requestResponse,
      alt: "HTTP request response"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဆက်သွယ်မှုပုံစံ\">ဆက်သွယ်မှုပုံစံ</h3><a class=\"sl-anchor-link\" href=\"#ဆက်သွယ်မှုပုံစံ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဆက်သွယ်မှုပုံစံ”</span></a></div>\n<p>ပုံမှန်အားဖြင့်ဆိုရင် Server က တောင်းဆိုထားတာကို ပြန်ပို့ပြီးတာနဲ့ (Response ပြီးတာနဲ့) အဲဒီ ချိတ်ဆက်မှုက ချက်ချင်း ပြတ်တောက်သွားတတ်ပါတယ်။ နောက်ပိုင်း နည်းပညာတွေ တိုးတက်လာတော့ (HTTP/1.1 မှာ Persistent Connection / Keep-Alive ဆိုပြီး) ချိတ်ဆက်မှုကို ချက်ချင်း မဖြတ်ဘဲ ခဏလေး ဖွင့်ထားပေးတာမျိုး လုပ်လို့ရလာပေမယ့်၊ အလုပ်လုပ်ပုံ အခြေခံကတော့ ကိုယ်က တောင်းဆို (Request) မှ Server က ပြန်ပို့ (Response) ပေးတဲ့ ပုံစံအတိုင်းပဲ ရှိနေတုန်းပါပဲ။ (ဖုန်းကြိုးဖွင့်ထားပေမယ့် ကိုယ်က စကားမပြောရင် ဟိုဘက်ကလည်း ဘာမှ မပြောသလိုမျိုးပါ)</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"static-content-များအတွက်-သင့်တော်ခြင်း\">Static Content များအတွက် သင့်တော်ခြင်း</h3><a class=\"sl-anchor-link\" href=\"#static-content-များအတွက်-သင့်တော်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Static Content များအတွက် သင့်တော်ခြင်း”</span></a></div>\n<p>ဒီလို “ကိုယ်က တောင်းဆိုမှ Server က ပြန်ပို့ပေးတဲ့” ပုံစံဟာ မပြောင်းလဲတဲ့ Website စာမျက်နှာတွေ (Static Content) ကို ကြည့်တာ ဒါမှမဟုတ် ကိုယ်ဖြည့်ထားတဲ့ Form Data တွေ Server ဆီ ပို့တာမျိုးတွေအတွက် လုံလောက်ပြီး အဆင်ပြေပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"real-time-ဆက်သွယ်မှုအတွက်-အားနည်းချက်များ\">Real-time ဆက်သွယ်မှုအတွက် အားနည်းချက်များ</h3><a class=\"sl-anchor-link\" href=\"#real-time-ဆက်သွယ်မှုအတွက်-အားနည်းချက်များ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Real-time ဆက်သွယ်မှုအတွက် အားနည်းချက်များ”</span></a></div>\n<p>ဒါပေမယ့် Server ဘက်မှာ အချက်အလက်အသစ်တွေ (ဥပမာ - Chat Message အသစ်တစ်ခု ဝင်လာတာ၊ စတော့ဈေးနှုန်း ရုတ်တရက် ပြောင်းသွားတာ) ရတာနဲ့ Browser ကို ချက်ချင်း၊ ချက်ချင်းပို့ပေးဖို့ လိုအပ်တဲ့ Real-time အခြေအနေတွေ (ဥပမာ - Chat Application တွေ၊ တိုက်ရိုက် ဂိမ်းဆော့တာတွေ၊ Live Update ပြနေတဲ့ ကိန်းဂဏန်းတွေ) အတွက်ကျတော့ ဒီနည်းလမ်းက အားနည်းချက် အကြီးကြီး ရှိလာပါတယ်။ ဘာလို့လဲဆိုတော့ Server မှာ ဘယ်လောက် အချက်အလက်အသစ်တွေ ရှိနေပါစေ၊ Browser ဘက်ကနေ ‘အသစ်လာပြီလား’ လို့ ပြန်ပြန်ပြီး လာတောင်းဆို (Request လုပ်) တာကိုပဲ စောင့်နေရမှာ ဖြစ်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"server-to-client-data-pushing\">Server-to-Client Data Pushing</h3><a class=\"sl-anchor-link\" href=\"#server-to-client-data-pushing\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Server-to-Client Data Pushing”</span></a></div>\n<p>Server က အလိုအလျောက် အချက်အလက်ကို Browser ဆီ တွန်းပို့လို့ မရပါဘူး။ (Browser က အမြဲတမ်း လိုက်မေးနေရသလို ဖြစ်နေမှာပါ)</p>\n<p>ဒီလိုမျိုး Server ကနေ Client (Browser) ဆီကို အချက်အလက်အသစ်ရတာနဲ့ ချက်ချင်း တွန်းပို့ပေးနိုင်တဲ့ နည်းလမ်းတစ်ခု HTTP မှာ အခြေခံအားဖြင့် မပါဝင်ပါဘူး။ ဒါကြောင့် Real-time ဆက်သွယ်မှုတွေအတွက် ပိုမိုကောင်းမွန်တဲ့၊ Server ကနေလည်း Client ဆီကို လိုအပ်ရင် လိုအပ်သလို ချက်ချင်းပို့ပေးနိုင်တဲ့ နည်းလမ်းသစ်တစ်ခု လိုအပ်လာတာ ဖြစ်ပါတယ်။ အဲဒါကတော့ နောက်မှ လေ့လာမယ့် WebSocket ပဲ ဖြစ်ပါတယ်။</p>"
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

const url = "src/content/docs/websocket/http/http-history-and-limitations.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/websocket/http/http-history-and-limitations.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/websocket/http/http-history-and-limitations.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
