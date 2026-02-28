import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "သတိထားရမည့် အမှားများ & Best Practices",
  "description": "သတိထားရမည့် အမှားများ & Best Practices"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "၁-အရမ်းရှုပ်ထွေးတဲ့-generics-များ",
    "text": "၁။ အရမ်းရှုပ်ထွေးတဲ့ Generics များ"
  }, {
    "depth": 3,
    "slug": "၂-အသေးစိတ်-အချက်အလက်တွေ-မသိလိုက်ဘဲ-ပျောက်ဆုံးသွားခြင်း",
    "text": "၂။ အသေးစိတ် အချက်အလက်တွေ မသိလိုက်ဘဲ ပျောက်ဆုံးသွားခြင်း"
  }, {
    "depth": 3,
    "slug": "၃-any-ကို-အလွယ်တကူ-အသုံးပြုခြင်း",
    "text": "၃။ any ကို အလွယ်တကူ အသုံးပြုခြင်း"
  }, {
    "depth": 3,
    "slug": "၄-ရှုပ်ထွေးတဲ့-type-တွေကို-debugging-လုပ်ခြင်း",
    "text": "၄။ ရှုပ်ထွေးတဲ့ Type တွေကို Debugging လုပ်ခြင်း"
  }];
}
const debug = `
type KeysOfUser = keyof User; // ဒီ Type ကို Mouse တင်ပြီး User ရဲ့ keys တွေကို ကြည့်ပါ။
type PartialUser = Partial<User>; // ဒီ Type ကို Mouse တင်ပြီး ပြောင်းလဲသွားတဲ့ Type ပုံစံကို ကြည့်ပါ။
`;
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      type: "tip",
      "set:html": "<p>ရှုပ်ထွေးတဲ့ type တွေနဲ့ အလုပ်လုပ်တဲ့အခါမှာ အဖြစ်များတဲ့ အမှားတွေနဲ့ ဘယ်လို\nအကောင်းဆုံး လုပ်ဆောင်သင့်လဲဆိုတာ ဆွေးနွေးကြမယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"၁-အရမ်းရှုပ်ထွေးတဲ့-generics-များ\">၁။ အရမ်းရှုပ်ထွေးတဲ့ Generics များ</h3><a class=\"sl-anchor-link\" href=\"#၁-အရမ်းရှုပ်ထွေးတဲ့-generics-များ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “၁။ အရမ်းရှုပ်ထွေးတဲ့ Generics များ”</span></a></div>\n<ul>\n<li><strong>အမှား:</strong> Generics တွေဟာ တစ်ခါတလေမှာ အရမ်းနက်ရှိုင်းပြီး ရှုပ်ထွေးသွားနိုင်တယ်။ ဥပမာ <code dir=\"auto\">ProcessResult\\&#x3C;T extends BaseItem\\&#x3C;U, K>, U extends DataFormat\\&#x3C;K>, K extends keyof Configs></code> လိုမျိုး ရေးမိရင် ဖတ်ဖို့နဲ့ error ရှာဖို့ အရမ်းခက်ခဲစေတယ်။</li>\n<li><strong>အကောင်းဆုံး လုပ်ဆောင်ရမည့် နည်းလမ်း:</strong>\n<ul>\n<li>Type Parameters (Generics) တွေကို နာမည်ပေးတဲ့အခါ ရှင်းရှင်းလင်းလင်း နာမည်ပေးပါ။ (ဥပမာ - <code dir=\"auto\">TResponse</code>, <code dir=\"auto\">TError</code> စသဖြင့်ပေါ့၊ <code dir=\"auto\">T, U, V</code> လို ရိုးရိုးလေး မဟုတ်ဘဲ)</li>\n<li>အရမ်းရှုပ်ထွေးတဲ့ <code dir=\"auto\">Generic Types</code> တွေကို helper Type တွေအဖြစ် ခွဲထုတ်ပါ။</li>\n<li><code dir=\"auto\">comments</code> တွေ ထည့်ပြီး ကိုယ်ရေးထားတဲ့ <code dir=\"auto\">Generic Types</code> တွေရဲ့ ရည်ရွယ်ချက်နဲ့ ကန့်သတ်ချက်တွေကို ရှင်းပြပါ။</li>\n<li>တစ်ခါတလေမှာ အရမ်း <code dir=\"auto\">Generic</code> မဖြစ်ပေမယ့် ဖတ်လို့ ပိုလွယ်တဲ့ နည်းလမ်းကို ရွေးတာက ပိုကောင်းနိုင်ပါတယ်။</li>\n</ul>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"၂-အသေးစိတ်-အချက်အလက်တွေ-မသိလိုက်ဘဲ-ပျောက်ဆုံးသွားခြင်း\">၂။ အသေးစိတ် အချက်အလက်တွေ မသိလိုက်ဘဲ ပျောက်ဆုံးသွားခြင်း</h3><a class=\"sl-anchor-link\" href=\"#၂-အသေးစိတ်-အချက်အလက်တွေ-မသိလိုက်ဘဲ-ပျောက်ဆုံးသွားခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “၂။ အသေးစိတ် အချက်အလက်တွေ မသိလိုက်ဘဲ ပျောက်ဆုံးသွားခြင်း”</span></a></div>\n<ul>\n<li><strong>အမှား:</strong> လိုအပ်တဲ့ Type ရဲ့ အသေးစိတ် အချက်အလက်တွေကို မသိလိုက်ဘဲ ပိုကျယ်ပြန့်တဲ့ Type နဲ့ သွားသတ်မှတ်မိတာမျိုးပါ။</li>\n<li><strong>အကောင်းဆုံး လုပ်ဆောင်ရမည့် နည်းလမ်း:</strong>\n<ul>\n<li>satisfies ကို အသုံးပြုပါ။ ဒါမှ ပိုကျယ်ပြန့်တဲ့ Type နဲ့ ကိုက်ညီလားဆိုတာ စစ်ဆေးရင်းနဲ့၊ မူရင်း Type ရဲ့ အသေးစိတ် အချက်အလက်တွေကိုပါ ဆက်ထိန်းထားနိုင်မှာပါ။</li>\n</ul>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"၃-any-ကို-အလွယ်တကူ-အသုံးပြုခြင်း\">၃။ <code dir=\"auto\">any</code> ကို အလွယ်တကူ အသုံးပြုခြင်း</h3><a class=\"sl-anchor-link\" href=\"#၃-any-ကို-အလွယ်တကူ-အသုံးပြုခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “၃။ any ကို အလွယ်တကူ အသုံးပြုခြင်း”</span></a></div>\n<ul>\n<li><strong>အမှား:</strong> Type တွေ ရှုပ်ထွေးလာတဲ့အခါ Compiler ရဲ့ Error တွေကို ပိတ်ဖို့အတွက် <code dir=\"auto\">any</code> ကို အလွယ်တကူ သုံးမိတတ်တယ်။ ဒါက Type Safety (Type မှန်ကန်မှု) ကို စွန့်လွှတ်လိုက်တာနဲ့ တူတယ်။</li>\n<li><strong>အကောင်းဆုံး လုပ်ဆောင်ရမည့် နည်းလမ်း:</strong>\n<ul>\n<li>Type တွေကို မှန်ကန်အောင် ရေးဖို့ ကြိုးစားပါ။</li>\n<li>တကယ်ကို Type မသိနိုင်တဲ့ တန်ဖိုးတွေအတွက် <code dir=\"auto\">unknown</code> ကို သုံးပါ။ ပြီးတော့မှ Program အလုပ်လုပ်နေချိန်မှာ Type တွေကို ထပ်စစ်ဆေးတာ ဒါမှမဟုတ် <code dir=\"auto\">type narrowing</code> လုပ်ပါ။</li>\n<li><code dir=\"auto\">// @ts-expect-error</code> ဒါမှမဟုတ် <code dir=\"auto\">// @ts-ignore</code> ကို အရမ်းလိုအပ်မှသာ သုံးပြီး၊ ဘာကြောင့် သုံးလဲဆိုတာကို ရှင်းရှင်းလင်းလင်း ရေးသားပါ။</li>\n</ul>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"၄-ရှုပ်ထွေးတဲ့-type-တွေကို-debugging-လုပ်ခြင်း\">၄။ ရှုပ်ထွေးတဲ့ Type တွေကို Debugging လုပ်ခြင်း</h3><a class=\"sl-anchor-link\" href=\"#၄-ရှုပ်ထွေးတဲ့-type-တွေကို-debugging-လုပ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “၄။ ရှုပ်ထွေးတဲ့ Type တွေကို Debugging လုပ်ခြင်း”</span></a></div>\n"
    }), createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "အကြံပြုချက်:"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["\n", createVNode(_components.p, {
              children: "သင့်ရဲ့ IDE (ဥပမာ VS Code) က အကောင်းဆုံး သူငယ်ချင်းပါ။ Variables တွေနဲ့ Types တွေပေါ်မှာ Mouse ကို တင်ကြည့်ပါ။ TypeScript က ဘာ Type လို့ မှတ်ယူထားလဲဆိုတာ မြင်ရပါလိမ့်မယ်။"
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: ["\n", createVNode(_components.p, {
              children: "ရှုပ်ထွေးတဲ့ Type တွေကို ပြောင်းလဲတဲ့အခါ အဆင့်ဆင့် ခွဲပြီး စစ်ဆေးဖို့အတွက် ကြားခံ Type (Type Alias) တွေ ဖန်တီးကြည့်ပါ။"
            }), "\n", createVNode(Code, {
              language: "ts",
              code: debug,
              title: "User.ts"
            }), "\n"]
          }), "\n", createVNode(Fragment$1, {
            "set:html": "<li>\n<p>ရှုပ်ထွေးတဲ့ Type တစ်ခုက မျှော်လင့်ထားသလို အလုပ်မလုပ်ရင်၊ အဲဒါကို ရိုးရှင်းအောင် အရင်လုပ်ပါ။ ပြီးရင် အလုပ်လုပ်တဲ့အထိ အစိတ်အပိုင်းတွေကို ဖြုတ်ချပြီး၊ တစ်ခုချင်းစီ ပြန်ထည့်ရင်း ဘယ်နေရာမှာ ပြဿနာရှိလဲဆိုတာ ရှာပါ။</p>\n</li>\n"
          })]
        }), "\n"]
      }), "\n"]
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

const url = "src/content/docs/advanced-typescript/all-together/advanced-tips-pitfalls.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/all-together/advanced-tips-pitfalls.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/all-together/advanced-tips-pitfalls.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, debug, Content as default, file, frontmatter, getHeadings, url };
