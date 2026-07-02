"use client";

import { TransactionModal } from "./transaction-modal";

type ExpenseModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ExpenseModal({
  open,
  onOpenChange,
}: ExpenseModalProps) {
  return (
    <TransactionModal
      open={open}
      onOpenChange={onOpenChange}
      type="expense"
    />
  );
}