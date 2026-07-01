import { HomeGreeting } from "@/components/home/home-greeting";
import { QuickActions } from "@/components/home/quick-actions";
import { StatCard } from "@/components/home/stat-card";
import {
  getMonthlyExpenses,
  getMonthlyIncome,
} from "@/lib/services/dashboard";
import { getLatestTransactions } from "@/lib/services/transactions";
import { CATEGORY_MAP } from "@/lib/categories";

export default async function HomePage() {
  const monthlyExpenses = await getMonthlyExpenses();
  const monthlyIncome = await getMonthlyIncome();
  const availableMoney = monthlyIncome - monthlyExpenses;
  const latestTransactions = await getLatestTransactions();

  return (
    <div className="pb-8">
      <HomeGreeting />

      <section
        aria-label="Resumen del día"
        className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
      >
        <StatCard
  title="Dinero disponible"
  value={`$${availableMoney.toLocaleString("es-CO")}`}
/>

<StatCard
  title="Ingresos del mes"
  value={`$${monthlyIncome.toLocaleString("es-CO")}`}
/>

<StatCard
  title="Gastos del mes"
  value={`$${monthlyExpenses.toLocaleString("es-CO")}`}
/>
        <StatCard
          title="Tareas de hoy"
          value="No tienes tareas pendientes"
          valueClassName="text-base font-medium leading-relaxed text-muted-foreground md:text-lg"
        />
      </section>

      <QuickActions />
      <section className="mt-10">
  <h2 className="mb-4 text-xl font-semibold">Últimos movimientos</h2>

  <div className="rounded-3xl border border-border/50 bg-card">
    {latestTransactions.map((transaction: any) => (
      <div
        key={transaction.id}
        className="flex items-center justify-between border-b border-border/40 px-6 py-4 last:border-b-0"
      >
        <div>
        <p className="font-medium">
  {CATEGORY_MAP[transaction.category_id]?.icon}{" "}
  {transaction.description ||
    CATEGORY_MAP[transaction.category_id]?.name ||
    "Sin descripción"}
</p>

<p className="text-sm text-muted-foreground">
  {new Date(transaction.transaction_date).toLocaleDateString("es-CO", {
    day: "numeric",
    month: "short",
  })}
</p>
        </div>

        <p
  className={`font-semibold ${
    transaction.type === "income"
      ? "text-green-600"
      : "text-red-600"
  }`}
>
  {transaction.type === "income" ? "+" : "-"}$
  {Number(transaction.amount).toLocaleString("es-CO")}
</p>
      </div>
    ))}
  </div>
</section>
    </div>
  );
}
