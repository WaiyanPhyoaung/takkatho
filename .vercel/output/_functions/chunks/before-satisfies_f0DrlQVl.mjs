import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "Satisfies Keyword",
  "description": "Satisfies Keyword"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "type-သတ်မှတ်ရာမှာ-အသေးစိတ်-အချက်အလက်တွေ-ပျောက်ဆုံးသွားခြင်း",
    "text": "Type သတ်မှတ်ရာမှာ အသေးစိတ် အချက်အလက်တွေ ပျောက်ဆုံးသွားခြင်း"
  }, {
    "depth": 3,
    "slug": "typed-object-တစ်ခု-သတ်မှတ်ခြင်း",
    "text": "Typed object တစ်ခု သတ်မှတ်ခြင်း"
  }, {
    "depth": 3,
    "slug": "video-lesson",
    "text": "Video Lesson"
  }];
}
const appConfig = `
// ဒါက AppConfig ဆိုတဲ့ interface တစ်ခုပါ။
// သူ့မှာ ဘာတွေ ပါရမယ်ဆိုတာ ပြောပြတယ်။
interface AppConfig {
  env: "development" | "production" | "test"; // env က ဒီ ၃ ခုထဲက တစ်ခုခု ဖြစ်ရမယ်။
  port: number; // port က number ဖြစ်ရမယ်။
  featureFlags: Record<string, boolean>; // featureFlags က Key က string၊ Value က boolean ဖြစ်တဲ့ object ဖြစ်ရမယ်။
}
`;
const configObj = `
const myAppConfig = {
  env: "development", // Specific literal type: "development"
  port: 3000,
  featureFlags: {
    darkMode: true,   // Specific key: "darkMode"
    newOnboarding: false // Specific key: "newOnboarding"
  }
};

// At this point, TypeScript infers the most specific type for myAppConfig:
// typeof myAppConfig is:
// {
// env: "development"; // "development" လို့ အတိအကျ သိတယ်။
// port: number; // (or 3000 if we used 'as const', but let's ignore that for a moment)
// featureFlags: {
// darkMode: boolean; // darkMode ဆိုတဲ့ Key ပါကြောင်း အတိအကျ သိတယ်။
// newOnboarding: boolean; // newOnboarding ဆိုတဲ့ Key ပါကြောင်း အတိအကျ သိတယ်။
// };
// }
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      type: "tip",
      "set:html": "<p>satisfies က ဘယ်ပြဿနာကို ဖြေရှင်းပေးလဲဆိုတာ ရိုးရှင်းစွာ နားလည်ဖို့၊ သူ့ရဲ့\nအသုံးပြုပုံကို သိဖို့နဲ့ ပိုပြီး တိကျတဲ့ Code တွေ ရေးတတ်ဖို့ ဖြစ်ပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"type-သတ်မှတ်ရာမှာ-အသေးစိတ်-အချက်အလက်တွေ-ပျောက်ဆုံးသွားခြင်း\">Type သတ်မှတ်ရာမှာ အသေးစိတ် အချက်အလက်တွေ ပျောက်ဆုံးသွားခြင်း</h3><a class=\"sl-anchor-link\" href=\"#type-သတ်မှတ်ရာမှာ-အသေးစိတ်-အချက်အလက်တွေ-ပျောက်ဆုံးသွားခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Type သတ်မှတ်ရာမှာ အသေးစိတ် အချက်အလက်တွေ ပျောက်ဆုံးသွားခြင်း”</span></a></div>\n"
    }), createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      type: "tip",
      "set:html": "<p>Type Annotation (:) ကို သုံးတဲ့အခါ Object တွေရဲ့ အထဲက အသေးစိတ် အချက်အလက်တွေ\nဘာလို့ ပျောက်သွားလဲ၊ ပြီးတော့ အဲဒီအချက်အလက်တွေကို ပြန်သုံးဖို့ ဘာလို့\nခက်သွားလဲဆိုတာ နားလည်ဖို့ ဖြစ်ပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"typed-object-တစ်ခု-သတ်မှတ်ခြင်း\">Typed object တစ်ခု သတ်မှတ်ခြင်း</h3><a class=\"sl-anchor-link\" href=\"#typed-object-တစ်ခု-သတ်မှတ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Typed object တစ်ခု သတ်မှတ်ခြင်း”</span></a></div>\n<p>ကျွန်တော်တို့ App တွေမှာ objects တွေ အများကြီး လုပ်ရတာ များတယ်။ အဲဒီ objects တွေက သတ်မှတ်ထားတဲ့ general structure နဲ့ ကိုက်ညီ ရတယ်။ ဥပမာ application အတွက် configuration object လိုမျိုးပေါ့။</p>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: appConfig,
      title: "config.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>အခု အဲဒီ interface နဲ့ ကိုက်ညီတဲ့ အတိအကျ configuration တစ်ခုကို create လုပ်ကြည့်ရအောင်။</p>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: configObj,
      title: "config.ts"
    }), "\n", createVNode($$Aside, {
      title: "ရှင်းပြချက်",
      "set:html": "<p>TypeScript က myAppConfig ကို ကြည့်လိုက်တာနဲ့ env က development ဆိုတာ၊\nfeatureFlags ထဲမှာ darkMode တို့ ပါတယ်ဆိုတာ အတိအကျ သိတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"video-lesson\">Video Lesson</h3><a class=\"sl-anchor-link\" href=\"#video-lesson\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Video Lesson”</span></a></div>\n"
    }), createVNode("div", {
      style: "position: relative; width: 100%; padding-top: 56.25%;",
      children: createVNode("iframe", {
        src: "https://www.youtube.com/embed/j-aELJsYHi8",
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

const url = "src/content/docs/advanced-typescript/satisfies/before-satisfies.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/satisfies/before-satisfies.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/satisfies/before-satisfies.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, appConfig, configObj, Content as default, file, frontmatter, getHeadings, url };
