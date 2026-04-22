import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, CheckCircle, XCircle, MessageCircle } from "lucide-react";

const meta: Record<string, { title: string; description: string }> = {
  fr: { title: "AgenticWhatsup vs Chatfuel — Comparatif 2025 | WhatsApp IA spécialisé vs Facebook/Instagram", description: "AgenticWhatsup ou Chatfuel ? Chatfuel excelle sur Facebook/Instagram/social mais est secondaire sur WhatsApp. AgenticWhatsup est 100% WhatsApp avec IA vocale et vision image." },
  en: { title: "AgenticWhatsup vs Chatfuel — Comparison 2025 | WhatsApp specialist vs Facebook/Instagram", description: "AgenticWhatsup or Chatfuel? Chatfuel excels on Facebook/Instagram/social but is secondary on WhatsApp. AgenticWhatsup is 100% WhatsApp with voice AI and image vision." },
  de: { title: "AgenticWhatsup vs Chatfuel — Vergleich 2025 | WhatsApp-Spezialist vs Facebook/Instagram", description: "AgenticWhatsup oder Chatfuel? Chatfuel brilliert auf Facebook/Instagram aber ist sekundär auf WhatsApp. AgenticWhatsup ist 100% WhatsApp mit Sprach-KI und Bildanalyse." },
  nl: { title: "AgenticWhatsup vs Chatfuel — Vergelijking 2025 | WhatsApp-specialist vs Facebook/Instagram", description: "AgenticWhatsup of Chatfuel? Chatfuel blinkt uit op Facebook/Instagram maar is secundair op WhatsApp. AgenticWhatsup is 100% WhatsApp met spraak-AI en beeldanalyse." },
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
    h1: "AgenticWhatsup vs Chatfuel",
    subtitle: "Chatfuel est un pionnier et leader reconnu des chatbots Facebook Messenger et Instagram. Sa version WhatsApp est plus récente et moins mature. AgenticWhatsup est né WhatsApp — c'est toute la différence.",
    verdict: "Notre verdict",
    verdictText: "Chatfuel est le bon choix si votre activité tourne autour d'Instagram DM et Messenger — leur mastère historique. Pour WhatsApp avec vraie IA conversationnelle, vocaux et vision image, AgenticWhatsup est conçu pour ça depuis le premier jour et utilise les modèles LLM les plus avancés.",
    tableTitle: "Comparatif fonctionnel",
    rows: [
      { feature: "Spécialisé WhatsApp depuis l'origine", us: true, them: false, themNote: "WhatsApp ajouté tardivement" },
      { feature: "IA GPT-4 / Claude intégrée", us: true, them: false, themNote: "IA propriétaire + flows" },
      { feature: "Compréhension vocaux WhatsApp", us: true, them: false },
      { feature: "Analyse d'image envoyée", us: true, them: false },
      { feature: "Mémoire conversation longue", us: true, them: false, themNote: "Variables user attributes" },
      { feature: "Formation sur vos données", us: true, them: false },
      { feature: "Chatbots Instagram DM", us: false, them: true, usNote: "Focus WhatsApp" },
      { feature: "Chatbots Facebook Messenger", us: false, them: true },
      { feature: "Builder visuel flows", us: false, them: true, usNote: "IA autonome, pas de flows" },
      { feature: "Integration Shopify / Stripe", us: true, them: true },
      { feature: "Personnalité de marque IA", us: true, them: false },
      { feature: "Support FR / DE / NL", us: true, them: false, themNote: "Anglais principal" },
      { feature: "Déploiement", us: "14 jours", them: "Self-service rapide" },
      { feature: "ROI moyen client", us: "8× en 90j", them: "Variable social commerce" },
    ],
    whyTitle: "Pourquoi nos clients ont choisi AgenticWhatsup plutôt que Chatfuel",
    why: [
      "Chatfuel est historiquement Facebook/Instagram — AgenticWhatsup est né WhatsApp",
      "Chatfuel pousse des flows préconçus — AgenticWhatsup utilise une vraie IA GPT-4/Claude",
      "Chatfuel ne transcrit pas les vocaux WhatsApp — handicap critique sur marchés FR/CH",
      "Chatfuel ne peut pas analyser une photo produit — AgenticWhatsup décrit et conseille",
      "Chatfuel cible le social commerce — AgenticWhatsup cible le B2B et SMB conversationnel",
      "Chatfuel a un support anglais — nos clients veulent du FR/DE/NL",
    ],
    forWhoTitle: "Qui devrait choisir quoi ?",
    forWhoUs: [
      "WhatsApp est votre canal principal",
      "Vous recevez vocaux, photos, demandes complexes",
      "Vous voulez une IA qui apprend de votre entreprise",
      "Vous ciblez B2B ou marchés FR/DE/NL",
    ],
    forWhoThem: [
      "Instagram DM et Facebook Messenger sont prioritaires",
      "Vous faites du social commerce (Instagram Shopping)",
      "Vous voulez un builder visuel pour créer vos flows",
      "Vos conversations WhatsApp sont simples et en anglais",
    ],
    ctaTitle: "Chatfuel est-il vraiment le bon choix pour votre WhatsApp ?",
    ctaSubtitle: "Audit gratuit 30 min — on compare objectivement les 2 solutions sur votre cas concret.",
    ctaPrimary: "Prendre RDV — Audit gratuit",
    ctaSecondary: "Écrire sur WhatsApp",
    faqTitle: "Questions fréquentes",
    faqs: [
      { q: "Chatfuel est-il bon pour WhatsApp ?", a: "Chatfuel est excellent sur Instagram et Facebook Messenger, ses canaux historiques. Sur WhatsApp, son offre est plus récente et reste construite sur la même logique de flows visuels — moins d'IA conversationnelle vraie." },
      { q: "AgenticWhatsup remplace-t-il Chatfuel pour le social ?", a: "Non. Nous sommes 100% WhatsApp. Si vous voulez Instagram DM ou Messenger, gardez Chatfuel pour ces canaux et utilisez AgenticWhatsup pour WhatsApp." },
      { q: "Quelle est la différence d'IA entre les deux ?", a: "Chatfuel propose des flows enrichis d'un module IA. AgenticWhatsup utilise directement GPT-4 et Claude comme cerveau de l'agent, avec formation sur vos données client — écart significatif sur contexte et compréhension." },
      { q: "Combien de temps pour basculer vers AgenticWhatsup ?", a: "14 jours pour un agent formé sur votre entreprise, avec intégration CRM et reprise de vos FAQs." },
      { q: "Y a-t-il un essai gratuit ?", a: "Audit gratuit 30 min avec démonstration concrète sur votre cas." },
    ],
  },
  en: {
    back: "← All comparisons",
    badge: "Independent comparison 2025",
    h1: "AgenticWhatsup vs Chatfuel",
    subtitle: "Chatfuel is a pioneer and recognised leader in Facebook Messenger and Instagram chatbots. Its WhatsApp offering is newer and less mature. AgenticWhatsup was born WhatsApp — that's the whole difference.",
    verdict: "Our verdict",
    verdictText: "Chatfuel is the right choice if your business revolves around Instagram DM and Messenger — their historical mastery. For WhatsApp with real conversational AI, voice and image vision, AgenticWhatsup was designed for this from day one and uses the most advanced LLMs.",
    tableTitle: "Functional comparison",
    rows: [
      { feature: "WhatsApp specialist from the start", us: true, them: false, themNote: "WhatsApp added later" },
      { feature: "Integrated GPT-4 / Claude AI", us: true, them: false, themNote: "Proprietary AI + flows" },
      { feature: "WhatsApp voice message understanding", us: true, them: false },
      { feature: "Sent image analysis", us: true, them: false },
      { feature: "Long conversation memory", us: true, them: false, themNote: "User attributes only" },
      { feature: "Training on your data", us: true, them: false },
      { feature: "Instagram DM chatbots", us: false, them: true, usNote: "WhatsApp focus" },
      { feature: "Facebook Messenger chatbots", us: false, them: true },
      { feature: "Visual flow builder", us: false, them: true, usNote: "Autonomous AI, no flows" },
      { feature: "Shopify / Stripe integration", us: true, them: true },
      { feature: "Brand personality AI", us: true, them: false },
      { feature: "FR / DE / NL support", us: true, them: false, themNote: "Mainly English" },
      { feature: "Deployment", us: "14 days", them: "Quick self-service" },
      { feature: "Average client ROI", us: "8× in 90 days", them: "Variable social commerce" },
    ],
    whyTitle: "Why our clients chose AgenticWhatsup over Chatfuel",
    why: [
      "Chatfuel is historically Facebook/Instagram — AgenticWhatsup was born WhatsApp",
      "Chatfuel pushes pre-built flows — AgenticWhatsup uses real GPT-4/Claude AI",
      "Chatfuel doesn't transcribe WhatsApp voice messages — critical handicap in FR/CH markets",
      "Chatfuel cannot analyse a product photo — AgenticWhatsup describes and advises",
      "Chatfuel targets social commerce — AgenticWhatsup targets B2B and conversational SMB",
      "Chatfuel has English-first support — our clients want FR/DE/NL",
    ],
    forWhoTitle: "Who should choose what?",
    forWhoUs: [
      "WhatsApp is your main channel",
      "You receive voice, photos, complex requests",
      "You want AI that learns from your business",
      "You target B2B or FR/DE/NL markets",
    ],
    forWhoThem: [
      "Instagram DM and Facebook Messenger are priorities",
      "You do social commerce (Instagram Shopping)",
      "You want a visual builder to create flows",
      "Your WhatsApp conversations are simple and in English",
    ],
    ctaTitle: "Is Chatfuel really the right choice for your WhatsApp?",
    ctaSubtitle: "Free 30-min audit — we objectively compare both solutions on your concrete case.",
    ctaPrimary: "Book a call — Free audit",
    ctaSecondary: "Write on WhatsApp",
    faqTitle: "Frequently asked questions",
    faqs: [
      { q: "Is Chatfuel good for WhatsApp?", a: "Chatfuel excels on Instagram and Facebook Messenger, its historical channels. On WhatsApp, its offering is newer and remains built on the same visual flow logic — less real conversational AI." },
      { q: "Does AgenticWhatsup replace Chatfuel for social?", a: "No. We're 100% WhatsApp. If you want Instagram DM or Messenger, keep Chatfuel for those channels and use AgenticWhatsup for WhatsApp." },
      { q: "What's the AI difference between the two?", a: "Chatfuel offers flows enriched with an AI module. AgenticWhatsup uses GPT-4 and Claude directly as the agent's brain, trained on your data — significant gap on context and understanding." },
      { q: "How long to switch to AgenticWhatsup?", a: "14 days for an agent trained on your business, with CRM integration and FAQ migration." },
      { q: "Is there a free trial?", a: "Free 30-min audit with concrete demonstration on your case." },
    ],
  },
  de: {
    back: "← Alle Vergleiche",
    badge: "Unabhängiger Vergleich 2025",
    h1: "AgenticWhatsup vs Chatfuel",
    subtitle: "Chatfuel ist Pionier und anerkannter Marktführer für Facebook Messenger und Instagram Chatbots. Sein WhatsApp-Angebot ist neuer und weniger ausgereift. AgenticWhatsup wurde für WhatsApp geboren.",
    verdict: "Unser Urteil",
    verdictText: "Chatfuel ist die richtige Wahl, wenn Ihr Geschäft sich um Instagram DM und Messenger dreht — ihre historische Stärke. Für WhatsApp mit echter konversationeller KI ist AgenticWhatsup von Anfang an dafür konzipiert.",
    tableTitle: "Funktionsvergleich",
    rows: [
      { feature: "WhatsApp-Spezialist von Anfang an", us: true, them: false, themNote: "WhatsApp später hinzugefügt" },
      { feature: "Integrierte GPT-4 / Claude KI", us: true, them: false, themNote: "Proprietäre KI + Flows" },
      { feature: "WhatsApp-Sprachnachrichtenverständnis", us: true, them: false },
      { feature: "Bildanalyse", us: true, them: false },
      { feature: "Langes Gesprächsgedächtnis", us: true, them: false, themNote: "Nur User Attributes" },
      { feature: "Training auf Ihren Daten", us: true, them: false },
      { feature: "Instagram DM Chatbots", us: false, them: true, usNote: "WhatsApp-Fokus" },
      { feature: "Facebook Messenger Chatbots", us: false, them: true },
      { feature: "Visueller Flow-Builder", us: false, them: true, usNote: "Autonome KI, keine Flows" },
      { feature: "Shopify / Stripe Integration", us: true, them: true },
      { feature: "Marken-KI-Persönlichkeit", us: true, them: false },
      { feature: "FR / DE / NL Support", us: true, them: false, themNote: "Hauptsächlich Englisch" },
      { feature: "Bereitstellung", us: "14 Tage", them: "Schneller Self-Service" },
      { feature: "Kunden-ROI", us: "8× in 90 Tagen", them: "Variabel Social Commerce" },
    ],
    whyTitle: "Warum unsere Kunden AgenticWhatsup statt Chatfuel wählten",
    why: [
      "Chatfuel ist historisch Facebook/Instagram — AgenticWhatsup wurde für WhatsApp geboren",
      "Chatfuel bietet vorgefertigte Flows — AgenticWhatsup nutzt echte GPT-4/Claude KI",
      "Chatfuel transkribiert keine WhatsApp-Sprachnachrichten — kritischer Nachteil in DACH",
      "Chatfuel kann kein Produktfoto analysieren — AgenticWhatsup beschreibt und berät",
      "Chatfuel zielt auf Social Commerce — AgenticWhatsup auf B2B und konversationelles KMU",
      "Chatfuel hat englischsprachigen Support — unsere Kunden wollen FR/DE/NL",
    ],
    forWhoTitle: "Wer sollte was wählen?",
    forWhoUs: [
      "WhatsApp ist Ihr Hauptkanal",
      "Sie erhalten Sprache, Fotos, komplexe Anfragen",
      "Sie wollen KI, die aus Ihrem Unternehmen lernt",
      "Sie zielen auf B2B oder DACH/Benelux-Märkte",
    ],
    forWhoThem: [
      "Instagram DM und Facebook Messenger haben Priorität",
      "Sie betreiben Social Commerce",
      "Sie wollen einen visuellen Builder für Ihre Flows",
      "Ihre WhatsApp-Gespräche sind einfach und auf Englisch",
    ],
    ctaTitle: "Ist Chatfuel wirklich die richtige Wahl für WhatsApp?",
    ctaSubtitle: "Kostenloses 30-Min-Audit — wir vergleichen objektiv beide Lösungen an Ihrem konkreten Fall.",
    ctaPrimary: "Termin vereinbaren — Kostenloses Audit",
    ctaSecondary: "Auf WhatsApp schreiben",
    faqTitle: "Häufig gestellte Fragen",
    faqs: [
      { q: "Ist Chatfuel gut für WhatsApp?", a: "Chatfuel brilliert auf Instagram und Facebook Messenger, seinen historischen Kanälen. Auf WhatsApp ist das Angebot neuer und basiert auf derselben visuellen Flow-Logik." },
      { q: "Ersetzt AgenticWhatsup Chatfuel für Social?", a: "Nein. Wir sind 100% WhatsApp. Für Instagram DM oder Messenger behalten Sie Chatfuel und nutzen AgenticWhatsup für WhatsApp." },
      { q: "Was ist der KI-Unterschied?", a: "Chatfuel bietet Flows mit KI-Modul. AgenticWhatsup nutzt GPT-4 und Claude direkt als Gehirn, trainiert auf Ihren Daten — signifikanter Unterschied." },
      { q: "Wie lange für den Wechsel?", a: "14 Tage für einen trainierten Agenten mit CRM-Integration." },
      { q: "Gibt es eine kostenlose Testphase?", a: "Kostenloses 30-Min-Audit mit Demonstration." },
    ],
  },
  nl: {
    back: "← Alle vergelijkingen",
    badge: "Onafhankelijke vergelijking 2025",
    h1: "AgenticWhatsup vs Chatfuel",
    subtitle: "Chatfuel is pionier en erkend leider in Facebook Messenger en Instagram chatbots. Zijn WhatsApp-aanbod is nieuwer en minder volwassen. AgenticWhatsup is geboren voor WhatsApp.",
    verdict: "Ons oordeel",
    verdictText: "Chatfuel is de juiste keuze als uw business draait om Instagram DM en Messenger — hun historische sterkte. Voor WhatsApp met echte conversationele AI is AgenticWhatsup vanaf dag één ontworpen.",
    tableTitle: "Functionele vergelijking",
    rows: [
      { feature: "WhatsApp-specialist vanaf het begin", us: true, them: false, themNote: "WhatsApp later toegevoegd" },
      { feature: "Geïntegreerde GPT-4 / Claude AI", us: true, them: false, themNote: "Propriëtaire AI + flows" },
      { feature: "WhatsApp spraakberichten begrip", us: true, them: false },
      { feature: "Afbeeldingsanalyse", us: true, them: false },
      { feature: "Lang gespreksgeheugen", us: true, them: false, themNote: "Alleen user attributes" },
      { feature: "Training op uw gegevens", us: true, them: false },
      { feature: "Instagram DM chatbots", us: false, them: true, usNote: "WhatsApp-focus" },
      { feature: "Facebook Messenger chatbots", us: false, them: true },
      { feature: "Visuele flow builder", us: false, them: true, usNote: "Autonome AI, geen flows" },
      { feature: "Shopify / Stripe integratie", us: true, them: true },
      { feature: "Merk-AI-persoonlijkheid", us: true, them: false },
      { feature: "FR / DE / NL support", us: true, them: false, themNote: "Voornamelijk Engels" },
      { feature: "Implementatie", us: "14 dagen", them: "Snelle self-service" },
      { feature: "Klant-ROI", us: "8× in 90 dagen", them: "Variabel social commerce" },
    ],
    whyTitle: "Waarom onze klanten AgenticWhatsup kozen boven Chatfuel",
    why: [
      "Chatfuel is historisch Facebook/Instagram — AgenticWhatsup is geboren voor WhatsApp",
      "Chatfuel biedt vooraf gebouwde flows — AgenticWhatsup gebruikt echte GPT-4/Claude AI",
      "Chatfuel transcribeert geen WhatsApp-spraakberichten — kritiek nadeel op Benelux-markten",
      "Chatfuel kan geen productfoto analyseren — AgenticWhatsup beschrijft en adviseert",
      "Chatfuel richt zich op social commerce — AgenticWhatsup op B2B en conversationeel MKB",
      "Chatfuel heeft Engelse support — onze klanten willen FR/DE/NL",
    ],
    forWhoTitle: "Wie moet wat kiezen?",
    forWhoUs: [
      "WhatsApp is uw hoofdkanaal",
      "U ontvangt spraak, foto's, complexe verzoeken",
      "U wilt AI die leert van uw bedrijf",
      "U richt zich op B2B of Benelux-markten",
    ],
    forWhoThem: [
      "Instagram DM en Facebook Messenger hebben prioriteit",
      "U doet aan social commerce",
      "U wilt een visuele builder voor uw flows",
      "Uw WhatsApp-gesprekken zijn eenvoudig en in het Engels",
    ],
    ctaTitle: "Is Chatfuel echt de juiste keuze voor uw WhatsApp?",
    ctaSubtitle: "Gratis audit 30 min — we vergelijken beide oplossingen objectief op uw concrete geval.",
    ctaPrimary: "Afspraak maken — Gratis audit",
    ctaSecondary: "Schrijf op WhatsApp",
    faqTitle: "Veelgestelde vragen",
    faqs: [
      { q: "Is Chatfuel goed voor WhatsApp?", a: "Chatfuel blinkt uit op Instagram en Facebook Messenger, zijn historische kanalen. Op WhatsApp is het aanbod nieuwer en gebouwd op dezelfde visuele flow-logica." },
      { q: "Vervangt AgenticWhatsup Chatfuel voor social?", a: "Nee. We zijn 100% WhatsApp. Voor Instagram DM of Messenger behoudt u Chatfuel en gebruikt u AgenticWhatsup voor WhatsApp." },
      { q: "Wat is het AI-verschil?", a: "Chatfuel biedt flows met AI-module. AgenticWhatsup gebruikt GPT-4 en Claude direct als brein, getraind op uw gegevens." },
      { q: "Hoe lang om over te schakelen?", a: "14 dagen voor een getrainde agent met CRM-integratie." },
      { q: "Is er een gratis proefperiode?", a: "Gratis audit 30 min met demonstratie." },
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
      languages: { fr: "/fr/comparatif/vs-chatfuel", en: "/en/comparatif/vs-chatfuel", de: "/de/comparatif/vs-chatfuel", nl: "/nl/comparatif/vs-chatfuel" },
      canonical: `https://agentic-whatsup.com/${locale}/comparatif/vs-chatfuel`,
    },
  };
}

const waNumber = "41799394222";

export default async function VsChatfuelPage({ params }: { params: Promise<{ locale: string }> }) {
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
    url: `https://agentic-whatsup.com/${locale}/comparatif/vs-chatfuel`,
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
            <div className="text-center">Chatfuel</div>
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
          <h3 className="text-slate-400 font-bold mb-4 text-sm">⚠️ Chatfuel si…</h3>
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
