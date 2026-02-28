import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { $ as $$Image } from './_astro_assets_BIClmwXi.mjs';
import { c as createSvgComponent } from './runtime_nY0uhreE.mjs';
import './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import 'clsx';

const __0_____________assets_dsa_stack_push_pop_animation_svg__ = createSvgComponent({"meta":{"src":"/_astro/stack-push-pop-animation.CvjyjM_W.svg","width":800,"height":400,"format":"svg"},"attributes":{"viewBox":"0 0 800 400"},"children":"\n    <defs>\n        <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#334155\" />\n        </marker>\n        <marker id=\"arrow-blue\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#3b82f6\" />\n        </marker>\n        <marker id=\"arrow-red\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#ef4444\" />\n        </marker>\n    </defs>\n    <rect width=\"100%\" height=\"100%\" fill=\"#f8fafc\" rx=\"8\" />\n    \n    <text x=\"400\" y=\"40\" font-family=\"system-ui, sans-serif\" font-size=\"24\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\" dominant-baseline=\"middle\">Stack (LIFO - Last In, First Out)</text>\n    \n    <rect x=\"300\" y=\"150\" width=\"200\" height=\"200\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\" rx=\"0\" />\n    <line x1=\"300\" y1=\"150\" x2=\"300\" y2=\"350\" stroke=\"#334155\" stroke-width=\"4\" />\n    <line x1=\"500\" y1=\"150\" x2=\"500\" y2=\"350\" stroke=\"#334155\" stroke-width=\"4\" />\n    <line x1=\"300\" y1=\"350\" x2=\"500\" y2=\"350\" stroke=\"#334155\" stroke-width=\"4\" />\n    \n    <rect x=\"320\" y=\"300\" width=\"160\" height=\"40\" fill=\"#bfdbfe\" stroke=\"#3b82f6\" stroke-width=\"2\" rx=\"4\" /> <text x=\"400\" y=\"320\" font-family=\"system-ui, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\" text-anchor=\"middle\" dominant-baseline=\"middle\">Plate 1</text>\n    <rect x=\"320\" y=\"250\" width=\"160\" height=\"40\" fill=\"#93c5fd\" stroke=\"#2563eb\" stroke-width=\"2\" rx=\"4\" /> <text x=\"400\" y=\"270\" font-family=\"system-ui, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\" text-anchor=\"middle\" dominant-baseline=\"middle\">Plate 2</text>\n    <rect x=\"320\" y=\"200\" width=\"160\" height=\"40\" fill=\"#60a5fa\" stroke=\"#1d4ed8\" stroke-width=\"2\" rx=\"4\" /> <text x=\"400\" y=\"220\" font-family=\"system-ui, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\" text-anchor=\"middle\" dominant-baseline=\"middle\">Plate 3 (Top)</text>\n    \n    <path d=\"M 200 100 Q 350 100 350 180\" stroke=\"#22c55e\" stroke-width=\"3\" fill=\"none\" marker-end=\"url(#arrow)\" />\n    <text x=\"200\" y=\"80\" font-family=\"system-ui, sans-serif\" font-size=\"18\" font-weight=\"bold\" fill=\"#22c55e\" text-anchor=\"middle\" dominant-baseline=\"middle\">PUSH (Add)</text>\n    \n    <path d=\"M 450 180 Q 450 100 600 100\" stroke=\"#ef4444\" stroke-width=\"3\" fill=\"none\" marker-end=\"url(#arrow-red)\" />\n    <text x=\"600\" y=\"80\" font-family=\"system-ui, sans-serif\" font-size=\"18\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\" dominant-baseline=\"middle\">POP (Remove)</text>\n\n    "});

