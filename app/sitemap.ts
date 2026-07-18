import type { MetadataRoute } from "next";
import { posts } from "@/lib/content";

const SITE_URL = "https://topinka-blog.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/sluzby",
    "/sluzby/portret",
    "/sluzby/akt",
    "/sluzby/boudoir",
    "/jak-to-probiha",
    "/reference",
    "/darkovy-poukaz",
    "/tisky",
    "/blog",
    "/galerie",
    "/serie",
    "/o-mne",
    "/kontakt",
  ];
  const staticEntries = routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
  const postEntries = posts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: p.date,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));
  return [...staticEntries, ...postEntries];
}
