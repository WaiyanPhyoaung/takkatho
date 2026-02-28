import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import 'clsx';

const frontmatter = {
  "title": "Database Structure: Foreign Key",
  "description": "Foreign Key"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "foreign-key",
    "text": "Foreign Key"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"foreign-key\">Foreign Key</h2><a class=\"sl-anchor-link\" href=\"#foreign-key\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Foreign Key”</span></a></div>\n<p>Foreign Key က table နှစ်ခုကြားမှာ relationship တစ်ခုကို ဖန်တီးပေးတဲ့ အဓိကကျတဲ့ field (column) တစ်ခုဖြစ်ပါတယ်။ Table နှစ်ခုကို ချိတ်ဆက်ချင်တယ်ဆိုရင်\nပထမ table က primary key ကို ကူးယူပြီး ဒုတိယ table ထဲကို ထည့်သွင်းခြင်းဖြင့် ချိတ်ဆက်ရပါတယ်။\nအဲဒီအခါ ပထမ table ထဲက primary key က ဒုတိယ table အတွက် Foreign Key ဖြစ်လာပါတယ်။</p>\n<p>Foreign Key လို့ခေါ်ရတဲ့အကြောင်းရင်းကတော့ ဒုတိယ table မှာ သူ့ကိုယ်ပိုင် Primary Key ရှိနေပြီးသား ဖြစ်ပြီး\nပထမ Table တစ်ခုဆီကနေ “ဧည့်သည်” (foreign) အဖြစ် လာရောက်ချိတ်ဆက်ပေးတဲ့ key ဖြစ်တဲ့အတွက် ဖြစ်ပါတယ်။</p>\n<p>ဥပမာ -</p>\n<p><strong>Customers table</strong></p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th><code dir=\"auto\">CustomerID</code> (PK)</th><th>Name</th><th>Email</th></tr></thead><tbody><tr><td><code dir=\"auto\">1</code></td><td>Alice</td><td><a href=\"mailto:alice@gmail.com\">alice@gmail.com</a></td></tr><tr><td><code dir=\"auto\">2</code></td><td>Bob</td><td><a href=\"mailto:bob@gmail.com\">bob@gmail.com</a></td></tr></tbody></table>\n<blockquote>\n<p><code dir=\"auto\">CustomerID</code> က Customers table အတွက် primary key ဖြစ်ပါတယ်။</p>\n</blockquote>\n<p><strong>Orders table</strong></p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>OrderID (PK)</th><th>OrderDate</th><th><code dir=\"auto\">CustomerID</code> (FK)</th></tr></thead><tbody><tr><td>101</td><td>2024-06-01</td><td><code dir=\"auto\">1</code></td></tr><tr><td>102</td><td>2024-05-01</td><td><code dir=\"auto\">1</code></td></tr><tr><td>103</td><td>2024-07-01</td><td><code dir=\"auto\">2</code></td></tr></tbody></table>\n<blockquote>\n<p><code dir=\"auto\">OrderID</code> ဟာ Orders table အတွက် <code dir=\"auto\">Primary Key</code> ဖြစ်ပါတယ်။</p>\n<p>ဒီနေရာမှာ <code dir=\"auto\">CustomerID</code> ကတော့ Orders table မှာ <code dir=\"auto\">Foreign Key</code> ဖြစ်ပြီး၊ Customers table ထဲက <code dir=\"auto\">CustomerID (PK)</code> ကို ရည်ညွှန်းပါတယ်။ ဒီ <code dir=\"auto\">Foreign Key</code> က အော်ဒါတစ်ခုစီကို ဘယ် customer က မှာယူခဲ့တယ်ဆိုတာကို ချိတ်ဆက်ပေးတာပဲ ဖြစ်ပါတယ်။</p>\n</blockquote>\n<p>Customer တစ်ယောက်က အော်ဒါတစ်ခု မှာတဲ့အခါ အဲဒီအော်ဒါရဲ့အချက်အလက်တွေကို Orders table မှာ သိမ်းဆည်းပါတယ်။\nဒီအော်ဒါကို ဘယ် customer က မှာတယ်ဆိုတာသိဖို့ Customers table ထဲက customer ရဲ့ Primary Key ဖြစ်တဲ့ CustomerID ကို Orders table ထဲမှာ Foreign Key အနေဖြင့် ထည့်သွင်းပါတယ်။</p>"
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
const url = "src/content/docs/relational-database/Terminology/structure-related-terms/foreign-key.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/relational-database/Terminology/structure-related-terms/foreign-key.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/relational-database/Terminology/structure-related-terms/foreign-key.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
