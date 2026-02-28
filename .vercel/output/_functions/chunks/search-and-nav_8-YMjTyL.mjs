import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import 'clsx';

const frontmatter = {
  "title": "အဆင့်မြင့် သွားလာခြင်း (Search & File Nav)",
  "description": "f, t ဖြင့်ရှာဖွေခြင်း၊ Document တစ်ခုလုံး အပေါ်အောက် သွားလာခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "1-စာကြောင်းအတွင်း-အတိအကျ-ခုန်ခြင်း-f-နှင့်-t",
    "text": "1. စာကြောင်းအတွင်း အတိအကျ ခုန်ခြင်း (f နှင့် t)"
  }, {
    "depth": 3,
    "slug": "2-ဖိုင်တစ်ဖိုင်လုံးအတွင်း-ရှာဖွေခြင်း--နှင့်",
    "text": "2. ဖိုင်တစ်ဖိုင်လုံးအတွင်း ရှာဖွေခြင်း (/ နှင့် ?)"
  }, {
    "depth": 3,
    "slug": "3-အပေါ်အောက်-အမြန်သွားလာခြင်း-vertical-navigation",
    "text": "3. အပေါ်အောက် အမြန်သွားလာခြင်း (Vertical Navigation)"
  }, {
    "depth": 4,
    "slug": "စာမျက်နှာကို-လှိမ့်ခြင်း-scrolling",
    "text": "စာမျက်နှာကို လှိမ့်ခြင်း (Scrolling)"
  }, {
    "depth": 3,
    "slug": "4-ကွင်းပိတ်ကွင်းစများ-ရှာဖွေခြင်း",
    "text": "4. ကွင်းပိတ်/ကွင်းစများ ရှာဖွေခြင်း (%)"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p><code dir=\"auto\">h, j, k, l</code> နဲ့ စကားလုံးတွေ ခုန်တတ်ပြီဆိုရင်၊ ပိုပြီး တိကျမြန်ဆန်တဲ့ အဆင့်မြင့်နည်းလမ်းတွေကို လေ့လာပါမယ်။ ဒီနည်းလမ်းတွေက “မျက်စိနဲ့ ဘယ်နေရာကို ကြည့်လိုက်လဲ၊ လက်က အဲဒီကို တန်းရောက်သွားတယ်” ဆိုတဲ့ ခံစားချက်ကို ပေးပါလိမ့်မယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"1-စာကြောင်းအတွင်း-အတိအကျ-ခုန်ခြင်း-f-နှင့်-t\">1. စာကြောင်းအတွင်း အတိအကျ ခုန်ခြင်း (<code dir=\"auto\">f</code> နှင့် <code dir=\"auto\">t</code>)</h3><a class=\"sl-anchor-link\" href=\"#1-စာကြောင်းအတွင်း-အတိအကျ-ခုန်ခြင်း-f-နှင့်-t\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “1. စာကြောင်းအတွင်း အတိအကျ ခုန်ခြင်း (f နှင့် t)”</span></a></div>\n<p>ဒါဟာ Vim သမားတွေ အကြိုက်ဆုံး Motion တွေထဲက တစ်ခုပါ။ ရိုက်ရမယ့် ပုံစံက <strong><code dir=\"auto\">[Command] + [ကိုယ်သွားချင်တဲ့ စာလုံး]</code></strong> ဖြစ်ပါတယ်။</p>\n<ul>\n<li><strong><code dir=\"auto\">f</code> (find):</strong> ကိုယ်ရှာတဲ့ စာလုံးပေါ်ကို အတိအကျ သွားရပ်မယ်။\n<ul>\n<li><em>ဥပမာ:</em> စာကြောင်းထဲက ပထမဆုံး တွေ့တဲ့ <code dir=\"auto\">\"</code> နေရာကို သွားချင်ရင် <code dir=\"auto\">f\"</code> လို့လွယ်လွယ်လေး ရိုက်လိုက်ရုံပါပဲ။</li>\n</ul>\n</li>\n<li><strong><code dir=\"auto\">F</code> (Find backward):</strong> အနောက်ကို ပြန်ရှာတာပါ။ (Shift + f)</li>\n<li><strong><code dir=\"auto\">t</code> (till):</strong> ကိုယ်ရှာတဲ့ စာလုံးရဲ့ <strong>အရှေ့ကပ်ရက်</strong> မှာ သွားရပ်မယ်။ (ဖျက်ဖို့၊ အစားထိုးဖို့ အရမ်းသုံးဝင်ပါတယ်)</li>\n<li><strong><code dir=\"auto\">T</code>:</strong> အနောက်ဘက်သို့ ပြန်ရှာပြီး နောက်ကပ်ရက်မှာ ရပ်မယ်။</li>\n<li>💡 <strong><code dir=\"auto\">;</code> (Semicolon):</strong> ရှာနေတဲ့ စာလုံးကို နောက်ထပ် ဆက်ရှာရန်။ (ဥပမာ <code dir=\"auto\">f\"</code> ရိုက်ပြီး နောက်ထပ် <code dir=\"auto\">\"</code> ကို သွားချင်ရင် လိုက်ရိုက်စရာမလိုဘဲ <code dir=\"auto\">;</code> နှိပ်လိုက်ရုံပါပဲ)</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"2-ဖိုင်တစ်ဖိုင်လုံးအတွင်း-ရှာဖွေခြင်း--နှင့်\">2. ဖိုင်တစ်ဖိုင်လုံးအတွင်း ရှာဖွေခြင်း (<code dir=\"auto\">/</code> နှင့် <code dir=\"auto\">?</code>)</h3><a class=\"sl-anchor-link\" href=\"#2-ဖိုင်တစ်ဖိုင်လုံးအတွင်း-ရှာဖွေခြင်း--နှင့်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “2. ဖိုင်တစ်ဖိုင်လုံးအတွင်း ရှာဖွေခြင်း (/ နှင့် ?)”</span></a></div>\n<p>Chrome ဘရောက်ဇာမှာ <code dir=\"auto\">Ctrl + F</code> သုံးသလိုပါပဲ။</p>\n<ul>\n<li><strong><code dir=\"auto\">/</code> (Forward Search):</strong> <code dir=\"auto\">/</code> နှိပ်လိုက်ရင် အောက်ခြေမှာ စာရိုက်လို့ရသွားပါမယ်။ ကိုယ်ရှာချင်တဲ့ စကားလုံးရိုက်ပြီး Enter ခေါက်လိုက်ပါ။\n<ul>\n<li>နောက်ထပ် ထပ်ရှာချင်ရင် <strong><code dir=\"auto\">n</code> (next)</strong> နှိပ်ပါ။</li>\n<li>အနောက်ကို ပြန်ဆုတ်ရှာချင်ရင် <strong><code dir=\"auto\">N</code> (Shift + n)</strong> နှိပ်ပါ။</li>\n</ul>\n</li>\n<li><strong><code dir=\"auto\">?</code> (Backward Search):</strong> အနောက်ကနေ အရှေ့ကို ပြန်ရှာတာကလွဲရင် <code dir=\"auto\">/</code> နဲ့ အတူတူပါပဲ။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"3-အပေါ်အောက်-အမြန်သွားလာခြင်း-vertical-navigation\">3. အပေါ်အောက် အမြန်သွားလာခြင်း (Vertical Navigation)</h3><a class=\"sl-anchor-link\" href=\"#3-အပေါ်အောက်-အမြန်သွားလာခြင်း-vertical-navigation\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “3. အပေါ်အောက် အမြန်သွားလာခြင်း (Vertical Navigation)”</span></a></div>\n<p>Code တွေ ရာချီ၊ ထောင်ချီ ရှည်လာတဲ့အခါ <code dir=\"auto\">j</code>, <code dir=\"auto\">k</code> တွေ ဖိထားရင် အချိန်အရမ်းကုန်ပါတယ်။</p>\n<ul>\n<li><strong><code dir=\"auto\">gg</code> (Go to top):</strong> ဖိုင်ရဲ့ အပေါ်ထိပ်ဆုံး (ပထမဆုံးစာကြောင်း) ကို သွားရန်။</li>\n<li><strong><code dir=\"auto\">G</code> (Go to bottom):</strong> ဖိုင်ရဲ့ နောက်ဆုံး စာကြောင်းကို သွားရန်။</li>\n<li><strong><code dir=\"auto\">{</code> နှင့် <code dir=\"auto\">}</code>:</strong> စာပိုဒ် (Paragraph / Code Block လွတ်နေသော နေရာများ) တစ်ခုလပ်စီ အပေါ်အောက် ခုန်သွားရန်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"စာမျက်နှာကို-လှိမ့်ခြင်း-scrolling\">စာမျက်နှာကို လှိမ့်ခြင်း (Scrolling)</h4><a class=\"sl-anchor-link\" href=\"#စာမျက်နှာကို-လှိမ့်ခြင်း-scrolling\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “စာမျက်နှာကို လှိမ့်ခြင်း (Scrolling)”</span></a></div>\n<ul>\n<li><strong><code dir=\"auto\">Ctrl + d</code> (Down):</strong> မျက်နှာပြင် တစ်ဝက် အောက်သို့ဆင်းရန်။ (အရမ်းမြန်လွန်းလို့ အသုံးအများဆုံးပါပဲ)</li>\n<li><strong><code dir=\"auto\">Ctrl + u</code> (Up):</strong> မျက်နှာပြင် တစ်ဝက် အပေါ်သို့တက်ရန်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"4-ကွင်းပိတ်ကွင်းစများ-ရှာဖွေခြင်း\">4. ကွင်းပိတ်/ကွင်းစများ ရှာဖွေခြင်း (<code dir=\"auto\">%</code>)</h3><a class=\"sl-anchor-link\" href=\"#4-ကွင်းပိတ်ကွင်းစများ-ရှာဖွေခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “4. ကွင်းပိတ်/ကွင်းစများ ရှာဖွေခြင်း (%)”</span></a></div>\n<p>Programmer တွေ ခဏခဏ ဒုက္ခရောက်ရတဲ့ ပြဿနာက “<code dir=\"auto\">}</code> ကွင်းပိတ် ဘယ်မြောက်သွားလဲ” ဆိုတာပါပဲ။ Vim မှာ ဒီပြဿနာ မရှိပါဘူး။</p>\n<ul>\n<li>ကိုယ်စစ်ချင်တဲ့ <code dir=\"auto\">{</code>, <code dir=\"auto\">(</code>, မဟုတ်ရင် <code dir=\"auto\">[</code> တစ်ခုခုပေါ်မှာ နေပြီး <strong><code dir=\"auto\">%</code></strong> ကို နှိပ်လိုက်ပါ။</li>\n<li>သူနဲ့ တွဲဖက်ထားတဲ့ အပိတ်ကွင်းဆီကို သူမသိသူသိ အလိုလို ပြေးသွားပါလိမ့်မယ်။ (နောက်တစ်ခေါက် ထပ်နှိပ်ရင် အဖွင့်ဆီ ပြန်ရောက်လာပါမယ်)</li>\n</ul>"
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
const url = "src/content/docs/vim-motions/advanced-motions/search-and-nav.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/vim-motions/advanced-motions/search-and-nav.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/vim-motions/advanced-motions/search-and-nav.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
