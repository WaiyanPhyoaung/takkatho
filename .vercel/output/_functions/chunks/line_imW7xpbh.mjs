import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import { f as format } from './format_BXgwDBU8.mjs';
import 'clsx';

const frontmatter = {
  "title": "စာကြောင်းဆင်းခြင်း၊ မျဉ်းတားခြင်း နှင့် စာလုံးပုံစံပြောင်းတဲ့ Tags များ",
  "description": "စာကြောင်းဆင်းခြင်း၊ မျဉ်းတားခြင်း နှင့် စာလုံးပုံစံပြောင်းတဲ့ Tags များ"
};
function getHeadings() {
  return [{
    "depth": 4,
    "slug": "line-breaks-br",
    "text": "Line Breaks (<br>):"
  }, {
    "depth": 4,
    "slug": "horizontal-rules-hr",
    "text": "Horizontal Rules (<hr>):"
  }, {
    "depth": 4,
    "slug": "စာလုံးပုံစံပြောင်းတဲ့-tags-များ",
    "text": "စာလုံးပုံစံပြောင်းတဲ့ Tags များ"
  }];
}
const brEg = `
<p>This is the first line.<br>This is the second line.</p>
`;
const hrEg = `
<p>This is a section.</p>
<hr>
<p>This is another section, separated by a line.</p>
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>တစ်ခါတလေမှာ စာကြောင်းအသစ်တစ်ကြောင်းဆင်းချင်တာ ဒါမှမဟုတ် အပိုင်းတွေကို မျဉ်းတားပြီး ခွဲခြားချင်တာမျိုး ရှိနိုင်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"line-breaks-br\">Line Breaks (<code dir=\"auto\">&#x3C;br></code>):</h4><a class=\"sl-anchor-link\" href=\"#line-breaks-br\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Line Breaks (&#x3C;br>):”</span></a></div>\n<p><code dir=\"auto\">&#x3C;br></code> tag က စာပိုဒ်အသစ်မဖြစ်ဘဲ စာသားကို နောက်တစ်ကြောင်းဆင်းစေပါတယ်။</p>\n<p><strong>ဥပမာ</strong></p>\n"
    }), createVNode(Code, {
      title: "HTML",
      lang: "html",
      code: brEg
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"horizontal-rules-hr\">Horizontal Rules (<code dir=\"auto\">&#x3C;hr></code>):</h4><a class=\"sl-anchor-link\" href=\"#horizontal-rules-hr\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Horizontal Rules (&#x3C;hr>):”</span></a></div>\n<p><code dir=\"auto\">&#x3C;hr></code> tag က စာမျက်နှာမှာ အလျားလိုက်မျဉ်းတစ်ကြောင်း ဖန်တီးပေးပါတယ်။ အကြောင်းအရာ အပိုင်းတွေကိုခွဲခြားဖို့ အသုံးဝင်ပါတယ်။</p>\n<p><strong>ဥပမာ</strong></p>\n"
    }), createVNode(Code, {
      title: "HTML",
      lang: "html",
      code: hrEg
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"စာလုံးပုံစံပြောင်းတဲ့-tags-များ\">စာလုံးပုံစံပြောင်းတဲ့ Tags များ</h4><a class=\"sl-anchor-link\" href=\"#စာလုံးပုံစံပြောင်းတဲ့-tags-များ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “စာလုံးပုံစံပြောင်းတဲ့ Tags များ”</span></a></div>\n<p>HTML မှာ စာသားတွေကို အလေးပေးဖို့၊ ပုံစံလှအောင်လုပ်ဖို့၊ ဒါမှမဟုတ် အရေးကြီးကြောင်းပြဖို့ ကူညီပေးတဲ့ tag အများအပြားရှိပါတယ်။ သူတို့ထဲက တချို့ကို ကြည့်လိုက်ရအောင်။</p>\n<ul>\n<li>\n<p><strong>Bold Text (<code dir=\"auto\">&#x3C;b></code>):</strong> စာလုံးကို Bold (အထူ) ဖြစ်စေတယ်။</p>\n</li>\n<li>\n<p><strong>Italic Text (<code dir=\"auto\">&#x3C;i></code>):</strong> စာလုံးကို Italic (အစောင်း) ဖြစ်စေတယ်။</p>\n</li>\n<li>\n<p><strong>Underlined Text (<code dir=\"auto\">&#x3C;u></code>):</strong> စာသားအောက်မှာ <u>မျဉ်းသား</u>ပေးတယ်။</p>\n</li>\n<li>\n<p><strong>Important Text (<code dir=\"auto\">&#x3C;strong></code>):</strong> စာသားက အရေးကြီးတယ် ဆိုတဲ့ အဓိပ္ပာယ်ကိုပါ သက်ရောက်စေပြီး၊ များသောအားဖြင့် Bold နဲ့ပြတယ်။</p>\n</li>\n<li>\n<p><strong>Emphasized Text (<code dir=\"auto\">&#x3C;em></code>):</strong> စာသားကို အလေးပေးချင်တယ်ဆိုတဲ့ အဓိပ္ပာယ် သက်ရောက်စေပြီး၊ များသောအားဖြင့် Italic နဲ့ပြတယ်။</p>\n</li>\n<li>\n<p><strong>Highlighted Text (<code dir=\"auto\">&#x3C;mark></code>):</strong> စာသားကို highlight လုပ်ပေးတယ်၊ များသောအားဖြင့် အဝါရောင်နောက်ခံနဲ့ပါ။</p>\n</li>\n<li>\n<p><strong>Underline (<code dir=\"auto\">&#x3C;u></code>):</strong> စာသားအောက်မှာ မျဉ်းတားပေးတယ်။</p>\n</li>\n<li>\n<p><strong>Strikethrough (<code dir=\"auto\">&#x3C;s></code>):</strong> စာသားအလယ်ကနေ မျဉ်းဖျက်ပေးတယ်။ ဒါက မှားနေတာ ဒါမှမဟုတ် ဖယ်ရှားလိုက်ပြီဆိုတာကို ပြချင်တဲ့အခါသုံးတယ်။</p>\n</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: format,
      alt: "Text formatting tags"
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

const url = "src/content/docs/html/texts/line.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/html/texts/line.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/html/texts/line.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, brEg, Content as default, file, frontmatter, getHeadings, hrEg, url };
