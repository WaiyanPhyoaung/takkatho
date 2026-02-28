import { s as supabaseClient } from '../../../chunks/supabase_DJ7DpE6j.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  if (!email || !password) {
    return new Response("Email and password are required", { status: 400 });
  }
  const supabase = supabaseClient(cookies);
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  if (error) {
    return new Response(error.message, { status: 500 });
  }
  return redirect("/dashboard");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
