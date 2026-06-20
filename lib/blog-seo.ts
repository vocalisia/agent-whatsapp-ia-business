import { isBlockedPricingSlug, type PostMeta } from "./mdx";

export type BlogLocale = "fr" | "en" | "de" | "nl";

export type ArticleSource = {
  key: string;
  title: string;
  url: string;
  label: string;
  kind: "official" | "institutional" | "consulting";
};

type SourceDefinition = {
  key: string;
  title: Record<BlogLocale, string>;
  url: string;
  label: Record<BlogLocale, string>;
  kind: ArticleSource["kind"];
  tags: RegExp;
};

const SOURCE_LIBRARY: SourceDefinition[] = [
  {
    key: "meta-platform",
    title: {
      fr: "Meta - WhatsApp Business Platform",
      en: "Meta - WhatsApp Business Platform",
      de: "Meta - WhatsApp Business Platform",
      nl: "Meta - WhatsApp Business Platform",
    },
    url: "https://whatsappbusiness.com/products/business-platform/",
    label: {
      fr: "Référence officielle sur les usages API WhatsApp Business : marketing, commerce, support et routage.",
      en: "Official reference for WhatsApp Business API use cases: marketing, commerce, support and routing.",
      de: "Offizielle Referenz für WhatsApp Business API Use Cases: Marketing, Commerce, Support und Routing.",
      nl: "Officiele referentie voor WhatsApp Business API use-cases: marketing, commerce, support en routing.",
    },
    kind: "official",
    tags: /whatsapp|cloud api|business api|bsp|meta|template|broadcast|message|commerce|support|marketing/i,
  },
  {
    key: "meta-developer-hub",
    title: {
      fr: "Meta - Developer Hub WhatsApp Business",
      en: "Meta - WhatsApp Business Developer Hub",
      de: "Meta - WhatsApp Business Developer Hub",
      nl: "Meta - WhatsApp Business Developer Hub",
    },
    url: "https://whatsappbusiness.com/developers/developer-hub/",
    label: {
      fr: "Documentation officielle pour tester, construire et intégrer la plateforme WhatsApp Business.",
      en: "Official documentation to test, build and integrate the WhatsApp Business Platform.",
      de: "Offizielle Dokumentation zum Testen, Bauen und Integrieren der WhatsApp Business Platform.",
      nl: "Officiele documentatie om het WhatsApp Business Platform te testen, bouwen en integreren.",
    },
    kind: "official",
    tags: /cloud api|business api|bsp|webhook|developer|integration|intégration|integratie|api/i,
  },
  {
    key: "meta-policy-enforcement",
    title: {
      fr: "Meta - Policy enforcement WhatsApp Business",
      en: "Meta - WhatsApp Business policy enforcement",
      de: "Meta - WhatsApp Business Policy Enforcement",
      nl: "Meta - WhatsApp Business policy enforcement",
    },
    url: "https://developers.facebook.com/docs/whatsapp/overview/policy-enforcement",
    label: {
      fr: "Référence officielle sur restrictions, retours négatifs, webhooks de violation et qualité de messagerie.",
      en: "Official reference on restrictions, negative feedback, violation webhooks and messaging quality.",
      de: "Offizielle Referenz zu Einschränkungen, negativem Feedback, Verstoß-Webhooks und Messaging-Qualität.",
      nl: "Officiele referentie over beperkingen, negatieve feedback, violation-webhooks en berichtkwaliteit.",
    },
    kind: "official",
    tags: /policy|spam|qualité|quality|restriction|blocage|blocked|désabonnement|desabonnement|stop|template|retours négatifs|negative feedback|webhook/i,
  },
  {
    key: "meta-whatsapp-catalogs",
    title: {
      fr: "Meta - Catalogues WhatsApp Business",
      en: "Meta - WhatsApp Business catalogs",
      de: "Meta - WhatsApp Business Kataloge",
      nl: "Meta - WhatsApp Business-catalogi",
    },
    url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/catalogs-overview/",
    label: {
      fr: "Documentation officielle sur les catalogues reliés à WhatsApp Business pour les parcours commerce.",
      en: "Official documentation on catalogs connected to WhatsApp Business for commerce journeys.",
      de: "Offizielle Dokumentation zu Katalogen in WhatsApp Business Commerce Journeys.",
      nl: "Officiele documentatie over catalogi gekoppeld aan WhatsApp Business voor commerce journeys.",
    },
    kind: "official",
    tags: /catalogue|catalog|commerce|e-commerce|ecommerce|shopify|produit|product|panier|cart|retour|order|commande/i,
  },
  {
    key: "shopify-webhooks",
    title: {
      fr: "Shopify - Webhooks",
      en: "Shopify - Webhooks",
      de: "Shopify - Webhooks",
      nl: "Shopify - Webhooks",
    },
    url: "https://shopify.dev/docs/apps/build/webhooks",
    label: {
      fr: "Documentation officielle Shopify pour réagir aux événements de boutique via webhooks.",
      en: "Official Shopify documentation for reacting to store events through webhooks.",
      de: "Offizielle Shopify-Dokumentation zu Store-Events über Webhooks.",
      nl: "Officiele Shopify-documentatie voor store events via webhooks.",
    },
    kind: "official",
    tags: /shopify|webhook|checkout|cart|panier|order|commande|retour|fulfillment|e-commerce|ecommerce/i,
  },
  {
    key: "shopify-flow",
    title: {
      fr: "Shopify - Flow",
      en: "Shopify - Flow",
      de: "Shopify - Flow",
      nl: "Shopify - Flow",
    },
    url: "https://help.shopify.com/en/manual/shopify-flow",
    label: {
      fr: "Documentation officielle Shopify Flow sur les déclencheurs, conditions et actions d'automatisation.",
      en: "Official Shopify Flow documentation on automation triggers, conditions and actions.",
      de: "Offizielle Shopify Flow-Dokumentation zu Triggern, Bedingungen und Aktionen.",
      nl: "Officiele Shopify Flow-documentatie over triggers, voorwaarden en acties.",
    },
    kind: "official",
    tags: /shopify flow|flow|workflow|automation|automatisation|shopify|e-commerce|ecommerce|trigger|condition|action/i,
  },
  {
    key: "cnil-ai-rgpd",
    title: {
      fr: "CNIL - Systèmes d'IA et RGPD",
      en: "CNIL - AI systems and GDPR",
      de: "CNIL - KI-Systeme und DSGVO",
      nl: "CNIL - AI-systemen en AVG",
    },
    url: "https://www.cnil.fr/fr/developpement-des-systemes-dia-les-recommandations-de-la-cnil-pour-respecter-le-rgpd",
    label: {
      fr: "Recommandations CNIL pour concilier IA, innovation et droits des personnes.",
      en: "CNIL guidance for aligning AI development with personal-data rights.",
      de: "CNIL-Leitlinien zur Vereinbarkeit von KI-Entwicklung und Datenschutzrechten.",
      nl: "CNIL-richtlijnen om AI-ontwikkeling af te stemmen op rechten rond persoonsgegevens.",
    },
    kind: "institutional",
    tags: /cnil|rgpd|gdpr|dsgvo|avg|privacy|données|donnees|data|ia|ai|conformité|conformite/i,
  },
  {
    key: "cnil-chatbots",
    title: {
      fr: "CNIL - Chatbots et droits des personnes",
      en: "CNIL - Chatbots and individuals' rights",
      de: "CNIL - Chatbots und Rechte betroffener Personen",
      nl: "CNIL - Chatbots en rechten van personen",
    },
    url: "https://www.cnil.fr/fr/chatbots-les-conseils-de-la-cnil-pour-respecter-les-droits-des-personnes",
    label: {
      fr: "Conseils CNIL sur information, cookies, données sensibles et minimisation des risques.",
      en: "CNIL guidance on information, cookies, sensitive data and risk minimisation.",
      de: "CNIL-Hinweise zu Information, Cookies, sensiblen Daten und Risikominimierung.",
      nl: "CNIL-richtlijnen over informatie, cookies, gevoelige gegevens en risicobeperking.",
    },
    kind: "institutional",
    tags: /chatbot|chatbots|cookie|consent|consentement|sensible|privacy|rgpd|gdpr|dsgvo|avg/i,
  },
  {
    key: "edpb-rights",
    title: {
      fr: "EDPB - Droits des personnes",
      en: "EDPB - Respect individuals' rights",
      de: "EDPB - Rechte betroffener Personen",
      nl: "EDPB - Rechten van betrokkenen",
    },
    url: "https://www.edpb.europa.eu/sme-data-protection-guide/respect-individuals-rights_en",
    label: {
      fr: "Référence européenne sur opposition, effacement et droits RGPD.",
      en: "European reference on objection, erasure and GDPR rights.",
      de: "EU-Referenz zu Widerspruch, Löschung und DSGVO-Rechten.",
      nl: "EU-referentie voor bezwaar, wissen en AVG-rechten.",
    },
    kind: "institutional",
    tags: /edpb|rgpd|gdpr|privacy|effacement|erasure|opposition|droits|rights|consent/i,
  },
  {
    key: "pfpdt-ai-lpd",
    title: {
      fr: "PFPDT - LPD suisse et intelligence artificielle",
      en: "FDPIC - Swiss data protection law and AI",
      de: "EDOEB - Schweizer Datenschutzrecht und KI",
      nl: "FDPIC - Zwitserse gegevensbescherming en AI",
    },
    url: "https://www.edoeb.admin.ch/fr/09112023-la-loi-actuelle-sur-la-protection-des-donnees-est-directement-applicable-a-lia",
    label: {
      fr: "Source fédérale suisse confirmant que la LPD s'applique aux traitements basés sur l'IA.",
      en: "Swiss federal source confirming that data protection law applies to AI-based processing.",
      de: "Schweizer Bundesquelle zur Anwendbarkeit des Datenschutzrechts auf KI-Verarbeitungen.",
      nl: "Zwitserse federale bron over de toepassing van gegevensbescherming op AI-verwerking.",
    },
    kind: "institutional",
    tags: /suisse|swiss|switzerland|genève|geneve|lpd|pfpdt|edoeb|federal|fédéral|ia|ai|données|donnees/i,
  },
  {
    key: "eu-ai-transparency",
    title: {
      fr: "Commission européenne - Transparence IA",
      en: "European Commission - AI transparency",
      de: "Europäische Kommission - KI-Transparenz",
      nl: "Europese Commissie - AI-transparantie",
    },
    url: "https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content",
    label: {
      fr: "Cadre européen sur transparence, marquage et obligations Article 50 de l'AI Act.",
      en: "European framework for transparency, labelling and Article 50 AI Act obligations.",
      de: "EU-Rahmen für Transparenz, Kennzeichnung und Pflichten aus Artikel 50 des AI Acts.",
      nl: "Europees kader voor transparantie, markering en Article 50 AI Act-verplichtingen.",
    },
    kind: "institutional",
    tags: /ai act|ia|ai|agent|chatbot|llm|transparence|transparency|governance|risk|risque|disclosure/i,
  },
  {
    key: "nist-ai-rmf",
    title: {
      fr: "NIST - AI Risk Management Framework",
      en: "NIST - AI Risk Management Framework",
      de: "NIST - AI Risk Management Framework",
      nl: "NIST - AI Risk Management Framework",
    },
    url: "https://www.nist.gov/itl/ai-risk-management-framework",
    label: {
      fr: "Cadre fédéral américain pour gouverner les risques IA et la confiance.",
      en: "US federal framework for managing AI risk and trustworthiness.",
      de: "US-Bundesrahmen für KI-Risikomanagement und Vertrauenswürdigkeit.",
      nl: "Amerikaans federaal kader voor AI-risicobeheer en betrouwbaarheid.",
    },
    kind: "institutional",
    tags: /ia|ai|agent|chatbot|llm|vision|voice|risk|risque|security|sécurité|governance|gouvernance/i,
  },
  {
    key: "ftc-ai",
    title: {
      fr: "FTC - Artificial Intelligence",
      en: "FTC - Artificial Intelligence",
      de: "FTC - Artificial Intelligence",
      nl: "FTC - Artificial Intelligence",
    },
    url: "https://www.ftc.gov/industry/technology/artificial-intelligence",
    label: {
      fr: "Source fédérale américaine sur pratiques IA, allégations trompeuses, sécurité et surveillance des chatbots.",
      en: "US federal source on AI practices, deceptive claims, safety and chatbot oversight.",
      de: "US-Bundesquelle zu KI-Praktiken, irreführenden Angaben, Sicherheit und Chatbot-Aufsicht.",
      nl: "Amerikaanse federale bron over AI-praktijken, misleidende claims, veiligheid en chatbottoezicht.",
    },
    kind: "institutional",
    tags: /ftc|federal|fédéral|deceptive|trompeur|claims|allégation|allegation|chatbot|safety|sécurité|marketing|business opportunity/i,
  },
  {
    key: "google-ai-search",
    title: {
      fr: "Google Search Central - Recherche générative",
      en: "Google Search Central - Generative AI search",
      de: "Google Search Central - Generative KI-Suche",
      nl: "Google Search Central - Generatieve AI-zoekfuncties",
    },
    url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide",
    label: {
      fr: "Guide officiel Google pour structurer un contenu crawlable, utile et cité dans les expériences génératives.",
      en: "Official Google guidance for crawlable, useful content in generative search experiences.",
      de: "Offizielle Google-Hinweise zu crawlbaren und hilfreichen Inhalten in generativen Sucherlebnissen.",
      nl: "Officiele Google-richtlijnen voor crawlbare, nuttige content in generatieve zoekervaringen.",
    },
    kind: "institutional",
    tags: /seo|llm|search|google|cocon|article|content|contenu|schema|citation|moteur|recherche/i,
  },
  {
    key: "google-helpful-content",
    title: {
      fr: "Google Search Central - Contenu utile et fiable",
      en: "Google Search Central - Helpful, reliable content",
      de: "Google Search Central - Hilfreiche, zuverlässige Inhalte",
      nl: "Google Search Central - Nuttige, betrouwbare content",
    },
    url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
    label: {
      fr: "Référence Google sur sources claires, expertise, qualité et contenu conçu pour les personnes.",
      en: "Google reference on clear sourcing, expertise, quality and people-first content.",
      de: "Google-Referenz zu klaren Quellen, Expertise, Qualität und nutzerorientierten Inhalten.",
      nl: "Google-referentie over duidelijke bronnen, expertise, kwaliteit en mensgerichte content.",
    },
    kind: "institutional",
    tags: /seo|eeat|e-e-a-t|expertise|source|sources|article|content|contenu|fiable|trust|utile/i,
  },
  {
    key: "bcg-ai-agents-cx",
    title: {
      fr: "BCG - Agents IA et expérience client",
      en: "BCG - AI agents and customer experience",
      de: "BCG - KI-Agenten und Customer Experience",
      nl: "BCG - AI-agenten en customer experience",
    },
    url: "https://www.bcg.com/publications/2025/how-ai-agents-opening-golden-era-customer-experience",
    label: {
      fr: "Analyse cabinet de conseil sur agents IA, parcours client et efficacité opérationnelle.",
      en: "Consulting analysis on AI agents, customer journeys and operational efficiency.",
      de: "Beratungsanalyse zu KI-Agenten, Customer Journeys und operativer Effizienz.",
      nl: "Consultancy-analyse over AI-agenten, klantreizen en operationele efficiëntie.",
    },
    kind: "consulting",
    tags: /agent|agents|customer|client|experience|expérience|cx|service|support|parcours|journey/i,
  },
  {
    key: "bcg-ai-agents-business",
    title: {
      fr: "BCG - Agents IA et impact business",
      en: "BCG - AI agents and business impact",
      de: "BCG - KI-Agenten und Business Impact",
      nl: "BCG - AI-agenten en business impact",
    },
    url: "https://www.bcg.com/capabilities/artificial-intelligence/ai-agents",
    label: {
      fr: "Vue cabinet de conseil sur les composants et usages business des agents IA.",
      en: "Consulting view on AI-agent components and business use cases.",
      de: "Beratungsperspektive auf Komponenten und Business-Anwendungsfälle von KI-Agenten.",
      nl: "Consultancyvisie op componenten en zakelijke use-cases van AI-agenten.",
    },
    kind: "consulting",
    tags: /agent|agents|business|workflow|automation|automatisation|sales|vente|marketing|productivité|productivity/i,
  },
  {
    key: "deloitte-contact-centres",
    title: {
      fr: "Deloitte - IA générative en centres de contact",
      en: "Deloitte - Generative AI in contact centres",
      de: "Deloitte - Generative KI in Contact Centern",
      nl: "Deloitte - Generatieve AI in contactcenters",
    },
    url: "https://www.deloitte.com/ca/en/Industries/tmt/perspectives/a-new-story-for-contact-centres.html",
    label: {
      fr: "Analyse cabinet de conseil sur adoption GenAI, efficacité et expérience client en centres de contact.",
      en: "Consulting analysis on GenAI adoption, efficiency and CX in contact centres.",
      de: "Beratungsanalyse zu GenAI-Adoption, Effizienz und CX in Contact Centern.",
      nl: "Consultancy-analyse over GenAI-adoptie, efficiëntie en klantervaring in contactcenters.",
    },
    kind: "consulting",
    tags: /contact|centre|center|service|support|customer|client|genai|ia générative|generative/i,
  },
  {
    key: "mckinsey-customer-care",
    title: {
      fr: "McKinsey - Gen AI in customer care",
      en: "McKinsey - Gen AI in customer care",
      de: "McKinsey - Gen AI in customer care",
      nl: "McKinsey - Gen AI in customer care",
    },
    url: "https://www.mckinsey.com/capabilities/operations/our-insights/gen-ai-in-customer-care-early-successes-and-challenges",
    label: {
      fr: "Retour cabinet de conseil sur l'IA générative en relation client.",
      en: "Consulting perspective on generative AI in customer care.",
      de: "Beraterperspektive auf GenAI im Kundenservice.",
      nl: "Consultancyperspectief op generatieve AI in klantenservice.",
    },
    kind: "consulting",
    tags: /support|service client|customer|care|sav|crm|conversion|lead|sales|vente|automation|automatisation/i,
  },
];

