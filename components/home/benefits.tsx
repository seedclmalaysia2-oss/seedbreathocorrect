import { Shield, Wind, Smile, Activity, Users, Award } from "lucide-react";
import type { HomepageBenefit, HomepageContent } from "@/lib/homepage-content";

const BENEFIT_ICON: Record<HomepageBenefit["icon"], typeof Shield> = {
  shield: Shield,
  wind: Wind,
  smile: Smile,
  activity: Activity,
  users: Users,
  award: Award,
};

export function HomeBenefits({ benefits }: { benefits: HomepageContent["benefits"] }) {
  return (
    <section id="benefits" className="bg-navy py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            {benefits.eyebrow}
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            {benefits.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/60">{benefits.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((benefit) => {
            const Icon = BENEFIT_ICON[benefit.icon];
            return (
              <div
                key={benefit.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:border-gold/30 hover:bg-white/[0.08]"
              >
                <div className="mb-5 flex size-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 transition-colors group-hover:bg-gold/20">
                  <Icon className="text-gold" size={22} />
                </div>
                <h3 className="mb-3 text-lg font-bold text-white">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-white/55">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
