import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import './Content-image_C5QzPmj4.mjs';
import './rebase_UEv3bOUH.mjs';
import 'clsx';

const frontmatter = {
  "title": " မတော်တဆဖြစ်ရင် ကယ်တင်ပေးမယ့် git reflog",
  "description": " မတော်တဆဖြစ်ရင် ကယ်တင်ပေးမယ့် git reflog"
};
function getHeadings() {
  return [];
}
const mainUpdate = `
git switch main
git pull origin main
`;
const switchToFeature = `
git switch my-feature
`;
const gitRebaseMain = `
git rebase main
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<blockquote>\n<p><strong>git reflog</strong> က ဘာလဲဆိုတာကို နားလည်ထားရုံနဲ့ လုံလောက်ပါတယ်</p>\n</blockquote>\n"
    }), createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>git reflog ဆိုတာ ဘယ်လောက် အစွမ်းထက်တဲ့ ကယ်ဆယ်ရေး tool တစ်ခုလဲဆိုတာ သိရှိနားလည်ဖို့ပဲ ဖြစ်ပါတယ်။ အခုချက်ချင်း အသုံးမပြုနိုင်သေးရင်တောင် ဒါရှိတယ်ဆိုတာ သိထားရုံနဲ့ လုံလောက်ပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p><strong><code dir=\"auto\">git reflog</code> ဆိုတာ ဘာလဲ?</strong></p>\n<ul>\n<li>git reflog (reference log) ဆိုတာ သင့်ရဲ့ HEAD (လက်ရှိ ရောက်နေတဲ့နေရာ) နဲ့ branch တွေ ဘယ်နေရာတွေ ရောက်ခဲ့ဖူးတယ်ဆိုတဲ့ မှတ်တမ်းကို သိမ်းထားတာပါ။ ဒါက သင့် repository ထဲမှာ သင်လုပ်ခဲ့တဲ့ လှုပ်ရှားမှုတွေရဲ့ ကိုယ်ပိုင်မှတ်တမ်းတစ်ခုပါ။</li>\n</ul>\n<p><strong>ဘာကြောင့်လဲ</strong></p>\n<ul>\n<li>တကယ်လို့ သင် branch ကို reset လုပ်လိုက်လို့ commit တွေ git log ထဲကနေ ပျောက်သွားရင်တောင် reflog က သူတို့ ဘယ်မှာရှိလဲဆိုတာကို သိပါတယ်။ ဒါဟာ သင်လုပ်ခဲ့တဲ့ Git လုပ်ဆောင်ချက်တွေရဲ့ ကိုယ်ပိုင်ဒိုင်ယာရီလိုပါပဲ။</li>\n</ul>\n<p><strong>ဥပမာ (Analogies)</strong></p>\n<blockquote>\n<p>သင်ဟာ လိုဏ်ဂူတွေ (သင့်ရဲ့ Git repository) ကို စူးစမ်းရှာဖွေနေတယ်လို့ မြင်ယောင်ကြည့်ပါ။\n<strong>git log</strong> ကတော့ စူးစမ်းပြီးသား လှိုဏ်ခေါင်းတွေရဲ့ တရားဝင် မှတ်သားထားတဲ့မြေပုံ လိုပါပဲ။\n<strong>git reflog</strong> ကတော့ သင်လှည့်ခဲ့တဲ့ အကွေ့တိုင်း၊ ရောက်ခဲ့တဲ့ လမ်းဆုံးတိုင်းကို သူ့ဘာသူ မှတ်တမ်းတင်ထားတဲ့ မှတ်တမ်းစာအုပ်လိုပါပဲ။</p>\n</blockquote>\n<p><strong>ဘယ်လို အထောက်အကူပြုလဲ (အကြမ်းဖျင်း)</strong></p>\n<ul>\n<li>သင် မတော်တဆ <code dir=\"auto\">git reset --hard</code> လုပ်မိလို့ commit တွေ “ပျောက်သွားပြီ” လို့ ထင်ရရင်၊ <code dir=\"auto\">git reflog</code> က reset မလုပ်ခင်က သင်ရောက်ခဲ့တဲ့ commit ရဲ့ hash ကို ပြန်ပြနိုင်ပါတယ်။</li>\n<li>ပြီးရင် အဲဒီ “ပျောက်ဆုံးသွားတဲ့” commit hash ကို ညွှန်ပြပြီး branch အသစ်တစ်ခု ပြန်ဖန်တီးကာ သင့်အလုပ်တွေကို ပြန်ရယူနိုင်ပါတယ်။ ဥပမာ- <code dir=\"auto\">git branch recovered-work &#x3C;lost-commit-hash></code></li>\n<li><strong>reflog commands</strong> တွေကို အခု ကျွမ်းကျင်ဖို့ မလိုပါဘူး။ သင့်ရဲ့ local repository အတွက် အစွမ်းထက်တဲ့ အသက်ကယ်ကိရိယာအဖြစ် ရှိနေတယ်ဆိုတာကို သိထားရုံနဲ့ လုံလောက်ပါတယ်။</li>\n</ul>\n"
    }), createVNode($$Aside, {
      type: "tip",
      title: "မှတ်ချက်",
      "set:html": " reflog ကတော့ ကိုယ့်ရဲ့ local မှာ ပြန်လည်ကယ်ဆယ်ဖို့အတွက် အဓိကထားတာပါ။  "
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

const url = "src/content/docs/git-course/advanced-techniques/reflog.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/advanced-techniques/reflog.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/advanced-techniques/reflog.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, gitRebaseMain, mainUpdate, switchToFeature, url };
