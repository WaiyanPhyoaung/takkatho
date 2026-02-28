import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "Partial<T>",
  "description": "Partial<T>"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "partialt-property-အားလုံးကို-optional-ဖြစ်အောင်-လုပ်ခြင်း",
    "text": "Partial<T>: Property အားလုံးကို Optional ဖြစ်အောင် လုပ်ခြင်း"
  }];
}
const userprofile = `
interface UserProfile {
  id: number;
  username: string;
  email?: string; // email က Optional (ပါချင်မှပါ) ဖြစ်အောင် ? လေး တပ်ထားတယ်
  bio: string | null; // bio ကတော့ string ဒါမှမဟုတ် null ဖြစ်နိုင်တယ်
  isActive: boolean;
}`;
const partial = `
interface PartialUserProfile {
  id?: number; // id က Optional ဖြစ်သွားပြီ
  username?: string; // username က Optional ဖြစ်သွားပြီ
  email?: string; // email က Optional ဖြစ်သွားပြီ
  bio?: string | null; // bio က Optional ဖြစ်သွားပြီ
  isActive?: boolean; // isActive က Optional ဖြစ်သွားပြီ
}`;
const usage = `
function updateUser(userId: number, updates: Partial<UserProfile>) {
  // ... user ကို ရှာပြီး updates တွေကို ထည့်သွင်းမယ့် Logic ...
  console.log(\`Updating user \${userId} with:\`, updates);
}

// userId 1 ကို username ပဲ ပြင်ဖို့ ပို့လိုက်တယ်
updateUser(1, { username: "new_username" });

// userId 2 ကို email နဲ့ isActive ကို ပြင်ဖို့ ပို့လိုက်တယ်
updateUser(2, { email: "new@example.com", isActive: false });

// updateUser(3, { unknownProperty: "test" }); // Error ပြလိမ့်မယ်။ unknownProperty က UserProfile ထဲမှာ မရှိဘူး
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>ဒီဥပမာတွေအတွက် အခြေခံ Type လေးတစ်ခုကို အရင်သတ်မှတ်ထားရအောင်။</p>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: userprofile,
      title: "index.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"partialt-property-အားလုံးကို-optional-ဖြစ်အောင်-လုပ်ခြင်း\">Partial&#x3C;T>: Property အားလုံးကို Optional ဖြစ်အောင် လုပ်ခြင်း</h3><a class=\"sl-anchor-link\" href=\"#partialt-property-အားလုံးကို-optional-ဖြစ်အောင်-လုပ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Partial&#x3C;T>: Property အားလုံးကို Optional ဖြစ်အောင် လုပ်ခြင်း”</span></a></div>\n<ul>\n<li><strong>ဘာလုပ်ပေးလဲ</strong>: Partial&#x3C;T> က T Type မှာရှိတဲ့ Property အားလုံးကို Optional (ပါချင်မှပါ/ထည့်ချင်မှ ထည့်) ဖြစ်သွားအောင် Type အသစ်တစ်ခု လုပ်ပေးတယ်။</li>\n<li><strong>ဘယ်လို သုံးမလဲ</strong>: Partial&#x3C;UserProfile></li>\n<li><strong>ရလာမယ့် Type (ပုံစံ)</strong>:</li>\n</ul>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: partial,
      title: "index.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<ul>\n<li><strong>ဘယ်လိုနေရာမှာ သုံးလဲ</strong>: User ရဲ့ အချက်အလက်ကို ပြင်ဆင်တဲ့ Function မျိုးတွေအတွက် အသုံးဝင်တယ်။ ပြင်ချင်တဲ့ Field (အချက်အလက်) ကိုပဲ ပို့လိုက်လို့ ရတယ်။</li>\n</ul>\n"
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

const url = "src/content/docs/advanced-typescript/utility/modifying-properties-partial.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/utility/modifying-properties-partial.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/utility/modifying-properties-partial.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, partial, url, usage, userprofile };
