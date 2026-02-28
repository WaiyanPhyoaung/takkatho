import { s as supabaseClient } from '../../../chunks/supabase_DJ7DpE6j.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ cookies, redirect }) => {
  const supabase = supabaseClient(cookies);
  await supabase.auth.signOut();
  cookies.delete("sb-access-token", { path: "/" });
  cookies.delete("sb-refresh-token", { path: "/" });
  return redirect("/");
};
const GET = async ({ cookies, redirect }) => {
  const supabase = supabaseClient(cookies);
  await supabase.auth.signOut();
  return redirect("/");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
