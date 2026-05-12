import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/section";
import { FeatureCard } from "@/components/feature-card";
import { FEATURES } from "@/lib/seed-content";

export const metadata: Metadata = { title: "Features" };

export default function FeaturesPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Features"
        title="What makes Breath-O Correct different"
        lede="Breath-O Correct combines high-oxygen-permeability material, durable construction, and lens geometry refined for the corneal shape typical of Asian populations."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <FeatureCard key={f.title} title={f.title} summary={f.summary} icon={f.icon} />
        ))}
      </div>
    </Section>
  );
}
