import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { $ as $$ContentImage } from './Content-image_C5QzPmj4.mjs';
import 'clsx';

const jsError = new Proxy({"src":"/_astro/js-error.jAM3aUK7.png","width":992,"height":214,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/advanced-typescript/js-error.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "ဘာကြောင့် အဆင့်မြင့် TypeScript features တွေလိုအပ်တာလဲ?",
  "description": "ဘာကြောင့် အဆင့်မြင့် TypeScript features တွေလိုအပ်တာလဲ?"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "javascript-ရဲဲ့-မထင်မှတ်ထားတဲ့-ပြဿနာ",
    "text": "JavaScript ရဲဲ့ မထင်မှတ်ထားတဲ့ ပြဿနာ"
  }, {
    "depth": 3,
    "slug": "ရှင်းပြချက်",
    "text": "ရှင်းပြချက်"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"javascript-ရဲဲ့-မထင်မှတ်ထားတဲ့-ပြဿနာ\">JavaScript ရဲဲ့ မထင်မှတ်ထားတဲ့ ပြဿနာ</h3><a class=\"sl-anchor-link\" href=\"#javascript-ရဲဲ့-မထင်မှတ်ထားတဲ့-ပြဿနာ\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “JavaScript ရဲဲ့ မထင်မှတ်ထားတဲ့ ပြဿနာ”</span></a></div>\n<p>ကျွန်တော်တို့ Code တွေ ရေးကြတယ်၊ Program တွေ တည်ဆောက်ကြတယ်။ အစပိုင်းမှာတော့ JavaScript က အရမ်းလွယ်တယ်။ လိုချင်တာ အကုန် လိုက်လျောညီထွေ လုပ်လို့ရတယ်။\nဒါပေမယ့် တစ်ခါတလေကျတော့ ဒီ လိုက်လျောညီထွေရှိတာကြီးကပဲ ပြဿနာ ပြန်ဖြစ်နေတတ်တယ်။</p>\n<p>ကျွန်တော်တို့ Code တွေ ရေးပြီးပြီ၊ အားလုံး မှန်တယ် ထင်နေတာပဲ။ ဒါပေမယ့် Program ကို Run လိုက်တဲ့အခါကျမှ… “ဟင်၊ ဒီနေရာမှာ ဘာမှ မရှိပါလား?”\n“ဒီလို ဖြစ်သွားရတာလား?” ဆိုပြီး မထင်ထားတဲ့ Error တွေ ပေါ်လာတတ်တယ်။ Data ရဲ့ ပုံစံ မမှန်တာတို့၊ မှားယွင်းတဲ့ အချက်အလက် ထည့်သုံးမိတာတို့ပေါ့။ ဒီလိုမျိုး Code Run နေရင်း ရုတ်တရက် ပေါ်လာတဲ့ Error တွေက တကယ် ခေါင်းခဲစေတယ်။ အထူးသဖြင့် Code တွေ အများကြီး ဖြစ်လာပြီဆို ပိုဆိုးတာပေါ့။</p>\n<p>ဒီလိုမျိုး Run တဲ့အချိန်ကျမှ Error တက်တာကို ဒီ Code လေးနဲ့ နမူနာ ကြည့်ရအောင်ပါ။</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.p1z7b.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">let </span><span style=\"--0:#D7DBE0;--1:#403F53\">userData</span><span style=\"--0:#C792EA;--1:#8844AE\"> = { name: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Alice</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C792EA;--1:#8844AE\"> </span><span style=\"--0:#919F9F;--1:#5F636F\">/* age မပါဘူးနော် */</span><span style=\"--0:#C792EA;--1:#8844AE\"> }</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">greetUser</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">user</span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5D6376\">// user ထဲမှာ name ရှိတယ်လို့ ယူဆပြီး ရေးလိုက်တာ...</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#7FDBCA;--1:#096E72\">console</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">log</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D6DEEB;--1:#403F53\">`</span><span style=\"--0:#ECC48D;--1:#3B61B0\">Hello, </span><span style=\"--0:#E2817F;--1:#B23834\">${</span><span style=\"--0:#7FDBCA;--1:#096E72\">user</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">name</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">toUpperCase</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--0:#ECC48D;--1:#3B61B0\">!</span><span style=\"--0:#D6DEEB;--1:#403F53\">`</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5D6376\">// ဟာ... user ထဲက name က မပါလာတော့ Error တက်ပြီ!</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">greetUser</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\">(</span><span style=\"--0:#D7DBE0\">userData</span><span style=\"--0:#D6DEEB\">);</span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">greetUser</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#FF6A83;--1:#A24848\">null</span><span style=\"--0:#D6DEEB;--1:#403F53\">); </span><span style=\"--0:#919F9F;--1:#5D6376\">// သေချာပေါက် crash မှာပဲ</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"let userData = { name: &#x22;Alice&#x22; /* age မပါဘူးနော် */ };function greetUser(user) {  // user ထဲမှာ name ရှိတယ်လို့ ယူဆပြီး ရေးလိုက်တာ...  console.log(&#x60;Hello, ${user.name.toUpperCase()}!&#x60;);  // ဟာ... user ထဲက name က မပါလာတော့ Error တက်ပြီ!}greetUser(userData);greetUser(null); // သေချာပေါက် crash မှာပဲ\"><div></div></button></div></figure></div>\n<p>အပေါ်က code ကို run ကြည့်ပါက …</p>\n"
    }), createVNode($$ContentImage, {
      src: jsError,
      alt: "JS error"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ရှင်းပြချက်\"><strong>ရှင်းပြချက်</strong></h3><a class=\"sl-anchor-link\" href=\"#ရှင်းပြချက်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ရှင်းပြချက်”</span></a></div>\n<p>ဒီ Code လေးမှာဆိုရင် userData ထဲမှာ name ပဲပါပြီး age မပါတာတို့၊ ဒါမှမဟုတ် greetUser Function ကို null ဆိုတဲ့ ဘာမှ မဟုတ်တဲ့ Data နဲ့ ခေါ်လိုက်တာတို့ကြောင့် Program Run ရင်း Error တက်သွားတာကို ပြထားတယ်။ ဘာလို့လဲဆိုတော့ JavaScript က Code Run တဲ့အချိန်ကျမှ ‘အော်… ဒီ data က ဒီလို ပုံစံပါလား’ ဆိုတာ သိရတာကိုး။</p>"
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

const url = "src/content/docs/advanced-typescript/why-is-advanced-ts-needed/why-advanced-typescript.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/why-is-advanced-ts-needed/why-advanced-typescript.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/why-is-advanced-ts-needed/why-advanced-typescript.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
