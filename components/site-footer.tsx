import Link from "next/link";
import { nav, site } from "@/lib/content";

export function SiteFooter() {
  const year = 2026;
  return (
    <footer className="mt-24 border-t border-line bg-paper-2/40">
      <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="display text-3xl">{site.name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
              {site.role}. Ateliér {site.city}. Zakázková i volná tvorba —
              portrét, akt, fine-art.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Navigace</p>
            <ul className="space-y-2 text-sm text-ink-soft">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Kontakt</p>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li>
                <a href={`mailto:${site.email}`} className="link-underline hover:text-ink">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline hover:text-ink"
                >
                  Instagram {site.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-line pt-6 text-xs text-ink-faint sm:flex-row">
          <p>
            © {year} {site.name}. Všechna práva vyhrazena.
          </p>
          <p>{site.draftNote}</p>
        </div>
      </div>
    </footer>
  );
}
