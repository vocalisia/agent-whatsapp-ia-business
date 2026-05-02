import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/shared/FAQAccordion";
import { Calendar, CheckCircle, XCircle, MessageCircle } from "lucide-react";

const meta: Record<string, { title: string; description: string }> = {
  fr: { title: "AgenticWhatsup vs Wati — Comparatif complet 2025 | Meilleur agent IA WhatsApp", description: "AgenticWhatsup ou Wati ? Comparez les fonctionnalités, prix et résultats. AgenticWhatsup : IA vocale, vision par image, ROI 8× garanti. Wati : workflows rigides, pas de vraie IA conversationnelle." },
  en: { title: "AgenticWhatsup vs Wati — Full comparison 2025 | Best WhatsApp AI Agent", description: "AgenticWhatsup or Wati? Compare features, pricing and results. AgenticWhatsup: voice AI, image vision, guaranteed 8× ROI. Wati: rigid workflows, no real conversational AI." },
  de: { title: "AgenticWhatsup vs Wati — Vollständiger Vergleich 2025 | Bester WhatsApp KI-Agent", description: "AgenticWhatsup oder Wati? Vergleichen Sie Funktionen, Preise und Ergebnisse. AgenticWhatsup: Sprach-KI, Bildanalyse, garantierter 8× ROI." },
  nl: { title: "AgenticWhatsup vs Wati — Volledige vergelijking 2025 | Beste WhatsApp AI-agent", description: "AgenticWhatsup of Wati? Vergelijk functies, prijzen en resultaten. AgenticWhatsup: spraak-AI, beeldanalyse, gegarandeerde 8× ROI." },
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
    h1: "AgenticWhatsup vs Wati",
    subtitle: "Wati est une plateforme WhatsApp Business solide pour les équipes. AgenticWhatsup est un agent IA autonome qui travaille à votre place. Ce sont deux produits fondamentalement différents.",
    verdict: "Notre verdict",
    verdictText: "Wati excelle pour les équipes qui veulent centraliser leurs messages WhatsApp avec des workflows simples. AgenticWhatsup surpasse Wati dès que vous voulez une vraie IA conversationnelle qui comprend le contexte, les vocaux, les images et s'améliore dans le temps.",
    tableTitle: "Comparatif fonctionnel",
    rows: [
      { feature: "IA conversationnelle (LLM)", us: true, them: false, themNote: "Chatbot à règles uniquement" },
      { feature: "Compréhension des vocaux WhatsApp", us: true, them: false },
      { feature: "Analyse des images envoyées", us: true, them: false },
      { feature: "Mémoire de conversation longue", us: true, them: false },
      { feature: "Détection d'intention et contexte", us: true, them: false, themNote: "Mots-clés uniquement" },
      { feature: "Prise de RDV automatique", us: true, them: true },
      { feature: "Intégration CRM", us: true, them: true },
      { feature: "Campagnes WhatsApp", us: true, them: true },
      { feature: "Inbox partagée équipe", us: false, them: true, usNote: "Pas notre cœur de métier" },
      { feature: "Multi-agent humain", us: false, them: true },
      { feature: "Personnalité de marque IA", us: true, them: false },
      { feature: "Formation sur vos données", us: true, them: false },
      { feature: "Déploiement", us: "14 jours", them: "Semaines (setup complexe)" },
      { feature: "ROI moyen client", us: "8× en 90j", them: "Non communiqué" },
      { feature: "Support", us: "Dédié FR/EN/DE/NL", them: "Anglais, ticketing" },
    ],
    whyTitle: "Pourquoi nos clients ont choisi AgenticWhatsup plutôt que Wati",
    why: [
      "Wati répond à des mots-clés — AgenticWhatsup comprend vraiment le sens de chaque message",
      "Wati ne comprend pas les messages vocaux — AgenticWhatsup les transcrit et répond au contenu",
      "Wati ne peut pas analyser une photo de produit — AgenticWhatsup décrit, identifie et répond",
      "Wati nécessite une configuration technique longue — AgenticWhatsup est opérationnel en 14 jours",
      "Wati est conçu pour des équipes humaines — AgenticWhatsup travaille même quand vous dormez",
      "Nos clients en DACH et Benelux préfèrent un support FR/DE/NL — inexistant chez Wati",
    ],
    forWhoTitle: "Qui devrait choisir quoi ?",
    forWhoUs: [
      "Vous voulez automatiser 80%+ des conversations",
      "Vous recevez des vocaux et images de clients",
      "Vous voulez une IA qui apprend de vos données",
      "Votre équipe est petite ou absente hors heures",
      "Vous ciblez les marchés FR / DE / CH / BE / NL",
    ],
    forWhoThem: [
      "Vous avez une grande équipe de sales humains",
      "Vous voulez centraliser tous vos chats dans un inbox",
      "Vous n'avez pas besoin d'IA avancée",
      "Vos besoins sont uniquement en anglais",
    ],
    ctaTitle: "Convaincu ? Parlons de votre cas",
    ctaSubtitle: "Audit gratuit de 30 min — on vous montre ce que ferait l'agent sur votre volume de messages.",
    ctaPrimary: "Prendre RDV — Audit gratuit",
    ctaSecondary: "Écrire sur WhatsApp",
    faqTitle: "Questions fréquentes",
    faqs: [
      { q: "Wati peut-il comprendre les messages vocaux WhatsApp ?", a: "Non. Wati ne transcrit pas les messages vocaux. Avec AgenticWhatsup, chaque vocal est transcrit et traité par le LLM comme un message texte normal." },
      { q: "Wati a-t-il une vraie IA conversationnelle ?", a: "Wati utilise des workflows et triggers pré-définis. AgenticWhatsup utilise GPT-4o/Claude pour comprendre le contexte réel de chaque conversation." },
      { q: "Peut-on migrer de Wati vers AgenticWhatsup ?", a: "Oui. Nous récupérons vos templates, FAQs et historique CRM pour former l'agent. Migration accompagnée en 14 jours." },
      { q: "Wati est-il conforme RGPD pour l'Europe ?", a: "Wati propose des options EU mais AgenticWhatsup est natif EU avec DPA fourni et chiffrement AES-256 inclus dès le départ." },
    ],
  },
  en: {
    back: "← All comparisons",
    badge: "Independent comparison 2025",
    h1: "AgenticWhatsup vs Wati",
    subtitle: "Wati is a solid WhatsApp Business platform for teams. AgenticWhatsup is an autonomous AI agent that works on your behalf. These are two fundamentally different products.",
    verdict: "Our verdict",
    verdictText: "Wati excels for teams wanting to centralise their WhatsApp messages with simple workflows. AgenticWhatsup outperforms Wati the moment you want real conversational AI that understands context, voice messages, images and improves over time.",
    tableTitle: "Functional comparison",
    rows: [
      { feature: "Conversational AI (LLM)", us: true, them: false, themNote: "Rule-based chatbot only" },
      { feature: "WhatsApp voice message understanding", us: true, them: false },
      { feature: "Sent image analysis", us: true, them: false },
      { feature: "Long conversation memory", us: true, them: false },
      { feature: "Intent detection and context", us: true, them: false, themNote: "Keywords only" },
      { feature: "Automatic appointment booking", us: true, them: true },
      { feature: "CRM integration", us: true, them: true },
      { feature: "WhatsApp campaigns", us: true, them: true },
      { feature: "Shared team inbox", us: false, them: true, usNote: "Not our core focus" },
      { feature: "Multi-human agent", us: false, them: true },
      { feature: "Brand personality AI", us: true, them: false },
      { feature: "Training on your data", us: true, them: false },
      { feature: "Deployment", us: "14 days", them: "Weeks (complex setup)" },
      { feature: "Average client ROI", us: "8× in 90 days", them: "Not disclosed" },
      { feature: "Support", us: "Dedicated FR/EN/DE/NL", them: "English, ticketing" },
    ],
    whyTitle: "Why our clients chose AgenticWhatsup over Wati",
    why: [
      "Wati matches keywords — AgenticWhatsup truly understands the meaning of each message",
      "Wati doesn't understand voice messages — AgenticWhatsup transcribes them and responds to the content",
      "Wati cannot analyse a product photo — AgenticWhatsup describes, identifies and responds",
      "Wati requires lengthy technical setup — AgenticWhatsup is live in 14 days",
      "Wati is designed for human teams — AgenticWhatsup works even while you sleep",
      "Our DACH and Benelux clients need FR/DE/NL support — non-existent at Wati",
    ],
    forWhoTitle: "Who should choose what?",
    forWhoUs: [
      "You want to automate 80%+ of conversations",
      "You receive voice messages and images from clients",
      "You want AI that learns from your data",
      "Your team is small or absent out of hours",
      "You target FR / DE / CH / BE / NL markets",
    ],
    forWhoThem: [
      "You have a large human sales team",
      "You want to centralise all your chats in one inbox",
      "You don't need advanced AI",
      "Your needs are exclusively in English",
    ],
    ctaTitle: "Convinced? Let's discuss your case",
    ctaSubtitle: "Free 30-min audit — we show you what the agent would do with your message volume.",
    faqTitle: "Häufig gestellte Fragen",
    faqs: [],
    ctaPrimary: "Book a call — Free audit",
    ctaSecondary: "Write on WhatsApp",
  },
  de: {
    back: "← Alle Vergleiche",
    badge: "Unabhängiger Vergleich 2025",
    h1: "AgenticWhatsup vs Wati",
    subtitle: "Wati ist eine solide WhatsApp-Business-Plattform für Teams. AgenticWhatsup ist ein autonomer KI-Agent, der für Sie arbeitet. Das sind zwei grundlegend verschiedene Produkte.",
    verdict: "Unser Urteil",
    verdictText: "Wati überzeugt für Teams, die ihre WhatsApp-Nachrichten mit einfachen Workflows zentralisieren möchten. AgenticWhatsup übertrifft Wati, sobald Sie eine echte konversationelle KI möchten, die Kontext, Sprachnachrichten und Bilder versteht.",
    tableTitle: "Funktionsvergleich",
    rows: [
      { feature: "Konversations-KI (LLM)", us: true, them: false, themNote: "Nur regelbasierter Chatbot" },
      { feature: "Verständnis von WhatsApp-Sprachnachrichten", us: true, them: false },
      { feature: "Analyse gesendeter Bilder", us: true, them: false },
      { feature: "Langes Gesprächsgedächtnis", us: true, them: false },
      { feature: "Absichtserkennung und Kontext", us: true, them: false, themNote: "Nur Schlüsselwörter" },
      { feature: "Automatische Terminbuchung", us: true, them: true },
      { feature: "CRM-Integration", us: true, them: true },
      { feature: "WhatsApp-Kampagnen", us: true, them: true },
      { feature: "Geteilter Team-Posteingang", us: false, them: true, usNote: "Nicht unser Kerngeschäft" },
      { feature: "Multi-menschlicher Agent", us: false, them: true },
      { feature: "Marken-KI-Persönlichkeit", us: true, them: false },
      { feature: "Training auf Ihren Daten", us: true, them: false },
      { feature: "Bereitstellung", us: "14 Tage", them: "Wochen (komplexes Setup)" },
      { feature: "Durchschnittlicher Kunden-ROI", us: "8× in 90 Tagen", them: "Nicht kommuniziert" },
      { feature: "Support", us: "Dediziert FR/EN/DE/NL", them: "Englisch, Ticketing" },
    ],
    whyTitle: "Warum unsere Kunden AgenticWhatsup statt Wati wählten",
    why: [
      "Wati reagiert auf Schlüsselwörter — AgenticWhatsup versteht den Sinn jeder Nachricht wirklich",
      "Wati versteht keine Sprachnachrichten — AgenticWhatsup transkribiert und antwortet auf den Inhalt",
      "Wati kann kein Produktfoto analysieren — AgenticWhatsup beschreibt, identifiziert und antwortet",
      "Wati erfordert langwierige technische Einrichtung — AgenticWhatsup ist in 14 Tagen live",
      "Wati ist für menschliche Teams konzipiert — AgenticWhatsup arbeitet auch wenn Sie schlafen",
      "Unsere DACH-Kunden bevorzugen FR/DE/NL-Support — bei Wati nicht vorhanden",
    ],
    forWhoTitle: "Wer sollte was wählen?",
    forWhoUs: [
      "Sie möchten 80%+ der Gespräche automatisieren",
      "Sie erhalten Sprachnachrichten und Bilder von Kunden",
      "Sie möchten KI, die aus Ihren Daten lernt",
      "Ihr Team ist klein oder außerhalb der Geschäftszeiten nicht verfügbar",
      "Sie zielen auf FR / DE / CH / BE / NL Märkte",
    ],
    forWhoThem: [
      "Sie haben ein großes menschliches Vertriebsteam",
      "Sie möchten alle Chats in einem Posteingang zentralisieren",
      "Sie benötigen keine fortschrittliche KI",
      "Ihr Bedarf ist ausschließlich auf Englisch",
    ],
    ctaTitle: "Überzeugt? Lassen Sie uns über Ihren Fall sprechen",
    ctaSubtitle: "Kostenloses 30-Min-Audit — wir zeigen Ihnen, was der Agent mit Ihrem Nachrichtenvolumen tun würde.",
    faqTitle: "Veelgestelde vragen",
    faqs: [],
    ctaPrimary: "Termin vereinbaren — Kostenloses Audit",
    ctaSecondary: "Auf WhatsApp schreiben",
  },
  nl: {
    back: "← Alle vergelijkingen",
    badge: "Onafhankelijke vergelijking 2025",
    h1: "AgenticWhatsup vs Wati",
    subtitle: "Wati is een solide WhatsApp Business-platform voor teams. AgenticWhatsup is een autonome AI-agent die voor u werkt. Dit zijn twee fundamenteel verschillende producten.",
    verdict: "Ons oordeel",
    verdictText: "Wati blinkt uit voor teams die hun WhatsApp-berichten willen centraliseren met eenvoudige workflows. AgenticWhatsup overtreft Wati zodra u een echte conversationele AI wilt die context, spraakberichten en afbeeldingen begrijpt.",
    tableTitle: "Functionele vergelijking",
    rows: [
      { feature: "Conversationele AI (LLM)", us: true, them: false, themNote: "Alleen op regels gebaseerde chatbot" },
      { feature: "Begrip van WhatsApp-spraakberichten", us: true, them: false },
      { feature: "Analyse van verzonden afbeeldingen", us: true, them: false },
      { feature: "Lang gespreksgeheugen", us: true, them: false },
      { feature: "Intentiedetectie en context", us: true, them: false, themNote: "Alleen trefwoorden" },
      { feature: "Automatische afsprakenboeking", us: true, them: true },
      { feature: "CRM-integratie", us: true, them: true },
      { feature: "WhatsApp-campagnes", us: true, them: true },
      { feature: "Gedeelde team-inbox", us: false, them: true, usNote: "Niet onze kernactiviteit" },
      { feature: "Multi-menselijke agent", us: false, them: true },
      { feature: "Merk-AI-persoonlijkheid", us: true, them: false },
      { feature: "Training op uw gegevens", us: true, them: false },
      { feature: "Implementatie", us: "14 dagen", them: "Weken (complexe setup)" },
      { feature: "Gemiddeld klant-ROI", us: "8× in 90 dagen", them: "Niet gecommuniceerd" },
      { feature: "Ondersteuning", us: "Dedicated FR/EN/DE/NL", them: "Engels, ticketing" },
    ],
    whyTitle: "Waarom onze klanten AgenticWhatsup kozen boven Wati",
    why: [
      "Wati reageert op trefwoorden — AgenticWhatsup begrijpt werkelijk de betekenis van elk bericht",
      "Wati begrijpt geen spraakberichten — AgenticWhatsup transcribeert ze en reageert op de inhoud",
      "Wati kan geen productfoto analyseren — AgenticWhatsup beschrijft, identificeert en reageert",
      "Wati vereist langdurige technische setup — AgenticWhatsup is in 14 dagen live",
      "Wati is ontworpen voor menselijke teams — AgenticWhatsup werkt ook terwijl u slaapt",
      "Onze Benelux-klanten verkiezen FR/DE/NL-support — niet aanwezig bij Wati",
    ],
    forWhoTitle: "Wie moet wat kiezen?",
    forWhoUs: [
      "U wilt 80%+ van de gesprekken automatiseren",
      "U ontvangt spraakberichten en afbeeldingen van klanten",
      "U wilt AI die leert van uw gegevens",
      "Uw team is klein of afwezig buiten kantooruren",
      "U richt zich op FR / DE / CH / BE / NL markten",
    ],
    forWhoThem: [
      "U heeft een groot menselijk verkoopteam",
      "U wilt alle chats centraliseren in één inbox",
      "U heeft geen geavanceerde AI nodig",
      "Uw behoeften zijn uitsluitend in het Engels",
    ],
    ctaTitle: "Overtuigd? Laten we uw geval bespreken",
    faqTitle: "Questions fréquentes",
    faqs: [],
    ctaSubtitle: "Gratis audit van 30 min — we tonen u wat de agent zou doen met uw berichtvolume.",
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
      canonical: `https://agentic-whatsup.com/${locale}/comparatif/vs-wati`,
      languages: {
        fr: "https://agentic-whatsup.com/fr/comparatif/vs-wati",
        en: "https://agentic-whatsup.com/en/comparatif/vs-wati",
        de: "https://agentic-whatsup.com/de/comparatif/vs-wati",
        nl: "https://agentic-whatsup.com/nl/comparatif/vs-wati",
        "x-default": "https://agentic-whatsup.com/fr/comparatif/vs-wati",
      },
    },
  };
}

