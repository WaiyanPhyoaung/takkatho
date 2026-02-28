import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const cdnCover = new Proxy({"src":"/_astro/cdn_cover.iYBF2PVS.png","width":800,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/web-performance/cdn_cover.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Content Delivery Network(CDN)",
  "description": "Content Delivery Network(CDN)"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "cdn-ဆိုတာဘာလဲ-သင့်-site-ကို-အသုံးပြုသူတွေနဲ့-ပိုနီးစပ်သွားစေခြင်း",
    "text": "CDN ဆိုတာဘာလဲ? သင့် Site ကို အသုံးပြုသူတွေနဲ့ ပိုနီးစပ်သွားစေခြင်း။"
  }, {
    "depth": 3,
    "slug": "cdn-အသုံးပြုခြင်း-အဓိကအကျိုးကျေးဇူးများ",
    "text": "CDN အသုံးပြုခြင်း၏ အဓိကအကျိုးကျေးဇူးများ"
  }, {
    "depth": 4,
    "slug": "1-latency-နည်းပါးခြင်း-load-time-ပိုမြန်ခြင်း",
    "text": "1. Latency နည်းပါးခြင်း (Load Time ပိုမြန်ခြင်း):"
  }, {
    "depth": 4,
    "slug": "2-asset-caching-ပိုကောင်းပြီး-ပင်မ-server-ဝန်ပေါ့စေခြင်း",
    "text": "2. Asset Caching ပိုကောင်းပြီး ပင်မ Server ဝန်ပေါ့စေခြင်း:"
  }, {
    "depth": 4,
    "slug": "3-ပိုမိုစိတ်ချရပြီး-အရန်သင့်ရှိနေခြင်း-higher-availability--redundancy",
    "text": "3. ပိုမိုစိတ်ချရပြီး အရန်သင့်ရှိနေခြင်း (Higher Availability & Redundancy):"
  }, {
    "depth": 4,
    "slug": "4-traffic-အများကြီးကို-ကိုင်တွယ်နိုင်စွမ်း-တိုးတက်ခြင်း-improved-scalability",
    "text": "4. Traffic အများကြီးကို ကိုင်တွယ်နိုင်စွမ်း တိုးတက်ခြင်း (Improved Scalability):"
  }, {
    "depth": 4,
    "slug": "5လုံခြုံရေးဆိုင်ရာ-အကျိုးကျေးဇူးများ-များသောအားဖြင့်",
    "text": "5.လုံခြုံရေးဆိုင်ရာ အကျိုးကျေးဇူးများ (များသောအားဖြင့်):"
  }, {
    "depth": 3,
    "slug": "cdn-များ",
    "text": "CDN များ"
  }, {
    "depth": 3,
    "slug": "cdn-များ-အသုံးဝင်သော-feature-များ",
    "text": "CDN များ၏ အသုံးဝင်သော Feature များ"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>CDN ဆိုတာ ဘာလဲ? server နှင့် user ကြား အကွာအဝေးကြောင့်ဖြစ်သော ကြန့်ကြာမှု (latency) ကိုလျှော့ချခြင်း နဲ့ CDN တွေရဲ့အသုံးဝင်သော features များကို နားလည်ရန်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"cdn-ဆိုတာဘာလဲ-သင့်-site-ကို-အသုံးပြုသူတွေနဲ့-ပိုနီးစပ်သွားစေခြင်း\">CDN ဆိုတာဘာလဲ? သင့် Site ကို အသုံးပြုသူတွေနဲ့ ပိုနီးစပ်သွားစေခြင်း။</h3><a class=\"sl-anchor-link\" href=\"#cdn-ဆိုတာဘာလဲ-သင့်-site-ကို-အသုံးပြုသူတွေနဲ့-ပိုနီးစပ်သွားစေခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “CDN ဆိုတာဘာလဲ? သင့် Site ကို အသုံးပြုသူတွေနဲ့ ပိုနီးစပ်သွားစေခြင်း။”</span></a></div>\n<ul>\n<li><strong>CDN (Content Delivery Network)</strong> ဆိုတာက ကမ္ဘာအနှံ့မှာ ဖြန့်ကြက်ထားတဲ့ server network တစ်ခု ဖြစ်ပါတယ်။ သူက သင့် website ရဲ့ ပုံတွေ၊ CSS၊ JS၊ video တွေလို static asset ဖိုင်တွေရဲ့ မိတ္တူတွေကို ကမ္ဘာတစ်ဝှမ်းက server အများအပြားမှာ သိမ်းဆည်း (cache) ထားပေးပါတယ်။</li>\n<li>အသုံးပြုသူတစ်ယောက်က သင့် site ကို ဝင်ကြည့်တဲ့အခါ သူတောင်းဆိုတဲ့ asset ဖိုင်တွေကို <strong>အနီးဆုံးမှာရှိတဲ့ CDN server</strong> ကနေ ပို့ဆောင်ပေးလိုက်ပါတယ်။</li>\n<li><strong>ဥပမာ:</strong> သင့် website ရဲ့ ပင်မ server ကို ရန်ကုန်မြို့က နာမည်ကြီး မုန့်ဆိုင်ကြီးတစ်ခုလို့ သဘောထားလိုက်ပါ။ CDN ဆိုတာက အဲဒီမုန့်ဆိုင်ကြီးရဲ့ ဆိုင်ခွဲလေးတွေကို နိုင်ငံအနှံ့ မှာ ဖွင့်ထားသလိုပါပဲ။ တစ်စုံတစ်ယောက်က ကွတ်ကီး စားချင်တဲ့အခါ၊ ရန်ကုန်က ပင်မဆိုင်ကြီးအထိ ခရီးအရှည်ကြီးလာစရာမလိုဘဲ၊ သူ့မြို့က အနီးဆုံးဆိုင်ခွဲလေးကနေ ချက်ချင်းဝယ်ယူရရှိနိုင်တာမျိုးပါ။</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: cdnCover,
      alt: "cdn servers"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"cdn-အသုံးပြုခြင်း-အဓိကအကျိုးကျေးဇူးများ\">CDN အသုံးပြုခြင်း၏ အဓိကအကျိုးကျေးဇူးများ</h3><a class=\"sl-anchor-link\" href=\"#cdn-အသုံးပြုခြင်း-အဓိကအကျိုးကျေးဇူးများ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “CDN အသုံးပြုခြင်း၏ အဓိကအကျိုးကျေးဇူးများ”</span></a></div>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"1-latency-နည်းပါးခြင်း-load-time-ပိုမြန်ခြင်း\">1. Latency နည်းပါးခြင်း (Load Time ပိုမြန်ခြင်း):</h4><a class=\"sl-anchor-link\" href=\"#1-latency-နည်းပါးခြင်း-load-time-ပိုမြန်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “1. Latency နည်းပါးခြင်း (Load Time ပိုမြန်ခြင်း):”</span></a></div>\n<ul>\n<li>Latency ဆိုတာ server ကနေ user ဆီကို <strong>data တွေရောက်ဖို့ ကြာမြင့်တဲ့အချိန်</strong>ပါ။ အကွာအဝေးက latency ဖြစ်စေတဲ့ အဓိကအချက်တစ်ချက်ပါ။</li>\n<li>အသုံးပြုသူနဲ့ ပိုနီးတဲ့ server ကနေ asset တွေကို ပို့ဆောင်ပေးခြင်းအားဖြင့်၊ CDN တွေက <strong>data သွားချိန်</strong>ကို သိသိသာသာလျှော့ချပေးပြီး <strong>asset တွေ load ဖြစ်တာ ပိုမြန်စေပါတယ်။</strong> ဒါက FCP, LCP လို metric တွေကို တိုက်ရိုက်တိုးတက်စေပါတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"2-asset-caching-ပိုကောင်းပြီး-ပင်မ-server-ဝန်ပေါ့စေခြင်း\">2. Asset Caching ပိုကောင်းပြီး ပင်မ Server ဝန်ပေါ့စေခြင်း:</h4><a class=\"sl-anchor-link\" href=\"#2-asset-caching-ပိုကောင်းပြီး-ပင်မ-server-ဝန်ပေါ့စေခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “2. Asset Caching ပိုကောင်းပြီး ပင်မ Server ဝန်ပေါ့စေခြင်း:”</span></a></div>\n<ul>\n<li>CDN တွေက သင့် <strong>static asset တွေကို cache</strong> လုပ်ထားပါတယ်။ user အများအပြားက တူညီတဲ့ asset ကိုတောင်းဆိုတဲ့အခါ၊ CDN က သူ့ cache ထဲကနေပဲ ပေးလိုက်တဲ့အတွက် သင့် ပင်မ server (origin server) ဆီရောက်လာတဲ့ request အရေအတွက်ကို လျှော့ချပေးပါတယ်။ ဒါကြောင့် သင့် ပင်မ server အလုပ်နည်းသွားပြီး dynamic request တွေကို ပိုမြန်မြန်တုံ့ပြန်နိုင်ပါတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"3-ပိုမိုစိတ်ချရပြီး-အရန်သင့်ရှိနေခြင်း-higher-availability--redundancy\">3. ပိုမိုစိတ်ချရပြီး အရန်သင့်ရှိနေခြင်း (Higher Availability &#x26; Redundancy):</h4><a class=\"sl-anchor-link\" href=\"#3-ပိုမိုစိတ်ချရပြီး-အရန်သင့်ရှိနေခြင်း-higher-availability--redundancy\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “3. ပိုမိုစိတ်ချရပြီး အရန်သင့်ရှိနေခြင်း (Higher Availability &#x26; Redundancy):”</span></a></div>\n<ul>\n<li>CDN server တစ်လုံးမှာ ပြဿနာရှိခဲ့ရင်တောင်၊ traffic ကို တခြားအဆင်သင့်ဖြစ်နေတဲ့ server တွေဆီ လမ်းကြောင်းလွှဲပေးနိုင်တဲ့အတွက် သင့် site က ပိုပြီးစိတ်ချရပါတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"4-traffic-အများကြီးကို-ကိုင်တွယ်နိုင်စွမ်း-တိုးတက်ခြင်း-improved-scalability\">4. Traffic အများကြီးကို ကိုင်တွယ်နိုင်စွမ်း တိုးတက်ခြင်း (Improved Scalability):</h4><a class=\"sl-anchor-link\" href=\"#4-traffic-အများကြီးကို-ကိုင်တွယ်နိုင်စွမ်း-တိုးတက်ခြင်း-improved-scalability\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “4. Traffic အများကြီးကို ကိုင်တွယ်နိုင်စွမ်း တိုးတက်ခြင်း (Improved Scalability):”</span></a></div>\n<ul>\n<li>CDN တွေက traffic အများကြီးနဲ့ ရုတ်တရက် traffic တက်လာတာတွေကို ကိုင်တွယ်နိုင်အောင် တည်ဆောက်ထားတာဖြစ်လို့၊ သင့် ပင်မ server တစ်ခုတည်းက ကိုင်တွယ်ရတာထက် ပိုအဆင်ပြေပါတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"5လုံခြုံရေးဆိုင်ရာ-အကျိုးကျေးဇူးများ-များသောအားဖြင့်\">5.လုံခြုံရေးဆိုင်ရာ အကျိုးကျေးဇူးများ (များသောအားဖြင့်):</h4><a class=\"sl-anchor-link\" href=\"#5လုံခြုံရေးဆိုင်ရာ-အကျိုးကျေးဇူးများ-များသောအားဖြင့်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “5.လုံခြုံရေးဆိုင်ရာ အကျိုးကျေးဇူးများ (များသောအားဖြင့်):”</span></a></div>\n<ul>\n<li>CDN အများအပြားက DDoS (တစ်ပြိုင်နက်တည်း request အမြောက်အများပို့ပြီး attack လုပ်ခြင်း) တွေနဲ့ တခြားခြိမ်းခြောက်မှုတွေကနေ ကာကွယ်ပေးပါတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"cdn-များ\">CDN များ</h3><a class=\"sl-anchor-link\" href=\"#cdn-များ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “CDN များ”</span></a></div>\n<ul>\n<li><strong>လူသုံးများသော CDN Providers:</strong> Cloudflare, AWS CloudFront, Google Cloud CDN, Akamai, Fastly, KeyCDN။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"cdn-များ-အသုံးဝင်သော-feature-များ\">CDN များ၏ အသုံးဝင်သော Feature များ</h3><a class=\"sl-anchor-link\" href=\"#cdn-များ-အသုံးဝင်သော-feature-များ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “CDN များ၏ အသုံးဝင်သော Feature များ”</span></a></div>\n<p>အခြေခံ content ပို့ဆောင်ပေးတာအပြင်၊ CDN အများစုက အောက်ပါတို့ကိုပါ လုပ်ဆောင်ပေးလေ့ရှိသည်။</p>\n<ul>\n<li>ပုံတွေကို အလိုအလျောက် <strong>optimize</strong> လုပ်ပေးခြင်း (အရွယ်အစားပြောင်းခြင်း၊ ဖိသိပ်ခြင်း၊ format ပြောင်းခြင်း)။</li>\n<li>CSS နှင့် JavaScript ဖိုင်များကို သေးအောင်ချုံ့ပေးခြင်း (Minification)။</li>\n<li><strong>Gzip/Brotli compression</strong> လုပ်ပေးခြင်း။</li>\n<li>Web Application Firewalls (WAF) ကဲ့သို့သော လုံခြုံရေး feature များ။</li>\n</ul>"
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

const url = "src/content/docs/web-performance/server-side/cdn.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/web-performance/server-side/cdn.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/web-performance/server-side/cdn.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
