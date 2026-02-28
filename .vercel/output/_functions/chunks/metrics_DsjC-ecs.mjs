import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "အဓိက Performance Metrics များကို နားလည်ခြင်း",
  "description": "အဓိက Performance Metrics များကို နားလည်ခြင်း"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "ဘာတွေကို-တိုင်းတာလဲ-ဘာကြောင့်လဲ",
    "text": "ဘာတွေကို တိုင်းတာလဲ၊ ဘာကြောင့်လဲ"
  }, {
    "depth": 3,
    "slug": "1-time-to-first-byte-ttfb",
    "text": "1. Time to First Byte (TTFB)"
  }, {
    "depth": 3,
    "slug": "2-first-contentful-paint-fcp",
    "text": "2. First Contentful Paint (FCP):"
  }, {
    "depth": 3,
    "slug": "3-largest-contentful-paint-lcp",
    "text": "3. Largest Contentful Paint (LCP)"
  }, {
    "depth": 3,
    "slug": "4-first-input-delay-fid--interaction-to-next-paint-inp",
    "text": "4. First Input Delay (FID) / Interaction to Next Paint (INP)"
  }, {
    "depth": 3,
    "slug": "5-cumulative-layout-shift-cls",
    "text": "5. Cumulative Layout Shift (CLS)"
  }, {
    "depth": 3,
    "slug": "6-time-to-interactive-tti",
    "text": "6. Time to Interactive (TTI)"
  }, {
    "depth": 3,
    "slug": "7-total-blocking-time-tbt",
    "text": "7. Total Blocking Time (TBT)"
  }, {
    "depth": 3,
    "slug": "metrics-တွေက-သုံးစွဲသူရဲ့-ခံစားချက်နဲ့-ဘယ်လို-ဆက်စပ်လဲ",
    "text": "Metrics တွေက သုံးစွဲသူရဲ့ ခံစားချက်နဲ့ ဘယ်လို ဆက်စပ်လဲ"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>Core Web Vitals အပါအဝင် အရေးကြီးတဲ့ web performance metrics တွေနဲ့ ၎င်းတို့က သုံးစွဲသူရဲ့ loading အချိန်အတွင်း အတွေ့အကြုံကို ဘယ်လို ထင်ဟပ်လဲဆိုတာ နားလည်ရန်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"ဘာတွေကို-တိုင်းတာလဲ-ဘာကြောင့်လဲ\">ဘာတွေကို တိုင်းတာလဲ၊ ဘာကြောင့်လဲ</h2><a class=\"sl-anchor-link\" href=\"#ဘာတွေကို-တိုင်းတာလဲ-ဘာကြောင့်လဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘာတွေကို တိုင်းတာလဲ၊ ဘာကြောင့်လဲ”</span></a></div>\n<p>loading ဖြစ်နေတဲ့ အချိန်အတွင်း အမျိုးမျိုးသော အပိုင်းတွေကို မတူညီတဲ့ metrics တွေနဲ့ တိုင်းတာပါတယ်။ တစ်ခုတည်းနဲ့ အားလုံးကို မပြောနိုင်ပါဘူး။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"1-time-to-first-byte-ttfb\">1. Time to First Byte (TTFB)</h3><a class=\"sl-anchor-link\" href=\"#1-time-to-first-byte-ttfb\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “1. Time to First Byte (TTFB)”</span></a></div>\n<ul>\n<li>\n<p>User က website ကို ပထမဆုံး ဖွင့်လိုက်တဲ့အချိန် (ဥပမာ- link ကို နှိပ်တာ) မှာ server က ပေးတဲ့ ပထမဆုံး အချက်အလက် (HTML response ရဲ့ ပထမဆုံး byte) ကို လက်ခံရရှိတဲ့အချိန်အထိ ကြာချိန်ကို တိုင်းတာပါတယ်။</p>\n</li>\n<li>\n<p><strong>ဘာကြောင့်လဲ။</strong> ဒါက server ရဲ့ Response မြန်နှုန်းနဲ့ network နှေးကွေးမှုကို ပြပါတယ်။ TTFB နှေးရင် တခြားအရာအားလုံးလည်း နှေးကုန်မှာပါ။</p>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"2-first-contentful-paint-fcp\">2. First Contentful Paint (FCP):</h3><a class=\"sl-anchor-link\" href=\"#2-first-contentful-paint-fcp\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “2. First Contentful Paint (FCP):”</span></a></div>\n<ul>\n<li>website page ပေါ်မှာ စာသား၊ ပုံ၊ ဒါမှမဟုတ် တခြားအရာတွေရဲ့ ပထမဆုံး အပိုင်းအစလေး စတင်ပေါ်လာတဲ့ အချိန်ကို ပြောတာပါ။</li>\n<li><strong>ဘာကြောင့်လဲ။</strong> website စတက်နေပြီဆိုတာ User ကို ပထမဆုံး ပြသတဲ့ အချိန်ဖြစ်ပါတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"3-largest-contentful-paint-lcp\">3. Largest Contentful Paint (LCP)</h3><a class=\"sl-anchor-link\" href=\"#3-largest-contentful-paint-lcp\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “3. Largest Contentful Paint (LCP)”</span></a></div>\n<ul>\n<li>website page ပေါ်လာတဲ့ အချိန်မှာ အကြီးဆုံး Image ဒါမှမဟုတ် size ကြီးတဲ့ Texts တွေ ပေါ်လာတဲ့ အချိန်ကို တိုင်းတာပါတယ်။</li>\n<li><strong>ဘာကြောင့်လဲ။</strong> website ရဲ့ အဓိက အကြောင်းအရာတွေ ပေါ်လာတဲ့အချိန်ဖြစ်ပါတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"4-first-input-delay-fid--interaction-to-next-paint-inp\">4. First Input Delay (FID) / Interaction to Next Paint (INP)</h3><a class=\"sl-anchor-link\" href=\"#4-first-input-delay-fid--interaction-to-next-paint-inp\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “4. First Input Delay (FID) / Interaction to Next Paint (INP)”</span></a></div>\n<ul>\n<li>\n<p><strong>FID:</strong> User က website ကို ပထမဆုံး စတင်အသုံးပြုတဲ့အချိန် (ဥပမာ- ခလုတ်နှိပ်တာ) မှာ browser က အဲဒီ Action ကို တကယ် Respone လုပ်နိုင်တဲ့အချိန်အထိ ကြာချိန်ကို တိုင်းတာပါတယ်။ (နောက်ပိုင်း INP ဟု အစားထိုးသုံးစွဲ ကြပါတယ်)</p>\n</li>\n<li>\n<p><strong>INP:</strong> User website ထဲမှာ ရှိနေစဉ် တစ်လျှောက်လုံး အသုံးပြုမှုတွေ (နှိပ်တာ၊ ပွတ်ဆွဲတာ၊ keyboard သုံးတာ) အပေါ် website ရဲ့ ဘယ်လောက် မြန်မြန် Response လုပ်နိုင်တာကို တိုင်းတာပါတယ်။</p>\n</li>\n<li>\n<p><strong>ဘာကြောင့်လဲ။</strong> ဒါက website က User Action တစ်ခုလုပ်တဲ့အခါ ဘယ်လောက် မြန်မြန် Response ပေးနိုင်လဲဆိုတာကို ပြပါတယ်။</p>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"5-cumulative-layout-shift-cls\">5. Cumulative Layout Shift (CLS)</h3><a class=\"sl-anchor-link\" href=\"#5-cumulative-layout-shift-cls\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “5. Cumulative Layout Shift (CLS)”</span></a></div>\n<ul>\n<li>website တက်နေစဉ်အတွင်း ရုတ်တရက် အရာဝတ္ထုတွေ နေရာရွေ့သွားတာ (စာတွေ၊ ပုံတွေ ခုန်သွားတာ) တွေ အားလုံးရဲ့ စုစုပေါင်းကို တိုင်းတာပါတယ်။ Layout shift ဆိုတာ မြင်နေရတဲ့ အရာတစ်ခုက နေရာရွေ့သွားတာကို ပြောတာပါ။</li>\n<li><strong>ဘာကြောင့်လဲ။</strong> ဒါက website ရဲ့ တည်ငြိမ်မှု ကို တိုင်းတာပါတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"6-time-to-interactive-tti\">6. Time to Interactive (TTI)</h3><a class=\"sl-anchor-link\" href=\"#6-time-to-interactive-tti\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “6. Time to Interactive (TTI)”</span></a></div>\n<ul>\n<li>\n<p>website တစ်ခုလုံး အပြည့်အဝ အသုံးပြုနိုင်တဲ့အချိန်အထိ ဘယ်လောက်ကြာလဲဆိုတာကို တိုင်းတာပါတယ်။ ဒါဆို website က အသုံးဝင်တဲ့ အကြောင်းအရာတွေ ပြသနေပြီ (FCP)၊ အများစုသော ခလုတ်တွေကို နှိပ်လို့ရနေပြီ၊ ပြီးတော့ User အသုံးပြုတာကို (Response)တုံ့ပြန်နိုင်ပြီလို့ ဆိုလိုပါတယ်။</p>\n</li>\n<li>\n<p><strong>ဘာကြောင့်လဲ။</strong> ဒါက website က User အသုံးပြုဖို့ တကယ် အဆင်သင့် ဖြစ်ပြီ ဆိုတာကို ညွှန်ပြပါတယ်။</p>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"7-total-blocking-time-tbt\">7. Total Blocking Time (TBT)</h3><a class=\"sl-anchor-link\" href=\"#7-total-blocking-time-tbt\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “7. Total Blocking Time (TBT)”</span></a></div>\n<ul>\n<li>\n<p>FCP နဲ့ TTI ကြားမှာ website ရဲ့ အဓိက main thread ကို ပိတ်ဆို့ခံထားရတဲ့ စုစုပေါင်းအချိန် ကို တိုင်းတာပါတယ်။ အဲ့ဒီ အချိန်အတွင်း User အသုံးပြုတာကို တုံ့ပြန်နိုင်ခြင်း မရှိပါဘူး။</p>\n</li>\n<li>\n<p><strong>ဘာကြောင့်လဲ။</strong> website က အပြည့်အဝ အသုံးပြုနိုင်တဲ့အထိ User က ဘယ်လောက်ကြာကြာ စောင့်နေရလဲဆိုတာကို တိုင်းတာဖို့ ကူညီပါတယ်။ ဒါဟာ FID/INP အတွက် ကောင်းမွန်တဲ့ တိုင်းတာချက်တစ်ခုလည်း ဖြစ်ပါတယ်။</p>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"metrics-တွေက-သုံးစွဲသူရဲ့-ခံစားချက်နဲ့-ဘယ်လို-ဆက်စပ်လဲ\">Metrics တွေက သုံးစွဲသူရဲ့ ခံစားချက်နဲ့ ဘယ်လို ဆက်စပ်လဲ</h3><a class=\"sl-anchor-link\" href=\"#metrics-တွေက-သုံးစွဲသူရဲ့-ခံစားချက်နဲ့-ဘယ်လို-ဆက်စပ်လဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Metrics တွေက သုံးစွဲသူရဲ့ ခံစားချက်နဲ့ ဘယ်လို ဆက်စပ်လဲ”</span></a></div>\n<p>Metric တစ်ခုချင်းစီက website ဖွင့်တဲ့အချိန်အတွင်း ဖြစ်ပေါ်နေတဲ့အဆင့်တွေအကြောင်း ပြောပြပေးပါတယ်။</p>\n<ul>\n<li><strong>FCP</strong> – User က တစ်ခုခုကို စမြင်ရပြီ။</li>\n<li><strong>LCP</strong> – အဓိက content ကို မြင်နိုင်ပြီ။</li>\n<li><strong>FID/INP, TTI</strong> – သုံးစွဲသူက နှေးကွေးမှုမရှိဘဲ interact လုပ်နိုင်ပြီလား?</li>\n<li><strong>CLS, overall smoothness</strong> – ခံစားချက်က တည်ငြိမ်ပြီး ကောင်းမွန်လား?</li>\n</ul>"
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

const url = "src/content/docs/web-performance/measuring-performance/metrics.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/web-performance/measuring-performance/metrics.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/web-performance/measuring-performance/metrics.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
