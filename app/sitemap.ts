import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";

const BASE_URL = "https://agentic-whatsup.com";
const locales = ["fr", "en", "de", "nl"];

// Stable dates per static page â€” avoids Google interpreting daily regeneration as manipulation
const STATIC_DATES: Record<string, string> = {
  "":                                      "2026-06-03",
  "/demo":                                 "2026-06-03",
  "/services/agent-ia-whatsapp":           "2026-06-03",
  "/services/qualification-leads":         "2026-06-03",
  "/services/campagnes-whatsapp":          "2026-06-03",
  "/services/crm-automation":              "2026-06-03",
  "/services/prise-de-rdv":                "2026-06-03",
  "/integrations":                         "2026-06-03",
  "/cas-clients":                          "2026-06-03",
  "/secteurs":                             "2026-06-03",
  "/agent-commercial-whatsapp":            "2026-06-03",
  "/services/agent-sur-mesure":            "2026-06-03",
  "/services/automatisation":              "2026-06-03",
  "/services/marketing-hub":               "2026-06-03",
  "/securite":                             "2025-08-20",
  "/cookies":                              "2025-08-20",
  "/mentions-legales":                     "2025-08-20",
  "/politique-confidentialite":            "2025-08-20",
  "/charte-editoriale":                    "2026-06-25",
  "/ethique":                              "2026-06-25",
  "/corrections":                          "2026-06-25",
  "/diversite":                            "2026-06-25",
  "/comparatif":                           "2026-06-03",
  "/comparatif/vs-wati":                   "2026-06-03",
  "/comparatif/vs-manychat":               "2026-06-03",
  "/comparatif/vs-whatsapp-business":      "2026-06-03",
  "/comparatif/vs-respond-io":             "2026-06-03",
  "/comparatif/vs-sendpulse":              "2026-06-03",
  "/comparatif/vs-chatfuel":               "2026-06-03",
  "/comparatif/vs-zenvia":                 "2026-06-03",
  "/blog":                                 "2026-06-03",
  "/contact":                              "2026-06-03",
  "/roi":                                  "2026-06-03",
  "/urgent":                               "2026-06-03",
  "/social":                               "2026-06-03",
  "/auteur/laurent-duplat":                "2026-06-03",
};

