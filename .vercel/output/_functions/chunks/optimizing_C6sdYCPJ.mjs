import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "Optimizing for Core Web Vitals",
  "description": "Optimizing for Core Web Vitals"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "vitals-များ-အပြန်အလှန်-ဆက်စပ်မှု",
    "text": "Vitals များ၏ အပြန်အလှန် ဆက်စပ်မှု"
  }, {
    "depth": 3,
    "slug": "ဦးစားပေး-လုပ်ဆောင်ရမည့်-နည်းဗျူဟာများ",
    "text": "ဦးစားပေး လုပ်ဆောင်ရမည့် နည်းဗျူဟာများ"
  }, {
    "depth": 3,
    "slug": "အဖြစ်များတဲ့-အမှားများ",
    "text": "အဖြစ်များတဲ့ အမှားများ"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>Core Web Vitals တွေက အချင်းချင်း ဆက်စပ်နေတယ်ဆိုတာ နားလည်ပြီး ဒါတွေကို ကောင်းမွန်အောင် လုပ်ဆောင်ဖို့အတွက် ဘယ်လို နည်းဗျူဟာတွေ သုံးရမလဲဆိုတာ သင်ယူဖို့ပါ။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"vitals-များ-အပြန်အလှန်-ဆက်စပ်မှု\">Vitals များ၏ အပြန်အလှန် ဆက်စပ်မှု</h3><a class=\"sl-anchor-link\" href=\"#vitals-များ-အပြန်အလှန်-ဆက်စပ်မှု\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Vitals များ၏ အပြန်အလှန် ဆက်စပ်မှု”</span></a></div>\n<p>Core Web Vital တစ်ခုကို ကောင်းမွန်အောင် လုပ်ဆောင်တာဟာ တခြားတစ်ခုကို ကောင်းတာ ဒါမှမဟုတ် ဆိုးတာမျိုး ဖြစ်စေနိုင်ပါတယ်။</p>\n<ul>\n<li>ဥပမာ: website ကို မြန်အောင်လုပ်ဖို့ JavaScript ကို နောက်မှတင်တာမျိုး (defer) လုပ်ထားရင် INP ကို ကောင်းစေနိုင်ပေမဲ့၊ LCP element (အကြီးဆုံး content) ကို JavaScript နဲ့ ဖန်တီးထားတာဆိုရင် LCP ပေါ်လာတာကို နှေးစေနိုင်ပါတယ်။</li>\n<li>ဥပမာ: ပုံတွေကို lazy-loading တာက LCP ကို ကောင်းစေပြီး website စတင်တက်တဲ့အခါ သုံးတဲ့ data ကို လျှော့ချပေးပါတယ်။ ဒါပေမဲ့ ပုံရဲ့ အရွယ်အစား (dimensions) တွေကို သတ်မှတ်မထားရင် CLS (layout shift) ကို ပိုဆိုးစေနိုင်ပါတယ်။</li>\n</ul>\n<blockquote>\n<p>ဒါကြောင့် သုံးစွဲသူရဲ့ အတွေ့အကြုံ တစ်ခုလုံးကို ထည့်သွင်းစဉ်းစားပြီး ပြည့်စုံတဲ့ နည်းလမ်း တစ်ခု လိုအပ်ပါတယ်။</p>\n</blockquote>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဦးစားပေး-လုပ်ဆောင်ရမည့်-နည်းဗျူဟာများ\">ဦးစားပေး လုပ်ဆောင်ရမည့် နည်းဗျူဟာများ</h3><a class=\"sl-anchor-link\" href=\"#ဦးစားပေး-လုပ်ဆောင်ရမည့်-နည်းဗျူဟာများ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဦးစားပေး လုပ်ဆောင်ရမည့် နည်းဗျူဟာများ”</span></a></div>\n<ul>\n<li>\n<p><strong>အဆိုးဆုံး Vital ကို အရင် ပြင်ပါ။</strong> Field data ကို သုံးပြီး သင့် website ဟာ တကယ့် သုံးစွဲသူတွေအတွက် ဘယ် Core Web Vital မှာ အဆိုးဆုံး ဖြစ်နေလဲဆိုတာ ကြည့်ပါ။ အဲဒီကနေ စတင်ပါ။</p>\n</li>\n<li>\n<p><strong>အရေးကြီးတဲ့ Page တွေကို ဦးစားပေးပါ။</strong> သုံးစွဲသူတွေ အဓိက ကြည့်တဲ့ Page တွေ (ဥပမာ- homepage, product pages, checkout စာမျက်နှာများ) ကို အရင်ဆုံး ကောင်းမွန်အောင် လုပ်ပါ။</p>\n</li>\n<li>\n<p><strong>လုပ်ရလွယ်ကူတဲ့ အရာတွေကို အရင်လုပ်ပါ။</strong> တချို့ Optimizations တွေ (ဥပမာ- ပုံတွေမှာ အရွယ်အစား ထည့်ပေးတာ) ဟာ လုပ်ရတာ လွယ်ကူပြီး CLS အပေါ်မှာ ကြီးမားတဲ့ သက်ရောက်မှု ရှိနိုင်ပါတယ်။</p>\n</li>\n<li>\n<p><strong>တိုင်းတာပါ ပြီးရင် ထပ်မံ မွမ်းမံပြင်ဆင်ပါ။</strong> ပြောင်းလဲမှုတွေ လုပ်ပါ၊ ဒါတွေရဲ့ သက်ရောက်မှုကို တိုင်းတာပါ (lab နဲ့ field နှစ်မျိုးလုံးမှာ ဖြစ်နိုင်ရင်)၊ ပြီးရင် ထပ်မံ ပြင်ဆင်ပါ။</p>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အဖြစ်များတဲ့-အမှားများ\">အဖြစ်များတဲ့ အမှားများ</h3><a class=\"sl-anchor-link\" href=\"#အဖြစ်များတဲ့-အမှားများ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အဖြစ်များတဲ့ အမှားများ”</span></a></div>\n<ul>\n<li>\n<p><strong>Metric တစ်ခုတည်းကို အလွန်အကျွံ ကောင်းအောင် လုပ်ခြင်း။</strong> LCP ကို ကောင်းအောင် လုပ်ရာမှာ INP ဒါမှမဟုတ် CLS ကို ထိခိုက်အောင် မလုပ်ပါနဲ့။</p>\n</li>\n<li>\n<p><strong>Field Data ကို လျစ်လျူရှုခြင်း။</strong> Lab data က အသုံးဝင်ပေမဲ့၊ တကယ့် သုံးစွဲသူ အတွေ့အကြုံကို Field data ကပဲ ပြသပါတယ်။</p>\n</li>\n<li>\n<p><strong>Device/Network မျိုးစုံနဲ့ မစမ်းသပ်ခြင်း။</strong> Performance က မတူညီတဲ့ device နဲ့ network တွေမှာ သိသိသာသာ ကွာခြားနိုင်ပါတယ်။</p>\n</li>\n<li>\n<p><strong>ဆိုးရွားသွားတာကို သတိမပြုမိခြင်း။</strong> စဉ်ဆက်မပြတ် စောင့်ကြည့်မနေရင် Performance က အချိန်ကြာလာတာနဲ့အမျှ ကျဆင်းသွားနိုင်ပါတယ်။</p>\n</li>\n</ul>\n"
    }), createVNode($$Aside, {
      title: "အနှစ်ချုပ်",
      "set:html": "<ul>\n<li>\n<p><strong>Largest Contentful Paint (LCP)</strong> က website စတင်တက်တဲ့ မြန်နှုန်း (အဓိက content ပေါ်လာတဲ့အခါ) ကို တိုင်းတာပါတယ်။ 2.5 second အောက် ဖြစ်သင့်ပါတယ်။</p>\n</li>\n<li>\n<p><strong>Interaction to Next Paint (INP)</strong> က သုံးစွဲသူ website ထဲမှာ ရှိနေစဉ်တစ်လျှောက်လုံး အသုံးပြုမှုတွေအပေါ် website ရဲ့ တုံ့ပြန်မှု မြန်နှုန်းကို တိုင်းတာပါတယ်။ 200 ms အောက် ဖြစ်သင့်ပါတယ်။ (FID က ပထမဆုံး အသုံးပြုမှု နှေးကွေးမှုကို အဓိကထားခဲ့တဲ့ သူ့ရဲ့ ရှေ့ပြေးဖြစ်ပါတယ်)။</p>\n</li>\n<li>\n<p><strong>Cumulative Layout Shift (CLS)</strong> က website ရဲ့ ပုံရိပ်တည်ငြိမ်မှု (content တွေ မမျှော်လင့်ဘဲ ဘယ်လောက်ရွေ့လဲ) ကို တိုင်းတာပါတယ်။ 0.1 အောက် ဖြစ်သင့်ပါတယ်။</p>\n</li>\n<li>\n<p>ဒီ <strong>Core Web Vitals</strong> တွေဟာ အချင်းချင်း ဆက်စပ်နေပါတယ်။ ဒါတွေကို ကောင်းမွန်အောင် လုပ်ဆောင်ဖို့အတွက် ပြီးပြည့်စုံသော နည်းဗျူဟာ တစ်ခု လိုအပ်ပြီး သုံးစွဲသူရဲ့ အတွေ့အကြုံ တစ်ခုလုံးကို ပိုကောင်းအောင် လုပ်ဆောင်ဖို့ ရည်ရွယ်ပါတယ်။ DevTools, PageSpeed Insights, WebPageTest တို့လို Tools တွေဟာ Debugging လုပ်ဖို့အတွက် အရေးကြီးပါတယ်။</p>\n</li>\n</ul>"
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

const url = "src/content/docs/web-performance/core-vitals/optimizing.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/web-performance/core-vitals/optimizing.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/web-performance/core-vitals/optimizing.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
