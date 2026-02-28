import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import 'clsx';

const frontmatter = {
  "title": "Structured Query Language (SQL)",
  "description": "What is SQL?"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "sql-ဆိုတာဘာလဲ",
    "text": "SQL ဆိုတာဘာလဲ။"
  }, {
    "depth": 2,
    "slug": "sql-ကိုဘာအတွက်-အသုံးပြုလဲ",
    "text": "SQL ကိုဘာအတွက် အသုံးပြုလဲ။"
  }, {
    "depth": 3,
    "slug": "1-querying-data",
    "text": "1. Querying Data"
  }, {
    "depth": 3,
    "slug": "2-data-manipulation-language---dml",
    "text": "2. Data Manipulation Language - DML"
  }, {
    "depth": 3,
    "slug": "3-data-definition-language---ddl",
    "text": "3. Data Definition Language - DDL"
  }, {
    "depth": 3,
    "slug": "4-data-control-language---dcl",
    "text": "4. Data Control Language - DCL"
  }, {
    "depth": 2,
    "slug": "key-characteristics",
    "text": "Key Characteristics"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"sql-ဆိုတာဘာလဲ\">SQL ဆိုတာဘာလဲ။</h2><a class=\"sl-anchor-link\" href=\"#sql-ဆိုတာဘာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “SQL ဆိုတာဘာလဲ။”</span></a></div>\n<p>SQL (Structured Query Language) ဆိုတာ relational database တွေနှင့် စကားပြောဖို့ အသုံးပြုတဲ့ standard programming language တစ်ခုဖြစ်ပါတယ်။\nDatabase ထဲက data တွေကို ဆွဲထုတ်တာ၊ အသစ်ထည့်တာ၊ ပြင်ဆင်တာ၊ ဖျက်ပစ်တာတွေ လုပ်ဆောင်ဖို့နှင့် database ရဲ့ ဖွဲ့စည်းပုံတွေကို စီမံခန့်ခွဲဖို့အတွက် အသုံးပြုပါတယ်။</p>\n<p>ဥပမာ -</p>\n<p>database ဆိုတာက စာကြည့်တိုက်ကြီးတစ်ခု ဆိုရင်\nSQL ဆိုတာကတော့ အဲဒီစာကြည့်တိုက်မှာရှိတဲ့ စာကြည့်တိုက်မှူးကို “ဒီစာအုပ်ရှာပေးပါ”၊ “စာအုပ်အသစ်ထပ်ထည့်ပေးပါ”၊ “စာအုပ်အချက်အလက်ပြင်ပေးပါ” လို့ တိတိကျကျ ပြောဆိုညွှန်ကြားနိုင်တဲ့ အထူးဘာသာစကားတစ်ခုဖြစ်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"sql-ကိုဘာအတွက်-အသုံးပြုလဲ\">SQL ကိုဘာအတွက် အသုံးပြုလဲ။</h2><a class=\"sl-anchor-link\" href=\"#sql-ကိုဘာအတွက်-အသုံးပြုလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “SQL ကိုဘာအတွက် အသုံးပြုလဲ။”</span></a></div>\n<p>SQL ကို အဓိကလုပ်ဆောင်ချက် (Create, Read, Update, Delete) လေးခုအတွက် အဓိက အသုံးပြုပေမဲ့ SQL က ဒါတွေထက် အများကြီး ပိုလုပ်နိုင်ပါသေးတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"1-querying-data\">1. Querying Data</h3><a class=\"sl-anchor-link\" href=\"#1-querying-data\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “1. Querying Data”</span></a></div>\n<p>SQL ရဲ့ အသုံးအများဆုံး လုပ်ဆောင်ချက်ဖြစ်ပါတယ်။ Database ထဲမှာ သိမ်းဆည်းထားတဲ့ အချက်အလက်တွေကို သတ်မှတ်ထားတဲ့ commands တွေဖြင့် ပြန်လည်ဆွဲထုတ်ကြည့်ရှုတာ ဖြစ်ပါတယ်။</p>\n<p>Commands: SELECT</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"2-data-manipulation-language---dml\">2. Data Manipulation Language - DML</h3><a class=\"sl-anchor-link\" href=\"#2-data-manipulation-language---dml\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “2. Data Manipulation Language - DML”</span></a></div>\n<p>Table တွေထဲမှာသိမ်းဆည်းထားတဲ့ data တွေကို အသစ်ထည့်တာ၊ ပြင်ဆင်တာ၊ ဖျက်ပစ်တာတွေ လုပ်ဆောင်နိုင်ပါတယ်။</p>\n<p>Commands: INSERT, UPDATE, DELETE</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"3-data-definition-language---ddl\">3. Data Definition Language - DDL</h3><a class=\"sl-anchor-link\" href=\"#3-data-definition-language---ddl\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “3. Data Definition Language - DDL”</span></a></div>\n<p>Database ရဲ့ ဖွဲ့စည်းပုံ (structure) တွေကို တည်ဆောက်တာ၊ ပြင်ဆင်တာ၊ ဖျက်သိမ်းတာတွေ လုပ်ဆောင်နိုင်ပါတယ်။ Table တွေ၊ Index တွေကို တည်ဆောက်တာမျိုးတွေ ပါဝင်ပါတယ်။</p>\n<p>Commands: CREATE, ALTER, DROP</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"4-data-control-language---dcl\">4. Data Control Language - DCL</h3><a class=\"sl-anchor-link\" href=\"#4-data-control-language---dcl\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “4. Data Control Language - DCL”</span></a></div>\n<p>Database ကို ဘယ်သူတွေက သုံးစွဲခွင့်ရှိလဲ၊ ဘယ်လိုအဆင့်အထိ သုံးစွဲခွင့်ရှိလဲဆိုတဲ့ ခွင့်ပြုချက် (permissions) တွေကို စီမံခန့်ခွဲနိုင်ပါတယ်။</p>\n<p>Commands: GRANT, REVOKE</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"key-characteristics\">Key Characteristics</h2><a class=\"sl-anchor-link\" href=\"#key-characteristics\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Key Characteristics”</span></a></div>\n<p>SQL မှာ သိထားသင့်တဲ့ အဓိက အချက်နှစ်ခုရှိပါတယ်။</p>\n<p><strong>Declarative:</strong> သင်က “ဘာလုပ်ချင်တယ်” ဆိုတာကိုပဲ SQL ဖြင့်ရေးရတာဖြစ်ပါတယ်။ အဲဒါကို “ဘယ်လိုလုပ်ရမယ်” ဆိုတဲ့ အဆင့်ဆင့်လုပ်ဆောင်ပုံကို ရေးစရာမလိုပါဘူး။\nဥပမာ - “ရန်ကုန်မြို့က customers အားလုံးကို ရှာပေးပါ” လို့ သင်က SQL ဖြင့်ရေးလိုက်တာနှင့် database က အဲဒီအချက်အလက်ကို ဘယ်လိုအထိရောက်ဆုံးဖြစ်အောင် ရှာဖွေရမလဲဆိုတာကို သူ့ဘာသာသူ စီမံဆောင်ရွက်သွားမှာဖြစ်ပါတယ်။</p>\n<p><strong>Standardized:</strong> SQL ဟာ ANSI/ISO တို့ရဲ့ စံသတ်မှတ်ထားတဲ့ ဘာသာစကားတစ်ခုဖြစ်ပါတယ်။ ဒါကြောင့် PostgreSQL, MySQL, SQL Server, Oracle စတဲ့ မတူညီတဲ့ database system တွေကြားမှာ အနည်းငယ်စီ ကွဲပြားမှုတွေရှိပေမယ့်\nSELECT, INSERT, CREATE စတဲ့ အဓိက command တွေကတော့ အကုန်အတူတူပဲ ဖြစ်ပါတယ်။</p>"
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
const url = "src/content/docs/relational-database/sql/what-is-sql.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/relational-database/sql/what-is-sql.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/relational-database/sql/what-is-sql.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
