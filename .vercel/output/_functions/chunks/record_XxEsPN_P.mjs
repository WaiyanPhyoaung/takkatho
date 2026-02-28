import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import 'clsx';

const frontmatter = {
  "title": "Database Structure: Record",
  "description": "Record"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "record",
    "text": "Record"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"record\">Record</h2><a class=\"sl-anchor-link\" href=\"#record\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Record”</span></a></div>\n<p>Table ထဲက row တစ်ခုစီကို Record (သို့မဟုတ်) Tuple လို့ ခေါ်ပါတယ်။ Record တစ်ခုစီက Table မှာရှိတဲ့ အရာဝတ္ထု (entity) တစ်ခုချင်းစီကို ကိုယ်စားပြုပါတယ်။\n(ဥပမာ - Customers စားပွဲတစ်ခုမှာ record တစ်ခုစီက customer တစ်ယောက်ရဲ့ အချက်အလက်အပြည့်အစုံကို ဖော်ပြပါတယ်။)\nDatabase ဒီဇိုင်းကောင်းကောင်းတစ်ခုမှာ record တွေ (row တစ်ကြောင်းလုံး data အကုန်တူနေတာမျိုး) လုံးဝထပ်နေတာမျိုး မရှိပါဘူး။\nRecord တစ်ခုမှာ သူ့ရဲ့ table မှာရှိတဲ့ fields တွေအားလုံး အမြဲတမ်းပါဝင်ပါတယ်။ အချို့သော fields တွေမှာ တန်ဖိုးရှိသည်ဖြစ်စေ၊ မရှိသည်ဖြစ်စေ (NULL ဖြစ်သည်ဖြစ်စေ) အဲဒီ field တွေ အားလုံးက record ရဲ့ အစိတ်အပိုင်းအဖြစ် ပါဝင်နေပါတယ်။</p>\n<p>ဥပမာ - Students table မှာ ID၊ နာမည် (Name)၊ ဖုန်း ဆိုပြီး field (columns) ၃ ခု ရှိတယ်ဆိုပါစို့။\nrecord တစ်ခုစီဟာ ဒီfield ၃ ခုစလုံးနှင့် ပါဝင်ဖွဲ့စည်းထားတာ ဖြစ်ပါတယ်။ Student ရဲ့ Phone field က NULL ဖြစ်နေရင်တောင် Phone field မပါဝင်ဘဲ record က တိုသွားတာမျိုး မရှိပါဘူး။</p>\n<p><strong>Students</strong></p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>StudentId (PK)</th><th>Name</th><th>Phone</th></tr></thead><tbody><tr><td>1</td><td>Alice</td><td>123456789</td></tr><tr><td>2</td><td>Bob</td><td>823456789</td></tr><tr><td>3</td><td>Charlie</td><td>(NULL)</td></tr></tbody></table>\n<ul>\n<li>Student table မှာ အလျားလိုက်ရှိတဲ့ row တစ်တန်းစီဟာ data ယူနစ်တစ်ခုစီ ဖြစ်တဲ့ Record ဖြစ်ပါတယ်။</li>\n<li>Charlie ရဲ့ ဖုန်းနံပါတ်က NULL ဖြစ်နေရင်တောင် အဲဒီ field ဟာ record ထဲမှာ ပါဝင်နေဆဲ ဖြစ်ပါတယ်။ record တစ်ခုမှာ table ရဲ့ field (columns) အားလုံး အမြဲတမ်းအပြည့်အစုံပါဝင်ပါတယ်။</li>\n<li>StudentId (primary key) က record တစ်ခုနှင့်တစ်ခု မတူညီအောင် (unique ဖြစ်အောင်) နှင့် လုံးဝထပ်တူမဖြစ်အောင် အာမခံပေးပါတယ်။</li>\n</ul>"
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
const url = "src/content/docs/relational-database/Terminology/structure-related-terms/record.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/relational-database/Terminology/structure-related-terms/record.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/relational-database/Terminology/structure-related-terms/record.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
