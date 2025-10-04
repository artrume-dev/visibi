import Link from "next/link";
import { ChartNoAxesGantt } from "lucide-react";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white dark:from-black dark:to-slate-950 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <ChartNoAxesGantt className="h-12 w-12 dark:text-white rotate-90" />
          </div>
          <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
          <CardDescription>
            Start optimizing your GEO performance today
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center text-slate-600 dark:text-slate-400">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline dark:text-blue-400">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