const PRIORITY_LINKS: Record<BlogLocale, Array<{ slug: string; label: string }>> = {
  fr: [
    { slug: "automatisation-whatsapp-ecommerce", label: "Automatisation WhatsApp e-commerce" },
    { slug: "integrer-agent-ia-whatsapp-shopify", label: "Agent IA WhatsApp Shopify" },
    { slug: "whatsapp-shopify-integration-panier-abandonne", label: "Panier abandonné Shopify WhatsApp" },
    { slug: "whatsapp-shopify-integration-catalogue", label: "Catalogue Shopify WhatsApp" },
    { slug: "whatsapp-shopify-integration-sav", label: "SAV Shopify WhatsApp" },
    { slug: "agent-ia-whatsapp-ecommerce-suivi-commande", label: "Suivi commande WhatsApp e-commerce" },
    { slug: "agent-ia-whatsapp-ecommerce-fidelisation", label: "Fidélisation WhatsApp e-commerce" },
    { slug: "gouvernance-agent-ia-whatsapp", label: "Gouvernance agent IA WhatsApp" },
    { slug: "whatsapp-opt-in-stop-agent-ia", label: "Opt-in WhatsApp IA" },
    { slug: "templates-whatsapp-business-agent-ia", label: "Templates WhatsApp Business" },
    { slug: "qualite-numero-whatsapp-business-ia", label: "Qualité numéro WhatsApp" },
    { slug: "supervision-humaine-agent-ia-whatsapp", label: "Supervision humaine WhatsApp IA" },
    { slug: "journalisation-agent-ia-whatsapp", label: "Journalisation agent IA WhatsApp" },
    { slug: "deployer-agent-ia-whatsapp-guide-operationnel", label: "Déployer un agent IA WhatsApp" },
    { slug: "agent-ia-whatsapp-crm-pipeline-commercial", label: "Agent IA WhatsApp CRM" },
    { slug: "agent-ia-whatsapp-escalade-humaine", label: "Escalade humaine WhatsApp IA" },
    { slug: "agent-ia-whatsapp-securite-donnees", label: "Sécurité données WhatsApp IA" },
    { slug: "agent-ia-whatsapp-kpi-tableau-bord", label: "KPI agent IA WhatsApp" },
    { slug: "agent-ia-whatsapp-multi-sites-franchise", label: "WhatsApp IA multi-sites" },
    { slug: "agent-ia-whatsapp-messages-vocaux-photos-documents", label: "Vocaux, photos et documents" },
    { slug: "agent-ia-whatsapp-guide-business-2026", label: "Guide business agent IA WhatsApp" },
    { slug: "whatsapp-ia-rgpd-ai-act-suisse", label: "WhatsApp IA, RGPD et AI Act" },
    { slug: "agent-ia-whatsapp-service-client-cx", label: "Agent IA WhatsApp service client" },
    { slug: "agent-ia-whatsapp-business", label: "Agent IA WhatsApp Business" },
    { slug: "comment-fonctionne-agent-ia-whatsapp", label: "Fonctionnement d'un agent IA WhatsApp" },
    { slug: "whatsapp-business-api-cloud-vs-bsp", label: "WhatsApp Business API" },
    { slug: "whatsapp-cloud-api-vs-agent-ia", label: "WhatsApp Cloud API vs agent IA" },
    { slug: "rgpd-whatsapp-ia-guide", label: "RGPD et WhatsApp IA" },
    { slug: "meilleurs-agents-ia-whatsapp-comparatif-2026", label: "Comparatif agents IA WhatsApp" },
  ],
  en: [
    { slug: "whatsapp-ai-agent", label: "WhatsApp AI agent guide" },
    { slug: "how-whatsapp-ai-agent-works", label: "How a WhatsApp AI agent works" },
    { slug: "whatsapp-business-api-guide", label: "WhatsApp Business API guide" },
    { slug: "whatsapp-cloud-api-vs-ai-agent", label: "WhatsApp Cloud API vs AI agent" },
    { slug: "gdpr-whatsapp-ai-guide", label: "GDPR and WhatsApp AI" },
    { slug: "best-whatsapp-ai-agents-comparison-2026", label: "Best WhatsApp AI agents" },
  ],
  de: [
    { slug: "whatsapp-ki-agent-business", label: "WhatsApp KI-Agent Business" },
    { slug: "wie-whatsapp-ki-agent-funktioniert", label: "Wie ein WhatsApp KI-Agent funktioniert" },
    { slug: "whatsapp-cloud-api-vs-ki-agent", label: "WhatsApp Cloud API vs KI-Agent" },
    { slug: "dsgvo-whatsapp-ki-leitfaden", label: "DSGVO und WhatsApp KI" },
    { slug: "beste-whatsapp-ki-agenten-vergleich-2026", label: "WhatsApp KI-Agenten Vergleich" },
  ],
  nl: [
    { slug: "whatsapp-ai-agent-bedrijf", label: "WhatsApp AI-agent voor bedrijven" },
    { slug: "hoe-werkt-whatsapp-ai-agent", label: "Hoe een WhatsApp AI-agent werkt" },
    { slug: "whatsapp-cloud-api-vs-ai-agent", label: "WhatsApp Cloud API vs AI-agent" },
    { slug: "avg-whatsapp-ai-gids", label: "AVG en WhatsApp AI" },
    { slug: "beste-whatsapp-ai-agenten-vergelijking-2026", label: "WhatsApp AI-agenten vergelijking" },
  ],
};

