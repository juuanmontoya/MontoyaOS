"use client";

import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { useState } from "react";

import { ExpenseModal } from "@/components/expenses/expense-modal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type QuickActionsProps = {
  className?: string;
};

export function QuickActions({ className }: QuickActionsProps) {
  const [expenseModalOpen, setExpenseModalOpen] = useState(false);

  return (
    <>
      <div
        className={cn(
          "mt-16 flex flex-col gap-4 sm:flex-row sm:gap-5 md:mt-20",
          className,
        )}
      >
        <Button
          size="lg"
          className="h-14 flex-1 rounded-2xl text-base font-medium shadow-[0_1px_2px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.08)]"
          onClick={() => setExpenseModalOpen(true)}
        >
          <ArrowDownLeft className="h-5 w-5" strokeWidth={1.75} />
          Registrar gasto
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="h-14 flex-1 rounded-2xl border border-border/60 bg-secondary/80 text-base font-medium shadow-[0_1px_2px_rgba(0,0,0,0.03),0_6px_20px_rgba(0,0,0,0.04)] hover:bg-secondary"
        >
          <ArrowUpRight className="h-5 w-5" strokeWidth={1.75} />
          Registrar ingreso
        </Button>
      </div>

      <ExpenseModal open={expenseModalOpen} onOpenChange={setExpenseModalOpen} />
    </>
  );
}
