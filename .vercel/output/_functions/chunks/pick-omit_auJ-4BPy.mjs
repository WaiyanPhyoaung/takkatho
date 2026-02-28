import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "ရွေးထုတ်ခြင်းနှင့် ချန်လှပ်ခြင်း: Pick<T, K>, Omit<T, K>",
  "description": "ရွေးထုတ်ခြင်းနှင့် ချန်လှပ်ခြင်း: Pick<T, K>, Omit<T, K>"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "pickt-k-property-တချို့ကို-ရွေးထုတ်ခြင်း",
    "text": "Pick<T, K>: Property တချို့ကို ရွေးထုတ်ခြင်း"
  }, {
    "depth": 3,
    "slug": "omitt-k-property-တွေကို-ချန်လှပ်ခြင်း",
    "text": "Omit<T, K>: Property တွေကို ချန်လှပ်ခြင်း"
  }];
}
const userprofile = `
interface UserProfile {
  id: number;
  username: string;
  email?: string; // email က optional
  bio: string | null;
  isActive: boolean;
  lastLogin: Date; // နောက်ဆုံး Login ဝင်ခဲ့တဲ့ အချိန်
}
`;
const pick = `
 type UserPreview = {
   id: number;
   username: string;
   email?: string;
 }`;
const omit = `type UserForPublicListing = {
   id: number;
   username: string;
   email?: string;
   isActive: boolean;
 }`;
