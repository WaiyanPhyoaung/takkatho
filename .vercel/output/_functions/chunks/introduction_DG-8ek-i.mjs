import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "Generic Superpowers! ပိုပြီး လိုက်လျောညီထွေတဲ့ Code များ ရေးသားခြင်း",
  "description": "Generic Superpowers! ပိုပြီး လိုက်လျောညီထွေတဲ့ Code များ ရေးသားခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "generic-ဆိုတာ-တကယ်တော့-ဘာလဲ-type-variable-ဆိုတဲ့-idea",
    "text": "Generic ဆိုတာ တကယ်တော့ ဘာလဲ? “Type Variable” ဆိုတဲ့ Idea"
  }, {
    "depth": 3,
    "slug": "video-lesson",
    "text": "Video Lesson"
  }];
}
const code = `
// ၁။ Function နာမည်ရဲ့ နောက်မှာ Generic Type Variable <T> ကို ကြေညာမယ်။
// ၂။ လက်ခံမယ့် argument ရဲ့ Type ကို T လို့ သုံးမယ်။
// ၃။ ပြန်ထုတ်မယ့် return Type ကိုလည်း T လို့ သုံးမယ်။

function identity<T>(arg: T): T {
console.log(\`received data's Type: ${typeof arg}\`);
return arg;
}
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>ဒီလို အခက်အခဲတွေကို ဖြေရှင်းဖို့ TypeScript မှာ ပိုအစွမ်းထက်တဲ့ ကိရိယာတွေ ရှိတယ်။ အဲဒါတွေကတော့ Generics နဲ့ Utility Types တွေပဲ ဖြစ်တယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"generic-ဆိုတာ-တကယ်တော့-ဘာလဲ-type-variable-ဆိုတဲ့-idea\">Generic ဆိုတာ တကယ်တော့ ဘာလဲ? “Type Variable” ဆိုတဲ့ Idea</h3><a class=\"sl-anchor-link\" href=\"#generic-ဆိုတာ-တကယ်တော့-ဘာလဲ-type-variable-ဆိုတဲ့-idea\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Generic ဆိုတာ တကယ်တော့ ဘာလဲ? “Type Variable” ဆိုတဲ့ Idea”</span></a></div>\n<p>Generics ရဲ့ အဓိက Concept ဖြစ်တဲ့ Type တွေအတွက် နေရာယူထားတာ ဆိုတဲ့ အချက်ကို နားလည်ဖို့၊ သူက ဘယ်လို ပြဿနာကို ဖြေရှင်းပေးလဲ (Code တွေ ထပ်နေတာ) သိရှိဖို့နဲ့ အခြေခံ Generic Function လေးတစ်ခု ရေးတတ်ဖို့ ဖြစ်ပါတယ်။</p>\n<p>ခုနကလို Code တွေ ထပ်နေတဲ့ ပြဿနာကို ဖြေရှင်းဖို့အတွက် Generics ဆိုတာက ကူညီပေးနိုင်တယ်။ စဉ်းစားကြည့်ဗျာ… Function တစ်ခုကို Data အမျိုးမျိုး (number၊ string) ထည့်သုံးချင်ရင် Parameter တွေ ပေးရတယ်။ Generics က အဲဒီလိုပဲ Function ကို Type အမျိုးမျိုး ထည့်သုံးလို့ရအောင် ကူညီပေးတာ။ သူတို့က Code ရေးတဲ့အချိန်မှာ ဘယ် Type ဖြစ်မလဲဆိုတာ မသိသေးခင် Type တွေအတွက် နေရာယူထားတဲ့ Placeholder လေးတွေ၊ ဒါမှမဟုတ် Type တွေကို ကိုယ်စားပြုတဲ့ Variable လေးတွေပါပဲ။</p>\n"
    }), createVNode($$Aside, {
      "set:html": "<p>Generic Type Variable ကို ကြေညာချင်ရင် Angle Bracket &#x3C;Aside> လေးတွေ သုံးရတယ်။ နာမည်က T (Type ကို ကိုယ်စားပြုတယ်) လို့ အများဆုံး သုံးပေမယ့် U, K, V စသဖြင့်တခြား နာမည်လည်း ပေးလို့ရတယ်။</p>"
    }), "\n", createVNode(Code, {
      code: code,
      lang: "typescript",
      title: "index.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<ul>\n<li><strong>&#x3C;T></strong>: ဒါက ပြောလိုက်တာက ‘ဒီ identity Function က Generic ဖြစ်တယ်၊ Type တစ်ခုခုနဲ့ အလုပ်လုပ်မယ်၊ အဲဒီ Type ကို အခုတော့ T လို့ ခေါ်ထားမယ်’ ပေါ့။</li>\n<li><strong>arg</strong>: T: Function ကို လက်ခံမယ့် arg ဆိုတဲ့ Data ရဲ့ Type က T ကိုယ်စားပြုတဲ့ အဲဒီ Type ပဲ ဖြစ်လိမ့်မယ်။</li>\n<li><strong>: T</strong>: Function က ပြန်ထုတ်ပေးမယ့် တန်ဖိုးရဲ့ Type ကလည်း T ကိုယ်စားပြုတဲ့ အဲဒီ Type အတိုင်း ပဲ ဖြစ်လိမ့်မယ်။</li>\n</ul>\n"
    }), createVNode($$Aside, {
      type: "tip",
      title: "ကောင်းကျိုး",
      "set:html": "<p>“ဒီလို ရေးလိုက်တော့ Logic (Code) ကို တစ်ခါတည်း ရေးလိုက်ရုံနဲ့ ဘယ် Data Type\nနဲ့ လာလာ အလုပ်လုပ်နိုင်တဲ့၊ ပြန်လည် အသုံးပြုလို့ရတဲ့ Function တစ်ခု ရသွားပြီ။\nCode တွေ ထပ်ရေးစရာ မလိုတော့ဘူး။“</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"video-lesson\">Video Lesson</h3><a class=\"sl-anchor-link\" href=\"#video-lesson\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Video Lesson”</span></a></div>\n"
    }), createVNode("div", {
      style: "position: relative; width: 100%; padding-top: 56.25%;",
      children: createVNode("iframe", {
        src: "https://www.youtube.com/embed/7aUkJIjvZ2o",
        title: "YouTube video player",
        style: "position: absolute; inset: 0; width: 100%; height: 100%; border: 0;",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        referrerpolicy: "strict-origin-when-cross-origin",
        allowfullscreen: true
      })
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

const url = "src/content/docs/advanced-typescript/generics/introduction.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/generics/introduction.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/generics/introduction.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, code, Content as default, file, frontmatter, getHeadings, url };
