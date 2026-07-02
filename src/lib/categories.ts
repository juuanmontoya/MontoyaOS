export const CATEGORY_MAP: Record<
  string,
  { icon: string }
> = {
  Alimentación: { icon: "🍔" },
  Familia: { icon: "👨‍👩‍👧" },
  Viajes: { icon: "✈️" },
  Personal: { icon: "🙋🏻‍♂️" },
  Iglesia: { icon: "⛪" },
  Trabajo: { icon: "💼" },
  Otros: { icon: "📦" },
  Hogar: { icon: "🏠" },
  Regalos: { icon: "🎁" },
  Transporte: { icon: "🚗" },
};

console.log("CATEGORIES FILE CARGADO");
console.log(CATEGORY_MAP);