import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const structure = new Proxy({"src":"/_astro/structure.BrTLTbrF.png","width":1869,"height":1534,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/html/structure.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "HTML ရဲ့ အခြေခံတည်ဆောက်ပုံ",
  "description": "HTML ရဲ့ အခြေခံတည်ဆောက်ပုံ"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "html-document-ရဲ့-တည်ဆောက်ပုံ",
    "text": "HTML Document ရဲ့ တည်ဆောက်ပုံ"
  }, {
    "depth": 3,
    "slug": "tag-တွေနဲ့-element-တွေ",
    "text": "Tag တွေနဲ့ Element တွေ"
  }, {
    "depth": 3,
    "slug": "html-tag-အမျိုးအစားများ",
    "text": "HTML Tag အမျိုးအစားများ"
  }, {
    "depth": 4,
    "slug": "paired-tags-အတွဲလိုက်-tag-များ",
    "text": "Paired Tags (အတွဲလိုက် Tag များ):"
  }, {
    "depth": 4,
    "slug": "self-closing-tags-အပိတ်မလိုသော-tag-များ",
    "text": "Self-closing Tags (အပိတ်မလိုသော Tag များ):"
  }];
}
const basicHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Webpage</title>
  </head>
  <body>
    <h1>Welcome to My Webpage</h1>
    <p>This is my first HTML page!</p>
  </body>
