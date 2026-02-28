import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import 'clsx';

const frontmatter = {
  "title": "Responsive Web Design (RWD) ဆိုတာ ဘာလဲ?",
  "description": "RWD ၏ အခြေခံ သဘောတရားနှင့် Viewport Meta Tag အကြောင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "mobile-first-approach",
    "text": "Mobile-First Approach"
  }, {
    "depth": 3,
    "slug": "အရေးအကြီးဆုံး-viewport-meta-tag",
    "text": "အရေးအကြီးဆုံး viewport Meta Tag"
  }, {
    "depth": 3,
    "slug": "viewport-အဓိပ္ပါယ်",
    "text": "Viewport အဓိပ္ပါယ်"
  }, {
    "depth": 3,
    "slug": "responsive-design-အတွက်-အဓိက-လိုအပ်ချက်များ",
    "text": "Responsive Design အတွက် အဓိက လိုအပ်ချက်များ"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>ယနေ့ခေတ်မှာ လူတွေဟာ Website တွေကို ဖုန်း (Mobile)၊ တက်ဘလက် (Tablet)၊ ကွန်ပျူတာ (Desktop) စတဲ့ အရွယ်အစားအမျိုးမျိုးရှိတဲ့ စက်ပစ္စည်းတွေကနေ ဝင်ရောက်ကြည့်ရှုနေကြပါပြီ။</p>\n<p><strong>Responsive Web Design (RWD)</strong> ဆိုတာ Website လေးတစ်ခုတည်းကနေ Screen အရွယ်အစား အားလုံးနဲ့ ကိုက်ညီအောင် (Fit ဖြစ်အောင်) အလိုအလျောက် ပုံစံပြောင်းလဲပေးတဲ့ နည်းပညာဖြစ်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"mobile-first-approach\">Mobile-First Approach</h3><a class=\"sl-anchor-link\" href=\"#mobile-first-approach\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Mobile-First Approach”</span></a></div>\n<p>အရင်ခေတ်တွေကတော့ Desktop အတွက် အရင်ဆွဲပြီးမှ မိုဘိုင်းအတွက် နောက်မှ ပြင်လေ့ရှိကြပါတယ်။ အခုခေတ်မှာတော့ <strong>Mobile-First Approach</strong> လို့ခေါ်တဲ့ ဖုန်းအတွက်ကို အရင်ဆုံး Design ဆွဲပြီးမှ၊ Screen ကြီးတဲ့စက်တွေအတွက် တဖြည်းဖြည်း ချဲ့ကားတဲ့နည်းစနစ်ကို အများဆုံး အသုံးပြုကြပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အရေးအကြီးဆုံး-viewport-meta-tag\">အရေးအကြီးဆုံး <code dir=\"auto\">viewport</code> Meta Tag</h3><a class=\"sl-anchor-link\" href=\"#အရေးအကြီးဆုံး-viewport-meta-tag\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အရေးအကြီးဆုံး viewport Meta Tag”</span></a></div>\n<p>Responsive Design ရဲ့ အသက်ဟာ <code dir=\"auto\">viewport</code> meta tag ဖြစ်ပါတယ်။ ဒီ Tag မပါရင် ဖုန်းတွေက Website ကို Desktop screen လိုမျိုး သေးသေးလေး ချုံ့ပြီး ပြပေးမှာဖြစ်တာကြောင့်၊ ဖတ်ဖို့ အရမ်းခက်သွားပါလိမ့်မယ်။</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"html\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">&#x3C;!-- HTML ဖိုင်၏ &#x3C;head> အထဲတွင် အမြဲတမ်း ထည့်ရမည့် Tag --></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">meta</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">viewport</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">content</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">width=device-width, initial-scale=1.0</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<!-- HTML ဖိုင်၏ <head> အထဲတွင် အမြဲတမ်း ထည့်ရမည့် Tag --><meta name=&#x22;viewport&#x22; content=&#x22;width=device-width, initial-scale=1.0&#x22;>\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"viewport-အဓိပ္ပါယ်\">Viewport အဓိပ္ပါယ်</h3><a class=\"sl-anchor-link\" href=\"#viewport-အဓိပ္ပါယ်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Viewport အဓိပ္ပါယ်”</span></a></div>\n<ul>\n<li><code dir=\"auto\">width=device-width</code>: Website ရဲ့ အကျယ် (Width) ကို ဖွင့်ကြည့်မည့် စက်ပစ္စည်းရဲ့ အကျယ်နဲ့ အတိအကျ ညီအောင် ညှိပေးဖို့ ပြောတာပါ။</li>\n<li><code dir=\"auto\">initial-scale=1.0</code>: Website ကို စဖွင့်ဖွင့်ချင်းမှာ ဘယ်လောက် Zoom ချဲ့ထားမလဲဆိုတာ သတ်မှတ်တာပါ။ <code dir=\"auto\">1.0</code> ဆိုတာကတော့ ပုံမှန် 100% (Zoom in/out မလုပ်ထားသော အနေအထား) ဖြစ်ပါတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"responsive-design-အတွက်-အဓိက-လိုအပ်ချက်များ\">Responsive Design အတွက် အဓိက လိုအပ်ချက်များ</h3><a class=\"sl-anchor-link\" href=\"#responsive-design-အတွက်-အဓိက-လိုအပ်ချက်များ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Responsive Design အတွက် အဓိက လိုအပ်ချက်များ”</span></a></div>\n<p>ခေတ်မီ RWD ကို တည်ဆောက်ဖို့ အောက်ပါ အဓိကနည်းပညာ (၃) ခုက မရှိမဖြစ် လိုအပ်ပါတယ်-</p>\n<ol>\n<li><strong>Fluid Grids / Flexbox</strong>: % သို့မဟုတ် fr, vw အစရှိတဲ့ အသေမဟုတ်သော အတိုင်းအတာများ သုံးခြင်း။</li>\n<li><strong>Flexible Media</strong>: ပုံတွေ၊ ဗီဒီယိုတွေကို Container အပြင်ကို ကျော်မထွက်စေဖို့ <code dir=\"auto\">max-width: 100%</code> ခံထားခြင်း။</li>\n<li><strong>Media/Container Queries</strong>: Screen အရွယ်အစားပေါ်မူတည်ပြီး CSS Rules တွေကို ပြောင်းလဲ သတ်မှတ်ပေးခြင်း။</li>\n</ol>\n<p>ရှေ့ဆက်မယ့် သင်ခန်းစာတွေမှာ ခေတ်အမီဆုံး Responsive နည်းပညာတွေကို တစ်ခုချင်းစီ လေ့လာသွားပါမယ်။</p>"
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
const url = "src/content/docs/responsive-design/introduction/what-is-rwd.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/responsive-design/introduction/what-is-rwd.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/responsive-design/introduction/what-is-rwd.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
