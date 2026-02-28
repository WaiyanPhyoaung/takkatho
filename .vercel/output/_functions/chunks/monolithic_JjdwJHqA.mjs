import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import { m as monolith } from './monolith_BnPaxudS.mjs';
import 'clsx';

const frontmatter = {
  "title": "Monolithic Architecture ဆိုတာဘာလဲ - All-in-One Application",
  "description": "Monolithic Architecture ဆိုတာဘာလဲ - All-in-One Application"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "monolith-ဆိုတာဘာလဲ",
    "text": "Monolith ဆိုတာဘာလဲ?"
  }, {
    "depth": 3,
    "slug": "အားသာချက်များ-အစပိုင်းမှာ-ဘာလို့ကောင်းလဲ",
    "text": "အားသာချက်များ (အစပိုင်းမှာ ဘာလို့ကောင်းလဲ)"
  }, {
    "depth": 3,
    "slug": "အားနည်းချက်များ-ကြီးထွားလာတဲ့အခါ-ကြုံရတဲ့-ပြဿနာတွေ",
    "text": "အားနည်းချက်များ (ကြီးထွားလာတဲ့အခါ ကြုံရတဲ့ ပြဿနာတွေ)"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>ဒီသင်ခန်းစာပြီးသွားရင် Monolithic Architecture ဆိုတာဘာလဲ၊ သူ့ရဲ့ အားသာချက်၊ အားနည်းချက်တွေက ဘာတွေလဲ၊ Project အသစ်တွေမှာ ဘာကြောင့် Monolith ကို ရွေးချယ်လေ့ရှိသလဲဆိုတာကို နားလည်သွားပါလိမ့်မယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"monolith-ဆိုတာဘာလဲ\">Monolith ဆိုတာဘာလဲ?</h3><a class=\"sl-anchor-link\" href=\"#monolith-ဆိုတာဘာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Monolith ဆိုတာဘာလဲ?”</span></a></div>\n<p>Monolithic Architecture ဆိုတာ Application တစ်ခုကို တည်ဆောက်တဲ့အခါ <strong>Software ရဲ့ အစိတ်အပိုင်းအားလုံးကို Unit တစ်ခုတည်းအနေနဲ့ ပေါင်းစပ်ထားတာ</strong> ဖြစ်ပါတယ်။ E-commerce website တစ်ခုကို မြင်ယောင်ကြည့်ပါ။ Monolith မှာဆိုရင် user management, product catalog, shopping cart, payment processing တို့အတွက် code တွေအားလုံးက codebase တစ်ခုတည်းမှာ အတူတူရှိနေပါတယ်။ သူတို့ကို Application အကြီးကြီးတစ်ခုအနေနဲ့ အတူတူ <strong>develop, test, deploy</strong> လုပ်ရပါတယ်။</p>\n<p><strong>ဥပမာတစ်ခုနဲ့ ရှင်းပြရရင် - ကုန်တိုက်ကြီး (Department Store)</strong></p>\n<ul>\n<li>Monolith တစ်ခုက ကုန်တိုက်ကြီးတစ်ခုနဲ့တူတယ်။ ဌာနအားလုံး—အဝတ်အထည်၊ အီလက်ထရောနစ်၊ ကုန်ခြောက်၊ ပရိဘောဂ—အားလုံးက အမိုးတစ်ခုအောက်၊ အဆောက်အအုံတစ်ခုတည်းမှာ ရှိနေတယ်။ ဆိုင်တစ်ခုလုံးက တစ်ချိန်တည်းဖွင့်၊ တစ်ချိန်တည်းပိတ်ပြီး၊ အဖွဲ့အစည်းတစ်ခုတည်းက စီမံခန့်ခွဲတယ်။ အစပိုင်းမှာတော့ ဒါက စီမံခန့်ခွဲရတာ အလွန်ရိုးရှင်းပြီး ထိရောက်ပါတယ်။</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: monolith,
      alt: "Monolithic Architecture",
      height: 400
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အားသာချက်များ-အစပိုင်းမှာ-ဘာလို့ကောင်းလဲ\">အားသာချက်များ (အစပိုင်းမှာ ဘာလို့ကောင်းလဲ)</h3><a class=\"sl-anchor-link\" href=\"#အားသာချက်များ-အစပိုင်းမှာ-ဘာလို့ကောင်းလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အားသာချက်များ (အစပိုင်းမှာ ဘာလို့ကောင်းလဲ)”</span></a></div>\n<p>Monolith နဲ့ စတင်ခြင်းရဲ့ ကောင်းကျိုးတွေကတော့:</p>\n<ul>\n<li>\n<p><strong>Development လုပ်ရတာ ရိုးရှင်းခြင်း:</strong> Code အားလုံးက တစ်နေရာတည်းမှာပဲ ရှိတယ်။ Developer တွေက component တွေကြား network ဆက်သွယ်ရေးကို စိတ်ပူစရာမလိုဘဲ Application ရဲ့ မတူညီတဲ့ အစိတ်အပိုင်းတွေကို အလွယ်တကူ ဝင်ရောက်နားလည်ပြီး ပြင်ဆင်နိုင်တယ်။</p>\n</li>\n<li>\n<p><strong>End-to-End Testing လုပ်ရတာ လွယ်ကူခြင်း:</strong> Application တစ်ခုလုံးကို ကိုယ့်စက်ထဲမှာတင် run ပြီး user journey အစအဆုံး (login ကနေ checkout အထိ) ကို အလွယ်တကူ စမ်းသပ်နိုင်တယ်။</p>\n</li>\n<li>\n<p><strong>Deployment လုပ်ရတာ ရှင်းလင်းခြင်း:</strong> Deploy လုပ်ဖို့ Application တစ်ခုပဲရှိတယ်။ ဒါက အစောပိုင်းအဆင့်တွေမှာ release process ကို ရိုးရှင်းစေတယ်။</p>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အားနည်းချက်များ-ကြီးထွားလာတဲ့အခါ-ကြုံရတဲ့-ပြဿနာတွေ\">အားနည်းချက်များ (ကြီးထွားလာတဲ့အခါ ကြုံရတဲ့ ပြဿနာတွေ)</h3><a class=\"sl-anchor-link\" href=\"#အားနည်းချက်များ-ကြီးထွားလာတဲ့အခါ-ကြုံရတဲ့-ပြဿနာတွေ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အားနည်းချက်များ (ကြီးထွားလာတဲ့အခါ ကြုံရတဲ့ ပြဿနာတွေ)”</span></a></div>\n<p>Application က ပိုအောင်မြင်ပြီး ရှုပ်ထွေးလာတာနဲ့အမျှ အားနည်းချက်တွေ စပြီးပေါ်လာပါတယ်။</p>\n<ul>\n<li>\n<p><strong>နားလည်ရခက်ခဲလာခြင်း:</strong> Monolith အကြီးကြီးတစ်ခုက “ရှုပ်ထွေးနေတဲ့ ရွှံ့စိုင်ကြီး (Big Ball of Mud)” ဖြစ်လာနိုင်တယ်။ Codebase က အရမ်းကြီးပြီး ရှုပ်ထွေးလာတဲ့အခါ ဘယ် developer မှ အကုန်လုံးကို နားမလည်နိုင်တော့ဘဲ၊ bug တွေကို ပြင်ဖို့ ဒါမှမဟုတ် feature အသစ်တွေ ဘေးကင်းကင်းထည့်ဖို့ ခက်ခဲလာတယ်။</p>\n</li>\n<li>\n<p><strong>Scaling လုပ်ရတာ စိန်ခေါ်မှုများခြင်း:</strong> ကုန်တိုက်ရဲ့ အစိတ်အပိုင်းတစ်ခု (ဥပမာ - အီလက်ထရောနစ်ဌာန) က အရမ်းအလုပ်ရှုပ်လာရင်၊ အဲ့ဒီနေရာလေးတစ်ခုတည်းကို သီးသန့်နေရာချဲ့လို့မရဘူး။ ကုန်တိုက်ကြီးတစ်ခုလုံးကို အသစ်၊ ပိုကြီးအောင် ဆောက်ရသလိုပါပဲ။ အလားတူပဲ၊ feature တစ်ခု (ဥပမာ - product search) က site ကို နှေးစေရင်၊ Application တစ်ခုလုံးကို scale လုပ်ရပြီး၊ ဒါက ထိရောက်မှုမရှိဘဲ စရိတ်လည်းပိုကြီးတယ်။</p>\n</li>\n<li>\n<p><strong>နည်းပညာတစ်ခုတည်းမှာ ပိတ်မိနေခြင်း (Technology Lock-in):</strong> Application တစ်ခုလုံးကို technology stack တစ်ခုတည်း (ဥပမာ - programming language နဲ့ framework တစ်ခု) နဲ့ တည်ဆောက်ထားတယ်။ ကိုယ်က feature အသစ်တစ်ခုအတွက် <strong>ပိုခေတ်မီပြီး ပိုကောင်းတဲ့ နည်းပညာတစ်ခု</strong>ကို သုံးချင်ရင်တောင်၊ အဲ့ဒါကို ပေါင်းစပ်ဖို့ အလွန်ခက်ခဲသွားပြီး ကိုယ့်ရဲ့ မူလရွေးချယ်မှုမှာပဲ ပိတ်မိနေတတ်တယ်။</p>\n</li>\n<li>\n<p><strong>Deployment တွေ နှေးကွေးလာခြင်း:</strong> အရေးမပါတဲ့ feature တစ်ခုက သေးငယ်တဲ့ ပြောင်းလဲမှုတစ်ခုအတွက်တောင်၊ Application အကြီးကြီးတစ်ခုလုံးကို ပြန်ပြီး build, test, deploy လုပ်ဖို့လိုလာတယ်။ ဒီ process က နှေးကွေးပြီး မကြာခဏ update လုပ်ဖို့ အဆင်မပြေတော့ဘူး။</p>\n</li>\n<li>\n<p><strong>အမှားမခံနိုင်ခြင်း (Low Fault Tolerance):</strong> ဌာနတစ်ခုမှာ ပြဿနာတစ်ခုရှိနေရင် (ဥပမာ - ပရိဘောဂကဏ္ဍမှာ ရေစိမ့်နေရင်)၊ ကုန်တိုက်ကြီးတစ်ခုလုံးကို ပိတ်ပစ်ရနိုင်တယ်။ Monolith မှာလည်း အရေးမကြီးတဲ့ feature တစ်ခု (ဥပမာ - PDF report ထုတ်တာ) က bug တစ်ခုက website တစ်ခုလုံးကို crash ဖြစ်သွားစေနိုင်တယ်။</p>\n</li>\n</ul>"
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

const url = "src/content/docs/software-architecture/monolith/monolithic.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/monolith/monolithic.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/monolith/monolithic.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
