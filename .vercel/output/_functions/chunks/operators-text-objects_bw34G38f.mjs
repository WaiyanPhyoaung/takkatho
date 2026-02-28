import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import 'clsx';

const frontmatter = {
  "title": "ပြင်ဆင်ခြင်း နှင့် Vim ၏ သဒ္ဒါ (Grammar)",
  "description": "d, c, y, p အသုံးပြုခြင်းနှင့် Vim Language အလုပ်လုပ်ပုံ"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "1-အဓိက-operators-များ-လုပ်ဆောင်ချက်များ",
    "text": "1. အဓိက Operators များ (လုပ်ဆောင်ချက်များ)"
  }, {
    "depth": 4,
    "slug": "ဥပမာ---motion-နှင့်-တွဲသုံးခြင်း",
    "text": "ဥပမာ - Motion နှင့် တွဲသုံးခြင်း"
  }, {
    "depth": 3,
    "slug": "2-text-objects-vim--မှော်ဆန်ဆုံး-အပိုင်း",
    "text": "2. Text Objects (Vim ၏ မှော်ဆန်ဆုံး အပိုင်း)"
  }, {
    "depth": 4,
    "slug": "i-inner---ဘေးက-အရာတွေမပါဘဲ-အတွင်းကဟာကိုပဲ-ယူမယ်",
    "text": "i (Inner) - ဘေးက အရာတွေမပါဘဲ အတွင်းကဟာကိုပဲ ယူမယ်"
  }, {
    "depth": 4,
    "slug": "a-around---ဘေးက-ကွင်းတွေ-quotes-တွေပါ-အကုန်ယူမယ်",
    "text": "a (Around) - ဘေးက ကွင်းတွေ၊ Quotes တွေပါ အကုန်ယူမယ်"
  }, {
    "depth": 3,
    "slug": "အကျဉ်းချုပ်-တွေးခေါ်နည်း",
    "text": "အကျဉ်းချုပ် တွေးခေါ်နည်း"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    li: "li",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Navigate (သွားလာတာ) တွေမှာ ကျွမ်းကျင်သွားပြီဆိုရင်တော့၊ တကယ့်လက်တွေ့ စာပြင်တဲ့အဆင့်ကို သွားပါမယ်။ <strong>ဒီသင်ခန်းစာက Vim ရဲ့ အရေးအကြီးဆုံး လျှို့ဝှက်ချက်ဖြစ်ပါတယ်။</strong></p>\n<p>Vim ရဲ့ Command တွေဟာ အင်္ဂလိပ်စာ သဒ္ဒါ (Grammar) လိုပဲ ဖတ်ရပါတယ်။\n<strong><code dir=\"auto\">Operator + [Number] + Motion</code></strong> သို့မဟုတ် <strong><code dir=\"auto\">Operator + Text Object</code></strong> ဆိုတဲ့ ပုံစံနဲ့ ဖွဲ့စည်းထားပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"1-အဓိက-operators-များ-လုပ်ဆောင်ချက်များ\">1. အဓိက Operators များ (လုပ်ဆောင်ချက်များ)</h3><a class=\"sl-anchor-link\" href=\"#1-အဓိက-operators-များ-လုပ်ဆောင်ချက်များ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “1. အဓိက Operators များ (လုပ်ဆောင်ချက်များ)”</span></a></div>\n<ul>\n<li><strong><code dir=\"auto\">d</code> (Delete)</strong>: ဖျက်ရန် (Cut လည်း လုပ်သွားပါတယ်)။</li>\n<li><strong><code dir=\"auto\">c</code> (Change)</strong>: ဖျက်မယ်၊ ပြီးတာနဲ့ စာအသစ်ရိုက်ဖို့ Insert Mode ထဲကို တစ်ခါတည်း ဝင်သွားမယ်။</li>\n<li><strong><code dir=\"auto\">y</code> (Yank)</strong>: ကူးယူမည် (Copy)။</li>\n<li><strong><code dir=\"auto\">p</code> (Paste)</strong>: ချထားမည်။</li>\n</ul>\n<p><strong>ဒီ Operators တွေကို သင်လေ့လာခဲ့တဲ့ Motions (ဥပမာ <code dir=\"auto\">w</code>, <code dir=\"auto\">$</code>, <code dir=\"auto\">t</code>) တွေနဲ့ တွဲသုံးရပါတယ်။</strong></p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"ဥပမာ---motion-နှင့်-တွဲသုံးခြင်း\">ဥပမာ - Motion နှင့် တွဲသုံးခြင်း</h4><a class=\"sl-anchor-link\" href=\"#ဥပမာ---motion-နှင့်-တွဲသုံးခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဥပမာ - Motion နှင့် တွဲသုံးခြင်း”</span></a></div>\n<ul>\n<li><code dir=\"auto\">dw</code> (Delete Word): လက်ရှိနေရာမှ စကားလုံးတစ်လုံးကို ဖျက်မည်။</li>\n<li><code dir=\"auto\">cw</code> (Change Word): စကားလုံးတစ်လုံးကို ဖျက်ပြီး အသစ်ပြင်မည်။</li>\n<li><code dir=\"auto\">d$</code> သို့မဟုတ် <code dir=\"auto\">D</code>: လက်ရှိနေရာမှ စာကြောင်းအဆုံးထိ အကုန်ဖျက်မည်။</li>\n<li><code dir=\"auto\">ct\"</code> (Change till ”): <code dir=\"auto\">\"</code> အရှေ့အထိရှိသမျှ စာတွေကို ဖျက်ပြီး အသစ်ပြင်မည်။</li>\n</ul>\n<p><em>(ထူးခြားချက်: တူညီတဲ့စာလုံး ၂ ခါ ဆက်တိုက်နှိပ်လျှင် “စာကြောင်းတစ်ကြောင်းလုံး” ကို ရည်ညွှန်းပါသည်။ ဥပမာ - <code dir=\"auto\">dd</code> ဆိုရင် စာတစ်ကြောင်းလုံးဖျက်မည်။ <code dir=\"auto\">yy</code> ဆိုရင် တစ်ကြောင်းလုံး Copy ကူးမည်။)</em></p>\n<hr>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"2-text-objects-vim--မှော်ဆန်ဆုံး-အပိုင်း\">2. Text Objects (Vim ၏ မှော်ဆန်ဆုံး အပိုင်း)</h3><a class=\"sl-anchor-link\" href=\"#2-text-objects-vim--မှော်ဆန်ဆုံး-အပိုင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “2. Text Objects (Vim ၏ မှော်ဆန်ဆုံး အပိုင်း)”</span></a></div>\n<p>Text Objects တွေက သင့်ကို စာလုံးအရေအတွက် လိုက်ရေစရာမလိုအောင် လုပ်ပေးပါတယ်။ <code dir=\"auto\">i</code> (inner / အထဲမှာ) နဲ့ <code dir=\"auto\">a</code> (around / အပါအဝင်) ကို သုံးပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"i-inner---ဘေးက-အရာတွေမပါဘဲ-အတွင်းကဟာကိုပဲ-ယူမယ်\"><code dir=\"auto\">i</code> (Inner) - ဘေးက အရာတွေမပါဘဲ အတွင်းကဟာကိုပဲ ယူမယ်</h4><a class=\"sl-anchor-link\" href=\"#i-inner---ဘေးက-အရာတွေမပါဘဲ-အတွင်းကဟာကိုပဲ-ယူမယ်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “i (Inner) - ဘေးက အရာတွေမပါဘဲ အတွင်းကဟာကိုပဲ ယူမယ်”</span></a></div>\n<ul>\n<li><strong><code dir=\"auto\">diw</code> (Delete Inner Word):</strong> သင့် Cursor က စာလုံးရဲ့ အလယ်လောက် ရောက်နေခဲ့ရင်တောင် ဒီစာလုံး တစ်လုံးလုံးကို အတိအကျ ဖျက်ပေးပါတယ်။ (အသုံးအများဆုံးပါ!)</li>\n<li><strong><code dir=\"auto\">ci\"</code> (Change Inner Quotes):</strong> <code dir=\"auto\">\"\"</code> ထဲမှာရှိတဲ့ စာတွေကိုပဲ လှလှပပလေး ဖျက်ပြီး အသစ်ရေးဖို့ ပြင်ပေးပါမယ်။ (Programmer တွေအတွက် ရွှေပါ။ String တွေ ပြင်တဲ့နေရာမှာ အကောင်းဆုံးပါပဲ)</li>\n<li><strong><code dir=\"auto\">ci(</code> သို့မဟုတ် <code dir=\"auto\">ci{</code>:</strong> ကွင်းတွေ ထဲမှာရှိတဲ့ စာတွေကို ပြင်မည်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"a-around---ဘေးက-ကွင်းတွေ-quotes-တွေပါ-အကုန်ယူမယ်\"><code dir=\"auto\">a</code> (Around) - ဘေးက ကွင်းတွေ၊ Quotes တွေပါ အကုန်ယူမယ်</h4><a class=\"sl-anchor-link\" href=\"#a-around---ဘေးက-ကွင်းတွေ-quotes-တွေပါ-အကုန်ယူမယ်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “a (Around) - ဘေးက ကွင်းတွေ၊ Quotes တွေပါ အကုန်ယူမယ်”</span></a></div>\n"
    }), createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: [createVNode(_components.code, {
            dir: "auto",
            children: "daw"
          }), " (Delete a Word):"]
        }), " စကားလုံးကိုကော၊ အနောက်က Space လေးကိုပါ တစ်ခါတည်းသန့်ရှင်းအောင် ဖျက်ပေးပါတယ်။"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: [createVNode(_components.code, {
            dir: "auto",
            children: "da\""
          }), " (Delete around Quotes):"]
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "\"\""
        }), " ကွင်းတွေကိုပါ တစ်ပါတည်း ဖျက်ချင်ရင် သုံးပါတယ်။"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: [createVNode(_components.code, {
            dir: "auto",
            children: "ya{"
          }), " (Yank around ", "):"]
        }), " ", createVNode(Fragment$1, {
          "set:html": "<code dir=\"auto\">{ Function အပြည့် }</code> ကြီးတစ်ခုလုံးကို Code Block အနေနဲ့ Copy (Yank) ကူးချင်တဲ့အခါ သုံးပါတယ်။"
        })]
      }), "\n"]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အကျဉ်းချုပ်-တွေးခေါ်နည်း\">အကျဉ်းချုပ် တွေးခေါ်နည်း</h3><a class=\"sl-anchor-link\" href=\"#အကျဉ်းချုပ်-တွေးခေါ်နည်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အကျဉ်းချုပ် တွေးခေါ်နည်း”</span></a></div>\n<p>သင်တစ်ခုခုကို ပြင်ချင်ရင် ဒီအတိုင်းလေး တွေးကြည့်ပါ။</p>\n<blockquote>\n<p>“ငါ Delete <code dir=\"auto\">d</code> လုပ်ချင်တာ။ ဘယ်နားကိုလဲ? အထဲက <code dir=\"auto\">i</code> String <code dir=\"auto\">\"</code> တွေကိုပါ။” -> <strong>ဒီတော့ <code dir=\"auto\">di\"</code> နှိပ်လိုက်မယ်!</strong></p>\n</blockquote>\n<p>ဒါဟာ Vim ကို ကျက်စရာမလိုဘဲ စကားပြောသလို ရိုက်သွားလို့ရတဲ့ အဓိကအကြောင်းရင်း ဖြစ်ပါတယ်။</p>"
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

const url = "src/content/docs/vim-motions/editing/operators-text-objects.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/vim-motions/editing/operators-text-objects.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/vim-motions/editing/operators-text-objects.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
