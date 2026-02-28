import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import { c as createSvgComponent } from './runtime_nY0uhreE.mjs';
import 'clsx';

const nodejsArchitecture = createSvgComponent({"meta":{"src":"/_astro/nodejs-architecture.D9psLx9o.svg","width":800,"height":400,"format":"svg"},"attributes":{"viewBox":"0 0 800 400"},"children":"\n  <defs>\n    <style>\n      .box { fill: #f8f9fa; stroke: #343a40; stroke-width: 2; rx: 8; }\n      .text-title { font-family: Arial, sans-serif; font-size: 18px; font-weight: bold; fill: #212529; text-anchor: middle; }\n      .text-desc { font-family: Arial, sans-serif; font-size: 14px; fill: #495057; text-anchor: middle; }\n      .arrow { stroke: #68a063; stroke-width: 3; fill: none; marker-end: url(#arrowhead); }\n      .highlight { fill: #e8f5e9; stroke: #68a063; stroke-width: 2; rx: 8; }\n      .v8 { fill: #fff3cd; stroke: #ffc107; stroke-width: 2; rx: 8; }\n      .libuv { fill: #cce5ff; stroke: #004085; stroke-width: 2; rx: 8; }\n    </style>\n    <marker id=\"arrowhead\" markerWidth=\"10\" markerHeight=\"7\" refX=\"9\" refY=\"3.5\" orient=\"auto\">\n      <polygon points=\"0 0, 10 3.5, 0 7\" fill=\"#68a063\" />\n    </marker>\n  </defs><!-- Title -->\n  <text x=\"400\" y=\"40\" class=\"text-title\" style=\"font-size: 24px;\">Node.js Architecture</text><!-- JavaScript Code -->\n  <rect x=\"50\" y=\"150\" width=\"150\" height=\"100\" class=\"box\" />\n  <text x=\"125\" y=\"190\" class=\"text-title\">JavaScript Code</text>\n  <text x=\"125\" y=\"215\" class=\"text-desc\">app.js</text><!-- Node.js Bindings -->\n  <rect x=\"250\" y=\"150\" width=\"150\" height=\"100\" class=\"highlight\" />\n  <text x=\"325\" y=\"190\" class=\"text-title\">Node.js API</text>\n  <text x=\"325\" y=\"215\" class=\"text-desc\">(C++ Bindings)</text><!-- V8 Engine -->\n  <rect x=\"450\" y=\"100\" width=\"150\" height=\"80\" class=\"v8\" />\n  <text x=\"525\" y=\"135\" class=\"text-title\">V8 Engine</text>\n  <text x=\"525\" y=\"160\" class=\"text-desc\">(Compiles JS to C++)</text><!-- libuv -->\n  <rect x=\"450\" y=\"220\" width=\"150\" height=\"80\" class=\"libuv\" />\n  <text x=\"525\" y=\"255\" class=\"text-title\">libuv</text>\n  <text x=\"525\" y=\"280\" class=\"text-desc\">(Event Loop & I/O)</text><!-- OS / Hardware -->\n  <rect x=\"650\" y=\"150\" width=\"120\" height=\"100\" class=\"box\" />\n  <text x=\"710\" y=\"190\" class=\"text-title\">OS / Hardware</text>\n  <text x=\"710\" y=\"215\" class=\"text-desc\">File System,</text>\n  <text x=\"710\" y=\"235\" class=\"text-desc\">Network, etc.</text><!-- Arrows -->\n  <path d=\"M 200 200 L 240 200\" class=\"arrow\" />\n  <path d=\"M 400 180 L 440 140\" class=\"arrow\" />\n  <path d=\"M 400 220 L 440 260\" class=\"arrow\" />\n  <path d=\"M 600 260 L 640 220\" class=\"arrow\" />\n\n"});

