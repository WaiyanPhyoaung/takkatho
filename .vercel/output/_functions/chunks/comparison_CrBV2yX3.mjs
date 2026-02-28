import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "Rendering Strategies နှိုင်းယှဉ်ချက်",
  "description": "Rendering Strategies နှိုင်းယှဉ်ချက်"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "ဘယ်ဟာကို-ရွေးမလဲ",
    "text": "ဘယ်ဟာကို ရွေးမလဲ?"
  }, {
    "depth": 4,
    "slug": "1-admin-dashboard--user-profile",
    "text": "1. Admin Dashboard / User Profile"
  }, {
    "depth": 4,
    "slug": "2-news-portal--social-media-feed",
    "text": "2. News Portal / Social Media Feed"
  }, {
    "depth": 4,
    "slug": "3-personal-blog--documentation",
    "text": "3. Personal Blog / Documentation"
  }, {
    "depth": 4,
    "slug": "4-e-commerce-product-listing",
    "text": "4. E-commerce Product Listing"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<table><thead><tr><th>Method</th><th>Analogy</th><th>Speed (Initial)</th><th>SEO</th><th>Data Freshness</th></tr></thead><tbody><tr><td><strong>CSR</strong></td><td>Meal Kit</td><td>🐢 Slow</td><td>❌ Poor</td><td>✅ High</td></tr><tr><td><strong>SSR</strong></td><td>Delivery</td><td>🐇 Fast</td><td>✅ Good</td><td>✅ Always Fresh</td></tr><tr><td><strong>SSG</strong></td><td>Frozen Food</td><td>🚀 Fastest</td><td>✅ Best</td><td>❌ Stale (until rebuild)</td></tr><tr><td><strong>ISR</strong></td><td>Bakery</td><td>🚀 Fast</td><td>✅ Best</td><td>⚠️ Fresh (periodically)</td></tr></tbody></table>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဘယ်ဟာကို-ရွေးမလဲ\">ဘယ်ဟာကို ရွေးမလဲ?</h3><a class=\"sl-anchor-link\" href=\"#ဘယ်ဟာကို-ရွေးမလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘယ်ဟာကို ရွေးမလဲ?”</span></a></div>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"1-admin-dashboard--user-profile\">1. Admin Dashboard / User Profile</h4><a class=\"sl-anchor-link\" href=\"#1-admin-dashboard--user-profile\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “1. Admin Dashboard / User Profile”</span></a></div>\n<p><strong>CSR</strong> ကို သုံးပါ။</p>\n<ul>\n<li>SEO မလိုဘူး။</li>\n<li>User က Login ဝင်ပြီးမှ သုံးတာဖြစ်လို့ Initial Load နည်းနည်းကြာလည်း ကိစ္စမရှိဘူး။</li>\n<li>Data တွေက အမြဲတမ်း Update ဖြစ်နေဖို့ လိုတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"2-news-portal--social-media-feed\">2. News Portal / Social Media Feed</h4><a class=\"sl-anchor-link\" href=\"#2-news-portal--social-media-feed\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “2. News Portal / Social Media Feed”</span></a></div>\n<p><strong>SSR</strong> ကို သုံးပါ။</p>\n<ul>\n<li>သတင်းတွေက အချိန်နဲ့ တပြေးညီ တက်နေဖို့ လိုတယ်။</li>\n<li>Google News မှာ ပါဖို့ SEO ကောင်းဖို့ လိုတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"3-personal-blog--documentation\">3. Personal Blog / Documentation</h4><a class=\"sl-anchor-link\" href=\"#3-personal-blog--documentation\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “3. Personal Blog / Documentation”</span></a></div>\n<p><strong>SSG</strong> ကို သုံးပါ။</p>\n<ul>\n<li>Content တွေက သိပ်မပြောင်းလဲဘူး။</li>\n<li>အမြန်ဆုံး ဖြစ်ချင်တယ်။</li>\n<li>Hosting စရိတ် သက်သာချင်တယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"4-e-commerce-product-listing\">4. E-commerce Product Listing</h4><a class=\"sl-anchor-link\" href=\"#4-e-commerce-product-listing\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “4. E-commerce Product Listing”</span></a></div>\n<p><strong>ISR</strong> ကို သုံးပါ။</p>\n<ul>\n<li>ပစ္စည်းဈေးနှုန်းတွေက ပြောင်းလဲနိုင်တယ်။</li>\n<li>ဒါပေမဲ့ SSR လောက် Server ဝန်မပိချင်ဘူး။</li>\n<li>၁ နာရီ တစ်ခါလောက် Price Update ဖြစ်ရင် လုံလောက်ပြီ။</li>\n</ul>\n"
    }), createVNode($$Aside, {
      title: "Next.js ၏ အားသာချက်",
      "set:html": "<p>Next.js လို Framework မျိုးက ဒီ (၄) မျိုးလုံးကို <strong>Hybrid</strong> အနေနဲ့ သုံးခွင့်ပေးထားပါတယ်။</p><ul>\n<li><code dir=\"auto\">About Us</code> page ကို <strong>SSG</strong> နဲ့ လုပ်မယ်။</li>\n<li><code dir=\"auto\">Product Detail</code> page ကို <strong>ISR</strong> နဲ့ လုပ်မယ်။</li>\n<li><code dir=\"auto\">Cart</code> page ကို <strong>CSR</strong> နဲ့ လုပ်မယ်။\nဒါက Modern Web Development ရဲ့ အနှစ်သာရပါပဲ။</li>\n</ul>"
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

const url = "src/content/docs/fe-architecture/rendering/comparison.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/fe-architecture/rendering/comparison.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/fe-architecture/rendering/comparison.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
