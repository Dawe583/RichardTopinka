import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Marquee } from "@/components/marquee";
import { ParallaxImage } from "@/components/parallax-image";
import { series, services, site, testimonials, works } from "@/lib/content";

const featured = ["work-01", "work-03", "work-07", "work-04", "work-06", "work-02"]
  .map((id) => works.find((w) => w.src.includes(id)))
  .filter(Boolean) as typeof works;

export default function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="mx-auto max-w-[88rem] px-5 pb-16 pt-10 sm:px-8 sm:pt-16 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="anim-fade-up eyebrow">Fine art · Portrét · Akt</p>
            <h1 className="mt-6 text-[3.4rem] leading-[0.92] sm:text-7xl lg:text-8xl">
              <span className="mask-line display">
                <span style={{ animationDelay: "0.08s" }}>Richard</span>
              </span>
              <span className="mask-line display">
                <span style={{ animationDelay: "0.2s" }}>Topinka</span>
              </span>
            </h1>
            <p
              className="anim-fade-up mt-7 max-w-md text-lg leading-relaxed text-ink-soft"
              style={{ animationDelay: "0.35s" }}
            >
              Fotografuji tělo jako krajinu — hledám ticho mezi světlem a
              stínem. Ateliérové portréty a volná fine-art tvorba z Plzně.
            </p>
            <div
              className="anim-fade-up mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "0.45s" }}
            >
              <Link
                href="/galerie"
                className="rounded-full bg-ink px-7 py-3.5 text-sm uppercase tracking-[0.14em] text-paper transition-colors hover:bg-noir"
              >
                Prohlédnout galerii
              </Link>
              <Link
                href="/kontakt"
                className="text-sm uppercase tracking-[0.14em] text-ink-soft link-underline hover:text-ink"
              >
                Kontakt
              </Link>
            </div>
          </div>

          <div className="anim-fade-up order-1 lg:order-2" style={{ animationDelay: "120ms" }}>
            <ParallaxImage
              src="/images/hero.jpg"
              alt="Fine-art fotografie — studie světla a formy"
              priority
              speed={7}
              className="aspect-[4/5] w-full"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      {/* ---------------- STATEMENT ---------------- */}
      <section className="border-y border-line bg-paper-2/40">
        <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32">
          <Reveal>
            <p className="eyebrow">Přístup</p>
            <p className="display mt-8 text-[2rem] leading-[1.18] sm:text-4xl">
              „Nejde o popis, ale o náladu. Jediné světlo, kus tmy a chvíle
              ticha — z toho vzniká obraz, který si pamatujete tělem, ne očima.“
            </p>
            <p className="mt-8 text-sm uppercase tracking-[0.16em] text-ink-faint">
              {site.name}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- FEATURED WORK ---------------- */}
      <section className="mx-auto max-w-[88rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <Reveal className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Výběr</p>
            <h2 className="display mt-3 text-4xl sm:text-5xl">Vybrané práce</h2>
          </div>
          <Link
            href="/galerie"
            className="hidden shrink-0 text-sm uppercase tracking-[0.14em] text-ink-soft link-underline hover:text-ink sm:block"
          >
            Celá galerie
          </Link>
        </Reveal>

        <div className="grid grid-cols-12 gap-4 sm:gap-6">
          {[
            "col-span-12 aspect-[4/5] sm:col-span-6",
            "col-span-12 aspect-[4/5] sm:col-span-6",
            "col-span-12 aspect-[16/10] sm:col-span-8",
            "col-span-12 aspect-[3/4] sm:col-span-4",
            "col-span-6 aspect-[4/5] sm:col-span-5",
            "col-span-6 aspect-[4/5] sm:col-span-7 sm:aspect-[16/10]",
          ].map((cls, i) => {
            const work = featured[i];
            if (!work) return null;
            return (
              <Reveal
                key={work.src}
                as="div"
                delay={(i % 2) * 90}
                className={cls}
              >
                <Link
                  href="/galerie"
                  className="photo group relative block h-full w-full"
                  aria-label={`${work.title} — otevřít galerii`}
                >
                  <Image
                    src={work.src}
                    alt={`${work.title} — ${work.series}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 40vw"
                    className="object-cover"
                  />
                  <span className="absolute bottom-0 left-0 right-0 flex items-baseline justify-between bg-gradient-to-t from-noir/70 to-transparent p-4 text-xs uppercase tracking-[0.14em] text-paper opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span>{work.title}</span>
                    <span>{work.year}</span>
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Link
          href="/galerie"
          className="mt-10 block text-center text-sm uppercase tracking-[0.14em] text-ink-soft link-underline hover:text-ink sm:hidden"
        >
          Celá galerie
        </Link>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <section className="mx-auto max-w-[88rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <Reveal className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Služby</p>
            <h2 className="display mt-3 text-4xl sm:text-5xl">Co pro vás nafotím</h2>
          </div>
          <Link
            href="/sluzby"
            className="hidden shrink-0 text-sm uppercase tracking-[0.14em] text-ink-soft link-underline hover:text-ink sm:block"
          >
            Služby &amp; ceník
          </Link>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} as="div" delay={i * 90}>
              <Link href={`/sluzby/${s.slug}`} className="group block">
                <ParallaxImage
                  src={s.cover}
                  alt={s.title}
                  speed={12}
                  className="aspect-[3/4] w-full"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
                <div className="mt-5 flex items-baseline justify-between">
                  <h3 className="display text-2xl">{s.title}</h3>
                  <span className="text-xs uppercase tracking-[0.14em] text-ink-faint">
                    od {s.priceFrom}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.tagline}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Link
          href="/sluzby"
          className="mt-10 block text-center text-sm uppercase tracking-[0.14em] text-ink-soft link-underline hover:text-ink sm:hidden"
        >
          Služby &amp; ceník
        </Link>
      </section>

      {/* ---------------- SERIES ---------------- */}
      <section className="border-t border-line bg-paper-2/40">
        <div className="mx-auto max-w-[88rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <Reveal className="mb-12">
            <p className="eyebrow">Kolekce</p>
            <h2 className="display mt-3 text-4xl sm:text-5xl">Série</h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {series.map((s, i) => (
              <Reveal key={s.slug} as="div" delay={i * 90}>
                <Link href="/serie" className="group block">
                  <ParallaxImage
                    src={s.cover}
                    alt={s.title}
                    speed={12}
                    className="aspect-[3/4] w-full"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                  <div className="mt-5 flex items-baseline justify-between">
                    <h3 className="display text-2xl">{s.title}</h3>
                    <span className="text-xs uppercase tracking-[0.14em] text-ink-faint">
                      {s.count} fotografií
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {s.blurb}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- ABOUT TEASER ---------------- */}
      <section className="mx-auto max-w-[88rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <ParallaxImage
              src="/images/portrait.jpg"
              alt="Portrét autora"
              speed={12}
              className="aspect-[4/5] w-full max-w-md"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </Reveal>
          <Reveal className="order-1 lg:order-2" delay={80}>
            <p className="eyebrow">O mně</p>
            <h2 className="display mt-3 text-4xl sm:text-5xl">
              Světlo, tělo, ticho
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
              Přes deset let fotografuji portrét a akt. Pracuji pomalu, v malém
              ateliéru, s jediným zdrojem světla. Zajímá mě chvíle, kdy člověk
              přestane pózovat a jen je.
            </p>
            <Link
              href="/o-mne"
              className="mt-8 inline-block text-sm uppercase tracking-[0.14em] text-ink-soft link-underline hover:text-ink"
            >
              Více o mně
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <section className="border-t border-line bg-paper-2/40">
        <div className="mx-auto max-w-[88rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <Reveal className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Reference</p>
              <h2 className="display mt-3 text-4xl sm:text-5xl">Slova klientů</h2>
            </div>
            <Link
              href="/reference"
              className="hidden shrink-0 text-sm uppercase tracking-[0.14em] text-ink-soft link-underline hover:text-ink sm:block"
            >
              Všechny reference
            </Link>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.slice(0, 2).map((t, i) => (
              <Reveal key={t.author} as="figure" delay={i * 90}>
                <blockquote className="flex h-full flex-col justify-between border border-line bg-paper p-8 sm:p-10">
                  <p className="display text-xl leading-[1.4] sm:text-2xl">„{t.quote}“</p>
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
        </div>
      </section>

      {/* ---------------- MARQUEE ---------------- */}
      <Marquee />

      {/* ---------------- CONTACT CTA ---------------- */}
      <section className="bg-noir text-paper">
        <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--color-ink-faint)" }}>
              Spolupráce
            </p>
            <h2 className="display mt-6 text-4xl sm:text-6xl">
              Máte projekt na mysli?
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-paper/70">
              Portréty, akt, editorial i volná tvorba. Napište mi, rád se
              domluvíme na termínu i podobě focení.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-10 inline-block rounded-full bg-paper px-8 py-4 text-sm uppercase tracking-[0.14em] text-ink transition-transform hover:scale-[1.03]"
            >
              {site.email}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
