import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const mergeVsRebase = new Proxy({"src":"/_astro/merge-vs-rebase.C7XMuxGy.png","width":1149,"height":1073,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/git-course/merge-vs-rebase.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Rebase vs. Merge - အဓိက ကွာခြားချက်များ အကျဉ်းချုပ်",
  "description": "Rebase vs. Merge - အဓိက ကွာခြားချက်များ အကျဉ်းချုပ်"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "merge",
    "text": "Merge:"
  }, {
    "depth": 3,
    "slug": "rebase",
    "text": "Rebase:"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>Rebase နှင့် Merge ကြား အဓိက ကွာခြားချက်များကို နားလည်ရန်နှင့် မည်သည့်အခြေအနေတွင် မည်သည့်နည်းလမ်းကို အသုံးပြုသင့်သည်ကို လေ့လာရန်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"merge\">Merge:</h3><a class=\"sl-anchor-link\" href=\"#merge\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Merge:”</span></a></div>\n<ul>\n<li>မူလ Commit History ကို မပြောင်းလဲပါဘူး။ Branches နှစ်ခု ဘယ်နေရာမှာ ပေါင်းခဲ့တယ်ဆိုတာကို “merge commit” တစ်ခုနဲ့ ပြသပါတယ်။</li>\n<li>Branches တွေက ပုံစံအမျိုးမျိုးနဲ့ ခွဲထွက်ပြီး ပြန်ပေါင်းတဲ့ Graph ပုံစံမျိုး မြင်ရနိုင်ပါတယ်။</li>\n<li>pushed လုပ်ပြီးသား shared Commits များအတွက် ပို Safe ဖြစ်ပါတယ်။ ဘာလို့လဲဆိုတော့ လက်ရှိ commits တွေကို ပြန်ပြင်ရေးတာမျိုး မလုပ်လို့ပါ။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"rebase\">Rebase:</h3><a class=\"sl-anchor-link\" href=\"#rebase\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Rebase:”</span></a></div>\n<ul>\n<li>Commits History ကို ပြန်လည်ရေးသားပြီး ခွဲထွက်တာမျိုးမရှိဘဲ တစ်ဆင့်ပြီးတစ်ဆင့် ဆက်တိုက်ဖြစ်ပေါ်ခဲ့သလို ပုံစံဖြစ်အောင် လုပ်ပါတယ်။ Commit တွေကို နေရာအသစ်တစ်ခုပေါ်ကို ရွှေ့လိုက်တာပါ။</li>\n<li>Commit History ကို ပိုပြီး သန့်ရှင်းသပ်ရပ်စေပြီး ဖတ်ရလွယ်ကူစေပါတယ်။ (ဖြောင့်တန်းတဲ့ လိုင်းတစ်ကြောင်းလို ဖြစ်သွားပါတယ်)</li>\n<li>push လုပ်ပြီးသား commits တွေမှာ သုံးရင် အန္တရာယ်ရှိပါတယ်။ ကိုယ့် local  မှာပဲ သပ်သပ်ရပ်ရပ်လုပ်ဖို့ ဒါမှမဟုတ် push မလုပ်ခင် ပြင်ဆင်ဖို့အတွက် အကောင်းဆုံးပါ။</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: mergeVsRebase,
      alt: "merge vs rebase"
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

const url = "src/content/docs/git-course/advanced-techniques/rebase-vs-merge.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/advanced-techniques/rebase-vs-merge.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/git-course/advanced-techniques/rebase-vs-merge.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
