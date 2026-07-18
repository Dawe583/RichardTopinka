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
  { href: "/sluzby", label: "Služby" },
  { href: "/galerie", label: "Galerie" },
  { href: "/blog", label: "Blog" },
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

/* ---------- Služby ---------- */

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  priceFrom: string;
  duration: string;
  deliverables: string;
  forWhom: string;
  cover: string;
  gallery: string[];
  intro: string;
  includes: string[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "portret",
    title: "Portrétní focení",
    tagline: "Portrét, který vypadá jako vy — ne jako póza.",
    priceFrom: "3 900 Kč",
    duration: "60–90 minut",
    deliverables: "15–25 retušovaných fotografií",
    forWhom: "Osobní portrét, profil, herci a umělci, dárek pro blízké.",
    cover: "/images/work-04.jpg",
    gallery: ["/images/work-04.jpg", "/images/work-01.jpg", "/images/work-08.jpg"],
    intro:
      "Komorní ateliérový portrét v řízeném světle. Pracuji beze spěchu — než padne první snímek, chvíli si povídáme, aby focení nebylo o pózování, ale o vás. Výsledkem je černobílý portrét s charakterem, který obstojí i za deset let.",
    includes: [
      "Konzultace a příprava před focením",
      "60–90 minut focení v ateliéru v Plzni",
      "Vedení pózováním — nemusíte nic umět",
      "Výběr snímků v online galerii",
      "15–25 fotografií v profesionální retuši",
      "Fotky ve vysokém rozlišení k tisku i na web",
    ],
    faq: [
      {
        q: "Nikdy jsem se nefotil/a. Zvládnu to?",
        a: "Ano. Celým focením vás vedu — řeknu, kam se postavit, kam se dívat, co dělat s rukama. Většina klientů se do deseti minut uvolní.",
      },
      {
        q: "Můžu přijít ve svém oblečení?",
        a: "Určitě. Doporučuji vzít dvě až tři varianty, ideálně jednobarevné. Před focením si je spolu projdeme.",
      },
    ],
  },
  {
    slug: "akt",
    title: "Aktové focení",
    tagline: "Tělo jako krajina — s klidem, respektem a soukromím.",
    priceFrom: "5 900 Kč",
    duration: "90–120 minut",
    deliverables: "20–30 retušovaných fotografií",
    forWhom: "Volná fine-art tvorba, umělecký akt, autorský projekt.",
    cover: "/images/work-01.jpg",
    gallery: ["/images/work-01.jpg", "/images/work-06.jpg", "/images/work-03.jpg"],
    intro:
      "Umělecký akt na pomezí dokumentu a výtvarné fotografie. Fotím černobíle, na jediné světlo, ve zcela soukromém ateliéru — jen fotograf a fotografovaný. Hranice si vždy určujete vy a předem si vyjasníme, kde a jak budou fotografie použité.",
    includes: [
      "Nezávazná konzultace o podobě a hranicích focení",
      "Soukromý ateliér, žádné publikum",
      "90–120 minut focení bez spěchu",
      "Citlivé vedení pózováním",
      "Výběr snímků jen pro vás v zabezpečené galerii",
      "20–30 fotografií v jemné retuši, plná práva na soukromí",
    ],
    faq: [
      {
        q: "Kdo fotografie uvidí?",
        a: "Pouze vy. Nic nezveřejňuji bez vašeho výslovného písemného souhlasu. Bez něj fotky slouží čistě pro vaši potřebu.",
      },
      {
        q: "Jak je zajištěné soukromí při focení?",
        a: "Ateliér je uzavřený a soukromý, na focení nikdo další není. Tempo i hranice řídíte vy — kdykoli si můžeme dát pauzu.",
      },
      {
        q: "Musím ukázat obličej?",
        a: "Ne. Řada aktů pracuje jen s linií a tvarem. Míru anonymity si zvolíte sami.",
      },
    ],
  },
  {
    slug: "boudoir",
    title: "Boudoir focení",
    tagline: "Smyslné fotografie, u kterých se cítíte krásně a bezpečně.",
    priceFrom: "6 900 Kč",
    duration: "120 minut",
    deliverables: "25–35 retušovaných fotografií",
    forWhom: "Dárek pro partnera, oslava sebe sama, před svatbou.",
    cover: "/images/work-06.jpg",
    gallery: ["/images/work-06.jpg", "/images/work-04.jpg", "/images/work-09.jpg"],
    intro:
      "Intimní, elegantní boudoir focení, které oslavuje vaši osobnost. Postarám se o klidnou atmosféru, vedení i náladu — vy si jen užíváte. Oblíbený dárek k výročí, před svatbou nebo prostě pro radost ze sebe.",
    includes: [
      "Konzultace, výběr stylu a rekvizit",
      "120 minut focení v příjemném prostředí",
      "Kompletní vedení pózováním",
      "Tip na líčení a účes (na přání zajistím vizážistku)",
      "Soukromá online galerie k výběru",
      "25–35 fotografií v retuši, možnost tištěného alba",
    ],
    faq: [
      {
        q: "Můžu focení dát jako dárek?",
        a: "Ano — nejčastější důvod. Nabízím dárkový poukaz s volností termínu, obdarovaný si focení naplánuje, až se bude cítit připravený.",
      },
      {
        q: "Co si mám vzít na sebe?",
        a: "Cokoli, v čem se cítíte dobře — prádlo, košile partnera, šaty. Před focením spolu styl probereme.",
      },
    ],
  },
];

