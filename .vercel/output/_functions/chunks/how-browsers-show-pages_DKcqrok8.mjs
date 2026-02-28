import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const rendering = new Proxy({"src":"/_astro/rendering.CbFfdFjk.png","width":2421,"height":360,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/web-performance/rendering.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "How Browsers Show Pages & Reducing Delays",
  "description": "How Browsers Show Pages & Reducing Delays"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "browser-တစ်ခုက-code-မှ-webpage-အဖြစ်သို့-ပြောင်းလဲပုံ-the-critical-rendering-path",
    "text": "Browser တစ်ခုက Code မှ Webpage အဖြစ်သို့ ပြောင်းလဲပုံ (The Critical Rendering Path)"
  }, {
    "depth": 3,
    "slug": "render-blocking-resource-များကို-ရှာဖွေခြင်းနှင့်-လျှော့ချခြင်း",
    "text": "Render-Blocking Resource များကို ရှာဖွေခြင်းနှင့် လျှော့ချခြင်း"
  }, {
    "depth": 3,
    "slug": "browser-ကို-အချက်ပြခြင်း---resource-hints",
    "text": "Browser ကို အချက်ပြခြင်း - Resource Hints"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>Browser တွေက page များကို ဘယ်လို render လုပ်သလဲဆိုတဲ့ အခြေခံအဆင့်များနဲ့ ဒီလုပ်ဆောင်ချက်ကို ပိတ်ဆို့နှောင့်နှေးစေတဲ့ resource များကို ဘယ်လိုရှာဖွေလျှော့ချရမလဲဆိုတာကို နားလည်ရန်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"browser-တစ်ခုက-code-မှ-webpage-အဖြစ်သို့-ပြောင်းလဲပုံ-the-critical-rendering-path\">Browser တစ်ခုက Code မှ Webpage အဖြစ်သို့ ပြောင်းလဲပုံ (The Critical Rendering Path)</h3><a class=\"sl-anchor-link\" href=\"#browser-တစ်ခုက-code-မှ-webpage-အဖြစ်သို့-ပြောင်းလဲပုံ-the-critical-rendering-path\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Browser တစ်ခုက Code မှ Webpage အဖြစ်သို့ ပြောင်းလဲပုံ (The Critical Rendering Path)”</span></a></div>\n<ol>\n<li>\n<p><strong>HTML မှ DOM Tree သို့:</strong> Browser က HTML code ကိုဖတ်ပြီး element အားလုံး ပါတဲ့ မြေပုံ တစ်ခု Document Object Model - DOM ကို တည်ဆောက်သည်။</p>\n</li>\n<li>\n<p><strong>CSS မှ CSSOM Tree သို့:</strong> Browser က CSS code (stylesheet များနှင့် inline style များ) ကိုဖတ်ပြီး element တစ်ခုချင်းစီရဲ့ ပုံပန်းသဏ္ဌာန်မြေပုံ (CSS Object Model - CSSOM) ကို တည်ဆောက်သည်။</p>\n</li>\n<li>\n<p><strong>JavaScript အလုပ်လုပ်ခြင်း:</strong> JavaScript က HTML (DOM) နှင့် CSS (CSSOM) ကို ပြောင်းလဲနိုင်သည်။ သေချာ load မလုပ်ပါက HTML ဖတ်ရှုခြင်းကို ခေတ္တရပ်တန့်စေနိုင်သည်။</p>\n</li>\n<li>\n<p><strong>Render Tree တည်ဆောက်ခြင်း:</strong> Browser က DOM နှင့် CSSOM ကိုပေါင်းစပ်ပြီး page မှာ ပေါ်မဲ့ element များနှင့် သူတို့ရဲ့ style များပါဝင်သည့် Render Tree ကို ဖန်တီးသည်။</p>\n</li>\n<li>\n<p><strong>Layout (သို့မဟုတ် Reflow):</strong> Browser က Render Tree ထဲရှိ element တစ်ခုချင်းစီ၏ တိကျသောအရွယ်အစားနှင့် နေရာကို တွက်ချက်သည်။ (ဥပမာ - ဤ box သည် width 300px ရှိပြီး အပေါ်မှ 50px အကွာတွင် ရှိသည်)။</p>\n</li>\n<li>\n<p><strong>Paint:</strong> Browser က element တစ်ခုချင်းစီအတွက် pixel များကို screen ပေါ်တွင် layer များအဖြစ် ရေးဆွဲသည်။</p>\n</li>\n<li>\n<p><strong>Composite:</strong> Browser က ဆွဲပြီးသား layer အားလုံးကို ပေါင်းစပ်ပြီး နောက်ဆုံးပေါ်မည့် page ကို screen ပေါ်တွင် ပြသသည်။</p>\n</li>\n</ol>\n"
    }), createVNode($$ContentImage, {
      src: rendering,
      alt: "browser rendering process"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"render-blocking-resource-များကို-ရှာဖွေခြင်းနှင့်-လျှော့ချခြင်း\">Render-Blocking Resource များကို ရှာဖွေခြင်းနှင့် လျှော့ချခြင်း</h3><a class=\"sl-anchor-link\" href=\"#render-blocking-resource-များကို-ရှာဖွေခြင်းနှင့်-လျှော့ချခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Render-Blocking Resource များကို ရှာဖွေခြင်းနှင့် လျှော့ချခြင်း”</span></a></div>\n<ul>\n<li>Rendering-blocking resources တွေဆိုတာ browser ရဲ့ rendering process ကို block ဖြစ်စေသော အရာများဖြစ်ပါတယ်။\n<ul>\n<li><code dir=\"auto\">&#x3C;head></code> ထဲရှိ ပြင်ပ CSS ဖိုင်များ (<code dir=\"auto\">&#x3C;link rel=\"stylesheet\" href=\"...\"></code>) သည် ပုံမှန်အားဖြင့် render-blocking ဖြစ်စေပါတယ်။ (browser က အဲ့ဒီ file တွေကို စောင့်ပြီးမှ rendering process ကို လုပ်တာပါ)။</li>\n<li><code dir=\"auto\">&#x3C;head></code> ထဲရှိ async သို့မဟုတ် defer မပါသော ပြင်ပ JavaScript ဖိုင်များ (<code dir=\"auto\">&#x3C;script src=\"...\"></code>) ကလဲ render-blocking ဖြစ်စေပါတယ်။</li>\n<li>ဒီကြန့်ကြာမှုများက FCP, LCP နှင့် page load time ကို နှေးကွေးစေပါတယ်။</li>\n</ul>\n</li>\n<li>အဓိကနည်းလမ်းများ (Quick Recap):\n<ul>\n<li>JavaScript အတွက်:\n<ul>\n<li>async သို့မဟုတ် defer attribute များသုံးပါ (ဖော်ပြခဲ့ပြီး)။</li>\n<li>ချက်ချင်းမလိုအပ်သော script များကို <code dir=\"auto\">&#x3C;body></code> ၏အဆုံးသို့ ရွှေ့ပါ။</li>\n<li>အလွန်သေးငယ်ပြီး အရေးကြီးသော script များကို inline ထည့်ရေးပါ (သတိဖြင့်သုံးပါ)။</li>\n</ul>\n</li>\n<li>CSS အတွက်:\n<ul>\n<li>Critical CSS ကို inline ထည့်ရေးပါ (ဖော်ပြခဲ့)။</li>\n<li>အရေးမကြီးသော CSS များကို asynchronously ခေါ်ပါ။</li>\n<li>CSS ပမာဏကို လျှော့ချပါ။</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"browser-ကို-အချက်ပြခြင်း---resource-hints\">Browser ကို အချက်ပြခြင်း - Resource Hints</h3><a class=\"sl-anchor-link\" href=\"#browser-ကို-အချက်ပြခြင်း---resource-hints\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Browser ကို အချက်ပြခြင်း - Resource Hints”</span></a></div>\n<p>HTML <code dir=\"auto\">&#x3C;head></code> ထဲက <code dir=\"auto\">&#x3C;link rel=\"...\"></code> tag များတွင် <strong>Attributes</strong> များ ထည့်သွင်းခြင်းဖြင့် browser အား လိုအပ်လာနိုင်သော resource များအကြောင်း ကြိုတင်အချက်ပြနိုင်ပါသည်။ ဒီလိုလုပ်တာက browser ကို အလုပ်တွေ ပိုမြန်မြန်ဆန်ဆန်လုပ်နိုင်အောင် ကူညီပေးသလိုပါပဲ။</p>\n<ul>\n<li><strong>dns-prefetch:</strong>\n<ul>\n<li><code dir=\"auto\">&#x3C;link rel=\"dns-prefetch\" href=\"//example.com\"></code></li>\n<li>မကြာမီ လိုအပ်လာနိုင်သော resource များအတွက် အခြား website (domain) ကို DNS lookup (IP address ရှာဖွေခြင်း) ကို လုပ်ဆောင်ရန် browser ကိုကြိုပြောသည်။ (ဖုန်းမခေါ်ခင် ဖုန်းနံပါတ်ကြိုရှာထားသလိုမျိုးဖြစ်သည်။)</li>\n</ul>\n</li>\n<li><strong>preconnect:</strong>\n<ul>\n<li><code dir=\"auto\">&#x3C;link rel=\"preconnect\" href=\"https://example.com\"></code></li>\n<li>dns-prefetch ထက်ပိုသည်။ <strong>DNS lookup</strong> လုပ်သည့်အပြင် သတ်မှတ်ထားသော domain သို့ <strong>TCP handshake နှင့် TLS negotiation</strong> အပါအဝင် connection တစ်ခုကိုပါ ကြိုတင်တည်ဆောက်သည်။ ချက်ချင်း အသုံးပြုမည့် အရေးကြီးသော <strong>third-party service</strong> များအတွက်သုံးပါ။ preconnect ကို တကယ် အရေးကြီးတဲ့ file တွေ အတွက်သာ သုံးပါ။ မဟုတ်ပါက တခြားအရေးကြီးတဲ့ file တွေ download လုပ်တာကို နှေးသွားစေနိုင်ပါတယ်။</li>\n</ul>\n</li>\n<li><strong>preload:</strong>\n<ul>\n<li><code dir=\"auto\">&#x3C;link rel=\"preload\" href=\"/critical-script.js\" as=\"script\"></code></li>\n<li><code dir=\"auto\">&#x3C;link rel=\"preload\" href=\"/main-image.webp\" as=\"image\"></code></li>\n<li>“ဤဖိုင်သည် လက်ရှိ page အတွက် အလွန်အရေးကြီးပါသည်၊ ၎င်းကို ဦးစားပေးအဆင့်ဖြင့် ယခုချက်ချင်း download လုပ်ပါ” ဟု browser အား အတိအလင်း ညွှန်ကြားသည်။ <strong><code dir=\"auto\">as</code></strong> attribute က မည်သည့်ဖိုင်အမျိုးအစားဖြစ်သည်ကို ပြောသည်။</li>\n<li>Browser က နောက်မှတွေ့သော်လည်း မြန်မြန်လိုအပ်သော resource များအတွက် (ဥပမာ - LCP ပုံ၊ အရေးကြီးသော font၊ အရေးပါသော script) အသုံးပြုသည်။</li>\n<li>အများကြီး preload လုပ်ခြင်းက အခြားအရေးကြီးသော resource များ၏ bandwidth ကိုယူသုံးကာ performance ကိုထိခိုက်စေနိုင်သည်။ အမှန်တကယ်အရေးကြီးပြီး နောက်ကျမှတွေ့ရှိသော resource များအတွက်သာ သုံးပါ။</li>\n</ul>\n</li>\n<li><strong>prefetch:</strong>\n<ul>\n<li><code dir=\"auto\">&#x3C;link rel=\"prefetch\" href=\"/next-page-styles.css\" as=\"style\"></code></li>\n<li>နောက်လာမည့် navigation (ဥပမာ - user က နောက်စာမျက်နှာသို့ click သွားလျှင်) အတွက် resource တစ်ခုလိုအပ်လာနိုင်သည်ဟု browser အား အနိမ့်ဆုံးဦးစားပေးအဖြစ် အချက်ပြသည်။ Browser က အပို capacity ရှိမှသာ download လုပ်မည် ဖြစ်သည်။</li>\n</ul>\n</li>\n</ul>\n"
    }), createVNode($$Aside, {
      title: "အနှစ်ချုပ်",
      "set:html": "<ul>\n<li>JavaScript ကို ပိုမိုမြန်ဆန်အောင်လုပ်ရာတွင် ဖိုင်အရွယ်အစားချုံ့ခြင်း (minify, compress)၊ လိုအပ်သည်များကိုသာ ခေါ်ယူခြင်း (code splitting)၊ page ပေါ်လာခြင်းကို မပိတ်ဆို့စေရန် async/defer သုံးခြင်း၊ main thread အလုပ်များလျှော့ချခြင်း၊ နှင့် ပြင်ပ website များမှ script များကို သတိဖြင့်စီမံခြင်းတို့ ပါဝင်သည်။</li>\n<li>CSS ကို ပိုမိုကောင်းမွန်အောင်လုပ်ရာတွင် ဖိုင်အရွယ်အစားချုံ့ခြင်း၊ အရေးအကြီးဆုံး style များကိုသာ အရင်ဆုံးပေါ်အောင်လုပ်ခြင်း (Critical CSS)၊ အသုံးမပြုတော့သော style များဖယ်ရှားခြင်း၊ နှင့် browser အား page ကို ရေးဆွဲရာတွင် ၀န်မပိစေသော CSS ရေးသားခြင်းတို့ ပါဝင်သည်။</li>\n<li>Browser Rendering process (The Critical Rendering Path) ကို နားလည်ခြင်းက သင့် site ၏ ပထမဆုံးမြင်ကွင်းကို နှေးစေသော အရာများကို ရှာဖွေပြုပြင်ရာတွင် အထောက်အကူ ရသည်။</li>\n<li>Resource Hints (dns-prefetch, preconnect, preload, prefetch) များကို မှန်ကန်စွာအသုံးပြုပါက resource loading ကို ပိုမိုထိရောက်အောင်ပြုလုပ်ပေးနိုင်သည်။</li>\n</ul>"
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

const url = "src/content/docs/web-performance/js-and-css/how-browsers-show-pages.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/web-performance/js-and-css/how-browsers-show-pages.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/web-performance/js-and-css/how-browsers-show-pages.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
