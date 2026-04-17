import type { Metadata } from "next";
import { Calendar, MessageCircle, ShieldCheck, Lock, Eye } from "lucide-react";

const meta: Record<string, { title: string; description: string }> = {
  fr: { title: "Sécurité & Conformité RGPD — Vos données protégées | AgenticWhatsup", description: "Hébergement en Europe, chiffrement end-to-end, conformité RGPD totale. Vos données et celles de vos clients ne quittent jamais l'infrastructure sécurisée AgenticWhatsup." },
  en: { title: "Security & GDPR Compliance — Your data protected | AgenticWhatsup", description: "European hosting, end-to-end encryption, full GDPR compliance. Your data and your clients' data never leaves the secure AgenticWhatsup infrastructure." },
  de: { title: "Sicherheit & DSGVO-Konformität — Ihre Daten geschützt | AgenticWhatsup", description: "Hosting in Europa, Ende-zu-Ende-Verschlüsselung, vollständige DSGVO-Konformität. Ihre Daten und die Ihrer Kunden verlassen niemals die sichere AgenticWhatsup-Infrastruktur." },
  nl: { title: "Beveiliging & AVG-conformiteit — Uw gegevens beschermd | AgenticWhatsup", description: "Hosting in Europa, end-to-end-encryptie, volledige AVG-conformiteit. Uw gegevens en die van uw klanten verlaten nooit de beveiligde AgenticWhatsup-infrastructuur." },
};

