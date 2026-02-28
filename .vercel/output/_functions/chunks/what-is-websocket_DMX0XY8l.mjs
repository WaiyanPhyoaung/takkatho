import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const biDirectional = new Proxy({"src":"/_astro/bi-directional.DZ7pICw0.png","width":1586,"height":586,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/websockets/bi-directional.png";
							}
							
							return target[name];
						}
					});

const websocketConnection = new Proxy({"src":"/_astro/websocket-connection.Bu_gsiRd.png","width":1587,"height":574,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/websockets/websocket-connection.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "မိတ်ဆက် - WebSockets: Real-Time Web ဆီသို့ တံခါးဖွင့်ခြင်း",
  "description": "WebSockets - Opening doors to Real-Time Web"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "websocket-ဆိုတာဘာလဲ",
    "text": "WebSocket ဆိုတာဘာလဲ?"
  }, {
    "depth": 3,
    "slug": "tcp--http",
    "text": "TCP & HTTP"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"websocket-ဆိုတာဘာလဲ\">WebSocket ဆိုတာဘာလဲ?</h3><a class=\"sl-anchor-link\" href=\"#websocket-ဆိုတာဘာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “WebSocket ဆိုတာဘာလဲ?”</span></a></div>\n<p>အခုခေတ် Website တွေဟာ အရင်လို ရုပ်ပြသက်သက် စာမျက်နှာတွေတင် ပြတာမျိုး မဟုတ်တော့ပါဘူး။ ပိုပြီး အသက်ဝင်လာတယ်၊ ကိုယ်လုပ်လိုက်တာကို ချက်ချင်း တုံ့ပြန်လာနိုင်ပါတယ်။ ဥပမာအနေနဲ့ ပြောရရင် Chat App တွေလိုမျိုး၊ Online ဆော့တဲ့ ဂိမ်းတွေလိုမျိုး၊ ဒါမှမဟုတ် စတော့ရှယ်ယာဈေးလိုမျိုး အချိန်နဲ့အမျှ ပြောင်းလဲနေတဲ့ သတင်းအချက်အလက်တွေကို Website ကနေ ကိုယ့်ဆီကို ချက်ချင်း ပို့ပေးဖို့ လိုပါတယ်။</p>\n<p>ဒီလိုမျိုး Website Server (သတင်းအချက်အလက်ထားရာနေရာ) ကနေ ကိုယ့် Browser ဆီကိုရော၊ ကိုယ့် Browser ကနေ Server ဆီကိုပါ အချက်အလက်တွေကို တစ်ချိန်တည်း အပြန်အလှန် ပို့နိုင်ဖို့အတွက် WebSockets ဆိုတဲ့ နည်းပညာက အရမ်းအရေးကြီးပါတယ်။</p>\n<p>ရှင်းရှင်းပြောရရင် WebSocket ဆိုတာဟာ ကိုယ့်ရဲ့ Browser နဲ့ Website ရဲ့ Server ကြားမှာ ဖုန်းကြိုးဖွင့်ထားသလိုမျိုး လမ်းကြောင်းတစ်ခုကို အမြဲတမ်း ဖွင့်ပေးထားတာပါ။ ဒါ့ကြောင့် အချက်အလက်တွေ ပို့ချင်တဲ့အခါ အဲဒီဖွင့်ထားတဲ့ လမ်းကြောင်းအတိုင်း ချက်ချင်း ပို့လို့ ရသွားပါတယ်။</p>\n"
    }), createVNode($$ContentImage, {
      src: biDirectional,
      alt: "websocket bi-directional connection"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"tcp--http\">TCP &#x26; HTTP</h3><a class=\"sl-anchor-link\" href=\"#tcp--http\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “TCP &#x26; HTTP”</span></a></div>\n<p>ဒီလိုမျိုး အမြဲတမ်းဖွင့်ထားပြီး အပြန်အလှန် ပြောဆိုလို့ရတဲ့ လမ်းကြောင်းမျိုးကို ဘာကြောင့် လိုအပ်လာတာလဲ? ဒါကို သိရှိဖို့အတွက် HTTP နဲ့ TCP အကြောင်းကို ပြန်ကြည့်ဖို့ လိုပါတယ်။ ဘာလို့လဲဆိုတော့ အင်တာနက် ချိတ်ဆက်မှုတွေရဲ့ အခြေခံအစက TCP ဖြစ်ပြီး၊ အဲဒီအပေါ်မှာ အခြေခံတဲ့ HTTP ရဲ့ လက်ဆွဲနှုတ်ဆက်ပုံ (handshake) ကို အသုံးပြုပြီးမှ WebSocket ချိတ်ဆက်မှုကို ထူထောင်ကြတာ ဖြစ်ပါတယ်။ ဒါကြောင့် အရင်ဆုံး TCP နဲ့ HTTP အကြောင်းကို လေ့လာကြည့်ရအောင်။</p>\n"
    }), createVNode($$ContentImage, {
      src: websocketConnection,
      alt: "browser and server ws connection"
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

const url = "src/content/docs/websocket/introduction/what-is-websocket.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/websocket/introduction/what-is-websocket.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/websocket/introduction/what-is-websocket.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
