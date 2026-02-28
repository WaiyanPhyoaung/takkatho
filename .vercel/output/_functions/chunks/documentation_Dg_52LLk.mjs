import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "Documentation & Explanation (မှတ်တမ်းတင်ခြင်းနှင့် ရှင်းပြခိုင်းခြင်း)",
  "description": "Code ကို နားလည်လွယ်အောင် မှတ်တမ်းတင်ခြင်း။"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "writing-docstrings--jsdoc",
    "text": "Writing Docstrings / JSDoc"
  }, {
    "depth": 3,
    "slug": "writing-readmemd",
    "text": "Writing README.md"
  }, {
    "depth": 3,
    "slug": "explaining-complex-concepts",
    "text": "Explaining Complex Concepts"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "Documentation is Key",
      "set:html": "<p>Code ကောင်းရင် Documentation မလိုဘူးလို့ ပြောကြပေမယ့်၊ တကယ်တမ်း Team နဲ့ လုပ်ရင် Documentation က မရှိမဖြစ်ပါ။\nAI က Documentation ရေးရတာကို လွယ်ကူစေပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"writing-docstrings--jsdoc\">Writing Docstrings / JSDoc</h3><a class=\"sl-anchor-link\" href=\"#writing-docstrings--jsdoc\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Writing Docstrings / JSDoc”</span></a></div>\n<p>Function တစ်ခုရဲ့ အပေါ်မှာ ရှင်းလင်းချက်တွေ ရေးဖို့ AI ကို ခိုင်းပါ။</p>\n<ul>\n<li><strong>Prompt:</strong> “Add JSDoc comments to this function. Explain the parameters and return value.”</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"writing-readmemd\">Writing README.md</h3><a class=\"sl-anchor-link\" href=\"#writing-readmemd\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Writing README.md”</span></a></div>\n<p>Project တစ်ခုလုံးအတွက် README ဖိုင် ရေးခိုင်းလို့ ရပါတယ်။</p>\n<ul>\n<li><strong>Prompt:</strong> “Generate a README.md for this project. Include sections for Installation, Usage, and API Endpoints. Here is my <code dir=\"auto\">package.json</code> and main server file.”</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"explaining-complex-concepts\">Explaining Complex Concepts</h3><a class=\"sl-anchor-link\" href=\"#explaining-complex-concepts\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Explaining Complex Concepts”</span></a></div>\n<p>Code ထဲမှာ နားမလည်တဲ့ Logic တွေ ပါနေရင် AI ကို ဥပမာနဲ့ ရှင်းပြခိုင်းပါ။</p>\n<ul>\n<li><strong>Prompt:</strong> “Explain how this recursive function works with a simple example input.”</li>\n</ul>"
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

const url = "src/content/docs/ai-proficiency/core-skills/documentation.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/ai-proficiency/core-skills/documentation.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/ai-proficiency/core-skills/documentation.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
