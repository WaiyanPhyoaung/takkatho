import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "Patterns နှိုင်းယှဉ်ချက်",
  "description": "Patterns နှိုင်းယှဉ်ချက်"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "နှိုင်းယှဉ်ချက်-ဇယား",
    "text": "နှိုင်းယှဉ်ချက် ဇယား"
  }, {
    "depth": 3,
    "slug": "ဘာကြောင့်-mv-patterns-တွေကို-သုံးတာလဲ",
    "text": "ဘာကြောင့် MV* Patterns တွေကို သုံးတာလဲ?"
  }, {
    "depth": 3,
    "slug": "frontend-မှာ-mv-pattern-တွေကို-ဘာကြောင့်သုံးသင့်လဲ",
    "text": "Frontend မှာ MV Pattern တွေကို ဘာကြောင့်သုံးသင့်လဲ"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>ဘယ် Pattern က အကောင်းဆုံးလဲ? အဖြေကတော့ <strong>“Project ပေါ် မူတည်ပါတယ်”</strong>။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"နှိုင်းယှဉ်ချက်-ဇယား\">နှိုင်းယှဉ်ချက် ဇယား</h3><a class=\"sl-anchor-link\" href=\"#နှိုင်းယှဉ်ချက်-ဇယား\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “နှိုင်းယှဉ်ချက် ဇယား”</span></a></div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Pattern</th><th>အဓိက မင်းသား</th><th>Data ချိတ်ဆက်ပုံ</th><th>ဘယ်မှာ သုံးလဲ?</th></tr></thead><tbody><tr><td><strong>MVC</strong></td><td>Controller</td><td>Manual (Controller က လုပ်ပေးရ)</td><td>Backend Frameworks (Laravel, Rails)</td></tr><tr><td><strong>MVP</strong></td><td>Presenter</td><td>Manual (Presenter က အကုန်လုပ်)</td><td>Desktop Apps, Legacy Android</td></tr><tr><td><strong>MVVM</strong></td><td>ViewModel</td><td>Automatic (Data Binding)</td><td>Modern Frontend (Vue, Angular, React*)</td></tr></tbody></table>\n<blockquote>\n<p>*React က တိတိကျကျ ပြောရင် MVVM မဟုတ်ပါဘူး။ “Component-Based” ပါ။ ဒါပေမယ့် Concept ကတော့ MVVM နဲ့ ဆင်တူပါတယ်။</p>\n</blockquote>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဘာကြောင့်-mv-patterns-တွေကို-သုံးတာလဲ\">ဘာကြောင့် MV* Patterns တွေကို သုံးတာလဲ?</h3><a class=\"sl-anchor-link\" href=\"#ဘာကြောင့်-mv-patterns-တွေကို-သုံးတာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘာကြောင့် MV* Patterns တွေကို သုံးတာလဲ?”</span></a></div>\n<ol>\n<li><strong>Separation of Concerns:</strong> “ထမင်းချက်တဲ့သူ” နဲ့ “ဧည့်ခံတဲ့သူ” ကို ခွဲထားချင်လို့ပါ။ (Logic နဲ့ UI မရောချင်လို့)</li>\n<li><strong>Testability:</strong> UI မပါဘဲ Logic သက်သက်ကို စစ်ဆေးရ လွယ်ကူစေပါတယ်။</li>\n<li><strong>Maintainability:</strong> ကုဒ်တွေ ရှင်းလင်းပြီး ပြင်ဆင်ရ လွယ်ကူစေပါတယ်။</li>\n</ol>\n"
    }), createVNode($$Aside, {
      title: "အနှစ်ချုပ်",
      type: "tip",
      "set:html": "<ul>\n<li><strong>MVC:</strong> Controller က Boss။</li>\n<li><strong>MVP:</strong> Presenter က Middleman (ကြားခံ)။</li>\n<li><strong>MVVM:</strong> ViewModel က Auto-Sync (အလိုအလျောက် ချိတ်ဆက်)။</li>\n</ul><p>ခေတ်မီ Frontend Development မှာတော့ <strong>MVVM</strong> (သို့မဟုတ် Component-Based) က အသုံးအများဆုံး ဖြစ်ပါတယ်။</p>"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(Fragment$1, {
      "set:html": "<table><thead><tr><th>Pattern</th><th>Logic</th><th>Data ချိတ်ဆက်ပုံ</th><th>အသုံးပြုရန် သင့်တော်သည့်နေရာ</th></tr></thead><tbody><tr><td>MVC</td><td>Controller</td><td>Manual</td><td>UI သိပ်မရှုပ်ထွေးတဲ့ app အသေးများ</td></tr><tr><td>MVVM</td><td>ViewModel</td><td>Automatic</td><td>Dynamic UI နှင့် two-way binding လိုအပ်သော app များ</td></tr><tr><td>MVP</td><td>Presenter</td><td>Manual</td><td>UI ကို တိုက်ရိုက်ထိန်းချုပ်လိုသော app များ</td></tr></tbody></table>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"frontend-မှာ-mv-pattern-တွေကို-ဘာကြောင့်သုံးသင့်လဲ\">Frontend မှာ MV Pattern တွေကို ဘာကြောင့်သုံးသင့်လဲ</h3><a class=\"sl-anchor-link\" href=\"#frontend-မှာ-mv-pattern-တွေကို-ဘာကြောင့်သုံးသင့်လဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Frontend မှာ MV Pattern တွေကို ဘာကြောင့်သုံးသင့်လဲ”</span></a></div>\n<ul>\n<li>\n<p><strong>တာဝန်ခွဲဝေနိုင်ခြင်း -</strong> UI, data နဲ့ logic ကို သီးခြားစီခွဲထားနိုင်တယ်။</p>\n</li>\n<li>\n<p><strong>ထိန်းသိမ်းရလွယ်ကူခြင်း -</strong> App တစ်ခုလုံးကို မထိခိုက်စေဘဲ အစိတ်အပိုင်းတွေကို ပြင်ဆင်ရ၊ အစားထိုးရ လွယ်ကူတယ်။</p>\n</li>\n<li>\n<p><strong>Test လုပ်ရလွယ်ကူခြင်း -</strong> Layer တစ်ခုချင်းစီကို သီးခြားစီ test လုပ်နိုင်တယ်။</p>\n</li>\n<li>\n<p><strong>တိုးချဲ့ရလွယ်ကူခြင်း -</strong> Application အကြီးကြီးတွေကို ထိထိရောက်ရောက် စုဖွဲ့နိုင်တယ်။</p>\n</li>\n</ul>\n"
    }), createVNode($$Aside, {
      title: "အနှစ်ချုပ်",
      type: "tip",
      "set:html": "<p>MV* pattern တွေက data, UI နဲ့ control logic ကို ခွဲခြားပေးတဲ့အတွက် ထိန်းသိမ်းရ တိုးချဲ့ရလွယ်ကူစေတယ်။</p><ul>\n<li>\n<p><strong>MVC:</strong> Controller က Model ကို update လုပ်ပြီး View က Model ကို စောင့်ကြည့်တယ်။ ရိုးရှင်းတဲ့ app တွေအတွက် ကောင်းတယ်။</p>\n</li>\n<li>\n<p><strong>MVP:</strong> Presenter က View နဲ့ Model နှစ်ခုလုံးကို စီမံခန့်ခွဲပြီး UI update တွေကို ပိုပြီးထိန်းချုပ်နိုင်တယ်။</p>\n</li>\n<li>\n<p><strong>MVVM:</strong> ViewModel က data တွေကို UI နဲ့ အလိုအလျောက် ချိတ်ဆက်ပေးတယ်။ Dynamic ဖြစ်ပြီး interactive ဖြစ်တဲ့ UI တွေအတွက် အကောင်းဆုံးပဲ။</p>\n</li>\n</ul><p>MV* pattern တွေကို သုံးခြင်းက အထူးသဖြင့် frontend project အကြီးကြီးတွေမှာ app တွေကို test လုပ်ရ၊ ထိန်းသိမ်းရ၊ တိုးချဲ့ရ ပိုလွယ်ကူစေတယ်။</p>"
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

const url = "src/content/docs/fe-architecture/mv-star/patterns-comparison.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/fe-architecture/mv-star/patterns-comparison.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/fe-architecture/mv-star/patterns-comparison.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