// Secteur pages â€” spread over a realistic creation window
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
const pillarBlogSlugs = new Set([
  "recouvrement-creance-whatsapp-pme",
  "facture-impayee-pme-relance-whatsapp",
  "lettre-mise-en-demeure-facture-impayee",
  "modele-relance-facture-impayee",
  "mise-en-demeure-par-mail",
  "injonction-de-payer-en-ligne-facture",
  "huissier-injonction-de-payer-commissaire-justice",
  "delai-prescription-facture-cinq-ans",
  "interets-retard-b2b-calcul",
  "indemnite-forfaitaire-recouvrement-b2b",
  "saisie-attribution-bancaire-facture-impayee",
  "societe-recouvrement-comment-ca-marche",
  "agence-recouvrement-avis-choisir",
  "logiciel-relance-impaye-pme",
  "recouvrement-amiable-ou-judiciaire",
  "petites-creances-procedure-simplifiee",
  "assignation-paiement-facture-impayee",
  "relance-facture-impayee-calendrier",
  "relance-client-preserver-relation",
  "relance-whatsapp-rgpd-cadre-pme",
  "automatiser-relances-impayes-crm",
  "contestation-facture-impayee",
  "facture-impayee-client-procedure",
  "recouvrement-b2b-france-europe",
  "tableau-bord-recouvrement-pme",
  "sms-whatsapp-relance-facture-modele",
  "dossier-preuve-facture-impayee",
  "echeancier-client-promesse-paiement",
  "relance-facture-impayee-artisan",
  "agent-ia-whatsapp-recouvrement-creance",
  "agent-vocal-ia-guide-entreprise-2026",
  "assistant-vocal-ia-service-client",
  "voice-agent-ia-definition-usages",
  "agent-telephonique-ia-pme",
  "agent-vocal-entreprise-standard-telephonique",
  "chatbot-vocal-ia-vs-agent-vocal",
  "solution-agent-vocal-ia-choisir",
  "agent-vocal-pme-guide",
  "agent-vocal-ia-whatsapp-message-vocal",
  "agent-vocal-ia-crm-rdv",
  "agent-vocal-ia-appels-entrants",
  "agent-vocal-ia-appels-sortants",
  "agent-vocal-ia-recouvrement-relance",
  "agent-vocal-ia-sante-rdv",
  "agent-vocal-ia-immobilier-qualification",
  "agent-vocal-ia-ecommerce-sav",
  "agent-vocal-ia-assurance-courtier",
  "agent-vocal-ia-centre-appel",
  "agent-vocal-ia-transcription-resume",
  "agent-vocal-ia-rgpd-cnil",
  "agent-vocal-ia-voicebot-vs-ivr",
  "assistant-vocal-ia-commerce-local",
  "agent-telephonique-ia-multilingue",
  "agent-vocal-entreprise-supervision",
  "chatbot-vocal-ia-base-connaissance",
  "solution-agent-vocal-ia-integration",
  "agent-vocal-pme-standard-virtuel",
  "voice-agent-ia-qualite-kpi",
  "agent-vocal-ia-securite-authentification",
  "agent-vocal-ia-vocalis-whatsapp",
  "automatisation-whatsapp-ecommerce",
  "integrer-agent-ia-whatsapp-shopify",
  "whatsapp-shopify-integration-panier-abandonne",
  "whatsapp-shopify-integration-catalogue",
  "whatsapp-shopify-integration-sav",
  "agent-ia-whatsapp-ecommerce-suivi-commande",
  "agent-ia-whatsapp-ecommerce-fidelisation",
  "gouvernance-agent-ia-whatsapp",
  "whatsapp-opt-in-stop-agent-ia",
  "templates-whatsapp-business-agent-ia",
  "qualite-numero-whatsapp-business-ia",
  "supervision-humaine-agent-ia-whatsapp",
  "journalisation-agent-ia-whatsapp",
  "deployer-agent-ia-whatsapp-guide-operationnel",
  "agent-ia-whatsapp-crm-pipeline-commercial",
  "agent-ia-whatsapp-escalade-humaine",
  "agent-ia-whatsapp-securite-donnees",
  "agent-ia-whatsapp-kpi-tableau-bord",
  "agent-ia-whatsapp-multi-sites-franchise",
  "agent-ia-whatsapp-messages-vocaux-photos-documents",
  "agent-ia-whatsapp-guide-business-2026",
  "whatsapp-ia-rgpd-ai-act-suisse",
  "agent-ia-whatsapp-service-client-cx",
  "agent-ia-whatsapp-business",
  "whatsup-ai-whatsapp-agent-2026",
  "comment-fonctionne-agent-ia-whatsapp",
  "whatsapp-business-api-cloud-vs-bsp",
  "whatsapp-cloud-api-vs-agent-ia",
  "rgpd-whatsapp-ia-guide",
  "meilleurs-agents-ia-whatsapp-comparatif-2026",
]);

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
  { path: "/mentions-legales", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/politique-confidentialite", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/charte-editoriale", changeFrequency: "yearly" as const, priority: 0.4 },
  { path: "/ethique", changeFrequency: "yearly" as const, priority: 0.4 },
  { path: "/corrections", changeFrequency: "yearly" as const, priority: 0.4 },
  { path: "/diversite", changeFrequency: "yearly" as const, priority: 0.4 },
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

  // Static pages â€” one entry per page, all locales as alternates
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

  // Blog posts - lastModified follows the editorial update date when available.
  for (const post of blogPosts) {
    const lastModified = post.dateModified ?? post.date ?? "2026-01-01";
    entries.push({
      url: `${BASE_URL}/fr/blog/${post.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: pillarBlogSlugs.has(post.slug) ? 0.85 : 0.7,
      alternates: {
        languages: buildAlternates(`/blog/${post.slug}`),
      },
    });
  }

  // Secteur pages â€” one entry per secteur, all locales as alternates
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
