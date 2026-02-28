import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "Exclude<T,U>, Extract<T,U>, NonNullable<T>",
  "description": "Exclude<T,U>, Extract<T,U>, NonNullable<T>"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "excludet-u-union-ထဲက-type-တွေကို-ဖယ်ရှားခြင်း",
    "text": "Exclude<T, U>: Union ထဲက Type တွေကို ဖယ်ရှားခြင်း"
  }, {
    "depth": 3,
    "slug": "extractt-u-union-ထဲက-type-တွေကို-ရွေးချယ်ခြင်း",
    "text": "Extract<T, U>: Union ထဲက Type တွေကို ရွေးချယ်ခြင်း"
  }, {
    "depth": 3,
    "slug": "nonnullablet-null-နှင့်-undefined-ကို-ဖယ်ရှားခြင်း",
    "text": "NonNullable<T>: null နှင့် undefined ကို ဖယ်ရှားခြင်း"
  }];
}
const union = `
type Status = "pending" | "processing" | "success" | "error" | null | undefined;
`;
const exclude = `
type FinalStatus = Exclude<Status, "pending" | "processing">;

let final: FinalStatus = "success"; // ဒါက အလုပ်လုပ်တယ်

// final = "pending"; // Error ပြလိမ့်မယ်။ 'pending' က FinalStatus Type မဟုတ်ဘူး။
`;
const extract = `type ResolvedStatus = Extract<Status, "success" | "error">;

let resolved: ResolvedStatus = "error"; // ဒါက အလုပ်လုပ်တယ်

// resolved = "pending"; // Error ပြလိမ့်မယ်။
// resolved = null; // Error ပြလိမ့်မယ်။
};`;
const nonnullable = `let currentStatus: Status = "pending";

// ... တချို့ Logic တွေ ...

if (currentStatus !== null && currentStatus !== undefined) {
// ဒီ Block ထဲမှာဆိုရင် TypeScript က currentStatus ဟာ null ဒါမှမဟုတ် undefined မဟုတ်တော့ဘူးဆိုတာ သိနေပြီ။
// တခြား Function တစ်ခုကို ပို့ရင်လည်း Type ကို အတိအကျ သတ်မှတ်ပေးလို့ ရတယ်:
let activeStatus: NonNullable<Status> = currentStatus;
console.log(activeStatus.toUpperCase()); // toUpperCase() ကို စိတ်ချစွာ သုံးလို့ရပြီ။
};`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      type: "tip",
      "set:html": "<p>ရည်ရွယ်ချက်: Exclude&#x3C;T, U>, Extract&#x3C;T, U>, နဲ့ NonNullable&#x3C;T> Utility Type တွေကို ဘယ်လို သုံးရလဲဆိုတာ နားလည်ဖို့ ဖြစ်ပါတယ်။ သူတို့က Union Type တွေနဲ့ အလုပ်လုပ်တာ။ Pick&#x3C;T, K> နဲ့ Omit&#x3C;T, K> တို့ကတော့ Object Type တွေရဲ့ Property (Key) တွေနဲ့ အလုပ်လုပ်တာပါ။ သဘောတရားကတော့ ဆင်တူပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>ဒီဥပမာတွေအတွက် Union Type လေးတစ်ခုကို အရင်သတ်မှတ်ထားရအောင်။</p>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: union,
      title: "index.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"excludet-u-union-ထဲက-type-တွေကို-ဖယ်ရှားခြင်း\">Exclude&#x3C;T, U>: Union ထဲက Type တွေကို ဖယ်ရှားခြင်း</h3><a class=\"sl-anchor-link\" href=\"#excludet-u-union-ထဲက-type-တွေကို-ဖယ်ရှားခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Exclude&#x3C;T, U>: Union ထဲက Type တွေကို ဖယ်ရှားခြင်း”</span></a></div>\n<ul>\n<li><strong>ဘာလုပ်ပေးလဲ</strong>: Exclude&#x3C;T, U> က T ဆိုတဲ့ Union Type ထဲက U နဲ့ တူညီတဲ့ Type တွေကို ဖယ်ထုတ်ပြီး Type အသစ်တစ်ခု လုပ်ပေးတယ်။</li>\n<li><strong>ဘယ်လို သုံးမလဲ</strong>: Exclude&#x3C;Status, “processing” | “pending”></li>\n<li><strong>ရလာမယ့် Type</strong>: “success” | “error” | null | undefined</li>\n<li><strong>ဘယ်အခါသုံးမလဲ</strong>:အခြေအနေ (Status) တွေ အများကြီး ရှိနေတယ်။ ဒါပေမယ့် တချို့အခြေအနေတွေကိုပဲ ဂရုစိုက်ချင်ပြီး ကျန်တာတွေကို လျစ်လျူရှုချင်တဲ့အခါမျိုးမှာ သုံးနိုင်တယ်။</li>\n</ul>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: exclude,
      title: "index.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"extractt-u-union-ထဲက-type-တွေကို-ရွေးချယ်ခြင်း\">Extract&#x3C;T, U>: Union ထဲက Type တွေကို ရွေးချယ်ခြင်း</h3><a class=\"sl-anchor-link\" href=\"#extractt-u-union-ထဲက-type-တွေကို-ရွေးချယ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Extract&#x3C;T, U>: Union ထဲက Type တွေကို ရွေးချယ်ခြင်း”</span></a></div>\n<ul>\n<li><strong>ဘာလုပ်ပေးလဲ</strong>: Extract&#x3C;T, U> က T ဆိုတဲ့ Union Type ထဲက U နဲ့ တူညီတဲ့ Type တွေကို ရွေးချယ်ပြီး Type အသစ်တစ်ခု လုပ်ပေးတယ်။</li>\n<li><strong>ဘယ်လို သုံးမလဲ</strong>: Extract&#x3C;Status, “success” | “error”></li>\n<li><strong>ရလာမယ့် Type</strong>: “success” | “error”</li>\n<li><strong>ဘယ်အခါသုံးမလဲ</strong>: ကျယ်ပြန့်တဲ့ Union Type တစ်ခုရှိနေတယ်။ ဒါပေမယ့် အဲဒီထဲက အစိတ်အပိုင်း တချို့ကိုပဲ သီးသန့် လိုချင်တဲ့အခါမျိုးမှာ သုံးနိုင်တယ်။</li>\n</ul>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: extract,
      title: "index.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"nonnullablet-null-နှင့်-undefined-ကို-ဖယ်ရှားခြင်း\">NonNullable&#x3C;T>: null နှင့် undefined ကို ဖယ်ရှားခြင်း</h3><a class=\"sl-anchor-link\" href=\"#nonnullablet-null-နှင့်-undefined-ကို-ဖယ်ရှားခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “NonNullable&#x3C;T>: null နှင့် undefined ကို ဖယ်ရှားခြင်း”</span></a></div>\n<ul>\n<li><strong>ဘာလုပ်ပေးလဲ</strong>: NonNullable&#x3C;T> က T ဆိုတဲ့ Type ထဲက null နဲ့ undefined ကို ဖယ်ရှားပြီး Type အသစ်တစ်ခု လုပ်ပေးတယ်။</li>\n<li><strong>ဘယ်လို သုံးမလဲ</strong>: NonNullable&#x3C;Status></li>\n<li><strong>ရလာမယ့် Type</strong>: “pending” | “processing” | “success” | “error”</li>\n<li><strong>ဘယ်အခါသုံးမလဲ</strong>: တန်ဖိုးတစ်ခုက null ဒါမှမဟုတ် undefined ဖြစ်နိုင်တယ်။ ဒါပေမယ့် Code ထဲမှာ စစ်ဆေးပြီးနောက်ပိုင်း null ဒါမှမဟုတ် undefined မဟုတ်တော့ဘူးလို့ သေချာတဲ့အခါမျိုးမှာ အရမ်း အသုံးဝင်တယ်။</li>\n</ul>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: nonnullable,
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

const url = "src/content/docs/advanced-typescript/utility/exclude-extract-nonnullable.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/utility/exclude-extract-nonnullable.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/utility/exclude-extract-nonnullable.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, exclude, extract, file, frontmatter, getHeadings, nonnullable, union, url };
