import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, CheckCircle, XCircle, MessageCircle } from "lucide-react";
import FAQAccordion from "@/components/shared/FAQAccordion";

const meta: Record<string, { title: string; description: string }> = {
  fr: { title: "AgenticWhatsup vs Respond.io — Comparatif 2025 | Spécialiste WhatsApp IA", description: "AgenticWhatsup ou Respond.io ? Respond.io est un leader omnichannel enterprise. AgenticWhatsup est le spécialiste WhatsApp avec IA vocale, vision image et déploiement 14 jours. Comparaison honnête." },
  en: { title: "AgenticWhatsup vs Respond.io — Comparison 2025 | WhatsApp AI Specialist", description: "AgenticWhatsup or Respond.io? Respond.io is an enterprise omnichannel leader. AgenticWhatsup is the WhatsApp specialist with voice AI, image vision and 14-day deployment." },
  de: { title: "AgenticWhatsup vs Respond.io — Vergleich 2025 | WhatsApp KI-Spezialist", description: "AgenticWhatsup oder Respond.io? Respond.io ist ein Enterprise-Omnichannel-Leader. AgenticWhatsup ist der WhatsApp-Spezialist mit Sprach-KI und Bildanalyse." },
  nl: { title: "AgenticWhatsup vs Respond.io — Vergelijking 2025 | WhatsApp AI-specialist", description: "AgenticWhatsup of Respond.io? Respond.io is een enterprise omnichannel leider. AgenticWhatsup is de WhatsApp-specialist met spraak-AI en beeldanalyse." },
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
    h1: "AgenticWhatsup vs Respond.io",
    subtitle: "Respond.io est une référence enterprise omnichannel — solide sur l'échelle, générique sur WhatsApp. AgenticWhatsup est 100% WhatsApp avec IA native. Deux philosophies, deux usages.",
    verdict: "Notre verdict",
    verdictText: "Respond.io est excellent si vous gérez déjà 5+ canaux (email, SMS, chat, WhatsApp, LINE, Telegram) avec une grande équipe support. AgenticWhatsup gagne dès que WhatsApp est votre canal prioritaire et que vous voulez une vraie IA qui comprend vocaux, images et contexte — sans payer pour des canaux inutilisés.",
    tableTitle: "Comparatif fonctionnel",
    rows: [
      { feature: "Spécialiste WhatsApp pur", us: true, them: false, themNote: "10+ canaux supportés" },
      { feature: "IA conversationnelle GPT-4 / Claude", us: true, them: false, themNote: "IA basique + flows" },
      { feature: "Compréhension des vocaux WhatsApp", us: true, them: false },
      { feature: "Analyse d'image native", us: true, them: false },
      { feature: "Formation sur vos données client", us: true, them: false, themNote: "Templates génériques" },
      { feature: "Personnalité de marque IA", us: true, them: false },
      { feature: "Omnichannel (email, SMS, Messenger…)", us: false, them: true, usNote: "WhatsApp uniquement" },
      { feature: "Inbox multi-agents humains", us: false, them: true },
      { feature: "Workflows visuels complexes", us: false, them: true, usNote: "IA autonome, pas de flows" },
      { feature: "Support FR / DE / NL dédié", us: true, them: false, themNote: "Anglais principal" },
      { feature: "Déploiement", us: "14 jours", them: "4-8 semaines (setup enterprise)" },
      { feature: "Cible", us: "PME ambitieuses", them: "Enterprise 50+ agents" },
      { feature: "ROI moyen client", us: "8× en 90j", them: "Non communiqué" },
    ],
    whyTitle: "Pourquoi nos clients ont choisi AgenticWhatsup plutôt que Respond.io",
    why: [
      "Respond.io est un couteau suisse omnichannel — AgenticWhatsup est un scalpel WhatsApp",
      "Respond.io ne transcrit pas les vocaux WhatsApp — AgenticWhatsup les comprend nativement",
      "Respond.io ne peut pas analyser la photo d'un client — AgenticWhatsup décrit et répond",
      "Respond.io est pensé pour 50+ agents humains — AgenticWhatsup remplace l'équipe support",
      "Respond.io demande 4-8 semaines de setup — AgenticWhatsup est live en 14 jours",
      "Respond.io a un support anglais principalement — nos clients parlent FR/DE/NL",
    ],
    forWhoTitle: "Qui devrait choisir quoi ?",
    forWhoUs: [
      "WhatsApp est votre canal principal (60%+ du trafic)",
      "Vous recevez vocaux, photos, messages complexes",
      "Vous cherchez une IA autonome pas un inbox d'équipe",
      "Vous ciblez les marchés francophones, germanophones ou néerlandophones",
    ],
    forWhoThem: [
      "Vous gérez 5+ canaux messagerie simultanés",
      "Vous avez une équipe support de 20+ agents",
      "Vous êtes une grande entreprise avec gouvernance complexe",
      "Vous préférez des workflows visuels à une IA autonome",
    ],
    ctaTitle: "WhatsApp mérite un spécialiste",
    ctaSubtitle: "Audit gratuit 30 min — on vous montre la différence entre un outil omnichannel et un agent WhatsApp dédié.",
    ctaPrimary: "Prendre RDV — Audit gratuit",
    ctaSecondary: "Écrire sur WhatsApp",
    faqTitle: "Questions fréquentes",
    faqs: [
      { q: "AgenticWhatsup peut-il remplacer Respond.io pour WhatsApp uniquement ?", a: "Oui. Si WhatsApp représente plus de 60% de vos conversations, AgenticWhatsup remplace avantageusement Respond.io avec une IA plus avancée, à un prix plus accessible et sans canaux inutilisés." },
      { q: "Respond.io a-t-il une IA comparable ?", a: "Respond.io propose un module IA basique basé sur des flows et des templates. AgenticWhatsup utilise GPT-4 et Claude avec formation sur vos données — un écart significatif sur la compréhension des vocaux, images et contextes complexes." },
      { q: "Combien de temps pour déployer AgenticWhatsup ?", a: "14 jours en moyenne pour un agent opérationnel formé sur votre entreprise, contre 4 à 8 semaines de setup enterprise pour Respond.io." },
      { q: "Gérez-vous plusieurs canaux comme Respond.io ?", a: "Non. Nous sommes volontairement mono-canal WhatsApp. Cette spécialisation nous permet d'offrir des fonctionnalités impossibles sur un outil généraliste : vocaux, vision image, personnalité de marque native." },
      { q: "Quel est le ROI moyen ?", a: "ROI moyen de 8× sur 90 jours mesuré chez nos clients. Le ROI dépend du volume de messages et du panier moyen — audit gratuit pour chiffrer sur votre cas." },
    ],
  },
  en: {
    back: "← All comparisons",
    badge: "Independent comparison 2025",
    h1: "AgenticWhatsup vs Respond.io",
    subtitle: "Respond.io is an enterprise omnichannel reference — strong on scale, generic on WhatsApp. AgenticWhatsup is 100% WhatsApp with native AI. Two philosophies, two use cases.",
    verdict: "Our verdict",
    verdictText: "Respond.io is excellent if you already manage 5+ channels (email, SMS, chat, WhatsApp, LINE, Telegram) with a large support team. AgenticWhatsup wins the moment WhatsApp is your priority channel and you want real AI that understands voice, images and context — without paying for unused channels.",
    tableTitle: "Functional comparison",
    rows: [
      { feature: "Pure WhatsApp specialist", us: true, them: false, themNote: "10+ channels supported" },
      { feature: "GPT-4 / Claude conversational AI", us: true, them: false, themNote: "Basic AI + flows" },
      { feature: "WhatsApp voice message understanding", us: true, them: false },
      { feature: "Native image analysis", us: true, them: false },
      { feature: "Training on your client data", us: true, them: false, themNote: "Generic templates" },
      { feature: "Brand personality AI", us: true, them: false },
      { feature: "Omnichannel (email, SMS, Messenger…)", us: false, them: true, usNote: "WhatsApp only" },
      { feature: "Multi-agent human inbox", us: false, them: true },
      { feature: "Complex visual workflows", us: false, them: true, usNote: "Autonomous AI, no flows" },
      { feature: "Dedicated FR / DE / NL support", us: true, them: false, themNote: "Mainly English" },
      { feature: "Deployment", us: "14 days", them: "4-8 weeks (enterprise setup)" },
      { feature: "Target", us: "Ambitious SMBs", them: "Enterprise 50+ agents" },
      { feature: "Average client ROI", us: "8× in 90 days", them: "Not disclosed" },
    ],
    whyTitle: "Why our clients chose AgenticWhatsup over Respond.io",
    why: [
      "Respond.io is an omnichannel Swiss army knife — AgenticWhatsup is a WhatsApp scalpel",
      "Respond.io doesn't transcribe WhatsApp voice messages — AgenticWhatsup understands them natively",
      "Respond.io cannot analyse a client photo — AgenticWhatsup describes and responds",
      "Respond.io is built for 50+ human agents — AgenticWhatsup replaces the support team",
      "Respond.io takes 4-8 weeks of setup — AgenticWhatsup is live in 14 days",
      "Respond.io offers English-first support — our clients need FR/DE/NL",
    ],
    forWhoTitle: "Who should choose what?",
    forWhoUs: [
      "WhatsApp is your main channel (60%+ of traffic)",
      "You receive voice, photos, complex messages",
      "You want autonomous AI not a team inbox",
      "You target French, German or Dutch-speaking markets",
    ],
    forWhoThem: [
      "You manage 5+ messaging channels simultaneously",
      "You have a support team of 20+ agents",
      "You're a large enterprise with complex governance",
      "You prefer visual workflows to autonomous AI",
    ],
    ctaTitle: "WhatsApp deserves a specialist",
    ctaSubtitle: "Free 30-min audit — we show you the difference between an omnichannel tool and a dedicated WhatsApp agent.",
    ctaPrimary: "Book a call — Free audit",
    ctaSecondary: "Write on WhatsApp",
    faqTitle: "Frequently asked questions",
    faqs: [
      { q: "Can AgenticWhatsup replace Respond.io for WhatsApp only?", a: "Yes. If WhatsApp accounts for more than 60% of your conversations, AgenticWhatsup is a strong replacement with more advanced AI, more accessible pricing and no unused channels." },
      { q: "Does Respond.io have comparable AI?", a: "Respond.io offers a basic AI module based on flows and templates. AgenticWhatsup uses GPT-4 and Claude trained on your data — a significant gap on voice, image and complex context understanding." },
      { q: "How long to deploy AgenticWhatsup?", a: "14 days on average for a live agent trained on your company, versus 4-8 weeks of enterprise setup for Respond.io." },
      { q: "Do you support multiple channels like Respond.io?", a: "No. We're deliberately WhatsApp-only. This focus enables features impossible on a generalist tool: voice, image vision, native brand personality." },
      { q: "What's the average ROI?", a: "8× average ROI over 90 days measured with our clients. ROI depends on message volume and average order ?? — free audit to estimate on your case." },
    ],
  },
  de: {
    back: "← Alle Vergleiche",
    badge: "Unabhängiger Vergleich 2025",
    h1: "AgenticWhatsup vs Respond.io",
    subtitle: "Respond.io ist eine Enterprise-Omnichannel-Referenz — stark im Skalieren, generisch bei WhatsApp. AgenticWhatsup ist 100% WhatsApp mit nativer KI. Zwei Philosophien, zwei Anwendungsfälle.",
    verdict: "Unser Urteil",
    verdictText: "Respond.io ist hervorragend, wenn Sie bereits 5+ Kanäle mit einem großen Support-Team verwalten. AgenticWhatsup gewinnt, sobald WhatsApp Ihr Hauptkanal ist und Sie eine echte KI möchten, die Sprache, Bilder und Kontext versteht.",
    tableTitle: "Funktionsvergleich",
    rows: [
      { feature: "Reiner WhatsApp-Spezialist", us: true, them: false, themNote: "10+ Kanäle unterstützt" },
      { feature: "GPT-4 / Claude Konversations-KI", us: true, them: false, themNote: "Basis-KI + Flows" },
      { feature: "WhatsApp-Sprachnachrichtenverständnis", us: true, them: false },
      { feature: "Native Bildanalyse", us: true, them: false },
      { feature: "Training auf Ihren Kundendaten", us: true, them: false, themNote: "Generische Templates" },
      { feature: "Marken-KI-Persönlichkeit", us: true, them: false },
      { feature: "Omnichannel (E-Mail, SMS, Messenger…)", us: false, them: true, usNote: "Nur WhatsApp" },
      { feature: "Multi-Agent-Posteingang", us: false, them: true },
      { feature: "Komplexe visuelle Workflows", us: false, them: true, usNote: "Autonome KI, keine Flows" },
      { feature: "Dedizierter FR / DE / NL Support", us: true, them: false, themNote: "Hauptsächlich Englisch" },
      { feature: "Bereitstellung", us: "14 Tage", them: "4-8 Wochen (Enterprise-Setup)" },
      { feature: "Zielgruppe", us: "Ambitionierte KMU", them: "Enterprise 50+ Agenten" },
      { feature: "Kunden-ROI", us: "8× in 90 Tagen", them: "Nicht kommuniziert" },
    ],
    whyTitle: "Warum unsere Kunden AgenticWhatsup statt Respond.io wählten",
    why: [
      "Respond.io ist ein Omnichannel-Schweizer-Taschenmesser — AgenticWhatsup ist ein WhatsApp-Skalpell",
      "Respond.io transkribiert keine WhatsApp-Sprachnachrichten — AgenticWhatsup versteht sie nativ",
      "Respond.io kann kein Kundenfoto analysieren — AgenticWhatsup beschreibt und antwortet",
      "Respond.io ist für 50+ menschliche Agenten gebaut — AgenticWhatsup ersetzt das Support-Team",
      "Respond.io braucht 4-8 Wochen Setup — AgenticWhatsup ist in 14 Tagen live",
      "Respond.io bietet englischsprachigen Support — unsere Kunden sprechen FR/DE/NL",
    ],
    forWhoTitle: "Wer sollte was wählen?",
    forWhoUs: [
      "WhatsApp ist Ihr Hauptkanal (60%+ des Traffics)",
      "Sie erhalten Sprache, Fotos, komplexe Nachrichten",
      "Sie möchten autonome KI, keinen Team-Posteingang",
      "Sie zielen auf DACH- oder Benelux-Märkte",
    ],
    forWhoThem: [
      "Sie verwalten 5+ Messaging-Kanäle gleichzeitig",
      "Sie haben ein Support-Team von 20+ Agenten",
      "Sie sind ein Großunternehmen mit komplexer Governance",
      "Sie bevorzugen visuelle Workflows gegenüber autonomer KI",
    ],
    ctaTitle: "WhatsApp verdient einen Spezialisten",
    ctaSubtitle: "Kostenloses 30-Min-Audit — wir zeigen Ihnen den Unterschied zwischen einem Omnichannel-Tool und einem dedizierten WhatsApp-Agenten.",
    ctaPrimary: "Termin vereinbaren — Kostenloses Audit",
    ctaSecondary: "Auf WhatsApp schreiben",
    faqTitle: "Häufig gestellte Fragen",
    faqs: [
      { q: "Kann AgenticWhatsup Respond.io nur für WhatsApp ersetzen?", a: "Ja. Wenn WhatsApp mehr als 60% Ihrer Gespräche ausmacht, ist AgenticWhatsup ein starker Ersatz mit fortschrittlicherer KI und zugänglicheren Preisen." },
      { q: "Hat Respond.io vergleichbare KI?", a: "Respond.io bietet ein Basis-KI-Modul mit Flows und Templates. AgenticWhatsup verwendet GPT-4 und Claude, trainiert auf Ihren Daten — ein signifikanter Unterschied." },
      { q: "Wie lange dauert die Bereitstellung von AgenticWhatsup?", a: "Durchschnittlich 14 Tage für einen live geschulten Agenten, gegenüber 4-8 Wochen Enterprise-Setup bei Respond.io." },
      { q: "Unterstützen Sie mehrere Kanäle wie Respond.io?", a: "Nein. Wir sind bewusst nur WhatsApp. Dieser Fokus ermöglicht Funktionen, die auf einem generalistischen Tool unmöglich sind." },
      { q: "Wie hoch ist der durchschnittliche ROI?", a: "8× ROI über 90 Tage bei unseren Kunden. Der ROI hängt vom Nachrichtenvolumen und durchschnittlichen Bestellwert ab — kostenloses Audit." },
    ],
  },
  nl: {
    back: "← Alle vergelijkingen",
    badge: "Onafhankelijke vergelijking 2025",
    h1: "AgenticWhatsup vs Respond.io",
    subtitle: "Respond.io is een enterprise omnichannel referentie — sterk in schaal, generiek op WhatsApp. AgenticWhatsup is 100% WhatsApp met native AI. Twee filosofieën, twee toepassingen.",
    verdict: "Ons oordeel",
    verdictText: "Respond.io is uitstekend als u al 5+ kanalen beheert met een groot supportteam. AgenticWhatsup wint zodra WhatsApp uw prioriteitskanaal is en u echte AI wilt die spraak, afbeeldingen en context begrijpt.",
    tableTitle: "Functionele vergelijking",
    rows: [
      { feature: "Pure WhatsApp specialist", us: true, them: false, themNote: "10+ kanalen ondersteund" },
      { feature: "GPT-4 / Claude conversationele AI", us: true, them: false, themNote: "Basis AI + flows" },
      { feature: "WhatsApp spraakberichten begrip", us: true, them: false },
      { feature: "Native beeldanalyse", us: true, them: false },
      { feature: "Training op uw klantgegevens", us: true, them: false, themNote: "Generieke sjablonen" },
      { feature: "Merk-AI-persoonlijkheid", us: true, them: false },
      { feature: "Omnichannel (e-mail, SMS, Messenger…)", us: false, them: true, usNote: "Alleen WhatsApp" },
      { feature: "Multi-agent inbox", us: false, them: true },
      { feature: "Complexe visuele workflows", us: false, them: true, usNote: "Autonome AI, geen flows" },
      { feature: "Dedicated FR / DE / NL support", us: true, them: false, themNote: "Voornamelijk Engels" },
      { feature: "Implementatie", us: "14 dagen", them: "4-8 weken (enterprise setup)" },
      { feature: "Doelgroep", us: "Ambitieuze MKB", them: "Enterprise 50+ agents" },
      { feature: "Klant-ROI", us: "8× in 90 dagen", them: "Niet gecommuniceerd" },
    ],
    whyTitle: "Waarom onze klanten AgenticWhatsup kozen boven Respond.io",
    why: [
      "Respond.io is een omnichannel Zwitsers zakmes — AgenticWhatsup is een WhatsApp-scalpel",
      "Respond.io transcribeert geen WhatsApp-spraakberichten — AgenticWhatsup begrijpt ze native",
      "Respond.io kan geen klantfoto analyseren — AgenticWhatsup beschrijft en reageert",
      "Respond.io is gebouwd voor 50+ menselijke agenten — AgenticWhatsup vervangt het supportteam",
      "Respond.io vereist 4-8 weken setup — AgenticWhatsup is live in 14 dagen",
      "Respond.io biedt Engelse support — onze klanten spreken FR/DE/NL",
    ],
    forWhoTitle: "Wie moet wat kiezen?",
    forWhoUs: [
      "WhatsApp is uw hoofdkanaal (60%+ verkeer)",
      "U ontvangt spraak, foto's, complexe berichten",
      "U wilt autonome AI, geen team-inbox",
      "U richt zich op Franstalige, Duitstalige of Nederlandstalige markten",
    ],
    forWhoThem: [
      "U beheert 5+ messaging-kanalen tegelijk",
      "U heeft een supportteam van 20+ agents",
      "U bent een grote onderneming met complexe governance",
      "U verkiest visuele workflows boven autonome AI",
    ],
    ctaTitle: "WhatsApp verdient een specialist",
    ctaSubtitle: "Gratis audit 30 min — we tonen u het verschil tussen een omnichannel tool en een dedicated WhatsApp-agent.",
    ctaPrimary: "Afspraak maken — Gratis audit",
    ctaSecondary: "Schrijf op WhatsApp",
    faqTitle: "Veelgestelde vragen",
    faqs: [
      { q: "Kan AgenticWhatsup Respond.io vervangen voor alleen WhatsApp?", a: "Ja. Als WhatsApp meer dan 60% van uw gesprekken vertegenwoordigt, is AgenticWhatsup een sterke vervanging met geavanceerdere AI en toegankelijkere prijzen." },
      { q: "Heeft Respond.io vergelijkbare AI?", a: "Respond.io biedt een basis AI-module op basis van flows en sjablonen. AgenticWhatsup gebruikt GPT-4 en Claude getraind op uw gegevens — een significant verschil." },
      { q: "Hoe lang duurt de implementatie van AgenticWhatsup?", a: "Gemiddeld 14 dagen voor een live agent getraind op uw bedrijf, tegenover 4-8 weken enterprise setup voor Respond.io." },
      { q: "Ondersteunt u meerdere kanalen zoals Respond.io?", a: "Nee. We zijn bewust alleen WhatsApp. Deze focus maakt functies mogelijk die onmogelijk zijn op een generalistisch tool." },
      { q: "Wat is de gemiddelde ROI?", a: "Gemiddelde ROI van 8× over 90 dagen gemeten bij onze klanten. ROI hangt af van berichtvolume en gemiddelde orderwaarde — gratis audit." },
    ],
  },
};

