import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import 'clsx';

const frontmatter = {
  "title": "Docker Cheat Sheet မာတိကာ",
  "description": "အသုံးအများဆုံး Docker နှင့် Docker Compose Command များ အကျဉ်းချုပ်"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "images-ပုံစံခွက်များ-စီမံခန့်ခွဲခြင်း",
    "text": "Images (ပုံစံခွက်များ) စီမံခန့်ခွဲခြင်း"
  }, {
    "depth": 3,
    "slug": "containers-အသက်ဝင်နေသော-ဘူးများ-စီမံခန့်ခွဲခြင်း",
    "text": "Containers (အသက်ဝင်နေသော ဘူးများ) စီမံခန့်ခွဲခြင်း"
  }, {
    "depth": 3,
    "slug": "debugging-နှင့်-ဆန်းစစ်ခြင်း",
    "text": "Debugging နှင့် ဆန်းစစ်ခြင်း"
  }, {
    "depth": 3,
    "slug": "docker-compose",
    "text": "Docker Compose"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>နေ့စဉ်အလုပ်ခွင်မှာ အများဆုံးသုံးရမယ့် Docker Commands များကို စုစည်းပေးထားပါတယ်။</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"images-ပုံစံခွက်များ-စီမံခန့်ခွဲခြင်း\">Images (ပုံစံခွက်များ) စီမံခန့်ခွဲခြင်း</h3><a class=\"sl-anchor-link\" href=\"#images-ပုံစံခွက်များ-စီမံခန့်ခွဲခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Images (ပုံစံခွက်များ) စီမံခန့်ခွဲခြင်း”</span></a></div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th align=\"left\">Command</th><th align=\"left\">လုပ်ဆောင်ချက် (Action)</th></tr></thead><tbody><tr><td align=\"left\"><code dir=\"auto\">docker pull &#x3C;image_name></code></td><td align=\"left\">Docker Hub မှ Image ကို Download ဆွဲရန်</td></tr><tr><td align=\"left\"><code dir=\"auto\">docker images</code></td><td align=\"left\">မိမိစက်ထဲရှိ Download ဆွဲထားသော Image စာရင်းကြည့်ရန်</td></tr><tr><td align=\"left\"><code dir=\"auto\">docker rmi &#x3C;image_name_or_id></code></td><td align=\"left\">Image တစ်ခုကို ဖျက်ရန်</td></tr><tr><td align=\"left\"><code dir=\"auto\">docker build -t &#x3C;name> .</code></td><td align=\"left\">လက်ရှိဖိုဒါရှိ Dockerfile ကိုသုံး၍ Image အသစ်တည်ဆောက်ရန်</td></tr></tbody></table>\n<hr>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"containers-အသက်ဝင်နေသော-ဘူးများ-စီမံခန့်ခွဲခြင်း\">Containers (အသက်ဝင်နေသော ဘူးများ) စီမံခန့်ခွဲခြင်း</h3><a class=\"sl-anchor-link\" href=\"#containers-အသက်ဝင်နေသော-ဘူးများ-စီမံခန့်ခွဲခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Containers (အသက်ဝင်နေသော ဘူးများ) စီမံခန့်ခွဲခြင်း”</span></a></div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th align=\"left\">Command</th><th align=\"left\">လုပ်ဆောင်ချက် (Action)</th></tr></thead><tbody><tr><td align=\"left\"><code dir=\"auto\">docker run -d -p 80:80 &#x3C;image></code></td><td align=\"left\">Image ကို အသုံးပြု၍ Container သစ် စတင် Run ပါ (Background တွင်)</td></tr><tr><td align=\"left\"><code dir=\"auto\">docker ps</code></td><td align=\"left\">စတင်အလုပ်လုပ် (Run) နေသော Container စာရင်းကြည့်ရန်</td></tr><tr><td align=\"left\"><code dir=\"auto\">docker ps -a</code></td><td align=\"left\">ရပ်ထားသော Container များပါမကျန် အားလုံးကြည့်ရန်</td></tr><tr><td align=\"left\"><code dir=\"auto\">docker stop &#x3C;container_id></code></td><td align=\"left\">Run နေသော Container ကို ရပ်တန့်ရန်</td></tr><tr><td align=\"left\"><code dir=\"auto\">docker start &#x3C;container_id></code></td><td align=\"left\">ရပ်ထားသည်ကို ပြန်လည် စတင်ရန်</td></tr><tr><td align=\"left\"><code dir=\"auto\">docker restart &#x3C;container_id></code></td><td align=\"left\">Container ကို Restart ချရန်</td></tr><tr><td align=\"left\"><code dir=\"auto\">docker rm &#x3C;container_id></code></td><td align=\"left\">ရပ်ထားသော Container ကို အပြီးတိုင် ဖျက်ပစ်ရန်</td></tr><tr><td align=\"left\"><code dir=\"auto\">docker rm -f &#x3C;container_id></code></td><td align=\"left\">Force remove (Run နေလျှင်ပင် အတင်းအဓမ္မ ဖျက်ပစ်ရန်)</td></tr></tbody></table>\n<hr>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"debugging-နှင့်-ဆန်းစစ်ခြင်း\">Debugging နှင့် ဆန်းစစ်ခြင်း</h3><a class=\"sl-anchor-link\" href=\"#debugging-နှင့်-ဆန်းစစ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Debugging နှင့် ဆန်းစစ်ခြင်း”</span></a></div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th align=\"left\">Command</th><th align=\"left\">လုပ်ဆောင်ချက် (Action)</th></tr></thead><tbody><tr><td align=\"left\"><code dir=\"auto\">docker logs -f &#x3C;container_id></code></td><td align=\"left\">Container အတွင်းမှ ထွက်နေသော Logs များကို Live ကြည့်ရန်</td></tr><tr><td align=\"left\"><code dir=\"auto\">docker exec -it &#x3C;id> sh</code> သို့ <code dir=\"auto\">bash</code></td><td align=\"left\">Run နေသော Container အတွင်းသို့ (Terminal) ဝင်ရောက်ရန် 🚪 (ဝင်ပြင်ရန်)</td></tr><tr><td align=\"left\"><code dir=\"auto\">docker top &#x3C;container_id></code></td><td align=\"left\">Container တစ်ခု၏ CPU &#x26; RAM သုံးစွဲမှုကို ကြည့်ရန်</td></tr><tr><td align=\"left\"><code dir=\"auto\">docker system prune -a</code></td><td align=\"left\">🚨 အသုံးမပြုတော့သော Image, Container, Network အဟောင်းများအားလုံးကို ရှင်းလင်းရန် (Space free ဖန်တီးရန်)</td></tr></tbody></table>\n<hr>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"docker-compose\">Docker Compose</h3><a class=\"sl-anchor-link\" href=\"#docker-compose\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Docker Compose”</span></a></div>\n<p><em>(ဖိုဒါအတွင်း <code dir=\"auto\">docker-compose.yml</code> ရှိနေရန် လိုအပ်သည်)</em></p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th align=\"left\">Command</th><th align=\"left\">လုပ်ဆောင်ချက် (Action)</th></tr></thead><tbody><tr><td align=\"left\"><code dir=\"auto\">docker-compose up</code></td><td align=\"left\">ဖိုင်ပါ Services များအားလုံးကို တည်ဆောက်ပြီး စတင် Run ရန်</td></tr><tr><td align=\"left\"><code dir=\"auto\">docker-compose up -d</code></td><td align=\"left\">Background မှခွဲ၍ Run ထားရန် (Terminal ပိတ်လျှင်ပင် ဆက်အလုပ်လုပ်မည်)</td></tr><tr><td align=\"left\"><code dir=\"auto\">docker-compose ps</code></td><td align=\"left\">Compose ဖြင့် Run ထားသော Container အခြေအနေကြည့်ရန်</td></tr><tr><td align=\"left\"><code dir=\"auto\">docker-compose logs -f</code></td><td align=\"left\">Services အားလုံး၏ Logs ကို စုပေါင်းကြည့်ရန်</td></tr><tr><td align=\"left\"><code dir=\"auto\">docker-compose down</code></td><td align=\"left\">Services များအားလုံးကို ရပ်တန့်ပြီး Container များကိုပါ ဖျက်သိမ်းရန်</td></tr><tr><td align=\"left\"><code dir=\"auto\">docker-compose build</code></td><td align=\"left\">Dockerfile အပြောင်းအလဲရှိပါက Image များကို ပြန်လည် Build လုပ်ရန်</td></tr></tbody></table>"
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
const url = "src/content/docs/docker/summary/cheatsheet.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/docker/summary/cheatsheet.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/docker/summary/cheatsheet.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
