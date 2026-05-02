import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

const meta: Record<string, { title: string; description: string }> = {
  fr: { title: "Comparatif — AgenticWhatsup vs concurrents | Meilleur agent IA WhatsApp", description: "Comparez AgenticWhatsup avec Wati, ManyChat, WhatsApp Business natif et d'autres solutions. Découvrez pourquoi nous sommes la meilleure option pour automatiser vos messages clients." },
  en: { title: "Comparison — AgenticWhatsup vs competitors | Best WhatsApp AI Agent", description: "Compare AgenticWhatsup with Wati, ManyChat, native WhatsApp Business and other solutions. Discover why we are the best option to automate your customer messages." },
  de: { title: "Vergleich — AgenticWhatsup vs Konkurrenten | Bester WhatsApp KI-Agent", description: "Vergleichen Sie AgenticWhatsup mit Wati, ManyChat, nativem WhatsApp Business und anderen Lösungen. Entdecken Sie, warum wir die beste Option sind." },
  nl: { title: "Vergelijking — AgenticWhatsup vs concurrenten | Beste WhatsApp AI-agent", description: "Vergelijk AgenticWhatsup met Wati, ManyChat, native WhatsApp Business en andere oplossingen. Ontdek waarom wij de beste optie zijn." },
};

const headings: Record<string, { h1: string; subtitle: string; vs: string; tableTitle: string }> = {
  fr: { h1: "AgenticWhatsup vs les alternatives", subtitle: "Toutes les comparaisons pour vous aider à choisir la meilleure solution WhatsApp IA.", vs: "Comparer", tableTitle: "Tableau comparatif complet" },
  en: { h1: "AgenticWhatsup vs alternatives", subtitle: "All comparisons to help you choose the best WhatsApp AI solution.", vs: "Compare", tableTitle: "Full comparison table" },
  de: { h1: "AgenticWhatsup vs Alternativen", subtitle: "Alle Vergleiche, damit Sie die beste WhatsApp KI-Lösung wählen können.", vs: "Vergleichen", tableTitle: "Vollständige Vergleichstabelle" },
  nl: { h1: "AgenticWhatsup vs alternatieven", subtitle: "Alle vergelijkingen om u te helpen de beste WhatsApp AI-oplossing te kiezen.", vs: "Vergelijken", tableTitle: "Volledige vergelijkingstabel" },
};

const competitors = [
  { slug: "vs-wati", name: "Wati", icon: "📦", tagline: { fr: "Wati : puissant mais rigide, sans vraie IA", en: "Wati: powerful but rigid, no real AI", de: "Wati: leistungsstark aber starr, keine echte KI", nl: "Wati: krachtig maar rigide, geen echte AI" } },
  { slug: "vs-manychat", name: "ManyChat", icon: "💬", tagline: { fr: "ManyChat : idéal pour Instagram, limité sur WhatsApp", en: "ManyChat: great for Instagram, limited on WhatsApp", de: "ManyChat: gut für Instagram, begrenzt auf WhatsApp", nl: "ManyChat: goed voor Instagram, beperkt op WhatsApp" } },
  { slug: "vs-respond-io", name: "Respond.io", icon: "🔀", tagline: { fr: "Respond.io : omnichannel enterprise solide, générique sur WhatsApp", en: "Respond.io: solid enterprise omnichannel, generic on WhatsApp", de: "Respond.io: solides Enterprise-Omnichannel, generisch auf WhatsApp", nl: "Respond.io: solide enterprise omnichannel, generiek op WhatsApp" } },
  { slug: "vs-sendpulse", name: "SendPulse", icon: "📧", tagline: { fr: "SendPulse : tout-en-un email/SMS/push, WhatsApp basique", en: "SendPulse: all-in-one email/SMS/push, basic WhatsApp", de: "SendPulse: Alles-in-einem E-Mail/SMS/Push, einfaches WhatsApp", nl: "SendPulse: alles-in-één e-mail/SMS/push, basis WhatsApp" } },
  { slug: "vs-chatfuel", name: "Chatfuel", icon: "🤖", tagline: { fr: "Chatfuel : leader Facebook/Instagram, push WhatsApp récent", en: "Chatfuel: Facebook/Instagram leader, recent WhatsApp push", de: "Chatfuel: Facebook/Instagram-Marktführer, neues WhatsApp-Angebot", nl: "Chatfuel: Facebook/Instagram-leider, recent WhatsApp-aanbod" } },
  { slug: "vs-zenvia", name: "Zenvia", icon: "🌎", tagline: { fr: "Zenvia : leader LatAm CPaaS, scaling international", en: "Zenvia: LatAm CPaaS leader, scaling internationally", de: "Zenvia: LatAm CPaaS-Marktführer, internationale Expansion", nl: "Zenvia: LatAm CPaaS-leider, internationale expansie" } },
  { slug: "vs-whatsapp-business", name: "WhatsApp Business", icon: "📱", tagline: { fr: "WhatsApp Business natif : gratuit mais zéro IA", en: "Native WhatsApp Business: free but zero AI", de: "Natives WhatsApp Business: kostenlos aber keine KI", nl: "Native WhatsApp Business: gratis maar geen AI" } },
];

