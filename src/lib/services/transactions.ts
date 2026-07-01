import { createClient } from "@/lib/supabase/server";

export async function getLatestTransactions() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("transactions")
    .select(`
      id,
      amount,
      description,
      transaction_date,
      type,
      categories(name)
    `)
    .order("transaction_date", { ascending: false })
    .limit(5);

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}