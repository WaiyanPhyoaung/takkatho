import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "@property At-Rule",
  "description": "Custom Properties (Variables) များကို Type သတ်မှတ်ခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "ဘာလို့-လိုအပ်တာလဲ",
    "text": "ဘာလို့ လိုအပ်တာလဲ?"
  }, {
    "depth": 3,
    "slug": "အသုံးပြုပုံ",
    "text": "အသုံးပြုပုံ"
  }, {
    "depth": 3,
    "slug": "syntax-types",
    "text": "Syntax Types"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "Smarter Variables",
      "set:html": "<p>ပုံမှန် CSS Variable (<code dir=\"auto\">--color: red</code>) တွေက စာသား (String) အနေနဲ့ပဲ သိမ်းပါတယ်။ <code dir=\"auto\">@property</code> နဲ့ဆိုရင် “ဒါက အရောင်၊ ဒါက နံပါတ်” ဆိုပြီး Type သတ်မှတ်လို့ ရပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဘာလို့-လိုအပ်တာလဲ\">ဘာလို့ လိုအပ်တာလဲ?</h3><a class=\"sl-anchor-link\" href=\"#ဘာလို့-လိုအပ်တာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘာလို့ လိုအပ်တာလဲ?”</span></a></div>\n<p>အဓိကက <strong>Animation</strong> အတွက်ပါ။ Browser က Variable တစ်ခုကို ဘယ်လို ပြောင်းလဲ (Interpolate) ရမလဲဆိုတာ Type သိမှ လုပ်ပေးနိုင်တာပါ။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အသုံးပြုပုံ\">အသုံးပြုပုံ</h3><a class=\"sl-anchor-link\" href=\"#အသုံးပြုပုံ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အသုံးပြုပုံ”</span></a></div>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">/* Variable ကို ကြေညာမယ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">@property</span><span style=\"--0:#D6DEEB;--1:#403F53\"> --my-gradient-angle {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C792EA;--1:#8844AE\">syntax: '&#x3C;angle</span><span style=\"--0:#7FDBCA;--1:#096E72\">></span><span style=\"--0:#C792EA;--1:#8844AE\">';</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#919F9F;--1:#5F636F\">/* ဒါက ဒီဂရီ ဖြစ်ရမယ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#FF6D6D;--1:#984E4D\">initial-value</span><span style=\"--0:#C792EA;--1:#8844AE\">: 0deg;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">inherits: false;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">/* ပြီးရင် Animation လုပ်လို့ရပြီ */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.card</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">background</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#C5E478;--1:#3B61B0\">linear-gradient</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C5E478;--1:#3B61B0\">var</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C5E478;--1:#3B61B0\">--my-gradient-angle</span><span style=\"--0:#D6DEEB;--1:#403F53\">), </span><span style=\"--0:#7FDBCA;--1:#096E72\">blue</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#7FDBCA;--1:#096E72\">purple</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">animation</span><span style=\"--0:#D6DEEB;--1:#403F53\">: rotate-gradient </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">2</span><span style=\"--0:#FFEB95\">s</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#FF6D6D;--1:#984E4D\">linear</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#FF6D6D;--1:#984E4D\">infinite</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">@keyframes</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\"> </span><span style=\"--0:#D7DBE0\">rotate-gradient</span><span style=\"--0:#D6DEEB\"> {</span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">to {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C5E478;--1:#3B61B0\">--my-gradient-angle</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">360</span><span style=\"--0:#FFEB95\">deg</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">; </span><span style=\"--0:#919F9F;--1:#5F636F\">/* Browser က 0 ကနေ 360 ကို ဖြည်းဖြည်းချင်း ပြောင်းပေးတတ်သွားပြီ */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"/* Variable ကို ကြေညာမယ် */@property --my-gradient-angle {  syntax: &#x27;<angle>&#x27;; /* ဒါက ဒီဂရီ ဖြစ်ရမယ် */  initial-value: 0deg;  inherits: false;}/* ပြီးရင် Animation လုပ်လို့ရပြီ */.card {  background: linear-gradient(var(--my-gradient-angle), blue, purple);  animation: rotate-gradient 2s linear infinite;}@keyframes rotate-gradient {  to {    --my-gradient-angle: 360deg; /* Browser က 0 ကနေ 360 ကို ဖြည်းဖြည်းချင်း ပြောင်းပေးတတ်သွားပြီ */  }}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"syntax-types\">Syntax Types</h3><a class=\"sl-anchor-link\" href=\"#syntax-types\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Syntax Types”</span></a></div>\n<ul>\n<li><code dir=\"auto\">&#x3C;color></code></li>\n<li><code dir=\"auto\">&#x3C;length></code> (px, rem, etc.)</li>\n<li><code dir=\"auto\">&#x3C;angle></code> (deg, rad)</li>\n<li><code dir=\"auto\">&#x3C;number></code></li>\n<li><code dir=\"auto\">&#x3C;percentage></code></li>\n</ul>"
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

const url = "src/content/docs/advanced-css/ergonomics/at-property.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-css/ergonomics/at-property.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-css/ergonomics/at-property.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
