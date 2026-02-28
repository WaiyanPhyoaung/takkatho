import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import 'clsx';

const frontmatter = {
  "title": "Arrow Functions",
  "description": "ခေတ်မီ Function ရေးနည်း (Modern Syntax)"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "regular-vs-arrow-function",
    "text": "Regular vs Arrow Function"
  }, {
    "depth": 3,
    "slug": "ရိုးရိုး-function",
    "text": "ရိုးရိုး Function"
  }, {
    "depth": 3,
    "slug": "arrow-function",
    "text": "Arrow Function"
  }, {
    "depth": 2,
    "slug": "ပိုတိုအောင်-ရေးနည်း",
    "text": "ပိုတိုအောင် ရေးနည်း"
  }, {
    "depth": 2,
    "slug": "ဘယ်အချိန်မှာ-သုံးမလဲ",
    "text": "ဘယ်အချိန်မှာ သုံးမလဲ?"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>ES6 (2015) ဗားရှင်းမှာ Function ရေးနည်းအသစ် တစ်ခု ပေါ်လာပါတယ်။ အဲဒါကတော့ <strong>Arrow Function</strong> ပါ။ ပိုတိုတယ်၊ ပိုသပ်ရပ်တယ်။ <code dir=\"auto\">=></code> (မြှားပုံလေး) ကို သုံးထားလို့ Arrow Function လို့ ခေါ်တာပါ။</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"regular-vs-arrow-function\">Regular vs Arrow Function</h2><a class=\"sl-anchor-link\" href=\"#regular-vs-arrow-function\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Regular vs Arrow Function”</span></a></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ရိုးရိုး-function\">ရိုးရိုး Function</h3><a class=\"sl-anchor-link\" href=\"#ရိုးရိုး-function\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ရိုးရိုး Function”</span></a></div>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">sayHi</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Hi!</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"function sayHi() {  return &#x22;Hi!&#x22;;}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"arrow-function\">Arrow Function</h3><a class=\"sl-anchor-link\" href=\"#arrow-function\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Arrow Function”</span></a></div>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">sayHi</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#C792EA;--1:#8844AE\"> => {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">return </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Hi!</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"const sayHi = () => {  return &#x22;Hi!&#x22;;}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"ပိုတိုအောင်-ရေးနည်း\">ပိုတိုအောင် ရေးနည်း</h2><a class=\"sl-anchor-link\" href=\"#ပိုတိုအောင်-ရေးနည်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ပိုတိုအောင် ရေးနည်း”</span></a></div>\n<p>Code က တစ်ကြောင်းတည်း၊ <code dir=\"auto\">return</code> ပဲ လုပ်မယ်ဆိုရင် <code dir=\"auto\">{}</code> နဲ့ <code dir=\"auto\">return</code> ဖြုတ်လိုက်လို့ ရပါတယ်။</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// အတိုဆုံး ပုံစံ</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">add</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">a</span><span style=\"--0:#C792EA;--1:#8844AE\">, </span><span style=\"--0:#D7DBE0;--1:#403F53\">b</span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#C792EA;--1:#8844AE\"> => </span><span style=\"--0:#D7DBE0;--1:#403F53\">a</span><span style=\"--0:#C792EA;--1:#8844AE\"> + </span><span style=\"--1:#403F53\"><span style=\"--0:#D7DBE0\">b</span><span style=\"--0:#D6DEEB\">;</span></span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#096E72\">console</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">log</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#82AAFF;--1:#3B61B0\">add</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">5</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">10</span><span style=\"--0:#D6DEEB;--1:#403F53\">)); </span><span style=\"--0:#919F9F;--1:#5D6376\">// 15</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"// အတိုဆုံး ပုံစံconst add = (a, b) => a + b;console.log(add(5, 10)); // 15\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"ဘယ်အချိန်မှာ-သုံးမလဲ\">ဘယ်အချိန်မှာ သုံးမလဲ?</h2><a class=\"sl-anchor-link\" href=\"#ဘယ်အချိန်မှာ-သုံးမလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘယ်အချိန်မှာ သုံးမလဲ?”</span></a></div>\n<p><code dir=\"auto\">this</code> keyword နဲ့ ပတ်သက်တဲ့ ကိစ္စတွေ လွဲရင် ကျန်တဲ့ နေရာအတော်များများမှာ Arrow Function ကို သုံးလေ့ ရှိကြပါတယ်။ React လို Framework တွေမှာ Arrow Function ကို အဓိက သုံးပါတယ်။</p>"
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
const url = "src/content/docs/javascript/functions/arrow-functions.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/javascript/functions/arrow-functions.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/javascript/functions/arrow-functions.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