export const articleSeoLabels: Record<
  BlogLocale,
  {
    trustTitle: string;
    trustBullets: string[];
    sourcesTitle: string;
    nextTitle: string;
    sourceKind: Record<ArticleSource["kind"], string>;
  }
> = {
  fr: {
    trustTitle: "Pourquoi ce guide est fiable",
    trustBullets: [
      "Article rédigé par Laurent Duplat et mis à jour à partir des contraintes WhatsApp, RGPD et IA applicables.",
      "Les recommandations privilégient l'API officielle, l'opt-in, la traçabilité et l'escalade humaine.",
      "Le périmètre se cadre lors d'un audit gratuit 30 min, avec une recommandation adaptée au contexte.",
    ],
    sourcesTitle: "Sources utiles",
    nextTitle: "À lire ensuite",
    sourceKind: { official: "Officiel", institutional: "Institutionnel", consulting: "Cabinet de conseil" },
  },
  en: {
    trustTitle: "Why this guide is reliable",
    trustBullets: [
      "Written by Laurent Duplat and updated against WhatsApp, GDPR and AI governance constraints.",
      "Recommendations prioritise the official API, opt-in, traceability and human handover.",
      "Scope is framed during a personalised audit, with a recommendation adapted to the operating context.",
    ],
    sourcesTitle: "Useful sources",
    nextTitle: "Read next",
    sourceKind: { official: "Official", institutional: "Institutional", consulting: "Consulting firm" },
  },
  de: {
    trustTitle: "Warum dieser Leitfaden verlässlich ist",
    trustBullets: [
      "Verfasst von Laurent Duplat und anhand von WhatsApp-, DSGVO- und KI-Governance-Anforderungen aktualisiert.",
      "Empfehlungen priorisieren offizielle API, Opt-in, Nachvollziehbarkeit und menschliche Übergabe.",
      "Der Umfang wird in einem persönlichen Audit mit einer kontextbezogenen Empfehlung geklärt.",
    ],
    sourcesTitle: "Nützliche Quellen",
    nextTitle: "Weiterlesen",
    sourceKind: { official: "Offiziell", institutional: "Institutionell", consulting: "Beratung" },
  },
  nl: {
    trustTitle: "Waarom deze gids betrouwbaar is",
    trustBullets: [
      "Geschreven door Laurent Duplat en bijgewerkt op basis van WhatsApp-, AVG- en AI-governance-eisen.",
      "Aanbevelingen geven prioriteit aan de officiële API, opt-in, traceerbaarheid en menselijke overdracht.",
      "De scope wordt tijdens een persoonlijke audit bepaald met een aanbeveling op maat.",
    ],
    sourcesTitle: "Nuttige bronnen",
    nextTitle: "Verder lezen",
    sourceKind: { official: "Officieel", institutional: "Institutioneel", consulting: "Adviesbureau" },
  },
};

