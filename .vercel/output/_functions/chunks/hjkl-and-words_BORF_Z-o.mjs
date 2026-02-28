import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import 'clsx';

const frontmatter = {
  "title": "အခြေခံ သွားလာခြင်း (h, j, k, l & Words)",
  "description": "Arrow keys မသုံးဘဲ Vim ဖြင့် မြန်ဆန်စွာ သွားလာခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "1-the-home-row-h-j-k-l",
    "text": "1. The Home Row: h, j, k, l"
  }, {
    "depth": 3,
    "slug": "2-စကားလုံး-words-အလိုက်-ခုန်ကူးခြင်း",
    "text": "2. စကားလုံး (Words) အလိုက် ခုန်ကူးခြင်း"
  }, {
    "depth": 4,
    "slug": "-အကြီးများ-w-b-e",
    "text": "💡 အကြီးများ (W, B, E)"
  }, {
    "depth": 3,
    "slug": "3-စာကြောင်းတစ်ကြောင်းအတွင်း-သွားလာခြင်း",
    "text": "3. စာကြောင်းတစ်ကြောင်းအတွင်း သွားလာခြင်း"
  }, {
    "depth": 3,
    "slug": "4-ကိန်းဂဏန်းများနှင့်-တွဲသုံးခြင်း",
    "text": "4. ကိန်းဂဏန်းများနှင့် တွဲသုံးခြင်း"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>Vim ကို စသုံးတဲ့အခါ ပထမဆုံး လေ့ကျင့်ရမယ့် အကျင့်တစ်ခုက <strong>“Arrow Keys (အပေါ်/အောက်/ဘေး မြှားများ) ကို လုံးဝ မသုံးတော့ခြင်း”</strong> ပါပဲ။ ဘာလို့လဲဆိုတော့ Arrow keys တွေက Keyboard ရဲ့ အောက်ထောင့်မှာရှိလို့ လက်ကို အဝေးကြီး လှမ်းရွှေ့ရတဲ့အတွက် နှေးကွေးလို့ပါ။</p>\n<p><em>(အောက်ပါ Command များအားလုံးကို <code dir=\"auto\">Esc</code> နှိပ်ထားသည့် <strong>Normal Mode</strong> တွင် အသုံးပြုရပါမည်)</em></p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"1-the-home-row-h-j-k-l\">1. The Home Row: <code dir=\"auto\">h, j, k, l</code></h3><a class=\"sl-anchor-link\" href=\"#1-the-home-row-h-j-k-l\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “1. The Home Row: h, j, k, l”</span></a></div>\n<p>လက်ကီးဘုတ်ပေါ်တင်ထားတဲ့ ပုံမှန်အနေအထားကနေ မခွာဘဲ သွားလာဖို့ Vim က အလယ်တန်း (Home Row) က စာလုံး ၄ လုံးကို သုံးထားပါတယ်။</p>\n<ul>\n<li><strong><code dir=\"auto\">h</code></strong> - ဘယ်ဘက်သို့ သွားရန် (Left)</li>\n<li><strong><code dir=\"auto\">j</code></strong> - အောက်သို့ ဆင်းရန် (Down) 💡 <em>မှတ်ရန်: j က အောက်ကို တွဲကျနေတဲ့ ပုံစံရှိလို့ အောက်ဆင်းတယ်လို့ မှတ်ပါ။</em></li>\n<li><strong><code dir=\"auto\">k</code></strong> - အပေါ်သို့ တက်ရန် (Up)</li>\n<li><strong><code dir=\"auto\">l</code></strong> - ညာဘက်သို့ သွားရန် (Right)</li>\n</ul>\n<p><em>(အစပိုင်းမှာ အရမ်းယဉ်ပါးဖို့ ခက်ပါလိမ့်မယ်။ သို့သော် ၂ ရက်လောက် ကျင့်လိုက်ရင် လက်က အလိုလို သိသွားပါလိမ့်မယ်။)</em></p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"2-စကားလုံး-words-အလိုက်-ခုန်ကူးခြင်း\">2. စကားလုံး (Words) အလိုက် ခုန်ကူးခြင်း</h3><a class=\"sl-anchor-link\" href=\"#2-စကားလုံး-words-အလိုက်-ခုန်ကူးခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “2. စကားလုံး (Words) အလိုက် ခုန်ကူးခြင်း”</span></a></div>\n<p>စာလုံး တစ်လုံးချင်းစီ <code dir=\"auto\">h</code>, <code dir=\"auto\">l</code> နဲ့ သွားနေတာ အရမ်းနှေးပါတယ်။ ဒါကြောင့် Words တွေနဲ့ ခုန်ပါတယ်။</p>\n<ul>\n<li><strong><code dir=\"auto\">w</code></strong> (word) - နောက်တစ်လုံးရဲ့ <strong>အစ</strong> သို့ ခုန်သွားရန်။ (ဥပမာ: hello <code dir=\"auto\">w</code>orld ဆီရောက်သွားမည်)</li>\n<li><strong><code dir=\"auto\">b</code></strong> (back) - အနောက်က စကားလုံးရဲ့ <strong>အစ</strong> သို့ ပြန်ဆုတ်ရန်။</li>\n<li><strong><code dir=\"auto\">e</code></strong> (end) - လက်ရှိ သို့မဟုတ် နောက်စကားလုံးရဲ့ <strong>အဆုံး</strong> သို့ ခုန်သွားရန်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"-အကြီးများ-w-b-e\">💡 အကြီးများ (<code dir=\"auto\">W</code>, <code dir=\"auto\">B</code>, <code dir=\"auto\">E</code>)</h4><a class=\"sl-anchor-link\" href=\"#-အကြီးများ-w-b-e\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “💡 အကြီးများ (W, B, E)”</span></a></div>\n<p><code dir=\"auto\">w</code> အသေးက ပုဒ်ဖြတ်ပုဒ်ရပ် (ဥပမာ <code dir=\"auto\">-</code>, <code dir=\"auto\">_</code>, <code dir=\"auto\">.</code>) တွေတွေ့ရင် ရပ်ပါတယ်။\n<code dir=\"auto\">W</code> (Shift + w) အကြီးကို သုံးရင်တော့ <strong>Space (နေရာလွတ်) တစ်ခုတွေ့မှသာ</strong> ရပ်ပါမယ်။ ကုဒ်တွေ (ဥပမာ <code dir=\"auto\">my-long-variable-name</code>) ကို တစ်ခါတည်း ကျော်ချင်ရင် <code dir=\"auto\">W</code> ကို သုံးပါ။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"3-စာကြောင်းတစ်ကြောင်းအတွင်း-သွားလာခြင်း\">3. စာကြောင်းတစ်ကြောင်းအတွင်း သွားလာခြင်း</h3><a class=\"sl-anchor-link\" href=\"#3-စာကြောင်းတစ်ကြောင်းအတွင်း-သွားလာခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “3. စာကြောင်းတစ်ကြောင်းအတွင်း သွားလာခြင်း”</span></a></div>\n<p>Code တစ်ကြောင်းရဲ့ ထိပ်ဆုံး၊ ဒါမှမဟုတ် အဆုံးကို ချက်ချင်းသွားချင်ရင် သုံးပါတယ်။</p>\n<ul>\n<li><strong><code dir=\"auto\">0</code> (သုည)</strong> - စာကြောင်းရဲ့ <strong>အစဆုံး</strong> နေရာ (နေရာလွတ်တွေဆီ) သွားရန်။</li>\n<li><strong><code dir=\"auto\">^</code> (Caret)</strong> - စာကြောင်းရဲ့ <strong>ပထမဆုံး စာလုံး</strong> ရှိတဲ့နေရာကို သွားရန်။ (Code ရေးရာမှာ ဒါကို ပိုသုံးပါတယ်)</li>\n<li><strong><code dir=\"auto\">$</code> (Dollar)</strong> - စာကြောင်းရဲ့ <strong>နောက်ဆုံး</strong> သို့ သွားရန်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"4-ကိန်းဂဏန်းများနှင့်-တွဲသုံးခြင်း\">4. ကိန်းဂဏန်းများနှင့် တွဲသုံးခြင်း</h3><a class=\"sl-anchor-link\" href=\"#4-ကိန်းဂဏန်းများနှင့်-တွဲသုံးခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “4. ကိန်းဂဏန်းများနှင့် တွဲသုံးခြင်း”</span></a></div>\n<p>Vim Command တွေရှေ့မှာ ကိန်းဂဏန်းတွေ ထည့်လို့ရပါတယ်။</p>\n<ul>\n<li><code dir=\"auto\">3w</code> - စကားလုံး ၃ လုံးစာ ရှေ့ကို ခုန်မယ်။</li>\n<li><code dir=\"auto\">5j</code> - အောက်ကို ၅ ကြောင်း ဆင်းမယ်။</li>\n</ul>\n<p><strong>သတိပြုရန်:</strong> အစပိုင်းမှာ ဂဏန်းတွေ တွက်ပြီးရိုက်ဖို့ အချိန်ယူရတတ်ပါတယ်။ တတ်နိုင်သမျှ တွက်ချက်ခြင်းထက်၊ အမြင်အာရုံနဲ့ တိုက်ရိုက် ခုန်နိုင်တဲ့ နည်းလမ်းတွေကို နောက်သင်ခန်းစာမှာ ဆက်လေ့လာပါမယ်။</p>"
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
const url = "src/content/docs/vim-motions/basic-motions/hjkl-and-words.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/vim-motions/basic-motions/hjkl-and-words.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/vim-motions/basic-motions/hjkl-and-words.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
