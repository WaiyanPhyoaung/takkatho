import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const islandArchitecture = new Proxy({"src":"/_astro/island-architecture.CvJzZ6Aw.png","width":1560,"height":1669,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/web-performance/island-architecture.png";
							}
							
							return target[name];
						}
					});

const edgeComputing = new Proxy({"src":"/_astro/edge-computing.CR7dw3YT.png","width":1248,"height":1327,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/web-performance/edge-computing.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Modern Rendering Architectures",
  "description": "Modern Rendering Architectures"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "အကောင်းဆုံးနှစ်ခုကို-ပေါင်းစပ်ခြင်း",
    "text": "အကောင်းဆုံးနှစ်ခုကို ပေါင်းစပ်ခြင်း"
  }, {
    "depth": 3,
    "slug": "islands-architecture",
    "text": "Islands Architecture"
  }, {
    "depth": 3,
    "slug": "partial-hydration-တစ်စိတ်တစ်ပိုင်း-အသက်သွင်းခြင်း",
    "text": "Partial Hydration (တစ်စိတ်တစ်ပိုင်း အသက်သွင်းခြင်း)"
  }, {
    "depth": 3,
    "slug": "edge-computing--edge-functions",
    "text": "Edge Computing & Edge Functions"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>အလွန်မြန်ဆန်ပြီး၊ အပြန်အလှန်တုံ့ပြန်မှု(interactivity) ကောင်းမွန်သော website များကို တည်ဆောက်နိုင်သည့် ခေတ်မီ architectural patterns များ၏ အခြေခံသဘောတရားကို နားလည်ရန်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အကောင်းဆုံးနှစ်ခုကို-ပေါင်းစပ်ခြင်း\">အကောင်းဆုံးနှစ်ခုကို ပေါင်းစပ်ခြင်း</h3><a class=\"sl-anchor-link\" href=\"#အကောင်းဆုံးနှစ်ခုကို-ပေါင်းစပ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အကောင်းဆုံးနှစ်ခုကို ပေါင်းစပ်ခြင်း”</span></a></div>\n<p>အရင်သင်ခန်းစာတွေမှာ Server-Side Rendering (SSR) က ပထမဆုံး load ဖြစ်ချိန်မြန်တာ၊ Client-Side Rendering (CSR) က interactivity ကောင်းတာ စတဲ့ သူ့အားသာချက်၊ အားနည်းချက်တွေအကြောင်း လေ့လာခဲ့ပါတယ်။ ခေတ်မီနည်းပညာတွေကတော့ ဒီအားသာချက်နှစ်ခုလုံးကို အားနည်းချက်မရှိဘဲ ရရှိနိုင်အောင် ကြိုးစားလာကြပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"islands-architecture\">Islands Architecture</h3><a class=\"sl-anchor-link\" href=\"#islands-architecture\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Islands Architecture”</span></a></div>\n<ul>\n<li><strong>ဘာလဲ -</strong> ဒါက webpage တွေကို တည်ဆောက်တဲ့ နည်းလမ်းတစ်ခုပါ။ <strong>ပုံသေ(static)ဖြစ်ပြီး အပြန်အလှန်တုံ့ပြန်မှုမရှိတဲ့(non-interactive)</strong> အကြောင်းအရာတွေ (စာသား၊ ရိုးရိုးပုံများ) ကို server ကနေ HTML အဖြစ် ပို့လွှတ်ပါတယ်။ ဒါပေမဲ့ <strong>အပြန်အလှန်တုံ့ပြန်နိုင်တဲ့ အစိတ်အပိုင်းလေးတွေ</strong> (ဥပမာ - carousel၊ search widget၊ buttons တွေ) ကိုတော့ သီးခြား “ကျွန်း” လေးတွေအဖြစ် သဘောထားပြီး JavaScript ကို သုံးပါတယ်။</li>\n<li><strong>ဘာကြောင့်မြန်တာလဲ -</strong> စာမျက်နှာရဲ့ အစိတ်အပိုင်းအများစုက <strong>JavaScript လုံးဝမလိုအပ်တဲ့၊ မြန်မြန်ဆန်ဆန် load ဖြစ်တဲ့ static HTML</strong> တွေဖြစ်နေလို့ပါ။ Browser က Page တစ်ခုလုံးကို မဟုတ်ဘဲ၊ အဲဒီ ကျွန်းလေးတွေကိုပဲ <strong>“hydrate” (အပြန်အလှန်တုံ့ပြန်နိုင်အောင်)</strong> လုပ်ပေးရုံပါပဲ။ ဒါကြောင့် <strong>စစချင်း load လုပ်ရမယ့် JavaScript ပမာဏ သိသိသာသာနည်းသွားပြီး Time to Interactive (TTI)</strong> အလွန်မြန်ဆန်လာစေပါတယ်။</li>\n<li><strong>ဥပမာနှိုင်းယှဉ်ချက် -</strong> စက္ကူကတ်ထူပြားနဲ့လုပ်ထားတဲ့ မြေပုံကြီးတစ်ခုကို မြင်ယောင်ကြည့်ပါ။ သူ့ရဲ့ အစိတ်အပိုင်းအများစုက ကြည့်ဖို့သက်သက်ပါပဲ။ ဒါပေမဲ့ အဲဒီမြေပုံပေါ်မှာ <strong>အလုပ်လုပ်တဲ့ ခလုတ်အနည်းငယ် (“ကျွန်း” တွေ)</strong> ပါဝင်ပါတယ်။ သင်က မြေပုံတစ်ခုလုံးကို ပါဝါပေးစရာမလိုဘဲ၊ တကယ်အလုပ်လုပ်တဲ့ ခလုတ်လေးတွေအတွက် ဘက်ထရီအသေးလေးတွေပဲ လိုအပ်သလိုပါပဲ။</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: islandArchitecture,
      alt: "Island Architecture",
      height: 500
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"partial-hydration-တစ်စိတ်တစ်ပိုင်း-အသက်သွင်းခြင်း\">Partial Hydration (တစ်စိတ်တစ်ပိုင်း အသက်သွင်းခြင်း)</h3><a class=\"sl-anchor-link\" href=\"#partial-hydration-တစ်စိတ်တစ်ပိုင်း-အသက်သွင်းခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Partial Hydration (တစ်စိတ်တစ်ပိုင်း အသက်သွင်းခြင်း)”</span></a></div>\n<ul>\n<li><strong>ဘာလဲ -</strong> ဒါက Islands Architecture နဲ့ နီးနီးစပ်စပ်တူတဲ့ သဘောတရားတစ်ခုပါ။ application တစ်ခုလုံးကို တစ်ပြိုင်နက်တည်း “hydrate” လုပ်မယ့်အစား၊ Partial Hydration က <strong>မတူညီတဲ့ component တွေကို အချိန်မတူဘဲ၊ ဒါမှမဟုတ် လိုအပ်မှသာ interactive</strong> ဖြစ်အောင် လုပ်ဆောင်ပေးပါတယ်။</li>\n<li><strong>ဥပမာ -</strong> Webpage တစ်ခုရဲ့ အပေါ်ဆုံးက header က ချက်ချင်း interactive ဖြစ်သွားနိုင်ပေမယ့်၊ စာမျက်နှာအောက်ခြေက ရှုပ်ထွေးတဲ့ comment section ကိုတော့ user က အောက်ကို scroll ဆွဲချပြီး <strong>အဲဒီနေရာရောက်မှသာ သူ့ရဲ့ JavaScript ကို load လုပ်ပြီး interactive</strong> ဖြစ်အောင် လုပ်ဆောင်စေတာမျိုးပါ။</li>\n<li><strong>ဘာကြောင့်မြန်တာလဲ -</strong> ဒါက browser လုပ်ရမယ့်အလုပ်တွေကို ခွဲဝေပေးလိုက်ပြီး <strong>အရေးအကြီးဆုံး အစိတ်အပိုင်းတွေကို အရင်ဆုံး တုံ့ပြန်မှုကောင်းအောင် ဦးစားပေးလိုက်တာကြောင့်ဖြစ်ပါတယ်။</strong></li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"edge-computing--edge-functions\">Edge Computing &#x26; Edge Functions</h3><a class=\"sl-anchor-link\" href=\"#edge-computing--edge-functions\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Edge Computing &#x26; Edge Functions”</span></a></div>\n<ul>\n<li><strong>ဘာလဲ -</strong> ဒါက server-side မှာလုပ်ရတဲ့ အလုပ်တချို့ကို origin server တစ်ခုတည်းကနေ မဟုတ်ဘဲ၊ “edge” (အစွန်း) လို့ခေါ်တဲ့၊ <strong>User နဲ့ အနီးဆုံးနေရာမှာရှိတဲ့ CDN server</strong> တွေဆီကို ရွှေ့ပြောင်းလုပ်ဆောင်စေတာပါ။</li>\n<li><strong>ဘယ်လိုအလုပ်လုပ်လဲ -</strong> CDN ရဲ့ edge server တွေက static ဖိုင်တွေကို cache လုပ်ထားရုံသာမကဘဲ၊ <strong>Codes အသေးစားလေးတွေ (Edge Functions)</strong> ကိုပါ run နိုင်ပါတယ်။ သူတို့က content ကို user အလိုက်ပြောင်းလဲပေးတာ (personalize content)၊ A/B testing လုပ်တာ၊ ဒါမှမဟုတ် သင့် original server ဆီ request မရောက်ခင်မှာ database ကနေ data ဆွဲတာမျိုးတွေ လုပ်ဆောင်နိုင်ပါတယ်။</li>\n<li><strong>ဘာကြောင့်မြန်တာလဲ -</strong> ဒါက <strong>dynamic content</strong> တွေအတွက် user နဲ့ server ကြား အပြန်အလှန်သွားချိန် (round-trip time) ကို သိသိသာသာလျှော့ချပေးပြီး၊ personalized Page တွေအတွက်တောင် Time To First Byte (TTFB) ကို အလွန်မြန်ဆန်စေပါတယ်။</li>\n<li><strong>ဥပမာနှိုင်းယှဉ်ချက် -</strong> နေ့စဉ် promotion ကိုသိဖို့ Pizza ရုံးချုပ်ကြီး (origin server) ကို ဖုန်းဆက်မေးမြန်းမယ့်အစား၊ ကိုယ့်မြို့က pizza ဆိုင်ခွဲလေး (edge server) ကပဲ promotion ကို တိုက်ရိုက်ပြောပြပြီး order ပါ တစ်ခါတည်းလက်ခံလိုက်သလိုပါပဲ။</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: edgeComputing,
      alt: "Edge Computing",
      height: 400
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

const url = "src/content/docs/web-performance/advanced-techniques/rendering-architectures.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/web-performance/advanced-techniques/rendering-architectures.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/web-performance/advanced-techniques/rendering-architectures.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
