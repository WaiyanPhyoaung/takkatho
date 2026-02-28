import { createServerClient, type CookieOptions } from "@supabase/ssr";

export const createSupabaseAdmin = () => {
    // Only used if you need admin rights, ignoring for this scope
}

export const supabaseClient = (cookies: any) => {
  return createServerClient(
    import.meta.env.PUBLIC_SUPABASE_URL || "https://example.supabase.co",
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY || "public-anon-key",
    {
      cookies: {
        get(key: string) {
          return cookies.get(key)?.value;
        },
        set(key: string, value: string, options: CookieOptions) {
          cookies.set(key, value, {
             ...options,
             // Ensure it works on localhost over HTTP where secure might otherwise be true
             secure: import.meta.env.PROD || false, 
             path: "/",
             sameSite: "Lax"
          });
        },
        remove(key: string, options: CookieOptions) {
          cookies.delete(key, {
            ...options,
            path: "/"
          });
        },
      },
    }
  );
};