export function toBlogLocale(locale: string): BlogLocale {
  return locale === "en" || locale === "de" || locale === "nl" ? locale : "fr";
}

export function getArticleSources(meta: PostMeta, content: string, locale: BlogLocale): ArticleSource[] {
  const haystack = `${meta.slug} ${meta.title} ${meta.description} ${content}`.slice(0, 12000);
  const selected = SOURCE_LIBRARY.filter((source) => source.tags.test(haystack));
  const withBase = selected.some((source) => source.key === "meta-platform")
    ? selected
    : [SOURCE_LIBRARY[0], ...selected];

  return withBase.slice(0, 6).map((source) => ({
    key: source.key,
    title: source.title[locale],
    url: source.url,
    label: source.label[locale],
    kind: source.kind,
  }));
}

export function getArticleClusterLinks(meta: PostMeta, posts: PostMeta[], locale: BlogLocale) {
  const available = new Set(posts.map((post) => post.slug));
  const links = PRIORITY_LINKS[locale]
    .filter((link) => link.slug !== meta.slug && !isBlockedPricingSlug(link.slug) && available.has(link.slug))
    .slice(0, 8);

  return links.map((link) => ({
    ...link,
    href: `/${locale}/blog/${link.slug}`,
  }));
}

export function sanitizeSeoText(value: string): string {
  const euro = String.fromCharCode(0x20ac);
  const pound = String.fromCharCode(0x00a3);
  const currencyCodePattern = ["EUR", "USD", "GBP", "CHF"].join("|");
  const currencyCodeAmountPattern = new RegExp(
    `\\b(?:${currencyCodePattern})\\s*[\\d][\\d\\s.,]*`,
    "gi"
  );
  const leadingCurrencyPattern = new RegExp(
    `[$${euro}${pound}]\\s*[\\d][\\d\\s.,]*`,
    "gi"
  );
  const trailingCurrencyPattern = new RegExp(
    `[\\d][\\d\\s.,]*\\s*(?:${euro}|${currencyCodePattern}|dollars?|euros?|francs suisses?|francs|${pound})`,
    "gi"
  );

  return value
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(currencyCodeAmountPattern, "estimation personnalisée")
    .replace(leadingCurrencyPattern, "estimation personnalisée")
    .replace(trailingCurrencyPattern, "estimation personnalisée")
    .replace(/\s+/g, " ")
    .trim();
}
