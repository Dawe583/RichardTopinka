# Richard Topinka — Fotoblog

Blog pro fotografa aktů. Layout podle šablony akirasato.framer.website, vlastní kód: Next.js 16 + GSAP + Lenis + SQLite.

## Spuštění

```bash
npm install
npm run seed     # jednorázově: ukázková data + placeholder fotky
npm run build
npm start        # http://localhost:3000
```

Vývoj: `npm run dev`.

## Administrace

- URL: `http://localhost:3000/admin`
- Heslo: v `.env.local` → `ADMIN_PASSWORD` (**před nasazením změnit!**), `SESSION_SECRET` (změnit na náhodný řetězec)
- Články: vytváření, úpravy, publikace/koncept, úvodní fotka + galerie fotek k článku
- Série: kolekce, do kterých se články řadí
- Galerie: fotky pro stránku Galerie a úvodní stránku

Fotky se při nahrání automaticky zmenší a převedou do WebP (600/1200/2000 px) — lze nahrávat JPEGy v plném rozlišení.

## Struktura

- `app/(web)/` — veřejné stránky (Domů, Blog, Série, Galerie, O mně, Kontakt)
- `app/admin/` — administrace (heslo, HMAC session cookie)
- `app/api/uploads/` — servírování fotek z `uploads/`
- `lib/db.ts` — SQLite (soubor `data/blog.db`), `lib/images.ts` — sharp pipeline
- `components/anim/` — Lenis smooth scroll, GSAP animace (preloader, page transitions, parallax, SplitText reveals, custom cursor, marquee, 18+ brána)
- `scripts/seed.mjs` — ukázková data

## Nasazení

Potřebuje Node.js server (VPS, Railway, …) — kvůli SQLite a ukládání fotek na disk nelze na serverless (Vercel) bez úprav. Zálohovat stačí `data/` + `uploads/`.

## Po nasazení upravit

- E-mail `foto@richardtopinka.cz` (Footer.tsx, kontakt) a odkazy na sociální sítě (zatím placeholdery)
- Placeholder fotky nahradit skutečnými přes admin
