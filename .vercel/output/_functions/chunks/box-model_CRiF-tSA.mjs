import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const boxModel = new Proxy({"src":"/_astro/box.DjdPh1bE.jpg","width":757,"height":474,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/css/box.jpg";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "The Box Model",
  "description": "CSS ၏ အရေးအကြီးဆုံး သဘောတရား"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "box-model-ဆိုတာ-ဘာလဲ",
    "text": "Box Model ဆိုတာ ဘာလဲ?"
  }, {
    "depth": 3,
    "slug": "ဥပမာ-မြင်ကွင်း",
    "text": "ဥပမာ မြင်ကွင်း"
  }, {
    "depth": 3,
    "slug": "box-sizing-အရေးကြီး",
    "text": "Box Sizing (အရေးကြီး!)"
  }, {
    "depth": 3,
    "slug": "margin-collapse-margin-ပေါင်းသွားခြင်း",
    "text": "Margin Collapse (Margin ပေါင်းသွားခြင်း)"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "သေတ္တာလေးများ",
      "set:html": "<p>Webpage ပေါ်က Element တိုင်းဟာ <strong>လေးထောင့်သေတ္တာ (Box)</strong> လေးတွေ ဖြစ်ပါတယ်။\nဒီသဘောတရားကို နားလည်မှ Layout ချရတာ အဆင်ပြေမှာပါ။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"box-model-ဆိုတာ-ဘာလဲ\">Box Model ဆိုတာ ဘာလဲ?</h3><a class=\"sl-anchor-link\" href=\"#box-model-ဆိုတာ-ဘာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Box Model ဆိုတာ ဘာလဲ?”</span></a></div>\n<p>Element တစ်ခုမှာ အလွှာ (၄) ခု ရှိပါတယ်။ အတွင်းဆုံးကနေ အပြင်ဘက်ကို ကြည့်မယ်ဆိုရင်:</p>\n<ol>\n<li><strong>Content:</strong> စာသား သို့မဟုတ် ပုံ ရှိတဲ့ နေရာ (အနှစ်)။</li>\n<li><strong>Padding:</strong> Content နဲ့ Border ကြားက အကွာအဝေး (အသား)။</li>\n<li><strong>Border:</strong> ဘောင် (အခွံ)။</li>\n<li><strong>Margin:</strong> တခြား Box တွေနဲ့ ကိုယ့် Box ကြားက အကွာအဝေး (အပြင်စည်း)။</li>\n</ol>\n"
    }), createVNode($$ContentImage, {
      src: boxModel,
      alt: "CSS Box Model"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဥပမာ-မြင်ကွင်း\">ဥပမာ မြင်ကွင်း</h3><a class=\"sl-anchor-link\" href=\"#ဥပမာ-မြင်ကွင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဥပမာ မြင်ကွင်း”</span></a></div>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.box</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">width</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">200</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;      </span><span style=\"--0:#919F9F;--1:#5F636F\">/* Content အကျယ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">padding</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">20</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;     </span><span style=\"--0:#919F9F;--1:#5F636F\">/* Content ဘေးက အသား */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">border</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">5</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#FF6D6D;--1:#984E4D\">solid</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#7FDBCA;--1:#096E72\">black</span><span style=\"--0:#D6DEEB;--1:#403F53\">; </span><span style=\"--0:#919F9F;--1:#5F636F\">/* ဘောင် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">margin</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">30</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;      </span><span style=\"--0:#919F9F;--1:#5F636F\">/* ဘေးက Box တွေနဲ့ ကွာမယ့် အကွာအဝေး */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".box {  width: 200px;      /* Content အကျယ် */  padding: 20px;     /* Content ဘေးက အသား */  border: 5px solid black; /* ဘောင် */  margin: 30px;      /* ဘေးက Box တွေနဲ့ ကွာမယ့် အကွာအဝေး */}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"box-sizing-အရေးကြီး\">Box Sizing (အရေးကြီး!)</h3><a class=\"sl-anchor-link\" href=\"#box-sizing-အရေးကြီး\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Box Sizing (အရေးကြီး!)”</span></a></div>\n<p>ပုံမှန်အားဖြင့် <code dir=\"auto\">width</code> သတ်မှတ်ရင် Content ရဲ့ အကျယ်ပဲ ဖြစ်ပါတယ်။ Padding နဲ့ Border ပေါင်းလိုက်ရင် Box က ကြီးသွားတတ်ပါတယ်။\nဒါကို ဖြေရှင်းဖို့ <code dir=\"auto\">box-sizing: border-box;</code> ကို သုံးသင့်ပါတယ်။</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#096E72\">*</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">box-sizing</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6D6D;--1:#984E4D\">border-box</span><span style=\"--0:#D6DEEB;--1:#403F53\">; </span><span style=\"--0:#919F9F;--1:#5F636F\">/* Padding နဲ့ Border ကို width ထဲမှာပဲ ထည့်တွက်မယ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"* {  box-sizing: border-box; /* Padding နဲ့ Border ကို width ထဲမှာပဲ ထည့်တွက်မယ် */}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"margin-collapse-margin-ပေါင်းသွားခြင်း\">Margin Collapse (Margin ပေါင်းသွားခြင်း)</h3><a class=\"sl-anchor-link\" href=\"#margin-collapse-margin-ပေါင်းသွားခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Margin Collapse (Margin ပေါင်းသွားခြင်း)”</span></a></div>\n<p>အပေါ်အောက် ကပ်နေတဲ့ Block Element နှစ်ခုမှာ၊ တစ်ခုရဲ့ Bottom Margin နဲ့ နောက်တစ်ခုရဲ့ Top Margin တွေ့ရင်၊ ပေါင်းမသွားဘဲ <strong>အများဆုံးတန်ဖိုး တစ်ခုတည်း</strong> ကိုပဲ ယူပါတယ်။</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#FF6D6D;--1:#984E4D\">h1</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { </span><span style=\"--0:#80CBC4;--1:#096E72\">margin-bottom</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">20</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">; }</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#FF6D6D;--1:#984E4D\">p</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { </span><span style=\"--0:#80CBC4;--1:#096E72\">margin-top</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">30</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">; }</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">/* ကြားထဲမှာ 50px မကွာဘဲ၊ 30px (အများဆုံးတန်ဖိုး) ပဲ ကွာပါလိမ့်မယ် */</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"h1 { margin-bottom: 20px; }p { margin-top: 30px; }/* ကြားထဲမှာ 50px မကွာဘဲ၊ 30px (အများဆုံးတန်ဖိုး) ပဲ ကွာပါလိမ့်မယ် */\"><div></div></button></div></figure></div>\n"
    }), createVNode($$Aside, {
      type: "tip",
      "set:html": "<p>Project စစချင်းမှာ <code dir=\"auto\">* { box-sizing: border-box; }</code> လို့ ကြေညာထားတာ အကောင်းဆုံး Practice ပါ။\nLayout တွေ တွက်ရတာ ပိုလွယ်ကူသွားပါလိမ့်မယ်။</p>"
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

const url = "src/content/docs/css/box-model/box-model.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/css/box-model/box-model.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/css/box-model/box-model.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
