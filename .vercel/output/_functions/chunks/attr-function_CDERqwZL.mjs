import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "Enhanced attr() Function",
  "description": "HTML Attribute များကို CSS တွင် တိုက်ရိုက်အသုံးပြုခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "အသုံးပြုပုံ",
    "text": "အသုံးပြုပုံ"
  }, {
    "depth": 3,
    "slug": "ဘာတွေ-ကောင်းသွားလဲ",
    "text": "ဘာတွေ ကောင်းသွားလဲ?"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "HTML to CSS Bridge",
      "set:html": "<p>အရင်က <code dir=\"auto\">attr()</code> ကို <code dir=\"auto\">content</code> property တစ်ခုတည်းမှာပဲ သုံးလို့ရပါတယ်။ အခုတော့ နေရာတိုင်းမှာ သုံးလို့ရပါပြီ။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အသုံးပြုပုံ\">အသုံးပြုပုံ</h3><a class=\"sl-anchor-link\" href=\"#အသုံးပြုပုံ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အသုံးပြုပုံ”</span></a></div>\n<p>HTML မှာ ရေးထားတဲ့ တန်ဖိုးတွေကို CSS ကနေ လှမ်းယူပြီး Style လုပ်လို့ရပါတယ်။</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"html\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">div</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">class</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">grid</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">data-columns</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">3</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">data-gap</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">20px</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5F636F\">&#x3C;!-- Items --></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">div</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<div class=&#x22;grid&#x22; data-columns=&#x22;3&#x22; data-gap=&#x22;20px&#x22;>  <!-- Items --></div>\"><div></div></button></div></figure></div>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.grid</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">display</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6D6D;--1:#984E4D\">grid</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5F636F\">/* HTML attribute 'data-columns' ကို နံပါတ်အနေနဲ့ ယူမယ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">grid-template-columns</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#C5E478;--1:#3B61B0\">repeat</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C5E478;--1:#3B61B0\">attr</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\">(</span><span style=\"--0:#D7DBE0\">data-columns</span><span style=\"--0:#D6DEEB\"> </span><span style=\"--0:#D7DBE0\">type(&#x3C;number></span><span style=\"--0:#D6DEEB\">), </span></span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">), </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">1</span><span style=\"--0:#FFEB95\">fr</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5F636F\">/* HTML attribute 'data-gap' ကို length အနေနဲ့ ယူမယ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">gap</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#C5E478;--1:#3B61B0\">attr</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\">(</span><span style=\"--0:#D7DBE0\">data-gap</span><span style=\"--0:#D6DEEB\"> </span><span style=\"--0:#D7DBE0\">type(&#x3C;length></span><span style=\"--0:#D6DEEB\">), </span></span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">10</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".grid {  display: grid;  /* HTML attribute &#x27;data-columns&#x27; ကို နံပါတ်အနေနဲ့ ယူမယ် */  grid-template-columns: repeat(attr(data-columns type(<number>), 1), 1fr);  /* HTML attribute &#x27;data-gap&#x27; ကို length အနေနဲ့ ယူမယ် */  gap: attr(data-gap type(<length>), 10px);}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဘာတွေ-ကောင်းသွားလဲ\">ဘာတွေ ကောင်းသွားလဲ?</h3><a class=\"sl-anchor-link\" href=\"#ဘာတွေ-ကောင်းသွားလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘာတွေ ကောင်းသွားလဲ?”</span></a></div>\n<ul>\n<li><strong>Dynamic Styling:</strong> HTML ဘက်ကနေ Style တွေကို ထိန်းချုပ်လို့ ရသွားတယ်။</li>\n<li><strong>Component Libraries:</strong> React/Vue component တွေမှာ prop တွေကို CSS variable အနေနဲ့ pass စရာမလိုဘဲ attribute အနေနဲ့ တိုက်ရိုက် pass လို့ ရနိုင်တယ်။</li>\n</ul>"
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

const url = "src/content/docs/advanced-css/ergonomics/attr-function.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-css/ergonomics/attr-function.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-css/ergonomics/attr-function.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
