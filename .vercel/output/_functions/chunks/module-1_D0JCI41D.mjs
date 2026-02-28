import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const frontmatter = {
  "title": "Module 1: Introduction & Setup",
  "description": "Go ကို Install လုပ်ခြင်းနှင့် ပထမဆုံး Program ရေးသားခြင်း"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "go-ကို-install-လုပ်ခြင်း",
    "text": "Go ကို Install လုပ်ခြင်း"
  }, {
    "depth": 2,
    "slug": "ပထမဆုံး-go-program-hello-world",
    "text": "ပထမဆုံး Go Program (Hello World)"
  }, {
    "depth": 3,
    "slug": "code-ကို-နားလည်ခြင်း",
    "text": "Code ကို နားလည်ခြင်း"
  }, {
    "depth": 2,
    "slug": "program-ကို-run-ခြင်း",
    "text": "Program ကို Run ခြင်း"
  }, {
    "depth": 3,
    "slug": "၁-go-run-development-အတွက်",
    "text": "၁. go run (Development အတွက်)"
  }, {
    "depth": 3,
    "slug": "၂-go-build-production-အတွက်",
    "text": "၂. go build (Production အတွက်)"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"go-ကို-install-လုပ်ခြင်း\">Go ကို Install လုပ်ခြင်း</h2><a class=\"sl-anchor-link\" href=\"#go-ကို-install-လုပ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Go ကို Install လုပ်ခြင်း”</span></a></div>\n<p>Go ကို အသုံးပြုဖို့အတွက် ပထမဆုံး သင့်ကွန်ပျူတာမှာ Install လုပ်ရပါမယ်။</p>\n<ol>\n<li><a href=\"https://golang.org/dl/\">golang.org/dl</a> သို့သွားပါ။</li>\n<li>သင့် OS (Windows, macOS, Linux) နှင့် ကိုက်ညီသော Installer ကို ဒေါင်းလုဒ်ဆွဲပြီး Install လုပ်ပါ။</li>\n<li>Install လုပ်ပြီးကြောင်း သေချာစေရန် Terminal (သို့) Command Prompt တွင် အောက်ပါ Command ကို ရိုက်ထည့်ပါ။</li>\n</ol>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">go</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">version</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"go version\"><div></div></button></div></figure></div>\n<p><code dir=\"auto\">go version go1.21.x</code> စသဖြင့် ပေါ်လာပါက အောင်မြင်စွာ Install လုပ်ပြီးပါပြီ။</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"ပထမဆုံး-go-program-hello-world\">ပထမဆုံး Go Program (Hello World)</h2><a class=\"sl-anchor-link\" href=\"#ပထမဆုံး-go-program-hello-world\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ပထမဆုံး Go Program (Hello World)”</span></a></div>\n<p>Go မှာ Program တစ်ခုရေးဖို့ Folder အသစ်တစ်ခု တည်ဆောက်ပြီး <code dir=\"auto\">main.go</code> ဆိုတဲ့ ဖိုင်တစ်ခု ဖန်တီးပါ။</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">main.go</span></figcaption><pre data-language=\"go\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">package</span><span style=\"--0:#D6DEEB;--1:#403F53\"> main</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">fmt</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">func</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">main</span><span style=\"--0:#D6DEEB;--1:#403F53\">() {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C5E478;--1:#3B61B0\">fmt</span><span style=\"--0:#D6DEEB;--1:#403F53\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">Println</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Hello, World!</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"package mainimport &#x22;fmt&#x22;func main() {    fmt.Println(&#x22;Hello, World!&#x22;)}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"code-ကို-နားလည်ခြင်း\">Code ကို နားလည်ခြင်း</h3><a class=\"sl-anchor-link\" href=\"#code-ကို-နားလည်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Code ကို နားလည်ခြင်း”</span></a></div>\n<ul>\n<li><code dir=\"auto\">package main</code>: Go program တိုင်းဟာ package တစ်ခုထဲမှာ ရှိရပါတယ်။ <code dir=\"auto\">main</code> package ကတော့ ဒီ program ဟာ run လို့ရတဲ့ (executable) program ဖြစ်တယ်လို့ ဆိုလိုတာပါ။</li>\n<li><code dir=\"auto\">import \"fmt\"</code>: <code dir=\"auto\">fmt</code> (format) ဆိုတဲ့ standard library ကို အသုံးပြုဖို့ ခေါ်ယူတာပါ။ စာသားတွေ print ထုတ်ဖို့ သုံးပါတယ်။</li>\n<li><code dir=\"auto\">func main()</code>: Program စတင် အလုပ်လုပ်မယ့် နေရာ (Entry point) ဖြစ်ပါတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"program-ကို-run-ခြင်း\">Program ကို Run ခြင်း</h2><a class=\"sl-anchor-link\" href=\"#program-ကို-run-ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Program ကို Run ခြင်း”</span></a></div>\n<p>Go program ကို run ဖို့ နည်းလမ်း (၂) ခု ရှိပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"၁-go-run-development-အတွက်\">၁. <code dir=\"auto\">go run</code> (Development အတွက်)</h3><a class=\"sl-anchor-link\" href=\"#၁-go-run-development-အတွက်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “၁. go run (Development အတွက်)”</span></a></div>\n<p>Code ကို compile လုပ်ပြီး ချက်ချင်း run ပေးပါတယ်။ ဖိုင်တွေ မထွက်လာပါဘူး။</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">go</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">run</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">main.go</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"go run main.go\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"၂-go-build-production-အတွက်\">၂. <code dir=\"auto\">go build</code> (Production အတွက်)</h3><a class=\"sl-anchor-link\" href=\"#၂-go-build-production-အတွက်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “၂. go build (Production အတွက်)”</span></a></div>\n<p>Code ကို Machine Code အဖြစ် Compile လုပ်ပြီး Executable ဖိုင် (ဥပမာ <code dir=\"auto\">main.exe</code> သို့မဟုတ် <code dir=\"auto\">main</code>) ထုတ်ပေးပါတယ်။</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">go</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">build</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">main.go</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">./main</span><span style=\"--0:#D6DEEB;--1:#403F53\">  </span><span style=\"--0:#919F9F;--1:#5F636F\"># (Windows တွင် main.exe ဟု ရိုက်ပါ)</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"go build main.go./main  # (Windows တွင် main.exe ဟု ရိုက်ပါ)\"><div></div></button></div></figure></div>\n"
    }), createVNode($$Aside, {
      type: "tip",
      title: "မှတ်သားရန်",
      "set:html": "<p>Go ဟာ <strong>Compiled Language</strong> ဖြစ်ပါတယ်။ သင်ရေးလိုက်တဲ့ Code တွေကို ကွန်ပျူတာ နားလည်တဲ့ Machine Code အဖြစ် တိုက်ရိုက် ပြောင်းလဲပေးတဲ့အတွက် အလွန်မြန်ဆန်ပါတယ်။</p>"
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

const url = "src/content/docs/golang/module-1.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/golang/module-1.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/golang/module-1.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
