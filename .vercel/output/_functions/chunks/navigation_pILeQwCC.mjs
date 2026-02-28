import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import 'clsx';

const frontmatter = {
  "title": "သွားလာခြင်း - Navigation",
  "description": "pwd, ls, cd စသည့် command များကို အသုံးပြု၍ file system အတွင်း သွားလာခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "1-ဘယ်နေရာရောက်နေလဲ-pwd",
    "text": "1. ဘယ်နေရာရောက်နေလဲ? (pwd)"
  }, {
    "depth": 3,
    "slug": "2-ဒီအထဲမှာ-ဘာတွေရှိလဲ-ls",
    "text": "2. ဒီအထဲမှာ ဘာတွေရှိလဲ? (ls)"
  }, {
    "depth": 3,
    "slug": "3-အခြား-folder-ကို-၀င်မယ်-cd",
    "text": "3. အခြား Folder ကို ၀င်မယ် (cd)"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>ပထမဆုံးအနေနဲ့ Folder တွေကြားထဲ ရှာဖွေသွားလာဖို့ အခြေခံအကျဆုံး command (၃) ခုကို လေ့လာပါမယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"1-ဘယ်နေရာရောက်နေလဲ-pwd\">1. ဘယ်နေရာရောက်နေလဲ? (<code dir=\"auto\">pwd</code>)</h3><a class=\"sl-anchor-link\" href=\"#1-ဘယ်နေရာရောက်နေလဲ-pwd\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “1. ဘယ်နေရာရောက်နေလဲ? (pwd)”</span></a></div>\n<p><strong>pwd</strong> (Print Working Directory) က အခုလက်ရှိ ဘယ် Folder ထဲ ရောက်နေလဲဆိုတာကို ပြပေးပါတယ်။ မပျောက်သွားအောင် အမြဲစစ်ကြည့်လို့ရပါတယ်။</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">/Users/waiyanphyoaung/code/project</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">pwd</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\"># output လေးက အောက်ကလိုမျိုး ထွက်လာပါလိမ့်မယ်</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"pwd# output လေးက အောက်ကလိုမျိုး ထွက်လာပါလိမ့်မယ်\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"2-ဒီအထဲမှာ-ဘာတွေရှိလဲ-ls\">2. ဒီအထဲမှာ ဘာတွေရှိလဲ? (<code dir=\"auto\">ls</code>)</h3><a class=\"sl-anchor-link\" href=\"#2-ဒီအထဲမှာ-ဘာတွေရှိလဲ-ls\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “2. ဒီအထဲမှာ ဘာတွေရှိလဲ? (ls)”</span></a></div>\n<p><strong>ls</strong> (List) က လက်ရှိရောက်နေတဲ့ Folder ထဲမှာ ဘာ ဖိုင်တွေ၊ Folder တွေ ရှိလဲဆိုတာကို List ချပြပေးပါတယ်။</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">ls</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\"># Desktop  Documents  Downloads  Music</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"ls\"><div></div></button></div></figure></div>\n<ul>\n<li><strong>Tip:</strong> ပိုပြီး အသေးစိတ် ကြည့်ချင်ရင် <code dir=\"auto\">ls -l</code> (long format) သို့မဟုတ် ဖွက်ထားတဲ့ (hidden) file တွေပါ ကြည့်ချင်ရင် <code dir=\"auto\">ls -a</code> လို့ ရိုက်လို့ရပါတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"3-အခြား-folder-ကို-၀င်မယ်-cd\">3. အခြား Folder ကို ၀င်မယ် (<code dir=\"auto\">cd</code>)</h3><a class=\"sl-anchor-link\" href=\"#3-အခြား-folder-ကို-၀င်မယ်-cd\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “3. အခြား Folder ကို ၀င်မယ် (cd)”</span></a></div>\n<p><strong>cd</strong> (Change Directory) က အခြား Folder တစ်ခုထဲကို ဝင်ဖို့ ဒါမှမဟုတ် အပြင်ကို ပြန်ထွက်ဖို့ သုံးပါတယ်။</p>\n<ul>\n<li><strong>Folder အသစ်ထဲဝင်ရန်:</strong> <code dir=\"auto\">cd Desktop</code> (Desktop folder ထဲကို ဝင်မယ်)</li>\n<li><strong>အပြင်ကို တစ်ဆင့်ပြန်ထွက်ရန်:</strong> <code dir=\"auto\">cd ..</code> (ရှေ့က folder ကို ပြန်ထွက်တာပါ)</li>\n<li><strong>Home folder အဓိကရောက်ရန်:</strong> <code dir=\"auto\">cd ~</code> (အစဆုံးနေရာကို ပြန်သွားတာပါ)</li>\n</ul>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">cd</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">Desktop</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">ls</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\"># Desktop ထဲက ဖိုင်တွေကို ပြပါမယ်</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">cd</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">..</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">pwd</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\"># အပြင်ပြန်ရောက်သွားပါမယ်</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"cd Desktoplscd ..pwd\"><div></div></button></div></figure></div>"
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
const url = "src/content/docs/cli/commands/navigation.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/cli/commands/navigation.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/cli/commands/navigation.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
