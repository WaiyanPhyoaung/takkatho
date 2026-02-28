import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const c4 = new Proxy({"src":"/_astro/c4.DG1MBvZY.png","width":8040,"height":4280,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/software-architecture/c4.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Architecture ကို မြင်သာအောင် ကြည့်ခြင်း - The C4 Model",
  "description": "Architecture ကို မြင်သာအောင် ကြည့်ခြင်း - The C4 Model"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "ပုံကြမ်းကောင်းတွေ-ဘာကြောင့်အရေးကြီးသလဲ",
    "text": "ပုံကြမ်းကောင်းတွေ ဘာကြောင့်အရေးကြီးသလဲ"
  }, {
    "depth": 3,
    "slug": "the-c4-model-ကိုယ့်-code-အတွက်-google-maps-လိုမျိုး",
    "text": "The C4 Model: ကိုယ့် Code အတွက် Google Maps လိုမျိုး"
  }, {
    "depth": 4,
    "slug": "အဆင့်-၁-system-context-diagram-ကမ္ဘာ့မြေပုံ",
    "text": "အဆင့် ၁: System Context Diagram (ကမ္ဘာ့မြေပုံ)"
  }, {
    "depth": 4,
    "slug": "အဆင့်-၂-container-diagram-နိုင်ငံမြေပုံ",
    "text": "အဆင့် ၂: Container Diagram (နိုင်ငံမြေပုံ)"
  }, {
    "depth": 4,
    "slug": "အဆင့်-၃-component-diagram-မြို့ပြမြေပုံ",
    "text": "အဆင့် ၃: Component Diagram (မြို့ပြမြေပုံ)"
  }, {
    "depth": 4,
    "slug": "အဆင့်-၄-code-diagram-လမ်းမမြင်ကွင်း---optional",
    "text": "အဆင့် ၄: Code Diagram (လမ်းမမြင်ကွင်း) - Optional"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>လူတိုင်းနားလည်လွယ်တဲ့ Architectural ပုံကြမ်းတွေဆွဲဖို့အတွက် ရိုးရှင်းပြီး ထိရောက်တဲ့နည်းလမ်းတစ်ခုကို လေ့လာရန် ဖြစ်ပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ပုံကြမ်းကောင်းတွေ-ဘာကြောင့်အရေးကြီးသလဲ\">ပုံကြမ်းကောင်းတွေ ဘာကြောင့်အရေးကြီးသလဲ</h3><a class=\"sl-anchor-link\" href=\"#ပုံကြမ်းကောင်းတွေ-ဘာကြောင့်အရေးကြီးသလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ပုံကြမ်းကောင်းတွေ ဘာကြောင့်အရေးကြီးသလဲ”</span></a></div>\n<p>Software လောကမှာ အဖြစ်များတဲ့ ပြဿနာတစ်ခုကတော့ “ရှုပ်ပွနေတဲ့ Whiteboard ပေါ်က ပုံကြမ်း” ပါပဲ။ အဲဒါကို ဆွဲတဲ့လူတစ်ယောက်တည်းပဲ နားလည်လေ့ရှိတယ်။ Architectural ပုံကြမ်းတွေရဲ့ အဓိကရည်ရွယ်ချက်က ဆက်သွယ်ပြောဆိုဖို့ (Communication) ပါ။ ပုံကြမ်းကောင်းတွေက လုပ်ငန်းပိုင်းဆိုင်ရာ တာဝန်ရှိသူတွေ (Business Stakeholders) ကနေ Developer အသစ်တွေအထိ လူတိုင်းကို System တစ်ခုလုံးကို နားလည်အောင် ကူညီပေးပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"the-c4-model-ကိုယ့်-code-အတွက်-google-maps-လိုမျိုး\">The C4 Model: ကိုယ့် Code အတွက် Google Maps လိုမျိုး</h3><a class=\"sl-anchor-link\" href=\"#the-c4-model-ကိုယ့်-code-အတွက်-google-maps-လိုမျိုး\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “The C4 Model: ကိုယ့် Code အတွက် Google Maps လိုမျိုး”</span></a></div>\n<p>C4 Model ဆိုတာက သင့် Software ကို ပုံကြမ်းဆွဲဖို့အတွက် ရိုးရှင်းတဲ့ စဉ်းစားပုံနည်းလမ်းတစ်ခုပါ။ ဒါက မြေပုံ Application တစ်ခုသုံးသလိုပါပဲ - သင်ကြည့်ချင်တဲ့ အသေးစိတ်အဆင့်ပေါ်မူတည်ပြီး Zoom In, Zoom Out လုပ်နိုင်ပါတယ်။</p>\n<ul>\n<li>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"အဆင့်-၁-system-context-diagram-ကမ္ဘာ့မြေပုံ\">အဆင့် ၁: System Context Diagram (ကမ္ဘာ့မြေပုံ)</h4><a class=\"sl-anchor-link\" href=\"#အဆင့်-၁-system-context-diagram-ကမ္ဘာ့မြေပုံ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အဆင့် ၁: System Context Diagram (ကမ္ဘာ့မြေပုံ)”</span></a></div>\n<ul>\n<li>\n<p><strong>ဘာကိုပြသလဲ -</strong> သင့် Software System တစ်ခုလုံးကို အလယ်မှာရှိတဲ့ Box တစ်ခုအဖြစ် ပြသပါတယ်။ ၎င်းက အသုံးပြုသူတွေ၊ တခြားပြင်ပ System တွေနဲ့ ဘယ်လိုအပြန်အလှန် အလုပ်လုပ်သလဲဆိုတာကို ပြပါတယ်။</p>\n</li>\n<li>\n<p><strong>ဘယ်သူတွေအတွက်လဲ -</strong> လူတိုင်းအတွက်ပါ (Business သမားတွေ၊ Non-technical Stakeholder တွေ)။ ဒါက High-level Overview ကို ပြသပါတယ်။</p>\n</li>\n</ul>\n</li>\n<li>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"အဆင့်-၂-container-diagram-နိုင်ငံမြေပုံ\">အဆင့် ၂: Container Diagram (နိုင်ငံမြေပုံ)</h4><a class=\"sl-anchor-link\" href=\"#အဆင့်-၂-container-diagram-နိုင်ငံမြေပုံ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အဆင့် ၂: Container Diagram (နိုင်ငံမြေပုံ)”</span></a></div>\n<ul>\n<li>\n<p><strong>ဘာကိုပြသလဲ -</strong> System ကို အကျယ်ချဲ့ကြည့်ခြင်း - အထဲမှာရှိတဲ့ သီးခြား Deploy လုပ်လို့ရတဲ့ Unit တွေကို ပြသပါတယ်။ ဒါတွေကို “Containers” လို့ခေါ်ပါတယ် (Docker Container တွေကို ဆိုလိုတာမဟုတ်ပါဘူး)။ Container ဆိုတာ Web Application, API Service, Mobile App, ဒါမှမဟုတ် Database လိုမျိုး အရာတစ်ခုခုဖြစ်နိုင်ပါတယ်။ ဒီအပိုင်းအစတွေ ဘယ်လိုချိတ်ဆက်ထားလဲဆိုတာကို ပြပါတယ်။</p>\n</li>\n<li>\n<p><strong>ဘယ်သူတွေအတွက်လဲ -</strong> Developer တွေနဲ့ Operations Team တွေအတွက်ပါ။ ဒါက High-level Technical တည်ဆောက်ပုံကို ပြသပါတယ်။</p>\n</li>\n</ul>\n</li>\n<li>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"အဆင့်-၃-component-diagram-မြို့ပြမြေပုံ\">အဆင့် ၃: Component Diagram (မြို့ပြမြေပုံ)</h4><a class=\"sl-anchor-link\" href=\"#အဆင့်-၃-component-diagram-မြို့ပြမြေပုံ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အဆင့် ၃: Component Diagram (မြို့ပြမြေပုံ)”</span></a></div>\n<ul>\n<li>\n<p><strong>ဘာကိုပြသလဲ -</strong> Container တစ်ခုတည်းကို (“API Service” လိုမျိုး) အကျယ်ချဲ့ကြည့်ခြင်း - သူ့ရဲ့ အဓိကအတွင်းပိုင်း တည်ဆောက်မှုအပိုင်းအစတွေ (Modules) ကို ပြသပါတယ်။</p>\n</li>\n<li>\n<p><strong>ဘယ်သူတွေအတွက်လဲ -</strong> အဲဒီ Service တစ်ခုတည်းပေါ်မှာ အလုပ်လုပ်နေတဲ့ Developer တွေအတွက်ပါ။</p>\n</li>\n</ul>\n</li>\n<li>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"အဆင့်-၄-code-diagram-လမ်းမမြင်ကွင်း---optional\">အဆင့် ၄: Code Diagram (လမ်းမမြင်ကွင်း) - Optional</h4><a class=\"sl-anchor-link\" href=\"#အဆင့်-၄-code-diagram-လမ်းမမြင်ကွင်း---optional\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အဆင့် ၄: Code Diagram (လမ်းမမြင်ကွင်း) - Optional”</span></a></div>\n<ul>\n<li><strong>ဘာကိုပြသလဲ -</strong> ဒါက Optional အဆင့်တစ်ခုဖြစ်ပြီး၊ Component တစ်ခုတည်းထဲကို ဝင်ကြည့်ပြီး ဘယ်လို Implement လုပ်ထားလဲဆိုတာကို ပြသနိုင်ပါတယ် (ဥပမာ - Class Diagram တစ်ခုနဲ့)။</li>\n</ul>\n</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: c4,
      alt: "C4 architecture"
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

const url = "src/content/docs/software-architecture/craft/c4.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/craft/c4.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/craft/c4.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
