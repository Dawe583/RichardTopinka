import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ParallaxImage } from "@/components/parallax-image";
import { CtaBand } from "@/components/cta-band";
import { printPapers, prints, printsIntro } from "@/lib/content";

export const metadata: Metadata = {
  title: "Fine-art tisky",
  description:
    "Ruční fine-art tisky fotografií na bavlněný papír. Formáty A4 až velkoformát, tisk vlastních i autorských snímků — Plzeň.",
};

export default function TiskyPage() {
  return (
    <>
      <section className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow">Tisky</p>
              <h1 className="display mt-4 text-5xl sm:text-7xl">Fotografie na papíře</h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
                {printsIntro}
              </p>
            </Reveal>

            <Reveal className="mt-12">
              <p className="eyebrow mb-4">Ceník</p>
              <ul className="divide-y divide-line border-y border-line">
                {prints.map((p) => (
                  <li key={p.size} className="flex items-baseline justify-between gap-6 py-4">
                    <div>
                      <p className="text-lg text-ink">{p.size}</p>
                      <p className="text-sm text-ink-soft">{p.note}</p>
                    </div>
                    <span className="display shrink-0 text-xl">{p.price}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-10">
              <p className="eyebrow mb-4">Papíry &amp; adjustace</p>
              <ul className="grid gap-3">
                {printPapers.map((p) => (
                  <li key={p} className="flex gap-3 text-ink-soft">
                    <span className="mt-1 shrink-0 text-ink">—</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-10">
              <Link
                href="/kontakt"
                className="inline-block rounded-full bg-ink px-7 py-3.5 text-sm uppercase tracking-[0.14em] text-paper transition-colors hover:bg-noir"
              >
                Objednat tisk
              </Link>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <ParallaxImage
              src="/images/work-09.jpg"
              alt="Fine-art tisk na bavlněném papíře"
              speed={7}
              className="aspect-[4/5] w-full lg:sticky lg:top-28"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Byli jste u mě fotit?"
        title="Objednejte tisky ze své galerie"
        text="Fotografie z focení vytisknu na fine-art papír a pošlu až domů. Napište mi formát a papír."
        secondaryHref="/klienti"
        secondaryLabel="Klientská galerie"
      />
    </>
  );
}
