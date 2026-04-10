import { createClient as createSupabaseClient } from "@supabase/supabase-js";

// Cookie-free client for public read-only queries.
// Unlike the SSR client this never touches cookies / headers,
// so it can be called inside `unstable_cache` without opting
// the page out of caching.
export function createPublicClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
