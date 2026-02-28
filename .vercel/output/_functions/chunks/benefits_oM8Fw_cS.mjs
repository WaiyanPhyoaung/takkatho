import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "Modular Architecture ရဲ့ အားသာချက်များ",
  "description": "Modular Architecture ရဲ့ အားသာချက်များ"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "၁-scalability-တိုးချဲ့ရ-လွယ်ကူခြင်း",
    "text": "၁။ Scalability (တိုးချဲ့ရ လွယ်ကူခြင်း)"
  }, {
    "depth": 3,
    "slug": "၂-maintainability-ပြုပြင်ထိန်းသိမ်းရ-လွယ်ကူခြင်း",
    "text": "၂။ Maintainability (ပြုပြင်ထိန်းသိမ်းရ လွယ်ကူခြင်း)"
  }, {
    "depth": 3,
    "slug": "၃-team-collaboration-ပူးပေါင်းဆောင်ရွက်မှု",
    "text": "၃။ Team Collaboration (ပူးပေါင်းဆောင်ရွက်မှု)"
  }, {
    "depth": 3,
    "slug": "လက်တွေ့-project-တွင်-အသုံးပြုပုံ-folder-structure",
    "text": "လက်တွေ့ Project တွင် အသုံးပြုပုံ (Folder Structure)"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Modular Architecture ကို သုံးလိုက်ရင် ဘာတွေ ထူးခြားသွားမလဲ?</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"၁-scalability-တိုးချဲ့ရ-လွယ်ကူခြင်း\">၁။ Scalability (တိုးချဲ့ရ လွယ်ကူခြင်း)</h3><a class=\"sl-anchor-link\" href=\"#၁-scalability-တိုးချဲ့ရ-လွယ်ကူခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “၁။ Scalability (တိုးချဲ့ရ လွယ်ကူခြင်း)”</span></a></div>\n<p>အိမ်တစ်လုံးမှာ အခန်းအသစ် ထပ်ဆောက်သလိုပါပဲ။ <code dir=\"auto\">Blog</code> Feature အသစ် ထည့်ချင်ရင် <code dir=\"auto\">Blog</code> Module တစ်ခု ဆောက်ပြီး ထည့်လိုက်ရုံပါပဲ။ ရှိပြီးသား <code dir=\"auto\">User</code> Module တို့ <code dir=\"auto\">Product</code> Module တို့ကို သွားထိစရာ မလိုပါဘူး။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"၂-maintainability-ပြုပြင်ထိန်းသိမ်းရ-လွယ်ကူခြင်း\">၂။ Maintainability (ပြုပြင်ထိန်းသိမ်းရ လွယ်ကူခြင်း)</h3><a class=\"sl-anchor-link\" href=\"#၂-maintainability-ပြုပြင်ထိန်းသိမ်းရ-လွယ်ကူခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “၂။ Maintainability (ပြုပြင်ထိန်းသိမ်းရ လွယ်ကူခြင်း)”</span></a></div>\n<p>Bug တစ်ခု တက်ပြီ ဆိုပါစို့။ “Cart ထဲ ပစ္စည်းထည့်မရဘူး” ဆိုရင် <code dir=\"auto\">Cart</code> Module ကိုပဲ တန်းသွားကြည့်လိုက်ရင် ပြီးပါပြီ။ Project တစ်ခုလုံး လိုက်ရှာနေစရာ မလိုတော့ပါဘူး။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"၃-team-collaboration-ပူးပေါင်းဆောင်ရွက်မှု\">၃။ Team Collaboration (ပူးပေါင်းဆောင်ရွက်မှု)</h3><a class=\"sl-anchor-link\" href=\"#၃-team-collaboration-ပူးပေါင်းဆောင်ရွက်မှု\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “၃။ Team Collaboration (ပူးပေါင်းဆောင်ရွက်မှု)”</span></a></div>\n<p>Team ကြီးလာရင် လူတွေ အများကြီးနဲ့ အလုပ်လုပ်ရပါတယ်။</p>\n<ul>\n<li>Team A က <code dir=\"auto\">Checkout</code> Module ကို ကိုင်မယ်။</li>\n<li>Team B က <code dir=\"auto\">Profile</code> Module ကို ကိုင်မယ်။\nဘယ်သူ့ နယ်နိမိတ်နဲ့ ဘယ်သူမို့လို့ ကုဒ်တွေ ငြိတာ (Conflict) အရမ်း နည်းသွားပါတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"လက်တွေ့-project-တွင်-အသုံးပြုပုံ-folder-structure\">လက်တွေ့ Project တွင် အသုံးပြုပုံ (Folder Structure)</h3><a class=\"sl-anchor-link\" href=\"#လက်တွေ့-project-တွင်-အသုံးပြုပုံ-folder-structure\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “လက်တွေ့ Project တွင် အသုံးပြုပုံ (Folder Structure)”</span></a></div>\n<p>Project အကြီးကြီးတွေမှာ <code dir=\"auto\">components</code> folder တစ်ခုတည်းမှာ အကုန်ပြုံထည့်မထားပါဘူး။ <strong>Feature-based</strong> ခွဲကြပါတယ်။</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">src/</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#d6deeb;--1:#403f53\">  </span></span><span style=\"--0:#d6deeb;--1:#403f53\">features/</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#d6deeb;--1:#403f53\">    </span></span><span style=\"--0:#d6deeb;--1:#403f53\">auth/          (Auth Module)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#d6deeb;--1:#403f53\">      </span></span><span style=\"--0:#d6deeb;--1:#403f53\">components/</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#d6deeb;--1:#403f53\">      </span></span><span style=\"--0:#d6deeb;--1:#403f53\">hooks/</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#d6deeb;--1:#403f53\">      </span></span><span style=\"--0:#d6deeb;--1:#403f53\">services/</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#d6deeb;--1:#403f53\">    </span></span><span style=\"--0:#d6deeb;--1:#403f53\">product/       (Product Module)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#d6deeb;--1:#403f53\">      </span></span><span style=\"--0:#d6deeb;--1:#403f53\">components/</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#d6deeb;--1:#403f53\">      </span></span><span style=\"--0:#d6deeb;--1:#403f53\">hooks/</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#d6deeb;--1:#403f53\">      </span></span><span style=\"--0:#d6deeb;--1:#403f53\">services/</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#d6deeb;--1:#403f53\">    </span></span><span style=\"--0:#d6deeb;--1:#403f53\">cart/          (Cart Module)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#d6deeb;--1:#403f53\">      </span></span><span style=\"--0:#d6deeb;--1:#403f53\">components/</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#d6deeb;--1:#403f53\">      </span></span><span style=\"--0:#d6deeb;--1:#403f53\">hooks/</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#d6deeb;--1:#403f53\">      </span></span><span style=\"--0:#d6deeb;--1:#403f53\">services/</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"src/  features/    auth/          (Auth Module)      components/      hooks/      services/    product/       (Product Module)      components/      hooks/      services/    cart/          (Cart Module)      components/      hooks/      services/\"><div></div></button></div></figure></div>\n<p>ဒီလို ထားလိုက်ရင် <code dir=\"auto\">Auth</code> နဲ့ ပတ်သက်တာ မှန်သမျှ <code dir=\"auto\">auth</code> folder အောက်မှာပဲ ရှိနေမှာပါ။</p>\n"
    }), createVNode($$Aside, {
      title: "SPA တိုင်း Modular ဖြစ်လား?",
      type: "tip",
      "set:html": "<p><strong>Yes!</strong> React, Vue, Angular အားလုံးဟာ Component-Based ဖြစ်တဲ့အတွက် Modular သဘောတရား ပါပြီးသားပါ။ ဒါပေမယ့် Project ကြီးလာရင် Folder Structure ကိုပါ Modular ဖြစ်အောင် (Feature-based) ပြောင်းဖို့ လိုအပ်ပါတယ်။</p>"
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

const url = "src/content/docs/fe-architecture/modular/benefits.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/fe-architecture/modular/benefits.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/fe-architecture/modular/benefits.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