const t: Record<string, {
  badge: string; h1: string; subtitle: string;
  pillarsTitle: string;
  pillars: Array<{ icon: string; title: string; points: string[] }>;
  certTitle: string; certItems: Array<{ name: string; desc: string }>;
  faqTitle: string; faq: Array<{ q: string; a: string }>;
  ctaTitle: string; ctaSubtitle: string; ctaBadge: string; ctaPrimary: string; ctaSecondary: string;
}> = {
  fr: {
    badge: "RGPD · Hébergement EU · Chiffrement AES-256",
    h1: "Sécurité & conformité",
    subtitle: "La confidentialité de vos clients est une priorité non négociable. Voici exactement comment nous protégeons leurs données.",
    pillarsTitle: "Nos engagements de sécurité",
    pillars: [
      {
        icon: "🔒",
        title: "Chiffrement end-to-end",
        points: [
          "Toutes les conversations chiffrées en transit (TLS 1.3)",
          "Données au repos chiffrées AES-256",
          "Clés de chiffrement rotatives automatiquement",
          "Accès aux données en lecture uniquement sur demande documentée",
        ],
      },
      {
        icon: "🇪🇺",
        title: "Hébergement 100% Europe",
        points: [
          "Serveurs localisés en Europe (UE)",
          "Aucun transfert de données hors UE",
          "Conformité RGPD et droit suisse sur la protection des données",
          "Sous-traitants UE uniquement (DPA signé)",
        ],
      },
      {
        icon: "🛡️",
        title: "Contrôle d'accès strict",
        points: [
          "Authentification multi-facteurs obligatoire pour notre équipe",
          "Accès aux données client limité au strict nécessaire",
          "Journalisation de tous les accès et actions",
          "Revue d'accès trimestrielle",
        ],
      },
      {
        icon: "🗑️",
        title: "Droit à l'oubli & portabilité",
        points: [
          "Suppression complète des données sur demande sous 72h",
          "Export de toutes vos données en format standard",
          "Rétention configurable selon vos besoins",
          "Aucune revente de données à des tiers, jamais",
        ],
      },
      {
        icon: "🔍",
        title: "Audit & transparence",
        points: [
          "Rapport d'activité mensuel disponible",
          "Logs d'accès consultables à tout moment",
          "Notification d'incident sous 72h (obligation RGPD)",
          "Audit de sécurité annuel par tiers indépendant",
        ],
      },
      {
        icon: "📋",
        title: "Contrats & DPA",
        points: [
          "Contrat de sous-traitance RGPD (DPA) fourni",
          "Politique de confidentialité claire et lisible",
          "CGU conformes aux exigences légales UE/CH",
          "Délégué à la protection des données disponible",
        ],
      },
    ],
    certTitle: "Standards respectés",
    certItems: [
      { name: "RGPD (UE) 2016/679", desc: "Règlement général sur la protection des données — pleine conformité" },
      { name: "LPD Suisse", desc: "Loi fédérale sur la protection des données (nLPD 2023) — conforme" },
      { name: "AVG (Pays-Bas / Belgique)", desc: "Algemene Verordening Gegevensbescherming — conforme" },
      { name: "WhatsApp Business API", desc: "Partenaire officiel Meta — données traitées selon la politique Meta" },
      { name: "ISO 27001 (infrastructure)", desc: "Notre hébergeur est certifié ISO 27001" },
    ],
    faqTitle: "Questions fréquentes sur la sécurité",
    faq: [
      { q: "Qui peut accéder aux conversations de mes clients ?", a: "Uniquement vous et les membres de votre équipe que vous autorisez. Nos équipes techniques n'accèdent aux données qu'en cas d'incident documenté, avec votre accord et de manière tracée." },
      { q: "Où sont stockées les données ?", a: "Sur des serveurs situés dans l'Union Européenne. Aucune donnée ne transite ou n'est stockée hors UE." },
      { q: "Que se passe-t-il si je résilie mon abonnement ?", a: "Vous pouvez exporter toutes vos données dans les 30 jours suivant la résiliation. Après ce délai, les données sont supprimées de manière sécurisée et irréversible." },
      { q: "L'agent IA utilise-t-il nos données pour entraîner ses modèles ?", a: "Non. Vos données ne sont jamais utilisées pour entraîner des modèles tiers. Elles servent uniquement à faire fonctionner votre agent." },
      { q: "Comment gérer les demandes RGPD de mes clients ?", a: "Nous vous fournissons les outils pour répondre aux demandes d'accès, de rectification et de suppression de vos clients en quelques clics." },
    ],
    ctaBadge: "Confiance & transparence",
    ctaTitle: "Des questions sur la sécurité ?",
    ctaSubtitle: "Notre équipe répond à toutes vos questions de conformité avant tout engagement.",
    ctaPrimary: "Prendre RDV — Audit gratuit",
    ctaSecondary: "Écrire sur WhatsApp",
  },
  en: {
    badge: "GDPR · EU Hosting · AES-256 Encryption",
    h1: "Security & compliance",
    subtitle: "Your clients' privacy is a non-negotiable priority. Here is exactly how we protect their data.",
    pillarsTitle: "Our security commitments",
    pillars: [
      {
        icon: "🔒",
        title: "End-to-end encryption",
        points: [
          "All conversations encrypted in transit (TLS 1.3)",
          "Data at rest encrypted AES-256",
          "Automatically rotating encryption keys",
          "Data access in read-only mode on documented request",
        ],
      },
      {
        icon: "🇪🇺",
        title: "100% European hosting",
        points: [
          "Servers located in Europe (EU)",
          "No data transfer outside the EU",
          "GDPR and Swiss data protection law compliance",
          "EU subprocessors only (DPA signed)",
        ],
      },
      {
        icon: "🛡️",
        title: "Strict access control",
        points: [
          "Mandatory multi-factor authentication for our team",
          "Client data access limited to strict necessity",
          "Logging of all access and actions",
          "Quarterly access review",
        ],
      },
      {
        icon: "🗑️",
        title: "Right to erasure & portability",
        points: [
          "Complete data deletion on request within 72h",
          "Export all your data in standard format",
          "Configurable retention based on your needs",
          "No resale of data to third parties, ever",
        ],
      },
      {
        icon: "🔍",
        title: "Audit & transparency",
        points: [
          "Monthly activity report available",
          "Access logs viewable at any time",
          "Incident notification within 72h (GDPR requirement)",
          "Annual security audit by independent third party",
        ],
      },
      {
        icon: "📋",
        title: "Contracts & DPA",
        points: [
          "GDPR Data Processing Agreement (DPA) provided",
          "Clear and readable privacy policy",
          "Terms compliant with EU/Swiss legal requirements",
          "Data Protection Officer available",
        ],
      },
    ],
    certTitle: "Standards respected",
    certItems: [
      { name: "GDPR (EU) 2016/679", desc: "General Data Protection Regulation — full compliance" },
      { name: "Swiss DPA (nDSG 2023)", desc: "Federal Act on Data Protection — compliant" },
      { name: "AVG (Netherlands / Belgium)", desc: "Algemene Verordening Gegevensbescherming — compliant" },
      { name: "WhatsApp Business API", desc: "Official Meta partner — data processed per Meta policy" },
      { name: "ISO 27001 (infrastructure)", desc: "Our hosting provider is ISO 27001 certified" },
    ],
    faqTitle: "Frequently asked security questions",
    faq: [
      { q: "Who can access my clients' conversations?", a: "Only you and the team members you authorise. Our technical teams only access data in the event of a documented incident, with your agreement and in a traceable manner." },
      { q: "Where is the data stored?", a: "On servers located in the European Union. No data transits or is stored outside the EU." },
      { q: "What happens if I cancel my subscription?", a: "You can export all your data within 30 days of cancellation. After that period, data is securely and irreversibly deleted." },
      { q: "Does the AI agent use our data to train its models?", a: "No. Your data is never used to train third-party models. It is only used to operate your agent." },
      { q: "How do I handle GDPR requests from my clients?", a: "We provide you with tools to respond to your clients' access, rectification and deletion requests in a few clicks." },
    ],
    ctaBadge: "Trust & transparency",
    ctaTitle: "Questions about security?",
    ctaSubtitle: "Our team answers all your compliance questions before any commitment.",
    ctaPrimary: "Book a call — Free audit",
    ctaSecondary: "Write on WhatsApp",
  },
  de: {
    badge: "DSGVO · EU-Hosting · AES-256-Verschlüsselung",
    h1: "Sicherheit & Konformität",
    subtitle: "Der Datenschutz Ihrer Kunden ist eine nicht verhandelbare Priorität. Hier ist genau, wie wir ihre Daten schützen.",
    pillarsTitle: "Unsere Sicherheitszusagen",
    pillars: [
      {
        icon: "🔒",
        title: "Ende-zu-Ende-Verschlüsselung",
        points: [
          "Alle Gespräche während der Übertragung verschlüsselt (TLS 1.3)",
          "Ruhende Daten mit AES-256 verschlüsselt",
          "Automatisch rotierende Verschlüsselungsschlüssel",
          "Datenzugriff im Nur-Lese-Modus auf dokumentierte Anfrage",
        ],
      },
      {
        icon: "🇪🇺",
        title: "100% europäisches Hosting",
        points: [
          "Server in Europa (EU) lokalisiert",
          "Kein Datentransfer außerhalb der EU",
          "DSGVO- und Schweizer Datenschutzgesetz-Konformität",
          "Nur EU-Unterauftragsverarbeiter (DPA unterzeichnet)",
        ],
      },
      {
        icon: "🛡️",
        title: "Strenge Zugangskontrolle",
        points: [
          "Obligatorische Multi-Faktor-Authentifizierung für unser Team",
          "Kundendatenzugriff auf das strikt Notwendige beschränkt",
          "Protokollierung aller Zugriffe und Aktionen",
          "Vierteljährliche Zugriffsüberprüfung",
        ],
      },
      {
        icon: "🗑️",
        title: "Recht auf Löschung & Portabilität",
        points: [
          "Vollständige Datenlöschung auf Anfrage innerhalb von 72h",
          "Export aller Ihrer Daten im Standardformat",
          "Konfigurierbare Aufbewahrung nach Ihren Bedürfnissen",
          "Kein Weiterverkauf von Daten an Dritte, niemals",
        ],
      },
      {
        icon: "🔍",
        title: "Audit & Transparenz",
        points: [
          "Monatlicher Aktivitätsbericht verfügbar",
          "Zugriffsprotokolle jederzeit einsehbar",
          "Vorfallbenachrichtigung innerhalb von 72h (DSGVO-Pflicht)",
          "Jährliches Sicherheitsaudit durch unabhängigen Dritten",
        ],
      },
      {
        icon: "📋",
        title: "Verträge & DPA",
        points: [
          "DSGVO-Auftragsverarbeitungsvertrag (AVV) bereitgestellt",
          "Klare und lesbare Datenschutzrichtlinie",
          "AGB konform mit EU/Schweizer Rechtsanforderungen",
          "Datenschutzbeauftragter verfügbar",
        ],
      },
    ],
    certTitle: "Respektierte Standards",
    certItems: [
      { name: "DSGVO (EU) 2016/679", desc: "Datenschutz-Grundverordnung — vollständige Konformität" },
      { name: "DSG Schweiz (nDSG 2023)", desc: "Bundesgesetz über den Datenschutz — konform" },
      { name: "AVG (Niederlande / Belgien)", desc: "Algemene Verordening Gegevensbescherming — konform" },
      { name: "WhatsApp Business API", desc: "Offizieller Meta-Partner — Daten gemäß Meta-Richtlinie verarbeitet" },
      { name: "ISO 27001 (Infrastruktur)", desc: "Unser Hosting-Anbieter ist ISO 27001 zertifiziert" },
    ],
    faqTitle: "Häufig gestellte Sicherheitsfragen",
    faq: [
      { q: "Wer kann auf die Gespräche meiner Kunden zugreifen?", a: "Nur Sie und die von Ihnen autorisierten Teammitglieder. Unsere technischen Teams greifen nur im Falle eines dokumentierten Vorfalls, mit Ihrer Zustimmung und nachvollziehbar auf Daten zu." },
      { q: "Wo werden die Daten gespeichert?", a: "Auf in der Europäischen Union lokalisierten Servern. Keine Daten werden außerhalb der EU übertragen oder gespeichert." },
      { q: "Was passiert, wenn ich mein Abonnement kündige?", a: "Sie können alle Ihre Daten innerhalb von 30 Tagen nach der Kündigung exportieren. Nach diesem Zeitraum werden Daten sicher und unwiderruflich gelöscht." },
      { q: "Verwendet der KI-Agent unsere Daten zum Trainieren seiner Modelle?", a: "Nein. Ihre Daten werden niemals zum Trainieren von Drittanbieter-Modellen verwendet. Sie dienen ausschließlich dem Betrieb Ihres Agenten." },
      { q: "Wie bearbeite ich DSGVO-Anfragen meiner Kunden?", a: "Wir stellen Ihnen Werkzeuge bereit, um auf Zugriffsanfragen, Berichtigungsanfragen und Löschanfragen Ihrer Kunden mit wenigen Klicks zu antworten." },
    ],
    ctaBadge: "Vertrauen & Transparenz",
    ctaTitle: "Fragen zur Sicherheit?",
    ctaSubtitle: "Unser Team beantwortet alle Ihre Compliance-Fragen vor jeder Verpflichtung.",
    ctaPrimary: "Termin vereinbaren — Kostenloses Audit",
    ctaSecondary: "Auf WhatsApp schreiben",
  },
  nl: {
    badge: "AVG · EU-hosting · AES-256-encryptie",
    h1: "Beveiliging & conformiteit",
    subtitle: "De privacy van uw klanten is een niet-onderhandelbare prioriteit. Hier is precies hoe we hun gegevens beschermen.",
    pillarsTitle: "Onze beveiligingsverplichtingen",
    pillars: [
      {
        icon: "🔒",
        title: "End-to-end-encryptie",
        points: [
          "Alle gesprekken versleuteld tijdens overdracht (TLS 1.3)",
          "Gegevens in rust versleuteld met AES-256",
          "Automatisch roterende encryptiesleutels",
          "Gegevenstoegang alleen-lezen op gedocumenteerd verzoek",
        ],
      },
      {
        icon: "🇪🇺",
        title: "100% Europese hosting",
        points: [
          "Servers gevestigd in Europa (EU)",
          "Geen gegevensoverdracht buiten de EU",
          "AVG en Zwitserse gegevensbeschermingswet conformiteit",
          "Alleen EU-subverwerkers (DPA ondertekend)",
        ],
      },
      {
        icon: "🛡️",
        title: "Strikte toegangscontrole",
        points: [
          "Verplichte meervoudige verificatie voor ons team",
          "Toegang tot klantgegevens beperkt tot strikt noodzakelijke",
          "Registratie van alle toegangen en acties",
          "Kwartaallijkse toegangsbeoordeling",
        ],
      },
      {
        icon: "🗑️",
        title: "Recht op vergetelheid & portabiliteit",
        points: [
          "Volledige gegevensvervijdering op verzoek binnen 72u",
          "Exporteer al uw gegevens in standaardformaat",
          "Configureerbare bewaring op basis van uw behoeften",
          "Geen doorverkoop van gegevens aan derden, nooit",
        ],
      },
      {
        icon: "🔍",
        title: "Audit & transparantie",
        points: [
          "Maandelijks activiteitsrapport beschikbaar",
          "Toegangslogboeken op elk moment raadpleegbaar",
          "Incidentmelding binnen 72u (AVG-vereiste)",
          "Jaarlijkse beveiligingsaudit door onafhankelijke derde",
        ],
      },
      {
        icon: "📋",
        title: "Contracten & DPA",
        points: [
          "AVG-verwerkersovereenkomst (DPA) verstrekt",
          "Duidelijk en leesbaar privacybeleid",
          "Algemene voorwaarden conform EU/Zwitserse wettelijke vereisten",
          "Functionaris voor gegevensbescherming beschikbaar",
        ],
      },
    ],
    certTitle: "Gerespecteerde normen",
    certItems: [
      { name: "AVG (EU) 2016/679", desc: "Algemene Verordening Gegevensbescherming — volledige conformiteit" },
      { name: "Zwitserse DSG (nDSG 2023)", desc: "Federale wet bescherming persoonsgegevens — conform" },
      { name: "AVG (Nederland / België)", desc: "Algemene Verordening Gegevensbescherming — conform" },
      { name: "WhatsApp Business API", desc: "Officiële Meta-partner — gegevens verwerkt per Meta-beleid" },
      { name: "ISO 27001 (infrastructuur)", desc: "Onze hostingprovider is ISO 27001 gecertificeerd" },
    ],
    faqTitle: "Veelgestelde beveiligingsvragen",
    faq: [
      { q: "Wie heeft toegang tot de gesprekken van mijn klanten?", a: "Alleen u en de teamleden die u autoriseert. Onze technische teams hebben alleen toegang tot gegevens bij een gedocumenteerd incident, met uw instemming en op traceerbare wijze." },
      { q: "Waar worden de gegevens opgeslagen?", a: "Op servers in de Europese Unie. Geen gegevens worden buiten de EU overgedragen of opgeslagen." },
      { q: "Wat gebeurt er als ik mijn abonnement opzeg?", a: "U kunt al uw gegevens exporteren binnen 30 dagen na opzegging. Na die periode worden gegevens veilig en onomkeerbaar verwijderd." },
      { q: "Gebruikt de AI-agent onze gegevens om zijn modellen te trainen?", a: "Nee. Uw gegevens worden nooit gebruikt om modellen van derden te trainen. Ze worden uitsluitend gebruikt om uw agent te laten werken." },
      { q: "Hoe verwerk ik AVG-verzoeken van mijn klanten?", a: "We bieden u tools om te reageren op toegangs-, rectificatie- en verwijderingsverzoeken van uw klanten met een paar klikken." },
    ],
    ctaBadge: "Vertrouwen & transparantie",
    ctaTitle: "Vragen over beveiliging?",
    ctaSubtitle: "Ons team beantwoordt al uw nalevingsvragen voor elke verplichting.",
    ctaPrimary: "Afspraak maken — Gratis audit",
    ctaSecondary: "Schrijf op WhatsApp",
  },
};

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
      languages: { fr: "/fr/securite", en: "/en/securite", de: "/de/securite", nl: "/nl/securite" },
      canonical: `https://agentic-whatsup.com/${locale}/securite`,
    },
  };
}

