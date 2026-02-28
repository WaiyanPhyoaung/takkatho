import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "Pull Requests (PRs) များကို မိတ်ဆက်ခြင်း",
  "description": "Pull Requests (PRs) များကို မိတ်ဆက်ခြင်း"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "pull-request-pr-ဆိုတာဘာလဲ",
    "text": "Pull Request (PR) ဆိုတာဘာလဲ?"
  }, {
    "depth": 3,
    "slug": "pr-တွေ-ဘာလို့-အသုံးဝင်လဲ",
    "text": "PR တွေ ဘာလို့ အသုံးဝင်လဲ?"
  }, {
    "depth": 3,
    "slug": "github-မှာ-pr-ဘယ်လို-open-ဖွင့်-မလဲ",
    "text": "GitHub မှာ PR ဘယ်လို open (ဖွင့်) မလဲ?"
  }, {
    "depth": 4,
    "slug": "ကိုယ်တိုင်လုပ်ကြည့်ရန်",
    "text": "ကိုယ်တိုင်လုပ်ကြည့်ရန်:"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      type: "tip",
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p><strong>Pull Request (PR)</strong> ဆိုတာ ဘာလဲ၊ သူက ဘာလို့ အဖွဲ့လိုက် အလုပ်လုပ်တဲ့အခါ\nအရမ်းအရေးကြီးလဲ နားလည်ဖို့၊ ပြီးတော့ GitHub လို platform ပေါ်မှာ PR တွေ ဘယ်လို\nopen (ဖွင့်) မလဲ၊ review (ပြန်စစ်) မလဲ၊ merge (ပေါင်းစပ်) မလဲဆိုတဲ့\nအခြေခံတွေကို သိဖို့။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"pull-request-pr-ဆိုတာဘာလဲ\">Pull Request (PR) ဆိုတာဘာလဲ?</h2><a class=\"sl-anchor-link\" href=\"#pull-request-pr-ဆိုတာဘာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Pull Request (PR) ဆိုတာဘာလဲ?”</span></a></div>\n<p>Pull Request (PR) ဆိုတာ ကိုယ်လုပ်ထားတဲ့ changes တွေကို branch တစ်ခုကနေ (ကိုယ့် feature branch) နောက် branch တစ်ခု (များသောအားဖြင့် main) ထဲကို merge လုပ်ဖို့ တရားဝင် တင်ပြတာ ပါ။ ဒါဟာ Git ရဲ့ တိုက်ရိုက် command မဟုတ်ပါဘူး။ GitHub, GitLab လို hosting platform တွေရဲ့ feature တစ်ခုပါ။</p>\n<p>ဒါကို စာအုပ်တစ်အုပ်ရေးတာနဲ့ ဥပမာ ပေးရရင် ကိုယ်က ကိုယ့်အခန်းလေး ရေးပြီးပြီ (ကိုယ့် feature branch)။ Pull Request ဆိုတာ အဲဒီ အခန်းလေးကို စာအုပ် တည်းဖြတ်တဲ့သူ (main branch ကို ထိန်းသိမ်းတဲ့သူ) ဆီကို “ကျွန်တော့် အခန်းလေး ပြန်စစ်ပေးပါ၊ ပြီးရင် စာအုပ်ထဲ ထည့်ပေးဖို့ စဉ်းစားပေးပါ” လို့ စာတိုလေးနဲ့ ပို့ တင်ပြတာနဲ့ တူပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"pr-တွေ-ဘာလို့-အသုံးဝင်လဲ\">PR တွေ ဘာလို့ အသုံးဝင်လဲ?</h3><a class=\"sl-anchor-link\" href=\"#pr-တွေ-ဘာလို့-အသုံးဝင်လဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “PR တွေ ဘာလို့ အသုံးဝင်လဲ?”</span></a></div>\n<ul>\n<li><strong>Code Review</strong>: ကိုယ်လုပ်ထားတဲ့ changes တွေကို တခြား team members တွေက ပြန်စစ်လို့ ရတယ်။ ပိုကောင်းအောင် ဘယ်လို လုပ်ရမလဲ အကြံဉာဏ် ပေးလို့ ရတယ်။ bugs တွေ အဓိက code ထဲ မရောက်ခင် ရှာတွေ့နိုင်တယ်။</li>\n<li><strong>ဆွေးနွေးတိုင်ပင်ဖို့</strong>: ကိုယ်လုပ်ထားတဲ့ changes တွေအကြောင်း ဆွေးနွေးဖို့၊ မေးခွန်း မေးဖို့၊ ဆုံးဖြတ်ချက်တွေ မှတ်တမ်းတင်ဖို့ နေရာတစ်ခု ရတယ်။</li>\n<li><strong>စနစ်တကျ ပေါင်းစပ်ဖို့</strong>: changes တွေကို အတည်ပြုချက် ဒါမှမဟုတ် စစ်ဆေးမှုတွေ လုပ်ပြီးမှ ရည်ရွယ်ချက်ရှိရှိ merge လုပ်တာကို သေချာစေတယ်။</li>\n<li><strong>စမ်းသပ်မှုများ အလိုအလျောက် လုပ်ဖို့</strong>: CI/CD Triggers တွေက Pull Request ဖွင့်လိုက်တာနဲ့ tests တွေ၊ deployment previews တွေကို အလိုအလျောက် စတင် လုပ်ဆောင်ပေးနိုင်တယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"github-မှာ-pr-ဘယ်လို-open-ဖွင့်-မလဲ\">GitHub မှာ PR ဘယ်လို open (ဖွင့်) မလဲ?</h3><a class=\"sl-anchor-link\" href=\"#github-မှာ-pr-ဘယ်လို-open-ဖွင့်-မလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “GitHub မှာ PR ဘယ်လို open (ဖွင့်) မလဲ?”</span></a></div>\n<p><strong>ဘယ်လိုလုပ်မလဲ</strong> (feature branch ကို GitHub ကို push လုပ်ပြီးနောက်):</p>\n<ol>\n<li>GitHub.com မှာ ကိုယ့် Project repository ကို သွားပါ။</li>\n<li>များသောအားဖြင့် GitHub က အသင့် ပြနေလိမ့်မယ်: “your-feature-branch had recent pushes. Compare &#x26; pull request.” အဲဒါလေးကို နှိပ်လိုက်ပါ။</li>\n<li>ဒါမှမဟုတ် “Pull requests” tab ကို သွားပြီး “New pull request” ကို နှိပ်ပါ။</li>\n<li>Base နဲ့ Compare ကို သေချာရွေးပါ။ base branch က ဘယ် Branch ထဲကို merge လုပ်မှာလဲ (ဥပမာ - main)။ compare branch က ကိုယ့် feature branch ဘယ်ဟာလဲ (ဥပမာ - my-new-feature) သေချာ ရွေးပါ။</li>\n<li>Title နဲ့ Description ကောင်းကောင်း ပေးပါ။ PR အတွက် ဘာကို အဓိက ပြောင်းထားလဲဆိုတာ ရှင်းပြတဲ့ ရှင်းလင်းတဲ့ title ပေးပါ။ ဘာလုပ်ထားလဲ၊ ဘာလို့ လုပ်တာလဲ (ဥပမာ - bug #123 ကို ပြင်ထားတယ်၊ new user story ကို ထည့်ထားတယ်)၊ ဘယ်လို လုပ်ထားလဲ (ရှုပ်ထွေးရင် အတိုချုပ်) စတာတွေ ပါအောင် description ကောင်းကောင်း ရေးပါ။</li>\n<li>“Create pull request” button ကို နှိပ်ပါ။</li>\n</ol>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"ကိုယ်တိုင်လုပ်ကြည့်ရန်\">ကိုယ်တိုင်လုပ်ကြည့်ရန်:</h4><a class=\"sl-anchor-link\" href=\"#ကိုယ်တိုင်လုပ်ကြည့်ရန်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ကိုယ်တိုင်လုပ်ကြည့်ရန်:”</span></a></div>\n<p>အရင် သင်ခန်းစာတွေမှာ branch တစ်ခုကို push လုပ်ဖူးရင် အဲဒီ branch ကနေ ကိုယ့် main branch ထဲကို GitHub ပေါ်မှာ Pull Request တစ်ခု open ကြည့်ပါ။ ရိုးရှင်းတဲ့ title နဲ့ description လေး ရေးထည့်ပါ။</p>\n"
    }), createVNode($$Aside, {
      title: "အနှစ်ချုပ်",
      "set:html": "<p>Pull Request ဆိုတာ “ကျွန်တော့် ဒီ branch က အလုပ်က review လုပ်ဖို့နဲ့ merge\nလုပ်ဖို့ အဆင်သင့် ဖြစ်ပါပြီ” လို့ တရားဝင် ပြောတာပါပဲ။ Code quality နဲ့\ncollaboration (အတူတူ အလုပ်လုပ်တာ) အတွက် အရမ်းအရေးကြီးပါတယ်။</p>"
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

const url = "src/content/docs/git-course/collaboration/pull-requests.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/collaboration/pull-requests.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/collaboration/pull-requests.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
