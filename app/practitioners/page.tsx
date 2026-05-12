import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { LinkButton } from "@/components/link-button";
import { Section, SectionHeading } from "@/components/section";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "Introduction for Practitioners" };

const RESOURCES = [
  {
    title: "Clinical Outcome",
    body: "Summary of efficacy and safety evidence for Breath-O Correct.",
    href: "/clinical-outcome",
  },
  {
    title: "Fitting Guide — Sphere",
    body: "Step-by-step fit workflow for spherical Breath-O Correct lenses.",
    href: "/fittings/sphere",
  },
  {
    title: "Fitting Guide — Toric (TD)",
    body: "Workflow for fitting toric BOC TD lenses on astigmatic corneas.",
    href: "/fittings/toric",
  },
  {
    title: "Regular Examination",
    body: "Recommended follow-up schedule for ortho-K patients.",
    href: "/regular-examination",
  },
  {
    title: "Education (Video)",
    body: "Practitioner education videos and patient handling tutorials.",
    href: "/education",
  },
  {
    title: "Instruction for Use",
    body: "Patient-facing care and handling instructions to share with wearers.",
    href: "/instruction-for-use",
  },
];

export default function PractitionersPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="For Practitioners"
        title="A complete resource library"
        lede="Everything you need to evaluate, fit, and manage Breath-O Correct patients in your practice."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {RESOURCES.map((r) => (
          <Card key={r.href} className="border-slate-200">
            <CardContent className="flex h-full flex-col p-6">
              <h3 className="text-lg font-semibold text-slate-900">{r.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{r.body}</p>
              <LinkButton href={r.href} variant="link" className="mt-4 self-start px-0">
                Open <ArrowRight className="ml-1 h-4 w-4" />
              </LinkButton>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
