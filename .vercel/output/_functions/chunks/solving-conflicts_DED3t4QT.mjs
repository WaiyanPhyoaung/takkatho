import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import { c as conflicts } from './conflicts_RhS6PrEr.mjs';
import 'clsx';

const frontmatter = {
  "title": "Merge Conflicts များကို ဖြေရှင်းခြင်း",
  "description": "Merge Conflicts များကို ဖြေရှင်းခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "merge-conflict-ဆိုတာ-ဘာလဲ",
    "text": "Merge Conflict ဆိုတာ ဘာလဲ?"
  }, {
    "depth": 3,
    "slug": "conflict-ဖြစ်နေပြီလား-ဘယ်လိုသိမလဲ",
    "text": "Conflict ဖြစ်နေပြီလား ဘယ်လိုသိမလဲ"
  }, {
    "depth": 3,
    "slug": "conflict-ဖြေရှင်းနည်း",
    "text": "Conflict ဖြေရှင်းနည်း"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      type: "tip",
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>Merge လုပ်ရင် Conflict ဖြစ်တတ်တဲ့ အကြောင်းနဲ့ ဖြေရှင်းနည်းကို လေ့လာရန်</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"merge-conflict-ဆိုတာ-ဘာလဲ\">Merge Conflict ဆိုတာ ဘာလဲ?</h3><a class=\"sl-anchor-link\" href=\"#merge-conflict-ဆိုတာ-ဘာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Merge Conflict ဆိုတာ ဘာလဲ?”</span></a></div>\n<p>Merge Conflict ဆိုတာ Branch နှစ်ခုက တူညီတဲ့ ဖိုင်ထဲမှာ တူညီတဲ့ နေရာကို တစ်ယောက်တစ်မျိုးစီ ပြင်ထားတဲ့အခါ ဖြစ်ပါတယ်။ ဥပမာ - Branch A နဲ့ B က တူညီတဲ့ စာကြောင်းကို မတူညီတဲ့ ပုံစံနဲ့ ပြင်ထားတာ၊ သို့မဟုတ် Branch တစ်ခုက ဖိုင်ကို ဖျက်ပြီး နောက်တစ်ခုက ပြင်ထားတာမျိုး။ Git က ဘယ်ဟာကို ယူရမှန်း မသိတော့ပါ။</p>\n"
    }), createVNode($$Aside, {
      type: "danger",
      title: "မှတ်ချက်",
      "set:html": "<p>အပြိုင် အလုပ်လုပ်ရင် ဒါမျိုး ဖြစ်တတ်ပါတယ်။ ပုံမှန်ပါပဲ။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"conflict-ဖြစ်နေပြီလား-ဘယ်လိုသိမလဲ\">Conflict ဖြစ်နေပြီလား ဘယ်လိုသိမလဲ</h3><a class=\"sl-anchor-link\" href=\"#conflict-ဖြစ်နေပြီလား-ဘယ်လိုသိမလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Conflict ဖြစ်နေပြီလား ဘယ်လိုသိမလဲ”</span></a></div>\n<p>Merge လုပ်ရင် Git က Terminal မှာ “Conflict” ဖြစ်ကြောင်း ပြပါမယ်။ <code dir=\"auto\">git status</code> နဲ့ ကြည့်ရင်လည်း ပြဿနာရှိတဲ့ ဖိုင်တွေကို ပြပါမယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"conflict-ဖြေရှင်းနည်း\">Conflict ဖြေရှင်းနည်း</h3><a class=\"sl-anchor-link\" href=\"#conflict-ဖြေရှင်းနည်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Conflict ဖြေရှင်းနည်း”</span></a></div>\n<ol>\n<li><strong>ဖိုင်ကို ဖွင့်ပါ</strong>: Git က ပြဿနာဖြစ်တဲ့ နေရာကို <code dir=\"auto\">&#x3C;&#x3C;&#x3C;&#x3C;&#x3C;&#x3C;&#x3C;</code>, <code dir=\"auto\">=======</code>, <code dir=\"auto\">>>>>>>></code> အမှတ်အသားတွေနဲ့ ပြထားပါမယ်။</li>\n<li><strong>ပြင်ဆင်ပါ</strong>: ဘယ်ကုဒ်ကို ထားမလဲ ဆုံးဖြတ်ပြီး ပြင်ပါ။ <code dir=\"auto\">&#x3C;&#x3C;&#x3C;&#x3C;&#x3C;&#x3C;&#x3C;</code>, <code dir=\"auto\">=======</code>, <code dir=\"auto\">>>>>>>></code> အမှတ်အသားတွေ အားလုံးကို ဖျက်ပစ်ပါ။</li>\n<li><strong>Staging ထဲ ထည့်ပါ</strong>: <code dir=\"auto\">git add &#x3C;ဖိုင်နာမည်></code> နဲ့ ပြင်ပြီးသား ဖိုင်ကို ထည့်ပါ။</li>\n<li><strong>Commit လုပ်ပါ</strong>: <code dir=\"auto\">git commit</code> နဲ့ Merge ကို အပြီးသတ်ပါ။ (Git က Commit Message ကို အဆင်သင့် ထည့်ပေးထားပါမယ်)</li>\n</ol>\n"
    }), createVNode($$ContentImage, {
      src: conflicts,
      alt: "merge conflict"
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

const url = "src/content/docs/git-course/branches/solving-conflicts.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/branches/solving-conflicts.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/branches/solving-conflicts.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
