import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowUpIcon, ArrowDownIcon, TrendingUp, AlertCircle } from "lucide-react";

export default function DashboardPage() {
  // Mock data for demonstration
  const metrics = {
    mentionRate: 68.5,
    mentionChange: 12.5,
    avgPosition: 2.3,
    positionChange: -0.8,
    citationCount: 147,
    citationChange: 23,
    sentimentScore: 0.82,
    sentimentChange: 0.15,
  };

  const engineData = [
    { name: "ChatGPT", mentions: 72, position: 2.1, sentiment: 0.85, color: "bg-green-500" },
    { name: "Claude", mentions: 68, position: 2.3, sentiment: 0.83, color: "bg-blue-500" },
    { name: "Gemini", mentions: 64, position: 2.6, sentiment: 0.78, color: "bg-yellow-500" },
    { name: "Perplexity", mentions: 70, position: 2.2, sentiment: 0.82, color: "bg-purple-500" },
  ];

  const recentQueries = [
    {
      query: "Best project management software for startups",
      engine: "ChatGPT",
      mentioned: true,
      position: 1,
      sentiment: "positive",
      time: "5 min ago",
    },
    {
      query: "Top CRM solutions for small business",
      engine: "Claude",
      mentioned: true,
      position: 2,
      sentiment: "positive",
      time: "12 min ago",
    },
    {
      query: "Marketing automation tools comparison",
      engine: "Gemini",
      mentioned: false,
      position: null,
      sentiment: null,
      time: "18 min ago",
    },
    {
      query: "How to choose business software",
      engine: "Perplexity",
      mentioned: true,
      position: 3,
      sentiment: "neutral",
      time: "25 min ago",
    },
  ];

  const alerts = [
    {
      type: "competitive_threat",
      severity: "high",
      title: "Competitor gaining position",
      description: "CompetitorX now appears before your brand in 3 key queries",
      time: "2 hours ago",
    },
    {
      type: "sentiment_drop",
      severity: "medium",
      title: "Sentiment decrease detected",
      description: "Average sentiment dropped by 0.05 in Gemini responses",
      time: "5 hours ago",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">GEO Performance Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Monitor your brand's presence across AI search engines
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Mention Rate"
            value={`${metrics.mentionRate}%`}
            change={metrics.mentionChange}
            trend="up"
          />
          <MetricCard
            title="Avg Position"
            value={metrics.avgPosition.toFixed(1)}
            change={metrics.positionChange}
            trend="up"
            inverseGood
          />
          <MetricCard
            title="Citations"
            value={metrics.citationCount}
            change={metrics.citationChange}
            trend="up"
          />
          <MetricCard
            title="Sentiment"
            value={metrics.sentimentScore.toFixed(2)}
            change={metrics.sentimentChange}
            trend="up"
          />
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="engines">By Engine</TabsTrigger>
            <TabsTrigger value="queries">Recent Queries</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Performance by AI Engine</CardTitle>
                  <CardDescription>Mention rates across different platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {engineData.map((engine) => (
                      <div key={engine.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{engine.name}</span>
                          <span className="text-sm text-muted-foreground">{engine.mentions}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div
                            className={`h-full ${engine.color}`}
                            style={{ width: `${engine.mentions}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest query simulations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentQueries.slice(0, 3).map((query, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-2 h-2 mt-2 rounded-full ${
                          query.mentioned ? "bg-green-500" : "bg-gray-300"
                        }`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{query.query}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {query.engine}
                            </Badge>
                            {query.mentioned && (
                              <span className="text-xs text-muted-foreground">
                                Position {query.position}
                              </span>
                            )}
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                          {query.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Engagement Trends</CardTitle>
                <CardDescription>Your GEO performance over the last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-lg">
                  <div className="text-center text-muted-foreground">
                    <TrendingUp className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Chart visualization will be added here</p>
                    <p className="text-xs mt-1">Using Recharts for data visualization</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="engines" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {engineData.map((engine) => (
                <Card key={engine.name}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {engine.name}
                      <Badge variant="secondary">{engine.mentions}% mentions</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold">{engine.mentions}%</p>
                        <p className="text-xs text-muted-foreground">Mention Rate</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{engine.position}</p>
                        <p className="text-xs text-muted-foreground">Avg Position</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{engine.sentiment.toFixed(2)}</p>
                        <p className="text-xs text-muted-foreground">Sentiment</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="queries" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Query History</CardTitle>
                <CardDescription>Recent simulation results</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentQueries.map((query, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 border rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium">{query.query}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <Badge variant="outline">{query.engine}</Badge>
                          {query.mentioned ? (
                            <>
                              <Badge variant="default" className="bg-green-600">Mentioned</Badge>
                              <span className="text-sm text-muted-foreground">
                                Position: {query.position}
                              </span>
                              <Badge variant="secondary">{query.sentiment}</Badge>
                            </>
                          ) : (
                            <Badge variant="destructive">Not Mentioned</Badge>
                          )}
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{query.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-6">
            <div className="space-y-4">
              {alerts.map((alert, idx) => (
                <Card key={idx} className={
                  alert.severity === "high" ? "border-red-200 bg-red-50" :
                  alert.severity === "medium" ? "border-yellow-200 bg-yellow-50" :
                  ""
                }>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <AlertCircle className={
                        alert.severity === "high" ? "text-red-600" :
                        alert.severity === "medium" ? "text-yellow-600" :
                        "text-blue-600"
                      } />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-base">{alert.title}</CardTitle>
                          <Badge variant={
                            alert.severity === "high" ? "destructive" :
                            alert.severity === "medium" ? "default" :
                            "secondary"
                          }>
                            {alert.severity}
                          </Badge>
                        </div>
                        <CardDescription className="mt-1">{alert.description}</CardDescription>
                        <p className="text-xs text-muted-foreground mt-2">{alert.time}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}

function MetricCard({
  title,
  value,
  change,
  trend,
  inverseGood = false,
}: {
  title: string;
  value: string | number;
  change: number;
  trend: "up" | "down";
  inverseGood?: boolean;
}) {
  const isPositive = inverseGood ? change < 0 : change > 0;
  const Icon = isPositive ? ArrowUpIcon : ArrowDownIcon;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={`text-xs flex items-center gap-1 mt-1 ${
          isPositive ? "text-green-600" : "text-red-600"
        }`}>
          <Icon className="h-3 w-3" />
          {Math.abs(change)}
          {title.includes("Sentiment") ? "" : title.includes("Position") ? "" : "%"} from last period
        </p>
      </CardContent>
    </Card>
  );
}
