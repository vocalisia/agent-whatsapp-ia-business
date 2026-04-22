import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, CheckCircle, XCircle, MessageCircle } from "lucide-react";

const meta: Record<string, { title: string; description: string }> = {
  fr: { title: "AgenticWhatsup vs Zenvia — Comparatif 2025 | Agent IA WhatsApp Europe vs LatAm", description: "AgenticWhatsup ou Zenvia ? Zenvia domine le marché latino-américain avec une offre CPaaS complète. AgenticWhatsup est le spécialiste WhatsApp IA pour PME francophones/DACH/Benelux." },
  en: { title: "AgenticWhatsup vs Zenvia — Comparison 2025 | WhatsApp AI agent Europe vs LatAm", description: "AgenticWhatsup or Zenvia? Zenvia dominates the LatAm market with a full CPaaS offering. AgenticWhatsup is the WhatsApp AI specialist for French/DACH/Benelux SMBs." },
  de: { title: "AgenticWhatsup vs Zenvia — Vergleich 2025 | WhatsApp KI-Agent Europa vs LatAm", description: "AgenticWhatsup oder Zenvia? Zenvia dominiert den LatAm-Markt mit vollständigem CPaaS-Angebot. AgenticWhatsup ist der WhatsApp KI-Spezialist für europäische KMU." },
  nl: { title: "AgenticWhatsup vs Zenvia — Vergelijking 2025 | WhatsApp AI-agent Europa vs LatAm", description: "AgenticWhatsup of Zenvia? Zenvia domineert de LatAm-markt met volledig CPaaS-aanbod. AgenticWhatsup is de WhatsApp AI-specialist voor Europese MKB." },
};

