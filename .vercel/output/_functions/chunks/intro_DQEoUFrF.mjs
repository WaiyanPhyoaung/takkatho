import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import 'clsx';

const frontmatter = {
  "title": "What Are Functions?",
  "description": "Code များကို ပြန်လည်အသုံးပြုခြင်း (Reusability)"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "function-syntax",
    "text": "Function Syntax"
  }, {
    "depth": 2,
    "slug": "calling-functions-function-ခေါ်သုံးခြင်း",
    "text": "Calling Functions (Function ခေါ်သုံးခြင်း)"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p><strong>Function</strong> ဆိုတာ လုပ်ငန်းစဉ် (Task) တစ်ခုကို လုပ်ဆောင်ပေးတဲ့ Code အစုအဝေး တစ်ခုဖြစ်ပါတယ်။\nFunction တွေရဲ့ အဓိက ရည်ရွယ်ချက်က <strong>“Write once, use many times”</strong> (တစ်ခါရေး၊ ခဏခဏ ပြန်သုံး) ဖြစ်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"function-syntax\">Function Syntax</h2><a class=\"sl-anchor-link\" href=\"#function-syntax\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Function Syntax”</span></a></div>\n<p>Function တစ်ခု တည်ဆောက်မယ်ဆိုရင် <code dir=\"auto\">function</code> ဆိုတဲ့ keyword နဲ့ စရပါတယ်။</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// Function ကြေညာခြင်း (Defining)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">sayHello</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#7FDBCA;--1:#096E72\">console</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">log</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">မင်္ဂလာပါ! 🙏</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"// Function ကြေညာခြင်း (Defining)function sayHello() {  console.log(&#x22;မင်္ဂလာပါ! 🙏&#x22;);}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"calling-functions-function-ခေါ်သုံးခြင်း\">Calling Functions (Function ခေါ်သုံးခြင်း)</h2><a class=\"sl-anchor-link\" href=\"#calling-functions-function-ခေါ်သုံးခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Calling Functions (Function ခေါ်သုံးခြင်း)”</span></a></div>\n<p>Function ကြေညာရုံနဲ့ အလုပ်မလုပ်ပါဘူး။ သူ့ကို ခေါ်သုံး (Call/Invoke) မှ အလုပ်လုပ်ပါတယ်။</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">sayHello</span><span style=\"--0:#D6DEEB;--1:#403F53\">(); </span><span style=\"--0:#919F9F;--1:#5D6376\">// \"မင်္ဂလာပါ! 🙏\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">sayHello</span><span style=\"--0:#D6DEEB;--1:#403F53\">(); </span><span style=\"--0:#919F9F;--1:#5D6376\">// \"မင်္ဂလာပါ! 🙏\"</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"sayHello(); // &#x22;မင်္ဂလာပါ! 🙏&#x22;sayHello(); // &#x22;မင်္ဂလာပါ! 🙏&#x22;\"><div></div></button></div></figure></div>\n<p>တွေ့လား? နှစ်ခါခေါ်ရင် နှစ်ခါ အလုပ်လုပ်တယ်။ Code တွေ အများကြီး ထပ်ကာထပ်ကာ ရေးစရာ မလိုတော့ဘူး။</p>"
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
const url = "src/content/docs/javascript/functions/intro.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/javascript/functions/intro.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/javascript/functions/intro.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
