import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import { g as gitIgnore } from './git-ignore_DH6YxVlO.mjs';
import 'clsx';

const gitLog = new Proxy({"src":"/_astro/git-log.D6KXAEH5.png","width":1474,"height":580,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/git-course/git-log.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Commit Messages ရေးခြင်း နှင့် မှတ်တမ်းများ ကြည့်ခြင်း",
  "description": "Commit Messages ရေးခြင်း နှင့် မှတ်တမ်းများ ကြည့်ခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "commit-message-ကောင်းကောင်း-ရေးနည်း",
    "text": "Commit Message ကောင်းကောင်း ရေးနည်း"
  }, {
    "depth": 3,
    "slug": "project-သမိုင်းကြောင်း-ကြည့်မယ်-git-log",
    "text": "Project သမိုင်းကြောင်း ကြည့်မယ် (git log)"
  }, {
    "depth": 3,
    "slug": "မလိုအပ်တဲ့-ဖိုင်အချို့ကို-ချန်ထားမယ်-gitignore",
    "text": "မလိုအပ်တဲ့ ဖိုင်အချို့ကို ချန်ထားမယ် (.gitignore)"
  }, {
    "depth": 4,
    "slug": "gitignore-file",
    "text": ".gitignore file"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      type: "tip",
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>ကောင်းမွန်တဲ့ Commit Message တွေ ရေးတတ်ဖို့နဲ့ ကိုယ့် Project ရဲ့ Git History\nကို ဘယ်လို ကြည့်ရလဲ နားလည်ရန်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>ကျွန်တော်တို့ Project မှာ ဘာတွေ ပြောင်းလဲလိုက်လဲဆိုတာကို မှတ်တမ်းတင်ဖို့ Commit Message က အရမ်းအရေးကြီးပါတယ်။ ဒါက ကိုယ့်ရဲ့ Save Point (Commit) တစ်ခုစီမှာ ဘာလုပ်ခဲ့လဲဆိုတာကို ပြောပြတာပါ။ နောင်ကျမှ ကိုယ့် Project ကို ပြန်ကြည့်တဲ့အခါ ဘာတွေ ဖြစ်ခဲ့လဲဆိုတာ မြန်မြန် သိရအောင် Message ကောင်းကောင်း ရေးဖို့ လိုပါတယ်။ “ဘာတွေ ပြင်လိုက်ပြီ” ဒါမှမဟုတ် “တစ်ခုခု လုပ်လိုက်တယ်” လိုမျိုး Message တွေက နားမလည်နိုင်ပါဘူး။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"commit-message-ကောင်းကောင်း-ရေးနည်း\">Commit Message ကောင်းကောင်း ရေးနည်း</h3><a class=\"sl-anchor-link\" href=\"#commit-message-ကောင်းကောင်း-ရေးနည်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Commit Message ကောင်းကောင်း ရေးနည်း”</span></a></div>\n<p>Commit Message ရဲ့ ပထမဆုံး စာကြောင်းကို အတိုချုပ်၊ ရှင်းရှင်းလင်းလင်း ရေးပါ။ ကိုယ် ဘာလုပ်လိုက်တာလဲဆိုတာကို Command ပေးတဲ့ ပုံစံမျိုး ရေးတာ ကောင်းပါတယ်။ ဥပမာ - “Login လုပ်တာ ထည့်ခြင်း” ဒါမှမဟုတ် “README စာလုံးပေါင်း မှားတာ ပြင်ခြင်း” လိုမျိုးပေါ့။ စာကြောင်းအဆုံးမှာ အစက် (.) မပါဘဲ Character ၅၀ လောက်ပဲ ရေးဖို့ ကြိုးစားပါ။ (ပုံ: ❌ “fixed stuff” vs. ✅ “Fix user login bug” လိုမျိုး ရေးပါ။)</p>\n"
    }), createVNode($$Aside, {
      type: "tip",
      title: "Tip",
      "set:html": "<p>ပိုကောင်းတဲ့ Commit Message တွေ ရေးဖို့\n<a href=\"https://www.conventionalcommits.org/en/v1.0.0/\">conventionalcommits</a> ကို\nကြည့်ရှု လေ့လာနိုင်ပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"project-သမိုင်းကြောင်း-ကြည့်မယ်-git-log\">Project သမိုင်းကြောင်း ကြည့်မယ် (<code dir=\"auto\">git log</code>)</h3><a class=\"sl-anchor-link\" href=\"#project-သမိုင်းကြောင်း-ကြည့်မယ်-git-log\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Project သမိုင်းကြောင်း ကြည့်မယ် (git log)”</span></a></div>\n<p>ကိုယ့် Project ရဲ့ အရင်က Commit လုပ်ထားတဲ့ မှတ်တမ်းတွေ အားလုံးကို ကြည့်ချင်ရင် Terminal မှာ <code dir=\"auto\">git log</code> Command ကို ရိုက်ကြည့်ပါ။ အဲဒါဆို ကိုယ် Commit လုပ်ထားတဲ့ မှတ်တမ်းတစ်ခုစီကို ဘယ်သူက၊ ဘယ်နေ့က၊ ဘာ Message နဲ့ လုပ်ခဲ့တယ်ဆိုတာ အစအဆုံး ပြပါလိမ့်မယ်။ မှတ်တမ်းတွေ အများကြီးရှိရင် Keyboard က ‘q’ နှိပ်ပြီး ထွက်လို့ရပါတယ်။ <code dir=\"auto\">git log --oneline</code> ကို သုံးရင် Commit တစ်ခုစီကို တစ်ကြောင်းတည်းနဲ့ အတိုချုပ် ပြပေးပါတယ်။</p>\n<p><strong>ကိုယ်တိုင်လုပ်ကြည့်ဖို့</strong>: README.md ဖိုင်ကို ထပ်ပြင်ပြီး git add, git commit လုပ်ကြည့်ပါ။ ပြီးရင် git log နဲ့ git log —oneline ရိုက်ကြည့်ပါ</p>\n"
    }), createVNode($$ContentImage, {
      src: gitLog,
      alt: "git log"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"မလိုအပ်တဲ့-ဖိုင်အချို့ကို-ချန်ထားမယ်-gitignore\">မလိုအပ်တဲ့ ဖိုင်အချို့ကို ချန်ထားမယ် (.gitignore)</h3><a class=\"sl-anchor-link\" href=\"#မလိုအပ်တဲ့-ဖိုင်အချို့ကို-ချန်ထားမယ်-gitignore\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “မလိုအပ်တဲ့ ဖိုင်အချို့ကို ချန်ထားမယ် (.gitignore)”</span></a></div>\n<p>ကျွန်တော်တို့ Project ထဲမှာ Git က မှတ်တမ်းတင်ဖို့ မလိုအပ်တဲ့ ဖိုင်တွေ ရှိပါတယ်။ ဥပမာ- ကိုယ် Program ရေးပြီး Compile လုပ်လိုက်လို့ ထွက်လာတဲ့ ဖိုင်တွေ၊ ခဏသုံးတဲ့ ဖိုင်တွေ၊ တခြား Library တွေ (node_modules) ဒါမှမဟုတ် လုံခြုံရေးနဲ့ ပတ်သက်တဲ့ အချက်အလက်တွေ (API Key လိုမျိုး) ပေါ့။ ဒီလိုဖိုင်တွေကို Git ကနေ ချန်ထားခဲ့တာ ပိုကောင်းပါတယ်။ ဒါမှ ကိုယ့် Project ရဲ့ မှတ်တမ်းက သန့်ရှင်းနေပြီး မလိုအပ်ဘဲ ကြီးမလာမှာပါ။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"gitignore-file\"><code dir=\"auto\">.gitignore</code> file</h4><a class=\"sl-anchor-link\" href=\"#gitignore-file\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “.gitignore file”</span></a></div>\n<p>Git ကနေ ဘယ်ဖိုင်တွေ၊ ဘယ် Folder တွေကို လျစ်လျူရှုရမလဲဆိုတာကို <code dir=\"auto\">.gitignore</code> လို့ အမည်ပေးထားတဲ့ Text File တစ်ခုထဲမှာ ရေးမှတ်ထားရပါတယ်။ ဒီဖိုင်ကို Project ရဲ့ အဓိက Folder ထဲမှာ ထည့်ထားရပါမယ်။ ဖိုင်ထဲမှာ တစ်ကြောင်းစီက လျစ်လျူရှုချင်တဲ့ ဖိုင် ဒါမှမဟုတ် Folder ပုံစံ (Pattern) တစ်ခုစီပါ။ ဥပမာ- <code dir=\"auto\">node_modules/</code> ဆိုရင် အဲဒီ Folder ထဲက အရာအားလုံးကို ချန်ခဲ့မယ်၊ <code dir=\"auto\">*.log</code> ဆိုရင် <code dir=\"auto\">.log</code> နဲ့ ဆုံးတဲ့ ဖိုင်အားလုံးကို ချန်ခဲ့မယ်၊ <code dir=\"auto\">secrets.txt</code> ဆိုရင် အဲဒီဖိုင်ကို ချန်ခဲ့မယ်ပေါ့။</p>\n<p><strong>ကိုယ်တိုင်လုပ်ကြည့်ဖို့</strong>: my-first-repo ထဲမှာ .gitignore ဖိုင်ဆောက်ပြီး <code dir=\"auto\">*.log</code> လို့ ထည့် Save လိုက်ပါ။ debug.log ဆိုတဲ့ ဖိုင်အသစ်တစ်ခု ဆောက်ပြီး <code dir=\"auto\">git status</code> ရိုက်ကြည့်ပါ။ debug.log ပေါ်မလာရင် မှန်ပါတယ်။ .gitignore ဖိုင်ကတော့ ပေါ်နေပါလိမ့်မယ်။</p>\n<p><code dir=\"auto\">.gitignore</code> ဖိုင်ကိုယ်တိုင်ကိုလည်း Commit လုပ်ပြီး မှတ်တမ်းတင်ထားသင့်ပါတယ်။ ဒါမှ ကိုယ့် Team ထဲက လူတိုင်းက ဘယ်ဖိုင်တွေကို ချန်ထားရမလဲဆိုတာ အတူတူ သိကြမှာပါ။ (Command: <code dir=\"auto\">git add .gitignore</code> ပြီးရင် <code dir=\"auto\">git commit -m \"chore: add .gitignore to exclude log files\"</code>)</p>\n"
    }), createVNode($$ContentImage, {
      src: gitIgnore,
      alt: "git ignore"
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

const url = "src/content/docs/git-course/introduction/commit-messages.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/introduction/commit-messages.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/introduction/commit-messages.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
