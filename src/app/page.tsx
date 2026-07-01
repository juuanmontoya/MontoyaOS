import { HomeGreeting } from "@/components/home/home-greeting";
import { QuickActions } from "@/components/home/quick-actions";
import { StatCard } from "@/components/home/stat-card";

export default function HomePage() {
  return (
    <div className="pb-8">
      <HomeGreeting />

      <section
        aria-label="Resumen del día"
        className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
      >
        <StatCard title="Dinero disponible" value="$0" />
        <StatCard title="Ingresos del mes" value="$0" />
        <StatCard title="Gastos del mes" value="$0" />
        <StatCard
          title="Tareas de hoy"
          value="No tienes tareas pendientes"
          valueClassName="text-base font-medium leading-relaxed text-muted-foreground md:text-lg"
        />
      </section>

      <QuickActions />
    </div>
  );
}
