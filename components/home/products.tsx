"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import type { HomepageContent, HomepageProduct } from "@/lib/homepage-content";
import { Editable } from "@/components/home/editor/editable";
import { useEditableList } from "@/components/home/editor/editor-context";
import { ReorderControls } from "@/components/home/editor/reorder-controls";

export function HomeProducts({ products }: { products: HomepageContent["products"] }) {
  const items = useEditableList<HomepageProduct>("products.items", products.items);

  return (
    <section id="products" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            <Editable path="products.eyebrow" value={products.eyebrow} />
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-navy md:text-5xl">
            <Editable path="products.title" value={products.title} />
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            <Editable path="products.description" value={products.description} />
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {items.map((product, idx) => (
            <article
              key={idx}
              className="group relative overflow-hidden rounded-3xl border border-border shadow-lg transition-shadow hover:shadow-xl"
            >
              <ReorderControls
                path="products.items"
                index={idx}
                count={items.length}
                axis="horizontal"
                className="right-3 top-3"
              />
              <div className="relative h-56 overflow-hidden">
                <div
                  aria-hidden
                  className={
                    "absolute inset-0 " +
                    (product.variant === "gold" ? "gold-gradient" : "navy-gradient")
                  }
                />
                <ProductPattern variant={product.variant} />
                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
                    <Editable path={`products.items.${idx}.badge`} value={product.badge} />
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs uppercase tracking-wider text-white/70">
                    <Editable path={`products.items.${idx}.tagline`} value={product.tagline} />
                  </p>
                  <h3 className="mt-1 text-3xl font-bold text-white">
                    <Editable path={`products.items.${idx}.name`} value={product.name} />
                  </h3>
                </div>
              </div>

              <div className="bg-white p-8">
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  <Editable
                    path={`products.items.${idx}.description`}
                    value={product.description}
                  />
                </p>
                <ul className="mb-8 space-y-3">
                  {product.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle size={16} className="mt-0.5 shrink-0 text-gold" />
                      <span className="text-sm text-foreground">
                        <Editable
                          path={`products.items.${idx}.features.${j}`}
                          value={feat}
                        />
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className="group/cta inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-gold"
                >
                  Enquire About This Lens
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover/cta:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductPattern({ variant }: { variant: "navy" | "gold" }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 200"
      className="absolute inset-0 size-full opacity-[0.18] mix-blend-overlay"
    >
      <defs>
        <radialGradient id={`g-${variant}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="320" cy="40" r="120" fill={`url(#g-${variant})`} />
      <circle cx="80" cy="180" r="140" fill={`url(#g-${variant})`} />
    </svg>
  );
}
