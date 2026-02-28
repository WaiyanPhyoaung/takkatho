import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "Advanced Techniques and Quick Fixes",
  "description": "Advanced Techniques and Quick Fixes"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "quick-fixes---commit-ပြင်ခြင်းနဲ့-local-changes-ကို-undo-လုပ်ခြင်း",
    "text": "Quick Fixes - Commit ပြင်ခြင်းနဲ့ Local Changes ကို Undo လုပ်ခြင်း"
  }, {
    "depth": 3,
    "slug": "git-commit---amend",
    "text": "git commit --amend"
  }, {
    "depth": 3,
    "slug": "git-reset-head-file",
    "text": "git reset HEAD <file>"
  }, {
    "depth": 3,
    "slug": "git-checkout----file-သတိထားပြီး-သုံးပါ",
    "text": "git checkout -- <file> (သတိထားပြီး သုံးပါ)"
  }];
}
const fileAdd = `
git add <file name>
git commit --amend
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>ဒီပိုင်းမှာ git commit ကို ပြင်နည်း၊ file တွေကို unstage လုပ်နည်း၊\nမသိမ်းရသေးတဲ့ local changes တွေကို ပယ်ဖျက်နည်းတွေကို သိရှိ နားလည်လာစေရန်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"quick-fixes---commit-ပြင်ခြင်းနဲ့-local-changes-ကို-undo-လုပ်ခြင်း\">Quick Fixes - Commit ပြင်ခြင်းနဲ့ Local Changes ကို Undo လုပ်ခြင်း</h2><a class=\"sl-anchor-link\" href=\"#quick-fixes---commit-ပြင်ခြင်းနဲ့-local-changes-ကို-undo-လုပ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Quick Fixes - Commit ပြင်ခြင်းနဲ့ Local Changes ကို Undo လုပ်ခြင်း”</span></a></div>\n"
    }), createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>နောက်ဆုံး commit ကို ပြင်ချင်တာ၊ file တွေကို unstage လုပ်ချင်တာ၊ မသိမ်းရသေးတဲ့\nlocal changes တွေကို ပယ်ဖျက်တာတွေကို နားလည်ရန်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"git-commit---amend\"><code dir=\"auto\">git commit --amend</code></h3><a class=\"sl-anchor-link\" href=\"#git-commit---amend\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “git commit --amend”</span></a></div>\n<p>နောက်ဆုံး commit ထဲကို ပြင်ချင်တာ၊ file တစ်ခု ထပ်ထည့်ချင်တာ၊ commit message မှာ စာလုံးပေါင်းမှားတာ ပြင်ချင်တာတွေကို ဒီ command နဲ့ လုပ်နိုင်ပါတယ်။</p>\n<p><strong>ဘယ်လိုလုပ်မလဲ</strong>:</p>\n<p>အကယ်၍ file တစ်ခု ထည့်ဖို့ မေ့သွားတယ်ဆိုရင်:</p>\n"
    }), createVNode(Code, {
      title: "Bash",
      code: fileAdd
    }), "\n", createVNode($$Aside, {
      type: "caution",
      title: "သတိပြုရန်",
      "set:html": "<p><code dir=\"auto\">git commit --amend</code> ကို push မလုပ်ရသေးတဲ့ commits တွေမှာပဲ သုံးပါ။ Amending က\nhistory ကို rewrites ပြန်လုပ်တာမလို့ push ပြီးသားဆိုရင် ပြဿနာ ဖြစ်နိုင်ပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"git-reset-head-file\"><code dir=\"auto\">git reset HEAD &#x3C;file></code></h3><a class=\"sl-anchor-link\" href=\"#git-reset-head-file\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “git reset HEAD &#x3C;file>”</span></a></div>\n<p>ဒါက file တစ်ခုကို <strong>stage</strong> မှာထည့်ထားတာ ပြန်ဖြုတ်တာပါ။ file ထဲက <strong>changes</strong> တွေက မပျောက်ပါဘူး။</p>\n<p>အဓိက သုံးတာက <code dir=\"auto\">git add</code> လုပ်ပြီးမှ မှားသွားတာတွေကို <strong>unstage</strong> ပြန်ဖြုတ်ချင်ရင် သုံးပါတယ်။</p>\n<p>Command: <code dir=\"auto\">git reset HEAD &#x3C;file နာမည်></code></p>\n<p>(အကုန်လုံးကို unstages လုပ်ချင်ရင် git reset HEAD ကို သုံးပါ)</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"git-checkout----file-သတိထားပြီး-သုံးပါ\"><code dir=\"auto\">git checkout -- &#x3C;file> (သတိထားပြီး သုံးပါ)</code></h3><a class=\"sl-anchor-link\" href=\"#git-checkout----file-သတိထားပြီး-သုံးပါ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “git checkout -- &#x3C;file> (သတိထားပြီး သုံးပါ)”</span></a></div>\n<p>ဒါက file တစ်ခုထဲက လက်ရှိပြင်ထားတဲ့ changes တွေကို လုံးဝ ပယ်ဖျက်ပစ်တာပါ။ file ကို last commit (HEAD) အတိုင်း ပြန်ပြောင်းပေးပါတယ်။</p>\n<p>file ထဲမှာ ပြောင်းလဲမှုတွေ မလိုချင်တော့ဘူးဆိုရင် သုံးပါတယ်။</p>\n<p>Command: <code dir=\"auto\">git checkout -- &#x3C;file နာမည်></code></p>\n"
    }), createVNode($$Aside, {
      type: "danger",
      title: "သတိပေးချက်!",
      "set:html": "<p>ဒီ command ကို သုံးရင် commit မလုပ်ရသေးတဲ့ changes တွေ အကုန်ပျက်သွားပါတယ်။ ပြန်ပြင်လို့ မရနိုင်တော့ပါဘူး။ ၁၀၀% သေချာမှ သုံးပါ။ (<code dir=\"auto\">git restore &#x3C;filename></code> က နည်းနည်းပိုလုံခြုံပြီး ပိုရှင်းလင်းပါတယ်။ ရနိုင်ရင် git restore ကို သုံးပါ)</p>"
    }), "\n", createVNode($$Aside, {
      title: "အနှစ်ချုပ်",
      "set:html": "<p><code dir=\"auto\">--amend</code> က last commit ကို ပြင်ဖို့၊ <code dir=\"auto\">reset HEAD</code> က stage မှာထည့်ထားတာ\nပြန်ဖြုတ်ဖို့၊ <code dir=\"auto\">checkout --</code>က commit မလုပ်ရသေးတဲ့ changes တွေကို ပယ်ဖျက်ဖို့\nသုံးပါ။</p>"
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

const url = "src/content/docs/git-course/advanced-techniques/quick-fixes.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/advanced-techniques/quick-fixes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/advanced-techniques/quick-fixes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, fileAdd, frontmatter, getHeadings, url };
