import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "Utility Type များကို မိတ်ဆက်ခြင်း:Type ပြောင်းလဲခြင်း ကိရိယာများ",
  "description": "Utility Type များကို မိတ်ဆက်ခြင်း:Type ပြောင်းလဲခြင်း ကိရိယာများ"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "ဘာလို့-လိုအပ်တာလဲ-type-ပုံစံ-ကွဲပြားမှုများ-လိုအပ်လာခြင်း",
    "text": "ဘာလို့ လိုအပ်တာလဲ: Type ပုံစံ ကွဲပြားမှုများ လိုအပ်လာခြင်း"
  }, {
    "depth": 3,
    "slug": "ဘာလဲဆိုတော့-utility-type-တွေ-ရောက်လာခြင်း",
    "text": "ဘာလဲဆိုတော့: Utility Type တွေ ရောက်လာခြင်း!"
  }, {
    "depth": 3,
    "slug": "ကောင်းကျိုးများ-ဘာလို့-သုံးသင့်တာလဲ",
    "text": "ကောင်းကျိုးများ: ဘာလို့ သုံးသင့်တာလဲ?"
  }, {
    "depth": 3,
    "slug": "video-lesson",
    "text": "Video Lesson"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဘာလို့-လိုအပ်တာလဲ-type-ပုံစံ-ကွဲပြားမှုများ-လိုအပ်လာခြင်း\">ဘာလို့ လိုအပ်တာလဲ: Type ပုံစံ ကွဲပြားမှုများ လိုအပ်လာခြင်း</h3><a class=\"sl-anchor-link\" href=\"#ဘာလို့-လိုအပ်တာလဲ-type-ပုံစံ-ကွဲပြားမှုများ-လိုအပ်လာခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘာလို့ လိုအပ်တာလဲ: Type ပုံစံ ကွဲပြားမှုများ လိုအပ်လာခြင်း”</span></a></div>\n<p>အရင် Lessons တွေမှာ Code တွေကို Flexible (ပြောင်းလဲ အသုံးပြုလို့ရအောင်) ရေးတာ သင်ခဲ့ပြီးပြီနော်။ အခု Type တွေ ကိုယ်တိုင်ကို Flexible ဖြစ်အောင် လုပ်တာ ဆက်ပြောရအောင်။</p>\n<p>တစ်ခါတလေ ကျွန်တော်တို့က User လိုမျိုး အဓိက Type တစ်ခု သတ်မှတ်ထားတယ်။ ဒါပေမယ့် အလုပ် မတူတာတွေအတွက် ဒီ User Type ကို နည်းနည်းစီ ပြောင်းသုံးဖို့ လိုလာတတ်တယ်။</p>\n<ul>\n<li>User ရဲ့ အချက်အလက် <strong>တချို့</strong> ကိုပဲ ပြင်ချင်ရင် Type တစ်မျိုး။</li>\n<li>User ရဲ့ အချက်အလက် <strong>အားလုံး</strong> လိုချင်ရင် Type တစ်မျိုး။</li>\n<li>User Configuration <strong>object</strong> ကို ပြင်လို့ မရအောင် လုပ်ချင်ရင် Type တစ်မျိုး။</li>\n<li>User အချက်အလက် <strong>နည်းနည်းလေး</strong> ပဲ မြင်ချင်ရင် Type တစ်မျိုး။</li>\n</ul>\n<p>ဒီလို အခြေအနေ တစ်ခုချင်းစီအတွက် Type အသစ်တွေ လိုက်လိုက်ပြီး သတ်မှတ်လို့ ရတယ်။ ဥပမာ UserForUpdate, FullUser, ReadonlyUserConfig လိုမျိုးပေါ့။ ဒါပေမယ့် Type များလာရင် ရေးရတာ အရမ်းများတယ်။ မှားဖို့ လွယ်တယ်။ User Type မှာ တစ်ခုခု ပြောင်းရင် တခြားလုပ်ထားတဲ့ Type တွေပါ လိုက်ပြင်ဖို့ မေ့နိုင်တယ်။ သပ်ရပ်လှပမှု မရှိဘူး။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဘာလဲဆိုတော့-utility-type-တွေ-ရောက်လာခြင်း\">ဘာလဲဆိုတော့: Utility Type တွေ ရောက်လာခြင်း!</h3><a class=\"sl-anchor-link\" href=\"#ဘာလဲဆိုတော့-utility-type-တွေ-ရောက်လာခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘာလဲဆိုတော့: Utility Type တွေ ရောက်လာခြင်း!”</span></a></div>\n<p>ဒီနေရာမှာပဲ Utility Types တွေက ကူညီဖို့ ရောက်လာတာ။ သူတို့က Type တွေအတွက် အသင့်လုပ်ထားတဲ့ ကိရိယာတွေ လိုပဲ။ သူတို့က ရှိပြီးသား Type (ဥပမာ User Type) ကို ယူလိုက်တယ်။ ပြီးတော့ ပြောင်းလဲထားတဲ့ Type အသစ်တစ်ခုကို ပြန်ထုတ်ပေးတယ်။</p>\n"
    }), createVNode($$Aside, {
      title: "မှတ်ချက်",
      type: "note",
      "set:html": "<p>Utility Type အများစုက Generic တွေပဲ။ အရင်က သင်ခဲ့တဲ့ &#x3C;T> ပုံစံအတိုင်းပဲ။ သူတို့ကို ကိုယ် ပြောင်းချင်တဲ့ Type နဲ့တွဲပြီး သုံးရတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p><strong>ဥပမာ နှိုင်းယှဉ်ချက်</strong>: “သင့်မှာ သစ်သားတုံး (သင့်ရဲ့ အဓိက Type) လေး တစ်တုံး ရှိတယ်လို့ စိတ်ကူးကြည့်။ Utility Types တွေက သင့် လက်သမားဖိုထဲက ကိရိယာတွေ လိုပဲ။”</p>\n<ul>\n<li>သစ်သားတုံးထဲက အပိုင်းလေးတွေ ရွေးထုတ်ဖို့ (<strong>Pick</strong>) ဒါမှမဟုတ် ချန်ထားခဲ့ဖို့ (<strong>Omit</strong>) လွှ လိုမျိုး။</li>\n<li>သစ်သားတုံးရဲ့ အနားအားလုံးကို ပါချင်မှ ပါအောင် (<strong>Partial</strong>) လုပ်ဖို့ စက္ကူပွတ်စက် လိုမျိုး။</li>\n<li>သစ်သားတုံးကို ပြင်လို့ မရအောင် (<strong>Readonly</strong>) လုပ်ဖို့ အရောင်တင်ဆီ လိုမျိုး။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ကောင်းကျိုးများ-ဘာလို့-သုံးသင့်တာလဲ\">ကောင်းကျိုးများ: ဘာလို့ သုံးသင့်တာလဲ?</h3><a class=\"sl-anchor-link\" href=\"#ကောင်းကျိုးများ-ဘာလို့-သုံးသင့်တာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ကောင်းကျိုးများ: ဘာလို့ သုံးသင့်တာလဲ?”</span></a></div>\n<ul>\n<li><strong>DRY (Code မထပ်အောင် ရေးခြင်း)</strong>: အဓိက Type ကို တစ်ခါပဲ ရေးပြီး သူ့ကနေ လိုအပ်တဲ့ Type မျိုးစုံကို အလွယ်တကူ ထုတ်ယူနိုင်တယ်။</li>\n<li><strong>ထိန်းသိမ်းရလွယ်ခြင်း</strong>: အဓိက Type ကို ပြင်လိုက်ရင် သူ့ကနေ လုပ်ထားတဲ့ Type တွေကပါ အလိုအလျောက် လိုက်ပြောင်းနိုင်တယ်။</li>\n<li><strong>ရှင်းလင်းပြတ်သားမှု</strong>: Type ရဲ့ နာမည် ကြည့်တာနဲ့ သူက ဘာလဲ သိနိုင်တယ် (ဥပမာ Partial&#x3C;User> ဆိုတာ “User Type ရဲ့ အချက်အလက် တချို့ပါတဲ့ Type” လို့ ချက်ချင်း သိစေတယ်)။</li>\n<li><strong>Type Safety</strong>: Type တွေကို ပြောင်းလဲ လုပ်ဆောင်တာတွေက Type မှန်ကန်စိတ်ချရတယ်။</li>\n<li><strong>အသင့်ပါပြီးသား</strong>: TypeScript မှာ ပါပြီးသား။ ဘာမှ ထပ် Install လုပ်စရာ မလိုဘူး။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"video-lesson\">Video Lesson</h3><a class=\"sl-anchor-link\" href=\"#video-lesson\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Video Lesson”</span></a></div>\n"
    }), createVNode("div", {
      style: "position: relative; width: 100%; padding-top: 56.25%;",
      children: createVNode("iframe", {
        src: "https://www.youtube.com/embed/KfeBjBsmJSg",
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

const url = "src/content/docs/advanced-typescript/utility/introduction.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/utility/introduction.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/utility/introduction.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
