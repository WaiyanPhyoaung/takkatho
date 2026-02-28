import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const armyKnife = new Proxy({"src":"/_astro/army-knife.Crpk5Q1A.jpeg","width":275,"height":183,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/frontend-architecture/army-knife.jpeg";
							}
							
							return target[name];
						}
					});

const spaghetti = new Proxy({"src":"/_astro/spaghetti.DymqA0hQ.jpg","width":1366,"height":1242,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/frontend-architecture/spaghetti.jpg";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Monolithic Architecture ဆိုတာဘာလဲ",
  "description": "Monolithic Architecture ဆိုတာဘာလဲ"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "monolith-ဆိုတာ-တကယ်တမ်း-ဘာလဲ",
    "text": "Monolith ဆိုတာ တကယ်တမ်း ဘာလဲ?"
  }, {
    "depth": 3,
    "slug": "monolith-vs-spaghetti-code",
    "text": "Monolith vs Spaghetti Code"
  }, {
    "depth": 3,
    "slug": "ဘာကြောင့်-monolith-ကို-ရွေးချယ်သင့်သလဲ",
    "text": "ဘာကြောင့် Monolith ကို ရွေးချယ်သင့်သလဲ?"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "မိတ်ဆက်",
      "set:html": "<p>Frontend လောကမှာ Monolith ဆိုတာ “ခေတ်ဟောင်း” မဟုတ်ပါဘူး။ React, Vue, Angular နဲ့ ရေးသားထားတဲ့ Web Application ၉၀% လောက်ဟာ Monolith တွေပါပဲ။\nဒါကို <strong>“Swiss Army Knife (ဓားစုံ)”</strong> နဲ့ နှိုင်းယှဉ်ကြည့်ရအောင်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"monolith-ဆိုတာ-တကယ်တမ်း-ဘာလဲ\">Monolith ဆိုတာ တကယ်တမ်း ဘာလဲ?</h3><a class=\"sl-anchor-link\" href=\"#monolith-ဆိုတာ-တကယ်တမ်း-ဘာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Monolith ဆိုတာ တကယ်တမ်း ဘာလဲ?”</span></a></div>\n<p>Frontend Monolithic Architecture ဆိုတာ <strong>“Single Deployment Unit”</strong> ပါ။</p>\n"
    }), createVNode($$ContentImage, {
      src: armyKnife,
      alt: "swiss army knife",
      width: "400"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Swiss Army Knife တစ်ချောင်းကို မြင်ယောင်ကြည့်ပါ။</p>\n<ul>\n<li>ဓားပါတယ်၊ ကတ်ကြေးပါတယ်၊ ဝက်အူလှည့်ပါတယ်၊ ဖောက်တံပါတယ်။</li>\n<li>ဒါပေမဲ့ အဲ့ဒါတွေအားလုံးက <strong>ကိုယ်ထည်တစ်ခုတည်း (One Body)</strong> မှာ တွဲနေပါတယ်။</li>\n<li>ဝယ်ရင် တစ်ချောင်းလုံး ဝယ်ရတယ်၊ ပျောက်ရင် တစ်ချောင်းလုံး ပျောက်တယ်။</li>\n</ul>\n<p>Web Development မှာလည်း ဒီသဘောပါပဲ။</p>\n<ul>\n<li><code dir=\"auto\">Header</code>, <code dir=\"auto\">Footer</code>, <code dir=\"auto\">ProductPage</code>, <code dir=\"auto\">CheckoutPage</code> စတာတွေ အများကြီး ရှိမယ်။</li>\n<li>ဒါပေမဲ့ Build လုပ်လိုက်ရင် <code dir=\"auto\">bundle.js</code> ဆိုတဲ့ ဖိုင်တစ်ဖိုင်တည်း (သို့မဟုတ် Folder တစ်ခုတည်း) ထွက်လာတယ်။</li>\n<li>Server ပေါ်တင်ရင် အကုန်လုံး တပြိုင်တည်း တင်ရတယ်။ <strong>“တခါပြင် တခါတင် (All-or-Nothing Deployment)”</strong> ဖြစ်နေရင် ဒါဟာ Monolith ပါ။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"monolith-vs-spaghetti-code\">Monolith vs Spaghetti Code</h3><a class=\"sl-anchor-link\" href=\"#monolith-vs-spaghetti-code\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Monolith vs Spaghetti Code”</span></a></div>\n"
    }), createVNode($$ContentImage, {
      src: spaghetti,
      alt: "spaghetti",
      width: "400"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>လူတော်တော်များများက Monolith ဆိုရင် “ရှုပ်ပွနေတဲ့ Code တွေ (Spaghetti Code)” လို့ မှားမြင်တတ်ကြပါတယ်။</p>\n<ul>\n<li><strong>Monolith:</strong> ဓားစုံတစ်ချောင်း (Deployment ပုံစံ)။</li>\n<li><strong>Spaghetti Code:</strong> သံချေးတက်ပြီး ဖွင့်ရခက်နေတဲ့ ဓားစုံ (Code အရည်အသွေး ညံ့ဖျင်းခြင်း)။</li>\n</ul>\n<p>ကောင်းမွန်တဲ့ Monolith (Modular Monolith) ဆိုတာ ဆီထည့်ထားတဲ့ ဓားစုံလိုပါပဲ။ ကတ်ကြေးလိုရင် ကတ်ကြေးပဲ ဆွဲထုတ်လို့ရတယ်၊ ကျန်တာတွေ ပါမလာဘူး။ Code တွေကို Folder ခွဲပြီး စနစ်တကျ ရေးထားရင် Monolith က အရမ်းကောင်းပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဘာကြောင့်-monolith-ကို-ရွေးချယ်သင့်သလဲ\">ဘာကြောင့် Monolith ကို ရွေးချယ်သင့်သလဲ?</h3><a class=\"sl-anchor-link\" href=\"#ဘာကြောင့်-monolith-ကို-ရွေးချယ်သင့်သလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘာကြောင့် Monolith ကို ရွေးချယ်သင့်သလဲ?”</span></a></div>\n<p>Micro-Frontend ခေတ်စားနေပေမယ့် လက်တွေ့မှာ Monolith က အကောင်းဆုံး ရွေးချယ်မှု ဖြစ်နေဆဲပါ။</p>\n<ol>\n<li><strong>Simple to Develop:</strong> ဓားတစ်ချောင်းတည်း ကိုင်သွားရုံပဲ။ (Code အားလုံး တစ်နေရာတည်းမှာ ရှိလို့ ရှာရလွယ်၊ ပြင်ရလွယ်တယ်)။</li>\n<li><strong>Simple to Deploy:</strong> အိတ်ကပ်ထဲ ထည့်လိုက်ရုံပဲ။ (Build command တစ်ကြောင်းရိုက်၊ Hosting ပေါ်တင်လိုက်ရုံပဲ)။</li>\n<li><strong>Performance:</strong> တစ်ခါတည်း ထုတ်သုံးလို့ ရတယ်။ (Browser က Bundle တစ်ခုတည်း Load လုပ်ရလို့ Caching ပိုထိရောက်တယ်)။</li>\n</ol>\n"
    }), createVNode($$Aside, {
      title: "နိဂုံးချုပ်",
      type: "tip",
      "set:html": "<p>Frontend Monolith ဆိုတာ “Single Page Application (SPA)” အများစုရဲ့ သဘာဝပါပဲ။ အစိတ်အပိုင်းတွေ (Components) အများကြီး ရှိနိုင်ပေမယ့် နောက်ဆုံးမှာ User ဆီကို <strong>Unit တစ်ခုတည်း</strong> အနေနဲ့ ရောက်သွားတာမျိုးပါ။ စီမံခန့်ခွဲရ လွယ်ကူပြီး၊ စတင်ဖို့ အကောင်းဆုံး Architecture တစ်ခု ဖြစ်ပါတယ်။</p>"
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

const url = "src/content/docs/fe-architecture/monolithic/monolithic.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/fe-architecture/monolithic/monolithic.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/fe-architecture/monolithic/monolithic.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
