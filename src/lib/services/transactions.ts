import { createClient } from "@/lib/supabase/server";

export async function getLatestTransactions() {
  const supabase = await createClient();

  // Traer las últimas transacciones
  const { data: transactions, error: transactionsError } = await supabase
    .from("transactions")
    .select("*")
    .order("transaction_date", { ascending: false })
    .limit(5);

  if (transactionsError) {
    console.error(transactionsError);
    return [];
  }

  // Traer todas las categorías
  const { data: categories, error: categoriesError } = await supabase
    .from("categories")
    .select("id, name");

    console.log("CATEGORIES ERROR:", categoriesError);
console.log("CATEGORIES DATA:", categories);

  if (categoriesError) {
    console.error(categoriesError);
    return transactions;
  }

  // Unir categorías con transacciones
  console.log("CATEGORIES:", categories);
  const result = transactions.map((transaction) => {
    console.log(
      "Buscando:",
      transaction.category_id,
      categories.find((c) => c.id === transaction.category_id)
    );
  
    return {
      ...transaction,
      category_name:
        categories.find((c) => c.id === transaction.category_id)?.name ??
        "Sin categoría",
    };
  });

  console.log("LATEST:", result);

  return result;
}