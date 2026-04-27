import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * NotFound Page - 404 Error
 * Organic Modernism Design
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-grow flex items-center justify-center">
        <div className="container py-20 text-center">
          <h1 className="font-display text-7xl md:text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">Page Not Found</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
          </p>
          <Link href="/">
            <a>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Return to Home
              </Button>
            </a>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
