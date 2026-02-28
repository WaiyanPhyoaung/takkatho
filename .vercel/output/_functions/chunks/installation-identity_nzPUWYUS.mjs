import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const gitInit = new Proxy({"src":"/_astro/git-init.7FKT7LJd.png","width":1692,"height":466,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/git-course/git-init.png";
							}
							
							return target[name];
						}
					});

const gitFolder = new Proxy({"src":"/_astro/git-folder.BRRJJbP-.png","width":872,"height":90,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/git-course/git-folder.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Installation & Identity",
  "description": "Installation & Identity"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "git-ကို-install-လုပ်ခြင်း",
    "text": "Git ကို Install လုပ်ခြင်း"
  }, {
    "depth": 3,
    "slug": "git-ကိုယ်ပိုင်အချက်အလက်",
    "text": "Git ကိုယ်ပိုင်အချက်အလက်"
  }, {
    "depth": 3,
    "slug": "ပထမဆုံး-repository",
    "text": "ပထမဆုံး Repository"
  }, {
    "depth": 3,
    "slug": "repository-ဖန်တီးခြင်း-git-init-command",
    "text": "Repository ဖန်တီးခြင်း git init Command"
  }, {
    "depth": 3,
    "slug": "git-folder",
    "text": ".git Folder"
  }];
}
const config = `
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      type: "tip",
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>Git ကို သွင်းပြီး ကိုယ့်ရဲ့ အဓိက နာမည်နဲ့ Email လိုအပ်တဲ့ အချက်အလက်တွေကို\nထည့်သွင်းတတ်ဖို့။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"git-ကို-install-လုပ်ခြင်း\">Git ကို Install လုပ်ခြင်း</h3><a class=\"sl-anchor-link\" href=\"#git-ကို-install-လုပ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Git ကို Install လုပ်ခြင်း”</span></a></div>\n<ul>\n<li>\n<p><a href=\"https://git-scm.com/downloads\">https://git-scm.com/downloads</a> ကို သွားပါ။</p>\n</li>\n<li>\n<p>ကိုယ်သုံးတဲ့ ကွန်ပျူတာ စနစ် (Windows, macOS, Linux) အတွက် Installer ကို Download လုပ်ပြီး သွင်းပါ။ များသောအားဖြင့် Default Setting တွေက အဆင်ပြေပါတယ်။</p>\n</li>\n<li>\n<p>သွင်းပြီးတာ သေချာလားဆိုတာ စစ်ဖို့ Terminal (ဒါမှမဟုတ် Windows မှာ Git Bash) ကို ဖွင့်ပြီး git —version လို့ ရိုက်ကြည့်ပါ။ Version နံပါတ် ပေါ်လာပြီဆိုရင် ရပါပြီ။</p>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"git-ကိုယ်ပိုင်အချက်အလက်\">Git ကိုယ်ပိုင်အချက်အလက်</h3><a class=\"sl-anchor-link\" href=\"#git-ကိုယ်ပိုင်အချက်အလက်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Git ကိုယ်ပိုင်အချက်အလက်”</span></a></div>\n<p>Git က ကိုယ်လုပ်လိုက်တဲ့ ပြောင်းလဲမှု (Commit) တိုင်းမှာ လုပ်တဲ့သူရဲ့ နာမည်နဲ့ Email ကို တံဆိပ်နှိပ်ထားပါတယ်။ ဒါက အရမ်း အရေးကြီးပါတယ်။ <strong>(Blame ဖို့မဟုတ်ဘူးနော်)</strong></p>\n<p>အထူးသဖြင့် Team နဲ့ အလုပ်လုပ်တဲ့အခါ ဘယ်သူက ဘာကို ပြောင်းလဲခဲ့လဲဆိုတာ သိရဖို့ပါ။</p>\n"
    }), createVNode(Code, {
      code: config,
      title: "Bash"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>—global ဆိုတာက ကိုယ့် ကွန်ပျူတာထဲက Project အားလုံးအတွက် သတ်မှတ်လိုက်တာပါ။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ပထမဆုံး-repository\">ပထမဆုံး Repository</h3><a class=\"sl-anchor-link\" href=\"#ပထမဆုံး-repository\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ပထမဆုံး Repository”</span></a></div>\n"
    }), createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      type: "tip",
      "set:html": "<p>Git Repository ဆိုတာ ဘာလဲ နားလည်ဖို့နဲ့ Project တစ်ခုအတွက် Repository ဘယ်လို\nဖန်တီးရလဲ သိဖို့။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Repository (Repo) ဆိုတာ ဘာလဲ?</p>\n<p>Git Repository ဆိုတာ ကိုယ့် Project ရဲ့ ဖိုင်တွေ အားလုံးနဲ့ သူတို့ ပြောင်းလဲခဲ့တဲ့ သမိုင်းကြောင်း အစအဆုံးကို Git က မှတ်တမ်းတင်ထားတဲ့ Folder တစ်ခုပါ။</p>\n<p><strong>ဥပမာ:</strong> ကိုယ့် Project ရဲ့ သီးသန့် “ထိန်းချုပ်ရေးစင်တာ” ဒါမှမဟုတ် “မှတ်တမ်းရုံး” လို သဘောထားလို့ရတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"repository-ဖန်တီးခြင်း-git-init-command\">Repository ဖန်တီးခြင်း git init Command</h3><a class=\"sl-anchor-link\" href=\"#repository-ဖန်တီးခြင်း-git-init-command\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Repository ဖန်တီးခြင်း git init Command”</span></a></div>\n<p>git init ဆိုတာ ပုံမှန် Folder တစ်ခုကို Git Repository အဖြစ် ပြောင်းလဲပေးတဲ့ Command ပါ။</p>\n<p>Git က အဲဒီ Folder ထဲမှာ ပြောင်းလဲမှုတွေကို စတင် မှတ်တမ်းတင်ဖို့ လိုအပ်တဲ့ ဖိုင်တွေ (Hidden Files) ကို ပြင်ဆင်ပေးပါတယ်။</p>\n<p><strong>ဘယ်လိုလုပ်မလဲ (Terminal မှာ):</strong></p>\n<p>-ကိုယ့် Project Folder ထဲကို သွားပါ: cd path/to/your/project (ဥပမာ- cd Documents/my-project)</p>\n<ul>\n<li>\n<p>အောက်က Command ကို ရိုက်ပါ: <code dir=\"auto\">git init</code></p>\n</li>\n<li>\n<p>အဲဒီအခါ Terminal မှာ Initialized empty Git repository in /path/to/your/project/.git/ လိုမျိုး ပြပါလိမ့်မယ်</p>\n</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: gitInit,
      alt: "git init command"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"git-folder\">.git Folder</h3><a class=\"sl-anchor-link\" href=\"#git-folder\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “.git Folder”</span></a></div>\n<p>git init ကို သုံးလိုက်ရင် Hidden ဖြစ်နေတဲ့ .git Folder တစ်ခု ပေါ်လာပါမယ်။ ဒါဟာ Git က ကိုယ့် Project ရဲ့ မှတ်တမ်းတွေ အားလုံးကို သိမ်းထားတဲ့ နေရာပါ။</p>\n<p><strong>သတိထားရမှာက:</strong> ဒီ Folder ကို ကိုယ်တိုင် သွားပြင်တာ ဒါမှမဟုတ် ဖျက်တာမျိုး လုံးဝ မလုပ်ပါနဲ့! Git ကပဲ သူ့ဘာသာ စီမံပါတယ်။</p>\n"
    }), createVNode($$ContentImage, {
      src: gitFolder,
      alt: ".git folder"
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

const url = "src/content/docs/git-course/introduction/installation-identity.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/introduction/installation-identity.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/introduction/installation-identity.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, config, Content as default, file, frontmatter, getHeadings, url };
