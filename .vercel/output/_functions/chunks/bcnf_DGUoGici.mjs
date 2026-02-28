import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import 'clsx';

const frontmatter = {
  "title": "Normalization: BCNF (Boyce-Codd Normal Form)",
  "description": "BCNF (Boyce-Codd Normal Form)"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "boyce-codd-normal-form-bcnf",
    "text": "Boyce-Codd Normal Form (BCNF)"
  }, {
    "depth": 2,
    "slug": "bcnf-ကို-ဘယ်လိုအခြေအနေမှာ-လိုအပ်သလဲ",
    "text": "BCNF ကို ဘယ်လိုအခြေအနေမှာ လိုအပ်သလဲ။"
  }, {
    "depth": 3,
    "slug": "step-1-functional-dependencies-များကို-ဖော်ထုတ်ခြင်း",
    "text": "Step 1: Functional Dependencies များကို ဖော်ထုတ်ခြင်း။"
  }, {
    "depth": 3,
    "slug": "step-2-candidate-keys-များကို-ဖော်ထုတ်ခြင်း",
    "text": "Step 2: Candidate Keys များကို ဖော်ထုတ်ခြင်း။"
  }, {
    "depth": 3,
    "slug": "step-3-bcnf-စစ်ဆေးခြင်း",
    "text": "Step 3: BCNF စစ်ဆေးခြင်း။"
  }, {
    "depth": 4,
    "slug": "bcnf-ကို-ချိုးဖောက်ခြင်းရဲ့-ပြဿနာများ",
    "text": "BCNF ကို ချိုးဖောက်ခြင်းရဲ့ ပြဿနာများ။"
  }, {
    "depth": 4,
    "slug": "bcnf-အဖြစ်-ခွဲထုတ်ခြင်း",
    "text": "BCNF အဖြစ် ခွဲထုတ်ခြင်း။"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"boyce-codd-normal-form-bcnf\">Boyce-Codd Normal Form (BCNF)</h2><a class=\"sl-anchor-link\" href=\"#boyce-codd-normal-form-bcnf\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Boyce-Codd Normal Form (BCNF)”</span></a></div>\n<p>Boyce-Codd Normal Form (BCNF) ဆိုတာ 3NF (Third Normal Form) ထက် အနည်းငယ် ပိုပြီးစည်းကမ်းတင်းကျပ်တဲ့ Normal Form တစ်ခု ဖြစ်ပါတယ်။  3.5NF လို့လည်း ခေါ်ကြပါတယ်။ 3NF အဆင့်ရောက်နေတဲ့ table တော်တော်များများဟာ BCNF လည်း ဖြစ်နေတတ်ပါတယ်။\nဒါပေမဲ့ တခါတရံမှာ ထပ်နေတဲ့ candidate keys တွေကြောင့် 3NF မှာ ကျန်နေသေးတဲ့ ပြဿနာလေးတွေကို BCNF က ရှင်းထုတ်ပေးပါတယ်။</p>\n<p>BCNF ရဲ့ အဓိက စည်းမျဉ်းကတော့ ရှင်းပါတယ်။</p>\n<blockquote>\n<p>Table တစ်ခုထဲမှာရှိတဲ့ Functional Dependency တိုင်းရဲ့ Determinant (ဆုံးဖြတ်ပေးသူ) ဟာ superkey (သို့မဟုတ် candidate key) ဖြစ်ရပါမယ်။</p>\n</blockquote>\n<p>လက်တွေ့မှာတော့ လုပ်ငန်းခွင်သုံး application အများစုအတွက် 3NF အထိရောက်အောင် ဒီဇိုင်းဆွဲနိုင်ရင် လုံလောက်လေ့ရှိပါတယ်။ BCNF ကတော့ ပညာရပ်ဆိုင်ရာမှာ ဒါမှမဟုတ် အလွန်ရှုပ်ထွေးတဲ့ data structure တွေအတွက် ပိုအသုံးဝင်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"bcnf-ကို-ဘယ်လိုအခြေအနေမှာ-လိုအပ်သလဲ\">BCNF ကို ဘယ်လိုအခြေအနေမှာ လိုအပ်သလဲ။</h2><a class=\"sl-anchor-link\" href=\"#bcnf-ကို-ဘယ်လိုအခြေအနေမှာ-လိုအပ်သလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “BCNF ကို ဘယ်လိုအခြေအနေမှာ လိုအပ်သလဲ။”</span></a></div>\n<p>BCNF ကို နားလည်ဖို့အတွက် 3NF ဖြစ်နေပေမယ့် BCNF မဖြစ်တဲ့ ဥပမာတစ်ခုကို ကြည့်ရအောင်။ ဒီအခြေအနေဟာ Candidate Key တွေ ထပ်နေတဲ့အခါမျိုးမှာ ဖြစ်တတ်ပါတယ်။</p>\n<ul>\n<li>Table ထဲမှာ Candidate Key တစ်ခုထက်ပိုရှိနေခြင်း။</li>\n<li>အဲဒီ Candidate Key တွေက column နှစ်ခု သို့မဟုတ် နှစ်ခုထက်ပိုပြီးပေါင်းထားတဲ့ Composite Key တွေဖြစ်နေခြင်း။</li>\n<li>အဲဒီ Composite Key တွေမှာ တူညီတဲ့ column တွေ အပြန်အလှန်ပါဝင်နေခြင်း (Overlapping)။</li>\n</ul>\n<p>ဥပမာအနေဖြင့် အောက်ပါ business rule တွေရှိတဲ့ table တစ်ခုကို စဉ်းစားကြည့်ပါ။</p>\n<ul>\n<li>ကျောင်းသားတစ်ယောက်က ဘာသာရပ်တွေအများကြီး တက်နိုင်တယ်။</li>\n<li>ဘာသာရပ်တစ်ခုချင်းစီအတွက် ကျောင်းသားကို သင်ကြားပေးတဲ့ ပါမောက္ခတစ်ဦးစီ ရှိတယ်။</li>\n<li>ပါမောက္ခတစ်ဦးက ဘာသာရပ်တစ်ခုတည်းကိုသာ သင်ကြားတယ်။</li>\n</ul>\n<p><strong>StudentEnrollment Table</strong></p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>StudentID</th><th>Subject</th><th>Professor</th></tr></thead><tbody><tr><td>S001</td><td>Math</td><td>Prof. A</td></tr><tr><td>S001</td><td>Physics</td><td>Prof. B</td></tr><tr><td>S002</td><td>Math</td><td>Prof. A</td></tr></tbody></table>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"step-1-functional-dependencies-များကို-ဖော်ထုတ်ခြင်း\">Step 1: Functional Dependencies များကို ဖော်ထုတ်ခြင်း။</h3><a class=\"sl-anchor-link\" href=\"#step-1-functional-dependencies-များကို-ဖော်ထုတ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Step 1: Functional Dependencies များကို ဖော်ထုတ်ခြင်း။”</span></a></div>\n<p>Business rule တွေအရ အောက်ပါ FD တွေကို ရရှိပါတယ်။</p>\n<p><strong>(StudentID, Subject) → Professor</strong></p>\n<ul>\n<li>ဘယ်ကျောင်းသားက ဘယ်ဘာသာရပ်ကို တက်တယ်ဆိုတာသိရင် ဘယ်ပါမောက္ခသင်လဲဆိုတာ သိနိုင်ပါတယ်။</li>\n</ul>\n<p><strong>Professor → Subject</strong></p>\n<ul>\n<li>ပါမောက္ခတစ်ဦးက ဘာသာရပ်တစ်ခုတည်းပဲ သင်တဲ့အတွက် ပါမောက္ခကိုသိရင် ဘာသာရပ်ကို သိနိုင်ပါတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"step-2-candidate-keys-များကို-ဖော်ထုတ်ခြင်း\">Step 2: Candidate Keys များကို ဖော်ထုတ်ခြင်း။</h3><a class=\"sl-anchor-link\" href=\"#step-2-candidate-keys-များကို-ဖော်ထုတ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Step 2: Candidate Keys များကို ဖော်ထုတ်ခြင်း။”</span></a></div>\n<ol>\n<li>\n<p><code dir=\"auto\">(StudentID, Subject)</code> - table ထဲက field အားလုံးကို uniquely determine ပေးနိုင်တဲ့အတွက် Candidate Key ဖြစ်ပါတယ်။</p>\n</li>\n<li>\n<p><code dir=\"auto\">(StudentID, Professor)</code> - ဒါကလည်း <code dir=\"auto\">Professor → Subject</code> ဆိုတဲ့ FD ကြောင့် Subject ကို ဆုံးဖြတ်ပေးနိုင်တဲ့အတွက် Candidate Key ဖြစ်ပါတယ်။</p>\n</li>\n</ol>\n<p>ဒါကြောင့် ဒီ table မှာ Overlapping Composite Candidate Key နှစ်ခုရှိနေပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"step-3-bcnf-စစ်ဆေးခြင်း\">Step 3: BCNF စစ်ဆေးခြင်း။</h3><a class=\"sl-anchor-link\" href=\"#step-3-bcnf-စစ်ဆေးခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Step 3: BCNF စစ်ဆေးခြင်း။”</span></a></div>\n<p>BCNF အတွက် စည်းမျဉ်းကတော့ -  Functional Dependency <code dir=\"auto\">X → Y</code> တိုင်းအတွက် X ဟာ Superkey (Candidate Key) ဖြစ်ရမယ်။</p>\n<p>ကျွန်တော်တို့ရဲ့ Dependencies တွေကို ပြန်စစ်ကြည့်ရအောင်။</p>\n<p><strong>(StudentID, Subject) → Professor</strong></p>\n<ul>\n<li>Determinant ဖြစ်တဲ့ (StudentID, Subject) ဟာ Candidate Key ဖြစ်ပါတယ်။ ✅ OK</li>\n</ul>\n<p><strong>Professor → Subject</strong></p>\n<ul>\n<li>Determinant ဖြစ်တဲ့ Professor ဟာ Candidate Key မဟုတ်ပါဘူး။ ❌ BCNF စည်းမျဉ်းကိုချိုးဖောက်ပါတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"bcnf-ကို-ချိုးဖောက်ခြင်းရဲ့-ပြဿနာများ\">BCNF ကို ချိုးဖောက်ခြင်းရဲ့ ပြဿနာများ။</h4><a class=\"sl-anchor-link\" href=\"#bcnf-ကို-ချိုးဖောက်ခြင်းရဲ့-ပြဿနာများ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “BCNF ကို ချိုးဖောက်ခြင်းရဲ့ ပြဿနာများ။”</span></a></div>\n<p>ဒီ table ဟာ 3NF ဖြစ်နေပေမယ့် BCNF ကို ချိုးဖောက်တဲ့အတွက် Update, Insertion, Deletion Anomalies တွေ ဖြစ်ပေါ်နိုင်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"bcnf-အဖြစ်-ခွဲထုတ်ခြင်း\">BCNF အဖြစ် ခွဲထုတ်ခြင်း။</h4><a class=\"sl-anchor-link\" href=\"#bcnf-အဖြစ်-ခွဲထုတ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “BCNF အဖြစ် ခွဲထုတ်ခြင်း။”</span></a></div>\n<p>BCNF ဖြစ်ဖို့အတွက် စည်းမျဉ်းချိုးဖောက်တဲ့ FD ဖြစ်တဲ့ <code dir=\"auto\">Professor → Subject</code> ကို သူ့ရဲ့ကိုယ်ပိုင် table အဖြစ် ခွဲထုတ်ရပါမယ်။</p>\n<p><strong>Professor_Subject Table (BCNF)</strong></p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Professor</th><th>Subject</th></tr></thead><tbody><tr><td>Prof. A</td><td>Math</td></tr><tr><td>Prof. B</td><td>Physics</td></tr><tr><td>Prof. C</td><td>Biology</td></tr></tbody></table>\n<p>အခုဆိုရင် ဒီ table မှာ <code dir=\"auto\">Professor → Subject</code> ဆိုတဲ့ FD တစ်ခုပဲရှိပြီး Determinant ဖြစ်တဲ့ Professor က Primary Key (Candidate Key) ဖြစ်တဲ့အတွက် BCNF စည်းမျဉ်းနှင့် ကိုက်ညီသွားပါပြီ။</p>\n<hr>\n<p><strong>Student_Professor Table (BCNF)</strong></p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>StudentID</th><th>Professor</th></tr></thead><tbody><tr><td>S001</td><td>Prof. A</td></tr><tr><td>S102</td><td>Prof. A</td></tr><tr><td>S101</td><td>Prof. B</td></tr></tbody></table>\n<p>ဒီ table ရဲ့ Primary Key က <code dir=\"auto\">(StudentID, Professor)</code> ဖြစ်ပြီး ဒီ table ထဲမှာ တခြား ဘယ်လို FD မှ မရှိတော့တဲ့အတွက် BCNF စည်းမျဉ်းနှင့် ကိုက်ညီပါတယ်။</p>\n<p>အခုဆိုရင် table နှစ်ခုလုံးဟာ BCNF အဆင့်ကို ရောက်ရှိသွားပြီး အပေါ်မှာပြောခဲ့တဲ့ Anomaly တွေအားလုံးကို ဖြေရှင်းနိုင်ပြီ ဖြစ်ပါတယ်။</p>"
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
const url = "src/content/docs/relational-database/normalization/bcnf.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/relational-database/normalization/bcnf.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/relational-database/normalization/bcnf.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
