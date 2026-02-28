import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "Readonly<T>",
  "description": "Readonly<T>"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "readonlyt-property-အားလုံးကို-ပြင်လို့မရအောင်-read-only-လုပ်ခြင်း",
    "text": "Readonly<T>: Property အားလုံးကို ပြင်လို့မရအောင် (Read-Only) လုပ်ခြင်း"
  }];
}
const readonly = `
type ReadonlyUserProfile = {
   readonly id: number; // ပြင်လို့မရတော့ဘူး
   readonly username: string; // ပြင်လို့မရတော့ဘူး
   readonly email?: string; // ပြင်လို့မရတော့ဘူး (optional ဖြစ်တာ မပြောင်းပါဘူး)
   readonly bio: string | null; // ပြင်လို့မရတော့ဘူး
   readonly isActive: boolean; // ပြင်လို့မရတော့ဘူး
 }
`;
const usage = `
const appConfig: Readonly<UserProfile> = {
  id: 0, // System User ID လို့ သဘောထားပါ
  username: "system_config",
  email: "config@example.com",
  bio: "Initial application settings",
  isActive: true
};

// appConfig ရဲ့ Property တန်ဖိုးကို ပြောင်းလဲဖို့ ကြိုးစားကြည့်မယ်
// appConfig.username = "new_config"; // Error ပြလိမ့်မယ်။ username က readonly property
// appConfig.id = 1; // Error ပြလိမ့်မယ်။ id ကလည်း readonly
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"readonlyt-property-အားလုံးကို-ပြင်လို့မရအောင်-read-only-လုပ်ခြင်း\">Readonly&#x3C;T>: Property အားလုံးကို ပြင်လို့မရအောင် (Read-Only) လုပ်ခြင်း</h3><a class=\"sl-anchor-link\" href=\"#readonlyt-property-အားလုံးကို-ပြင်လို့မရအောင်-read-only-လုပ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Readonly&#x3C;T>: Property အားလုံးကို ပြင်လို့မရအောင် (Read-Only) လုပ်ခြင်း”</span></a></div>\n<ul>\n<li><strong>ဘာလုပ်ပေးလဲ</strong>: Readonly&#x3C;T> က T Type မှာရှိတဲ့ Property အားလုံးကို readonly (ဖတ်လို့ပဲရမယ်၊ တန်ဖိုး အသစ် ပြန်ထည့်လို့ မရဘူး) ဖြစ်သွားအောင် Type အသစ်တစ်ခု လုပ်ပေးတယ်။</li>\n<li><strong>ဘယ်လို သုံးမလဲ</strong>: Readonly&#x3C;UserProfile></li>\n<li><strong>ရလာမယ့် Type (ပုံစံ)</strong>:</li>\n</ul>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: readonly,
      title: "index.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<ul>\n<li><strong>ဘယ်လိုနေရာမှာ သုံးလဲ</strong>: Program စတဲ့အချိန်မှာပဲ Data တစ်ခါ သတ်မှတ်ပြီးရင် နောက်ထပ် ဘယ်တော့မှ တန်ဖိုး ပြောင်းလဲလို့ မရအောင် လုပ်ချင်တဲ့ Configuration object မျိုးတွေ၊ ဒါမှမဟုတ် ပြင်ဆင်ခွင့်မရှိတဲ့ Data မျိုးတွေအတွက် အကောင်းဆုံးပဲ။</li>\n</ul>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: usage,
      title: "config.ts"
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

const url = "src/content/docs/advanced-typescript/utility/modifying-properties-readonly.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/utility/modifying-properties-readonly.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/utility/modifying-properties-readonly.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, readonly, url, usage };
