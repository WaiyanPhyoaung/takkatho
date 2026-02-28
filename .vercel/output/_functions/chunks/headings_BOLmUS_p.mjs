import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "Text များ နှင့် စာလုံးပုံပြောင်းခြင်း",
  "description": "Text များ နှင့် စာလုံးပုံပြောင်းခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "ခေါင်းစဉ်များ-h1-to-h6",
    "text": "ခေါင်းစဉ်များ (<h1> to <h6>)"
  }, {
    "depth": 4,
    "slug": "heading-tags",
    "text": "Heading Tags:"
  }, {
    "depth": 3,
    "slug": "headings-တွေ-ဘာကြောင့်အရေးကြီးသလဲ",
    "text": "Headings တွေ ဘာကြောင့်အရေးကြီးသလဲ"
  }, {
    "depth": 3,
    "slug": "စာပိုဒ်များ-paragraphs",
    "text": "စာပိုဒ်များ (Paragraphs)"
  }];
}
const headings = `
<h1>This is a Main Heading</h1>
<h2>This is a Subheading</h2>
<h3>This is a Smaller Subheading</h3>
`;
const paragraph = `
<p>This is a paragraph of text.</p>
<p>Here is another paragraph.</p>
`;
function _createMdxContent(props) {
  const _components = {
    ul: "ul",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>ဒီအခန်းမှာတော့ HTML မှာ စာသားတွေကို ဘယ်လိုပုံစံချရမလဲဆိုတာကို အဓိကထားသွားမှာပါ။ ခေါင်းစဉ်ကြီးတွေ (headings)၊ စာပိုဒ်တွေ (paragraphs) ဖန်တီးနည်းနဲ့ HTML tag အမျိုးမျိုးသုံးပြီး စာသားပုံစံပြောင်းနည်းတွေကို သင်ယူရပါမယ်။ ဒါ့အပြင် list တွေနဲ့ တခြားအရေးကြီးတဲ့ စာသားပုံစံချတဲ့ element တွေကိုသုံးပြီး ကိုယ့်ရဲ့အကြောင်းအရာတွေကို ဘယ်လို စနစ်တကျစီစဉ်မလဲဆိုတာကိုလည်း လေ့လာသွားပါမယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ခေါင်းစဉ်များ-h1-to-h6\">ခေါင်းစဉ်များ (<code dir=\"auto\">&#x3C;h1></code> to <code dir=\"auto\">&#x3C;h6></code>)</h3><a class=\"sl-anchor-link\" href=\"#ခေါင်းစဉ်များ-h1-to-h6\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ခေါင်းစဉ်များ (&#x3C;h1> to &#x3C;h6>)”</span></a></div>\n<p>HTML မှာ headings တွေကို ကိုယ့်ရဲ့အကြောင်းအရာတွေကို ပုံစံကျအောင် သတ်မှတ်ဖို့သုံးပါတယ်။ Headings တွေက အကြောင်းအရာကို စနစ်တကျဖြစ်စေဖို့ရော၊ SEO (Search Engine Optimization) အတွက်ပါ အရေးကြီးပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"heading-tags\">Heading Tags:</h4><a class=\"sl-anchor-link\" href=\"#heading-tags\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Heading Tags:”</span></a></div>\n<p>HTML မှာ ခေါင်းစဉ် <code dir=\"auto\">&#x3C;h1></code> ကနေ <code dir=\"auto\">&#x3C;h6></code> အထိ အဆင့် ၆ ဆင့်ရှိပါတယ်\u001b</p>\n<p><strong>ဥပမာ -</strong></p>\n"
    }), createVNode(Code, {
      title: "HTML",
      lang: "html",
      code: headings
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<ul>\n<li><code dir=\"auto\">&#x3C;h1></code>: စာမျက်နှာရဲ့ အဓိကခေါင်းစဉ်ကြီး (များသောအားဖြင့် title အတွက်သုံးတယ်)။</li>\n<li><code dir=\"auto\">&#x3C;h2></code>: <code dir=\"auto\">&#x3C;h1></code> အောက်က ခေါင်းစဉ်ငယ်။</li>\n<li><code dir=\"auto\">&#x3C;h3></code> to <code dir=\"auto\">&#x3C;h6></code>: အရေးပါမှုအလိုက် တဖြည်းဖြည်းသေးသွားတဲ့ ခေါင်းစဉ်ငယ်တွေ။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"headings-တွေ-ဘာကြောင့်အရေးကြီးသလဲ\">Headings တွေ ဘာကြောင့်အရေးကြီးသလဲ</h3><a class=\"sl-anchor-link\" href=\"#headings-တွေ-ဘာကြောင့်အရေးကြီးသလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Headings တွေ ဘာကြောင့်အရေးကြီးသလဲ”</span></a></div>\n<ul>\n<li>Headings တွေက သူ့အဆင့်နဲ့ သူ ပုံစံကျအောင် ကူညီပေးတယ်။</li>\n<li>သူတို့က အသုံးပြုသူတွေရော search engine တွေကိုပါ သင့်စာမျက်နှာရဲ့ တည်ဆောက်ပုံကို နားလည်အောင် ကူညီပေးတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"စာပိုဒ်များ-paragraphs\">စာပိုဒ်များ (Paragraphs)</h3><a class=\"sl-anchor-link\" href=\"#စာပိုဒ်များ-paragraphs\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “စာပိုဒ်များ (Paragraphs)”</span></a></div>\n<p><code dir=\"auto\">&#x3C;p></code> tag ကို စာပိုဒ်တွေ ဖန်တီးဖို့အတွက် သုံးပါတယ်။ စာပိုဒ်တွေက အကြောင်းအရာတွေကို စုစည်းပေးပြီး ဖတ်ရလွယ်ကူအောင် ကူညီပေးပါတယ်။</p>\n<p>ဥပမာ:</p>\n"
    }), createVNode(Code, {
      title: "HTML",
      lang: "html",
      code: paragraph
    }), "\n", createVNode(_components.ul, {
      "set:html": "\n<li><code dir=\"auto\">&#x3C;p></code> tag က စာပိုဒ်တွေကို စုစည်းပေးပြီး ဖတ်ရလွယ်ကူအောင် ကူညီပေးပါတယ်။</li>\n<li><code dir=\"auto\">&#x3C;p></code> tag ကိုသုံးတဲ့အခါ၊ browser က စာပိုဒ်ရဲ့ အပေါ်နဲ့အောက်မှာ နေရာလပ်ကို အလိုအလျောက်ထည့်ပေးတဲ့အတွက် တခြား element တွေနဲ့ မြင်သာအောင် ခွဲခြားပေးပါတယ်။</li>\n"
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

const url = "src/content/docs/html/texts/headings.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/html/texts/headings.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/html/texts/headings.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, headings, paragraph, url };
