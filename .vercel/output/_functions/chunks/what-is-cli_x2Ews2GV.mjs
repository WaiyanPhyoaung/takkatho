import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "Command Line ဆိုတာ ဘာလဲ?",
  "description": "GUI (Graphical User Interface) နဲ့ CLI (Command Line Interface) ကွာခြားချက်များကို လေ့လာခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "gui-graphical-user-interface",
    "text": "GUI (Graphical User Interface)"
  }, {
    "depth": 3,
    "slug": "cli-command-line-interface",
    "text": "CLI (Command Line Interface)"
  }, {
    "depth": 3,
    "slug": "ဘာကြောင့်-cli-ကို-လေ့လာသင့်တာလဲ",
    "text": "ဘာကြောင့် CLI ကို လေ့လာသင့်တာလဲ?"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "မင်္ဂလာပါ",
      "set:html": "<p>ဒီ Course လေးကနေ ကြိုဆိုပါတယ်။ Hacker တွေရိုက်နေကျ Command Line အမည်းရောင် Screen ကြီးကို ဘယ်လို သုံးရမလဲဆိုတာကို လေ့လာသွားမှာပါ။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"gui-graphical-user-interface\">GUI (Graphical User Interface)</h3><a class=\"sl-anchor-link\" href=\"#gui-graphical-user-interface\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “GUI (Graphical User Interface)”</span></a></div>\n<p>ယေဘူယျအားဖြင့် ကွန်ပျူတာကို သုံးတဲ့အခါ Mouse ကိုသုံးပြီး Folder တွေကို နှိပ်ဝင်တယ်၊ <code dir=\"auto\">Right Click</code> > <code dir=\"auto\">New Folder</code> နဲ့ ဖိုင်အသစ်တွေ ဆောက်ကြပါတယ်။ ပုံလေးတွေ၊ ခလုတ်လေးတွေပါတဲ့ အတွက် သုံးရတာလွယ်ကူပါတယ်။ အဲ့ဒါကို <strong>GUI (Graphical User Interface)</strong> လို့ခေါ်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"cli-command-line-interface\">CLI (Command Line Interface)</h3><a class=\"sl-anchor-link\" href=\"#cli-command-line-interface\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “CLI (Command Line Interface)”</span></a></div>\n<p>CLI ကတော့ Mouse ကို မသုံးဘဲ စာသား (Commands) တွေ ရိုက်ထည့်ပြီး ကွန်ပျူတာကို ခိုင်းစေတာပါ။ မြင်ယောင်ကြည့်ရင် ရုပ်ရှင်တွေထဲမှာ Hacker တွေ စာတွေအမြန်ရိုက်ပြီး အမည်းရောင် screen ကြီးမှာ အလုပ်လုပ်နေတာမျိုးပါ။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဘာကြောင့်-cli-ကို-လေ့လာသင့်တာလဲ\">ဘာကြောင့် CLI ကို လေ့လာသင့်တာလဲ?</h3><a class=\"sl-anchor-link\" href=\"#ဘာကြောင့်-cli-ကို-လေ့လာသင့်တာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘာကြောင့် CLI ကို လေ့လာသင့်တာလဲ?”</span></a></div>\n<ul>\n<li>✅ <strong>မြန်ဆန်တယ်:</strong> Mouse နဲ့ လိုက်ရှာနှိပ်နေတာထက်စာရင် Command သိထားရင် ပိုမြန်ပါတယ်။</li>\n<li>✅ <strong>Automation:</strong> အလုပ်တစ်ခုတည်းကို ခဏခဏလုပ်ရမယ်ဆိုရင် Script လေးပါ ရေးထားလို့ရသွားပါပြီ။</li>\n<li>✅ <strong>Server တွေမှာ အခရာ:</strong> အပြင်က Server (ဥပမာ - AWS, DigitalOcean) တွေကို လှမ်းချိတ်ရင် GUI (ပုံတွေ) မပါဘဲ CLI သီးသန့်ပဲ ပါပါတယ်။</li>\n<li>✅ <strong>Developer Tool များ:</strong> Git, NPM, Docker, Node.js စတဲ့ ခေတ်မီ Tool တွေ အားလုံးက CLI ကို မဖြစ်မနေ အသုံးပြုရပါတယ်။</li>\n</ul>"
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

const url = "src/content/docs/cli/introduction/what-is-cli.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/cli/introduction/what-is-cli.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/cli/introduction/what-is-cli.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
