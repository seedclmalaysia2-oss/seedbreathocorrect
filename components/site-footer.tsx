import Link from "next/link";
import { patientNav, practitionerNav } from "@/lib/nav";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-7 w-7 rounded-full bg-gradient-to-br from-sky-500 to-blue-700" />
            <span className="text-base font-semibold tracking-tight text-slate-900">
              Breath-O Correct
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-600">
            Japan-made orthokeratology contact lenses by SEED Co., Ltd. — designed for non-surgical
            myopia management.
          </p>
        </div>

        <FooterCol title="For Patients" items={patientNav} />
        <FooterCol title="For Practitioners" items={practitionerNav} />
        <FooterCol
          title="Company"
          items={[
            { label: "Contact Us", href: "/contact" },
            { label: "Privacy Policy", href: "/privacy-policy" },
          ]}
        />
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} SEED Co., Ltd. All Rights Reserved.</p>
          <p>Japan Quality Orthokeratology Contact Lens</p>
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
      <p className="text-sm font-semibold text-slate-900">{title}</p>
      <ul className="mt-4 space-y-2">
        {items.map((i) => (
          <li key={i.href}>
            <Link
              href={i.href}
              className="text-sm text-slate-600 transition-colors hover:text-slate-900"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
