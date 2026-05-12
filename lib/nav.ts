export type NavItem = { label: string; href: string };

export type NavGroup = {
  label: string;
  items: NavItem[];
};

export const patientNav: NavItem[] = [
  { label: "Patient Guide", href: "/patient-guide" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Regular Examination", href: "/regular-examination" },
  { label: "Instruction for Use", href: "/instruction-for-use" },
];

export const practitionerNav: NavItem[] = [
  { label: "Introduction for Practitioners", href: "/practitioners" },
  { label: "Clinical Outcome", href: "/clinical-outcome" },
  { label: "Education (Video)", href: "/education" },
  { label: "Fittings — BOC Sphere", href: "/fittings/sphere" },
  { label: "Fittings — BOC TD (Toric)", href: "/fittings/toric" },
];

export const primaryNav: NavItem[] = [
  { label: "Features", href: "/features" },
  { label: "Patient Guide", href: "/patient-guide" },
  { label: "Practitioners", href: "/practitioners" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
