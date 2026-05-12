import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/section";
import { VIDEO_LESSONS } from "@/lib/seed-content";
import { PlayCircle } from "lucide-react";

export const metadata: Metadata = { title: "Education" };

export default function EducationPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Education"
        title="Instructional videos"
        lede="Short videos covering lens handling for patients and fitting fundamentals for practitioners."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {VIDEO_LESSONS.map((v) => (
          <Card key={v.title} className="border-slate-200">
            <CardContent className="p-6">
              <div className="flex aspect-video items-center justify-center rounded-xl bg-slate-100 text-slate-400">
                <PlayCircle className="h-12 w-12" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{v.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{v.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="mt-10 text-sm text-slate-500">
        Video content will be embedded once provided through the CMS.
      </p>
    </Section>
  );
}
