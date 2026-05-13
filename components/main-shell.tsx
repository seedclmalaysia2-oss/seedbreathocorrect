"use client";

import { usePathname } from "next/navigation";

// The site header is `fixed`, so non-home routes need top padding
// to keep their content from sitting under the header. The home
// route renders a full-bleed hero that intentionally extends behind it.
export function MainShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <main id="main" className={"flex-1 " + (isHome ? "" : "pt-20")}>
      {children}
    </main>
  );
}
