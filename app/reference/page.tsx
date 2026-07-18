import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Reference",
  description:
    "Co říkají lidé, které jsem fotil. Reference na portrétní, aktové a boudoir focení — fotograf Richard Topinka, Plzeň.",
};

export default function ReferencePage() {
  return (
    <>
      <section className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <header className="mb-16 max-w-2xl">
          <p className="eyebrow">Reference</p>
          <h1 className="display mt-4 text-5xl sm:text-7xl">Slova klientů</h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Většina lidí přichází s nervozitou a odchází překvapená. Tady je, co
            říkají ti, kdo do focení šli přede mnou.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} as="figure" delay={(i % 2) * 90}>
              <blockquote className="flex h-full flex-col justify-between border border-line bg-paper-2/40 p-8 sm:p-10">
                <p className="display text-xl leading-[1.4] sm:text-2xl">
                  „{t.quote}“
                </p>
                <figcaption className="mt-8 flex items-baseline justify-between gap-4">
                  <span className="text-ink">{t.author}</span>
                  <span className="text-xs uppercase tracking-[0.14em] text-ink-faint">
                    {t.service}
                  </span>
                </figcaption>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <p className="max-w-2xl text-sm text-ink-faint">
            Reference zveřejňuji pouze se souhlasem klientů. U aktového a boudoir
            focení uvádím jméno jen v podobě, se kterou klient výslovně souhlasil.
          </p>
        </Reveal>
      </section>

      <CtaBand
        title="Přidejte se k nim"
        text="Napište mi, o jaké focení máte zájem — ozvu se obvykle do dvou dnů."
      />
    </>
  );
}
