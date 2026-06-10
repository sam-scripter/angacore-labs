"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps extends Omit<LinkProps, "href"> {
  to: string;
  children?: React.ReactNode;
  className?: string | ((props: { isActive: boolean }) => string);
  end?: boolean;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ to, children, className, end, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = end ? pathname === to : pathname.startsWith(to);

    const resolvedClassName =
      typeof className === "function" ? className({ isActive }) : className;

    return (
      <Link
        href={to}
        ref={ref}
        className={cn(resolvedClassName)}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";

export default NavLink;
export type { NavLinkProps };