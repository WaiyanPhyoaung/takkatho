import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const zIndexImg = new Proxy({"src":"/_astro/z-index.doQw1lZK.png","width":920,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/css/z-index.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Z-Index Property",
  "description": "Element များကို အထပ်လိုက် နေရာချထားခြင်း (Stacking Order)"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "အခြေခံ-သဘောတရား",
    "text": "အခြေခံ သဘောတရား"
  }, {
    "depth": 3,
    "slug": "အရေးကြီးဆုံး-အချက်-️",
    "text": "အရေးကြီးဆုံး အချက် ⚠️"
  }, {
    "depth": 3,
    "slug": "ဥပမာ",
    "text": "ဥပမာ"
  }, {
    "depth": 3,
    "slug": "stacking-context-အထပ်များ-ဖွဲ့စည်းပုံ",
    "text": "Stacking Context (အထပ်များ ဖွဲ့စည်းပုံ)"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ဘယ်သူ အပေါ်က နေမလဲ?",
      "set:html": "<p>Element တွေ တစ်ခုနဲ့ တစ်ခု ထပ်နေတဲ့အခါ (Overlapping) ဘယ် Element က အပေါ်က နေမလဲ ဆိုတာ <code dir=\"auto\">z-index</code> နဲ့ သတ်မှတ်ရပါတယ်။\nစာရွက်တွေ တစ်ရွက်ပေါ် တစ်ရွက် ထပ်ထားသလို သဘောတရား ဖြစ်ပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အခြေခံ-သဘောတရား\">အခြေခံ သဘောတရား</h3><a class=\"sl-anchor-link\" href=\"#အခြေခံ-သဘောတရား\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အခြေခံ သဘောတရား”</span></a></div>\n<p><code dir=\"auto\">z-index</code> တန်ဖိုး များတဲ့ Element က အပေါ်မှာ ရှိနေမှာ ဖြစ်ပြီး၊ တန်ဖိုး နည်းတဲ့ Element က အောက်မှာ ရှိနေမှာ ဖြစ်ပါတယ်။</p>\n<ul>\n<li><strong>Positive Value (ဥပမာ <code dir=\"auto\">1</code>, <code dir=\"auto\">10</code>, <code dir=\"auto\">100</code>)</strong>: ပုံမှန်ထက် ပိုမြင့်တဲ့ အထပ်။</li>\n<li><strong>Negative Value (ဥပမာ <code dir=\"auto\">-1</code>)</strong>: ပုံမှန်ထက် နိမ့်တဲ့ အထပ် (စာသားတွေရဲ့ နောက်ခံ Background အဖြစ် ထားချင်တဲ့အခါ သုံးပါတယ်)။</li>\n<li><strong>Auto</strong>: Default တန်ဖိုးပါ။ မိဘရဲ့ Stack level အတိုင်း နေပါတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အရေးကြီးဆုံး-အချက်-️\">အရေးကြီးဆုံး အချက် ⚠️</h3><a class=\"sl-anchor-link\" href=\"#အရေးကြီးဆုံး-အချက်-️\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အရေးကြီးဆုံး အချက် ⚠️”</span></a></div>\n<p><code dir=\"auto\">z-index</code> အလုပ်လုပ်ဖို့အတွက် အဲဒီ Element မှာ <code dir=\"auto\">position</code> property တစ်ခုခု (<code dir=\"auto\">relative</code>, <code dir=\"auto\">absolute</code>, <code dir=\"auto\">fixed</code>, <code dir=\"auto\">sticky</code>) ပေးထားဖို့ လိုပါတယ်။\n(<code dir=\"auto\">static</code> ဖြစ်နေရင် z-index အလုပ်မလုပ်ပါဘူး)</p>\n<blockquote>\n<p><strong>Note:</strong> Flexbox သို့မဟုတ် Grid item တွေမှာတော့ <code dir=\"auto\">position</code> မပေးထားလည်း <code dir=\"auto\">z-index</code> သုံးလို့ ရပါတယ်။</p>\n</blockquote>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဥပမာ\">ဥပမာ</h3><a class=\"sl-anchor-link\" href=\"#ဥပမာ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဥပမာ”</span></a></div>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.box-bottom</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">position</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6D6D;--1:#984E4D\">relative</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">z-index</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">; </span><span style=\"--0:#919F9F;--1:#5F636F\">/* အောက်ဆုံးမှာ နေမယ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">background-color</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#7FDBCA;--1:#096E72\">red</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.box-middle</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">position</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6D6D;--1:#984E4D\">absolute</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">z-index</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#F78C6C;--1:#AA0982\">5</span><span style=\"--0:#D6DEEB;--1:#403F53\">; </span><span style=\"--0:#919F9F;--1:#5F636F\">/* အလယ်မှာ နေမယ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">background-color</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#7FDBCA;--1:#096E72\">yellow</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">top</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">20</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">left</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">20</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.box-top</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">position</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6D6D;--1:#984E4D\">absolute</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">z-index</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#F78C6C;--1:#AA0982\">10</span><span style=\"--0:#D6DEEB;--1:#403F53\">; </span><span style=\"--0:#919F9F;--1:#5F636F\">/* အပေါ်ဆုံးမှာ နေမယ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">background-color</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#7FDBCA;--1:#096E72\">blue</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">top</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">40</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">left</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">40</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".box-bottom {  position: relative;  z-index: 1; /* အောက်ဆုံးမှာ နေမယ် */  background-color: red;}.box-middle {  position: absolute;  z-index: 5; /* အလယ်မှာ နေမယ် */  background-color: yellow;  top: 20px;  left: 20px;}.box-top {  position: absolute;  z-index: 10; /* အပေါ်ဆုံးမှာ နေမယ် */  background-color: blue;  top: 40px;  left: 40px;}\"><div></div></button></div></figure></div>\n"
    }), createVNode($$ContentImage, {
      src: zIndexImg,
      alt: "Z-Index Property Example",
      height: "300"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"stacking-context-အထပ်များ-ဖွဲ့စည်းပုံ\">Stacking Context (အထပ်များ ဖွဲ့စည်းပုံ)</h3><a class=\"sl-anchor-link\" href=\"#stacking-context-အထပ်များ-ဖွဲ့စည်းပုံ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Stacking Context (အထပ်များ ဖွဲ့စည်းပုံ)”</span></a></div>\n<p>ဒါက နည်းနည်း ရှုပ်ထွေးပေမယ့် သိထားသင့်ပါတယ်။\n<strong>“Parent Element ရဲ့ z-index က နိမ့်နေရင်၊ သားသမီး Element က z-index ဘယ်လောက်များများ မိဘရဲ့ အပေါ်က Element ကို ကျော်တက်လို့ မရပါဘူး”</strong></p>\n<p>ဥပမာ -</p>\n<ul>\n<li><strong>Parent A</strong> (<code dir=\"auto\">z-index: 1</code>)\n<ul>\n<li>Child A1 (<code dir=\"auto\">z-index: 9999</code>)</li>\n</ul>\n</li>\n<li><strong>Parent B</strong> (<code dir=\"auto\">z-index: 2</code>)\n<ul>\n<li>Child B1 (<code dir=\"auto\">z-index: 1</code>)</li>\n</ul>\n</li>\n</ul>\n<p>ဒီနေရာမှာ <strong>Parent B</strong> က <strong>Parent A</strong> ထက် မြင့်တဲ့အတွက်၊ Parent B ရဲ့ သားသမီး <strong>Child B1</strong> (z-index: 1) က <strong>Child A1</strong> (z-index: 9999) ထက် အပေါ်မှာ ရှိနေမှာ ဖြစ်ပါတယ်။</p>"
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

const url = "src/content/docs/css/positioning/z-index.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/css/positioning/z-index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/css/positioning/z-index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
