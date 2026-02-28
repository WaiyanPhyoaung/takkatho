import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import { g as gitRebase } from './rebase_UEv3bOUH.mjs';
import 'clsx';

const frontmatter = {
  "title": "ကိုယ့် Story ကို သပ်ရပ်အောင် ပြင်ဆင်ခြင်း - git rebase အကြောင်း",
  "description": "ကိုယ့် Story ကို သပ်ရပ်အောင် ပြင်ဆင်ခြင်း - git rebase အကြောင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "git-rebase-ဆိုတာဘာလဲ-ကိုယ့်ရဲ့-story-ကို-ပြန်ရေးခြင်း",
    "text": "git rebase ဆိုတာဘာလဲ? ကိုယ့်ရဲ့ Story ကို ပြန်ရေးခြင်း"
  }, {
    "depth": 3,
    "slug": "အသုံးပြုပုံများ-စတင်လေ့လာသူများအတွက်",
    "text": "အသုံးပြုပုံများ (စတင်လေ့လာသူများအတွက်):"
  }, {
    "depth": 2,
    "slug": "rebase-linear-story-vs-merge-preserves-divergence",
    "text": "Rebase (Linear Story) vs. Merge (Preserves Divergence)"
  }, {
    "depth": 3,
    "slug": "scenario-1-ကိုယ့်-feature-branch-ကို-main-ရဲ့-changes-များနဲ့-update-လုပ်ခြင်း",
    "text": "Scenario 1: ကိုယ့် Feature Branch ကို main ရဲ့ Changes များနဲ့ Update လုပ်ခြင်း"
  }, {
    "depth": 3,
    "slug": "scenario-2-interactive-rebase-git-rebase--i-ဖြင့်-local-commits-များကို-ရှင်းလင်းခြင်း",
    "text": "Scenario 2: Interactive Rebase (git rebase -i) ဖြင့် Local Commits များကို ရှင်းလင်းခြင်း"
  }, {
    "depth": 3,
    "slug": "ဥပမာ",
    "text": "ဥပမာ:"
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
      "set:html": "<p><code dir=\"auto\">git rebase</code> ရဲ့ အခြေခံ သဘောတရားကို နားလည်ဖို့၊ <strong>local history</strong> ကို ရှင်းလင်းဖို့နဲ့ <strong>remote branch</strong> က changes များကို ထည့်သွင်းဖို့ အသုံးပြုပုံများကို လေ့လာရန်။ <strong>git merge</strong> နဲ့ ဘယ်လို အခြေခံကျကျ ကွာခြားလဲဆိုတာ နားလည်ဖို့နဲ့ <strong>“Rebase ရဲ့ Golden Rule”</strong> ကို သင်ယူဖို့။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"git-rebase-ဆိုတာဘာလဲ-ကိုယ့်ရဲ့-story-ကို-ပြန်ရေးခြင်း\"><code dir=\"auto\">git rebase</code> ဆိုတာဘာလဲ? ကိုယ့်ရဲ့ Story ကို ပြန်ရေးခြင်း</h3><a class=\"sl-anchor-link\" href=\"#git-rebase-ဆိုတာဘာလဲ-ကိုယ့်ရဲ့-story-ကို-ပြန်ရေးခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “git rebase ဆိုတာဘာလဲ? ကိုယ့်ရဲ့ Story ကို ပြန်ရေးခြင်း”</span></a></div>\n<p><strong>git rebase ဆိုတာ:</strong></p>\n<ul>\n<li>branch တစ်ခုက commits တွေကို commit အသစ်တစ်ခု အဖြစ် ပြန်လုပ်တဲ့နည်းလမ်းတစ်ခုပါ</li>\n<li>ကိုယ့် branch ရဲ့ စတင်တဲ့နေရာကို ပြောင်းလဲလိုက်တာဖြစ်ပါတယ်</li>\n<li>ကိုယ်က အခုမှ တခြားနေရာကနေ အလုပ်စခဲ့သလို ဖြစ်သွားတာပါ</li>\n<li>commit history ကို ပြန်ရေးတာဖြစ်ပါတယ်</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အသုံးပြုပုံများ-စတင်လေ့လာသူများအတွက်\">အသုံးပြုပုံများ (စတင်လေ့လာသူများအတွက်):</h3><a class=\"sl-anchor-link\" href=\"#အသုံးပြုပုံများ-စတင်လေ့လာသူများအတွက်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အသုံးပြုပုံများ (စတင်လေ့လာသူများအတွက်):”</span></a></div>\n<ol>\n<li>\n<p>Local feature branch history ကို ရှင်းလင်းခြင်း:</p>\n<ul>\n<li>merging မလုပ်ခင် multiple commits တွေကို ပိုအဓိပ္ပာယ်ရှိတဲ့ commits အဖြစ် ပေါင်းစပ်ခြင်း (interactive rebase သုံးပြီး)</li>\n</ul>\n</li>\n<li>\n<p>Parent branch က changes တွေကို ကိုယ့် feature branch ထဲ ထည့်သွင်းခြင်း:</p>\n<ul>\n<li>ကိုယ့် feature branch ကို up-to-date ဖြစ်အောင် ကူညီနိုင်ပြီး နောက်ဆုံး merge ကို ပိုပြီး သပ်သပ်ရပ်ရပ် ဖြစ်စေပါတယ်</li>\n</ul>\n</li>\n</ol>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"rebase-linear-story-vs-merge-preserves-divergence\">Rebase (Linear Story) vs. Merge (Preserves Divergence)</h2><a class=\"sl-anchor-link\" href=\"#rebase-linear-story-vs-merge-preserves-divergence\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Rebase (Linear Story) vs. Merge (Preserves Divergence)”</span></a></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"scenario-1-ကိုယ့်-feature-branch-ကို-main-ရဲ့-changes-များနဲ့-update-လုပ်ခြင်း\">Scenario 1: ကိုယ့် Feature Branch ကို main ရဲ့ Changes များနဲ့ Update လုပ်ခြင်း</h3><a class=\"sl-anchor-link\" href=\"#scenario-1-ကိုယ့်-feature-branch-ကို-main-ရဲ့-changes-များနဲ့-update-လုပ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Scenario 1: ကိုယ့် Feature Branch ကို main ရဲ့ Changes များနဲ့ Update လုပ်ခြင်း”</span></a></div>\n<p><strong>ပြဿနာ</strong>: ကိုယ်က main ကနေ my-feature ကို ဖန်တီးခဲ့တယ်။ ကိုယ် အလုပ်လုပ်နေတုန်းမှာ main မှာ အရေးကြီး updates တွေ ရရှိခဲ့တယ်။ ကိုယ်က ဒီ updates တွေကို အခု လက်ရှိလုပ်နေတဲ့ my-feature ထဲ ထည့်သွင်းချင်တယ်။</p>\n<p><strong>ဘယ်လိုလုပ်မလဲ?</strong></p>\n<p><strong>1. အရင်ဆုံး main ကို update လုပ်ပါ</strong></p>\n"
    }), createVNode(Code, {
      code: mainUpdate,
      title: "Bash"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p><strong>2. my-feature ကို ပြန်ပြောင်းပါ</strong></p>\n"
    }), createVNode(Code, {
      code: switchToFeature,
      title: "Bash"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p><strong>3. main ပေါ်မှာ Rebase လုပ်ပါ</strong></p>\n"
    }), createVNode(Code, {
      code: gitRebaseMain,
      title: "Bash"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p><strong>ဘာဖြစ်သွားလဲ?</strong></p>\n<p>Git က my-feature နဲ့ သက်ဆိုင်တဲ့ commits တွေကို ခန ဘေးဖယ်ထားတယ်။\nmain ရဲ့ update commits တွေကို ယူပြီးတော့ ခုန က ဖယ်ထားတဲ့ my-feature ရဲ့ commits တွေကို main ရဲ့ အပေါ်မှာ တစ်ခုချင်းစီ ပြန်တင်တယ်။</p>\n"
    }), createVNode($$Aside, {
      type: "caution",
      title: "Conflicts",
      "set:html": "<p>Rebase လုပ်နေစဉ် conflicts တွေ ကြုံရနိုင်တယ်။ Merging နဲ့ ဆင်တူတယ်။ ပြန်တင်နေတဲ့ commit တစ်ခုချင်းစီအတွက် conflicts တွေ ရှိနိုင်တယ်။ ကိုယ်က သူတို့ကို ဖြေရှင်းရမယ်။ <code dir=\"auto\">git add &#x3C;resolved file name></code> ရိုက်ရမယ်။ ပြီးရင် <code dir=\"auto\">git rebase --continue</code> လို့ ရိုက်ရမယ်။ (ရပ်တန့်ဖို့ <code dir=\"auto\">git rebase --abort</code> )။</p>"
    }), "\n", createVNode($$Aside, {
      type: "tip",
      title: "အကျိုးကျေးဇူး",
      "set:html": "<p>ကိုယ့် <strong>my-feature branch</strong> မှာ main ရဲ့ updates တွေ အားလုံး ပါဝင်သွားပြီ။ ကိုယ်က main updates တွေ ပြီးမှ ကိုယ့် feature ကို စခဲ့သလို ဖြစ်သွားတာပါ။ ဒါက my-feature ကို main ထဲ နောက်ဆုံး merge လုပ်တဲ့အခါ သပ်ရပ်တဲ့ <strong>fast-forward merging</strong> ဖြစ်စေပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"scenario-2-interactive-rebase-git-rebase--i-ဖြင့်-local-commits-များကို-ရှင်းလင်းခြင်း\">Scenario 2: Interactive Rebase (git rebase -i) ဖြင့် Local Commits များကို ရှင်းလင်းခြင်း</h3><a class=\"sl-anchor-link\" href=\"#scenario-2-interactive-rebase-git-rebase--i-ဖြင့်-local-commits-များကို-ရှင်းလင်းခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Scenario 2: Interactive Rebase (git rebase -i) ဖြင့် Local Commits များကို ရှင်းလင်းခြင်း”</span></a></div>\n<p><strong>ပြဿနာ</strong>: ကိုယ့် local my-feature branch ပေါ်မှာ (push မလုပ်ခင်) ကိုယ်က <code dir=\"auto\">\"WIP\"</code>, <code dir=\"auto\">\"fix typo\"</code>, <code dir=\"auto\">\"another small fix\"</code> လိုမျိုး အစီအစဉ်မကျတဲ့ commits များစွာ လုပ်ခဲ့တယ်။ Pull Request တစ်ခု မဖန်တီးခင် ဒါကို တစ်ခု၊ နှစ်ခု လောက်ပဲရှိတဲ့ သင့်တော်တဲ့ commits အဖြစ် ရှင်းလင်းချင်တယ်။</p>\n<p><strong>ဘယ်လိုလုပ်မလဲ? (Interactive Rebase)</strong></p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">git rebase -i HEAD~3</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"git rebase -i HEAD~3\"><div></div></button></div></figure></div>\n<p>(ဒါက “လက်ရှိနေရာကနေ နောက်ဆုံး commits သုံးခုကို ပြန်ပြင်မယ် (interactive rebase)” လို့ ဆိုလိုတယ်)</p>\n<p><strong>ဘာဖြစ်သွားလဲ</strong>\nGit က ကိုယ့် သတ်မှတ်ထားတဲ့ text editor ကို commits စာရင်းနဲ့ ဖွင့်တယ်။ commit တစ်ခုချင်းစီအတွက် ကိုယ်က လုပ်ဆောင်မှု တစ်ခုကို ရွေးနိုင်တယ်:</p>\n<ul>\n<li><strong>pick</strong>: commit ကို ရှိတဲ့အတိုင်း သုံးပါ</li>\n<li><strong>reword (r)</strong>: commit ကို သုံးပါ၊ ဒါပေမဲ့ message ကို ပြင်ပါ</li>\n<li><strong>squash (s)</strong>: ဒီ commit ရဲ့ changes တွေကို အရင် commit ထဲကို ပေါင်းထည့်ပါ၊ messages တွေကိုလည်း ပေါင်းစပ်ပါ</li>\n<li><strong>fixup (f)</strong>: squash နဲ့ ဆင်တူတယ်၊ ဒါပေမဲ့ ဒီ commit ရဲ့ message ကို ပယ်ဖျက်ပါ\n(တခြား actions တွေလည်း ရှိသေးတယ်၊ ဒါပေမဲ့ ဒါတွေက အသုံးများဆုံးပါ)</li>\n</ul>\n"
    }), createVNode($$Aside, {
      type: "tip",
      title: "မှတ်ချက်",
      "set:html": "<p>အဓိက ကတော့ rebase -i ကို သုံးပြီး commits တွေကို ပြန်လည် ပြင်ဆင်နိုင်တယ်။ အသုံးများတာကတော့ ဥပမာ commits ၃ ခုကို ၁ ခုထဲ အဖြစ် ပြန်ပြောင်းတာမျိုး၊ ကိုယ်လိုချင်တဲ့ commit ကို pick လုပ်ပြီး မလိုချင်တဲ့ commit ကို squash or fixup လုပ်လိုက်တာမျိုးပါ။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဥပမာ\">ဥပမာ:</h3><a class=\"sl-anchor-link\" href=\"#ဥပမာ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဥပမာ:”</span></a></div>\n"
    }), createVNode($$ContentImage, {
      src: gitRebase,
      alt: "rebasing"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">pick 37709fc WIP</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">pick 3980a2f fix typo  # ဒါကို 's' သို့မဟုတ် 'squash' လို့ ပြောင်းပါ</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">pick f259ca8 actual feature work # 'pick' ကို 'r' သို့မဟုတ် 'reword' လို့ ပြောင်းပါ</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"pick 37709fc WIPpick 3980a2f fix typo  # ဒါကို &#x27;s&#x27; သို့မဟုတ် &#x27;squash&#x27; လို့ ပြောင်းပါpick f259ca8 actual feature work # &#x27;pick&#x27; ကို &#x27;r&#x27; သို့မဟုတ် &#x27;reword&#x27; လို့ ပြောင်းပါ\"><div></div></button></div></figure></div>\n"
    }), createVNode($$Aside, {
      type: "tip",
      title: "ရှင်းလင်းချက်",
      "set:html": "<ul>\n<li>ပထမ စာကြောင်း က WIP ဆိုတဲ့ commit ကို ဘာမှ မပြောင်းဘဲ ထားတာပါ။</li>\n<li>ဒုတိယ စာကြောင်း က fix typo ဆိုတဲ့ commit ကို မယူတော့ဘဲ changes တွေကို သူ့အပေါ်က commit (WIP) ထဲပေါင်းထည့်လိုက်တာပါ။</li>\n<li>နောက်ဆုံးစာကြောင်း ကတော့ actual feature work ဆိုတဲ့ commit ကို ယူပြီး  reword ကတော့ commit message ကို ပြန်ပြင်မယ်လို့ ပြောတာပါ။</li>\n</ul><p>save ပြီးတဲ့ အခါ -</p><ul>\n<li>\n<p>Git က ဒီ commit အသစ်ရဲ့ message ကို ပြန်ရေးဖို့ editor တစ်ခု ပွင့်လာပေးပါလိမ့်မယ်။ အဲဒီမှာ WIP ရယ် fix typo ရယ် နှစ်ခုလုံးရဲ့ စာသားတွေ ပါနေတတ်ပြီး အဲဒီနှစ်ခုကို ပေါင်းပြီး ပိုရှင်းလင်းတဲ့ message အသစ်တစ်ခု ရေးလို့ရပါတယ်။</p>\n</li>\n<li>\n<p>ပြီးတော့ reword အတွက် Git က message ကို ပြန်ရေးဖို့ editor တစ်ခု ပွင့်လာပေးပါလိမ့်မယ်။ ‘actual feature work’ ဆိုတဲ့ message ကို ပြန်လည် ပြင်ဆင်နိုင်ပါတယ်။</p>\n</li>\n</ul>"
    }), "\n", createVNode($$Aside, {
      title: "သတိပြုရန်",
      type: "danger",
      "set:html": "<p>push ပြီးသား shared history တွေကို rebase လုံးဝ မလုပ်ပါနဲ့။ ဘာဖြစ်လို့လဲ ဆိုတော့ အဲ့ဒီ shared commits ပေါ် မူတည်ပြီး အလုပ်လုပ်နေတဲ့ သူတွေရှိနေနိုင်ပါတယ်။ rebase က လဲ commit history ကို ပြန်ပြင်တာဖြစ်လို့ ကိုယ့် teammates တွေမှာ ရှိတဲ့ history နဲ့ သိသိသာသာ ကွဲလွဲ သွားပါလိမ့်မယ်။</p><blockquote>\n<p><strong>push မလုပ်ရသေးတဲ့ local branch မှာသာ commits တွေရှုပ်နေရင် rebase လုပ်ပါ။</strong></p>\n</blockquote>"
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

const url = "src/content/docs/git-course/advanced-techniques/rebasing.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/advanced-techniques/rebasing.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/advanced-techniques/rebasing.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, gitRebaseMain, mainUpdate, switchToFeature, url };
