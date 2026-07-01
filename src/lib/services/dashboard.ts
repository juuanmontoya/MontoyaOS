import { createClient } from "@/lib/supabase/server";

export async function getMonthlyExpenses() {
  const supabase = await createClient();

  const firstDayOfMonth = new Date();
  firstDayOfMonth.setDate(1);
  firstDayOfMonth.setHours(0, 0, 0, 0);

  const { data, error } = await supabase
  .from("transactions")
  .select("amount")
  .eq("type", "expense");

    if (error) {
        console.error(error);
        return 0;
      }
      
      console.log("ERROR:", error);
      console.log("DATA:", data);

  return data.reduce((total, item) => total + Number(item.amount), 0);
}

export async function getMonthlyIncome() {
    const supabase = await createClient();
  
    const firstDayOfMonth = new Date();
    firstDayOfMonth.setDate(1);
    firstDayOfMonth.setHours(0, 0, 0, 0);
  
    const { data, error } = await supabase
      .from("transactions")
      .select("amount")
      .eq("type", "income");
  
    if (error) {
      console.error(error);
      return 0;
    }
  
    return data.reduce((total, item) => total + Number(item.amount), 0);
  }