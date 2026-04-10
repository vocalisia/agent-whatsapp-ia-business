import { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/mdx";

const BASE_URL = "https://agentic-whatsup.com";
const locales = ["fr", "en", "de", "nl"];

const secteurSlugs = [
  "immobilier", "ecommerce", "sante", "restaurant", "assurance",
  "btp", "education", "automobile", "juridique", "beaute-bien-etre",
  "logistique", "saas-tech",
  "coach-infopreneur", "commerce-detail", "courtier", "finance-comptabilite",
  "recrutement-rh", "tourisme-hotel", "artisanat", "agence-marketing",
  "fitness-sport", "veterinaire", "notaire", "franchise",
];

const pages = [
  { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
  { path: "/services/agent-ia-whatsapp", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/services/qualification-leads", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/services/campagnes-whatsapp", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/services/crm-automation", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/services/prise-de-rdv", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/secteurs", changeFrequency: "monthly" as const, priority: 0.8 },
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
    for (const secteur of secteurSlugs) {
      entries.push({
        url: `${BASE_URL}/${locale}/secteurs/${secteur}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.75,
      });
    }
  }

  return entries;
}