/* ---------- Reference ---------- */

export type Testimonial = { quote: string; author: string; service: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "Šla jsem do toho s obrovskou nervozitou a odcházela s pocitem, že jsem nikdy nevypadala líp. Richard dokázal, že jsem se cítila naprosto v bezpečí.",
    author: "Klára V.",
    service: "Boudoir focení",
  },
  {
    quote:
      "Nejlepší portrét, jaký o sobě mám. Vůbec nepůsobí nastrojeně — přesně jak jsem doufala. Vedení celým focením bylo perfektní.",
    author: "Martin H.",
    service: "Portrétní focení",
  },
  {
    quote:
      "Aktové focení bylo důstojné a profesionální od první do poslední minuty. Oceňuji, jak jasně jsme si předem řekli, kde fotky skončí — nikde bez mého svolení.",
    author: "Tereza M.",
    service: "Aktové focení",
  },
  {
    quote:
      "Citlivý přístup, klid a výsledek jako z galerie. Doporučuji každému, kdo váhá — právě pro vás to bude nejsilnější zážitek.",
    author: "Jana P.",
    service: "Boudoir focení",
  },
];

/* ---------- Jak to probíhá ---------- */

export const processSteps: { n: string; t: string; d: string }[] = [
  {
    n: "01",
    t: "Ozvete se",
    d: "Napíšete mi přes formulář nebo e-mail, o jaké focení máte zájem. Odpovídám obvykle do dvou dnů.",
  },
  {
    n: "02",
    t: "Konzultace",
    d: "Nezávazně probereme vaši představu, termín, místo a — u aktu a boudoiru — hranice a soukromí. Vše na rovinu, předem.",
  },
  {
    n: "03",
    t: "Focení",
    d: "V klidném, soukromém ateliéru v Plzni. Celým focením vás vedu, nemusíte nic umět. Tempo určujete vy.",
  },
  {
    n: "04",
    t: "Výběr fotek",
    d: "Do několika dní dostanete odkaz na soukromou online galerii, ze které si vyberete své snímky.",
  },
  {
    n: "05",
    t: "Retuš a předání",
    d: "Vybrané fotografie citlivě zretušuji a předám ve vysokém rozlišení. Na přání připravím tisky nebo album.",
  },
];

