# Richard Topinka — Fotoblog / Portfolio

Grafický **návrh** webu pro fotografa (portrét · akt · fine-art). Postaveno na
Next.js 16 (App Router) + Tailwind CSS v4. Statický web — běží kdekoliv,
nasazení na **Vercel** funguje bez konfigurace.

## Spuštění

```bash
npm install
npm run dev      # http://localhost:3000
```

Produkční build:

```bash
npm run build
npm start
```

## Struktura

- `app/` — stránky App Routeru
  - `page.tsx` — Domů (hero, vybrané práce, série, o mně, kontakt)
  - `galerie/` — Galerie s lightboxem
  - `serie/` — Série / kolekce
  - `o-mne/` — O mně
  - `kontakt/` — Kontakt (formulář přes `mailto:`)
- `components/` — hlavička, patička, galerie/lightbox, kontaktní formulář, reveal animace
- `lib/content.ts` — veškerý obsah (texty, seznam fotek, série) na jednom místě
- `public/images/` — fotografie
- `scripts/generate-images.mjs` — generátor zástupných fotek

## Fotografie

Fotky v `public/images/` jsou zatím **zástupné** — cohesivní černobílé
studie světla (film-grain), aby web působil hotově a šel ukázat jako návrh.
Jsou uložené přímo v repu, takže se web vždy vykreslí i offline.

**Nahrazení skutečnými fotkami:** stačí do `public/images/` vložit soubory se
stejnými názvy (`hero.jpg`, `work-01.jpg` … `work-09.jpg`, `portrait.jpg`,
`series-01…03.jpg`) a upravit texty v `lib/content.ts`.

Regenerace zástupných fotek:

```bash
npm i -D sharp
node scripts/generate-images.mjs
```

## Nasazení

Web je plně statický — **nasazení na Vercel funguje bez úprav**. Připojte repozitář
ve Vercelu (Framework preset se díky `vercel.json` nastaví na Next.js) a nasaďte
produkční větev. Alternativně jakýkoliv Node.js hosting (`npm run build && npm start`).

## Po nasazení upravit

- E-mail, telefon a odkazy na sociální sítě v `lib/content.ts` (zatím placeholdery)
- Zástupné fotky nahradit skutečnými (viz výše)
- Texty a názvy sérií v `lib/content.ts`
