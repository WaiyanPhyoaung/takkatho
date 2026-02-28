import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const color = new Proxy({"src":"/_astro/color.U9u-gepV.png","width":1398,"height":320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/css/color.png";
							}
							
							return target[name];
						}
					});

const card = new Proxy({"src":"/_astro/card.BjKAhKTN.png","width":2004,"height":798,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/css/card.png";
							}
							
							return target[name];
						}
					});

const background = new Proxy({"src":"/_astro/bg-img.DGvvCCjx.png","width":978,"height":558,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/css/bg-img.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Colors & Backgrounds",
  "description": "အရောင်များနှင့် နောက်ခံများ အသုံးပြုခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "colors-စာလုံးအရောင်",
    "text": "Colors (စာလုံးအရောင်)"
  }, {
    "depth": 3,
    "slug": "backgrounds-နောက်ခံ",
    "text": "Backgrounds (နောက်ခံ)"
  }, {
    "depth": 4,
    "slug": "background-color",
    "text": "Background Color"
  }, {
    "depth": 4,
    "slug": "background-image",
    "text": "Background Image"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "အရောင်များ",
      "set:html": "<p>Website တစ်ခုရဲ့ စိတ်ခံစားမှု (Mood) ကို အရောင်တွေက ဖန်တီးပေးပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"colors-စာလုံးအရောင်\">Colors (စာလုံးအရောင်)</h3><a class=\"sl-anchor-link\" href=\"#colors-စာလုံးအရောင်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Colors (စာလုံးအရောင်)”</span></a></div>\n<p>စာသားတွေရဲ့ အရောင်ကို ပြောင်းဖို့ <code dir=\"auto\">color</code> property ကို သုံးပါတယ်။</p>\n<p>အရောင်သတ်မှတ်နည်း (၃) မျိုး ရှိပါတယ်:</p>\n<ol>\n<li><strong>Color Name:</strong> <code dir=\"auto\">red</code>, <code dir=\"auto\">blue</code>, <code dir=\"auto\">green</code> (အလွယ်တကူ စမ်းဖို့ ကောင်း)</li>\n<li><strong>Hex Code:</strong> <code dir=\"auto\">#FF0000</code>, <code dir=\"auto\">#000000</code> (အတိအကျ လိုချင်ရင် သုံး)</li>\n<li><strong>RGB:</strong> <code dir=\"auto\">rgb(255, 0, 0)</code> (အနီ၊ အစိမ်း၊ အပြာ ရောစပ်ပုံ)</li>\n</ol>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#FF6D6D;--1:#984E4D\">h1</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">color</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#7FDBCA;--1:#096E72\">tomato</span><span style=\"--0:#D6DEEB;--1:#403F53\">; </span><span style=\"--0:#919F9F;--1:#5F636F\">/* Color Name */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#FF6D6D;--1:#984E4D\">p</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">color</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">#</span><span style=\"--0:#FFEB95\">333333</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">; </span><span style=\"--0:#919F9F;--1:#5F636F\">/* Hex Code */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"h1 {  color: tomato; /* Color Name */}p {  color: #333333; /* Hex Code */}\"><div></div></button></div></figure></div>\n"
    }), createVNode($$ContentImage, {
      src: color,
      alt: "color examples"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"backgrounds-နောက်ခံ\">Backgrounds (နောက်ခံ)</h3><a class=\"sl-anchor-link\" href=\"#backgrounds-နောက်ခံ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Backgrounds (နောက်ခံ)”</span></a></div>\n<p>Element တစ်ခုရဲ့ နောက်ခံကို ပြောင်းဖို့ <code dir=\"auto\">background-color</code> သို့မဟုတ် <code dir=\"auto\">background-image</code> ကို သုံးပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"background-color\">Background Color</h4><a class=\"sl-anchor-link\" href=\"#background-color\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Background Color”</span></a></div>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#FF6D6D;--1:#984E4D\">body</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">background-color</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">#</span><span style=\"--0:#FFEB95\">f0f0f0</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">; </span><span style=\"--0:#919F9F;--1:#5F636F\">/* တစ်မျက်နှာလုံး မီးခိုးရောင်ဖျော့ဖျော့ */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.card</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">background-color</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#7FDBCA;--1:#096E72\">white</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"body {  background-color: #f0f0f0; /* တစ်မျက်နှာလုံး မီးခိုးရောင်ဖျော့ဖျော့ */}.card {  background-color: white;}\"><div></div></button></div></figure></div>\n"
    }), createVNode($$ContentImage, {
      src: card,
      alt: "card background"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"background-image\">Background Image</h4><a class=\"sl-anchor-link\" href=\"#background-image\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Background Image”</span></a></div>\n<p>ပုံတစ်ပုံကို နောက်ခံအဖြစ် ထားချင်ရင် <code dir=\"auto\">url()</code> နဲ့ ညွှန်းပေးရပါတယ်။</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.hero-section</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">background-image</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#C5E478;--1:#3B61B0\">url</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">hero-bg.jpg</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">background-size</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6D6D;--1:#984E4D\">cover</span><span style=\"--0:#D6DEEB;--1:#403F53\">; </span><span style=\"--0:#919F9F;--1:#5F636F\">/* ပုံကို အပြည့်ဖြန့်မယ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">background-position</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6D6D;--1:#984E4D\">center</span><span style=\"--0:#D6DEEB;--1:#403F53\">; </span><span style=\"--0:#919F9F;--1:#5F636F\">/* ပုံကို အလယ်တည့်တည့် ထားမယ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".hero-section {  background-image: url(&#x27;hero-bg.jpg&#x27;);  background-size: cover; /* ပုံကို အပြည့်ဖြန့်မယ် */  background-position: center; /* ပုံကို အလယ်တည့်တည့် ထားမယ် */}\"><div></div></button></div></figure></div>\n"
    }), createVNode($$ContentImage, {
      src: background,
      alt: "background image"
    }), "\n", createVNode($$Aside, {
      type: "tip",
      "set:html": "<p>စာလုံးအရောင်နဲ့ နောက်ခံအရောင်ကို <strong>Contrast</strong> (ကွဲပြားမှု) ရှိအောင် ထားပါ။\nဥပမာ - နောက်ခံ အမည်းဆိုရင် စာလုံး အဖြူ ထားမှ ဖတ်ရ လွယ်ပါမယ်။</p>"
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

const url = "src/content/docs/css/visuals/colors.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/css/visuals/colors.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/css/visuals/colors.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
