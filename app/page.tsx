import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { LinkButton } from "@/components/link-button";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/section";
import { FeatureCard } from "@/components/feature-card";
import { FEATURES } from "@/lib/seed-content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatIsOrthoK />
      <AboutBOC />
      <Features />
      <AudienceSplit />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-sky-50 via-white to-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
            Myopia Management
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Clear daytime vision,
            <br className="hidden sm:inline" /> without surgery.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Modern medical research has proved that orthokeratology is one of the safest and most
            effective methods of reducing the progression of myopia in children. Breath-O Correct is
            a Japan-made rigid gas permeable lens, worn overnight, that gently reshapes the cornea
            for clear vision through the day.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href="/patient-guide" size="lg">
              Patient Guide <ArrowRight className="ml-2 h-4 w-4" />
            </LinkButton>
            <LinkButton href="/practitioners" size="lg" variant="outline">
              For Practitioners
            </LinkButton>
          </div>
          <ul className="mt-10 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            {[
              "Non-surgical, reversible",
              "Worn overnight",
              "Designed in Japan",
              "Trusted by eyecare practitioners",
            ].map((point) => (
              <li key={point} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-sky-600" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="aspect-[5/6] rounded-3xl bg-gradient-to-br from-sky-100 via-white to-blue-100 ring-1 ring-slate-200" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-48 w-48 rounded-full bg-white shadow-xl ring-1 ring-slate-200 sm:h-64 sm:w-64">
              <div className="m-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] rounded-full bg-gradient-to-br from-sky-200 via-white to-sky-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatIsOrthoK() {
  return (
    <Section>
      <SectionHeading
        eyebrow="What is Orthokeratology?"
        title="A non-surgical approach to myopia"
        lede="Orthokeratology (Ortho-K) uses specially designed rigid gas permeable contact lenses worn during sleep. The lenses gently and temporarily reshape the front surface of the eye so that, on removal in the morning, the eye focuses light correctly without glasses or daytime contact lenses."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {[
          {
            step: "01",
            title: "Wear overnight",
            body: "Insert the lenses before sleep. They reshape the cornea while you rest.",
          },
          {
            step: "02",
            title: "Remove in the morning",
            body: "Take the lenses out when you wake. Vision is clear for the day.",
          },
          {
            step: "03",
            title: "Repeat each night",
            body: "Consistent overnight wear maintains the effect and supports myopia control.",
          },
        ].map((s) => (
          <Card key={s.step} className="border-slate-200">
            <CardContent className="p-6">
              <p className="text-xs font-semibold tracking-wider text-sky-600">STEP {s.step}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{s.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function AboutBOC() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="About Breath-O Correct"
              title="Designed in Japan, refined for Asian eyes"
            />
            <p className="mt-6 text-base leading-7 text-slate-600">
              Breath-O Correct is SEED Co., Ltd.&apos;s rigid gas permeable orthokeratology contact
              lens. Its high-oxygen-permeability material, durable construction, and lens geometry
              optimised for the corneal topography typical of Asian populations make it a trusted
              option for both first-time and experienced wearers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="/features">See the features</LinkButton>
              <LinkButton href="/clinical-outcome" variant="outline">
                Clinical outcomes
              </LinkButton>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-8 ring-1 ring-slate-200">
            <dl className="grid grid-cols-2 gap-6">
              {[
                { k: "Material", v: "Rigid Gas Permeable" },
                { k: "Wear cycle", v: "Overnight" },
                { k: "Origin", v: "Japan" },
                { k: "Use", v: "Myopia management" },
              ].map((row) => (
                <div key={row.k}>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {row.k}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-slate-900">{row.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <Section>
      <SectionHeading eyebrow="Features" title="What makes Breath-O Correct different" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <FeatureCard key={f.title} title={f.title} summary={f.summary} icon={f.icon} />
        ))}
      </div>
    </Section>
  );
}

function AudienceSplit() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
        <AudienceCard
          eyebrow="For Patients"
          title="Curious about ortho-k?"
          body="Read the patient guide, watch instructional videos, and find answers in our FAQ."
          links={[
            { label: "Patient Guide", href: "/patient-guide" },
            { label: "Testimonials", href: "/testimonials" },
            { label: "FAQ", href: "/faq" },
          ]}
        />
        <AudienceCard
          eyebrow="For Eyecare Practitioners"
          title="Fit Breath-O Correct with confidence"
          body="Clinical data, fitting guides for both Sphere and Toric designs, and education videos."
          links={[
            { label: "Clinical Outcome", href: "/clinical-outcome" },
            { label: "Fittings — Sphere", href: "/fittings/sphere" },
            { label: "Education (Video)", href: "/education" },
          ]}
        />
      </div>
    </section>
  );
}

function AudienceCard({
  eyebrow,
  title,
  body,
  links,
}: {
  eyebrow: string;
  title: string;
  body: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
      <p className="text-sm font-semibold uppercase tracking-wider text-sky-300">{eyebrow}</p>
      <h3 className="mt-2 text-2xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{body}</p>
      <ul className="mt-6 space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-sky-300"
            >
              {l.label} <ArrowRight className="h-4 w-4" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
