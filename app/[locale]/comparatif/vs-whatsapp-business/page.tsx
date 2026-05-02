import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/shared/FAQAccordion";
import { Calendar, CheckCircle, XCircle, MessageCircle } from "lucide-react";

const meta: Record<string, { title: string; description: string }> = {
  fr: { title: "AgenticWhatsup vs WhatsApp Business — Comparatif 2025 | Automatisation IA", description: "WhatsApp Business natif est gratuit mais limité. AgenticWhatsup ajoute une vraie IA conversationnelle, vocaux, vision image, prise de RDV et intégrations CRM. ROI 8× garanti." },
  en: { title: "AgenticWhatsup vs WhatsApp Business — Comparison 2025 | AI Automation", description: "Native WhatsApp Business is free but limited. AgenticWhatsup adds real conversational AI, voice, image vision, appointment booking and CRM integrations. Guaranteed 8× ROI." },
  de: { title: "AgenticWhatsup vs WhatsApp Business — Vergleich 2025 | KI-Automatisierung", description: "Natives WhatsApp Business ist kostenlos aber begrenzt. AgenticWhatsup fügt echte konversationelle KI, Sprache, Bildanalyse, Terminbuchung und CRM-Integrationen hinzu." },
  nl: { title: "AgenticWhatsup vs WhatsApp Business — Vergelijking 2025 | AI-automatisering", description: "Native WhatsApp Business is gratis maar beperkt. AgenticWhatsup voegt echte conversationele AI, spraak, beeldanalyse, afspraken en CRM-integraties toe." },
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
    h1: "AgenticWhatsup vs WhatsApp Business natif",
    subtitle: "WhatsApp Business (l'app gratuite de Meta) convient pour les très petites entreprises qui répondent manuellement. Dès que vous voulez automatiser — vous avez besoin d'autre chose.",
    verdict: "Notre verdict",
    verdictText: "WhatsApp Business est le point de départ. AgenticWhatsup est la destination. L'app gratuite ne peut pas gérer les vocaux, analyser des images, se souvenir des clients ou travailler la nuit. Nos clients passent à AgenticWhatsup quand ils saturent ou veulent croître sans embaucher.",
    tableTitle: "Comparatif fonctionnel",
    rows: [
      { feature: "IA conversationnelle 24h/24", us: true, them: false, themNote: "Réponse manuelle uniquement" },
      { feature: "Compréhension des vocaux", us: true, them: false },
      { feature: "Analyse des images reçues", us: true, them: false },
      { feature: "Mémoire client cross-session", us: true, them: false },
      { feature: "Prise de RDV automatique", us: true, them: false },
      { feature: "Qualification de leads", us: true, them: false },
      { feature: "Intégration CRM", us: true, them: false },
      { feature: "Campagnes broadcast", us: true, them: true, themNote: "Très limité (liste de diffusion)" },
      { feature: "Messages automatiques simples", us: true, them: true, themNote: "Message d'absence uniquement" },
      { feature: "Coût", us: "Sur devis (audit gratuit)", them: "Gratuit" },
      { feature: "Conversations simultanées", us: "Illimitées", them: "1 (vous)" },
      { feature: "Disponibilité", us: "24h/24, 7j/7", them: "Vos heures de travail" },
      { feature: "ROI moyen client", us: "8× en 90j", them: "Non applicable" },
    ],
    whyTitle: "Quand passer de WhatsApp Business à AgenticWhatsup ?",
    why: [
      "Vous recevez plus de messages que vous ne pouvez en traiter manuellement",
      "Vous perdez des leads faute de réponse rapide en dehors des heures de bureau",
      "Vos clients vous envoient des vocaux ou des photos et vous perdez du temps à les traiter",
      "Vous voulez prendre des RDV automatiquement sans secrétaire",
      "Vous voulez que votre WhatsApp continue à travailler pendant vos vacances",
      "Vous cherchez à qualifier vos prospects avant de leur parler",
    ],
    forWhoTitle: "Qui devrait choisir quoi ?",
    forWhoUs: [
      "Vous recevez 30+ messages WhatsApp par jour",
      "Vous voulez automatiser sans perdre en qualité",
      "Vous voulez croître sans embaucher",
      "Vous cherchez un ROI mesurable rapidement",
    ],
    forWhoThem: [
      "Vous avez moins de 10 conversations/semaine",
      "Vous débutez et testez le canal WhatsApp",
      "Budget zéro à allouer à l'automatisation",
    ],
    ctaTitle: "Prêt à passer au niveau supérieur ?",
    ctaSubtitle: "Audit gratuit de 30 min — on vous montre exactement ce que ferait l'IA sur votre volume actuel.",
    ctaPrimary: "Prendre RDV — Audit gratuit",
    ctaSecondary: "Écrire sur WhatsApp",
    faqTitle: "Questions fréquentes",
    faqs: [
      { q: "L'app WhatsApp Business suffit-elle pour automatiser mes réponses ?", a: "L'app propose des réponses rapides et un message d'absence uniquement. Aucune IA, aucune qualification de lead, aucune intégration CRM possible." },
      { q: "Quelle différence entre l'app WhatsApp Business et l'API Cloud ?", a: "L'app est limitée à 1 appareil et ~256 contacts de diffusion. L'API WhatsApp Cloud permet l'automation à grande échelle avec IA et CRM — c'est la base qu'AgenticWhatsup utilise." },
      { q: "Peut-on utiliser l'IA sans l'API officielle WhatsApp ?", a: "Non légalement. AgenticWhatsup utilise exclusivement l'API WhatsApp Cloud officielle Meta pour garantir conformité et stabilité." },
      { q: "Combien de temps pour migrer depuis l'app WhatsApp Business ?", a: "14 jours. Nous gérons l'ouverture du compte API Cloud, la migration du numéro et la formation de l'agent sur votre entreprise." },
    ],
  },
  en: {
    back: "← All comparisons",
    badge: "Independent comparison 2025",
    h1: "AgenticWhatsup vs native WhatsApp Business",
    subtitle: "WhatsApp Business (Meta's free app) suits very small businesses that reply manually. The moment you want to automate — you need something else.",
    verdict: "Our verdict",
    verdictText: "WhatsApp Business is the starting point. AgenticWhatsup is the destination. The free app can't handle voice messages, analyse images, remember clients or work at night. Our clients switch to AgenticWhatsup when they're overwhelmed or want to grow without hiring.",
    tableTitle: "Functional comparison",
    rows: [
      { feature: "24/7 conversational AI", us: true, them: false, themNote: "Manual replies only" },
      { feature: "Voice message understanding", us: true, them: false },
      { feature: "Received image analysis", us: true, them: false },
      { feature: "Cross-session client memory", us: true, them: false },
      { feature: "Automatic appointment booking", us: true, them: false },
      { feature: "Lead qualification", us: true, them: false },
      { feature: "CRM integration", us: true, them: false },
      { feature: "Broadcast campaigns", us: true, them: true, themNote: "Very limited (broadcast list)" },
      { feature: "Simple automatic messages", us: true, them: true, themNote: "Away message only" },
      { feature: "Cost", us: "Custom quote (free audit)", them: "Free" },
      { feature: "Simultaneous conversations", us: "Unlimited", them: "1 (you)" },
      { feature: "Availability", us: "24/7", them: "Your working hours" },
      { feature: "Average client ROI", us: "8× in 90 days", them: "Not applicable" },
    ],
    whyTitle: "When to switch from WhatsApp Business to AgenticWhatsup?",
    why: [
      "You receive more messages than you can handle manually",
      "You're losing leads due to slow replies outside office hours",
      "Clients send you voice messages or photos and it takes time to process them",
      "You want to book appointments automatically without a receptionist",
      "You want your WhatsApp to keep working during your holidays",
      "You want to qualify prospects before speaking with them",
    ],
    forWhoTitle: "Who should choose what?",
    forWhoUs: [
      "You receive 30+ WhatsApp messages per day",
      "You want to automate without losing quality",
      "You want to grow without hiring",
      "You want a measurable ROI quickly",
    ],
    forWhoThem: [
      "You have fewer than 10 conversations per week",
      "You're starting out and testing the WhatsApp channel",
      "Zero budget for automation",
    ],
    ctaTitle: "Ready to level up?",
    ctaSubtitle: "Free 30-min audit — we show you exactly what the AI would do with your current volume.",
    faqTitle: "Häufig gestellte Fragen",
    faqs: [],
    ctaPrimary: "Book a call — Free audit",
    ctaSecondary: "Write on WhatsApp",
  },
  de: {
    back: "← Alle Vergleiche",
    badge: "Unabhängiger Vergleich 2025",
    h1: "AgenticWhatsup vs natives WhatsApp Business",
    subtitle: "WhatsApp Business (Metas kostenlose App) eignet sich für sehr kleine Unternehmen, die manuell antworten. Sobald Sie automatisieren möchten, brauchen Sie etwas anderes.",
    verdict: "Unser Urteil",
    verdictText: "WhatsApp Business ist der Ausgangspunkt. AgenticWhatsup ist das Ziel. Die kostenlose App kann keine Sprachnachrichten verarbeiten, Bilder analysieren, Kunden erinnern oder nachts arbeiten.",
    tableTitle: "Funktionsvergleich",
    rows: [
      { feature: "24/7 KI-Konversation", us: true, them: false, themNote: "Nur manuelle Antworten" },
      { feature: "Sprachnachrichtenverständnis", us: true, them: false },
      { feature: "Bildanalyse", us: true, them: false },
      { feature: "Sitzungsübergreifendes Kundengedächtnis", us: true, them: false },
      { feature: "Automatische Terminbuchung", us: true, them: false },
      { feature: "Lead-Qualifizierung", us: true, them: false },
      { feature: "CRM-Integration", us: true, them: false },
      { feature: "Broadcast-Kampagnen", us: true, them: true, themNote: "Sehr begrenzt" },
      { feature: "Einfache automatische Nachrichten", us: true, them: true, themNote: "Nur Abwesenheitsnachricht" },
      { feature: "Kosten", us: "Individuelles Angebot (kostenloses Audit)", them: "Kostenlos" },
      { feature: "Gleichzeitige Gespräche", us: "Unbegrenzt", them: "1 (Sie)" },
      { feature: "Verfügbarkeit", us: "24/7", them: "Ihre Arbeitszeiten" },
      { feature: "Kunden-ROI", us: "8× in 90 Tagen", them: "Nicht anwendbar" },
    ],
    whyTitle: "Wann von WhatsApp Business zu AgenticWhatsup wechseln?",
    why: [
      "Sie erhalten mehr Nachrichten als Sie manuell bearbeiten können",
      "Sie verlieren Leads wegen langsamer Antworten außerhalb der Geschäftszeiten",
      "Kunden senden Ihnen Sprachnachrichten oder Fotos und es kostet Zeit",
      "Sie möchten Termine automatisch ohne Rezeptionistin buchen",
      "Sie möchten, dass WhatsApp auch im Urlaub weiterarbeitet",
      "Sie möchten Interessenten qualifizieren, bevor Sie mit ihnen sprechen",
    ],
    forWhoTitle: "Wer sollte was wählen?",
    forWhoUs: [
      "Sie erhalten 30+ WhatsApp-Nachrichten pro Tag",
      "Sie möchten automatisieren ohne Qualitätsverlust",
      "Sie möchten wachsen ohne einzustellen",
      "Sie suchen einen schnell messbaren ROI",
    ],
    forWhoThem: [
      "Weniger als 10 Gespräche pro Woche",
      "Sie testen gerade den WhatsApp-Kanal",
      "Kein Budget für Automatisierung",
    ],
    ctaTitle: "Bereit für das nächste Level?",
    ctaSubtitle: "Kostenloses 30-Min-Audit — wir zeigen Ihnen genau, was die KI mit Ihrem aktuellen Volumen tun würde.",
    faqTitle: "Veelgestelde vragen",
    faqs: [],
    ctaPrimary: "Termin vereinbaren — Kostenloses Audit",
    ctaSecondary: "Auf WhatsApp schreiben",
  },
  nl: {
    back: "← Alle vergelijkingen",
    badge: "Onafhankelijke vergelijking 2025",
    h1: "AgenticWhatsup vs native WhatsApp Business",
    subtitle: "WhatsApp Business (Meta's gratis app) is geschikt voor zeer kleine bedrijven die handmatig antwoorden. Zodra u wilt automatiseren, heeft u iets anders nodig.",
    verdict: "Ons oordeel",
    verdictText: "WhatsApp Business is het beginpunt. AgenticWhatsup is de bestemming. De gratis app kan geen spraakberichten verwerken, afbeeldingen analyseren, klanten onthouden of 's nachts werken.",
    tableTitle: "Functionele vergelijking",
    rows: [
      { feature: "24/7 conversationele AI", us: true, them: false, themNote: "Alleen handmatige antwoorden" },
      { feature: "Begrip van spraakberichten", us: true, them: false },
      { feature: "Afbeeldingsanalyse", us: true, them: false },
      { feature: "Sessie-overschrijdend klantgeheugen", us: true, them: false },
      { feature: "Automatische afspraken", us: true, them: false },
      { feature: "Lead-kwalificatie", us: true, them: false },
      { feature: "CRM-integratie", us: true, them: false },
      { feature: "Broadcast-campagnes", us: true, them: true, themNote: "Zeer beperkt" },
      { feature: "Eenvoudige automatische berichten", us: true, them: true, themNote: "Alleen afwezigheidsbericht" },
      { feature: "Kosten", us: "Persoonlijk voorstel (gratis audit)", them: "Gratis" },
      { feature: "Gelijktijdige gesprekken", us: "Onbeperkt", them: "1 (u)" },
      { feature: "Beschikbaarheid", us: "24/7", them: "Uw werkuren" },
      { feature: "Gemiddeld klant-ROI", us: "8× in 90 dagen", them: "Niet van toepassing" },
    ],
    whyTitle: "Wanneer overstappen van WhatsApp Business naar AgenticWhatsup?",
    why: [
      "U ontvangt meer berichten dan u handmatig kunt verwerken",
      "U verliest leads door trage antwoorden buiten kantooruren",
      "Klanten sturen u spraakberichten of foto's en het kost tijd om ze te verwerken",
      "U wilt automatisch afspraken boeken zonder receptioniste",
      "U wilt dat uw WhatsApp blijft werken tijdens uw vakantie",
      "U wilt prospects kwalificeren voordat u met hen spreekt",
    ],
    forWhoTitle: "Wie moet wat kiezen?",
    forWhoUs: [
      "U ontvangt 30+ WhatsApp-berichten per dag",
      "U wilt automatiseren zonder kwaliteitsverlies",
      "U wilt groeien zonder aan te nemen",
      "U wilt snel een meetbare ROI",
    ],
    forWhoThem: [
      "Minder dan 10 gesprekken per week",
      "U test net het WhatsApp-kanaal",
      "Geen budget voor automatisering",
    ],
    ctaTitle: "Klaar voor het volgende niveau?",
    faqTitle: "Questions fréquentes",
    faqs: [],
    ctaSubtitle: "Gratis audit van 30 min — we tonen u precies wat de AI zou doen met uw huidige volume.",
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
      canonical: `https://agentic-whatsup.com/${locale}/comparatif/vs-whatsapp-business`,
      languages: {
        fr: "https://agentic-whatsup.com/fr/comparatif/vs-whatsapp-business",
        en: "https://agentic-whatsup.com/en/comparatif/vs-whatsapp-business",
        de: "https://agentic-whatsup.com/de/comparatif/vs-whatsapp-business",
        nl: "https://agentic-whatsup.com/nl/comparatif/vs-whatsapp-business",
        "x-default": "https://agentic-whatsup.com/fr/comparatif/vs-whatsapp-business",
      },
    },
  };
}

const waNumber = "41799394222";

export default async function VsWhatsAppBusinessPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = t[locale] ?? t.fr;
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || `/${locale}/contact`;


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
            <div className="text-center">WhatsApp Business</div>
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
          <h3 className="text-slate-400 font-bold mb-4 text-sm">⚠️ WhatsApp Business natif si…</h3>
          <ul className="space-y-2">{c.forWhoThem.map((item, i) => (<li key={i} className="flex items-start gap-2 text-slate-400 text-sm"><span className="shrink-0 mt-0.5">→</span> {item}</li>))}</ul>
        </div>
      </div>


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
