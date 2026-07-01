import { HomeGreeting } from "@/components/home/home-greeting";
import { QuickActions } from "@/components/home/quick-actions";
import { StatCard } from "@/components/home/stat-card";
import { getMonthlyExpenses } from "@/lib/services/dashboard";
import { getLatestTransactions } from "@/lib/services/transactions";

export default async function HomePage() {
  const monthlyExpenses = await getMonthlyExpenses();
  const latestTransactions = await getLatestTransactions();

  return (
    <div className="pb-8">
      <HomeGreeting />

      <section
        aria-label="Resumen del día"
        className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
      >
        <StatCard title="Dinero disponible" value="$0" />
        <StatCard title="Ingresos del mes" value="$0" />
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
            {transaction.description || transaction.categories?.name}
          </p>

          <p className="text-sm text-muted-foreground">
            {new Date(transaction.transaction_date).toLocaleDateString("es-CO")}
          </p>
        </div>

        <p className="font-semibold">
          ${Number(transaction.amount).toLocaleString("es-CO")}
        </p>
      </div>
    ))}
  </div>
</section>
    </div>
  );
}
