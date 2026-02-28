import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "Advanced CSS မိတ်ဆက်",
  "description": "Modern CSS ၏ အဆင့်မြင့် Feature များနှင့် Logic များ"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "ဘာတွေ-လေ့လာရမလဲ",
    "text": "ဘာတွေ လေ့လာရမလဲ?"
  }, {
    "depth": 4,
    "slug": "1-core-logic--functions",
    "text": "1. Core Logic & Functions"
  }, {
    "depth": 4,
    "slug": "2-layout--sizing",
    "text": "2. Layout & Sizing"
  }, {
    "depth": 4,
    "slug": "3-visuals--ui-components",
    "text": "3. Visuals & UI Components"
  }, {
    "depth": 4,
    "slug": "4-advanced-developer-ergonomics",
    "text": "4. Advanced Developer Ergonomics"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ကြိုဆိုပါတယ်",
      "set:html": "<p>Advanced CSS Course မှ ကြိုဆိုပါတယ်။ ဒီ Course မှာတော့ CSS ရဲ့ နောက်ဆုံးပေါ် Feature တွေ၊ Programming Logic တွေနဲ့ Complex Layout တွေကို ဘယ်လို တည်ဆောက်မလဲ ဆိုတာ လေ့လာသွားမှာ ဖြစ်ပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဘာတွေ-လေ့လာရမလဲ\">ဘာတွေ လေ့လာရမလဲ?</h3><a class=\"sl-anchor-link\" href=\"#ဘာတွေ-လေ့လာရမလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘာတွေ လေ့လာရမလဲ?”</span></a></div>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"1-core-logic--functions\">1. Core Logic &#x26; Functions</h4><a class=\"sl-anchor-link\" href=\"#1-core-logic--functions\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “1. Core Logic &#x26; Functions”</span></a></div>\n<p>CSS မှာ Programming Language တွေလိုမျိုး Logic တွေ (<code dir=\"auto\">if()</code>), Function တွေ ရေးလို့ရနေပါပြီ။</p>\n<ul>\n<li><code dir=\"auto\">if()</code> Function</li>\n<li>Custom Functions</li>\n<li>Sibling Functions (<code dir=\"auto\">sibling-count()</code>, <code dir=\"auto\">sibling-index()</code>)</li>\n<li>Stepped Value Functions (<code dir=\"auto\">round()</code>, <code dir=\"auto\">mod()</code>, <code dir=\"auto\">rem()</code>)</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"2-layout--sizing\">2. Layout &#x26; Sizing</h4><a class=\"sl-anchor-link\" href=\"#2-layout--sizing\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “2. Layout &#x26; Sizing”</span></a></div>\n<p>Layout တွေကို ပိုမို လွယ်ကူပြီး Dynamic ဖြစ်အောင် တည်ဆောက်နည်းများ။</p>\n<ul>\n<li><code dir=\"auto\">field-sizing</code> (Auto-growing inputs)</li>\n<li><code dir=\"auto\">interpolate-size</code> (Smooth transitions for auto sizes)</li>\n<li>Container Scroll State Queries</li>\n<li>Anchor Positioning</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"3-visuals--ui-components\">3. Visuals &#x26; UI Components</h4><a class=\"sl-anchor-link\" href=\"#3-visuals--ui-components\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “3. Visuals &#x26; UI Components”</span></a></div>\n<p>UI Component တွေကို ပိုမို လှပသပ်ရပ်အောင် ဖန်တီးနည်းများ။</p>\n<ul>\n<li>Customizable <code dir=\"auto\">&#x3C;select></code></li>\n<li><code dir=\"auto\">corner-shape</code> (Squircles)</li>\n<li>Scroll Markers</li>\n<li>View Transitions (Cross-Document)</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"4-advanced-developer-ergonomics\">4. Advanced Developer Ergonomics</h4><a class=\"sl-anchor-link\" href=\"#4-advanced-developer-ergonomics\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “4. Advanced Developer Ergonomics”</span></a></div>\n<p>Code ကို ပိုမို စနစ်တကျနဲ့ Maintain လုပ်ရလွယ်အောင် ရေးနည်းများ။</p>\n<ul>\n<li><code dir=\"auto\">@property</code> (Typed Custom Properties)</li>\n<li>Cascade Layers (<code dir=\"auto\">@layer</code>)</li>\n<li>Enhanced <code dir=\"auto\">attr()</code></li>\n</ul>\n"
    }), createVNode($$Aside, {
      type: "tip",
      "set:html": "<p>ဒီ Course ဟာ Modern Browser တွေမှာ အသစ်ထွက်လာတဲ့ Feature တွေကို အဓိကထားတာမို့၊ တချို့ Feature တွေက Browser Support လိုအပ်ချက် ရှိနိုင်ပါတယ်။</p>"
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

const url = "src/content/docs/advanced-css/introduction/welcome.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-css/introduction/welcome.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-css/introduction/welcome.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
