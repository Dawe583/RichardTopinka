import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function CtaBand({
  eyebrow = "Pojďme se domluvit",
  title = "Rezervujte si focení",
  text = "Napište mi svou představu — ozvu se obvykle do dvou dnů a společně naplánujeme termín.",
  primaryHref = "/kontakt",
  primaryLabel = "Nezávazná poptávka",
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="border-y border-line bg-paper-2/40">
      <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="display mt-6 text-4xl sm:text-6xl">{title}</h2>
          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-ink-soft">{text}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={primaryHref}
              className="rounded-full bg-ink px-7 py-3.5 text-sm uppercase tracking-[0.14em] text-paper transition-colors hover:bg-noir"
            >
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel && (
              <Link
                href={secondaryHref}
                className="text-sm uppercase tracking-[0.14em] text-ink-soft link-underline hover:text-ink"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
