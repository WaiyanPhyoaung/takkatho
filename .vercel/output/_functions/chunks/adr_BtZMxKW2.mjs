import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const adr = new Proxy({"src":"/_astro/adr.DetlgVuN.png","width":1440,"height":1560,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/software-architecture/adr.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "အကြောင်းပြချက်ခိုင်မာသော ဆုံးဖြတ်ချက်များ - Architectural Decision Records(ADRs)",
  "description": "အကြောင်းပြချက်ခိုင်မာသော ဆုံးဖြတ်ချက်များ - Architectural Decision Records(ADRs)"
};
function getHeadings() {
  return [{
    "depth": 4,
    "slug": "ပြဿနာ---ငါတို့-အဲဒါကို-ဘာလို့လုပ်ခဲ့ကြတာလဲ",
    "text": "ပြဿနာ - “ငါတို့ အဲဒါကို ဘာလို့လုပ်ခဲ့ကြတာလဲ?”"
  }, {
    "depth": 4,
    "slug": "ဖြေရှင်းချက်---architectural-decision-records-adrs",
    "text": "ဖြေရှင်းချက် - Architectural Decision Records (ADRs)"
  }, {
    "depth": 4,
    "slug": "adr-တစ်ခု-ဖွဲ့စည်းပုံ",
    "text": "ADR တစ်ခု၏ ဖွဲ့စည်းပုံ"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>အရေးကြီးသော Architectural ဆုံးဖြတ်ချက်များနှင့် ၎င်းတို့နောက်ကွယ်က အကြောင်းပြချက်တွေကို မှတ်တမ်းတင်ဖို့အတွက် ပေါ့ပါးတဲ့ ADRs တွေကို ဘယ်လိုအသုံးပြုရမလဲဆိုတာ လေ့လာရန် ဖြစ်ပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"ပြဿနာ---ငါတို့-အဲဒါကို-ဘာလို့လုပ်ခဲ့ကြတာလဲ\">ပြဿနာ - “ငါတို့ အဲဒါကို ဘာလို့လုပ်ခဲ့ကြတာလဲ?”</h4><a class=\"sl-anchor-link\" href=\"#ပြဿနာ---ငါတို့-အဲဒါကို-ဘာလို့လုပ်ခဲ့ကြတာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ပြဿနာ - “ငါတို့ အဲဒါကို ဘာလို့လုပ်ခဲ့ကြတာလဲ?””</span></a></div>\n<p>Project တွေမှာ အဖြစ်များတဲ့ ပြဿနာတစ်ခုကတော့ ဆုံးဖြတ်ချက်တစ်ခုချပြီး ခြောက်လလောက်ကြာတဲ့အခါ၊ အဲဒီဆုံးဖြတ်ချက်ကို ဘာကြောင့်ချခဲ့သလဲဆိုတာ ဘယ်သူမှ ပြန်မမှတ်မိတော့တာပါပဲ။ Team ထဲကိုရောက်လာတဲ့ လူသစ်တွေက System ရဲ့ ပြီးခဲ့တဲ့ အကြောင်းတွေကို မှတ်တမ်းတင်ထားတာ မရှိတာကြောင့် နားမလည်ဘဲ ဆုံးဖြတ်ချက်အမှားတွေကို ထပ်ခါထပ်ခါ ပြုလုပ်မိနိုင်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"ဖြေရှင်းချက်---architectural-decision-records-adrs\">ဖြေရှင်းချက် - Architectural Decision Records (ADRs)</h4><a class=\"sl-anchor-link\" href=\"#ဖြေရှင်းချက်---architectural-decision-records-adrs\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဖြေရှင်းချက် - Architectural Decision Records (ADRs)”</span></a></div>\n<p>ADR ဆိုတာက အရေးကြီးတဲ့ Architectural ဆုံးဖြတ်ချက်တစ်ခုတည်းကိုသာ မှတ်တမ်းတင်ထားတဲ့ တိုတိုနဲ့ ရိုးရှင်းတဲ့ Text File တစ်ခုပါ။ ရည်ရွယ်ချက်ကတော့ သင့် Project ရဲ့ Architecture အတွက် ပေါ့ပါးပြီး၊ Code နဲ့အတူတူ အမြဲတမ်း Update ဖြစ်နေတဲ့ မှတ်တမ်းတစ်ခုကို ဖန်တီးဖို့ပါပဲ။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"adr-တစ်ခု-ဖွဲ့စည်းပုံ\">ADR တစ်ခု၏ ဖွဲ့စည်းပုံ</h4><a class=\"sl-anchor-link\" href=\"#adr-တစ်ခု-ဖွဲ့စည်းပုံ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ADR တစ်ခု၏ ဖွဲ့စည်းပုံ”</span></a></div>\n<p>ADR ဆိုတာ အရမ်းရှည်ပြီး စာအုပ်ဆန်တဲ့ Document တစ်ခုမဟုတ်ပါဘူး။ သူ့မှာ များသောအားဖြင့် ရိုးရှင်းတဲ့ အပိုင်းအနည်းငယ်ပဲ ပါဝင်ပါတယ်-</p>\n<ul>\n<li>\n<p><strong>Title (ခေါင်းစဉ်) -</strong> ဆုံးဖြတ်ချက်ကို ဖော်ပြတဲ့ စာတိုတစ်ကြောင်း (ဥပမာ - “User Service Database အတွက် PostgreSQL ကို အသုံးပြုရန်”)။</p>\n</li>\n<li>\n<p><strong>Status (အခြေအနေ) -</strong> ဆုံးဖြတ်ချက်ရဲ့ လက်ရှိအခြေအနေ (ဥပမာ - Proposed (အကြံပြုထားဆဲ)၊ Accepted (လက်ခံပြီး)၊ Deprecated (မသုံးတော့))။</p>\n</li>\n<li>\n<p><strong>Context (နောက်ခံအကြောင်းအရာ) -</strong> သင်က ဘာပြဿနာ၊ ဘာအခြေအနေကို ရင်ဆိုင်ခဲ့ရတာလဲ။</p>\n</li>\n<li>\n<p><strong>Decision (ဆုံးဖြတ်ချက်) -</strong> သင် ဘာလုပ်ဖို့ ဆုံးဖြတ်ခဲ့သလဲ။ ရှင်းလင်းပြီး တိကျပါစေ။</p>\n</li>\n<li>\n<p><strong>Consequences (အကျိုးဆက်များ) -</strong> ဒီဆုံးဖြတ်ချက်ရဲ့ ရလဒ်တွေက ဘာတွေလဲ။ အားသာချက် (Pros)၊ အားနည်းချက် (Cons)၊ နှင့် အပေးအယူမျှတမှု (Trade-offs) တွေကို စာရင်းပြုစုပါ။ ဒါက အရေးအကြီးဆုံးအပိုင်းပါပဲ။</p>\n</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: adr,
      alt: "ADR sample",
      height: 600
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

const url = "src/content/docs/software-architecture/craft/adr.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/craft/adr.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/craft/adr.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
