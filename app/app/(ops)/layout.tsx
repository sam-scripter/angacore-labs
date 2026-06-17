// OPS Layout — wraps all /ops pages with a consistent sidebar navigation.
// This is a Server Component (no "use client") since it just renders structure.
// The sidebar stays fixed while page content scrolls on the right.

import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  KanbanSquare,
  MessageSquare,
  LogOut,
} from "lucide-react";

// Navigation items — each maps to an /ops sub-route
const navItems = [
  { href: "/ops", label: "Dashboard", icon: LayoutDashboard },
  { href: "/ops/leads", label: "Leads", icon: Users },
  { href: "/ops/pipeline", label: "Pipeline", icon: KanbanSquare },
  { href: "/ops/communications", label: "Communications", icon: MessageSquare },
];

export default async function OpsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar — fixed left panel with nav links */}
      <aside className="w-64 border-r border-border bg-card flex flex-col fixed h-full z-10">
        {/* Brand header */}
        <div className="p-6 border-b border-border">
          <Link href="/ops" className="flex items-center gap-2">
            <span className="font-display font-bold text-lg">
              <span className="text-primary">Anga</span>
              <span className="text-accent">Core</span>
              <span className="text-muted-foreground font-normal text-sm ml-1">
                OPS
              </span>
            </span>
          </Link>
          <p className="text-xs text-muted-foreground mt-1">
            Internal Dashboard
          </p>
        </div>

        {/* Navigation links */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <item.icon className="w-4 h-4 flex-shrink-0" />
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Footer — logout button */}
        <div className="p-4 border-t border-border">
          <form action="/api/ops/auth" method="DELETE">
            <LogoutButton />
          </form>
        </div>
      </aside>

      {/* Main content — offset by sidebar width */}
      <main className="flex-1 ml-64 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}

// Logout button — client component since it needs onClick
// Kept small and separate to avoid making the whole layout a client component
function LogoutButton() {
  return (
    
      <a href="/api/ops/logout"
      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors w-full"
    >
      <LogOut className="w-4 h-4 flex-shrink-0" />
      Sign Out
    </a>
  );
}