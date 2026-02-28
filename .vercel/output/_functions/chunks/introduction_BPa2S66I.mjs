import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "Security & Privacy (လုံခြုံရေးနှင့် သတိပြုစရာများ)",
  "description": "AI သုံးတဲ့အခါ ကိုယ့် Data တွေ မပေါက်ကြားအောင် ဘယ်လို ကာကွယ်မလဲ။"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "1-dont-paste-secrets-လျှို့ဝှက်ချက်များ-မထည့်ရ",
    "text": "1. Don’t Paste Secrets (လျှို့ဝှက်ချက်များ မထည့်ရ)"
  }, {
    "depth": 3,
    "slug": "2-hallucinations-လျှောက်ပြောခြင်း",
    "text": "2. Hallucinations (လျှောက်ပြောခြင်း)"
  }, {
    "depth": 3,
    "slug": "3-code-ownership",
    "text": "3. Code Ownership"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "Safety First",
      "set:html": "<p>AI က အသုံးဝင်ပေမယ့်၊ သတိမထားရင် ကိုယ့် Company ရဲ့ လျှို့ဝှက်ချက်တွေ ပေါက်ကြားနိုင်ပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"1-dont-paste-secrets-လျှို့ဝှက်ချက်များ-မထည့်ရ\">1. Don’t Paste Secrets (လျှို့ဝှက်ချက်များ မထည့်ရ)</h3><a class=\"sl-anchor-link\" href=\"#1-dont-paste-secrets-လျှို့ဝှက်ချက်များ-မထည့်ရ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “1. Don’t Paste Secrets (လျှို့ဝှက်ချက်များ မထည့်ရ)”</span></a></div>\n<ul>\n<li><strong>API Keys:</strong> AWS Key, Database Password တွေကို Chatbox ထဲ လုံးဝ (လုံးဝ) မထည့်ပါနဲ့။ AI က အဲ့ဒါတွေကို မှတ်ထားနိုင်ပါတယ်။</li>\n<li><strong>PII (Personal Data):</strong> User တွေရဲ့ ဖုန်းနံပါတ်၊ မှတ်ပုံတင် နံပါတ်တွေကို မထည့်ပါနဲ့။</li>\n<li><strong>Proprietary Code:</strong> Company ရဲ့ အရမ်းအရေးကြီးတဲ့ Algorithm တွေကို Public AI (Free ChatGPT) မှာ သွားမစစ်ပါနဲ့။ Enterprise Version သုံးပါ။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"2-hallucinations-လျှောက်ပြောခြင်း\">2. Hallucinations (လျှောက်ပြောခြင်း)</h3><a class=\"sl-anchor-link\" href=\"#2-hallucinations-လျှောက်ပြောခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “2. Hallucinations (လျှောက်ပြောခြင်း)”</span></a></div>\n<p>AI ပေးတဲ့ Code တိုင်းကို မျက်စိမှိတ် မယုံပါနဲ့။</p>\n<ul>\n<li>မရှိတဲ့ Library တွေကို သုံးခိုင်းတတ်ပါတယ်။ (Package Hallucination)</li>\n<li>လုံခြုံရေး အားနည်းတဲ့ Code တွေ ပေးတတ်ပါတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"3-code-ownership\">3. Code Ownership</h3><a class=\"sl-anchor-link\" href=\"#3-code-ownership\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “3. Code Ownership”</span></a></div>\n<p>AI ရေးပေးတဲ့ Code က ဘယ်သူပိုင်လဲ?\nလက်ရှိမှာတော့ AI ရေးတဲ့ Code ကို Copyright ယူလို့ မရသေးပါဘူး။ ဒါပေမယ့် လုပ်ငန်းခွင်မှာ သုံးဖို့အတွက်ကတော့ ပြဿနာ မရှိပါဘူး။</p>"
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

const url = "src/content/docs/ai-proficiency/responsible-ai/introduction.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/ai-proficiency/responsible-ai/introduction.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/ai-proficiency/responsible-ai/introduction.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