export async function generateStaticParams() {
  return ["fr", "en", "de", "nl"].map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = meta[locale] ?? meta.fr;
  const canonicalUrl = `https://agentic-whatsup.com/${locale}/comparatif/vs-respond-io`;
  const ogLocale = locale === "de" ? "de_DE" : locale === "nl" ? "nl_NL" : locale === "en" ? "en_US" : "fr_FR";
  return {
    title: m.title,
    description: m.description,
    keywords: "AgenticWhatsup vs Respond.io, comparatif Respond.io WhatsApp IA, Respond.io alternative, meilleur agent IA WhatsApp omnichannel",
    robots: { index: true, follow: true },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        fr: "https://agentic-whatsup.com/fr/comparatif/vs-respond-io",
        en: "https://agentic-whatsup.com/en/comparatif/vs-respond-io",
        de: "https://agentic-whatsup.com/de/comparatif/vs-respond-io",
        nl: "https://agentic-whatsup.com/nl/comparatif/vs-respond-io",
        "x-default": "https://agentic-whatsup.com/fr/comparatif/vs-respond-io",
      },
    },
    openGraph: {
      type: "article",
      locale: ogLocale,
      title: m.title,
      description: m.description,
      url: canonicalUrl,
      siteName: "AgenticWhatsup",
      images: [{ url: "https://agentic-whatsup.com/og-image.jpg", width: 1200, height: 630, alt: m.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: ["https://agentic-whatsup.com/og-image.jpg"],
    },
  };
}

