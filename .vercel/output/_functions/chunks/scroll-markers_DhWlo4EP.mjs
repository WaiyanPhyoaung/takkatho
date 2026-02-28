import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "Scroll Marker Pseudo-elements",
  "description": "Carousel များအတွက် Scroll Indicator များ ဖန်တီးခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "အသုံးပြုပုံ",
    "text": "အသုံးပြုပုံ"
  }, {
    "depth": 3,
    "slug": "ဘယ်လို-အလုပ်လုပ်လဲ",
    "text": "ဘယ်လို အလုပ်လုပ်လဲ?"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "Carousel Dots without JS",
      "set:html": "<p>Image Slider (Carousel) တွေမှာ အောက်က အစက်လေးတွေ (Dots) ကို နှိပ်ရင် သက်ဆိုင်ရာ ပုံကို ရောက်သွားတာမျိုး လုပ်ဖို့ JavaScript မလိုတော့ပါဘူး။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အသုံးပြုပုံ\">အသုံးပြုပုံ</h3><a class=\"sl-anchor-link\" href=\"#အသုံးပြုပုံ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အသုံးပြုပုံ”</span></a></div>\n<p>Scroll container ထဲက item တစ်ခုချင်းစီအတွက် <code dir=\"auto\">::scroll-marker</code> ကို ဖန်တီးပေးရပါမယ်။</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">/* 1. Container */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.carousel</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">overflow-x</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6D6D;--1:#984E4D\">auto</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">scroll-snap-type</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6D6D;--1:#984E4D\">x</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#FF6D6D;--1:#984E4D\">mandatory</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5F636F\">/* Marker တွေကို စုပြီး ပြမယ့် နေရာ (Group) */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">scroll-marker-group</span><span style=\"--0:#D6DEEB;--1:#403F53\">: after;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">/* 2. Items */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.slide</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">width</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">100</span><span style=\"--0:#FFEB95\">%</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">scroll-snap-align</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6D6D;--1:#984E4D\">center</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">/* 3. Markers (အစက်လေးတွေ) */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.slide</span><span style=\"--0:#C792EA;--1:#8844AE\">::</span><span style=\"--0:#FF6D6D;--1:#984E4D\">scroll-marker</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">content</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">width</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">10</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">height</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">10</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">border-radius</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">50</span><span style=\"--0:#FFEB95\">%</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">background</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#7FDBCA;--1:#096E72\">gray</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">cursor</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6D6D;--1:#984E4D\">pointer</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">/* 4. Active Marker (လက်ရှိ ရောက်နေတဲ့ Slide) */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.slide</span><span style=\"--0:#C792EA;--1:#8844AE\">::</span><span style=\"--0:#FF6D6D;--1:#984E4D\">scroll-marker</span><span style=\"--0:#C792EA;--1:#8844AE\">:</span><span style=\"--0:#FF6D6D;--1:#984E4D\">target-current</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">background</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#7FDBCA;--1:#096E72\">blue</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"/* 1. Container */.carousel {  overflow-x: auto;  scroll-snap-type: x mandatory;  /* Marker တွေကို စုပြီး ပြမယ့် နေရာ (Group) */  scroll-marker-group: after;}/* 2. Items */.slide {  width: 100%;  scroll-snap-align: center;}/* 3. Markers (အစက်လေးတွေ) */.slide::scroll-marker {  content: &#x22;&#x22;;  width: 10px;  height: 10px;  border-radius: 50%;  background: gray;  cursor: pointer;}/* 4. Active Marker (လက်ရှိ ရောက်နေတဲ့ Slide) */.slide::scroll-marker:target-current {  background: blue;}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဘယ်လို-အလုပ်လုပ်လဲ\">ဘယ်လို အလုပ်လုပ်လဲ?</h3><a class=\"sl-anchor-link\" href=\"#ဘယ်လို-အလုပ်လုပ်လဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘယ်လို အလုပ်လုပ်လဲ?”</span></a></div>\n<ul>\n<li>Browser က <code dir=\"auto\">.slide</code> တစ်ခုချင်းစီအတွက် Marker တစ်ခု အလိုအလျောက် ထုတ်ပေးမယ်။</li>\n<li>အဲဒီ Marker တွေကို <code dir=\"auto\">.carousel</code> ရဲ့ အောက် (<code dir=\"auto\">after</code>) မှာ သွားစုပေးမယ်။</li>\n<li>Marker ကို နှိပ်ရင် သက်ဆိုင်ရာ Slide ဆီ Scroll လုပ်ပေးမယ်။</li>\n<li>Scroll လုပ်လိုက်ရင်လည်း သက်ဆိုင်ရာ Marker က Active ဖြစ်သွားမယ်။</li>\n</ul>"
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

const url = "src/content/docs/advanced-css/visuals-ui/scroll-markers.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-css/visuals-ui/scroll-markers.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-css/visuals-ui/scroll-markers.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
