import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import 'clsx';

const frontmatter = {
  "title": "Database Structure: Primary Key",
  "description": "Primary Key"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "primary-key",
    "text": "Primary Key"
  }, {
    "depth": 3,
    "slug": "best-practices",
    "text": "Best Practices"
  }, {
    "depth": 3,
    "slug": "primary-key-က-ဘာကြောင့်အရေးကြီးတာလဲ",
    "text": "Primary key က ဘာကြောင့်အရေးကြီးတာလဲ။"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"primary-key\">Primary Key</h2><a class=\"sl-anchor-link\" href=\"#primary-key\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Primary Key”</span></a></div>\n<p>Primary Key ဆိုတာ database table တစ်ခုမှာရှိတဲ့ record(row) တစ်ခုစီကို  တိတိကျကျခွဲခြား (unique) စွာဖြင့် ထုတ်ယူပေးနိုင်သော field (သို့မဟုတ်) set of fields ဖြစ်ပြီး\nတခြား table တွေနှင့် relationship တည်ဆောက်ဖို့ကိုလည်း ကူညီပေးပါတယ်။</p>\n<p>Primary Key တစ်ခုဟာ Candidate Key အတွက် သတ်မှတ်ထားတဲ့ စည်းမျဉ်းတွေအတိုင်း အတိအကျ ကိုက်ညီရပါမယ်။ ဒီလိုအပ်ချက်ကို ပြည့်မီဖို့ကတော့ လွယ်ကူပါတယ်။\nဘာကြောင့်လဲဆိုတော့ Primary Key ကို table ထဲမှာရှိတဲ့ Candidate Key တွေထဲကနေ ရွေးချယ်ရတာမလို့ပဲ ဖြစ်ပါတယ်။</p>\n<p>ကောင်းမွန်စွာ ဒီဇိုင်းဆွဲထားတဲ့ relational database ထဲက table တိုင်းမှာ Primary Key တစ်ခု မဖြစ်မနေ ရှိရပါမယ်။\nPrimary Key မရှိရင် record တစ်ခုချင်းစီကို တိကျသေချာစွာ ရှာဖွေတာ၊ ပြင်ဆင်တာ၊ ဖျက်ပစ်တာတွေ လုပ်ဖို့ မဖြစ်နိုင်ပါဘူး။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"best-practices\">Best Practices</h3><a class=\"sl-anchor-link\" href=\"#best-practices\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Best Practices”</span></a></div>\n<p>Primary Key ကို ရွေးချယ်တဲ့အခါ အောက်ပါအချက်တွေကို လိုက်နာသင့်ပါတယ်။</p>\n<ol>\n<li>တိုတိုရှင်းရှင်းနှင့် တိကျတဲ့ data အမျိုးအစားရှိတဲ့ Candidate Key ကို ရွေးချယ်ပါ။ (ဥပမာ- ဂဏန်းအမျိုးအစားဖြစ်တဲ့ ID field)\n<ul>\n<li>သင့်မှာ field တစ်ခုတည်းပါဝင်တဲ့ Candidate Key နှင့် field တွေပေါင်းစပ်ထားတဲ့ Candidate Key ရှိတယ်ဆိုရင် ရိုးရှင်းတဲ့ field တစ်ခုတည်းပါဝင်တဲ့ Candidate Key ကို ရွေးချယ်ပါ။</li>\n<li>field အရေအတွက် အနည်းဆုံးပါဝင်တဲ့ Candidate Key ကို အသုံးပြုတာဟာ အကောင်းဆုံးပါပဲ။ (စီမံခန့်ခွဲရလွယ်ကူပြီး performance အတွက် ပိုကောင်းပါတယ်)</li>\n</ul>\n</li>\n<li>Artificial Key ကို သုံးဖို့ မကြောက်ပါနှင့်။\n<ul>\n<li>Natural Key (ဥပမာ- မှတ်ပုံတင်နံပါတ်) တွေက အမြဲတမ်း unique မဖြစ်တာ၊ ဒါမှမဟုတ် နောက်ပိုင်းမှာ ပြောင်းလဲသွားနိုင်တာမျိုးတွေ ရှိတတ်ပါတယ်။</li>\n<li>ဒါကြောင့် အဲဒီလို Natural Key တွေက အားမကိုးရဘူးဆိုရင် Artificial Key (ဥပမာ- Auto-Increment ID) ကို သုံးတာက ပိုပြီးစိတ်ချရပါတယ်။</li>\n</ul>\n</li>\n<li>ဘယ်တော့မှ မပြောင်းလဲမယ့် Field ကို ရွေးပါ။\n<ul>\n<li>Primary Key ရဲ့ တန်ဖိုးဟာ record တစ်ခုကို ဖန်တီးလိုက်တဲ့အချိန်ကစပြီး ဘယ်တော့မှ ပြောင်းလဲသွားလို့ မရပါဘူး။ ဒါကြောင့် တန်ဖိုးပြောင်းလဲနိုင်ခြေရှိတဲ့ field (ဥပမာ- Email, Phone Number) တွေကို Primary Key အဖြစ် ဘယ်တော့မှ မသတ်မှတ်သင့်ပါဘူး။</li>\n</ul>\n</li>\n<li>Primary key က Unique ဖြစ်ပြီး Null မဖြစ်ရပါဘူး။\n<ul>\n<li>Record တိုင်းမှာ ဒီ key ရဲ့ တန်ဖိုးက လုံးဝမတူညီရပါဘူး။</li>\n<li>ဒီ key မှာ တန်ဖိုး အမြဲတမ်းရှိနေရပါမယ်။ ဗလာ (empty)၊ null ဖြစ်လို့ မရပါဘူး။</li>\n</ul>\n</li>\n</ol>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"primary-key-က-ဘာကြောင့်အရေးကြီးတာလဲ\">Primary key က ဘာကြောင့်အရေးကြီးတာလဲ။</h3><a class=\"sl-anchor-link\" href=\"#primary-key-က-ဘာကြောင့်အရေးကြီးတာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Primary key က ဘာကြောင့်အရေးကြီးတာလဲ။”</span></a></div>\n<ul>\n<li>Record တွေထပ်နေတာတွေ (duplicate records) မရှိအောင် ကာကွယ်ပေးပါတယ်။</li>\n<li>Primary key ကို တခြား table တွေက Foreign Key အဖြစ် အသုံးပြုပြီး relations တွေ တည်ဆောက်နိုင်ပါတယ်။</li>\n<li>Data ရှာဖွေတဲ့အခါ အလွန်မြန်ဆန်စေပါတယ်။ Database တွေက Primary Key တွေကို အလိုအလျောက် Index အဖြစ် သတ်မှတ်ပေးထားတဲ့အတွက် record တွေကို ရှာဖွေတဲ့အခါ အချိန်အများကြီး ပိုမြန်စေပါတယ်။</li>\n</ul>"
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
const url = "src/content/docs/relational-database/Terminology/structure-related-terms/primary-key.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/relational-database/Terminology/structure-related-terms/primary-key.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/relational-database/Terminology/structure-related-terms/primary-key.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
