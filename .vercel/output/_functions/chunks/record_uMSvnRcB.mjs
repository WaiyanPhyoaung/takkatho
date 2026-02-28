import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "Keys, Values များနှင့် အလုပ်လုပ်ခြင်း: Record<K, T>",
  "description": "Keys, Values များနှင့် အလုပ်လုပ်ခြင်း: Record<K, T>"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "recordk-t-key-နဲ့-value-type-တွေပါတဲ့-object-ပုံစံများ-သတ်မှတ်ခြင်း",
    "text": "Record<K, T>: Key နဲ့ Value Type တွေပါတဲ့ Object ပုံစံများ သတ်မှတ်ခြင်း"
  }, {
    "depth": 3,
    "slug": "video-lesson",
    "text": "Video Lesson"
  }];
}
const featureFlag = `
// FeatureFlags ဆိုတဲ့ Type အသစ် လုပ်မယ်။ Key တွေက string နာမည်တွေ၊ Value တွေက boolean ဖြစ်ရမယ်။
type FeatureFlags = Record<"newUserProfilePage" | "darkMode" | "betaFeatureX", boolean>;

const currentFlags: FeatureFlags = {
newUserProfilePage: true,
darkMode: false,
betaFeatureX: true,
// anotherFlag: true; // Error ပြလိမ့်မယ်။ 'anotherFlag' က FeatureFlags ထဲမှာ မရှိဘူး။
};
`;
const dictionary = `
// UserCache ဆိုတဲ့ Type အသစ် လုပ်မယ်။ Key တွေက string (user ID) ဖြစ်မယ်။ Value တွေက UserProfile ဖြစ်ရမယ်။
type UserCache = Record<string, UserProfile>;

const cache: UserCache = {
"user-123": { id: 123, username: "cachedUser", bio: null, isActive: true, lastLogin: new Date() },
"user-456": { id: 456, username: "anotherCached", email: "c@ex.com", bio: "Bio here", isActive: false, lastLogin: new Date() }
};
`;
const css = `// CSSProperties ဆိုတဲ့ Type အသစ် လုပ်မယ်။ Key တွေက string၊ Value တွေက string ဒါမှမဟုတ် number ဖြစ်ရမယ်။
type CSSProperties = Record<string, string | number>;

const styles: CSSProperties = {
padding: "10px", // Key က string၊ Value က string
marginTop: 20, // Key က string၊ Value က number
color: "blue", // Key က string၊ Value က string
// borderRadius: true // Error ပြလိမ့်မယ်။ Value က boolean ဖြစ်နေတယ်။ string ဒါမှမဟုတ် number ဖြစ်ရမယ်။
};`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      type: "tip",
      "set:html": "<p>Record&#x3C;K, T> Utility Type ကို သုံးပြီး Object တွေအတွက် Type တွေ သတ်မှတ်တတ်ဖို့ ဖြစ်ပါတယ်။ အဲဒီ Object တွေမှာ Key တွေရဲ့ Type က K ဖြစ်ပြီး Value တွေရဲ့ Type က T ဖြစ်ရမယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"recordk-t-key-နဲ့-value-type-တွေပါတဲ့-object-ပုံစံများ-သတ်မှတ်ခြင်း\">Record&#x3C;K, T>: Key နဲ့ Value Type တွေပါတဲ့ Object ပုံစံများ သတ်မှတ်ခြင်း</h3><a class=\"sl-anchor-link\" href=\"#recordk-t-key-နဲ့-value-type-တွေပါတဲ့-object-ပုံစံများ-သတ်မှတ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Record&#x3C;K, T>: Key နဲ့ Value Type တွေပါတဲ့ Object ပုံစံများ သတ်မှတ်ခြင်း”</span></a></div>\n<ul>\n<li><strong>ဘာလုပ်ပေးလဲ</strong>: Record&#x3C;K, T> က Object Type တစ်ခုကို လုပ်ပေးတယ်။ အဲဒီ Object ရဲ့ Property Key တွေဟာ K Type ဖြစ်ရမယ်။ Property Value တွေက T Type ဖြစ်ရမယ်။\n<ul>\n<li>K (Key) က အများအားဖြင့် string, number, symbol ဒါမှမဟုတ် သီးခြား string / number နာမည်လေးတွေရဲ့ ပေါင်းစပ်မှု (union) ဖြစ်တတ်တယ်။</li>\n<li>T (Value) ကတော့ အဲဒီ Key တွေနဲ့ သက်ဆိုင်တဲ့ တန်ဖိုးတွေရဲ့ Type ဖြစ်တယ်။</li>\n</ul>\n</li>\n<li><strong>ဘယ်လို သုံးမလဲ</strong>:\n<ol>\n<li><strong>Feature Flags (အဖွင့်အပိတ်များ):</strong>\n<ul>\n<li>Feature Flag တွေက Program ရဲ့ လုပ်ဆောင်ချက် အချို့ကို ဖွင့်/ပိတ် လုပ်နိုင်အောင် ထိန်းချုပ်ဖို့ သုံးတဲ့ Object တွေပဲ။ Key က Feature နာမည်၊ Value က true (ဖွင့်) / false (ပိတ်) ဖြစ်မယ်။</li>\n</ul>\n</li>\n</ol>\n</li>\n</ul>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: featureFlag,
      title: "index.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<ol start=\"2\">\n<li><strong>Simple Dictionary/Cache (ရိုးရှင်းသော အဘိဓာန်/မှတ်ဉာဏ်):</strong>\n<ul>\n<li>Data တွေကို Key-Value ပုံစံနဲ့ သိမ်းထားတဲ့ Dictionary ဒါမှမဟုတ် Cache မျိုးတွေ လုပ်တဲ့အခါ သုံးနိုင်တယ်။ ဥပမာ User ID ကို Key အဖြစ်၊ User Profile ကို Value အဖြစ် သိမ်းတာမျိုး။</li>\n</ul>\n</li>\n</ol>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: dictionary,
      title: "index.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<ol start=\"3\">\n<li><strong>CSS-in-JS Style Objects (CSS ပုံစံ Object များ):</strong>\n<ul>\n<li>JavaScript ထဲမှာ CSS (Cascading Style Sheets) ရဲ့ ပုံစံတွေ သတ်မှတ်တဲ့ Object တွေ လုပ်တဲ့အခါ သုံးနိုင်တယ်။ Key က CSS Property နာမည် (string)၊ Value က CSS တန်ဖိုး (string ဒါမှမဟုတ် number) ဖြစ်မယ်။</li>\n</ul>\n</li>\n</ol>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: css,
      title: "index.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"video-lesson\">Video Lesson</h3><a class=\"sl-anchor-link\" href=\"#video-lesson\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Video Lesson”</span></a></div>\n"
    }), createVNode("div", {
      style: "position: relative; width: 100%; padding-top: 56.25%;",
      children: createVNode("iframe", {
        src: "https://www.youtube.com/embed/pKT-_XgZ2do",
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

const url = "src/content/docs/advanced-typescript/utility/record.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/utility/record.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/utility/record.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, css, Content as default, dictionary, featureFlag, file, frontmatter, getHeadings, url };
