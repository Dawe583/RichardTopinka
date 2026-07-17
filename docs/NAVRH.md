# Návrh dalšího rozvoje — Richard Topinka

Kam web posunout z „hezkého návrhu" na plnohodnotný, živý fotografův web.
Seřazeno podle fází (od rychlých výher po velké kroky). U každé položky je
odhad **dopadu** a **náročnosti**.

---

## Fáze 1 — Rychlé výhry (dny)

| Vylepšení | Dopad | Náročnost |
|---|---|---|
| **Skutečné fotky** místo zástupných (stejné názvy v `public/images`) | 🔥🔥🔥 | ★ |
| **Reálné kontakty** (e-mail, telefon, Instagram) v `lib/content.ts` | 🔥🔥 | ★ |
| **Favicon a OG obrázek** z vlastní fotky/loga | 🔥 | ★ |
| **Funkční odesílání formuláře** přes [Resend](https://resend.com) / [Formspree](https://formspree.io) (serverless, žádný server) | 🔥🔥 | ★★ |
| **`sitemap.xml` + `robots.txt`** (Next umí generovat) | 🔥 | ★ |
| **Analytika** — Vercel Analytics nebo [Plausible](https://plausible.io) | 🔥 | ★ |

## Fáze 2 — Skutečný blog & správa obsahu (1–2 týdny)

Dnes je obsah „zadrátovaný" v kódu. Aby si Richard mohl sám přidávat články
a fotky bez programátora:

- **Headless CMS** — doporučuji [Sanity](https://sanity.io) nebo
  [Payload](https://payloadcms.com). Vizuální editor, hostování fotek,
  náhledy. Skvěle sedí na Vercel (serverless).
  - *Levnější varianta:* články jako **MDX soubory** v repu (bez CMS, ale úpravy přes kód).
- **Blog / články** — stránky článků, kategorie, štítky, související příspěvky,
  datum, doba čtení, **RSS**.
- **Série jako plnohodnotné kolekce** — vlastní stránka série s vlastní galerií
  (dnes jen odkaz do galerie).
- **Správa médií** — [Vercel Blob](https://vercel.com/docs/storage/vercel-blob)
  nebo [Cloudinary](https://cloudinary.com): automatické zmenšení, WebP/AVIF,
  responsivní velikosti, blur placeholdery, vodoznak.

## Fáze 3 — Funkce pro fotografa & klienty (2–4 týdny)

- **18+ brána** (age gate) — souhlas s věkem pro aktovou tvorbu (bylo v původním záměru).
- **Klientské galerie** — chráněné heslem, klient si vybírá/schvaluje fotky (proofing).
- **Rezervace focení** — [Cal.com](https://cal.com) integrace / kalendář termínů.
- **Ceník** a **reference/recenze** klientů.
- **Prodej tisků (print shop)** — e-shop s [Stripe](https://stripe.com) platbami,
  print-on-demand.
- **Newsletter** — sběr e-mailů, upozornění na nové série (Resend/Mailchimp).

## Fáze 4 — Vyladění zážitku (průběžně)

- **Optimalizace obrázků** — zapnout Next Image optimization (CDN, AVIF/WebP,
  `blurDataURL`) — dnes záměrně vypnuto kvůli soběstačnosti návrhu.
- **View Transitions API** — plynulé přechody mezi stránkami (foto se „přenese"
  z galerie do detailu).
- **Lightbox 2.0** — swipe na mobilu, zoom, fullscreen slideshow, klávesnice (částečně hotovo).
- **Filtrování galerie** podle série/štítku, řazení, „load more".
- **Mikrointerakce** — hotovo: Lenis smooth scroll, parallax, mask-reveal,
  marquee, custom kurzor, scroll progress. Dále: magnetická tlačítka,
  hover video preview, animované přechody sekcí.
- **PWA** — instalovatelný web, offline náhledy.

## Fáze 5 — Dosah, kvalita, provoz

- **SEO** — metadata per stránka (hotový základ), **JSON-LD** structured data
  (Person, ImageObject), OG obrázky per fotka/série.
- **Vícejazyčnost (CZ/EN)** — přepínač jazyků (prohlížeč sám nabízí překlad → EN verze pomůže zahraniční klientele).
- **Přístupnost** — kontrola focus stavů, alt textů, klávesnicové ovládání,
  `prefers-reduced-motion` (hotovo).
- **Instagram feed** — automatické načítání posledních příspěvků.
- **Kvalita kódu** — E2E testy (Playwright), vizuální regrese, CI (GitHub Actions),
  monitoring chyb ([Sentry](https://sentry.io)).

---

## Doporučený „next step" stack

Pokud jde o **jeden další krok s největší hodnotou**: napojit **Sanity CMS**
(obsah + fotky pod kontrolou Richarda) a **Resend** (funkční formulář).
Tím se z návrhu stane web, který si klient spravuje sám — a všechno pořád
běží zdarma/levně na Vercelu.

*Rád kterýkoli bod rozpracuji do detailu nebo rovnou naimplementuji.*
