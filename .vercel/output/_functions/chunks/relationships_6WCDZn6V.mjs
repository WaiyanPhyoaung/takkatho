import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const oneToOne = new Proxy({"src":"/_astro/one-to-one.f1NZShvW.png","width":760,"height":259,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/relational-database/one-to-one.png";
							}
							
							return target[name];
						}
					});

const oneToMany = new Proxy({"src":"/_astro/one-to-many.CueTfv7B.png","width":810,"height":249,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/relational-database/one-to-many.png";
							}
							
							return target[name];
						}
					});

const manyToMany = new Proxy({"src":"/_astro/many-to-many.Cmrnlu5H.png","width":579,"height":411,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/relational-database/many-to-many.png";
							}
							
							return target[name];
						}
					});

const selfOneToOne = new Proxy({"src":"/_astro/self-one-to-one.Bo_7RqTa.png","width":418,"height":289,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/relational-database/self-one-to-one.png";
							}
							
							return target[name];
						}
					});

const selfOneToMany = new Proxy({"src":"/_astro/self-one-to-many.1DYIn8Bt.png","width":488,"height":319,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/relational-database/self-one-to-many.png";
							}
							
							return target[name];
						}
					});

const selfManyToMany = new Proxy({"src":"/_astro/self-many-to-many.jWGroBu7.png","width":298,"height":441,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/relational-database/self-many-to-many.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Database Structure: Relationships",
  "description": "Relationships"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "relationship",
    "text": "Relationship"
  }, {
    "depth": 2,
    "slug": "type-of-relationship",
    "text": "Type of Relationship"
  }, {
    "depth": 3,
    "slug": "one-to-one-relationship",
    "text": "One-to-One Relationship"
  }, {
    "depth": 3,
    "slug": "one-to-many-relationship",
    "text": "One-to-Many Relationship"
  }, {
    "depth": 3,
    "slug": "many-to-many-relationship",
    "text": "Many-to-Many Relationship"
  }, {
    "depth": 2,
    "slug": "self-referencing-relationships",
    "text": "Self-Referencing Relationships"
  }, {
    "depth": 3,
    "slug": "one-to-one-relationship-1",
    "text": "One-to-One Relationship"
  }, {
    "depth": 3,
    "slug": "one-to-many-relationship-1",
    "text": "One-to-Many Relationship"
  }, {
    "depth": 3,
    "slug": "many-to-many-relationship-1",
    "text": "Many-to-Many Relationship"
  }, {
    "depth": 2,
    "slug": "parent-table-vs-child-table",
    "text": "Parent Table vs Child Table"
  }, {
    "depth": 3,
    "slug": "parent-table-နှင့်-child-table-ကို-ဘယ်လိုသိနိုင်မလဲ",
    "text": "Parent Table နှင့် Child Table ကို ဘယ်လိုသိနိုင်မလဲ။"
  }, {
    "depth": 4,
    "slug": "အဓိကစည်းမျဉ်း",
    "text": "အဓိကစည်းမျဉ်း။"
  }, {
    "depth": 4,
    "slug": "ပိုမိုရှင်းလင်းစွာ-နားလည်ရန်",
    "text": "ပိုမိုရှင်းလင်းစွာ နားလည်ရန်။"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"relationship\">Relationship</h2><a class=\"sl-anchor-link\" href=\"#relationship\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Relationship”</span></a></div>\n<p>Relationship ဆိုတာ relational database ရဲ့ အရေးကြီးတဲ့ အစိတ်အပိုင်းတစ်ခု ဖြစ်ပြီး တစ်ခုနှင့်တစ်ခု ဆက်စပ်မှုရှိနေတဲ့ table နှစ်ခုကို ချိတ်ဆက်ပေးပါတယ်။\nTable နှစ်ခုကြားမှာ တည်ရှိနိုင်တဲ့ relation အမျိုးအစား သုံးမျိုးရှိပါတယ်။ One-to-One၊ One-to-Many နှင့် Many-to-Many တို့ပဲ ဖြစ်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"type-of-relationship\">Type of Relationship</h2><a class=\"sl-anchor-link\" href=\"#type-of-relationship\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Type of Relationship”</span></a></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"one-to-one-relationship\">One-to-One Relationship</h3><a class=\"sl-anchor-link\" href=\"#one-to-one-relationship\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “One-to-One Relationship”</span></a></div>\n<p>One-to-One Relationship ဆိုတာက Table နှစ်ခုချိတ်ဆက်နေတာဖြစ်ပြီးတော့ ပထမ table ထဲက record တစ်ခုက ဒုတိယ table ထဲက record တစ်ခုတည်းဖြင့်သာ ဆက်စပ်မှုရှိပြီး\nဒုတိယ table ထဲက record တစ်ခုဟာလည်း ပထမ table ထဲက record တစ်ခုတည်းဖြင့်သာ ဆက်စပ်မှုရှိနေတာကို ဆိုလိုပါတယ်။</p>\n<p>One-to-One Relationship မှာ table တစ်ခုက parent table အဖြစ် ဆောင်ရွက်ပြီး ကျန်တစ်ခုကတော့ child table အဖြစ် ဆောင်ရွက်ပါတယ်။\nဒီ relation ကို တည်ဆောက်တဲ့အခါ parent table ရဲ့ Primary Key ကို ကူးယူပြီး child table ထဲမှာ ထည့်သွင်းရပါတယ်။\nအဲဒီအခါ parent table ရဲ့ Primary Key က child table ထဲမှာ Foreign Key ဖြစ်လာပါတယ်။</p>\n"
    }), createVNode($$ContentImage, {
      src: oneToOne,
      alt: "Example of One-To-One Relationship"
    }), "\n", createVNode("p", {
      style: "text-align: center;",
      "set:html": "Fig. 2.1: A One-To-One Relationship"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p><strong>ရှင်းလင်းချက်</strong></p>\n<p>ဥပမာကိုကြည့်မယ်ဆိုရင် <code dir=\"auto\">Employees table</code> က <code dir=\"auto\">Parent table</code> ဖြစ်ပြီး <code dir=\"auto\">Laptops table</code> က <code dir=\"auto\">Child table</code> ဖြစ်ပါတယ်။  <br>\nဝန်ထမ်းတစ်ယောက်စီက laptop တစ်လုံးပဲ သုံးစွဲခွင့်ရှိပြီး laptop တစ်လုံးစီကိုလည်း ဝန်ထမ်းတစ်ယောက်တည်းကသာ ကိုင်တွယ်အသုံးပြုပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"one-to-many-relationship\">One-to-Many Relationship</h3><a class=\"sl-anchor-link\" href=\"#one-to-many-relationship\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “One-to-Many Relationship”</span></a></div>\n<p>One-to-Many Relationship ဆိုတာက Table နှစ်ခုချိတ်ဆက်နေတာဖြစ်ပြီးတော့ ပထမ table ထဲက record တစ်ခုက ဒုတိယ table ထဲက record များစွာနှင့် ဆက်စပ်မှုရှိနိုင်ပေမယ့်\nဒုတိယ table ထဲက record တစ်ခုကတော့ ပထမ table ထဲက record တစ်ခုတည်းဖြင့်သာ ဆက်စပ်မှုရှိနိုင်တာကို ဆိုလိုပါတယ်။</p>\n<p>(One-to-One Relationship ကို ဖော်ပြရာမှာ အသုံးပြုခဲ့တဲ့ parent/child model ဟာ ဒီမှာလည်း အလုပ်ဖြစ်ပါတယ်။\nဒီအခြေအနေမှာ relation ရဲ့ “တစ်ခု” ဘက်ခြမ်းမှာရှိတဲ့ table က parent table ဖြစ်ပြီး “အများ” ဘက်ခြမ်းမှာရှိတဲ့ table ကတော့ child table ဖြစ်ပါတယ်။)\nOne-to-Many Relationship တစ်ခုကို တည်ဆောက်တဲ့အခါ parent table ရဲ့ Primary Key ကို ကူးယူပြီး child table ထဲကို ထည့်သွင်းရပါတယ်။\nအဲဒီအခါ parent table ရဲ့ Primary Key က child table မှာ Foreign Key ဖြစ်လာပါတယ်။</p>\n"
    }), createVNode($$ContentImage, {
      src: oneToMany,
      alt: "Example of One-To-Many Relationship"
    }), "\n", createVNode("p", {
      style: "text-align: center;",
      "set:html": "Fig. 2.2: A One-To-Many Relationship"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p><strong>ရှင်းလင်းချက်</strong></p>\n<p>ဥပမာကိုကြည့်မယ်ဆိုရင် <code dir=\"auto\">Departments table</code> က <code dir=\"auto\">Parent table</code> ဖြစ်ပြီး <code dir=\"auto\">Employees table</code> က <code dir=\"auto\">Child table</code> ဖြစ်ပါတယ်။\nဌာနတစ်ခုမှာ ဝန်ထမ်းတွေအများကြီး ရှိနိုင်ပေမဲ့ ဝန်ထမ်းတစ်ယောက်စီကတော့ ဌာနတစ်ခုစီကပဲဖြစ်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"many-to-many-relationship\">Many-to-Many Relationship</h3><a class=\"sl-anchor-link\" href=\"#many-to-many-relationship\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Many-to-Many Relationship”</span></a></div>\n<p>Many-to-Many Relationship ဆိုတာက Table နှစ်ခုချိတ်ဆက်နေတာဖြစ်ပြီးတော့ ပထမ table ထဲက record တစ်ခုက ဒုတိယ table ထဲက record များစွာနှင့် ဆက်စပ်မှုရှိနိုင်သလို\nဒုတိယ table ထဲက record တစ်ခုကလည်း ပထမ table ထဲက record များစွာနှင့် ဆက်စပ်မှုရှိနိုင်တာကို ဆိုလိုပါတယ်။</p>\n<p>Many-to-Many Relationship ကို တည်ဆောက်ရာတွင် Linking Table တစ်ခုလိုအပ်ပါတယ်။ (<a href=\"/relational-database/terminology/structure-related-terms/table#%E1%81%82-linking-table-junction-table-bridge-table\">linking table</a> အကြောင်းကို ဒီအခန်းရဲ့ အစပိုင်းလောက်က အနည်းငယ် ရှင်းပြထားပါတယ်။)\nLinking Table ထဲမှာ မူရင်း table နှစ်ခုရဲ့ Primary Key တွေကို Foreign Key တွေအဖြစ် လာရောက်သိမ်းဆည်းပါတယ်။\nဒီ Foreign Key နှစ်ခုကို ပေါင်းစပ်ပြီး Linking Table အတွက် Composite Primary Key (ပေါင်းစပ် Primary Key) တစ်ခုအဖြစ် ဖန်တီးနိုင်ပါတယ်။</p>\n"
    }), createVNode($$ContentImage, {
      src: manyToMany,
      alt: "Example of Many-To-Many Relationship"
    }), "\n", createVNode("p", {
      style: "text-align: center;",
      "set:html": "Fig. 2.3: A Many-To-Many Relationship"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p><strong>ရှင်းလင်းချက်</strong></p>\n<p>ဥပမာကိုကြည့်မယ်ဆိုရင် <code dir=\"auto\">Books table</code> နှင့် <code dir=\"auto\">Authors table</code> ကြားမှာ <code dir=\"auto\">BookAuthors table</code> (linking table) ကို သုံးထားပါတယ်။ စာအုပ်တစ်အုပ်တည်းကို စာရေးဆရာအများကြီးက ပေါင်းရေးနိုင်သလို စာရေးဆရာတစ်ယောက်တည်းကလည်း စာအုပ်တွေအများကြီးရေးသားနိုင်ပါတယ်။</p>\n<p><code dir=\"auto\">AuthorBooks table</code> မှာ <code dir=\"auto\">BookID</code> တစ်ခုတည်းဆိုရင် <code dir=\"auto\">Foreign key</code> အနေဖြင့် ဆောင်ရွက်ပြီး <code dir=\"auto\">AuthorID</code> တစ်ခုတည်းဆိုရင်လည်း  <code dir=\"auto\">Foreign key</code> အနေဖြင့် ဆောင်ရွက်ပါတယ်။</p>\n<p><code dir=\"auto\">(BookID, AuthorID)</code> နှစ်ခုကို ပေါင်းစပ်၍ <code dir=\"auto\">Composite Primary Key</code> အနေဖြင့် အသုံးပြုလို့ရပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"self-referencing-relationships\">Self-Referencing Relationships</h2><a class=\"sl-anchor-link\" href=\"#self-referencing-relationships\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Self-Referencing Relationships”</span></a></div>\n<p>Self-Referencing Relationship ဆိုတာ table နှစ်ခုကြားမှာ တည်ရှိတဲ့ relation အမျိုးအစား မဟုတ်ဘဲ Table တစ်ခုတည်းက\nသူ့ကိုယ်သူ ပြန်လည်ချိတ်ဆက်နေတဲ့ relation အမျိုးအစားကို ဆိုလိုတာဖြစ်ပါတယ်။ ဒီ relation ကို hierarchical ဒါမှမဟုတ် recursive data structure တွေကို\nကိုယ်စားပြုရာတွင် အလွန်အသုံးဝင်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"one-to-one-relationship-1\">One-to-One Relationship</h3><a class=\"sl-anchor-link\" href=\"#one-to-one-relationship-1\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “One-to-One Relationship”</span></a></div>\n<p>Table တစ်ခုထဲက record တစ်ခုက အဲဒီ table ထဲမှာပဲရှိတဲ့ တခြား record တစ်ခုတည်းဖြင့်သာ ဆက်စပ်မှုရှိတဲ့အခါ Self-Referencing One-to-One Relationship ကိုတည်ဆောက်လို့ရပါတယ်။</p>\n"
    }), createVNode($$ContentImage, {
      src: selfOneToOne,
      alt: "Example of Self-Referencing One-To-One Relationship"
    }), "\n", createVNode("p", {
      style: "text-align: center;",
      "set:html": "Fig. 2.4: A Self-Referencing One-To-One Relationship"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p><strong>ရှင်းလင်းချက်</strong></p>\n<p>ဥပမာကိုကြည့်မယ်ဆိုရင် <code dir=\"auto\">Persons table</code> မှာ လူပုဂ္ဂိုလ်စာရင်းနှင့် သူတို့ရဲ့အိမ်ထောင်ဖက်စာရင်းကို သိမ်းထားမယ်ဆိုပါစို့။\nအဲဒီအိမ်ထောင်ဖက်ဟာလည်း ဒီ <code dir=\"auto\">Persons table</code> ထဲမှာပဲ ရှိနေတဲ့ လူတစ်ဦးပဲ ဖြစ်မယ်ဆိုရင် <code dir=\"auto\">self-referencing one-to-one relationship</code> ကိုလုပ်ဆောင်နိုင်ပါတယ်။ <br></p>\n<p>ဒီဥပမာမှာ -</p>\n<p><code dir=\"auto\">Alice</code> နှင့် <code dir=\"auto\">Bob</code> တို့ဟာ အိမ်ထောင်ဖက်တွေ ဖြစ်ကြပါတယ်။  <br>\n<code dir=\"auto\">Charlie</code> က အိမ်ထောင်ဖက်မရှိသေးတဲ့အတွက် (NULL) ဖြစ်ပါတယ်။  <br>\n<code dir=\"auto\">David</code> နှင့် <code dir=\"auto\">Eve</code> တို့ဟာ အိမ်ထောင်ဖက်တွေ ဖြစ်ကြပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"one-to-many-relationship-1\">One-to-Many Relationship</h3><a class=\"sl-anchor-link\" href=\"#one-to-many-relationship-1\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “One-to-Many Relationship”</span></a></div>\n<p>Table တစ်ခုထဲမှာ record တစ်ခုဟာ အဲ့ဒီ table ထဲက တခြား record များစွာနှင့် ဆက်စပ်နေနိုင်တဲ့အခါ Self-Referencing One-to-Many Relationship ကိုတည်ဆောက်လို့ရပါတယ်။\nဒီ relation က tree structure (ဥပမာ- parent/child relationships လိုမျိုး) တွေကို table တစ်ခုတည်းသုံးပြီး ဖော်ပြနိုင်ပါတယ်။</p>\n"
    }), createVNode($$ContentImage, {
      src: selfOneToMany,
      alt: "Example of Self-Referencing One-To-Many Relationship"
    }), "\n", createVNode("p", {
      style: "text-align: center;",
      "set:html": "Fig. 2.5: A Self-Referencing One-To-Many Relationship"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p><strong>ရှင်းလင်းချက်</strong></p>\n<p>ဥပမာကိုကြည့်မယ်ဆိုရင် <code dir=\"auto\">Categories table</code> မှာ <code dir=\"auto\">category</code> တစ်ခုမှာ <code dir=\"auto\">subcategories</code> တွေအများကြီးရှိနိုင်ပြီး <code dir=\"auto\">subcategory</code> တစ်ခုမှာတော့ <code dir=\"auto\">parent category</code> တစ်ခုပဲရှိပါတယ်။\n<code dir=\"auto\">Category</code> အချို့ကတော့ <code dir=\"auto\">top-level</code> ဖြစ်ပြီး <code dir=\"auto\">parent</code> မရှိတဲ့အတွက် <code dir=\"auto\">Null</code> ဖြစ်ပါတယ်။</p>\n<p>ဒီ structure ဟာ E-commerce site တွေမှာ product အမျိုးအစားတွေ <code dir=\"auto\">(Electronics -> Laptops -> Gaming Laptops)</code>၊ အဖွဲ့အစည်းတစ်ခုရဲ့ ဌာနအဆင့်ဆင့်ဖွဲ့စည်းပုံတွေ <code dir=\"auto\">(CEO -> Managers -> Team Leads)</code>၊\nဒါမှမဟုတ် comment တွေအောက်မှာ reply တွေအဆင့်ဆင့်ရေးတာမျိုးတွေ အလွန်အသုံးဝင်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"many-to-many-relationship-1\">Many-to-Many Relationship</h3><a class=\"sl-anchor-link\" href=\"#many-to-many-relationship-1\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Many-to-Many Relationship”</span></a></div>\n<p>Table တစ်ခုထဲက record တစ်ခုစီဟာ အဲ့ဒီ table ထဲမှာပဲရှိတဲ့ တခြား record တစ်ခု (သို့) တစ်ခုထက်ပိုတဲ့ record တွေနှင့် ဆက်စပ်မှုရှိနိုင်ပြီး\nအဲ့ဒီ record တစ်ခု (သို့) တစ်ခုထက်ပိုတဲ့ record တွေကလည်း မူလ record နှင့်ပြန်လည်ဆက်စပ်မှုရှိနိုင်တဲ့အခါ self-referencing many-to-many relationship\nကိုတည်ဆောက်လို့ရပါတယ်။\nဒီလို relation ကို တည်ဆောက်ရန်အတွက် ကြားခံ (linking table) တစ်ခုကို အသုံးပြုပါတယ်။</p>\n"
    }), createVNode($$ContentImage, {
      src: selfManyToMany,
      alt: "Example of One-To-One Relationship"
    }), "\n", createVNode("p", {
      style: "text-align: center;",
      "set:html": "Fig. 2.6: A One-To-One Relationship"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p><strong>ရှင်းလင်းချက်</strong></p>\n<p>ဥပမာကိုကြည့်မယ်ဆိုရင် <code dir=\"auto\">Persons table</code> မှာ\nလူတစ်ယောက်က သူငယ်ချင်းတွေအများကြီးရှိနိုင်ပြီး သူငယ်ချင်းတစ်ယောက်ချင်းစီကလည်း သူ့ကို ပြန်လည်သူငယ်ချင်းဖွဲ့ထားတာမျိုး (ဥပမာ- Facebook Friend System) ကို <code dir=\"auto\">PersonFriend</code> ဆိုတဲ့ Linking Table ဖြင့်တည်ဆောက်နိုင်ပါတယ်။</p>\n<p><code dir=\"auto\">Alice</code> ဟာ <code dir=\"auto\">Bob</code>, <code dir=\"auto\">Carol</code> နှင့် သူငယ်ချင်းဖြစ်ပါတယ်။\nတစ်ချိန်တည်းမှာပဲ အဲ့ဒီ <code dir=\"auto\">Bob</code>, <code dir=\"auto\">Carol</code> ကလည်း <code dir=\"auto\">Alice</code> နှင့် သူငယ်ချင်းဖြစ်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"parent-table-vs-child-table\">Parent Table vs Child Table</h2><a class=\"sl-anchor-link\" href=\"#parent-table-vs-child-table\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Parent Table vs Child Table”</span></a></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"parent-table-နှင့်-child-table-ကို-ဘယ်လိုသိနိုင်မလဲ\">Parent Table နှင့် Child Table ကို ဘယ်လိုသိနိုင်မလဲ။</h3><a class=\"sl-anchor-link\" href=\"#parent-table-နှင့်-child-table-ကို-ဘယ်လိုသိနိုင်မလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Parent Table နှင့် Child Table ကို ဘယ်လိုသိနိုင်မလဲ။”</span></a></div>\n<p>Database ထဲမှာ table နှစ်ခုကြား relationship တစ်ခုရှိတယ်ဆိုရင် ဘယ် table က Parent Table ဖြစ်ပြီး ဘယ် table က Child Table ဖြစ်တယ်ဆိုတာကို သိဖို့ အဓိက နည်းလမ်းကတော့\nPrimary Key နှင့် Foreign Key ကို ကြည့်ခြင်းပဲ ဖြစ်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"အဓိကစည်းမျဉ်း\">အဓိကစည်းမျဉ်း။</h4><a class=\"sl-anchor-link\" href=\"#အဓိကစည်းမျဉ်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အဓိကစည်းမျဉ်း။”</span></a></div>\n<p>Primary Key ရှိတဲ့ table က Parent Table ဖြစ်ပါတယ်။ <br>\nForeign Key ရှိတဲ့ table က Child Table ဖြစ်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"ပိုမိုရှင်းလင်းစွာ-နားလည်ရန်\">ပိုမိုရှင်းလင်းစွာ နားလည်ရန်။</h4><a class=\"sl-anchor-link\" href=\"#ပိုမိုရှင်းလင်းစွာ-နားလည်ရန်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ပိုမိုရှင်းလင်းစွာ နားလည်ရန်။”</span></a></div>\n<p><strong>1. Dependency (မှီခိုမှု) ကို ကြည့်ပါ။</strong></p>\n<p>Parent Table ဟာ သူ့ဘာသာသူ ရပ်တည်နိုင်ပြီး အချက်အလက်တွေရဲ့ မူရင်းဇစ်မြစ် (source) ဖြစ်ပါတယ်။\nChild Table ကတော့ အဓိပ္ပာယ်ပြည့်စုံဖို့ Parent Table ပေါ်မှာ မှီခိုနေရပါတယ်။  ဥပမာ- Orders table ထဲမှာ CustomerID မရှိရင် ဒီ order က ဘယ်သူ့ order မှန်း သိနိုင်မှာမဟုတ်ပါဘူး။</p>\n<p><strong>2. Information Flow (အချက်အလက် စီးဆင်းမှု) ကိုစဉ်းစားပါ။</strong></p>\n<p>Parent Table မှာ ပိုပြီး “အသေးစိတ်မကျသေးတဲ့” (general) အချက်အလက်တွေ ပါဝင်လေ့ရှိပါတယ်။ (ဥပမာ- Customers, Departments)။\nChild Table မှာတော့ Parent Table ရဲ့ အချက်အလက်တွေနှင့် ပတ်သက်တဲ့ ပိုပြီး “အသေးစိတ်ကျတဲ့” အချက်အလက်တွေ ပါဝင်လေ့ရှိပါတယ်။ (ဥပမာ- Orders, Employees)။</p>\n<p><strong>3. Relationship Type (ဆက်စပ်မှု အမျိုးအစား) နှင့်နေရာချထားပုံ။</strong></p>\n<p><strong>One-to-One Relationship</strong></p>\n<p>ဒီ relationship မှာ Parent Table ရဲ့ Primary Key ကို Child Table မှာ Foreign Key အဖြစ် ထားရှိပါတယ်။</p>\n<p><strong>One-to-Many Relationship</strong></p>\n<p>“တစ်ခု” ဘက်ခြမ်းမှာရှိတဲ့ table က Parent Table ဖြစ်ပါတယ်။ ဥပမာ - Customers table က Parent ဖြစ်ပြီး၊ Orders table က Child ဖြစ်ပါတယ်။\nParent Table ရဲ့ Primary Key ကို Child Table မှာ Foreign Key အဖြစ် ထည့်သွင်းထားပါတယ်။</p>\n<p><strong>Many-to-Many Relationship</strong></p>\n<p>ဒီအမျိုးအစားမှာတော့ တိုက်ရိုက် Parent/Child ဆက်စပ်မှု မရှိပါဘူး။ ဒီအစား Linking Table (သို့မဟုတ် Junction Table) တစ်ခုကို အသုံးပြုပြီး ဆက်စပ်မှုကို တည်ဆောက်ပါတယ်။</p>"
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

const url = "src/content/docs/relational-database/Terminology/structure-related-terms/relationships.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/relational-database/Terminology/structure-related-terms/relationships.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/relational-database/Terminology/structure-related-terms/relationships.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
