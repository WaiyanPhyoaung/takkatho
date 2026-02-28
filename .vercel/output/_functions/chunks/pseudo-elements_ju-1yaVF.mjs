import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const before = new Proxy({"src":"/_astro/before.Bkp4SMkI.png","width":2242,"height":220,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/css/before.png";
							}
							
							return target[name];
						}
					});

const content = new Proxy({"src":"/_astro/content.u04e4iqH.png","width":634,"height":106,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/css/content.png";
							}
							
							return target[name];
						}
					});

const selection = new Proxy({"src":"/_astro/selection.Bad5wdHp.png","width":1368,"height":180,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/css/selection.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Pseudo-elements",
  "description": "CSS ဖြင့် Element အသစ် ဖန်တီးခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "before-နှင့်-after",
    "text": "::before နှင့် ::after"
  }, {
    "depth": 3,
    "slug": "အလှဆင်ရာတွင်-အသုံးပြုခြင်း",
    "text": "အလှဆင်ရာတွင် အသုံးပြုခြင်း"
  }, {
    "depth": 3,
    "slug": "အခြား-pseudo-elements",
    "text": "အခြား Pseudo-elements"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "တစ္ဆေ Element များ",
      "set:html": "<p>HTML မှာ မရှိဘဲ CSS ကနေ Element အတုတွေ ဖန်တီးပြီး ထည့်ပေးလို့ ရပါတယ်။\nSelector နောက်မှာ ကော်လံနှစ်ခု (<code dir=\"auto\">::</code>) ခံပြီး ရေးရပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"before-နှင့်-after\">::before နှင့် ::after</h3><a class=\"sl-anchor-link\" href=\"#before-နှင့်-after\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “::before နှင့် ::after”</span></a></div>\n<p>Element ရဲ့ အရှေ့ (<code dir=\"auto\">::before</code>) နဲ့ အနောက် (<code dir=\"auto\">::after</code>) မှာ Content ထည့်ပေးတာပါ။\n<code dir=\"auto\">content: \"\"</code> property မပါမဖြစ် ပါရပါမယ်။</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">/* ခေါင်းစဉ်ရှေ့မှာ မီးတောက်လေး ထည့်မယ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#FF6D6D;--1:#984E4D\">h1</span><span style=\"--0:#C5E478;--1:#3B61B0\">::before</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">content</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">🔥</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">margin-right</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">10</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">/* စာကြောင်းဆုံးရင် \"Read More\" လို့ ထည့်မယ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.excerpt::after</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">content</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\"> Read More...</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">color</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#7FDBCA;--1:#096E72\">blue</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">font-size</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">0.8</span><span style=\"--0:#FFEB95\">em</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"/* ခေါင်းစဉ်ရှေ့မှာ မီးတောက်လေး ထည့်မယ် */h1::before {  content: &#x22;🔥&#x22;;  margin-right: 10px;}/* စာကြောင်းဆုံးရင် &#x22;Read More&#x22; လို့ ထည့်မယ် */.excerpt::after {  content: &#x22; Read More...&#x22;;  color: blue;  font-size: 0.8em;}\"><div></div></button></div></figure></div>\n"
    }), createVNode($$ContentImage, {
      src: before,
      alt: "before sample"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အလှဆင်ရာတွင်-အသုံးပြုခြင်း\">အလှဆင်ရာတွင် အသုံးပြုခြင်း</h3><a class=\"sl-anchor-link\" href=\"#အလှဆင်ရာတွင်-အသုံးပြုခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အလှဆင်ရာတွင် အသုံးပြုခြင်း”</span></a></div>\n<p><code dir=\"auto\">content: \"\"</code> ကို အလွတ်ထားပြီး၊ Width/Height ပေးကာ ဒီဇိုင်းဆွဲလို့ ရပါတယ်။</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">/* Button ပေါ်မှာ Mouse တင်ရင် အောက်က မျဉ်းကြောင်းလေး ပြေးလာတာမျိုး */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.nav-link</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">position</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6D6D;--1:#984E4D\">relative</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.nav-link::after</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">content</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">position</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6D6D;--1:#984E4D\">absolute</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">bottom</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">left</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">width</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">0</span><span style=\"--0:#FFEB95\">%</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">height</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">2</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">background-color</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#7FDBCA;--1:#096E72\">red</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">transition</span><span style=\"--0:#D6DEEB;--1:#403F53\">: width </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">0.3</span><span style=\"--0:#FFEB95\">s</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.nav-link:hover::after</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">width</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">100</span><span style=\"--0:#FFEB95\">%</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">; </span><span style=\"--0:#919F9F;--1:#5F636F\">/* Hover လုပ်ရင် မျဉ်းကြောင်းက အပြည့် ဖြစ်သွားမယ် */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"/* Button ပေါ်မှာ Mouse တင်ရင် အောက်က မျဉ်းကြောင်းလေး ပြေးလာတာမျိုး */.nav-link {  position: relative;}.nav-link::after {  content: &#x22;&#x22;;  position: absolute;  bottom: 0;  left: 0;  width: 0%;  height: 2px;  background-color: red;  transition: width 0.3s;}.nav-link:hover::after {  width: 100%; /* Hover လုပ်ရင် မျဉ်းကြောင်းက အပြည့် ဖြစ်သွားမယ် */}\"><div></div></button></div></figure></div>\n"
    }), createVNode($$ContentImage, {
      src: content,
      alt: "content sample"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အခြား-pseudo-elements\">အခြား Pseudo-elements</h3><a class=\"sl-anchor-link\" href=\"#အခြား-pseudo-elements\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အခြား Pseudo-elements”</span></a></div>\n<ul>\n<li><code dir=\"auto\">::first-letter</code> - ပထမဆုံး စာလုံး (Drop cap လုပ်ချင်ရင် သုံး)။</li>\n<li><code dir=\"auto\">::first-line</code> - ပထမဆုံး စာကြောင်း။</li>\n<li><code dir=\"auto\">::selection</code> - စာသားကို Mouse နဲ့ Select မှတ်လိုက်ရင် ပေါ်မယ့် အရောင်။</li>\n</ul>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#FF6D6D;--1:#984E4D\">p</span><span style=\"--0:#C5E478;--1:#3B61B0\">::selection</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">background-color</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#7FDBCA;--1:#096E72\">yellow</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">color</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#7FDBCA;--1:#096E72\">black</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"p::selection {  background-color: yellow;  color: black;}\"><div></div></button></div></figure></div>\n"
    }), createVNode($$ContentImage, {
      src: selection,
      alt: "selection sample"
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

const url = "src/content/docs/css/advanced-selectors/pseudo-elements.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/css/advanced-selectors/pseudo-elements.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/css/advanced-selectors/pseudo-elements.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
