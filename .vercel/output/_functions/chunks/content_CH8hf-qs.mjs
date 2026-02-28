import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import 'clsx';

const frontmatter = {
  "title": "Changing Content",
  "description": "စာသားနှင့် HTML ပြောင်းလဲခြင်း"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "1-innertext",
    "text": "1. innerText"
  }, {
    "depth": 2,
    "slug": "2-textcontent-အသုံးအများဆုံး",
    "text": "2. textContent (အသုံးအများဆုံး)"
  }, {
    "depth": 2,
    "slug": "3-innerhtml-powerful-but-dangerous-️",
    "text": "3. innerHTML (Powerful but Dangerous ⚠️)"
  }, {
    "depth": 3,
    "slug": "ဘယ်ဟာ-သုံးမလဲ",
    "text": "ဘယ်ဟာ သုံးမလဲ?"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>Element တစ်ခုကို ဖမ်းလို့ ရပြီဆိုရင် သူ့ထဲက စာတွေကို ပြင်လို့ရပါပြီ။</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"1-innertext\">1. <code dir=\"auto\">innerText</code></h2><a class=\"sl-anchor-link\" href=\"#1-innertext\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “1. innerText”</span></a></div>\n<p>Element ထဲက <strong>စာသား (Text)</strong> ကိုပဲ ယူတယ်၊ ပြင်တယ်။ HTML tag တွေကို နားမလည်ပါဘူး။ လူမျက်စိနဲ့ မြင်ရတဲ့ စာသားကိုပဲ ဦးစားပေးတယ်။</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">let </span><span style=\"--0:#D7DBE0;--1:#403F53\">title</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#7FDBCA;--1:#096E72\">document</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">querySelector</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">h1</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#096E72\">title</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">innerText</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">New Title</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">; </span><span style=\"--0:#919F9F;--1:#5D6376\">// စာပြောင်းသွားမယ်</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"let title = document.querySelector(&#x22;h1&#x22;);title.innerText = &#x22;New Title&#x22;; // စာပြောင်းသွားမယ်\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"2-textcontent-အသုံးအများဆုံး\">2. <code dir=\"auto\">textContent</code> (အသုံးအများဆုံး)</h2><a class=\"sl-anchor-link\" href=\"#2-textcontent-အသုံးအများဆုံး\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “2. textContent (အသုံးအများဆုံး)”</span></a></div>\n<p><code dir=\"auto\">innerText</code> နဲ့ တူပေမယ့်၊ သူက CSS နဲ့ ဖျောက်ထားတဲ့ (<code dir=\"auto\">display: none</code>) စာတွေကိုပါ ယူပေးနိုင်တယ်။ နည်းနည်းပိုမြန်တယ်။</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#096E72\">title</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">textContent</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Another Title</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"title.textContent = &#x22;Another Title&#x22;;\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"3-innerhtml-powerful-but-dangerous-️\">3. <code dir=\"auto\">innerHTML</code> (Powerful but Dangerous ⚠️)</h2><a class=\"sl-anchor-link\" href=\"#3-innerhtml-powerful-but-dangerous-️\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “3. innerHTML (Powerful but Dangerous ⚠️)”</span></a></div>\n<p>HTML tag တွေပါ ထည့်ရေးလို့ ရတယ်။</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">let </span><span style=\"--0:#D7DBE0;--1:#403F53\">container</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#7FDBCA;--1:#096E72\">document</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">querySelector</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">div</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#096E72\">container</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">innerHTML</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">&#x3C;h1>This is bold!&#x3C;/h1></span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">; </span><span style=\"--0:#919F9F;--1:#5D6376\">// Bold စာလုံးကြီး ဖြစ်သွားမယ်</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"let container = document.querySelector(&#x22;div&#x22;);container.innerHTML = &#x22;<h1>This is bold!</h1>&#x22;; // Bold စာလုံးကြီး ဖြစ်သွားမယ်\"><div></div></button></div></figure></div>\n<p><strong>သတိထားရန်:</strong> တတ်နိုင်ရင် မသုံးသင့်ပါဘူး။ Hacker တွေ Script တွေ ထည့်ပြီး တိုက်ခိုက် (XSS Attack) လို့ ရသွားနိုင်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဘယ်ဟာ-သုံးမလဲ\">ဘယ်ဟာ သုံးမလဲ?</h3><a class=\"sl-anchor-link\" href=\"#ဘယ်ဟာ-သုံးမလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘယ်ဟာ သုံးမလဲ?”</span></a></div>\n<ul>\n<li>စာသားသက်သက်ဆိုရင် <code dir=\"auto\">textContent</code> သုံးပါ။</li>\n<li>HTML tag တွေပါ လိုအပ်မှ <code dir=\"auto\">innerHTML</code> သုံးပါ။</li>\n</ul>"
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
const url = "src/content/docs/javascript/dom-manipulation/content.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/javascript/dom-manipulation/content.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/javascript/dom-manipulation/content.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
