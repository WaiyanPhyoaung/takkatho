import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dso1QYyF.mjs';
import 'piccolore';
import { $ as $$MainLayout } from '../chunks/MainLayout_Cc_Sstab.mjs';
import { s as supabaseClient } from '../chunks/supabase_DJ7DpE6j.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://takkatho.dev");
const $$Signup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signup;
  const { cookies, redirect } = Astro2;
  const supabase = supabaseClient(cookies);
  const { data } = await supabase.auth.getUser();
  if (data.user) {
    return redirect("/dashboard");
  }
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Sign Up" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex items-center justify-center min-h-[70vh] px-4"> <div class="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800"> <h1 class="text-2xl font-bold text-center text-gray-900 dark:text-white">Create an Account</h1> <form action="/api/auth/signup" method="post" class="space-y-4"> <div> <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label> <input type="email" name="email" id="email" required class="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500"> </div> <div> <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label> <input type="password" name="password" id="password" required class="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500"> </div> <button type="submit" class="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Sign Up</button> </form> <p class="text-sm text-center text-gray-600 dark:text-gray-400">
Already have an account? <a href="/signin" class="text-blue-600 hover:underline dark:text-blue-400">Sign In</a> </p> </div> </main> ` })}`;
}, "/Users/waiyanphyoaung/code/waiyanphyoaung/src/pages/signup.astro", void 0);

const $$file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/pages/signup.astro";
const $$url = "/signup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signup,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
