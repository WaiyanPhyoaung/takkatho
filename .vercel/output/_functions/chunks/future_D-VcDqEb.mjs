import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import './Content-image_C5QzPmj4.mjs';
import 'clsx';

const frontmatter = {
  "title": "Web Performance ၏ အနာဂတ်",
  "description": "Web Performance ၏ အနာဂတ်"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "performance-သည်-အမြဲတမ်းတိုးတက်ပြောင်းလဲနေသည်",
    "text": "Performance သည် အမြဲတမ်းတိုးတက်ပြောင်းလဲနေသည်"
  }, {
    "depth": 3,
    "slug": "နောက်ဆုံးပေါ်အချက်အလက်များအတွက်-လေ့လာစရာနေရာများ",
    "text": "နောက်ဆုံးပေါ်အချက်အလက်များအတွက် လေ့လာစရာနေရာများ"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>အမြဲတမ်းပြောင်းလဲတိုးတက်နေသော Web Performance အခြေအနေကို သုံးသပ်ရန်နှင့် အနာဂတ်လမ်းကြောင်းများအတွက် မည်သည့်နေရာတွင် လေ့လာရမည်ကို သိရှိရန်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"performance-သည်-အမြဲတမ်းတိုးတက်ပြောင်းလဲနေသည်\">Performance သည် အမြဲတမ်းတိုးတက်ပြောင်းလဲနေသည်</h3><a class=\"sl-anchor-link\" href=\"#performance-သည်-အမြဲတမ်းတိုးတက်ပြောင်းလဲနေသည်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Performance သည် အမြဲတမ်းတိုးတက်ပြောင်းလဲနေသည်”</span></a></div>\n<p>Web လောကသည် အဆက်မပြတ်ပြောင်းလဲနေသကဲ့သို့၊ ကျွန်ုပ်တို့ performance ကို တိုင်းတာပုံနှင့် ကောင်းအောင်ပြုလုပ်ပုံ နည်းလမ်းများလည်း ပြောင်းလဲနေပါသည်။</p>\n<blockquote>\n<p>ယနေ့ <strong>အကောင်းဆုံး</strong> ဟု သတ်မှတ်ထားသောအရာကို မနက်ဖြန်တွင် <strong>ပိုကောင်းသောအရာတစ်ခုက အစားထိုး</strong>သွားနိုင်ပါသည်။</p>\n</blockquote>\n<ul>\n<li>\n<p><strong>ပေါ်ထွက်လာသော Metric အသစ်များနှင့် API များ -</strong> Google နှင့် အခြား browser များသည် user experience ကို <strong>ပိုမိုကောင်းမွန်စွာ တိုင်းတာနိုင်မည့် နည်းလမ်းသစ်များ</strong>ကို အမြဲတမ်းသုတေသနပြုလျက်ရှိသည်။ Metric အသစ်များ ပေါ်ပေါက်လာနိုင်ပြီး၊ Core Web Vitals များလည်း ပြောင်းလဲတိုးတက်နိုင်သည် (FID ကို INP ဖြင့် အစားထိုးခဲ့သကဲ့သို့)။ ထိုကဲ့သို့ ပြောင်းလဲမှုများကို အမြဲသတိပြုနေရန် အရေးကြီးသည်။</p>\n</li>\n<li>\n<p><strong>Performance နယ်ပယ်တွင် AI နှင့် Machine Learning -</strong> အနာဂတ်တွင် <strong>AI ကိုအသုံးပြုသည့် tool များ</strong> ပိုပြီးပါဝင်လာနိုင်သည် - <code dir=\"auto\">ဥပမာအားဖြင့်၊ prefetching ပြုလုပ်ရန် user ၏ အပြုအမူကို ပိုမိုစမတ်ကျစွာ ခန့်မှန်းပေးခြင်း၊ content ကိုကြည့်၍ ပုံများ၏ compression ကို အလိုအလျောက် optimize လုပ်ပေးခြင်း၊ သို့မဟုတ် performance ပိုကောင်းစေရန် code ပြင်ဆင်ရေးသားမှုများကို အကြံပြုပေးခြင်း</code>တို့ ဖြစ်သည်။</p>\n</li>\n<li>\n<p><strong>မပြောင်းလဲသော အဓိကနိယာမ -</strong> နည်းပညာ မည်မျှပင်ပြောင်းလဲပါစေ၊ အဓိကရည်မှန်းချက်မှာ အတူတူပင်ဖြစ်သည် - <strong>အသုံးပြုသူထံသို့ တန်ဖိုးရှိသောအရာကို တတ်နိုင်သမျှ မြန်မြန်ဆန်ဆန်နှင့် ချောချောမွေ့မွေ့ ပို့ဆောင်ပေးရန်</strong> ဖြစ်သည်။ “Performance-first mindset” (ဆုံးဖြတ်ချက်တိုင်း၏ performance သက်ရောက်မှုကို ထည့်သွင်းစဉ်းစားသည့် အလေ့အကျင့်) သည် အမြဲတမ်း အရေးပါနေမည်ဖြစ်သည်။</p>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"နောက်ဆုံးပေါ်အချက်အလက်များအတွက်-လေ့လာစရာနေရာများ\">နောက်ဆုံးပေါ်အချက်အလက်များအတွက် လေ့လာစရာနေရာများ</h3><a class=\"sl-anchor-link\" href=\"#နောက်ဆုံးပေါ်အချက်အလက်များအတွက်-လေ့လာစရာနေရာများ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “နောက်ဆုံးပေါ်အချက်အလက်များအတွက် လေ့လာစရာနေရာများ”</span></a></div>\n<ul>\n<li><strong>web.dev -</strong> ခေတ်မီ web development အတွက် Google ၏ တရားဝင် resource ဖြစ်ပြီး၊ performance ဆိုင်ရာ ဆောင်းပါးများနှင့် Updates များစွာ ပါဝင်သည်။</li>\n<li><strong>Chrome for Developers YouTube Channel -</strong> performance feature အသစ်များနှင့် metric များအကြောင်း ရှင်းပြထားသော video များ မကြာခဏ တင်ဆက်လေ့ရှိသည်။</li>\n</ul>\n"
    }), createVNode($$Aside, {
      title: "အနှစ်ချုပ်",
      "set:html": "<ul>\n<li>Islands ကဲ့သို့သော အဆင့်မြင့် architecture များနှင့် Partial Hydration ကဲ့သို့သော နည်းပညာများသည် traditional client-side rendering ၏ JavaScript ဝန်ထုပ်ဝန်ပိုးမရှိဘဲ အလွန် interactive ဖြစ််ရန် ရည်ရွယ်သည်။</li>\n<li>Edge Computing က server logic ကို အသုံးပြုသူနှင့် ပိုမိုနီးကပ်စေပြီး အလွန်မြန်ဆန်သော dynamic site များ ဖန်တီးပေးသည်။</li>\n<li>Predictive loading နည်းပညာများ (Speculation Rules API ကဲ့သို့) က နောက်လာမည့် Page ကူးပြောင်းမှုများကို ချက်ချင်းဖြစ်သွားသကဲ့သို့ ခံစားရစေသည်။</li>\n<li>အရေးအကြီးဆုံးကျွမ်းကျင်မှုမှာ “performance-first mindset” ကို ထိန်းသိမ်းထားခြင်း၊ အဆက်မပြတ်သင်ယူခြင်း၊ နှင့် တိုင်းတာခြင်းနှင့် optimize လုပ်ခြင်းဆိုင်ရာ နိယာမများကို သင်၏အလုပ်တစ်လျှောက်လုံးတွင် အသုံးချခြင်းဖြစ်သည်။</li>\n</ul>"
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

const url = "src/content/docs/web-performance/advanced-techniques/future.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/web-performance/advanced-techniques/future.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/web-performance/advanced-techniques/future.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