const t: Record<string, {
  back: string; badge: string; h1: string; subtitle: string;
  verdict: string; verdictText: string;
  tableTitle: string;
  rows: Array<{ feature: string; us: string | boolean; them: string | boolean; usNote?: string; themNote?: string }>;
  whyTitle: string; why: string[];
  forWhoTitle: string; forWhoUs: string[]; forWhoThem: string[];
  ctaTitle: string; ctaSubtitle: string; ctaPrimary: string; ctaSecondary: string;
  faqTitle: string; faqs: Array<{ q: string; a: string }>;
}> = {
  fr: {
    back: "← Tous les comparatifs",
    badge: "Comparatif indépendant 2025",
    h1: "AgenticWhatsup vs Zenvia",
    subtitle: "Zenvia est le leader CPaaS latino-américain, très solide sur le marché brésilien et hispanophone. AgenticWhatsup est conçu pour les marchés francophones, germanophones et néerlandophones avec une IA conversationnelle avancée.",
    verdict: "Notre verdict",
    verdictText: "Zenvia est un excellent choix si vous opérez principalement au Brésil, au Mexique ou en Amérique latine — ils connaissent parfaitement la réglementation, les opérateurs et les usages locaux. Pour les marchés européens francophones, germanophones et néerlandophones, AgenticWhatsup offre une intégration locale, un support dans votre langue et une IA formée sur vos données.",
    tableTitle: "Comparatif fonctionnel",
    rows: [
      { feature: "Focus Europe (FR/DE/CH/BE/NL)", us: true, them: false, themNote: "Focus LatAm (BR/MX)" },
      { feature: "IA conversationnelle GPT-4 / Claude", us: true, them: false, themNote: "IA propriétaire + flows" },
      { feature: "Compréhension vocaux WhatsApp", us: true, them: false },
      { feature: "Analyse d'image envoyée", us: true, them: false },
      { feature: "Formation sur vos données client", us: true, them: false },
      { feature: "Personnalité de marque IA", us: true, them: false },
      { feature: "CPaaS (SMS, voix, email)", us: false, them: true, usNote: "Focus WhatsApp IA" },
      { feature: "Couverture opérateurs LatAm", us: false, them: true },
      { feature: "Conformité LGPD (Brésil)", us: false, them: true, usNote: "Conformité RGPD UE" },
      { feature: "Conformité RGPD UE", us: true, them: false, themNote: "Focus LGPD LatAm" },
      { feature: "Support FR / DE / NL", us: true, them: false, themNote: "Portugais / Espagnol / EN" },
      { feature: "Hébergement Europe", us: true, them: false, themNote: "Hébergement Amériques" },
      { feature: "Déploiement", us: "14 jours", them: "Variable selon pack" },
      { feature: "ROI moyen client", us: "8× en 90j", them: "Non communiqué" },
    ],
    whyTitle: "Pourquoi nos clients ont choisi AgenticWhatsup plutôt que Zenvia",
    why: [
      "Zenvia est LatAm-first — AgenticWhatsup est Europe-first (FR/DE/CH/BE/NL)",
      "Zenvia propose une IA propriétaire avec flows — AgenticWhatsup utilise GPT-4 et Claude directement",
      "Zenvia n'est pas localisé pour nos marchés — support et facturation en portugais/espagnol",
      "Zenvia ne transcrit pas les vocaux WhatsApp — bloquant pour clients FR qui adorent les audios",
      "Zenvia demande un engagement CPaaS complet — AgenticWhatsup cible WhatsApp IA pur",
      "Zenvia héberge aux Amériques — AgenticWhatsup est conforme RGPD et hébergé en Europe",
    ],
    forWhoTitle: "Qui devrait choisir quoi ?",
    forWhoUs: [
      "Vous opérez en Europe (FR, DE, CH, BE, NL, LU)",
      "Vous cherchez une conformité RGPD native",
      "Vous voulez une IA de pointe (GPT-4/Claude)",
      "Votre priorité est WhatsApp, pas un CPaaS complet",
    ],
    forWhoThem: [
      "Votre marché principal est le Brésil ou LatAm",
      "Vous avez besoin d'un CPaaS complet (SMS + voix + email)",
      "Vous voulez travailler avec un acteur local LatAm",
      "Vous êtes à l'aise avec un support portugais/espagnol",
    ],
    ctaTitle: "Votre WhatsApp européen mérite un agent européen",
    ctaSubtitle: "Audit gratuit 30 min — on vous montre pourquoi la localisation et la conformité RGPD comptent.",
    ctaPrimary: "Prendre RDV — Audit gratuit",
    ctaSecondary: "Écrire sur WhatsApp",
    faqTitle: "Questions fréquentes",
    faqs: [
      { q: "Zenvia est-il disponible en Europe ?", a: "Zenvia propose son offre en Europe mais reste majoritairement centré sur l'Amérique latine — support, facturation et intégrations sont optimisés pour le Brésil et le Mexique. AgenticWhatsup est nativement européen." },
      { q: "Ai-je besoin d'un CPaaS complet ou juste WhatsApp ?", a: "La plupart des PME européennes se concentrent sur WhatsApp (80%+ du trafic) et n'ont pas besoin d'un CPaaS complet. AgenticWhatsup est spécialiste WhatsApp — moins cher et plus efficace sur ce cas." },
      { q: "AgenticWhatsup est-il conforme RGPD ?", a: "Oui. Hébergement en Europe, DPA signable, chiffrement des données, droit à l'oubli. Conformité native pour vos clients FR/DE/CH/BE/NL." },
      { q: "Peut-on migrer depuis Zenvia ?", a: "Oui. Nous récupérons vos templates WhatsApp, FAQs et historique CRM pour former l'agent. Migration en 14 jours." },
      { q: "Quelle différence d'IA ?", a: "Zenvia propose une IA propriétaire enrichie par des flows. AgenticWhatsup branche directement GPT-4 et Claude sur vos données — écart significatif sur compréhension contextuelle, vocaux et images." },
    ],
  },
  en: {
    back: "← All comparisons",
    badge: "Independent comparison 2025",
    h1: "AgenticWhatsup vs Zenvia",
    subtitle: "Zenvia is the LatAm CPaaS leader, very strong in Brazilian and Spanish-speaking markets. AgenticWhatsup is built for French, German and Dutch-speaking markets with advanced conversational AI.",
    verdict: "Our verdict",
    verdictText: "Zenvia is an excellent choice if you operate mainly in Brazil, Mexico or Latin America — they know local regulations, carriers and usage perfectly. For European French, German and Dutch-speaking markets, AgenticWhatsup offers local integration, support in your language and AI trained on your data.",
    tableTitle: "Functional comparison",
    rows: [
      { feature: "Europe focus (FR/DE/CH/BE/NL)", us: true, them: false, themNote: "LatAm focus (BR/MX)" },
      { feature: "GPT-4 / Claude conversational AI", us: true, them: false, themNote: "Proprietary AI + flows" },
      { feature: "WhatsApp voice message understanding", us: true, them: false },
      { feature: "Sent image analysis", us: true, them: false },
      { feature: "Training on your client data", us: true, them: false },
      { feature: "Brand personality AI", us: true, them: false },
      { feature: "CPaaS (SMS, voice, email)", us: false, them: true, usNote: "WhatsApp AI focus" },
      { feature: "LatAm carrier coverage", us: false, them: true },
      { feature: "LGPD compliance (Brazil)", us: false, them: true, usNote: "EU GDPR compliance" },
      { feature: "EU GDPR compliance", us: true, them: false, themNote: "LGPD LatAm focus" },
      { feature: "FR / DE / NL support", us: true, them: false, themNote: "Portuguese / Spanish / EN" },
      { feature: "Europe hosting", us: true, them: false, themNote: "Americas hosting" },
      { feature: "Deployment", us: "14 days", them: "Variable by plan" },
      { feature: "Average client ROI", us: "8× in 90 days", them: "Not disclosed" },
    ],
    whyTitle: "Why our clients chose AgenticWhatsup over Zenvia",
    why: [
      "Zenvia is LatAm-first — AgenticWhatsup is Europe-first (FR/DE/CH/BE/NL)",
      "Zenvia offers proprietary AI with flows — AgenticWhatsup uses GPT-4 and Claude directly",
      "Zenvia isn't localised for our markets — support and billing in Portuguese/Spanish",
      "Zenvia doesn't transcribe WhatsApp voice messages — blocking for European clients",
      "Zenvia requires full CPaaS commitment — AgenticWhatsup targets pure WhatsApp AI",
      "Zenvia hosts in the Americas — AgenticWhatsup is GDPR compliant, hosted in Europe",
    ],
    forWhoTitle: "Who should choose what?",
    forWhoUs: [
      "You operate in Europe (FR, DE, CH, BE, NL, LU)",
      "You want native GDPR compliance",
      "You want cutting-edge AI (GPT-4/Claude)",
      "Your priority is WhatsApp, not a full CPaaS",
    ],
    forWhoThem: [
      "Your main market is Brazil or LatAm",
      "You need a full CPaaS (SMS + voice + email)",
      "You want to work with a local LatAm player",
      "You're comfortable with Portuguese/Spanish support",
    ],
    ctaTitle: "Your European WhatsApp deserves a European agent",
    ctaSubtitle: "Free 30-min audit — we show you why localisation and GDPR compliance matter.",
    ctaPrimary: "Book a call — Free audit",
    ctaSecondary: "Write on WhatsApp",
    faqTitle: "Frequently asked questions",
    faqs: [
      { q: "Is Zenvia available in Europe?", a: "Zenvia offers its services in Europe but remains mainly focused on Latin America — support, billing and integrations are optimised for Brazil and Mexico. AgenticWhatsup is natively European." },
      { q: "Do I need a full CPaaS or just WhatsApp?", a: "Most European SMBs focus on WhatsApp (80%+ of traffic) and don't need a full CPaaS. AgenticWhatsup specialises in WhatsApp — cheaper and more effective for this case." },
      { q: "Is AgenticWhatsup GDPR compliant?", a: "Yes. Europe hosting, signable DPA, data encryption, right to be forgotten. Native compliance for your FR/DE/CH/BE/NL clients." },
      { q: "Can we migrate from Zenvia?", a: "Yes. We recover your WhatsApp templates, FAQs and CRM history to train the agent. Migration in 14 days." },
      { q: "What's the AI difference?", a: "Zenvia offers a proprietary AI enriched by flows. AgenticWhatsup plugs GPT-4 and Claude directly into your data — significant gap on contextual understanding, voice and images." },
    ],
  },
  de: {
    back: "← Alle Vergleiche",
    badge: "Unabhängiger Vergleich 2025",
    h1: "AgenticWhatsup vs Zenvia",
    subtitle: "Zenvia ist der lateinamerikanische CPaaS-Marktführer, sehr stark in brasilianischen und spanischsprachigen Märkten. AgenticWhatsup ist für DACH- und Benelux-Märkte gebaut mit fortschrittlicher konversationeller KI.",
    verdict: "Unser Urteil",
    verdictText: "Zenvia ist eine hervorragende Wahl, wenn Sie hauptsächlich in Brasilien, Mexiko oder Lateinamerika tätig sind. Für europäische DACH- und Benelux-Märkte bietet AgenticWhatsup lokale Integration, Support in Ihrer Sprache und KI, die auf Ihren Daten trainiert ist.",
    tableTitle: "Funktionsvergleich",
    rows: [
      { feature: "Europa-Fokus (FR/DE/CH/BE/NL)", us: true, them: false, themNote: "LatAm-Fokus (BR/MX)" },
      { feature: "GPT-4 / Claude Konversations-KI", us: true, them: false, themNote: "Proprietäre KI + Flows" },
      { feature: "WhatsApp-Sprachnachrichtenverständnis", us: true, them: false },
      { feature: "Bildanalyse", us: true, them: false },
      { feature: "Training auf Ihren Kundendaten", us: true, them: false },
      { feature: "Marken-KI-Persönlichkeit", us: true, them: false },
      { feature: "CPaaS (SMS, Sprache, E-Mail)", us: false, them: true, usNote: "WhatsApp KI-Fokus" },
      { feature: "LatAm-Carrier-Abdeckung", us: false, them: true },
      { feature: "LGPD-Konformität (Brasilien)", us: false, them: true, usNote: "EU-DSGVO" },
      { feature: "EU-DSGVO-Konformität", us: true, them: false, themNote: "LGPD LatAm-Fokus" },
      { feature: "FR / DE / NL Support", us: true, them: false, themNote: "Portugiesisch / Spanisch / EN" },
      { feature: "Europa-Hosting", us: true, them: false, themNote: "Amerika-Hosting" },
      { feature: "Bereitstellung", us: "14 Tage", them: "Variabel je nach Paket" },
      { feature: "Kunden-ROI", us: "8× in 90 Tagen", them: "Nicht kommuniziert" },
    ],
    whyTitle: "Warum unsere Kunden AgenticWhatsup statt Zenvia wählten",
    why: [
      "Zenvia ist LatAm-first — AgenticWhatsup ist Europa-first (DACH/Benelux)",
      "Zenvia bietet proprietäre KI mit Flows — AgenticWhatsup nutzt GPT-4 und Claude direkt",
      "Zenvia ist nicht für unsere Märkte lokalisiert — Support und Rechnung auf Portugiesisch/Spanisch",
      "Zenvia transkribiert keine WhatsApp-Sprachnachrichten — blockierend für europäische Kunden",
      "Zenvia erfordert volle CPaaS-Verpflichtung — AgenticWhatsup zielt auf reine WhatsApp-KI",
      "Zenvia hostet in Amerika — AgenticWhatsup ist DSGVO-konform, gehostet in Europa",
    ],
    forWhoTitle: "Wer sollte was wählen?",
    forWhoUs: [
      "Sie operieren in Europa (FR, DE, CH, BE, NL, LU)",
      "Sie wollen native DSGVO-Konformität",
      "Sie wollen modernste KI (GPT-4/Claude)",
      "Ihre Priorität ist WhatsApp, nicht komplettes CPaaS",
    ],
    forWhoThem: [
      "Ihr Hauptmarkt ist Brasilien oder LatAm",
      "Sie brauchen komplettes CPaaS (SMS + Sprache + E-Mail)",
      "Sie wollen mit einem lokalen LatAm-Anbieter arbeiten",
      "Sie sind mit portugiesisch/spanisch Support zufrieden",
    ],
    ctaTitle: "Ihr europäisches WhatsApp verdient einen europäischen Agenten",
    ctaSubtitle: "Kostenloses 30-Min-Audit — wir zeigen Ihnen, warum Lokalisierung und DSGVO-Konformität wichtig sind.",
    ctaPrimary: "Termin vereinbaren — Kostenloses Audit",
    ctaSecondary: "Auf WhatsApp schreiben",
    faqTitle: "Häufig gestellte Fragen",
    faqs: [
      { q: "Ist Zenvia in Europa verfügbar?", a: "Zenvia bietet seine Dienste in Europa an, bleibt aber hauptsächlich auf Lateinamerika fokussiert. AgenticWhatsup ist nativ europäisch." },
      { q: "Brauche ich ein volles CPaaS oder nur WhatsApp?", a: "Die meisten europäischen KMU fokussieren sich auf WhatsApp (80%+ Traffic) und brauchen kein volles CPaaS. AgenticWhatsup ist günstiger und effektiver für diesen Fall." },
      { q: "Ist AgenticWhatsup DSGVO-konform?", a: "Ja. Europa-Hosting, unterschreibbare AVV, Datenverschlüsselung, Recht auf Vergessen. Native Konformität für Ihre DACH/Benelux-Kunden." },
      { q: "Können wir von Zenvia migrieren?", a: "Ja. Wir übernehmen Ihre WhatsApp-Templates, FAQs und CRM-Historie. Migration in 14 Tagen." },
      { q: "Was ist der KI-Unterschied?", a: "Zenvia bietet proprietäre KI mit Flows. AgenticWhatsup schließt GPT-4 und Claude direkt an Ihre Daten an — signifikanter Unterschied." },
    ],
  },
  nl: {
    back: "← Alle vergelijkingen",
    badge: "Onafhankelijke vergelijking 2025",
    h1: "AgenticWhatsup vs Zenvia",
    subtitle: "Zenvia is de Latijns-Amerikaanse CPaaS-leider, zeer sterk in Braziliaanse en Spaanstalige markten. AgenticWhatsup is gebouwd voor Franstalige, Duitstalige en Nederlandstalige markten met geavanceerde conversationele AI.",
    verdict: "Ons oordeel",
    verdictText: "Zenvia is een uitstekende keuze als u voornamelijk in Brazilië, Mexico of Latijns-Amerika actief bent. Voor Europese Benelux-markten biedt AgenticWhatsup lokale integratie, support in uw taal en AI getraind op uw gegevens.",
    tableTitle: "Functionele vergelijking",
    rows: [
      { feature: "Europa-focus (FR/DE/CH/BE/NL)", us: true, them: false, themNote: "LatAm-focus (BR/MX)" },
      { feature: "GPT-4 / Claude conversationele AI", us: true, them: false, themNote: "Propriëtaire AI + flows" },
      { feature: "WhatsApp spraakberichten begrip", us: true, them: false },
      { feature: "Verzonden afbeeldingsanalyse", us: true, them: false },
      { feature: "Training op uw klantgegevens", us: true, them: false },
      { feature: "Merk-AI-persoonlijkheid", us: true, them: false },
      { feature: "CPaaS (SMS, spraak, e-mail)", us: false, them: true, usNote: "WhatsApp AI focus" },
      { feature: "LatAm operator dekking", us: false, them: true },
      { feature: "LGPD compliance (Brazilië)", us: false, them: true, usNote: "EU AVG" },
      { feature: "EU AVG compliance", us: true, them: false, themNote: "LGPD LatAm focus" },
      { feature: "FR / DE / NL support", us: true, them: false, themNote: "Portugees / Spaans / EN" },
      { feature: "Europa hosting", us: true, them: false, themNote: "Amerika hosting" },
      { feature: "Implementatie", us: "14 dagen", them: "Variabel per pakket" },
      { feature: "Klant-ROI", us: "8× in 90 dagen", them: "Niet gecommuniceerd" },
    ],
    whyTitle: "Waarom onze klanten AgenticWhatsup kozen boven Zenvia",
    why: [
      "Zenvia is LatAm-first — AgenticWhatsup is Europa-first (Benelux/DACH)",
      "Zenvia biedt propriëtaire AI met flows — AgenticWhatsup gebruikt GPT-4 en Claude direct",
      "Zenvia is niet gelokaliseerd voor onze markten — support en facturatie in Portugees/Spaans",
      "Zenvia transcribeert geen WhatsApp-spraakberichten — blokkerend voor Europese klanten",
      "Zenvia vereist volledige CPaaS-verbintenis — AgenticWhatsup richt zich op pure WhatsApp AI",
      "Zenvia host in Amerika — AgenticWhatsup is AVG-conform, gehost in Europa",
    ],
    forWhoTitle: "Wie moet wat kiezen?",
    forWhoUs: [
      "U opereert in Europa (FR, DE, CH, BE, NL, LU)",
      "U wilt native AVG-compliance",
      "U wilt geavanceerde AI (GPT-4/Claude)",
      "Uw prioriteit is WhatsApp, niet volledige CPaaS",
    ],
    forWhoThem: [
      "Uw hoofdmarkt is Brazilië of LatAm",
      "U heeft een volledig CPaaS nodig (SMS + spraak + e-mail)",
      "U wilt werken met een lokale LatAm-speler",
      "U bent tevreden met Portugees/Spaans support",
    ],
    ctaTitle: "Uw Europese WhatsApp verdient een Europese agent",
    ctaSubtitle: "Gratis audit 30 min — we tonen u waarom lokalisatie en AVG-compliance ertoe doen.",
    ctaPrimary: "Afspraak maken — Gratis audit",
    ctaSecondary: "Schrijf op WhatsApp",
    faqTitle: "Veelgestelde vragen",
    faqs: [
      { q: "Is Zenvia beschikbaar in Europa?", a: "Zenvia biedt diensten in Europa maar blijft voornamelijk gefocust op Latijns-Amerika. AgenticWhatsup is native Europees." },
      { q: "Heb ik een volledig CPaaS nodig of alleen WhatsApp?", a: "De meeste Europese MKB focussen op WhatsApp (80%+ verkeer) en hebben geen volledig CPaaS nodig. AgenticWhatsup is goedkoper en effectiever voor dit geval." },
      { q: "Is AgenticWhatsup AVG-conform?", a: "Ja. Europa hosting, ondertekenbare verwerkersovereenkomst, gegevensversleuteling, recht op vergetelheid. Native compliance voor uw Benelux-klanten." },
      { q: "Kunnen we migreren vanuit Zenvia?", a: "Ja. We nemen uw WhatsApp-sjablonen, FAQs en CRM-historiek over. Migratie in 14 dagen." },
      { q: "Wat is het AI-verschil?", a: "Zenvia biedt propriëtaire AI met flows. AgenticWhatsup sluit GPT-4 en Claude direct aan op uw gegevens — significant verschil." },
    ],
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
      languages: { fr: "/fr/comparatif/vs-zenvia", en: "/en/comparatif/vs-zenvia", de: "/de/comparatif/vs-zenvia", nl: "/nl/comparatif/vs-zenvia" },
      canonical: `https://agentic-whatsup.com/${locale}/comparatif/vs-zenvia`,
    },
  };
}

