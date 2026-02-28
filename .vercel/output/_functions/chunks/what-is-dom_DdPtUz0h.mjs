import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import 'clsx';

const frontmatter = {
  "title": "What Is the DOM?",
  "description": "Document Object Model မိတ်ဆက်"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "dom-ဆိုတာ-ဘာလဲ",
    "text": "DOM ဆိုတာ ဘာလဲ?"
  }, {
    "depth": 2,
    "slug": "tree-structure-အပင်ပုံစံ",
    "text": "Tree Structure (အပင်ပုံစံ)"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"dom-ဆိုတာ-ဘာလဲ\">DOM ဆိုတာ ဘာလဲ?</h2><a class=\"sl-anchor-link\" href=\"#dom-ဆိုတာ-ဘာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “DOM ဆိုတာ ဘာလဲ?”</span></a></div>\n<p><strong>DOM</strong> ဆိုတာ <strong>Document Object Model</strong> ပါ။\nစာတွေ့တွေ ထားလိုက်ပါဦး။ ရိုးရိုးလေးပဲ ရှင်းပြမယ်။</p>\n<p>သင်ရေးလိုက်တဲ့ HTML Code တွေကို Browser က ဖတ်ပြီး သူ့ရဲ့ Memory ထဲမှာ <strong>Tree (သစ်ပင်ပုံစံ) Structure</strong> တစ်ခု ဆောက်လိုက်ပါတယ်။ အဲဒါကို DOM လို့ ခေါ်တာပါ။</p>\n<p>Javascript က HTML ကို တိုက်ရိုက် မပြင်ပါဘူး။ ဒီ DOM Tree ကြီးကို လှမ်းပြင်တာပါ။ DOM ကို ပြင်လိုက်ရင် Browser မှာ မြင်ရတဲ့ ပုံစံလည်း လိုက်ပြောင်းသွားပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"tree-structure-အပင်ပုံစံ\">Tree Structure (အပင်ပုံစံ)</h2><a class=\"sl-anchor-link\" href=\"#tree-structure-အပင်ပုံစံ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Tree Structure (အပင်ပုံစံ)”</span></a></div>\n<p>အောက်က HTML ကို ကြည့်ကြည့်ပါ။</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"html\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">html</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">body</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">h1</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Hello</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">h1</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">World</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">body</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">html</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<html>  <body>    <h1>Hello</h1>    <p>World</p>  </body></html>\"><div></div></button></div></figure></div>\n<p>DOM Tree မှာ ဒီလို ဖြစ်သွားပါမယ်။</p>\n<ul>\n<li><code dir=\"auto\">document</code> (အမြစ်)\n<ul>\n<li><code dir=\"auto\">&#x3C;html></code>\n<ul>\n<li><code dir=\"auto\">&#x3C;body></code>\n<ul>\n<li><code dir=\"auto\">&#x3C;h1></code> -> “Hello”</li>\n<li><code dir=\"auto\">&#x3C;p></code> -> “World”</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<blockquote>\n<p>JavaScript က ဒီ <code dir=\"auto\">h1</code>, <code dir=\"auto\">p</code> စတာတွေကို လှမ်းခေါ်ပြီး စာပြောင်းမယ်၊ အရောင်ပြောင်းမယ်၊ ဖျက်ပစ်မယ်။ ဒါကို <strong>DOM Manipulation</strong> လို့ ခေါ်တာပါ။</p>\n</blockquote>"
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
const url = "src/content/docs/javascript/dom-intro/what-is-dom.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/javascript/dom-intro/what-is-dom.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/javascript/dom-intro/what-is-dom.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
