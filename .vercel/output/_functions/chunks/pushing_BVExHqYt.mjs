import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "Pushing လုပ်ခြင်း",
  "description": "Pushing လုပ်ခြင်း"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "pushing-ဆိုတာ-ဘာလဲ",
    "text": "Pushing ဆိုတာ ဘာလဲ?"
  }, {
    "depth": 3,
    "slug": "အရေးကြီးတဲ့-အချက်များ",
    "text": "အရေးကြီးတဲ့ အချက်များ"
  }, {
    "depth": 2,
    "slug": "push-လုပ်နည်း",
    "text": "Push လုပ်နည်း"
  }, {
    "depth": 2,
    "slug": "ပထမဆုံးအကြိမ်-push-လုပ်ခြင်း--u-သုံးခြင်း",
    "text": "ပထမဆုံးအကြိမ် Push လုပ်ခြင်း (-u သုံးခြင်း):"
  }, {
    "depth": 4,
    "slug": "ကိုယ်တိုင်လုပ်ကြည့်ရန်",
    "text": "ကိုယ်တိုင်လုပ်ကြည့်ရန်:"
  }];
}
const gitPushExample = `
git push <remote-name> <branch-name>
`;
const gitPushMain = `
git push origin main
`;
const gitPush = `
git push -u origin main
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      type: "tip",
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>ကိုယ့်ကွန်ပျူတာ (Local) မှာရှိတဲ့ အပြောင်းအလဲတွေကို Online (Remote) Repository ဆီ ဘယ်လို ပို့တင်ရမလဲ သိရန်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"pushing-ဆိုတာ-ဘာလဲ\">Pushing ဆိုတာ ဘာလဲ?</h2><a class=\"sl-anchor-link\" href=\"#pushing-ဆိုတာ-ဘာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Pushing ဆိုတာ ဘာလဲ?”</span></a></div>\n<p><strong>Git Push</strong> ဆိုတာ ကိုယ့်ကွန်ပျူတာထဲမှာ Commit လုပ်ထားတဲ့ အပြောင်းအလဲတွေကို Online (Remote) Repository ဆီ ပို့တင်လိုက်တာပါ။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အရေးကြီးတဲ့-အချက်များ\">အရေးကြီးတဲ့ အချက်များ</h3><a class=\"sl-anchor-link\" href=\"#အရေးကြီးတဲ့-အချက်များ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အရေးကြီးတဲ့ အချက်များ”</span></a></div>\n<ul>\n<li>ကိုယ်လုပ်ထားတာတွေ <strong>Backup</strong> အဖြစ် သိမ်းဆည်းဖို့</li>\n<li>အခြားသူတွေနဲ့ ကိုယ့်အလုပ်တွေကို <strong>မျှဝေဖို့</strong></li>\n<li>ကိုယ့် Project ကို လူအများ မြင်သာအောင် လုပ်ဖို့</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"push-လုပ်နည်း\">Push လုပ်နည်း</h2><a class=\"sl-anchor-link\" href=\"#push-လုပ်နည်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Push လုပ်နည်း”</span></a></div>\n<p>အခြေခံ command ပုံစံ:</p>\n"
    }), createVNode(Code, {
      code: gitPushExample,
      title: "Bash"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>ဥပမာ:</p>\n"
    }), createVNode(Code, {
      code: gitPushMain,
      title: "Bash"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>ဒါက ကိုယ့် local မှာရှိတဲ့ main branch ရဲ့ အပြောင်းအလဲတွေကို origin လို့ နာမည်ပေးထားတဲ့ online repository ဆီ ပို့လိုက်တာပါ။</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"ပထမဆုံးအကြိမ်-push-လုပ်ခြင်း--u-သုံးခြင်း\">ပထမဆုံးအကြိမ် Push လုပ်ခြင်း (-u သုံးခြင်း):</h2><a class=\"sl-anchor-link\" href=\"#ပထမဆုံးအကြိမ်-push-လုပ်ခြင်း--u-သုံးခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ပထမဆုံးအကြိမ် Push လုပ်ခြင်း (-u သုံးခြင်း):”</span></a></div>\n<p>Branch တစ်ခုကို Online (Remote) ကို ပထမဆုံးအကြိမ် <code dir=\"auto\">push</code> လုပ်တဲ့အခါ <code dir=\"auto\">-u</code> (သို့မဟုတ် <code dir=\"auto\">--set-upstream</code>) ဆိုတဲ့ flag ကို ထပ်ထည့်ပေးပါ။</p>\n"
    }), createVNode(Code, {
      code: gitPush,
      title: "Bash"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p><code dir=\"auto\">-u</code> (သို့မဟုတ် <code dir=\"auto\">--set-upstream</code> ) က ကိုယ့် Local branch နဲ့ Remote branch ကို ချိတ်ဆက်ပေးပါတယ်။ ဒီလိုလုပ်ပြီးရင် နောက်ပိုင်းမှာ <code dir=\"auto\">git push</code> လို့ပဲ ရိုက်လိုက်ရုံနဲ့ ရပါပြီ။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"ကိုယ်တိုင်လုပ်ကြည့်ရန်\">ကိုယ်တိုင်လုပ်ကြည့်ရန်:</h4><a class=\"sl-anchor-link\" href=\"#ကိုယ်တိုင်လုပ်ကြည့်ရန်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ကိုယ်တိုင်လုပ်ကြည့်ရန်:”</span></a></div>\n<p>ကိုယ့် my-first-repo Project Folder ထဲက Terminal မှာ <code dir=\"auto\">git push -u origin main</code> လို့ ရိုက်ကြည့်ပါ။</p>\n<p>ပြီးရင် GitHub မှာ ကိုယ့် Project Page ကို Browser နဲ့ ဖွင့်ပြီး refresh လုပ်ကြည့်ပါ။ ကိုယ့် Code တွေနဲ့ ကိုယ် Commit လုပ်ထားခဲ့တဲ့ history လေးတွေ Online ပေါ် ရောက်နေတာ မြင်ရပါလိမ့်မယ်။</p>"
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

const url = "src/content/docs/git-course/remote-repository/pushing.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/remote-repository/pushing.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/remote-repository/pushing.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, gitPush, gitPushExample, gitPushMain, url };