const frontmatter = {
  "title": "Node.js မိတ်ဆက်",
  "description": "Node.js အကြောင်း မိတ်ဆက်"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "nodejs-ဆိုတာ-ဘာလဲ",
    "text": "Node.js ဆိုတာ ဘာလဲ?"
  }, {
    "depth": 3,
    "slug": "ဘာလို့-nodejs-ကို-လေ့လာသင့်တာလဲ",
    "text": "ဘာလို့ Node.js ကို လေ့လာသင့်တာလဲ?"
  }, {
    "depth": 3,
    "slug": "ဒီ-course-မှာ-ဘာတွေ-သင်ရမလဲ",
    "text": "ဒီ Course မှာ ဘာတွေ သင်ရမလဲ?"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "မင်္ဂလာပါ",
      "set:html": "<p>Node.js Course ကနေ ကြိုဆိုပါတယ်။ ဒီ Course မှာ JavaScript ကို Browser ပြင်ပမှာ အလုပ်လုပ်စေတဲ့ Node.js ကို အခြေခံကနေ စပြီး လေ့လာသွားမှာ ဖြစ်ပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"nodejs-ဆိုတာ-ဘာလဲ\">Node.js ဆိုတာ ဘာလဲ?</h3><a class=\"sl-anchor-link\" href=\"#nodejs-ဆိုတာ-ဘာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Node.js ဆိုတာ ဘာလဲ?”</span></a></div>\n<p>အရင်တုန်းက JavaScript ကို Web Browser (Chrome, Firefox) တွေထဲမှာပဲ အလုပ်လုပ်လို့ ရပါတယ်။ ဒါပေမယ့် ၂၀၀၉ ခုနှစ်မှာ Ryan Dahl ဆိုတဲ့သူက Google Chrome ရဲ့ <strong>V8 JavaScript Engine</strong> ကို ယူပြီး Browser ပြင်ပမှာပါ အလုပ်လုပ်လို့ရအောင် ဖန်တီးလိုက်ပါတယ်။ အဲ့ဒါကို <strong>Node.js</strong> လို့ ခေါ်ပါတယ်။</p>\n<p>Node.js ဟာ Programming Language အသစ် မဟုတ်ပါဘူး။ JavaScript ကို Server ပေါ်မှာ (Backend အနေနဲ့) အလုပ်လုပ်စေတဲ့ <strong>Runtime Environment</strong> တစ်ခု ဖြစ်ပါတယ်။</p>\n"
    }), createVNode($$ContentImage, {
      src: nodejsArchitecture,
      alt: "Node.js Architecture"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဘာလို့-nodejs-ကို-လေ့လာသင့်တာလဲ\">ဘာလို့ Node.js ကို လေ့လာသင့်တာလဲ?</h3><a class=\"sl-anchor-link\" href=\"#ဘာလို့-nodejs-ကို-လေ့လာသင့်တာလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဘာလို့ Node.js ကို လေ့လာသင့်တာလဲ?”</span></a></div>\n<ul>\n<li><strong>JavaScript တစ်ခုတည်းနဲ့ အကုန်ရ:</strong> Frontend (React, Vue) မှာရော၊ Backend (Node.js) မှာပါ JavaScript တစ်မျိုးတည်းကိုပဲ သုံးလို့ရတဲ့အတွက် Full-stack Developer ဖြစ်ဖို့ အရမ်းလွယ်ကူသွားပါတယ်။</li>\n<li><strong>မြန်ဆန်မှု (Fast):</strong> V8 Engine ကို သုံးထားတဲ့အတွက် Code တွေကို အလွန်မြန်ဆန်စွာ အလုပ်လုပ်ပေးနိုင်ပါတယ်။</li>\n<li><strong>Asynchronous &#x26; Non-blocking:</strong> အလုပ်တစ်ခု ပြီးမှ နောက်တစ်ခု လုပ်တာမျိုး မဟုတ်ဘဲ၊ အလုပ်တွေကို တစ်ပြိုင်နက်တည်း လုပ်ဆောင်နိုင်တဲ့အတွက် User အများကြီး ဝင်လာတဲ့အခါ (High Traffic) မှာ အရမ်း အဆင်ပြေပါတယ်။</li>\n<li><strong>NPM (Node Package Manager):</strong> ကမ္ဘာပေါ်မှာ အကြီးဆုံး Open-source Library စုစည်းမှုကြီး ရှိတဲ့အတွက် ကိုယ်လိုချင်တဲ့ လုပ်ဆောင်ချက်တွေကို အလွယ်တကူ ယူသုံးလို့ ရပါတယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဒီ-course-မှာ-ဘာတွေ-သင်ရမလဲ\">ဒီ Course မှာ ဘာတွေ သင်ရမလဲ?</h3><a class=\"sl-anchor-link\" href=\"#ဒီ-course-မှာ-ဘာတွေ-သင်ရမလဲ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဒီ Course မှာ ဘာတွေ သင်ရမလဲ?”</span></a></div>\n<ol>\n<li><strong>Node.js Basics &#x26; Modules:</strong> Node.js ရဲ့ အခြေခံနဲ့ ဖိုင်တွေကို ဘယ်လို ချိတ်ဆက်မလဲ။</li>\n<li><strong>File System &#x26; Path:</strong> ကွန်ပျူတာထဲက ဖိုင်တွေကို ဖတ်ခြင်း၊ ရေးခြင်း။</li>\n<li><strong>Asynchronous Programming:</strong> Callbacks, Promises နဲ့ Async/Await အကြောင်း။</li>\n<li><strong>NPM:</strong> Package တွေကို ဘယ်လို Install လုပ်ပြီး သုံးမလဲ။</li>\n<li><strong>Web Server:</strong> ကိုယ်ပိုင် Web Server တစ်ခု ဘယ်လို တည်ဆောက်မလဲ။</li>\n<li><strong>Express.js:</strong> Node.js အတွက် အသုံးအများဆုံး Framework အကြောင်း။</li>\n<li><strong>Mini Project:</strong> Express.js ကို သုံးပြီး ရိုးရှင်းတဲ့ REST API တစ်ခု ရေးကြည့်ခြင်း။</li>\n</ol>\n<p>ကဲ… Node.js လောကထဲကို ဝင်ရောက်ကြည့်ကြရအောင်!</p>"
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

const url = "src/content/docs/nodejs/index.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/nodejs/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/nodejs/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