const waNumber = "41799394222";

export default async function VsZenviaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = t[locale] ?? t.fr;
  const m = meta[locale] ?? meta.fr;
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || `/${locale}/contact`;

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AgenticWhatsup",
    url: "https://agentic-whatsup.com",
    logo: "https://agentic-whatsup.com/logo.png",
    sameAs: ["https://wa.me/41799394222"],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const pageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: m.title,
    description: m.description,
    url: `https://agentic-whatsup.com/${locale}/comparatif/vs-zenvia`,
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />

      <Link href={`/${locale}/comparatif`} className="inline-flex items-center gap-1 text-slate-400 hover:text-wa text-sm mb-10 transition-colors">
        ← {c.back.replace("← ", "")}
      </Link>

      <div className="text-center mb-14">
        <span className="inline-block bg-wa/10 text-wa text-xs font-semibold px-3 py-1 rounded-full mb-4">{c.badge}</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "Onest, sans-serif" }}>{c.h1}</h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">{c.subtitle}</p>
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

      <div className="bg-wa/5 border border-wa/20 rounded-2xl p-6 mb-12">
        <h2 className="text-wa font-bold mb-2 text-sm uppercase tracking-wider">{c.verdict}</h2>
        <p className="text-slate-300 leading-relaxed">{c.verdictText}</p>
      </div>

      <div className="mb-12">
        <h2 className="text-white font-extrabold text-xl mb-6" style={{ fontFamily: "Onest, sans-serif" }}>{c.tableTitle}</h2>
        <div className="bg-surface border border-surface-2 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 bg-surface-2 px-5 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <div>Fonctionnalité</div>
            <div className="text-center text-wa">AgenticWhatsup ✓</div>
            <div className="text-center">Zenvia</div>
          </div>
          {c.rows.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 px-5 py-3.5 text-sm border-t border-surface-2 ${i % 2 === 0 ? "" : "bg-surface-2/30"}`}>
              <div className="text-slate-300 flex items-center">{row.feature}</div>
              <div className="text-center flex flex-col items-center justify-center">
                {typeof row.us === "boolean" ? (row.us ? <CheckCircle size={18} className="text-wa" /> : <XCircle size={18} className="text-slate-600" />) : <span className="text-wa font-semibold text-xs">{row.us}</span>}
                {row.usNote && <span className="text-slate-500 text-xs mt-0.5">{row.usNote}</span>}
              </div>
              <div className="text-center flex flex-col items-center justify-center">
                {typeof row.them === "boolean" ? (row.them ? <CheckCircle size={18} className="text-slate-400" /> : <XCircle size={18} className="text-red-500/60" />) : <span className="text-slate-400 text-xs">{row.them}</span>}
                {row.themNote && <span className="text-slate-500 text-xs mt-0.5">{row.themNote}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-white font-extrabold text-xl mb-5" style={{ fontFamily: "Onest, sans-serif" }}>{c.whyTitle}</h2>
        <div className="space-y-3">
          {c.why.map((w, i) => (
            <div key={i} className="flex items-start gap-3 bg-surface border border-surface-2 rounded-xl p-4">
              <CheckCircle size={16} className="text-wa mt-0.5 shrink-0" />
              <p className="text-slate-300 text-sm">{w}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
        <div className="bg-wa/5 border border-wa/20 rounded-2xl p-6">
          <h3 className="text-wa font-bold mb-4 text-sm">✅ AgenticWhatsup si…</h3>
          <ul className="space-y-2">{c.forWhoUs.map((item, i) => (<li key={i} className="flex items-start gap-2 text-slate-300 text-sm"><CheckCircle size={14} className="text-wa mt-0.5 shrink-0" /> {item}</li>))}</ul>
        </div>
        <div className="bg-surface border border-surface-2 rounded-2xl p-6">
          <h3 className="text-slate-400 font-bold mb-4 text-sm">⚠️ Zenvia si…</h3>
          <ul className="space-y-2">{c.forWhoThem.map((item, i) => (<li key={i} className="flex items-start gap-2 text-slate-400 text-sm"><span className="shrink-0 mt-0.5">→</span> {item}</li>))}</ul>
        </div>
      </div>

      <div className="mb-14">
        <h2 className="text-white font-extrabold text-xl mb-5" style={{ fontFamily: "Onest, sans-serif" }}>{c.faqTitle}</h2>
        <div className="space-y-3">
          {c.faqs.map((f, i) => (
            <details key={i} className="bg-surface border border-surface-2 rounded-xl p-4 group">
              <summary className="text-white font-semibold text-sm cursor-pointer list-none flex justify-between items-center">
                {f.q}<span className="text-wa ml-4 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>

      <div className="bg-wa/5 border border-wa/20 rounded-2xl p-10 text-center">
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
