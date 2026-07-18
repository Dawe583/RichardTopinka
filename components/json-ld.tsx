import { services, site } from "@/lib/content";

const SITE_URL = "https://topinka-blog.vercel.app";

function priceValue(priceFrom: string): string {
  return priceFrom.replace(/[^\d]/g, "");
}

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#business`,
        name: site.name,
        description:
          "Portrétní, aktová a boudoir fotografie v Plzni — ateliérové focení, studie světla a fine-art tvorba.",
        url: SITE_URL,
        email: site.email,
        image: `${SITE_URL}/images/og.jpg`,
        priceRange: "3900–6900 Kč",
        areaServed: [
          { "@type": "City", name: "Plzeň" },
          { "@type": "AdministrativeArea", name: "Plzeňský kraj" },
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: site.city,
          addressCountry: "CZ",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Focení",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title,
              description: s.tagline,
              url: `${SITE_URL}/sluzby/${s.slug}`,
            },
            price: priceValue(s.priceFrom),
            priceCurrency: "CZK",
          })),
        },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: site.name,
        jobTitle: "Fotograf",
        url: SITE_URL,
        worksFor: { "@id": `${SITE_URL}/#business` },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: site.name,
        inLanguage: "cs",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
