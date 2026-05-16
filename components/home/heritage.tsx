"use client";

import type {
  HomepageContent,
  HomepageHeritageCard,
  HomepageMilestone,
} from "@/lib/homepage-content";
import { Editable } from "@/components/home/editor/editable";
import { useEditableList } from "@/components/home/editor/editor-context";
import { ReorderControls } from "@/components/home/editor/reorder-controls";

export function HomeHeritage({ heritage }: { heritage: HomepageContent["heritage"] }) {
  const milestones = useEditableList<HomepageMilestone>(
    "heritage.milestones",
    heritage.milestones,
  );
  const cards = useEditableList<HomepageHeritageCard>("heritage.cards", heritage.cards);

  return (
    <section id="why-seed" className="overflow-hidden bg-muted py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              <Editable path="heritage.eyebrow" value={heritage.eyebrow} />
            </span>
            <h2 className="mt-4 mb-6 text-4xl font-bold leading-tight text-navy md:text-5xl">
              <Editable path="heritage.titleTop" value={heritage.titleTop} />
              <br />
              <span className="text-gold">
                <Editable path="heritage.titleHighlight" value={heritage.titleHighlight} />
              </span>
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              <Editable path="heritage.body1" value={heritage.body1} />
            </p>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              <Editable path="heritage.body2" value={heritage.body2} />
            </p>

            <div className="space-y-4">
              {milestones.map((m, i) => (
                <div key={i} className="relative flex items-center gap-4 pr-16">
                  <ReorderControls
                    path="heritage.milestones"
                    index={i}
                    count={milestones.length}
                    className="right-0 top-1/2 -translate-y-1/2"
                  />
                  <div className="w-20 shrink-0 text-right">
                    <span className="text-sm font-bold text-gold">
                      <Editable path={`heritage.milestones.${i}.year`} value={m.year} />
                    </span>
                  </div>
                  <div className="size-3 shrink-0 rounded-full bg-gold" />
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-sm font-medium text-foreground">
                    <Editable path={`heritage.milestones.${i}.label`} value={m.label} />
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {cards.map((card, i) => (
              <div
                key={i}
                className="relative rounded-2xl border border-border bg-white p-7 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <ReorderControls
                  path="heritage.cards"
                  index={i}
                  count={cards.length}
                  axis="horizontal"
                  className="right-2 top-2"
                />
                <div className="mb-2 text-4xl font-bold text-navy">
                  <Editable path={`heritage.cards.${i}.value`} value={card.value} />
                </div>
                <div className="text-sm font-semibold text-foreground">
                  <Editable path={`heritage.cards.${i}.label`} value={card.label} />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  <Editable path={`heritage.cards.${i}.sub`} value={card.sub} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
