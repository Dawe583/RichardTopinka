import { site } from "@/lib/content";

const SITE_URL = "https://topinka-blog.vercel.app";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#business`,
        name: site.name,
        description:
          "Fine-art a portrétní fotografie — ateliérové portréty, akt a studie světla.",
        url: SITE_URL,
        email: site.email,
        image: `${SITE_URL}/images/og.jpg`,
        areaServed: "Česká republika",
        address: {
          "@type": "PostalAddress",
          addressLocality: site.city,
          addressCountry: "CZ",
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
