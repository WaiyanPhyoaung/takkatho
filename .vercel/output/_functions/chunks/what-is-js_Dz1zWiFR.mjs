import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import 'clsx';

const frontmatter = {
  "title": "JavaScript ဆိုတာ ဘာလဲ?",
  "description": "JavaScript ၏ အခြေခံ သဘောတရားများ"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "programming-language-ဆိုတာ-ဘာလဲ",
    "text": "Programming Language ဆိုတာ ဘာလဲ?"
  }, {
    "depth": 2,
    "slug": "browser-က-javascript-ကို-ဘယ်လို-run-လဲ",
    "text": "Browser က JavaScript ကို ဘယ်လို Run လဲ?"
  }, {
    "depth": 2,
    "slug": "html-css-နဲ့-javascript-ကွာခြားချက်",
    "text": "HTML, CSS နဲ့ JavaScript ကွာခြားချက်"
  }, {
    "depth": 3,
    "slug": "ဥပမာ-code",
    "text": "ဥပမာ Code"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"programming-language-ဆိုတာ-ဘာလဲ\">Programming Language ဆိုတာ ဘာလဲ?</h2><a class=\"sl-anchor-link\" href=\"#programming-language-ဆိုတာ-ဘာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Programming Language ဆိုတာ ဘာလဲ?”</span></a></div>\n<p>ကွန်ပျူတာတွေက လူစကား နားမလည်ပါဘူး။ သူတို့ကို ခိုင်းစေချင်ရင် သူတို့နားလည်တဲ့ ဘာသာစကား (Language) နဲ့ ပြောပြရပါတယ်။ <strong>JavaScript</strong> ဆိုတာ ကွန်ပျူတာ (အထူးသဖြင့် Browser) ကို ခိုင်းစေဖို့ သုံးတဲ့ Programming Language တစ်ခုပါ။</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"browser-က-javascript-ကို-ဘယ်လို-run-လဲ\">Browser က JavaScript ကို ဘယ်လို Run လဲ?</h2><a class=\"sl-anchor-link\" href=\"#browser-က-javascript-ကို-ဘယ်လို-run-လဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Browser က JavaScript ကို ဘယ်လို Run လဲ?”</span></a></div>\n<p>သင့် Browser (Chrome, Firefox, Safari) ထဲမှာ <strong>JavaScript Engine</strong> လို့ခေါ်တဲ့ စက်လေးတစ်ခု ပါပါတယ်။ အဲဒီ Engine က သင့် Javascript Code တွေကို ဖတ်ပြီး ကွန်ပျူတာ နားလည်အောင် ဘာသာပြန်ပေး၊ အလုပ်လုပ်ပေးပါတယ်။</p>\n<ul>\n<li>Chrome မှာဆိုရင် <strong>V8 Engine</strong> ကို သုံးထားပါတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"html-css-နဲ့-javascript-ကွာခြားချက်\">HTML, CSS နဲ့ JavaScript ကွာခြားချက်</h2><a class=\"sl-anchor-link\" href=\"#html-css-နဲ့-javascript-ကွာခြားချက်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “HTML, CSS နဲ့ JavaScript ကွာခြားချက်”</span></a></div>\n<p>အလွယ်ဆုံး ဥပမာ ပေးရရင် <strong>လူတစ်ယောက်</strong> နဲ့ တူပါတယ်။</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th align=\"left\">နည်းပညာ</th><th align=\"left\">ဥပမာ</th><th align=\"left\">လုပ်ဆောင်ချက်</th></tr></thead><tbody><tr><td align=\"left\"><strong>HTML</strong></td><td align=\"left\">အရိုးစု (Skeleton)</td><td align=\"left\">ဖွဲ့စည်းပုံကို တည်ဆောက်တယ်။ (ခေါင်း၊ ခြေလက်)</td></tr><tr><td align=\"left\"><strong>CSS</strong></td><td align=\"left\">အဝတ်အစား (Clothes)</td><td align=\"left\">လှပအောင်၊ စတိုင်ကျအောင် ပြင်ဆင်တယ်။</td></tr><tr><td align=\"left\"><strong>JavaScript</strong></td><td align=\"left\">ဦးနှောက်/ကြွက်သား (Brain/Muscles)</td><td align=\"left\">လှုပ်ရှားမယ်၊ စဉ်းစားမယ်၊ တုံ့ပြန်မယ်။</td></tr></tbody></table>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဥပမာ-code\">ဥပမာ Code</h3><a class=\"sl-anchor-link\" href=\"#ဥပမာ-code\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဥပမာ Code”</span></a></div>\n<ul>\n<li><strong>HTML:</strong> Button လေးတစ်ခု ဖန်တီးလိုက်မယ်။</li>\n<li><strong>CSS:</strong> အဲဒီ Button ကို အနီရောင်လေး ပြောင်းလိုက်မယ်။</li>\n<li><strong>JavaScript:</strong> အဲဒီ Button ကို နှိပ်လိုက်ရင် Alert Box လေး ပေါ်လာအောင် လုပ်မယ်။</li>\n</ul>\n<p>JavaScript ကို နားလည်ရင် သင်ဟာ ရိုးရိုး Webpage တစ်ခုကို Powerful ဖြစ်တဲ့ Application တစ်ခုအဖြစ် ပြောင်းလဲနိုင်မှာပါ။</p>"
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
const url = "src/content/docs/javascript/fundamentals/what-is-js.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/javascript/fundamentals/what-is-js.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/javascript/fundamentals/what-is-js.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
