import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { postKindLabel, posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Rady k focení, pohled do zákulisí a jak pracuji se soukromím. Blog fotografa Richarda Topinky — portrét, akt a boudoir v Plzni.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const [lead, ...rest] = sorted;

  return (
    <>
      <section className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <header className="mb-14 max-w-2xl">
          <p className="eyebrow">Blog</p>
          <h1 className="display mt-4 text-5xl sm:text-7xl">Rady, tipy &amp; zákulisí</h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Jak se připravit na focení, kolik co stojí a jak pracuji se
            soukromím. Píšu o tom, na co se nejčastěji ptáte.
          </p>
        </header>

        {/* Hlavní článek */}
        {lead && (
          <Reveal as="article" className="mb-16">
            <Link
              href={`/blog/${lead.slug}`}
              className="group grid gap-8 lg:grid-cols-2 lg:gap-14"
            >
              <div className="photo relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={lead.cover}
                  alt={lead.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="eyebrow">
                  {postKindLabel[lead.kind]} · {formatDate(lead.date)}
                </p>
                <h2 className="display mt-4 text-3xl leading-tight sm:text-5xl">
                  {lead.title}
                </h2>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
                  {lead.excerpt}
                </p>
                <span className="mt-6 text-sm uppercase tracking-[0.14em] text-ink-soft link-underline group-hover:text-ink">
                  Číst článek
                </span>
              </div>
            </Link>
          </Reveal>
        )}

        {/* Ostatní články */}
        <div className="grid gap-x-8 gap-y-14 border-t border-line pt-14 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} as="article" delay={(i % 3) * 80}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="photo relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <p className="eyebrow mt-5">
                  {postKindLabel[post.kind]} · {formatDate(post.date)}
                </p>
                <h3 className="display mt-2 text-2xl leading-snug">{post.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{post.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        eyebrow="Radši osobně?"
        title="Domluvme si focení"
        text="Nemusíte číst dál — pokud už víte, do čeho chcete jít, napište mi."
        secondaryHref="/sluzby"
        secondaryLabel="Služby & ceník"
      />
    </>
  );
}
