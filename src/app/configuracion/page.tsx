import { Moon, Palette, Shield } from "lucide-react";

import { EmptyState } from "@/components/layout/empty-state";
import { PageHeader } from "@/components/layout/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { isSupabaseConfigured } from "@/lib/supabase/env";

export default function ConfiguracionPage() {
  const supabaseReady = isSupabaseConfigured();

  return (
    <>
      <PageHeader
        title="Configuración"
        description="Appearance, security, and backend preferences."
      />

      <div className="space-y-8">
        <section className="space-y-4">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Appearance
            </h2>
          </div>
          <Card className="border-border/60 shadow-none">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Palette className="h-4 w-4" />
                Theme
              </CardTitle>
              <CardDescription>
                Use the theme toggle in the header to switch between light,
                dark, and system modes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 rounded-xl bg-muted/30 px-4 py-3 text-sm text-muted-foreground">
                <Moon className="h-4 w-4 shrink-0" />
                Theme preference is stored locally in your browser.
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        <section className="space-y-4">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Backend
            </h2>
          </div>
          <Card className="border-border/60 shadow-none">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Shield className="h-4 w-4" />
                Supabase
              </CardTitle>
              <CardDescription>
                Client, server, and middleware helpers are ready under{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                  src/lib/supabase
                </code>
                .
              </CardDescription>
            </CardHeader>
            <CardContent>
              <EmptyState
                icon={<Shield className="h-6 w-6" strokeWidth={1.5} />}
                title={
                  supabaseReady
                    ? "Environment configured"
                    : "Awaiting configuration"
                }
                description={
                  supabaseReady
                    ? "Your Supabase project credentials are present. Add auth flows and user settings as needed."
                    : "Copy .env.example to .env.local and add your Supabase project URL and anon key."
                }
              />
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
}
