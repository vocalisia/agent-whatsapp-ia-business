import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";

const BASE_URL = "https://agentic-whatsup.com";
const locales = ["fr", "en", "de", "nl"];

// Stable dates per static page — avoids Google interpreting daily regeneration as manipulation
const STATIC_DATES: Record<string, string> = {
  "":                                      "2025-08-15",
  "/demo":                                 "2025-09-10",
  "/services/agent-ia-whatsapp":           "2025-09-01",
  "/services/qualification-leads":         "2025-09-01",
  "/services/campagnes-whatsapp":          "2025-09-01",
  "/services/crm-automation":              "2025-09-01",
  "/services/prise-de-rdv":               "2025-09-01",
  "/integrations":                         "2025-10-01",
  "/cas-clients":                          "2025-10-15",
  "/secteurs":                             "2025-09-15",
  "/agent-commercial-whatsapp":            "2025-11-01",
  "/services/agent-sur-mesure":            "2025-11-01",
  "/services/automatisation":              "2025-11-01",
  "/services/marketing-hub":               "2025-11-01",
  "/securite":                             "2025-08-20",
  "/cookies":                              "2025-08-20",
  "/comparatif":                           "2025-12-01",
  "/comparatif/vs-wati":                   "2025-12-05",
  "/comparatif/vs-manychat":               "2025-12-05",
  "/comparatif/vs-whatsapp-business":      "2025-12-05",
  "/comparatif/vs-respond-io":             "2025-12-10",
  "/comparatif/vs-sendpulse":              "2025-12-10",
  "/comparatif/vs-chatfuel":               "2025-12-10",
  "/comparatif/vs-zenvia":                 "2025-12-10",
  "/blog":                                 "2026-01-01",
  "/contact":                              "2025-08-20",
  "/roi":                                  "2026-01-15",
  "/urgent":                               "2026-02-01",
  "/social":                               "2026-02-01",
  "/auteur/laurent-duplat":                "2026-05-01",
};

// Secteur pages — spread over a realistic creation window
const SECTEUR_DATES: Record<string, string> = {
  "immobilier":           "2025-09-05",
  "ecommerce":            "2025-09-08",
  "sante":                "2025-09-12",
  "restaurant":           "2025-09-15",
  "assurance":            "2025-09-18",
  "btp":                  "2025-09-22",
  "education":            "2025-09-25",
  "automobile":           "2025-09-28",
  "juridique":            "2025-10-02",
  "beaute-bien-etre":     "2025-10-05",
  "logistique":           "2025-10-08",
  "saas-tech":            "2025-10-12",
  "coach-infopreneur":    "2025-10-15",
  "commerce-detail":      "2025-10-18",
  "courtier":             "2025-10-22",
  "finance-comptabilite": "2025-10-25",
  "recrutement-rh":       "2025-10-28",
  "tourisme-hotel":       "2025-11-01",
  "artisanat":            "2025-11-05",
  "agence-marketing":     "2025-11-08",
  "fitness-sport":        "2025-11-12",
  "veterinaire":          "2025-11-15",
  "notaire":              "2025-11-18",
  "franchise":            "2025-11-22",
};

const secteurSlugs = Object.keys(SECTEUR_DATES);

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
  { path: "/auteur/laurent-duplat", changeFrequency: "monthly" as const, priority: 0.7 },
];

/** Build the hreflang alternates map for a given path segment (e.g. "/fr/blog/foo") */
function buildAlternates(path: string): Record<string, string> {
  return Object.fromEntries(
    locales.map((locale) => [locale, `${BASE_URL}/${locale}${path}`])
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Use FR locale to read frontmatter dates (FR is the canonical/root locale)
  const blogPosts = getAllPosts("fr");

  const entries: MetadataRoute.Sitemap = [];

  // Static pages — one entry per page, all locales as alternates
  for (const page of pages) {
    const lastModified = STATIC_DATES[page.path] ?? "2025-06-01";
    entries.push({
      url: `${BASE_URL}/fr${page.path}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: buildAlternates(page.path),
      },
    });
  }

  // Blog posts — lastModified from frontmatter date
  for (const post of blogPosts) {
    const lastModified = post.date ?? "2026-01-01";
    entries.push({
      url: `${BASE_URL}/fr/blog/${post.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: buildAlternates(`/blog/${post.slug}`),
      },
    });
  }

  // Secteur pages — one entry per secteur, all locales as alternates
  for (const secteur of secteurSlugs) {
    const lastModified = SECTEUR_DATES[secteur] ?? "2025-10-01";
    entries.push({
      url: `${BASE_URL}/fr/secteurs/${secteur}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: {
        languages: buildAlternates(`/secteurs/${secteur}`),
      },
    });
  }

  return entries;
}