const __1_____________assets_dsa_undo_timeline_diagram_svg__ = createSvgComponent({"meta":{"src":"/_astro/undo-timeline-diagram.Cdl5IjXa.svg","width":800,"height":400,"format":"svg"},"attributes":{"viewBox":"0 0 800 400"},"children":"\n    <defs>\n        <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#334155\" />\n        </marker>\n        <marker id=\"arrow-blue\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#3b82f6\" />\n        </marker>\n        <marker id=\"arrow-red\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#ef4444\" />\n        </marker>\n    </defs>\n    <rect width=\"100%\" height=\"100%\" fill=\"#f8fafc\" rx=\"8\" />\n    \n    <text x=\"400\" y=\"40\" font-family=\"system-ui, sans-serif\" font-size=\"24\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\" dominant-baseline=\"middle\">Undo Feature using Stack</text>\n    \n    <rect x=\"100\" y=\"150\" width=\"120\" height=\"60\" fill=\"#f1f5f9\" stroke=\"#cbd5e1\" stroke-width=\"2\" rx=\"8\" /> <text x=\"160\" y=\"180\" font-family=\"system-ui, sans-serif\" font-size=\"16\" font-weight=\"normal\" fill=\"#334155\" text-anchor=\"middle\" dominant-baseline=\"middle\">Type 'Hello'</text>\n    <line x1=\"220\" y1=\"180\" x2=\"280\" y2=\"180\" stroke=\"#334155\" stroke-width=\"2\" marker-end=\"url(#arrow)\" />\n    \n    <rect x=\"280\" y=\"150\" width=\"120\" height=\"60\" fill=\"#f1f5f9\" stroke=\"#cbd5e1\" stroke-width=\"2\" rx=\"8\" /> <text x=\"340\" y=\"180\" font-family=\"system-ui, sans-serif\" font-size=\"16\" font-weight=\"normal\" fill=\"#334155\" text-anchor=\"middle\" dominant-baseline=\"middle\">Bold Text</text>\n    <line x1=\"400\" y1=\"180\" x2=\"460\" y2=\"180\" stroke=\"#334155\" stroke-width=\"2\" marker-end=\"url(#arrow)\" />\n    \n    <rect x=\"460\" y=\"150\" width=\"120\" height=\"60\" fill=\"#dbeafe\" stroke=\"#3b82f6\" stroke-width=\"2\" rx=\"8\" /> <text x=\"520\" y=\"180\" font-family=\"system-ui, sans-serif\" font-size=\"16\" font-weight=\"normal\" fill=\"#334155\" text-anchor=\"middle\" dominant-baseline=\"middle\">Delete Word</text>\n    \n    <path d=\"M 520 140 Q 430 80 340 140\" stroke=\"#ef4444\" stroke-width=\"3\" fill=\"none\" marker-end=\"url(#arrow-red)\" />\n    <text x=\"430\" y=\"90\" font-family=\"system-ui, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\" dominant-baseline=\"middle\">Ctrl+Z (Undo)</text>\n    <text x=\"430\" y=\"250\" font-family=\"system-ui, sans-serif\" font-size=\"16\" font-weight=\"normal\" fill=\"#334155\" text-anchor=\"middle\" dominant-baseline=\"middle\">Pops 'Delete Word' from the stack</text>\n\n    "});

const __2_____________assets_dsa_browser_back_stack_flow_svg__ = createSvgComponent({"meta":{"src":"/_astro/undo-timeline-diagram.Cdl5IjXa.svg","width":800,"height":400,"format":"svg"},"attributes":{"viewBox":"0 0 800 400"},"children":"\n    <defs>\n        <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#334155\" />\n        </marker>\n        <marker id=\"arrow-blue\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#3b82f6\" />\n        </marker>\n        <marker id=\"arrow-red\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#ef4444\" />\n        </marker>\n    </defs>\n    <rect width=\"100%\" height=\"100%\" fill=\"#f8fafc\" rx=\"8\" />\n    \n    <text x=\"400\" y=\"40\" font-family=\"system-ui, sans-serif\" font-size=\"24\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\" dominant-baseline=\"middle\">Undo Feature using Stack</text>\n    \n    <rect x=\"100\" y=\"150\" width=\"120\" height=\"60\" fill=\"#f1f5f9\" stroke=\"#cbd5e1\" stroke-width=\"2\" rx=\"8\" /> <text x=\"160\" y=\"180\" font-family=\"system-ui, sans-serif\" font-size=\"16\" font-weight=\"normal\" fill=\"#334155\" text-anchor=\"middle\" dominant-baseline=\"middle\">Type 'Hello'</text>\n    <line x1=\"220\" y1=\"180\" x2=\"280\" y2=\"180\" stroke=\"#334155\" stroke-width=\"2\" marker-end=\"url(#arrow)\" />\n    \n    <rect x=\"280\" y=\"150\" width=\"120\" height=\"60\" fill=\"#f1f5f9\" stroke=\"#cbd5e1\" stroke-width=\"2\" rx=\"8\" /> <text x=\"340\" y=\"180\" font-family=\"system-ui, sans-serif\" font-size=\"16\" font-weight=\"normal\" fill=\"#334155\" text-anchor=\"middle\" dominant-baseline=\"middle\">Bold Text</text>\n    <line x1=\"400\" y1=\"180\" x2=\"460\" y2=\"180\" stroke=\"#334155\" stroke-width=\"2\" marker-end=\"url(#arrow)\" />\n    \n    <rect x=\"460\" y=\"150\" width=\"120\" height=\"60\" fill=\"#dbeafe\" stroke=\"#3b82f6\" stroke-width=\"2\" rx=\"8\" /> <text x=\"520\" y=\"180\" font-family=\"system-ui, sans-serif\" font-size=\"16\" font-weight=\"normal\" fill=\"#334155\" text-anchor=\"middle\" dominant-baseline=\"middle\">Delete Word</text>\n    \n    <path d=\"M 520 140 Q 430 80 340 140\" stroke=\"#ef4444\" stroke-width=\"3\" fill=\"none\" marker-end=\"url(#arrow-red)\" />\n    <text x=\"430\" y=\"90\" font-family=\"system-ui, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\" dominant-baseline=\"middle\">Ctrl+Z (Undo)</text>\n    <text x=\"430\" y=\"250\" font-family=\"system-ui, sans-serif\" font-size=\"16\" font-weight=\"normal\" fill=\"#334155\" text-anchor=\"middle\" dominant-baseline=\"middle\">Pops 'Delete Word' from the stack</text>\n\n    "});

