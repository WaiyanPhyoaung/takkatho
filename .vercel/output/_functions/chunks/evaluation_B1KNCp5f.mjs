import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const fitnessFuctions = new Proxy({"src":"/_astro/fitness-functions.CyMXoF5x.png","width":1960,"height":360,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/software-architecture/fitness-functions.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Architecture ကို အကဲဖြတ်ခြင်း နှင့် Architectural Fitness Functions",
  "description": "Architecture ကို အကဲဖြတ်ခြင်း နှင့် Architectural Fitness Functions"
};
function getHeadings() {
  return [{
    "depth": 4,
    "slug": "ပြဿနာ---architecture-ပုံစံ-သွေဖည်သွားခြင်း-architectural-drift",
    "text": "ပြဿနာ - Architecture ပုံစံ သွေဖည်သွားခြင်း (Architectural Drift)"
  }, {
    "depth": 4,
    "slug": "ဖြေရှင်းချက်---architectural-fitness-functions",
    "text": "ဖြေရှင်းချက် - Architectural Fitness Functions"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>System တစ်ခု တဖြည်းဖြည်းပြောင်းလဲလာသည်နှင့်အမျှ၊ သင်၏ Architecture စည်းမျဉ်းများကို လိုက်နာနေဆဲဟုတ်မဟုတ် အဆက်မပြတ်စစ်ဆေးအတည်ပြုနည်းကို နားလည်စေရန် ဖြစ်ပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"ပြဿနာ---architecture-ပုံစံ-သွေဖည်သွားခြင်း-architectural-drift\">ပြဿနာ - Architecture ပုံစံ သွေဖည်သွားခြင်း (Architectural Drift)</h4><a class=\"sl-anchor-link\" href=\"#ပြဿနာ---architecture-ပုံစံ-သွေဖည်သွားခြင်း-architectural-drift\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ပြဿနာ - Architecture ပုံစံ သွေဖည်သွားခြင်း (Architectural Drift)”</span></a></div>\n<p>သင်က အကောင်းဆုံး Architectural ပုံကြမ်းတွေ၊ ဆုံးဖြတ်ချက်တွေ ချမှတ်ထားနိုင်ပါတယ်။ ဒါပေမဲ့ အချိန်ကြာလာတာနဲ့အမျှ၊ Code အသစ်တွေထပ်ထည့်လာတာ၊ Deadline တွေနီးကပ်လာတာတွေကြောင့်၊ တကယ့် System က ရည်ရွယ်ထားတဲ့ ဒီဇိုင်းကနေ တဖြည်းဖြည်း <strong>“သွေဖည်”</strong> သွားနိုင်ပါတယ်။ စည်းမျဉ်းတွေ ချိုးဖောက်ခံရပြီး၊ Architecture က တဖြည်းဖြည်း ယိုယွင်းလာပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"ဖြေရှင်းချက်---architectural-fitness-functions\">ဖြေရှင်းချက် - Architectural Fitness Functions</h4><a class=\"sl-anchor-link\" href=\"#ဖြေရှင်းချက်---architectural-fitness-functions\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဖြေရှင်းချက် - Architectural Fitness Functions”</span></a></div>\n<p>Fitness Function ဆိုတာက Architectural စည်းမျဉ်းတစ်ခုကို လိုက်နာနေသလားဆိုတာကို စစ်ဆေးပေးတဲ့ Automated Test တစ်ခုဖြစ်ပါတယ်။ ဒါကို <strong>“ကိုယ့် Architecture အတွက် Unit Test တစ်ခုပဲ”</strong> လို့ မှတ်ယူနိုင်ပါတယ်။</p>\n<ul>\n<li>\n<p><strong>ဘယ်လိုအလုပ်လုပ်လဲ -</strong> ဒါတွေက သင့်ရဲ့ ပုံမှန် CI/CD Pipeline (သင့် Code ကို Build လုပ်ပြီး Test လုပ်တဲ့ Automated Process) ရဲ့ အစိတ်အပိုင်းတစ်ခုအနေနဲ့ Run တဲ့ Automated Check တွေပါ။</p>\n</li>\n<li>\n<p><strong>Fitness Function များ၏ ရိုးရှင်းသော ဥပမာများ -</strong></p>\n<ul>\n<li>\n<p><strong>Dependencies များကို စစ်ဆေးခြင်း -</strong> <code dir=\"auto\">PaymentService</code> Code က <code dir=\"auto\">UserService</code> Code ကို တိုက်ရိုက်မှီခိုဖို့ ကြိုးစားခဲ့ရင် Fail ဖြစ်သွားမယ့် Test မျိုး (ဒါက Loose Coupling စည်းမျဉ်းကို ချိုးဖောက်တာဖြစ်တယ်)။</p>\n</li>\n<li>\n<p><strong>Metric များကို စစ်ဆေးခြင်း -</strong> Performance Scan တစ်ခုကို Run ပြီး အရေးကြီးတဲ့ API တစ်ခုရဲ့ Response Time က <strong>100 milliseconds</strong> ထက်ကျော်သွားရင် Fail ဖြစ်သွားမယ့် Test မျိုး။</p>\n</li>\n<li>\n<p><strong>Security ကို စစ်ဆေးခြင်း -</strong> သင့် Library တွေမှာ လူသိများတဲ့ Security အားနည်းချက်တွေ ရှိမရှိ Scan လုပ်တဲ့ Test မျိုး။</p>\n</li>\n</ul>\n</li>\n</ul>\n<p>ဒီ Functions တွေက အရေးကြီးတဲ့ Architectural နိယာမတစ်ခုကို ချိုးဖောက်မိရင် ချက်ချင်း Feedback ပေးပြီး၊ “ဘေးကင်းဖို့ အတွက်ပိုက်ကွန်” တစ်ခုကာထားသလို ဆောင်ရွက်ပေးပါတယ်။</p>\n"
    }), createVNode($$ContentImage, {
      src: fitnessFuctions,
      alt: "Fitness Functions"
    }), "\n", createVNode($$Aside, {
      title: "အနှစ်ချုပ်",
      "set:html": "<ul>\n<li>\n<p>Architect တစ်ယောက်ဖြစ်ရခြင်းဆိုသည်မှာ Project ၏ ရည်မှန်းချက်များနှင့် ကန့်သတ်ချက်များကို ထည့်သွင်းစဉ်းစားပြီး၊ စနစ်ကျသော Framework များသုံးကာ ခက်ခဲသော <strong>ဆုံးဖြတ်ချက်များ</strong> ကိုချမှတ်ပြီး <strong>အပေးအယူမျှတမှုများ</strong> ပြုလုပ်ခြင်းဖြစ်သည်။</p>\n</li>\n<li>\n<p><strong>C4 Model</strong> က မတူညီတဲ့ ပရိသတ်အမျိုးမျိုးအတွက် ရှင်းလင်းသော Architectural <strong>ပုံကြမ်းများ</strong> ကို ဖန်တီးရန် ရိုးရှင်းပြီး “Zoomable” ဖြစ်သော နည်းလမ်းတစ်ခု ဖြစ်သည်။</p>\n</li>\n<li>\n<p><strong>Architectural Decision Records (ADRs)</strong> များသည် အရေးကြီးသော ဆုံးဖြတ်ချက်များနောက်ကွယ်မှ “ဘာကြောင့်” ဆိုသည်ကို မှတ်တမ်းတင်ရန် ပေါ့ပါးသောနည်းလမ်းတစ်ခုဖြစ်ပြီး၊ Project ၏ သက်ရှိမှတ်တမ်းတစ်ခု ဖြစ်သည်။</p>\n</li>\n<li>\n<p><strong>Architectural Fitness Functions</strong> များသည် Architectural Drift ကို ကာကွယ်ရန်နှင့် System က ၎င်း၏ ရည်ရွယ်ထားသော ဒီဇိုင်းကို အချိန်နှင့်အမျှ ဆက်လက်လိုက်နာစေရန် ကူညီပေးသည့် Automated Test များဖြစ်သည်။</p>\n</li>\n</ul>"
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

const url = "src/content/docs/software-architecture/craft/evaluation.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/craft/evaluation.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/craft/evaluation.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
