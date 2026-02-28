import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "အရေးကြီးမှတ်တိုင်များ - Releases များကို Tagging လုပ်ခြင်း",
  "description": "အရေးကြီးမှတ်တိုင်များ - Releases များကို Tagging လုပ်ခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "ထူးခြားသော-အချိန်များကို-မှတ်သားခြင်း-git-tag",
    "text": "ထူးခြားသော အချိန်များကို မှတ်သားခြင်း: git tag"
  }, {
    "depth": 3,
    "slug": "tags-များ-ဖန်တီးခြင်း",
    "text": "Tags များ ဖန်တီးခြင်း"
  }, {
    "depth": 3,
    "slug": "tags-များကို-ကြည့်ရှုခြင်း",
    "text": "Tags များကို ကြည့်ရှုခြင်း"
  }, {
    "depth": 3,
    "slug": "tags-များကို-မျှဝေခြင်း-remote-သို့-push-လုပ်ခြင်း",
    "text": "Tags များကို မျှဝေခြင်း (Remote သို့ Push လုပ်ခြင်း)"
  }];
}
const gitTag = `
git tag v1.0.0
`;
const gitTagToCommit = `
git tag v1.0.0 <commit-hash>
`;
const annotatedTag = `
git tag -a v1.0.0 -m "Version 1.0.1 release with bug fixes"
`;
const gitTagLists = `
git tag
`;
const pushTag = `
git push origin v1.0.0
`;
const pushAllTags = `
git push origin --tags
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>Project History မှာ အရေးကြီးတဲ့ နေရာများကို Tags တွေသုံးပြီး ဘယ်လိုမှတ်သားရမလဲဆိုတာ လေ့လာရန်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ထူးခြားသော-အချိန်များကို-မှတ်သားခြင်း-git-tag\">ထူးခြားသော အချိန်များကို မှတ်သားခြင်း: git tag</h3><a class=\"sl-anchor-link\" href=\"#ထူးခြားသော-အချိန်များကို-မှတ်သားခြင်း-git-tag\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ထူးခြားသော အချိန်များကို မှတ်သားခြင်း: git tag”</span></a></div>\n<p><strong>Tag ဆိုတာ ဘာလဲ?</strong></p>\n<ul>\n<li>သတ်မှတ်ထားတဲ့ commit တစ်ခုကို ညွှန်ပြတဲ့ အမှတ်အသားတစ်ခုပါ</li>\n<li>history မှာ အဓိပ္ပာယ်ရှိတဲ့ point တစ်ခုကို မှတ်သားဖို့ သုံးပါတယ်</li>\n<li>ဥပမာ - releases ထုတ်ဝေမှုများ (v1.0, v2.0.1)</li>\n</ul>\n<p><strong>ဘာကြောင့် သုံးရလဲ?</strong></p>\n<ul>\n<li>Code ရဲ့ တိတိကျကျသတ်မှတ်ထားတဲ့ version များကို လွယ်လွယ်ရှာဖွေနိုင်ရန်</li>\n<li>နောက်ကျရင် ပြန်ညွှန်းဖို့ လွယ်ကူစေရန်</li>\n</ul>\n<blockquote>\n<p>Project history စာအုပ်ထဲက အရေးကြီး point တစ်ခုပေါ်မှာ အမြဲတမ်း Bookmark ထားသလိုပါ</p>\n</blockquote>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"tags-များ-ဖန်တီးခြင်း\">Tags များ ဖန်တီးခြင်း</h3><a class=\"sl-anchor-link\" href=\"#tags-များ-ဖန်တီးခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Tags များ ဖန်တီးခြင်း”</span></a></div>\n<p><strong>1. ရိုးရှင်းသော Tag</strong></p>\n<p>လက်ရှိ commit ကို Tag လုပ်ခြင်း</p>\n"
    }), createVNode(Code, {
      code: gitTag,
      title: "Bash"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>specific commit ကို Tag လုပ်ခြင်း</p>\n"
    }), createVNode(Code, {
      code: gitTagToCommit,
      title: "Bash"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p><strong>2. အချက်အလက်ပါသော Tag (Annotated Tags)</strong></p>\n"
    }), createVNode(Code, {
      code: annotatedTag,
      title: "Bash"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"tags-များကို-ကြည့်ရှုခြင်း\">Tags များကို ကြည့်ရှုခြင်း</h3><a class=\"sl-anchor-link\" href=\"#tags-များကို-ကြည့်ရှုခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Tags များကို ကြည့်ရှုခြင်း”</span></a></div>\n"
    }), createVNode(Code, {
      code: gitTagLists,
      title: "Bash"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"tags-များကို-မျှဝေခြင်း-remote-သို့-push-လုပ်ခြင်း\">Tags များကို မျှဝေခြင်း (Remote သို့ Push လုပ်ခြင်း)</h3><a class=\"sl-anchor-link\" href=\"#tags-များကို-မျှဝေခြင်း-remote-သို့-push-လုပ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Tags များကို မျှဝေခြင်း (Remote သို့ Push လုပ်ခြင်း)”</span></a></div>\n<p>Tag သတ်မှတ်ပြီးပြီဆိုရင် Tags တွေကလဲ commits တွေလိုပဲ local မှာပဲရှိနေသေးတာ ဖြစ်ပါတယ်။ သူတို့ကို Push ဖို့ဆိုရင်:</p>\n<p><strong>သတ်မှတ်ထားတဲ့ Tag တစ်ခုကို Push လုပ်ခြင်း</strong></p>\n"
    }), createVNode(Code, {
      code: pushTag,
      title: "Bash"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p><strong>Tag အားလုံးကို Push လုပ်ခြင်း</strong></p>\n"
    }), createVNode(Code, {
      code: pushAllTags,
      title: "Bash"
    }), "\n", createVNode($$Aside, {
      title: "အနှစ်ချုပ်",
      "set:html": "<p><code dir=\"auto\">git tag</code> က အရေးကြီးတဲ့ commits (releases လိုမျိုး) ကို မှတ်သားပေးပါတယ်။ Releases တွေအတွက် <strong>Annotated Tags (-a -m)</strong> ကို သုံးပြီး မျှဝေဖို့နဲ့ <code dir=\"auto\">push</code> လုပ်ဖို့ မမေ့ပါနဲ့။</p>"
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

const url = "src/content/docs/git-course/advanced-techniques/tagging.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/advanced-techniques/tagging.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/advanced-techniques/tagging.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, annotatedTag, Content as default, file, frontmatter, getHeadings, gitTag, gitTagLists, gitTagToCommit, pushAllTags, pushTag, url };
