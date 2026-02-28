import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "Pulling လုပ်ခြင်း",
  "description": "Pulling လုပ်ခြင်း"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "pulling-ဆိုတာ-ဘာလဲ",
    "text": "Pulling ဆိုတာ ဘာလဲ?"
  }, {
    "depth": 3,
    "slug": "အရေးကြီးတဲ့-အချက်များ",
    "text": "အရေးကြီးတဲ့ အချက်များ"
  }, {
    "depth": 2,
    "slug": "pull-လုပ်နည်း",
    "text": "Pull လုပ်နည်း"
  }, {
    "depth": 2,
    "slug": "git-pull-က-ဘယ်လို-အလုပ်လုပ်လဲ",
    "text": "Git Pull က ဘယ်လို အလုပ်လုပ်လဲ?"
  }, {
    "depth": 2,
    "slug": "လက်တွေ့စမ်းသပ်ကြည့်ရန်",
    "text": "လက်တွေ့စမ်းသပ်ကြည့်ရန်"
  }];
}
const gitPull = `
git pull <remote-name> <branch-name>
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      type: "tip",
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>Online (Remote) မှာရှိတဲ့ အပြောင်းအလဲတွေကို ကိုယ့်ကွန်ပျူတာ (Local) ထဲကို ဘယ်လို ပြန်ယူရမလဲဆိုတာ လေ့လာရန်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"pulling-ဆိုတာ-ဘာလဲ\">Pulling ဆိုတာ ဘာလဲ?</h2><a class=\"sl-anchor-link\" href=\"#pulling-ဆိုတာ-ဘာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Pulling ဆိုတာ ဘာလဲ?”</span></a></div>\n<p><strong>Git Pull</strong> ဆိုတာ Online (Remote) Repository ကနေ အပြောင်းအလဲတွေကို ကိုယ့်ကွန်ပျူတာထဲ ဆွဲယူပြီး ကိုယ့် Project ထဲ ပေါင်းထည့်လိုက်တာပါ။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အရေးကြီးတဲ့-အချက်များ\">အရေးကြီးတဲ့ အချက်များ</h3><a class=\"sl-anchor-link\" href=\"#အရေးကြီးတဲ့-အချက်များ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အရေးကြီးတဲ့ အချက်များ”</span></a></div>\n<ul>\n<li>အဖွဲ့လိုက် အလုပ်လုပ်တဲ့အခါ အခြားသူတွေရဲ့ အပြောင်းအလဲတွေကို ရယူနိုင်ဖို့</li>\n<li>ကွန်ပျူတာ မတူတာတွေနဲ့ အလုပ်လုပ်တဲ့အခါ ကိုယ့်အလုပ်တွေကို sync လုပ်ဖို့</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"pull-လုပ်နည်း\">Pull လုပ်နည်း</h2><a class=\"sl-anchor-link\" href=\"#pull-လုပ်နည်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Pull လုပ်နည်း”</span></a></div>\n<p>အခြေခံ command ပုံစံ:</p>\n"
    }), createVNode(Code, {
      code: gitPull,
      title: "Bash"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>ဥပမာ:</p>\n"
    }), createVNode(Code, {
      code: `git pull origin main`,
      title: "Bash"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>ဒါက origin လို့ နာမည်ပေးထားတဲ့ Remote က main branch က changes တွေကို ဆွဲယူပြီး ကိုယ့် local branch ထဲ ပေါင်းထည့်လိုက်တာပါ။</p>\n"
    }), createVNode($$Aside, {
      title: "မှတ်ချက်",
      "set:html": "upstream ချိတ်ဆက်ပြီးသား branch တွေမှာဆိုရင် git pull လို့ပဲ ရိုက်ထည့်လိုက်ရုံနဲ့ ရပါတယ်။"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"git-pull-က-ဘယ်လို-အလုပ်လုပ်လဲ\">Git Pull က ဘယ်လို အလုပ်လုပ်လဲ?</h2><a class=\"sl-anchor-link\" href=\"#git-pull-က-ဘယ်လို-အလုပ်လုပ်လဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Git Pull က ဘယ်လို အလုပ်လုပ်လဲ?”</span></a></div>\n<p><code dir=\"auto\">Git Pull</code> က အဓိက အဆင့် ၂ ဆင့် လုပ်ဆောင်ပါတယ်:</p>\n<ol>\n<li><code dir=\"auto\">git fetch</code>: Remote ကနေ changes တွေကို download လုပ်ယူ</li>\n<li><code dir=\"auto\">git merge</code>: ဆွဲယူထားတဲ့ changes တွေကို ကိုယ့် branch ထဲ ပေါင်းထည့်</li>\n</ol>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"လက်တွေ့စမ်းသပ်ကြည့်ရန်\">လက်တွေ့စမ်းသပ်ကြည့်ရန်</h2><a class=\"sl-anchor-link\" href=\"#လက်တွေ့စမ်းသပ်ကြည့်ရန်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “လက်တွေ့စမ်းသပ်ကြည့်ရန်”</span></a></div>\n<ol>\n<li>GitHub မှာ ကိုယ့် Repository ကို ဖွင့်ပြီး <code dir=\"auto\">README.md</code> file ကို ပြင်ဆင်ပါ</li>\n<li>GitHub မှာပဲ Commit လုပ်လိုက်ပါ</li>\n<li>ကိုယ့် Local Terminal မှာ <code dir=\"auto\">git pull origin main</code> လို့ ရိုက်ပါ</li>\n<li>ကိုယ့် Local က <code dir=\"auto\">README.md file</code> ကို ဖွင့်ကြည့်ပါ - GitHub မှာ ပြင်ခဲ့တဲ့ အပြောင်းအလဲတွေ ရောက်လာပါပြီ</li>\n</ol>"
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

const url = "src/content/docs/git-course/remote-repository/pulling.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/remote-repository/pulling.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/remote-repository/pulling.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, gitPull, url };
