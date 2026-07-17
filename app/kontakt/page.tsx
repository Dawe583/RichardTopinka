import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontakt na fotografa ${site.name} — ${site.email}.`,
};

export default function KontaktPage() {
  return (
    <section className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">Spojme se</p>
          <h1 className="display mt-4 text-5xl sm:text-7xl">Kontakt</h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Máte zájem o portrét, akt nebo spolupráci na volném projektu?
            Napište mi — ozvu se obvykle do dvou dnů.
          </p>

          <dl className="mt-10 space-y-6">
            <div>
              <dt className="eyebrow">E-mail</dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`} className="text-lg link-underline hover:text-ink">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Telefon</dt>
              <dd className="mt-1 text-lg text-ink-soft">{site.phone}</dd>
            </div>
            <div>
              <dt className="eyebrow">Instagram</dt>
              <dd className="mt-1">
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg link-underline hover:text-ink"
                >
                  {site.instagram}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Ateliér</dt>
              <dd className="mt-1 text-lg text-ink-soft">{site.city}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={80}>
          <div className="border border-line bg-paper-2/40 p-6 sm:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
