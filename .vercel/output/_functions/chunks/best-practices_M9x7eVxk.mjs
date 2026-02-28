import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import 'clsx';

const frontmatter = {
  "title": "Responsive အနှစ်ချုပ် (Best Practices)",
  "description": "ခေတ်သစ် Responsive Web Design အတွက် လိုက်နာရမည့် အချက်များ"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "1-mobile-first-ကို-အမြဲစဉ်းစားပါ-think-mobile-first",
    "text": "1. Mobile-First ကို အမြဲစဉ်းစားပါ (Think Mobile First)"
  }, {
    "depth": 3,
    "slug": "2-media-queries-တွေကို-တတ်နိုင်သမျှ-လျှော့ပါ",
    "text": "2. Media Queries တွေကို တတ်နိုင်သမျှ လျှော့ပါ"
  }, {
    "depth": 3,
    "slug": "3-container-queries-ကို-စတင်အသုံးပြုပါ",
    "text": "3. Container Queries ကို စတင်အသုံးပြုပါ"
  }, {
    "depth": 3,
    "slug": "4-logical-properties-များကို-သုံးကျင့်ပါ",
    "text": "4. Logical Properties များကို သုံးကျင့်ပါ"
  }, {
    "depth": 3,
    "slug": "5-touch-target-လက်နှိပ်မည့်-နေရာ-များ-ကြီးပါစေ",
    "text": "5. Touch Target (လက်နှိပ်မည့် နေရာ) များ ကြီးပါစေ"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>Responsive Design ကို လေ့လာပြီးတဲ့နောက်၊ ပရောဂျက်တွေမှာ လက်တွေ့အသုံးချတဲ့အခါ လိုက်နာသင့်တဲ့ အကောင်းဆုံး အလေ့အကျင့် (Best Practices) တွေကို စုစည်းပေးလိုက်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"1-mobile-first-ကို-အမြဲစဉ်းစားပါ-think-mobile-first\">1. Mobile-First ကို အမြဲစဉ်းစားပါ (Think Mobile First)</h3><a class=\"sl-anchor-link\" href=\"#1-mobile-first-ကို-အမြဲစဉ်းစားပါ-think-mobile-first\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “1. Mobile-First ကို အမြဲစဉ်းစားပါ (Think Mobile First)”</span></a></div>\n<p>CSS ရေးတဲ့အခါ အပြင်ဘက်ဆုံးမှာ Mobile (ဖုန်း) အတွက် လိုအပ်တဲ့ CSS တွေကို ရေးပါ။ ပြီးမှ ပြောင်းလဲချင်တဲ့ အပိုင်းတွေကိုသာ <code dir=\"auto\">@media (width >= 768px)</code> ထဲမှာ ထပ်ဖြည့်ရေးပါ။\n<em>အားသာချက်:</em> ဖုန်းတွေက မလိုအပ်တဲ့ Desktop ကုဒ်တွေကို လိုက်ဖတ်နေစရာ မလိုတော့ဘဲ Website တက်တာ ပိုမြန်သွားပါမယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"2-media-queries-တွေကို-တတ်နိုင်သမျှ-လျှော့ပါ\">2. Media Queries တွေကို တတ်နိုင်သမျှ လျှော့ပါ</h3><a class=\"sl-anchor-link\" href=\"#2-media-queries-တွေကို-တတ်နိုင်သမျှ-လျှော့ပါ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “2. Media Queries တွေကို တတ်နိုင်သမျှ လျှော့ပါ”</span></a></div>\n<p>Device (ဖုန်း၊ တက်ဘလက်) အမျိုးအစားပေါင်းများစွာ ရှိပါတယ်။ ထွက်သမျှ ဖုန်းအမျိုးအစားတွေအတွက် လိုက်ပြီး Media query လိုက်ရေးနေလို့ မဖြစ်နိုင်ပါဘူး။ ဒါကြောင့် -</p>\n<ul>\n<li>Layout များအတွက် <code dir=\"auto\">Flexbox</code> နဲ့ <code dir=\"auto\">CSS Grid</code> တွေကို ပိုသုံးပါ။</li>\n<li>အသေပေးထားတဲ့ (Fixed) <code dir=\"auto\">px</code> တွေအစား <code dir=\"auto\">rem</code>, <code dir=\"auto\">vw</code>, <code dir=\"auto\">vh</code>, <code dir=\"auto\">%</code> များကို သုံးပါ။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"3-container-queries-ကို-စတင်အသုံးပြုပါ\">3. Container Queries ကို စတင်အသုံးပြုပါ</h3><a class=\"sl-anchor-link\" href=\"#3-container-queries-ကို-စတင်အသုံးပြုပါ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “3. Container Queries ကို စတင်အသုံးပြုပါ”</span></a></div>\n<p>Page Layout (စာမျက်နှာ ဖွဲ့စည်းပုံ) ပြောင်းဖို့လောက်ပဲ Media Queries သုံးပါ။ Component လေးတွေ၊ Card လေးတွေအတွက်ဆိုရင်တော့ ခေတ်သစ် <code dir=\"auto\">@container</code> ကိုသာ အသုံးပြုပါ။ (Component ကို ဘယ်နေရာရွှေ့ရွှေ့ ပျက်မသွားတော့ပါဘူး)</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"4-logical-properties-များကို-သုံးကျင့်ပါ\">4. Logical Properties များကို သုံးကျင့်ပါ</h3><a class=\"sl-anchor-link\" href=\"#4-logical-properties-များကို-သုံးကျင့်ပါ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “4. Logical Properties များကို သုံးကျင့်ပါ”</span></a></div>\n<p>ခေတ်သစ် CSS မှာ <code dir=\"auto\">margin-left</code>, <code dir=\"auto\">padding-top</code> တွေအစား <strong>Logical Properties</strong> တွေကို သုံးလာကြပါပြီ။ (အထူးသဖြင့် ဘာသာစကားမျိုးစုံ ပါတဲ့ Website တွေမှာ အရမ်းအသုံးဝင်ပါတယ်။)</p>\n<ul>\n<li><code dir=\"auto\">margin-left</code> → <code dir=\"auto\">margin-inline-start</code></li>\n<li><code dir=\"auto\">margin-right</code> → <code dir=\"auto\">margin-inline-end</code></li>\n<li><code dir=\"auto\">padding-top</code> → <code dir=\"auto\">padding-block-start</code></li>\n<li><code dir=\"auto\">padding-bottom</code> → <code dir=\"auto\">padding-block-end</code></li>\n</ul>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">/* ရိုးရိုးရေးနည်း */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.box</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">margin-top</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">2</span><span style=\"--0:#FFEB95\">rem</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">margin-bottom</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">2</span><span style=\"--0:#FFEB95\">rem</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">/* ခေတ်သစ်ရေးနည်း ရှင်းလင်းသွားသည် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.box</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">margin-block</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">2</span><span style=\"--0:#FFEB95\">rem</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"/* ရိုးရိုးရေးနည်း */.box {  margin-top: 2rem;  margin-bottom: 2rem;}/* ခေတ်သစ်ရေးနည်း ရှင်းလင်းသွားသည် */.box {  margin-block: 2rem;}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"5-touch-target-လက်နှိပ်မည့်-နေရာ-များ-ကြီးပါစေ\">5. Touch Target (လက်နှိပ်မည့် နေရာ) များ ကြီးပါစေ</h3><a class=\"sl-anchor-link\" href=\"#5-touch-target-လက်နှိပ်မည့်-နေရာ-များ-ကြီးပါစေ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “5. Touch Target (လက်နှိပ်မည့် နေရာ) များ ကြီးပါစေ”</span></a></div>\n<p>ဖုန်းမှာ Mouse နဲ့ ချိန်ပြီး နှိပ်ဖို့မဖြစ်နိုင်ပါဘူး။ လက်ညှိုးနဲ့ နှိပ်ရမှာဖြစ်လို့ ခလုတ် (Buttons) တွေ၊ လင့်ခ်အကွာအဝေး တွေကို အနည်းဆုံး <code dir=\"auto\">44px</code> သို့မဟုတ် <code dir=\"auto\">48px</code> အကျယ်အဝန်း ရှိအောင် ကွာဟချက် (padding &#x26; gap) တွေ ပေးထားပါ။</p>\n<hr>\n<p>ဒီအချက်တွေကို လိုက်နာမယ်ဆိုရင် သင်ဖန်တီးလိုက်တဲ့ Website ဟာ ဘယ်စက်မှာမဆို ကြည့်ောင်မြင်ကောင်းပြီး، အနာဂတ်မှာ ပြုပြင်ထိန်းသိမ်းရလည်း အရမ်းလွယ်ကူတဲ့ ခေတ်မီ Design တွေ ဖြစ်လာပါလိမ့်မယ်။</p>"
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
const url = "src/content/docs/responsive-design/summary/best-practices.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/responsive-design/summary/best-practices.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/responsive-design/summary/best-practices.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