interface ComparisonRow {
  readonly criteria: string;
  readonly agenticWhatsup: string;
  readonly wati: string;
  readonly manychat: string;
  readonly respondio: string;
  readonly whatsappBusiness: string;
}

const comparisonData: readonly ComparisonRow[] = [
  { criteria: "IA conversationnelle (LLM)", agenticWhatsup: "✅ Oui", wati: "✅ IA limitée", manychat: "⚠️ IA limitée", respondio: "✅ IA (add-on)", whatsappBusiness: "❌ Non" },
  { criteria: "Vision photo (analyse images)", agenticWhatsup: "✅ Oui", wati: "❌ Non", manychat: "❌ Non", respondio: "❌ Non", whatsappBusiness: "❌ Non" },
  { criteria: "Transcription audio WhatsApp", agenticWhatsup: "✅ Oui", wati: "❌ Non", manychat: "❌ Non", respondio: "❌ Non", whatsappBusiness: "❌ Non" },
  { criteria: "Hébergement Union Européenne", agenticWhatsup: "✅ Oui", wati: "⚠️ Partiel", manychat: "❌ Non", respondio: "⚠️ Partiel", whatsappBusiness: "✅ Meta EU" },
  { criteria: "RGPD natif", agenticWhatsup: "✅ Oui", wati: "⚠️ Partiel", manychat: "❌ Non", respondio: "⚠️ Partiel", whatsappBusiness: "⚠️ Partiel" },
  { criteria: "Intégration CRM native (HubSpot, Salesforce)", agenticWhatsup: "✅ Oui", wati: "✅ Oui", manychat: "⚠️ Partiel", respondio: "✅ Oui", whatsappBusiness: "❌ Non" },
  { criteria: "Prise de RDV automatique", agenticWhatsup: "✅ Oui", wati: "✅ Oui", manychat: "⚠️ Partiel", respondio: "✅ Oui", whatsappBusiness: "❌ Non" },
  { criteria: "Déploiement (délai)", agenticWhatsup: "✅ 14 jours", wati: "✅ 48h", manychat: "✅ Instant", respondio: "✅ 24h", whatsappBusiness: "✅ Instant" },
  { criteria: "Multilingue natif", agenticWhatsup: "✅ Oui", wati: "⚠️ Partiel", manychat: "❌ Non", respondio: "⚠️ Partiel", whatsappBusiness: "❌ Non" },
] as const;

const solutions = ["AgenticWhatsup", "WATI", "ManyChat", "Respond.io", "WhatsApp Business"] as const;

export async function generateStaticParams() {
  return ["fr", "en", "de", "nl"].map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = meta[locale] ?? meta.fr;
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: `https://agentic-whatsup.com/${locale}/comparatif`,
      languages: {
        fr: "https://agentic-whatsup.com/fr/comparatif",
        en: "https://agentic-whatsup.com/en/comparatif",
        de: "https://agentic-whatsup.com/de/comparatif",
        nl: "https://agentic-whatsup.com/nl/comparatif",
        "x-default": "https://agentic-whatsup.com/fr/comparatif",
      },
    },
  };
}

function getRowValue(row: ComparisonRow, index: number): string {
  const keys: readonly (keyof ComparisonRow)[] = ["agenticWhatsup", "wati", "manychat", "respondio", "whatsappBusiness"];
  return row[keys[index]];
}

