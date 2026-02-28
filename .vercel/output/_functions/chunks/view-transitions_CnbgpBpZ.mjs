import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "View Transitions (Cross-Document)",
  "description": "Page တစ်ခုနှင့် တစ်ခု ကူးပြောင်းရာတွင် Smooth Animation ထည့်သွင်းခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "အသုံးပြုပုံ",
    "text": "အသုံးပြုပုံ"
  }, {
    "depth": 3,
    "slug": "custom-animation",
    "text": "Custom Animation"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "Native App-like Feel",
      "set:html": "<p>Link တစ်ခုကို နှိပ်လိုက်ရင် မျက်နှာပြင် ဖြူသွားပြီးမှ နောက် Page ပေါ်လာတာမျိုး မဟုတ်ဘဲ၊ Native App တွေလို ချောချောမွေ့မွေ့ ကူးသွားအောင် လုပ်လို့ရပါပြီ။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အသုံးပြုပုံ\">အသုံးပြုပုံ</h3><a class=\"sl-anchor-link\" href=\"#အသုံးပြုပုံ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အသုံးပြုပုံ”</span></a></div>\n<p>CSS တစ်ကြောင်းတည်းနဲ့ Website တစ်ခုလုံးစာ (Multi-page application) အတွက် ဖွင့်လို့ရပါတယ်။</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">@view-transition</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C792EA;--1:#8844AE\">navigation: auto;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"@view-transition {  navigation: auto;}\"><div></div></button></div></figure></div>\n<p>ဒါပါပဲ! Browser က Page အဟောင်းနဲ့ အသစ်ကို အလိုအလျောက် Cross-fade လုပ်ပေးပါလိမ့်မယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"custom-animation\">Custom Animation</h3><a class=\"sl-anchor-link\" href=\"#custom-animation\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Custom Animation”</span></a></div>\n<p>Element တစ်ခုချင်းစီကို နာမည်ပေးပြီး သီးသန့် Animate လုပ်လို့လည်း ရပါတယ်။\nဥပမာ - Product List က ပုံကို နှိပ်လိုက်ရင် Detail Page မှာ အဲဒီပုံက ကြီးလာပြီး နေရာရွှေ့သွားတာမျိုး (Shared Element Transition)။</p>\n<p><strong>Page 1 (List):</strong></p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.product-img</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">view-transition-name</span><span style=\"--0:#D6DEEB;--1:#403F53\">: product-123;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".product-img {  view-transition-name: product-123;}\"><div></div></button></div></figure></div>\n<p><strong>Page 2 (Detail):</strong></p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.hero-img</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">view-transition-name</span><span style=\"--0:#D6DEEB;--1:#403F53\">: product-123; </span><span style=\"--0:#919F9F;--1:#5F636F\">/* နာမည်တူ ပေးထားရမယ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".hero-img {  view-transition-name: product-123; /* နာမည်တူ ပေးထားရမယ် */}\"><div></div></button></div></figure></div>\n<p>Browser က ဒီနှစ်ခုကို ချိတ်ဆက်ပြီး အလိုအလျောက် Morph animation လုပ်ပေးပါလိမ့်မယ်။</p>\n"
    }), createVNode($$Aside, {
      type: "tip",
      "set:html": "<p>Astro, Next.js စတဲ့ Framework တွေမှာလည်း View Transitions API ကို support ပေးထားပါတယ်။</p>"
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

const url = "src/content/docs/advanced-css/visuals-ui/view-transitions.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-css/visuals-ui/view-transitions.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-css/visuals-ui/view-transitions.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