const usage = `
// UserProfile ထဲက username နဲ့ email ကိုပဲ ယူပြီး type အသစ်လုပ်
type UserAvatarInfo = Pick<UserProfile, "username" | "email">;

function displayUserAvatar(info: UserAvatarInfo) {
console.log(\`Avatar for \${info.username}\`);
if (info.email) {
console.log(\`Contact: \${info.email}\`);
}
}

const userForAvatar: UserAvatarInfo = { username: "hero123", email: "hero@example.com" };
displayUserAvatar(userForAvatar);

// const tooMuchInfo: UserAvatarInfo = { username: "hero123", email: "hero@example.com", id: 1 };
// Error ပြလိမ့်မယ်။ 'id' က UserAvatarInfo ထဲမှာ မရှိဘူး။
`;
const omitUsage = `
// UserProfile ထဲက id, lastLogin, isActive ကို ဖယ်ပြီး Type အသစ်လုပ်
// User က username, email, bio တွေကို ပေးမှာဖြစ်ပြီး id, lastLogin, isActive တွေကိုတော့ system က သတ်မှတ်ပေးမှာ
type UserRegistrationData = Omit<UserProfile, "id" | "lastLogin" | "isActive">;

function registerUser(data: UserRegistrationData) {
console.log(\`Registering user: \${data.username} with email \${data.email}\`);
// ဒီနေရာမှာ data ထဲက အချက်အလက်တွေနဲ့ User အပြည့်အစုံကို Database မှာ သိမ်းတာမျိုး လုပ်မယ်
// const fullUser: UserProfile = { ...data, id: generateId(), lastLogin: new Date(), isActive: true };
}

registerUser({ username: "newbie", email: "newbie@example.com", bio: "Just starting out!"});`;
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      type: "tip",
      "set:html": "<p>Pick&#x3C;T, K> နဲ့ Omit&#x3C;T, K> Utility Type တွေကို သုံးပြီး ရှိပြီးသား Type ကနေ လိုချင်တဲ့ Property တွေကို ရွေးထုတ်တာ ဒါမှမဟုတ် မလိုချင်တာတွေကို ဖယ်ထုတ်တာမျိုး လုပ်ပြီး Type အသစ်တွေ ဖန်တီးတတ်ဖို့ ဖြစ်ပါတယ်။ K ကတော့ T ထဲက Property နာမည်တွေရဲ့ ပေါင်းစပ်မှု ဖြစ်ပါတယ်</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>ဒီဥပမာတွေအတွက် ကျွန်တော်တို့ရဲ့ UserProfile Interface ကို ပြန်သုံးကြရအောင်။ lastLogin ဆိုတဲ့ Property အသစ်လေး ထပ်ထည့်ထားတယ်။</p>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: userprofile,
      title: "index.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"pickt-k-property-တချို့ကို-ရွေးထုတ်ခြင်း\">Pick&#x3C;T, K>: Property တချို့ကို ရွေးထုတ်ခြင်း</h3><a class=\"sl-anchor-link\" href=\"#pickt-k-property-တချို့ကို-ရွေးထုတ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Pick&#x3C;T, K>: Property တချို့ကို ရွေးထုတ်ခြင်း”</span></a></div>\n<ul>\n<li><strong>ဘာလုပ်ပေးလဲ</strong>: Pick&#x3C;T, K> က T Type မှာရှိတဲ့ Property တွေထဲက K Type မှာ ရွေးထားတဲ့ Property တွေကိုသာ ရွေးထုတ်ပြီး Type အသစ်တစ်ခု လုပ်ပေးတယ်။</li>\n<li><strong>ဘယ်လို သုံးမလဲ</strong>: Pick&#x3C;UserProfile, “id” | “username” | “email”>\n<ul>\n<li>ဒုတိယ Argument က ကိုယ်ရွေးထုတ်ချင်တဲ့ Property နာမည်တွေ (union of literal string types) ဖြစ်တယ်။</li>\n</ul>\n</li>\n<li><strong>ရလာမယ့် Type (ပုံစံ)</strong>:</li>\n</ul>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: pick,
      title: "index.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<ul>\n<li><strong>ဘယ်လိုနေရာမှာ သုံးလဲ</strong>: Data Transfer Object (DTO) တွေ လုပ်တဲ့အခါ ဒါမှမဟုတ် UI Component တွေအတွက် Data တချို့တဝက်ပဲ လိုတဲ့အခါမျိုးမှာ အသုံးဝင်တယ်။ ဥပမာ User Preview Card လိုမျိုးပေါ့။</li>\n</ul>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: usage,
      title: "index.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"omitt-k-property-တွေကို-ချန်လှပ်ခြင်း\">Omit&#x3C;T, K>: Property တွေကို ချန်လှပ်ခြင်း</h3><a class=\"sl-anchor-link\" href=\"#omitt-k-property-တွေကို-ချန်လှပ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Omit&#x3C;T, K>: Property တွေကို ချန်လှပ်ခြင်း”</span></a></div>\n"
    }), createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "ဘာလုပ်ပေးလဲ"
          }), ":Omit<T, K> က T Type ထဲက ကိုယ်မလိုချင်တဲ့ Property တွေ K ကို ဖယ်ထုတ်ပြီး ကျန်တာတွေနဲ့ Type အသစ်တစ်ခု လုပ်ပေးတယ်။"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "ဘယ်လို သုံးမလဲ"
          }), ": Omit<UserProfile, “lastLogin” | ‘lastLogin’>"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "ရလာမယ့် Type (ပုံစံ)"
          }), ":"]
        }), "\n", createVNode(Code, {
          lang: "typescript",
          code: omit,
          title: "index.ts"
        }), "\n"]
      }), "\n", createVNode(Fragment$1, {
        "set:html": "<li>\n<p><strong>ဘယ်လိုနေရာမှာ သုံးလဲ</strong>: လျှို့ဝှက်အချက်အလက်တွေ ဒါမှမဟုတ် သီးခြားအခြေအနေတစ်ခုနဲ့ မဆိုင်တဲ့ Property တွေကို ချန်လှပ်ပြီး Type အသစ် ဖန်တီးတဲ့နေရာမှာ အသုံးဝင်တယ်။ ဥပမာ လူသိရှင်ကြား ပြသရမယ့် User စာရင်းအတွက် Type မျိုးပေါ့။</p>\n</li>\n"
      })]
    }), "\n", createVNode(Code, {
      lang: "typescript",
      code: omitUsage,
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

const url = "src/content/docs/advanced-typescript/utility/pick-omit.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/utility/pick-omit.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/utility/pick-omit.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, omit, omitUsage, pick, url, usage, userprofile };
