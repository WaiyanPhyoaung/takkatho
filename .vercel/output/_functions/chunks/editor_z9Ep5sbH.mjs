import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "Editor တစ်ခုကို ပြင်ဆင်ခြင်း",
  "description": "Editor တစ်ခုကို ပြင်ဆင်ခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "html-ဖိုင်တွေကို-save-လုပ်ခြင်း",
    "text": "HTML ဖိုင်တွေကို Save လုပ်ခြင်း:"
  }, {
    "depth": 3,
    "slug": "သင်ရဲ့-ပထမဆုံး-html-စာမျက်နှာ",
    "text": "သင်ရဲ့ ပထမဆုံး HTML စာမျက်နှာ"
  }, {
    "depth": 3,
    "slug": "browser-တွေက-html-ကို-ဘယ်လိုဖတ်သလဲ",
    "text": "Browser တွေက HTML ကို ဘယ်လိုဖတ်သလဲ"
  }];
}
const htmlTag = `
<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
    <p>This is my first webpage created using HTML.</p>
  </body>
</html>
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>HTML ရေးဖို့အတွက် code editor တစ်ခုလိုပါတယ်။ Code editor ဆိုတာ သင် HTML ဖိုင်တွေကို ရေးမယ့်၊ ပြင်မယ့် နေရာပါ။</p>\n<p><strong>လူသုံးများတဲ့ Editor -</strong></p>\n<ul>\n<li><strong>VS Code:</strong> အစွမ်းထက်ပြီး အခမဲ့ရတဲ့ code editor ပါ။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"html-ဖိုင်တွေကို-save-လုပ်ခြင်း\">HTML ဖိုင်တွေကို Save လုပ်ခြင်း:</h3><a class=\"sl-anchor-link\" href=\"#html-ဖိုင်တွေကို-save-လုပ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “HTML ဖိုင်တွေကို Save လုပ်ခြင်း:”</span></a></div>\n<p>HTML ဖိုင်တစ်ခုဖန်တီးတဲ့အခါ <code dir=\"auto\">.html</code> extension နဲ့ save ဖို့ သေချာပါစေ။ ဒါမှ သင့်ကွန်ပျူတာက ဒါဟာ browser မှာဖွင့်ရမယ့် HTML ဖိုင်တစ်ခုဆိုတာ သိမှာပါ။</p>\n<p>ဥပမာ:\n<code dir=\"auto\">index.html</code></p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"သင်ရဲ့-ပထမဆုံး-html-စာမျက်နှာ\">သင်ရဲ့ ပထမဆုံး HTML စာမျက်နှာ</h3><a class=\"sl-anchor-link\" href=\"#သင်ရဲ့-ပထမဆုံး-html-စာမျက်နှာ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “သင်ရဲ့ ပထမဆုံး HTML စာမျက်နှာ”</span></a></div>\n<p>ကဲ! သင့်ရဲ့ ပထမဆုံး HTML စာမျက်နှာကို ရေးကြည့်ကြရအောင်! HTML စာမျက်နှာတစ်ခုရဲ့ အခြေခံတည်ဆောက်ပုံက အောက်ပါအတိုင်းဖြစ်ပါတယ်-</p>\n"
    }), createVNode(Code, {
      title: "HTML",
      lang: "html",
      code: htmlTag
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p><strong>ရှင်းလင်းချက် -</strong></p>\n<ul>\n<li><code dir=\"auto\">&#x3C;!DOCTYPE html></code>: ဒါက document type ကြေညာချက်ဖြစ်ပြီး၊ browser ကို ဒါဟာ HTML5 document တစ်ခုဖြစ်ကြောင်း ပြောပြပါတယ်။</li>\n<li><code dir=\"auto\">&#x3C;html></code>: ဒါက HTML စာမျက်နှာတစ်ခုလုံးအတွက် အဖွင့် tag ပါ။</li>\n<li><code dir=\"auto\">&#x3C;head></code>: စာမျက်နှာရဲ့ meta-information တွေ (ခေါင်းစဉ်၊ stylesheet တွေရဲ့ link) ပါဝင်ပါတယ်။</li>\n<li><code dir=\"auto\">&#x3C;title></code>: Browser ရဲ့ tab မှာပေါ်တဲ့ ခေါင်းစဉ်ပါ။</li>\n<li><code dir=\"auto\">&#x3C;body></code>: သင့်စာမျက်နှာရဲ့ မြင်ရတဲ့ အကြောင်းအရာတွေဖြစ်တဲ့ ခေါင်းစဉ်တွေ၊ စာပိုဒ်တွေ၊ ပုံတွေ၊ link တွေ ထည့်ရမယ့်နေရာပါ။</li>\n<li><code dir=\"auto\">&#x3C;h1></code>: စာမျက်နှာရဲ့ အဓိကခေါင်းစဉ်အတွက်သုံးတဲ့ heading tag ပါ။</li>\n<li><code dir=\"auto\">&#x3C;p></code>: စာသားအကြောင်းအရာတွေပြဖို့သုံးတဲ့ paragraph tag ပါ။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"browser-တွေက-html-ကို-ဘယ်လိုဖတ်သလဲ\">Browser တွေက HTML ကို ဘယ်လိုဖတ်သလဲ</h3><a class=\"sl-anchor-link\" href=\"#browser-တွေက-html-ကို-ဘယ်လိုဖတ်သလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Browser တွေက HTML ကို ဘယ်လိုဖတ်သလဲ”</span></a></div>\n<p>Google Chrome, Firefox, ဒါမှမဟုတ် Safari လို browser တွေက HTML code ကိုဖတ်ပြီး webpage တစ်ခုအဖြစ် ပြသပေးပါတယ်။ Browser က tag တွေကို user အတွက် မြင်သာတဲ့ ပုံစံအဖြစ် ဘာသာပြန်ပေးတာပါ။</p>\n<p>ဥပမာအနေနဲ့၊ <code dir=\"auto\">&#x3C;h1></code> tag က စာသားကို အကြီးကြီးနဲ့ bold ဖြစ်အောင်လုပ်ဖို့ browser ကို ပြောပြပြီး၊ <code dir=\"auto\">&#x3C;p></code> tag ကတော့ စာသားကို ပုံမှန်စာပိုဒ်အဖြစ် format ချဖို့ ပြောပြပါတယ်။</p>\n"
    }), createVNode($$Aside, {
      title: "အကျဉ်းချုပ်",
      type: "tip",
      "set:html": "<ul>\n<li>Webpage တွေရဲ့ အခြေခံတည်ဆောက်ပုံကို HTML နဲ့ ရေးကြပါတယ်။</li>\n<li><code dir=\"auto\">&#x3C;h1></code>, <code dir=\"auto\">&#x3C;p></code>, <code dir=\"auto\">&#x3C;body></code> လိုမျိုး tag တွေက webpage မှာပါတဲ့ စာတွေ၊ အကြောင်းအရာတွေကို ဘယ်လိုပုံစံနဲ့ပြမလဲဆိုတာ သတ်မှတ်ပေးပါတယ်။</li>\n<li>HTML စာမျက်နှာတိုင်းမှာ အဓိက အပိုင်းနှစ်ပိုင်းရှိပါတယ်။ head က Webpage ရဲ့ အချက်အလက်တွေအတွက်ဖြစ်ပြီး၊ body ကတော့ ကျွန်တော်တို့ မြင်နေရတဲ့ စာတွေ၊ ပုံတွေ ထည့်တဲ့နေရာပါ။</li>\n<li>စာမျက်နှာရဲ့ ထိပ်ဆုံးမှာ <code dir=\"auto\">&#x3C;!DOCTYPE html></code> လို့ရေးတာက ဒီစာမျက်နှာဟာ HTML5 version ဖြစ်တယ်ဆိုတာကို browser ကို သိစေချင်လို့ပါ။</li>\n<li>Browser (ဥပမာ Chrome, Firefox) တွေက ဒီ HTML code တွေကို ဖတ်ပြီး ကျွန်တော်တို့ မြင်တွေ့နေရတဲ့ webpage ပုံစံအဖြစ် ပြောင်းလဲပြသပေးတာ ဖြစ်ပါတယ်။</li>\n</ul>"
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

const url = "src/content/docs/html/introduction/editor.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/html/introduction/editor.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/html/introduction/editor.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, htmlTag, url };
