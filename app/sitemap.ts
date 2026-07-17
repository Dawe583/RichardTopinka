import type { MetadataRoute } from "next";

const SITE_URL = "https://topinka-blog.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/galerie", "/serie", "/o-mne", "/kontakt"];
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