const waNumber = "41799394222";

export default async function VsWatiPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = t[locale] ?? t.fr;
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || `/${locale}/contact`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: (meta[locale] ?? meta.fr).title,
    description: (meta[locale] ?? meta.fr).description,
    url: `https://agentic-whatsup.com/${locale}/comparatif/vs-wati`,
  };


  const faqLd = c.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}

      <Link href={`/${locale}/comparatif`} className="inline-flex items-center gap-1 text-slate-400 hover:text-wa text-sm mb-10 transition-colors">
        <ArrowLeft size={14} /> {c.back}
      </Link>

      {/* Hero */}
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

      {/* Verdict */}
      <div className="bg-wa/5 border border-wa/20 rounded-2xl p-6 mb-12">
        <h2 className="text-wa font-bold mb-2 text-sm uppercase tracking-wider">{c.verdict}</h2>
        <p className="text-slate-300 leading-relaxed">{c.verdictText}</p>
      </div>

      {/* Comparison table */}
      <div className="mb-12">
        <h2 className="text-white font-extrabold text-xl mb-6" style={{ fontFamily: "Onest, sans-serif" }}>{c.tableTitle}</h2>
        <div className="bg-surface border border-surface-2 rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-surface-2 px-5 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <div>Fonctionnalité</div>
            <div className="text-center text-wa">AgenticWhatsup ✓</div>
            <div className="text-center">Wati</div>
          </div>
          {c.rows.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 px-5 py-3.5 text-sm border-t border-surface-2 ${i % 2 === 0 ? "" : "bg-surface-2/30"}`}>
              <div className="text-slate-300 flex items-center">{row.feature}</div>
              <div className="text-center flex flex-col items-center justify-center">
                {typeof row.us === "boolean" ? (
                  row.us ? <CheckCircle size={18} className="text-wa" /> : <XCircle size={18} className="text-slate-600" />
                ) : (
                  <span className="text-wa font-semibold text-xs">{row.us}</span>
                )}
                {row.usNote && <span className="text-slate-500 text-xs mt-0.5">{row.usNote}</span>}
              </div>
              <div className="text-center flex flex-col items-center justify-center">
                {typeof row.them === "boolean" ? (
                  row.them ? <CheckCircle size={18} className="text-slate-400" /> : <XCircle size={18} className="text-red-500/60" />
                ) : (
                  <span className="text-slate-400 text-xs">{row.them}</span>
                )}
                {row.themNote && <span className="text-slate-500 text-xs mt-0.5">{row.themNote}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why us */}
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

      {/* For who */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
        <div className="bg-wa/5 border border-wa/20 rounded-2xl p-6">
          <h3 className="text-wa font-bold mb-4 text-sm">✅ AgenticWhatsup si…</h3>
          <ul className="space-y-2">
            {c.forWhoUs.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                <CheckCircle size={14} className="text-wa mt-0.5 shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-surface border border-surface-2 rounded-2xl p-6">
          <h3 className="text-slate-400 font-bold mb-4 text-sm">⚠️ Wati si…</h3>
          <ul className="space-y-2">
            {c.forWhoThem.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                <span className="shrink-0 mt-0.5">→</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}

      {c.faqs.length > 0 && (
        <div className="mb-14">
          <h2 className="text-white font-extrabold text-xl mb-5" style={{ fontFamily: "Onest, sans-serif" }}>{c.faqTitle}</h2>
          <FAQAccordion items={c.faqs.map((f) => ({ question: f.q, answer: f.a }))} emitSchema={false} />
        </div>
      )}

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

function ArrowLeft({ size }: { size: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>;
}
