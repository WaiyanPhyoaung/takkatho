import { createServerClient } from '@supabase/ssr';

const supabaseClient = (cookies) => {
  return createServerClient(
    "https://example.supabase.co",
    "public-anon-key",
    {
      cookies: {
        get(key) {
          return cookies.get(key)?.value;
        },
        set(key, value, options) {
          cookies.set(key, value, {
            ...options,
            // Ensure it works on localhost over HTTP where secure might otherwise be true
            secure: true,
            path: "/",
            sameSite: "Lax"
          });
        },
        remove(key, options) {
          cookies.delete(key, {
            ...options,
            path: "/"
          });
        }
      }
    }
  );
};

export { supabaseClient as s };
