import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import { c as createSvgComponent } from './runtime_nY0uhreE.mjs';
import 'clsx';

const goConcurrency = createSvgComponent({"meta":{"src":"/_astro/go-concurrency.BwnU5JH9.svg","width":800,"height":400,"format":"svg"},"attributes":{"viewBox":"0 0 800 400"},"children":"\n  <defs>\n    <linearGradient id=\"bg\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#00ADD8\" stop-opacity=\"0.1\" />\n      <stop offset=\"100%\" stop-color=\"#00ADD8\" stop-opacity=\"0.3\" />\n    </linearGradient>\n    <linearGradient id=\"goroutine\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#00ADD8\" />\n      <stop offset=\"100%\" stop-color=\"#007A99\" />\n    </linearGradient>\n    <linearGradient id=\"channel\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#F6D365\" />\n      <stop offset=\"100%\" stop-color=\"#FDA085\" />\n    </linearGradient>\n    <filter id=\"shadow\" x=\"-10%\" y=\"-10%\" width=\"120%\" height=\"120%\">\n      <feDropShadow dx=\"2\" dy=\"4\" stdDeviation=\"4\" flood-opacity=\"0.2\" />\n    </filter>\n  </defs>\n\n  <rect width=\"800\" height=\"400\" rx=\"20\" fill=\"url(#bg)\" />\n  \n  <text x=\"400\" y=\"50\" font-family=\"Arial, sans-serif\" font-size=\"28\" font-weight=\"bold\" fill=\"#333\" text-anchor=\"middle\">Golang Concurrency Model</text>\n  <text x=\"400\" y=\"80\" font-family=\"Arial, sans-serif\" font-size=\"16\" fill=\"#666\" text-anchor=\"middle\">Goroutines communicating via Channels</text><!-- Main Process -->\n  <rect x=\"50\" y=\"150\" width=\"150\" height=\"100\" rx=\"10\" fill=\"#333\" filter=\"url(#shadow)\" />\n  <text x=\"125\" y=\"195\" font-family=\"Arial, sans-serif\" font-size=\"18\" font-weight=\"bold\" fill=\"white\" text-anchor=\"middle\">Main</text>\n  <text x=\"125\" y=\"220\" font-family=\"Arial, sans-serif\" font-size=\"14\" fill=\"#ccc\" text-anchor=\"middle\">Goroutine</text><!-- Goroutine 1 -->\n  <rect x=\"600\" y=\"100\" width=\"150\" height=\"80\" rx=\"10\" fill=\"url(#goroutine)\" filter=\"url(#shadow)\" />\n  <text x=\"675\" y=\"135\" font-family=\"Arial, sans-serif\" font-size=\"18\" font-weight=\"bold\" fill=\"white\" text-anchor=\"middle\">Worker 1</text>\n  <text x=\"675\" y=\"160\" font-family=\"Arial, sans-serif\" font-size=\"14\" fill=\"#e0e0e0\" text-anchor=\"middle\">Goroutine</text><!-- Goroutine 2 -->\n  <rect x=\"600\" y=\"220\" width=\"150\" height=\"80\" rx=\"10\" fill=\"url(#goroutine)\" filter=\"url(#shadow)\" />\n  <text x=\"675\" y=\"255\" font-family=\"Arial, sans-serif\" font-size=\"18\" font-weight=\"bold\" fill=\"white\" text-anchor=\"middle\">Worker 2</text>\n  <text x=\"675\" y=\"280\" font-family=\"Arial, sans-serif\" font-size=\"14\" fill=\"#e0e0e0\" text-anchor=\"middle\">Goroutine</text><!-- Channels -->\n  <path d=\"M 200 180 L 350 140 L 600 140\" fill=\"none\" stroke=\"url(#channel)\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 200 220 L 350 260 L 600 260\" fill=\"none\" stroke=\"url(#channel)\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" /><!-- Data Packets -->\n  <circle cx=\"450\" cy=\"140\" r=\"15\" fill=\"white\" filter=\"url(#shadow)\" />\n  <text x=\"450\" y=\"145\" font-family=\"Arial, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\" text-anchor=\"middle\">D1</text>\n\n  <circle cx=\"450\" cy=\"260\" r=\"15\" fill=\"white\" filter=\"url(#shadow)\" />\n  <text x=\"450\" y=\"265\" font-family=\"Arial, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\" text-anchor=\"middle\">D2</text><!-- Labels -->\n  <rect x=\"380\" y=\"115\" width=\"80\" height=\"24\" rx=\"12\" fill=\"#fff\" opacity=\"0.8\" />\n  <text x=\"420\" y=\"132\" font-family=\"Arial, sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#FDA085\" text-anchor=\"middle\">Channel</text>\n\n  <rect x=\"380\" y=\"275\" width=\"80\" height=\"24\" rx=\"12\" fill=\"#fff\" opacity=\"0.8\" />\n  <text x=\"420\" y=\"292\" font-family=\"Arial, sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#FDA085\" text-anchor=\"middle\">Channel</text><!-- Arrows -->\n  <polygon points=\"580,130 600,140 580,150\" fill=\"url(#channel)\" />\n  <polygon points=\"580,250 600,260 580,270\" fill=\"url(#channel)\" /><!-- Note -->\n  <text x=\"400\" y=\"360\" font-family=\"Arial, sans-serif\" font-size=\"16\" font-style=\"italic\" fill=\"#555\" text-anchor=\"middle\">\"Do not communicate by sharing memory; instead, share memory by communicating.\"</text>\n"});

