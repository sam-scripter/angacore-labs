// OpsNav — client component for sidebar navigation with active state detection.
// Uses usePathname() to highlight the current page link.
// Kept separate from layout.tsx so the layout stays a Server Component.

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  KanbanSquare,
  MessageSquare,
  LogOut,
} from "lucide-react";

const navItems = [
  { href: "/ops", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/ops/leads", label: "Leads", icon: Users, exact: false },
  { href: "/ops/pipeline", label: "Pipeline", icon: KanbanSquare, exact: false },
  { href: "/ops/communications", label: "Communications", icon: MessageSquare, exact: false },
];

export function OpsNav() {
  const pathname = usePathname();

  const isActive = (href: string, exact: boolean) => {
    if (exact) return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <nav className="flex-1 p-4 space-y-1">
      {navItems.map((item) => {
        const active = isActive(item.href, item.exact);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              active
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            <item.icon className={`w-4 h-4 flex-shrink-0 ${active ? "text-primary" : ""}`} />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function OpsLogout() {
  return (
    
      <a href="/api/ops/logout"
      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors w-full"
    >
      <LogOut className="w-4 h-4 flex-shrink-0" />
      Sign Out
    </a>
  );
}