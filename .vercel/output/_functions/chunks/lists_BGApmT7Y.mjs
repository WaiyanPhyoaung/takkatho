import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const lists = new Proxy({"src":"/_astro/lists.D1SSrk9A.png","width":1340,"height":424,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/html/lists.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Lists",
  "description": "Lists"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "ordered-lists-ol",
    "text": "Ordered Lists (<ol>)"
  }];
}
const ulEg = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
`;
const olEg = `
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>HTML မှာ list အမျိုးအစား နှစ်မျိုးဖန်တီးနိုင်ပါတယ် - <strong>unordered lists (bullet point list)</strong> နဲ့ <strong>ordered lists (number list)</strong> ပါ။</p>\n<p>###Unordered Lists (<code dir=\"auto\">&#x3C;ul></code>)\nUnordered list ဆိုတာက bullet point list ပါ၊ <code dir=\"auto\">&#x3C;ul></code> tag ကိုသုံးပြီး ဖန်တီးရပါတယ်။ list item တစ်ခုချင်းစီကိုတော့ <code dir=\"auto\">&#x3C;li></code> tag နဲ့ ဖန်တီးရပါတယ်။</p>\n<p><strong>ဥပမာ</strong></p>\n"
    }), createVNode(Code, {
      title: "HTML",
      lang: "html",
      code: ulEg
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ordered-lists-ol\">Ordered Lists (<code dir=\"auto\">&#x3C;ol></code>)</h3><a class=\"sl-anchor-link\" href=\"#ordered-lists-ol\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Ordered Lists (&#x3C;ol>)”</span></a></div>\n<p>Ordered list ဆိုတာက နံပါတ်စဉ် list ပါ၊ <code dir=\"auto\">&#x3C;ol></code> tag ကိုသုံးပြီး ဖန်တီးရပါတယ်။ list item တစ်ခုချင်းစီကို <code dir=\"auto\">&#x3C;li></code> tag နဲ့ပဲ သတ်မှတ်ရပါတယ်။</p>\n<p><strong>ဥပမာ</strong></p>\n"
    }), createVNode(Code, {
      title: "HTML",
      lang: "html",
      code: olEg
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>List item တွေကို အလိုအလျောက် နံပါတ်စဉ်တပ်ပေးသွားပါလိမ့်မယ်။</p>\n"
    }), createVNode($$ContentImage, {
      src: lists,
      alt: "Lists"
    }), "\n", createVNode($$Aside, {
      type: "tip",
      title: "အကျဉ်းချုပ်",
      "set:html": "<ul>\n<li>\n<p>Headings (<code dir=\"auto\">&#x3C;h1></code> to <code dir=\"auto\">&#x3C;h6></code>) တွေက အကြောင်းအရာကို အဆင့်ဆင့် စနစ်တကျဖြစ်အောင် ကူညီပေးပါတယ်။</p>\n</li>\n<li>\n<p>Paragraphs (<code dir=\"auto\">&#x3C;p></code>) တွေက စာသားတွေကို ဖတ်လို့ကောင်းတဲ့ အပိုင်းလေးတွေအဖြစ် ပုံစံချပေးပါတယ်။</p>\n</li>\n<li>\n<p>Line breaks (<code dir=\"auto\">&#x3C;br></code>) က စာကြောင်းအသစ်ဆင်းစေပြီး၊ horizontal rules (<code dir=\"auto\">&#x3C;hr></code>) က အပိုင်းတွေကို ခွဲခြားပေးပါတယ်။</p>\n</li>\n<li>\n<p><code dir=\"auto\">&#x3C;b></code>, <code dir=\"auto\">&#x3C;i></code>, <code dir=\"auto\">&#x3C;u></code>, <code dir=\"auto\">&#x3C;strong></code>, <code dir=\"auto\">&#x3C;em></code>, and <code dir=\"auto\">&#x3C;mark></code> လိုမျိုး tag တွေသုံးပြီး စာသားကို ပုံစံပြောင်းနိုင်ပါတယ်။</p>\n</li>\n<li>\n<p>Lists တွေကို <code dir=\"auto\">&#x3C;ul></code> (bullet list) နဲ့ <code dir=\"auto\">&#x3C;ol></code> (နံပါတ်စဉ် list) သုံးပြီး ဖန်တီးနိုင်ပါတယ်၊ item တစ်ခုချင်းစီကိုတော့ <code dir=\"auto\">&#x3C;li></code> tag ထဲမှာ ထည့်ရပါတယ်။</p>\n</li>\n</ul>"
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

const url = "src/content/docs/html/texts/lists.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/html/texts/lists.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/html/texts/lists.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, olEg, ulEg, url };
