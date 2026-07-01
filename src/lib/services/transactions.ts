import { createClient } from "@/lib/supabase/server";

export async function getLatestTransactions() {
  const supabase = await createClient();

  const { data, error } = await supabase
  .from("transactions")
  .select("*")
  .order("transaction_date", { ascending: false })
  .limit(5);

  if (error) {
    console.error(error);
    return [];
  }

  console.log("LATEST:", data);

  return data;
}