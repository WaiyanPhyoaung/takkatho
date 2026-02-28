import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import './Content-image_C5QzPmj4.mjs';
import './monolith_BnPaxudS.mjs';
import 'clsx';

const frontmatter = {
  "title": "Monolith က ဘယ်အချိန်မှာ ပြဿနာစတက်သလဲ",
  "description": "Monolith က ဘယ်အချိန်မှာ ပြဿနာစတက်သလဲ"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "ပြဿနာရဲ့-လက္ခဏာတွေကို-ရှာဖွေခြင်း",
    "text": "ပြဿနာရဲ့ လက္ခဏာတွေကို ရှာဖွေခြင်း"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>Monolith တည်ဆောက်ပုံက တိုးတက်မှုအတွက် အဟန့်အတားဖြစ်လာတဲ့အခါ ပေါ်လာတတ်တဲ့ လက်တွေ့ပြဿနာတွေနဲ့ developer တွေရဲ့ စိတ်ညစ်စရာအခြေအနေတွေကို သိရှိနိုင်ဖို့ ဖြစ်ပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ပြဿနာရဲ့-လက္ခဏာတွေကို-ရှာဖွေခြင်း\">ပြဿနာရဲ့ လက္ခဏာတွေကို ရှာဖွေခြင်း</h3><a class=\"sl-anchor-link\" href=\"#ပြဿနာရဲ့-လက္ခဏာတွေကို-ရှာဖွေခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ပြဿနာရဲ့ လက္ခဏာတွေကို ရှာဖွေခြင်း”</span></a></div>\n<p>ဒီသင်ခန်းစာက <strong>microservices လို pattern တွေ</strong> ဘာကြောင့် လိုအပ်လာရသလဲဆိုတာကို နားလည်ဖို့အတွက် အဓိကတံတားတစ်ခုပါပဲ။ ကိုယ့်ရဲ့ monolith က ပြဿနာတွေ ရှိနေပြီဆိုတာကို ကိုယ့် team က အောက်ကလို စိတ်ညစ်စရာတွေ စပြီး ပြောလာတဲ့အခါ သိနိုင်ပါတယ်-</p>\n<ul>\n<li>\n<p><strong>“Deploy လုပ်ရမှာ ကြောက်လာတယ်”</strong></p>\n<ul>\n<li><strong>အခြေအနေ:</strong> Team တွေက application ကို deploy လုပ်ဖို့ ကြောက်လာကြတယ်။ ဘာလို့လဲဆိုတော့ အပြောင်းအလဲသေးသေးလေးတစ်ခုလုပ်လိုက်တာနဲ့ မဆိုင်တဲ့နေရာမှာပါ သွားပြီး ပြဿနာတက်သွားနိုင်လို့ပဲ။ Release အသစ်ထုတ်ရတိုင်း အချိန်အကြာကြီးပေးရပြီး၊ စိတ်ဖိစီးမှုများကာ၊ လူတိုင်းဝိုင်းကူမှ ပြီးတဲ့ အလုပ်ကြီးတစ်ခုလို ဖြစ်လာတယ်။</li>\n</ul>\n</li>\n<li>\n<p><strong>“Build လုပ်ရတာ ဘယ်တော့မှ မပြီးတော့သလို ခံစားလာရတယ်”</strong></p>\n<ul>\n<li><strong>အခြေအနေ:</strong> Application တစ်ခုလုံးကို deploy မလုပ်ခင်မှာ compile လုပ်၊ test လုပ်၊ build လုပ်ရတဲ့ အချိန်က နာရီဝက်၊ တစ်နာရီ ဒါမှမဟုတ် ဒါထက်ပိုပြီး ကြာလာတယ်။ Developer တွေရဲ့ အလုပ်လုပ်နိုင်စွမ်းက သိသိသာသာကို ကျဆင်းလာတယ်။</li>\n</ul>\n</li>\n<li>\n<p><strong>“လူသစ်တွေအတွက် အခက်အခဲဖြစ်လာတယ်”</strong></p>\n<ul>\n<li><strong>အခြေအနေ:</strong> Developer အသစ်တစ်ယောက်အတွက် အလွန်ကြီးမားပြီး အပြန်အလှန်ချိတ်ဆက်နေတဲ့ codebase ကို အခြေခံလောက် နားလည်ဖို့တောင် ရက်သတ္တပတ်တွေ၊ လတွေ အချိန်ယူရတယ်။ သူတို့က အချိန်တိုအတွင်းမှာ အလုပ်စလုပ်နိုင်ဖို့ ခက်ခဲလာတယ်။</li>\n</ul>\n</li>\n<li>\n<p><strong>“Scale လုပ်ရတဲ့ ပြဿနာ”</strong></p>\n<ul>\n<li><strong>အခြေအနေ:</strong> Team lead တစ်ယောက်က ဒီလိုညည်းညူလာတယ် - “ကျွန်တော်တို့ရဲ့ image processing feature က memory အများကြီးလိုတယ်။ user authentication feature ကတော့ CPU အများကြီးလိုတယ်။ image feature တစ်ခုကို scale လုပ်ဖို့အတွက် application တစ်ခုလုံးရဲ့ မိတ္တူ ဆယ်ခုလောက် run ပေးရတယ်။ အဲ့ဒီမှာ မလိုအပ်တဲ့ CPU တွေကို အလကားဖြုန်းတီးနေသလိုဖြစ်ပြီး၊ ပိုက်ဆံကုန်တာပဲ အဖတ်တင်တယ်။”</li>\n</ul>\n</li>\n<li>\n<p><strong>“နည်းပညာအဟောင်းမှာပဲ သောင်တင်နေတယ်”</strong></p>\n<ul>\n<li><strong>အခြေအနေ:</strong> Developer တစ်ယောက်က ဒီလိုပြောလာတယ် - “ကျွန်တော်တို့ရေးချင်တဲ့ feature အသစ်အတွက် Python မှာ အရမ်းကောင်းတဲ့ library အသစ်တစ်ခုရှိတယ်။ ဒါပေမဲ့ ကျွန်တော်တို့ monolith တစ်ခုလုံးက လွန်ခဲ့တဲ့ ၁၀ နှစ်က Java နဲ့ရေးထားတာ။ အစအဆုံး ပြန်မရေးဘဲနဲ့ အဲဒါကို သုံးလို့မရဘူး။”</li>\n</ul>\n</li>\n</ul>\n<p>ဒီလိုအခက်အခဲတွေက ပုံမှန်လိုဖြစ်လာပြီဆိုရင်၊ ဒါဟာ monolith ရဲ့ အားသာချက်တွေထက် အားနည်းချက်တွေက ပိုများနေပြီဆိုတဲ့ ခိုင်မာတဲ့လက္ခဏာပါပဲ။ အဲ့ဒီအခါမှာတော့ တခြား <strong>architectural pattern</strong> တွေကို စတင်စဉ်းစားဖို့ အချိန်ရောက်ပါပြီ။</p>\n"
    }), createVNode($$Aside, {
      title: "အနှစ်ချုပ်",
      "set:html": "<ul>\n<li>\n<p>Monolith Architecture ဆိုတာက အစိတ်အပိုင်းအားလုံးကို တစ်နေရာတည်းမှာ စုစည်းတည်ဆောက်ထားတဲ့ system တစ်ခုပါ။ အစပိုင်းမှာ develop လုပ်ရတာနဲ့ deploy လုပ်ရတာ ရိုးရှင်းပါတယ်။</p>\n</li>\n<li>\n<p>Layered Architecture ဆိုတာက monolith တစ်ခုကို Presentation, Business Logic, နဲ့ Data Access ဆိုတဲ့ အလွှာတွေခွဲပြီး စနစ်တကျဖြစ်အောင်လုပ်တဲ့ အသုံးများတဲ့ pattern တစ်ခုပါ။</p>\n</li>\n<li>\n<p>Monolith တစ်ခုက ကြီးလာတဲ့အခါ၊ ပြင်ဆင်ထိန်းသိမ်းရခက်တာ၊ deploy လုပ်ရတာနှေးတာ၊ နဲ့ scale လုပ်ရတာ အဆင်မပြေတာလိုမျိုး သိသာတဲ့အခက်အခဲတွေ ကြုံလာရတတ်ပါတယ်။ ဒါကြောင့် team တွေက တခြားခွဲခြမ်းထားတဲ့ architecture တွေကို စဉ်းစားလာကြပါတယ်။</p>\n</li>\n</ul>"
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

const url = "src/content/docs/software-architecture/monolith/pain-points.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/monolith/pain-points.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/software-architecture/monolith/pain-points.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
