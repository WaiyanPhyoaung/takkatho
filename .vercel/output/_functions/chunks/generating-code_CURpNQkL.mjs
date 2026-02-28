import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "Generating Code & Boilerplate (Code အသစ်များ ဖန်တီးခြင်း)",
  "description": "အစကနေ ရေးစရာ မလိုတော့ပါဘူး။ AI ကို ရေးခိုင်းလိုက်ပါ။"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "generating-boilerplate",
    "text": "Generating Boilerplate"
  }, {
    "depth": 3,
    "slug": "generating-data",
    "text": "Generating Data"
  }, {
    "depth": 3,
    "slug": "generating-regex--sql",
    "text": "Generating Regex & SQL"
  }, {
    "depth": 3,
    "slug": "generating-unit-tests",
    "text": "Generating Unit Tests"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "Blank Page Syndrome",
      "set:html": "<p>Project အသစ်စရင် ဘယ်က စရေးရမှန်း မသိ ဖြစ်တတ်ပါတယ်။\nAI က Boilerplate (အခြေခံ Code) တွေကို ချက်ချင်း ထုတ်ပေးနိုင်ပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"generating-boilerplate\">Generating Boilerplate</h3><a class=\"sl-anchor-link\" href=\"#generating-boilerplate\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Generating Boilerplate”</span></a></div>\n<ul>\n<li><strong>Prompt:</strong> “Create a basic Express.js server setup with TypeScript, Cors, and Helmet middleware.”</li>\n<li><strong>Prompt:</strong> “Generate a <code dir=\"auto\">package.json</code> script for running tests and linting.”</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"generating-data\">Generating Data</h3><a class=\"sl-anchor-link\" href=\"#generating-data\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Generating Data”</span></a></div>\n<p>Test လုပ်ဖို့ Data အတု (Mock Data) တွေ လိုရင် AI က အကောင်းဆုံးပါပဲ။</p>\n<ul>\n<li><strong>Prompt:</strong> “Generate a JSON array of 10 users with realistic names, emails, and Myanmar phone numbers.”</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"generating-regex--sql\">Generating Regex &#x26; SQL</h3><a class=\"sl-anchor-link\" href=\"#generating-regex--sql\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Generating Regex &#x26; SQL”</span></a></div>\n<p>ခက်ခဲတဲ့ Regular Expression တွေ၊ SQL Query တွေကို ခေါင်းစားခံပြီး စဉ်းစားမနေပါနဲ့။</p>\n<ul>\n<li><strong>Prompt:</strong> “Write a Regex to validate Myanmar NRC format.”</li>\n<li><strong>Prompt:</strong> “Write a SQL query to find the top 3 customers who spent the most in the last month.”</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"generating-unit-tests\">Generating Unit Tests</h3><a class=\"sl-anchor-link\" href=\"#generating-unit-tests\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Generating Unit Tests”</span></a></div>\n<p>Code ရေးပြီးရင် Test ရေးဖို့ ပျင်းတတ်ကြပါတယ်။ AI ကို ရေးခိုင်းပါ။</p>\n<ul>\n<li><strong>Prompt:</strong> “Write Jest unit tests for this function. Cover edge cases like null inputs.”</li>\n</ul>"
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

const url = "src/content/docs/ai-proficiency/core-skills/generating-code.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/ai-proficiency/core-skills/generating-code.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/ai-proficiency/core-skills/generating-code.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
