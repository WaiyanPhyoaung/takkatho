import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import 'clsx';

const frontmatter = {
  "title": "Event Flow (Bubbling)",
  "description": "Event များ ပြန့်ကားသွားခြင်း သဘောတရား"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "event-bubbling-ဆိုတာ-ဘာလဲ",
    "text": "Event Bubbling ဆိုတာ ဘာလဲ?"
  }, {
    "depth": 2,
    "slug": "stoppropagation",
    "text": "stopPropagation()"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>ဒါက Beginner Level အတွက် နည်းနည်း ရှုပ်နိုင်ပေမယ့် သိထားရင် ကောင်းပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"event-bubbling-ဆိုတာ-ဘာလဲ\">Event Bubbling ဆိုတာ ဘာလဲ?</h2><a class=\"sl-anchor-link\" href=\"#event-bubbling-ဆိုတာ-ဘာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Event Bubbling ဆိုတာ ဘာလဲ?”</span></a></div>\n<p>ရေပူဖောင်းလေးတွေ အောက်ကနေ အပေါ်ကို တက်လာသလိုပါပဲ။\nElement တစ်ခုမှာ Event တစ်ခု (ဥပမာ click) ဖြစ်လိုက်ရင်၊ အဲဒီ Event က သူ့ရဲ့ မိဘ (Parent)၊ ပြီးရင် မိဘရဲ့ မိဘ (Grandparent) .. အဲဒီလို အဆင့်ဆင့် အပေါ်ကို တက်သွားပါတယ်။</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"html\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">div</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">parent</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">child</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span><span style=\"--0:#D6DEEB;--1:#403F53\">Click Me</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">div</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<div id=&#x22;parent&#x22;>    <button id=&#x22;child&#x22;>Click Me</button></div>\"><div></div></button></div></figure></div>\n<p><code dir=\"auto\">button</code> ကို နှိပ်လိုက်ရင် -</p>\n<ol>\n<li><code dir=\"auto\">button</code> ရဲ့ click event အရင် အလုပ်လုပ်မယ်။</li>\n<li>ပြီးရင် <code dir=\"auto\">div</code> (parent) ရဲ့ click event ဆက် အလုပ်လုပ်မယ်။</li>\n<li>ပြီးရင် <code dir=\"auto\">body</code>, <code dir=\"auto\">html</code> အထိ တက်သွားမယ်။</li>\n</ol>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"stoppropagation\"><code dir=\"auto\">stopPropagation()</code></h2><a class=\"sl-anchor-link\" href=\"#stoppropagation\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “stopPropagation()”</span></a></div>\n<p>ဒီလို အပေါ်ကို ဆက်မတက်စေချင်ရင် <code dir=\"auto\">e.stopPropagation()</code> နဲ့ တားလို့ ရပါတယ်။</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#096E72\">child</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">addEventListener</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">click</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#C792EA;--1:#8844AE\">function</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">e</span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#7FDBCA;--1:#096E72\">e</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">stopPropagation</span><span style=\"--0:#D6DEEB;--1:#403F53\">(); </span><span style=\"--0:#919F9F;--1:#5D6376\">// ဒီမှာပဲ ရပ်တော့! အပေါ်ကို မတက်နဲ့တော့။</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#7FDBCA;--1:#096E72\">console</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">log</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Child Clicked</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">});</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"child.addEventListener(&#x22;click&#x22;, function(e) {    e.stopPropagation(); // ဒီမှာပဲ ရပ်တော့! အပေါ်ကို မတက်နဲ့တော့။    console.log(&#x22;Child Clicked&#x22;);});\"><div></div></button></div></figure></div>"
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
const url = "src/content/docs/javascript/events/flow.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/javascript/events/flow.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/javascript/events/flow.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
