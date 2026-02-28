import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "Frontend Architecture Patterns မိတ်ဆက်",
  "description": "Frontend Architecture Patterns မိတ်ဆက်"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "frontend-architecture-ဆိုတာ-ဘာလဲ",
    "text": "Frontend Architecture ဆိုတာ ဘာလဲ?"
  }, {
    "depth": 3,
    "slug": "architecture-မကောင်းရင်-ဘာဖြစ်မလဲ-the-spaghetti-code",
    "text": "Architecture မကောင်းရင် ဘာဖြစ်မလဲ? (The Spaghetti Code)"
  }, {
    "depth": 3,
    "slug": "architecture-ကောင်းရင်-ဘာဖြစ်မလဲ",
    "text": "Architecture ကောင်းရင် ဘာဖြစ်မလဲ?"
  }, {
    "depth": 3,
    "slug": "ဒီ-course-မှာ-ဘာတွေ-လေ့လာရမလဲ",
    "text": "ဒီ Course မှာ ဘာတွေ လေ့လာရမလဲ?"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "မင်္ဂလာပါ",
      "set:html": "<p>ဒီ Course ကနေ ကြိုဆိုပါတယ်။ ခေတ်မီ Web Application တွေ တည်ဆောက်တဲ့အခါ အသုံးပြုတဲ့ <strong>Frontend Architecture Patterns</strong> တွေကို လေ့လာသွားမှာ ဖြစ်ပါတယ်။\nCode ရေးတတ်ရုံနဲ့ မပြီးပါဘူး။ Code တွေကို ဘယ်လို စနစ်တကျ ဖွဲ့စည်းမလဲ၊ ရေရှည်မှာ ဘယ်လို ထိန်းသိမ်းမလဲ ဆိုတာက ပိုအရေးကြီးပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"frontend-architecture-ဆိုတာ-ဘာလဲ\">Frontend Architecture ဆိုတာ ဘာလဲ?</h3><a class=\"sl-anchor-link\" href=\"#frontend-architecture-ဆိုတာ-ဘာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Frontend Architecture ဆိုတာ ဘာလဲ?”</span></a></div>\n<p>အိမ်တစ်လုံး ဆောက်တော့မယ် ဆိုပါစို့။ အုတ်တွေ၊ သဲတွေ၊ ဘိလပ်မြေတွေ ရှိရုံနဲ့ မရပါဘူး။ <strong>“အိမ်ပုံစံ (Blueprint)”</strong> လိုပါတယ်။</p>\n<ul>\n<li>ဘယ်နားမှာ အိပ်ခန်းထားမလဲ?</li>\n<li>မီးကြိုးတွေ ဘယ်လို သွယ်မလဲ?</li>\n<li>ရေပိုက်တွေ ဘယ်လို ဆက်မလဲ?</li>\n</ul>\n<p>ဒါတွေ ကြိုမစဉ်းစားဘဲ ဆောက်လိုက်ရင် နေလို့ရတဲ့ အိမ်တစ်လုံး ဖြစ်လာနိုင်ပေမယ့်၊ ရေရှည်မှာ ပြင်ရခက်၊ တိုးချဲ့ရခက်တဲ့ အိမ်ဖြစ်သွားပါလိမ့်မယ်။</p>\n<p>Frontend Architecture ဆိုတာလည်း ဒီသဘောတရားပါပဲ။ Project တစ်ခု မစခင်မှာ Folder တွေ ဘယ်လို ဖွဲ့စည်းမလဲ၊ Data တွေ ဘယ်လို စီးဆင်းမလဲ၊ Component တွေ ဘယ်လို ချိတ်ဆက်မလဲ ဆိုတာကို ကြိုတင် စီမံထားခြင်း ဖြစ်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"architecture-မကောင်းရင်-ဘာဖြစ်မလဲ-the-spaghetti-code\">Architecture မကောင်းရင် ဘာဖြစ်မလဲ? (The Spaghetti Code)</h3><a class=\"sl-anchor-link\" href=\"#architecture-မကောင်းရင်-ဘာဖြစ်မလဲ-the-spaghetti-code\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Architecture မကောင်းရင် ဘာဖြစ်မလဲ? (The Spaghetti Code)”</span></a></div>\n<p>Architecture မရှိဘဲ ရေးထားတဲ့ Project ဟာ <strong>“Spaghetti Code”</strong> နဲ့ တူပါတယ်။</p>\n<ul>\n<li>❌ <strong>ပြင်ရခက်မယ်:</strong> တစ်နေရာ ပြင်လိုက်ရင် တခြားနေရာတွေပါ လိုက်ပျက်ကုန်မယ်။</li>\n<li>❌ <strong>နှေးကွေးမယ်:</strong> Feature အသစ် ထည့်ချင်ရင် အချိန်အကြာကြီး ပေးရမယ်။</li>\n<li>❌ <strong>ပူးပေါင်းရခက်မယ်:</strong> Team နဲ့ လုပ်တဲ့အခါ သူရေးတာ ကိုယ်နားမလည်၊ ကိုယ်ရေးတာ သူနားမလည် ဖြစ်မယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"architecture-ကောင်းရင်-ဘာဖြစ်မလဲ\">Architecture ကောင်းရင် ဘာဖြစ်မလဲ?</h3><a class=\"sl-anchor-link\" href=\"#architecture-ကောင်းရင်-ဘာဖြစ်မလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Architecture ကောင်းရင် ဘာဖြစ်မလဲ?”</span></a></div>\n<ul>\n<li>✅ <strong>စနစ်ကျမယ်:</strong> ဘယ်ဖိုင်က ဘယ်မှာရှိလဲ မျက်စိမှိတ် ရှာလို့ရမယ်။</li>\n<li>✅ <strong>မြန်ဆန်မယ်:</strong> Feature အသစ်တွေ ဒိုင်းဒိုင်း ထည့်နိုင်မယ်။</li>\n<li>✅ <strong>Scalable ဖြစ်မယ်:</strong> User တွေ များလာလည်း၊ Feature တွေ များလာလည်း Project က ရှုပ်မသွားဘူး။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဒီ-course-မှာ-ဘာတွေ-လေ့လာရမလဲ\">ဒီ Course မှာ ဘာတွေ လေ့လာရမလဲ?</h3><a class=\"sl-anchor-link\" href=\"#ဒီ-course-မှာ-ဘာတွေ-လေ့လာရမလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဒီ Course မှာ ဘာတွေ လေ့လာရမလဲ?”</span></a></div>\n<p>ကျွန်တော်တို့ အဓိက Architecture Pattern ကြီး (၄) ခုကို လေ့လာသွားပါမယ်။</p>\n<ol>\n<li><strong>Monolithic Architecture:</strong> အရာအားလုံး တစ်စုတစ်စည်းတည်း ရှိနေတဲ့ ပုံစံ (အခြေခံ အကျဆုံး)</li>\n<li><strong>Component-Based Architecture:</strong> LEGO တုံးလေးတွေလို ဆက်ပြီး တည်ဆောက်တဲ့ ပုံစံ (React, Vue တို့ရဲ့ အခြေခံ)</li>\n<li><strong>Modular Architecture:</strong> Feature အလိုက် အခန်းကန့်ပြီး ဖွဲ့စည်းတဲ့ ပုံစံ</li>\n<li><strong>Micro-Frontends:</strong> Application အကြီးကြီးကို App အသေးလေးတွေ ခွဲထုတ်ပြီး တည်ဆောက်တဲ့ ပုံစံ</li>\n</ol>"
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

const url = "src/content/docs/fe-architecture/introduction/welcome.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/fe-architecture/introduction/welcome.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/fe-architecture/introduction/welcome.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
