import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dso1QYyF.mjs';
import 'piccolore';
import { $ as $$MainLayout } from '../chunks/MainLayout_Cc_Sstab.mjs';
import { s as supabaseClient } from '../chunks/supabase_DJ7DpE6j.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://takkatho.dev");
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const { cookies, redirect } = Astro2;
  const supabase = supabaseClient(cookies);
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    return redirect("/signin");
  }
  const user = data.user;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Dashboard" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 shadow-sm"> <h1 class="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Dashboard</h1> <p class="text-gray-600 dark:text-gray-400 mb-8">Welcome back. Here is your dashboard.</p> <div class="mb-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700"> <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Profile Information</h2> <div class="space-y-3"> <div class="flex"> <span class="w-32 font-medium text-gray-500 dark:text-gray-400">Email:</span> <span class="text-gray-900 dark:text-white">${user.email}</span> </div> <div class="flex"> <span class="w-32 font-medium text-gray-500 dark:text-gray-400">User ID:</span> <span class="text-gray-900 dark:text-white font-mono text-sm">${user.id}</span> </div> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"> <div class="p-6 border border-gray-200 dark:border-gray-700 rounded-lg"> <h3 class="text-lg font-semibold mb-2">My Courses</h3> <p class="text-gray-500 mb-4 text-sm">You haven't enrolled in any courses yet.</p> <a href="/courses" class="text-blue-600 hover:underline text-sm font-medium">Browse Courses &rarr;</a> </div> <div class="p-6 border border-gray-200 dark:border-gray-700 rounded-lg"> <h3 class="text-lg font-semibold mb-2">My Progress</h3> <p class="text-gray-500 mb-4 text-sm">No recent activity detected.</p> </div> </div> <div class="border-t border-gray-200 dark:border-gray-700 pt-6"> <form action="/api/auth/signout" method="POST"> <button type="submit" class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors font-medium">
Sign Out
</button> </form> </div> </div> </main> ` })}`;
}, "/Users/waiyanphyoaung/code/waiyanphyoaung/src/pages/dashboard.astro", void 0);

const $$file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
