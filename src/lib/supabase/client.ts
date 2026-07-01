import { createBrowserClient } from "@supabase/ssr";

import { assertSupabaseEnv } from "@/lib/supabase/env";
import type { Database } from "@/types/database.types";

export function createClient() {
  const { url, anonKey } = assertSupabaseEnv();

  return createBrowserClient<Database>(url, anonKey);
}
