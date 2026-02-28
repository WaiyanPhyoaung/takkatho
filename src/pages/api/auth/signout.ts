import type { APIRoute } from "astro";
import { supabaseClient } from "../../../lib/supabase";

export const POST: APIRoute = async ({ cookies, redirect }) => {
  const supabase = supabaseClient(cookies);
  // Optional but recommended: sign out on the Supabase server
  await supabase.auth.signOut();
  
  // The ssr client does cookies.delete internally, but just to be safe
  cookies.delete("sb-access-token", { path: "/" });
  cookies.delete("sb-refresh-token", { path: "/" });
  
  return redirect("/");
};

export const GET: APIRoute = async ({ cookies, redirect }) => {
  const supabase = supabaseClient(cookies);
  await supabase.auth.signOut();
  return redirect("/");
};
