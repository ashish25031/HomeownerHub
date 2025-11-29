import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Home } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/resources", label: "Resources" },
    { href: "/resources?level=beginner", label: "Beginner" },
    { href: "/resources?level=advanced", label: "Advanced" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 group">
              <div className="bg-primary text-primary-foreground p-1.5 rounded-md group-hover:bg-primary/90 transition-colors">
                <Home className="h-5 w-5" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight">Nest & Nail</span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location === item.href ? "text-primary font-semibold" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Button variant="default" size="sm" className="font-medium">
              Get Started
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background p-4 space-y-4 animate-in slide-in-from-top-5">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className="block text-sm font-medium py-2 text-foreground hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Button className="w-full">Get Started</Button>
          </div>
        )}
      </header>

      <main className="flex-1 w-full">
        {children}
      </main>

      <footer className="bg-secondary/10 border-t py-12 mt-20">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
                <Home className="h-4 w-4" />
              </div>
              <span className="font-serif text-lg font-bold">Nest & Nail</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering new homeowners to maintain, repair, and love their spaces. 
              Education for every skill level.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif font-semibold mb-4">Learn</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/resources?level=beginner">Beginner Guides</Link></li>
              <li><Link href="/resources?level=intermediate">Intermediate Projects</Link></li>
              <li><Link href="/resources?level=advanced">Advanced Renovations</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Contact</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get weekly tips for your home.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-background border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Button size="sm">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nest & Nail. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
