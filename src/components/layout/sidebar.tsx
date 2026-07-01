"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { mainNavItems, siteConfig } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-full w-64 shrink-0 flex-col border-r border-border/60 bg-background/80 backdrop-blur-xl lg:flex">
      <div className="flex h-16 items-center px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight">
            {siteConfig.name}
          </span>
        </Link>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-4 py-6">
        {mainNavItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                isActive
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
              )}
            >
              <Icon
                className={cn(
                  "h-[1.125rem] w-[1.125rem] shrink-0",
                  isActive ? "text-foreground" : "text-muted-foreground",
                )}
              />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-8 py-6">
        <p className="text-xs text-muted-foreground">{siteConfig.description}</p>
      </div>
    </aside>
  );
}
