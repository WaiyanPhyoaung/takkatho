import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import 'clsx';

const frontmatter = {
  "title": "What Are Events?",
  "description": "User Interactions (Events) ဆိုတာ ဘာလဲ?"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "common-events-အသုံးများသော-events-များ",
    "text": "Common Events (အသုံးများသော Events များ)"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>Interactive Website ဖြစ်ဖို့အတွက် User လုပ်လိုက်တဲ့ အပြုအမူတွေကို သိဖို့ လိုပါတယ်။ အဲဒါတွေကို <strong>Events</strong> လို့ ခေါ်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"common-events-အသုံးများသော-events-များ\">Common Events (အသုံးများသော Events များ)</h2><a class=\"sl-anchor-link\" href=\"#common-events-အသုံးများသော-events-များ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Common Events (အသုံးများသော Events များ)”</span></a></div>\n<ul>\n<li>\n<p><strong>Mouse Events:</strong></p>\n<ul>\n<li><code dir=\"auto\">click</code> - နှိပ်လိုက်တဲ့အခါ</li>\n<li><code dir=\"auto\">dblclick</code> - နှစ်ချက်ဆက်တိုက် နှိပ်တဲ့အခါ</li>\n<li><code dir=\"auto\">mouseover</code> - Mouse တင်လိုက်တဲ့အခါ</li>\n<li><code dir=\"auto\">mouseout</code> - Mouse ဖယ်လိုက်တဲ့အခါ</li>\n</ul>\n</li>\n<li>\n<p><strong>Keyboard Events:</strong></p>\n<ul>\n<li><code dir=\"auto\">keydown</code> - ကီးဘုတ်ခလုတ် နှိပ်လိုက်တဲ့အခါ</li>\n<li><code dir=\"auto\">keyup</code> - ခလုတ် ပြန်လွှတ်လိုက်တဲ့အခါ</li>\n</ul>\n</li>\n<li>\n<p><strong>Form Events:</strong></p>\n<ul>\n<li><code dir=\"auto\">submit</code> - Form submit လိုက်တဲ့အခါ</li>\n<li><code dir=\"auto\">input</code> - စာရိုက်နေတုန်း (Real-time)</li>\n<li><code dir=\"auto\">change</code> - စာရိုက်ပြီးလို့ ထွက်သွားတဲ့အခါ</li>\n</ul>\n</li>\n</ul>\n<p>ဒီ Events တွေကို နားထောင် ပြီး JavaScript နဲ့ တုံ့ပြန်ဆောင်ရွက်ရပါမယ်။</p>"
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
const url = "src/content/docs/javascript/events/intro.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/javascript/events/intro.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/javascript/events/intro.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
