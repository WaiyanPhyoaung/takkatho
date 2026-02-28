import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const httpUpgrade = new Proxy({"src":"/_astro/http-upgrade.DyGApPm6.png","width":1640,"height":603,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/websockets/http-upgrade.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "The Handshake - Connection ကို စတင်ခြင်း",
  "description": "The Handshake - Connection ကို စတင်ခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "ဘယ်လို-အဆင့်မြှင့်တင်-upgrade-လဲ",
    "text": "ဘယ်လို အဆင့်မြှင့်တင် (Upgrade) လဲ?"
  }, {
    "depth": 3,
    "slug": "client-ကနေ-http-request-ပို့ပြီး-upgrade-လုပ်ဖို့-တောင်းဆိုခြင်း",
    "text": "Client ကနေ HTTP Request ပို့ပြီး Upgrade လုပ်ဖို့ တောင်းဆိုခြင်း"
  }, {
    "depth": 3,
    "slug": "server-က-upgrade-လုပ်ရန်-သဘောတူကြောင်း-ပြန်ကြားခြင်း-101-switching-protocols",
    "text": "Server က Upgrade လုပ်ရန် သဘောတူကြောင်း ပြန်ကြားခြင်း (101 Switching Protocols)"
  }, {
    "depth": 3,
    "slug": "websocket-connection-အောင်မြင်စွာ-ထူထောင်ပြီးခြင်း",
    "text": "WebSocket Connection အောင်မြင်စွာ ထူထောင်ပြီးခြင်း"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>WebSocket ချိတ်ဆက်မှုတစ်ခုကို စတင်ထူထောင်တာဟာ စိတ်ဝင်စားစရာ ကောင်းပါတယ်။ သူက ပုံမှန် HTTP Request တစ်ခုနဲ့ အရင် စပြီး၊ အဲဒီ ချိတ်ဆက်ထားတဲ့ လမ်းကြောင်းကိုပဲ WebSocket Protocol ဆိုတဲ့ ပိုပြီး အဆင့်မြင့်တဲ့၊ နှစ်ဖက်သွား ပြောဆိုနိုင်တဲ့ နည်းလမ်းအသစ်တစ်ခုဆီ “အဆင့်မြှင့်တင်” (Upgrade) လုပ်လိုက်တာမျိုး ဖြစ်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဘယ်လို-အဆင့်မြှင့်တင်-upgrade-လဲ\">ဘယ်လို အဆင့်မြှင့်တင် (Upgrade) လဲ?</h3><a class=\"sl-anchor-link\" href=\"#ဘယ်လို-အဆင့်မြှင့်တင်-upgrade-လဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘယ်လို အဆင့်မြှင့်တင် (Upgrade) လဲ?”</span></a></div>\n<p>ဒီလို Upgrade လုပ်တဲ့ လုပ်ငန်းစဉ်ကို အဆင့် ၃ ဆင့်နဲ့ ရှင်းပြထားပါတယ်။ ဒါကို WebSocket Handshake လို့လည်း ခေါ်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"client-ကနေ-http-request-ပို့ပြီး-upgrade-လုပ်ဖို့-တောင်းဆိုခြင်း\">Client ကနေ HTTP Request ပို့ပြီး Upgrade လုပ်ဖို့ တောင်းဆိုခြင်း</h3><a class=\"sl-anchor-link\" href=\"#client-ကနေ-http-request-ပို့ပြီး-upgrade-လုပ်ဖို့-တောင်းဆိုခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Client ကနေ HTTP Request ပို့ပြီး Upgrade လုပ်ဖို့ တောင်းဆိုခြင်း”</span></a></div>\n<p>ကိုယ့် Browser (Client) ကနေ Website Server ဆီကို ပုံမှန်အားဖြင့် Website စာမျက်နှာ ဒါမှမဟုတ် အချက်အလက်တစ်ခုခု တောင်းဆိုတဲ့ HTTP GET Request တစ်ခု ပို့လိုက်ပါတယ်။ ဒါပေမယ့် ဒီတစ်ခါမှာတော့ ပုံမှန် Request မဟုတ်ဘဲ WebSocket Connection လုပ်ချင်ကြောင်း Server ကို အချက်ပြဖို့ Upgrade: websocket နဲ့ Connection: Upgrade ဆိုတဲ့ သီးခြား ထပ်ဆောင်းအချက်အလက်တွေ (Headers) ကို ထည့်ပေးလိုက်ပါတယ်။ ဒါ့အပြင် လုံခြုံရေးအတွက် ကျပန်းထုတ်ထားတဲ့ လျှို့ဝှက်ကုဒ်တစ်ခု (Sec-WebSocket-Key) နဲ့ ဘယ် WebSocket Version ကို သုံးချင်ကြောင်းဆိုတာကိုလည်း ထည့်ပို့ပါတယ်။\n(ဒါဟာ ပုံမှန် ဖုန်းခေါ်လိုက်ပြီး စကားမပြောသေးခင် ‘ဒီဖုန်းခေါ်ဆိုမှုကို နှစ်ဖက်စလုံး တစ်ပြိုင်နက် စိတ်ကြိုက်ပြောလို့ရတဲ့ အထူးလိုင်းအဖြစ် ပြောင်းရအောင်လား’ လို့ Server ကို မေးလိုက်တာနဲ့ တူပါတယ်)</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">GET /chat HTTP/1.1</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">Host: server.example.com</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">Upgrade: websocket</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">Connection: Upgrade</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">Sec-WebSocket-Key: [random base64 key]</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">Sec-WebSocket-Version: 13</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">Origin: http://client.example.com</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"GET /chat HTTP/1.1Host: server.example.comUpgrade: websocketConnection: UpgradeSec-WebSocket-Key: [random base64 key]Sec-WebSocket-Version: 13Origin: http://client.example.com\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"server-က-upgrade-လုပ်ရန်-သဘောတူကြောင်း-ပြန်ကြားခြင်း-101-switching-protocols\">Server က Upgrade လုပ်ရန် သဘောတူကြောင်း ပြန်ကြားခြင်း (101 Switching Protocols)</h3><a class=\"sl-anchor-link\" href=\"#server-က-upgrade-လုပ်ရန်-သဘောတူကြောင်း-ပြန်ကြားခြင်း-101-switching-protocols\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Server က Upgrade လုပ်ရန် သဘောတူကြောင်း ပြန်ကြားခြင်း (101 Switching Protocols)”</span></a></div>\n<p>Server က Client ပို့လိုက်တဲ့ Upgrade တောင်းဆိုမှုကို လက်ခံရရှိပြီး WebSocket Connection လုပ်ဖို့ အဆင်သင့် ဖြစ်တယ်၊ သဘောတူတယ်ဆိုရင် HTTP Status Code ဖြစ်တဲ့ 101 Switching Protocols ဆိုတဲ့ သီးခြား နံပါတ်နဲ့ ပြန်ဖြေပါတယ်။ ဒါဟာ ‘မင်း Protocol ပြောင်းချင်တာကို ငါ နားလည်ပြီ၊ ပြောင်းဖို့လည်း သဘောတူတယ်’ လို့ Server က ပြောလိုက်တာပါ။ Server ရဲ့ Response မှာ Client ပို့လိုက်တဲ့ Upgrade နဲ့ Connection Headers တွေကို ပြန်ထည့်ပေးပြီး Client ရဲ့ လျှို့ဝှက်ကုဒ် (Sec-WebSocket-Key) ကနေ တွက်ချက်ထားတဲ့ Sec-WebSocket-Accept ဆိုတဲ့ တန်ဖိုးတစ်ခုကိုပါ ပြန်ထည့်ပေးလိုက်ပါတယ်။\n(ဒီ Sec-WebSocket-Accept တန်ဖိုးက Server ဟာ WebSocket Handshake လုပ်နည်းကို မှန်မှန်ကန်ကန် နားလည်ပြီး တကယ်လည်း လုပ်ဆောင်နိုင်ကြောင်း Client ဘက်ကို အတည်ပြုပြတဲ့ လျှို့ဝှက်ကုဒ် ပြန်ပြောပြတာမျိုးပါ)</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">HTTP/1.1 101 Switching Protocols</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">Upgrade: websocket</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">Connection: Upgrade</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">Sec-WebSocket-Accept: [calculated key]</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"HTTP/1.1 101 Switching ProtocolsUpgrade: websocketConnection: UpgradeSec-WebSocket-Accept: [calculated key]\"><div></div></button></div></figure></div>\n"
    }), createVNode($$ContentImage, {
      src: httpUpgrade,
      alt: "http upgrade handshake"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"websocket-connection-အောင်မြင်စွာ-ထူထောင်ပြီးခြင်း\">WebSocket Connection အောင်မြင်စွာ ထူထောင်ပြီးခြင်း</h3><a class=\"sl-anchor-link\" href=\"#websocket-connection-အောင်မြင်စွာ-ထူထောင်ပြီးခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “WebSocket Connection အောင်မြင်စွာ ထူထောင်ပြီးခြင်း”</span></a></div>\n<p>Client (Browser) က Server ရဲ့ 101 Switching Protocols Response နဲ့ Server ပြန်ပို့လိုက်တဲ့ Sec-WebSocket-Accept တန်ဖိုး မှန်ကန်မှု ရှိ/မရှိကို စစ်ဆေးပြီးတာနဲ့ အစက စတင်ခဲ့တဲ့ HTTP Connection ဟာ HTTP Connection အဖြစ်ကနေ လုံးဝ ပြောင်းလဲပြီး WebSocket Connection အဖြစ် အောင်မြင်စွာ ထူထောင်ပြီး ဖြစ်သွားပါပြီ။</p>\n<p>(ဒီအချိန်ကစပြီး Client နဲ့ Server နှစ်ခုလုံးဟာ အချက်အလက်တွေကို WebSocket ရဲ့ စည်းမျဉ်းတွေအတိုင်း အမြဲတမ်း ဖွင့်ထားတဲ့ လမ်းကြောင်းကနေ အပြန်အလှန် ချက်ချင်း ပို့နိုင်၊ ယူနိုင်ပါပြီ။ ပုံမှန် ဖုန်းပြောနေတာကနေ အထူးနှစ်လမ်းသွား Live လိုင်းအဖြစ် ပြောင်းသွားပြီး စိတ်ကြိုက်ပြောလို့ရပြီပေါ့)</p>\n<p>ဒီလို Handshake လုပ်ငန်းစဉ် ပြီးသွားတာနဲ့ WebSocket Connection ဟာ TCP Connection တစ်ခုပေါ်မှာ ဆက်လက် တည်ရှိပြီး၊ HTTP ရဲ့ Request/Response Model ရဲ့ ကန့်သတ်ချက်တွေ မရှိတော့ဘဲ Data တွေကို နှစ်ဖက်စလုံး အချိန်မရွေး လွတ်လပ် လျင်မြန်စွာ ပို့နိုင်၊ ယူနိုင်တော့မှာ ဖြစ်ပါတယ်။</p>"
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

const url = "src/content/docs/websocket/about-websocket/http-upgrade-handshake.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/websocket/about-websocket/http-upgrade-handshake.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/websocket/about-websocket/http-upgrade-handshake.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
