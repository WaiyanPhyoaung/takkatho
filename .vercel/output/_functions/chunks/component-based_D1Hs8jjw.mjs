import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const componentBased = new Proxy({"src":"/_astro/component-based.DRZt3eAg.png","width":1480,"height":1040,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/frontend-architecture/component-based.png";
							}
							
							return target[name];
						}
					});

const lego = new Proxy({"src":"/_astro/lego.B4O3m8s7.jpg","width":600,"height":400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/frontend-architecture/lego.jpg";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Component-Based Architecture ဆိုတာဘာလဲ",
  "description": "Component-Based Architecture ဆိုတာဘာလဲ"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "component-ဆိုတာ-ဘာလဲ",
    "text": "Component ဆိုတာ ဘာလဲ?"
  }, {
    "depth": 3,
    "slug": "component-တစ်ခုရဲ့-အနှစ်သာရ-the-core-concept",
    "text": "Component တစ်ခုရဲ့ အနှစ်သာရ (The Core Concept)"
  }, {
    "depth": 3,
    "slug": "monolithic-vs-component-based",
    "text": "Monolithic vs Component-Based"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>ခေတ်မီ Frontend Development မှာ Component ဆိုတာ အခြေခံအကျဆုံး Unit ပါ။ React, Vue, Angular, Svelte စတဲ့ Framework အားလုံးဟာ ဒီ Concept ပေါ်မှာ အခြေခံထားပါတယ်။ ဒီသင်ခန်းစာမှာ Component ဆိုတာ ဘာလဲ၊ ဘာကြောင့် ဒီလောက် အရေးပါရတာလဲ ဆိုတာကို ရှင်းလင်းစွာ နားလည်သွားပါလိမ့်မယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"component-ဆိုတာ-ဘာလဲ\">Component ဆိုတာ ဘာလဲ?</h3><a class=\"sl-anchor-link\" href=\"#component-ဆိုတာ-ဘာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Component ဆိုတာ ဘာလဲ?”</span></a></div>\n<p>Component ဆိုတာ <strong>“LEGO တုံးလေးများ”</strong> နဲ့ တူပါတယ်။</p>\n"
    }), createVNode($$ContentImage, {
      src: lego,
      alt: "lego bricks",
      width: "400"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>LEGO ရဲတိုက်ကြီးတစ်ခု ဆောက်မယ်ဆိုပါစို့။ ရဲတိုက်ကြီးတစ်ခုလုံးကို ပလပ်စတစ်အကြီးကြီး တစ်တုံးတည်းနဲ့ ပုံလောင်းပြီး ထုတ်လုပ်လိုက်တာမျိုး မဟုတ်ပါဘူး။ အစားထိုးလို့ရတဲ့၊ နေရာရွှေ့လို့ရတဲ့၊ ပုံစံတူ ပြန်သုံးလို့ရတဲ့ အတုံးလေးတွေ (Bricks) နဲ့ စုစည်း တည်ဆောက်ထားတာပါ။</p>\n<p>Software မှာလည်း ဒီလိုပါပဲ။ Web Page တစ်ခုလုံးကို HTML file အရှည်ကြီး တစ်ခုတည်းနဲ့ ရေးမယ့်အစား၊ သေးငယ်တဲ့ အစိတ်အပိုင်းလေးတွေ (Components) အဖြစ် ခွဲထုတ်လိုက်ပါတယ်။</p>\n<ul>\n<li><code dir=\"auto\">Button</code> Component</li>\n<li><code dir=\"auto\">Navbar</code> Component</li>\n<li><code dir=\"auto\">ProductCard</code> Component</li>\n</ul>\n<p>ဒီ Component လေးတွေကို ပေါင်းစပ် (Compose) လိုက်တဲ့အခါ Web Page ကြီးတစ်ခု ဖြစ်လာပါတယ်။</p>\n"
    }), createVNode($$ContentImage, {
      src: componentBased,
      alt: "component based architecture"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"component-တစ်ခုရဲ့-အနှစ်သာရ-the-core-concept\">Component တစ်ခုရဲ့ အနှစ်သာရ (The Core Concept)</h3><a class=\"sl-anchor-link\" href=\"#component-တစ်ခုရဲ့-အနှစ်သာရ-the-core-concept\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Component တစ်ခုရဲ့ အနှစ်သာရ (The Core Concept)”</span></a></div>\n<p>Component တစ်ခုမှာ အဓိက အချက် (၃) ချက် ပါဝင်လေ့ ရှိပါတယ် (Encapsulation):</p>\n<ol>\n<li><strong>Structure (HTML)</strong>: သူ ဘယ်လို ပုံစံ ရှိမလဲ? (ဥပမာ - Button ဆိုရင် <code dir=\"auto\">&#x3C;button></code> tag ပါမယ်)</li>\n<li><strong>Style (CSS)</strong>: သူ ဘယ်လို အရောင်၊ ဘယ်လို ဒီဇိုင်း ရှိမလဲ? (ဥပမာ - အပြာရောင်၊ ထောင့်ကွေးကွေး)</li>\n<li><strong>Behavior (JavaScript)</strong>: သူ ဘာလုပ်နိုင်မလဲ? (ဥပမာ - နှိပ်လိုက်ရင် Form တင်မယ်)</li>\n</ol>\n<p>အရင်ခေတ်က HTML, CSS, JS ကို File ခွဲရေးကြပေမယ့်၊ Component ခေတ်မှာတော့ ဒီ ၃ ခုလုံးကို <strong>“Component တစ်ခု”</strong> အနေနဲ့ စုစည်းထားလိုက်ပါတယ်။ ဒါကြောင့် <code dir=\"auto\">Button</code> Component ကို ယူသုံးလိုက်တာနဲ့ သူ့ရဲ့ ဒီဇိုင်း၊ သူ့ရဲ့ အလုပ်လုပ်ပုံတွေပါ တပါတည်း ပါလာပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"monolithic-vs-component-based\">Monolithic vs Component-Based</h3><a class=\"sl-anchor-link\" href=\"#monolithic-vs-component-based\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Monolithic vs Component-Based”</span></a></div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>အကြောင်းအရာ</th><th>Monolithic (Old Way)</th><th>Component-Based (Modern Way)</th></tr></thead><tbody><tr><td><strong>ဖွဲ့စည်းပုံ</strong></td><td>Page တစ်ခုလုံးကို HTML file တစ်ခုတည်းမှာ ရေးတယ်</td><td>Page ကို Component အသေးလေးတွေနဲ့ ဖွဲ့စည်းတယ်</td></tr><tr><td><strong>ပြုပြင်ခြင်း</strong></td><td>တစ်နေရာ ပြင်ရင် တခြားနေရာတွေပါ ထိခိုက်နိုင်တယ်</td><td>Component တစ်ခု ပြင်ရင် အဲ့ဒီ Component သုံးထားတဲ့ နေရာတိုင်း ပြောင်းသွားတယ်</td></tr><tr><td><strong>ပြန်လည်အသုံးပြုမှု</strong></td><td>Copy-Paste လုပ်ရတယ်</td><td><code dir=\"auto\">&#x3C;Button /></code> ဆိုပြီး ခေါ်သုံးလိုက်ရုံပဲ</td></tr><tr><td><strong>ပူးပေါင်းဆောင်ရွက်မှု</strong></td><td>File တစ်ခုတည်းမှာ လူတွေ ဝိုင်းရေးရလို့ ရှုပ်တယ်</td><td>တယောက်က Navbar ရေး၊ တယောက်က Sidebar ရေးလို့ ရတယ်</td></tr></tbody></table>\n"
    }), createVNode($$Aside, {
      title: "နိဂုံးချုပ်",
      type: "tip",
      "set:html": "<p>Component-Based Architecture ဆိုတာ “Divide and Conquer” (ခွဲခြားပြီး အုပ်ချုပ်ခြင်း) ဗျူဟာပါပဲ။ ပြဿနာအကြီးကြီး (Web Page) ကို ပြဿနာအသေးလေးတွေ (Components) အဖြစ် ခွဲထုတ်ပြီး ဖြေရှင်းတဲ့ နည်းလမ်း ဖြစ်ပါတယ်။</p>"
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

const url = "src/content/docs/fe-architecture/component/component-based.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/fe-architecture/component/component-based.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/fe-architecture/component/component-based.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
