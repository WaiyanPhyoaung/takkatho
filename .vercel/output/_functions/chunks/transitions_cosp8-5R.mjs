import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "Transitions (အကူးအပြောင်း)",
  "description": "အပြောင်းအလဲများကို ချောမွေ့စေခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "ဘယ်လို-သုံးမလဲ",
    "text": "ဘယ်လို သုံးမလဲ?"
  }, {
    "depth": 3,
    "slug": "transition-properties",
    "text": "Transition Properties"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရုတ်တရက် မဟုတ်ဘူး",
      "set:html": "<p>Button တစ်ခုကို Mouse တင်လိုက်ရင် အရောင် ချက်ချင်း ပြောင်းသွားတာထက်၊ ဖြည်းဖြည်းချင်း ပြောင်းသွားတာက ပိုပြီး ကြည့်ကောင်းပါတယ်။ အဲဒါကို <strong>Transition</strong> လို့ ခေါ်ပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဘယ်လို-သုံးမလဲ\">ဘယ်လို သုံးမလဲ?</h3><a class=\"sl-anchor-link\" href=\"#ဘယ်လို-သုံးမလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘယ်လို သုံးမလဲ?”</span></a></div>\n<p>Transition လုပ်ချင်တဲ့ Element မှာ <code dir=\"auto\">transition</code> property ထည့်ပေးရပါတယ်။\nHover (Mouse တင်တဲ့အချိန်) မှာ မဟုတ်ဘဲ၊ <strong>မူလ Class</strong> မှာ ထည့်ရပါမယ်။</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.button</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">background-color</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#7FDBCA;--1:#096E72\">blue</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">color</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#7FDBCA;--1:#096E72\">white</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5F636F\">/* Property, Duration, Timing-Function */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">transition</span><span style=\"--0:#D6DEEB;--1:#403F53\">: background-color </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">0.3</span><span style=\"--0:#FFEB95\">s</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#FF6D6D;--1:#984E4D\">ease</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.button:hover</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">background-color</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#7FDBCA;--1:#096E72\">darkblue</span><span style=\"--0:#D6DEEB;--1:#403F53\">; </span><span style=\"--0:#919F9F;--1:#5F636F\">/* Mouse တင်ရင် ဒီအရောင်ကို 0.3 စက္ကန့်အတွင်း ပြောင်းသွားမယ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".button {  background-color: blue;  color: white;  /* Property, Duration, Timing-Function */  transition: background-color 0.3s ease;}.button:hover {  background-color: darkblue; /* Mouse တင်ရင် ဒီအရောင်ကို 0.3 စက္ကန့်အတွင်း ပြောင်းသွားမယ် */}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"transition-properties\">Transition Properties</h3><a class=\"sl-anchor-link\" href=\"#transition-properties\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Transition Properties”</span></a></div>\n<ol>\n<li><strong>Property:</strong> ဘာကို ပြောင်းမှာလဲ? (<code dir=\"auto\">all</code>, <code dir=\"auto\">background-color</code>, <code dir=\"auto\">width</code>, <code dir=\"auto\">transform</code>)</li>\n<li><strong>Duration:</strong> ဘယ်လောက် ကြာမှာလဲ? (<code dir=\"auto\">0.3s</code>, <code dir=\"auto\">1s</code>, <code dir=\"auto\">500ms</code>)</li>\n<li><strong>Timing Function:</strong> ဘယ်လို နှုန်းနဲ့ သွားမှာလဲ?\n<ul>\n<li><code dir=\"auto\">linear</code>: အစအဆုံး တူတူပဲ။</li>\n<li><code dir=\"auto\">ease</code>: အစနှေး၊ အလယ်မြန်၊ အဆုံးနှေး (သဘာဝ အကျဆုံး)။</li>\n<li><code dir=\"auto\">ease-in</code>: အစ နှေးမယ်။</li>\n<li><code dir=\"auto\">ease-out</code>: အဆုံး နှေးမယ်။</li>\n</ul>\n</li>\n</ol>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.card</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">transition</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6D6D;--1:#984E4D\">all</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">0.5</span><span style=\"--0:#FFEB95\">s</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#FF6D6D;--1:#984E4D\">ease-in-out</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".card {  transition: all 0.5s ease-in-out;}\"><div></div></button></div></figure></div>"
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

const url = "src/content/docs/css/interactivity/transitions.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/css/interactivity/transitions.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/css/interactivity/transitions.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
