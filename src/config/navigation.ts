import type { LucideIcon } from "lucide-react";
import { LayoutDashboard, Settings, Wallet } from "lucide-react";

export type NavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  description: string;
};

export const mainNavItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
    description: "Financial overview",
  },
  {
    title: "Finanzas",
    href: "/finanzas",
    icon: Wallet,
    description: "Accounts and transactions",
  },
  {
    title: "Configuración",
    href: "/configuracion",
    icon: Settings,
    description: "Preferences and integrations",
  },
];

export const siteConfig = {
  name: "MontoyaOS",
  description: "Personal financial operating system",
};
