import type { HomepageContent } from "@/lib/homepage-content";

export function HomeHeritage({ heritage }: { heritage: HomepageContent["heritage"] }) {
  return (
    <section id="why-seed" className="overflow-hidden bg-muted py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              {heritage.eyebrow}
            </span>
            <h2 className="mt-4 mb-6 text-4xl font-bold leading-tight text-navy md:text-5xl">
              {heritage.titleTop}
              <br />
              <span className="text-gold">{heritage.titleHighlight}</span>
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              {heritage.body1}
            </p>
            <p className="mb-8 leading-relaxed text-muted-foreground">{heritage.body2}</p>

            <div className="space-y-4">
              {heritage.milestones.map((m) => (
                <div key={m.year} className="flex items-center gap-4">
                  <div className="w-20 shrink-0 text-right">
                    <span className="text-sm font-bold text-gold">{m.year}</span>
                  </div>
                  <div className="size-3 shrink-0 rounded-full bg-gold" />
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-sm font-medium text-foreground">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {heritage.cards.map((card) => (
              <div
                key={card.label}
                className="rounded-2xl border border-border bg-white p-7 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-2 text-4xl font-bold text-navy">{card.value}</div>
                <div className="text-sm font-semibold text-foreground">{card.label}</div>
                <div className="mt-1 text-xs text-muted-foreground">{card.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
