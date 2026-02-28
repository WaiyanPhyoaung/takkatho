import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import 'clsx';

const frontmatter = {
  "title": "Normalization: Fourth Normal Form",
  "description": "Fourth Normal Form"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "fourth-normal-form",
    "text": "Fourth Normal Form"
  }, {
    "depth": 3,
    "slug": "multi-valued-dependencies-mvd",
    "text": "Multi-valued dependencies (MVD)"
  }, {
    "depth": 4,
    "slug": "ဥပမာ--စားသောက်ဆိုင်-မီနူး",
    "text": "ဥပမာ- စားသောက်ဆိုင် မီနူး"
  }, {
    "depth": 3,
    "slug": "fourth-normal-form-4nf-သို့-ပြောင်းလဲခြင်း",
    "text": "Fourth Normal Form (4NF) သို့ ပြောင်းလဲခြင်း။"
  }, {
    "depth": 4,
    "slug": "1-location_pizzas-table-4nf",
    "text": "1. Location_Pizzas Table (4NF)"
  }, {
    "depth": 4,
    "slug": "2-location_deliveries-table-4nf",
    "text": "2. Location_Deliveries Table (4NF)"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"fourth-normal-form\">Fourth Normal Form</h2><a class=\"sl-anchor-link\" href=\"#fourth-normal-form\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Fourth Normal Form”</span></a></div>\n<p>Database design အများစုအတွက် 3NF သို့မဟုတ် BCNF အထိ ရောက်အောင် လုပ်ဆောင်နိုင်ရင် လုံလောက်ပါတယ်။\nဒါပေမဲ့ 4NF က 3NF နှင့် BCNF တို့ကနေ ဖြေရှင်းမပေးနိုင်တဲ့ ပြဿနာတစ်မျိုးဖြစ်တဲ့ Multivalued Dependency ကို ရှင်းထုတ်ပေးပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"multi-valued-dependencies-mvd\">Multi-valued dependencies (MVD)</h3><a class=\"sl-anchor-link\" href=\"#multi-valued-dependencies-mvd\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Multi-valued dependencies (MVD)”</span></a></div>\n<p>Multivalued Dependency ဆိုတာ table တစ်ခုတည်းမှာ တစ်ခုနှင့်တစ်ခုလုံးဝမသက်ဆိုင်တဲ့ list နှစ်ခု (သို့မဟုတ်) နှစ်ခုထက်ပိုပြီး သိမ်းဆည်းဖို့ကြိုးစားတဲ့အခါ ဖြစ်ပေါ်လာတဲ့ ပြဿနာဖြစ်ပါတယ်။</p>\n<p>သင်္ကေတ —</p>\n<blockquote>\n<p>A →→ B (A multidetermines B)</p>\n</blockquote>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"ဥပမာ--စားသောက်ဆိုင်-မီနူး\">ဥပမာ- စားသောက်ဆိုင် မီနူး</h4><a class=\"sl-anchor-link\" href=\"#ဥပမာ--စားသောက်ဆိုင်-မီနူး\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဥပမာ- စားသောက်ဆိုင် မီနူး”</span></a></div>\n<p>ပီဇာဆိုင်ခွဲတွေရဲ့ တည်နေရာ၊ သူတို့ရောင်းတဲ့ ပီဇာအမျိုးအစားတွေနှင့် သူတို့အသုံးပြုတဲ့ Delivery Service တွေကို ဖော်ပြထားတဲ့ table တစ်ခုရှိတယ်လို့ ယူဆပါစို့။</p>\n<p><strong>Business Rules:</strong></p>\n<ul>\n<li>ဆိုင်ခွဲတစ်ခုက ပီဇာအမျိုးအစားများစွာကို ရောင်းနိုင်တယ်။ (ဥပမာ- Pepperoni, Hawaiian)</li>\n<li>ဆိုင်ခွဲတစ်ခုက Delivery Service များစွာကို အသုံးပြုနိုင်တယ်။ (ဥပမာ- FoodPanda, GrabFood)</li>\n<li>ပီဇာအမျိုးအစားနှင့် Delivery Service တွေဟာ သက်ဆိုင်မှုမရှိဘဲ ဆိုင်ခွဲနှင့်ပတ်သက်ပြီးသာ ဆက်စပ်နေတာဖြစ်ပါတယ်။</li>\n</ul>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Location</th><th>PizzaType</th><th>DeliveryService</th></tr></thead><tbody><tr><td>Downtown</td><td>Pepperoni</td><td>FoodPanda</td></tr><tr><td>Downtown</td><td>Pepperoni</td><td>GrabFood</td></tr><tr><td>Downtown</td><td>Hawaiian</td><td>FoodPanda</td></tr><tr><td>Downtown</td><td>Hawaiian</td><td>GrabFood</td></tr><tr><td>Uptown</td><td>Veggie</td><td>FoodPanda</td></tr><tr><td>Uptown</td><td>Veggie</td><td>GrabFood</td></tr></tbody></table>\n<p>Location →→ PizzaType (Location တစ်ခုက Pizza Type list ကိုဆုံးဖြတ်ပေးတယ်။)</p>\n<p>Location →→ DeliveryService (Location တစ်ခုက Delivery Service list ကိုဆုံးဖြတ်ပေးတယ်။)</p>\n<p>ဒီ Table မှာ Primary Key က (Location, Pizza Type, Delivery Service) သုံးခုပေါင်း ဖြစ်လာပါတယ်။\nတခြား Functional Dependency တွေ မရှိတဲ့အတွက် ဒီ Table ဟာ BCNF အထိ အောင်မြင်ပါတယ်။ ဒါပေမဲ့ Multivalued Dependency ရှိနေပါတယ်။\nTable က အချင်းချင်းမသက်ဆိုင်တဲ့ list နှစ်ခုဖြစ်တဲ့ Downtown ဆိုင်ခွဲရဲ့ (Pepperoni, Hawaiian) နှင့် (FoodPanda, GrabFood) တို့ကို ပေါင်းစပ်ပြီး ဖြစ်နိုင်ခြေရှိတဲ့ အတွဲတိုင်းအတွက် row တစ်ခုစီကို ဖန်တီးထားရပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"fourth-normal-form-4nf-သို့-ပြောင်းလဲခြင်း\">Fourth Normal Form (4NF) သို့ ပြောင်းလဲခြင်း။</h3><a class=\"sl-anchor-link\" href=\"#fourth-normal-form-4nf-သို့-ပြောင်းလဲခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Fourth Normal Form (4NF) သို့ ပြောင်းလဲခြင်း။”</span></a></div>\n<p>4NF ဖြစ်အောင်လုပ်ဖို့ ဖြေရှင်းနည်းကတော့ ရှင်းပါတယ်။ list တွေကို သူ့ table နှင့်သူ ခွဲထုတ်လိုက်ဖို့ပါပဲ။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"1-location_pizzas-table-4nf\">1. Location_Pizzas Table (4NF)</h4><a class=\"sl-anchor-link\" href=\"#1-location_pizzas-table-4nf\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “1. Location_Pizzas Table (4NF)”</span></a></div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th align=\"left\">Location</th><th align=\"left\">PizzaType</th></tr></thead><tbody><tr><td align=\"left\">Downtown</td><td align=\"left\">Pepperoni</td></tr><tr><td align=\"left\">Downtown</td><td align=\"left\">Hawaiian</td></tr><tr><td align=\"left\">Uptown</td><td align=\"left\">Veggie</td></tr></tbody></table>\n<hr>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"2-location_deliveries-table-4nf\">2. Location_Deliveries Table (4NF)</h4><a class=\"sl-anchor-link\" href=\"#2-location_deliveries-table-4nf\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “2. Location_Deliveries Table (4NF)”</span></a></div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th align=\"left\">Location</th><th align=\"left\">DeliveryService</th></tr></thead><tbody><tr><td align=\"left\">Downtown</td><td align=\"left\">FoodPanda</td></tr><tr><td align=\"left\">Downtown</td><td align=\"left\">GrabFood</td></tr><tr><td align=\"left\">Uptown</td><td align=\"left\">FoodPanda</td></tr></tbody></table>\n<p>ခုဆိုရင်တော့ ကျွန်တော်တို့ရဲ့ design က 4NF မှာရှိသွားပါပြီ။</p>"
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
const url = "src/content/docs/relational-database/normalization/fourth-normal-form.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/relational-database/normalization/fourth-normal-form.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/relational-database/normalization/fourth-normal-form.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
