import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import { b as branches } from './branches_BNAwovXw.mjs';
import './git-ignore_DH6YxVlO.mjs';
import 'clsx';

const frontmatter = {
  "title": "Branches များကို မိတ်ဆက်ခြင်း",
  "description": "Branches များကို မိတ်ဆက်ခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "branch-ဆိုတာ-ဘာလဲ-သီးခြား-အလုပ်လုပ်တဲ့-လမ်းကြောင်းတစ်ခု",
    "text": "Branch ဆိုတာ ဘာလဲ? သီးခြား အလုပ်လုပ်တဲ့ လမ်းကြောင်းတစ်ခု။"
  }, {
    "depth": 3,
    "slug": "ကိုယ့်မှာ-ဘယ်-branch-တွေ-ရှိလဲ-ကြည့်ခြင်း-git-branch",
    "text": "ကိုယ့်မှာ ဘယ် Branch တွေ ရှိလဲ ကြည့်ခြင်း (git branch)"
  }, {
    "depth": 3,
    "slug": "branch-အသစ်-ဖန်တီးခြင်း-git-branch-branch-name",
    "text": "Branch အသစ် ဖန်တီးခြင်း (git branch <branch-name>)"
  }, {
    "depth": 3,
    "slug": "branch-ပြောင်းခြင်း-git-switch-branch-name",
    "text": "Branch ပြောင်းခြင်း (git switch <branch-name>)"
  }, {
    "depth": 3,
    "slug": "branch-အသစ်-လုပ်ပြီး-ချက်ချင်း-အဲဒီ-branch-ကို-သွားခြင်း-shortcut",
    "text": "Branch အသစ် လုပ်ပြီး ချက်ချင်း အဲဒီ Branch ကို သွားခြင်း (Shortcut)"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      type: "tip",
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>Branch ရဲ့ အဓိက သဘောတရားကို နားလည်ပြီး Branch အသစ်တွေ ဘယ်လို ဖန်တီးမလဲ၊ Branch\nတစ်ခုကနေ နောက်တစ်ခုကို ဘယ်လို ပြောင်းရမလဲ နားလည်ရန်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"branch-ဆိုတာ-ဘာလဲ-သီးခြား-အလုပ်လုပ်တဲ့-လမ်းကြောင်းတစ်ခု\">Branch ဆိုတာ ဘာလဲ? သီးခြား အလုပ်လုပ်တဲ့ လမ်းကြောင်းတစ်ခု။</h3><a class=\"sl-anchor-link\" href=\"#branch-ဆိုတာ-ဘာလဲ-သီးခြား-အလုပ်လုပ်တဲ့-လမ်းကြောင်းတစ်ခု\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Branch ဆိုတာ ဘာလဲ? သီးခြား အလုပ်လုပ်တဲ့ လမ်းကြောင်းတစ်ခု။”</span></a></div>\n<p>ကျွန်တော်တို့ Project တစ်ခုကို စလုပ်တယ်ဆိုပါစို့။ အဲဒါက အဓိက လမ်းကြောင်းကြီးပေါ့။ အခု Feature အသစ်တစ်ခု ထပ်ထည့်ချင်တယ်။ အဲဒီ Feature က Project ရဲ့ အဓိက လမ်းကြောင်းကြီးကို မထိခိုက်စေဘဲ သီးသန့် လုပ်ချင်တယ်။ အဲဒီအခါ Branch ဆိုတဲ့ အရာကို သုံးလို့ရပါတယ်။ Branch ဆိုတာ ကိုယ့် Project Code ရဲ့ နောက်ထပ် Copy လိုမျိုးပါပဲ။ အဲဒီ မိတ္တူ ပေါ်မှာ ကိုယ်က အဓိက Code (Main branch)ကို မထိဘဲ လွတ်လွတ်လပ်လပ် အလုပ်လုပ်လို့ ရပါတယ်။</p>\n<p>Branch တွေ သုံးတာက ဘာလို့လဲဆိုတော့:</p>\n<ul>\n<li>Feature အသစ်တွေကို စိတ်ကြိုက် ရေးကြည့်ဖို့။</li>\n<li>Project ရဲ့ အဆင်ပြေနေပြီးသား Code တွေကို မထိဘဲ အမှားတွေ ပြင်ဖို့။</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: branches,
      alt: "git branches"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ကိုယ့်မှာ-ဘယ်-branch-တွေ-ရှိလဲ-ကြည့်ခြင်း-git-branch\">ကိုယ့်မှာ ဘယ် Branch တွေ ရှိလဲ ကြည့်ခြင်း (<code dir=\"auto\">git branch</code>)</h3><a class=\"sl-anchor-link\" href=\"#ကိုယ့်မှာ-ဘယ်-branch-တွေ-ရှိလဲ-ကြည့်ခြင်း-git-branch\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ကိုယ့်မှာ ဘယ် Branch တွေ ရှိလဲ ကြည့်ခြင်း (git branch)”</span></a></div>\n<p>ကိုယ့် Project မှာ ကိုယ် ဘယ် Branch တွေ ဖန်တီးထားလဲဆိုတာ သိချင်ရင် Terminal မှာ <code dir=\"auto\">git branch</code> လို့ ရိုက်ကြည့်ပါ။ ဒါက Branch တွေ အားလုံးကို ပြပေးပြီး ကိုယ် လက်ရှိ လုပ်နေတဲ့ Branch ကိုတော့ * လေးနဲ့ ပြပါလိမ့်မယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"branch-အသစ်-ဖန်တီးခြင်း-git-branch-branch-name\">Branch အသစ် ဖန်တီးခြင်း (<code dir=\"auto\">git branch &#x3C;branch-name></code>)</h3><a class=\"sl-anchor-link\" href=\"#branch-အသစ်-ဖန်တီးခြင်း-git-branch-branch-name\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Branch အသစ် ဖန်တီးခြင်း (git branch &#x3C;branch-name>)”</span></a></div>\n<p>Branch အသစ်တစ်ခု လုပ်ချင်ရင် <code dir=\"auto\">git branch &#x3C;ကိုယ်ပေးချင်တဲ့ နာမည်></code> လို့ ရိုက်ပါ။ ဥပမာ - <code dir=\"auto\">git branch add-user-login</code> လို့ ရိုက်ရင် “add-user-login” ဆိုတဲ့ Branch အသစ် ရပါပြီ။ ဒါပေမဲ့ ကိုယ်က အဲဒီ Branch ကို ချက်ချင်း ရောက်သွားမှာ မဟုတ်သေးပါဘူး။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"branch-ပြောင်းခြင်း-git-switch-branch-name\">Branch ပြောင်းခြင်း (<code dir=\"auto\">git switch &#x3C;branch-name></code>)</h3><a class=\"sl-anchor-link\" href=\"#branch-ပြောင်းခြင်း-git-switch-branch-name\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Branch ပြောင်းခြင်း (git switch &#x3C;branch-name>)”</span></a></div>\n<p>ဖန်တီးထားတဲ့ Branch အသစ် ဒါမှမဟုတ် တခြား Branch တစ်ခုကို ပြောင်းချင်ရင် <code dir=\"auto\">git switch &#x3C;သွားချင်တဲ့ Branch နာမည်></code> Command ကို သုံးရပါတယ်။ ဥပမာ - <code dir=\"auto\">git switch add-user-login</code> လို့ ရိုက်ရင် ကိုယ် အခု “add-user-login” Branch ကို ရောက်သွားပါပြီ။ (ကိုယ့် Project ဖိုင်တွေလည်း အဲဒီ Branch ရဲ့ နောက်ဆုံး အခြေအနေအတိုင်း ပြောင်းသွားပါလိမ့်မယ်။)</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"branch-အသစ်-လုပ်ပြီး-ချက်ချင်း-အဲဒီ-branch-ကို-သွားခြင်း-shortcut\">Branch အသစ် လုပ်ပြီး ချက်ချင်း အဲဒီ Branch ကို သွားခြင်း (Shortcut)</h3><a class=\"sl-anchor-link\" href=\"#branch-အသစ်-လုပ်ပြီး-ချက်ချင်း-အဲဒီ-branch-ကို-သွားခြင်း-shortcut\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Branch အသစ် လုပ်ပြီး ချက်ချင်း အဲဒီ Branch ကို သွားခြင်း (Shortcut)”</span></a></div>\n<p>Branch အသစ်တစ်ခု ဖန်တီးပြီးတာနဲ့ အဲဒီ Branch ကို ချက်ချင်း ရောက်သွားချင်တယ်ဆိုရင် <code dir=\"auto\">git switch -c &#x3C;Branch နာမည်အသစ်></code> ဆိုတဲ့ Command ကို သုံးလို့ရပါတယ်။ ဥပမာ - <code dir=\"auto\">git switch -c new-idea-branch</code> လို့ ရိုက်လိုက်တာနဲ့ “new-idea-branch” ဆိုတဲ့ Branch ကို ဖန်တီးပြီး အဲဒီကို ရောက်သွားပါပြီ။</p>"
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

const url = "src/content/docs/git-course/branches/branches-introduction.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/branches/branches-introduction.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/branches/branches-introduction.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
