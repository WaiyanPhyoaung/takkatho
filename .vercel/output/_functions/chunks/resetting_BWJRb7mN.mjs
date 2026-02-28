import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import './Content-image_C5QzPmj4.mjs';
import './rebase_UEv3bOUH.mjs';
import 'clsx';

const frontmatter = {
  "title": "Commits များဆီသို့ ပြန်သွားကြည့်ခြင်း",
  "description": "Commits များဆီသို့ ပြန်သွားကြည့်ခြင်း"
};
function getHeadings() {
  return [{
    "depth": 4,
    "slug": "git-reset-commit-ဆိုတာ-ဘာလဲ-သင့်-branch-pointer-ကို-ရွှေ့ခြင်း",
    "text": "git reset <commit> ဆိုတာ ဘာလဲ။ သင့် Branch Pointer ကို ရွှေ့ခြင်း။"
  }, {
    "depth": 4,
    "slug": "reset-လုပ်တဲ့-ပုံစံ-၃-မျိုး-head-staging-working-directory-အပေါ်-သက်ရောက်မှု",
    "text": "Reset လုပ်တဲ့ ပုံစံ (၃) မျိုး (HEAD, Staging, Working Directory အပေါ် သက်ရောက်မှု)"
  }, {
    "depth": 3,
    "slug": "1-git-reset---soft-commit-သက်ရောက်မှု-အနည်းဆုံး",
    "text": "1. git reset --soft <commit> (သက်ရောက်မှု အနည်းဆုံး)"
  }, {
    "depth": 3,
    "slug": "2-git-reset---mixed-commit-default",
    "text": "2. git reset --mixed <commit> (Default)"
  }, {
    "depth": 3,
    "slug": "3-git-reset---hard-commit-သက်ရောက်မှု-အများဆုံး---အန္တရာယ်ရှိ",
    "text": "3. git reset --hard <commit> (သက်ရောက်မှု အများဆုံး - အန္တရာယ်ရှိ)"
  }];
}
const mainUpdate = `
git switch main
git pull origin main
`;
const switchToFeature = `
git switch my-feature
`;
const gitRebaseMain = `
git rebase main
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p><code dir=\"auto\">git reset</code> ရဲ့ မတူညီတဲ့ ပုံစံတွေကို နားလည်ပြီး လက်ရှိ branch ရဲ့ pointer (HEAD) ကို အရင်က commit တစ်ခုဆီ ဘယ်လို ရွှေ့နိုင်လဲ၊ ဒါက <strong>Staging Area</strong> နဲ့ <strong>Working Directory</strong> ကို ဘယ်လို သက်ရောက်မှုရှိလဲဆိုတာ သိရှိဖို့ ဖြစ်ပါတယ်။ အရေးကြီးတဲ့ သတိပေးချက်တွေကိုလည်း လေ့လာရပါမယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<blockquote>\n<p><strong>Working Directory</strong> နှင့် <strong>Staging Area</strong> တို့ အကြောင်း အသေးစိတ် မသိသေးဘူးဆိုရင် <a href=\"/git-course/introduction/three-arena\">ဒီမှာ ဖတ်ကြည့်နိုင်ပါတယ်</a></p>\n</blockquote>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"git-reset-commit-ဆိုတာ-ဘာလဲ-သင့်-branch-pointer-ကို-ရွှေ့ခြင်း\"><code dir=\"auto\">git reset &#x3C;commit></code> ဆိုတာ ဘာလဲ။ သင့် Branch Pointer ကို ရွှေ့ခြင်း။</h4><a class=\"sl-anchor-link\" href=\"#git-reset-commit-ဆိုတာ-ဘာလဲ-သင့်-branch-pointer-ကို-ရွှေ့ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “git reset &#x3C;commit> ဆိုတာ ဘာလဲ။ သင့် Branch Pointer ကို ရွှေ့ခြင်း။”</span></a></div>\n<ul>\n<li>\n<p>git reset ဟာ သင်လက်ရှိရောက်နေတဲ့ branch ရဲ့ ထိပ် (HEAD ညွှန်ပြနေတဲ့နေရာ) ကို တခြား commit တစ်ခုဆီ ရွှေ့လိုက်တာပါ။ ဒါက လက်ရှိ branch ရဲ့ နောက်ဆုံးက commit တွေကို ကိုယ့်စက်ထဲမှာ “ဖယ်ရှားလိုက်” သလိုမျိုး ဖြစ်စေနိုင်ပါတယ်။</p>\n</li>\n<li>\n<p>Target Commit ကို ရွေးချယ်ခြင်း။ commit hash ကို တိုက်ရိုက်သတ်မှတ်နိုင်သလို <code dir=\"auto\">HEAD~N</code> (ဥပမာ- <code dir=\"auto\">HEAD~1</code> ဆိုရင် “HEAD ရဲ့ အရင် commit”၊ <code dir=\"auto\">HEAD~2</code> ဆိုရင် “HEAD မတိုင်ခင် နှစ်ခုမြောက်က commit”) လို့လဲလည်း သုံးနိုင်ပါတယ်။</p>\n</li>\n</ul>\n<p><strong>ဥပမာ (Analogy)</strong></p>\n<p>သင့် branch ကို ရထားတစ်စင်းလို့ မြင်ယောင်ကြည့်ပါ။ git reset ကတော့ (HEAD)ရထားခေါင်း ကို  အရင်ဘူတာရုံတစ်ခုဆီ ပြန်ရွှေ့လိုက်တာမျိုးပါပဲ။ သင် ခုနက “ကျော်ဖြတ်ခဲ့” တဲ့ ဘူတာရုံတွေမှာရှိတဲ့ “ကုန်ပစ္စည်း” (သင့်ရဲ့ ပြောင်းလဲမှုများ) တွေ ဘာဖြစ်သွားလဲဆိုတာကတော့ <strong>reset mode</strong> ပေါ်မှာ မူတည်ပါတယ်။ <code dir=\"auto\">--soft</code>၊ <code dir=\"auto\">--mixed</code> ဒါမှမဟုတ် <code dir=\"auto\">--hard</code> ပေါ်မှာပေါ့။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"reset-လုပ်တဲ့-ပုံစံ-၃-မျိုး-head-staging-working-directory-အပေါ်-သက်ရောက်မှု\">Reset လုပ်တဲ့ ပုံစံ (၃) မျိုး (HEAD, Staging, Working Directory အပေါ် သက်ရောက်မှု)</h4><a class=\"sl-anchor-link\" href=\"#reset-လုပ်တဲ့-ပုံစံ-၃-မျိုး-head-staging-working-directory-အပေါ်-သက်ရောက်မှု\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Reset လုပ်တဲ့ ပုံစံ (၃) မျိုး (HEAD, Staging, Working Directory အပေါ် သက်ရောက်မှု)”</span></a></div>\n<blockquote>\n<p>git reset ရဲ့ default mode က <code dir=\"auto\">--mixed</code> ဖြစ်ပါတယ်။</p>\n</blockquote>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Mode           </th><th>HEAD ကို ရွှေ့သလား။</th><th>Staging Area ကို ရှင်းသလား။</th><th>Working Directory ကို ပြောင်းလဲသလား။</th></tr></thead><tbody><tr><td><code dir=\"auto\">--soft</code> </td><td>ရွှေ့ပါတယ်</td><td>မရှင်းပါဘူး</td><td>မပြောင်းလဲပါဘူး</td></tr><tr><td><code dir=\"auto\">--mixed</code> </td><td>ရွှေ့ပါတယ်</td><td>ရှင်းပါတယ်</td><td>မပြောင်းလဲပါဘူး</td></tr><tr><td><code dir=\"auto\">--hard</code> </td><td>ရွှေ့ပါတယ်</td><td>ရှင်းပါတယ်</td><td>ပြောင်းလဲပါတယ် ( အန္တရာယ်ရှိ )</td></tr></tbody></table>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"1-git-reset---soft-commit-သက်ရောက်မှု-အနည်းဆုံး\">1. <code dir=\"auto\">git reset --soft &#x3C;commit></code> (သက်ရောက်မှု အနည်းဆုံး)</h3><a class=\"sl-anchor-link\" href=\"#1-git-reset---soft-commit-သက်ရောက်မှု-အနည်းဆုံး\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “1. git reset --soft &#x3C;commit> (သက်ရောက်မှု အနည်းဆုံး)”</span></a></div>\n<ul>\n<li><strong>ဘာလုပ်လဲ:</strong> HEAD ကို <code dir=\"auto\">&#x3C;commit></code> ဆီ ရွှေ့လိုက်ရုံပါပဲ။</li>\n<li><strong>Staging Area:</strong> ဘာမှ မပြောင်းလဲပါဘူး။ “reset” လုပ်လိုက်တဲ့ commit တွေရဲ့ ပြောင်းလဲမှုအားလုံးဟာ <strong>staged</strong> အနေအထားမှာ ရှိနေပြီး ပြန်ပြီး commit လုပ်ဖို့ အသင့်ဖြစ်နေပါတယ်။ (တစ်စုတစ်စည်းတည်း commit လုပ်နိုင်သလို၊ ခွဲပြီးလည်း လုပ်နိုင်ပါတယ်။)</li>\n<li><strong>Working Directory:</strong> ဘာမှ မပြောင်းလဲပါဘူး။ သင့် files တွေမှာ အရင်လုပ်ထားတဲ့ အလုပ်တွေ အကုန်ရှိနေပါသေးတယ်။</li>\n<li><strong>ဘာကြောင့်သုံးလဲ။</strong> “ဟာ၊ နောက်ဆုံး commit အနည်းငယ်ကို ပြန်ပြင်ပြီး တခြားပုံစံနဲ့ လုပ်ချင်တယ်၊ ဒါပေမဲ့ လုပ်ထားတဲ့အလုပ်တွေကိုတော့ မပျက်စီးစေချင်ဘူး။” ဆိုရင် သုံးပါတယ်။ နောက်ဆုံး commit အနည်းငယ်ကို interactive rebase မသုံးဘဲ commit message အသစ်နဲ့ တစ်ခုတည်း ပေါင်းဖို့အတွက် အသုံးဝင်ပါတယ်။</li>\n<li><strong>ဥပမာ။</strong> သင် commit (၃) ခု (C1, C2, C3) လုပ်ထားတယ်ဆိုပါစို့။ <code dir=\"auto\">git reset --soft HEAD~3</code> လို့ လုပ်လိုက်ရင် HEAD က <strong>C1 မတိုင်ခင် commit</strong> ကို ရောက်သွားပါမယ်။ C1, C2, C3 တို့ရဲ့ ပြောင်းလဲမှုအားလုံးဟာ သင့် Staging Area ထဲမှာ ရှိနေပြီး “New combined message” ဆိုပြီး <code dir=\"auto\">git commit</code> ပြန်လုပ်နိုင်ပါတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"2-git-reset---mixed-commit-default\">2. <code dir=\"auto\">git reset --mixed &#x3C;commit></code> (Default)</h3><a class=\"sl-anchor-link\" href=\"#2-git-reset---mixed-commit-default\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “2. git reset --mixed &#x3C;commit> (Default)”</span></a></div>\n<ul>\n<li><strong>ဘာလုပ်လဲ:</strong> HEAD ကို <code dir=\"auto\">&#x3C;commit></code> ဆီ ရွှေ့ပါတယ်။ ဒါ့အပြင် <strong>Staging Area</strong> ကိုလည်း ရောက်သွားတဲ့ commit နဲ့ ကိုက်ညီအောင် ပြန်ပြင်ပေးပါတယ်။</li>\n<li><strong>Staging Area:</strong> “reset” လုပ်လိုက်တဲ့ commits တွေရဲ့ ပြောင်းလဲမှုတွေကို ရှင်းပစ်ပါတယ်။ ပြောင်းလဲမှုတွေက <strong>unstaged</strong> ဖြစ်သွားပါတယ်။</li>\n<li><strong>Working Directory:</strong> ဘာမှ မပြောင်းလဲပါဘူး။ သင့် files တွေမှာ “reset” လုပ်လိုက်တဲ့ commit တွေရဲ့ အလုပ်တွေ အကုန်ရှိနေပါသေးတယ်။ ဒါပေမဲ့ ဒီပြောင်းလဲမှုတွေက အခု <strong>commit မလုပ်ရသေးတဲ့၊ unstaged</strong> ပြောင်းလဲမှုတွေ ဖြစ်သွားပါတယ်။</li>\n<li><strong>ဘာကြောင့်သုံးလဲ။</strong> “ဟာ၊ မရည်ရွယ်ဘဲ commit လုပ်မိသွားတယ်။ ဒါမှမဟုတ် နောက်ဆုံး commit တွေကို ပြန်ခွဲပြီး ဘယ်ဟာကို stage လုပ်ရမလဲဆိုတာ ပြန်စဉ်းစားချင်တယ်” ဆိုရင် သုံးပါတယ်။</li>\n<li><strong>ဥပမာ။</strong> <code dir=\"auto\">git reset HEAD~1</code> လို့ လုပ်လိုက်ရင် သင့်ရဲ့ နောက်ဆုံး commit ကို “ပယ်ဖျက်” လိုက်သလို ဖြစ်သွားပါတယ်။ အဲဒီ commit ရဲ့ ပြောင်းလဲမှုတွေက သင့် Working Directory ထဲမှာ <strong>unstaged changes</strong> တွေအဖြစ် ရှိနေပါမယ်။ ဒါဆို သင် ပြောင်းလဲမှုတချို့ကို <code dir=\"auto\">git add</code> လုပ်ပြီး ပြန် commit လုပ်နိုင်ပါတယ်။</li>\n</ul>\n"
    }), createVNode($$Aside, {
      title: "မှတ်ချက်",
      type: "tip",
      "set:html": "<p>သင်ခန်းစာ Quick Fixes မှာ လေ့လာခဲ့တဲ့ <code dir=\"auto\">git reset HEAD &#x3C;file></code> ဟာ ဖိုင်တစ်ခုတည်း ကို <strong>---mixed reset</strong> လုပ်တာနဲ့ အတူတူပါပဲ။ staging area ကနေ working directory ကို ပြန်ရောက်သွားတာပါ။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"3-git-reset---hard-commit-သက်ရောက်မှု-အများဆုံး---အန္တရာယ်ရှိ\">3. <code dir=\"auto\">git reset --hard &#x3C;commit></code> (သက်ရောက်မှု အများဆုံး - အန္တရာယ်ရှိ)</h3><a class=\"sl-anchor-link\" href=\"#3-git-reset---hard-commit-သက်ရောက်မှု-အများဆုံး---အန္တရာယ်ရှိ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “3. git reset --hard &#x3C;commit> (သက်ရောက်မှု အများဆုံး - အန္တရာယ်ရှိ)”</span></a></div>\n<ul>\n<li><strong>ဘာလုပ်သလဲ:</strong> HEAD ကို <code dir=\"auto\">&#x3C;commit></code> ဆီ ရွှေ့ပါတယ်။ Staging Area ကို ရှင်းပါတယ်။ ဒါ့အပြင် သင့် Working Directory ကိုလည်း ရောက်သွားတဲ့ commit နဲ့ ကိုက်ညီအောင် ပြန်ပြင်ပေးပါတယ်။</li>\n<li><strong>Staging Area:</strong> ရှင်းသွားပါတယ်။</li>\n<li><strong>Working Directory:</strong> Commit မလုပ်ရသေးတဲ့ ပြောင်းလဲမှုတွေရော commit လုပ်ခဲ့တဲ့ ပြောင်းလဲမှုတွေရောအားလုံးဟာ ပျက်သွားပါမယ်။ ဒါက ဖျက်ပစ်တာနဲ့ အတူတူပါပဲ။</li>\n<li><strong>ဘာကြောင့်သုံးလဲ:</strong> “ကျွန်တော်တို့ရဲ့ နောက်ဆုံး <strong>N commits</strong> တွေနဲ့ <strong>commit မလုပ်ရသေးတဲ့</strong> အလုပ်တွေကို အပြီးတိုင် ဖျက်ပစ်ပြီး၊ ကျွန်တော့် project ကို  <code dir=\"auto\">reset --hard</code>လုပ်လိုက်တဲ့<code dir=\"auto\">&#x3C;commit></code> မှာ ရှိခဲ့တဲ့ အခြေအနေအတိုင်း အတိအကျ ဖြစ်စေချင်တယ်” ဆိုရင် သုံးပါတယ်။</li>\n<li><strong>ဥပမာ။</strong> <code dir=\"auto\">git reset --hard HEAD~1</code> လို့ လုပ်လိုက်ရင် သင့်ရဲ့ နောက်ဆုံး commit က ပျောက်သွားပါမယ်။ အဲဒီ commit မှာ လုပ်ခဲ့တဲ့ ပြောင်းလဲမှုတွေ အားလုံးလည်း သင့် working files တွေကနေ ပျောက်သွားပါမယ်။ သင့် project ဟာ အဲဒီ နောက်ဆုံး commit မတိုင်ခင်က အခြေအနေအတိုင်း အတိအကျ ဖြစ်သွားပါမယ်။</li>\n</ul>\n"
    }), createVNode($$Aside, {
      title: "သတိပေးချက်",
      type: "danger",
      "set:html": "<p>အလွန်အမင်း အန္တရာယ်ရှိတယ်။ အထူးသတိထားပြီး သုံးပါ။ မှန်ကန်တဲ့ branch ပေါ်မှာ ရောက်နေတာ ဟုတ်ရဲ့လား၊ တကယ်ပဲ အဲဒီပြောင်းလဲမှုတွေကို ဖျက်ပစ်ချင်တာလားဆိုတာ သေချာအောင် စစ်ဆေးပါ။</p>"
    }), "\n", createVNode($$Aside, {
      title: "သတိပေးချက်",
      type: "danger",
      "set:html": "<p>rebase လိုပဲ - shared လုပ်ထားတဲ့ commit history ကို reset မလုပ်ပါနဲ့။\nPush လုပ်ပြီးသား commit တစ်ခုကို ပြန်ပြင်ချင်ရင် နောက်သင်ခန်းစာက <code dir=\"auto\">git revert</code> ကို သုံးပါ။</p>"
    }), "\n", createVNode($$Aside, {
      title: "အနှစ်ချုပ်",
      "set:html": "<p><code dir=\"auto\">git reset</code> ဟာ သင့် branch pointer(HEAD) ကို ရွှေ့ပါတယ်။ <code dir=\"auto\">--soft</code> ကတော့ ပြောင်းလဲမှုတွေကို <strong>staged</strong> အနေအထားမှာပဲ ထားပါတယ်။ <code dir=\"auto\">--mixed</code> ကတော့ ပြောင်းလဲမှုတွေကို <strong>unstaged</strong> ဖြစ်စေပြီး (working directory ထဲမှာတော့ ရှိနေစေပါတယ်)။ <code dir=\"auto\">--hard</code> ကတော့ staging နဲ့ working directory ထဲက ပြောင်းလဲမှုအားလုံးကို ဖျက်ပစ်ပါတယ်။ (အန္တရာယ်ရှိ!) push လုပ်ထားတဲ့ commit ကို ဘယ်တော့မှ reset မလုပ်ပါနဲ့။ <strong>revert</strong> ကိုသာ သုံးပါ။</p>"
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

const url = "src/content/docs/git-course/advanced-techniques/resetting.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/advanced-techniques/resetting.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/advanced-techniques/resetting.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, gitRebaseMain, mainUpdate, switchToFeature, url };
