"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "About", href: "/about" },
  {
    name: "Solutions",
    href: "#",
    children: [
      { name: "AngaCore Systems", href: "/systems" },
      { name: "AngaNova", href: "/anganova" },
    ]
  },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container mx-auto flex items-center justify-between py-4 container-padding">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display font-bold text-xl">
            <span className="text-primary">Anga</span>
            <span className="text-accent">Core</span>{" "}
            <span className="text-foreground font-normal">Labs</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            item.children ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setDesktopDropdownOpen(true)}
                onMouseLeave={() => setDesktopDropdownOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors outline-none"
                >
                  {item.name} <ChevronDown size={14} />
                </button>

                {desktopDropdownOpen && (
                  <>
                    <div className="absolute top-full left-0 w-56 h-2" />
                    <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg py-2 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            )
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant="hero" size="default" asChild>
            <Link href="/contact">
              Talk to Us
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto py-4 container-padding space-y-4">
            {navigation.map((item) => (
              item.children ? (
                <div key={item.name} className="space-y-2">
                  <button
                    onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                    className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground py-2 hover:text-primary transition-colors"
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      size={16}
                      className={cn(
                        "transition-transform",
                        mobileSubmenuOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {mobileSubmenuOpen && (
                    <div className="pl-4 space-y-2 border-l border-border ml-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={cn(
                            "block text-sm font-medium transition-colors hover:text-primary py-1",
                            isActive(child.href) ? "text-primary" : "text-muted-foreground"
                          )}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileSubmenuOpen(false);
                          }}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block text-sm font-medium transition-colors hover:text-primary py-2",
                    isActive(item.href)
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Button variant="hero" size="default" className="w-full mt-4" asChild>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Talk to Us
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
