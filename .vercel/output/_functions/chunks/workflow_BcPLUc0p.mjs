import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "အဖွဲ့လိုက် အလုပ်လုပ်ပုံ",
  "description": "အဖွဲ့လိုက် အလုပ်လုပ်ပုံ"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "အခြေခံ-workflow",
    "text": "အခြေခံ Workflow"
  }, {
    "depth": 3,
    "slug": "feature-branch-workflow-ရိုးရှင်းတဲ့-github-flow-ပုံစံ",
    "text": "Feature Branch Workflow (ရိုးရှင်းတဲ့ “GitHub Flow” ပုံစံ)"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      type: "tip",
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>အဖွဲ့လိုက် Git workflow အခြေခံကို နားလည်ဖို့၊ <strong>Pull Requests (PRs)</strong> တွေဆိုတာ\nဘာလဲ၊ အဖွဲ့လိုက် အလုပ်လုပ်တဲ့အခါ ဘာလို့ အရေးကြီးလဲ သိဖို့၊ ပြီးတော့ သူတို့ကို\nဘယ်လို ဖန်တီးမလဲ၊ <strong>review</strong>(ပြန်စစ်)မလဲ၊ <strong>merge</strong>(ပေါင်းစပ်)မလဲဆိုတဲ့\nအခြေခံတွေကို သင်ယူတတ်ဖို့။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"အခြေခံ-workflow\">အခြေခံ Workflow</h2><a class=\"sl-anchor-link\" href=\"#အခြေခံ-workflow\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အခြေခံ Workflow”</span></a></div>\n<p>လူအများကြီးက Code တွေ ရေးတဲ့အခါ main branch ကို တိုက်ရိုက် <code dir=\"auto\">push</code> လုပ်တာက ရှုပ်ထွေးသွားစေနိုင်ပြီး Code တွေ ပျက်စီးသွားတတ်တယ်။ အဲဒီအတွက် အပြောင်းအလဲတွေကို အဖွဲ့လိုက် စနစ်တကျ တင်ပြဖို့နဲ့ ပေါင်းစပ်ဖို့ စီမံထားတဲ့ နည်းလမ်းတစ်ခု လိုအပ်တယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"feature-branch-workflow-ရိုးရှင်းတဲ့-github-flow-ပုံစံ\">Feature Branch Workflow (ရိုးရှင်းတဲ့ “GitHub Flow” ပုံစံ)</h3><a class=\"sl-anchor-link\" href=\"#feature-branch-workflow-ရိုးရှင်းတဲ့-github-flow-ပုံစံ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Feature Branch Workflow (ရိုးရှင်းတဲ့ “GitHub Flow” ပုံစံ)”</span></a></div>\n<p>ဒါက အဖွဲ့လိုက် အလုပ်လုပ်ဖို့အတွက် အရမ်း အသုံးများပြီး အကျိုးရှိတဲ့ နည်းလမ်းတစ်ခုပါ။</p>\n<ol>\n<li>\n<p><strong>main ကနေ အမြဲ စပါ</strong></p>\n<ul>\n<li>ကိုယ့် <strong>local main branch</strong> က <strong>remote main</strong> နဲ့ <strong>up-to-date</strong> ဖြစ်နေဖို့ သေချာပါစေ။</li>\n<li><code dir=\"auto\">git switch main</code> ပြီးရင် <code dir=\"auto\">git pull origin main</code></li>\n</ul>\n</li>\n<li>\n<p><strong>branch အသစ် တစ်ခု ဖန်တီးပါ</strong></p>\n<ul>\n<li>အလုပ်အသစ် (<strong>feature, bug fix, experiment</strong>) တစ်ခုခု လုပ်တော့မယ်ဆိုရင် main ကနေ branch အသစ်တစ်ခု ခွဲပါ</li>\n<li><code dir=\"auto\">git switch -c &#x3C;branch-name></code></li>\n</ul>\n</li>\n<li>\n<p><strong>ကိုယ့်အလုပ်တွေကို အဲဒီ branch မှာလုပ်ပါ</strong></p>\n<ul>\n<li>ပြောင်းလဲမှုများ ပြုလုပ်ပြီး commit လုပ်ပါ</li>\n<li>အသေးစား commit များများ လုပ်ပါ</li>\n</ul>\n</li>\n<li>\n<p><strong>ကိုယ့် branch ကို <code dir=\"auto\">push</code> လုပ်ပါ (main ကို မဟုတ်ဘူးနော်!)</strong></p>\n<ul>\n<li><code dir=\"auto\">git push -u origin feature-name</code></li>\n<li>( -u ကို ဒီ branch အတွက် ပထမဆုံးအကြိမ် <code dir=\"auto\">push</code> လုပ်တဲ့အခါ သုံးပါ )</li>\n</ul>\n</li>\n<li>\n<p><strong>main branch ကိုမထိဘဲ Clean ဖြစ်နေမယ်</strong></p>\n<ul>\n<li>ဒီ အဆင့်ဆင့် တစ်လျှောက်လုံးမှာ remote ပေါ်က <strong>main branch</strong> ကို ကိုယ်တိုက်ရိုက် <code dir=\"auto\">push</code> လုပ်တာတွေ မရှိပါဘူး</li>\n</ul>\n</li>\n</ol>\n"
    }), createVNode($$Aside, {
      title: "အနှစ်ချုပ်",
      "set:html": "<p>ကိုယ့်အလုပ်တွေကို separate branches (သီးခြား Branch များ) ပေါ်မှာ လုပ်ပါ၊ အဲဒီ\nbranches တွေကို push လုပ်ပါ (main ကို မဟုတ်ဘူး!)၊ ပြီးတော့ main ကို stable\nဖြစ်အောင် ထားပါ။ ဒါက ကိုယ့် changes တွေကို တရားဝင်\nတင်ပြပေးတာပါပဲ။</p>"
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

const url = "src/content/docs/git-course/collaboration/workflow.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/collaboration/workflow.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/collaboration/workflow.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
