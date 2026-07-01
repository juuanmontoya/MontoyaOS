const copFormatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

export function parseCurrencyInput(value: string): number {
  const digits = value.replace(/\D/g, "");
  if (!digits) return 0;
  return Number.parseInt(digits, 10);
}

export function formatColombianPesos(amount: number): string {
  if (!amount) return "";
  return copFormatter.format(amount);
}

export function formatColombianPesosDisplay(amount: number): string {
  if (!amount) return "$0";
  return copFormatter.format(amount);
}
