import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "ကိုယ့်အလုပ်တွေကို Project ထဲ ထည့်သွင်းခြင်း - PR ကို Merge လုပ်ခြင်း",
  "description": "ကိုယ့်အလုပ်တွေကို Project ထဲ ထည့်သွင်းခြင်း - PR ကို Merge လုပ်ခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "green-light-approval-နှင့်-merging",
    "text": "Green Light: Approval နှင့် Merging"
  }, {
    "depth": 3,
    "slug": "ဘယ်သူတွေက-merge-လုပ်တာလဲ",
    "text": "ဘယ်သူတွေက Merge လုပ်တာလဲ?"
  }, {
    "depth": 4,
    "slug": "ဘယ်လိုလုပ်မလဲ-github",
    "text": "ဘယ်လိုလုပ်မလဲ (GitHub):"
  }, {
    "depth": 3,
    "slug": "merge-လုပ်ပြီးနောက်-cleaning-up",
    "text": "Merge လုပ်ပြီးနောက်: Cleaning Up"
  }, {
    "depth": 3,
    "slug": "remote-branch-deletion-မဖြစ်မနေ-မဟုတ်",
    "text": "Remote Branch Deletion (မဖြစ်မနေ မဟုတ်):"
  }, {
    "depth": 3,
    "slug": "local-cleanup",
    "text": "Local Cleanup:"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p><strong>approved changes</strong> တွေ ပါဝင်တဲ့ <strong>Pull Request</strong> တစ်ခုကို <strong>main branch</strong> ထဲ\nဘယ်လို <strong>merge</strong> လုပ်ရလဲ သိဖို့။ ပြီးရင် <strong>local</strong> မှာ ဘာတွေ ဆက်လုပ်ရမလဲ\nနားလည်ဖို့။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"green-light-approval-နှင့်-merging\">Green Light: Approval နှင့် Merging</h3><a class=\"sl-anchor-link\" href=\"#green-light-approval-နှင့်-merging\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Green Light: Approval နှင့် Merging”</span></a></div>\n<p><strong>reviewers</strong> တွေက စိတ်ကျေနပ်ပြီ၊ လိုအပ်တဲ့ <strong>checks</strong> (ဥပမာ- automated tests (အလိုအလျောက် စစ်ဆေးတဲ့ စနစ်)) တွေ အားလုံး pass သွားပြီဆိုရင် PR ကို <strong>approve</strong> လုပ်လို့ ရပါပြီ။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဘယ်သူတွေက-merge-လုပ်တာလဲ\">ဘယ်သူတွေက Merge လုပ်တာလဲ?</h3><a class=\"sl-anchor-link\" href=\"#ဘယ်သူတွေက-merge-လုပ်တာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘယ်သူတွေက Merge လုပ်တာလဲ?”</span></a></div>\n<p>များသောအားဖြင့် <strong>repository</strong> ပေါ်မှာ <strong>merge rights</strong> ရှိတဲ့သူ တစ်ယောက် (<strong>approved လုပ်ပြီးနောက် PR ဖွင့်သူ ကိုယ်တိုင် ဒါမှမဟုတ် maintainer</strong>) က <strong>merge</strong> လုပ်တာပါ။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"ဘယ်လိုလုပ်မလဲ-github\">ဘယ်လိုလုပ်မလဲ (GitHub):</h4><a class=\"sl-anchor-link\" href=\"#ဘယ်လိုလုပ်မလဲ-github\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘယ်လိုလုပ်မလဲ (GitHub):”</span></a></div>\n<ol>\n<li>\n<p>PR page ပေါ်မှာ <strong>“Merge pull request”</strong> button တစ်ခု ပေါ်လာပါလိမ့်မယ်။</p>\n</li>\n<li>\n<p>များသောအားဖြင့် merge method ကို ရွေးလို့ ရပါသေးတယ် (ဥပမာ- <code dir=\"auto\">\"Create a merge commit\"</code>၊ <code dir=\"auto\">\"Squash and merge\"</code>၊ <code dir=\"auto\">\"Rebase and merge\"</code>)။ အခု စစချင်းအတွက်တော့ <strong>default</strong> ဖြစ်တဲ့ <code dir=\"auto\">\"Create a merge commit\"</code> က အဆင်ပြေပါတယ်။</p>\n</li>\n<li>\n<p><strong>“Confirm merge”</strong> ကို နှိပ်ပါ။</p>\n<blockquote>\n<p>GitHub က ကိုယ့် <strong>feature branch</strong> ထဲက <strong>commits</strong> တွေကို ယူပြီး <strong>remote repository</strong> ပေါ်မှာ ရှိတဲ့ <strong>base branch (main)</strong> ထဲကို <strong>merge</strong> လုပ်ပါလိမ့်မယ်။</p>\n</blockquote>\n</li>\n</ol>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"merge-လုပ်ပြီးနောက်-cleaning-up\">Merge လုပ်ပြီးနောက်: Cleaning Up</h3><a class=\"sl-anchor-link\" href=\"#merge-လုပ်ပြီးနောက်-cleaning-up\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Merge လုပ်ပြီးနောက်: Cleaning Up”</span></a></div>\n<p>Merge လုပ်ပြီးသွားရင် အလုပ်နည်းနည်း ကျန်ပါသေးတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"remote-branch-deletion-မဖြစ်မနေ-မဟုတ်\">Remote Branch Deletion (မဖြစ်မနေ မဟုတ်):</h3><a class=\"sl-anchor-link\" href=\"#remote-branch-deletion-မဖြစ်မနေ-မဟုတ်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Remote Branch Deletion (မဖြစ်မနေ မဟုတ်):”</span></a></div>\n<p>PR ကို merging လုပ်ပြီးတာနဲ့ GitHub က များသောအားဖြင့် <strong>“Delete branch”</strong> button လေး တစ်ခုပေး ပါလိမ့်မယ်။ ဒါက <strong>remote repository</strong> ပေါ်မှာ ရှိတဲ့ <code dir=\"auto\">feature branch</code> ကို <strong>delete</strong> လိုက်တာပါ။ ဘာလို့လဲဆိုတော့ အဲဒီ branch ရဲ့ အလုပ်တွေ အားလုံးက အခု main ထဲ ရောက်သွားပြီလေ။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"local-cleanup\">Local Cleanup:</h3><a class=\"sl-anchor-link\" href=\"#local-cleanup\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Local Cleanup:”</span></a></div>\n<p>ကိုယ့် local machine မှာလည်း ရှင်းလင်းရေး လုပ်ရပါမယ်။</p>\n<ol>\n<li>\n<p>ကိုယ့် local main branch ကို update လုပ်ပါ</p>\n<ul>\n<li>\n<p><code dir=\"auto\">git switch main</code></p>\n</li>\n<li>\n<p><code dir=\"auto\">git pull origin main</code> (ဒါက <strong>remote main</strong> ကနေ အခု merge လုပ်ထားတဲ့ changes အသစ်တွေကို ကိုယ့် <strong>local main</strong> ထဲ pull လိုက်တာ)။</p>\n</li>\n</ul>\n</li>\n<li>\n<p>ကိုယ့် <strong>local feature branch</strong> ကို ဖျက်ပါ။ ( merged ပြီးသား ဖြစ်သွားပြီ):</p>\n<ul>\n<li><code dir=\"auto\">git branch -d my-new-feature</code>\n(<code dir=\"auto\">-d</code> ကို <strong>safe delete</strong> အတွက် သုံးပါတယ်။ ဒါက branch ကို merged ပြီးသား ဖြစ်မှ ဖျက်ပေးတာ)။</li>\n</ul>\n</li>\n</ol>\n"
    }), createVNode($$Aside, {
      title: "အနှစ်ချုပ်",
      "set:html": "<p>PR တစ်ခု approved ဖြစ်သွားရင် GitHub ပေါ်မှာ merged လုပ်လိုက်တယ်။ ပြီးရင်\nကိုယ့် local main ကို update လုပ်ပြီး local feature branch ကို delete\nလုပ်တာပါ။</p>"
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

const url = "src/content/docs/git-course/collaboration/merging.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/collaboration/merging.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/collaboration/merging.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
