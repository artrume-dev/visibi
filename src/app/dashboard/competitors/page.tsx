import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Building2 } from "lucide-react";

export default function CompetitorsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Competitive Intelligence</h1>
          <p className="text-muted-foreground mt-2">
            Monitor competitors and identify opportunities
          </p>
        </div>

        <Card>
          <CardContent className="py-12">
            <div className="text-center text-muted-foreground">
              <Building2 className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">Coming Soon</p>
              <p className="text-sm mt-2">Competitive intelligence features will be available in Phase 2</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
