"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/link-button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { primaryNav, patientNav, practitionerNav } from "@/lib/nav";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-md focus:bg-slate-900 focus:px-3 focus:py-1.5 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block h-7 w-7 rounded-full bg-gradient-to-br from-sky-500 to-blue-700" />
          <span className="text-base font-semibold tracking-tight text-slate-900">
            Breath-O Correct
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {primaryNav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "text-sm font-semibold text-slate-900"
                    : "text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <LinkButton href="/contact" size="sm">
            Contact Us
          </LinkButton>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            }
          />

          <SheetContent side="right" className="w-80 overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="mt-6 space-y-6 px-2 pb-8">
              <MobileGroup title="Main" items={primaryNav} onNavigate={() => setOpen(false)} />
              <MobileGroup title="For Patients" items={patientNav} onNavigate={() => setOpen(false)} />
              <MobileGroup title="For Practitioners" items={practitionerNav} onNavigate={() => setOpen(false)} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function MobileGroup({
  title,
  items,
  onNavigate,
}: {
  title: string;
  items: { label: string; href: string }[];
  onNavigate: () => void;
}) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
        {title}
      </p>
      <ul className="space-y-1">
        {items.map((i) => (
          <li key={i.href}>
            <Link
              href={i.href}
              onClick={onNavigate}
              className="block rounded-md px-2 py-2 text-sm text-slate-700 hover:bg-slate-100"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
