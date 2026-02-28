import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const flowChart = new Proxy({"src":"/_astro/flowchart-database.BLVw9oCm.png","width":1920,"height":820,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/software-architecture/flowchart-database.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "မှန်ကန်သော Database ကို ရွေးချယ်ခြင်း",
  "description": "မှန်ကန်သော Database ကို ရွေးချယ်ခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "polyglot-persistence-လုပ်ငန်းအလိုက်-အသင့်တော်ဆုံး-tool-ကို-သုံးစွဲခြင်း",
    "text": "Polyglot Persistence: လုပ်ငန်းအလိုက် အသင့်တော်ဆုံး Tool ကို သုံးစွဲခြင်း"
  }, {
    "depth": 4,
    "slug": "sql-relational-databases-တွေကို-ဘယ်အချိန်မှာ-သုံးမလဲ",
    "text": "SQL (Relational) Databases တွေကို ဘယ်အချိန်မှာ သုံးမလဲ"
  }, {
    "depth": 4,
    "slug": "nosql-non-relational-databases-တွေကို-ဘယ်အချိန်မှာ-သုံးမလဲ",
    "text": "NoSQL (Non-Relational) Databases တွေကို ဘယ်အချိန်မှာ သုံးမလဲ"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>“Polyglot Persistence” ဆိုတဲ့ သဘောတရားကို နားလည်ပြီး၊ မတူညီတဲ့ Database အမျိုးအစားတွေ (SQL နှင့် NoSQL အမျိုးမျိုး) ကို ဘယ်အချိန်မှာ ရွေးချယ်သင့်တယ်ဆိုတာ သိရှိစေရန် ဖြစ်ပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"polyglot-persistence-လုပ်ငန်းအလိုက်-အသင့်တော်ဆုံး-tool-ကို-သုံးစွဲခြင်း\">Polyglot Persistence: လုပ်ငန်းအလိုက် အသင့်တော်ဆုံး Tool ကို သုံးစွဲခြင်း</h3><a class=\"sl-anchor-link\" href=\"#polyglot-persistence-လုပ်ငန်းအလိုက်-အသင့်တော်ဆုံး-tool-ကို-သုံးစွဲခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Polyglot Persistence: လုပ်ငန်းအလိုက် အသင့်တော်ဆုံး Tool ကို သုံးစွဲခြင်း”</span></a></div>\n<p>Monolith တည်ဆောက်ပုံမှာဆိုရင်၊ သင်က များသောအားဖြင့် အရာအားလုံးအတွက် Database အကြီးကြီးတစ်ခုတည်းကိုပဲ ရွေးချယ်လေ့ရှိတယ်။ Microservices လောကမှာတော့ သင်က <strong>Polyglot Persistence</strong> ကို သုံးနိုင်ပါတယ် — ဒါက Service တစ်ခုချင်းစီရဲ့ သီးသန့်လိုအပ်ချက်အပေါ်မူတည်ပြီး၊ အဲဒီ Service အတွက် အကောင်းဆုံးအလုပ်လုပ်မယ့် မတူညီတဲ့ Database အမျိုးအစားတွေကို ရွေးချယ်အသုံးပြုတဲ့ သဘောတရားဖြစ်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"sql-relational-databases-တွေကို-ဘယ်အချိန်မှာ-သုံးမလဲ\">SQL (Relational) Databases တွေကို ဘယ်အချိန်မှာ သုံးမလဲ</h4><a class=\"sl-anchor-link\" href=\"#sql-relational-databases-တွေကို-ဘယ်အချိန်မှာ-သုံးမလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “SQL (Relational) Databases တွေကို ဘယ်အချိန်မှာ သုံးမလဲ”</span></a></div>\n<p>(ဥပမာများ: PostgreSQL, MySQL, SQL Server)</p>\n<ul>\n<li>\n<p><strong>အသင့်တော်ဆုံးအခြေအနေများ -</strong></p>\n<ul>\n<li>\n<p>ဖွဲ့စည်းပုံသေချာပြီး၊ ကြိုတင်ခန့်မှန်းနိုင်တဲ့ Data ပုံစံတွေအတွက် (User Profile လိုမျိုး)။</p>\n</li>\n<li>\n<p>Data တွေ အမြဲတမ်းမှန်ကန်နေဖို့လိုတဲ့အခါနဲ့ သမားရိုးကျ ACID Transaction တွေလိုတဲ့အခါ။</p>\n</li>\n<li>\n<p>Data တွေကြားမှာ ဆက်စပ်မှုတွေရှုပ်ထွေးပြီး Query လုပ်ရတာများတဲ့အခါ။</p>\n</li>\n</ul>\n</li>\n<li>\n<p><strong>ဥပမာ Service -</strong> <code dir=\"auto\">UserService</code> သို့မဟုတ် <code dir=\"auto\">AccountingService</code>။</p>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"nosql-non-relational-databases-တွေကို-ဘယ်အချိန်မှာ-သုံးမလဲ\">NoSQL (Non-Relational) Databases တွေကို ဘယ်အချိန်မှာ သုံးမလဲ</h4><a class=\"sl-anchor-link\" href=\"#nosql-non-relational-databases-တွေကို-ဘယ်အချိန်မှာ-သုံးမလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “NoSQL (Non-Relational) Databases တွေကို ဘယ်အချိန်မှာ သုံးမလဲ”</span></a></div>\n<ul>\n<li>\n<p><strong>Document Databases (ဥပမာ - MongoDB, Couchbase)</strong></p>\n<ul>\n<li>\n<p><strong>အသင့်တော်ဆုံး -</strong> ဖွဲ့စည်းပုံအတိအကျမရှိတဲ့၊ ပြောင်းလွယ်ပြင်လွယ်ရှိတဲ့ Data တွေအတွက်။ Item တစ်ခုချင်းစီမှာ မတူညီတဲ့ Structure တွေ ရှိနိုင်ပါတယ်။</p>\n</li>\n<li>\n<p><strong>ဥပမာ Service -</strong> <code dir=\"auto\">ProductCatalogService</code> တစ်ခုမှာ “စာအုပ်” Product တစ်ခုရဲ့ အချက်အလက်တွေက “တီရှပ်” Product တစ်ခုရဲ့ အချက်အလက်တွေနဲ့ အများကြီးကွာခြားနိုင်တာမျိုး။</p>\n</li>\n</ul>\n</li>\n<li>\n<p><strong>Key-Value Stores (ဥပမာ - Redis, Amazon DynamoDB)</strong></p>\n<ul>\n<li>\n<p><strong>အသင့်တော်ဆုံး -</strong> Key တစ်ခုကိုသုံးပြီး ရိုးရှင်းတဲ့ Data ကို အလွန်မြန်မြန် ထုတ်/သွင်း လုပ်ချင်တဲ့အခါ။</p>\n</li>\n<li>\n<p><strong>ဥပမာ Service -</strong> User Login Session တွေကို သိမ်းဆည်းဖို့ <code dir=\"auto\">SessionService</code> သို့မဟုတ် <code dir=\"auto\">CachingService</code> တစ်ခု။</p>\n</li>\n</ul>\n</li>\n<li>\n<p><strong>Graph Databases (ဥပမာများ: Neo4j, Amazon Neptune)</strong></p>\n<ul>\n<li>\n<p><strong>အသင့်တော်ဆုံး -</strong> Data တွေကြားက “ဆက်စပ်မှု (Relationships)” တွေက အဓိကအရေးအကြီးဆုံးဖြစ်နေတဲ့အခါ။</p>\n</li>\n<li>\n<p><strong>ဥပမာ Service -</strong> <code dir=\"auto\">SocialNetworkService</code> (“သူငယ်ချင်း” နှင့် “follows” ဆက်စပ်မှုတွေကို စီမံခန့်ခွဲခြင်း) သို့မဟုတ် <code dir=\"auto\">RecommendationEngine</code> (“ဒီပစ္စည်းဝယ်တဲ့သူတွေက ဟိုပစ္စည်းကိုလည်း ဝယ်ကြတယ်” ဆိုတာမျိုး)။</p>\n</li>\n</ul>\n</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: flowChart,
      alt: "Chosing Databases"
    }), "\n", createVNode($$Aside, {
      title: "အနှစ်ချုပ်",
      "set:html": "<ul>\n<li>\n<p>Distributed System ထဲက Service တွေက API တွေကနေတစ်ဆင့် ဆက်သွယ်ကြပါတယ်။ REST က Web မှာ အသုံးအများဆုံးဖြစ်ပြီး၊ GraphQL က Client တွေအတွက် ပြောင်းလွယ်ပြင်လွယ်ရှိစေကာ၊ gRPC ကတော့ အလွန်မြန်တဲ့ အတွင်းပိုင်းဆက်သွယ်မှုတွေအတွက် သုံးပါတယ်။</p>\n</li>\n<li>\n<p>Service တွေကြားမှာ Data စီမံခန့်ခွဲရတာက အဓိကစိန်ခေါ်မှုတစ်ခုပါ။ <strong>Saga Pattern</strong> က Service အများအပြားမှာ Transaction တွေကို ကိုင်တွယ်ဖြေရှင်းပေးတဲ့ အရေးပါတဲ့နည်းလမ်းတစ်ခုဖြစ်ပြီး မအောင်မြင်တဲ့ process တွေကို ပြန်လည်ပြင်ဆင်ပေးပါတယ်။</p>\n</li>\n<li>\n<p><strong>Polyglot Persistence</strong> ဆိုတာက လုပ်ငန်းအတွက် မှန်ကန်တဲ့ Database အမျိုးအစားကို ရွေးချယ်သုံးစွဲဖို့ ဖြစ်ပါတယ်။ ဒါကြောင့် Microservice တစ်ခုချင်းစီက သူတို့လိုအပ်ချက်အလိုက် မတူညီတဲ့ Data Storage နည်းပညာတွေ (SQL, Document, Key-Value, or Graph databases)ကို သုံးနိုင်ပါတယ်။</p>\n</li>\n</ul>"
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

const url = "src/content/docs/software-architecture/communications/database.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/communications/database.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/communications/database.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
