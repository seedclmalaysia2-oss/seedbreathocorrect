"use client";

import { Shield, Wind, Smile, Activity, Users, Award } from "lucide-react";
import type { HomepageBenefit, HomepageContent } from "@/lib/homepage-content";
import { Editable } from "@/components/home/editor/editable";
import { useEditableList } from "@/components/home/editor/editor-context";
import { ReorderControls } from "@/components/home/editor/reorder-controls";
import { AddItemButton } from "@/components/home/editor/add-item-button";

const BENEFIT_ICON: Record<HomepageBenefit["icon"], typeof Shield> = {
  shield: Shield,
  wind: Wind,
  smile: Smile,
  activity: Activity,
  users: Users,
  award: Award,
};

const NEW_BENEFIT: HomepageBenefit = {
  icon: "shield",
  title: "New benefit",
  description: "Describe this benefit.",
};

export function HomeBenefits({ benefits }: { benefits: HomepageContent["benefits"] }) {
  const items = useEditableList<HomepageBenefit>("benefits.items", benefits.items);

  return (
    <section id="benefits" className="bg-navy py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            <Editable path="benefits.eyebrow" value={benefits.eyebrow} />
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            <Editable path="benefits.title" value={benefits.title} />
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/60">
            <Editable path="benefits.description" value={benefits.description} />
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((benefit, i) => {
            const Icon = BENEFIT_ICON[benefit.icon];
            return (
              <div
                key={i}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:border-gold/30 hover:bg-white/[0.08]"
              >
                <ReorderControls
                  path="benefits.items"
                  index={i}
                  count={items.length}
                  axis="horizontal"
                  className="right-3 top-3"
                />
                <div className="mb-5 flex size-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 transition-colors group-hover:bg-gold/20">
                  <Icon className="text-gold" size={22} />
                </div>
                <h3 className="mb-3 text-lg font-bold text-white">
                  <Editable path={`benefits.items.${i}.title`} value={benefit.title} />
                </h3>
                <p className="text-sm leading-relaxed text-white/55">
                  <Editable
                    path={`benefits.items.${i}.description`}
                    value={benefit.description}
                  />
                </p>
              </div>
            );
          })}
          <AddItemButton
            path="benefits.items"
            item={NEW_BENEFIT}
            label="Add benefit"
            tone="dark"
            className="min-h-[160px] p-7"
          />
        </div>
      </div>
    </section>
  );
}
