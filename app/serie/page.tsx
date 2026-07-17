import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ParallaxImage } from "@/components/parallax-image";
import { series } from "@/lib/content";

export const metadata: Metadata = {
  title: "Série",
  description: "Fotografické cykly a kolekce — Ateliér, Světlo, Krajina těla.",
};

export default function SeriePage() {
  return (
    <section className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <header className="mb-16 max-w-2xl">
        <p className="eyebrow">Kolekce</p>
        <h1 className="display mt-4 text-5xl sm:text-7xl">Série</h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">
          Tvorbu řadím do dlouhodobých cyklů. Každá série má vlastní světlo,
          rytmus i téma.
        </p>
      </header>

      <div className="space-y-20 sm:space-y-28">
        {series.map((s, i) => (
          <Reveal key={s.slug} as="article">
            <div
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <ParallaxImage
                src={s.cover}
                alt={s.title}
                speed={11}
                className="aspect-[3/2] w-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div>
                <p className="eyebrow">
                  Série {String(i + 1).padStart(2, "0")} · {s.count} fotografií
                </p>
                <h2 className="display mt-4 text-4xl sm:text-6xl">{s.title}</h2>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
                  {s.blurb}
                </p>
                <Link
                  href="/galerie"
                  className="mt-8 inline-block text-sm uppercase tracking-[0.14em] text-ink-soft link-underline hover:text-ink"
                >
                  Zobrazit v galerii
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
