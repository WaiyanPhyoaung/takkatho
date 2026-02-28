import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const slothAdr = new Proxy({"src":"/_astro/sloth-adr.B7ZqsMLp.png","width":1575,"height":1120,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/software-architecture/sloth-adr.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "အသေးစိတ် Design နှင့် အဓိကဆုံးဖြတ်ချက်များ",
  "description": "အသေးစိတ် Design နှင့် အဓိကဆုံးဖြတ်ချက်များ"
};
function getHeadings() {
  return [{
    "depth": 4,
    "slug": "အဆင့်-၆-ဆက်သွယ်မှုပုံစံများကို-ရွေးချယ်ခြင်း",
    "text": "အဆင့် ၆: ဆက်သွယ်မှုပုံစံများကို ရွေးချယ်ခြင်း"
  }, {
    "depth": 4,
    "slug": "အဆင့်-၇-database-အမျိုးအစားများ-ရွေးချယ်ခြင်း-polyglot-persistence",
    "text": "အဆင့် ၇: Database အမျိုးအစားများ ရွေးချယ်ခြင်း (Polyglot Persistence)"
  }, {
    "depth": 4,
    "slug": "အဆင့်-၈-အဓိကဆုံးဖြတ်ချက်တစ်ခုကို-adr-ဖြင့်-မှတ်တမ်းတင်ခြင်း",
    "text": "အဆင့် ၈: အဓိကဆုံးဖြတ်ချက်တစ်ခုကို ADR ဖြင့် မှတ်တမ်းတင်ခြင်း"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>ကျွန်တော်တို့၏ service များအတွက် ဆက်သွယ်မှုပုံစံများ (communication styles) နှင့် database နည်းပညာများအကြောင်း အသေးစိတ်ဒီဇိုင်းဆုံးဖြတ်ချက်များ ချမှတ်ရန်၊ နှင့် ADR တစ်ခုဖြင့် အဓိကဆုံးဖြတ်ချက်တစ်ခုကို မှတ်တမ်းတင်ခြင်း လေ့ကျင့်ရန်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"အဆင့်-၆-ဆက်သွယ်မှုပုံစံများကို-ရွေးချယ်ခြင်း\">အဆင့် ၆: ဆက်သွယ်မှုပုံစံများကို ရွေးချယ်ခြင်း</h4><a class=\"sl-anchor-link\" href=\"#အဆင့်-၆-ဆက်သွယ်မှုပုံစံများကို-ရွေးချယ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အဆင့် ၆: ဆက်သွယ်မှုပုံစံများကို ရွေးချယ်ခြင်း”</span></a></div>\n<p>ကျွန်တော်တို့ service တွေက မတူညီတဲ့အလုပ်တွေအတွက် တစ်ခုနဲ့တစ်ခု ဘယ်လိုဆက်သွယ်ကြမလဲဆိုတာ ဆုံးဖြတ်ကြရအောင်။</p>\n<ul>\n<li>\n<p><strong>ကားငှားသူမှ ခရီးစဉ်စတင်ခြင်း -</strong> ကားငှားသူဆီက အတည်ပြုချက် (confirmation) လိုအပ်ပါတယ်။ ဒါကြောင့် <strong>Rider’s App</strong> (ကျွန်တော်တို့ တည်ဆောက်နေသော App) ကနေ <code dir=\"auto\">Trip Service</code> ကို <strong>Synchronous REST API call</strong> တစ်ခုပို့ပေးတာ အဓိပ္ပာယ်ရှိပါတယ်။</p>\n</li>\n<li>\n<p><strong>ကားသမား၏ Location Update များ -</strong> ဒါတွေက မကြာခဏ update လုပ်ဖို့လိုအပ်ပြီး၊ real-time ဖြစ်ကာ၊ များသောအားဖြင့် တစ်လမ်းသွားဆက်သွယ်ခြင်း (ကားသမားဆီက server သို့) ဖြစ်ပါတယ်။ ဒါကြောင့် <code dir=\"auto\">Location Service</code> ကို <strong>WebSockets သို့မဟုတ် gRPC</strong> လိုမျိုး high-performance, low-latency protocol တစ်ခုသုံးတာက ရွေးချယ်မှုကောင်းတစ်ခုပါ။</p>\n</li>\n<li>\n<p><strong>ကားသမားတစ်ဦးအား ခရီးစဉ်အသစ်အကြောင်း အကြောင်းကြားခြင်း -</strong> <code dir=\"auto\">Trip Service</code> က ကားသမားရဲ့ Response ကို စောင့်မနေသင့်ပါဘူး။ ဒါက <strong>Asynchronous events</strong> တွေသုံးဖို့ အကောင်းဆုံးအချိန်ပါပဲ။ <code dir=\"auto\">Trip Service</code> က <code dir=\"auto\">RideRequested event</code> တစ်ခုကို ထုတ်လွှင့် (publish) ပြီး၊ <code dir=\"auto\">Notification Service</code> က အဲဒီ event ကို subscribe ကာ အနီးအနားက ကားသမားတွေဆီကို <strong>notification</strong> ပို့ပေးနိုင်ပါတယ်။</p>\n</li>\n</ul>\n"
    }), createVNode($$Aside, {
      type: "tip",
      title: "အကျဉ်းချုပ်",
      "set:html": "<ul>\n<li>ကားငှားသူက စပြီး ခရီးစဉ်တစ်ခုကို confirm လိုက်တဲ့အခါ App ကနေပြီး <code dir=\"auto\">Trip Serive</code> ကို <strong>REST API call</strong> တစ်ခုပို့လိုက်ပါတယ်။</li>\n<li>ကားသမားရဲ့ လက်ရှိ location ကိုသိဖို့အတွက် App ကနေ <code dir=\"auto\">Location Service</code> ကို <strong>WebSockets</strong> နဲ့ ခန ခန ပို့ပေးပါမယ်။</li>\n<li>ကားငှားသူဆီက ခရီးစဉ် API call ရတဲ့အခါ <code dir=\"auto\">Trip Service</code> ကနေ event တစ်ခုထုတ်လွှင့်လိုက်ပါတယ်။ ထို event ကို စောင့်ကြည့်နေသော <code dir=\"auto\">Notification Service</code> က အနီးအနားက ကားသမားတွေဆီကို notification ပို့ပေးလိုက်ပါတယ်။</li>\n</ul>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"အဆင့်-၇-database-အမျိုးအစားများ-ရွေးချယ်ခြင်း-polyglot-persistence\">အဆင့် ၇: Database အမျိုးအစားများ ရွေးချယ်ခြင်း (Polyglot Persistence)</h4><a class=\"sl-anchor-link\" href=\"#အဆင့်-၇-database-အမျိုးအစားများ-ရွေးချယ်ခြင်း-polyglot-persistence\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အဆင့် ၇: Database အမျိုးအစားများ ရွေးချယ်ခြင်း (Polyglot Persistence)”</span></a></div>\n<p>Service တစ်ခုချင်းစီရဲ့ အလုပ်အတွက် မှန်ကန်တဲ့ database ကို ရွေးချယ်ကြပါမယ်။</p>\n<ul>\n<li>\n<p><strong>Rider &#x26; Driver Services -</strong> ဒါက <strong>ဖွဲ့စည်းပုံကျနပြီး၊ အမြဲတမ်းမှန်ကန်နေဖို့လိုအပ်တဲ့</strong> user profile data တွေပါ။ ဒါကြောင့် <code dir=\"auto\">SQL database (PostgreSQL လိုမျိုး)</code> က ရွေးချယ်မှုကောင်းတစ်ခုပါ။</p>\n</li>\n<li>\n<p><strong>Trip Service -</strong> ခရီးစဉ်တစ်ခုမှာ အဆင့်တွေအများကြီးနဲ့ မှတ်တမ်းအပြည့်အစုံရှိပါတယ်။ ခရီးစဉ်တစ်ခုချင်းစီကို <strong>ပြောင်းလွယ်ပြင်လွယ်ရှိတဲ့ document</strong> တစ်ခုအနေနဲ့ သိမ်းဆည်းတာက အဓိပ္ပာယ်ရှိပါတယ်။ ဒါကြောင့် <code dir=\"auto\">Document Database (MongoDB လိုမျိုး)</code> က သင့်တော်ပါတယ်။</p>\n</li>\n<li>\n<p><strong>Location Service -</strong> ဒီ service က location data တွေကို <strong>အလွန်မြန်မြန်ရေးနိုင်ဖို့</strong>၊ ပြီးတော့ “nearest drivers” ဆိုတဲ့ query တွေကို <strong>မြန်မြန်ဖတ်နိုင်ဖို့</strong> လိုအပ်ပါတယ်။ ဒါကြောင့် <code dir=\"auto\">Key-Value သို့မဟုတ် Geospatial Database (Redis (သို့) အထူးပြု DB လိုမျိုး)</code> က အကောင်းဆုံးပါပဲ။</p>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"အဆင့်-၈-အဓိကဆုံးဖြတ်ချက်တစ်ခုကို-adr-ဖြင့်-မှတ်တမ်းတင်ခြင်း\">အဆင့် ၈: အဓိကဆုံးဖြတ်ချက်တစ်ခုကို ADR ဖြင့် မှတ်တမ်းတင်ခြင်း</h4><a class=\"sl-anchor-link\" href=\"#အဆင့်-၈-အဓိကဆုံးဖြတ်ချက်တစ်ခုကို-adr-ဖြင့်-မှတ်တမ်းတင်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အဆင့် ၈: အဓိကဆုံးဖြတ်ချက်တစ်ခုကို ADR ဖြင့် မှတ်တမ်းတင်ခြင်း”</span></a></div>\n<p>ကျွန်တော်တို့ရဲ့ အရေးကြီးတဲ့ ရွေးချယ်မှုတစ်ခုကို မှတ်တမ်းတင်ကြည့်ကြရအောင်။</p>\n"
    }), createVNode($$ContentImage, {
      src: slothAdr,
      alt: "ADR for Asynchronous events for Ride Request"
    }), "\n", createVNode($$Aside, {
      title: "အနှစ်ချုပ်",
      "set:html": "<ul>\n<li>\n<p>လက်တွေ့ Architecture က <strong>functional requirements (ဘာလုပ်သလဲ) နှင့် အရေးကြီးသော quality attributes (ဘယ်လောက်ကောင်းကောင်းလုပ်သလဲ)</strong> နှစ်ခုလုံးကို နားလည်ခြင်းဖြင့် စတင်ပါတယ်။</p>\n</li>\n<li>\n<p>ဒီလိုအပ်ချက်တွေအပေါ်မူတည်ပြီး၊ microservices ကဲ့သို့သော အဓိက <strong>Architectural pattern</strong> တစ်ခုကို ရွေးချယ်ပြီး service နယ်နိမိတ်များကို သတ်မှတ်နိုင်ပါတယ်။</p>\n</li>\n<li>\n<p><strong>C4 Model</strong> က မတူညီတဲ့ ပရိသတ်တွေအတွက် ကျွန်တော်တို့ရဲ့ high-level design ကို ရှင်းလင်းတဲ့ ပုံကြမ်းတွေဖန်တီးရာမှာ ကူညီပေးပါတယ်။</p>\n</li>\n<li>\n<p>အသေးစိတ်ဒီဇိုင်းတွင် အလုပ်တစ်ခုချင်းစီအတွက် မှန်ကန်သော <strong>Communication styles (Sync နှင့် Async) နှင့် database technologies</strong> (Polyglot Persistence) ကို ရွေးချယ်ခြင်း ပါဝင်ပါတယ်။</p>\n</li>\n<li>\n<p><strong>Architectural Decision Records (ADRs)</strong> များသည် အရေးကြီးသော ဆုံးဖြတ်ချက်များနောက်ကွယ်မှ အကြောင်းပြချက်ကို မှတ်တမ်းတင်ရန် ရိုးရှင်းပြီး အစွမ်းထက်သော tool တစ်ခုဖြစ်သည်။</p>\n</li>\n</ul>"
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

const url = "src/content/docs/software-architecture/practical/decisions.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/practical/decisions.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/practical/decisions.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
