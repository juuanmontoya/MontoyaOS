import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type EmptyStateProps = {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  action?: ReactNode;
};

export function EmptyState({
  icon,
  title,
  description,
  className,
  action,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-dashed border-border/80 bg-muted/20 px-8 py-16 text-center",
        className,
      )}
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-background text-muted-foreground shadow-sm ring-1 ring-border/60">
        {icon}
      </div>
      <h2 className="text-lg font-medium tracking-tight">{title}</h2>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      {action ? <div className="mt-8">{action}</div> : null}
    </div>
  );
}
