import { cn } from "@/lib/utils";

type StatCardProps = {
  title: string;
  value: string;
  className?: string;
  valueClassName?: string;
};

export function StatCard({
  title,
  value,
  className,
  valueClassName,
}: StatCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col justify-between rounded-3xl border border-border/50 bg-card p-8 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_12px_40px_rgba(0,0,0,0.04)] dark:border-white/[0.06] dark:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_12px_40px_rgba(0,0,0,0.25)]",
        className,
      )}
    >
      <p className="text-sm font-medium tracking-wide text-muted-foreground">
        {title}
      </p>
      <p
        className={cn(
          "mt-8 text-3xl font-semibold tracking-tight text-foreground tabular-nums",
          valueClassName,
        )}
      >
        {value}
      </p>
    </article>
  );
}
