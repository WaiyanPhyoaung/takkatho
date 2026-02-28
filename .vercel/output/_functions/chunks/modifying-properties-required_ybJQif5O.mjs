import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "Required<T>",
  "description": "Required<T>"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "requiredt-property-အားလုံးကို-မဖြစ်မနေ-required-ဖြစ်အောင်-လုပ်ခြင်း",
    "text": "Required<T>: Property အားလုံးကို မဖြစ်မနေ (Required) ဖြစ်အောင် လုပ်ခြင်း"
  }];
}
const required = `
type RequiredUserProfile = {
  id: number; // မဖြစ်မနေ ပါရမယ်
  username: string; // မဖြစ်မနေ ပါရမယ်
  email: string; // မူရင်းက ? ပါပေမယ့် အခု မဖြစ်မနေ ပါရမယ်!
  bio: string | null; // null ကတော့ လက်ခံတယ်၊ ဒါပေမယ့် bio Property ကိုယ်တိုင်က မဖြစ်မနေ ပါရမယ်
  isActive: boolean; // မဖြစ်မနေ ပါရမယ်
}
`;
const usage = `
function processCompleteProfile(profile: Required<UserProfile>) {
  // profile.email ကို မရှိမရှိ စစ်စရာမလိုဘဲ စိတ်ချစွာ ခေါ်သုံးလို့ရပြီ။ ဘာလို့လဲဆိုတော့ Required ဖြစ်နေလို့
  console.log(\`Processing complete profile for: \${profile.email.toLowerCase()}\`);
}

// userProfile Type အတိုင်း ရေးထားတာ email မပါဘူး
// const incompleteProfile: UserProfile = { id: 1, username: "test", bio: null, isActive: true };
// processCompleteProfile(incompleteProfile); // Error ပြလိမ့်မယ်။ email က မဖြစ်မနေ လိုအပ်တယ်

// Required<UserProfile> Type အတိုင်း ရေးထားတာ အားလုံးပါရမယ်
const completeProfile: Required<UserProfile> = {
id: 1, username: "test", email: "test@example.com", bio: "A full bio.", isActive: true
};
processCompleteProfile(completeProfile); // အလုပ်လုပ်တယ်
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"requiredt-property-အားလုံးကို-မဖြစ်မနေ-required-ဖြစ်အောင်-လုပ်ခြင်း\">Required&#x3C;T>: Property အားလုံးကို မဖြစ်မနေ (Required) ဖြစ်အောင် လုပ်ခြင်း</h3><a class=\"sl-anchor-link\" href=\"#requiredt-property-အားလုံးကို-မဖြစ်မနေ-required-ဖြစ်အောင်-လုပ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Required&#x3C;T>: Property အားလုံးကို မဖြစ်မနေ (Required) ဖြစ်အောင် လုပ်ခြင်း”</span></a></div>\n<ul>\n<li><strong>ဘာလုပ်ပေးလဲ</strong>: Required&#x3C;T> က T Type မှာရှိတဲ့ Property အားလုံးကို မဖြစ်မနေ (Required) ဖြစ်သွားအောင် Type အသစ်တစ်ခု လုပ်ပေးတယ်။ မူရင်းက Optional ( ? ပါတာ) ဖြစ်နေရင်တောင် မဖြစ်မနေ ဖြစ်သွားစေတယ်။</li>\n<li><strong>ဘယ်လို သုံးမလဲ</strong>: Required&#x3C;UserProfile></li>\n<li><strong>ရလာမယ့် Type (ပုံစံ)</strong>:</li>\n</ul>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: required,
      title: "index.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<ul>\n<li><strong>ဘယ်လိုနေရာမှာ သုံးလဲ</strong>: Data ဖြည့်တဲ့ Form တွေကနေ ရလာတဲ့ object တစ်ခုက အချက်အလက် တချို့ပဲ ပါချင်မှ ပါမယ်။ ဒါပေမယ့် အဲဒီ object ကို လက်ခံမယ့် Function တစ်ခုကတော့ Field အားလုံး ပြည့်နေဖို့ လိုချင်တာမျိုးမှာ သုံးနိုင်တယ်။</li>\n</ul>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: usage,
      title: "index.ts"
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

const url = "src/content/docs/advanced-typescript/utility/modifying-properties-required.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/utility/modifying-properties-required.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/utility/modifying-properties-required.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, required, url, usage };
