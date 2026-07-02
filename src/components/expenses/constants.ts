export const PAYMENT_METHODS = [
  "Efectivo",
  "Bancolombia",
  "Nequi",
  "Davivienda",
  "Tarjeta de crédito",
  "American Express",
  "Otro",
] as const;

export type PaymentMethod = (typeof PAYMENT_METHODS)[number];

export type ExpenseFormData = {
  amount: number;
  category: string;
  paymentMethod: PaymentMethod;
  description: string;
};