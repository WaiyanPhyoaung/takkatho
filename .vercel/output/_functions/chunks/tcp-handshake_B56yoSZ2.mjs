import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const threeWayHandshake = new Proxy({"src":"/_astro/three-way-handshake.NUDzRgAY.png","width":1211,"height":489,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/websockets/three-way-handshake.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "TCP Three-Way Handshake",
  "description": "TCP Three-Way Handshake"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "3-way-handshake",
    "text": "3-way Handshake"
  }, {
    "depth": 3,
    "slug": "ဘာကြောင့်-လုပ်ဆောင်ရသလဲ",
    "text": "ဘာကြောင့် လုပ်ဆောင်ရသလဲ"
  }, {
    "depth": 3,
    "slug": "အဆင့်များ-steps",
    "text": "အဆင့်များ (Steps):"
  }, {
    "depth": 4,
    "slug": "အဆင့်-၁-syn-client-မှ-server-သို့",
    "text": "အဆင့် ၁: SYN (Client မှ Server သို့)"
  }, {
    "depth": 4,
    "slug": "အဆင့်-၂-syn-ack-server-မှ-client-သို့",
    "text": "အဆင့် ၂: SYN-ACK (Server မှ Client သို့)"
  }, {
    "depth": 4,
    "slug": "အဆင့်-၃-ack-client-မှ-server-သို့",
    "text": "အဆင့် ၃: ACK (Client မှ Server သို့)"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"3-way-handshake\">3-way Handshake</h3><a class=\"sl-anchor-link\" href=\"#3-way-handshake\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “3-way Handshake”</span></a></div>\n<p>TCP ချိတ်ဆက်မှုတစ်ခုကို အစပြုဖို့အတွက် ကွန်ပျူတာနှစ်လုံး (ဥပမာ - ကိုယ့်ကွန်ပျူတာ/ဖုန်း နဲ့ Website Server) ကြားမှာ အဆင့် ၃ ဆင့်ပါတဲ့ “လက်ဆွဲနှုတ်ဆက်ခြင်း” လိုမျိုး အသိအမှတ်ပြုတဲ့ လုပ်ငန်းစဉ်လေးတစ်ခု လုပ်ရပါတယ်။ ဒါကို “၃ လမ်းသွား လက်ဆွဲနှုတ်ဆက်ခြင်း (3-way Handshake)” လို့ ခေါ်ပါတယ်။ ရိုးရှင်းစွာပြောရရင်တော့ အချက်အလက်မပို့ခင် နှစ်ဦးနှစ်ဖက် အဆင်သင့်ဖြစ်ကြောင်း သေချာအောင်လုပ်တာပါ။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဘာကြောင့်-လုပ်ဆောင်ရသလဲ\">ဘာကြောင့် လုပ်ဆောင်ရသလဲ</h3><a class=\"sl-anchor-link\" href=\"#ဘာကြောင့်-လုပ်ဆောင်ရသလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘာကြောင့် လုပ်ဆောင်ရသလဲ”</span></a></div>\n<p>ဒီ ၃ ဆင့် ပြီးသွားတာနဲ့ ကွန်ပျူတာနှစ်လုံးကြား TCP ချိတ်ဆက်မှု အောင်မြင်စွာ ထူထောင်ပြီး ဖြစ်သွားပါပြီ။ ဒါမှ နောက်ပိုင်း အချက်အလက်တွေကို ယုံကြည်စိတ်ချစွာ အပြန်အလှန် ပို့လို့ရတော့မှာ ဖြစ်ပါတယ်။ ဒီလို Handshake လုပ်တာက အချက်အလက်တွေ မပို့ခင် နှစ်ဘက်စလုံး အဆင်သင့်ဖြစ်ပြီလား၊ ဆက်သွယ်လို့ရပြီလားဆိုတာ သေချာအောင် လုပ်တာဖြစ်ပြီး၊ TCP ရဲ့ ယုံကြည်စိတ်ချရတယ်ဆိုတာ ဒီအချက်တွေကြောင့် ဖြစ်ပါတယ်။</p>\n"
    }), createVNode($$ContentImage, {
      src: threeWayHandshake,
      alt: "tcp three-way handshake"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အဆင့်များ-steps\">အဆင့်များ (Steps):</h3><a class=\"sl-anchor-link\" href=\"#အဆင့်များ-steps\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အဆင့်များ (Steps):”</span></a></div>\n<ul>\n<li>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"အဆင့်-၁-syn-client-မှ-server-သို့\">အဆင့် ၁: SYN (Client မှ Server သို့)</h4><a class=\"sl-anchor-link\" href=\"#အဆင့်-၁-syn-client-မှ-server-သို့\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အဆင့် ၁: SYN (Client မှ Server သို့)”</span></a></div>\n<ul>\n<li>Client ဘက် (ကိုယ့်ကွန်ပျူတာ/ဖုန်း) ကနေ Server ဆီကို ‘ဟိုင်း… ငါ မင်းနဲ့ ဆက်သွယ်ပြီး အချက်အလက်တွေ ပို့ချင်ပါတယ်’ လို့ ပြောတဲ့ သတင်းစကားလေး (SYN Packet လို့ခေါ်ပါတယ်) တစ်ခုကို အရင်ဆုံး ပို့လိုက်ပါတယ်။ ပို့တဲ့အခါမှာ နောက်ပိုင်းပို့မယ့် အချက်အလက်တွေကို ဘယ်ကနေ စပြီး နံပါတ်တပ်မယ်ဆိုတဲ့ ကိုယ့်ဘက်က အစပြုမယ့် နံပါတ်လေး (Initial Sequence Number - ISN လို့ခေါ်ပါတယ်) တစ်ခုကိုလည်း ထည့်ပေးလိုက်ပါတယ်။ (ဒီ နံပါတ်က နောက်ပိုင်း အချက်အလက်တွေ အစီအစဉ် မှန်/မမှန် စစ်ဖို့အတွက် အရေးကြီးပါတယ်)</li>\n</ul>\n</li>\n<li>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"အဆင့်-၂-syn-ack-server-မှ-client-သို့\">အဆင့် ၂: SYN-ACK (Server မှ Client သို့)</h4><a class=\"sl-anchor-link\" href=\"#အဆင့်-၂-syn-ack-server-မှ-client-သို့\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အဆင့် ၂: SYN-ACK (Server မှ Client သို့)”</span></a></div>\n<ul>\n<li>Server က Client ပို့လိုက်တဲ့ SYN သတင်းစကားကို ရပြီဆိုတာနဲ့ ‘အိုကေ… မင်းရဲ့ ဆက်သွယ်ချင်တဲ့ သတင်းစကားကို ငါ ရပြီ’ လို့ အသိအမှတ်ပြုတဲ့ အကြောင်းပြန်စာ (ACK) တစ်ခု Client ဆီ ပြန်ပို့ပါတယ်။ ဒီလိုပြန်ပို့ရင်းနဲ့ တစ်ချိန်တည်းမှာပဲ Server ကလည်း ‘ငါလည်း မင်းနဲ့ ဆက်သွယ်ဖို့ အဆင်သင့်ပဲ’ ဆိုတဲ့ သူ့ရဲ့ SYN သတင်းစကားနဲ့ သူကနေ စတင်မယ့် ကိုယ်ပိုင်နံပါတ် (ISN) ကိုပါ ပေါင်းပြီး Client ဆီ ပြန်ပို့ပေးပါတယ်။</li>\n</ul>\n</li>\n<li>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"အဆင့်-၃-ack-client-မှ-server-သို့\">အဆင့် ၃: ACK (Client မှ Server သို့)</h4><a class=\"sl-anchor-link\" href=\"#အဆင့်-၃-ack-client-မှ-server-သို့\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အဆင့် ၃: ACK (Client မှ Server သို့)”</span></a></div>\n<ul>\n<li>Client က Server ပို့လိုက်တဲ့ SYN-ACK သတင်းစကားကို ရပြီဆိုတာနဲ့ ‘ကောင်းပြီ… မင်းရဲ့ ဆက်သွယ်ဖို့ အဆင်သင့်ဖြစ်ပြီဆိုတဲ့ သတင်းစကားကို ငါ ရပြီ။ ကဲ… စကားစပြောလို့ ရပြီ’ လို့ အတည်ပြုတဲ့ နောက်ဆုံး အကြောင်းပြန်စာလေး (ACK) တစ်ခုကို Server ဆီကို ပြန်ပို့လိုက်ပါတယ်။</li>\n</ul>\n</li>\n</ul>"
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

const url = "src/content/docs/websocket/introduction/tcp-handshake.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/websocket/introduction/tcp-handshake.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/websocket/introduction/tcp-handshake.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
