import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const threeStages = new Proxy({"src":"/_astro/three-stages.C14ygCd4.png","width":1679,"height":207,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/git-course/three-stages.png";
							}
							
							return target[name];
						}
					});

const status = new Proxy({"src":"/_astro/status.e9Q_6ru2.png","width":1602,"height":392,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/git-course/status.png";
							}
							
							return target[name];
						}
					});

const gitAdd = new Proxy({"src":"/_astro/git-add.C8qfIpev.png","width":1470,"height":364,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/git-course/git-add.png";
							}
							
							return target[name];
						}
					});

const gitCommit = new Proxy({"src":"/_astro/git-commit.DNfepgKe.png","width":1484,"height":294,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/git-course/git-commit.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "အလုပ်လုပ်တဲ့ နေရာသုံးမျိုးနဲ့ ကိုယ့်ရဲ့ ပထမဆုံး \"Commit\" ",
  "description": "အလုပ်လုပ်တဲ့ နေရာသုံးမျိုးနဲ့ ကိုယ့်ရဲ့ ပထမဆုံး \"Commit\" "
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "git-ရဲ့-အလုပ်လုပ်ပုံ-နေရာ-သုံးမျိုး",
    "text": "Git ရဲ့ အလုပ်လုပ်ပုံ: နေရာ သုံးမျိုး။"
  }, {
    "depth": 3,
    "slug": "၁-ကိုယ်-code-တွေ-ပြင်ဆင်နေတဲ့-နေရာ-working-directory",
    "text": "၁။ ကိုယ် Code တွေ ပြင်ဆင်နေတဲ့ နေရာ (Working Directory)"
  }, {
    "depth": 4,
    "slug": "git-status--project-ရဲ့-အခြေအနေကို-စစ်ဆေးခြင်း",
    "text": "git status : Project ရဲ့ အခြေအနေကို စစ်ဆေးခြင်း"
  }, {
    "depth": 3,
    "slug": "၂-နောက်တစ်ခါ-save-ဖို့-ပြင်ဆင်တဲ့-နေရာ-staging-area",
    "text": "၂။ နောက်တစ်ခါ Save ဖို့ ပြင်ဆင်တဲ့ နေရာ (Staging Area)"
  }, {
    "depth": 4,
    "slug": "git-add--staging-area-ထဲ-ထည့်သွင်းခြင်း",
    "text": "git add : Staging Area ထဲ ထည့်သွင်းခြင်း"
  }, {
    "depth": 3,
    "slug": "၃-ပြောင်းလဲမှုတွေကို-အပြီးအပိုင်-မှတ်တမ်းတင်တဲ့-နေရာ-repository",
    "text": "၃။ ပြောင်းလဲမှုတွေကို အပြီးအပိုင် မှတ်တမ်းတင်တဲ့ နေရာ (Repository)"
  }, {
    "depth": 4,
    "slug": "git-commit--ပြောင်းလဲမှုတွေကို-မှတ်တမ်းအဖြစ်-သိမ်းဆည်းခြင်း",
    "text": "git commit : ပြောင်းလဲမှုတွေကို မှတ်တမ်းအဖြစ် သိမ်းဆည်းခြင်း"
  }];
}
const config = `
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      type: "tip",
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>Git ရဲ့ အလုပ်လုပ်ပုံ သုံးဆင့်ကို နားလည်ဖို့နဲ့ ကိုယ့်ရဲ့ ပထမဆုံး “Commit” ကို\nလုပ်တတ်ဖို့။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"git-ရဲ့-အလုပ်လုပ်ပုံ-နေရာ-သုံးမျိုး\">Git ရဲ့ အလုပ်လုပ်ပုံ: နေရာ သုံးမျိုး။</h3><a class=\"sl-anchor-link\" href=\"#git-ရဲ့-အလုပ်လုပ်ပုံ-နေရာ-သုံးမျိုး\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Git ရဲ့ အလုပ်လုပ်ပုံ: နေရာ သုံးမျိုး။”</span></a></div>\n<p>Git မှာ ကျွန်တော်တို့ ပြောင်းလဲလိုက်တဲ့ Code တွေကို စနစ်တကျ မှတ်တမ်းတင်ဖို့အတွက် ဖြတ်သန်းရတဲ့ နေရာ သုံးခု ရှိပါတယ်။ ဒီနေရာတွေက တစ်ဆင့်ပြီး တစ်ဆင့် ဘယ်လို အလုပ်လုပ်လဲ ကြည့်ကြစို့။</p>\n"
    }), createVNode($$ContentImage, {
      src: threeStages,
      alt: "three stages"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"၁-ကိုယ်-code-တွေ-ပြင်ဆင်နေတဲ့-နေရာ-working-directory\">၁။ ကိုယ် Code တွေ ပြင်ဆင်နေတဲ့ နေရာ (Working Directory)</h3><a class=\"sl-anchor-link\" href=\"#၁-ကိုယ်-code-တွေ-ပြင်ဆင်နေတဲ့-နေရာ-working-directory\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “၁။ ကိုယ် Code တွေ ပြင်ဆင်နေတဲ့ နေရာ (Working Directory)”</span></a></div>\n<p>ဒီနေရာကတော့ ကိုယ့် Project Folder ထဲမှာ ကိုယ်က ဖိုင်တွေကို တိုက်ရိုက် ဖွင့်ပြီး Code တွေ ရေးနေတဲ့၊ ပြင်ဆင်နေတဲ့ အချိန် အခြေအနေပါ။ ကိုယ် လုပ်လိုက်တဲ့ ပြောင်းလဲမှုအသစ်တွေ အားလုံးက ဒီနေရာမှာ စတင် ပေါ်လာပါတယ်။</p>\n<p><strong>ကိုယ်တိုင်လုပ်ကြည့်ရန်:</strong></p>\n<p>my-first-repo Folder ထဲမှာ <code dir=\"auto\">README.md</code> ဆိုတဲ့ ဖိုင်တစ်ခု ဆောက်ပါ။ အထဲမှာ ‘My project’s first file.’ ဆိုတဲ့ စာသားလေး ထည့်ပြီး Save လိုက်ပါ။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"git-status--project-ရဲ့-အခြေအနေကို-စစ်ဆေးခြင်း\"><code dir=\"auto\">git status</code> : Project ရဲ့ အခြေအနေကို စစ်ဆေးခြင်း</h4><a class=\"sl-anchor-link\" href=\"#git-status--project-ရဲ့-အခြေအနေကို-စစ်ဆေးခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “git status : Project ရဲ့ အခြေအနေကို စစ်ဆေးခြင်း”</span></a></div>\n<p>ကိုယ့် Project ထဲမှာ ဘာတွေ ပြောင်းလဲထားလဲ၊ ဘာဖိုင်အသစ်တွေ ရှိနေသေးလဲ သိချင်ရင် <code dir=\"auto\">git status</code> ဆိုတဲ့ Command လေးကို Terminal မှာ ရိုက်ပြီး ကြည့်လို့ရပါတယ်။ <code dir=\"auto\">git status</code> က ကိုယ့် Project ထဲမှာ ဘယ်ဖိုင်တွေ ပြင်ထားလဲ၊ ဘယ်ဖိုင်အသစ်တွေ ထပ်ထည့်ထားလဲ ဆိုတာကို Git က ဘာတွေ မြင်နေလဲ အတိအကျ ပြပေးပါတယ်။ ဒါ့အပြင် ဘယ်ဖိုင်တွေကို နောက်တစ်ခါ Save ဖို့ ပြင်ဆင်ထားလဲ (Staged) ဆိုတာကိုလည်း ပြပါတယ်။ <code dir=\"auto\">git add</code> ဒါမှမဟုတ် <code dir=\"auto\">git commit</code> လို Command တွေ မသုံးခင် ကိုယ့် Project ရဲ့ အခြေအနေ ဘယ်လိုရှိလဲ သေချာ သိဖို့အတွက် <code dir=\"auto\">git status</code> ကို အမြဲတမ်း သုံးသင့်ပါတယ်။</p>\n<p>Terminal မှာ <code dir=\"auto\">git status</code> လို့ ရိုက်ပါ။ (အဲဒီအခါ <code dir=\"auto\">README.md</code> ကို “Untracked” လို့ ပြနေတာ တွေ့ရပါလိမ့်မယ်)။</p>\n"
    }), createVNode($$ContentImage, {
      src: status,
      alt: "git status"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"၂-နောက်တစ်ခါ-save-ဖို့-ပြင်ဆင်တဲ့-နေရာ-staging-area\">၂။ နောက်တစ်ခါ Save ဖို့ ပြင်ဆင်တဲ့ နေရာ (Staging Area)</h3><a class=\"sl-anchor-link\" href=\"#၂-နောက်တစ်ခါ-save-ဖို့-ပြင်ဆင်တဲ့-နေရာ-staging-area\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “၂။ နောက်တစ်ခါ Save ဖို့ ပြင်ဆင်တဲ့ နေရာ (Staging Area)”</span></a></div>\n<p>Staging Area ကတော့ ကိုယ် ပြင်ဆင်ထားတဲ့ ဖိုင်တွေ ဒါမှမဟုတ် ထည့်ထားတဲ့ ဖိုင်အသစ်တွေထဲက ဘယ်ဟာတွေကို နောက်တစ်ကြိမ် Save လုပ်တဲ့အခါ (Commit) ထဲမှာ ပါဝင်အောင် ရွေးချယ် ပြင်ဆင်တဲ့ နေရာပါ။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"git-add--staging-area-ထဲ-ထည့်သွင်းခြင်း\"><code dir=\"auto\">git add</code> : Staging Area ထဲ ထည့်သွင်းခြင်း</h4><a class=\"sl-anchor-link\" href=\"#git-add--staging-area-ထဲ-ထည့်သွင်းခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “git add : Staging Area ထဲ ထည့်သွင်းခြင်း”</span></a></div>\n<p>ကိုယ် Save လုပ်ချင်တဲ့ ဖိုင်တွေကို ဒီ Staging Area ထဲကို ပို့ဖို့အတွက် <code dir=\"auto\">git add \\&#x3C;file name></code> Command ကို သုံးရပါတယ်။ ဥပမာ- <code dir=\"auto\">README.md</code> ဆိုတဲ့ ဖိုင်ကို Save ချင်ရင် <code dir=\"auto\">git add README.md</code> လို့ ရိုက်ရပါတယ်။ <code dir=\"auto\">git status</code> ကို ထပ်ရိုက်ကြည့်ရင် ခုနက ဖိုင်တွေက Staging Area ထဲ ရောက်နေပြီဆိုတာ ‘Changes to be committed’ ဆိုပြီး တွေ့ရပါလိမ့်မယ်။ ဒီလို တစ်ဆင့်ခံပြီး ကိုယ် လိုချင်တဲ့ အပိုင်းလေးတွေကိုပဲ ရွေးချယ် ထည့်သွင်းတာက ကိုယ့် Project ရဲ့ ပြောင်းလဲမှု မှတ်တမ်း (History) ကို ပိုပြီး သပ်ရပ် စနစ်ကျစေပါတယ်။</p>\n"
    }), createVNode($$ContentImage, {
      src: gitAdd,
      alt: "git add"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"၃-ပြောင်းလဲမှုတွေကို-အပြီးအပိုင်-မှတ်တမ်းတင်တဲ့-နေရာ-repository\">၃။ ပြောင်းလဲမှုတွေကို အပြီးအပိုင် မှတ်တမ်းတင်တဲ့ နေရာ (Repository)</h3><a class=\"sl-anchor-link\" href=\"#၃-ပြောင်းလဲမှုတွေကို-အပြီးအပိုင်-မှတ်တမ်းတင်တဲ့-နေရာ-repository\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “၃။ ပြောင်းလဲမှုတွေကို အပြီးအပိုင် မှတ်တမ်းတင်တဲ့ နေရာ (Repository)”</span></a></div>\n<p>Staging Area ထဲမှာ ကိုယ် Save လုပ်ချင်တဲ့ အရာတွေ အားလုံး အဆင်သင့် ဖြစ်ပြီဆိုရင်တော့ အဲဒီ ပြင်ဆင်ထားတာတွေကို Repository လို့ခေါ်တဲ့ ကိုယ့် Project ရဲ့ အပြီးအပိုင် မှတ်တမ်းတိုက်ကြီးထဲကို ထည့်သွင်း Save လုပ်လို့ရပါပြီ။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"git-commit--ပြောင်းလဲမှုတွေကို-မှတ်တမ်းအဖြစ်-သိမ်းဆည်းခြင်း\"><code dir=\"auto\">git commit</code> : ပြောင်းလဲမှုတွေကို မှတ်တမ်းအဖြစ် သိမ်းဆည်းခြင်း</h4><a class=\"sl-anchor-link\" href=\"#git-commit--ပြောင်းလဲမှုတွေကို-မှတ်တမ်းအဖြစ်-သိမ်းဆည်းခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “git commit : ပြောင်းလဲမှုတွေကို မှတ်တမ်းအဖြစ် သိမ်းဆည်းခြင်း”</span></a></div>\n<p>Staging Area ထဲက ပြင်ဆင်ထားတာတွေကို Repository ထဲကို မှတ်တမ်းတစ်ခုအဖြစ် သိမ်းဆည်းဖို့အတွက် <code dir=\"auto\">git commit</code> Command ကို သုံးပါတယ်။ များသောအားဖြင့် <code dir=\"auto\">git commit -m \"ဒီ Save မှာ ဘာတွေ ပြောင်းလဲထားလဲဆိုတဲ့ စာသား\"</code> လို့ ရိုက်ပြီး Save လိုက်တာပါ။ <code dir=\"auto\">-m</code> နောက်က စာသားလေးက ဒီ Save Point (Commit) မှာ ကိုယ် ဘာတွေ လုပ်ခဲ့လဲဆိုတာကို အတိုချုပ်၊ ရှင်းရှင်းလင်းလင်း မှတ်ထားပေးတာပါ။ ဒီ Message က တကယ် အရေးကြီးလို့ သေချာ ရေးပေးသင့်ပါတယ်။ Commit လုပ်ပြီးသွားရင် <code dir=\"auto\">git status</code> ကို ပြန်ကြည့်ရင် အားလုံး စနစ်တကျ Save ပြီးသွားပြီဖြစ်ပြီး ‘nothing to commit, working tree clean’ လို့ ပြနေတာ တွေ့ရပါလိမ့်မယ်။</p>\n"
    }), createVNode($$ContentImage, {
      src: gitCommit,
      alt: "git commit"
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

const url = "src/content/docs/git-course/introduction/three-arena.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/introduction/three-arena.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/introduction/three-arena.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, config, Content as default, file, frontmatter, getHeadings, url };
