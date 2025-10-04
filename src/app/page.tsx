import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, Search, Target, ChartNoAxesGantt, Loader, Square, ListMinus, Zap } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-black dark:to-slate-950">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-black/80 backdrop-blur-sm sticky top-0 z-50 dark:border-slate-900">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ChartNoAxesGantt className="h-8 w-8 dark:text-white rotate-90" />
            <span className="font-bold text-xl block">VISIBI</span>
           </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              How It Works
            </Link>
            <ThemeToggle />
            <Button asChild>
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 text-sm font-medium border dark:border-blue-900">
              <Zap className="h-4 w-4" />
              AI-Powered GEO Analytics
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Dominate AI Search Results
            <span className="block text-gray-600 dark:text-gray-300 mt-2">Before Your Competitors</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Track, analyze, and optimize your brand&apos;s presence across ChatGPT, Claude, Gemini, 
            and Perplexity. Get actionable insights to improve your GEO performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg">
              <Link href="/dashboard">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Win in AI Search
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Comprehensive tools for GEO optimization and competitive intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Search className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Multi-Engine Testing</CardTitle>
                <CardDescription>
                  Simulate queries across ChatGPT, Claude, Gemini, and Perplexity simultaneously
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Test hundreds of queries in bulk and see exactly how your brand appears in AI responses.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>Performance Analytics</CardTitle>
                <CardDescription>
                  Track mention rates, positioning, sentiment, and citation frequency
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Real-time dashboards showing your GEO metrics across all major AI platforms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-10 w-10 text-purple-600 mb-2" />
                <CardTitle>Competitive Intelligence</CardTitle>
                <CardDescription>
                  Monitor competitors and identify opportunities to gain market share
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  See where competitors are winning and get recommendations to outrank them.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-orange-600 mb-2" />
                <CardTitle>Real-time Alerts</CardTitle>
                <CardDescription>
                  Get notified when competitors displace your brand in AI responses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Instant alerts for sentiment drops, citation losses, and competitive threats.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle>Citation Analysis</CardTitle>
                <CardDescription>
                  Discover which content sources AI engines cite most frequently
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Identify high-value citation opportunities to boost your GEO presence.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Content Optimization</CardTitle>
                <CardDescription>
                  AI-powered recommendations to improve content for better GEO performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Predict content impact before publishing and optimize for maximum visibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-6 bg-slate-50 dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">How It Works</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Get started in minutes with our streamlined GEO optimization workflow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-950 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Add Your Queries</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Import your target queries or let our AI suggest relevant ones for your industry
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-950 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Run Simulations</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Test queries across multiple AI engines and get detailed performance data
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-950 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Optimize & Track</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Get actionable insights and monitor your GEO performance over time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Dominate AI Search?
            </h2>
            <p className="text-xl mb-8 text-blue-50">
              Join leading brands using GEO Intelligence to stay ahead in the AI-first future.
            </p>
            <Button size="lg" variant="secondary" asChild className="text-lg">
              <Link href="/dashboard">
                Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t dark:border-slate-900 bg-slate-50 dark:bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-600" />
              <span className="font-bold">GEO Intelligence Platform</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              © 2025 GEO Intelligence. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