const frontmatter = {
  "title": "Stacks",
  "description": "Last-In, First-Out concept and Undo features."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "stacks-lifo",
    "text": "Stacks (LIFO)"
  }, {
    "depth": 3,
    "slug": "real-world-use-the-undo-button",
    "text": "Real World Use: The “Undo” Button"
  }, {
    "depth": 3,
    "slug": "browser-history",
    "text": "Browser History"
  }, {
    "depth": 3,
    "slug": "visual-guides",
    "text": "Visual Guides"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    "astro-image": "astro-image",
    p: "p",
    ...props.components
  }, _component0 = _components["astro-image"], {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"stacks-lifo\">Stacks (LIFO)</h2><a class=\"sl-anchor-link\" href=\"#stacks-lifo\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Stacks (LIFO)”</span></a></div>\n<p>Stack ဆိုတာ ပန်းကန်ပြား ဆေးဖို့ ပုံထားတာကို မြင်ယောင်ကြည့်ပါ။</p>\n<ul>\n<li>ဆေးမယ့် ပန်းကန်ကို အပေါ်ဆုံးမှာ တင်မယ် (<strong>Push</strong>).</li>\n<li>ဆေးပြီးရင် အပေါ်ဆုံးက ဟာကိုပဲ အရင်ယူမယ် (<strong>Pop</strong>).</li>\n<li>အောက်ဆုံးက ပန်းကန်ကို ယူချင်ရင် အပေါ်က ပန်းကန်တွေ အကုန်ဖယ်မှ ရမယ်။</li>\n</ul>\n<p>ဒါကို <strong>Last-In, First-Out (LIFO)</strong> ၊ “နောက်ဆုံးဝင်၊ အရင်ထွက်” လို့ ခေါ်ပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"real-world-use-the-undo-button\">Real World Use: The “Undo” Button</h3><a class=\"sl-anchor-link\" href=\"#real-world-use-the-undo-button\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Real World Use: The “Undo” Button”</span></a></div>\n<p>Microsoft Word သို့မဟုတ် Code Editor တွေမှာ စာရိုက်နေရင်း <code dir=\"auto\">Ctrl + Z</code> (Undo) နှိပ်လိုက်ရင် ဘာဖြစ်သွားလဲ?</p>\n<ol>\n<li>သင်လုပ်လိုက်တဲ့ Action တိုင်းကို Stack ထဲ ထည့်ထားတယ်။ (Push)</li>\n<li>Undo နှိပ်လိုက်တဲ့အခါ နောက်ဆုံးလုပ်ခဲ့တဲ့ Action ကို Stack ပေါ်ကနေ ယူထုတ်ပြီး ပြန်ဖျက်လိုက်တယ်။ (Pop)</li>\n</ol>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"browser-history\">Browser History</h3><a class=\"sl-anchor-link\" href=\"#browser-history\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Browser History”</span></a></div>\n<p>ဘရောက်ဇာမှာ Back button နှိပ်တာဟာလည်း Stack သဘောတရားပါပဲ။ လက်ရှိ Page ကနေ နောက်တစ်မျက်နှာ နှိပ်လိုက်ရင်၊ လက်ရှိ Page ကို Stack ထဲ ထည့်ခဲ့ပြီး ရှေ့ဆက်သွားတာပါ။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"visual-guides\">Visual Guides</h3><a class=\"sl-anchor-link\" href=\"#visual-guides\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Visual Guides”</span></a></div>\n"
    }), createVNode(_components.p, {
      children: [createVNode(_component0, {
        alt: "Stack Push/Pop Animation",
        src: __0_____________assets_dsa_stack_push_pop_animation_svg__
      }), "\n", createVNode(_component0, {
        alt: "Undo Timeline Diagram",
        src: __1_____________assets_dsa_undo_timeline_diagram_svg__
      }), "\n", createVNode(_component0, {
        alt: "Browser Back Stack Flow",
        src: __2_____________assets_dsa_browser_back_stack_flow_svg__
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

const url = "src/content/docs/dsa/module-3/stacks.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/dsa/module-3/stacks.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/dsa/module-3/stacks.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
