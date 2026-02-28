import { c as createAstro, a as createComponent, f as addAttribute, e as renderHead, r as renderComponent, d as renderSlot, g as renderScript, b as renderTemplate } from './astro/server_Dso1QYyF.mjs';
import 'piccolore';
import { $ as $$Index$1 } from './index_hH86I2-_.mjs';
import { $ as $$Index } from './index_DiM2KO5A.mjs';
import { $ as $$Search } from './Search_CgScaBy5.mjs';
import { s as supabaseClient } from './supabase_DJ7DpE6j.mjs';
/* empty css                         */

const $$Astro = createAstro("https://takkatho.dev");
const $$StandaloneLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StandaloneLayout;
  const { title, description = "Myanmar Programming Learning Platform" } = Astro2.props;
  Astro2.url.pathname;
  const { cookies } = Astro2;
  const supabase = supabaseClient(cookies);
  const { data: authData } = await supabase.auth.getUser();
  const user = authData?.user;
  return renderTemplate`<html lang="my" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><title>${title} | Takkatho</title><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest">${renderHead()}</head> <body class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased"> <!-- Navigation --> <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="standalone-header h-16"> <!-- Logo --> <a href="/" class="standalone-header-logo flex items-center gap-3 group"> <img src="/favicon.svg" alt="Takkatho" class="w-14 h-14" loading="eager"> </a> <div class="standalone-header-search"> ${renderComponent($$result, "Search", $$Search, {})} </div> <!-- Right Actions --> <div class="standalone-header-actions flex items-center gap-3"> ${user ? renderTemplate`<a href="/dashboard" class="hidden sm:flex text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
Dashboard
</a>` : renderTemplate`<a href="/signin" class="hidden sm:flex text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
Sign In
</a>`} <!-- Theme Toggle --> <button id="theme-toggle" class="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200" aria-label="Toggle theme"> <svg class="w-5 h-5 hidden dark:block" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path> </svg> <svg class="w-5 h-5 block dark:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path> </svg> </button> </div> </div> </div> </nav> <!-- Main Content --> <main class="pt-16"> ${renderSlot($$result, $$slots["default"])} </main> <!-- Footer --> <footer class="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"> <div class="max-w-7xl mx-auto px-4 flex flex-col gap-2 md:flex-row justify-between sm:px-6 lg:px-8 py-12"> <p class="text-sm text-gray-500 dark:text-gray-500">
© 2024 Takkatho. All rights reserved.
</p> <p class="text-sm text-gray-500 dark:text-gray-500">
Made with ❤️ for Myanmar Developers
</p> </div> </footer> ${renderComponent($$result, "SpeedInsights", $$Index, {})} ${renderComponent($$result, "Analytics", $$Index$1, {})} ${renderScript($$result, "/Users/waiyanphyoaung/code/waiyanphyoaung/src/layouts/StandaloneLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/waiyanphyoaung/code/waiyanphyoaung/src/layouts/StandaloneLayout.astro", void 0);

export { $$StandaloneLayout as $ };
