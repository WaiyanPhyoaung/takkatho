import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const firstNormalForm = new Proxy({"src":"/_astro/first-nf.DIc3L3E3.png","width":757,"height":161,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/relational-database/first-nf.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Normalization: First Normal Form",
  "description": "First Normal Form"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "first-normal-form-1nf",
    "text": "First Normal Form (1NF)"
  }];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"first-normal-form-1nf\">First Normal Form (1NF)</h2><a class=\"sl-anchor-link\" href=\"#first-normal-form-1nf\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “First Normal Form (1NF)”</span></a></div>\n<p><strong>1NF (First Normal Form)</strong> ဆိုတာက Database Normalization လုပ်ငန်းစဉ်ရဲ့ ပထမဆုံးနှင့် အခြေခံအကျဆုံး စည်းမျဉ်းဖြစ်ပါတယ်။\n1NF ရဲ့ အဓိက စည်းမျဉ်းကတော့ ရှင်းရှင်းလေးပါ။</p>\n<blockquote>\n<p><strong>Relation Schema(R) (သို့မဟုတ် Table) ရဲ့ အကွက် (cell) တစ်ကွက်မှာ တန်ဖိုးတစ်ခုတည်းပဲ ရှိရပါမယ်။</strong></p>\n</blockquote>\n<p>တန်ဖိုးအများကြီးကို ကော်မာ (,) ခံပြီး ထည့်တာမျိုး လုံးဝလုပ်လို့မရပါဘူး။ <br>\nဒီလို တန်ဖိုးတစ်ခုတည်းကို <strong>Atomic Value</strong> လို့ခေါ်ပါတယ်။\nAtomic value ဆိုတာ အဓိပ္ပာယ်ရှိတဲ့ အစိတ်အပိုင်းတွေအဖြစ် ထပ်ပြီးခွဲခြမ်းလို့မရတဲ့ တန်ဖိုးတစ်ခုတည်းကို ဆိုလိုတာပါ။ <br></p>\n<p>ဥပမာ – “0912345678, 0998765432” ဆိုတဲ့ phone number တန်ဖိုးက ၂ ခုဖြစ်လို့ non-atomic (1NF ကို ချိုးဖောက်ခြင်း) ဖြစ်ပါတယ်။</p>\n<p>ကျွန်တော်တို့ရဲ့ <code dir=\"auto\">Fig. 3.1</code> ဥပမာမှာ Orders Table ကို ကြည့်လိုက်ရင် <code dir=\"auto\">OrderID 1</code> အတွက် BookID, BookTitle, Price နှင့် Quantity Columns တွေဟာ ဒီစည်းမျဉ်းကို ချိုးဖောက်နေပါတယ်။\nဒီ Table ကို 1NF အဖြစ် ပြောင်းလဲဖို့အတွက် column(field) တိုင်းရဲ့ record တိုင်းမှာ တန်ဖိုးတစ်ခုတည်းသာ ရှိစေဖို့ လိုအပ်ပါတယ်။</p>\n<p><strong>1NF Orders Table:</strong></p>\n"
    }), createVNode($$ContentImage, {
      src: firstNormalForm,
      alt: "1NF Orders Table"
    }), "\n", createVNode("p", {
      style: "text-align: center;",
      "set:html": "Fig. 3.2: 1NF Orders Table"
    }), "\n", createVNode(_components.p, {
      "set:html": "အခုဆိုရင် record တစ်ခုချင်းစီရဲ့ အကွက်တိုင်းမှာ တန်ဖိုးတစ်ခုတည်းသာ ရှိနေတဲ့အတွက် ဒီ Table ဟာ <strong>1NF စည်းမျဉ်းနှင့် ကိုက်ညီသွားပါပြီ</strong>။ ဒါပေမဲ့ ကျွန်တော်တို့မှာ redundancy (ထပ်နေတဲ့ data တွေ) အများကြီး ရှိနေပါသေးတယ်။\ncustomer ရဲ့ နာမည်နှင့် လိပ်စာတွေက ထပ်ခါတလဲလဲ ဖြစ်နေပါသေးတယ်။ ဒါဆိုရင်တော့ second normal form ကိုဆက်သွားကြပါမယ်။"
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

const url = "src/content/docs/relational-database/normalization/first-normal-form.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/relational-database/normalization/first-normal-form.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/relational-database/normalization/first-normal-form.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
