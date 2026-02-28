import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import { h as httpVersions } from './http-versions_DEw3HrL1.mjs';
import 'clsx';

const ttfb = new Proxy({"src":"/_astro/ttfb.mXFF0KYS.png","width":1490,"height":741,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/web-performance/ttfb.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Server-Side Optimizations",
  "description": "Server-Side Optimizations"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "server--အခန်းကဏ္ဍ---လျင်မြန်သော-ပထမဆုံးခြေလှမ်း",
    "text": "Server ၏ အခန်းကဏ္ဍ - လျင်မြန်သော ပထမဆုံးခြေလှမ်း"
  }, {
    "depth": 3,
    "slug": "time-to-first-byte-ttfb-ကို-ပိုကောင်းအောင်လုပ်ခြင်း",
    "text": "Time To First Byte (TTFB) ကို ပိုကောင်းအောင်လုပ်ခြင်း"
  }, {
    "depth": 3,
    "slug": "ttfb-ကို-တိုးတက်စေမည့်-နည်းလမ်းများ",
    "text": "TTFB ကို တိုးတက်စေမည့် နည်းလမ်းများ:"
  }, {
    "depth": 3,
    "slug": "server-level-compression---gzip-နှင့်-brotli",
    "text": "Server-Level Compression - Gzip နှင့် Brotli"
  }, {
    "depth": 3,
    "slug": "http2-နှင့်-http3--အကျိုးကျေးဇူးများ",
    "text": "HTTP/2 နှင့် HTTP/3 ၏ အကျိုးကျေးဇူးများ"
  }, {
    "depth": 3,
    "slug": "rendering-နည်းလမ်းများနှင့်-performance---ssr-csr-ssg",
    "text": "Rendering နည်းလမ်းများနှင့် Performance - SSR, CSR, SSG"
  }, {
    "depth": 4,
    "slug": "client-side-rendering-csr",
    "text": "Client-Side Rendering (CSR):"
  }, {
    "depth": 4,
    "slug": "server-side-rendering-ssr",
    "text": "Server-Side Rendering (SSR):"
  }, {
    "depth": 4,
    "slug": "static-site-generation-ssg",
    "text": "Static Site Generation (SSG):"
  }, {
    "depth": 4,
    "slug": "hybrid-approaches-nextjs-nuxtjs-astro-ကဲ့သို့-modern-framework-အများစုက-ဒီနည်းလမ်းတွေကို-ရောနှောအသုံးပြုနိုင်အောင်-ခွင့်ပြုထားပါတယ်",
    "text": "Hybrid Approaches (Next.js, Nuxt.js, Astro ကဲ့သို့): Modern framework အများစုက ဒီနည်းလမ်းတွေကို ရောနှောအသုံးပြုနိုင်အောင် ခွင့်ပြုထားပါတယ်။"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>Server ဘက်ခြမ်းက performance ကို ထိခိုက်စေတဲ့ အကြောင်းအရာများ (အထူးသဖြင့် TTFB) နှင့် ၎င်းတို့ကို ပိုကောင်းအောင်လုပ်ဆောင်နိုင်သည့် အခြေခံနည်းလမ်းများကို နားလည်ရန်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"server--အခန်းကဏ္ဍ---လျင်မြန်သော-ပထမဆုံးခြေလှမ်း\">Server ၏ အခန်းကဏ္ဍ - လျင်မြန်သော ပထမဆုံးခြေလှမ်း</h3><a class=\"sl-anchor-link\" href=\"#server--အခန်းကဏ္ဍ---လျင်မြန်သော-ပထမဆုံးခြေလှမ်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Server ၏ အခန်းကဏ္ဍ - လျင်မြန်သော ပထမဆုံးခြေလှမ်း”</span></a></div>\n<p>Server က ပထမဦးဆုံး HTML ကို မြန်မြန်ပြန်ပို့ပေးနိုင်လေ ကျန်တာ တွေအားလုံးလဲ မြန်မြန်စတင်နိုင်လေ ဖြစ်ပါတယ်။ ဒီနေရာမှာ Time To First Byte (TTFB) ဆိုတဲ့ metric က အဓိကကျပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"time-to-first-byte-ttfb-ကို-ပိုကောင်းအောင်လုပ်ခြင်း\">Time To First Byte (TTFB) ကို ပိုကောင်းအောင်လုပ်ခြင်း</h3><a class=\"sl-anchor-link\" href=\"#time-to-first-byte-ttfb-ကို-ပိုကောင်းအောင်လုပ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Time To First Byte (TTFB) ကို ပိုကောင်းအောင်လုပ်ခြင်း”</span></a></div>\n<p>TTFB နှေးကွေးရခြင်း အကြောင်းရင်းများမှာ-</p>\n<ul>\n<li><strong>Server Hardware/Configuration အားနည်းခြင်း</strong> Server က Powerful မဖြစ်တာ၊ web server software (Apache, Nginx) တွေရဲ့ setting တွေက ထိရောက်မှုမရှိတာ။</li>\n<li><strong>Network ကြန့်ကြာမှု (Latency)</strong> Server နဲ့ user ကြား ဝေးကွာခြင်း။ (CDN တွေက asset တွေအတွက် ကူညီပေးပေမယ့်၊ HTML ကတော့ original server ကနေ လာလေ့ရှိတယ်)။</li>\n<li><strong>Backend Application Code နှေးကွေးခြင်း</strong> Server က code တွေ (PHP, Python, Node.js စသည်ဖြင့်) က HTML ကို Response ပေးဖို့ အချိန်အကြာကြီးယူနေတာ။</li>\n<li><strong>Database Query များ နှေးကွေးခြင်း</strong> Page အတွက် database ကနေ data ဆွဲရတဲ့အခါ query တွေက နှေးနေရင် HTML ထုတ်ပေးတာကို ကြန့်ကြာစေပါတယ်။</li>\n<li><strong>Server ဝန်ပိခြင်း</strong> တစ်ပြိုင်နက်တည်း အသုံးပြုသူတွေ အရမ်းများပြီး server က ဝန်ပိနေတာ။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ttfb-ကို-တိုးတက်စေမည့်-နည်းလမ်းများ\">TTFB ကို တိုးတက်စေမည့် နည်းလမ်းများ:</h3><a class=\"sl-anchor-link\" href=\"#ttfb-ကို-တိုးတက်စေမည့်-နည်းလမ်းများ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “TTFB ကို တိုးတက်စေမည့် နည်းလမ်းများ:”</span></a></div>\n<ul>\n<li><strong>Hosting/Server ကို အဆင့်မြှင့်တင်ခြင်း</strong> သင့် server က အမြဲတမ်းလိုလို နှေးနေရင် ဒါကိုစဉ်းစားသင့်ပါတယ်။</li>\n<li><strong>Web Server Configuration ကို ကောင်းအောင်ပြင်ဆင်ခြင်း</strong> ဥပမာ - keep-alive ကိုဖွင့်ထားတာ၊ worker process တွေကို ချိန်ညှိတာ။</li>\n<li><strong>Backend Code ကို ပိုမြန်အောင်ရေးခြင်း</strong> သင့် application ထဲက အချိန်အကြာဆုံးအလုပ်လုပ်နေတဲ့ Codes နေရာ တွေကိုရှာပြီး၊ ပိုကောင်းတဲ့ algorithm တွေ၊ library တွေသုံးပြီး ပြင်ဆင်ရေးသားပါ။</li>\n<li><strong>Database Query များကို ပိုမြန်အောင်လုပ်ခြင်း</strong> Database table တွေကို index လုပ်တာ၊ နှေးနေတဲ့ query တွေကို ပြန်ရေးတာ၊ database caching သုံးတာတွေ လုပ်နိုင်ပါတယ်။</li>\n<li><strong>Server-Side Caching ကို အသုံးပြုခြင်း</strong> သိပ်မပြောင်းလဲတဲ့ HTML Page အပြည့်အစုံ ဒါမှမဟုတ် Page ရဲ့ အစိတ်အပိုင်းတွေကို cache လုပ်ထားပါ။ ဒါဆို server က request တိုင်းအတွက် အစကနေပြန်ထုတ်ပေးစရာမလိုတော့ပါဘူး။</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: ttfb,
      alt: "Time to first byte"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"server-level-compression---gzip-နှင့်-brotli\">Server-Level Compression - Gzip နှင့် Brotli</h3><a class=\"sl-anchor-link\" href=\"#server-level-compression---gzip-နှင့်-brotli\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Server-Level Compression - Gzip နှင့် Brotli”</span></a></div>\n<ul>\n<li>ဒါတွေက server ကနေ browser ဆီမပို့ခင် text-based ဖိုင်တွေ (HTML, CSS, JS, JSON) ကို “zip” ဖိုင်လို ဖိသိပ်ပေးတဲ့ algorithm တွေပါ။ Browser က လက်ခံရရှိတဲ့အခါ zip ပြန်ဖြည်ပါတယ်။</li>\n<li>ဖိုင်အရွယ်အစားကို သိသိသာသာ (60-80% ခန့်) လျှော့ချပေးတဲ့အတွက် download လုပ်ရတာ ပိုမြန်စေပါတယ်။</li>\n<li>သင့် web server (Apache, Nginx) မှာ enable လုပ်နိုင်သလို၊ CDN တွေကလည်း ဒါကို လုပ်ပေးလေ့ရှိပါတယ်။</li>\n<li>Brotli က Gzip ထက် ယေဘုယျအားဖြင့် ပိုကောင်းတဲ့ compression ပေးနိုင်ပေမယ့် HTTPS လိုအပ်ပါတယ်။ Modern server နဲ့ CDN အများစုက နှစ်မျိုးလုံးကို ထောက်ပံ့ပေးပါတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"http2-နှင့်-http3--အကျိုးကျေးဇူးများ\">HTTP/2 နှင့် HTTP/3 ၏ အကျိုးကျေးဇူးများ</h3><a class=\"sl-anchor-link\" href=\"#http2-နှင့်-http3--အကျိုးကျေးဇူးများ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “HTTP/2 နှင့် HTTP/3 ၏ အကျိုးကျေးဇူးများ”</span></a></div>\n<ul>\n<li><strong>HTTP/1.1 (old version):</strong> <strong>“Head-of-line blocking”</strong> ဆိုတဲ့ ပြဿနာရှိတယ် (connection တစ်ခုမှာ တစ်ကြိမ်လျှင် ဖိုင်အနည်းငယ်သာ download လုပ်နိုင်တယ်)။</li>\n<li><strong>HTTP/2:</strong>\n<ul>\n<li><strong>Multiplexing:</strong> request နှင့် response အများအပြားကို <strong>TCP connection တစ်ခုတည်းပေါ်မှာ တစ်ပြိုင်တည်း</strong> ပို့ဆောင်နိုင်တဲ့အတွက် head-of-line blocking ပြဿနာကို ဖယ်ရှားပေးပါတယ်။</li>\n</ul>\n</li>\n<li><strong>HTTP/3:</strong>\n<ul>\n<li>TCP အစား <strong>QUIC</strong> ကိုအသုံးပြုပြီး connection တည်ဆောက်ချိန်ကို ပိုမိုလျှော့ချပေးကာ၊ မတည်ငြိမ်သော network များပေါ်တွင် performance ကို ပိုမိုတိုးတက်စေပါတယ်။</li>\n</ul>\n</li>\n<li>ဒီ protocol အသစ်တွေက asset ဖိုင်အများအပြားကို ပိုမိုမြန်ဆန်ပြီး ထိထိရောက်ရောက် ပို့ဆောင်နိုင်စေပါတယ်။ Modern hosting နဲ့ CDN အများစုက HTTP/2 ကို support လုပ်ပြီး HTTP/3 သုံးစွဲမှုကလည်း တိုးပွားလာနေပါတယ်။</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: httpVersions,
      alt: "http versions"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"rendering-နည်းလမ်းများနှင့်-performance---ssr-csr-ssg\">Rendering နည်းလမ်းများနှင့် Performance - SSR, CSR, SSG</h3><a class=\"sl-anchor-link\" href=\"#rendering-နည်းလမ်းများနှင့်-performance---ssr-csr-ssg\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Rendering နည်းလမ်းများနှင့် Performance - SSR, CSR, SSG”</span></a></div>\n<p>သင့် website ရဲ့ HTML ကို ဘယ်လိုထုတ်လုပ်ပေးသလဲဆိုတဲ့ နည်းလမ်းက performance အပေါ် ကြီးမားတဲ့ သက်ရောက်မှုရှိနိုင်ပါတယ်:</p>\n<ul>\n<li>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"client-side-rendering-csr\">Client-Side Rendering (CSR):</h4><a class=\"sl-anchor-link\" href=\"#client-side-rendering-csr\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Client-Side Rendering (CSR):”</span></a></div>\n<ul>\n<li>Server က HTML အနည်းငယ်နဲ့ JavaScript Bundle တစ်ခုကို ပို့ပေးတယ်။ Browser က အဲဒီ JS ကို run ပြီး Page content ကို render လုပ်တယ်။</li>\n<li><strong>ကောင်းကျိုး -</strong> Interactivity ကောင်းတယ်၊ နောက်ထပ်ဝင်ကြည့်တဲ့ Page တွေက ပိုမြန်တယ် (SPA - Single Page App လိုမျိုး)။</li>\n<li><strong>အားနည်းချက် -</strong> ပထမဆုံးဝင်ကြည့်တဲ့အခါ နှေးနိုင်တယ် (FCP/LCP/TTI နှေးနိုင်တယ်)၊ SEO အတွက် သေချာမလုပ်ရင် အားနည်းနိုင်တယ်။</li>\n</ul>\n</li>\n<li>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"server-side-rendering-ssr\">Server-Side Rendering (SSR):</h4><a class=\"sl-anchor-link\" href=\"#server-side-rendering-ssr\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Server-Side Rendering (SSR):”</span></a></div>\n<ul>\n<li>Server က Page အတွက် HTML အပြည့်အစုံကို ထုတ်လုပ်ပြီး browser ဆီပို့ပေးတယ်။ Browser က အဲဒါကို ချက်ချင်းပြသနိုင်တယ်။</li>\n<li><strong>ကောင်းကျိုး -</strong> FCP/LCP ပိုမြန်တယ်၊ SEO အတွက် ပိုကောင်းတယ်။</li>\n<li><strong>အားနည်းချက် -</strong> TTFB ပိုနှေးနိုင်တယ် (server က request တိုင်းအတွက် HTML page ထုတ်ပေးရတယ်)။</li>\n</ul>\n</li>\n<li>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"static-site-generation-ssg\">Static Site Generation (SSG):</h4><a class=\"sl-anchor-link\" href=\"#static-site-generation-ssg\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Static Site Generation (SSG):”</span></a></div>\n<ul>\n<li>HTML page အပြည့်အစုံကို “build time” (user တွေမဝင်ခင်) မှာ ကြိုတင်တည်ဆောက်ထားပြီး static ဖိုင်တွေအဖြစ် server (သို့) CDN ကနေ ပို့ဆောင်ပေးတယ်။</li>\n<li><strong>ကောင်းကျိုး -</strong> TTFB, FCP, LCP အလွန်မြန်တယ်၊ လုံခြုံရေးအရမ်းကောင်းတယ်၊ traffic အများကြီးကို ကောင်းကောင်းကိုင်တွယ်နိုင်တယ်။</li>\n<li><strong>အားနည်းချက် -</strong> user တစ်ယောက်ချင်းစီအတွက် (သို့) မကြာခဏပြောင်းလဲနေတဲ့ dynamic content တွေအတွက် မသင့်တော်ဘူး။</li>\n</ul>\n</li>\n<li>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"hybrid-approaches-nextjs-nuxtjs-astro-ကဲ့သို့-modern-framework-အများစုက-ဒီနည်းလမ်းတွေကို-ရောနှောအသုံးပြုနိုင်အောင်-ခွင့်ပြုထားပါတယ်\">Hybrid Approaches (Next.js, Nuxt.js, Astro ကဲ့သို့): Modern framework အများစုက ဒီနည်းလမ်းတွေကို ရောနှောအသုံးပြုနိုင်အောင် ခွင့်ပြုထားပါတယ်။</h4><a class=\"sl-anchor-link\" href=\"#hybrid-approaches-nextjs-nuxtjs-astro-ကဲ့သို့-modern-framework-အများစုက-ဒီနည်းလမ်းတွေကို-ရောနှောအသုံးပြုနိုင်အောင်-ခွင့်ပြုထားပါတယ်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Hybrid Approaches (Next.js, Nuxt.js, Astro ကဲ့သို့): Modern framework အများစုက ဒီနည်းလမ်းတွေကို ရောနှောအသုံးပြုနိုင်အောင် ခွင့်ပြုထားပါတယ်။”</span></a></div>\n</li>\n</ul>\n"
    }), createVNode($$Aside, {
      title: "အနှစ်ချုပ်",
      "set:html": "<ul>\n<li><strong>Browser Caching</strong> က ဖိုင်တွေ သိမ်းထားနိုင်စေပြီး နောက်တခေါက် ဝင်ရောက်မှုတွေကို မြန်ဆန်စေတယ်။ Cache busting က user တွေဆီ file version အသစ်တွေ ရောက်ရှိစေတယ်။</li>\n<li><strong>Content Delivery Networks (CDNs)</strong> တွေက သင့် static asset တွေကို ကမ္ဘာအနှံ့ server တွေမှာ ဖြန့်ဝေပေးပြီး၊ user တွေကို အနီးဆုံးနေရာကနေ ပို့ဆောင်ပေးခြင်းဖြင့် latency ကိုလျှော့ချပြီး server ဝန်ပေါ့စေတယ်။</li>\n<li><strong>Server-Side Optimizations</strong> တွေက backend code, database queries, server configuration, နှင့် server-level caching တွေကို ကောင်းအောင်လုပ်ခြင်းဖြင့် Time To First Byte (TTFB) ကို တိုးတက်စေဖို့ အဓိကထားတယ်။</li>\n<li><strong>Gzip/Brotli compression</strong> ကိုဖွင့်ထားခြင်းနဲ့ HTTP/2 or HTTP/3 ကိုအသုံးပြုခြင်းက data ပို့ဆောင်မှုကို သိသိသာသာမြန်ဆန်စေတယ်။</li>\n<li><strong>Rendering နည်းလမ်း (CSR, SSR, SSG)</strong> ရွေးချယ်မှုက ပထမဆုံး load ဖြစ်တဲ့ performance နဲ့ interactivity အပေါ် ကြီးမားတဲ့သက်ရောက်မှုရှိတယ်။</li>\n</ul>"
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

const url = "src/content/docs/web-performance/server-side/server-side.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/web-performance/server-side/server-side.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/web-performance/server-side/server-side.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
