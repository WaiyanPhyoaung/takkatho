import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import './Content-image_C5QzPmj4.mjs';
import './format_BXgwDBU8.mjs';
import 'clsx';

const frontmatter = {
  "title": "ပုံတွေကို Link အဖြစ် သုံးခြင်း",
  "description": "ပုံတွေကို link အဖြစ် သုံးခြင်း"
};
function getHeadings() {
  return [{
    "depth": 4,
    "slug": "ဒါကို-ဘာကြောင့်သုံးသင့်လဲ",
    "text": "ဒါကို ဘာကြောင့်သုံးသင့်လဲ။"
  }, {
    "depth": 3,
    "slug": "link-တွေအတွက်-လိုက်နာသင့်တဲ့-အချက်များ",
    "text": "Link တွေအတွက် လိုက်နာသင့်တဲ့ အချက်များ"
  }, {
    "depth": 5,
    "slug": "link-စာသားကို-အဓိပ္ပာယ်ရှိအောင်-ရေးပါ",
    "text": "link စာသားကို အဓိပ္ပာယ်ရှိအောင် ရေးပါ"
  }, {
    "depth": 5,
    "slug": "ပုံတွေမှာ-alt-text-သုံးပါ",
    "text": "ပုံတွေမှာ alt Text သုံးပါ"
  }, {
    "depth": 5,
    "slug": "link-တိုင်းကို-tab-အသစ်မှာ-မဖွင့်ပါနဲ့",
    "text": "link တိုင်းကို Tab အသစ်မှာ မဖွင့်ပါနဲ့"
  }, {
    "depth": 5,
    "slug": "link-တွေကို-ပုံမှန်စစ်ဆေးပါ",
    "text": "link တွေကို ပုံမှန်စစ်ဆေးပါ"
  }];
}
const imgLink = `
<a href="https://www.example.com">
  <img src="logo.jpg" alt="Example Logo">
</a>
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>link လုပ်တဲ့အခါ စာသားတွေပဲ သုံးရမယ်လို့ မဆိုလိုပါဘူး။ ပုံတွေကိုလည်း နှိပ်လို့ရတဲ့ link တွေအဖြစ် သုံးနိုင်ပါတယ်။ Logo တွေ၊ ကြော်ငြာပုံတွေမှာ အသုံးဝင်ပါတယ်။</p>\n<p>ဥပမာ -</p>\n"
    }), createVNode(Code, {
      title: "HTML",
      lang: "html",
      code: imgLink
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>ဒီမှာတော့ <code dir=\"auto\">&#x3C;img></code> tag ကို <code dir=\"auto\">&#x3C;a></code> tag နဲ့ အုပ်ထားတဲ့အတွက် ပုံကို နှိပ်လို့ရတဲ့ link တစ်ခု ဖြစ်သွားပါတယ်။ <code dir=\"auto\">alt attribute</code> ကတော့ ပုံက ဘာပုံလဲဆိုတာကို ရှင်းပြထားတာဖြစ်လို့ ထည့်ပေးသင့်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"ဒါကို-ဘာကြောင့်သုံးသင့်လဲ\">ဒါကို ဘာကြောင့်သုံးသင့်လဲ။</h4><a class=\"sl-anchor-link\" href=\"#ဒါကို-ဘာကြောင့်သုံးသင့်လဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဒါကို ဘာကြောင့်သုံးသင့်လဲ။”</span></a></div>\n<p>Website ရဲ့ logo ကို နှိပ်လိုက်ရင် ပင်မစာမျက်နှာ (Homepage) ကို ပြန်ရောက်သွားတာမျိုး link လုပ်ပေးခြင်း၊ content တွေကို ပုံတွေနဲ့ ပြထားပြီး နှိပ်လိုက်ရင် Details page ကိုရောက်သွားတာမျိုး လုပ်နိုင်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"link-တွေအတွက်-လိုက်နာသင့်တဲ့-အချက်များ\">Link တွေအတွက် လိုက်နာသင့်တဲ့ အချက်များ</h3><a class=\"sl-anchor-link\" href=\"#link-တွေအတွက်-လိုက်နာသင့်တဲ့-အချက်များ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Link တွေအတွက် လိုက်နာသင့်တဲ့ အချက်များ”</span></a></div>\n<p>ကိုယ့် Website က link တွေကို ပိုထိရောက်ပြီး လူတိုင်းအဆင်ပြေအောင် သုံးနိုင်ဖို့အတွက် လိုက်နာသင့်တဲ့ အချက်တစ်ချို့ ရှိပါတယ်။</p>\n<ul>\n<li>\n<div class=\"sl-heading-wrapper level-h5\"><h5 id=\"link-စာသားကို-အဓိပ္ပာယ်ရှိအောင်-ရေးပါ\">link စာသားကို အဓိပ္ပာယ်ရှိအောင် ရေးပါ</h5><a class=\"sl-anchor-link\" href=\"#link-စာသားကို-အဓိပ္ပာယ်ရှိအောင်-ရေးပါ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “link စာသားကို အဓိပ္ပာယ်ရှိအောင် ရေးပါ”</span></a></div>\n<p>“Click here” လို့ ရေးမယ့်အစား “About Us” ဆိုတာမျိုး ရှင်းလင်းတဲ့ စာသားကို သုံးပါ။\nဥပမာ: <code dir=\"auto\">&#x3C;a href=\"about.html\">About Us&#x3C;/a></code></p>\n</li>\n<li>\n<div class=\"sl-heading-wrapper level-h5\"><h5 id=\"ပုံတွေမှာ-alt-text-သုံးပါ\">ပုံတွေမှာ alt Text သုံးပါ</h5><a class=\"sl-anchor-link\" href=\"#ပုံတွေမှာ-alt-text-သုံးပါ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ပုံတွေမှာ alt Text သုံးပါ”</span></a></div>\n<p>အထူးသဖြင့် link လုပ်ထားတဲ့ ပုံတွေမှာ <strong>alt attribute</strong> ကို အမြဲသုံးပေးပါ။ ဒါမှ အမြင်အာရုံမသန်စွမ်းသူတွေအတွက် အထောက်အကူ ဖြစ်စေပါတယ်။</p>\n</li>\n<li>\n<div class=\"sl-heading-wrapper level-h5\"><h5 id=\"link-တိုင်းကို-tab-အသစ်မှာ-မဖွင့်ပါနဲ့\">link တိုင်းကို Tab အသစ်မှာ မဖွင့်ပါနဲ့</h5><a class=\"sl-anchor-link\" href=\"#link-တိုင်းကို-tab-အသစ်မှာ-မဖွင့်ပါနဲ့\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “link တိုင်းကို Tab အသစ်မှာ မဖွင့်ပါနဲ့”</span></a></div>\n<p><code dir=\"auto\">target=\"_blank\"</code> ကို လိုအပ်မှပဲ သုံးပါ။ ကိုယ့် Website ကနေ တခြား Website ကို သွားတဲ့ link တွေလောက်မှာပဲ သုံးတာ ကောင်းပါတယ်။</p>\n</li>\n<li>\n<div class=\"sl-heading-wrapper level-h5\"><h5 id=\"link-တွေကို-ပုံမှန်စစ်ဆေးပါ\">link တွေကို ပုံမှန်စစ်ဆေးပါ</h5><a class=\"sl-anchor-link\" href=\"#link-တွေကို-ပုံမှန်စစ်ဆေးပါ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “link တွေကို ပုံမှန်စစ်ဆေးပါ”</span></a></div>\n<p>link တွေကို ပုံမှန်စစ်ဆေးပါ။\nlink တွေက အလုပ်မလုပ်တော့ရင် (Broken Links) သုံးစွဲသူအတွက် အဆင်မပြေဖြစ်စေသလို၊ ကိုယ့် Website ရဲ့ SEO ကိုလည်း ထိခိုက်စေတဲ့အတွက် အမြဲတမ်း စစ်ဆေးပေးသင့်ပါတယ်။</p>\n</li>\n</ul>\n"
    }), createVNode($$Aside, {
      title: "အကျဉ်းချုပ်",
      type: "tip",
      "set:html": "<ul>\n<li>\n<p>link တွေကို <code dir=\"auto\">&#x3C;a></code> tag နဲ့ <code dir=\"auto\">href attribute</code> သုံးပြီး ဖန်တီးပါတယ်။</p>\n</li>\n<li>\n<p>Absolute URL တွေက တခြား Website တွေကို ချိတ်ပြီး၊ Relative URL တွေက ကိုယ့် Website ထဲက page တွေကို ချိတ်ပါတယ်။</p>\n</li>\n<li>\n<p><code dir=\"auto\">target=\"_blank\"</code> ကို သုံးပြီး လင့်ခ်တွေကို tab အသစ်မှာ ဖွင့်နိုင်ပါတယ်။</p>\n</li>\n<li>\n<p><code dir=\"auto\">href=\"#id\"</code> ကို သုံးပြီး စာမျက်နှာတစ်ခုတည်းမှာပဲ အပိုင်းအလိုက် ခုန်ကူးနိုင်ပါတယ်။</p>\n</li>\n<li>\n<p>ပုံတွေကို <code dir=\"auto\">&#x3C;a></code> tag နဲ့ အုပ်ပြီး နှိပ်လို့ရတဲ့ link တွေအဖြစ် လုပ်နိုင်ပါတယ်။</p>\n</li>\n<li>\n<p>link တွေအတွက် အကောင်းဆုံးကတော့ အဓိပ္ပာယ်ရှိတဲ့ စာသားသုံးတာ၊ ပုံတွေမှာ <strong>alt text</strong> ထည့်တာ၊ အလုပ်မလုပ်တဲ့ link တွေ မရှိအောင် ပုံမှန်စစ်ဆေးတာတွေပဲ ဖြစ်ပါတယ်။</p>\n</li>\n</ul>"
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

const url = "src/content/docs/html/links/images.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/html/links/images.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/html/links/images.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, imgLink, url };