const waNumber = "41799394222";

export default async function SecuritePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = t[locale] ?? t.fr;
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || `/${locale}/contact`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: (meta[locale] ?? meta.fr).title,
    description: (meta[locale] ?? meta.fr).description,
    url: `https://agentic-whatsup.com/${locale}/securite`,
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <div className="text-center mb-16">
        <span className="inline-block bg-wa/10 text-wa text-xs font-semibold px-3 py-1 rounded-full mb-4">{c.badge}</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5" style={{ fontFamily: "Onest, sans-serif" }}>
          {c.h1}
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">{c.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={calLink} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-wa hover:bg-wa/90 text-white rounded-xl px-6 py-3 font-bold text-sm transition-colors">
            <Calendar size={16} /> {c.ctaPrimary}
          </a>
          <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-surface border border-surface-2 hover:border-wa/40 text-white rounded-xl px-6 py-3 font-bold text-sm transition-colors">
            {c.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Pillars */}
      <h2 className="text-white font-extrabold text-2xl mb-8 text-center" style={{ fontFamily: "Onest, sans-serif" }}>{c.pillarsTitle}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
        {c.pillars.map((p, i) => (
          <div key={i} className="bg-surface border border-surface-2 rounded-2xl p-6 hover:border-wa/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{p.icon}</span>
              <h3 className="text-white font-bold">{p.title}</h3>
            </div>
            <ul className="space-y-2">
              {p.points.map((pt, j) => (
                <li key={j} className="flex items-start gap-2 text-slate-400 text-sm">
                  <ShieldCheck size={14} className="text-wa mt-0.5 shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Standards */}
      <div className="mb-16">
        <h2 className="text-white font-extrabold text-2xl mb-6 text-center" style={{ fontFamily: "Onest, sans-serif" }}>{c.certTitle}</h2>
        <div className="space-y-3">
          {c.certItems.map((item, i) => (
            <div key={i} className="flex items-center justify-between bg-surface border border-surface-2 rounded-xl p-4 hover:border-wa/30 transition-colors">
              <div className="flex items-center gap-3">
                <Lock size={16} className="text-wa shrink-0" />
                <span className="text-white font-semibold text-sm">{item.name}</span>
              </div>
              <span className="text-slate-400 text-xs text-right max-w-xs">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-16">
        <h2 className="text-white font-extrabold text-2xl mb-6 text-center" style={{ fontFamily: "Onest, sans-serif" }}>{c.faqTitle}</h2>
        <div className="space-y-4">
          {c.faq.map((item, i) => (
            <div key={i} className="bg-surface border border-surface-2 rounded-2xl p-5">
              <div className="flex items-start gap-3 mb-2">
                <Eye size={16} className="text-wa mt-0.5 shrink-0" />
                <p className="text-white font-semibold text-sm">{item.q}</p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed ml-7">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-wa/5 border border-wa/20 rounded-2xl p-10 text-center">
        <span className="inline-block bg-wa/10 text-wa text-xs font-semibold px-3 py-1 rounded-full mb-4">{c.ctaBadge}</span>
        <h2 className="text-white font-extrabold text-2xl mb-2" style={{ fontFamily: "Onest, sans-serif" }}>{c.ctaTitle}</h2>
        <p className="text-slate-400 text-sm mb-6">{c.ctaSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={calLink} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-wa hover:bg-wa/90 text-white rounded-xl px-6 py-3 font-bold text-sm transition-colors">
            <Calendar size={16} /> {c.ctaPrimary}
          </a>
          <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-surface border border-surface-2 hover:border-wa/40 text-white rounded-xl px-6 py-3 font-bold text-sm transition-colors">
            <MessageCircle size={16} className="text-wa" /> {c.ctaSecondary}
          </a>
        </div>
      </div>
    </div>
  );
}
