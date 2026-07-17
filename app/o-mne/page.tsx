import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "O mně",
  description: `${site.name} — fine-art a portrétní fotograf z Plzně.`,
};

const approach = [
  {
    t: "Ateliér",
    d: "Pracuji v komorním prostoru s jediným zdrojem světla. Bez spěchu, bez davu — jen fotograf a fotografovaný.",
  },
  {
    t: "Světlo",
    d: "Přirozené i studiové. Zajímají mě přechody, zrno a chvíle, kdy stín začíná vyprávět.",
  },
  {
    t: "Důvěra",
    d: "Aktová a portrétní fotografie stojí na pohodě. Vždy si předem vyjasníme hranice a podobu focení.",
  },
];

const timeline = [
  ["2025", "Samostatná výstava „Ticho“ — Galerie Rudolfinum (návrh)"],
  ["2024", "Cyklus „Krajina těla“ — publikace ve fotografickém magazínu"],
  ["2022", "Zahájení volné fine-art tvorby"],
  ["2014", "První ateliérové portréty"],
];

export default function OMnePage() {
  return (
    <section className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <div className="photo relative aspect-[4/5] w-full lg:sticky lg:top-28">
            <Image
              src="/images/portrait.jpg"
              alt={`Portrét — ${site.name}`}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">O mně</p>
            <h1 className="display mt-4 text-5xl sm:text-7xl">{site.name}</h1>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>
                Jsem fotograf z Plzně. Přes deset let se věnuji portrétu a aktu
                — na pomezí dokumentu a volné, výtvarné tvorby.
              </p>
              <p>
                Mám rád černobílou fotografii, jediné světlo a ticho v ateliéru.
                Nehledám dokonalou pózu, ale okamžik, kdy člověk přestane hrát a
                jen je. Z toho podle mě vzniká fotografie, která vydrží.
              </p>
              <p>
                Fotím zakázkové portréty, editorial i dlouhodobé autorské série.
                Pokud vás moje tvorba oslovila, ozvěte se — domluvíme se.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-14">
            <p className="eyebrow mb-6">Jak pracuji</p>
            <div className="grid gap-8 sm:grid-cols-3">
              {approach.map((a) => (
                <div key={a.t}>
                  <h3 className="display text-2xl">{a.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {a.d}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-14">
            <p className="eyebrow mb-6">Výběr z tvorby</p>
            <ul className="divide-y divide-line border-y border-line">
              {timeline.map(([year, text]) => (
                <li key={year} className="flex gap-6 py-4">
                  <span className="w-14 shrink-0 text-sm text-ink-faint">
                    {year}
                  </span>
                  <span className="text-ink-soft">{text}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-12">
            <Link
              href="/kontakt"
              className="inline-block rounded-full bg-ink px-7 py-3.5 text-sm uppercase tracking-[0.14em] text-paper transition-colors hover:bg-noir"
            >
              Napsat mi
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
