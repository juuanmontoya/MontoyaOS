const SPANISH_DATE_FORMAT: Intl.DateTimeFormatOptions = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};

export function getTimeGreeting(date = new Date()): string {
  const hour = date.getHours();

  if (hour < 12) return "Buenos días";
  if (hour < 20) return "Buenas tardes";
  return "Buenas noches";
}

export function formatSpanishDate(date = new Date()): string {
  const formatted = new Intl.DateTimeFormat("es-ES", SPANISH_DATE_FORMAT).format(
    date,
  );

  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

export function formatCurrency(amount: number, currency = "USD"): string {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
