import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Linkedin, Mail, Github } from "lucide-react";
import { useState, useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-primary/20">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <a className="text-xl md:text-2xl font-bold tracking-tight flex items-center gap-2 group">
              <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center font-mono text-sm group-hover:bg-chart-1 transition-colors">
                TM
              </div>
              <span className="hidden sm:inline-block">Mitsuharu Toyoda</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative py-1",
                    location === item.path
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </a>
              </Link>
            ))}
            <Button variant="default" size="sm" className="ml-4 rounded-none font-mono text-xs" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-20 px-6 md:hidden animate-in slide-in-from-top-5 duration-200">
          <nav className="flex flex-col gap-6 text-lg font-medium">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={cn(
                    "py-2 border-b border-border/50 transition-colors",
                    location === item.path ? "text-primary border-primary" : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </a>
              </Link>
            ))}
            <Button className="mt-4 w-full rounded-none" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 pt-16 md:pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary border-t border-border py-12 md:py-16">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary text-primary-foreground flex items-center justify-center font-mono text-xs">
                TM
              </div>
              <span className="font-bold text-lg">Mitsuharu Toyoda</span>
            </div>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
              Manufacturing DX Consultant bridging the gap between engineering reality and strategic vision.
              Specializing in productivity improvement through data and AI.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-primary">Navigation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/"><a className="hover:text-primary transition-colors">Home</a></Link></li>
              <li><Link href="/about"><a className="hover:text-primary transition-colors">About</a></Link></li>
              <li><Link href="/projects"><a className="hover:text-primary transition-colors">Projects</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-primary transition-colors">Contact</a></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-primary">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Github size={18} />
              </a>
              <a href="/contact" className="w-10 h-10 bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="container mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-mono">
          <p>&copy; {new Date().getFullYear()} Mitsuharu Toyoda. All rights reserved.</p>
          <p>Designed with Industrial Precision.</p>
        </div>
      </footer>
    </div>
  );
}