export default async function ComparatifPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const h = headings[locale] ?? headings.fr;
  const m = meta[locale] ?? meta.fr;
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || `/${locale}/contact`;
  const pageUrl = `https://agentic-whatsup.com/${locale}/comparatif`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: m.title,
        description: m.description,
        url: pageUrl,
        inLanguage: locale,
      },
      {
        "@type": "ItemList",
        name: h.h1,
        itemListElement: competitors.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `https://agentic-whatsup.com/${locale}/comparatif/${c.slug}`,
          name: `AgenticWhatsup vs ${c.name}`,
        })),
      },
    ],
  };

  const tableJsonLd = {
    "@context": "https://schema.org",
    "@type": "Table",
    "name": "Comparatif AgenticWhatsup vs WATI vs ManyChat vs Respond.io vs WhatsApp Business",
    "description": "Tableau comparatif des fonctionnalités : IA conversationnelle, vision photo, transcription audio, RGPD, CRM, multilingue.",
    "about": {
      "@type": "SoftwareApplication",
      "name": "AgenticWhatsup",
      "applicationCategory": "BusinessApplication",
    },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <div className="text-center mb-14">
        <span className="inline-block bg-wa/10 text-wa text-xs font-semibold px-3 py-1 rounded-full mb-4">Comparatif</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "Onest, sans-serif" }}>{h.h1}</h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-6">{h.subtitle}</p>
        <a href={calLink} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-wa hover:bg-wa/90 text-white rounded-xl px-6 py-3 font-bold text-sm transition-colors">
          <Calendar size={16} /> {locale === "fr" ? "Audit gratuit — 30 min" : locale === "de" ? "Kostenloses Audit — 30 Min" : locale === "nl" ? "Gratis audit — 30 min" : "Free audit — 30 min"}
        </a>
      </div>

      {/* Comparison Table */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">{h.tableTitle}</h2>
        <div className="overflow-x-auto rounded-2xl border border-surface-2">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-2">
                <th className="text-left text-slate-300 font-semibold px-4 py-3 border-b border-surface-2 min-w-[200px]">
                  {locale === "fr" ? "Critère" : locale === "de" ? "Kriterium" : locale === "nl" ? "Criterium" : "Criteria"}
                </th>
                {solutions.map((sol) => (
                  <th key={sol} className={`text-center font-semibold px-4 py-3 border-b border-surface-2 min-w-[130px] ${sol === "AgenticWhatsup" ? "text-wa bg-wa/10" : "text-slate-300"}`}>
                    {sol}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, rowIdx) => (
                <tr key={row.criteria} className={rowIdx % 2 === 0 ? "bg-surface" : "bg-surface/60"}>
                  <td className="text-slate-200 font-medium px-4 py-3 border-b border-surface-2">{row.criteria}</td>
                  {solutions.map((_, colIdx) => {
                    const val = getRowValue(row, colIdx);
                    return (
                      <td key={colIdx} className={`text-center px-4 py-3 border-b border-surface-2 ${colIdx === 0 ? "bg-wa/5 font-semibold text-white" : "text-slate-300"}`}>
                        {val}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Table JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tableJsonLd) }} />

      {/* Competitor tiles */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          {locale === "fr" ? "Comparaisons détaillées" : locale === "de" ? "Detaillierte Vergleiche" : locale === "nl" ? "Gedetailleerde vergelijkingen" : "Detailed comparisons"}
        </h2>
        <div className="space-y-4">
          {competitors.map((c) => (
            <Link key={c.slug} href={`/${locale}/comparatif/${c.slug}`}
              className="flex items-center gap-4 bg-surface border border-surface-2 hover:border-wa/40 rounded-2xl p-6 transition-all group">
              <span className="text-4xl">{c.icon}</span>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg group-hover:text-wa transition-colors">AgenticWhatsup vs {c.name}</h3>
                <p className="text-slate-400 text-sm">{c.tagline[locale as keyof typeof c.tagline] ?? c.tagline.fr}</p>
              </div>
              <ArrowRight size={18} className="text-slate-500 group-hover:text-wa transition-colors shrink-0" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
