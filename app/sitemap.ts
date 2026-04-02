import { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/mdx";

const BASE_URL = "https://agentic-whatsup.com";
const locales = ["fr", "en", "de"];

const pages = [
  { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
  { path: "/services/agent-ia-whatsapp", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/services/qualification-leads", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/services/campagnes-whatsapp", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/services/crm-automation", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/services/prise-de-rdv", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/tarifs", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "/contact", changeFrequency: "yearly" as const, priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const blogSlugs = getAllSlugs();

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${BASE_URL}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      });
    }
    for (const slug of blogSlugs) {
      entries.push({
        url: `${BASE_URL}/${locale}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
