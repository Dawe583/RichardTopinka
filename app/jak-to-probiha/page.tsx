import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { Faq } from "@/components/faq";
import { CtaBand } from "@/components/cta-band";
import { faqGeneral, privacyNote, processSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Jak focení probíhá",
  description:
    "Od první zprávy po předání fotek. Jak probíhá portrétní, aktové a boudoir focení v Plzni — a jak chráním vaše soukromí.",
};

export default function JakToProbihaPage() {
  return (
    <>
      <section className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <header className="mb-16 max-w-2xl">
          <p className="eyebrow">Jak to probíhá</p>
          <h1 className="display mt-4 text-5xl sm:text-7xl">Od nápadu k fotkám</h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Ať jdete na portrét, akt nebo boudoir, cesta je stejně klidná. Tady
            je, co vás čeká — krok za krokem, bez překvapení.
          </p>
        </header>

        <ol className="space-y-10 sm:space-y-14">
          {processSteps.map((step) => (
            <Reveal key={step.n} as="li">
              <div className="grid gap-4 border-t border-line pt-8 sm:grid-cols-[auto_1fr] sm:gap-10">
                <span className="display text-5xl text-ink-faint sm:text-6xl">{step.n}</span>
                <div>
                  <h2 className="display text-2xl sm:text-3xl">{step.t}</h2>
                  <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">{step.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Soukromí */}
      <section className="border-y border-line bg-paper-2/40">
        <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-28">
          <Reveal>
            <p className="eyebrow">Soukromí &amp; důvěra</p>
            <p className="display mt-8 text-[1.7rem] leading-[1.3] sm:text-3xl">
              {privacyNote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[88rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <Reveal className="mb-8">
          <p className="eyebrow">Časté dotazy</p>
          <h2 className="display mt-3 text-3xl sm:text-4xl">Co se nejčastěji ptáte</h2>
        </Reveal>
        <Faq items={faqGeneral} />
      </section>

      <CtaBand />
    </>
  );
}
