import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const studio = new Proxy({"src":"/_astro/studio.MJjorJNx.jpeg","width":300,"height":168,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/frontend-architecture/studio.jpeg";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "အားသာချက် အားနည်းချက်များ",
  "description": "အားသာချက် အားနည်းချက်များ"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "အားသာချက်များ-studio-apartment--ကောင်းကွက်များ",
    "text": "အားသာချက်များ (Studio Apartment ၏ ကောင်းကွက်များ)"
  }, {
    "depth": 3,
    "slug": "အားနည်းချက်များ-studio-apartment--ဆိုးကွက်များ",
    "text": "အားနည်းချက်များ (Studio Apartment ၏ ဆိုးကွက်များ)"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "Studio Apartment vs Mansion",
      "set:html": "<p>Monolith ကို <strong>“Studio Apartment (အခန်းကျဉ်း)”</strong> နဲ့ နှိုင်းယှဉ်နိုင်ပြီး၊ Micro-Frontend ကို <strong>“Mansion (အိမ်ကြီး)”</strong> နဲ့ နှိုင်းယှဉ်နိုင်ပါတယ်။</p>"
    }), "\n", createVNode($$ContentImage, {
      src: studio,
      alt: "studio apartment",
      width: "400"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အားသာချက်များ-studio-apartment--ကောင်းကွက်များ\">အားသာချက်များ (Studio Apartment ၏ ကောင်းကွက်များ)</h3><a class=\"sl-anchor-link\" href=\"#အားသာချက်များ-studio-apartment--ကောင်းကွက်များ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အားသာချက်များ (Studio Apartment ၏ ကောင်းကွက်များ)”</span></a></div>\n<ol>\n<li>\n<p><strong>Simple Deployment (ပြောင်းရွှေ့ရ လွယ်ကူခြင်း):</strong>\nStudio ခန်း ပြောင်းရင် ပစ္စည်းသယ်ရတာ လွယ်တယ်။ သေတ္တာတစ်လုံးတည်းနဲ့ ပြီးတယ်။\n(Code ကို Build လုပ်၊ Server ပေါ်တင်၊ ပြီးပြီ။ ဘာမှ ရှုပ်ရှုပ်ထွေးထွေး မရှိဘူး)။</p>\n</li>\n<li>\n<p><strong>Development Speed (အလုပ်တွင်ခြင်း):</strong>\nရေသောက်ချင်ရင် မီးဖိုချောင်ကို လှမ်းယူလိုက်ရုံပဲ။ အိပ်ချင်ရင် ကုတင်ပေါ် လှဲလိုက်ရုံပဲ။\n(Code တွေ၊ Component တွေ Share ရတာ အရမ်းလွယ်တယ်။ Refactor လုပ်ရတာ မြန်တယ်)။</p>\n</li>\n<li>\n<p><strong>Performance (စရိတ်သက်သာခြင်း):</strong>\nမီးဖိုး၊ ရေဖိုး သက်သာတယ်။\n(Browser က File တစ်ခုတည်း Load လုပ်ရလို့ မြန်တယ်။ Caching လုပ်ရတာ ထိရောက်တယ်)။</p>\n</li>\n<li>\n<p><strong>Testing (စစ်ဆေးရ လွယ်ကူခြင်း):</strong>\nအခန်းထဲမှာ ကြွက်ရှိလား ရှာချင်ရင် တစ်ခန်းလုံး ချက်ချင်း တွေ့နိုင်တယ်။\n(End-to-End Testing လုပ်တဲ့အခါ App တစ်ခုလုံးကို တစ်ခါတည်း စစ်လို့ရတယ်)။</p>\n</li>\n</ol>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အားနည်းချက်များ-studio-apartment--ဆိုးကွက်များ\">အားနည်းချက်များ (Studio Apartment ၏ ဆိုးကွက်များ)</h3><a class=\"sl-anchor-link\" href=\"#အားနည်းချက်များ-studio-apartment--ဆိုးကွက်များ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အားနည်းချက်များ (Studio Apartment ၏ ဆိုးကွက်များ)”</span></a></div>\n<ol>\n<li>\n<p><strong>All-or-Nothing Deployment (တခါပြင် တခါတင်):</strong>\nမီးလုံးတစ်လုံး လဲချင်ရင်တောင် တစ်ခန်းလုံး မီးပိတ်ရသလိုမျိုး ဖြစ်နိုင်တယ်။\n(စာလုံးတစ်လုံး ပြင်ချင်ရင်တောင် App တစ်ခုလုံးကို ပြန် Build လုပ်ရတယ်)။</p>\n</li>\n<li>\n<p><strong>Scaling Issues (လူများလာရင် ကျပ်လာခြင်း):</strong>\nလူ ၁၀ ယောက်လောက် Studio ခန်းထဲ လာနေရင် ကြပ်ပြီး ရန်ဖြစ်ကုန်မယ်။\n(Developer ၅၀၊ ၁၀၀ လောက် Codebase တစ်ခုတည်းမှာ ဝိုင်းရေးရင် Merge Conflict တွေ ဖြစ်မယ်)။</p>\n</li>\n<li>\n<p><strong>Technology Lock-in (ပြင်ဆင်ရ ခက်ခဲခြင်း):</strong>\nအခန်းဖွဲ့စည်းပုံကို ပြောင်းချင်ရင် တစ်ခန်းလုံး ဖြိုရမယ်။\n(React နဲ့ ရေးထားရင် Vue နဲ့ ရောရေးလို့ မရဘူး။ Framework တစ်ခုတည်းအပေါ်မှာပဲ မှီခိုနေရတယ်)။</p>\n</li>\n<li>\n<p><strong>Single Point of Failure (တစ်ခုပျက် အကုန်ပျက်):</strong>\nရေပိုက်ပေါက်ရင် တစ်ခန်းလုံး ရေကြီးမယ်။\n(Build process မှာ Error တစ်ခုတက်ရင် App တစ်ခုလုံး Deploy လုပ်လို့ မရတော့ဘူး)။</p>\n</li>\n</ol>"
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

const url = "src/content/docs/fe-architecture/monolithic/advantages.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/fe-architecture/monolithic/advantages.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/fe-architecture/monolithic/advantages.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
