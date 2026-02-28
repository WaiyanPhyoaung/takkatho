import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "Published Commits များကို ပြန်ပြင်ခြင်း",
  "description": "Published Commits များကို ပြန်ပြင်ခြင်း"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "commit-ကို-ပြန်ပြင်ခြင်း-git-revert",
    "text": "Commit ကို ပြန်ပြင်ခြင်း: git revert"
  }, {
    "depth": 3,
    "slug": "ဘယ်လိုလုပ်မလဲ",
    "text": "ဘယ်လိုလုပ်မလဲ"
  }, {
    "depth": 2,
    "slug": "revert-နဲ့-reset-ကွာခြားချက်",
    "text": "revert နဲ့ reset ကွာခြားချက်"
  }];
}
const gitRevert = `
git revert <commit ID>
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p><strong>published(pushed)</strong> လုပ််ပြီးသား Commit တစ်ခုကို ဘေးကင်းစွာ ပြန်ပြင်နည်း။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"commit-ကို-ပြန်ပြင်ခြင်း-git-revert\">Commit ကို ပြန်ပြင်ခြင်း: git revert</h2><a class=\"sl-anchor-link\" href=\"#commit-ကို-ပြန်ပြင်ခြင်း-git-revert\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Commit ကို ပြန်ပြင်ခြင်း: git revert”</span></a></div>\n<p><strong><code dir=\"auto\">git revert</code> ဆိုတာ ဘာလဲ?</strong></p>\n<ul>\n<li>အရင် Commit တစ်ခုရဲ့ ပြောင်းလဲမှုတွေကို ပြန်ဖျက်တဲ့ Commit အသစ်တစ်ခု ဖန်တီးပေးတာပါ</li>\n<li>အရင် Commit ကို မဖျက်ပါဘူး</li>\n<li>ဆန့်ကျင်ဘက် ပြောင်းလဲမှုတွေပါတဲ့ Commit အသစ်တစ်ခု ထပ်ထည့်ပေးတာပါ</li>\n</ul>\n<p><strong>ဘာကြောင့် သုံးရလဲ?</strong></p>\n<ul>\n<li><code dir=\"auto\">push</code> ပြီးသားမလို့ တခြားသူတွေ သုံးနေနိုင်ပါတယ်။ အဲ့တာကြောင့် pushed ပြီးသား commit ကို တိုက်ရိုက်ပြန်ပြင်မဲ့ အစား အသစ် commit လုပ်ပြီး ပြန်ပြင်တာပါ</li>\n<li><strong>commit history</strong> တွေကို မဖျက်ဘဲ ထိန်းသိမ်းထားပါတယ်။ စိတ်ချရတဲ့ နည်းလမ်း\tဖြစ်ပါတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဘယ်လိုလုပ်မလဲ\">ဘယ်လိုလုပ်မလဲ</h3><a class=\"sl-anchor-link\" href=\"#ဘယ်လိုလုပ်မလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘယ်လိုလုပ်မလဲ”</span></a></div>\n<ol>\n<li>\n<p>ပြန်ပြင်လိုတဲ့ Commit ရဲ့ ID ကို ရှာပါ</p>\n<ul>\n<li>git log သုံးပြီး Commit ID ကို ရှာပါ (ဥပမာ - a1b2c3d)</li>\n</ul>\n</li>\n<li>\n<p><strong>Revert</strong> လုပ်ပါ</p>\n</li>\n</ol>\n"
    }), createVNode(Code, {
      code: gitRevert,
      title: "Bash"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<ol start=\"3\">\n<li>\n<p>Commit Message ရေးပါ</p>\n<ul>\n<li>Git က Commit Message ရေးဖို့ Editor ဖွင့်ပေးပါမယ်</li>\n<li>များသောအားဖြင့် <code dir=\"auto\">Revert 'original Commit Message'</code> လို့ အဆင်သင့် ရေးပေးထားပါတယ်</li>\n<li>save ပြီး ပိတ်လိုက်ပါ</li>\n</ul>\n</li>\n<li>\n<p>push လုပ်ပါ</p>\n<ul>\n<li>git push သုံးပြီး Revert Commit ကို အွန်လိုင်းပေါ် တင်ပါ</li>\n</ul>\n</li>\n</ol>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"revert-နဲ့-reset-ကွာခြားချက်\">revert နဲ့ reset ကွာခြားချက်</h2><a class=\"sl-anchor-link\" href=\"#revert-နဲ့-reset-ကွာခြားချက်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “revert နဲ့ reset ကွာခြားချက်”</span></a></div>\n<p><strong><code dir=\"auto\">revert</code> - shared branch တွေအတွက် စိတ်ချရပါတယ်</strong></p>\n<ul>\n<li>commit အသစ် ထပ်ထည့်ပေးတာပါ</li>\n</ul>\n<p><strong><code dir=\"auto\">reset</code> - shared branch တွေအတွက် အန္တရာယ်ရှိပါတယ်</strong></p>\n<ul>\n<li>commits တွေကို rewrite ပြန်ရေးတာမလို့ အတူအလုပ်လုပ်သူတွေကို ရှုပ်ထွေးစေပါတယ်</li>\n</ul>\n"
    }), createVNode($$Aside, {
      "set:html": "<p><code dir=\"auto\">git revert &#x3C;commit-id></code> က shared branch (already pushed to remote) ပေါ်က ပြောင်းလဲမှုတွေကို ပြန်ပြင်ဖို့ အကောင်းဆုံး နည်းလမ်းပါ။ ပြဿနာရှိတဲ့ Commit ရဲ့ ဆန့်ကျင်ဘက် ပြောင်းလဲမှုတွေပါတဲ့ Commit အသစ်တစ်ခု ဖန်တီးပေးပါတယ်။</p>"
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

const url = "src/content/docs/git-course/advanced-techniques/reverting.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/advanced-techniques/reverting.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/advanced-techniques/reverting.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, gitRevert, url };
