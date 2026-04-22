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
  { path: "/demo", changeFrequency: "weekly" as const, priority: 0.95 },
  { path: "/services/agent-ia-whatsapp", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/services/qualification-leads", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/services/campagnes-whatsapp", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/services/crm-automation", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/services/prise-de-rdv", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/integrations", changeFrequency: "monthly" as const, priority: 0.85 },
  { path: "/cas-clients", changeFrequency: "monthly" as const, priority: 0.85 },
  { path: "/secteurs", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/agent-commercial-whatsapp", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/services/agent-sur-mesure", changeFrequency: "monthly" as const, priority: 0.85 },
  { path: "/services/automatisation", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/services/marketing-hub", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/securite", changeFrequency: "yearly" as const, priority: 0.6 },
  { path: "/cookies", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/comparatif", changeFrequency: "monthly" as const, priority: 0.85 },
  { path: "/comparatif/vs-wati", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/comparatif/vs-manychat", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/comparatif/vs-whatsapp-business", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/comparatif/vs-respond-io", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/comparatif/vs-sendpulse", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/comparatif/vs-chatfuel", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/comparatif/vs-zenvia", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/blog", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "/contact", changeFrequency: "yearly" as const, priority: 0.7 },
  { path: "/roi", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/urgent", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/social", changeFrequency: "weekly" as const, priority: 0.9 },
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