export const privacyNote =
  "Vaše soukromí je u aktové a boudoir fotografie na prvním místě. Fotografie nikdy nezveřejňuji bez vašeho výslovného písemného souhlasu — bez něj slouží pouze vám. Galerie k výběru jsou zabezpečené heslem a na focení není nikdo kromě nás.";

/* ---------- Časté dotazy (obecné) ---------- */

export const faqGeneral: { q: string; a: string }[] = [
  {
    q: "Kde focení probíhá?",
    a: "V soukromém ateliéru v Plzni. Po domluvě fotím i v exteriéru nebo v rámci Plzeňského kraje.",
  },
  {
    q: "Jak dlouho trvá, než dostanu fotky?",
    a: "Odkaz na galerii k výběru dostanete do několika dní. Hotové retušované fotografie pak zpravidla do dvou týdnů od výběru.",
  },
  {
    q: "Jak je to se soukromím u aktu a boudoiru?",
    a: "Nic nezveřejňuji bez vašeho písemného souhlasu. Galerie jsou chráněné heslem a na focení nikdy není nikdo další.",
  },
  {
    q: "Můžu focení věnovat jako dárek?",
    a: "Ano, nabízím dárkové poukazy s volností termínu i typu focení. Obdarovaný si vše naplánuje, až se bude cítit připravený.",
  },
  {
    q: "Musím umět pózovat?",
    a: "Ne. Celým focením vás vedu — řeknu vám, co dělat. Většina klientů se během chvíle uvolní.",
  },
];

/* ---------- Dárkový poukaz ---------- */

export const giftVoucher = {
  title: "Dárkový poukaz",
  tagline: "Darujte zážitek, na který se nezapomíná.",
  intro:
    "Focení jako dárek je jedním z nejosobnějších dárků vůbec. Poukaz platí na libovolný typ focení a obdarovaný si sám zvolí termín — bez tlaku, až se bude cítit připravený.",
  points: [
    "Platnost 12 měsíců od zakoupení",
    "Volný výběr typu focení (portrét, akt, boudoir)",
    "Elegantní tištěná nebo digitální podoba",
    "Možnost libovolné hodnoty nad rámec základní ceny",
  ],
};

/* ---------- Blog ---------- */

export type PostKind = "portfolio" | "navod" | "duvera";

export const postKindLabel: Record<PostKind, string> = {
  portfolio: "Ze zákulisí",
  navod: "Návod",
  duvera: "Jak pracuji",
};

export type Post = {
  slug: string;
  title: string;
  kind: PostKind;
  date: string; // YYYY-MM-DD
  cover: string;
  excerpt: string;
  serviceSlug?: string;
  lead: string;
  body: { h?: string; p: string }[];
};

/* ---------- Tisky ---------- */

export const printsIntro =
  "Fotografie žije nejlépe na papíře. Nabízím ruční fine-art tisky svých snímků na kvalitní bavlněný papír — a po focení i tisky vašich vlastních fotografií. Každý tisk kontroluji před odesláním kus po kuse.";

export type Print = { size: string; price: string; note: string };

export const prints: Print[] = [
  { size: "A4 (21 × 30 cm)", price: "990 Kč", note: "Bavlněný papír, edice bez rámu" },
  { size: "A3 (30 × 42 cm)", price: "1 690 Kč", note: "Nejoblíbenější formát na zeď" },
  { size: "A2 (42 × 60 cm)", price: "2 890 Kč", note: "Výrazný formát do obývacího prostoru" },
  { size: "Na míru", price: "dle rozměru", note: "Velkoformát i pasparta na přání" },
];

export const printPapers = [
  "Hahnemühle Photo Rag — matný bavlněný papír s jemnou strukturou",
  "Baryta — pololesklý povrch s hlubokou černou pro akt a portrét",
  "Volitelně adjustace: pasparta, rám nebo dřevěná lišta",
];

/* ---------- Klientská galerie ---------- */

