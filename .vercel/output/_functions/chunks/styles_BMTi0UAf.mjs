import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import 'clsx';

const frontmatter = {
  "title": "Changing Styles",
  "description": "CSS Styles များကို JavaScript ဖြင့် ပြောင်းလဲခြင်း"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "ဥပမာ",
    "text": "ဥပမာ"
  }, {
    "depth": 2,
    "slug": "class-တွေ-ချိန်းတာ-ပိုကောင်းတယ်",
    "text": "Class တွေ ချိန်းတာ ပိုကောင်းတယ်"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>JavaScript ကနေ CSS ကို လှမ်းပြင်ရင် <code dir=\"auto\">style</code> property ကို သုံးရပါတယ်။\nတစ်ခု သတိထားရမှာက CSS မှာ <code dir=\"auto\">-</code> (dash) ပါတဲ့ နာမည်တွေကို JavaScript မှာ <strong>CamelCase</strong> ပြောင်းရေးရပါတယ်။</p>\n<ul>\n<li><code dir=\"auto\">background-color</code> -> <code dir=\"auto\">backgroundColor</code></li>\n<li><code dir=\"auto\">font-size</code> -> <code dir=\"auto\">fontSize</code></li>\n<li><code dir=\"auto\">margin-top</code> -> <code dir=\"auto\">marginTop</code></li>\n</ul>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"ဥပမာ\">ဥပမာ</h2><a class=\"sl-anchor-link\" href=\"#ဥပမာ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဥပမာ”</span></a></div>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">let </span><span style=\"--0:#D7DBE0;--1:#403F53\">box</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#7FDBCA;--1:#096E72\">document</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">querySelector</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">.box</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// အရောင်ပြောင်းမယ်</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#096E72\">box</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">style</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">backgroundColor</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">red</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// စာလုံးဆိုဒ် ကြီးမယ်</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#096E72\">box</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">style</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">fontSize</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">20px</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// ဘောင်ဖျောက်မယ်</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#096E72\">box</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">style</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">border</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">none</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"let box = document.querySelector(&#x22;.box&#x22;);// အရောင်ပြောင်းမယ်box.style.backgroundColor = &#x22;red&#x22;;// စာလုံးဆိုဒ် ကြီးမယ်box.style.fontSize = &#x22;20px&#x22;;// ဘောင်ဖျောက်မယ်box.style.border = &#x22;none&#x22;;\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"class-တွေ-ချိန်းတာ-ပိုကောင်းတယ်\">Class တွေ ချိန်းတာ ပိုကောင်းတယ်</h2><a class=\"sl-anchor-link\" href=\"#class-တွေ-ချိန်းတာ-ပိုကောင်းတယ်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Class တွေ ချိန်းတာ ပိုကောင်းတယ်”</span></a></div>\n<p>Style တွေ အများကြီးကို တစ်ကြောင်းချင်း လိုက်ရေးနေမယ့်အစား၊ CSS Class တစ်ခု ကြိုဆောက်ထားပြီး JavaScript ကနေ အဲဒီ Class ကို ထည့်ပေး/ထုတ်ပေးတာ ပိုကောင်းပါတယ်။ (Later in <code dir=\"auto\">classList</code> topic)</p>"
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
const url = "src/content/docs/javascript/dom-manipulation/styles.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/javascript/dom-manipulation/styles.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/javascript/dom-manipulation/styles.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
