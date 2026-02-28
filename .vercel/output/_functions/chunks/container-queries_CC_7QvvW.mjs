import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "Container Scroll State Queries",
  "description": "Container ၏ Scroll အနေအထားပေါ်မူတည်ပြီး Style ပြောင်းခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "အသုံးပြုပုံ",
    "text": "အသုံးပြုပုံ"
  }, {
    "depth": 3,
    "slug": "query-လုပ်နိုင်သော-state-များ",
    "text": "Query လုပ်နိုင်သော State များ"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "Scroll Aware Styling",
      "set:html": "<p>Container Queries က Element ရဲ့ Size ကို သိသလို၊ Scroll State Queries က Element ရဲ့ “Scroll နေလား?၊ ထိပ်ဆုံးရောက်နေလား?” ဆိုတာကို သိပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အသုံးပြုပုံ\">အသုံးပြုပုံ</h3><a class=\"sl-anchor-link\" href=\"#အသုံးပြုပုံ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အသုံးပြုပုံ”</span></a></div>\n<p>Container တစ်ခုကို <code dir=\"auto\">container-type: scroll-state</code> လို့ သတ်မှတ်ပြီး၊ အတွင်းက Element တွေကို <code dir=\"auto\">@container</code> နဲ့ ဖမ်းရေးရပါတယ်။</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.scroll-container</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">overflow-y</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6D6D;--1:#984E4D\">auto</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">container-type</span><span style=\"--0:#D6DEEB;--1:#403F53\">: scroll-state; </span><span style=\"--0:#919F9F;--1:#5F636F\">/* Scroll state ကို စောင့်ကြည့်မယ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.sticky-header</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">position</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6D6D;--1:#984E4D\">sticky</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">top</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">padding</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">1</span><span style=\"--0:#FFEB95\">rem</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">background</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#7FDBCA;--1:#096E72\">white</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">transition</span><span style=\"--0:#D6DEEB;--1:#403F53\">: box-shadow </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">0.3</span><span style=\"--0:#FFEB95\">s</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">/* Container က Scroll လုပ်နေတဲ့ အချိန် (ထိပ်ဆုံးမှာ မဟုတ်တော့ရင်) */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">@container</span><span style=\"--0:#D6DEEB;--1:#403F53\"> scroll-state(stuck: top) {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C5E478;--1:#3B61B0\">.sticky-header</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#80CBC4;--1:#096E72\">box-shadow</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">2</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">10</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">rgba</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span><span style=\"--0:#F78C6C;--1:#AA0982\">0.1</span><span style=\"--0:#D6DEEB;--1:#403F53\">); </span><span style=\"--0:#919F9F;--1:#5F636F\">/* Shadow လေး ပေါ်လာမယ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#80CBC4;--1:#096E72\">background</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#C5E478;--1:#3B61B0\">rgba</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">255</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">255</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">255</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">0.9</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".scroll-container {  overflow-y: auto;  container-type: scroll-state; /* Scroll state ကို စောင့်ကြည့်မယ် */}.sticky-header {  position: sticky;  top: 0;  padding: 1rem;  background: white;  transition: box-shadow 0.3s;}/* Container က Scroll လုပ်နေတဲ့ အချိန် (ထိပ်ဆုံးမှာ မဟုတ်တော့ရင်) */@container scroll-state(stuck: top) {  .sticky-header {    box-shadow: 0 2px 10px rgba(0,0,0,0.1); /* Shadow လေး ပေါ်လာမယ် */    background: rgba(255, 255, 255, 0.9);  }}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"query-လုပ်နိုင်သော-state-များ\">Query လုပ်နိုင်သော State များ</h3><a class=\"sl-anchor-link\" href=\"#query-လုပ်နိုင်သော-state-များ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Query လုပ်နိုင်သော State များ”</span></a></div>\n<ul>\n<li><code dir=\"auto\">scroll-state(stuck: top)</code>: Sticky element က အပေါ်မှာ ကပ်နေချိန်။</li>\n<li><code dir=\"auto\">scroll-state(stuck: bottom)</code>: Sticky element က အောက်မှာ ကပ်နေချိန်။</li>\n<li><code dir=\"auto\">scroll-state(snapped: x)</code>: Scroll snap point တစ်ခုခုမှာ ရပ်နေချိန်။</li>\n<li><code dir=\"auto\">scroll-state(overflowing: block)</code>: Content တွေ များလွန်းလို့ Scroll bar ပေါ်နေချိန်။</li>\n</ul>\n"
    }), createVNode($$Aside, {
      type: "tip",
      "set:html": "<p>JavaScript (IntersectionObserver) သုံးပြီး လုပ်ရတဲ့ Sticky Header Shadow effect တွေကို CSS သက်သက်နဲ့ လုပ်လို့ရသွားပါပြီ။</p>"
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

const url = "src/content/docs/advanced-css/layout-sizing/container-queries.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-css/layout-sizing/container-queries.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-css/layout-sizing/container-queries.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
