import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "အလုပ်များကို ယာယီသိမ်းဆည်းခြင်း",
  "description": "အလုပ်များကို ယာယီသိမ်းဆည်းခြင်း"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "ဒါလေး-ခဏ-မှတ်ထားပေးပါ---git-stash",
    "text": "“ဒါလေး ခဏ မှတ်ထားပေးပါ!” - git stash"
  }, {
    "depth": 3,
    "slug": "git-stash-ဆိုတာ-ဘာလဲ",
    "text": "git stash ဆိုတာ ဘာလဲ?"
  }, {
    "depth": 3,
    "slug": "ဘာကြောင့်-သုံးရလဲ",
    "text": "ဘာကြောင့် သုံးရလဲ?"
  }, {
    "depth": 2,
    "slug": "အဓိက-stash-commands-များ",
    "text": "အဓိက Stash Commands များ"
  }, {
    "depth": 3,
    "slug": "လက်တွေ့စမ်းသပ်ကြည့်ရန်",
    "text": "လက်တွေ့စမ်းသပ်ကြည့်ရန်"
  }];
}
const gitStash = `
git stash push -m "Stash message"
`;
const gitStashList = `
git stash list
`;
const gitStashPop = `
git stash pop
`;
const gitStashApply = `
git stash apply stash@{1}
`;
const gitStashDrop = `
git stash drop stash@{1}
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>Commit မလုပ်ရသေးတဲ့ အပြောင်းအလဲတွေကို ယာယီသိမ်းဆည်းပြီး အခြားအလုပ်တစ်ခုကို မြန်မြန်ပြောင်းလုပ်နိုင်ရန် <code dir=\"auto\">git stash</code> ကို အသုံးပြုနည်း။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"ဒါလေး-ခဏ-မှတ်ထားပေးပါ---git-stash\">“ဒါလေး ခဏ မှတ်ထားပေးပါ!” - git stash</h2><a class=\"sl-anchor-link\" href=\"#ဒါလေး-ခဏ-မှတ်ထားပေးပါ---git-stash\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled ““ဒါလေး ခဏ မှတ်ထားပေးပါ!” - git stash”</span></a></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"git-stash-ဆိုတာ-ဘာလဲ\">git stash ဆိုတာ ဘာလဲ?</h3><a class=\"sl-anchor-link\" href=\"#git-stash-ဆိုတာ-ဘာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “git stash ဆိုတာ ဘာလဲ?”</span></a></div>\n<ul>\n<li>အလုပ်လုပ်နေတဲ့နေရာထဲက Commit မလုပ်ရသေးတဲ့ အပြောင်းအလဲများကို ယာယီသိမ်းဆည်းပေးတာပါ</li>\n<li><strong>Staged</strong> နှင့် <strong>Unstaged Changes</strong> နှစ်မျိုးလုံးကို သိမ်းပေးပါတယ်</li>\n<li>သိမ်းပြီးနောက် working directory ကို နောက်ဆုံး Commit အတိုင်း ပြန်လုပ်ပေးပါတယ်</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဘာကြောင့်-သုံးရလဲ\">ဘာကြောင့် သုံးရလဲ?</h3><a class=\"sl-anchor-link\" href=\"#ဘာကြောင့်-သုံးရလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘာကြောင့် သုံးရလဲ?”</span></a></div>\n<ul>\n<li>အလုပ်တစ်ခု လုပ်နေတုန်း အရေးပေါ် Bug ပြင်ဆင်မှုတစ်ခု တခြား Branch တစ်ခုမှာ ပေါ်လာတဲ့အခါ</li>\n<li>တစ်ဝက်တစ်ပျက် ပြီးတဲ့အလုပ်ကို Commit မလုပ်ချင်သေးဘဲ Branch ပြောင်းဖို့ လိုအပ်တဲ့အခါ</li>\n<li>Pull လုပ်ဖို့ သန့်ရှင်းတဲ့ အခြေအနေတစ်ခု လိုအပ်တဲ့အခါ</li>\n</ul>\n"
    }), createVNode($$Aside, {
      title: "ဥပမာ",
      type: "tip",
      "set:html": "<p>ရှုပ်ထွေးနေတဲ့ စားပွဲတစ်ခုမှာ အလုပ်လုပ်နေတုန်း စားပွဲကို ချက်ချင်းရှင်းဖို့ လိုတဲ့ အချိန်နဲ့ တူပါတယ်။ Changes အားလုံးကို အံဆွဲတစ်ခုထဲ ထည့်လိုက်ပြီး နောက်မှ ဆက်လုပ်မယ်ဆိုတာမျိုးပါ။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"အဓိက-stash-commands-များ\">အဓိက Stash Commands များ</h2><a class=\"sl-anchor-link\" href=\"#အဓိက-stash-commands-များ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အဓိက Stash Commands များ”</span></a></div>\n<p><strong>1. အပြောင်းအလဲများကို သိမ်းဆည်းခြင်း</strong></p>\n"
    }), createVNode(Code, {
      code: gitStash,
      title: "Bash"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p><code dir=\"auto\">git stash</code> လို့လည်း ရိုက်နိုင်ပါတယ်</p>\n<p><strong>2. သိမ်းဆည်းထားတာတွေကို ကြည့်ခြင်း</strong></p>\n"
    }), createVNode(Code, {
      code: gitStashList,
      title: "Bash"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p><strong>3. သိမ်းဆည်းထားတာကို ပြန်ယူခြင်း</strong></p>\n"
    }), createVNode(Code, {
      code: gitStashPop,
      title: "Bash"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>နောက်ဆုံးသိမ်းထားတာကို ပြန်ယူပြီး စာရင်းကနေ ဖယ်ရှားပေးပါတယ် (Conflicts များရှိရင် သတိထားပါ!)</p>\n<p><strong>4. သတ်မှတ်ထားတဲ့ Stash ကို ပြန်ယူခြင်း</strong></p>\n"
    }), createVNode(Code, {
      code: gitStashApply,
      title: "Bash"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>သတ်မှတ်ထားတဲ့ Stash ကို ပြန်ယူပေမယ့် စာရင်းထဲမှာ ဆက်ရှိနေပါတယ်</p>\n<p>ပြီးတော့ ဖယ်ရှားချင်ရင်:</p>\n"
    }), createVNode(Code, {
      code: gitStashDrop,
      title: "Bash"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"လက်တွေ့စမ်းသပ်ကြည့်ရန်\">လက်တွေ့စမ်းသပ်ကြည့်ရန်</h3><a class=\"sl-anchor-link\" href=\"#လက်တွေ့စမ်းသပ်ကြည့်ရန်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “လက်တွေ့စမ်းသပ်ကြည့်ရန်”</span></a></div>\n<ol>\n<li>ဖိုင်တစ်ခုခုကို အပြောင်းအလဲတချို့ လုပ်ကြည့်ပါ</li>\n<li><code dir=\"auto\">git stash push -m \"WIP feature X\"</code> လို့ ရိုက်ပါ</li>\n<li>အလုပ်လုပ်နေတဲ့နေရာ သန့်ရှင်းသွားတာကို သတိထားပါ ( <code dir=\"auto\">git status</code> နဲ့ ကြည့်ပါ)</li>\n<li><code dir=\"auto\">git stash list</code> လုပ်ကြည့်ပါ</li>\n<li><code dir=\"auto\">git stash pop</code> လုပ်ကြည့်ပါ (အပြောင်းအလဲတွေ ပြန်ပေါ်လာတာကို တွေ့ရပါလိမ့်မယ်!)</li>\n</ol>\n"
    }), createVNode($$Aside, {
      title: "အနှစ်ချုပ်",
      "set:html": "<p>git stash က Branch တွေ ပြောင်းဖို့ ဒါမှမဟုတ် Updates တွေ Pull လုပ်ဖို့ လိုအပ်တဲ့အခါ မပြီးသေးတဲ့ အလုပ်တွေကို အမြန်သိမ်းဆည်းဖို့ အကောင်းဆုံးပါ။ pop သို့မဟုတ် apply က အဲဒါကို ပြန်ရောက်စေပါတယ်။</p>"
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

const url = "src/content/docs/git-course/advanced-techniques/stashing.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/advanced-techniques/stashing.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/advanced-techniques/stashing.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, gitStash, gitStashApply, gitStashDrop, gitStashList, gitStashPop, url };
