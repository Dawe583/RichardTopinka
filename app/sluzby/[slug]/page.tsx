import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { ParallaxImage } from "@/components/parallax-image";
import { Faq } from "@/components/faq";
import { CtaBand } from "@/components/cta-band";
import { services, site } from "@/lib/content";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.title} — ${site.city}`,
    description: `${s.tagline} Od ${s.priceFrom}, ${s.duration}. ${s.forWhom}`,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();

  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <section className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <Link
                href="/sluzby"
                className="eyebrow link-underline hover:text-ink"
              >
                ← Služby
              </Link>
              <h1 className="display mt-4 text-5xl sm:text-7xl">{s.title}</h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
                {s.intro}
              </p>
            </Reveal>

            <Reveal className="mt-10">
              <dl className="grid grid-cols-2 gap-6 border-y border-line py-6">
                <div>
                  <dt className="eyebrow">Cena od</dt>
                  <dd className="display mt-1 text-2xl">{s.priceFrom}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Délka</dt>
                  <dd className="display mt-1 text-2xl">{s.duration}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Dostanete</dt>
                  <dd className="mt-1 text-ink-soft">{s.deliverables}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Pro koho</dt>
                  <dd className="mt-1 text-ink-soft">{s.forWhom}</dd>
                </div>
              </dl>
            </Reveal>

            <Reveal className="mt-10">
              <Link
                href="/kontakt"
                className="inline-block rounded-full bg-ink px-7 py-3.5 text-sm uppercase tracking-[0.14em] text-paper transition-colors hover:bg-noir"
              >
                Rezervovat {s.title.toLowerCase()}
              </Link>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <ParallaxImage
              src={s.cover}
              alt={s.title}
              speed={7}
              className="aspect-[4/5] w-full lg:sticky lg:top-28"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </Reveal>
        </div>
      </section>

      {/* Co focení obsahuje */}
      <section className="border-t border-line bg-paper-2/40">
        <div className="mx-auto max-w-[88rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow">Co focení obsahuje</p>
              <h2 className="display mt-3 text-3xl sm:text-4xl">V ceně máte vše podstatné</h2>
            </Reveal>
            <Reveal delay={80}>
              <ul className="grid gap-4 sm:grid-cols-2">
                {s.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-ink-soft">
                    <span className="mt-1 shrink-0 text-ink">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ukázky */}
      <section className="mx-auto max-w-[88rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <Reveal className="mb-10">
          <p className="eyebrow">Ukázky</p>
          <h2 className="display mt-3 text-3xl sm:text-4xl">Z tvorby</h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {s.gallery.map((src, i) => (
            <Reveal key={src} as="div" delay={(i % 3) * 80}>
              <Link href="/galerie" className="photo group relative block aspect-[4/5] w-full">
                <Image
                  src={src}
                  alt={`${s.title} — ukázka ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[88rem] px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12">
        <Reveal className="mb-8">
          <p className="eyebrow">Časté dotazy</p>
          <h2 className="display mt-3 text-3xl sm:text-4xl">Než se rozhodnete</h2>
        </Reveal>
        <Faq items={s.faq} />
        <p className="mt-6 text-sm text-ink-soft">
          Další dotazy najdete v sekci{" "}
          <Link href="/jak-to-probiha" className="link-underline hover:text-ink">
            Jak to probíhá
          </Link>
          .
        </p>
      </section>

      {/* Další služby */}
      <section className="border-t border-line bg-paper-2/40">
        <div className="mx-auto max-w-[88rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <Reveal className="mb-10">
            <p className="eyebrow">Další služby</p>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2">
            {others.map((o, i) => (
              <Reveal key={o.slug} as="div" delay={i * 80}>
                <Link href={`/sluzby/${o.slug}`} className="group block">
                  <ParallaxImage
                    src={o.cover}
                    alt={o.title}
                    speed={10}
                    className="aspect-[16/10] w-full"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                  <div className="mt-5 flex items-baseline justify-between">
                    <h3 className="display text-2xl">{o.title}</h3>
                    <span className="text-xs uppercase tracking-[0.14em] text-ink-faint">
                      od {o.priceFrom}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={`Rezervujte ${s.title.toLowerCase()}`} />
    </>
  );
}
