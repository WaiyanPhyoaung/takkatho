import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const gridLayout = new Proxy({"src":"/_astro/grid.G7h4nbpt.png","width":1348,"height":454,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/css/grid.png";
							}
							
							return target[name];
						}
					});

const gridGap = new Proxy({"src":"/_astro/grid-gap.QjkHexFM.png","width":1200,"height":803,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/css/grid-gap.png";
							}
							
							return target[name];
						}
					});

const gridArea = new Proxy({"src":"/_astro/span.CxRik1rk.png","width":1352,"height":494,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/css/span.png";
							}
							
							return target[name];
						}
					});

const gridNamed = new Proxy({"src":"/_astro/named-grid.av6iypSw.png","width":2270,"height":946,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/css/named-grid.png";
							}
							
							return target[name];
						}
					});

const gridAlignment = new Proxy({"src":"/_astro/grid-layout.BaGIChpY.jpeg","width":595,"height":842,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/css/grid-layout.jpeg";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "CSS Grid",
  "description": "ခေတ်မီ Layout ချနည်း (၂)"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "grid-စသုံးမယ်",
    "text": "Grid စသုံးမယ်"
  }, {
    "depth": 3,
    "slug": "container-properties-parent-element-တွင်-သုံးရန်",
    "text": "Container Properties (Parent Element တွင် သုံးရန်)"
  }, {
    "depth": 4,
    "slug": "1-columns--rows-သတ်မှတ်ခြင်း",
    "text": "1. Columns & Rows သတ်မှတ်ခြင်း"
  }, {
    "depth": 4,
    "slug": "2-fraction-unit-fr",
    "text": "2. Fraction Unit (fr)"
  }, {
    "depth": 4,
    "slug": "3-repeat-function",
    "text": "3. Repeat Function"
  }, {
    "depth": 4,
    "slug": "4-grid-gap-ကွက်လပ်",
    "text": "4. Grid Gap (ကွက်လပ်)"
  }, {
    "depth": 4,
    "slug": "5-grid-template-areas-ဧရိယာ-သတ်မှတ်ခြင်း",
    "text": "5. Grid Template Areas (ဧရိယာ သတ်မှတ်ခြင်း)"
  }, {
    "depth": 3,
    "slug": "item-properties-child-element-များတွင်-သုံးရန်",
    "text": "Item Properties (Child Element များတွင် သုံးရန်)"
  }, {
    "depth": 4,
    "slug": "1-grid-column--row-နေရာယူခြင်း",
    "text": "1. Grid Column & Row (နေရာယူခြင်း)"
  }, {
    "depth": 4,
    "slug": "2-span-ထပ်ပေါင်းခြင်း",
    "text": "2. Span (ထပ်ပေါင်းခြင်း)"
  }, {
    "depth": 4,
    "slug": "3-grid-area-နာမည်ဖြင့်-နေရာချခြင်း",
    "text": "3. Grid Area (နာမည်ဖြင့် နေရာချခြင်း)"
  }, {
    "depth": 3,
    "slug": "alignment-ညှိခြင်း",
    "text": "Alignment (ညှိခြင်း)"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "2D Layout",
      "set:html": "<p>Flexbox က တစ်တန်းတည်းစာ (1D) ကောင်းပေမယ့်၊ Grid ကတော့ <strong>အတန်းရော ဒေါင်လိုက်ရော (Rows &#x26; Columns)</strong> ပါတဲ့ ရှုပ်ထွေးတဲ့ Layout တွေအတွက် အကောင်းဆုံးပါ။\nWeb Page တစ်ခုလုံးရဲ့ Layout ကို ချမယ်ဆိုရင် Grid က ပိုသင့်တော်ပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"grid-စသုံးမယ်\">Grid စသုံးမယ်</h3><a class=\"sl-anchor-link\" href=\"#grid-စသုံးမယ်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Grid စသုံးမယ်”</span></a></div>\n<p>Parent element (Container) မှာ <code dir=\"auto\">display: grid;</code> လို့ ကြေညာရပါတယ်။</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.container</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">display</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6D6D;--1:#984E4D\">grid</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".container {  display: grid;}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"container-properties-parent-element-တွင်-သုံးရန်\">Container Properties (Parent Element တွင် သုံးရန်)</h3><a class=\"sl-anchor-link\" href=\"#container-properties-parent-element-တွင်-သုံးရန်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Container Properties (Parent Element တွင် သုံးရန်)”</span></a></div>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"1-columns--rows-သတ်မှတ်ခြင်း\">1. Columns &#x26; Rows သတ်မှတ်ခြင်း</h4><a class=\"sl-anchor-link\" href=\"#1-columns--rows-သတ်မှတ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “1. Columns &#x26; Rows သတ်မှတ်ခြင်း”</span></a></div>\n<p>Grid တစ်ခုမှာ ကော်လံ (Column) ဘယ်နှခု၊ အတန်း (Row) ဘယ်နှခု ပါမလဲဆိုတာ သတ်မှတ်ရပါမယ်။</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.container</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">display</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6D6D;--1:#984E4D\">grid</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5F636F\">/* 200px စီရှိတဲ့ ကော်လံ ၃ ခု */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">grid-template-columns</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">200</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">200</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">200</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5F636F\">/* 100px စီရှိတဲ့ အတန်း ၂ ခု */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">grid-template-rows</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">100</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">100</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".container {  display: grid;  /* 200px စီရှိတဲ့ ကော်လံ ၃ ခု */  grid-template-columns: 200px 200px 200px;  /* 100px စီရှိတဲ့ အတန်း ၂ ခု */  grid-template-rows: 100px 100px;}\"><div></div></button></div></figure></div>\n"
    }), createVNode($$ContentImage, {
      src: gridLayout,
      alt: "CSS Grid Layout Example"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"2-fraction-unit-fr\">2. Fraction Unit (fr)</h4><a class=\"sl-anchor-link\" href=\"#2-fraction-unit-fr\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “2. Fraction Unit (fr)”</span></a></div>\n<p>Pixel အသေမပေးချင်ရင် <code dir=\"auto\">fr</code> (fraction) unit ကို သုံးနိုင်ပါတယ်။ “ရှိတဲ့နေရာကို အချိုးကျ ခွဲယူမယ်” လို့ အဓိပ္ပာယ်ရပါတယ်။</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.container</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">display</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6D6D;--1:#984E4D\">grid</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5F636F\">/* ပထမကော်လံက 1 ပုံ၊ ဒုတိယကော်လံက 2 ပုံ (စုစုပေါင်း 3 ပုံ) */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">grid-template-columns</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">1</span><span style=\"--0:#FFEB95\">fr</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">2</span><span style=\"--0:#FFEB95\">fr</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".container {  display: grid;  /* ပထမကော်လံက 1 ပုံ၊ ဒုတိယကော်လံက 2 ပုံ (စုစုပေါင်း 3 ပုံ) */  grid-template-columns: 1fr 2fr;}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"3-repeat-function\">3. Repeat Function</h4><a class=\"sl-anchor-link\" href=\"#3-repeat-function\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “3. Repeat Function”</span></a></div>\n<p>တူညီတဲ့ Size တွေ အများကြီး ရေးရတာ သက်သာအောင် <code dir=\"auto\">repeat()</code> ကို သုံးနိုင်ပါတယ်။</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.container</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5F636F\">/* 1fr ရှိတဲ့ ကော်လံ ၃ ခု (1fr 1fr 1fr နဲ့ အတူတူပါပဲ) */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">grid-template-columns</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#C5E478;--1:#3B61B0\">repeat</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">3</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">1</span><span style=\"--0:#FFEB95\">fr</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".container {  /* 1fr ရှိတဲ့ ကော်လံ ၃ ခု (1fr 1fr 1fr နဲ့ အတူတူပါပဲ) */  grid-template-columns: repeat(3, 1fr);}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"4-grid-gap-ကွက်လပ်\">4. Grid Gap (ကွက်လပ်)</h4><a class=\"sl-anchor-link\" href=\"#4-grid-gap-ကွက်လပ်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “4. Grid Gap (ကွက်လပ်)”</span></a></div>\n<p>Margin တွေ တွက်နေစရာ မလိုပါဘူး။ <code dir=\"auto\">gap</code> သုံးလိုက်ရင် ကွက်လပ်တွေ အလိုလို ခြားပေးပါတယ်။</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.container</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">column-gap</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">1</span><span style=\"--0:#FFEB95\">rem</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">; </span><span style=\"--0:#919F9F;--1:#5F636F\">/* ကော်လံတွေကြားက ကွက်လပ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">row-gap</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">10</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;    </span><span style=\"--0:#919F9F;--1:#5F636F\">/* အတန်းတွေကြားက ကွက်လပ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5F636F\">/* shorthand */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">gap</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">10</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">1</span><span style=\"--0:#FFEB95\">rem</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;   </span><span style=\"--0:#919F9F;--1:#5F636F\">/* ပထမတန်ဖိုး = row-gap, ဒုတိယတန်ဖိုး = column-gap */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".container {  column-gap: 1rem; /* ကော်လံတွေကြားက ကွက်လပ် */  row-gap: 10px;    /* အတန်းတွေကြားက ကွက်လပ် */  /* shorthand */  gap: 10px 1rem;   /* ပထမတန်ဖိုး = row-gap, ဒုတိယတန်ဖိုး = column-gap */}\"><div></div></button></div></figure></div>\n"
    }), createVNode($$ContentImage, {
      src: gridGap,
      alt: "grid gap"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"5-grid-template-areas-ဧရိယာ-သတ်မှတ်ခြင်း\">5. Grid Template Areas (ဧရိယာ သတ်မှတ်ခြင်း)</h4><a class=\"sl-anchor-link\" href=\"#5-grid-template-areas-ဧရိယာ-သတ်မှတ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “5. Grid Template Areas (ဧရိယာ သတ်မှတ်ခြင်း)”</span></a></div>\n<p>Layout ကို နာမည်ပေးပြီး စီမံချင်ရင် အရမ်းအသုံးဝင်ပါတယ်။</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.container</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">display</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6D6D;--1:#984E4D\">grid</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">grid-template-areas</span><span style=\"--0:#D6DEEB;--1:#403F53\">:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">header header header</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">sidebar content content</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">footer footer footer</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".container {  display: grid;  grid-template-areas:    &#x22;header header header&#x22;    &#x22;sidebar content content&#x22;    &#x22;footer footer footer&#x22;;}\"><div></div></button></div></figure></div>\n<hr>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"item-properties-child-element-များတွင်-သုံးရန်\">Item Properties (Child Element များတွင် သုံးရန်)</h3><a class=\"sl-anchor-link\" href=\"#item-properties-child-element-များတွင်-သုံးရန်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Item Properties (Child Element များတွင် သုံးရန်)”</span></a></div>\n<p>Grid Item တွေက ဘယ်နေရာမှာ နေရမလဲဆိုတာ သတ်မှတ်နိုင်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"1-grid-column--row-နေရာယူခြင်း\">1. Grid Column &#x26; Row (နေရာယူခြင်း)</h4><a class=\"sl-anchor-link\" href=\"#1-grid-column--row-နေရာယူခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “1. Grid Column &#x26; Row (နေရာယူခြင်း)”</span></a></div>\n<p>ဘယ်လိုင်းကနေ ဘယ်လိုင်းအထိ နေရာယူမလဲ ဆိုတာပါ။ (Grid Line တွေက 1 ကနေ စပါတယ်)</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.item-1</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5F636F\">/* Column Line 1 ကနေ 3 အထိ (ကော်လံ ၂ ခုစာ နေရာယူမယ်) */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">grid-column-start</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">grid-column-end</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#F78C6C;--1:#AA0982\">3</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5F636F\">/* Shorthand: grid-column: 1 / 3; */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.item-2</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5F636F\">/* Row Line 2 ကနေ 4 အထိ */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">grid-row</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#F78C6C;--1:#AA0982\">2</span><span style=\"--0:#D6DEEB;--1:#403F53\"> / </span><span style=\"--0:#F78C6C;--1:#AA0982\">4</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".item-1 {  /* Column Line 1 ကနေ 3 အထိ (ကော်လံ ၂ ခုစာ နေရာယူမယ်) */  grid-column-start: 1;  grid-column-end: 3;  /* Shorthand: grid-column: 1 / 3; */}.item-2 {  /* Row Line 2 ကနေ 4 အထိ */  grid-row: 2 / 4;}\"><div></div></button></div></figure></div>\n"
    }), createVNode($$ContentImage, {
      src: gridArea,
      alt: "grid area"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"2-span-ထပ်ပေါင်းခြင်း\">2. Span (ထပ်ပေါင်းခြင်း)</h4><a class=\"sl-anchor-link\" href=\"#2-span-ထပ်ပေါင်းခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “2. Span (ထပ်ပေါင်းခြင်း)”</span></a></div>\n<p>Line နံပါတ် မမှတ်မိရင် ဘယ်နှကွက် ယူမလဲဆိုတာ <code dir=\"auto\">span</code> နဲ့ ပြောလို့ရပါတယ်။</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.item</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">grid-column</span><span style=\"--0:#D6DEEB;--1:#403F53\">: span </span><span style=\"--0:#F78C6C;--1:#AA0982\">2</span><span style=\"--0:#D6DEEB;--1:#403F53\">; </span><span style=\"--0:#919F9F;--1:#5F636F\">/* ကော်လံ ၂ ခုစာ နေရာယူမယ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".item {  grid-column: span 2; /* ကော်လံ ၂ ခုစာ နေရာယူမယ် */}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"3-grid-area-နာမည်ဖြင့်-နေရာချခြင်း\">3. Grid Area (နာမည်ဖြင့် နေရာချခြင်း)</h4><a class=\"sl-anchor-link\" href=\"#3-grid-area-နာမည်ဖြင့်-နေရာချခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “3. Grid Area (နာမည်ဖြင့် နေရာချခြင်း)”</span></a></div>\n<p>Container မှာ <code dir=\"auto\">grid-template-areas</code> နဲ့ ဧရိယာနာမည်တွေ သတ်မှတ်ခဲ့တယ်နော် (အပေါ်က နံပါတ် ၅ မှာ)။\nအဲဒီ နာမည်တွေကို Item တွေမှာ ပြန်ခေါ်သုံးတာပါ။</p>\n<p>ဥပမာ - Container မှာ <code dir=\"auto\">\"header header header\"</code> လို့ သတ်မှတ်ခဲ့ရင်၊ Header element မှာ <code dir=\"auto\">grid-area: header;</code> လို့ ပေးလိုက်တာနဲ့ အဲဒီနေရာကို အလိုလို ရောက်သွားပါမယ်။ Line နံပါတ်တွေ လိုက်မှတ်နေစရာ မလိုတော့ပါဘူး။</p>\n<blockquote>\n<p>header class ရှိတဲ့ html element က header လို့ သတ်မှတ်ထားတဲ့ နေရာအကုန် (ဒီမှာဆိုရင် Container ရဲ့ အပေါ်ဆုံး အတန်း)ကို နေရာယူပါမယ်။</p>\n</blockquote>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.header</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">grid-area</span><span style=\"--0:#D6DEEB;--1:#403F53\">: header; </span><span style=\"--0:#919F9F;--1:#5F636F\">/* Container မှာ သတ်မှတ်ခဲ့တဲ့ နာမည် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.sidebar</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">grid-area</span><span style=\"--0:#D6DEEB;--1:#403F53\">: sidebar;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.content</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">grid-area</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6D6D;--1:#984E4D\">content</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.footer</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">grid-area</span><span style=\"--0:#D6DEEB;--1:#403F53\">: footer;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".header {  grid-area: header; /* Container မှာ သတ်မှတ်ခဲ့တဲ့ နာမည် */}.sidebar {  grid-area: sidebar;}.content {  grid-area: content;}.footer {  grid-area: footer;}\"><div></div></button></div></figure></div>\n"
    }), createVNode($$ContentImage, {
      src: gridNamed,
      alt: "named grid areas"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"alignment-ညှိခြင်း\">Alignment (ညှိခြင်း)</h3><a class=\"sl-anchor-link\" href=\"#alignment-ညှိခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Alignment (ညှိခြင်း)”</span></a></div>\n<p>Flexbox လိုပဲ Grid မှာလည်း ညှိလို့ရပါတယ်။</p>\n<ul>\n<li><code dir=\"auto\">justify-content</code>: Grid တစ်ခုလုံးကို Container အတွင်း ဘယ်ညာ ညှိခြင်း</li>\n<li><code dir=\"auto\">align-content</code>: Grid တစ်ခုလုံးကို Container အတွင်း အပေါ်အောက် ညှိခြင်း</li>\n<li><code dir=\"auto\">justify-items</code>: Cell အတွင်းက Content ကို ဘယ်ညာ ညှိခြင်း (start, end, center, stretch)</li>\n<li><code dir=\"auto\">align-items</code>: Cell အတွင်းက Content ကို အပေါ်အောက် ညှိခြင်း (start, end, center, stretch)</li>\n</ul>\n"
    }), createVNode($$ContentImage, {
      src: gridAlignment,
      alt: "grid alignment"
    }), "\n", createVNode($$Aside, {
      type: "tip",
      "set:html": "<p><strong>Flexbox vs Grid:</strong></p><ul>\n<li><strong>Flexbox:</strong> ရိုးရှင်းတဲ့ အတန်းလိုက် Layout (Navbar, Button Group)၊ Content ပေါ်မူတည်ပြီး အကြီးအသေး ပြောင်းစေချင်ရင် သုံးပါ။</li>\n<li><strong>Grid:</strong> ရှုပ်ထွေးတဲ့ 2D Layout (Photo Gallery, Dashboard, Page Layout)၊ အတိအကျ Layout ချချင်ရင် သုံးပါ။</li>\n</ul>"
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

const url = "src/content/docs/css/layout/grid.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/css/layout/grid.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/css/layout/grid.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
