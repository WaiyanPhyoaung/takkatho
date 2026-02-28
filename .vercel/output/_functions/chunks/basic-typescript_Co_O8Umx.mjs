import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const tsError1 = new Proxy({"src":"/_astro/ts-check1.Dai-OKQv.png","width":1401,"height":104,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/advanced-typescript/ts-check1.png";
							}
							
							return target[name];
						}
					});

const tsError2 = new Proxy({"src":"/_astro/ts-check2.D8_nXIDo.png","width":1484,"height":157,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/advanced-typescript/ts-check2.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "အခြေခံ TypeScript ရဲ့ အကူအညီ - ကြိုတင်စစ်ဆေးခြင်း",
  "description": "အခြေခံ TypeScript ရဲ့ အကူအညီ - ကြိုတင်စစ်ဆေးခြင်း"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "ရှင်းပြချက်",
    "text": "ရှင်းပြချက်"
  }];
}
const code = `
interface User {
  name: string;
  age: number;
}

function greetUser(user: User): void {
// အခု user က User Type ဖြစ်မှန်း၊ name က string ဖြစ်မှန်း TypeScript က သိနေပြီ
console.log(\`Hello, \${user.name.toUpperCase()}!\`);
}

let goodUserData: User = { name: "Alice", age: 30 }; // မှန်တယ်

// let badUserData: User = { name: "Bob" }; // ERROR: age မပါဘူးလို့ TypeScript က ကြိုပြောပြီ!
// greetUser(null); // ERROR: null က User Type မဟုတ်ဘူးလို့ ကြိုပြောပြီ!

greetUser(goodUserData); // အလုပ်လုပ်တယ်
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>ဒီလိုမျိုး Run တဲ့အချိန်ကျမှ Error တက်တာတွေကို သက်သာဖို့ အတွက်ဆိုရင် TypeScript က အများကြီး ကူညီပေးပါတယ်။ TypeScript က ကျွန်တော်တို့ကို Code မရေးခင် ကိုယ့် Data တွေက ဘယ်လို ပုံစံ၊ ဘယ်လို Type ဖြစ်ရမယ်ဆိုတာ သတ်မှတ်ခိုင်းတယ်။</p>\n<p>ဥပမာ “User” ဆိုတဲ့ Data ဆိုရင် သူ့မှာ “name” ဆိုတဲ့ စာသားနဲ့ “age” ဆိုတဲ့ ဂဏန်းပါရမယ် စသဖြင့် သတ်မှတ်တာပေါ့။ ဒါကို Static Typing လို့ခေါ်တယ်။</p>\n<p>ဒီလို သတ်မှတ်လိုက်တော့ ဘာကောင်းလဲဆိုတော့ Code ရေးနေတုန်းမှာတင် ဒါမှမဟုတ် Code ကို Program အဖြစ် မပြောင်းခင် Compile လုပ်နေတုန်းမှာတင် Type မှားတာတွေ၊ လိုအပ်တဲ့ အချက်အလက် (Property) မပါတာတွေကို TypeScript က ကြိုပြီး ပြောပြပေးတယ်။</p>\n<p>ဒီ Code လေးကို TypeScript နဲ့ ရေးကြည့်ရအောင်။</p>\n"
    }), createVNode(Code, {
      lang: "typescript",
      title: "index.ts",
      code: code
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>ကျွန်တော်တို့ Comment ပိတ်ထားတဲ့ စာကြောင်းတွေကို comment ပြန်ဖွင့်ကြည့်တဲ့ အခါ</p>\n"
    }), createVNode($$ContentImage, {
      src: tsError2,
      alt: "ts error"
    }), "\n", createVNode($$ContentImage, {
      src: tsError1,
      alt: "ts error"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ရှင်းပြချက်\">ရှင်းပြချက်</h3><a class=\"sl-anchor-link\" href=\"#ရှင်းပြချက်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ရှင်းပြချက်”</span></a></div>\n<p>TypeScript က ကျွန်တော်တို့ သတ်မှတ်ထားတဲ့ Type အတိုင်း ဟုတ်မဟုတ် Code ရေးနေတုန်းကတည်းက စစ်ပေးတယ်။ ဒါကြောင့် Run တဲ့အချိန်ကျမှ Error ဖြစ်မယ့်အစား အစောကြီးတင် သိပြီး ပြင်လို့ရသွားတယ်။ ဒါက Program ရေးရတာကို ပိုစိတ်ချရစေတယ်။</p>"
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

const url = "src/content/docs/advanced-typescript/why-is-advanced-ts-needed/basic-typescript.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/why-is-advanced-ts-needed/basic-typescript.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/why-is-advanced-ts-needed/basic-typescript.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, code, Content as default, file, frontmatter, getHeadings, url };
