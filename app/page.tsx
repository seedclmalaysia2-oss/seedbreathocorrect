import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { LinkButton } from "@/components/link-button";
import { Section, SectionHeading } from "@/components/section";
import { FeatureCard } from "@/components/feature-card";
import { CorneaDiagram } from "@/components/cornea-diagram";
import { FEATURES } from "@/lib/seed-content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <AboutBOC />
      <Features />
      <AudienceSplit />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-sky-600 via-sky-700 to-blue-900 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(closest-side at 20% 20%, rgba(255,255,255,0.4), transparent), radial-gradient(closest-side at 80% 70%, rgba(56,189,248,0.6), transparent)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-x-12 gap-y-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:px-8 lg:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
            Myopia management
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.75rem]">
            Sleep in the lenses.
            <br />
            <span className="text-sky-200">Wake up seeing.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-sky-50/90">
            Breath-O Correct is a Japan-made overnight contact lens that gently reshapes the cornea
            while your child sleeps. By morning, vision is clear without glasses, and over time the
            progression of myopia slows down.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <LinkButton
              href="/patient-guide"
              size="lg"
              className="bg-white text-slate-900 hover:bg-sky-50"
            >
              Start the patient guide
              <ArrowRight className="ml-2 h-4 w-4" />
            </LinkButton>
            <Link
              href="/practitioners"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-100 underline-offset-4 hover:text-white hover:underline"
            >
              I&apos;m an eyecare practitioner
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <ul className="mt-12 grid gap-y-3 gap-x-6 text-sm text-sky-50/90 sm:grid-cols-2">
            {[
              "Non-surgical, reversible",
              "Worn only during sleep",
              "Slows myopia progression in children",
              "Designed in Japan for Asian corneal anatomy",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-200" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="rounded-3xl bg-white/95 p-6 shadow-2xl ring-1 ring-white/40 backdrop-blur sm:p-8">
            <CorneaDiagram className="h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      label: "Tonight",
      title: "Insert before sleep",
      body: "A drop of solution, lens on, blink. Takes under a minute once you've practised.",
    },
    {
      label: "While you sleep",
      title: "The cornea reshapes",
      body: "The lens applies gentle, even pressure. Your eye does the work, you do nothing.",
    },
    {
      label: "Tomorrow morning",
      title: "Remove, see clearly",
      body: "Take the lens out. Vision is sharp without glasses, all day.",
    },
  ];
  return (
    <Section>
      <SectionHeading
        eyebrow="How it works"
        title="Three things happen, in this order"
        lede="Orthokeratology is the medical name. The mechanism is straightforward."
      />
      <ol className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-0">
        {steps.map((step, i) => (
          <li key={step.label} className="relative lg:px-8">
            {i > 0 && (
              <span
                aria-hidden
                className="absolute -top-6 left-1/2 hidden h-px w-16 -translate-x-1/2 bg-sky-200 lg:block lg:left-0 lg:top-1/2 lg:h-px lg:w-8 lg:-translate-x-full lg:-translate-y-1/2"
              />
            )}
            <div className="flex items-baseline gap-4">
              <span className="text-5xl font-semibold tabular-nums text-sky-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {step.label}
              </p>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-slate-900">{step.title}</h3>
            <p className="mt-2 text-base leading-7 text-slate-600">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function AboutBOC() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="About Breath-O Correct"
              title="Built in Japan, fitted to Asian eyes"
            />
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              SEED Co., Ltd. has manufactured rigid gas permeable lenses in Japan for over six
              decades. Breath-O Correct adapts that craft for orthokeratology: a high-Dk material
              that lets the cornea breathe overnight, a lens geometry tuned for the corneal
              topography typical of Asian populations, and a parameter range broad enough to fit
              most paediatric cases without compromise.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <LinkButton href="/features" size="default">
                See the features
              </LinkButton>
              <Link
                href="/clinical-outcome"
                className="inline-flex items-center gap-1.5 font-medium text-sky-700 underline-offset-4 hover:text-sky-900 hover:underline"
              >
                Read the clinical outcomes
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-6 rounded-3xl bg-white p-8 ring-1 ring-slate-200">
            {[
              { k: "Material", v: "Rigid gas permeable" },
              { k: "Wear cycle", v: "Overnight, removed by day" },
              { k: "Origin", v: "Japan" },
              { k: "Use", v: "Myopia management" },
            ].map((row) => (
              <div key={row.k}>
                <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                  {row.k}
                </dt>
                <dd className="mt-1.5 text-sm font-medium text-slate-900">{row.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <Section>
      <SectionHeading
        eyebrow="The lens itself"
        title="Three properties that matter for overnight wear"
        lede="Material, durability, and geometry. The rest is fitting."
      />
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
    <section className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <AudienceCard
          eyebrow="For parents and patients"
          title="Will this work for your child?"
          body="Read the patient guide, watch how the lenses are inserted, and find your answer in the FAQ."
          links={[
            { label: "Patient guide", href: "/patient-guide" },
            { label: "Testimonials", href: "/testimonials" },
            { label: "FAQ", href: "/faq" },
          ]}
        />
        <AudienceCard
          eyebrow="For eyecare practitioners"
          title="Fit Breath-O Correct in your practice"
          body="Clinical outcomes, fitting workflows for both Sphere and TD (toric) designs, plus education videos."
          links={[
            { label: "Clinical outcomes", href: "/clinical-outcome" },
            { label: "Sphere fitting guide", href: "/fittings/sphere" },
            { label: "Education videos", href: "/education" },
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
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">{eyebrow}</p>
      <h3 className="mt-3 text-2xl font-semibold">{title}</h3>
      <p className="mt-3 max-w-md text-sm leading-7 text-slate-300">{body}</p>
      <ul className="mt-6 space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="inline-flex items-center gap-2 text-sm font-medium text-white underline-offset-4 hover:text-sky-300 hover:underline"
            >
              {l.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
