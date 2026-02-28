import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const remoteCheck = new Proxy({"src":"/_astro/remote-check.CGxpoawW.png","width":1298,"height":124,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/git-course/remote-check.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Local & Remote Projects ချိတ်ဆက်ခြင်း",
  "description": "Local နှင့် Remote Projects များကို ချိတ်ဆက်နည်း"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "အဆင့်-၁-github-မှာ-repository-တစ်ခု-ဖန်တီးပါ",
    "text": "အဆင့် ၁: GitHub မှာ Repository တစ်ခု ဖန်တီးပါ"
  }, {
    "depth": 2,
    "slug": "အဆင့်-၂-local-repo-ကို-remote-နဲ့-ချိတ်ဆက်ပါ",
    "text": "အဆင့် ၂: Local Repo ကို Remote နဲ့ ချိတ်ဆက်ပါ"
  }, {
    "depth": 2,
    "slug": "အဆင့်-၃-ချိတ်ဆက်မှု-စစ်ဆေးပါ",
    "text": "အဆင့် ၃: ချိတ်ဆက်မှု စစ်ဆေးပါ"
  }];
}
const remoteAddExample = `
git remote add <nickname> <remote-url>
`;
const remoteAdd = `
git remote add origin https://github.com/YourUsername/my-first-repo.git
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      type: "tip",
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>GitHub မှာ Repository အသစ်တစ်ခုဖန်တီးပြီး Local Git Repository နဲ့ ဘယ်လိုချိတ်ဆက်မလဲ လေ့လာရန်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"အဆင့်-၁-github-မှာ-repository-တစ်ခု-ဖန်တီးပါ\">အဆင့် ၁: GitHub မှာ Repository တစ်ခု ဖန်တီးပါ</h2><a class=\"sl-anchor-link\" href=\"#အဆင့်-၁-github-မှာ-repository-တစ်ခု-ဖန်တီးပါ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အဆင့် ၁: GitHub မှာ Repository တစ်ခု ဖန်တီးပါ”</span></a></div>\n<ol>\n<li><strong>GitHub.com</strong> ကို သွားပြီး Login ဝင်ပါ</li>\n<li>ညာဘက်အပေါ်ထောင့်က <strong>”+”</strong> ကိုနှိပ်ပြီး <strong>“New repository”</strong> ကိုရွေးပါ</li>\n<li>Repository <strong>name</strong> ပေးပါ (ဥပမာ - <code dir=\"auto\">my-first-repo</code>)</li>\n<li><strong>Visibility</strong> ကို <strong>“Public”</strong> ရွေးပါ</li>\n</ol>\n"
    }), createVNode($$Aside, {
      type: "danger",
      title: "သတိပြုရန်",
      "set:html": "<p>Local မှာ Project ရှိပြီးသားဆိုရင် “Initialize this repository with a README”, “.gitignore”, or “license” စတာတွေကို <strong>အမှန်ခြစ် မခြစ်ပါနဲ့</strong>။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<ol start=\"5\">\n<li><strong>“Create repository”</strong> ကိုနှိပ်ပါ</li>\n<li>GitHub က ပေးတဲ့ URL (ဥပမာ - <code dir=\"auto\">https://github.com/YourUsername/my-first-repo.git</code>) ကို Copy ကူးထားပါ</li>\n</ol>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"အဆင့်-၂-local-repo-ကို-remote-နဲ့-ချိတ်ဆက်ပါ\">အဆင့် ၂: Local Repo ကို Remote နဲ့ ချိတ်ဆက်ပါ</h2><a class=\"sl-anchor-link\" href=\"#အဆင့်-၂-local-repo-ကို-remote-နဲ့-ချိတ်ဆက်ပါ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အဆင့် ၂: Local Repo ကို Remote နဲ့ ချိတ်ဆက်ပါ”</span></a></div>\n<p><code dir=\"auto\">git remote add</code> command က Local Repository ကို GitHub Repository နဲ့ ချိတ်ဆက်ပေးပါတယ်။</p>\n"
    }), createVNode(Code, {
      code: remoteAddExample,
      title: "Bash"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<ul>\n<li><code dir=\"auto\">&#x3C;nickname></code> : Remote အတွက် အလွယ်မှတ်ခေါ်ခေါ် (များသောအားဖြင့် <code dir=\"auto\">origin</code> သုံးပါတယ်)</li>\n<li><code dir=\"auto\">&#x3C;remote-url></code> : အဆင့် ၁ က Copy ကူးထားတဲ့ URL</li>\n</ul>\n<p>ဥပမာ:</p>\n"
    }), createVNode(Code, {
      code: remoteAdd,
      title: "Bash"
    }), "\n", createVNode($$Aside, {
      title: "သတိပြုရန်",
      type: "caution",
      "set:html": "<p>URL နေရာမှာ သင့် GitHub Repository ရဲ့ URL အမှန်ကို ထည့်ပါ။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"အဆင့်-၃-ချိတ်ဆက်မှု-စစ်ဆေးပါ\">အဆင့် ၃: ချိတ်ဆက်မှု စစ်ဆေးပါ</h2><a class=\"sl-anchor-link\" href=\"#အဆင့်-၃-ချိတ်ဆက်မှု-စစ်ဆေးပါ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အဆင့် ၃: ချိတ်ဆက်မှု စစ်ဆေးပါ”</span></a></div>\n<p>Terminal မှာ git remote -v လို့ရိုက်ပြီး စစ်ဆေးပါ။ origin နာမည်နဲ့ GitHub URL ကို “fetch” နဲ့ “push” အတွက် ပြနေရင် ချိတ်ဆက်မှု အောင်မြင်ပါပြီ။</p>\n"
    }), createVNode($$ContentImage, {
      src: remoteCheck,
      alt: "remote checking"
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

const url = "src/content/docs/git-course/remote-repository/connect-remote.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/remote-repository/connect-remote.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/remote-repository/connect-remote.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, remoteAdd, remoteAddExample, url };
