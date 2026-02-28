import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const mvc = new Proxy({"src":"/_astro/mvc.CDfjnJbi.png","width":3022,"height":1375,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/frontend-architecture/mvc.png";
							}
							
							return target[name];
						}
					});

const mvvm = new Proxy({"src":"/_astro/mvvm.DYUVy8Bd.png","width":1324,"height":676,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/frontend-architecture/mvvm.png";
							}
							
							return target[name];
						}
					});

const mvp = new Proxy({"src":"/_astro/mvp.DdD5xXph.png","width":1438,"height":718,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/frontend-architecture/mvp.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "MV* Architecture Patterns (MVC, MVVM, MVP)",
  "description": "MVC, MVVM, and MVP Patterns"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "mv-ဆိုတာ-ဘာလဲ-စားသောက်ဆိုင်-ဥပမာ",
    "text": "MV* ဆိုတာ ဘာလဲ? (စားသောက်ဆိုင် ဥပမာ)"
  }, {
    "depth": 3,
    "slug": "1-mvc-model-view-controller",
    "text": "1. MVC (Model-View-Controller)"
  }, {
    "depth": 3,
    "slug": "2-mvp-model-view-presenter",
    "text": "2. MVP (Model-View-Presenter)"
  }, {
    "depth": 3,
    "slug": "3-mvvm-model-view-viewmodel",
    "text": "3. MVVM (Model-View-ViewModel)"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>Frontend လောကမှာ မကြာခဏ ကြားရတဲ့ <strong>MVC, MVVM, MVP</strong> ဆိုတာ ဘာတွေလဲ? ဒါတွေက Code ကို ဘယ်လို စနစ်တကျ ခွဲရေးမလဲ ဆိုတဲ့ ပုံစံ (Patterns) တွေ ဖြစ်ပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"mv-ဆိုတာ-ဘာလဲ-စားသောက်ဆိုင်-ဥပမာ\">MV* ဆိုတာ ဘာလဲ? (စားသောက်ဆိုင် ဥပမာ)</h3><a class=\"sl-anchor-link\" href=\"#mv-ဆိုတာ-ဘာလဲ-စားသောက်ဆိုင်-ဥပမာ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “MV* ဆိုတာ ဘာလဲ? (စားသောက်ဆိုင် ဥပမာ)”</span></a></div>\n<p>ဒီ Pattern တွေကို နားလည်ဖို့ <strong>“စားသောက်ဆိုင်”</strong> တစ်ဆိုင်ကို မြင်ယောင်ကြည့်ပါ။</p>\n<ol>\n<li>\n<p><strong>Model (မီးဖိုချောင်):</strong></p>\n<ul>\n<li>ဟင်းချက်တဲ့နေရာ (Data &#x26; Logic)။</li>\n<li>ကြက်သားရှိလား၊ ဝက်သားရှိလား စစ်ဆေးတဲ့နေရာ။</li>\n<li>Customer နဲ့ တိုက်ရိုက် မထိတွေ့ပါဘူး။</li>\n</ul>\n</li>\n<li>\n<p><strong>View (စားပွဲဝိုင်း):</strong></p>\n<ul>\n<li>Customer ထိုင်တဲ့နေရာ (UI)။</li>\n<li>ဟင်းပွဲတွေ လာချပေးတဲ့နေရာ။</li>\n<li>ဟင်း ဘယ်လိုချက်လဲ သူ မသိပါဘူး။</li>\n</ul>\n</li>\n<li>\n<p><strong>Controller / Presenter / ViewModel (ဝိတ်တာ):</strong></p>\n<ul>\n<li>Customer ဆီက Order ယူတယ်။ (User Input)</li>\n<li>မီးဖိုချောင်ကို သွားပြောတယ်။ (Update Model)</li>\n<li>ဟင်းရရင် လာချပေးတယ်။ (Update View)</li>\n</ul>\n</li>\n</ol>\n<p>ဒီ (၃) ယောက် ပေါင်းလုပ်မှ စားသောက်ဆိုင် လည်ပတ်သလို၊ Software မှာလည်း ဒီ (၃) ပိုင်း ပေါင်းမှ App တစ်ခု ဖြစ်လာတာပါ။</p>\n<hr>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"1-mvc-model-view-controller\">1. MVC (Model-View-Controller)</h3><a class=\"sl-anchor-link\" href=\"#1-mvc-model-view-controller\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “1. MVC (Model-View-Controller)”</span></a></div>\n<p>ဒါက အရင်ခေတ်က အသုံးများတဲ့ ပုံစံပါ။</p>\n<ul>\n<li><strong>Controller</strong> က “Boss” ပါ။ User ဘာလုပ်လဲ နားထောင်တယ်။ Model ကို ခိုင်းတယ်။</li>\n<li><strong>View</strong> က Model ပြောင်းသွားရင် အလိုလို လိုက်ပြောင်းဖို့ ကြိုးစားတယ်။</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: mvc,
      alt: "MVC diagram"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"2-mvp-model-view-presenter\">2. MVP (Model-View-Presenter)</h3><a class=\"sl-anchor-link\" href=\"#2-mvp-model-view-presenter\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “2. MVP (Model-View-Presenter)”</span></a></div>\n<p>MVC နဲ့ ဆင်တူပေမယ့် <strong>Presenter</strong> က ပိုအာဏာရှိပါတယ်။</p>\n<ul>\n<li>View က ဘာမှ မသိပါဘူး။ Presenter ခိုင်းတာပဲ လုပ်ပါတယ်။</li>\n<li>“Button နှိပ်လိုက်ပြီ” လို့ View က ပြောရင်၊ Presenter က “ဒါဆို Loading ပြလိုက်” လို့ ပြန်ခိုင်းပါတယ်။</li>\n<li>View နဲ့ Model လုံးဝ မတွေ့ပါဘူး။ Presenter က ကြားခံ သက်သက်ပါ။</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: mvp,
      alt: "MVP diagram"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"3-mvvm-model-view-viewmodel\">3. MVVM (Model-View-ViewModel)</h3><a class=\"sl-anchor-link\" href=\"#3-mvvm-model-view-viewmodel\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “3. MVVM (Model-View-ViewModel)”</span></a></div>\n<p>ဒါက Modern Frontend Frameworks (Vue, Angular, React) တွေ သုံးတဲ့ ပုံစံပါ။</p>\n<ul>\n<li><strong>ViewModel</strong> က View နဲ့ “ကော်” နဲ့ ကပ်ထားသလိုပါပဲ (Data Binding)။</li>\n<li>Model ထဲက Data ပြောင်းတာနဲ့ View မှာ အလိုလို လိုက်ပြောင်းတယ်။</li>\n<li>“ဝိတ်တာ” က Order ယူပြီး မီးဖိုချောင်ကို အော်ပြောစရာ မလိုတော့ဘူး။ စားပွဲပေါ်က ခလုတ်နှိပ်လိုက်တာနဲ့ မီးဖိုချောင်က သိပြီးသား ဖြစ်သွားတဲ့ သဘောပါ။</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: mvvm,
      alt: "MVVM diagram"
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

const url = "src/content/docs/fe-architecture/mv-star/intro.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/fe-architecture/mv-star/intro.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/fe-architecture/mv-star/intro.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
