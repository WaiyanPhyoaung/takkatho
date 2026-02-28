import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import 'clsx';

const frontmatter = {
  "title": "ဖိုင်နှင့် ဖိုဒါများ စီမံခြင်း",
  "description": "mkdir, touch, cp, mv, rm စသည့် file management command အခြေခံများ"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "1-ဖိုဒါအသစ်-ဆောက်ခြင်း-mkdir",
    "text": "1. ဖိုဒါအသစ် ဆောက်ခြင်း (mkdir)"
  }, {
    "depth": 3,
    "slug": "2-ဖိုင်အသစ်-ဆောက်ခြင်း-touch",
    "text": "2. ဖိုင်အသစ် ဆောက်ခြင်း (touch)"
  }, {
    "depth": 3,
    "slug": "3-ကူးယူခြင်း-cp",
    "text": "3. ကူးယူခြင်း (cp)"
  }, {
    "depth": 3,
    "slug": "4-ရွှေ့ပြောင်းခြင်း-နှင့်-အမည်ပြောင်းခြင်း-mv",
    "text": "4. ရွှေ့ပြောင်းခြင်း နှင့် အမည်ပြောင်းခြင်း (mv)"
  }, {
    "depth": 3,
    "slug": "5-ဖယ်ရှားခြင်း--ဖျက်ခြင်း-rm",
    "text": "5. ဖယ်ရှားခြင်း / ဖျက်ခြင်း (rm)"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>Folder တွေထဲ သွားလာတတ်ပြီဆိုရင်တော့ ဖိုင်အသစ်ဆောက်တာ၊ ဖျက်တာတွေကို လုပ်ကြည့်ရအောင်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"1-ဖိုဒါအသစ်-ဆောက်ခြင်း-mkdir\">1. ဖိုဒါအသစ် ဆောက်ခြင်း (<code dir=\"auto\">mkdir</code>)</h3><a class=\"sl-anchor-link\" href=\"#1-ဖိုဒါအသစ်-ဆောက်ခြင်း-mkdir\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “1. ဖိုဒါအသစ် ဆောက်ခြင်း (mkdir)”</span></a></div>\n<p><strong>mkdir</strong> (Make Directory) ကို သုံးပြီး Folder အသစ်တစ်ခု ဆောက်လို့ရပါတယ်။</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">mkdir</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">my_project</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\"># my_project ဆိုတဲ့ folder အသစ်လေး ထွက်လာပါပြီ။ ls နဲ့ စစ်ကြည့်ပါ။</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"mkdir my_project\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"2-ဖိုင်အသစ်-ဆောက်ခြင်း-touch\">2. ဖိုင်အသစ် ဆောက်ခြင်း (<code dir=\"auto\">touch</code>)</h3><a class=\"sl-anchor-link\" href=\"#2-ဖိုင်အသစ်-ဆောက်ခြင်း-touch\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “2. ဖိုင်အသစ် ဆောက်ခြင်း (touch)”</span></a></div>\n<p><strong>touch</strong> ကို သုံးပြီး စာသားမပါတဲ့ ဖိုင်အလွတ် (Empty File) တစ်ခု ဖန်တီးလို့ရပါတယ်။</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">touch</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">index.html</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">touch</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">style.css</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\"># index.html နဲ့ style.css တို့ကို ဆောက်လိုက်ပါပြီ။</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"touch index.htmltouch style.css\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"3-ကူးယူခြင်း-cp\">3. ကူးယူခြင်း (<code dir=\"auto\">cp</code>)</h3><a class=\"sl-anchor-link\" href=\"#3-ကူးယူခြင်း-cp\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “3. ကူးယူခြင်း (cp)”</span></a></div>\n<p><strong>cp</strong> (Copy) က ဖိုင်တွေကို တစ်နေရာကနေ နောက်တစ်နေရာကို ကူးတဲ့နေရာမှာ သုံးပါတယ်။\n<em>(Pattern: cp <code dir=\"auto\">&#x3C;မူရင်းဖိုင်></code> <code dir=\"auto\">&#x3C;သွားမည့်နေရာ></code>)</em></p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">cp</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">index.html</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">about.html</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\"># index.html ထဲကအရာတွေကို about.html ဆိုပြီး ပွားလိုက်တာပါ။</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"cp index.html about.html\"><div></div></button></div></figure></div>\n<ul>\n<li><strong>Folder တွေကို copy ကူးချင်ရင်:</strong> <code dir=\"auto\">-r</code> (recursive) parameter ကို ထည့်ပေးရပါတယ်။ <code dir=\"auto\">cp -r my_project backup_project</code></li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"4-ရွှေ့ပြောင်းခြင်း-နှင့်-အမည်ပြောင်းခြင်း-mv\">4. ရွှေ့ပြောင်းခြင်း နှင့် အမည်ပြောင်းခြင်း (<code dir=\"auto\">mv</code>)</h3><a class=\"sl-anchor-link\" href=\"#4-ရွှေ့ပြောင်းခြင်း-နှင့်-အမည်ပြောင်းခြင်း-mv\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “4. ရွှေ့ပြောင်းခြင်း နှင့် အမည်ပြောင်းခြင်း (mv)”</span></a></div>\n<p><strong>mv</strong> (Move) က ဖိုင်ကို cut လုပ္ပီး ရွှေ့တာ၊ ဒါမှမဟုတ် Rename အမျိုးအမည်ပြောင်းတဲ့ နေရာမှာ သုံးပါတယ်။</p>\n<ul>\n<li><strong>Rename လုပ်ရန်:</strong> <code dir=\"auto\">mv index.html home.html</code> (index ကနေ home ကို ပြောင်းလိုက်တာပါ)</li>\n<li><strong>ရွှေ့ရန်:</strong> <code dir=\"auto\">mv home.html my_project/</code> (home.html ကို my_project folder ထဲ ထည့်လိုက်တာပါ)</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"5-ဖယ်ရှားခြင်း--ဖျက်ခြင်း-rm\">5. ဖယ်ရှားခြင်း / ဖျက်ခြင်း (<code dir=\"auto\">rm</code>)</h3><a class=\"sl-anchor-link\" href=\"#5-ဖယ်ရှားခြင်း--ဖျက်ခြင်း-rm\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “5. ဖယ်ရှားခြင်း / ဖျက်ခြင်း (rm)”</span></a></div>\n<p><strong>rm</strong> (Remove) က ဖိုင်တွေကို ဖျက်ပစ်ပါတယ်။ <em>(သတိထားပါ - CLI ကနေ ဖျက်လိုက်ရင် Recycle Bin / Trash ထဲရောက်မသွားဘဲ အပြီးတိုင် ပျက်သွားတတ်ပါတယ်!)</em></p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">rm</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">style.css</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\"># style.css ကို ဖျက်လိုက်တာပါ။</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"rm style.css\"><div></div></button></div></figure></div>\n<ul>\n<li><strong>Folder တွေကို အပြီးဖျက်ချင်ရင်:</strong> <code dir=\"auto\">rm -r my_project</code> (<code dir=\"auto\">-r</code> ထည့်သုံးပေးပါ)</li>\n</ul>"
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
const url = "src/content/docs/cli/commands/file-management.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/cli/commands/file-management.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/cli/commands/file-management.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
