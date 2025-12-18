import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-lg mx-4 shadow-lg border border-border bg-card">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-destructive/10 rounded-full animate-pulse" />
              <AlertCircle className="relative h-16 w-16 text-destructive" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-2">404</h1>

          <h2 className="text-xl font-semibold text-foreground mb-4">
            ページが見つかりません
          </h2>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            申し訳ございません。お探しのページは存在しません。<br />
            移動または削除された可能性があります。
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2.5 rounded-none transition-all duration-200"
              asChild
            >
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                ホームに戻る
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
