import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import './Content-image_C5QzPmj4.mjs';
import './conflicts_RhS6PrEr.mjs';
import 'clsx';

const frontmatter = {
  "title": "အလုပ်ပြီးသွားတဲ့ Branch တွေကို ရှင်းလင်းခြင်း",
  "description": "အလုပ်ပြီးသွားတဲ့ Branch တွေကို ရှင်းလင်းခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "ဘာလို့-branch-တွေကို-ဖျက်သင့်လဲ",
    "text": "ဘာလို့ Branch တွေကို ဖျက်သင့်လဲ?"
  }, {
    "depth": 3,
    "slug": "ပေါင်းပြီးသား-branch-တွေဖျက်နည်း-git-branch--d-branch-name",
    "text": "ပေါင်းပြီးသား Branch တွေဖျက်နည်း: git branch -d <branch-name>"
  }, {
    "depth": 3,
    "slug": "အတင်းအကျပ်-ဖျက်နည်း-git-branch--d-branch-name",
    "text": "အတင်းအကျပ် ဖျက်နည်း: git branch -D <branch-name>"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      type: "tip",
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>မလိုအပ်တော့တဲ့ Branch တွေ ဖျက်နည်း လေ့လာရန်</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဘာလို့-branch-တွေကို-ဖျက်သင့်လဲ\">ဘာလို့ Branch တွေကို ဖျက်သင့်လဲ?</h3><a class=\"sl-anchor-link\" href=\"#ဘာလို့-branch-တွေကို-ဖျက်သင့်လဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘာလို့ Branch တွေကို ဖျက်သင့်လဲ?”</span></a></div>\n<p>Branch တစ်ခုကို main ထဲ ပေါင်းပြီးရင် အဲဒီ Branch က မလိုအပ်တော့ပါဘူး။ မလိုတဲ့ Branch တွေ ဖျက်ထားတာက Project ကို သပ်ရပ်စေပြီး ရှုပ်ထွေးမှု မဖြစ်စေပါဘူး။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ပေါင်းပြီးသား-branch-တွေဖျက်နည်း-git-branch--d-branch-name\">ပေါင်းပြီးသား Branch တွေဖျက်နည်း: <code dir=\"auto\">git branch -d &#x3C;branch-name></code></h3><a class=\"sl-anchor-link\" href=\"#ပေါင်းပြီးသား-branch-တွေဖျက်နည်း-git-branch--d-branch-name\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ပေါင်းပြီးသား Branch တွေဖျက်နည်း: git branch -d &#x3C;branch-name>”</span></a></div>\n<p><code dir=\"auto\">-d</code> က Branch ကို စိတ်ချရစွာ ဖျက်ပေးပါတယ်။ Git က Branch ကို မဖျက်ခင် အလုပ်တွေ အကုန် ပေါင်းပြီးပြီလား စစ်ပေးပါတယ်။</p>\n<p><strong>ဘယ်လိုလုပ်မလဲ</strong>:</p>\n<ol>\n<li>ဖျက်မယ့် Branch ကနေ အရင်ထွက်ပါ (ဥပမာ <code dir=\"auto\">git switch main</code>)</li>\n<li><code dir=\"auto\">git branch -d add-user-login</code> လို့ ရိုက်ပါ</li>\n</ol>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အတင်းအကျပ်-ဖျက်နည်း-git-branch--d-branch-name\">အတင်းအကျပ် ဖျက်နည်း: <code dir=\"auto\">git branch -D &#x3C;branch-name></code></h3><a class=\"sl-anchor-link\" href=\"#အတင်းအကျပ်-ဖျက်နည်း-git-branch--d-branch-name\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အတင်းအကျပ် ဖျက်နည်း: git branch -D &#x3C;branch-name>”</span></a></div>\n<p><code dir=\"auto\">-D</code> (အကြီး D) က Branch ကို ပေါင်းပြီးပြီလား မပေါင်းရသေးဘူးလား မစစ်ဘဲ ဖျက်ပစ်ပါတယ်။ Branch ထဲက အလုပ်တွေ လုံးဝ မလိုချင်တော့ဘူးဆိုမှသာ သုံးပါ။</p>\n"
    }), createVNode($$Aside, {
      title: "အနှစ်ချုပ်",
      "set:html": "<ol>\n<li><strong>Branch တွေ အများကြီး ခွဲပါ</strong>: Branch တွေ ခွဲရတာက လွယ်ပါတယ်။ အလုပ်အသစ်\nသေးသေးလေး တစ်ခု စတိုင်း Branch တစ်ခု ခွဲပြီး လုပ်ပါ။</li>\n</ol><br><ol start=\"2\">\n<li><strong>main Branch ကို ဂရုစိုက်ပါ</strong>: ကိုယ့်ရဲ့ အဓိက Branch (များသောအားဖြင့်\nmain) ကို အမြဲ သန့်ရှင်းပြီး အဆင်ပြေ၊ အလုပ်လုပ်နေတဲ့ အခြေအနေမှာ ထားပါ။</li>\n</ol><br><ol start=\"3\">\n<li><strong>Conflicts တွေက စိန်ခေါ်မှုလေးတွေပါ</strong>: ဒါတွေက ပြဿနာကြီးတွေ မဟုတ်ပါဘူး။\nစိတ်အေးအေးထားပြီး ဖိုင်ကို ဖွင့်၊ ပြင်၊ Save လုပ်လိုက်ရင် ရှင်းသွားပါတယ်။</li>\n</ol><br><ol start=\"4\">\n<li><strong>Merge လုပ်ရင် သေချာ သိပါစေ</strong>: ကိုယ် ဘယ် Branch မှာ ရောက်နေလဲ၊ ဘယ် Branch\nကနေ ပေါင်းထည့်နေလဲဆိုတာကို Command မရိုက်ခင် သေချာ စစ်ဆေးပါ။</li>\n</ol>"
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

const url = "src/content/docs/git-course/branches/deleting-branches.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/branches/deleting-branches.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/branches/deleting-branches.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
