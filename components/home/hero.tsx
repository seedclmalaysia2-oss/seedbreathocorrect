"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { HomepageContent } from "@/lib/homepage-content";
import { Editable } from "@/components/home/editor/editable";
import { useEditableList } from "@/components/home/editor/editor-context";
import { ReorderControls } from "@/components/home/editor/reorder-controls";

export function HomeHero({ hero }: { hero: HomepageContent["hero"] }) {
  const stats = useEditableList("hero.stats", hero.stats);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 navy-gradient" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black/30"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-center">
        <div className="reveal-on-mount inline-flex items-center gap-2 rounded-full border border-gold/50 px-4 py-1.5">
          <span className="size-1.5 animate-pulse rounded-full bg-gold" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
            <Editable path="hero.badge" value={hero.badge} />
          </span>
        </div>

        <h1 className="reveal-on-mount reveal-on-mount-delay-1 mt-8 text-5xl font-bold leading-[1.05] text-white md:text-7xl lg:text-8xl">
          <Editable path="hero.titleTop" value={hero.titleTop} />
          <br />
          <span
            className="text-gold"
            style={{ fontSize: "0.6em", letterSpacing: "0.15em", fontWeight: 400 }}
          >
            <Editable path="hero.titleSub" value={hero.titleSub} />
          </span>
        </h1>

        <p className="reveal-on-mount reveal-on-mount-delay-2 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
          <Editable path="hero.description" value={hero.description} />
        </p>

        <div className="reveal-on-mount reveal-on-mount-delay-3 mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href={hero.primaryCta.href}
            className="gold-gradient rounded px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition-all duration-200 hover:scale-[1.03] hover:shadow-xl"
          >
            <Editable path="hero.primaryCta.label" value={hero.primaryCta.label} />
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="rounded border border-white/40 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:border-white hover:bg-white/10"
          >
            <Editable path="hero.secondaryCta.label" value={hero.secondaryCta.label} />
          </Link>
        </div>

        <div className="reveal-on-mount reveal-on-mount-delay-5 mt-20 flex flex-wrap justify-center gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="relative text-center">
              <ReorderControls
                path="hero.stats"
                index={i}
                count={stats.length}
                axis="horizontal"
                className="-top-9 left-1/2 -translate-x-1/2"
              />
              <div className="text-3xl font-bold text-gold">
                <Editable path={`hero.stats.${i}.value`} value={stat.value} />
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/50">
                <Editable path={`hero.stats.${i}.label`} value={stat.label} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="reveal-on-mount reveal-on-mount-delay-5 absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition-colors hover:text-gold"
        aria-label="Scroll to about section"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