const waNumber = "41799394222";

export default async function VsRespondIoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = t[locale] ?? t.fr;
  const m = meta[locale] ?? meta.fr;
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || `/${locale}/contact`;

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AgenticWhatsup",
    url: "https://agentic-whatsup.com",
    logo: { "@type": "ImageObject", url: "https://agentic-whatsup.com/logo.png", width: 200, height: 60 },
    sameAs: ["https://wa.me/41799394222"],
  };

  const pageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: m.title,
    description: m.description,
    url: `https://agentic-whatsup.com/${locale}/comparatif/vs-respond-io`,
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
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
            <div className="text-center">Respond.io</div>
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
          <h3 className="text-slate-400 font-bold mb-4 text-sm">⚠️ Respond.io si…</h3>
          <ul className="space-y-2">{c.forWhoThem.map((item, i) => (<li key={i} className="flex items-start gap-2 text-slate-400 text-sm"><span className="shrink-0 mt-0.5">→</span> {item}</li>))}</ul>
        </div>
      </div>

      <div className="mb-14">
        <h2 className="text-white font-extrabold text-xl mb-5" style={{ fontFamily: "Onest, sans-serif" }}>{c.faqTitle}</h2>
        <FAQAccordion items={c.faqs.map((f) => ({ question: f.q, answer: f.a }))} />
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
