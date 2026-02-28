import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const secondNFOrders = new Proxy({"src":"/_astro/second-nf-orders._qbzpRDV.png","width":411,"height":161,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/relational-database/second-nf-orders.png";
							}
							
							return target[name];
						}
					});

const secondNFOrderItems = new Proxy({"src":"/_astro/second-nf-orderitems.Dom-DO7U.png","width":241,"height":161,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/relational-database/second-nf-orderitems.png";
							}
							
							return target[name];
						}
					});

const secondNFBooks = new Proxy({"src":"/_astro/second-nf-books.WfHgP2Ox.png","width":241,"height":161,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/relational-database/second-nf-books.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Normalization: Second Normal Form",
  "description": "Second Normal Form"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "second-normal-form-2nf",
    "text": "Second Normal Form (2NF)"
  }, {
    "depth": 3,
    "slug": "functional-dependencyfd",
    "text": "Functional Dependency(FD)"
  }, {
    "depth": 4,
    "slug": "ဥပမာ",
    "text": "ဥပမာ"
  }, {
    "depth": 3,
    "slug": "full-vs-partial-dependency-အပြည့်အဝ-မှီခိုမှု-vs-တစ်စိတ်တစ်ပိုင်း-မှီခိုမှု",
    "text": "Full vs Partial Dependency (အပြည့်အဝ မှီခိုမှု vs. တစ်စိတ်တစ်ပိုင်း မှီခိုမှု)"
  }, {
    "depth": 3,
    "slug": "second-normal-form-2nf-သို့-ပြောင်းလဲခြင်း",
    "text": "Second Normal Form (2NF) သို့ ပြောင်းလဲခြင်း။"
  }];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"second-normal-form-2nf\">Second Normal Form (2NF)</h2><a class=\"sl-anchor-link\" href=\"#second-normal-form-2nf\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Second Normal Form (2NF)”</span></a></div>\n<p>Relation Schema(table) တစ်ခုဟာ Second Normal Form (2NF) ဖြစ်ဖို့ဆိုရင် အောက်ပါစည်းမျဉ်းနှစ်ခုဖြင့် ကိုက်ညီရပါမယ်။</p>\n<blockquote>\n<ol>\n<li>\n<p>1NF ဖြစ်ပြီးသားဖြစ်ရပါမယ်။</p>\n</li>\n<li>\n<p>Table မှာရှိတဲ့ non-prime attribute(field) တိုင်းဟာ primary key အပေါ်မှာ အပြည့်အဝ မှီခို (fully functional depentent) နေရပါမယ်။</p>\n</li>\n</ol>\n</blockquote>\n<p>ရှင်းလင်းချက်။</p>\n<ul>\n<li><strong>Prime Attribute –</strong> Candidate Key ထဲမှာ ပါဝင်တဲ့ column (field)။</li>\n<li><strong>Non-Prime Attribute –</strong> Candidate Key မဟုတ်တဲ့ column (field)။</li>\n<li><strong>Fully Functional Dependency (FD) -</strong> Attribute(field) တစ်ခုဟာ primary key တစ်ခုလုံးအပေါ် မှီခိုနေရပါမယ်။</li>\n</ul>\n<p>2NF ကို နားလည်ဖို့အတွက် အရင်ဆုံး Functional Dependency ဆိုတဲ့ အရေးကြီးတဲ့ သဘောတရားတစ်ခုကို လေ့လာဖို့လိုပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"functional-dependencyfd\">Functional Dependency(FD)</h3><a class=\"sl-anchor-link\" href=\"#functional-dependencyfd\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Functional Dependency(FD)”</span></a></div>\n<p>Functional Dependency ဆိုတာက table တစ်ခုထဲမှာ column (attribute) တစ်ခုရဲ့တန်ဖိုးက တခြား column တစ်ခုရဲ့တန်ဖိုးကို ဘယ်လိုဆုံးဖြတ်ပေးတယ်ဆိုတဲ့ ဆက်နွယ်မှုကို ဖော်ပြတာဖြစ်ပါတယ်။</p>\n<p>ရိုးရှင်းအောင်ပြောရရင် —</p>\n<blockquote>\n<p>Column A ရဲ့တန်ဖိုးကို သိရုံဖြင့် Column B ရဲ့တန်ဖိုးကို တိတိကျကျ သိနိုင်တယ် ဆိုရင် B ဟာ A အပေါ်မှာ Functional Dependent ဖြစ်တယ်လို့ ခေါ်ပါတယ်။</p>\n</blockquote>\n<p>သင်္ကေတ —\n<code dir=\"auto\">A → B</code> (A determines B)</p>\n<p>A ကို determinant လို့ ခေါ်ပါတယ်။ [A က B ကို သတ်မှတ်သည်။] <br>\nB ကို dependent လို့ ခေါ်ပါတယ်။ [B သည် A အပေါ်တွင် functional dependent ဖြစ်သည်။]</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"ဥပမာ\">ဥပမာ</h4><a class=\"sl-anchor-link\" href=\"#ဥပမာ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဥပမာ”</span></a></div>\n<p>Employees table ရှိတယ်ဆိုပါစို့။</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>EmployeeID</th><th>FirstName</th><th>LastName</th><th>Department</th><th>DepartmentManager</th></tr></thead><tbody><tr><td>101</td><td>Sarah</td><td>Connor</td><td>Sales</td><td>John</td></tr><tr><td>102</td><td>Kyle</td><td>Reese</td><td>Engineering</td><td>Jane</td></tr><tr><td>103</td><td>John</td><td>Connor</td><td>Sales</td><td>John</td></tr><tr><td>104</td><td>Alice</td><td>Chan</td><td>Engineering</td><td>Jane</td></tr></tbody></table>\n<p>ဒီ table ထဲက Functional Dependencies (FDs) ကို ရှာကြည့်ရအောင်။</p>\n<blockquote>\n<p>EmployeeID → FirstName, LastName, Department</p>\n</blockquote>\n<p>EmployeeID ကို သိရုံဖြင့် ဝန်ထမ်းရဲ့နာမည် (FirstName, LastName) နှင့် ဌာန (Department) ကို တိတိကျကျ သိနိုင်ပါတယ်။\nEmployeeID ကလည်း primary key ဖြစ်တဲ့အတွက် တူညီတဲ့ တခြား row မရှိနိုင်ပါဘူး။<br>\nဥပမာ — <br>\nEmployeeID = 101 ဆိုတာနှင့်</p>\n<p>FirstName = Sarah <br>\nLastName = Connor <br>\nDepartment = Sales <br>\nဆိုတာကို သိရှိနိုင်ပါတယ်။ <br></p>\n<p>➡ EmployeeID ဟာ FirstName, LastName, Department တို့ရဲ့ Determinant ဖြစ်တယ်။</p>\n<blockquote>\n<p>Department -> DepartmentManager</p>\n</blockquote>\n<p>Department ကို သိရုံဖြင့် အဲ့ဒီဌာနရဲ့ မန်နေဂျာကို တိတိကျကျသိနိုင်ပါတယ်။ <br>\nဥပမာ — <br></p>\n<p>Sales ➜ John <br>\nEngineering ➜ Jane</p>\n<p>➡ Department က DepartmentManager ရဲ့ Determinant ဖြစ်တယ်။</p>\n<blockquote>\n<p><strong>တချို့ attribute တွေက reverse dependency မဖြစ်နိုင်ပါဘူး။</strong></p>\n</blockquote>\n<p>ဥပမာ — <br>\nFirstName → EmployeeID လို့တော့ ပြောလို့မရပါဘူး။</p>\n<p>ဘာလို့လဲဆိုတော့ — <br></p>\n<p>“John” ဆိုတဲ့ FirstName နှင့် ဝန်ထမ်း ၂ ယောက် ရှိနိုင်တဲ့အတွက် နာမည်တစ်ခုတည်းဖြင့် EmployeeID ကို တိတိကျကျ မဆုံးဖြတ်နိုင်လို့ပါပဲ။ <br></p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"full-vs-partial-dependency-အပြည့်အဝ-မှီခိုမှု-vs-တစ်စိတ်တစ်ပိုင်း-မှီခိုမှု\">Full vs Partial Dependency (အပြည့်အဝ မှီခိုမှု vs. တစ်စိတ်တစ်ပိုင်း မှီခိုမှု)</h3><a class=\"sl-anchor-link\" href=\"#full-vs-partial-dependency-အပြည့်အဝ-မှီခိုမှု-vs-တစ်စိတ်တစ်ပိုင်း-မှီခိုမှု\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Full vs Partial Dependency (အပြည့်အဝ မှီခိုမှု vs. တစ်စိတ်တစ်ပိုင်း မှီခိုမှု)”</span></a></div>\n<p>ဒီသဘောတရားက Composite Primary Key (column နှစ်ခု ဒါမှမဟုတ် နှစ်ခုထက်ပိုပြီးပေါင်းထားတဲ့ Primary Key) ရှိတဲ့ table တွေမှာ အလွန်အရေးကြီးပါတယ်။</p>\n<blockquote>\n<p><strong>Partial Dependency -</strong> Column တစ်ခုက Composite Primary Key ရဲ့ တစ်စိတ်တစ်ပိုင်း အပေါ်မှာပဲ မှီခိုနေတာ။</p>\n<p><strong>Full Dependency -</strong> Column တစ်ခုက Composite Primary Key တစ်ခုလုံး အပေါ်မှာ မှီခိုနေတာ။</p>\n</blockquote>\n<p>ဥပမာ —</p>\n<p><strong>ကျောင်းသား (Students) နှင့် သင်တန်း (Courses)</strong> <br></p>\n<p>ကျောင်းသားတွေ ဘယ်ဘာသာရပ်တွေ တက်ရောက်နေလဲဆိုတာကို မှတ်တမ်းတင်ထားတဲ့ table တစ်ခုကို စဉ်းစားကြည့်ပါ။</p>\n<p><strong>Enrollments Table (in 1NF)</strong></p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>StudentID</th><th>CourseID</th><th>StudentName</th><th>CourseGrade</th><th>CourseProfessor</th></tr></thead><tbody><tr><td>S101</td><td>CS101</td><td>Ann</td><td>A</td><td>Prof. Smith</td></tr><tr><td>S101</td><td>ENGL201</td><td>Ann</td><td>B</td><td>Prof. David</td></tr><tr><td>S102</td><td>CS101</td><td>Ben</td><td>A</td><td>Prof. Smith</td></tr><tr><td>S103</td><td>MATH301</td><td>Chris</td><td>B</td><td>Prof. White</td></tr></tbody></table>\n<p>ဒီ Table မှာ ကျွန်တော်တို့ရဲ့ primary key က (StudentID, CourseID) ဖြစ်ပါတယ်။ အခု ကျန်တဲ့ Columns တွေရဲ့ Dependencies တွေကို ကြည့်ရအောင်။</p>\n<ul>\n<li>\n<p><strong>StudentName:</strong> ကျောင်းသားရဲ့ နာမည်က Composite primary key (StudentID နှင့် CourseID) နှစ်ခုစလုံးအပေါ် မှီခိုနေသလား။</p>\n<ul>\n<li>မဟုတ်ပါ။</li>\n<li>ကျောင်းသားနာမည်ကိုသိဖို့ <code dir=\"auto\">StudentID</code> တစ်ခုတည်းဖြင့် လုံလောက်ပါတယ်။ <code dir=\"auto\">CourseID</code>မလိုပါဘူး။ ဒါကြောင့် ဒါဟာ <code dir=\"auto\">Partial Dependency</code> ဖြစ်ပါတယ်။</li>\n<li><code dir=\"auto\">StudentName</code> က <code dir=\"auto\">composite key</code> ရဲ့ တစ်စိတ်တစ်ပိုင်း <code dir=\"auto\">(StudentID)</code> အပေါ်မှာပဲ မှီခိုနေပါတယ်။</li>\n</ul>\n</li>\n<li>\n<p><strong>CourseProfessor:</strong> ပါမောက္ခနာမည်က Composite primary key (StudentID နှင့် CourseID) နှစ်ခုစလုံးအပေါ် မှီခိုနေသလား။</p>\n<ul>\n<li>မဟုတ်ပါ။</li>\n<li>ပါမောက္ခနာမည်ကိုသိဖို့ <code dir=\"auto\">CourseID</code> တစ်ခုတည်းဖြင့် လုံလောက်ပါတယ်။ <code dir=\"auto\">StudentID</code> မလိုပါဘူး။</li>\n<li>ဒါဟာလည်း <code dir=\"auto\">Partial Dependency</code> (တစ်စိတ်တစ်ပိုင်း မှီခိုမှု) ဖြစ်ပါတယ်။ <code dir=\"auto\">CourseProfessor</code> က <code dir=\"auto\">composite key</code> ရဲ့ တစ်စိတ်တစ်ပိုင်း <code dir=\"auto\">(CourseID)</code> အပေါ်မှာပဲ မှီခိုနေပါတယ်။</li>\n</ul>\n</li>\n<li>\n<p><strong>CourseGrade:</strong> အမှတ်က Composite primary key (StudentID နှင့် CourseID) နှစ်ခုစလုံးအပေါ် မှီခိုနေသလား။</p>\n<ul>\n<li>ဟုတ်ပါတယ်။</li>\n<li>ကျောင်းသားတစ်ယောက်ရဲ့ အမှတ်ကို သိဖို့ဆိုရင် ဘယ်ကျောင်းသားလဲ <code dir=\"auto\">(StudentID)</code> ဆိုတာကိုရော၊ ဘယ်ဘာသာလဲ <code dir=\"auto\">(CourseID)</code> ဆိုတာကိုပါ နှစ်ခုလုံးသိဖို့လိုပါတယ်။\nအဲ့ဒီအချက်အလက် နှစ်ခုထဲက တစ်ခုတည်းဖြင့် အမှတ်ကို မသိရှိနိုင်ပါဘူး။</li>\n<li>ဒါဟာ <code dir=\"auto\">Fully Functional Dependency</code> (အပြည့်အဝ မှီခိုမှု) ဖြစ်ပါတယ်။\n<code dir=\"auto\">CourseGrade</code> ဟာ <code dir=\"auto\">composite key</code> တစ်ခုလုံးအပေါ်မှာ မှီခိုနေပါတယ်။</li>\n</ul>\n</li>\n</ul>\n<p>ဒီဥပမာကနေ Full Dependency နှင့် Partial Dependency ကြားက ကွာခြားချက်ကို ရှင်းရှင်းလင်းလင်း နားလည်ပြီလို့ မျှော်လင့်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"second-normal-form-2nf-သို့-ပြောင်းလဲခြင်း\">Second Normal Form (2NF) သို့ ပြောင်းလဲခြင်း။</h3><a class=\"sl-anchor-link\" href=\"#second-normal-form-2nf-သို့-ပြောင်းလဲခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Second Normal Form (2NF) သို့ ပြောင်းလဲခြင်း။”</span></a></div>\n<p>ဒါဆိုရင် ကျွန်တော်တို့ရဲ့ <code dir=\"auto\">Fig. 3.2.</code> 1NF Orders table ကို second normal form ဖြစ်အောင် လုပ်ကြည့်ကြရအောင်။</p>\n<p>ဒီ <code dir=\"auto\">Fig.3.2.</code> table မှာဆိုရင် Primary key က (OrderID နှင့် BookID) ဖြစ်ပါတယ်။</p>\n<p>Dependency တွေကို ကြည့်ရအောင်။</p>\n<ul>\n<li><code dir=\"auto\">CustomerName</code>, <code dir=\"auto\">CustomerAddress</code>, <code dir=\"auto\">OrderDate</code> တို့ဟာ <code dir=\"auto\">OrderID</code> တစ်ခုတည်းအပေါ်မှာပဲ မှီခိုပါတယ်။ <strong>(Partial Dependency)</strong></li>\n<li><code dir=\"auto\">BookTitle</code> နှင့် <code dir=\"auto\">Price</code> တို့ဟာ <code dir=\"auto\">BookID</code> တစ်ခုတည်းအပေါ်မှာပဲ မှီခိုပါတယ်။ <strong>(Partial Dependency)</strong></li>\n<li><code dir=\"auto\">Quantity</code> ကတော့ <code dir=\"auto\">OrderID</code> နှင့် <code dir=\"auto\">BookID</code> နှစ်ခုလုံးအပေါ်မှာ မှီခိုပါတယ်။ <strong>(Full Dependency)</strong></li>\n</ul>\n<p>2NF ဖြစ်ဖို့အတွက် ဒီ Partial Dependency တွေကို ဖယ်ရှားပြီး သက်ဆိုင်ရာ table တွေအဖြစ် ခွဲထုတ်ရပါမယ်။</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            style: {
              textAlign: "center"
            }
          }), createVNode(_components.th, {
            style: {
              textAlign: "center"
            }
          }), createVNode(_components.th, {
            style: {
              textAlign: "center"
            }
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: createVNode($$ContentImage, {
              src: secondNFOrders,
              alt: "2NF Orders Table"
            })
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: createVNode($$ContentImage, {
              src: secondNFOrderItems,
              alt: "2NF Order Items Table"
            })
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: createVNode($$ContentImage, {
              src: secondNFBooks,
              alt: "2NF Books Table"
            })
          })]
        }), createVNode(_components.tr, {
          "set:html": "<td align=\"center\">Fig. 3.3.1: 2NF Orders Table</td><td align=\"center\">Fig. 3.3.2: 2NF Order Items Table</td><td align=\"center\">Fig. 3.3.3: 2NF Books Table</td>"
        })]
      })]
    }), "\n", createVNode(_components.p, {
      "set:html": "အခုဆိုရင် table တွေဟာ 2NF စည်းမျဉ်းနှင့် ကိုက်ညီသွားပါပြီ။ ဒါပေမဲ့ ကျွန်တော်တို့ရဲ့ Orders Table ထဲမှာ ပြဿနာတစ်ခု ကျန်နေပါသေးတယ်။ ဒါကြောင့် Third Normal Form (3NF) ကို ဆက်သွားကြပါမယ်။"
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

const url = "src/content/docs/relational-database/normalization/second-normal-form.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/relational-database/normalization/second-normal-form.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/relational-database/normalization/second-normal-form.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
