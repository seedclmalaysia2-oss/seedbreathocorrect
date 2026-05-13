import Link from "next/link";
import { patientNav, practitionerNav } from "@/lib/nav";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="text-2xl font-bold tracking-widest text-white">SEED</div>
            <div className="mt-0.5 text-xs font-medium tracking-[0.25em] text-gold">
              BREATH O CORRECT
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Japan&rsquo;s premium orthokeratology contact lens. Designed for clear,
              glasses-free vision — every single day.
            </p>
          </div>

          <FooterCol
            title="Explore"
            items={[
              { label: "Home", href: "/#home" },
              { label: "About", href: "/#about" },
              { label: "Products", href: "/#products" },
              { label: "Benefits", href: "/#benefits" },
              { label: "Why SEED", href: "/#why-seed" },
              { label: "Contact", href: "/#contact" },
            ]}
          />
          <FooterCol title="For Patients" items={patientNav} />
          <FooterCol title="For Practitioners" items={practitionerNav} />
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-white/30">
              © {year} SEED BREATH O CORRECT. All rights reserved.
            </p>
            <p className="text-xs text-white/30">
              Manufactured by SEED Co., Ltd. — Tokyo, Japan
            </p>
            <Link
              href="/privacy-policy"
              className="text-xs text-white/40 transition-colors hover:text-gold"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="mt-3 text-center text-[0.7rem] text-white/25 sm:text-left">
            Medical devices require prescription from a qualified eye care professional.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h4>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i.href}>
            <Link
              href={i.href}
              className="text-sm text-white/50 transition-colors hover:text-gold"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
