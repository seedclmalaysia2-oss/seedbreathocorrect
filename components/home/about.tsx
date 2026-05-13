import { Moon, Eye, Sun } from "lucide-react";
import type { HomepageContent, HomepageStep } from "@/lib/homepage-content";

const STEP_ICON: Record<HomepageStep["icon"], typeof Moon> = {
  moon: Moon,
  eye: Eye,
  sun: Sun,
};

export function HomeAbout({ about }: { about: HomepageContent["about"] }) {
  return (
    <section id="about" className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            {about.eyebrow}
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-navy md:text-5xl">
            {about.title}
            <br />
            <span className="text-gold">{about.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {about.description}
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {about.steps.map((step, i) => {
            const Icon = STEP_ICON[step.icon];
            return (
              <div
                key={step.title}
                className="rounded-2xl border border-border bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-full bg-navy/10">
                  <Icon className="text-navy" size={28} />
                </div>
                <div className="mb-2 text-4xl font-bold text-gold/30 tabular-nums">
                  0{i + 1}
                </div>
                <h3 className="mb-3 text-xl font-bold text-navy">{step.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="navy-gradient rounded-2xl p-10 text-center text-white">
          <p className="mx-auto max-w-3xl text-2xl font-semibold leading-relaxed md:text-3xl">
            &ldquo;{about.bannerQuote}{" "}
            <span className="font-bold text-gold">{about.bannerHighlight}</span>{" "}
            from morning to night.&rdquo;
          </p>
          <p className="mt-4 text-sm tracking-wider text-white/50">{about.bannerSub}</p>
        </div>
      </div>
    </section>
  );
}
