import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "Image Optimization",
  "description": "Image Optimization"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "ဘာကြောင့်-ပုံတွေကို-အထူးဂရုစိုက်သင့်လဲ",
    "text": "ဘာကြောင့် ပုံတွေကို အထူးဂရုစိုက်သင့်လဲ"
  }, {
    "depth": 3,
    "slug": "သင့်လျော်တဲ့-ပုံ-format-ကို-ရွေးချယ်ခြင်း",
    "text": "သင့်လျော်တဲ့ ပုံ Format ကို ရွေးချယ်ခြင်း"
  }, {
    "depth": 4,
    "slug": "jpeg-သို့မဟုတ်-jpg",
    "text": "JPEG (သို့မဟုတ် JPG):"
  }, {
    "depth": 4,
    "slug": "png-portable-network-graphics",
    "text": "PNG (Portable Network Graphics):"
  }, {
    "depth": 4,
    "slug": "webp",
    "text": "WebP:"
  }, {
    "depth": 4,
    "slug": "avif-av1-image-file-format",
    "text": "AVIF (AV1 Image File Format):"
  }, {
    "depth": 4,
    "slug": "svg-scalable-vector-graphics",
    "text": "SVG (Scalable Vector Graphics):"
  }, {
    "depth": 3,
    "slug": "ချုံ့နည်းများ-compression-techniques-အရွယ်အစားကို-လျှော့ချခြင်း",
    "text": "ချုံ့နည်းများ (Compression Techniques): အရွယ်အစားကို လျှော့ချခြင်း"
  }, {
    "depth": 3,
    "slug": "tools-for-compression",
    "text": "Tools for Compression:"
  }, {
    "depth": 3,
    "slug": "screen-size-အရွယ်အစားမျိုးစုံအတွက်-ပုံများ-ပြင်ဆင်ခြင်း-responsive-images",
    "text": "Screen Size အရွယ်အစားမျိုးစုံအတွက် ပုံများ ပြင်ဆင်ခြင်း (Responsive Images)"
  }, {
    "depth": 3,
    "slug": "ပုံများကို-လိုအပ်မှ-load-လုပ်ခြင်း-lazy-loading-images",
    "text": "ပုံများကို လိုအပ်မှ load လုပ်ခြင်း (Lazy Loading Images)"
  }, {
    "depth": 4,
    "slug": "native-lazy-loading-ပုံမှန်-lazy-loading",
    "text": "Native Lazy Loading (ပုံမှန် Lazy Loading):"
  }, {
    "depth": 4,
    "slug": "javascript-based-lazy-loading",
    "text": "JavaScript-based Lazy Loading:"
  }, {
    "depth": 3,
    "slug": "image-cdn-များ-နှင့်-အလိုအလျောက်-optimizing-လုပ်ဆောင်ခြင်း",
    "text": "Image CDN များ နှင့် အလိုအလျောက် Optimizing လုပ်ဆောင်ခြင်း"
  }];
}
const srcSet = `
<img src="small.jpg"
     srcset="medium.jpg 1000w, large.jpg 2000w"
     alt="A descriptive alt text.">
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
      "set:html": "<p>သင့်လျော်တဲ့ ပုံ Format တွေကို ရွေးချယ်တတ်ဖို့၊ ထိရောက်တဲ့ compression (size\nချုံ့နည်း) တွေကို အသုံးပြုတတ်ဖို့၊ ဖုန်း၊ ကွန်ပျူတာ အစရှိတဲ့\nအရွယ်အစားမျိုးစုံနဲ့ ကိုက်ညီအောင် ပုံတွေကို ပြင်ဆင်တတ်ဖို့ (responsive\nimages)၊ ပြီးတော့ ပုံတွေကြောင့် website နှေးတာကို သိသိသာသာ\nလျှော့ချနိုင်ဖို့အတွက် <strong>lazy loading</strong> ကို အသုံးပြုတတ်ဖို့ သင်ယူရပါမယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဘာကြောင့်-ပုံတွေကို-အထူးဂရုစိုက်သင့်လဲ\">ဘာကြောင့် ပုံတွေကို အထူးဂရုစိုက်သင့်လဲ</h3><a class=\"sl-anchor-link\" href=\"#ဘာကြောင့်-ပုံတွေကို-အထူးဂရုစိုက်သင့်လဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘာကြောင့် ပုံတွေကို အထူးဂရုစိုက်သင့်လဲ”</span></a></div>\n<p>Website ရဲ့ ဖိုင်အရွယ်အစား (byte size) အများစုက ပုံတွေကြောင့် ဖြစ်တတ်ပါတယ်။ ပုံတွေကို ကောင်းကောင်း မပြင်ဆင်ထားရင် website ကို သိသိသာသာ နှေးစေနိုင်ပြီး သုံးစွဲသူတွေရဲ့ data တွေကိုလည်း အလဟဿ ကုန်စေပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"သင့်လျော်တဲ့-ပုံ-format-ကို-ရွေးချယ်ခြင်း\">သင့်လျော်တဲ့ ပုံ Format ကို ရွေးချယ်ခြင်း</h3><a class=\"sl-anchor-link\" href=\"#သင့်လျော်တဲ့-ပုံ-format-ကို-ရွေးချယ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “သင့်လျော်တဲ့ ပုံ Format ကို ရွေးချယ်ခြင်း”</span></a></div>\n<p>အမျိုးမျိုးသောပုံအမျိုးအစားတွေအတွက် မတူညီတဲ့ Format တွေက ပိုသင့်တော်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"jpeg-သို့မဟုတ်-jpg\">JPEG (သို့မဟုတ် JPG):</h4><a class=\"sl-anchor-link\" href=\"#jpeg-သို့မဟုတ်-jpg\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “JPEG (သို့မဟုတ် JPG):”</span></a></div>\n<ul>\n<li><strong>အသင့်တော်ဆုံး။</strong> ဓာတ်ပုံများ၊ အရောင်အသွေးများပြီး အရောင် gradient တွေ ပါတဲ့ ပုံတွေ။</li>\n<li><strong>အားသာချက်။</strong> ဓာတ်ပုံတွေအတွက် ကောင်းကောင်း compress လုပ်နိုင်တယ်။</li>\n<li><strong>အားနည်းချက်။</strong> compress လုပ်ရင် ပုံရဲ့ အရည်အသွေး နည်းနည်း ကျသွားနိုင်တယ်။ transparent background မရပါဘူး။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"png-portable-network-graphics\">PNG (Portable Network Graphics):</h4><a class=\"sl-anchor-link\" href=\"#png-portable-network-graphics\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “PNG (Portable Network Graphics):”</span></a></div>\n<ul>\n<li><strong>အသင့်တော်ဆုံး။</strong> Transparent background လိုအပ်တဲ့ ပုံတွေ (logo များ၊ icon များ)၊ စာသားတွေ ဒါမှမဟုတ် အရည်အသွေး ကောင်းဖို့လိုတဲ့ ပုံတွေ (ဥပမာ- screenshot များ)။</li>\n<li><strong>အားသာချက်။</strong> compress လုပ်ရင် အရည်အသွေး မကျဘူး (PNG-24 အတွက်)။</li>\n<li><strong>အားနည်းချက်။</strong> JPEG ထက် ဖိုင်အရွယ်အစား ပိုကြီးနိုင်တယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"webp\">WebP:</h4><a class=\"sl-anchor-link\" href=\"#webp\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “WebP:”</span></a></div>\n<ul>\n<li><strong>အသင့်တော်ဆုံး။</strong> JPEG နဲ့ PNG နှစ်မျိုးလုံးကို အစားထိုးဖို့အတွက် ခေတ်မီတဲ့ Format ပါ။ အရည်အသွေး မကျဘဲ compress လုပ်နိုင်သလို၊ အရည်အသွေး နည်းနည်းလျှော့ပြီးလည်း compress လုပ်နိုင်တယ်။ transparent background နဲ့ animation ပုံတွေကိုလည်း support လုပ်ပါတယ်။</li>\n<li><strong>အားသာချက်။</strong> အရည်အသွေး မကျဘဲနဲ့ JPEG/PNG ထက် ဖိုင်အရွယ်အစား သိသိသာသာ သေးငယ်တယ်။</li>\n<li><strong>အားနည်းချက်။</strong> အရမ်းကြာပြီဖြစ်တဲ့ browser တွေကတော့ support မလုပ်နိုင်ပါဘူး။ ဒါပေမယ့် webp အမျိုးအစားသုံးလို့မရရင် အစားထိုး (fallback) ပုံတွေ ပေးထားလို့ရပါတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"avif-av1-image-file-format\">AVIF (AV1 Image File Format):</h4><a class=\"sl-anchor-link\" href=\"#avif-av1-image-file-format\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “AVIF (AV1 Image File Format):”</span></a></div>\n<ul>\n<li><strong>အသင့်တော်ဆုံး။</strong> WebP နဲ့ ဆင်တူပေမဲ့ ပိုပြီး compress လုပ်နိုင်တယ်။ အထူးသဖြင့် ဖိုင်အရွယ်အစား  ပိုသေးငယ်တယ်။</li>\n<li><strong>အားသာချက်။</strong> WebP ထက်ပိုပြီး compress လုပ်လို့ရတယ်။ HDR (High Dynamic Range) ကို support လုပ်တယ်။ browser အများစု လဲ support လုပ်လာကြပါပြီ။</li>\n<li><strong>အားနည်းချက်။</strong> Format အသစ်ဖြစ်လို့ WebP ထက် browser support က အားနည်းပါတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"svg-scalable-vector-graphics\">SVG (Scalable Vector Graphics):</h4><a class=\"sl-anchor-link\" href=\"#svg-scalable-vector-graphics\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “SVG (Scalable Vector Graphics):”</span></a></div>\n<ul>\n<li><strong>အသင့်တော်ဆုံး။</strong> logo များ၊ icon များ၊ အရည်အသွေး မကျဘဲ ဘယ်အရွယ်အစားမဆို ချဲ့နိုင်ဖို့ လိုအပ်တဲ့ ပုံတွေ။ XML-based ဖြစ်ပါတယ်။</li>\n<li><strong>အားသာချက်။</strong> အရွယ်အစား ချဲ့လို့ရတယ်။ ဖိုင်အရွယ်အစား သေးငယ်လေ့ရှိတယ်။ CSS နဲ့ JavaScript နဲ့ ပြုပြင်လို့ရတယ်။</li>\n<li><strong>အားနည်းချက်။</strong> ရိုးရိုး ဓာတ်ပုံများ အတွက် မသင့်တော်ပါဘူး။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ချုံ့နည်းများ-compression-techniques-အရွယ်အစားကို-လျှော့ချခြင်း\">ချုံ့နည်းများ (Compression Techniques): အရွယ်အစားကို လျှော့ချခြင်း</h3><a class=\"sl-anchor-link\" href=\"#ချုံ့နည်းများ-compression-techniques-အရွယ်အစားကို-လျှော့ချခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ချုံ့နည်းများ (Compression Techniques): အရွယ်အစားကို လျှော့ချခြင်း”</span></a></div>\n<ul>\n<li>\n<p><strong>Lossy Compression:</strong> ပုံရဲ့ Data တချို့ကို ဖယ်ရှားပြီး ဖိုင်အရွယ်အစားကို လျှော့ချတာပါ။ ပြင်းပြင်းထန်ထန် ချုံ့ရင် ဖိုင်ကတော့ ပိုသေးသွားပေမဲ့ quality သိသိသာသာ ကျဆင်းနိုင်ပါတယ်။ (ဥပမာ- JPEG, WebP (lossy), AVIF (lossy)။)</p>\n</li>\n<li>\n<p><strong>Lossless Compression:</strong> quality မကျဘဲ ဖိုင်အရွယ်အစားကို လျှော့ချတာပါ။ သိပ်မလိုအပ်တဲ့ အချက်အလက် (metadata) တွေကို ဖယ်ရှားခြင်း ဒါမှမဟုတ် အချက်အလက်တွေကို ပိုထိရောက်အောင် လုပ်ဆောင်ပါတယ်။ (ဥပမာ- PNG, WebP (lossless), AVIF (lossless), SVG တွေကို ကောင်းမွန်အောင် လုပ်ဆောင်ခြင်း။)</p>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"tools-for-compression\">Tools for Compression:</h3><a class=\"sl-anchor-link\" href=\"#tools-for-compression\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Tools for Compression:”</span></a></div>\n<ul>\n<li><strong>Online ကိရိယာများ။</strong> TinyPNG/TinyJPG, Squoosh.app, iLoveIMG</li>\n<li><strong>Desktop App များ။</strong> ImageOptim (Mac), RIOT (Windows)</li>\n<li><strong>Build tools/plugins များ။</strong> imagemin (Node.js project များအတွက်)</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"screen-size-အရွယ်အစားမျိုးစုံအတွက်-ပုံများ-ပြင်ဆင်ခြင်း-responsive-images\">Screen Size အရွယ်အစားမျိုးစုံအတွက် ပုံများ ပြင်ဆင်ခြင်း (Responsive Images)</h3><a class=\"sl-anchor-link\" href=\"#screen-size-အရွယ်အစားမျိုးစုံအတွက်-ပုံများ-ပြင်ဆင်ခြင်း-responsive-images\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Screen Size အရွယ်အစားမျိုးစုံအတွက် ပုံများ ပြင်ဆင်ခြင်း (Responsive Images)”</span></a></div>\n<p>ဖုန်း screen သေးသေးလေးမှာ size ကြီးတဲ့ Desktop quality ပုံတစ်ပုံကို ပြသတာဟာ data ကို ဖြုန်းတီးစေပြီး website ကို နှေးစေပါတယ်။ Responsive images တွေက ဒီပြဿနာကို ဖြေရှင်းပေးပါတယ်။</p>\n<ul>\n<li><strong>srcset attribute (<code dir=\"auto\">&#x3C;img></code> အတွက်):</strong> မတူညီတဲ့ အရွယ်အစား/အရည်အသွေးရှိတဲ့ ပုံ Source တွေကို ပေးနိုင်ပါတယ်။ ဒါဆိုရင် browser က device ရဲ့ screen အရွယ်အစား၊ pixel သိပ်သည်းဆ (pixel density) နဲ့ မြင်ကွင်း (viewport) အပေါ် မူတည်ပြီး အသင့်တော်ဆုံး ပုံကို ရွေးချယ်ပါလိမ့်မယ်။</li>\n</ul>\n<p><strong>ဥပမာ -</strong></p>\n"
    }), createVNode(Code, {
      code: srcSet,
      title: "HTML"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>(w ဆိုတာက ပုံရဲ့ width ပါ။)</p>\n<ul>\n<li><strong>sizes attribute (<code dir=\"auto\">&#x3C;img></code> အတွက်):</strong> မတူညီတဲ့ Screen အရွယ်အစားတွေမှာ ပုံရဲ့ width ဘယ်လောက် ပေါ်မယ်ဆိုတာကို browser ကို ပြောပြပါတယ်။ ဒါက srcset ထဲကနေ browser က အသင့်တော်ဆုံး Source ကို ရွေးချယ်တဲ့နေရာမှာ ကူညီပေးပါတယ်။</li>\n</ul>\n<p><strong>ဥပမာ (ဆက်လက်၍) -</strong></p>\n"
    }), createVNode(Code, {
      code: sizes,
      title: "HTML"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<blockquote>\n<p>ဆိုလိုတာက- viewport က 600px နဲ့ အောက်ဆိုရင် Image က viewport ရဲ့ 100% ၊ မဟုတ်ရင်တော့ 50% ရှိမယ်။</p>\n</blockquote>\n"
    }), createVNode($$Aside, {
      title: "ရှင်းလင်းချက်",
      type: "tip",
      "set:html": "<p>ဒီ ဥပမာ မှာဆိုရင် srcset နဲ့ Image size နှစ်မျိုးပေးထားတယ်၊ ပြီးတော့ sizes ကိုသုံးပြီး viewport ပေါ်မူတည်ပြီး ပုံရဲ့ width ဘယ်လောက်ရှိရမလဲပြောတယ်။</p><p>ဥပမာ - <strong>430px</strong> ရှိတဲ့ ဖုန်းဆိုရင် viewport width က 600px အောက်ဆိုတော့ ပုံကို 100% သုံးမယ်။ viewport ရဲ့ 100% ဆိုတော့ 430px ၊ <strong>srcset ထဲမှာ 430px နဲ့ အနီးစပ်ဆုံးက medium.jpg</strong> ဆိုတော့ browser က အဲဒီပုံကိုပဲ ရွေးချယ်ပြပေးပါလိမ့်မယ်။</p><p><strong>အကျိုးကျေးဇူး -</strong> ဖုန်း screen မှာ sizeကြီးတဲ့ large.jpg ပုံကို <strong>download လုပ်စရာမလို</strong>တော့ပါဘူး။ ကိုက်ညီတဲ့ပုံကိုပဲ ပိုပြီးတော့ မြန်မြန် download လုပ်နိုင်ပြီး မြန်မြန်ပြပေးနိုင်ပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<ul>\n<li><strong><code dir=\"auto\">&#x3C;picture></code> element:</strong> ပုံကို ပုံစံအမျိုးမျိုးနဲ့ ပိုပြီး ထိန်းချုပ်ပြသနိုင်ပါတယ်။ မတူညီတဲ့ အခြေအနေတွေအတွက် မတူညီတဲ့ ပုံတွေ ဒါမှမဟုတ် မတူညီတဲ့ ပုံ Format တွေကိုတောင် သုံးနိုင်ပါတယ်။</li>\n</ul>\n<p><strong>ဥပမာ -</strong></p>\n"
    }), createVNode(Code, {
      code: picture,
      title: "HTML"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ပုံများကို-လိုအပ်မှ-load-လုပ်ခြင်း-lazy-loading-images\">ပုံများကို လိုအပ်မှ load လုပ်ခြင်း (Lazy Loading Images)</h3><a class=\"sl-anchor-link\" href=\"#ပုံများကို-လိုအပ်မှ-load-လုပ်ခြင်း-lazy-loading-images\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ပုံများကို လိုအပ်မှ load လုပ်ခြင်း (Lazy Loading Images)”</span></a></div>\n<ul>\n<li>\n<p>Website စတင်တက်တဲ့အခါ viewport ထဲမှာ မရှိသေးတဲ့ ပုံတွေ (အောက်ဖက်မှာ ရှိတဲ့ပုံတွေ) ကိုချက်ခြင်း load မလုပ်သေးဘဲ scroll ဆွဲရင်း အဲဒီပုံတွေနားရောက်မှ load လုပ်တဲ့ နည်းလမ်းပါ။</p>\n</li>\n<li>\n<p><strong>ဘာကြောင့်လဲ။</strong> website တက်တဲ့ အချိန် မြန်တယ် (အထူးသဖြင့် LCP ကောင်းတယ်)၊ data ကို ချွေတာတယ်၊ ပြီးတော့ browser က intial load ( အစပိုင်းမှာ လုပ်ဆောင်ရတဲ့ အလုပ်) ကို လျှော့ချပေးပါတယ်။</p>\n</li>\n<li>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"native-lazy-loading-ပုံမှန်-lazy-loading\">Native Lazy Loading (ပုံမှန် Lazy Loading):</h4><a class=\"sl-anchor-link\" href=\"#native-lazy-loading-ပုံမှန်-lazy-loading\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Native Lazy Loading (ပုံမှန် Lazy Loading):”</span></a></div>\n<ul>\n<li>ရိုးရှင်းပြီး ထိရောက်တယ်။ <code dir=\"auto\">&#x3C;img> နဲ့ &#x3C;iframe></code> tags တွေမှာ loading=“lazy” attribute ကို ထည့်ရုံပါပဲ။</li>\n<li>ဥပမာ။ <code dir=\"auto\">&#x3C;img src=\"my-image.jpg\" loading=\"lazy\" alt=\"...\"></code></li>\n<li>Browser အများစုက support လုပ်ပါတယ်။</li>\n</ul>\n</li>\n<li>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"javascript-based-lazy-loading\">JavaScript-based Lazy Loading:</h4><a class=\"sl-anchor-link\" href=\"#javascript-based-lazy-loading\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “JavaScript-based Lazy Loading:”</span></a></div>\n<ul>\n<li>old browser တွေကို support လုပ်ဖို့ ဒါမှမဟုတ် ပိုရှုပ်ထွေးတဲ့ အခြေအနေတွေ (ဥပမာ- နောက်ခံပုံများ၊ custom effect များ) အတွက် သုံးပါတယ်။ Lazysizes လို library တွေက နာမည်ကြီးပါတယ်။</li>\n</ul>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"image-cdn-များ-နှင့်-အလိုအလျောက်-optimizing-လုပ်ဆောင်ခြင်း\">Image CDN များ နှင့် အလိုအလျောက် Optimizing လုပ်ဆောင်ခြင်း</h3><a class=\"sl-anchor-link\" href=\"#image-cdn-များ-နှင့်-အလိုအလျောက်-optimizing-လုပ်ဆောင်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Image CDN များ နှင့် အလိုအလျောက် Optimizing လုပ်ဆောင်ခြင်း”</span></a></div>\n<ul>\n<li>ပုံတွေကို ပို့ဆောင်ရာမှာ အထူးပြုတဲ့ <strong>Content Delivery Networks (CDN)</strong> တွေဟာ Format တွေကို အလိုအလျောက် ပြောင်းလဲပေးတာ (ဥပမာ- support လုပ်တဲ့ browser တွေကို WebP ပို့ပေးတာ)၊ လိုအပ်သလို အရွယ်အစား ပြောင်းပေးတာနဲ့ compress လုပ်ပေးတာ စတဲ့ လုပ်ဆောင်ချက်တွေကို ပေးပါတယ်။</li>\n<li><strong>ဥပမာများ။</strong> Cloudinary, Imgix, Akamai Image &#x26; Video Manager.</li>\n<li><strong>အကျိုးကျေးဇူး။</strong> ပုံတွေကို ရိုးရိုးရှင်းရှင်းနဲ့ အကောင်းဆုံး Optimize လုပ်ပေးနိုင်ပါတယ်။</li>\n</ul>"
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

const url = "src/content/docs/web-performance/image-and-asset/image-optimization.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/web-performance/image-and-asset/image-optimization.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/web-performance/image-and-asset/image-optimization.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, picture, sizes, srcSet, url };
