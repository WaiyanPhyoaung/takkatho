import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const hover = new Proxy({"src":"/_astro/hover.CcmyaSvE.png","width":1003,"height":290,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/css/hover.png";
							}
							
							return target[name];
						}
					});

const pseudoClasses = new Proxy({"src":"/_astro/pseudo-classes.Kwh7W5Q6.png","width":1224,"height":686,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/css/pseudo-classes.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Pseudo-classes",
  "description": "အခြေအနေအလိုက် ဒီဇိုင်းပြောင်းခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "user-action-pseudo-classes",
    "text": "User Action Pseudo-classes"
  }, {
    "depth": 3,
    "slug": "structural-pseudo-classes",
    "text": "Structural Pseudo-classes"
  }, {
    "depth": 3,
    "slug": "link-pseudo-classes",
    "text": "Link Pseudo-classes"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "အခြေအနေများ",
      "set:html": "<p>Element တစ်ခုရဲ့ “အခြေအနေ” (State) ပေါ်မူတည်ပြီး ဒီဇိုင်းပြောင်းချင်ရင် Pseudo-classes ကို သုံးပါတယ်။\nSelector နောက်မှာ ကော်လံ (<code dir=\"auto\">:</code>) ခံပြီး ရေးရပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"user-action-pseudo-classes\">User Action Pseudo-classes</h3><a class=\"sl-anchor-link\" href=\"#user-action-pseudo-classes\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “User Action Pseudo-classes”</span></a></div>\n<p>User က တစ်ခုခု လုပ်လိုက်တဲ့အချိန်မှာ ပြောင်းလဲတာတွေပါ။</p>\n<ul>\n<li><code dir=\"auto\">:hover</code> - Mouse တင်လိုက်တဲ့အချိန်။</li>\n<li><code dir=\"auto\">:active</code> - Mouse နှိပ်ထားတဲ့အချိန် (Click နှိပ်ပြီး မလွှတ်ခင်)။</li>\n<li><code dir=\"auto\">:focus</code> - Input box ထဲကို စာရိုက်ဖို့ နှိပ်လိုက်တဲ့အချိန် (Keyboard focus ရချိန်)။</li>\n<li><code dir=\"auto\">:focus-within</code> - ကိုယ်တိုင် (သို့) ကိုယ့်ရဲ့ Child တစ်ခုခု Focus ရနေတဲ့အချိန်။</li>\n<li><code dir=\"auto\">:focus-visible</code> - Keyboard မှာ Tab နှိပ်ပြီး သွားတဲ့အချိန်မှာပဲ Focus ပြချင်တဲ့အခါ (Mouse နဲ့ နှိပ်ရင် မပြဘူး)။</li>\n</ul>\n"
    }), createVNode($$Aside, {
      type: "tip",
      title: "Focus ကွာခြားချက်များ",
      "set:html": "<ul>\n<li><strong>:focus</strong> - Focus ရတာနဲ့ အလုပ်လုပ်ပါတယ်။ (Mouse နဲ့ နှိပ်နှိပ်၊ Keyboard နဲ့ သွားသွား)</li>\n<li><strong>:focus-within</strong> - Parent Element တစ်ခုက သူ့အထဲက Child တစ်ခုခု Focus ရသွားရင် Parent ပါ Style ပြောင်းချင်တဲ့အခါ သုံးပါတယ်။ (ဥပမာ - Form တစ်ခုလုံးကို Highlight လုပ်တာမျိုး)</li>\n<li><strong>:focus-visible</strong> - User က Keyboard သုံးနေမှ (Tab နှိပ်မှ) Focus Ring ပြပြီး၊ Mouse နဲ့ နှိပ်ရင် မပြချင်တဲ့အခါ သုံးပါတယ်။ (UX ပိုကောင်းပါတယ်)</li>\n</ul>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#FF6D6D;--1:#984E4D\">button</span><span style=\"--0:#C5E478;--1:#3B61B0\">:hover</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">background-color</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#7FDBCA;--1:#096E72\">green</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#FF6D6D;--1:#984E4D\">input</span><span style=\"--0:#C5E478;--1:#3B61B0\">:focus</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">border-color</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#7FDBCA;--1:#096E72\">blue</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">outline</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6D6D;--1:#984E4D\">none</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"button:hover {  background-color: green;}input:focus {  border-color: blue;  outline: none;}\"><div></div></button></div></figure></div>\n"
    }), createVNode($$ContentImage, {
      src: hover,
      alt: "pseudo classes"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"structural-pseudo-classes\">Structural Pseudo-classes</h3><a class=\"sl-anchor-link\" href=\"#structural-pseudo-classes\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Structural Pseudo-classes”</span></a></div>\n<p>Element တွေရဲ့ အစီအစဉ်ပေါ် မူတည်ပြီး ရွေးတာပါ။</p>\n<ul>\n<li><code dir=\"auto\">:first-child</code> - ပထမဆုံး child။</li>\n<li><code dir=\"auto\">:last-child</code> - နောက်ဆုံး child။</li>\n<li><code dir=\"auto\">:nth-child(n)</code> - n ခုမြောက် child (ဥပမာ - ဇယားကွက်တွေမှာ တစ်ကြောင်းခြား အရောင်ပြောင်းချင်ရင်)။</li>\n</ul>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">/* စာရင်းထဲက ပထမဆုံး item */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#FF6D6D;--1:#984E4D\">li</span><span style=\"--0:#C5E478;--1:#3B61B0\">:first-child</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">font-weight</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6D6D;--1:#984E4D\">bold</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">color</span><span style=\"--0:#D6DEEB;--1:#403F53\"> : </span><span style=\"--0:#7FDBCA;--1:#096E72\">red</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">/* မ (1, 3, 5...) တွေကို အရောင်ပြောင်း */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#FF6D6D;--1:#984E4D\">tr</span><span style=\"--0:#C5E478;--1:#3B61B0\">:nth-child</span><span style=\"--0:#C792EA;--1:#8844AE\">(</span><span style=\"--0:#7FDBCA;--1:#096E72\">odd</span><span style=\"--0:#C792EA;--1:#8844AE\">)</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">background-color</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#7FDBCA;--1:#096E72\">purple</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"/* စာရင်းထဲက ပထမဆုံး item */li:first-child {  font-weight: bold;  color : red;}/* မ (1, 3, 5...) တွေကို အရောင်ပြောင်း */tr:nth-child(odd) {  background-color: purple;}\"><div></div></button></div></figure></div>\n"
    }), createVNode($$ContentImage, {
      src: pseudoClasses,
      alt: "pseudo classes"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"link-pseudo-classes\">Link Pseudo-classes</h3><a class=\"sl-anchor-link\" href=\"#link-pseudo-classes\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Link Pseudo-classes”</span></a></div>\n<p>Link (<code dir=\"auto\">&#x3C;a></code>) တွေအတွက် သီးသန့်ပါ။</p>\n<ul>\n<li><code dir=\"auto\">:visited</code> - ဝင်ကြည့်ပြီးသား Link။</li>\n<li><code dir=\"auto\">:link</code> - မဝင်ကြည့်ရသေးတဲ့ Link။</li>\n</ul>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#FF6D6D;--1:#984E4D\">a</span><span style=\"--0:#C5E478;--1:#3B61B0\">:visited</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">color</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#7FDBCA;--1:#096E72\">purple</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"a:visited {  color: purple;}\"><div></div></button></div></figure></div>"
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

const url = "src/content/docs/css/advanced-selectors/pseudo-classes.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/css/advanced-selectors/pseudo-classes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/css/advanced-selectors/pseudo-classes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
