import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const semanticImage = new Proxy({"src":"/_astro/semantic.CSjXTTK5.png","width":1946,"height":880,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/html/semantic.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Semantic HTML သုံးခြင်းရဲ့ အကျိုးကျေးဇူးများ",
  "description": "Semantic HTML သုံးခြင်းရဲ့ အကျိုးကျေးဇူးများ"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "semantic-html-သုံးခြင်းရဲ့-accessibility-အကျိုးကျေးဇူးများ",
    "text": "Semantic HTML သုံးခြင်းရဲ့ Accessibility အကျိုးကျေးဇူးများ"
  }, {
    "depth": 3,
    "slug": "semantic-html-အတွက်-အလေ့အကျင့်ကောင်းများ",
    "text": "Semantic HTML အတွက် အလေ့အကျင့်ကောင်းများ"
  }, {
    "depth": 5,
    "slug": "1-မှန်ကန်တဲ့-tag-များကို-သုံးပါ",
    "text": "1. မှန်ကန်တဲ့ Tag များကို သုံးပါ"
  }, {
    "depth": 5,
    "slug": "2-div-ကို-အလွန်အကျွံမသုံးပါနဲ့",
    "text": "2. <div> ကို အလွန်အကျွံမသုံးပါနဲ့"
  }, {
    "depth": 5,
    "slug": "3-page-structure-ကို-စဉ်းစားပါ",
    "text": "3. Page Structure ကို စဉ်းစားပါ"
  }, {
    "depth": 5,
    "slug": "4-ရှင်းလင်းတဲ့-ခေါင်းစဉ်များ-ပေးပါ",
    "text": "4. ရှင်းလင်းတဲ့ ခေါင်းစဉ်များ ပေးပါ"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"semantic-html-သုံးခြင်းရဲ့-accessibility-အကျိုးကျေးဇူးများ\">Semantic HTML သုံးခြင်းရဲ့ Accessibility အကျိုးကျေးဇူးများ</h3><a class=\"sl-anchor-link\" href=\"#semantic-html-သုံးခြင်းရဲ့-accessibility-အကျိုးကျေးဇူးများ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Semantic HTML သုံးခြင်းရဲ့ Accessibility အကျိုးကျေးဇူးများ”</span></a></div>\n<p>Semantic HTML ကို သုံးတာက screen reader လိုမျိုး အထောက်အကူပြု နည်းပညာတွေအတွက် content ကို ပိုမို နားလည်လွယ်စေတဲ့အတွက် accessibility ကို ပိုကောင်းစေပါတယ်။</p>\n<p><strong>Screen Reader အတွက် ဥပမာ -</strong> <br>\nScreen reader တစ်ခုက page ရဲ့ ခေါင်းပိုင်း (<code dir=\"auto\">&#x3C;header></code>)၊ အဓိကအကြောင်းအရာပိုင်း (<code dir=\"auto\">&#x3C;main></code>) နဲ့ အောက်ခြေပိုင်း (<code dir=\"auto\">&#x3C;footer></code>) ကို အလွယ်တကူ ခွဲခြားသိနိုင်ပါတယ်။ ဒါကြောင့် content တွေကို ပိုပြီး စနစ်တကျ၊ အစီအစဉ်တကျ ဖတ်ပြနိုင်ပါတယ်။</p>\n"
    }), createVNode($$ContentImage, {
      src: semanticImage,
      alt: "Non-semantic vs Semantic"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"semantic-html-အတွက်-အလေ့အကျင့်ကောင်းများ\">Semantic HTML အတွက် အလေ့အကျင့်ကောင်းများ</h3><a class=\"sl-anchor-link\" href=\"#semantic-html-အတွက်-အလေ့အကျင့်ကောင်းများ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Semantic HTML အတွက် အလေ့အကျင့်ကောင်းများ”</span></a></div>\n<div class=\"sl-heading-wrapper level-h5\"><h5 id=\"1-မှန်ကန်တဲ့-tag-များကို-သုံးပါ\">1. မှန်ကန်တဲ့ Tag များကို သုံးပါ</h5><a class=\"sl-anchor-link\" href=\"#1-မှန်ကန်တဲ့-tag-များကို-သုံးပါ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “1. မှန်ကန်တဲ့ Tag များကို သုံးပါ”</span></a></div>\n<p>content နဲ့ သင့်တော်တဲ့ tag ကိုသုံးပါ (ဥပမာ - blog post အတွက် <code dir=\"auto\">&#x3C;article></code> menu အတွက် <code dir=\"auto\">&#x3C;nav></code>)။</p>\n<div class=\"sl-heading-wrapper level-h5\"><h5 id=\"2-div-ကို-အလွန်အကျွံမသုံးပါနဲ့\">2. <code dir=\"auto\">&#x3C;div></code> ကို အလွန်အကျွံမသုံးပါနဲ့</h5><a class=\"sl-anchor-link\" href=\"#2-div-ကို-အလွန်အကျွံမသုံးပါနဲ့\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “2. &#x3C;div> ကို အလွန်အကျွံမသုံးပါနဲ့”</span></a></div>\n<p><code dir=\"auto\">&#x3C;div></code> က အရာအားလုံးကို ထည့်လို့ရတဲ့ container ဆိုပေမဲ့ နေရာတကာမှာ လျှောက်မသုံးပါနဲ့။ သူ့အစား structure ပိုကျတဲ့ semantic tag တွေကို သုံးပါ။</p>\n<div class=\"sl-heading-wrapper level-h5\"><h5 id=\"3-page-structure-ကို-စဉ်းစားပါ\">3. Page Structure ကို စဉ်းစားပါ</h5><a class=\"sl-anchor-link\" href=\"#3-page-structure-ကို-စဉ်းစားပါ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “3. Page Structure ကို စဉ်းစားပါ”</span></a></div>\n<p>Tag တွေရဲ့ အစီအစဉ်ကို အမြဲတမ်း စဉ်းစားပါ။ ကိုယ့်ရဲ့ page ဟာ <code dir=\"auto\">&#x3C;header></code> (အပေါ်ပိုင်း) ကနေ <code dir=\"auto\">&#x3C;main></code> (အဓိက content) ကိုဖြတ်ပြီး <code dir=\"auto\">&#x3C;footer></code> (အောက်ခြေပိုင်း) မှာ ဆုံးသင့်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h5\"><h5 id=\"4-ရှင်းလင်းတဲ့-ခေါင်းစဉ်များ-ပေးပါ\">4. ရှင်းလင်းတဲ့ ခေါင်းစဉ်များ ပေးပါ</h5><a class=\"sl-anchor-link\" href=\"#4-ရှင်းလင်းတဲ့-ခေါင်းစဉ်များ-ပေးပါ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “4. ရှင်းလင်းတဲ့ ခေါင်းစဉ်များ ပေးပါ”</span></a></div>\n<p><code dir=\"auto\">&#x3C;nav></code>, <code dir=\"auto\">&#x3C;header></code>, <code dir=\"auto\">&#x3C;footer></code>, ဒါမှမဟုတ် <code dir=\"auto\">&#x3C;section></code> လို tag တွေသုံးတဲ့အခါ အထဲမှာပါတဲ့ content တွေက ရှင်းလင်းပြီး အဓိပ္ပာယ်ရှိနေဖို့ သေချာပါစေ။</p>\n"
    }), createVNode($$Aside, {
      type: "tip",
      title: "အနှစ်ချုပ်",
      "set:html": "<ul>\n<li>\n<p>Semantic HTML ကို သုံးခြင်းအားဖြင့် web accessibility နဲ့ SEO ပိုကောင်းလာစေပါတယ်။</p>\n</li>\n<li>\n<p>HTML tag တွေကို ရွေးချယ်တဲ့အခါမှာ အမြင်ကိုပဲ မစဉ်းစားဘဲ content ရဲ့ အဓိပ္ပာယ် ကိုပါ ထည့်သွင်းစဉ်းစားသင့်ပါတယ်။</p>\n</li>\n<li>\n<p>Content တွေကို စနစ်တကျဖြစ်စေဖို့ <code dir=\"auto\">&#x3C;header></code>, <code dir=\"auto\">&#x3C;footer></code>, <code dir=\"auto\">&#x3C;section></code>, <code dir=\"auto\">&#x3C;article></code>, <code dir=\"auto\">&#x3C;nav></code> တို့လို tag တွေကို သုံးပါ။</p>\n</li>\n<li>\n<p>Code ကို ရှင်းလင်းစေဖို့ <code dir=\"auto\">&#x3C;div></code> tag တွေကို အလွန်အကျွံမသုံးဘဲ အဓိပ္ပာယ်ရှိတဲ့ tag တွေကို သုံးပါ။</p>\n</li>\n<li>\n<p>Content တွေကို header ကနေ main content၊ ပြီးမှ footer ဆိုပြီး စနစ်တကျ စီစဉ်ပါ။</p>\n</li>\n<li>\n<p>Semantic HTML က screen reader တွေနဲ့ search engine တွေကို ကိုယ့်ရဲ့ webpage မှာပါတဲ့ အကြောင်းများ ကို ပိုနားလည်လွယ်စေပါတယ်။</p>\n</li>\n</ul>"
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

const url = "src/content/docs/html/semantic/benefits.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/html/semantic/benefits.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/html/semantic/benefits.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
