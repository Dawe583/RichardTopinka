import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stránka nenalezena",
};

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-5 py-24 text-center">
      <p className="eyebrow">Chyba 404</p>
      <h1 className="display mt-6 text-6xl sm:text-8xl">Ztraceno ve stínu</h1>
      <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
        Tahle stránka neexistuje — možná byla přesunuta nebo odkaz zestárl.
        Vraťme se do světla.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-ink px-7 py-3.5 text-sm uppercase tracking-[0.14em] text-paper transition-colors hover:bg-noir"
        >
          Zpět domů
        </Link>
        <Link
          href="/galerie"
          className="text-sm uppercase tracking-[0.14em] text-ink-soft link-underline hover:text-ink"
        >
          Prohlédnout galerii
        </Link>
      </div>
    </section>
  );
}
