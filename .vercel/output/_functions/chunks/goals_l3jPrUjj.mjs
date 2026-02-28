import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const architecture = new Proxy({"src":"/_astro/architecture.CyGTZcTA.png","width":640,"height":563,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/software-architecture/architecture.png";
							}
							
							return target[name];
						}
					});

const balance = new Proxy({"src":"/_astro/balance.7sdNKZS2.png","width":1015,"height":610,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/software-architecture/balance.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Architecture တစ်ခုရဲ့ ရည်မှန်းချက်တွေက ဘာတွေလဲ",
  "description": "Architecture တစ်ခုရဲ့ ရည်မှန်းချက်တွေက ဘာတွေလဲ"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "feature-တွေအပြင်-system-တစ်ခု-ဘယ်လောက်ကောင်းကောင်း-အလုပ်လုပ်သလဲဆိုတာ",
    "text": "Feature တွေအပြင် System တစ်ခု “ဘယ်လောက်ကောင်းကောင်း” အလုပ်လုပ်သလဲဆိုတာ"
  }, {
    "depth": 3,
    "slug": "အဓိကနိယာမ---architecture-ဆိုတာ-trade-offs-တွေအကြောင်းပါပဲ",
    "text": "အဓိကနိယာမ - Architecture ဆိုတာ Trade-offs တွေအကြောင်းပါပဲ"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက",
      "set:html": "<p>ဒီသင်ခန်းစာပြီးသွားရင် Quality Attributes (Non-functional Requirements) တွေဆိုတာဘာလဲ၊ သူတို့ကြားက Trade-offs တွေကို ဘယ်လိုချိန်ညှိပြီး Architectural ဆုံးဖြတ်ချက်တွေ ချရမလဲဆိုတာကို နားလည်သွားပါလိမ့်မယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"feature-တွေအပြင်-system-တစ်ခု-ဘယ်လောက်ကောင်းကောင်း-အလုပ်လုပ်သလဲဆိုတာ\">Feature တွေအပြင် System တစ်ခု “ဘယ်လောက်ကောင်းကောင်း” အလုပ်လုပ်သလဲဆိုတာ</h3><a class=\"sl-anchor-link\" href=\"#feature-တွေအပြင်-system-တစ်ခု-ဘယ်လောက်ကောင်းကောင်း-အလုပ်လုပ်သလဲဆိုတာ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Feature တွေအပြင် System တစ်ခု “ဘယ်လောက်ကောင်းကောင်း” အလုပ်လုပ်သလဲဆိုတာ”</span></a></div>\n<p><strong>Architecture</strong> ဆိုတာ System တစ်ခုက ဘာတွေလုပ်ပေးနိုင်သလဲ (features) ဆိုတာထက်၊ အဲ့ဒီအလုပ်တွေကို <strong>ဘယ်လောက်ကောင်းကောင်း လုပ်ဆောင်နိုင်သလဲ</strong> ဆိုတာကို အဓိကထားပါတယ်။ ဒီ “ဘယ်လောက်ကောင်းကောင်း” ဆိုတဲ့ အရည်အသွေးတွေကို <strong>Quality Attributes ဒါမှမဟုတ် “-ilities”</strong> လို့ခေါ်ပါတယ်။ ဒါတွေက ကိုယ့်ရဲ့ architectural blueprint ကို ပုံဖော်ပေးမယ့် <strong>အဓိကရည်မှန်းချက်တွေ</strong> ပါပဲ။</p>\n<p>အရေးအကြီးဆုံး Quality Attributes တွေထဲက တချို့ကတော့:</p>\n<ul>\n<li>\n<p><strong>Performance (တုံ့ပြန်မှုအမြန်နှုန်း) ⏱️</strong></p>\n<ul>\n<li><strong>ဘာကိုဆိုလိုတာလဲ:</strong> System က request တစ်ခုကို ဘယ်လောက်မြန်မြန်တုံ့ပြန်သလဲ။ ဒါကို <strong>latency</strong> (ကြာချိန်) နဲ့ <strong>throughput</strong> (အချိန်တစ်ခုအတွင်း ပြီးမြောက်တဲ့အလုပ်) နဲ့ တိုင်းတာတယ်။</li>\n<li><strong>Architect တစ်ယောက်အနေနဲ့ စဉ်းစားရမှာက:</strong> “User တစ်သန်း တစ်ပြိုင်နက်တည်း သုံးနေရင်တောင်၊ search result တွေက ဘယ်လောက်မြန်မြန်ပေါ်လာသင့်လဲ?”</li>\n</ul>\n</li>\n<li>\n<p><strong>Scalability (တိုးချဲ့နိုင်စွမ်း) 📈</strong></p>\n<ul>\n<li><strong>ဘာကိုဆိုလိုတာလဲ:</strong> System က တိုးလာတဲ့ user တွေနဲ့ data တွေကို စွမ်းဆောင်ရည်မကျဘဲ ထိထိရောက်ရောက် ကိုင်တွယ်နိုင်ရဲ့လား။</li>\n<li><strong>Architect တစ်ယောက်အနေနဲ့ စဉ်းစားရမှာက:</strong> “ကျွန်တော်တို့ရဲ့ user အရေအတွက်က တစ်ညတည်းနဲ့ နှစ်ဆတိုးလာခဲ့ရင်၊ system က မကျသွားဘဲ၊ မနှေးသွားဘဲ ကိုင်တွယ်နိုင်ပါ့မလား?”</li>\n</ul>\n</li>\n<li>\n<p><strong>Availability / Reliability (အမြဲတမ်းသုံးနိုင်မှု / ယုံကြည်စိတ်ချရမှု) ✅</strong></p>\n<ul>\n<li><strong>ဘာကိုဆိုလိုတာလဲ:</strong> System က ပျက်မကျဘဲ ပုံမှန်အလုပ်လုပ်နေတဲ့ အချိန်ရာခိုင်နှုန်း။ ဒါကို <strong>“nines”</strong> (ဥပမာ - 99.9% uptime) နဲ့ တိုင်းတာလေ့ရှိတယ်။</li>\n<li><strong>Architect တစ်ယောက်အနေနဲ့ စဉ်းစားရမှာက:</strong> “Server တစ်လုံးပျက်သွားရင်၊ website တစ်ခုလုံး ရပ်သွားမှာလား၊ ဒါမှမဟုတ် ဆက်အလုပ်လုပ်နေနိုင်မလား?”</li>\n</ul>\n</li>\n<li>\n<p><strong>Maintainability (ပြင်ဆင်ထိန်းသိမ်းရလွယ်ကူမှု) 🔧</strong></p>\n<ul>\n<li><strong>ဘာကိုဆိုလိုတာလဲ:</strong> Developer တွေအတွက် bug တွေကို ရှာဖွေပြင်ဆင်ဖို့၊ update တွေလုပ်ဖို့၊ feature အသစ်တွေထည့်ဖို့ ဘယ်လောက်လွယ်ကူသလဲ။</li>\n<li><strong>Architect တစ်ယောက်အနေနဲ့ စဉ်းစားရမှာက:</strong> “Developer အသစ်တစ်ယောက်က ဒီ system ရဲ့ အစိတ်အပိုင်းတစ်ခုကို နားလည်ပြီး ပြောင်းလဲမှုတစ်ခုလုပ်ဖို့ ဘယ်လောက်ကြာမလဲ?”</li>\n</ul>\n</li>\n<li>\n<p><strong>Security (လုံခြုံရေး) 🛡️</strong></p>\n<ul>\n<li><strong>ဘာကိုဆိုလိုတာလဲ:</strong> System ရဲ့ data နဲ့ လုပ်ဆောင်ချက်တွေကို ခြိမ်းခြောက်မှုတွေနဲ့ ခွင့်ပြုချက်မရှိဘဲ ဝင်ရောက်ခြင်းကနေ ကာကွယ်နိုင်စွမ်း။</li>\n<li><strong>Architect တစ်ယောက်အနေနဲ့ စဉ်းစားရမှာက:</strong> “ကျွန်တော်တို့က user password တွေကို ဘယ်လိုကာကွယ်ထားသလဲ၊ SQL injection လိုမျိုး အဖြစ်များတဲ့ တိုက်ခိုက်မှုတွေကို ဘယ်လိုကာကွယ်မလဲ?”</li>\n</ul>\n</li>\n<li>\n<p><strong>Testability (စမ်းသပ်ရလွယ်ကူမှု) 🧪</strong></p>\n<ul>\n<li><strong>ဘာကိုဆိုလိုတာလဲ:</strong> System က ကောင်းကောင်းအလုပ်လုပ်ရဲ့လားဆိုတာကို စမ်းသပ်စစ်ဆေးဖို့ ဘယ်လောက်လွယ်ကူသလဲ။</li>\n<li><strong>Architect တစ်ယောက်အနေနဲ့ စဉ်းစားရမှာက:</strong> “ကျွန်တော်တို့ system ရဲ့ အစိတ်အပိုင်းတစ်ခုချင်းစီကို သီးခြားခွဲပြီး စမ်းသပ်နိုင်လား၊ ဒါမှမဟုတ် တစ်ခုလုံးကို တစ်ခါတည်း စမ်းသပ်ရမှာလား?”</li>\n</ul>\n</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: architecture,
      alt: "quality attributes",
      height: 400
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အဓိကနိယာမ---architecture-ဆိုတာ-trade-offs-တွေအကြောင်းပါပဲ\">အဓိကနိယာမ - Architecture ဆိုတာ Trade-offs တွေအကြောင်းပါပဲ</h3><a class=\"sl-anchor-link\" href=\"#အဓိကနိယာမ---architecture-ဆိုတာ-trade-offs-တွေအကြောင်းပါပဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အဓိကနိယာမ - Architecture ဆိုတာ Trade-offs တွေအကြောင်းပါပဲ”</span></a></div>\n<p>တစ်ပြိုင်နက်တည်းမှာ အမြန်ဆုံး၊ အတိုးချဲ့နိုင်ဆုံး၊ အလုံခြုံဆုံး၊ တည်ဆောက်ထိန်းသိမ်းဖို့ အကုန်အကျအသက်သာဆုံးဖြစ်တဲ့ system တစ်ခုကို ဘယ်တော့မှ တည်ဆောက်လို့မရပါဘူး။ Architectural ဆုံးဖြတ်ချက်တိုင်းမှာ အပေးအယူ (trade-off) တစ်ခုရှိပါတယ်။ Quality Attribute တစ်ခုကို ပိုကောင်းအောင်လုပ်လိုက်ရင်၊ တခြားတစ်ခုကို အလျှော့ပေးရလေ့ရှိပါတယ်။</p>\n<ul>\n<li>\n<p><strong>ဥပမာ ၁: Performance vs. Security</strong></p>\n<p>System တစ်ခုကို ပိုလုံခြုံအောင်လုပ်ဖို့၊ data encryption အလွှာတွေ၊ ရှုပ်ထွေးတဲ့ validation check တွေ ထပ်ထည့်ရနိုင်ပါတယ်။</p>\n<blockquote>\n<p>ဒီအဆင့်တွေက processing အချိန်ပိုယူတဲ့အတွက်၊ system ရဲ့ performance ကို အနည်းငယ်နှေးသွားစေနိုင်ပါတယ်။</p>\n</blockquote>\n</li>\n<li>\n<p><strong>ဥပမာ ၂: Maintainability vs. Performance</strong></p>\n<p>System တစ်ခုကို ထိန်းသိမ်းရလွယ်ကူအောင်လုပ်ဖို့၊ code တွေကို သေးငယ်ပြီး တာဝန်ကိုယ်စီသတ်မှတ်ထားတဲ့ layer တွေ၊ service တွေအဖြစ် ခွဲထုတ်နိုင်ပါတယ်။</p>\n<blockquote>\n<p>ဒီ service တွေက network ကနေတစ်ဆင့် ဆက်သွယ်တဲ့အခါ latency (ကြာချိန်) ဖြစ်ပေါ်စေပြီး၊ system ကို တစ်သားတည်းပေါင်းစပ်ထားတဲ့ monolith တစ်ခုထက် performance ပိုနည်းသွားစေနိုင်ပါတယ်။</p>\n</blockquote>\n</li>\n</ul>\n"
    }), createVNode($$Aside, {
      title: "မှတ်ချက်",
      type: "tip",
      "set:html": "<p>Architect တစ်ယောက်ရဲ့ အလုပ်က “ပြီးပြည့်စုံတဲ့” system တစ်ခုတည်ဆောက်ဖို့မဟုတ်ပါဘူး။ Business ရဲ့ အရေးအကြီးဆုံးရည်မှန်းချက်တွေကို နားလည်ပြီး၊ အဲ့ဒီရည်မှန်းချက်တွေကို အောင်မြင်ဖို့အတွက် မှန်ကန်တဲ့ trade-offs တွေကို ပြုလုပ်ဖို့ပါပဲ။</p>"
    }), "\n", createVNode($$ContentImage, {
      src: balance,
      alt: "balancing between security and performance",
      height: 300
    }), "\n", createVNode($$Aside, {
      title: "အနှစ်ချုပ်",
      "set:html": "<ul>\n<li>Software Architecture ဆိုတာ system တစ်ခုရဲ့ နောက်ပိုင်းကျမှ ပြောင်းလဲဖို့ခက်ခဲတဲ့ ဆုံးဖြတ်ချက်တွေ စုစည်းမှုတစ်ခုဖြစ်တယ်။</li>\n<li>Architecture ရဲ့ အဓိကရည်မှန်းချက်က feature တွေအကောင်အထည်ဖော်ဖို့သက်သက်မဟုတ်ဘဲ၊ Quality Attributes (performance, scalability, security, …) တွေကို ဖြည့်ဆည်းပေးဖို့ဖြစ်တယ်။</li>\n<li>အရေးကြီးတဲ့ architectural ဆုံးဖြတ်ချက်တိုင်းမှာ project ရဲ့ ရည်မှန်းချက်တွေကို အကောင်းဆုံးပြည့်မီအောင်လုပ်ဖို့ quality attribute တွေကြားမှာ အပေးအယူလုပ်ရတာတွေ ပါဝင်ပါတယ်။</li>\n</ul>"
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

const url = "src/content/docs/software-architecture/foundations/goals.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/foundations/goals.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/foundations/goals.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
