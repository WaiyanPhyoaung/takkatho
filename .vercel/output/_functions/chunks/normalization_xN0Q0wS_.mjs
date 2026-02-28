import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const unnormalizedTable = new Proxy({"src":"/_astro/unnormalized-table.BZr9IrMv.png","width":757,"height":121,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/relational-database/unnormalized-table.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Normalization",
  "description": "What is normalization?"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "normalization-ဆိုတာဘာလဲ",
    "text": "Normalization ဆိုတာဘာလဲ။"
  }, {
    "depth": 2,
    "slug": "normalization-ဘာကြောင့်-လိုအပ်တာလဲ",
    "text": "Normalization ဘာကြောင့် လိုအပ်တာလဲ။"
  }, {
    "depth": 4,
    "slug": "unnormalized-orders-table",
    "text": "Unnormalized Orders Table:"
  }, {
    "depth": 3,
    "slug": "1-data-redundancy-မလိုအပ်ဘဲ-ထပ်နေတဲ့-data-တွေ-ကို-ဖယ်ရှားခြင်း",
    "text": "1. Data Redundancy (မလိုအပ်ဘဲ ထပ်နေတဲ့ Data တွေ) ကို ဖယ်ရှားခြင်း။"
  }, {
    "depth": 3,
    "slug": "2-data-anomalies-data-ပြဿနာများ-ကို-တားဆီးခြင်း",
    "text": "2. Data Anomalies (Data ပြဿနာများ) ကို တားဆီးခြင်း။"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"normalization-ဆိုတာဘာလဲ\">Normalization ဆိုတာဘာလဲ။</h2><a class=\"sl-anchor-link\" href=\"#normalization-ဆိုတာဘာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Normalization ဆိုတာဘာလဲ။”</span></a></div>\n<p>Normalization ဆိုတာ ရှုပ်ထွေးနေတဲ့ data တွေကို စနစ်တကျဖြစ်အောင် ရှင်းလင်းစီစဉ်တဲ့ လုပ်ငန်းစဉ်တစ်ခုဖြစ်ပါတယ်။\nသူ့ရဲ့ အဓိကရည်ရွယ်ချက်နှစ်ခုကတော့ Data ထပ်နေတာတွေ (Redundancy) ကို လျှော့ချဖို့နှင့် Data မှန်ကန်တိကျမှု (Data Integrity) ကို မြှင့်တင်ဖို့ဖြစ်ပါတယ်။\nဒီလုပ်ငန်းစဉ်မှာ အဆင့်ဆင့်လိုက်နာရမယ့် စည်းမျဉ်းတွေ ပါဝင်ပြီး\nအဲဒီစည်းမျဉ်းတွေအတိုင်း table တွေကို စနစ်တကျ ဖွဲ့စည်းတည်ဆောက်ရပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"normalization-ဘာကြောင့်-လိုအပ်တာလဲ\">Normalization ဘာကြောင့် လိုအပ်တာလဲ။</h2><a class=\"sl-anchor-link\" href=\"#normalization-ဘာကြောင့်-လိုအပ်တာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Normalization ဘာကြောင့် လိုအပ်တာလဲ။”</span></a></div>\n<p>လုပ်ငန်းတစ်ခုရဲ့ သတင်းအချက်အလက်အားလုံးကို table ကြီးတစ်ခုတည်းမှာ အားလုံးရောထည့်သိမ်းထားတယ်ဆိုပါစို့။\ncustomer အချက်အလက်၊ သူတို့ရဲ့ order တွေ၊ ကုန်ပစ္စည်းအချက်အလက်တွေ အကုန်လုံးကို တစ်နေရာတည်းမှာ စုစည်းထားတာမျိုးဆိုရင်\nအစပိုင်းမှာတော့ လွယ်ကူပုံရပေမယ့် လုပ်ငန်းကြီးလာတာနှင့်အမျှ data တွေကို စီမံခန့်ခွဲရတာ အရမ်းခက်ခဲပြီး ဆိုးဝါးတဲ့အခြေအနေကို ရောက်သွားနိုင်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"unnormalized-orders-table\">Unnormalized Orders Table:</h4><a class=\"sl-anchor-link\" href=\"#unnormalized-orders-table\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Unnormalized Orders Table:”</span></a></div>\n"
    }), createVNode($$ContentImage, {
      src: unnormalizedTable,
      alt: "Example of Unnormalized Orders Table"
    }), "\n", createVNode("p", {
      style: "text-align: center;",
      "set:html": "Fig. 3.1: Unnormalized Orders Table"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>ဒီလိုအခြေအနေမျိုးမှာ <strong>Normalization</strong> က အောက်ပါပြဿနာတွေကို ဖြေရှင်းပေးပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"1-data-redundancy-မလိုအပ်ဘဲ-ထပ်နေတဲ့-data-တွေ-ကို-ဖယ်ရှားခြင်း\">1. Data Redundancy (မလိုအပ်ဘဲ ထပ်နေတဲ့ Data တွေ) ကို ဖယ်ရှားခြင်း။</h3><a class=\"sl-anchor-link\" href=\"#1-data-redundancy-မလိုအပ်ဘဲ-ထပ်နေတဲ့-data-တွေ-ကို-ဖယ်ရှားခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “1. Data Redundancy (မလိုအပ်ဘဲ ထပ်နေတဲ့ Data တွေ) ကို ဖယ်ရှားခြင်း။”</span></a></div>\n<p>Data Redundancy ဆိုတာ တူညီတဲ့အချက်အလက်တစ်ခုကို နေရာများစွာမှာ ထပ်ခါထပ်ခါ သိမ်းဆည်းထားတာကို ဆိုလိုပါတယ်။\nဥပမာ- customer တစ်ယောက်က order ၁၀ ခုမှာထားရင်၊ သူ့ရဲ့လိပ်စာကို order ၁၀ ခုလုံးအတွက် ၁၀ ခါ ထပ်ပြီး သိမ်းထားတာမျိုး။</p>\n<p><strong>ဘာပြဿနာရှိလဲ။</strong></p>\n<ul>\n<li><strong>နေရာကုန်တယ်:</strong> မလိုအပ်ဘဲ storage space တွေ အများကြီးကုန်ကျစေပါတယ်။</li>\n<li><strong>ပြင်ဆင်ရခက်တယ်:</strong> အဲဒီ customer က လိပ်စာပြောင်းသွားရင် နေရာ ၁၀ ခုလုံးမှာ လိုက်ပြင်ရပါမယ်။ တစ်နေရာပဲပြင်ပြီး ကျန်ခဲ့ရင် data တွေလွဲကုန်ပြီး ဘယ်ဟာအမှန်လဲဆိုတာ မသိနိုင်တော့ပါဘူး။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"2-data-anomalies-data-ပြဿနာများ-ကို-တားဆီးခြင်း\">2. Data Anomalies (Data ပြဿနာများ) ကို တားဆီးခြင်း။</h3><a class=\"sl-anchor-link\" href=\"#2-data-anomalies-data-ပြဿနာများ-ကို-တားဆီးခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “2. Data Anomalies (Data ပြဿနာများ) ကို တားဆီးခြင်း။”</span></a></div>\n<p>Data တွေကို စနစ်တကျမဖွဲ့စည်းထားတဲ့အတွက် အချက်အလက်တွေ ထည့်သွင်းတဲ့အခါ၊ ပြင်ဆင်တဲ့အခါ ဒါမှမဟုတ် ဖျက်ပစ်တဲ့အခါ ပြဿနာတွေ ပေါ်ပေါက်လာတတ်ပါတယ်။ အဓိကအားဖြင့် ပြဿနာသုံးမျိုးရှိပါတယ်။</p>\n<ul>\n<li>\n<p><strong>Insertion Anomaly -</strong>  အချက်အလက်တစ်ခုကို ထည့်ချင်ပေမယ့် ဆက်စပ်နေတဲ့ တခြားအချက်အလက်မရှိသေးလို့ ထည့်လို့မရတဲ့ အခြေအနေပါ။ <br>\nဥပမာ - order မမှာသေးတဲ့ customer အသစ်တစ်ယောက်ရဲ့ အချက်အလက်ကို Database ထဲမှာ မှတ်တမ်းတင်ချင်ပေမယ့် Table ကြီးတစ်ခုတည်းမှာ သိမ်းထားတဲ့အတွက် “order အချက်အလက်” ဖြည့်စရာမရှိလို့\ncustomer အသစ်ကို ထည့်သွင်းလို့မရတာမျိုး ဖြစ်တတ်ပါတယ်။</p>\n</li>\n<li>\n<p><strong>Update Anomaly -</strong> အပေါ်မှာပြောခဲ့တဲ့ Redundancy ကနေ တိုက်ရိုက်ဖြစ်ပေါ်လာတဲ့ ပြဿနာပါ။ <br>\nဥပမာ - customer တစ်ယောက်က လိပ်စာပြောင်းသွားလို့ သူ့ရဲ့ order မှတ်တမ်းတစ်ခုမှာ လိပ်စာအသစ်ကို ပြင်လိုက်ပေမယ့် ကျန်တဲ့ order အဟောင်းတွေမှာ လိပ်စာအဟောင်းအတိုင်း ကျန်နေခဲ့ရင်\nအဲဒီ customer မှာ လိပ်စာအဟောင်းနှင့် အသစ် နှစ်မျိုးလုံးရှိနေပြီး Data တွေ ကိုက်ညီမှုမရှိတော့ပါဘူး။</p>\n</li>\n<li>\n<p><strong>Deletion Anomaly -</strong> အချက်အလက်တစ်ခုကို ဖျက်လိုက်တဲ့အခါ မရည်ရွယ်ဘဲ တခြားအရေးကြီးတဲ့ အချက်အလက်တွေပါ အတူတူပါသွားတာမျိုးပါ။ <br>\nဥပမာ - customer တစ်ယောက်မှာ order တစ်ခုပဲရှိပြီး အဲဒီ order ကို ဖျက်လိုက်တယ်ဆိုပါစို့။ Table ကြီးတစ်ခုတည်းမှာ သိမ်းထားတဲ့အတွက် order ကိုဖျက်လိုက်တာနှင့် အဲဒီ Row တစ်ခုလုံးပျက်သွားပြီး\ncustomer ရဲ့ နာမည်၊ ဖုန်းနံပါတ်၊ လိပ်စာ စတဲ့ အချက်အလက်အားလုံးပါ Database ထဲကနေ လုံးဝပျောက်သွားနိုင်ပါတယ်။</p>\n</li>\n</ul>\n<p>Normalization လုပ်ခြင်းက database ကို ပိုမိုတိကျမြန်ဆန်စေပြီး ဒီလိုပြဿနာတွေမဖြစ်အောင် ကာကွယ်ပေးပါတယ်။</p>"
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

const url = "src/content/docs/relational-database/normalization/normalization.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/relational-database/normalization/normalization.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/relational-database/normalization/normalization.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
