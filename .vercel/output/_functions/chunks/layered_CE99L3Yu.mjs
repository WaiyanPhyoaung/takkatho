import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const layered = new Proxy({"src":"/_astro/layered.BtAHR9Tl.png","width":720,"height":637,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/software-architecture/layered.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Monolith ကို စနစ်တကျတည်ဆောက်ခြင်း - Layered (N-Tier) Architecture",
  "description": "Monolith ကို စနစ်တကျတည်ဆောက်ခြင်း - Layered (N-Tier) Architecture"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "ရှုပ်ထွေးမှုတွေကို-စနစ်တကျဖြစ်အောင်-စီစဉ်ခြင်း",
    "text": "ရှုပ်ထွေးမှုတွေကို စနစ်တကျဖြစ်အောင် စီစဉ်ခြင်း"
  }, {
    "depth": 3,
    "slug": "အလွှာတွေကို-ရှင်းပြခြင်း",
    "text": "အလွှာတွေကို ရှင်းပြခြင်း"
  }, {
    "depth": 3,
    "slug": "layer-တွေရဲ့-ရွှေစည်းမျဉ်း-the-golden-rule-of-layers",
    "text": "Layer တွေရဲ့ ရွှေစည်းမျဉ်း (The Golden Rule of Layers)"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>ဒီသင်ခန်းစာပြီးသွားရင် Layered Architecture Pattern က Monolithic Application တစ်ခုကို ဘယ်လိုစနစ်တကျဖြစ်စေပြီး ပြင်ဆင်ထိန်းသိမ်းရလွယ်ကူအောင် လုပ်ပေးသလဲဆိုတာကို လေ့လာရပါမယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ရှုပ်ထွေးမှုတွေကို-စနစ်တကျဖြစ်အောင်-စီစဉ်ခြင်း\">ရှုပ်ထွေးမှုတွေကို စနစ်တကျဖြစ်အောင် စီစဉ်ခြင်း</h3><a class=\"sl-anchor-link\" href=\"#ရှုပ်ထွေးမှုတွေကို-စနစ်တကျဖြစ်အောင်-စီစဉ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ရှုပ်ထွေးမှုတွေကို စနစ်တကျဖြစ်အောင် စီစဉ်ခြင်း”</span></a></div>\n<p>Monolith တစ်ခုက လုံးဝရှုပ်ပွနေရမယ်လို့ မဆိုလိုပါဘူး။ Layered Architecture (N-Tier Architecture လို့လည်းခေါ်တယ်) ဆိုတာ Monolith တစ်ခုအတွင်းက code တွေကို စနစ်တကျဖြစ်အောင် စီစဉ်ဖို့သုံးတဲ့ အလွန်အသုံးများတဲ့ pattern တစ်ခုပါ။ သူက code တွေကို သူတို့ရဲ့ တာဝန်အလိုက် သီးခြားအလွှာတွေ (layers) အဖြစ် ခွဲခြားပေးပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အလွှာတွေကို-ရှင်းပြခြင်း\">အလွှာတွေကို ရှင်းပြခြင်း</h3><a class=\"sl-anchor-link\" href=\"#အလွှာတွေကို-ရှင်းပြခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အလွှာတွေကို ရှင်းပြခြင်း”</span></a></div>\n<p>ပုံမှန် web application တစ်ခုမှာ အဓိကအလွှာ သုံးခုရှိပါတယ်:</p>\n<ul>\n<li>\n<p><strong>Presentation Layer (UI):</strong> ဒါက user တွေမြင်တွေ့ထိတွေ့ရတဲ့ အလွှာပါ။ User ရဲ့ browser ထဲမှာ run တဲ့ HTML, CSS, နဲ့ frontend JavaScript တွေပါဝင်တယ်။ သူ့ရဲ့အလုပ်က data တွေကို ပြသဖို့နဲ့ user input တွေကို ဖမ်းယူဖို့ပါပဲ။</p>\n</li>\n<li>\n<p><strong>Business Logic Layer (Application Layer):</strong> ဒါက application ရဲ့ “ဦးနှောက်” ပါ။ အဓိက business rule တွေ၊ logic တွေ၊ workflow တွေပါဝင်တယ်။ သူက UI ကနေလာတဲ့ user request တွေကို process လုပ်တာ၊ ဆုံးဖြတ်ချက်ချတာ၊ data layer နဲ့ ချိတ်ဆက်ညှိနှိုင်းတာတွေ လုပ်ပါတယ်။</p>\n</li>\n<li>\n<p><strong>Data Access Layer (Persistence Layer):</strong> ဒီအလွှာရဲ့ တစ်ခုတည်းသောတာဝန်က database နဲ့ ဆက်သွယ်ဖို့ပါပဲ။ သူက data တွေကို ဖတ်တာ၊ ရေးတာအားလုံး (ဥပမာ - SQL query တွေ) ကို ကိုင်တွယ်ပါတယ်။</p>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"layer-တွေရဲ့-ရွှေစည်းမျဉ်း-the-golden-rule-of-layers\">Layer တွေရဲ့ ရွှေစည်းမျဉ်း (The Golden Rule of Layers)</h3><a class=\"sl-anchor-link\" href=\"#layer-တွေရဲ့-ရွှေစည်းမျဉ်း-the-golden-rule-of-layers\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Layer တွေရဲ့ ရွှေစည်းမျဉ်း (The Golden Rule of Layers)”</span></a></div>\n<p>အရေးအကြီးဆုံးစည်းမျဉ်းကတော့ အလွှာတွေက တစ်လမ်းသွားဆက်သွယ်မှုပုံစံ (one-way communication) ရှိသင့်တယ်ဆိုတာပါပဲ။ အလွှာတစ်ခုက သူ့ရဲ့ တိုက်ရိုက်အောက်က အလွှာကိုပဲ စကားပြောသင့်ပါတယ်။</p>\n<ul>\n<li>Presentation Layer က Business Logic Layer ကို စကားပြောတယ်။</li>\n<li>Business Logic Layer က Data Access Layer ကို စကားပြောတယ်။</li>\n</ul>\n<blockquote>\n<p><strong>အရမ်းအရေးကြီးတာက Presentation Layer က Data Access Layer ကို တိုက်ရိုက် ဘယ်တော့မှ စကားမပြောသင့်ပါဘူး။</strong></p>\n</blockquote>\n<p>ဒီလိုခွဲခြားထားခြင်းက code တွေ ရှုပ်ထွေးနေတာကို ကာကွယ်ပေးပြီး system ကို ပြင်ဆင်ထိန်းသိမ်းရတာ အလွန်လွယ်ကူစေပါတယ်။</p>\n"
    }), createVNode($$ContentImage, {
      src: layered,
      alt: "Layered Architecture",
      height: 300
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

const url = "src/content/docs/software-architecture/monolith/layered.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/monolith/layered.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/monolith/layered.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
