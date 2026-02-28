import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "Debugging & Refactoring (အမှားရှာခြင်းနှင့် Code ပြင်ခြင်း)",
  "description": "AI ကို သုံးပြီး Bug ရှာမယ်၊ Code တွေကို သန့်ရှင်းအောင် ပြင်မယ်။"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "debugging-with-ai",
    "text": "Debugging with AI"
  }, {
    "depth": 3,
    "slug": "refactoring-code-ပြင်ခြင်း",
    "text": "Refactoring (Code ပြင်ခြင်း)"
  }, {
    "depth": 3,
    "slug": "explaining-legacy-code",
    "text": "Explaining Legacy Code"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "Debugging Assistant",
      "set:html": "<p>Developer ဘဝရဲ့ ၅၀% က Debugging လုပ်ရင်း ကုန်ဆုံးပါတယ်။\nAI က ဒီအချိန်ကို ထက်ဝက်မက လျှော့ချပေးနိုင်ပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"debugging-with-ai\">Debugging with AI</h3><a class=\"sl-anchor-link\" href=\"#debugging-with-ai\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Debugging with AI”</span></a></div>\n<p>Error တက်ရင် Stack Trace (အနီရောင် စာကြောင်းတွေ) ကို Copy ကူးပြီး AI ကို မေးလိုက်ပါ။</p>\n<ul>\n<li><strong>Prompt:</strong> “I am getting this error in my Node.js app. Here is the error log and the relevant code. What is causing this?”</li>\n<li><strong>Tip:</strong> Error Log တင်မကဘဲ၊ သက်ဆိုင်တဲ့ Code အပိုင်းအစကိုပါ ထည့်ပေးမှ AI က အဖြေမှန် ရှာပေးနိုင်မှာပါ။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"refactoring-code-ပြင်ခြင်း\">Refactoring (Code ပြင်ခြင်း)</h3><a class=\"sl-anchor-link\" href=\"#refactoring-code-ပြင်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Refactoring (Code ပြင်ခြင်း)”</span></a></div>\n<p>Code က အလုပ်လုပ်ပေမယ့် ရှုပ်ပွနေရင်၊ AI ကို သန့်ရှင်းအောင် ပြင်ခိုင်းလို့ ရပါတယ်။</p>\n<ul>\n<li><strong>Prompt:</strong> “Refactor this function to be more readable and follow Clean Code principles. Split it into smaller functions if necessary.”</li>\n<li><strong>Prompt:</strong> “Convert this Class Component to Functional Component with Hooks.”</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"explaining-legacy-code\">Explaining Legacy Code</h3><a class=\"sl-anchor-link\" href=\"#explaining-legacy-code\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Explaining Legacy Code”</span></a></div>\n<p>သူများရေးထားတဲ့ Code (သို့) ကိုယ်ရေးထားပြီး မေ့နေတဲ့ Code တွေကို နားမလည်ရင် AI ကို ရှင်းပြခိုင်းပါ။</p>\n<ul>\n<li><strong>Prompt:</strong> “Explain what this code does line-by-line. What is the purpose of the <code dir=\"auto\">useEffect</code> here?”</li>\n</ul>"
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

const url = "src/content/docs/ai-proficiency/core-skills/debugging.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/ai-proficiency/core-skills/debugging.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/ai-proficiency/core-skills/debugging.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
