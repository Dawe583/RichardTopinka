import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { ParallaxImage } from "@/components/parallax-image";
import { postKindLabel, posts, services } from "@/lib/content";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [post.cover],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function readingMinutes(post: { lead: string; body: { h?: string; p: string }[] }) {
  const words =
    post.lead.split(/\s+/).length +
    post.body.reduce((n, b) => n + (b.h ?? "").split(/\s+/).length + b.p.split(/\s+/).length, 0);
  return Math.max(1, Math.round(words / 180));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const service = post.serviceSlug
    ? services.find((s) => s.slug === post.serviceSlug)
    : undefined;

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const SITE_URL = "https://topinka-blog.vercel.app";
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: `${SITE_URL}${post.cover}`,
    inLanguage: "cs",
    author: { "@type": "Person", name: "Richard Topinka" },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <section className="mx-auto max-w-3xl px-5 pt-16 sm:px-8 sm:pt-24">
        <Reveal>
          <Link href="/blog" className="eyebrow link-underline hover:text-ink">
            ← Blog
          </Link>
          <p className="eyebrow mt-6">
            {postKindLabel[post.kind]} · {formatDate(post.date)} · {readingMinutes(post)} min čtení
          </p>
          <h1 className="display mt-4 text-4xl leading-[1.05] sm:text-6xl">{post.title}</h1>
          <p className="mt-6 text-xl leading-relaxed text-ink-soft">{post.lead}</p>
        </Reveal>
      </section>

      <section className="mx-auto mt-12 max-w-[88rem] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <ParallaxImage
            src={post.cover}
            alt={post.title}
            speed={6}
            priority
            className="aspect-[16/9] w-full"
            sizes="(max-width: 1280px) 100vw, 1216px"
          />
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="space-y-10">
          {post.body.map((block, i) => (
            <Reveal key={i}>
              {block.h && <h2 className="display text-2xl sm:text-3xl">{block.h}</h2>}
              <p className="mt-3 text-lg leading-relaxed text-ink-soft">{block.p}</p>
            </Reveal>
          ))}
        </div>

        {/* Interní CTA na související službu */}
        {service && (
          <Reveal className="mt-14">
            <div className="border border-line bg-paper-2/40 p-8 sm:p-10">
              <p className="eyebrow">Související služba</p>
              <h3 className="display mt-3 text-2xl sm:text-3xl">{service.title}</h3>
              <p className="mt-3 max-w-md text-ink-soft">{service.tagline}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href={`/sluzby/${service.slug}`}
                  className="rounded-full bg-ink px-7 py-3.5 text-sm uppercase tracking-[0.14em] text-paper transition-colors hover:bg-noir"
                >
                  {service.title} — od {service.priceFrom}
                </Link>
                <Link
                  href="/kontakt"
                  className="text-sm uppercase tracking-[0.14em] text-ink-soft link-underline hover:text-ink"
                >
                  Nezávazná poptávka
                </Link>
              </div>
            </div>
          </Reveal>
        )}
      </section>

      {/* Další články */}
      <section className="border-t border-line bg-paper-2/40">
        <div className="mx-auto max-w-[88rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <Reveal className="mb-10">
            <p className="eyebrow">Další z blogu</p>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2">
            {related.map((r, i) => (
              <Reveal key={r.slug} as="div" delay={i * 80}>
                <Link href={`/blog/${r.slug}`} className="group block">
                  <div className="photo relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={r.cover}
                      alt={r.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="eyebrow mt-4">{postKindLabel[r.kind]}</p>
                  <h3 className="display mt-2 text-2xl leading-snug">{r.title}</h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
