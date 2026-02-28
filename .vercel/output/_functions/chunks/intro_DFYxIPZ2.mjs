import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import './Content-image_C5QzPmj4.mjs';
import './micro-frontend_bGR27IX2.mjs';
import 'clsx';

const frontmatter = {
  "title": "Modular Architecture ဆိုတာ ဘာလဲ",
  "description": "Modular Architecture ဆိုတာ ဘာလဲ"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "modular-architecture-ဆိုတာ-ဘာလဲ",
    "text": "Modular Architecture ဆိုတာ ဘာလဲ?"
  }, {
    "depth": 3,
    "slug": "modular-vs-micro-frontend-ဘာကွာလဲ",
    "text": "Modular vs Micro-Frontend: ဘာကွာလဲ?"
  }, {
    "depth": 3,
    "slug": "ဘာကြောင့်-modular-သုံးသင့်တာလဲ",
    "text": "ဘာကြောင့် Modular သုံးသင့်တာလဲ?"
  }, {
    "depth": 3,
    "slug": "es-modules-the-standard-way",
    "text": "ES Modules (The Standard Way)"
  }, {
    "depth": 3,
    "slug": "lazy-loading-နှင့်-code-splitting",
    "text": "Lazy Loading နှင့် Code Splitting"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>ဒီသင်ခန်းစာမှာတော့ Frontend Code တွေကို သီးခြားလွတ်လပ်တဲ့ အစိတ်အပိုင်း (Modules) တွေအဖြစ် ခွဲထုတ်ပြီး စနစ်တကျ ဖွဲ့စည်းတဲ့ <strong>Modular Architecture</strong> အကြောင်း လေ့လာသွားမှာပါ။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"modular-architecture-ဆိုတာ-ဘာလဲ\">Modular Architecture ဆိုတာ ဘာလဲ?</h3><a class=\"sl-anchor-link\" href=\"#modular-architecture-ဆိုတာ-ဘာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Modular Architecture ဆိုတာ ဘာလဲ?”</span></a></div>\n<p>Modular Architecture ဆိုတာ <strong>“စမတ်ဖုန်း (Smartphone)”</strong> တစ်လုံးလိုပါပဲ။\nဖုန်းတစ်လုံးထဲမှာ -</p>\n<ul>\n<li>📷 <strong>Camera Module</strong> (ကင်မရာပိုင်း)</li>\n<li>🔋 <strong>Battery Module</strong> (ပါဝါပိုင်း)</li>\n<li>📶 <strong>Network Module</strong> (အင်တာနက်ပိုင်း)\nဆိုပြီး အပိုင်းလိုက် ရှိကြပါတယ်။ ဒါပေမယ့် အားလုံးက ဖုန်းတစ်လုံးတည်း (Single Device) အနေနဲ့ အလုပ်လုပ်ကြပါတယ်။</li>\n</ul>\n<p>Software မှာလည်း ဒီလိုပါပဲ။ Web App တစ်ခုလုံးကို ကုဒ်တွေ ရောရေးမယ့်အစား၊ Feature အလိုက် Module လေးတွေ ခွဲထုတ်လိုက်တာပါ။</p>\n<ul>\n<li><code dir=\"auto\">User</code> Module (Login, Register, Profile)</li>\n<li><code dir=\"auto\">Product</code> Module (List, Detail, Search)</li>\n<li><code dir=\"auto\">Cart</code> Module (Add to cart, Checkout)</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"modular-vs-micro-frontend-ဘာကွာလဲ\">Modular vs Micro-Frontend: ဘာကွာလဲ?</h3><a class=\"sl-anchor-link\" href=\"#modular-vs-micro-frontend-ဘာကွာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Modular vs Micro-Frontend: ဘာကွာလဲ?”</span></a></div>\n<p>ဒါက လူမှားအများဆုံး အပိုင်းပါ။ ဥပမာလေးနဲ့ ကြည့်ရအောင်။</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Architecture</th><th>ဥပမာ</th><th>ရှင်းလင်းချက်</th></tr></thead><tbody><tr><td><strong>Modular</strong></td><td><strong>Swiss Army Knife</strong> (ဓားမြှောင်)</td><td>ဓား၊ ကတ်ကြေး၊ ဝက်အူလှည့် အားလုံးက <strong>တစ်ခုတည်း</strong> မှာ ပေါင်းစပ်ပါဝင်နေတယ်။ (Single Codebase, Single Deployment)</td></tr><tr><td><strong>Micro-Frontend</strong></td><td><strong>Toolbox</strong> (ကိရိယာသေတ္တာ)</td><td>တူ၊ လွှ၊ ဂွ အားလုံးက <strong>သီးခြားစီ</strong> ဖြစ်နေတယ်။ တူ ပျောက်သွားလည်း လွှ သုံးလို့ရတယ်။ (Multiple Codebases, Multiple Deployments)</td></tr></tbody></table>\n<blockquote>\n<p><strong>အတိုချုပ်:</strong> Modular ဆိုတာ Project တစ်ခုတည်းမှာ အခန်းကန့်တာ။ Micro-Frontend ဆိုတာ Project အသေးလေးတွေ ခွဲပြီး ပြန်ဆက်တာ။</p>\n</blockquote>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဘာကြောင့်-modular-သုံးသင့်တာလဲ\">ဘာကြောင့် Modular သုံးသင့်တာလဲ?</h3><a class=\"sl-anchor-link\" href=\"#ဘာကြောင့်-modular-သုံးသင့်တာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘာကြောင့် Modular သုံးသင့်တာလဲ?”</span></a></div>\n<ol>\n<li><strong>Organization:</strong> ကုဒ်တွေ ရှာရလွယ်တယ်။ <code dir=\"auto\">Cart</code> နဲ့ ပတ်သက်ရင် <code dir=\"auto\">Cart</code> Module ထဲ သွားရှာလိုက်ရုံပဲ။</li>\n<li><strong>Lazy Loading:</strong> လိုအပ်မှ Load လုပ်လို့ရတယ်။ (ဥပမာ - Admin Page ကို Admin ဝင်မှ Load လုပ်မယ်)</li>\n<li><strong>Encapsulation:</strong> Module တစ်ခုက ပြဿနာတက်ရင် တခြား Module ကို သိပ်မထိခိုက်ဘူး။</li>\n</ol>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"es-modules-the-standard-way\">ES Modules (The Standard Way)</h3><a class=\"sl-anchor-link\" href=\"#es-modules-the-standard-way\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ES Modules (The Standard Way)”</span></a></div>\n<p>JavaScript မှာ <code dir=\"auto\">import</code> / <code dir=\"auto\">export</code> ကို သုံးပြီး Module တွေ ခွဲတာဟာ Standard ဖြစ်ပါတယ်။</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// math.js (Module)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">add</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--1:#403F53\"><span style=\"--0:#D7DBE0\">a</span><span style=\"--0:#D6DEEB\">, </span><span style=\"--0:#D7DBE0\">b</span></span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\"> </span><span style=\"--0:#D7DBE0\">a</span><span style=\"--0:#D6DEEB\"> </span></span><span style=\"--0:#C792EA;--1:#8844AE\">+</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\"> </span><span style=\"--0:#D7DBE0\">b</span><span style=\"--0:#D6DEEB\">;</span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// main.js</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { add } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">./math.js</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#096E72\">console</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">log</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#82AAFF;--1:#3B61B0\">add</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">2</span><span style=\"--0:#D6DEEB;--1:#403F53\">));</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"// math.js (Module)export function add(a, b) {  return a + b;}// main.jsimport { add } from &#x27;./math.js&#x27;;console.log(add(1, 2));\"><div></div></button></div></figure></div>\n<p>ဒီနည်းနဲ့ ကုဒ်တွေကို သန့်ရှင်းသပ်ရပ်စွာ ထိန်းသိမ်းနိုင်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"lazy-loading-နှင့်-code-splitting\">Lazy Loading နှင့် Code Splitting</h3><a class=\"sl-anchor-link\" href=\"#lazy-loading-နှင့်-code-splitting\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Lazy Loading နှင့် Code Splitting”</span></a></div>\n<p>ဒါတွေက performance ပိုကောင်းအောင်လုပ်တဲ့ နည်းလမ်းတွေပါ။</p>\n<ul>\n<li>\n<p><strong>Lazy Loading -</strong> Module တွေကို user က လိုအပ်တဲ့အချိန်မှသာ load လုပ်တာဖြစ်တဲ့အတွက် app စဖွင့်ဖွင့်ချင်း load လုပ်ရတာ မြန်ဆန်စေပါတယ်။</p>\n</li>\n<li>\n<p><strong>Code Splitting -</strong> Application တစ်ခုလုံးကို bundle အကြီးကြီးတစ်ခုတည်းမလုပ်ဘဲ၊ လိုအပ်တဲ့ module တွေအလိုက် bundle အသေးလေးတွေ ခွဲထုတ်တာ ဖြစ်ပါတယ်။</p>\n</li>\n</ul>"
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

const url = "src/content/docs/fe-architecture/modular/intro.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/fe-architecture/modular/intro.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/fe-architecture/modular/intro.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
