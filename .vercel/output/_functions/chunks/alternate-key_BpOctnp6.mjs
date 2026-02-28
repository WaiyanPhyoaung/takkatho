import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import 'clsx';

const frontmatter = {
  "title": "Database Structure: Alternate Key and Non-Keys",
  "description": "Alternate Key and Non-Keys"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "alternate-key",
    "text": "Alternate Key"
  }, {
    "depth": 3,
    "slug": "alternate-key-အကြောင်း-အသေးစိတ်",
    "text": "Alternate Key အကြောင်း အသေးစိတ်"
  }, {
    "depth": 2,
    "slug": "non-keys",
    "text": "Non Keys"
  }, {
    "depth": 2,
    "slug": "key-ဝေါဟာရများ-အနှစ်ချုပ်",
    "text": "Key ဝေါဟာရများ အနှစ်ချုပ်"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"alternate-key\">Alternate Key</h2><a class=\"sl-anchor-link\" href=\"#alternate-key\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Alternate Key”</span></a></div>\n<p>Alternate Key ဆိုတာ Primary Key အဖြစ် ရွေးချယ်ခြင်းမခံရတဲ့ မည်သည့် Candidate Key မဆို ဖြစ်ပါတယ်။ Table တစ်ခုအတွက် primary key အဖြစ် အသုံးပြုဖို့ Candidate Key တစ်ခုကို ရွေးချယ်ပြီးသွားပြီဆိုရင် ကျန်ရှိတဲ့ Candidate Key တွေကို Alternate Key အဖြစ် သတ်မှတ်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"alternate-key-အကြောင်း-အသေးစိတ်\">Alternate Key အကြောင်း အသေးစိတ်</h3><a class=\"sl-anchor-link\" href=\"#alternate-key-အကြောင်း-အသေးစိတ်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Alternate Key အကြောင်း အသေးစိတ်”</span></a></div>\n<ul>\n<li>Alternate Key တွေဟာ Primary Key လိုပဲ record တစ်ခုစီကို သီးခြားစီထုတ်ယူနိုင်ပါတယ်။ သူတို့ကို Primary Key အဖြစ် ရွေးချယ်မခံရလို့သာ Alternate Key ဖြစ်သွားတာဖြစ်ပါတယ်။</li>\n<li>Alternate Key တွေကလည်း table ထဲမှာ အချက်အလက်ထပ်နေတာတွေ (duplicate records) မရှိအောင် ကာကွယ်ပေးတဲ့ နေရာမှာ အရေးပါပါတယ်။</li>\n<li>Primary Key မဟုတ်ရင်တောင် Alternate Key တွေကနေတစ်ဆင့် အချက်အလက်တွေကို မြန်မြန်ဆန်ဆန် ရှာဖွေနိုင်ပြီး ပြန်လည်ထုတ်ယူနိုင်ပါတယ်။ သူတို့မှာလည်း index တွေ ထားရှိလေ့ရှိပါတယ်။</li>\n<li>အကယ်၍ လက်ရှိ Primary Key က အနာဂတ်မှာ အကြောင်းအမျိုးမျိုးကြောင့် (ဥပမာ- စီးပွားရေးလုပ်ငန်း လိုအပ်ချက်ပြောင်းလဲမှု) မသင့်တော်တော့ဘူးဆိုရင် Alternate Key တွေထဲကနေ တစ်ခုကို Primary Key အသစ်အဖြစ် ရွေးချယ်အစားထိုးနိုင်တဲ့ အရန်သင့်ရွေးချယ်စရာအဖြစ် ရှိနေပါတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"non-keys\">Non Keys</h2><a class=\"sl-anchor-link\" href=\"#non-keys\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Non Keys”</span></a></div>\n<p>Non-Key ဆိုတာ Candidate Key၊ Primary Key၊ Alternate Key ဒါမှမဟုတ် Foreign Key အဖြစ် လုပ်ဆောင်ခြင်းမရှိတဲ့ field တစ်ခု ဖြစ်ပါတယ်။\nNon-Key ရဲ့ တစ်ခုတည်းသော ရည်ရွယ်ချက်ကတော့ table ရဲ့ characteristic တစ်ခုကို ကိုယ်စားပြုဖို့ပဲ ဖြစ်ပါတယ်။</p>\n<p>ဥပမာ - <code dir=\"auto\">Employees table</code> မှာဆိုရင် <code dir=\"auto\">HireDate</code> (အလုပ်စဝင်သည့်နေ့)၊ <code dir=\"auto\">Notes</code> (မှတ်ချက်) စတဲ့ field တွေဟာ Non-Key တွေဖြစ်ပါတယ်။\nသူတို့ဟာ ဝန်ထမ်းတစ်ယောက်နှင့် သက်ဆိုင်တဲ့ အချက်အလက်တွေကိုပဲ ဖော်ပြပေးတာ ဖြစ်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"key-ဝေါဟာရများ-အနှစ်ချုပ်\">Key ဝေါဟာရများ အနှစ်ချုပ်</h2><a class=\"sl-anchor-link\" href=\"#key-ဝေါဟာရများ-အနှစ်ချုပ်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Key ဝေါဟာရများ အနှစ်ချုပ်”</span></a></div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>ဝေါဟာရ</th><th>အဓိပ္ပာယ်</th></tr></thead><tbody><tr><td>Candidate Key</td><td>record တစ်ခုစီကို unique ဖြစ်စွာ တိတိကျကျခွဲခြားပေးနိုင်တဲ့ မည်သည့် field (သို့မဟုတ် field များ ပေါင်းစပ်မှု) မဆို။</td></tr><tr><td>Primary Key</td><td>table ထဲမှာ record တွေကို ခွဲခြားရှာဖွေထုတ်ယူဖို့အတွက် Candidate Key တွေထဲက ရွေးချယ်ထားတဲ့ Key တစ်ခု။</td></tr><tr><td>Alternate Key</td><td>Primary Key အဖြစ် ရွေးချယ်ခြင်းမခံရတဲ့ ကျန်ရှိနေသော Candidate Key များ။</td></tr><tr><td>Non-Keys</td><td>ဘယ်လို Key အမျိုးအစားမှ မဟုတ်တဲ့ သာမန် အချက်အလက်ဖော်ပြတဲ့ field များ။</td></tr></tbody></table>"
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
const url = "src/content/docs/relational-database/Terminology/structure-related-terms/alternate-key.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/relational-database/Terminology/structure-related-terms/alternate-key.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/relational-database/Terminology/structure-related-terms/alternate-key.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
