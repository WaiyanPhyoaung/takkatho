import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import { f as formImage, i as inputsImage } from './inputs_CZ6nUssS.mjs';
import 'clsx';

const frontmatter = {
  "title": "Forms",
  "description": "Forms"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "form-ဆိုတာဘာလဲ",
    "text": "Form ဆိုတာဘာလဲ?"
  }, {
    "depth": 5,
    "slug": "အသုံးပြုပုံများ-",
    "text": "အသုံးပြုပုံများ -"
  }, {
    "depth": 3,
    "slug": "form-တည်ဆောက်ပုံ",
    "text": "Form တည်ဆောက်ပုံ"
  }, {
    "depth": 5,
    "slug": "ရှင်းလင်းချက်",
    "text": "ရှင်းလင်းချက်:"
  }, {
    "depth": 3,
    "slug": "input-fields",
    "text": "Input Fields"
  }, {
    "depth": 3,
    "slug": "labels",
    "text": "Labels"
  }, {
    "depth": 5,
    "slug": "ရှင်းလင်းချက်-1",
    "text": "ရှင်းလင်းချက်"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      "set:html": "<p>ဒီအခန်းမှာတော့ user တွေဆီက data တွေကို website ဆီ ပို့ပေးနိုင်တဲ့ HTML form တွေ ဘယ်လိုဖန်တီးရမလဲဆိုတာ လေ့လာကြပါမယ်။ Form တွေက contact page တွေ၊ စစ်တမ်းတွေ၊ register လုပ်တာတွေ၊ နဲ့ login ဝင်တာတွေအတွက် မရှိမဖြစ်လိုအပ်ပါတယ်။ Form element တွေ၊ input တွေ၊ label တွေ၊ dropdown တွေ၊ textarea တွေ၊ နဲ့ button တွေအကြောင်း သင်ယူရပါမယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"form-ဆိုတာဘာလဲ\">Form ဆိုတာဘာလဲ?</h3><a class=\"sl-anchor-link\" href=\"#form-ဆိုတာဘာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Form ဆိုတာဘာလဲ?”</span></a></div>\n<p>Form ဆိုတာက user ဆီက အချက်အလက်တွေကို စုဆောင်းပြီး server ဆီကို ပို့ပေးတဲ့ HTML element တစ်ခုပါ။</p>\n<div class=\"sl-heading-wrapper level-h5\"><h5 id=\"အသုံးပြုပုံများ-\">အသုံးပြုပုံများ -</h5><a class=\"sl-anchor-link\" href=\"#အသုံးပြုပုံများ-\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အသုံးပြုပုံများ -”</span></a></div>\n<ul>\n<li>Website ပေါ်က Contact form တွေ</li>\n<li>User register လုပ်ခြင်း သို့မဟုတ် login ဝင်ခြင်း</li>\n<li>Feedback များ</li>\n<li>Booking form များ</li>\n</ul>\n<p><strong>ဥပမာနှိုင်းယှဉ်ချက် -</strong> Form ဆိုတာက လူတစ်ယောက်က ဖြည့်စွက်ပြီး တင်သွင်းရတဲ့ digital စာရွက်စာတမ်းတစ်ခုလိုပါပဲ။</p>\n"
    }), createVNode($$ContentImage, {
      src: formImage,
      alt: "form sample",
      height: 350
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"form-တည်ဆောက်ပုံ\">Form တည်ဆောက်ပုံ</h3><a class=\"sl-anchor-link\" href=\"#form-တည်ဆောက်ပုံ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Form တည်ဆောက်ပုံ”</span></a></div>\n<p>Form တစ်ခုကို <code dir=\"auto\">&#x3C;form></code> tag နဲ့ ဖန်တီးပါတယ်။ အဓိကကျတဲ့ attribute တွေကတော့-</p>\n<ul>\n<li>\n<p><code dir=\"auto\">action</code> – Form data တွေကို ဘယ်ကိုပို့ရမလဲ ဆိုတဲ့ URL။</p>\n</li>\n<li>\n<p><code dir=\"auto\">method</code> – Data တွေကို ဘယ်လိုပို့မလဲ ဆိုတဲ့ နည်းလမ်း (GET or POST)။</p>\n</li>\n</ul>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"html\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">form</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">action</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">submit_form.php</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">method</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">post</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">form</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<form action=&#x22;submit_form.php&#x22; method=&#x22;post&#x22;>  </form>\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h5\"><h5 id=\"ရှင်းလင်းချက်\">ရှင်းလင်းချက်:</h5><a class=\"sl-anchor-link\" href=\"#ရှင်းလင်းချက်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ရှင်းလင်းချက်:”</span></a></div>\n<ul>\n<li>\n<p><code dir=\"auto\">action=\"submit_form.php\"</code>: form data တွေကို <code dir=\"auto\">submit_form.php</code> ဆိုတဲ့ file ဆီ ပို့ပေးပါလိမ့်မယ်။</p>\n</li>\n<li>\n<p><code dir=\"auto\">method=\"post\"</code>: data တွေကို လုံလုံခြုံခြုံပို့ပေးပြီး၊ data အများကြီးအတွက် သင့်တော်ပါတယ်။</p>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"input-fields\">Input Fields</h3><a class=\"sl-anchor-link\" href=\"#input-fields\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Input Fields”</span></a></div>\n<p><strong>Input field</strong> တွေက user တွေ data ထည့်ဖို့ အတွက်သုံးတာပါ။ <code dir=\"auto\">&#x3C;input></code> tag ကို <code dir=\"auto\">type</code> attribute အမျိုးမျိုးနဲ့ တွဲသုံးပါတယ်-</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Input Type</th><th>ရှင်းလင်းချက်</th></tr></thead><tbody><tr><td>text</td><td>text ထည့်ရန် (ဥပမာ - name)။</td></tr><tr><td>password</td><td>စကားဝှက်ထည့်ရန် (စာလုံးတွေက ဖျောက်ထားပေးတယ်)။</td></tr><tr><td>email</td><td>Email လိပ်စာထည့်ရန်။</td></tr><tr><td>number</td><td>number သီးသန့်ထည့်ရန် (ဥပမာ - အသက်)။</td></tr><tr><td>date</td><td>ရက်စွဲရွေးရန်။</td></tr><tr><td>checkbox</td><td>ရွေးချယ်စရာအများကြီးကို ရွေးနိုင်ရန် (ဥပမာ - ဝါသနာ)။</td></tr><tr><td>radio</td><td>ရွေးချယ်စရာထဲက တစ်ခုတည်းကိုသာ ရွေးနိုင်ရန် (ဥပမာ - ကျား/မ)။</td></tr><tr><td>file</td><td>File တင်ရန် (ဥပမာ - Profile ပုံ)။</td></tr></tbody></table>\n"
    }), createVNode($$ContentImage, {
      src: inputsImage,
      alt: "inputs sample",
      height: 300
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"labels\">Labels</h3><a class=\"sl-anchor-link\" href=\"#labels\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Labels”</span></a></div>\n<p><code dir=\"auto\">&#x3C;label></code> tag က input ခေါင်းစဉ်လိုမျိုး input field တွေနဲ့ ချိတ်ဆက်ပေးပြီး၊ သုံးရတာလွယ်ပြီး accessibility ကို တိုးတက်စေပါတယ်။</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"html\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">for</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span><span style=\"--0:#D6DEEB;--1:#403F53\">Email:</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">input</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">type</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<label for=&#x22;email&#x22;>Email:</label><input type=&#x22;email&#x22; id=&#x22;email&#x22; name=&#x22;email&#x22;>\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h5\"><h5 id=\"ရှင်းလင်းချက်-1\">ရှင်းလင်းချက်</h5><a class=\"sl-anchor-link\" href=\"#ရှင်းလင်းချက်-1\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ရှင်းလင်းချက်”</span></a></div>\n<ul>\n<li>\n<p>label မှာ <code dir=\"auto\">for=\"email\"</code> ကို <code dir=\"auto\">id=\"email\"</code> ရှိတဲ့ input နဲ့ ချိတ်ဆက်ပေးပါတယ်။</p>\n</li>\n<li>\n<p>Label ကို နှိပ်လိုက်တာနဲ့ သက်ဆိုင်ရာ input field ကို အလိုအလျောက် focus လုပ်ပေးပါတယ်။</p>\n</li>\n</ul>"
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

const url = "src/content/docs/html/form/form-intro.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/html/form/form-intro.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/html/form/form-intro.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