</html>`;
const h1Tag = `<h1>Welcome to My Webpage</h1>`;
const pTag = `<p>This is a paragraph</p>`;
const imgTag = `<img src="image.jpg" alt="ပုံအကြောင်း ရှင်းပြတဲ့စာ">`;
const selfClosingTag = `<img src="image.jpg" alt="ပုံအကြောင်း ရှင်းပြတဲ့စာ">`;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>ဒီအခန်းမှာ HTML ရဲ့ အခြေခံတည်ဆောက်ပုံနဲ့ webpage တစ်ခုဖြစ်လာအောင် element တွေ ဘယ်လိုပေါင်းစပ် အလုပ်လုပ်လဲဆိုတာကို လေ့လာကြပါမယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"html-document-ရဲ့-တည်ဆောက်ပုံ\">HTML Document ရဲ့ တည်ဆောက်ပုံ</h3><a class=\"sl-anchor-link\" href=\"#html-document-ရဲ့-တည်ဆောက်ပုံ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “HTML Document ရဲ့ တည်ဆောက်ပုံ”</span></a></div>\n<p>HTML page တိုင်းမှာ အခြေခံကျတဲ့ တည်ဆောက်ပုံတစ်ခု ရှိပါတယ်။ အဲ့ဒီတည်ဆောက်ပုံက ကိုယ်တည်ဆောက်မယ့် webpage တိုင်းရဲ့ အုတ်မြစ်ပါပဲ။ သူက အထဲက အကြောင်းအရာတွေကို ဘယ်လို စီစဉ်မလဲ၊ ဘယ်လို ပြသမလဲဆိုတာကို သတ်မှတ်ပေးပါတယ်။</p>\n<p>ဒါကတော့ HTML document တစ်ခုရဲ့ အခြေခံ တည်ဆောက်ပုံ နမူနာ ဖြစ်ပါတယ်-</p>\n"
    }), createVNode(Code, {
      title: "HTML",
      lang: "html",
      code: basicHtml
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<ul>\n<li>\n<p><code dir=\"auto\">&#x3C;!DOCTYPE html></code>:\nဒါက document အမျိုးအစားကို ကြေညာတာပါ။ ဒီစာမျက်နှာကို နောက်ဆုံး version ဖြစ်တဲ့ HTML5 နဲ့ ရေးထားတယ်ဆိုတာ browser ကို ပြောပြတာဖြစ်ပါတယ်။</p>\n</li>\n<li>\n<p><code dir=\"auto\">&#x3C;html></code>:\nဒီ tag က document တစ်ခုလုံးကို အုပ်ထားပြီး၊ သူ့အတွင်းမှာရှိတဲ့ အရာအားလုံးက HTML document ဖြစ်တယ်ဆိုတာကို browser ကို သိစေပါတယ်။</p>\n</li>\n<li>\n<p><code dir=\"auto\">&#x3C;head></code>:\nhead အပိုင်းမှာ webpage နဲ့ပတ်သက်တဲ့ အချက်အလက် (metadata) တွေ ပါပါတယ်။ Metadata ဆိုတာက သုံးစွဲသူတွေ တိုက်ရိုက်မမြင်ရပေမယ့် browser အတွက် အရေးကြီးတဲ့ အချက်အလက်တွေပါ။ ဥပမာ -</p>\n<ul>\n<li>\n<p><code dir=\"auto\">&#x3C;meta charset=\"UTF-8\"></code>: ဒီ tag က မြန်မာစာလိုမျိုး ဘာသာစကားအစုံနဲ့ အထူးစာလုံးတွေ (é, ©, 💻) ကို ကောင်းကောင်းမွန်မွန် ပေါ်စေဖို့ပါ။</p>\n</li>\n<li>\n<p><code dir=\"auto\">&#x3C;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"></code>: ဒီ tag က webpage ကို ဖုန်းလိုမျိုး mobile device တွေမှာ ကြည့်တဲ့အခါ device ရဲ့ screen အကျယ်အလိုက် အဆင်ပြေပြေ ပေါ်အောင် ချိန်ညှိပေးပါတယ်။</p>\n</li>\n<li>\n<p><code dir=\"auto\">&#x3C;title></code>: Browser ရဲ့ tab မှာ ပေါ်မယ့် စာမျက်နှာရဲ့ ခေါင်းစဉ်ကို သတ်မှတ်ပေးပါတယ်။</p>\n</li>\n</ul>\n</li>\n<li>\n<p><code dir=\"auto\">&#x3C;body></code>:\nဒါကတော့ webpage ရဲ့ အဓိက အပိုင်းဖြစ်ပြီး၊ သုံးစွဲသူတွေ မြင်ရမယ့် အကြောင်းအရာအားလုံးကို ဒီထဲမှာ ထည့်ရပါတယ်။ ခေါင်းစဉ်တွေ၊ စာပိုဒ်တွေ၊ ပုံတွေ၊ link တွေ အားလုံး ဒီထဲမှာပဲ ပါပါတယ်။</p>\n</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: structure,
      alt: "HTML Structure"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"tag-တွေနဲ့-element-တွေ\">Tag တွေနဲ့ Element တွေ</h3><a class=\"sl-anchor-link\" href=\"#tag-တွေနဲ့-element-တွေ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Tag တွေနဲ့ Element တွေ”</span></a></div>\n<p>HTML မှာ tag တွေက အဓိက အုတ်မြစ်တွေပါပဲ။ Tag တွေကို စာသား၊ ပုံ၊ link လိုမျိုး မတူညီတဲ့ အကြောင်းအရာအမျိုးအစားတွေကို သတ်မှတ်ဖို့ သုံးပါတယ်။ HTML element တစ်ခုမှာ အဖွင့် tag (opening tag) နဲ့ အပိတ် tag (closing tag) ဆိုပြီး ပါလေ့ရှိပါတယ်။</p>\n<p><strong>ဥပမာ -</strong></p>\n"
    }), createVNode(Code, {
      title: "HTML",
      lang: "html",
      code: h1Tag
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<ul>\n<li>\n<p><code dir=\"auto\">&#x3C;h1></code>: ဒါက ခေါင်းစဉ်ရဲ့ အစကို သတ်မှတ်ပေးတဲ့ အဖွင့် tag ပါ။</p>\n</li>\n<li>\n<p><code dir=\"auto\">&#x3C;/h1></code>: ဒါက ခေါင်းစဉ်ရဲ့ အဆုံးကို သတ်မှတ်ပေးတဲ့ အပိတ် tag ပါ။</p>\n</li>\n</ul>\n<p>အဖွင့် tag နဲ့ အပိတ် tag ကြားထဲမှာရှိတဲ့ အရာအားလုံးက အကြောင်းအရာ (content) ဖြစ်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"html-tag-အမျိုးအစားများ\">HTML Tag အမျိုးအစားများ</h3><a class=\"sl-anchor-link\" href=\"#html-tag-အမျိုးအစားများ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “HTML Tag အမျိုးအစားများ”</span></a></div>\n<p>HTML tag တွေမှာ အဓိကအားဖြင့် အမျိုးအစား နှစ်မျိုးရှိပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"paired-tags-အတွဲလိုက်-tag-များ\">Paired Tags (အတွဲလိုက် Tag များ):</h4><a class=\"sl-anchor-link\" href=\"#paired-tags-အတွဲလိုက်-tag-များ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Paired Tags (အတွဲလိုက် Tag များ):”</span></a></div>\n<p>ဒီ tag တွေက အဖွင့် tag နဲ့ အပိတ် tag ဆိုပြီး အတွဲလိုက်လာပါတယ်။</p>\n<p>ဥပမာ:</p>\n"
    }), createVNode(Code, {
      title: "HTML",
      lang: "html",
      code: pTag
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"self-closing-tags-အပိတ်မလိုသော-tag-များ\">Self-closing Tags (အပိတ်မလိုသော Tag များ):</h4><a class=\"sl-anchor-link\" href=\"#self-closing-tags-အပိတ်မလိုသော-tag-များ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Self-closing Tags (အပိတ်မလိုသော Tag များ):”</span></a></div>\n<p>ဒီ tag တွေကတော့ အပိတ် tag ပြန်ပိတ်စရာမလိုပါဘူး။ ပုံတွေ ဒါမှမဟုတ် စာကြောင်းဆင်းတာတွေအတွက် သုံးပါတယ်။</p>\n<p>ဥပမာ:</p>\n"
    }), createVNode(Code, {
      title: "HTML",
      lang: "html",
      code: selfClosingTag
    }), "\n", createVNode(_components.p, {
      "set:html": "<code dir=\"auto\">&#x3C;img></code> ဆိုတာ ပုံထည့်ဖို့သုံးတဲ့ self-closing tag တစ်ခု ဖြစ်ပါတယ်။"
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

const url = "src/content/docs/html/structure/simple.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/html/structure/simple.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/html/structure/simple.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, basicHtml, Content as default, file, frontmatter, getHeadings, h1Tag, imgTag, pTag, selfClosingTag, url };
