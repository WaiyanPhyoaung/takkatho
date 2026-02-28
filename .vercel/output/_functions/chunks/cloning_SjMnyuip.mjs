import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import './Content-image_C5QzPmj4.mjs';
import 'clsx';

const frontmatter = {
  "title": "Repository များကို ကူးယူခြင်း (Cloning)",
  "description": "အခြားသူများ၏ Repository များကို ကိုယ့်စက်ထဲသို့ ကူးယူခြင်း"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "cloning-ဆိုတာဘာလဲ",
    "text": "Cloning ဆိုတာဘာလဲ?"
  }, {
    "depth": 2,
    "slug": "ဘာကြောင့်-clone-လုပ်ကြလဲ",
    "text": "ဘာကြောင့် Clone လုပ်ကြလဲ?"
  }, {
    "depth": 2,
    "slug": "clone-လုပ်နည်း",
    "text": "Clone လုပ်နည်း"
  }, {
    "depth": 3,
    "slug": "လုပ်ဆောင်ရန်-အဆင့်များ",
    "text": "လုပ်ဆောင်ရန် အဆင့်များ"
  }, {
    "depth": 2,
    "slug": "လက်တွေ့စမ်းသပ်ကြည့်ရန်",
    "text": "လက်တွေ့စမ်းသပ်ကြည့်ရန်"
  }];
}
const cloneSample = `
git clone <remote-url>
`;
const clone = `
git clone https://github.com/SomeUser/SomeAwesomeProject.git
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      type: "tip",
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>ရှိပြီးသား <code dir=\"auto\">Remote Repository</code> တစ်ခုကို ကိုယ့်ကွန်ပျူတာထဲသို့ ဘယ်လိုကူးယူရမလဲ\nလေ့လာရန်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"cloning-ဆိုတာဘာလဲ\">Cloning ဆိုတာဘာလဲ?</h2><a class=\"sl-anchor-link\" href=\"#cloning-ဆိုတာဘာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Cloning ဆိုတာဘာလဲ?”</span></a></div>\n<p><strong>Cloning</strong> ဆိုတာ အွန်လိုင်းပေါ်က Repository တစ်ခုလုံးကို ကိုယ့်ကွန်ပျူတာထဲသို့ ကူးယူလိုက်တာပါ။ ၎င်းတွင်:</p>\n<ul>\n<li>ဖိုင်အားလုံး</li>\n<li>မှတ်တမ်းအားလုံး (history)</li>\n<li><code dir=\"auto\">Branch</code> အားလုံး</li>\n<li>Remote နှင့် ချိတ်ဆက်မှု (<code dir=\"auto\">origin</code> အဖြစ် အလိုအလျောက် ချိတ်ဆက်ပေး)</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"ဘာကြောင့်-clone-လုပ်ကြလဲ\">ဘာကြောင့် Clone လုပ်ကြလဲ?</h2><a class=\"sl-anchor-link\" href=\"#ဘာကြောင့်-clone-လုပ်ကြလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘာကြောင့် Clone လုပ်ကြလဲ?”</span></a></div>\n<ol>\n<li>ရှိပြီးသား <code dir=\"auto\">Project</code> တစ်ခုကို စတင်အလုပ်လုပ်ရန်</li>\n<li><code dir=\"auto\">Open-source Project</code> များကို ကူညီရေးသားရန်</li>\n<li>အဖွဲ့ဝင်များ၏ <code dir=\"auto\">Code</code> ကို ကြည့်ရှုလေ့လာရန်</li>\n</ol>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"clone-လုပ်နည်း\">Clone လုပ်နည်း</h2><a class=\"sl-anchor-link\" href=\"#clone-လုပ်နည်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Clone လုပ်နည်း”</span></a></div>\n<p>အခြေခံ command ပုံစံ:</p>\n"
    }), createVNode(Code, {
      code: cloneSample,
      title: "Bash"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"လုပ်ဆောင်ရန်-အဆင့်များ\">လုပ်ဆောင်ရန် အဆင့်များ</h3><a class=\"sl-anchor-link\" href=\"#လုပ်ဆောင်ရန်-အဆင့်များ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “လုပ်ဆောင်ရန် အဆင့်များ”</span></a></div>\n<ol>\n<li><strong>Repository URL ရယူပါ</strong>\n<ul>\n<li>GitHub, GitLab စသည့် ဝဘ်ဆိုဒ်များမှ <code dir=\"auto\">\"Code\"</code> သို့မဟုတ် <code dir=\"auto\">\"Clone\"</code> ခလုတ်ကိုနှိပ်ပြီး URL ကို ကူးယူပါ</li>\n</ul>\n</li>\n<li><strong><code dir=\"auto\">Terminal</code> ဖွင့်ပါ</strong>\n<ul>\n<li>ကူးယူလိုသော နေရာသို့ သွားပါ (ဥပမာ - cd Documents/ )</li>\n</ul>\n</li>\n<li><strong><code dir=\"auto\">Clone</code> လုပ်ပါ</strong>\n<ul>\n<li>အောက်ပါ command ကိုရိုက်ပါ:</li>\n</ul>\n</li>\n</ol>\n"
    }), createVNode(Code, {
      code: clone,
      title: "Bash"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>ဒီ command က Project အမည်ဖြင့် Folder အသစ်တစ်ခု ဖန်တီးပြီး <code dir=\"auto\">Repository</code> တစ်ခုလုံးကို ထည့်သွင်းပေးပါမည်။</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"လက်တွေ့စမ်းသပ်ကြည့်ရန်\">လက်တွေ့စမ်းသပ်ကြည့်ရန်</h2><a class=\"sl-anchor-link\" href=\"#လက်တွေ့စမ်းသပ်ကြည့်ရန်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “လက်တွေ့စမ်းသပ်ကြည့်ရန်”</span></a></div>\n<p>GitHub မှာ စိတ်ဝင်စားဖွယ် Repository တစ်ခုရှာပြီး <code dir=\"auto\">HTTPS clone URL</code> ကို ကူးယူပါ။ ကိုယ့် Terminal မှာ <code dir=\"auto\">git clone &#x3C;URL></code> လို့ရိုက်ပြီး ရလာတဲ့ folder ကို ဖွင့်ကြည့်ပါ။ <code dir=\"auto\">Repository</code> တစ်ခုလုံး ကိုယ့်စက်ထဲ ရောက်လာတာ တွေ့ရပါလိမ့်မယ်။</p>\n"
    }), createVNode($$Aside, {
      title: "အနှစ်ချုပ်",
      "set:html": "<ol>\n<li>\n<p><strong>Origin က နာမည်ပေးခြင်းပါ</strong></p>\n<ul>\n<li>ဒါက ကိုယ့်ရဲ့ အဓိက အွန်လိုင်း Project ကို Git က မှတ်ထားတဲ့ မူလနာမည်ပါ</li>\n<li>တခြားနာမည် ပေးလို့ရပါတယ်</li>\n</ul>\n</li>\n<li>\n<p><strong>Push နဲ့ Pull ကို မကြာခဏလုပ်ပါ</strong></p>\n<ul>\n<li>ကိုယ့် Local နဲ့ Remote ကို အမြဲ update ဖြစ်နေအောင်ထားပါ</li>\n<li>အထူးသဖြင့် အတူတူအလုပ်လုပ်တဲ့အခါ အသေးစား update လေးတွေက စီမံခန့်ခွဲရ ပိုလွယ်ပါတယ်</li>\n</ul>\n</li>\n<li>\n<p><strong>Conflicts</strong></p>\n<ul>\n<li>ပြဿနာတွေ မဟုတ်ပါဘူး</li>\n<li>စိတ်အေးအေးထားပြီး ဖြေရှင်းပါ</li>\n</ul>\n</li>\n<li>\n<p><strong>Merge လုပ်ရင် ရည်ရွယ်ချက်နဲ့ လုပ်ပါ</strong></p>\n<ul>\n<li>ကိုယ် ဘယ် Branch မှာ ရောက်နေလဲ၊ ဘယ် Branch ကနေ ပေါင်းထည့်နေလဲဆိုတာ သိပါစေ</li>\n</ul>\n</li>\n<li>\n<p><strong>Merge (သို့) Rebase လုပ်ခြင်း</strong></p>\n<ul>\n<li>git pull ထက် ပိုထိန်းချုပ်ချင်ရင် git fetch လုပ်ပြီး Remote ကအပြောင်းအလဲတွေကို အရင်ကြည့်လို့ရတယ်</li>\n<li>ပြီးမှ ဘယ်လိုပေါင်းစပ်မလဲ ဆုံးဖြတ်လို့ရတယ် (ဒါက နည်းနည်းပိုအဆင့်မြင့်ပေမဲ့ သိထားဖို့ကောင်းတဲ့ အချက်ပါ)</li>\n</ul>\n</li>\n</ol>"
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

const url = "src/content/docs/git-course/remote-repository/cloning.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/remote-repository/cloning.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/remote-repository/cloning.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, clone, cloneSample, Content as default, file, frontmatter, getHeadings, url };
