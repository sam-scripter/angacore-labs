// OPS Layout — wraps all /ops pages with sidebar navigation.
// Server Component — imports OpsNav and OpsLogout as client components
// so we get active state detection without making the whole layout client-side.

import Link from "next/link";
import { OpsNav, OpsLogout } from "./components/OpsNav";

export default function OpsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card flex flex-col fixed h-full z-10">
        {/* Brand */}
        <div className="p-6 border-b border-border">
          <Link href="/ops" className="flex items-center gap-2">
            <span className="font-display font-bold text-lg">
              <span className="text-primary">Anga</span>
              <span className="text-accent">Core</span>
              <span className="text-muted-foreground font-normal text-sm ml-1">OPS</span>
            </span>
          </Link>
          <p className="text-xs text-muted-foreground mt-1">Internal Dashboard</p>
        </div>

        {/* Nav — client component with active state */}
        <OpsNav />

        {/* Logout */}
        <div className="p-4 border-t border-border">
          <OpsLogout />
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-64 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}