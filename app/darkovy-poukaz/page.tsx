import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ParallaxImage } from "@/components/parallax-image";
import { giftVoucher, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Dárkový poukaz na focení",
  description:
    "Darujte focení. Dárkový poukaz na portrét, akt nebo boudoir v Plzni s platností 12 měsíců a volným termínem.",
};

export default function DarkovyPoukazPage() {
  return (
    <section className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow">{giftVoucher.title}</p>
            <h1 className="display mt-4 text-5xl sm:text-7xl">{giftVoucher.tagline}</h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
              {giftVoucher.intro}
            </p>
          </Reveal>

          <Reveal className="mt-10">
            <ul className="grid gap-4 border-y border-line py-6">
              {giftVoucher.points.map((p) => (
                <li key={p} className="flex gap-3 text-ink-soft">
                  <span className="mt-1 shrink-0 text-ink">—</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-8">
            <p className="eyebrow mb-3">Orientační hodnoty</p>
            <div className="flex flex-wrap gap-3">
              {services.map((s) => (
                <span
                  key={s.slug}
                  className="rounded-full border border-line px-4 py-2 text-sm text-ink-soft"
                >
                  {s.title} — od {s.priceFrom}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-10">
            <Link
              href="/kontakt"
              className="inline-block rounded-full bg-ink px-7 py-3.5 text-sm uppercase tracking-[0.14em] text-paper transition-colors hover:bg-noir"
            >
              Objednat poukaz
            </Link>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <ParallaxImage
            src="/images/work-08.jpg"
            alt="Dárkový poukaz na focení"
            speed={7}
            className="aspect-[4/5] w-full lg:sticky lg:top-28"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
