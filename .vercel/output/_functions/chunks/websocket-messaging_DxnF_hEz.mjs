import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const frame = new Proxy({"src":"/_astro/frame.yKQnn0YW.png","width":905,"height":640,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/websockets/frame.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "WebSocket Messaging - Data ပို့ခြင်းနှင့် လက်ခံခြင်း",
  "description": "WebSocket Messaging - Data ပို့ခြင်းနှင့် လက်ခံခြင်း (ထပ်မံရှင်းလင်းခြင်း)"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "frames-တွေ-opcode-တွေ-နဲ့-mask-လုပ်ခြင်း",
    "text": "Frames တွေ၊ Opcode တွေ နဲ့ Mask လုပ်ခြင်း"
  }, {
    "depth": 3,
    "slug": "opcode-အမျိုးအစား-ခွဲခြားကုဒ်",
    "text": "Opcode (အမျိုးအစား ခွဲခြားကုဒ်)"
  }, {
    "depth": 3,
    "slug": "ဆက်လက်-လေ့လာမည့်-code-examples",
    "text": "ဆက်လက် လေ့လာမည့် Code Examples"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>WebSocket Handshake လုပ်ငန်းစဉ် အောင်မြင်ပြီး Client နဲ့ Server ကြား နှစ်ဖက်သွား ဆက်သွယ်နိုင်တဲ့ လမ်းကြောင်း (Connection) ရရှိသွားပြီဆိုတာနဲ့ အဲဒီနောက်ပိုင်း အချက်အလက်တွေကို ပို့တဲ့အခါ “Message” အဖြစ် ပို့/ယူ လုပ်ပါတယ်။ Data Message တစ်ခုလုံးက ကြီးနေရင် သူ့ကို သေးငယ်တဲ့ အပိုင်းလေးတွေဖြစ်တဲ့ “Frame” တွေအဖြစ် ခွဲပြီး ပို့ပါတယ်။ Frame တစ်ခုစီက ပို့လိုက်တဲ့ Data အပိုင်းလေးတွေ ထည့်ထားတဲ့ အိတ်လေးတွေနဲ့ တူပါတယ်။</p>\n"
    }), createVNode($$ContentImage, {
      src: frame,
      alt: "Network frame"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"frames-တွေ-opcode-တွေ-နဲ့-mask-လုပ်ခြင်း\">Frames တွေ၊ Opcode တွေ နဲ့ Mask လုပ်ခြင်း</h3><a class=\"sl-anchor-link\" href=\"#frames-တွေ-opcode-တွေ-နဲ့-mask-လုပ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Frames တွေ၊ Opcode တွေ နဲ့ Mask လုပ်ခြင်း”</span></a></div>\n<p>Data တွေကို Network ပေါ် ပို့တဲ့အခါ Frame တွေအဖြစ် ထုပ်ပိုးပြီး ပို့ပါတယ်။ Frame တစ်ခုမှာ ထိပ်ပိုင်းအချက်အလက် (Header) နဲ့ တကယ့် ပို့လိုက်တဲ့ အချက်အလက်ကိုယ်ထည် (Payload Data) ဆိုပြီး အဓိက ပါဝင်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"opcode-အမျိုးအစား-ခွဲခြားကုဒ်\">Opcode (အမျိုးအစား ခွဲခြားကုဒ်)</h3><a class=\"sl-anchor-link\" href=\"#opcode-အမျိုးအစား-ခွဲခြားကုဒ်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Opcode (အမျိုးအစား ခွဲခြားကုဒ်)”</span></a></div>\n<p>Frame ရဲ့ Header မှာ Opcode ဆိုတဲ့ သီးခြား ကုဒ်တစ်ခု ပါပါတယ်။ ဒီ Opcode က Payload Data (အချက်အလက်ကိုယ်ထည်) ဟာ ဘယ်လို အမျိုးအစားလဲဆိုတာကို ဖော်ပြပေးပါတယ်။ ဥပမာ -</p>\n<ul>\n<li>Text: ပုံမှန် စာသား Message တွေ (Chat စာသားလိုမျိုး)</li>\n<li>Binary: ပုံ၊ အသံ၊ ဗီဒီယို ဖိုင်တွေလိုမျိုး ဒါမှမဟုတ် စာမဟုတ်တဲ့ Data တွေ</li>\n<li>Connection Close: ချိတ်ဆက်မှုကို ဖြတ်တောက်ချင်ကြောင်း အချက်ပြခြင်း</li>\n<li>Ping: အခြားတစ်ဖက်က ဆက်သွယ်မှု ရှိ/မရှိ စစ်ဆေးခြင်း (ဥပမာ - လိုင်းကျနေလား စစ်တာ)</li>\n<li>Pong: Ping ကို ပြန်ဖြေကြားခြင်း (ဥပမာ - ဟုတ်ကဲ့၊ ချိတ်ဆက်မှု ရှိပါတယ်လို့ ပြန်ပြောတာ) (Frame က စာထည့်ထားတဲ့ စာအိတ်ဆိုရင် Opcode က စာအိတ်ပေါ်မှာ ‘စာသားပါ’, ‘ပုံပါ’, ‘လိုင်းစစ်ခြင်း’ စသဖြင့် တံဆိပ်ကပ်ထားတာနဲ့ တူပါတယ်)\nMask လုပ်ခြင်း (လုံခြုံရေးအတွက်): Client (Browser) ကနေ Server ဆီကို ပို့တဲ့ Message (Frame) တွေကို လုံခြုံရေးအတွက် Mask လုပ်ရပါမယ်။ ဒါဟာ ပို့လိုက်တဲ့ Data ကို Network လမ်းကြောင်းမှာ ဖြတ်သန်းနေစဉ်အတွင်း တခြားသူတွေ အလွယ်တကူ ကြည့်လို့မရအောင် ဒါမှမဟုတ် မတော်တဆ ပြောင်းလဲသွားတာမျိုး မဖြစ်အောင် ကာကွယ်တဲ့ ရိုးရှင်းတဲ့ လုံခြုံရေး နည်းလမ်းလေးပါ။ Server က ဒီ Mask လုပ်ထားတာကို ဘယ်လို ပြန်ဖြည်ရမလဲဆိုတာ သိပါတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဆက်လက်-လေ့လာမည့်-code-examples\">ဆက်လက် လေ့လာမည့် Code Examples</h3><a class=\"sl-anchor-link\" href=\"#ဆက်လက်-လေ့လာမည့်-code-examples\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဆက်လက် လေ့လာမည့် Code Examples”</span></a></div>\n<p>ဒီ အချက်အလက် ပို့/ယူ လုပ်တာတွေ ဘယ်လို လုပ်လဲဆိုတာ ပိုပြီး လက်တွေ့ကျကျ နားလည်ဖို့အတွက် Code Examples တွေနဲ့ ဆက်ပြီး လေ့လာပါမယ်။</p>"
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

const url = "src/content/docs/websocket/about-websocket/websocket-messaging.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/websocket/about-websocket/websocket-messaging.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/websocket/about-websocket/websocket-messaging.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
