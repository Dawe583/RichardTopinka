import type { Metadata } from "next";
import { Gallery } from "@/components/gallery";
import { works } from "@/lib/content";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Výběr z fine-art a portrétní tvorby Richarda Topinky.",
};

export default function GaleriePage() {
  return (
    <section className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <header className="mb-14 max-w-2xl">
        <p className="eyebrow">Portfolio</p>
        <h1 className="display mt-4 text-5xl sm:text-7xl">Galerie</h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">
          Průřez volnou i zakázkovou tvorbou. Klikněte na fotografii pro
          zvětšení — procházet lze i šipkami.
        </p>
      </header>

      <Gallery works={works} />
    </section>
  );
}
