import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Play, Upload } from "lucide-react";

export default function QuerySimulatorPage() {
  const engines = [
    { id: "chatgpt", name: "ChatGPT", enabled: true },
    { id: "claude", name: "Claude", enabled: true },
    { id: "gemini", name: "Gemini", enabled: true },
    { id: "perplexity", name: "Perplexity", enabled: true },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Query Simulator</h1>
          <p className="text-muted-foreground mt-2">
            Test how your brand appears across multiple AI search engines
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Bulk Query Testing</CardTitle>
                <CardDescription>
                  Enter queries (one per line) to test across selected AI engines
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Enter Queries
                  </label>
                  <Textarea
                    placeholder="Best project management software for startups&#10;Top CRM solutions for small business&#10;How to choose marketing automation tools"
                    rows={10}
                    className="font-mono text-sm"
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    Each line will be tested as a separate query
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <Button className="flex-1">
                    <Play className="mr-2 h-4 w-4" />
                    Run Simulation
                  </Button>
                  <Button variant="outline">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload CSV
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Simulations</CardTitle>
                <CardDescription>Your previous query tests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <p>No simulations yet</p>
                  <p className="text-sm mt-1">Run your first simulation to see results here</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>AI Engines</CardTitle>
                <CardDescription>Select engines to test</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {engines.map((engine) => (
                    <div
                      key={engine.id}
                      className="flex items-center justify-between p-3 border rounded-lg"
                    >
                      <span className="font-medium">{engine.name}</span>
                      <Badge variant={engine.enabled ? "default" : "secondary"}>
                        {engine.enabled ? "Active" : "Inactive"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Simulation Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Brand Name</label>
                  <input
                    type="text"
                    placeholder="Your Brand"
                    className="w-full mt-1 px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Competitors</label>
                  <input
                    type="text"
                    placeholder="Comma separated"
                    className="w-full mt-1 px-3 py-2 border rounded-md"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