export const clientGallery = {
  intro:
    "Po focení dostanete odkaz na svou soukromou galerii chráněnou heslem. Vyberete si z ní snímky do finální retuše, stáhnete hotové fotografie a můžete objednat tisky — vše na jednom místě, přístupné jen vám.",
  points: [
    "Přístup pouze přes odkaz a heslo, které dostanete e-mailem",
    "Galerie je viditelná jen pro vás, nikde se neindexuje",
    "Výběr fotek, stažení i objednávka tisků na jednom místě",
    "U aktu a boudoiru galerii na přání po stažení smažu",
  ],
  demoCode: "UKAZKA",
};

/* ---------- Blog ---------- */

export const posts: Post[] = [
  {
    slug: "jak-se-pripravit-na-boudoir-foceni",
    title: "Jak se připravit na boudoir focení: 7 tipů, díky kterým budete klidní",
    kind: "navod",
    date: "2026-06-18",
    cover: "/images/work-06.jpg",
    excerpt:
      "Nervozita před boudoir focením je normální. Sedm praktických tipů, jak se připravit, aby vám focení přineslo radost, ne stres.",
    serviceSlug: "boudoir",
    lead: "Většina klientek přichází na boudoir focení s trémou. Je to úplně přirozené — a dá se s ní snadno pracovat. Tady je sedm věcí, které vám focení usnadní.",
    body: [
      {
        h: "1. Vyberte si termín, kdy nikam nespěcháte",
        p: "Boudoir focení není o rychlosti. Naplánujte si den tak, abyste po focení nemuseli nikam pádit — klid před i po focení je půlka výsledku.",
      },
      {
        h: "2. Spěte a pijte vodu",
        p: "Odpočatá pleť a dostatek vody udělají pro výsledek víc než jakákoli retuš. Den před focením se vyhněte alkoholu a slaným jídlům.",
      },
      {
        h: "3. Připravte si dvě až tři varianty oblečení",
        p: "Prádlo, ve kterém se cítíte dobře, košile partnera, jednoduché šaty. Vezměte víc variant — na místě spolu vybereme, co bude fungovat nejlíp.",
      },
      {
        h: "4. Líčení decentní, ale trvanlivé",
        p: "Přirozené líčení funguje na fotkách nejlépe. Pokud chcete, zajistím profesionální vizážistku, která ví, jak líčení sedne pod studiové světlo.",
      },
      {
        h: "5. Nechte pózování na mně",
        p: "Nemusíte umět vůbec nic. Celým focením vás vedu — řeknu, kam se opřít, kam se dívat, co dělat s rukama. Vaším úkolem je jen dýchat.",
      },
      {
        h: "6. Řekněte mi předem své hranice",
        p: "Co chcete a nechcete fotit, si vyjasníme dřív, než vezmu foťák do ruky. Hranice určujete vy a kdykoli je můžeme upravit.",
      },
      {
        h: "7. Přijďte si to užít",
        p: "Nejhezčí fotky vznikají ve chvíli, kdy se začnete bavit. Berte to jako hodinu jen pro sebe — o zbytek se postarám.",
      },
    ],
  },
  {
    slug: "kolik-stoji-portretni-foceni-plzen",
    title: "Kolik stojí portrétní focení v Plzni a co za tu cenu dostanete",
    kind: "navod",
    date: "2026-05-27",
    cover: "/images/work-04.jpg",
    excerpt:
      "Přehled cen portrétního focení v Plzni — co ovlivňuje cenu, co má být v ceně a proč se nevyplatí jít po nejlevnějším.",
    serviceSlug: "portret",
    lead: "Cena portrétního focení se liší podle času, počtu fotek a rozsahu retuše. Tady je, s čím počítat a na co se ptát, ať víte, za co platíte.",
    body: [
      {
        h: "Co cenu tvoří",
        p: "U portrétu platíte tři věci: čas u focení, čas nad výběrem a retuší, a zkušenost, díky které focení dopadne. Levné focení obvykle šetří právě na retuši a vedení — a to je přesně to, co dělá rozdíl.",
      },
      {
        h: "Orientační cena v Plzni",
        p: "Kvalitní ateliérový portrét v Plzni začíná zhruba na 3 900 Kč. V ceně by mělo být focení, výběr v online galerii a alespoň 15–20 profesionálně retušovaných fotografií ve vysokém rozlišení.",
      },
      {
        h: "Na co se ptát předem",
        p: "Kolik fotek dostanu? Jsou v ceně retuše? Dostanu snímky ve vysokém rozlišení k tisku? Jak dlouho trvá dodání? Jasné odpovědi na tyhle otázky poznáte profesionála.",
      },
      {
        h: "Proč nejlevnější nebývá nejlevnější",
        p: "Portrét, který vypadá nuceně nebo přijde přeretušovaný, nakonec zaplatíte znovu — u někoho jiného. Dobrý portrét pořídíte jednou a vydrží roky.",
      },
    ],
  },
  {
    slug: "atelierove-akty-svetlo-od-okna",
    title: "Ateliérové akty se světlem od okna: jak vznikala série Ateliér",
    kind: "portfolio",
    date: "2026-04-12",
    cover: "/images/work-01.jpg",
    excerpt:
      "Ohlédnutí za sérií Ateliér — proč fotím akty na jediné světlo od okna a co všechno se děje, než padne první snímek.",
    serviceSlug: "akt",
    lead: "Série Ateliér vznikala přes celou zimu v jedné místnosti s jedním oknem. Bez blesků, bez asistentů — jen světlo, které zrovna byl venku, a spousta ticha.",
    body: [
      {
        h: "Jediné světlo",
        p: "Celá série stojí na světle od severního okna. Nemění se rychle, je měkké a modeluje tvar tak, jak žádný blesk nedokáže. Stačí čekat na správnou hodinu.",
      },
      {
        h: "Než padne první snímek",
        p: "Nejdůležitější část focení se odehraje dřív, než vezmu foťák. Povídáme si, projdeme, kde fotky skončí, a domluvíme se na hranicích. Teprve když je klid, začínáme.",
      },
      {
        h: "Tělo jako krajina",
        p: "Nefotím pózy, ale linie. Hřbet, rameno, prohlubeň klíční kosti — v měkkém světle se tělo čte jako krajina. O to mi v aktu jde: ne o odhalení, ale o tvar.",
      },
    ],
  },
  {
    slug: "soukromi-u-aktoveho-foceni",
    title: "Soukromí u aktového focení: jak chráním vaše fotografie",
    kind: "duvera",
    date: "2026-03-03",
    cover: "/images/work-03.jpg",
    excerpt:
      "Kdo uvidí vaše akty, kde se ukládají a proč bez vašeho písemného souhlasu nikdy nic nezveřejním. O soukromí na rovinu.",
    serviceSlug: "akt",
    lead: "Nejčastější otázka před aktovým focením není o pózách ani o ceně. Je o soukromí — kdo fotky uvidí. Tady je odpověď, na rovinu.",
    body: [
      {
        h: "Bez souhlasu nikde nic",
        p: "Žádnou fotografii z aktového ani boudoir focení nikde nezveřejňuji bez vašeho výslovného písemného souhlasu. Bez něj slouží snímky výhradně vám.",
      },
      {
        h: "Zabezpečená galerie",
        p: "Fotky k výběru dostanete v galerii chráněné heslem, ke které máte přístup jen vy. Nic neleží veřejně na sociálních sítích ani v nechráněných odkazech.",
      },
      {
        h: "Na focení nikdo další",
        p: "Ateliér je při aktovém focení zcela soukromý — jsme tam jen my dva. Tempo i hranice řídíte vy a kdykoli si můžeme dát pauzu.",
      },
      {
        h: "Vaše data, vaše pravidla",
        p: "Pokud chcete, po předání fotek originály smažu. Rozhodnutí, co se se snímky stane, je vždycky vaše — ne moje.",
      },
    ],
  },
];
