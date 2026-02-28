import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const selectImage = new Proxy({"src":"/_astro/select.BescOoa4.png","width":2051,"height":1205,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/html/select.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Dropdowns & Options",
  "description": "Dropdowns & Options"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "textareas",
    "text": "Textareas"
  }, {
    "depth": 3,
    "slug": "buttons",
    "text": "Buttons"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Dropdown menu တွေအတွက် <code dir=\"auto\">&#x3C;select></code> ကိုသုံးပြီး၊ ရွေးချယ်စရာတွေအတွက် <code dir=\"auto\">&#x3C;option></code> ကို သုံးပါတယ်။</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"html\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">for</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">country</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span><span style=\"--0:#D6DEEB;--1:#403F53\">Country:</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">select</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">country</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">country</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">option</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">value</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">hk</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span><span style=\"--0:#D6DEEB;--1:#403F53\">Hong Kong</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">option</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">option</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">value</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">uk</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span><span style=\"--0:#D6DEEB;--1:#403F53\">United Kingdom</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">option</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">option</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">value</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">us</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span><span style=\"--0:#D6DEEB;--1:#403F53\">United States</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">option</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">select</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<label for=&#x22;country&#x22;>Country:</label><select id=&#x22;country&#x22; name=&#x22;country&#x22;>  <option value=&#x22;hk&#x22;>Hong Kong</option>  <option value=&#x22;uk&#x22;>United Kingdom</option>  <option value=&#x22;us&#x22;>United States</option></select>\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"textareas\">Textareas</h3><a class=\"sl-anchor-link\" href=\"#textareas\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Textareas”</span></a></div>\n<p>စာကြောင်းအများကြီးထည့်ဖို့အတွက် (ဥပမာ message ဒါမှမဟုတ် comment) <code dir=\"auto\">&#x3C;textarea></code> ကို သုံးပါတယ်။</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"html\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">for</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">message</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span><span style=\"--0:#D6DEEB;--1:#403F53\">Message:</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">>&#x3C;</span><span style=\"--0:#CAECE6\">br</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">textarea</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">message</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">message</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">rows</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">5</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">cols</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">30</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">>&#x3C;/</span><span style=\"--0:#CAECE6\">textarea</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<label for=&#x22;message&#x22;>Message:</label><br><textarea id=&#x22;message&#x22; name=&#x22;message&#x22; rows=&#x22;5&#x22; cols=&#x22;30&#x22;></textarea>\"><div></div></button></div></figure></div>\n"
    }), createVNode($$ContentImage, {
      src: selectImage,
      alt: "select, input and textarea",
      height: 400
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"buttons\">Buttons</h3><a class=\"sl-anchor-link\" href=\"#buttons\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Buttons”</span></a></div>\n<p>Form တွေမှာ data တွေကို submit လုပ်ဖို့ ဒါမှမဟုတ် reset လုပ်ဖို့ button တွေ လိုအပ်ပါတယ်-</p>\n<ul>\n<li>\n<p><code dir=\"auto\">submit</code>: Form data တွေကို server ဆီ ပို့ပေးတယ်။</p>\n</li>\n<li>\n<p><code dir=\"auto\">reset</code>: Input field ထဲက data အားလုံးကို ရှင်းပေးတယ်။</p>\n</li>\n<li>\n<p><code dir=\"auto\">button</code>: JavaScript နဲ့ အလုပ်လုပ်ဖို့် ခလုတ်။</p>\n</li>\n</ul>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"html\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">input</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">type</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">submit</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">value</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Send</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">input</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">type</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">reset</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">value</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Clear</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<input type=&#x22;submit&#x22; value=&#x22;Send&#x22;><input type=&#x22;reset&#x22; value=&#x22;Clear&#x22;>\"><div></div></button></div></figure></div>\n"
    }), createVNode($$Aside, {
      type: "tip",
      title: "အနှစ်ချုပ်",
      "set:html": "<ul>\n<li>\n<p>Form တွေက user data တွေကို စုဆောင်းပြီး server ဆီ ပို့ပေးပါတယ်။</p>\n</li>\n<li>\n<p><code dir=\"auto\">&#x3C;form></code> tag က <code dir=\"auto\">action</code> နဲ့ <code dir=\"auto\">method</code> attribute တွေနဲ့အတူ အဓိက container အဖြစ် အလုပ်လုပ်ပါတယ်။</p>\n</li>\n<li>\n<p><code dir=\"auto\">&#x3C;input></code> မှာ <code dir=\"auto\">text</code>, <code dir=\"auto\">password</code>, <code dir=\"auto\">email</code> စတဲ့ field အမျိုးအစားမျိုးစုံ ရှိပါတယ်။</p>\n</li>\n<li>\n<p><code dir=\"auto\">&#x3C;label></code> က accessibility နဲ့ user experience ကို ပိုကောင်းစေပါတယ်။</p>\n</li>\n<li>\n<p><code dir=\"auto\">&#x3C;select></code> နဲ့ <code dir=\"auto\">&#x3C;textarea></code> က dropdown တွေနဲ့ စာကြောင်းအများကြီးထည့်တာတွေကို ကိုင်တွယ်ပေးပါတယ်။</p>\n</li>\n<li>\n<p>Button တွေ (<code dir=\"auto\">submit</code>, <code dir=\"auto\">reset</code>) က form submit လုပ်တာနဲ့ input value ရှင်းတာတွေ အတွက်ဖြစ်ပါတယ်။</p>\n</li>\n<li>\n<p>ရှင်းလင်းလွယ်ကူမှုနဲ့ အသုံးပြုရလွယ်အောင် form field တွေကို label အမြဲတပ်ပြီး validate လုပ်သင့်ပါတယ်။</p>\n</li>\n</ul>"
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

const url = "src/content/docs/html/form/dropdown.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/html/form/dropdown.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/html/form/dropdown.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
