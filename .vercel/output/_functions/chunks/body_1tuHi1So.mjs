import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "<body> အပိုင်း",
  "description": "<body> အပိုင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "body-ထဲမှာ-အသုံးများတဲ့-element-တွေ",
    "text": "<body> ထဲမှာ အသုံးများတဲ့ element တွေ:"
  }, {
    "depth": 4,
    "slug": "headings-h1-to-h6",
    "text": "Headings (<h1> to <h6>):"
  }, {
    "depth": 4,
    "slug": "paragraphs-p",
    "text": "Paragraphs (<p>):"
  }, {
    "depth": 4,
    "slug": "images-img",
    "text": "Images (<img>):"
  }, {
    "depth": 4,
    "slug": "links-a",
    "text": "Links (<a>):"
  }, {
    "depth": 3,
    "slug": "နမူနာ---အခြေခံ-html-page-တစ်ခု",
    "text": "နမူနာ - အခြေခံ HTML Page တစ်ခု"
  }];
}
const basicHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Simple Page</title>
  </head>
  <body>
    <h1>Welcome to My Simple Webpage</h1>
    <p>This is a paragraph of text on my webpage.</p>
    <img src="example.jpg" alt="An example image">
    <a href="https://www.example.com">Visit Example</a>
  </body>
</html>`;
const heading = `<h1>This is the main heading</h1>
<h2>This is a subheading</h2>`;
const paragraph = `<p>This is a paragraph of text.</p>`;
const imgTag = `<img src="image.jpg" alt="ပုံအကြောင်း ရှင်းပြတဲ့စာ">`;
const linkTag = `<a href="https://www.example.com">Visit Example</a>`;
const commentSample = `<!-- This is a comment -->
`;
const commentSample2 = `<!-- HTML Comment -->
<p>HTML is a markup language</p>`;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    div: "div",
    h4: "h4",
    li: "li",
    p: "p",
    path: "path",
    span: "span",
    svg: "svg",
    ul: "ul",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p><code dir=\"auto\">&#x3C;body></code> အပိုင်းမှာတော့ သုံးစွဲသူတွေ မြင်ရမယ့် webpage ရဲ့ အကြောင်းအရာ အားလုံး ပါဝင်ပါတယ်။ ခေါင်းစဉ်တွေ၊ စာပိုဒ်တွေ၊ ပုံတွေနဲ့ link တွေလိုမျိုး အရာအားလုံးကို ဒီနေရာမှာပဲ ထည့်ရမှာ ဖြစ်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"body-ထဲမှာ-အသုံးများတဲ့-element-တွေ\"><code dir=\"auto\">&#x3C;body></code> ထဲမှာ အသုံးများတဲ့ element တွေ:</h3><a class=\"sl-anchor-link\" href=\"#body-ထဲမှာ-အသုံးများတဲ့-element-တွေ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “&#x3C;body> ထဲမှာ အသုံးများတဲ့ element တွေ:”</span></a></div>\n"
    }), createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.div, {
          class: "sl-heading-wrapper level-h4",
          children: [createVNode(_components.h4, {
            id: "headings-h1-to-h6",
            children: ["Headings (", createVNode(_components.code, {
              dir: "auto",
              children: "<h1>"
            }), " to ", createVNode(_components.code, {
              dir: "auto",
              children: "<h6>"
            }), "):"]
          }), createVNode(_components.a, {
            class: "sl-anchor-link",
            href: "#headings-h1-to-h6",
            children: [createVNode(_components.span, {
              "aria-hidden": "true",
              class: "sl-anchor-icon",
              children: createVNode(_components.svg, {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                children: createVNode(_components.path, {
                  fill: "currentcolor",
                  d: "m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"
                })
              })
            }), createVNode(_components.span, {
              class: "sr-only",
              children: "Section titled “Headings (<h1> to <h6>):”"
            })]
          })]
        }), "\n", createVNode(_components.p, {
          children: ["ခေါင်းစဉ်တွေက စာမျက်နှာရဲ့ တည်ဆောက်ပုံကို သတ်မှတ်ပေးပြီး အကြောင်းအရာတွေကို စနစ်တကျ ဖြစ်အောင် ကူညီပေးပါတယ်။ ", createVNode(_components.code, {
            dir: "auto",
            children: "<h1>"
          }), " က အရေးအကြီးဆုံး ခေါင်းစဉ်ဖြစ်ပြီး ", createVNode(_components.code, {
            dir: "auto",
            children: "<h6>"
          }), " ကတော့  ခေါင်းစဉ်ငယ် ဖြစ်ပါတယ်။"]
        }), "\n", createVNode(_components.p, {
          children: "ဥပမာ:"
        }), "\n", createVNode(Code, {
          title: "HTML",
          lang: "html",
          code: heading
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.div, {
          class: "sl-heading-wrapper level-h4",
          children: [createVNode(_components.h4, {
            id: "paragraphs-p",
            children: ["Paragraphs (", createVNode(_components.code, {
              dir: "auto",
              children: "<p>"
            }), "):"]
          }), createVNode(_components.a, {
            class: "sl-anchor-link",
            href: "#paragraphs-p",
            children: [createVNode(_components.span, {
              "aria-hidden": "true",
              class: "sl-anchor-icon",
              children: createVNode(_components.svg, {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                children: createVNode(_components.path, {
                  fill: "currentcolor",
                  d: "m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"
                })
              })
            }), createVNode(_components.span, {
              class: "sr-only",
              children: "Section titled “Paragraphs (<p>):”"
            })]
          })]
        }), "\n", createVNode(_components.p, {
          children: ["စာပိုဒ်တွေ သတ်မှတ်ဖို့အတွက် ", createVNode(_components.code, {
            dir: "auto",
            children: "<p>"
          }), " tag ကို သုံးပါတယ်။"]
        }), "\n", createVNode(_components.p, {
          children: "ဥပမာ:"
        }), "\n", createVNode(Code, {
          title: "HTML",
          lang: "html",
          code: paragraph
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.div, {
          class: "sl-heading-wrapper level-h4",
          children: [createVNode(_components.h4, {
            id: "images-img",
            children: ["Images (", createVNode(_components.code, {
              dir: "auto",
              children: "<img>"
            }), "):"]
          }), createVNode(_components.a, {
            class: "sl-anchor-link",
            href: "#images-img",
            children: [createVNode(_components.span, {
              "aria-hidden": "true",
              class: "sl-anchor-icon",
              children: createVNode(_components.svg, {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                children: createVNode(_components.path, {
                  fill: "currentcolor",
                  d: "m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"
                })
              })
            }), createVNode(_components.span, {
              class: "sr-only",
              children: "Section titled “Images (<img>):”"
            })]
          })]
        }), "\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            dir: "auto",
            children: "<img>"
          }), " tag ကို စာမျက်နှာပေါ်မှာ ပုံတွေဖော်ပြဖို့ သုံးပါတယ်။"]
        }), "\n", createVNode(_components.p, {
          children: "ဥပမာ:"
        }), "\n", createVNode(Code, {
          title: "HTML",
          lang: "html",
          code: imgTag
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.div, {
          class: "sl-heading-wrapper level-h4",
          children: [createVNode(_components.h4, {
            id: "links-a",
            children: ["Links (", createVNode(_components.code, {
              dir: "auto",
              children: "<a>"
            }), "):"]
          }), createVNode(_components.a, {
            class: "sl-anchor-link",
            href: "#links-a",
            children: [createVNode(_components.span, {
              "aria-hidden": "true",
              class: "sl-anchor-icon",
              children: createVNode(_components.svg, {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                children: createVNode(_components.path, {
                  fill: "currentcolor",
                  d: "m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"
                })
              })
            }), createVNode(_components.span, {
              class: "sr-only",
              children: "Section titled “Links (<a>):”"
            })]
          })]
        }), "\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            dir: "auto",
            children: "<a>"
          }), " tag ကို တခြားစာမျက်နှာတွေကို ချိတ်ဆက်ပေးတဲ့ hyperlink တွေ ဖန်တီးဖို့ သုံးပါတယ်။"]
        }), "\n", createVNode(_components.p, {
          children: "ဥပမာ:"
        }), "\n", createVNode(Code, {
          title: "HTML",
          lang: "html",
          code: linkTag
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"နမူနာ---အခြေခံ-html-page-တစ်ခု\">နမူနာ - အခြေခံ HTML Page တစ်ခု</h3><a class=\"sl-anchor-link\" href=\"#နမူနာ---အခြေခံ-html-page-တစ်ခု\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “နမူနာ - အခြေခံ HTML Page တစ်ခု”</span></a></div>\n<p>ခုနက ပြောခဲ့တာတွေအားလုံးကို ပေါင်းစပ်ထားတဲ့ နမူနာတစ်ခုကို ကြည့်လိုက်ရအောင်။</p>\n"
    }), createVNode(Code, {
      title: "HTML",
      lang: "html",
      code: basicHtml
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p><strong>ရှင်းလင်းချက် -</strong></p>\n<ul>\n<li><code dir=\"auto\">&#x3C;!DOCTYPE html></code>: Browser ကို HTML5 သုံးထားကြောင်း ပြောပြပါတယ်။</li>\n<li><code dir=\"auto\">&#x3C;html></code> <strong>tag</strong>: စာမျက်နှာတစ်ခုလုံးကို ခြုံငုံထားပါတယ်။</li>\n<li><code dir=\"auto\">&#x3C;head></code> <strong>tag</strong>: စာမျက်နှာ ခေါင်းစဉ်နဲ့ meta tag တွေလို metadata တွေ ပါဝင်ပါတယ်။</li>\n<li><code dir=\"auto\">&#x3C;body></code> <strong>tag</strong>: မြင်ရတဲ့ အကြောင်းအရာတွေ (ခေါင်းစဉ်၊ စာပိုဒ်၊ ပုံ၊ link) တွေ ပါဝင်ပါတယ်။</li>\n</ul>\n"
    }), createVNode($$Aside, {
      title: "အကျဉ်းချုပ်",
      type: "tip",
      "set:html": "<ul>\n<li>\n<p><code dir=\"auto\">&#x3C;head></code> section ထဲမှာ webpage ရဲ့ metadata (စာမျက်နှာအကြောင်း ဖော်ပြတဲ့ အချက်အလက်တွေ) ဖြစ်တဲ့ ခေါင်းစဉ် (title)၊ character encoding၊ နဲ့ CSS လို ပြင်ပ resource တွေကို ထည့်ပါတယ်။</p>\n</li>\n<li>\n<p><code dir=\"auto\">&#x3C;body></code> section မှာတော့ စာသား၊ ပုံ၊ link တွေလိုမျိုး webpage မှာ <strong>မြင်ရတဲ့ အကြောင်းအရာတွေ အကုန်လုံး</strong> ကို ထည့်ရပါတယ်။</p>\n</li>\n<li>\n<p><code dir=\"auto\">&#x3C;head></code> ထဲက <code dir=\"auto\">&#x3C;title></code> က browser ရဲ့ tab မှာပြသမယ့် <strong>စာမျက်နှာခေါင်းစဉ်</strong> ကို သတ်မှတ်ပေးပါတယ်။</p>\n</li>\n<li>\n<p><code dir=\"auto\">&#x3C;head></code> ထဲက <code dir=\"auto\">&#x3C;meta></code> tag ကိုတော့ <strong>character encoding၊ စာမျက်နှာအကြောင်းအရာဖော်ပြချက် (descriptions)၊ နဲ့ viewport settings</strong> တွေအတွက် သုံးပါတယ်။</p>\n</li>\n</ul><p>အဓိကကွာခြားချက်ကတော့ <code dir=\"auto\">&#x3C;head></code> section ကို user တွေ မမြင်ရဘဲ၊ <code dir=\"auto\">&#x3C;body></code> section ကတော့ user တွေ စာမျက်နှာပေါ်မှာ မြင်ရသမျှ အရာအားလုံး ပါဝင်တဲ့ နေရာဖြစ်ပါတယ်။</p>"
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

const url = "src/content/docs/html/structure/body.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/html/structure/body.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/html/structure/body.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, basicHtml, commentSample, commentSample2, Content as default, file, frontmatter, getHeadings, heading, imgTag, linkTag, paragraph, url };
