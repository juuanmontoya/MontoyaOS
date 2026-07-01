export const EXPENSE_CATEGORIES = [
  "Alimentación",
  "Transporte",
  "Hogar",
  "Familia",
  "Trabajo",
  "Personal",
  "Otros",
] as const;

export const PAYMENT_METHODS = [
  "Efectivo",
  "Bancolombia",
  "Nequi",
  "Davivienda",
  "Tarjeta de crédito",
  "American Express",
  "Otro",
] as const;

export type ExpenseCategory = (typeof EXPENSE_CATEGORIES)[number];
export type PaymentMethod = (typeof PAYMENT_METHODS)[number];

export type ExpenseFormData = {
  amount: number;
  category: ExpenseCategory;
  paymentMethod: PaymentMethod;
  description: string;
};
