// Central content for the site. This is a design draft (návrh) — swap the copy
// and drop real photos into /public/images (same filenames) to go live.

export const site = {
  name: "Richard Topinka",
  role: "Fine-art & portrétní fotografie",
  city: "Plzeň",
  email: "foto@richardtopinka.cz",
  phone: "+420 000 000 000",
  instagram: "@richardtopinka",
  instagramUrl: "https://instagram.com/",
  draftNote: "Toto je grafický návrh. Texty i fotografie jsou zástupné.",
};

export const nav = [
  { href: "/", label: "Domů" },
  { href: "/galerie", label: "Galerie" },
  { href: "/serie", label: "Série" },
  { href: "/o-mne", label: "O mně" },
  { href: "/kontakt", label: "Kontakt" },
];

export type Work = {
  src: string;
  w: number;
  h: number;
  title: string;
  year: string;
  series: string;
};

export const works: Work[] = [
  { src: "/images/work-01.jpg", w: 1200, h: 1500, title: "Studie I", year: "2025", series: "Ateliér" },
  { src: "/images/work-07.jpg", w: 1600, h: 1000, title: "Horizont", year: "2025", series: "Krajina těla" },
  { src: "/images/work-04.jpg", w: 1100, h: 1650, title: "Ticho", year: "2024", series: "Ateliér" },
  { src: "/images/work-03.jpg", w: 1200, h: 1200, title: "Forma", year: "2025", series: "Světlo" },
  { src: "/images/work-06.jpg", w: 1200, h: 1500, title: "Závoj", year: "2024", series: "Světlo" },
  { src: "/images/work-02.jpg", w: 1500, h: 1000, title: "Vlna", year: "2023", series: "Krajina těla" },
  { src: "/images/work-08.jpg", w: 1200, h: 1500, title: "Dech", year: "2025", series: "Ateliér" },
  { src: "/images/work-09.jpg", w: 1200, h: 1200, title: "Zrno", year: "2024", series: "Světlo" },
  { src: "/images/work-05.jpg", w: 1500, h: 1000, title: "Klid", year: "2023", series: "Krajina těla" },
];

export type Series = {
  slug: string;
  title: string;
  cover: string;
  count: number;
  blurb: string;
};

export const series: Series[] = [
  {
    slug: "atelier",
    title: "Ateliér",
    cover: "/images/series-01.jpg",
    count: 24,
    blurb:
      "Komorní portréty v řízeném světle. Studie tvaru, gesta a klidu — tam, kde stačí jediný zdroj světla a ticho.",
  },
  {
    slug: "svetlo",
    title: "Světlo",
    cover: "/images/series-02.jpg",
    count: 18,
    blurb:
      "Cyklus o tom, jak světlo modeluje formu. Jemné přechody, zrno a šero, ve kterém se rodí detail.",
  },
  {
    slug: "krajina-tela",
    title: "Krajina těla",
    cover: "/images/series-03.jpg",
    count: 21,
    blurb:
      "Tělo jako krajina — linie, horizonty a stíny. Abstrahovaná fine-art fotografie na pomezí aktu a grafiky.",
  },
];
