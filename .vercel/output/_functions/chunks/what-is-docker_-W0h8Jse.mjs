import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import 'clsx';

const frontmatter = {
  "title": "Docker ဆိုတာ ဘာလဲ? ဘာလို့သုံးကြတာလဲ?",
  "description": "Virtual Machines (VM) နှင့် Docker ကွာခြားချက်၊ `But it works on my machine` ပြဿနာကို ဖြေရှင်းခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "docker-ဆိုတာ-ဘာလဲ",
    "text": "Docker ဆိုတာ ဘာလဲ?"
  }, {
    "depth": 3,
    "slug": "virtual-machine-vm-နှင့်-docker-ဘာကွာသလဲ",
    "text": "Virtual Machine (VM) နှင့် Docker ဘာကွာသလဲ?"
  }, {
    "depth": 3,
    "slug": "docker-ရဲ့-အဓိက-အကျိုးကျေးဇူးများ",
    "text": "Docker ရဲ့ အဓိက အကျိုးကျေးဇူးများ"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>Programmer တွေကြားမှာ အရမ်းနာမည်ကြီးတဲ့ စကားတစ်ခွန်းရှိပါတယ်။</p>\n<blockquote>\n<p><strong>“ငါ့စက်မှာတော့ Run တာပဲ၊ မင်းစက်ရောက်မှ ဘာလို့ Error တက်နေတာလဲ မသိဘူး”</strong> (<code dir=\"auto\">But it works on my machine</code>)</p>\n</blockquote>\n<p>ဒီပြဿနာ ဘာလို့ဖြစ်ရသလဲ?\nသင့်ကွန်ပျူတာမှာ Node.js Version 18 လိုတယ်، MongoDB လိုတယ်، Environment Variables တွေ သတ်မှတ်ထားတယ်။ တခြားတစ်ယောက်စက် ဒါမှမဟုတ် Server ပေါ်ရောက်တော့ အဲ့ဒီ Version တွေလွဲနေတဲ့အခါ Code က အလုပ်မလုပ်တော့ပါဘူး။</p>\n<p>ဒီပြဿနာကို ထာဝရဖြေရှင်းပေးလိုက်တာကတော့ <strong>Docker</strong> ပဲဖြစ်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"docker-ဆိုတာ-ဘာလဲ\">Docker ဆိုတာ ဘာလဲ?</h3><a class=\"sl-anchor-link\" href=\"#docker-ဆိုတာ-ဘာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Docker ဆိုတာ ဘာလဲ?”</span></a></div>\n<p>Docker ဆိုတာ <strong>သင့်ရဲ့ Code တွေရော၊ အဲ့ဒီ Code အလုပ်လုပ်ဖို့ လိုအပ်တဲ့ Tools တွေ၊ Databases တွေ၊ Version တွေအားလုံးကို ဘူး (Container) လေးတစ်ခုထဲ ပေါင်းထည့်ပြီး ချိတ်ပိတ်ပေးလိုက်တဲ့ နည်းပညာ</strong> ဖြစ်ပါတယ်။</p>\n<p>အဲ့ဒီ Container လေးကို Windows, Mac, Linux ဘယ်စက်မှာပဲသွားသွား Run လိုက်တာနဲ့، မူလပတ်ဝန်းကျင် အတိုင်းပဲ ထပ်တူညီစွာ အလုပ်လုပ်ပါတော့တယ်။ (Install တွေ လိုက်လုပ်နေစရာ မလိုတော့ပါဘူး)</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"virtual-machine-vm-နှင့်-docker-ဘာကွာသလဲ\">Virtual Machine (VM) နှင့် Docker ဘာကွာသလဲ?</h3><a class=\"sl-anchor-link\" href=\"#virtual-machine-vm-နှင့်-docker-ဘာကွာသလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Virtual Machine (VM) နှင့် Docker ဘာကွာသလဲ?”</span></a></div>\n<p>အရင်တုန်းက Environment တွေခွဲချင်ရင် Virtual Machine (ဥပမာ - VirtualBox) တွေ သုံးကြပါတယ်။ ဒါပေမယ့် အရမ်းလေးလံပါတယ်။</p>\n<ul>\n<li><strong>Virtual Machine (VM):</strong> တစ်ခုလုပ်ချင်ရင် OS (Windows သို့မဟုတ် Linux) အသစ်တစ်ခုလုံးကို ထပ်တင်ရပါတယ်။ GB ပေါင်းများစွာ ကြီးမားပြီး၊ RAM လည်း အရမ်းစားပါတယ်။</li>\n<li><strong>Docker Container:</strong> OS ကို ထပ်မတင်တော့ဘဲ، လက်ရှိရှိနေတဲ့ ကိုယ့်စက်ရဲ့ OS Kernel ကိုပဲ ခွဲဝေသုံးစွဲပါတယ်။ ဒါကြောင့် MB အနည်းငယ်သာ ရှိပြီး၊ စက္ကန့်ပိုင်းအတွင်း ချက်ချင်းပွင့်လာပါတယ်။ (အရမ်းပေါ့ပါးမြန်ဆန်ပါတယ်)</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"docker-ရဲ့-အဓိက-အကျိုးကျေးဇူးများ\">Docker ရဲ့ အဓိက အကျိုးကျေးဇူးများ</h3><a class=\"sl-anchor-link\" href=\"#docker-ရဲ့-အဓိက-အကျိုးကျေးဇူးများ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Docker ရဲ့ အဓိက အကျိုးကျေးဇူးများ”</span></a></div>\n<ol>\n<li><strong>Consistency:</strong> ဘယ်နေရာသွားသွား ကွာခြားမှုမရှိဘဲ ယုံကြည်စိတ်ချစွာ Run နိုင်ခြင်း။</li>\n<li><strong>Speed &#x26; Efficiency:</strong> စက္ကန့်ပိုင်းအတွင်း Server တွေ၊ Database တွေ ဆောက်လုပ်နိုင်ခြင်း။</li>\n<li><strong>Isolation:</strong> Project-A က လိုအပ်တဲ့ PHP 7 နဲ့ Project-B က လိုအပ်တဲ့ PHP 8 တို့တစ်စက်တည်းမှာ ပြဿနာမတက်ဘဲ အတူတူ အလုပ်လုပ်နိုင်ခြင်း။</li>\n</ol>\n<p>ရှေ့ဆက်မယ့် သင်ခန်းစာတွေမှာ Image နဲ့ Container ဆိုတဲ့ အရေးအကြီးဆုံး သဘောတရားတွေကို လေ့လာသွားပါမယ်။</p>"
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
const url = "src/content/docs/docker/introduction/what-is-docker.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/docker/introduction/what-is-docker.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/docker/introduction/what-is-docker.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
