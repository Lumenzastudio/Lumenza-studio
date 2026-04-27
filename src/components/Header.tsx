import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

/**
 * Header Component - Organic Modernism Design
 * Soft sage green accent, cream background, smooth transitions
 * Mobile-responsive navigation with hamburger menu
 */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/how-we-work", label: "How We Work" },
    { href: "/areas", label: "Service Areas" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-soft">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
                L
              </div>
              <span className="hidden sm:inline font-display font-semibold text-lg text-foreground group-hover:text-primary">
                Lumenza
              </span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  {link.label}
                </a>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <a>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Get a Quote
                </Button>
              </a>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
              <Link href="/contact">
                <a onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Get a Quote
                  </Button>
                </a>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
