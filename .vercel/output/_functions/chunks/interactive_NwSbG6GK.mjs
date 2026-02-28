import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import 'clsx';

const frontmatter = {
  "title": "Interactive Section - Control Flow",
  "description": "Control Flow အတွက် လက်တွေ့စမ်းသပ်ရန်"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "exercise-1-number-checker",
    "text": "Exercise 1: Number Checker"
  }, {
    "depth": 2,
    "slug": "exercise-2-even-or-odd-စုံ-လား-မ-လား",
    "text": "Exercise 2: Even or Odd? (စုံ လား၊ မ လား)"
  }, {
    "depth": 2,
    "slug": "mini-challenge-password-checker",
    "text": "Mini Challenge: Password Checker"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"exercise-1-number-checker\">Exercise 1: Number Checker</h2><a class=\"sl-anchor-link\" href=\"#exercise-1-number-checker\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Exercise 1: Number Checker”</span></a></div>\n<p>number တစ်ခု ပေးလိုက်ရင် Positive (အပေါင်း), Negative (အနှုတ်)၊ ဒါမှမဟုတ် Zero (သုည) ဟုတ်မဟုတ် စစ်ပေးတဲ့ Code ရေးပါ။</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">let </span><span style=\"--0:#D7DBE0;--1:#403F53\">number</span><span style=\"--0:#C792EA;--1:#8844AE\"> = -</span><span style=\"--0:#F78C6C;--1:#AA0982\">5</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// သင့် Code ကို ဒီအောက်မှာ ရေးပါ</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">if</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\"> (</span><span style=\"--0:#D7DBE0\">number</span><span style=\"--0:#D6DEEB\"> </span></span><span style=\"--0:#C792EA;--1:#8844AE\">></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">) {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#7FDBCA;--1:#096E72\">console</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">log</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Positive</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">} </span><span style=\"--0:#919F9F;--1:#5D6376\">// continue...</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"let number = -5;// သင့် Code ကို ဒီအောက်မှာ ရေးပါif (number > 0) {    console.log(&#x22;Positive&#x22;);} // continue...\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"exercise-2-even-or-odd-စုံ-လား-မ-လား\">Exercise 2: Even or Odd? (စုံ လား၊ မ လား)</h2><a class=\"sl-anchor-link\" href=\"#exercise-2-even-or-odd-စုံ-လား-မ-လား\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Exercise 2: Even or Odd? (စုံ လား၊ မ လား)”</span></a></div>\n<p>Loop ပတ်ပြီး ၁ ကနေ ၁၀ အထိ ဂဏန်းတွေကို ထုတ်ပြပါ။ ဒါပေမဲ့ ထူးခြားတာက -</p>\n<ul>\n<li>စုံကိန်း (Even) ဆိုရင် “2 is Even”</li>\n<li>မကိန်း (Odd) ဆိုရင် “1 is Odd” လို့ ထွက်ရမယ်။</li>\n</ul>\n<p><em>Hint: <code dir=\"auto\">%</code> (Remainder operator) ကို သုံးပါ။ <code dir=\"auto\">num % 2 === 0</code> ဆိုရင် စုံကိန်း ဖြစ်ပါတယ်။</em></p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">for</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (</span><span style=\"--0:#C792EA;--1:#8844AE\">let </span><span style=\"--0:#D7DBE0;--1:#403F53\">i</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\">; </span><span style=\"--0:#D7DBE0\">i</span><span style=\"--0:#D6DEEB\"> </span></span><span style=\"--0:#C792EA;--1:#8844AE\">&#x3C;=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">10</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\">; </span><span style=\"--0:#D7DBE0\">i</span></span><span style=\"--0:#C792EA;--1:#8844AE\">++</span><span style=\"--0:#D6DEEB;--1:#403F53\">) {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#919F9F;--1:#5D6376\">// Check if i is even or odd here</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"for (let i = 1; i <= 10; i++) {    // Check if i is even or odd here}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"mini-challenge-password-checker\">Mini Challenge: Password Checker</h2><a class=\"sl-anchor-link\" href=\"#mini-challenge-password-checker\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Mini Challenge: Password Checker”</span></a></div>\n<p><code dir=\"auto\">password</code> ဆိုတဲ့ variable တစ်ခု ကြေညာပါ။</p>\n<ul>\n<li>စာလုံးရေ ၆ လုံးထက် နည်းရင် “Password too short”</li>\n<li>စာလုံးရေ ၂၀ ထက် များရင် “Password too long”</li>\n<li>ကြားထဲမှာ ဆိုရင် “Password valid” လို့ ပြပေးပါ။</li>\n</ul>\n<p><em>Hint: <code dir=\"auto\">password.length</code> နဲ့ စာလုံးရေကို ရယူနိုင်ပါတယ်။</em></p>"
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
const url = "src/content/docs/javascript/control-flow/interactive.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/javascript/control-flow/interactive.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/javascript/control-flow/interactive.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
