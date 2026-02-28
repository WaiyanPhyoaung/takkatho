import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "Prompt Engineering for Code (Code ရေးဖို့ AI ကို ခိုင်းနည်း)",
  "description": "AI ဆီက Code ကောင်းကောင်းရဖို့ ဘယ်လို ခိုင်းမလဲ။"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "code-prompting-formula",
    "text": "Code Prompting Formula"
  }, {
    "depth": 3,
    "slug": "example",
    "text": "Example"
  }, {
    "depth": 3,
    "slug": "tips-for-coding",
    "text": "Tips for Coding"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "Prompt Engineering ဆိုတာ",
      "set:html": "<p>AI ကို စကားပြောတတ်မှ ကိုယ်လိုချင်တဲ့ Code ကို ရမှာပါ။\n“Login page ရေးပေး” လို့ ပြောတာနဲ့ “React, Tailwind, Zod သုံးပြီး Validation ပါတဲ့ Login page ရေးပေး” လို့ ပြောတာ ရလဒ်ချင်း အရမ်းကွာပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"code-prompting-formula\">Code Prompting Formula</h3><a class=\"sl-anchor-link\" href=\"#code-prompting-formula\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Code Prompting Formula”</span></a></div>\n<p>Code ကောင်းကောင်းရဖို့ ဒီ (၄) ချက် ပါအောင် ပြောပါ။</p>\n<ol>\n<li><strong>Role:</strong> “You are a Senior React Developer.” (ကျွမ်းကျင်သူ တစ်ယောက်လို ဖြေခိုင်းတာ)</li>\n<li><strong>Context:</strong> “I am building a dashboard for a hospital.” (ဘာလုပ်နေလဲ ပြောပြတာ)</li>\n<li><strong>Task:</strong> “Create a patient registration form.” (ဘာလုပ်ခိုင်းတာလဲ)</li>\n<li><strong>Constraints:</strong> “Use TypeScript, Shadcn UI, and React Hook Form.” (ဘာတွေ သုံးရမယ်၊ မသုံးရဘူး ကန့်သတ်တာ)</li>\n</ol>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"example\">Example</h3><a class=\"sl-anchor-link\" href=\"#example\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Example”</span></a></div>\n<p>❌ <strong>Bad Prompt:</strong>\n“Write a function to sort numbers.”</p>\n<p>✅ <strong>Good Prompt:</strong>\n“Write a TypeScript function to sort an array of objects by a specific key. The function should be generic. Handle edge cases like empty arrays.”</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"tips-for-coding\">Tips for Coding</h3><a class=\"sl-anchor-link\" href=\"#tips-for-coding\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Tips for Coding”</span></a></div>\n<ul>\n<li><strong>Be Specific:</strong> Library ဘာသုံးမလဲ တိတိကျကျ ပြောပါ။</li>\n<li><strong>Provide Examples:</strong> ကိုယ်လိုချင်တဲ့ Code ပုံစံ (One-shot prompting) ကို နမူနာ ပြပါ။</li>\n<li><strong>Iterate:</strong> တစ်ခါတည်းနဲ့ အမှန် မရနိုင်ပါဘူး။ “ဒီနေရာလေး ပြင်ပေးပါ” ဆိုပြီး ဆက်ပြောပါ။</li>\n</ul>"
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

const url = "src/content/docs/ai-proficiency/core-skills/prompt-engineering.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/ai-proficiency/core-skills/prompt-engineering.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/ai-proficiency/core-skills/prompt-engineering.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
