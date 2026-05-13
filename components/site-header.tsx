"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { primaryNav, patientNav, practitionerNav } from "@/lib/nav";

const HOME_ANCHORS: { label: string; href: string }[] = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Products", href: "/#products" },
  { label: "Benefits", href: "/#benefits" },
  { label: "Why SEED", href: "/#why-seed" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const links = isHome ? HOME_ANCHORS : primaryNav;
  // On non-home routes, force the solid header so links are legible
  // immediately rather than waiting for the user to scroll.
  const solid = scrolled || open || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 " +
        (solid ? "bg-navy py-2 shadow-lg" : "bg-transparent py-4")
      }
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-1.5 focus:text-sm focus:font-medium focus:text-navy"
      >
        Skip to content
      </a>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-xl font-bold tracking-widest text-white">SEED</span>
          <span className="text-[0.65rem] font-medium tracking-[0.25em] text-gold">
            BREATH O CORRECT
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={isHome ? "/#contact" : "/contact"}
            className="rounded border border-gold px-5 py-2 text-sm font-semibold uppercase tracking-wider text-gold transition-all duration-200 hover:bg-gold hover:text-white"
          >
            Enquire Now
          </Link>
        </nav>

        <button
          type="button"
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            <MobileGroup
              title={isHome ? "Sections" : "Main"}
              items={links}
              onNavigate={() => setOpen(false)}
            />
            {!isHome && (
              <>
                <MobileGroup
                  title="For Patients"
                  items={patientNav}
                  onNavigate={() => setOpen(false)}
                />
                <MobileGroup
                  title="For Practitioners"
                  items={practitionerNav}
                  onNavigate={() => setOpen(false)}
                />
              </>
            )}
            <Link
              href={isHome ? "/#contact" : "/contact"}
              onClick={() => setOpen(false)}
              className="mt-3 rounded bg-gold px-5 py-3 text-center text-sm font-semibold uppercase tracking-wider text-white"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      )}
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
    <div className="pt-3">
      <p className="mb-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gold/70">
        {title}
      </p>
      <ul>
        {items.map((i) => (
          <li key={i.href}>
            <Link
              href={i.href}
              onClick={onNavigate}
              className="block border-b border-white/10 py-2.5 text-sm font-medium uppercase tracking-wider text-white/80 hover:text-gold"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
