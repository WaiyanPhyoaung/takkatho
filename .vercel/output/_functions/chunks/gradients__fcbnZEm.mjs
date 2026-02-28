import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const gradientExample = new Proxy({"src":"/_astro/gradients.CQFKiwkE.png","width":2304,"height":744,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/css/gradients.png";
							}
							
							return target[name];
						}
					});

const textGradientImg = new Proxy({"src":"/_astro/text-gradient.B2trN3h_.png","width":766,"height":124,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/css/text-gradient.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Gradients (အရောင်ပြေး)",
  "description": "အရောင်များကို ရောစပ် အသုံးပြုခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "linear-gradient-အတန်းလိုက်-အရောင်ပြေး",
    "text": "Linear Gradient (အတန်းလိုက် အရောင်ပြေး)"
  }, {
    "depth": 3,
    "slug": "radial-gradient-အဝိုင်းလိုက်-အရောင်ပြေး",
    "text": "Radial Gradient (အဝိုင်းလိုက် အရောင်ပြေး)"
  }];
}
function _createMdxContent(props) {
  const _components = {
    button: "button",
    code: "code",
    div: "div",
    figcaption: "figcaption",
    figure: "figure",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "အရောင်စုံ",
      "set:html": "<p>အရောင်တစ်ရောင်တည်း (Solid Color) အစား၊ အရောင်နှစ်ရောင် (သို့) ပိုပြီး ရောစပ်ထားတဲ့ Gradient တွေက ဒီဇိုင်းကို ပိုပြီး ဆွဲဆောင်မှု ရှိစေပါတယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"linear-gradient-အတန်းလိုက်-အရောင်ပြေး\">Linear Gradient (အတန်းလိုက် အရောင်ပြေး)</h3><a class=\"sl-anchor-link\" href=\"#linear-gradient-အတန်းလိုက်-အရောင်ပြေး\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Linear Gradient (အတန်းလိုက် အရောင်ပြေး)”</span></a></div>\n<p>အရောင်တစ်ခုကနေ နောက်တစ်ခုကို ဖြည်းဖြည်းချင်း ပြောင်းသွားတာပါ။\n<code dir=\"auto\">background-image</code> မှာ သုံးရပါတယ်။</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.box</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5F636F\">/* အပေါ်ကနေ အောက် (Default) */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">background-image</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#C5E478;--1:#3B61B0\">linear-gradient</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#7FDBCA;--1:#096E72\">red</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#7FDBCA;--1:#096E72\">yellow</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.box-right</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5F636F\">/* ဘယ်ကနေ ညာ */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">background-image</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#C5E478;--1:#3B61B0\">linear-gradient</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#7FDBCA;--1:#096E72\">to</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#FF6D6D;--1:#984E4D\">right</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#7FDBCA;--1:#096E72\">blue</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#7FDBCA;--1:#096E72\">purple</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.box-diagonal</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5F636F\">/* ထောင့်ဖြတ် (၄၅ ဒီဂရီ) */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">background-image</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#C5E478;--1:#3B61B0\">linear-gradient</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">45</span><span style=\"--0:#FFEB95\">deg</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">#</span><span style=\"--0:#FFEB95\">ff9a9e</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">#</span><span style=\"--0:#FFEB95\">fad0c4</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".box {  /* အပေါ်ကနေ အောက် (Default) */  background-image: linear-gradient(red, yellow);}.box-right {  /* ဘယ်ကနေ ညာ */  background-image: linear-gradient(to right, blue, purple);}.box-diagonal {  /* ထောင့်ဖြတ် (၄၅ ဒီဂရီ) */  background-image: linear-gradient(45deg, #ff9a9e, #fad0c4);}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"radial-gradient-အဝိုင်းလိုက်-အရောင်ပြေး\">Radial Gradient (အဝိုင်းလိုက် အရောင်ပြေး)</h3><a class=\"sl-anchor-link\" href=\"#radial-gradient-အဝိုင်းလိုက်-အရောင်ပြေး\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Radial Gradient (အဝိုင်းလိုက် အရောင်ပြေး)”</span></a></div>\n<p>အလယ်ကနေ ဘေးကို ဖြာထွက်သွားတဲ့ ပုံစံပါ။</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.circle</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">background-image</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#C5E478;--1:#3B61B0\">radial-gradient</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#FF6D6D;--1:#984E4D\">circle</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#7FDBCA;--1:#096E72\">yellow</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#7FDBCA;--1:#096E72\">red</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".circle {  background-image: radial-gradient(circle, yellow, red);}\"><div></div></button></div></figure></div>\n"
    }), createVNode($$ContentImage, {
      src: gradientExample,
      alt: "Gradient Example"
    }), "\n", createVNode($$Aside, {
      type: "tip",
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Text Gradient:"
        }), " စာသားကို Gradient လုပ်ချင်ရင် နည်းနည်း ရှုပ်ပါတယ်။"]
      }), createVNode(_components.div, {
        class: "expressive-code",
        children: createVNode(_components.figure, {
          class: "frame not-content",
          children: [createVNode(_components.figcaption, {
            class: "header"
          }), createVNode(_components.pre, {
            "data-language": "css",
            children: createVNode(_components.code, {
              children: [createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    style: {
                      "--0": "#FF6D6D",
                      "--1": "#984E4D"
                    },
                    children: "h1"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: " {"
                  })]
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    class: "indent",
                    children: "  "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#80CBC4",
                      "--1": "#096E72"
                    },
                    children: "background"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: ": "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C5E478",
                      "--1": "#3B61B0"
                    },
                    children: "linear-gradient"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: "("
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#7FDBCA",
                      "--1": "#096E72"
                    },
                    children: "to"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: " "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#FF6D6D",
                      "--1": "#984E4D"
                    },
                    children: "right"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: ", "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#7FDBCA",
                      "--1": "#096E72"
                    },
                    children: "red"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: ", "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#7FDBCA",
                      "--1": "#096E72"
                    },
                    children: "blue"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: ");"
                  })]
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    class: "indent",
                    children: "  "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#80CBC4",
                      "--1": "#096E72"
                    },
                    children: "background-clip"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: ": "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#FF6D6D",
                      "--1": "#984E4D"
                    },
                    children: "text"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: ";"
                  })]
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    class: "indent",
                    children: "  "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C5E478",
                      "--1": "#3B61B0"
                    },
                    children: "-webkit-background-clip"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: ": "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#FF6D6D",
                      "--1": "#984E4D"
                    },
                    children: "text"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: ";"
                  })]
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    class: "indent",
                    children: "  "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#80CBC4",
                      "--1": "#096E72"
                    },
                    children: "color"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: ": "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#FF6D6D",
                      "--1": "#984E4D"
                    },
                    children: "transparent"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: ";"
                  })]
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: "}"
                  })
                })
              })]
            })
          }), createVNode(_components.div, {
            class: "copy",
            children: createVNode(_components.button, {
              title: "Copy to clipboard",
              "data-copied": "Copied!",
              "data-code": "h1 {  background: linear-gradient(to right, red, blue);  background-clip: text;  -webkit-background-clip: text;  color: transparent;}",
              children: createVNode(_components.div, {})
            })
          })]
        })
      }), createVNode($$ContentImage, {
        src: textGradientImg,
        alt: "Text Gradient Example"
      })]
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

const url = "src/content/docs/css/effects/gradients.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/css/effects/gradients.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/css/effects/gradients.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
