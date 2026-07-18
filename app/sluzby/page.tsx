import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ParallaxImage } from "@/components/parallax-image";
import { CtaBand } from "@/components/cta-band";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Služby a ceník",
  description:
    "Portrétní, aktové a boudoir focení v Plzni. Ceny, co focení obsahuje a jak probíhá — fotograf Richard Topinka.",
};

export default function SluzbyPage() {
  return (
    <>
      <section className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <header className="mb-16 max-w-2xl">
          <p className="eyebrow">Služby &amp; ceník</p>
          <h1 className="display mt-4 text-5xl sm:text-7xl">Focení v Plzni</h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Portrét, akt i boudoir — vždy v klidu, se soukromím a s vedením celým
            focením. Vyberte si, co vás láká; ceny jsou orientační, konečnou
            podobu vždy doladíme na míru.
          </p>
        </header>

        <div className="space-y-20 sm:space-y-28">
          {services.map((s, i) => (
            <Reveal key={s.slug} as="article">
              <div
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Link href={`/sluzby/${s.slug}`} aria-label={s.title}>
                  <ParallaxImage
                    src={s.cover}
                    alt={s.title}
                    speed={11}
                    className="aspect-[3/2] w-full"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </Link>
                <div>
                  <p className="eyebrow">
                    Od {s.priceFrom} · {s.duration}
                  </p>
                  <h2 className="display mt-4 text-4xl sm:text-6xl">{s.title}</h2>
                  <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
                    {s.tagline}
                  </p>
                  <Link
                    href={`/sluzby/${s.slug}`}
                    className="mt-8 inline-block rounded-full bg-ink px-7 py-3.5 text-sm uppercase tracking-[0.14em] text-paper transition-colors hover:bg-noir"
                  >
                    Zjistit více
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        secondaryHref="/darkovy-poukaz"
        secondaryLabel="Darovat poukaz"
      />
    </>
  );
}
