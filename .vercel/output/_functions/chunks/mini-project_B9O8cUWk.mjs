import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_Dso1QYyF.mjs';
import { b as $$Aside } from './Code_WFUXKkih.mjs';
import './Icon_CK40Z_jw.mjs';
import { C as Code } from './index_817EwOpy.mjs';
import 'clsx';

const frontmatter = {
  "title": "Mini-Project: Typed Config Loader",
  "description": "Mini-Project: Typed Config Loader"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "ဒီ-mini-project-အကြောင်း",
    "text": "ဒီ Mini-Project အကြောင်း"
  }, {
    "depth": 3,
    "slug": "အဆင့်-၁-config-ရဲ့-ပုံစံနဲ့-default-value-တွေ-သတ်မှတ်ခြင်း",
    "text": "အဆင့် ၁: Config ရဲ့ ပုံစံနဲ့ ‘Default Value’ တွေ သတ်မှတ်ခြင်း"
  }, {
    "depth": 3,
    "slug": "အဆင့်-၂-config-တွေကို-load-လုပ်ပေးမယ့်-function-generics-နဲ့-utilities-တွေကို-သုံးပြီး",
    "text": "အဆင့် ၂: Config တွေကို load လုပ်ပေးမယ့် Function (Generics နဲ့ Utilities တွေကို သုံးပြီး)"
  }, {
    "depth": 4,
    "slug": "loadconfig-function-ရှင်းပြချက်",
    "text": "loadConfig Function ရှင်းပြချက်:"
  }, {
    "depth": 3,
    "slug": "အဆင့်-၃-config-loader-ကို-အသုံးပြုခြင်းနဲ့-satisfies-ကို-သုံးပြီး-loaded-config-ကို-စစ်ဆေးခြင်း",
    "text": "အဆင့် ၃: Config Loader ကို အသုံးပြုခြင်းနဲ့ satisfies ကို သုံးပြီး loaded config ကို စစ်ဆေးခြင်း"
  }, {
    "depth": 4,
    "slug": "satisfies-အသုံးပြုပုံ-ရှင်းပြချက်",
    "text": "satisfies အသုံးပြုပုံ ရှင်းပြချက်:"
  }];
}
const appConfig = `
interface AppConfig {
  env: "development" | "production"; // ဒီ App ကို ဘယ်ပတ်ဝန်းကျင် (environment) မှာ run မလဲ။ (ဥပမာ- development အတွက်လား၊ production အတွက်လား)
  port: number; // ဒီ App က ဘယ် port နံပါတ်ကနေ အလုပ်လုပ်မလဲ။ (ဂဏန်းဖြစ်ရမယ်)
  apiBaseUrl: string; // API တွေကို ဆက်သွယ်မယ့် အဓိက URL (Link) ။ (စာသားဖြစ်ရမယ်)
  featureFlags?: Record<string, boolean>; // App ရဲ့ feature တွေကို ဖွင့်မလား/ပိတ်မလား ထိန်းချုပ်မယ့် flag တွေ။ (? ပါလို့ ထည့်ချင်မှ ထည့်လို့ရတဲ့ property ပါ)
}
`;
const defaultValues = `
// ဒါတွေကတော့ Setting တွေအတွက် Default Value တွေပါ။
// Partial<AppConfig> လို့ ဘာလို့ သတ်မှတ်လဲဆိုတော့ AppConfig ထဲက properties တွေ အကုန်မထည့်ဘဲ၊
// ကျွန်တော်တို့ default ထားချင်တဲ့ properties တွေကိုပဲ ထည့်လို့ရလို့ပါ။
const defaultConfig: Partial<AppConfig> = {
  env: "development", // \`env\` မပါရင် \`development\` လို့ ဖြစ်စေမယ်။
  port: 3000, // \`port\` မပါရင် \`3000\` လို့ ဖြစ်စေမယ်။
  featureFlags: {
    logging: true // \`logging\` feature ကို \`true\` (ဖွင့်ထား) လို့ default ထားမယ်။
  }
};
`;
const loadConfig = `
// T က ကျွန်တော်တို့ App ရဲ့ Config ရဲ့ အပြည့်အစုံ ပုံစံ (ဥပမာ AppConfig) ပါ။
// D က ကျွန်တော်တို့ရဲ့ Default Value တွေရဲ့ ပုံစံ (ဥပမာ Partial<AppConfig>) ပါ။
function loadConfig<T extends object, D extends Partial<T>>( // Generic Types တွေဖြစ်တဲ့ <T, D> ကို ဒီမှာ သုံးထားတယ်။
  loadedRawConfig: Partial<T>, // အပြင်ကနေ (file ထဲကနေ) ရလာတဲ့ Config တွေ။ သူတို့က အပြည့်အစုံ မဖြစ်နိုင်ဘူး။
  defaultValues: D // ကျွန်တော်တို့ ကြိုတင်သတ်မှတ်ထားတဲ့ Default Value တွေ။
  ): Readonly<T> { // ဒီ Function ကနေ ပြန်လာမယ့် result က Readonly (ပြောင်းလို့မရ) ဖြစ်ပြီး T (AppConfig) ရဲ့ အပြည့်အစုံ ပုံစံဖြစ်ရမယ်။

// ဒီ Function ရဲ့ အဓိက အလုပ်က Default Value တွေနဲ့ အပြင်ကနေ ရလာတဲ့ Setting တွေကို ပေါင်းစပ်ဖို့ပါပဲ။
// အပြင်ကနေ ရလာတဲ့ Setting တွေမှာ default နဲ့ တူတဲ့ နာမည်ရှိရင် သူက default ကို အစားထိုးမယ် (ဦးစားပေးမယ်)။
// ဒါကို 'shallow merge' (အပေါ်ယံ ပေါင်းစပ်ခြင်း) လို့ ခေါ်ပါတယ်။
// ဥပမာ featureFlags လိုမျိုး nested object တွေဆိုရင်
// အသေးစိတ် ပေါင်းတာ (deep merge) က ပိုကောင်းပေမယ့် ဒီဥပမာမှာ ရိုးရှင်းအောင် shallow merge ပဲ သုံးထားပါတယ်။
const mergedConfig = {
...defaultValues, // Default Value တွေ
...loadedRawConfig, // အပြင်ကနေ ရလာတဲ့ Setting တွေ (ဒါတွေက default တွေပေါ်မှာ ထပ်သွားမယ်။)
} as T; // 'as T' ကို ဘာလို့ သုံးလဲဆိုတော့ ဒီပေါင်းစပ်ထားတဲ့ object ဟာ နောက်ဆုံးမှာ T (AppConfig) Type နဲ့ ကိုက်ညီလိမ့်မယ်လို့ TypeScript ကို ပြောပြလိုက်တာပါ။
// တကယ့် Project တွေမှာဆိုရင်တော့ Zod လိုမျိုး Library တွေနဲ့ ထပ်စစ်တာက ပိုပြီး Type မှန်ကန်မှုကို အာမခံနိုင်ပါတယ်။

// Object.freeze() ကို သုံးခြင်းဖြင့် mergedConfig object ကို ပြောင်းလဲလို့မရအောင် လုပ်လိုက်တာပါ။
// ဒါဆိုရင် ဒီ object ရဲ့ properties တွေကို နောက်မှ ထပ်ပြောင်းလို့ ရတော့မှာ မဟုတ်ဘူး။
return Object.freeze(mergedConfig); // final config ကို Readonly အဖြစ် ပြန်ပေး။
}
`;
const useConfig = `
// ဒါက အပြင်ကနေ (ဥပမာ JSON file ကနေ) ရလာမယ့် configuration data ကို အတုအယောင် လုပ်ထားတာပါ။
// ဒီ object က ပိုရှုပ်ထွေးနေရင် ဒါမှမဟုတ် code မှာ တိုက်ရိုက်ရေးရင် \`satisfies\` က အသုံးဝင်ပါတယ်။
const configFileContent = {
// env: "production", // ဒီ setting က file ထဲမှာ မပါဘူးလို့ စဉ်းစားကြည့်ရအောင်။
port: 8080,
apiBaseUrl: "/api/v2",
featureFlags: {
betaFeature: true,
// logging setting က ဒီမှာ မပါဘူး၊ default ကနေ ယူသွားမယ်။
},
customServiceUrl: "http://my.service" // ဒီ property က AppConfig ထဲမှာ မပါပါဘူး။
} satisfies Partial<AppConfig> & { customServiceUrl?: string }; // satisfies က Partial<AppConfig> နဲ့ ကိုက်ညီလားစစ်ပြီး၊ customServiceUrl လို အပိုတွေကိုလည်း ခွင့်ပြုတယ်။

// အကယ်၍ \`AppConfig\` မှာ ပါဝင်တဲ့ အစိတ်အပိုင်းတွေကိုပဲ သေချာအောင် စစ်ပြီး အပိုတွေကို ဖယ်ထုတ်ချင်ရင်-
const filteredConfigFileContent: Partial<AppConfig> = {
port: 8080,
apiBaseUrl: "/api/v2",
featureFlags: { betaFeature: true }
};

// loadConfig function ကို သုံးပြီး filteredConfigFileContent နဲ့ defaultConfig တွေကို ပေါင်းစပ်လိုက်ပါမယ်။
const finalAppConfig = loadConfig<AppConfig, Partial<AppConfig>>(
filteredConfigFileContent, // ဒါမှမဟုတ် configFileContent ကို တိုက်ရိုက်ပေးလို့လည်း ရတယ်။
defaultConfig
);

console.log("နောက်ဆုံးရလာတဲ့ Config:");
console.log(finalAppConfig);

// result တွေကို ကြည့်ရအောင်:
// finalAppConfig.env ဟာ "development" (defaultConfig ကနေ ရလာ) ဖြစ်မယ်။
// finalAppConfig.port ဟာ 8080 (configFileContent ကနေ ရလာ) ဖြစ်မယ်။
// finalAppConfig.apiBaseUrl ဟာ "/api/v2" (configFileContent ကနေ ရလာ) ဖြစ်မယ်။
// finalAppConfig.featureFlags ဟာ { betaFeature: true, logging: true } (ပေါင်းထားတာ၊ shallow merge ကို သတိပြုပါ) ဖြစ်မယ်။

// Type မှန်ကန်စွာ ခေါ်ယူသုံးစွဲခြင်း:
console.log("ဒီ App ကို ဘယ် environment မှာ run နေလဲ:", finalAppConfig.env);
console.log("API Base URL:", finalAppConfig.apiBaseUrl.toUpperCase());
if (finalAppConfig.featureFlags?.betaFeature) {
console.log("Beta feature ကို ဖွင့်ထားပါတယ်!");
}

// finalAppConfig.port = 3001; // Error! ဒါက Readonly<AppConfig> ဖြစ်နေလို့ ပြောင်းလို့မရပါဘူး။
// const customUrl = finalAppConfig.customServiceUrl; // Error! customServiceUrl က AppConfig ထဲမှာ မပါပါဘူး။
`;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      title: "ရည်ရွယ်ချက်",
      type: "tip",
      "set:html": "<p>သေးငယ်တဲ့၊ လက်တွေ့မှာ သုံးလို့ရတဲ့ ကိရိယာတစ်ခု (config loader) ကို အတူတူ\nတည်ဆောက်ကြည့်ကြမယ်။ ဒီ loader ထဲမှာ Generics၊ Utility Types နဲ့ <code dir=\"auto\">satisfies</code>\nကို ပေါင်းစပ်ပြီး ဘယ်လို အလုပ်လုပ်လဲဆိုတာ ပြသသွားမယ်။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ဒီ-mini-project-အကြောင်း\">ဒီ Mini-Project အကြောင်း</h3><a class=\"sl-anchor-link\" href=\"#ဒီ-mini-project-အကြောင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ဒီ Mini-Project အကြောင်း”</span></a></div>\n<p>ရိုးရှင်းတဲ့၊ type မှန်ကန်တဲ့ <code dir=\"auto\">configuration loader</code> (setting တွေကို သတ်မှတ်ပြီး အသုံးပြုဖို့ ပြင်ဆင်ပေးတဲ့စနစ်) တစ်ခု တည်ဆောက်ကြရအောင်။ ဒီစနစ်က ဘာတွေလုပ်ပေးမလဲဆိုတော့ -</p>\n<ul>\n<li>ကျွန်တော်တို့ရဲ့ App (Application) အတွက် Setting တွေ ဘယ်လိုပုံစံရှိရမယ်ဆိုတာကို အရင်ဆုံး သတ်မှတ်မယ်။</li>\n<li>ပြီးတော့ အပြင်ကနေ ရလာမယ့် Setting တွေကို ‘အတု’ ဖန်တီးပြီး ထည့်သွင်းမယ်။ (တကယ့် Project မှာဆိုရင် ဒါတွေက JSON file ထဲကနေ ဒါမှမဟုတ် Database ထဲကနေ လာနိုင်တယ်)။</li>\n<li>တစ်ခါတစ်လေ Setting တချို့က ပြည့်ပြည့်စုံစုံ မပါလာတတ်ဘူး။ အဲဒီအခါမျိုးမှာ မပါတဲ့ Setting တွေအတွက် ကျွန်တော်တို့ ကြိုတင်သတ်မှတ်ထားတဲ့ ‘Default Value’ (ပုံမှန်တန်ဖိုး) တွေ အစားထိုးပေးမယ်။</li>\n<li>နောက်ဆုံးရလာတဲ့ Setting တွေဟာ Type မှန်ကန်ကြောင်း (Type-safe ဖြစ်ကြောင်း) နဲ့ နောက်ထပ် ပြောင်းလို့မရအောင် (Immutable ဖြစ်အောင်) သေချာအောင် လုပ်ပေးမယ်။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အဆင့်-၁-config-ရဲ့-ပုံစံနဲ့-default-value-တွေ-သတ်မှတ်ခြင်း\">အဆင့် ၁: Config ရဲ့ ပုံစံနဲ့ ‘Default Value’ တွေ သတ်မှတ်ခြင်း</h3><a class=\"sl-anchor-link\" href=\"#အဆင့်-၁-config-ရဲ့-ပုံစံနဲ့-default-value-တွေ-သတ်မှတ်ခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အဆင့် ၁: Config ရဲ့ ပုံစံနဲ့ ‘Default Value’ တွေ သတ်မှတ်ခြင်း”</span></a></div>\n<p>ပထမဆုံးအနေနဲ့ ကျွန်တော်တို့ App ရဲ့ Setting တွေ (Config) ဘယ်လိုပုံစံရှိရမယ်ဆိုတာကို interface နဲ့ သတ်မှတ်ပါမယ်။ ဒါက AppConfig လို့ ခေါ်ပါတယ်။</p>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: appConfig,
      title: "config.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>ပြီးတော့ Setting တွေ မပါလာရင် အစားထိုးပေးမယ့် ‘Default Value’ တွေ (ပုံမှန်တန်ဖိုးတွေ) ကို သတ်မှတ်ပါမယ်။ ဒီ defaultConfig ကို Partial&#x3C;AppConfig> လို့ သတ်မှတ်ထားတာကို သတိထားပါ။</p>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: defaultValues,
      title: "config.ts"
    }), "\n", createVNode($$Aside, {
      title: "ရှင်းပြချက်",
      type: "note",
      "set:html": "<p><code dir=\"auto\">defaultConfig</code> ကို <code dir=\"auto\">Partial\\&#x3C;AppConfig></code> လို့ သတ်မှတ်ထားတာ ဘာကြောင့်လဲဆိုတော့၊ <code dir=\"auto\">AppConfig</code> ထဲက properties တွေ အကုန်မထည့်ဘဲ၊ ကျွန်တော်တို့ <code dir=\"auto\">default</code> ထားချင်တဲ့ properties တွေကိုပဲ ထည့်လို့ရအောင် လုပ်ထားတာပါ။</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အဆင့်-၂-config-တွေကို-load-လုပ်ပေးမယ့်-function-generics-နဲ့-utilities-တွေကို-သုံးပြီး\">အဆင့် ၂: Config တွေကို load လုပ်ပေးမယ့် Function (Generics နဲ့ Utilities တွေကို သုံးပြီး)</h3><a class=\"sl-anchor-link\" href=\"#အဆင့်-၂-config-တွေကို-load-လုပ်ပေးမယ့်-function-generics-နဲ့-utilities-တွေကို-သုံးပြီး\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အဆင့် ၂: Config တွေကို load လုပ်ပေးမယ့် Function (Generics နဲ့ Utilities တွေကို သုံးပြီး)”</span></a></div>\n<p>အခုဆိုရင် ကျွန်တော်တို့ရဲ့ အဓိက ‘Config Loader’ Function ကို တည်ဆောက်ပါမယ်။ ဒီ Function ထဲမှာ <code dir=\"auto\">Generics</code> နဲ့ <code dir=\"auto\">Utility Types</code> တွေကို ဘယ်လို အသုံးချလဲဆိုတာ တွေ့ရမှာပါ။</p>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: loadConfig,
      title: "config.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"loadconfig-function-ရှင်းပြချက်\"><code dir=\"auto\">loadConfig</code> Function ရှင်းပြချက်:</h4><a class=\"sl-anchor-link\" href=\"#loadconfig-function-ရှင်းပြချက်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “loadConfig Function ရှင်းပြချက်:”</span></a></div>\n<ul>\n<li><strong>Generics (&#x3C;T, D>):</strong>\n<ul>\n<li><code dir=\"auto\">T</code> ဆိုတာ ကျွန်တော်တို့ရဲ့ Config ရဲ့ အပြည့်အစုံ ပုံစံ (Type) ပါ။ ဥပမာ <code dir=\"auto\">AppConfig</code> လိုမျိုးပေါ့။</li>\n<li><code dir=\"auto\">D</code> ဆိုတာကတော့ <code dir=\"auto\">Default Value</code> တွေရဲ့ ပုံစံ (Type) ပါ။ <code dir=\"auto\">D</code> က <code dir=\"auto\">T</code> ရဲ့ တစ်စိတ်တစ်ပိုင်း (Partial) ဖြစ်ရမယ်လို့ သတ်မှတ်ထားတယ်။</li>\n</ul>\n</li>\n<li><strong>Input Parameters:</strong>\n<ul>\n<li><code dir=\"auto\">loadedRawConfig: Partial\\&#x3C;T>:</code> အပြင်ကနေ (JSON File ထဲကနေ) ရလာမယ့် Setting တွေပါ။ သူတို့က အမြဲတမ်း အပြည့်အစုံ ပါလာတာမျိုး မဟုတ်နိုင်လို့ Partial<code dir=\"auto\">\\&#x3C;T></code> လို့ သတ်မှတ်ထားတာပါ။</li>\n<li><code dir=\"auto\">defaultValues: D:</code> ကျွန်တော်တို့ ကြိုတင်သတ်မှတ်ထားတဲ့ ပုံမှန် (Default) တန်ဖိုးတွေပါ။</li>\n</ul>\n</li>\n<li><strong>Return Type: <code dir=\"auto\">Readonly\\&#x3C;T></code>:</strong> ဒီ Function ကနေ ပြန်လာမယ့် နောက်ဆုံးရလဒ် (Config Object) ဟာ <code dir=\"auto\">T</code> (AppConfig) ရဲ့ အပြည့်အစုံ Type ဖြစ်ရမယ်။ ပြီးတော့ <code dir=\"auto\">Readonly</code> ဆိုတဲ့ <code dir=\"auto\">Utility Type</code> ကို သုံးထားလို့ ဒီ Object ကို ပြောင်းလဲလို့ ရတော့မှာ မဟုတ်ပါဘူး။</li>\n<li><code dir=\"auto\">Object.freeze(mergedConfig)</code>:\nဒါက <code dir=\"auto\">mergedConfig</code> ဆိုတဲ့ Object ကို တကယ်ပဲ ပြောင်းလဲလို့မရအောင် လုပ်လိုက်တာပါ။ ဒါဆိုရင် ဒီ Object ရဲ့ properties တွေကို နောက်မှ ထပ်ပြောင်းလို့ ရတော့မှာ မဟုတ်ဘူး။</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"အဆင့်-၃-config-loader-ကို-အသုံးပြုခြင်းနဲ့-satisfies-ကို-သုံးပြီး-loaded-config-ကို-စစ်ဆေးခြင်း\">အဆင့် ၃: Config Loader ကို အသုံးပြုခြင်းနဲ့ satisfies ကို သုံးပြီး loaded config ကို စစ်ဆေးခြင်း</h3><a class=\"sl-anchor-link\" href=\"#အဆင့်-၃-config-loader-ကို-အသုံးပြုခြင်းနဲ့-satisfies-ကို-သုံးပြီး-loaded-config-ကို-စစ်ဆေးခြင်း\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “အဆင့် ၃: Config Loader ကို အသုံးပြုခြင်းနဲ့ satisfies ကို သုံးပြီး loaded config ကို စစ်ဆေးခြင်း”</span></a></div>\n<p>အခု ကျွန်တော်တို့ တည်ဆောက်ထားတဲ့ loadConfig function ကို လက်တွေ့ အသုံးပြုကြည့်ရအောင်။</p>\n<p>ပထမဆုံးအနေနဲ့၊ အပြင်ကနေ ရလာမယ့် config data ကို အတုအယောင် ဖန်တီးပါမယ်။ (တကယ့်အပြင်မှာဆိုရင် JSON file ကနေ လာနိုင်ပါတယ်)။ ဒီနေရာမှာ satisfies ကို ဘယ်လိုသုံးလဲဆိုတာ သတိထားပါ။</p>\n"
    }), createVNode(Code, {
      lang: "typescript",
      code: useConfig,
      title: "config.ts"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"satisfies-အသုံးပြုပုံ-ရှင်းပြချက်\"><code dir=\"auto\">satisfies</code> အသုံးပြုပုံ ရှင်းပြချက်:</h4><a class=\"sl-anchor-link\" href=\"#satisfies-အသုံးပြုပုံ-ရှင်းပြချက်\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “satisfies အသုံးပြုပုံ ရှင်းပြချက်:”</span></a></div>\n<ul>\n<li><code dir=\"auto\">configFileContent</code> ကို သတ်မှတ်တဲ့အခါ၊ <code dir=\"auto\">satisfies Partial\\&#x3C;AppConfig> &#x26; { customServiceUrl?: string }</code>ကို သုံးခြင်းအားဖြင့်<code dir=\"auto\">configFileContent</code>ဟာ<code dir=\"auto\">Partial\\&#x3C;AppConfig></code> ရဲ့ ပုံစံနဲ့ ကိုက်ညီရဲ့လားဆိုတာ စစ်ပေးတယ်။</li>\n<li>ဒါ့အပြင် <code dir=\"auto\">AppConfig</code> ထဲမှာ မပါဝင်ပေမယ့် <code dir=\"auto\">customServiceUrl</code> လိုမျိုး အပို properties တွေကိုလည်း ဒီ <code dir=\"auto\">configFileContent</code> ထဲမှာ ထည့်ခွင့်ပြုထားတာဖြစ်ပါတယ်။</li>\n</ul>"
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

const url = "src/content/docs/advanced-typescript/all-together/mini-project.mdx";
const file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/all-together/mini-project.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/content/docs/advanced-typescript/all-together/mini-project.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, appConfig, Content as default, defaultValues, file, frontmatter, getHeadings, loadConfig, url, useConfig };
