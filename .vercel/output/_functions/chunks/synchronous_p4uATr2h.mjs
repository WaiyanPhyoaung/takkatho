import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const restvsgraphql = new Proxy({"src":"/_astro/restvsgraphql.CiAhJkjO.png","width":1451,"height":1177,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/software-architecture/restvsgraphql.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "တိုက်ရိုက်အပြန်အလှန်ဆက်သွယ်ခြင်း - Web API",
  "description": "တိုက်ရိုက်အပြန်အလှန်ဆက်သွယ်ခြင်း - Web API"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "apis-service-များကြားက-သဘောတူညီချက်များ",
    "text": "APIs: Service များကြားက သဘောတူညီချက်များ"
  }, {
    "depth": 4,
    "slug": "rest-web-ရဲ့-အဓိကဘာသာစကား",
    "text": "REST: Web ရဲ့ အဓိကဘာသာစကား"
  }, {
    "depth": 3,
    "slug": "graphql-data-တောင်းဆိုရာမှာ-ပိုမိုပြောင်းလွယ်ပြင်လွယ်ရှိခြင်း",
    "text": "GraphQL: Data တောင်းဆိုရာမှာ ပိုမိုပြောင်းလွယ်ပြင်လွယ်ရှိခြင်း"
  }, {
    "depth": 3,
    "slug": "grpc-အလွန်မြန်သော-အတွင်းပိုင်းဆက်သွယ်မှုများအတွက်",
    "text": "gRPC: အလွန်မြန်သော အတွင်းပိုင်းဆက်သွယ်မှုများအတွက်"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>အရင်အခန်းမှာ၊ ကျွန်တော်တို့ monolith အကြီးကြီးကို microservice အသေးလေးတွေအဖြစ် ခွဲထုတ်ခဲ့ပါတယ်။ အခုတော့ မေးခွန်းအသစ်တွေနဲ့ ရင်ဆိုင်ရပါပြီ - ဒီ service တွေက တစ်ခုနဲ့တစ်ခု ဘယ်လိုစကားပြောကြမလဲ။ ပြီးတော့ service တစ်ခုစီက သူ့ရဲ့ data ကိုယ်စီ ပိုင်ဆိုင်ထားတယ်ဆိုရင်၊ system တစ်ခုလုံးမှာရှိတဲ့ data တွေကို ဘယ်လိုစီမံခန့်ခွဲမလဲ။ ဒီအခန်းမှာတော့ distributed system တွေမှာ အပြန်အလှန်ဆက်သွယ်ပြောဆိုခြင်းနဲ့ data စီမံခန့်ခွဲခြင်းအတွက် မရှိမဖြစ်လိုအပ်တဲ့ pattern တွေကို လေ့လာပါမယ်။</p>\n"
    }), createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>Service များအကြား တိုက်ရိုက် request/response ပြုလုပ်ဆက်သွယ်သည့် နည်းလမ်းများဖြစ်သော REST, GraphQL, နှင့် gRPC တို့၏ အသုံးများသော ပုံစံများကို နားလည်ရန်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"apis-service-များကြားက-သဘောတူညီချက်များ\">APIs: Service များကြားက သဘောတူညီချက်များ</h3><a class=\"sl-anchor-link\" href=\"#apis-service-များကြားက-သဘောတူညီချက်များ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “APIs: Service များကြားက သဘောတူညီချက်များ”</span></a></div>\n<p><strong>API (Application Programming Interface)</strong> ဆိုတာ service တစ်ခုက တခြား service တွေကို ပေးထားတဲ့ တရားဝင်သဘောတူညီချက် ဒါမှမဟုတ် “menu” တစ်ခုနဲ့တူပါတယ်။ တခြား service တစ်ခုက ဘာတွေကို တောင်းဆိုနိုင်သလဲ၊ ပြီးတော့ ဘာတွေကို ပြန်ရမလဲဆိုတာကို အတိအကျ သတ်မှတ်ပေးပါတယ်။ Service တွေက တစ်ခုနဲ့တစ်ခု ရောနှောချိတ်ဆက်မနေဘဲ အတူတကွအလုပ်လုပ်နိုင်ဖို့အတွက် ကောင်းမွန်စွာဒီဇိုင်းဆွဲထားတဲ့၊ ရှင်းလင်းတဲ့ API တွေ လိုအပ်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"rest-web-ရဲ့-အဓိကဘာသာစကား\">REST: Web ရဲ့ အဓိကဘာသာစကား</h4><a class=\"sl-anchor-link\" href=\"#rest-web-ရဲ့-အဓိကဘာသာစကား\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “REST: Web ရဲ့ အဓိကဘာသာစကား”</span></a></div>\n<p><strong>REST (Representational State Transfer)</strong> ဆိုတာက web API တွေဖန်တီးရာမှာ အကျယ်ပြန့်ဆုံးအသုံးပြုတဲ့ architectural style တစ်ခုပါ။ ဒါက web ရဲ့ အခြေခံမူတွေပေါ်မှာပဲ တည်ဆောက်ထားပါတယ်။</p>\n<ul>\n<li>\n<p><strong>အဓိက သဘောတရားများ -</strong></p>\n<ol>\n<li>\n<p><strong>Resources -</strong> အရာအားလုံးက resource ဖြစ်ပြီး၊ သူ့မှာ သီးခြားလိပ်စာ (URL) တစ်ခုရှိပါတယ်။ ဥပမာ - /users/123 ဆိုတာ သီးသန့် user တစ်ယောက်အတွက် resource ပါ။ /orders ဆိုတာက order အားလုံးရဲ့ collection ပါ။</p>\n</li>\n<li>\n<p><strong>HTTP Verbs (Methods) -</strong> ဒီ resource တွေအပေါ်မှာ အလုပ်လုပ်ဖို့အတွက် standard HTTP method တွေကို သုံးပါတယ်။</p>\n</li>\n</ol>\n<ul>\n<li>\n<p><code dir=\"auto\">GET</code>: Resource တစ်ခုကို ဖတ်ဖို့ (ဥပမာ - GET /users/123 နဲ့ user အချက်အလက်ယူတာ)။</p>\n</li>\n<li>\n<p><code dir=\"auto\">POST</code>: Resource အသစ်တစ်ခု ဖန်တီးဖို့ (ဥပမာ - POST /orders နဲ့ order အသစ်လုပ်တာ)။</p>\n</li>\n<li>\n<p><code dir=\"auto\">PUT</code>: Resource တစ်ခုကို update လုပ်ဖို့ (ဥပမာ - PUT /users/123 နဲ့ user အချက်အလက်ပြင်တာ)။</p>\n</li>\n<li>\n<p><code dir=\"auto\">DELETE</code>: Resource တစ်ခုကို ဖယ်ရှားဖို့ (ဥပမာ - DELETE /users/123)။</p>\n</li>\n</ul>\n<ol start=\"3\">\n<li><strong>Statelessness (အရင် request တွေကို မှတ်မထားခြင်း):</strong> ဒါက အလွန်အရေးကြီးတဲ့ စည်းမျဉ်းတစ်ခုပါ။ Client က ပို့လိုက်တဲ့ request တစ်ခုချင်းစီမှာ server က အလုပ်လုပ်ဖို့လိုအပ်တဲ့ အချက်အလက်အားလုံး ပါဝင်ရပါမယ်။ Server က အဲဒီ client ဆီက အရင်က ပို့ခဲ့တဲ့ request တွေကို ဘာတစ်ခုမှ မမှတ်ထားပါဘူး။</li>\n</ol>\n</li>\n</ul>\n<blockquote>\n<p><strong>အကြွေစေ့ထည့်ပြီး ပစ္စည်းထုတ်တဲ့စက် (Vending Machine) -</strong> REST API က Vending Machine တစ်လုံးနဲ့တူပါတယ်။ သင်က သီးခြားလိပ်စာတစ်ခု (C4) ကိုသွားတယ်၊ လုပ်ဆောင်ချက်တစ်ခုအတွက် ခလုတ် (GET) ကိုနှိပ်တယ်၊ ပြီးတော့ ပစ္စည်းကို ရတယ်။ စက်က သင်ဘယ်သူလဲ၊ အရင်တစ်ခေါက် ဘာဝယ်သွားလဲဆိုတာကို မသိပါဘူး။ အရောင်းအဝယ်တစ်ခုချင်းစီက သီးခြားလွတ်လပ်ပါတယ်။</p>\n</blockquote>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"graphql-data-တောင်းဆိုရာမှာ-ပိုမိုပြောင်းလွယ်ပြင်လွယ်ရှိခြင်း\">GraphQL: Data တောင်းဆိုရာမှာ ပိုမိုပြောင်းလွယ်ပြင်လွယ်ရှိခြင်း</h3><a class=\"sl-anchor-link\" href=\"#graphql-data-တောင်းဆိုရာမှာ-ပိုမိုပြောင်းလွယ်ပြင်လွယ်ရှိခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “GraphQL: Data တောင်းဆိုရာမှာ ပိုမိုပြောင်းလွယ်ပြင်လွယ်ရှိခြင်း”</span></a></div>\n<p><strong>GraphQL</strong> ဆိုတာ Facebook က REST ရဲ့ အကန့်အသတ်တချို့ကို ဖြေရှင်းဖို့ ဒီဇိုင်းဆွဲထားတဲ့ API တွေအတွက် query language အသစ်တစ်ခုပါ။</p>\n<ul>\n<li>\n<p><strong>ဖြေရှင်းပေးတဲ့ ပြဿနာ -</strong>\nREST နဲ့ဆိုရင်၊ သင်က တစ်ခါတလေ data တွေ လိုအပ်တာထက် ပိုပြီးရတာ (over-fetching) ဒါမှမဟုတ် လိုအပ်တာရဖို့ အကြိမ်ကြိမ်တောင်းဆိုရတာ (under-fetching) တွေ ဖြစ်တတ်ပါတယ်။</p>\n</li>\n<li>\n<p><strong>GraphQL ဘယ်လိုအလုပ်လုပ်လဲ -</strong> သူက client ကို request တစ်ခုတည်းနဲ့ သူ အတိအကျလိုအပ်တဲ့ data ကို တောင်းဆိုခွင့်ပေးပါတယ်။</p>\n<ul>\n<li>\n<p><strong>Queries -</strong> Data ဖတ်ဖို့သုံးပါတယ်။ Client က သူလိုချင်တဲ့ field တွေကို အတိအကျသတ်မှတ်ပြီး query ပို့ပါတယ် (ဥပမာ - user တစ်ယောက်ရဲ့ profile တစ်ခုလုံးမဟုတ်ဘဲ၊ name နဲ့ email ကိုပဲ တောင်းတာ)။</p>\n</li>\n<li>\n<p><strong>Mutations -</strong> Data ရေးဖို့သုံးပါတယ် (အသစ်ဖန်တီးခြင်း၊ ပြင်ဆင်ခြင်း၊ ဖျက်ခြင်း)။</p>\n</li>\n<li>\n<p><strong>Subscriptions -</strong> Real-time update တွေအတွက်သုံးပါတယ်၊ server က data ပြောင်းလဲသွားတဲ့အခါ client ဆီကို data “တွန်းပို့” နိုင်ပါတယ်။</p>\n</li>\n</ul>\n</li>\n</ul>\n<blockquote>\n<p><strong>စားသောက်ဆိုင်မှာ မှာစားတာ -</strong> REST က သတ်မှတ်ထားတဲ့ “combo meal” တစ်စုံကို မှာသလိုပါပဲ—သင်က ဘာဂါတစ်ခုတည်းပဲ လိုချင်ရင်တောင်၊ ဘာဂါ၊ အာလူးကြော်၊ အအေး သုံးမျိုးလုံး ရပါတယ်။ GraphQL ကတော့ စားပွဲထိုးကို “ကျွန်တော် ဘာဂါအသားပြား၊ ဒိန်ခဲတစ်ချပ်နဲ့ အပေါ်ဘက်ပေါင်မုန့်ပဲ လိုချင်တယ်၊ sauce နဲ့ အောက်ဘက်ပေါင်မုန့်မလိုဘူး” လို့ ပြောလိုက်သလိုပါပဲ။ သင်က လိုချင်တာကို အတိအကျတောင်းဆိုလို့ ရပါတယ်။</p>\n</blockquote>\n"
    }), createVNode($$ContentImage, {
      src: restvsgraphql,
      alt: "REST vs GRAPHQL"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"grpc-အလွန်မြန်သော-အတွင်းပိုင်းဆက်သွယ်မှုများအတွက်\">gRPC: အလွန်မြန်သော အတွင်းပိုင်းဆက်သွယ်မှုများအတွက်</h3><a class=\"sl-anchor-link\" href=\"#grpc-အလွန်မြန်သော-အတွင်းပိုင်းဆက်သွယ်မှုများအတွက်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “gRPC: အလွန်မြန်သော အတွင်းပိုင်းဆက်သွယ်မှုများအတွက်”</span></a></div>\n<ul>\n<li>\n<p><strong>ဘာလဲ -</strong> Google က ထုတ်လုပ်ထားတဲ့ high-performance communication framework တစ်ခုပါ။</p>\n</li>\n<li>\n<p><strong>ဘယ်အချိန်သုံးမလဲ -</strong> အဓိကအားဖြင့် သင့်ရဲ့ အတွင်းပိုင်း <strong>microservice များအချင်းချင်း ကြား မြန်ဆန်ထိရောက်စွာ ဆက်သွယ်ဖို့အတွက်</strong> သုံးပါတယ်။ Browser တွေ၊ mobile app တွေက ခေါ်မယ့် public API တွေအတွက်တော့ ယေဘုယျအားဖြင့် မသုံးပါဘူး။</p>\n</li>\n<li>\n<p><strong>ဘာကြောင့်မြန်တာလဲ -</strong> သူက JSON လို text-based format အစား၊ <strong>binary format (Protobuf)</strong> ကို သုံးတဲ့အတွက်၊ ပိုသေးငယ်ပြီး process လုပ်ဖို့ ပိုမြန်ပါတယ်။</p>\n</li>\n</ul>"
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

const url = "src/content/docs/software-architecture/communications/synchronous.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/communications/synchronous.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/communications/synchronous.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
