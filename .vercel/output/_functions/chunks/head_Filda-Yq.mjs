import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "<head> အပိုင်း",
  "description": "<head> အပိုင်း"
};
function getHeadings() {
  return [{
    "depth": 4,
    "slug": "head-ထဲမှာ-အသုံးများတဲ့-element-တွေ",
    "text": "<head> ထဲမှာ အသုံးများတဲ့ Element တွေ:"
  }, {
    "depth": 5,
    "slug": "meta-tags",
    "text": "<meta> tags"
  }, {
    "depth": 5,
    "slug": "title-tag",
    "text": "<title> tag"
  }, {
    "depth": 5,
    "slug": "external-stylesheets-သို့-ချိတ်ဆက်ခြင်း",
    "text": "External Stylesheets သို့ ချိတ်ဆက်ခြင်း"
  }];
}
const metaTag = `<meta charset="UTF-8">
<meta name="description" content="Learn HTML basics!">`;
const titleTag = `<title>My First Webpage</title>`;
const linkTag = `<link rel="stylesheet" href="styles.css">`;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    div: "div",
    h5: "h5",
    li: "li",
    p: "p",
    path: "path",
    span: "span",
    strong: "strong",
    svg: "svg",
    ul: "ul",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p><code dir=\"auto\">&#x3C;head></code> အပိုင်းမှာ webpage နဲ့ပတ်သက်တဲ့ အချက်အလက်တွေ ပါဝင်ပေမယ့် page ပေါ်မှာ တိုက်ရိုက်မြင်ရတာမျိုး မရှိပါဘူး။ သူ့ထဲမှာ metadata တွေ၊ design ပိုင်းဆိုင်ရာအတွက် stylesheet (CSS) link တွေ၊ လုပ်ဆောင်ချက်တွေအတွက် script (JavaScript) link တွေ ထည့်လေ့ရှိပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"head-ထဲမှာ-အသုံးများတဲ့-element-တွေ\"><code dir=\"auto\">&#x3C;head></code> ထဲမှာ အသုံးများတဲ့ Element တွေ:</h4><a class=\"sl-anchor-link\" href=\"#head-ထဲမှာ-အသုံးများတဲ့-element-တွေ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “&#x3C;head> ထဲမှာ အသုံးများတဲ့ Element တွေ:”</span></a></div>\n"
    }), createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.div, {
          class: "sl-heading-wrapper level-h5",
          children: [createVNode(_components.h5, {
            id: "meta-tags",
            children: [createVNode(_components.code, {
              dir: "auto",
              children: "<meta>"
            }), " tags"]
          }), createVNode(_components.a, {
            class: "sl-anchor-link",
            href: "#meta-tags",
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
              children: "Section titled “<meta> tags”"
            })]
          })]
        }), "\n", createVNode(_components.p, {
          children: "စာလုံးအမျိုးအစား (character encoding)၊ စာမျက်နှာရဲ့ အကြောင်းအရာအကျဉ်း (page description) နဲ့ တခြားအရေးကြီးတဲ့ အချက်အလက်တွေကို သတ်မှတ်ဖို့ သုံးပါတယ်။"
        }), "\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "ဥပမာ:"
          })
        }), "\n", createVNode(Code, {
          title: "HTML",
          lang: "html",
          code: metaTag
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.div, {
          class: "sl-heading-wrapper level-h5",
          children: [createVNode(_components.h5, {
            id: "title-tag",
            children: [createVNode(_components.code, {
              dir: "auto",
              children: "<title>"
            }), " tag"]
          }), createVNode(_components.a, {
            class: "sl-anchor-link",
            href: "#title-tag",
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
              children: "Section titled “<title> tag”"
            })]
          })]
        }), "\n", createVNode(_components.p, {
          children: "Browser ရဲ့ tab မှာ ပြမယ့် webpage ရဲ့ ခေါင်းစဉ်ကို သတ်မှတ်ပေးပါတယ်။"
        }), "\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "ဥပမာ:"
          })
        }), "\n", createVNode(Code, {
          title: "HTML",
          lang: "html",
          code: titleTag
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.div, {
          class: "sl-heading-wrapper level-h5",
          children: [createVNode(_components.h5, {
            id: "external-stylesheets-သို့-ချိတ်ဆက်ခြင်း",
            children: "External Stylesheets သို့ ချိတ်ဆက်ခြင်း"
          }), createVNode(_components.a, {
            class: "sl-anchor-link",
            href: "#external-stylesheets-သို့-ချိတ်ဆက်ခြင်း",
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
              children: "Section titled “External Stylesheets သို့ ချိတ်ဆက်ခြင်း”"
            })]
          })]
        }), "\n", createVNode(_components.p, {
          children: "Webpage ကို ဒီဇိုင်းလှပအောင်လုပ်ဖို့အတွက် အပြင်ဘက်မှာရှိတဲ့ CSS file တွေကို ချိတ်ဆက်ပေးနိုင်ပါတယ်။"
        }), "\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "ဥပမာ:"
          })
        }), "\n", createVNode(Code, {
          title: "HTML",
          lang: "html",
          code: linkTag
        }), "\n"]
      }), "\n"]
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

const url = "src/content/docs/html/structure/head.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/html/structure/head.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/html/structure/head.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, linkTag, metaTag, titleTag, url };
