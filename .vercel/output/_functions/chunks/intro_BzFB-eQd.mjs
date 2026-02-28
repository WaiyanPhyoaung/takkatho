import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import { m as microFrontend } from './micro-frontend_bGR27IX2.mjs';
import 'clsx';

const frontmatter = {
  "title": "Micro-Frontend Architecture",
  "description": "Micro-Frontend Architecture"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "micro-frontend-ဆိုတာ-ဘာလဲ",
    "text": "Micro-Frontend ဆိုတာ ဘာလဲ?"
  }, {
    "depth": 3,
    "slug": "ဘယ်လို-အလုပ်လုပ်သလဲ",
    "text": "ဘယ်လို အလုပ်လုပ်သလဲ?"
  }, {
    "depth": 3,
    "slug": "ဘယ်အချိန်မှာ-သုံးသင့်လဲ",
    "text": "ဘယ်အချိန်မှာ သုံးသင့်လဲ?"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>Application အကြီးကြီးတွေကို Team အများကြီးနဲ့ ဝိုင်းရေးတဲ့အခါ၊ တစ်ယောက်ရေးတာ တစ်ယောက်စောင့်နေရတာမျိုး မဖြစ်ရအောင် <strong>Micro-Frontend Architecture</strong> ကို အသုံးပြုကြပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"micro-frontend-ဆိုတာ-ဘာလဲ\">Micro-Frontend ဆိုတာ ဘာလဲ?</h3><a class=\"sl-anchor-link\" href=\"#micro-frontend-ဆိုတာ-ဘာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Micro-Frontend ဆိုတာ ဘာလဲ?”</span></a></div>\n<p>Micro-Frontend ဆိုတာ <strong>“Shopping Mall (ကုန်တိုက်ကြီး)”</strong> တစ်ခုနဲ့ တူပါတယ်။\nကုန်တိုက်ကြီး (Shell App) တစ်ခုထဲမှာ -</p>\n<ul>\n<li>🍔 <strong>Food Court</strong> (ဆိုင်တစ်ဆိုင်)</li>\n<li>🎬 <strong>Cinema</strong> (ဆိုင်တစ်ဆိုင်)</li>\n<li>👗 <strong>Clothing Store</strong> (ဆိုင်တစ်ဆိုင်)</li>\n</ul>\n<p>ဒီဆိုင်တွေ အားလုံးဟာ ကုန်တိုက်ကြီး တစ်ခုတည်း အောက်မှာ ရှိနေပေမယ့်၊ ဆိုင်တစ်ဆိုင်ချင်းစီမှာ ကိုယ်ပိုင် မန်နေဂျာ၊ ကိုယ်ပိုင် ဝန်ထမ်း၊ ကိုယ်ပိုင် စည်းမျဉ်းတွေ ရှိကြပါတယ်။\nFood Court ပိတ်ထားလို့ Cinema ပါ လိုက်ပိတ်စရာ မလိုပါဘူး။</p>\n<p>Software မှာလည်း ဒီလိုပါပဲ။</p>\n<ul>\n<li><code dir=\"auto\">Team A</code> က <strong>Checkout</strong> အပိုင်းကို React နဲ့ ရေးမယ်။</li>\n<li><code dir=\"auto\">Team B</code> က <strong>User Profile</strong> အပိုင်းကို Vue နဲ့ ရေးမယ်။</li>\n<li><code dir=\"auto\">Team C</code> က <strong>Product List</strong> အပိုင်းကို Angular နဲ့ ရေးမယ်။</li>\n</ul>\n<p>နောက်ဆုံးကျမှ ဒီ (၃) ခုလုံးကို Web Page တစ်ခုတည်းမှာ ပေါင်းစည်းပြီး ပြလိုက်တာပါ။ User အနေနဲ့ကတော့ App တစ်ခုတည်းလို့ပဲ မြင်ရမှာပါ။</p>\n"
    }), createVNode($$ContentImage, {
      src: microFrontend,
      alt: "Micro frontend Architecture"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဘယ်လို-အလုပ်လုပ်သလဲ\">ဘယ်လို အလုပ်လုပ်သလဲ?</h3><a class=\"sl-anchor-link\" href=\"#ဘယ်လို-အလုပ်လုပ်သလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘယ်လို အလုပ်လုပ်သလဲ?”</span></a></div>\n<ol>\n<li><strong>The Shell (Container):</strong> ဒါက ကုန်တိုက်ရဲ့ အဆောက်အဦးပါ။ Header, Footer နဲ့ Navigation ကို ကိုင်တွယ်ပါတယ်။</li>\n<li><strong>The Micro-Frontends:</strong> ဒါက ဆိုင်ခန်းတွေပါ။ (Checkout, Profile, Product List)</li>\n<li><strong>Integration:</strong> Shell ကနေ လိုအပ်တဲ့ Micro-Frontend ကို လှမ်းခေါ်ပြီး ပြပေးတာပါ။</li>\n</ol>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဘယ်အချိန်မှာ-သုံးသင့်လဲ\">ဘယ်အချိန်မှာ သုံးသင့်လဲ?</h3><a class=\"sl-anchor-link\" href=\"#ဘယ်အချိန်မှာ-သုံးသင့်လဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘယ်အချိန်မှာ သုံးသင့်လဲ?”</span></a></div>\n<ul>\n<li>🏢 <strong>Enterprise Level:</strong> ကုမ္ပဏီ အရမ်းကြီးပြီး Developer ရာချီ ရှိတဲ့အခါ။</li>\n<li>🚀 <strong>Independent Deployment:</strong> Team တစ်ခုက တခြား Team ကို စောင့်စရာ မလိုဘဲ ကိုယ့်အပိုင်း ကိုယ် Deploy လုပ်ချင်တဲ့အခါ။</li>\n<li>🛠 <strong>Legacy Migration:</strong> Code အဟောင်းကြီးကို တဖြည်းဖြည်းချင်း အသစ်ပြောင်းချင်တဲ့အခါ (ဥပမာ - jQuery ကနေ React ကို တစ်စစီ ပြောင်းတာမျိုး)။</li>\n</ul>\n<blockquote>\n<p><strong>သတိပြုရန်:</strong> Project သေးရင် Micro-Frontend မသုံးပါနဲ့။ “ယင်ကောင်ကို တူနဲ့ ထု” သလို ဖြစ်နေပါလိမ့်မယ်။ Complexity အရမ်းများပါတယ်။</p>\n</blockquote>"
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

const url = "src/content/docs/fe-architecture/micro-frontend/intro.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/fe-architecture/micro-frontend/intro.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/fe-architecture/micro-frontend/intro.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
