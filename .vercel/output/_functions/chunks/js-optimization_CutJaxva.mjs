import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const codeSplitting = new Proxy({"src":"/_astro/code-splitting.ydMt0Npo.png","width":1260,"height":1001,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/web-performance/code-splitting.png";
							}
							
							return target[name];
						}
					});

const asyncDefer = new Proxy({"src":"/_astro/async-defer.BeIle-hc.png","width":2240,"height":1200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/web-performance/async-defer.png";
							}
							
							return target[name];
						}
					});

const longTask = new Proxy({"src":"/_astro/long-task.uoWxeB2c.png","width":1880,"height":1040,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/web-performance/long-task.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Optimizing JavaScript Loading & Execution",
  "description": "Optimizing JavaScript Loading & Execution"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "javascript---အစွမ်းထက်သော်လည်း-ဂရုမစိုက်လျှင်-website-ကို-လေးလံစေနိုင်သည်",
    "text": "JavaScript - အစွမ်းထက်သော်လည်း၊ ဂရုမစိုက်လျှင် Website ကို လေးလံစေနိုင်သည်"
  }, {
    "depth": 3,
    "slug": "အဓိကကျသော-javascript-optimization-နည်းလမ်းများ",
    "text": "အဓိကကျသော JavaScript Optimization နည်းလမ်းများ"
  }, {
    "depth": 4,
    "slug": "minification-ချုံ့ခြင်း-နှင့်-compression-ဖိသိပ်ခြင်း",
    "text": "Minification (ချုံ့ခြင်း) နှင့် Compression (ဖိသိပ်ခြင်း):"
  }, {
    "depth": 4,
    "slug": "code-splitting-code-အား-အပိုင်းငယ်များခွဲခြင်း-နှင့်-tree-shaking-မလိုအပ်သော-code-များ-ဖယ်ရှားခြင်း",
    "text": "Code Splitting (Code အား အပိုင်းငယ်များခွဲခြင်း) နှင့် Tree Shaking (မလိုအပ်သော Code များ ဖယ်ရှားခြင်း):"
  }, {
    "depth": 4,
    "slug": "script-loading-ကို-ထိန်းချုပ်ခြင်း---async-နှင့်-defer-attribute-များ",
    "text": "Script Loading ကို ထိန်းချုပ်ခြင်း - async နှင့် defer Attribute များ:"
  }, {
    "depth": 4,
    "slug": "main-thread-အလုပ်များလျှော့ချခြင်း-နှင့်-long-tasks-များကို-ကောင်းမွန်အောင်ပြုလုပ်ခြင်း",
    "text": "Main Thread အလုပ်များလျှော့ချခြင်း နှင့် Long Tasks များကို ကောင်းမွန်အောင်ပြုလုပ်ခြင်း"
  }, {
    "depth": 4,
    "slug": "debouncing-နှင့်-throttling-event-handlers",
    "text": "Debouncing နှင့် Throttling Event Handlers:"
  }, {
    "depth": 4,
    "slug": "third-party-script-များကို-ကောင်းမွန်အောင်ပြုလုပ်ခြင်း",
    "text": "Third-Party Script များကို ကောင်းမွန်အောင်ပြုလုပ်ခြင်း:"
  }, {
    "depth": 4,
    "slug": "service-workers-performance-အတွက်-မိတ်ဆက်",
    "text": "Service Workers (Performance အတွက် မိတ်ဆက်):"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>JavaScript က သင့် website ကို နှေးစေတာ ဒါမှမဟုတ် ထစ်ငေါ့စေတာမျိုး မဖြစ်အောင် ဘယ်လို တားဆီးရမလဲ နဲ့ JavaScript ကို ပိုကောင်းအောင် ဘယ်လို load လုပ်မလဲ၊ ဘယ်လို အလုပ်လုပ်ခိုင်းမလဲဆိုတာ လေ့လာရန်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"javascript---အစွမ်းထက်သော်လည်း-ဂရုမစိုက်လျှင်-website-ကို-လေးလံစေနိုင်သည်\">JavaScript - အစွမ်းထက်သော်လည်း၊ ဂရုမစိုက်လျှင် Website ကို လေးလံစေနိုင်သည်</h2><a class=\"sl-anchor-link\" href=\"#javascript---အစွမ်းထက်သော်လည်း-ဂရုမစိုက်လျှင်-website-ကို-လေးလံစေနိုင်သည်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “JavaScript - အစွမ်းထက်သော်လည်း၊ ဂရုမစိုက်လျှင် Website ကို လေးလံစေနိုင်သည်”</span></a></div>\n<p>JavaScript က Website တွေကို အသက်ဝင်စေပြီး အပြန်အလှန်တုံ့ပြန်နိုင်တဲ့ feature တွေ ထပ်ထည့်ပေးပါတယ်။ ဒါပေမဲ့ သူက browser ရဲ့ အဓိကလုပ်ဆောင်မှုလမ်းကြောင်း (main thread) မှာ အလုပ်လုပ်ရတာဖြစ်ပြီး၊ အဲဒီလမ်းကြောင်းကို ပိတ်ဆို့တတ်တဲ့အတွက် TTI (Time to Interactive) နှေးတာ၊ TBT (Total Blocking Time) များတာ နဲ့ INP (Interaction to Next Paint) မကောင်းတာတွေရဲ့ အဓိကတရားခံ ဖြစ်တတ်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အဓိကကျသော-javascript-optimization-နည်းလမ်းများ\">အဓိကကျသော JavaScript Optimization နည်းလမ်းများ</h3><a class=\"sl-anchor-link\" href=\"#အဓိကကျသော-javascript-optimization-နည်းလမ်းများ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အဓိကကျသော JavaScript Optimization နည်းလမ်းများ”</span></a></div>\n<ul>\n<li>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"minification-ချုံ့ခြင်း-နှင့်-compression-ဖိသိပ်ခြင်း\">Minification (ချုံ့ခြင်း) နှင့် Compression (ဖိသိပ်ခြင်း):</h4><a class=\"sl-anchor-link\" href=\"#minification-ချုံ့ခြင်း-နှင့်-compression-ဖိသိပ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Minification (ချုံ့ခြင်း) နှင့် Compression (ဖိသိပ်ခြင်း):”</span></a></div>\n<ul>\n<li>\n<p><strong>Minification:</strong> Code ရဲ့ အလုပ်လုပ်ပုံကို မပြောင်းလဲစေဘဲ မလိုအပ်တဲ့ စာလုံးတွေ (နေရာလွတ်များ၊ မှတ်ချက်များ) ကို ဖယ်ခြင်း၊ variable နာမည်ရှည်များအစား တိုတောင်းသောနာမည်များသုံးခြင်းတို့   လုပ်ဆောင်ပြီး ဖိုင်အရွယ်အစား သေးငယ်အောင် လုပ်တာဖြစ်ပါတယ်။ Terser (အရင်က UglifyJS) လို tool တွေက လူသုံးများပါတယ်။</p>\n</li>\n<li>\n<p><strong>Compression:</strong> Minify လုပ်ထားတဲ့ ဖိုင်တွေကို Gzip ဒါမှမဟုတ် Brotli လို algorithm တွေသုံးပြီး network ကနေပို့ဆောင်ဖို့အတွက် ထပ်မံဖိသိပ်တာဖြစ်ပါတယ်။ ဒါကို server (သို့) CDN ကနေ လုပ်ဆောင်ပေးပါတယ်။</p>\n</li>\n</ul>\n</li>\n<li>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"code-splitting-code-အား-အပိုင်းငယ်များခွဲခြင်း-နှင့်-tree-shaking-မလိုအပ်သော-code-များ-ဖယ်ရှားခြင်း\">Code Splitting (Code အား အပိုင်းငယ်များခွဲခြင်း) နှင့် Tree Shaking (မလိုအပ်သော Code များ ဖယ်ရှားခြင်း):</h4><a class=\"sl-anchor-link\" href=\"#code-splitting-code-အား-အပိုင်းငယ်များခွဲခြင်း-နှင့်-tree-shaking-မလိုအပ်သော-code-များ-ဖယ်ရှားခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Code Splitting (Code အား အပိုင်းငယ်များခွဲခြင်း) နှင့် Tree Shaking (မလိုအပ်သော Code များ ဖယ်ရှားခြင်း):”</span></a></div>\n<ul>\n<li><strong>Code Splitting:</strong> JavaScript codes များ (bundle) တစ်ခုတည်းကို အပိုင်းသေးသေးလေးတွေ ခွဲထုတ်ပြီး လိုအပ်သလို၊ ဒါမှမဟုတ် တစ်ပြိုင်တည်း ခေါ်ယူသုံးစွဲနိုင်အောင် လုပ်တာပါ။ Webpack, Rollup, Parcel လို ခေတ်မီ bundler တွေက ဒီ feature ကို ထောက်ပံ့ပေးပါတယ်။</li>\n</ul>\n<blockquote>\n<p>ဥပမာ: ရှုပ်ထွေးတဲ့ chart library တစ်ခုရဲ့ JavaScript ကို User က အဲဒီ chart ပါတဲ့ page ကို ရောက်မှသာ ခေါ်ယူသုံးစွဲစေခြင်း။</p>\n</blockquote>\n<ul>\n<li><strong>Tree Shaking:</strong>  မသုံးတဲ့ code တွေ (dead code) ကို နောက်ဆုံး product ထဲကနေ ဖယ်ထုတ်တဲ့ လုပ်ငန်းစဉ်ပါ။ Library တစ်ခုကို import လုပ်ထားပေမယ့် အထဲက function တစ်ခုပဲသုံးတယ်ဆိုရင်၊ Tree Shaking က အဲဒီ function တစ်ခုတည်းကိုပဲ ထည့်သွင်းပေးပြီး ကျန်တာတွေကို ဖယ်ချန်ခဲ့မှာပါ။</li>\n</ul>\n</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: codeSplitting,
      alt: "code splitting"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<ul>\n<li>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"script-loading-ကို-ထိန်းချုပ်ခြင်း---async-နှင့်-defer-attribute-များ\">Script Loading ကို ထိန်းချုပ်ခြင်း - async နှင့် defer Attribute များ:</h4><a class=\"sl-anchor-link\" href=\"#script-loading-ကို-ထိန်းချုပ်ခြင်း---async-နှင့်-defer-attribute-များ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Script Loading ကို ထိန်းချုပ်ခြင်း - async နှင့် defer Attribute များ:”</span></a></div>\n</li>\n</ul>\n<p>HTML ထဲမှာ <strong>async</strong> သို့မဟုတ် <strong>defer မပါတဲ့</strong> <code dir=\"auto\">&#x3C;script src=\"...\"></code> tag ကို browser ကတွေ့တဲ့အခါ:</p>\n<ol>\n<li>HTML parsing ကို ရပ်တယ်။</li>\n<li>Script file ကို Fetch တယ်။</li>\n<li>Script file ကို execute လုပ်တယ်။</li>\n<li>HTML parsing ကို ပြန်စတယ်။ (ဒါကို “<strong>parser-blocking</strong>” လို့ခေါ်ပါတယ်)။</li>\n</ol>\n<ul>\n<li>\n<p><strong><code dir=\"auto\">async</code> Attribute:</strong></p>\n<ul>\n<li><code dir=\"auto\">&#x3C;script async src=\"script.js\">&#x3C;/script></code></li>\n<li>Script file ကို HTML parsing လုပ်နေတုန်း တစ်ပြိုင်တည်း (asynchronously) fetch ပါတယ်။</li>\n<li>Script file ရောက်တာနဲ့ HTML parsing ခဏရပ်ပြီး script ကို execute လုပ်စေပါတယ်။</li>\n<li>async နဲ့ ခေါ်ထားတဲ့ script တွေက download လုပ်ပြီးတဲ့ အစဉ်အတိုင်း အလုပ်လုပ်နိုင်ပါတယ် (ဘယ်သူအရင်ပြီးလဲပေါ်မူတည်ပြီး)။ တစ်ခုနဲ့တစ်ခု မဆက်စပ်တဲ့ script တွေ (ဥပမာ - analytics script) အတွက် ကောင်းပါတယ်။</li>\n</ul>\n</li>\n<li>\n<p><strong><code dir=\"auto\">defer</code> Attribute:</strong></p>\n<ul>\n<li><code dir=\"auto\">&#x3C;script defer src=\"script.js\">&#x3C;/script></code></li>\n<li>Script file ကို HTML parsing လုပ်နေတုန်း တစ်ပြိုင်တည်း (asynchronously) fetch ပါတယ်။</li>\n<li>HTML parsing အားလုံးပြီးဆုံးမှ၊ ဒါပေမဲ့ DOMContentLoaded event မတိုင်ခင်မှာ Script ကို execute လုပ်ပါတယ်။</li>\n<li>defer နဲ့ ခေါ်ထားတဲ့ script တွေက HTML ထဲမှာ သူတို့ရေးထားတဲ့ အစဉ်အတိုင်း အလုပ်လုပ်ပါတယ်။ တစ်ခုပြီးမှ တစ်ခုလုပ်ဖို့လိုတဲ့ script တွေအတွက် ကောင်းပါတယ်။</li>\n</ul>\n</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: asyncDefer,
      alt: "async and defer"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<ul>\n<li>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"main-thread-အလုပ်များလျှော့ချခြင်း-နှင့်-long-tasks-များကို-ကောင်းမွန်အောင်ပြုလုပ်ခြင်း\">Main Thread အလုပ်များလျှော့ချခြင်း နှင့် Long Tasks များကို ကောင်းမွန်အောင်ပြုလုပ်ခြင်း</h4><a class=\"sl-anchor-link\" href=\"#main-thread-အလုပ်များလျှော့ချခြင်း-နှင့်-long-tasks-များကို-ကောင်းမွန်အောင်ပြုလုပ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Main Thread အလုပ်များလျှော့ချခြင်း နှင့် Long Tasks များကို ကောင်းမွန်အောင်ပြုလုပ်ခြင်း”</span></a></div>\n<ul>\n<li>Browser ရဲ့ main thread က JavaScript execution, page ကို render လုပ်တာ၊ user ရဲ့ input တွေကို လက်ခံတာ စတာတွေ အကုန်လုပ်ရပါတယ်။ အချိန်ကြာမြင့်စွာအလုပ်လုပ်တဲ့ JavaScript task တွေ (>50ms) က ဒီ thread ကို ပိတ်ဆို့ထားပြီး Page ကို တုံ့ပြန်မှုမရှိတာမျိုး (INP/FID မကောင်း၊ TBT များ) ဖြစ်စေပါတယ်။</li>\n<li><strong>Long Tasks များကို ရှာဖွေခြင်း:</strong> Chrome DevTools ထဲက Performance tab ကိုသုံးပါ။</li>\n<li><strong>Long Tasks များကို ခွဲခြမ်းခြင်း:</strong> ရှုပ်ထွေးတဲ့တွက်ချက်မှုတွေ၊ အချိန်ကြာတဲ့ loop တွေကို အပိုင်းသေးသေးလေးတွေခွဲပြီး main thread ကို အနားပေးပါ (ဥပမာ - setTimeout, requestAnimationFrame, requestIdleCallback တွေသုံးပြီး)။</li>\n<li><strong>Web Workers:</strong> ပြင်းထန်သော တွက်ချက်မှုများတဲ့ JavaScript တွေကို background thread (Web Workers) တွေဆီလွှဲပေးပါ။</li>\n</ul>\n</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: longTask,
      alt: "long task"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<blockquote>\n<p>Long Tasks များကြောင့် User action များကို ချက်ချင်း response မပြန်နိုင်ပါဘူး။</p>\n</blockquote>\n<ul>\n<li>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"debouncing-နှင့်-throttling-event-handlers\">Debouncing နှင့် Throttling Event Handlers:</h4><a class=\"sl-anchor-link\" href=\"#debouncing-နှင့်-throttling-event-handlers\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Debouncing နှင့် Throttling Event Handlers:”</span></a></div>\n<ul>\n<li>မကြာခဏဖြစ်ပေါ်တဲ့ event တွေ (ဥပမာ - scroll, resize, mousemove, search box မှာ စာရိုက်ခြင်း) မှာ handler တွေကို အကြိမ်တိုင်းအလုပ်လုပ်ခိုင်းရင် performance ထိခိုက်နိုင်ပါတယ်။</li>\n<li><strong>Debouncing:</strong> Event အများအပြားကို တစ်ခုတည်းအဖြစ်ပေါင်းပြီး၊ အချိန်တစ်ခုလောက် ကြာမှ handler ကို အလုပ်လုပ်စေတာ (ဥပမာ - user စာရိုက်တာရပ်သွားမှ search suggestion တွေ သွားယူတာ၊ မဟုတ်ရင် စာတစ်လုံးရိုက်တိုင်း API fetching လုပ်နေမှာပါ)။</li>\n<li><strong>Throttling:</strong> Handler တစ်ခုကို သတ်မှတ်ထားတဲ့ အချိန်အပိုင်းအခြားတစ်ခုအတွင်း တစ်ကြိမ်သာ အလုပ်လုပ်စေတာ (ဥပမာ - scroll လုပ်တိုင်း animation ကို 100ms မှာ တစ်ကြိမ်ပဲ update လုပ်တာ၊ မဟုတ်ရင် scroll ဆွဲနေတဲ့ milli seconds တိုင်း Handler က အလုပ်လုပ်နေရမှာပါ)။</li>\n</ul>\n</li>\n<li>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"third-party-script-များကို-ကောင်းမွန်အောင်ပြုလုပ်ခြင်း\">Third-Party Script များကို ကောင်းမွန်အောင်ပြုလုပ်ခြင်း:</h4><a class=\"sl-anchor-link\" href=\"#third-party-script-များကို-ကောင်းမွန်အောင်ပြုလုပ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Third-Party Script များကို ကောင်းမွန်အောင်ပြုလုပ်ခြင်း:”</span></a></div>\n<ul>\n<li>ကြော်ငြာ၊ analytics၊ social media widget တွေလို Script တွေက performance ကို အများကြီး ထိခိုက်နိုင်ပါတယ်။</li>\n<li><strong>သူတို့ရဲ့ သက်ရောက်မှုကို စစ်ဆေးပါ:</strong> Lighthouse, WebPageTest လို tool တွေသုံးပြီး သူတို့က load time နဲ့ main thread work ကို ဘယ်လောက်ထိ ပိုတိုးသွားလဲ ကြည့်ပါ။</li>\n<li><strong>Asynchronously load လုပ်ပါ:</strong> async သို့မဟုတ် defer သုံးလို့ရရင်သုံးပါ။</li>\n<li><strong>Facade များစဉ်းစားပါ:</strong> (Video တွေမှာ ဆွေးနွေးခဲ့သလို) ပေါ့ပါးတဲ့ placeholder တစ်ခုအရင်ပြပြီး user က interaction လုပ်မှ script အပြည့်အစုံကို ခေါ်ပါ။</li>\n<li><strong>Local မှာ Host လုပ်ပါ:</strong> ပြင်ပ server တွေထက် ပိုမြန်နိုင်ပါတယ်။</li>\n<li><strong>တကယ်ရောလိုအပ်လား:</strong> Third-party script တွေတိုင်းက တကယ်ပဲ လိုအပ်ရဲ့လား စစ်ဆေးပါ။</li>\n</ul>\n</li>\n<li>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"service-workers-performance-အတွက်-မိတ်ဆက်\">Service Workers (Performance အတွက် မိတ်ဆက်):</h4><a class=\"sl-anchor-link\" href=\"#service-workers-performance-အတွက်-မိတ်ဆက်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Service Workers (Performance အတွက် မိတ်ဆက်):”</span></a></div>\n<ul>\n<li>Web page နဲ့ သီးခြား နောက်ကွယ်မှာ အလုပ်လုပ်တဲ့ JavaScript ဖိုင်တွေပါ။</li>\n<li>Caching (ကြားခံသိမ်းဆည်းခြင်း): Network request တွေကို ကြားဖြတ်ဖမ်းပြီး cache ထဲက response တွေကို ပြန်ပေးနိုင်တယ်။ ဒါကြောင့် offline သုံးနိုင်တာ၊ နောက်တစ်ခေါက်ပြန်ဝင်ရင် အရမ်းမြန်ပါတယ် (PWA feature)။</li>\n<li><strong>Background Sync:</strong> Network Connection ကောင်းမှ လုပ်ရမယ့် အရာတွေကို နောက်မှလုပ်ဖို့ ချန်ထားနိုင်ပါတယ်။\n(ဒါက နည်းနည်းအဆင့်မြင့်တဲ့ အကြောင်းအရာဖြစ်ပေမယ့် performance အတွက် အစွမ်းထက်တဲ့ tool တစ်ခုပါ။)</li>\n</ul>\n</li>\n</ul>"
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

const url = "src/content/docs/web-performance/js-and-css/js-optimization.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/web-performance/js-and-css/js-optimization.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/web-performance/js-and-css/js-optimization.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
