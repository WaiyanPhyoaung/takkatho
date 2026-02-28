import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "Cascade Layers (@layer)",
  "description": "CSS Specificity ပြဿနာကို ဖြေရှင်းခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "ပြဿနာ",
    "text": "ပြဿနာ"
  }, {
    "depth": 3,
    "slug": "ဖြေရှင်းနည်း",
    "text": "ဖြေရှင်းနည်း"
  }, {
    "depth": 3,
    "slug": "အကျိုးကျေးဇူး",
    "text": "အကျိုးကျေးဇူး"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "No More !important",
      "set:html": "<p>CSS ရေးရင် “ငါရေးတာ ဘာလို့ မမိတာလဲ?” ဆိုပြီး <code dir=\"auto\">!important</code> တွေ လိုက်တပ်ဖူးမှာပါ။ <code dir=\"auto\">@layer</code> က Style တွေရဲ့ အဆင့်အတန်း (Priority) ကို စနစ်တကျ ခွဲခြားပေးပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ပြဿနာ\">ပြဿနာ</h3><a class=\"sl-anchor-link\" href=\"#ပြဿနာ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ပြဿနာ”</span></a></div>\n<p>Selector တွေ ရှုပ်လာရင် ဘယ်ဟာက နိုင်မလဲ (Specificity) တွက်ရတာ ခေါင်းကိုက်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဖြေရှင်းနည်း\">ဖြေရှင်းနည်း</h3><a class=\"sl-anchor-link\" href=\"#ဖြေရှင်းနည်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဖြေရှင်းနည်း”</span></a></div>\n<p>Layer တွေ ခွဲလိုက်ပါ။ အောက်ဆုံးမှာ ကြေညာတဲ့ Layer က အမြဲနိုင်ပါတယ်။ Selector ဘယ်လောက်ပဲ အားနည်းနေပါစေ Layer မြင့်ရင် နိုင်ပါတယ်။</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">/* Layer အစီအစဉ် သတ်မှတ်ခြင်း (နောက်ကကောင်က ပိုအရေးကြီးတယ်) */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">@layer</span><span style=\"--0:#D6DEEB;--1:#403F53\"> reset, base, theme, utilities;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">@layer</span><span style=\"--0:#D6DEEB;--1:#403F53\"> reset {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5F636F\">/* Reset styles */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#7FDBCA;--1:#096E72\">*</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { </span><span style=\"--0:#80CBC4;--1:#096E72\">box-sizing</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6D6D;--1:#984E4D\">border-box</span><span style=\"--0:#D6DEEB;--1:#403F53\">; }</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">@layer</span><span style=\"--0:#D6DEEB;--1:#403F53\"> base {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#FF6D6D;--1:#984E4D\">body</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { </span><span style=\"--0:#80CBC4;--1:#096E72\">color</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">#</span><span style=\"--0:#FFEB95\">333</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">; }</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#FF6D6D;--1:#984E4D\">h1</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { </span><span style=\"--0:#80CBC4;--1:#096E72\">font-size</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">2</span><span style=\"--0:#FFEB95\">rem</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">; }</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">@layer</span><span style=\"--0:#D6DEEB;--1:#403F53\"> utilities {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5F636F\">/* ဒီ Layer က အောက်ဆုံးမှာမို့ အမြဲနိုင်မယ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C5E478;--1:#3B61B0\">.text-red</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { </span><span style=\"--0:#80CBC4;--1:#096E72\">color</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#7FDBCA;--1:#096E72\">red</span><span style=\"--0:#D6DEEB;--1:#403F53\">; }</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"/* Layer အစီအစဉ် သတ်မှတ်ခြင်း (နောက်ကကောင်က ပိုအရေးကြီးတယ်) */@layer reset, base, theme, utilities;@layer reset {  /* Reset styles */  * { box-sizing: border-box; }}@layer base {  body { color: #333; }  h1 { font-size: 2rem; }}@layer utilities {  /* ဒီ Layer က အောက်ဆုံးမှာမို့ အမြဲနိုင်မယ် */  .text-red { color: red; }}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အကျိုးကျေးဇူး\">အကျိုးကျေးဇူး</h3><a class=\"sl-anchor-link\" href=\"#အကျိုးကျေးဇူး\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အကျိုးကျေးဇူး”</span></a></div>\n<ul>\n<li>Third-party CSS (Bootstrap, Tailwind) တွေကို Layer တစ်ခုထဲ ထည့်ထားလိုက်ရင် ကိုယ့် Code နဲ့ တိုက်တာတွေ မဖြစ်တော့ဘူး။</li>\n<li>Code ကို အပိုင်းလိုက် စနစ်တကျ ခွဲရေးလို့ ရသွားတယ်။</li>\n</ul>"
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

const url = "src/content/docs/advanced-css/ergonomics/cascade-layers.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-css/ergonomics/cascade-layers.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-css/ergonomics/cascade-layers.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
