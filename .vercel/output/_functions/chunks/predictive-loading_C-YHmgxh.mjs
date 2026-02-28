import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import './Content-image_C5QzPmj4.mjs';
import 'clsx';

const frontmatter = {
  "title": "Smarter Loading - Prefetching & Pre-rendering",
  "description": "Smarter Loading - Prefetching & Pre-rendering"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "content-များကို-ကြိုတင်-load-လုပ်ခြင်း",
    "text": "Content များကို ကြိုတင် Load လုပ်ခြင်း"
  }, {
    "depth": 3,
    "slug": "predictive-prefetching-ကြိုတင်ခန့်မှန်းပြီး-data-များ-fetch-ခြင်း",
    "text": "Predictive Prefetching (ကြိုတင်ခန့်မှန်းပြီး Data များ Fetch ခြင်း)"
  }, {
    "depth": 3,
    "slug": "speculation-rules-api",
    "text": "Speculation Rules API"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>Userရဲ့ နောက်လုပ်ဆောင်မည့်အရာကို ကြိုတင်ခန့်မှန်းပြီး၊ လိုအပ်သော resource များကို ကြိုတင် load လုပ်ထားသည့် ခေတ်မီနည်းပညာများကို လေ့လာရန်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"content-များကို-ကြိုတင်-load-လုပ်ခြင်း\">Content များကို ကြိုတင် Load လုပ်ခြင်း</h3><a class=\"sl-anchor-link\" href=\"#content-များကို-ကြိုတင်-load-လုပ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Content များကို ကြိုတင် Load လုပ်ခြင်း”</span></a></div>\n<p>Website ပေါ်တွင် Page တစ်ခုမှတစ်ခုသို့ ကူးပြောင်းခြင်းကို မျက်စိတစ်မှိတ်အတွင်း ဖြစ်သွားသကဲ့သို့ လျင်မြန်အောင် Predictive loading နည်းပညာများနှင့် လုပ်ဆောင်နိုင်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"predictive-prefetching-ကြိုတင်ခန့်မှန်းပြီး-data-များ-fetch-ခြင်း\">Predictive Prefetching (ကြိုတင်ခန့်မှန်းပြီး Data များ Fetch ခြင်း)</h3><a class=\"sl-anchor-link\" href=\"#predictive-prefetching-ကြိုတင်ခန့်မှန်းပြီး-data-များ-fetch-ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Predictive Prefetching (ကြိုတင်ခန့်မှန်းပြီး Data များ Fetch ခြင်း)”</span></a></div>\n<ul>\n<li><strong>ဘာလဲ -</strong> User က နောက်ထပ် ဘယ် link ကို click လုပ်နိုင်ခြေအရှိဆုံးလဲဆိုတာကို  ခန့်မှန်းကာ၊ User က လက်ရှိ Page ကို ဖတ်နေစဉ်မှာပင် နောက် Page အတွက် content များကို နောက်ကွယ်မှ download လုပ်ထားခြင်း ဖြစ်သည်။</li>\n<li><strong>ဘယ်လိုအလုပ်လုပ်လဲ -</strong>\n<ul>\n<li>အသုံးများသော signal တစ်ခုမှာ အသုံးပြုသူက <strong>link တစ်ခုပေါ်တွင် mouse ကို တင်ထားလိုက်ခြင်းသည်</strong> အဲ့ဒီ link ကို click လုပ်နိုင်ခြေရှိကြောင်း အရိပ်အယောင်တစ်ခုဖြစ်သည်။</li>\n<li><strong>Quicklink</strong> ကဲ့သို့သော JavaScript library များက အဲ့လိုအခြေအနေမျိုးကို သိရှိနိုင်ပြီး <strong>Page ကို အလိုအလျောက် prefetch</strong> လုပ်ပေးနိုင်သည်။</li>\n</ul>\n</li>\n<li><strong>ဘာကြောင့်မြန်တာလဲ -</strong> အသုံးပြုသူက ထို link ကို အမှန်တကယ် click လိုက်သည့်အခါ၊ Page သည် <strong>browser ၏ cache ထဲတွင် ကြိုပြီး download လုပ်ပြီးသားဖြစ်နေသောကြောင့်</strong> ချက်ချင်း ပေါ်လာသည်။</li>\n<li><strong>စဉ်းစားရမည့်အချက် -</strong> အကယ်၍ သင် prefetch လုပ်ထားသော စာမျက်နှာကို အသုံးပြုသူက ဝင်မကြည့်ဖြစ်ခဲ့လျှင် သူ၏ data ကို ဖြုန်းတီးရာကျနိုင်သည်။ ဒါပေမယ့် ဒီ tool များက smart ဖြစ်ပြီး၊ များသောအားဖြင့် <strong>connection မြန်ဆန်မှသာ prefetch</strong> လုပ်လေ့ရှိသည်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"speculation-rules-api\">Speculation Rules API</h3><a class=\"sl-anchor-link\" href=\"#speculation-rules-api\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Speculation Rules API”</span></a></div>\n<ul>\n<li><strong>ဘာလဲ -</strong> browser များတွင် တစ်ခါတည်းပါဝင်လာသော API အသစ်တစ်ခုဖြစ်ပြီး၊ developer များအား custom <strong>JavaScript မလိုအပ်ဘဲ</strong> HTML ထဲမှာပင် Page များကို ကြိုတင် render လုပ်ရန် သတ်မှတ်နိုင်သည်။</li>\n<li><strong>ဘယ်လိုအလုပ်လုပ်လဲ -</strong> <code dir=\"auto\">&#x3C;script type=\"speculationrules\"></code> tag ကိုထည့်လိုက်တဲ့ အခါ Page ပေါ်ရှိ ဘယ် link ကိုမဆို User က hover လုပ်သည့်အခါ Browser က Page ကို ကြိုတင် render လုပ်ထားပါသည်။</li>\n<li><strong>Pre-rendering နှင့် Prefetching ကွာခြားချက် -</strong> Pre-rendering သည် prefetching ထက် တစ်ဆင့်ပို၍ ရှေ့ရောက်သည်။ ၎င်းက HTML ကို download လုပ်ရုံသာမက၊ sub-resource အားလုံး (CSS, JS) ကိုပါ download လုပ်ပြီး၊ <strong>Page တစ်ခုလုံးကို နောက်ကွယ်ရှိ tab တစ်ခုတွင် render ပါလုပ်ထားသည်။</strong> အသုံးပြုသူက click လိုက်သည့်အခါ၊ browser က အဲ့ဒီ Page ကို  ပြသလိုက်ရုံသာဖြစ်သည်။</li>\n<li><strong>ဘာကြောင့်မြန်တာလဲ -</strong> ဤနည်းလမ်းက Page ကူးပြောင်းမှုကို “ချက်ချင်း” ဖြစ်စေသည်။</li>\n</ul>"
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

const url = "src/content/docs/web-performance/advanced-techniques/predictive-loading.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/web-performance/advanced-techniques/predictive-loading.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/web-performance/advanced-techniques/predictive-loading.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
