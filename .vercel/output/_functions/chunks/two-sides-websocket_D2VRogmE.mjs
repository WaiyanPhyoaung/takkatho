import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const connections = new Proxy({"src":"/_astro/connections.CKdNPas_.png","width":1000,"height":720,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/websockets/connections.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Two sides of WebSocket - Client နှင့် Server",
  "description": "WebSocket Connection - Client နှင့် Server"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "client--အခန်းကဏ္ဍ",
    "text": "Client ၏ အခန်းကဏ္ဍ"
  }, {
    "depth": 4,
    "slug": "client-ဘက်-browser-built-in-api",
    "text": "Client ဘက် (Browser Built-in API)"
  }, {
    "depth": 3,
    "slug": "server--အခန်းကဏ္ဍ",
    "text": "Server ၏ အခန်းကဏ္ဍ"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>WebSocket Communication မှာ အဓိက အခန်းကဏ္ဍ နှစ်ခု ရှိပါတယ်။ အဲဒါတွေကတော့ Client နဲ့ Server ပါပဲ။ သူတို့နှစ်ခုကြားမှာ WebSocket Connection ကို ထူထောင်ပြီး Real-time Data တွေ ဖလှယ်ကြတာ ဖြစ်ပါတယ်။</p>\n<ul>\n<li>\n<p>Client: Connection ကို စတင်တဲ့ဘက် ဖြစ်ပါတယ်။ ပုံမှန်အားဖြင့် Web Browser (Chrome, Firefox, Safari, Edge စတာတွေ) ဖြစ်ပါတယ်။ Client က Server ဆီကို WebSocket Connection တစ်ခု စချင်ကြောင်း Handshake Request ပို့ပြီး စတင်ပါတယ်။</p>\n</li>\n<li>\n<p>Server: Client ရဲ့ Connection Request ကို လက်ခံပြီး Connection ကို ထူထောင်ပေးတဲ့ဘက် ဖြစ်ပါတယ်။ Server ဟာ Client အများအပြားနဲ့ တစ်ပြိုင်တည်း ချိတ်ဆက်ပြီး Data တွေကို ကိုင်တွယ်ပေးနိုင်ပါတယ်။</p>\n</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: connections,
      alt: "browsers and server connections"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"client--အခန်းကဏ္ဍ\">Client ၏ အခန်းကဏ္ဍ</h3><a class=\"sl-anchor-link\" href=\"#client--အခန်းကဏ္ဍ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Client ၏ အခန်းကဏ္ဍ”</span></a></div>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"client-ဘက်-browser-built-in-api\">Client ဘက် (Browser Built-in API)</h4><a class=\"sl-anchor-link\" href=\"#client-ဘက်-browser-built-in-api\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Client ဘက် (Browser Built-in API)”</span></a></div>\n<p>Client ဘက်မှာ WebSocket ကို အသုံးပြုဖို့အတွက် ခေတ်မီ Web Browser တွေမှာ Built-in လုပ်ပြီးသား WebSocket API ကို သုံးနိုင်ပါတယ်။ ဒါကြောင့် Client-side JavaScript နဲ့တင် WebSocket Connection တွေ ထူထောင်ပြီး Data တွေ ပို့/ယူ လုပ်လို့ရပါတယ်။ ဘာ Add-on မှ ထပ်ထည့်စရာ မလိုပါဘူး။</p>\n<p>WebSocket Object ကို ဖန်တီးခြင်းဖြင့် စတင်သည် (new WebSocket(url))။\nConnection ရဲ့ အခြေအနေ (ဖွင့်ခြင်း၊ ပိတ်ခြင်း၊ Error ဖြစ်ခြင်း၊ Message လက်ခံရရှိခြင်း) များကို Event Handler များဖြင့် ကိုင်တွယ်သည်။ (ဥပမာ - onopen, onmessage, onerror, onclose)။\nData ပို့ရန် send() Method ကို အသုံးပြုသည်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"server--အခန်းကဏ္ဍ\">Server ၏ အခန်းကဏ္ဍ</h3><a class=\"sl-anchor-link\" href=\"#server--အခန်းကဏ္ဍ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Server ၏ အခန်းကဏ္ဍ”</span></a></div>\n<p>Server ဘက်မှာတော့ သင်အသုံးပြုတဲ့ Programming Language နဲ့ Framework ပေါ် မူတည်ပြီး WebSocket Server တွေ တည်ဆောက်ဖို့ Library တွေ အများကြီး ရှိပါတယ်။ ဥပမာအားဖြင့် -</p>\n<p>Python: websockets, Socket.IO, Tornado\nNode.js (JavaScript): ws, Socket.IO, Express-WebSocket\nJava: javax.websocket, Spring WebSocket\nRuby: websocket-rails\nPHP: Ratchet\nGo: gorilla/websocket\nဒီ Library တွေက WebSocket Handshake, Framing, Connection Management, Sending/Receiving Data စတာတွေကို ကိုင်တွယ်ပေးပါတယ်။ Developer အနေနဲ့ Application Logic (ဥပမာ - Message တွေကို ဘယ် Client တွေဆီ ပို့မလဲ၊ Data တွေ ဘယ်လို Process လုပ်မလဲ) ကို အဓိက ရေးသားဖို့ပဲ လိုပါတယ်။</p>\n<p>Server Side Implementation ဟာ Client ဘက် Browser API ထက် နည်းပညာ ရွေးချယ်မှု များပြားပြီး ပိုရှုပ်ထွေးနိုင်ပါတယ်။</p>"
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

const url = "src/content/docs/websocket/about-websocket/two-sides-websocket.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/websocket/about-websocket/two-sides-websocket.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/websocket/about-websocket/two-sides-websocket.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
