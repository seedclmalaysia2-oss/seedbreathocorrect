import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/section";
import { TESTIMONIALS } from "@/lib/seed-content";

export const metadata: Metadata = { title: "Testimonials" };

export default function TestimonialsPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Testimonials"
        title="Stories from patients and practitioners"
        lede="Real experiences from people who wear Breath-O Correct and the practitioners who fit it."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <Card key={t.author} className="border-slate-200">
            <CardContent className="p-6">
              <p className="text-base leading-7 text-slate-700">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-slate-900">{t.author}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
