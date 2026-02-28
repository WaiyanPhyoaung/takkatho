import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import 'clsx';

const frontmatter = {
  "title": "Debugging Basics",
  "description": "အမှားရှာဖွေခြင်းနှင့် ကုစားခြင်း"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "1-console-errors",
    "text": "1. Console Errors"
  }, {
    "depth": 2,
    "slug": "2-consolelog",
    "text": "2. console.log()"
  }, {
    "depth": 2,
    "slug": "3-dont-panic",
    "text": "3. Don’t Panic 😱"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>Programming လောကမှာ Error (Bug) ဆိုတာ ရှောင်လွှဲမရပါဘူး။ အရေးကြီးတာက ဘယ်လို ဖြေရှင်းမလဲ ဆိုတာပါပဲ။</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"1-console-errors\">1. Console Errors</h2><a class=\"sl-anchor-link\" href=\"#1-console-errors\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “1. Console Errors”</span></a></div>\n<p>Code အလုပ်မလုပ်တော့ရင် ပထမဆုံး လုပ်ရမှာက Browser Console ကို ဖွင့်ကြည့်တာပါ။ အနီရောင် စာတန်းနဲ့ Error ပြနေပါလိမ့်မယ်။</p>\n<ul>\n<li><strong>ReferenceError:</strong> မရှိတဲ့ Variable ကို ခေါ်သုံးမိတာ (နာမည်မှားတာ ဖြစ်နိုင်တယ်)။</li>\n<li><strong>SyntaxError:</strong> ရေးပုံရေးနည်း မှားနေတာ (ကွင်းပိတ်ဖို့ မေ့တာ၊ စာလုံးပေါင်းမှားတာ)။</li>\n<li><strong>TypeError:</strong> မဆိုင်တာ သွားလုပ်မိတာ (ဥပမာ - <code dir=\"auto\">null</code> ကို Function လို သွားခေါ်မိတာ)။</li>\n</ul>\n<p>Error စာကြောင်းမှာ <strong>Line Number</strong> ပါပါတယ်။ အဲဒီလိုင်းကို သွားစစ်ကြည့်လိုက်ပါ။</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"2-consolelog\">2. console.log()</h2><a class=\"sl-anchor-link\" href=\"#2-consolelog\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “2. console.log()”</span></a></div>\n<p>ဒါက Developer တွေရဲ့ အကောင်းဆုံး သူငယ်ချင်းပါ။\nCode ဘယ်နေရာ ရောက်နေပြီလဲ၊ Variable ထဲမှာ ဘာတန်ဖိုး ရှိနေလဲ သိချင်ရင် ကြားထဲမှာ <code dir=\"auto\">console.log</code> ခံပြီး ထုတ်ကြည့်ပါ။</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">add</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--1:#403F53\"><span style=\"--0:#D7DBE0\">a</span><span style=\"--0:#D6DEEB\">, </span><span style=\"--0:#D7DBE0\">b</span></span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#7FDBCA;--1:#096E72\">console</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">log</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Input:</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#889FB2;--1:#4D667B\">,</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\"> </span><span style=\"--0:#D7DBE0\">a</span></span><span style=\"--0:#889FB2;--1:#4D667B\">,</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\"> </span><span style=\"--0:#D7DBE0\">b</span><span style=\"--0:#D6DEEB\">); </span></span><span style=\"--0:#919F9F;--1:#5D6376\">// Data ဝင်ရဲ့လား စစ်တယ်</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\"> </span><span style=\"--0:#D7DBE0\">a</span><span style=\"--0:#D6DEEB\"> </span></span><span style=\"--0:#C792EA;--1:#8844AE\">+</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\"> </span><span style=\"--0:#D7DBE0\">b</span><span style=\"--0:#D6DEEB\">;</span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"function add(a, b) {    console.log(&#x22;Input:&#x22;, a, b); // Data ဝင်ရဲ့လား စစ်တယ်    return a + b;}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"3-dont-panic\">3. Don’t Panic 😱</h2><a class=\"sl-anchor-link\" href=\"#3-dont-panic\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “3. Don’t Panic 😱”</span></a></div>\n<p>Error တက်တာ ကောင်းပါတယ်။ ဘာမှားနေလဲ သိရတာကိုး။ Error Message ကို သေချာဖတ်ပါ။ နားမလည်ရင် Error စာသားကို Copy ကူးပြီး Google မှာ ရှာကြည့်ပါ။</p>"
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
const url = "src/content/docs/javascript/best-practices/debugging.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/javascript/best-practices/debugging.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/javascript/best-practices/debugging.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
