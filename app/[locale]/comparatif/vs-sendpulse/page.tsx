import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, CheckCircle, XCircle, MessageCircle } from "lucide-react";
import FAQAccordion from "@/components/shared/FAQAccordion";

const meta: Record<string, { title: string; description: string }> = {
  fr: { title: "AgenticWhatsup vs SendPulse — Comparatif 2025 | Agent IA WhatsApp vs marketing multicanal", description: "AgenticWhatsup ou SendPulse ? SendPulse est un bon outil marketing multicanal (email, SMS, push). AgenticWhatsup est spécialiste WhatsApp avec IA vocale et vision image. Analyse honnête." },
  en: { title: "AgenticWhatsup vs SendPulse — Comparison 2025 | WhatsApp AI vs multichannel marketing", description: "AgenticWhatsup or SendPulse? SendPulse is a good multichannel marketing tool (email, SMS, push). AgenticWhatsup is a WhatsApp specialist with voice AI and image vision." },
  de: { title: "AgenticWhatsup vs SendPulse — Vergleich 2025 | WhatsApp KI vs Multichannel-Marketing", description: "AgenticWhatsup oder SendPulse? SendPulse ist ein gutes Multichannel-Marketing-Tool. AgenticWhatsup ist WhatsApp-Spezialist mit Sprach-KI und Bildanalyse." },
  nl: { title: "AgenticWhatsup vs SendPulse — Vergelijking 2025 | WhatsApp AI vs multichannel marketing", description: "AgenticWhatsup of SendPulse? SendPulse is een goede multichannel marketing tool. AgenticWhatsup is WhatsApp-specialist met spraak-AI en beeldanalyse." },
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
    h1: "AgenticWhatsup vs SendPulse",
    subtitle: "SendPulse est une suite marketing multicanal (email, SMS, push, chatbots) au tarif attractif. AgenticWhatsup est un agent IA WhatsApp autonome avec vraie compréhension du langage. Deux produits pour deux besoins.",
    verdict: "Notre verdict",
    verdictText: "SendPulse brille pour les petites structures qui envoient des campagnes email + SMS + push dans un outil tout-en-un pas cher. AgenticWhatsup gagne dès que WhatsApp devient stratégique et que vous voulez une IA conversationnelle qui comprend vocaux, images et qui convertit — pas juste envoyer des broadcasts.",
    tableTitle: "Comparatif fonctionnel",
    rows: [
      { feature: "Spécialiste WhatsApp IA", us: true, them: false, themNote: "WhatsApp basique parmi 6 canaux" },
      { feature: "IA conversationnelle LLM (GPT-4/Claude)", us: true, them: false, themNote: "Chatbot à flows" },
      { feature: "Compréhension des vocaux WhatsApp", us: true, them: false },
      { feature: "Analyse d'image envoyée", us: true, them: false },
      { feature: "Mémoire conversation longue", us: true, them: false },
      { feature: "Formation sur vos données", us: true, them: false },
      { feature: "Email marketing", us: false, them: true, usNote: "Focus WhatsApp pur" },
      { feature: "SMS marketing", us: false, them: true },
      { feature: "Push notifications web", us: false, them: true },
      { feature: "CRM intégré", us: true, them: true, themNote: "CRM SendPulse natif" },
      { feature: "Personnalité de marque IA", us: true, them: false },
      { feature: "Support FR / DE / NL dédié", us: true, them: false, themNote: "EN + ES + RU principal" },
      { feature: "Tarif entrée de gamme", us: "Sur devis", them: "Freemium + bas coût" },
      { feature: "Déploiement", us: "14 jours", them: "Self-service quelques heures" },
      { feature: "ROI moyen client", us: "8× en 90j", them: "Variable selon usage" },
    ],
    whyTitle: "Pourquoi nos clients ont choisi AgenticWhatsup plutôt que SendPulse",
    why: [
      "SendPulse traite WhatsApp comme un canal de plus — AgenticWhatsup en fait le cœur du produit",
      "SendPulse utilise des flows à règles — AgenticWhatsup comprend le langage naturel en temps réel",
      "SendPulse ne transcrit pas les vocaux — AgenticWhatsup les écoute et répond au contenu",
      "SendPulse ne comprend pas les photos produits — AgenticWhatsup les analyse et conseille",
      "SendPulse est un outil DIY — AgenticWhatsup est un service clé-en-main formé sur vos données",
      "SendPulse a un support EN/ES/RU — nos clients ont besoin d'accompagnement FR/DE/NL",
    ],
    forWhoTitle: "Qui devrait choisir quoi ?",
    forWhoUs: [
      "WhatsApp est votre canal conversationnel principal",
      "Vous cherchez la qualité de conversion, pas le bas coût",
      "Vous recevez des vocaux, photos, demandes complexes",
      "Vous voulez un service complet, pas un logiciel à configurer",
    ],
    forWhoThem: [
      "Vous avez un budget marketing serré",
      "Vous envoyez surtout des campagnes email + SMS",
      "Vous voulez tout centraliser dans un outil pas cher",
      "Vos conversations WhatsApp sont simples et peu volumineuses",
    ],
    ctaTitle: "Votre WhatsApp mérite mieux qu'un chatbot",
    ctaSubtitle: "Audit gratuit 30 min — on vous montre la différence entre un flow SendPulse et un vrai agent IA.",
    ctaPrimary: "Prendre RDV — Audit gratuit",
    ctaSecondary: "Écrire sur WhatsApp",
    faqTitle: "Questions fréquentes",
    faqs: [
      { q: "SendPulse est-il moins cher qu'AgenticWhatsup ?", a: "Oui, SendPulse démarre en freemium et reste peu coûteux pour de petits volumes. AgenticWhatsup est un service premium avec ROI garanti 8× — logique différente : tarif vs investissement avec retour mesurable." },
      { q: "Peut-on utiliser SendPulse et AgenticWhatsup ensemble ?", a: "Oui. Vous pouvez garder SendPulse pour email/SMS et confier vos conversations WhatsApp à AgenticWhatsup. Nous nous intégrons à votre CRM existant." },
      { q: "L'IA SendPulse suffit-elle pour mon entreprise ?", a: "Pour des FAQ simples et redirections : oui. Dès que le client envoie un vocal, une photo ou pose une question complexe, l'IA SendPulse atteint ses limites." },
      { q: "Combien de temps pour migrer de SendPulse à AgenticWhatsup ?", a: "14 jours. Nous récupérons vos templates, FAQs et historique CRM pour former l'agent sur votre entreprise." },
      { q: "Puis-je tester avant de m'engager ?", a: "Oui. Audit gratuit 30 min avec démo sur un cas concret tiré de vos conversations actuelles." },
    ],
  },
  en: {
    back: "← All comparisons",
    badge: "Independent comparison 2025",
    h1: "AgenticWhatsup vs SendPulse",
    subtitle: "SendPulse is a multichannel marketing suite (email, SMS, push, chatbots) at an attractive price. AgenticWhatsup is an autonomous WhatsApp AI agent with true language understanding. Two products for two needs.",
    verdict: "Our verdict",
    verdictText: "SendPulse shines for small businesses sending email + SMS + push campaigns in one affordable tool. AgenticWhatsup wins the moment WhatsApp becomes strategic and you want conversational AI that understands voice, images and converts — not just sends broadcasts.",
    tableTitle: "Functional comparison",
    rows: [
      { feature: "WhatsApp AI specialist", us: true, them: false, themNote: "Basic WhatsApp among 6 channels" },
      { feature: "LLM conversational AI (GPT-4/Claude)", us: true, them: false, themNote: "Flow-based chatbot" },
      { feature: "WhatsApp voice message understanding", us: true, them: false },
      { feature: "Sent image analysis", us: true, them: false },
      { feature: "Long conversation memory", us: true, them: false },
      { feature: "Training on your data", us: true, them: false },
      { feature: "Email marketing", us: false, them: true, usNote: "Pure WhatsApp focus" },
      { feature: "SMS marketing", us: false, them: true },
      { feature: "Web push notifications", us: false, them: true },
      { feature: "Integrated CRM", us: true, them: true, themNote: "Native SendPulse CRM" },
      { feature: "Brand personality AI", us: true, them: false },
      { feature: "Dedicated FR / DE / NL support", us: true, them: false, themNote: "Mainly EN + ES + RU" },
      { feature: "Entry price", us: "Custom quote", them: "Freemium + low cost" },
      { feature: "Deployment", us: "14 days", them: "Self-service hours" },
      { feature: "Average client ROI", us: "8× in 90 days", them: "Variable by use case" },
    ],
    whyTitle: "Why our clients chose AgenticWhatsup over SendPulse",
    why: [
      "SendPulse treats WhatsApp as just another channel — AgenticWhatsup makes it the product's core",
      "SendPulse uses rule-based flows — AgenticWhatsup understands natural language in real time",
      "SendPulse doesn't transcribe voice messages — AgenticWhatsup listens and responds to content",
      "SendPulse doesn't understand product photos — AgenticWhatsup analyses and advises",
      "SendPulse is DIY software — AgenticWhatsup is a turnkey service trained on your data",
      "SendPulse supports EN/ES/RU — our clients need FR/DE/NL support",
    ],
    forWhoTitle: "Who should choose what?",
    forWhoUs: [
      "WhatsApp is your main conversational channel",
      "You want conversion quality, not lowest cost",
      "You receive voice, photos, complex requests",
      "You want a complete service, not software to configure",
    ],
    forWhoThem: [
      "You have a tight marketing budget",
      "You mainly send email + SMS campaigns",
      "You want everything centralised in one cheap tool",
      "Your WhatsApp conversations are simple and low volume",
    ],
    ctaTitle: "Your WhatsApp deserves better than a chatbot",
    ctaSubtitle: "Free 30-min audit — we show you the difference between a SendPulse flow and a real AI agent.",
    ctaPrimary: "Book a call — Free audit",
    ctaSecondary: "Write on WhatsApp",
    faqTitle: "Frequently asked questions",
    faqs: [
      { q: "Is SendPulse cheaper than AgenticWhatsup?", a: "Yes, SendPulse starts freemium and stays low-cost for small volumes. AgenticWhatsup is a premium service with guaranteed 8× ROI — different logic: pricing vs measurable investment." },
      { q: "Can SendPulse and AgenticWhatsup be used together?", a: "Yes. Keep SendPulse for email/SMS and entrust WhatsApp conversations to AgenticWhatsup. We integrate with your existing CRM." },
      { q: "Is SendPulse's AI enough for my business?", a: "For simple FAQs and redirections: yes. The moment a client sends a voice message, photo or asks a complex question, SendPulse's AI hits its limits." },
      { q: "How long to migrate from SendPulse to AgenticWhatsup?", a: "14 days. We recover your templates, FAQs and CRM history to train the agent on your business." },
      { q: "Can I test before committing?", a: "Yes. Free 30-min audit with demo on a concrete case from your current conversations." },
    ],
  },
  de: {
    back: "← Alle Vergleiche",
    badge: "Unabhängiger Vergleich 2025",
    h1: "AgenticWhatsup vs SendPulse",
    subtitle: "SendPulse ist eine Multichannel-Marketing-Suite (E-Mail, SMS, Push, Chatbots) zu attraktivem Preis. AgenticWhatsup ist ein autonomer WhatsApp KI-Agent mit echtem Sprachverständnis. Zwei Produkte für zwei Bedürfnisse.",
    verdict: "Unser Urteil",
    verdictText: "SendPulse glänzt für kleine Unternehmen, die E-Mail + SMS + Push-Kampagnen in einem günstigen Tool versenden. AgenticWhatsup gewinnt, sobald WhatsApp strategisch wird und Sie echte KI wollen, die Sprache, Bilder versteht und konvertiert.",
    tableTitle: "Funktionsvergleich",
    rows: [
      { feature: "WhatsApp KI-Spezialist", us: true, them: false, themNote: "WhatsApp unter 6 Kanälen" },
      { feature: "LLM Konversations-KI (GPT-4/Claude)", us: true, them: false, themNote: "Flow-basierter Chatbot" },
      { feature: "WhatsApp-Sprachnachrichtenverständnis", us: true, them: false },
      { feature: "Bildanalyse", us: true, them: false },
      { feature: "Langes Gesprächsgedächtnis", us: true, them: false },
      { feature: "Training auf Ihren Daten", us: true, them: false },
      { feature: "E-Mail-Marketing", us: false, them: true, usNote: "Reiner WhatsApp-Fokus" },
      { feature: "SMS-Marketing", us: false, them: true },
      { feature: "Web-Push-Benachrichtigungen", us: false, them: true },
      { feature: "Integriertes CRM", us: true, them: true, themNote: "Natives SendPulse CRM" },
      { feature: "Marken-KI-Persönlichkeit", us: true, them: false },
      { feature: "Dedizierter FR / DE / NL Support", us: true, them: false, themNote: "Hauptsächlich EN + ES + RU" },
      { feature: "Einstiegspreis", us: "Individuelles Angebot", them: "Freemium + niedrig" },
      { feature: "Bereitstellung", us: "14 Tage", them: "Self-Service Stunden" },
      { feature: "Kunden-ROI", us: "8× in 90 Tagen", them: "Variabel" },
    ],
    whyTitle: "Warum unsere Kunden AgenticWhatsup statt SendPulse wählten",
    why: [
      "SendPulse behandelt WhatsApp als einen weiteren Kanal — AgenticWhatsup macht es zum Kern",
      "SendPulse verwendet regelbasierte Flows — AgenticWhatsup versteht natürliche Sprache in Echtzeit",
      "SendPulse transkribiert keine Sprachnachrichten — AgenticWhatsup hört und antwortet auf den Inhalt",
      "SendPulse versteht keine Produktfotos — AgenticWhatsup analysiert und berät",
      "SendPulse ist DIY-Software — AgenticWhatsup ist ein schlüsselfertiger Service",
      "SendPulse unterstützt EN/ES/RU — unsere Kunden brauchen FR/DE/NL-Support",
    ],
    forWhoTitle: "Wer sollte was wählen?",
    forWhoUs: [
      "WhatsApp ist Ihr Haupt-Konversationskanal",
      "Sie wollen Konversionsqualität, nicht niedrigsten Preis",
      "Sie erhalten Sprache, Fotos, komplexe Anfragen",
      "Sie wollen einen kompletten Service, keine zu konfigurierende Software",
    ],
    forWhoThem: [
      "Sie haben ein knappes Marketing-Budget",
      "Sie senden hauptsächlich E-Mail + SMS-Kampagnen",
      "Sie wollen alles in einem günstigen Tool zentralisieren",
      "Ihre WhatsApp-Gespräche sind einfach und niedrigvolumig",
    ],
    ctaTitle: "Ihr WhatsApp verdient mehr als einen Chatbot",
    ctaSubtitle: "Kostenloses 30-Min-Audit — wir zeigen Ihnen den Unterschied zwischen einem SendPulse-Flow und einem echten KI-Agenten.",
    ctaPrimary: "Termin vereinbaren — Kostenloses Audit",
    ctaSecondary: "Auf WhatsApp schreiben",
    faqTitle: "Häufig gestellte Fragen",
    faqs: [
      { q: "Ist SendPulse günstiger als AgenticWhatsup?", a: "Ja, SendPulse startet freemium und bleibt günstig für kleine Volumen. AgenticWhatsup ist ein Premium-Service mit garantiertem 8× ROI — andere Logik: Preis vs. messbare Investition." },
      { q: "Können SendPulse und AgenticWhatsup zusammen genutzt werden?", a: "Ja. Behalten Sie SendPulse für E-Mail/SMS und übergeben Sie WhatsApp-Gespräche an AgenticWhatsup. Wir integrieren uns in Ihr CRM." },
      { q: "Reicht SendPulses KI für mein Unternehmen?", a: "Für einfache FAQs: ja. Sobald ein Kunde eine Sprachnachricht, ein Foto sendet oder eine komplexe Frage stellt, stößt SendPulses KI an ihre Grenzen." },
      { q: "Wie lange dauert die Migration?", a: "14 Tage. Wir übernehmen Templates, FAQs und CRM-Historie, um den Agenten auf Ihr Unternehmen zu schulen." },
      { q: "Kann ich vor Vertragsabschluss testen?", a: "Ja. Kostenloses 30-Min-Audit mit Demo an einem konkreten Fall." },
    ],
  },
  nl: {
    back: "← Alle vergelijkingen",
    badge: "Onafhankelijke vergelijking 2025",
    h1: "AgenticWhatsup vs SendPulse",
    subtitle: "SendPulse is een multichannel marketing suite (e-mail, SMS, push, chatbots) tegen aantrekkelijke prijs. AgenticWhatsup is een autonome WhatsApp AI-agent met echt taalbegrip. Twee producten voor twee behoeften.",
    verdict: "Ons oordeel",
    verdictText: "SendPulse blinkt uit voor kleine bedrijven die e-mail + SMS + push-campagnes versturen in één betaalbaar tool. AgenticWhatsup wint zodra WhatsApp strategisch wordt en u echte AI wilt die spraak en afbeeldingen begrijpt.",
    tableTitle: "Functionele vergelijking",
    rows: [
      { feature: "WhatsApp AI-specialist", us: true, them: false, themNote: "WhatsApp onder 6 kanalen" },
      { feature: "LLM conversationele AI (GPT-4/Claude)", us: true, them: false, themNote: "Flow-gebaseerde chatbot" },
      { feature: "WhatsApp spraakberichten begrip", us: true, them: false },
      { feature: "Verzonden afbeeldingsanalyse", us: true, them: false },
      { feature: "Lang gespreksgeheugen", us: true, them: false },
      { feature: "Training op uw gegevens", us: true, them: false },
      { feature: "E-mailmarketing", us: false, them: true, usNote: "Pure WhatsApp focus" },
      { feature: "SMS-marketing", us: false, them: true },
      { feature: "Web push-meldingen", us: false, them: true },
      { feature: "Geïntegreerd CRM", us: true, them: true, themNote: "Native SendPulse CRM" },
      { feature: "Merk-AI-persoonlijkheid", us: true, them: false },
      { feature: "Dedicated FR / DE / NL support", us: true, them: false, themNote: "Voornamelijk EN + ES + RU" },
      { feature: "Instapprijs", us: "Persoonlijk voorstel", them: "Freemium + laag" },
      { feature: "Implementatie", us: "14 dagen", them: "Self-service uren" },
      { feature: "Klant-ROI", us: "8× in 90 dagen", them: "Variabel" },
    ],
    whyTitle: "Waarom onze klanten AgenticWhatsup kozen boven SendPulse",
    why: [
      "SendPulse behandelt WhatsApp als nog een kanaal — AgenticWhatsup maakt het de kern",
      "SendPulse gebruikt regelgebaseerde flows — AgenticWhatsup begrijpt natuurlijke taal in realtime",
      "SendPulse transcribeert geen spraakberichten — AgenticWhatsup luistert en reageert op inhoud",
      "SendPulse begrijpt geen productfoto's — AgenticWhatsup analyseert en adviseert",
      "SendPulse is DIY-software — AgenticWhatsup is een sleutelklare service",
      "SendPulse ondersteunt EN/ES/RU — onze klanten hebben FR/DE/NL-support nodig",
    ],
    forWhoTitle: "Wie moet wat kiezen?",
    forWhoUs: [
      "WhatsApp is uw belangrijkste conversatiekanaal",
      "U wilt conversiekwaliteit, geen laagste kosten",
      "U ontvangt spraak, foto's, complexe verzoeken",
      "U wilt een complete service, geen te configureren software",
    ],
    forWhoThem: [
      "U heeft een krap marketingbudget",
      "U verstuurt voornamelijk e-mail + SMS-campagnes",
      "U wilt alles centraliseren in één goedkoop tool",
      "Uw WhatsApp-gesprekken zijn eenvoudig en laagvolume",
    ],
    ctaTitle: "Uw WhatsApp verdient meer dan een chatbot",
    ctaSubtitle: "Gratis audit 30 min — we tonen u het verschil tussen een SendPulse-flow en een echte AI-agent.",
    ctaPrimary: "Afspraak maken — Gratis audit",
    ctaSecondary: "Schrijf op WhatsApp",
    faqTitle: "Veelgestelde vragen",
    faqs: [
      { q: "Is SendPulse goedkoper dan AgenticWhatsup?", a: "Ja, SendPulse start freemium en blijft laaggeprijsd voor kleine volumes. AgenticWhatsup is een premium service met gegarandeerde 8× ROI — andere logica: prijs vs meetbare investering." },
      { q: "Kunnen SendPulse en AgenticWhatsup samen worden gebruikt?", a: "Ja. Behoud SendPulse voor e-mail/SMS en vertrouw WhatsApp-gesprekken toe aan AgenticWhatsup. We integreren met uw CRM." },
      { q: "Is SendPulse's AI genoeg voor mijn bedrijf?", a: "Voor eenvoudige FAQs: ja. Zodra een klant een spraakbericht, foto stuurt of een complexe vraag stelt, stoot SendPulse's AI op zijn grenzen." },
      { q: "Hoe lang duurt migratie?", a: "14 dagen. We nemen sjablonen, FAQs en CRM-historiek over om de agent te trainen." },
      { q: "Kan ik testen voor ik me verbind?", a: "Ja. Gratis audit 30 min met demo op een concreet geval." },
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
      canonical: `https://agentic-whatsup.com/${locale}/comparatif/vs-sendpulse`,
      languages: {
        fr: "https://agentic-whatsup.com/fr/comparatif/vs-sendpulse",
        en: "https://agentic-whatsup.com/en/comparatif/vs-sendpulse",
        de: "https://agentic-whatsup.com/de/comparatif/vs-sendpulse",
        nl: "https://agentic-whatsup.com/nl/comparatif/vs-sendpulse",
        "x-default": "https://agentic-whatsup.com/fr/comparatif/vs-sendpulse",
      },
    },
  };
}

const waNumber = "41799394222";

export default async function VsSendPulsePage({ params }: { params: Promise<{ locale: string }> }) {
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
    url: `https://agentic-whatsup.com/${locale}/comparatif/vs-sendpulse`,
  };

  const faqLd = c.faqs && c.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f: { q: string; a: string }) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

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
            <div className="text-center">SendPulse</div>
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
          <h3 className="text-slate-400 font-bold mb-4 text-sm">⚠️ SendPulse si…</h3>
          <ul className="space-y-2">{c.forWhoThem.map((item, i) => (<li key={i} className="flex items-start gap-2 text-slate-400 text-sm"><span className="shrink-0 mt-0.5">→</span> {item}</li>))}</ul>
        </div>
      </div>

      <div className="mb-14">
        <h2 className="text-white font-extrabold text-xl mb-5" style={{ fontFamily: "Onest, sans-serif" }}>{c.faqTitle}</h2>
        <FAQAccordion items={c.faqs.map((f) => ({ question: f.q, answer: f.a }))} emitSchema={false} />
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
