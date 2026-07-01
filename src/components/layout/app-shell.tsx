import { AppHeader } from "@/components/layout/app-header";
import { Sidebar } from "@/components/layout/sidebar";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex min-h-screen flex-1 flex-col">
        <AppHeader />
        <main className="flex-1">
          <div className="mx-auto w-full max-w-6xl px-4 py-10 md:px-8 md:py-14 lg:px-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
