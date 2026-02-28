import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { $ as $$Index } from './index_hH86I2-_.mjs';
import { c as $$CardGrid, d as $$LinkCard, e as $$Card } from './Code_WFUXKkih.mjs';
import { $ as $$Icon } from './Icon_CK40Z_jw.mjs';
import './_astro_assets_BIClmwXi.mjs';
import 'clsx';

const frontmatter = {
  "title": "တက္ကသိုလ်",
  "description": "Get started building your docs site with Starlight.",
  "template": "splash",
  "hero": {
    "tagline": "မိမိဘာသာစကားဖြင့် နက်နက်ရှိုင်းရှိုင်းနားလည်အောင် လေ့လာပါ။",
    "image": {
      "file": "../../assets/hero.svg"
    },
    "actions": [{
      "text": "Courses",
      "link": "/courses",
      "icon": "right-arrow"
    }, {
      "text": "About Us",
      "link": "/about",
      "icon": "external",
      "variant": "minimal"
    }]
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "popular-courses",
    "text": "Popular Courses"
  }, {
    "depth": 2,
    "slug": "စတင်လေ့လာရန်",
    "text": "စတင်လေ့လာရန်"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    p: "p",
    span: "span",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<hr>\n"
    }), createVNode("section", {
      class: "intro-section",
      children: [createVNode(_components.p, {
        children: createVNode(_components.p, {
          children: "ခက်ခဲသော နည်းပညာ သဘောတရားများကို ရိုးရှင်းလွယ်ကူစွာ ရှင်းလင်းထားသော သင်ခန်းစာများဖြင့်\nနက်နက်နဲနဲ လေ့လာနိုင်ပါပြီ"
        })
      }), createVNode("div", {
        style: "background-color: var(--sl-color-gray-6); color: var(--sl-color-black); padding: 1rem 2rem; border-radius: 0.5rem; font-size: 0.75rem; margin-top: 2rem; width: fit-content; border-left: 3px solid var(--sl-color-accent);",
        children: createVNode(_components.p, {
          children: ["Course updates များအတွက် ", createVNode("a", {
            href: "https://www.facebook.com/share/1DDxrT1dja/?mibextid=wwXIfr",
            target: "_blank",
            rel: "noopener noreferrer",
            "set:html": "Facebook Page"
          }), " ကို Follow လုပ်ထားပေးပါ။"]
        })
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"popular-courses\">Popular Courses</h2><a class=\"sl-anchor-link\" href=\"#popular-courses\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Popular Courses”</span></a></div>\n"
    }), createVNode($$CardGrid, {
      className: "concepts-grid",
      children: [createVNode($$LinkCard, {
        title: "AI Proficiency",
        description: "AI Tools များကို ထိရောက်စွာ အသုံးပြုပြီး Developer တစ်ယောက်အနေဖြင့် စွမ်းဆောင်ရည် မြှင့်တင်နည်းများကို လေ့လာခြင်း",
        href: "/ai-proficiency/foundations/introduction",
        icon: "rocket"
      }), createVNode($$LinkCard, {
        title: "JavaScript",
        description: "Web ၏ Programming Language ဖြစ်သော JavaScript ကို လေ့လာရန်",
        href: "/javascript/introduction/intro",
        icon: "seti:javascript"
      }), createVNode($$LinkCard, {
        title: "Frontend Architecture",
        description: "Frontend applications များအတွက် Architecture Pattern များနှင့် အကောင်းဆုံးများကို လေ့လာခြင်း",
        href: "/fe-architecture/introduction/welcome",
        icon: "puzzle"
      }), createVNode($$LinkCard, {
        title: "Advanced TypeScript",
        description: "TypeScript ၏ အဆင့်မြင့်သဘောတရားများကို နက်နက်နဲနဲ လေ့လာခြင်း",
        href: "/advanced-typescript/why-is-advanced-ts-needed/why-advanced-typescript",
        icon: "puzzle"
      }), createVNode($$LinkCard, {
        title: "Git Version Control",
        description: "Codes အပြောင်းအလဲများကို စနစ်တကျ စီမံခန့်ခွဲခြင်းနှင့် Teamwork အတွက် မရှိမဖြစ်လိုအပ်သော Git ကို လေ့လာခြင်း",
        href: "/git-course/introduction/why-git",
        icon: "git-branch"
      }), createVNode($$LinkCard, {
        title: "Web Performance",
        description: "Website တစ်ခု၏ စွမ်းဆောင်ရည်မြှင့်တင်ခြင်းနှင့် အမြန်နှုန်းတိုးမြှင့်ခြင်းဆိုင်ရာ နည်းပညာများကို လေ့လာခြင်း",
        href: "/web-performance/introduction/why-web-performance",
        icon: "open-book"
      }), createVNode($$LinkCard, {
        title: "Relational Database",
        description: "Database design principles မှ SQL queries များအထိ၊ data ကို စနစ်တကျ သိမ်းဆည်းခြင်းနှင့် စီမံခန့်ခွဲခြင်းဆိုင်ရာ နည်းပညာများကို လေ့လာခြင်း",
        href: "/relational-database/introduction/welcome-to-database",
        icon: "open-book"
      }), createVNode($$LinkCard, {
        title: "HTML",
        description: "Web development အတွက် မရှိမဖြစ် အခြေခံ HTML ကို လွယ်လွယ်နဲ့ လေ့လာခြင်း",
        href: "/html/introduction/welcome-to-html",
        icon: "open-book"
      })]
    }), "\n", createVNode("section", {
      class: "key-features",
      children: [createVNode("div", {
        class: "feature",
        children: [createVNode("div", {
          class: "feature-icon",
          children: createVNode($$Icon, {
            name: "open-book",
            size: "1.8rem"
          })
        }), createVNode("div", {
          class: "feature-content",
          "set:html": "<h3>မိမိဘာသာစကားဖြင့် လေ့လာခြင်း</h3><p><p>language ပိုင်းဆိုင်ရာ အတားအဆီးများကို ဖယ်ရှားကာ ပိုမိုလျင်မြန်စွာ\nနားလည်နိုင်ရန်</p></p>"
        })]
      }), createVNode("div", {
        class: "feature",
        children: [createVNode("div", {
          class: "feature-icon",
          children: createVNode($$Icon, {
            name: "setting",
            size: "1.8rem"
          })
        }), createVNode("div", {
          class: "feature-content",
          "set:html": "<h3>လက်တွေ့ ဥပမာများနှင့် ရှင်းလင်းထားခြင်း</h3><p><p>သီအိုရီသက်သက်မဟုတ်ဘဲ လက်တွေ့အသုံးချနိုင်သော ဥပမာများဖြင့် တင်ပြထားပါသည်</p></p>"
        })]
      }), createVNode("div", {
        class: "feature",
        children: [createVNode("div", {
          class: "feature-icon",
          children: createVNode($$Icon, {
            name: "pencil",
            size: "1.8rem"
          })
        }), createVNode("div", {
          class: "feature-content",
          "set:html": "<h3>အဆင့်ဆင့် လေ့လာခြင်း</h3><p><p>အခြေခံမှ အဆင့်မြင့်အထိ တဖြည်းဖြည်း နက်နက်နဲနဲ လေ့လာနိုင်ရန်\nစီစဉ်ထားပါသည်</p></p>"
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"စတင်လေ့လာရန်\">စတင်လေ့လာရန်</h2><a class=\"sl-anchor-link\" href=\"#စတင်လေ့လာရန်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “စတင်လေ့လာရန်”</span></a></div>\n"
    }), createVNode("div", {
      class: "study-paths",
      children: [createVNode("a", {
        href: "/html/introduction/welcome-to-html",
        class: "path-card block beginner",
        children: [createVNode(_components.h3, {
          children: [createVNode($$Icon, {
            name: "seti:html",
            size: "1.2em"
          }), " HTML"]
        }), createVNode(_components.p, {
          "set:html": "Web development အတွက် မရှိမဖြစ် အခြေခံ HTML ကို လွယ်လွယ်နဲ့ လေ့လာခြင်း"
        }), createVNode("div", {
          className: "link-content",
          children: [createVNode(_components.span, {
            children: "စတင်လေ့လာရန်"
          }), createVNode($$Icon, {
            name: "right-arrow",
            size: "1em"
          })]
        })]
      }), createVNode("a", {
        href: "/css/introduction/welcome",
        class: "path-card block beginner",
        children: [createVNode(_components.h3, {
          children: [createVNode($$Icon, {
            name: "seti:css",
            size: "1.2em"
          }), " CSS"]
        }), createVNode(_components.p, {
          "set:html": "Website တွေလှပဖို့ CSS ကို လေ့လာရန်"
        }), createVNode("div", {
          className: "link-content",
          children: [createVNode(_components.span, {
            children: "စတင်လေ့လာရန်"
          }), createVNode($$Icon, {
            name: "right-arrow",
            size: "1em"
          })]
        })]
      }), createVNode("a", {
        href: "/javascript/introduction/intro",
        class: "path-card block beginner",
        children: [createVNode(_components.h3, {
          children: [createVNode($$Icon, {
            name: "seti:javascript",
            size: "1.2em"
          }), " JavaScript"]
        }), createVNode(_components.p, {
          "set:html": "Web ၏ Programming Language ဖြစ်သော JavaScript ကို လေ့လာရန်"
        }), createVNode("div", {
          className: "link-content",
          children: [createVNode(_components.span, {
            children: "စတင်လေ့လာရန်"
          }), createVNode($$Icon, {
            name: "right-arrow",
            size: "1em"
          })]
        })]
      })]
    }), "\n", createVNode("section", {
      class: "quote-section",
      "set:html": "<blockquote><p><p>“A complex concept explained simply is the hallmark of true\nunderstanding.”</p></p><cite>Albert Einstein</cite></blockquote>"
    }), "\n", createVNode("section", {
      class: "upcoming-section",
      children: [createVNode(_components.h2, {
        children: [createVNode($$Icon, {
          name: "rocket",
          size: "1.2em"
        }), createVNode(_components.span, {
          "set:html": "မကြာမီလာမည့် သင်ခန်းစာများ"
        })]
      }), createVNode($$CardGrid, {
        class: "upcoming-topics",
        children: createVNode($$Card, {
          icon: "star",
          title: "Data Structures & Algorithms",
          "set:html": "<p>Software Engineering ၏ အခြေခံအုတ်မြစ်ဖြစ်သော Data Structure များနှင့် Algorithm များကို လေ့လာခြင်း</p>"
        })
      })]
    }), "\n", createVNode($$Index, {})]
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

const url = "src/content/docs/index.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
