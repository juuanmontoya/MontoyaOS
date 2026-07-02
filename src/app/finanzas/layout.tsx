import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Finanzas",
};

export default function FinanzasLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}