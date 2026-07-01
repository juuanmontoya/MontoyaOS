import { Wallet } from "lucide-react";

import { EmptyState } from "@/components/layout/empty-state";
import { PageHeader } from "@/components/layout/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function FinanzasPage() {
  return (
    <>
      <PageHeader
        title="Finanzas"
        description="Manage accounts, categories, and transactions from a single place."
      />

      <div className="space-y-6">
        <Card className="border-border/60 shadow-none">
          <CardHeader>
            <CardTitle>Accounts</CardTitle>
            <CardDescription>
              Bank accounts, cards, and cash positions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EmptyState
              icon={<Wallet className="h-6 w-6" strokeWidth={1.5} />}
              title="No accounts yet"
              description="Create your accounts schema in Supabase, then fetch and render them here."
            />
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-none">
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>
              Recent activity across all linked accounts.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EmptyState
              icon={<Wallet className="h-6 w-6" strokeWidth={1.5} />}
              title="No transactions yet"
              description="Transaction history will display here after your Supabase tables are connected."
            />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
