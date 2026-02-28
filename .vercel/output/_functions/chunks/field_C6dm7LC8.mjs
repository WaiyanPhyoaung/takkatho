import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import 'clsx';

const frontmatter = {
  "title": "Database Structure: Field",
  "description": "Field"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "field",
    "text": "Field"
  }, {
    "depth": 2,
    "slug": "database-ဒီဇိုင်းဆွဲရာတွင်-အဖြစ်များသော-အမှားများ",
    "text": "Database ဒီဇိုင်းဆွဲရာတွင် အဖြစ်များသော အမှားများ"
  }, {
    "depth": 3,
    "slug": "multipart-composite-field",
    "text": "Multipart (Composite) Field"
  }, {
    "depth": 4,
    "slug": "ဘာကြောင့်မကောင်းတာလဲ",
    "text": "ဘာကြောင့်မကောင်းတာလဲ။"
  }, {
    "depth": 3,
    "slug": "multivalued-field",
    "text": "Multivalued Field"
  }, {
    "depth": 4,
    "slug": "ဘာကြောင့်မကောင်းတာလဲ-1",
    "text": "ဘာကြောင့်မကောင်းတာလဲ။"
  }, {
    "depth": 3,
    "slug": "calculated-field",
    "text": "Calculated Field"
  }, {
    "depth": 4,
    "slug": "ဘာကြောင့်မကောင်းတာလဲ-2",
    "text": "ဘာကြောင့်မကောင်းတာလဲ။"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"field\">Field</h2><a class=\"sl-anchor-link\" href=\"#field\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Field”</span></a></div>\n<p>Field (သို့မဟုတ် Attribute) ဆိုတာ database တစ်ခုထဲမှာ ပါဝင်တဲ့အသေးဆုံးယူနစ် တစ်ခုဖြစ်ပါတယ်။\nEntity တစ်ခုရဲ့ characteristic ဒါမှမဟုတ် property တစ်ခုစီကို ကိုယ်စားပြုပါတယ်။ Field တွေက record တစ်ခုစီအတွက် တကယ့် data တန်ဖိုးတွေကို သိမ်းဆည်းပေးပါတယ်။</p>\n<p>ဥပမာ -</p>\n<p>Employees <br></p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>ID</th><th>Name</th><th>Position</th></tr></thead><tbody><tr><td>1</td><td>Alice</td><td>Director</td></tr><tr><td>2</td><td>Bob</td><td>Manager</td></tr></tbody></table>\n<p>Employees table တစ်ခုမှာ ID, Name, Position စတဲ့ column တွေက Field တစ်ခုစီဖြစ်ပါတယ်။ Field တစ်ခုစီက ဝန်ထမ်းတစ်ဦးစီရဲ့ information တစ်ခုစီကို သိမ်းဆည်းပေးပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"database-ဒီဇိုင်းဆွဲရာတွင်-အဖြစ်များသော-အမှားများ\">Database ဒီဇိုင်းဆွဲရာတွင် အဖြစ်များသော အမှားများ</h2><a class=\"sl-anchor-link\" href=\"#database-ဒီဇိုင်းဆွဲရာတွင်-အဖြစ်များသော-အမှားများ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Database ဒီဇိုင်းဆွဲရာတွင် အဖြစ်များသော အမှားများ”</span></a></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"multipart-composite-field\">Multipart (Composite) Field</h3><a class=\"sl-anchor-link\" href=\"#multipart-composite-field\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Multipart (Composite) Field”</span></a></div>\n<p>Multipart Field ဆိုတာက information နှစ်ခု (သို့မဟုတ်) နှစ်ခုထက်ပိုပြီး ပေါင်းစပ်ထားတဲ့ တန်ဖိုးတစ်ခုတည်းကို သိမ်းဆည်းထားတဲ့ field တစ်ခု ဖြစ်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"ဘာကြောင့်မကောင်းတာလဲ\">ဘာကြောင့်မကောင်းတာလဲ။</h4><a class=\"sl-anchor-link\" href=\"#ဘာကြောင့်မကောင်းတာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘာကြောင့်မကောင်းတာလဲ။”</span></a></div>\n<p>ဒီလို field မျိုးက data searching, sorting နှင့် data updating လုပ်ဆောင်ရာတွင် ခက်ခဲစေပါတယ်။</p>\n<p><strong>ဥပမာ -</strong></p>\n<p><strong>❌ Bad design:</strong> Students table မှာ FullName (အမည်အပြည့်အစုံ) ဆိုတဲ့ field တစ်ခုတည်းကနေ “Alice Chen” လို့ သိမ်းဆည်းထားတာမျိုး။ <br></p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>StudentId</th><th>FullName</th></tr></thead><tbody><tr><td>1</td><td>Alice Chen</td></tr><tr><td>2</td><td>Bob Smith</td></tr><tr><td>3</td><td>Charlie Davis</td></tr></tbody></table>\n<p><strong>✅ Good design:</strong> FirstName နှင့် LastName ဆိုပြီး field နှစ်ခု ခွဲထားခြင်း။ ဒါဆိုရင် LastName ဖြင့်သာ ရှာဖွေချင်တယ်ဆိုရင် ရှာဖွေရ ပိုလွယ်ကူသွားမှာဖြစ်ပါတယ်။</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>StudentId</th><th>FirstName</th><th>LastName</th></tr></thead><tbody><tr><td>1</td><td>Alice</td><td>Chen</td></tr><tr><td>2</td><td>Bob</td><td>Smith</td></tr><tr><td>3</td><td>Charlie</td><td>Davis</td></tr></tbody></table>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"multivalued-field\">Multivalued Field</h3><a class=\"sl-anchor-link\" href=\"#multivalued-field\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Multivalued Field”</span></a></div>\n<p>Multivalued Field ဆိုတာ record(column) တစ်ခုတည်းမှာ အမျိုးအစားတူညီတဲ့ value များစွာကို စုပေါင်းသိမ်းဆည်းထားတဲ့ field တစ်ခု ဖြစ်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"ဘာကြောင့်မကောင်းတာလဲ-1\">ဘာကြောင့်မကောင်းတာလဲ။</h4><a class=\"sl-anchor-link\" href=\"#ဘာကြောင့်မကောင်းတာလဲ-1\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘာကြောင့်မကောင်းတာလဲ။”</span></a></div>\n<p>dabatase ဒီဇိုင်းရဲ့ အခြေခံစည်းမျဉ်းတစ်ခုဖြစ်တဲ့ “field တစ်ခုစီဟာ value တစ်ခုတည်း (atomic value) ကိုသာ သိမ်းဆည်းသင့်တယ်” ဆိုတဲ့အချက်ကို ချိုးဖောက်ရာရောက်ပါတယ်။\nဒါကြောင့် data တွေကို query ဒါမှမဟုတ် indexing တွေ လုပ်တဲ့အခါမှာ ခက်ခဲစေပါတယ်။</p>\n<p><strong>ဥပမာ -</strong></p>\n<p><strong>❌ Bad design:</strong> Customers table မှာ PhoneNumbers ဆိုတဲ့ field တစ်ခုတည်းမှာ “01-555-1234, 01-555-5678” လို့ ဖုန်းနံပါတ်နှစ်ခုကို ပေါင်းပြီးသိမ်းဆည်းထားတာမျိုး။</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>CustomerId</th><th>PhoneNumbers</th></tr></thead><tbody><tr><td>1</td><td>01-555-1234, 01-555-5678</td></tr><tr><td>2</td><td>01-333-1234, 01-202-5248</td></tr></tbody></table>\n<p><strong>✅ Good design:</strong> ဖုန်းနံပါတ်တစ်ခုစီအတွက် သီးခြား records တွေခွဲပြီး သိမ်းဆည်းခြင်း။ (ဥပမာ- PhoneNumber1, PhoneNumber2 သို့မဟုတ် ဖုန်းနံပါတ်တွေအတွက် သီးခြား table တစ်ခု (PhoneNumbers table) ထားရှိခြင်း)။</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>CustomerId</th><th>PhoneNumber1</th><th>PhoneNumber2</th></tr></thead><tbody><tr><td>1</td><td>01-555-1234</td><td>01-555-5678</td></tr><tr><td>2</td><td>01-333-1234</td><td>01-202-5248</td></tr></tbody></table>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"calculated-field\">Calculated Field</h3><a class=\"sl-anchor-link\" href=\"#calculated-field\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Calculated Field”</span></a></div>\n<p>Calculated Field ဆိုတာက တခြား field တွေကနေ ဆက်စပ်တွက်ချက်ပြီး ရလာတဲ့ တန်ဖိုး (ဥပမာ- စာသားတွေပေါင်းစပ်ခြင်း ဒါမှမဟုတ် သင်္ချာတွက်ချက်မှု ရလဒ်) ကို သိမ်းဆည်းထားတဲ့ field တစ်ခု ဖြစ်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"ဘာကြောင့်မကောင်းတာလဲ-2\">ဘာကြောင့်မကောင်းတာလဲ။</h4><a class=\"sl-anchor-link\" href=\"#ဘာကြောင့်မကောင်းတာလဲ-2\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘာကြောင့်မကောင်းတာလဲ။”</span></a></div>\n<p>တွက်ချက်ထားတဲ့ တန်ဖိုးတွေကို သိမ်းဆည်းထားခြင်းဟာ သေချာမစီမံရင် data inconsistency နှင့် redundancy တွေ ဖြစ်စေနိုင်ပါတယ်။\nပုံမှန်အားဖြင့် ဒီလိုတန်ဖိုးတွေကို queries တွေ ဒါမှမဟုတ် application logic တွေထဲမှာ လိုအပ်တဲ့အချိန်မှ တွက်ချက်ထုတ်ယူတာက ပိုကောင်းပါတယ်။</p>\n<p><strong>ဥပမာ -</strong></p>\n<p><strong>❌ Bad design:</strong> Employees table မှာ FirstName နှင့် LastName ကို ပေါင်းပြီး FullName ဆိုတဲ့ field အသစ်နောက်တစ်ခု ထပ်ထည့်ထားတာမျိုး။\nOrderDetails table မှာ Quantity (အရေအတွက်) နှင့် UnitPrice (ပစ္စည်းတစ်ခုချင်းစီရဲ့ဈေးနှုန်း) ကို မြှောက်ပြီး TotalPrice (စုစုပေါင်းဈေးနှုန်း) ဆိုတဲ့ field ကို ထပ်ထည့်ထားတာမျိုး။</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>ProductId</th><th>Price</th><th>Quantity</th><th>TotalPrice</th></tr></thead><tbody><tr><td>1</td><td>10</td><td>2</td><td>20</td></tr><tr><td>2</td><td>20</td><td>3</td><td>60</td></tr></tbody></table>\n<p><strong>✅ Good design:</strong> FullName လိုအပ်ရင် FirstName နှင့် LastName field တွေကို query ဒါမှမဟုတ် report ထဲမှာမှ ပေါင်းစပ်ပြီး ဖော်ပြခြင်း။ TotalPrice ကို လိုအပ်ရင် Quantity * UnitPrice ဆိုပြီး query ထဲမှာမှ တွက်ချက်ခြင်း။\nဒီလိုလုပ်ခြင်းအားဖြင့် Quantity ဒါမှမဟုတ် UnitPrice ပြောင်းသွားရင် TotalPrice ကို သက်သက်လိုက်ပြင်နေစရာမလိုတော့ဘဲ query ခေါ်ယူတိုင်း နောက်ဆုံးတန်ဖိုးကို အမြဲတမ်း တွက်ချက်ပေးသွားမှာဖြစ်ပါတယ်။</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>ProductId</th><th>Price</th><th>Quantity</th></tr></thead><tbody><tr><td>1</td><td>10</td><td>2</td></tr><tr><td>2</td><td>20</td><td>3</td></tr></tbody></table>\n<p><code dir=\"auto\">TotalPrice = Quantity * Price</code></p>\n<p><strong>ဒီအမှားတွေကို ရှောင်ရှားခြင်းအားဖြင့် ပိုမိုကောင်းမွန်တဲ့ database ဒီဇိုင်းတွေကို ဖန်တီးနိုင်မှာဖြစ်ပါတယ်။</strong></p>"
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
const url = "src/content/docs/relational-database/Terminology/structure-related-terms/field.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/relational-database/Terminology/structure-related-terms/field.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/relational-database/Terminology/structure-related-terms/field.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
