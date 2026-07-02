"use client";

import { TransactionModal } from "./transaction-modal";

type IncomeModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function IncomeModal({
  open,
  onOpenChange,
}: IncomeModalProps) {
  return (
    <TransactionModal
      open={open}
      onOpenChange={onOpenChange}
      type="income"
    />
  );
}