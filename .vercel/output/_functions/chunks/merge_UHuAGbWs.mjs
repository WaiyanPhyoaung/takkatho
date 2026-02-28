import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import { b as branches } from './branches_BNAwovXw.mjs';
import 'clsx';

const gitMerge = new Proxy({"src":"/_astro/git-merge.BXftVVhR.png","width":1298,"height":324,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/git-course/git-merge.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Branches များကို Merge လုပ်ခြင်း",
  "description": "Branches များကို Merge လုပ်ခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "merging-ဆိုတာ-ဘာလဲ-အလုပ်တွေကို-စုစည်းခြင်း",
    "text": "Merging ဆိုတာ ဘာလဲ? အလုပ်တွေကို စုစည်းခြင်း။"
  }, {
    "depth": 4,
    "slug": "merge-လုပ်မယ့်-command-git-merge-ပေါင်းထည့်ချင်တဲ့-branch-နာမည်",
    "text": "Merge လုပ်မယ့် Command: git merge <ပေါင်းထည့်ချင်တဲ့ Branch နာမည်>"
  }, {
    "depth": 4,
    "slug": "merge-လုပ်တာ-git-ဘယ်လို-လုပ်လဲ",
    "text": "Merge လုပ်တာ Git ဘယ်လို လုပ်လဲ:"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      type: "tip",
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>Branch တစ်ခုက ပြောင်းလဲမှုတွေကို နောက် Branch တစ်ခုထဲကို ဘယ်လို ပေါင်းစပ်\nထည့်သွင်းရမလဲ နားလည်ရန်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"merging-ဆိုတာ-ဘာလဲ-အလုပ်တွေကို-စုစည်းခြင်း\">Merging ဆိုတာ ဘာလဲ? အလုပ်တွေကို စုစည်းခြင်း။</h3><a class=\"sl-anchor-link\" href=\"#merging-ဆိုတာ-ဘာလဲ-အလုပ်တွေကို-စုစည်းခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Merging ဆိုတာ ဘာလဲ? အလုပ်တွေကို စုစည်းခြင်း။”</span></a></div>\n<p>ကိုယ် Feature အသစ်တစ်ခု ဒါမှမဟုတ် Bug ပြင်တာ လုပ်ထားတဲ့ Branch မှာ အလုပ်ပြီးသွားပြီဆိုရင် အဲဒီ Branch မှာ လုပ်ထားတဲ့ ပြောင်းလဲမှုတွေ အားလုံးကို ကိုယ့် Project ရဲ့ အဓိက Branch (ဥပမာ main Branch) ထဲကို ပြန်ထည့်ဖို့ လိုပါတယ်။ ဒါကို Merging လုပ်တယ် လို့ ခေါ်ပါတယ်။ ဒါဟာ ကိုယ် သီးခြားလုပ်ထားတဲ့ အလုပ်တွေ အားလုံးကို Project ရဲ့ အဓိက Code ထဲ ပြန်ထည့်လိုက်တာပါပဲ။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"merge-လုပ်မယ့်-command-git-merge-ပေါင်းထည့်ချင်တဲ့-branch-နာမည်\">Merge လုပ်မယ့် Command: <code dir=\"auto\">git merge &#x3C;ပေါင်းထည့်ချင်တဲ့ Branch နာမည်></code></h4><a class=\"sl-anchor-link\" href=\"#merge-လုပ်မယ့်-command-git-merge-ပေါင်းထည့်ချင်တဲ့-branch-နာမည်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Merge လုပ်မယ့် Command: git merge &#x3C;ပေါင်းထည့်ချင်တဲ့ Branch နာမည်>”</span></a></div>\n<p>ဘယ်လိုလုပ်မလဲ:</p>\n<ul>\n<li>ကိုယ် ပြောင်းလဲမှုတွေ ထည့်ချင်တဲ့ Branch (အများအားဖြင့် main Branch) ကို အရင် သွားပါ: <code dir=\"auto\">git switch main</code></li>\n<li>အဲဒီ Branch မှာ ရောက်နေပြီဆိုရင် အောက်က Command ကို ရိုက်ပါ: <code dir=\"auto\">git merge add-user-login</code> (ဒီ Command က “add-user-login” Branch က ပြောင်းလဲမှုတွေကို “main” Branch ထဲ ပေါင်းထည့်ပေးပါမယ်)။</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: branches,
      alt: "mergin branches"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"merge-လုပ်တာ-git-ဘယ်လို-လုပ်လဲ\">Merge လုပ်တာ Git ဘယ်လို လုပ်လဲ:</h4><a class=\"sl-anchor-link\" href=\"#merge-လုပ်တာ-git-ဘယ်လို-လုပ်လဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Merge လုပ်တာ Git ဘယ်လို လုပ်လဲ:”</span></a></div>\n<p>များသောအားဖြင့် git merge Command ရိုက်လိုက်ရင် Git က ကိုယ့် Branch နဲ့ ပေါင်းထည့်မယ့် Branch နှစ်ခုက ပြောင်းလဲမှုတွေကို သူ့ဘာသာ အလိုအလျောက် ပေါင်းစပ်ပေးလိုက်ပါတယ်။ တချို့ အခြေအနေတွေမှာတော့ Merge လုပ်လိုက်ပြီဆိုတဲ့ မှတ်တမ်းအနေနဲ့ Commit အသစ်တစ်ခု ဖန်တီးပေးတာမျိုးလည်း ရှိပါတယ်။</p>\n"
    }), createVNode($$ContentImage, {
      src: gitMerge,
      alt: "git merge"
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

const url = "src/content/docs/git-course/branches/merge.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/branches/merge.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/branches/merge.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
