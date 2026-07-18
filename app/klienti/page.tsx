import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ClientGate } from "@/components/client-gate";
import { clientGallery } from "@/lib/content";

export const metadata: Metadata = {
  title: "Klientská galerie",
  description:
    "Přihlášení do soukromé klientské galerie. Výběr fotek, stažení a objednávka tisků na jednom místě.",
  robots: { index: false, follow: false },
};

export default function KlientiPage() {
  return (
    <section className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">Klientská galerie</p>
            <h1 className="display mt-4 text-5xl sm:text-7xl">Vaše fotky</h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
              {clientGallery.intro}
            </p>
          </Reveal>
          <Reveal className="mt-10">
            <ul className="grid gap-4 border-y border-line py-6">
              {clientGallery.points.map((p) => (
                <li key={p} className="flex gap-3 text-ink-soft">
                  <span className="mt-1 shrink-0 text-ink">—</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="border border-line bg-paper-2/40 p-6 sm:p-10">
            <ClientGate />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