const frontmatter = {
  "title": "Golang Programming Course",
  "description": "Go (Golang) ကို အခြေခံမှစ၍ Advanced Concepts များအထိ လက်တွေ့ Project ဖြင့် လေ့လာခြင်း"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "ဘာကြောင့်-go-golang-ကို-လေ့လာသင့်တာလဲ",
    "text": "ဘာကြောင့် Go (Golang) ကို လေ့လာသင့်တာလဲ?"
  }, {
    "depth": 2,
    "slug": "ဒီ-course-မှာ-ဘာတွေသင်ရမလဲ",
    "text": "ဒီ Course မှာ ဘာတွေသင်ရမလဲ?"
  }, {
    "depth": 2,
    "slug": "ဘယ်သူတွေ-တက်ရောက်သင့်လဲ",
    "text": "ဘယ်သူတွေ တက်ရောက်သင့်လဲ?"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "မင်္ဂလာပါ",
      "set:html": "<p>Golang Programming Course မှ ကြိုဆိုပါတယ်။ ဒီ Course မှာ Google က ဖန်တီးထားတဲ့ ခေတ်မီ၊ မြန်ဆန်ပြီး Concurrency အတွက် အထူးကောင်းမွန်တဲ့ Go (Golang) ကို အခြေခံမှစပြီး Advanced အဆင့်ထိ လေ့လာသွားမှာ ဖြစ်ပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"ဘာကြောင့်-go-golang-ကို-လေ့လာသင့်တာလဲ\">ဘာကြောင့် Go (Golang) ကို လေ့လာသင့်တာလဲ?</h2><a class=\"sl-anchor-link\" href=\"#ဘာကြောင့်-go-golang-ကို-လေ့လာသင့်တာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘာကြောင့် Go (Golang) ကို လေ့လာသင့်တာလဲ?”</span></a></div>\n<p>Go ဟာ လက်ရှိ Backend Development နဲ့ Cloud-Native Applications တွေမှာ အလွန်ရေပန်းစားလာတဲ့ Language တစ်ခုဖြစ်ပါတယ်။</p>\n<ol>\n<li><strong>မြန်ဆန်မှု (Performance):</strong> C/C++ လိုမျိုး Machine Code အဖြစ် တိုက်ရိုက် Compile လုပ်တဲ့အတွက် အလွန်မြန်ဆန်ပါတယ်။</li>\n<li><strong>ရိုးရှင်းမှု (Simplicity):</strong> Syntax တွေက ရှင်းလင်းပြီး ဖတ်ရလွယ်ကူပါတယ်။ မလိုအပ်တဲ့ ရှုပ်ထွေးမှုတွေကို ဖယ်ရှားထားပါတယ်။</li>\n<li><strong>Concurrency:</strong> Goroutines နဲ့ Channels တွေကို အသုံးပြုပြီး ပြိုင်တူအလုပ်လုပ်တဲ့ (Concurrent) Programs တွေကို အလွယ်တကူ ရေးသားနိုင်ပါတယ်။</li>\n<li><strong>Standard Library:</strong> Web Server ရေးတာကအစ JSON parsing အထိ ပြင်ပ Library တွေ အများကြီးမလိုဘဲ Standard Library ထဲမှာတင် အစုံအလင် ပါဝင်ပါတယ်။</li>\n</ol>\n"
    }), createVNode($$ContentImage, {
      src: goConcurrency,
      alt: "Golang Concurrency Model"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"ဒီ-course-မှာ-ဘာတွေသင်ရမလဲ\">ဒီ Course မှာ ဘာတွေသင်ရမလဲ?</h2><a class=\"sl-anchor-link\" href=\"#ဒီ-course-မှာ-ဘာတွေသင်ရမလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဒီ Course မှာ ဘာတွေသင်ရမလဲ?”</span></a></div>\n<p>ဒီ Course ကို အပိုင်း (၉) ပိုင်း ခွဲခြားထားပါတယ်။</p>\n<ol>\n<li><strong>Module 1: Introduction &#x26; Setup</strong> - Go ကို Install လုပ်ခြင်းနှင့် ပထမဆုံး Program ရေးသားခြင်း</li>\n<li><strong>Module 2: Basics</strong> - Variables, Data Types နှင့် Functions များ</li>\n<li><strong>Module 3: Control Structures</strong> - If/Else, For Loop နှင့် Switch Statements များ</li>\n<li><strong>Module 4: Data Structures</strong> - Arrays, Slices နှင့် Maps များ</li>\n<li><strong>Module 5: Pointers &#x26; Structs</strong> - Memory Addresses များနှင့် Custom Data Types များ</li>\n<li><strong>Module 6: Interfaces &#x26; Error Handling</strong> - Go ၏ ထူးခြားသော OOP ပုံစံနှင့် Error ဖြေရှင်းနည်းများ</li>\n<li><strong>Module 7: Concurrency</strong> - Goroutines နှင့် Channels များအကြောင်း (Advanced)</li>\n<li><strong>Module 8: Standard Library</strong> - Packages များ၊ HTTP Server နှင့် JSON အသုံးပြုနည်း</li>\n<li><strong>Module 9: Mini Project</strong> - Go ဖြင့် RESTful API တစ်ခု တည်ဆောက်ခြင်း</li>\n</ol>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"ဘယ်သူတွေ-တက်ရောက်သင့်လဲ\">ဘယ်သူတွေ တက်ရောက်သင့်လဲ?</h2><a class=\"sl-anchor-link\" href=\"#ဘယ်သူတွေ-တက်ရောက်သင့်လဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘယ်သူတွေ တက်ရောက်သင့်လဲ?”</span></a></div>\n<ul>\n<li>Programming ကို စတင်လေ့လာမည့်သူများ</li>\n<li>Backend Development ကို စိတ်ဝင်စားသူများ</li>\n<li>Cloud-Native (Docker, Kubernetes) နည်းပညာများကို လေ့လာလိုသူများ</li>\n<li>အခြား Language တစ်ခုမှ Go သို့ ပြောင်းလဲလေ့လာလိုသူများ</li>\n</ul>\n<p>ကဲ… Go ရဲ့ လျှို့ဝှက်ချက်တွေကို အတူတူ ဖော်ထုတ်ကြည့်ကြရအောင်!</p>"
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

const url = "src/content/docs/golang/index.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/golang/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/golang/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
