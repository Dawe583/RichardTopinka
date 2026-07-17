"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

// Re-keys on route change so the page content fades in on every navigation.
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  );
}
