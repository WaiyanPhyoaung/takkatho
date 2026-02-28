import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "CSS Units",
  "description": "အတိုင်းအတာ ယူနစ်များ (px, rem, em, vh, vw)"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "1-absolute-units-အတိအကျ",
    "text": "1. Absolute Units (အတိအကျ)"
  }, {
    "depth": 3,
    "slug": "2-relative-units-နှိုင်းယှဉ်---recommended",
    "text": "2. Relative Units (နှိုင်းယှဉ်) - Recommended"
  }, {
    "depth": 3,
    "slug": "3-viewport-units-မျက်နှာပြင်-အကျယ်အဝန်း",
    "text": "3. Viewport Units (မျက်နှာပြင် အကျယ်အဝန်း)"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ဘယ်ဟာ သုံးမလဲ?",
      "set:html": "<p><code dir=\"auto\">px</code> တစ်မျိုးတည်းနဲ့ အလုပ်ဖြစ်ပေမယ့်၊ Responsive ဖြစ်တဲ့ Website တွေအတွက် တခြား Unit တွေကို သုံးတတ်ဖို့ လိုပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"1-absolute-units-အတိအကျ\">1. Absolute Units (အတိအကျ)</h3><a class=\"sl-anchor-link\" href=\"#1-absolute-units-အတိအကျ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “1. Absolute Units (အတိအကျ)”</span></a></div>\n<ul>\n<li><strong>px (Pixels):</strong> မျက်နှာပြင်ပေါ်က အစက်အရေအတွက်။ အတိအကျ လိုချင်တဲ့ နေရာတွေ (ဥပမာ - Border အထူ) မှာ သုံးပါတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"2-relative-units-နှိုင်းယှဉ်---recommended\">2. Relative Units (နှိုင်းယှဉ်) - <strong>Recommended</strong></h3><a class=\"sl-anchor-link\" href=\"#2-relative-units-နှိုင်းယှဉ်---recommended\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “2. Relative Units (နှိုင်းယှဉ်) - Recommended”</span></a></div>\n<ul>\n<li>\n<p><strong>rem (Root EM):</strong> <code dir=\"auto\">html</code> tag ရဲ့ Font size (ပုံမှန်အားဖြင့် 16px) နဲ့ မြှောက်ပါတယ်။</p>\n<ul>\n<li><code dir=\"auto\">1rem</code> = 16px</li>\n<li><code dir=\"auto\">2rem</code> = 32px</li>\n<li><strong>အားသာချက်:</strong> User က Browser setting မှာ စာလုံးကြီးထားရင် လိုက်ကြီးပေးလို့ Accessibility ကောင်းပါတယ်။ Font size, Padding, Margin တွေမှာ <code dir=\"auto\">rem</code> သုံးတာ အကောင်းဆုံးပါ။</li>\n</ul>\n</li>\n<li>\n<p><strong>em:</strong> သူ့မိဘ (Parent) ရဲ့ Font size နဲ့ မြှောက်ပါတယ်။ နည်းနည်း ရှုပ်ထွေးနိုင်လို့ <code dir=\"auto\">rem</code> ကို ပိုအားပေးပါတယ်။</p>\n</li>\n<li>\n<p><strong>% (Percent):</strong> မိဘ (Parent) ရဲ့ အကျယ်အဝန်းပေါ် မူတည်ပါတယ်။</p>\n<ul>\n<li><code dir=\"auto\">width: 50%</code> ဆိုရင် မိဘအကျယ်ရဲ့ တစ်ဝက် ဖြစ်သွားမယ်။</li>\n</ul>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"3-viewport-units-မျက်နှာပြင်-အကျယ်အဝန်း\">3. Viewport Units (မျက်နှာပြင် အကျယ်အဝန်း)</h3><a class=\"sl-anchor-link\" href=\"#3-viewport-units-မျက်နှာပြင်-အကျယ်အဝန်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “3. Viewport Units (မျက်နှာပြင် အကျယ်အဝန်း)”</span></a></div>\n<ul>\n<li><strong>vw (Viewport Width):</strong> မျက်နှာပြင် အကျယ်ရဲ့ ၁%။\n<ul>\n<li><code dir=\"auto\">100vw</code> = မျက်နှာပြင် အကျယ် အပြည့်။</li>\n</ul>\n</li>\n<li><strong>vh (Viewport Height):</strong> မျက်နှာပြင် အမြင့်ရဲ့ ၁%။\n<ul>\n<li><code dir=\"auto\">100vh</code> = မျက်နှာပြင် အမြင့် အပြည့် (Hero Section တွေမှာ သုံးပါတယ်)။</li>\n</ul>\n</li>\n</ul>\n"
    }), createVNode($$Aside, {
      type: "tip",
      "set:html": "<p><strong>Best Practice:</strong></p><ul>\n<li><strong>Font Size:</strong> <code dir=\"auto\">rem</code> သုံးပါ။</li>\n<li><strong>Layout Width:</strong> <code dir=\"auto\">%</code> သို့မဟုတ် <code dir=\"auto\">fr</code> (Grid) သုံးပါ။</li>\n<li><strong>Full Screen Section:</strong> <code dir=\"auto\">100vh</code> သုံးပါ။</li>\n<li><strong>Border:</strong> <code dir=\"auto\">px</code> သုံးပါ။</li>\n</ul>"
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

const url = "src/content/docs/css/modern-practices/units.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/css/modern-practices/units.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/css/modern-practices/units.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
