import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const thirdNFOrders = new Proxy({"src":"/_astro/third-nf-orders.CHiMIG0G.png","width":241,"height":161,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/relational-database/third-nf-orders.png";
							}
							
							return target[name];
						}
					});

const thirdNFCustomers = new Proxy({"src":"/_astro/third-nf-customers.BIhrcHp9.png","width":321,"height":121,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/relational-database/third-nf-customers.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Normalization: Third Normal Form",
  "description": "Third Normal Form"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "third-normal-form",
    "text": "Third Normal Form"
  }, {
    "depth": 3,
    "slug": "transitive-dependency",
    "text": "Transitive Dependency"
  }, {
    "depth": 3,
    "slug": "third-normal-form-3nf-သို့-ပြောင်းလဲခြင်း",
    "text": "Third Normal Form (3NF) သို့ ပြောင်းလဲခြင်း။"
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
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"third-normal-form\">Third Normal Form</h2><a class=\"sl-anchor-link\" href=\"#third-normal-form\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Third Normal Form”</span></a></div>\n<p>Relation Schema(table) တစ်ခုဟာ Third Normal Form (3NF) ဖြစ်ဖို့ဆိုရင် အောက်ပါစည်းမျဉ်းနှစ်ခုဖြင့် ကိုက်ညီရပါမယ်။</p>\n<blockquote>\n<ol>\n<li>\n<p>2NF ဖြစ်ပြီးသားဖြစ်ရပါမယ်။</p>\n</li>\n<li>\n<p>Transitive Dependencies တွေကို ဖယ်ရှားဖို့ လိုအပ်ပါတယ်။</p>\n</li>\n</ol>\n</blockquote>\n<p>3NF ရဲ့ အဓိကတာဝန်က 2NF မှာ ကျန်နေသေးတဲ့ ပြဿနာတစ်မျိုးဖြစ်တဲ့ Transitive Dependency ကို ရှင်းထုတ်ဖို့ပါပဲ။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"transitive-dependency\">Transitive Dependency</h3><a class=\"sl-anchor-link\" href=\"#transitive-dependency\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Transitive Dependency”</span></a></div>\n<p>Transitive Dependency ဆိုတာက Primary Key မဟုတ်တဲ့ (non-key) column တစ်ခုက တခြား non-key column တစ်ခုကို မှီခိုနေတဲ့\nတစ်ဆင့်ခံ ဆက်နွယ်မှုမျိုး ဖြစ်ပါတယ်။</p>\n<p>သင်္ကေတ —</p>\n<blockquote>\n<p><code dir=\"auto\">A → B</code> နှင့် <code dir=\"auto\">B → C</code> ဖြစ်ပါက <code dir=\"auto\">A → C</code> ဖြစ်သည်။</p>\n</blockquote>\n<p>A သည် B ကို သတ်မှတ်ပြီး B သည် C ကို သတ်မှတ်ပါက A → C ဆိုတဲ့ တစ်ဆင့်ခံ ဆက်နွယ်မှု (Transitive Dependency) ဖြစ်ပေါ်လာပါတယ်။</p>\n<p>ဥပမာ -</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>EmployeeID</th><th>Name</th><th>Department</th><th>DepartmentManager</th></tr></thead><tbody><tr><td>101</td><td>Sarah</td><td>Sales</td><td>John</td></tr><tr><td>102</td><td>Kyle</td><td>Engineering</td><td>Jane</td></tr><tr><td>103</td><td>Miles</td><td>Sales</td><td>John</td></tr><tr><td>104</td><td>Alice</td><td>Engineering</td><td>Jane</td></tr></tbody></table>\n<ol>\n<li><code dir=\"auto\">EmployeeID → Name, Name, Department</code> (EmployeeID ကိုသိရင် Department ကို သိနိုင်ပါတယ်။)</li>\n<li><code dir=\"auto\">Department → DepartmentManager</code> (Department ကိုသိရင် DepartmentManager ကို သိနိုင်ပါတယ်။)</li>\n</ol>\n<p>ဒါကြောင့် <code dir=\"auto\">transitive dependency</code> တစ်ခုဖြစ်တဲ့ <code dir=\"auto\">EmployeeID → DepartmentManager</code> ကို ဖန်တီးလိုက်ပါတယ်။</p>\n<p>ဒီမှာ ပြဿနာက <code dir=\"auto\">DepartmentManager</code> ဟာ <code dir=\"auto\">Primary Key</code> ဖြစ်တဲ့ <code dir=\"auto\">EmployeeID</code> အပေါ်မှာ တိုက်ရိုက်မှီခိုနေတာမဟုတ်ဘဲ\n<code dir=\"auto\">non-key</code> ဖြစ်တဲ့ <code dir=\"auto\">Department</code> ကနေတစ်ဆင့် တစ်ဆင့်ခံ မှီခိုနေတာပါ။ ဒါဟာ “မကောင်းတဲ့ မှီခိုမှု (bad dependency)” ဖြစ်ပြီး\nTable ထဲမှာ John နှင့် Jane ဆိုတဲ့ Manager နာမည်တွေ ထပ်ခါထပ်ခါဖြစ်နေတဲ့ Data Redundancy ကို ဖြစ်စေပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"third-normal-form-3nf-သို့-ပြောင်းလဲခြင်း\">Third Normal Form (3NF) သို့ ပြောင်းလဲခြင်း။</h3><a class=\"sl-anchor-link\" href=\"#third-normal-form-3nf-သို့-ပြောင်းလဲခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Third Normal Form (3NF) သို့ ပြောင်းလဲခြင်း။”</span></a></div>\n<p>ဒါဆိုရင် ကျွန်တော်တို့ရဲ့ <code dir=\"auto\">Fig. 3.3.1</code> 2NF Order table ကို third normal form ဖြစ်အောင် လုပ်ကြည့်ကြရအောင်။\nအဲဒီ Table မှာ Primary Key က OrderID ဖြစ်ပါတယ်။</p>\n<ol>\n<li><code dir=\"auto\">OrderID -> CustomerID</code> (OrderID ကိုသိရင် CustomerID ကို သိနိုင်ပါတယ်။)</li>\n<li><code dir=\"auto\">CustomerID -> CustomerName, CustomerAddress</code> (CustomerID ကိုသိရင် CustomerName နှင့် CustomerAddress ကို သိနိုင်ပါတယ်။)</li>\n</ol>\n<p>ဒီနေရာမှာ <code dir=\"auto\">CustomerName</code> နှင့် <code dir=\"auto\">CustomerAddress</code> တို့ဟာ <code dir=\"auto\">Primary Key</code> ဖြစ်တဲ့ <code dir=\"auto\">OrderID</code> အပေါ် တိုက်ရိုက်မှီခိုမနေဘဲ <code dir=\"auto\">non-key</code> ဖြစ်တဲ့ <code dir=\"auto\">CustomerID</code> ကနေတစ်ဆင့် မှီခိုနေတဲ့အတွက် Transitive Dependency ဖြစ်ပေါ်နေပါတယ်။</p>\n<p>3NF ဖြစ်အောင်လုပ်ဖို့အတွက် ဒီတစ်ဆင့်ခံ ဆက်နွယ်မှုကို ဖယ်ရှားပြီး Customer အချက်အလက်တွေကို သီးခြား table တစ်ခုအဖြစ် ခွဲထုတ်ဖို့ လိုအပ်ပါတယ်။</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
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
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: createVNode($$ContentImage, {
              src: thirdNFOrders,
              alt: "3NF Orders Table"
            })
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: createVNode($$ContentImage, {
              src: thirdNFCustomers,
              alt: "3NF Customers Table"
            })
          })]
        }), createVNode(_components.tr, {
          "set:html": "<td align=\"center\">Fig. 3.4.1: 3NF Orders Table</td><td align=\"center\">Fig. 3.4.2: 3NF Customers Table</td>"
        })]
      })]
    }), "\n", createVNode(_components.p, {
      "set:html": "အခုဆိုရင် ကျွန်တော်တို့ရဲ့ Database ဟာ 3NF အဆင့်ကို ရောက်ရှိသွားပါပြီ။\nTable တစ်ခုချင်းစီမှာ သူ့ရဲ့ သီးခြားရည်ရွယ်ချက်တစ်ခုစီ ရှိသွားပြီး data ထပ်နေတာတွေ (redundancy) ကို အနည်းဆုံးဖြစ်အောင် လျှော့ချနိုင်ကာ\ndata တွေကိုလည်း စနစ်တကျ စီမံခန့်ခွဲနိုင်ပြီ ဖြစ်ပါတယ်။"
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

const url = "src/content/docs/relational-database/normalization/third-normal-form.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/relational-database/normalization/third-normal-form.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/relational-database/normalization/third-normal-form.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
