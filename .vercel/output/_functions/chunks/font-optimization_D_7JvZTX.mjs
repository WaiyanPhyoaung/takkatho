import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "Font Optimization",
  "description": "Font Optimization"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "web-fonts-တွေကြောင့်-ဖြစ်တတ်တဲ့-ပြဿနာများ",
    "text": "Web Fonts တွေကြောင့် ဖြစ်တတ်တဲ့ ပြဿနာများ"
  }, {
    "depth": 3,
    "slug": "fonts-တွေကို-optimize-လုပ်ဖို့-နည်းလမ်းများ",
    "text": "Fonts တွေကို Optimize လုပ်ဖို့ နည်းလမ်းများ"
  }, {
    "depth": 4,
    "slug": "ခေတ်မီ-font-formats-တွေကို-သုံးပါ",
    "text": "ခေတ်မီ Font Formats တွေကို သုံးပါ။"
  }, {
    "depth": 4,
    "slug": "font-display-နဲ့-fonts-ပေါ်လာပုံကို-ထိန်းချုပ်ပါ",
    "text": "font-display နဲ့ fonts ပေါ်လာပုံကို ထိန်းချုပ်ပါ။"
  }, {
    "depth": 3,
    "slug": "self-hosting-vs-third-party-font-services-eg-google-fonts",
    "text": "Self-Hosting vs Third-Party Font Services (e.g., Google Fonts):"
  }, {
    "depth": 3,
    "slug": "font-ကို-လိုအပ်သလောက်ပဲ-သုံးပါ-subsetting-fonts",
    "text": "font ကို လိုအပ်သလောက်ပဲ သုံးပါ (Subsetting Fonts)။"
  }, {
    "depth": 3,
    "slug": "အရေးကြီးတဲ့-fonts-တွေကို-preload-လုပ််ပါ",
    "text": "အရေးကြီးတဲ့ fonts တွေကို preload လုပ််ပါ။"
  }, {
    "depth": 3,
    "slug": "font-weights-အရမ်းများတာကို-ရှောင်ပါ",
    "text": "Font Weights အရမ်းများတာကို ရှောင်ပါ။"
  }];
}
const sourceTags = `
<video controls width="640" height="360">
  <source src="movie.webm" type="video/webm">
  <source src="movie.mp4" type="video/mp4">
  Sorry, your browser doesn't support embedded videos.
</video>
`;
const sizes = `
<img src="small.jpg"
     srcset="medium.jpg 1000w, large.jpg 2000w"
     sizes="(max-width: 600px) 100vw, 50vw"
     alt="A descriptive alt text.">
`;
const picture = `
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="A descriptive alt text.">
</picture>
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>LCP, CLS နဲ့ rendering speed ကို  မထိခိုက်စေဘဲ web fonts တွေကို ဘယ်လို optimize လုပ်ရမလဲဆိုတာ လေ့လာရပါမယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"web-fonts-တွေကြောင့်-ဖြစ်တတ်တဲ့-ပြဿနာများ\">Web Fonts တွေကြောင့် ဖြစ်တတ်တဲ့ ပြဿနာများ</h3><a class=\"sl-anchor-link\" href=\"#web-fonts-တွေကြောင့်-ဖြစ်တတ်တဲ့-ပြဿနာများ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Web Fonts တွေကြောင့် ဖြစ်တတ်တဲ့ ပြဿနာများ”</span></a></div>\n<p>ကိုယ်ပိုင် Web fonts တွေက website ရဲ့ ဒီဇိုင်းကို ပိုကောင်းစေပေမဲ့၊ ကောင်းကောင်း မကိုင်တွယ်တတ်ရင် အောက်ပါ ပြဿနာတွေ ဖြစ်စေနိုင်ပါတယ်။</p>\n<ul>\n<li>\n<p><strong>စာသား မမြင်ရဘဲ ခဏတာ ပျောက်နေခြင်း(FOIT):</strong> font load မလုပ်မချင်း စာလုံးတွေ ပျောက်နေတာမျိုး။</p>\n</li>\n<li>\n<p><strong>စာလုံးပုံစံပြောင်းပြီးမှ ပေါ်လာတာ (FOUT):</strong> စာလုံးတွေက fallback font နဲ့ အရင်ပေါ်လာပြီးမှ တကယ်သုံးတဲ့ font နဲ့ ပြောင်းသွားတာမျိုး။ ဒါက ရုတ်တရက် ပြောင်းလဲသွားလို့ ကြည့်ရတာ အဆင်မပြေနိုင်ပါဘူး။</p>\n</li>\n<li>\n<p><strong>LCP ကိုပိုကြာစေတာ:</strong> font တွေ load ပြီးတာကို စောင့်နေရရင် website ပေါ်လာတာ နှေးစေနိုင်ပါတယ်။</p>\n</li>\n<li>\n<p><strong>CLS ဖြစ်စေတာ:</strong> font ပြောင်းလဲမှုကြောင့် website ရဲ့ Content များ သိသိသာသာ ရွေ့သွားတာမျိုး။</p>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"fonts-တွေကို-optimize-လုပ်ဖို့-နည်းလမ်းများ\">Fonts တွေကို Optimize လုပ်ဖို့ နည်းလမ်းများ</h3><a class=\"sl-anchor-link\" href=\"#fonts-တွေကို-optimize-လုပ်ဖို့-နည်းလမ်းများ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Fonts တွေကို Optimize လုပ်ဖို့ နည်းလမ်းများ”</span></a></div>\n<ul>\n<li>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"ခေတ်မီ-font-formats-တွေကို-သုံးပါ\">ခေတ်မီ <strong>Font Formats</strong> တွေကို သုံးပါ။</h4><a class=\"sl-anchor-link\" href=\"#ခေတ်မီ-font-formats-တွေကို-သုံးပါ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ခေတ်မီ Font Formats တွေကို သုံးပါ။”</span></a></div>\n<ul>\n<li><strong>WOFF2</strong> က fonts တွေကို အကောင်းဆုံး ချုံ့ပေးနိုင်ပြီး အခုခေတ် browser အများစုကလည်း ပံ့ပိုးပါတယ်။ ဒါကိုပဲ အဓိကထား သုံးသင့်ပါတယ်။</li>\n<li>လိုအပ်ရင် old browser တွေအတွက် WOFF ကို fallback အဖြစ် အစားထိုး ထည့်ပေးထားနိုင်ပါတယ်။</li>\n</ul>\n</li>\n<li>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"font-display-နဲ့-fonts-ပေါ်လာပုံကို-ထိန်းချုပ်ပါ\"><code dir=\"auto\">font-display</code> နဲ့ fonts ပေါ်လာပုံကို ထိန်းချုပ်ပါ။</h4><a class=\"sl-anchor-link\" href=\"#font-display-နဲ့-fonts-ပေါ်လာပုံကို-ထိန်းချုပ်ပါ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “font-display နဲ့ fonts ပေါ်လာပုံကို ထိန်းချုပ်ပါ။”</span></a></div>\n<ul>\n<li><code dir=\"auto\">font-display</code> က fonts တွေကို ဘယ်အချိန် ဘယ်လို ပြရမယ်ဆိုတာ ပြောပြပါတယ်။</li>\n<li><code dir=\"auto\">auto</code>: Browser က သူ့ဘာသူ font ကို load လုပ်ပါတယ်။ browser တစ်ခုနဲ့ တစ်ခု နည်းနည်း ကွာနိုင်ပေမဲ့၊ များသောအားဖြင့် block လိုပဲ အလုပ်လုပ်ပါတယ်။</li>\n<li><code dir=\"auto\">block</code>: စာလုံးတွေကို မပေါ်စေဘဲ block ဖြစ်နေစေပြီး (3 seconds) လောက်နေမှ တကယ်သုံးထားတဲ့ font ကို ပြောင်းပါတယ်။ FOIT ဖြစ်စေနိုင်ပါတယ်။</li>\n<li><code dir=\"auto\">swap</code>: default system font ကို ချက်ချင်းပြသထားပြီး မှ တကယ်သုံးထားတဲ့ font load လုပ်ပြီးတဲ့အချိန်ကျ ပြောင်းပေးပါတယ်။ Contents တွေ ချက်ချင်းမြင်ရတယ်ဆိုပေမယ့် fonts နှစ်ခု size တွေကွာရင် CLS ဖြစ်စေနိုင်ပါတယ်။</li>\n<li><code dir=\"auto\">fallback</code>: တကယ်သုံးထားတဲ့ font load လုပ်တာကို အချိန်ခဏ စောင့်ပါတယ်။ အဲ့ဒီ အချိန်အတွင်း အဆင်သင့် မဖြစ်သေးရင် fallback font ကိုပဲ သုံးပါတယ်။</li>\n<li><code dir=\"auto\">optional</code>: font ချက်ချင်း အဆင်သင့် မဖြစ်ရင် fallback font ကိုပဲ သုံးပါတယ်။</li>\n</ul>\n</li>\n</ul>\n<blockquote>\n<p>အကြံပြုချက်: <code dir=\"auto\">font-display: swap;</code> ကို သုံးသင့်ပါတယ်။ ဒါက စာလုံးကို မြန်မြန် ပေါ်စေပြီး စိတ်ကြိုက်ဖောင့်နဲ့ ပြောင်းတာကို balance ဖြစ်စေပါတယ်။ ဒါပေမဲ့ CLS အပေါ် ဘယ်လို သက်ရောက်လဲဆိုတာ စစ်ဆေးသင့်ပါတယ်။</p>\n</blockquote>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"self-hosting-vs-third-party-font-services-eg-google-fonts\">Self-Hosting vs Third-Party Font Services (e.g., Google Fonts):</h3><a class=\"sl-anchor-link\" href=\"#self-hosting-vs-third-party-font-services-eg-google-fonts\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Self-Hosting vs Third-Party Font Services (e.g., Google Fonts):”</span></a></div>\n<ul>\n<li>\n<p><strong>Self-Hosting:</strong> font files တွေကို download လုပ်ပြီး ကိုယ့် server ကနေ တင်တာ။</p>\n<ul>\n<li><strong>pros:</strong> Cache ကို အပြည့်အဝ ထိန်းချုပ်နိုင်တယ်။ တခြားဝန်ဆောင်မှုတွေပေါ် မမှီခိုရဘူး။</li>\n<li><strong>cons:</strong> ကိုယ်တိုင် setup နဲ့ configure လုပ်ရတာတွေ ရှိတယ်။</li>\n</ul>\n</li>\n<li>\n<p><strong>Third-Party Services:</strong> Google Fonts လို ဝန်ဆောင်မှုတွေက ပေးတဲ့ CSS ဖိုင်တွေကို website မှာ ချိတ်ဆက်တာ။</p>\n<ul>\n<li><strong>pros:</strong> လုပ်ရလွယ်ကူတယ်။ သုံးစွဲသူတွေရဲ့ browser တွေမှာ ဖောင့်တွေ ရှိပြီးသား ဖြစ်တတ်တယ်။ optimized ဖြစ်အောင် လုပ်ထားပေးတယ်။</li>\n<li><strong>cons:</strong> တခြား service တစ်ခုကို ထပ်ခေါ်ရတာ၊ တစ်ခါတစ်လေ privacy ကိစ္စတွေ စဉ်းစားရနိုင်တယ်။\n(Google Fonts ကို သုံးရင် font-display (ဥပမာ- &#x26;display=swap ကို URL မှာ ထည့်တာ) ကို သေချာ ထည့်ပေးပါ။)</li>\n</ul>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"font-ကို-လိုအပ်သလောက်ပဲ-သုံးပါ-subsetting-fonts\">font ကို လိုအပ်သလောက်ပဲ သုံးပါ (Subsetting Fonts)။</h3><a class=\"sl-anchor-link\" href=\"#font-ကို-လိုအပ်သလောက်ပဲ-သုံးပါ-subsetting-fonts\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “font ကို လိုအပ်သလောက်ပဲ သုံးပါ (Subsetting Fonts)။”</span></a></div>\n<ul>\n<li>font file တစ်ခုလုံးကနေ တကယ်လိုအပ်တဲ့ စာလုံးတွေကိုပဲ ထည့်သွင်းပါ။ ဒါက ဖိုင်အရွယ်အစားကို အများကြီး လျှော့ချနိုင်ပါတယ်။ အထူးသဖြင့် စာလုံးအများကြီးပါတဲ့ ဘာသာစကားတွေ (ဥပမာ- တရုတ်၊ ဂျပန်၊ ကိုရီးယား) နဲ့ icon fonts တွေအတွက် အရေးကြီးပါတယ်။</li>\n<li>glyphhanger လို tools တွေက ကူညီနိုင်ပါတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အရေးကြီးတဲ့-fonts-တွေကို-preload-လုပ််ပါ\">အရေးကြီးတဲ့ fonts တွေကို preload လုပ််ပါ။</h3><a class=\"sl-anchor-link\" href=\"#အရေးကြီးတဲ့-fonts-တွေကို-preload-လုပ််ပါ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အရေးကြီးတဲ့ fonts တွေကို preload လုပ််ပါ။”</span></a></div>\n<ul>\n<li>Website ရဲ့ အစောပိုင်း content (ဥပမာ- အပေါ်ဆုံး စာသား) တွေမှာ သုံးထားတဲ့ အဓိက font ဆိုရင် <code dir=\"auto\">&#x3C;link rel=\"preload\"></code> ကို သုံးပြီး browser ကို ပိုမြန်မြန် download လုပ်ဖို့ ပြောနိုင်ပါတယ်။</li>\n<li>ဥပမာ: <code dir=\"auto\">&#x3C;link rel=\"preload\" href=\"/fonts/myfont.woff2\" as=\"font\" type=\"font/woff2\" crossorigin></code></li>\n<li>သတိထားပါ။ အရမ်းအများကြီး preload လုပ်ရင် တခြားအရေးကြီးတဲ့ အရာတွေကို နှေးစေနိုင်ပါတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"font-weights-အရမ်းများတာကို-ရှောင်ပါ\">Font Weights အရမ်းများတာကို ရှောင်ပါ။</h3><a class=\"sl-anchor-link\" href=\"#font-weights-အရမ်းများတာကို-ရှောင်ပါ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Font Weights အရမ်းများတာကို ရှောင်ပါ။”</span></a></div>\n<ul>\n<li>Font ရဲ့ ပုံစံတစ်ခုချင်းစီ (ဥပမာ- normal, bold, italic) ဟာ သီးခြား ဖိုင်တစ်ခုစီ ဖြစ်ပါတယ်။ ဒါကြောင့် တကယ်သုံးတဲ့ font file ကိုပဲ တင်ပါ။</li>\n</ul>\n"
    }), createVNode($$Aside, {
      title: "အနှစ်ချုပ်",
      "set:html": "<ul>\n<li>Images တွေ၊ ဗီဒီယိုတွေနဲ့ fonts တွေလို website အစိတ်အပိုင်းတွေကို ကောင်းအောင် လုပ်ဆောင်တာဟာ website performance အတွက် အရမ်း အရေးကြီးပါတယ်။</li>\n<li>ပုံတွေအတွက်၊ မှန်ကန်တဲ့ Format ကို ရွေးချယ်ပါ (WebP/AVIF က ကောင်းပါတယ်)၊ compress လုပ်ပါ၊ screen size နဲ့ ကိုက်ညီအောင် ပြင်ပါ (srcset, <code dir=\"auto\">&#x3C;picture></code>)၊ ပြီးတော့ viewport မှာ မမြင်ရသေးတဲ့ ပုံတွေကို lazy load လုပ်ပါ။</li>\n<li>ဗီဒီယိုတွေအတွက်၊ ထိရောက်တဲ့ Format တွေ သုံးပါ၊ compress လုပ်ပါ၊ preview ပုံတွေ ထည့်ပါ၊ lazy load လုပ်ပါ၊ ပြီးတော့ ဗီဒီယိုရှည်တွေအတွက် internet မြန်နှုန်းပေါ်မူတည်ပြီး အရည်အသွေးပြောင်းတဲ့စနစ် (adaptive streaming) ကို သုံးပါ။</li>\n<li>fonts တွေအတွက်၊ WOFF2 ကို သုံးပါ၊ font-display နဲ့ fonts ပေါ်လာပုံကို ထိန်းချုပ်ပါ၊ လိုအပ်သလောက်ပဲ font ကိုပဲ load လုပ်ပါ၊ ပြီးတော့ အရေးကြီးတဲ့ fonts တွေကိုသာ preload လုပ်ပါ။ font variants (weights &#x26; styles) တွေကိုလဲ သတိထားပါ။</li>\n</ul>"
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

const url = "src/content/docs/web-performance/image-and-asset/font-optimization.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/web-performance/image-and-asset/font-optimization.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/web-performance/image-and-asset/font-optimization.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, picture, sizes, sourceTags, url };
