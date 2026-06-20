import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageCircle, Bot, Globe, Zap, Users, Brain, BarChart3,
  CheckCircle, ArrowRight, Clock, ShoppingCart, HeadphonesIcon,
  Calendar, UserCheck, HelpCircle, Megaphone, Building2,
  Stethoscope, Utensils, GraduationCap, Home, Landmark,
  Plane, Scale, Truck, ShieldCheck, Car, Heart
} from "lucide-react";

export async function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }, { locale: "de" }, { locale: "nl" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const BASE = "https://agentic-whatsup.com";
  const meta: Record<string, { title: string; description: string }> = {
    fr: { title: "Agent Commercial IA WhatsApp 24/7 | AgenticWhatsup", description: "Transformez votre relation client avec un agent commercial IA WhatsApp disponible 24h/24. Ventes, support, RDV, qualification de leads — automatisés." },
    en: { title: "WhatsApp AI Sales Agent 24/7 | AgenticWhatsup", description: "Transform customer experience with a 24/7 WhatsApp AI sales agent. Sales, support, appointments, lead qualification — all automated." },
    de: { title: "WhatsApp KI-Verkaufsagent 24/7 | AgenticWhatsup", description: "Transformieren Sie Ihr Kundenerlebnis mit einem 24/7 WhatsApp KI-Verkaufsagenten. Verkauf, Support, Termine, Lead-Qualifizierung — alles automatisiert." },
    nl: { title: "WhatsApp AI Verkoopassistent 24/7 | AgenticWhatsup", description: "Transformeer uw klantrelatie met een 24/7 WhatsApp AI-verkoopassistent. Verkoop, support, afspraken, leadkwalificatie — allemaal geautomatiseerd." },
  };
  const m = meta[locale] ?? meta.fr;
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: `${BASE}/${locale}/agent-commercial-whatsapp`,
      languages: { fr: `${BASE}/fr/agent-commercial-whatsapp`, en: `${BASE}/en/agent-commercial-whatsapp`, de: `${BASE}/de/agent-commercial-whatsapp`, nl: `${BASE}/nl/agent-commercial-whatsapp`, "x-default": `${BASE}/fr/agent-commercial-whatsapp` },
    },
  };
}

type Locale = "fr" | "en" | "de" | "nl";
const T: Record<string, Record<Locale, string>> = {
  heroBadge:      { fr: "Agent Commercial IA — WhatsApp Business", en: "AI Sales Agent — WhatsApp Business", de: "KI-Verkaufsagent — WhatsApp Business", nl: "AI Verkoopassistent — WhatsApp Business" },
  heroTitle:      { fr: "Votre Agent Commercial IA\nWhatsApp 24/7", en: "Your WhatsApp AI Sales\nAgent 24/7", de: "Ihr WhatsApp KI-\nVerkaufsagent 24/7", nl: "Uw WhatsApp AI\nVerkoopassistent 24/7" },
  heroSub:        { fr: "Transformez l'expérience client avec un support WhatsApp instantané et personnalisé. Augmentez vos conversions, réduisez vos coûts et ne manquez plus jamais une opportunité.", en: "Transform the customer experience with instant, personalised WhatsApp support. Boost your conversions, reduce costs, and never miss a sales opportunity again.", de: "Transformieren Sie das Kundenerlebnis mit sofortigem, personalisiertem WhatsApp-Support. Steigern Sie Konversionen, senken Sie Kosten.", nl: "Transformeer de klantervaring met onmiddellijke, gepersonaliseerde WhatsApp-ondersteuning. Verhoog uw conversies en mis nooit meer een verkoopkans." },
  heroCta1:       { fr: "Démarrer maintenant", en: "Get started", de: "Jetzt starten", nl: "Begin nu" },
  heroCta2:       { fr: "Voir une démo", en: "See a demo", de: "Demo ansehen", nl: "Bekijk een demo" },
  whatTitle:      { fr: "Qu'est-ce qu'un Agent IA WhatsApp ?", en: "What Is a WhatsApp AI Agent?", de: "Was ist ein WhatsApp KI-Agent?", nl: "Wat is een WhatsApp AI-agent?" },
  whatDesc:       { fr: "Un assistant virtuel qui ne dort jamais, parle plus de 50 langues et offre une expérience client exceptionnelle via WhatsApp. Alimenté par les meilleurs modèles d'IA (GPT-4, Claude), il comprend le contexte, les intentions et même les émotions de vos clients pour y répondre de façon naturelle et personnalisée.", en: "A virtual assistant that never sleeps, speaks 50+ languages and delivers exceptional customer experiences via WhatsApp. Powered by top AI models (GPT-4, Claude), it understands context, intent, and even your customers' emotions to respond naturally and personally.", de: "Ein virtueller Assistent, der nie schläft, 50+ Sprachen spricht und außergewöhnliche Kundenerlebnisse via WhatsApp bietet. Angetrieben von führenden KI-Modellen (GPT-4, Claude).", nl: "Een virtuele assistent die nooit slaapt, 50+ talen spreekt en uitzonderlijke klantervaringen biedt via WhatsApp. Aangedreven door toonaangevende AI-modellen (GPT-4, Claude)." },
  howTitle:       { fr: "Comment Ça Marche ?", en: "How Does It Work?", de: "Wie Funktioniert Es?", nl: "Hoe Werkt Het?" },
  capsTitle:      { fr: "Capacités Qui Transforment Votre Business", en: "Capabilities That Transform Your Business", de: "Fähigkeiten, die Ihr Unternehmen transformieren", nl: "Mogelijkheden die uw bedrijf transformeren" },
  impactTitle:    { fr: "Impact Mesurable sur Votre Business", en: "Measurable Business Impact", de: "Messbarer Geschäftseinfluss", nl: "Meetbare bedrijfsimpact" },
  usecasesTitle:  { fr: "6 Cas d'Utilisation Clés", en: "6 Key Use Cases", de: "6 Schlüssel-Anwendungsfälle", nl: "6 Belangrijkste toepassingen" },
  chatTitle:      { fr: "Expériences Réelles, Résultats Réels", en: "Real Experiences, Real Results", de: "Echte Erfahrungen, echte Ergebnisse", nl: "Echte ervaringen, echte resultaten" },
  statsTitle:     { fr: "WhatsApp : Le Canal Incontournable", en: "WhatsApp: The Unmissable Channel", de: "WhatsApp: Der unverzichtbare Kanal", nl: "WhatsApp: Het onmisbare kanaal" },
  probTitle:      { fr: "Le Problème vs Notre Solution", en: "The Problem vs Our Solution", de: "Das Problem vs. unsere Lösung", nl: "Het probleem vs. onze oplossing" },
  probLabel:      { fr: "SANS agent IA", en: "WITHOUT AI agent", de: "OHNE KI-Agent", nl: "ZONDER AI-agent" },
  solLabel:       { fr: "AVEC AgenticWhatsup", en: "WITH AgenticWhatsup", de: "MIT AgenticWhatsup", nl: "MET AgenticWhatsup" },
  challTitle:     { fr: "Vos Défis → Nos Solutions IA", en: "Your Challenges → Our AI Solutions", de: "Ihre Herausforderungen → Unsere KI-Lösungen", nl: "Uw uitdagingen → Onze AI-oplossingen" },
  fullcapsTitle:  { fr: "Capacités IA Complètes", en: "Full AI Capabilities", de: "Vollständige KI-Fähigkeiten", nl: "Volledige AI-mogelijkheden" },
  implTitle:      { fr: "Implémentation en 3 Étapes", en: "3-Step Implementation", de: "Implementierung in 3 Schritten", nl: "Implementatie in 3 stappen" },
  sectorsTitle:   { fr: "Une Solution pour Chaque Secteur", en: "A Solution for Every Industry", de: "Eine Lösung für jede Branche", nl: "Een oplossing voor elke sector" },
  ctaTitle:       { fr: "Obtenez Votre Agent Commercial IA WhatsApp", en: "Get Your WhatsApp AI Sales Agent", de: "Holen Sie sich Ihren WhatsApp KI-Verkaufsagenten", nl: "Krijg uw WhatsApp AI-verkoopassistent" },
  ctaSub:         { fr: "Commencez à fournir une assistance client 24h/24 et 7j/7 dès aujourd'hui. Déploiement en moins de 2 semaines.", en: "Start delivering 24/7 customer support today. Deployed in under 2 weeks.", de: "Beginnen Sie noch heute mit 24/7-Kundensupport. Implementierung in weniger als 2 Wochen.", nl: "Begin vandaag met 24/7 klantenondersteuning. Geïmplementeerd in minder dan 2 weken." },
  ctaBtn1:        { fr: "Commencer maintenant", en: "Start now", de: "Jetzt beginnen", nl: "Begin nu" },
  ctaBtn2:        { fr: "Réserver une démo", en: "Book a demo", de: "Demo buchen", nl: "Demo boeken" },
};

const t = (key: string, locale: string): string => T[key]?.[(locale as Locale)] ?? T[key]?.fr ?? key;

const DEMO_CHAT: Record<string, Array<{ role: "client" | "ai"; time: string; text: string }>> = {
  fr: [
    { role: "client", time: "22h14", text: "Bonsoir ! Je cherche une solution pour automatiser mes réponses clients. Vous proposez quoi ?" },
    { role: "ai",     time: "22h14", text: "Bonsoir ! Je suis l'agent IA d'AgenticWhatsup 🤖 Nous proposons trois formules selon votre volume de messages :\n\n• **Starter** — Jusqu'à 500 conversations/mois\n• **Professional** — Jusqu'à 2.000 conversations/mois\n• **Business** — Volume illimité\n\nQuel est votre volume actuel de messages clients ?" },
    { role: "client", time: "22h15", text: "Environ 300-400 par mois. Et vous gérez aussi les photos et les vocaux ?" },
    { role: "ai",     time: "22h15", text: "Absolument ✅ C'est notre différenciateur clé :\n\n📸 **Analyse d'images** — Photos produits, documents, captures d'écran\n🎙️ **Transcription vocale** — Compréhension des messages audio en temps réel\n\nVoulez-vous voir une démonstration personnalisée pour votre secteur ?" },
  ],
  en: [
    { role: "client", time: "10:14 PM", text: "Hi! I'm looking for a solution to automate my customer replies. What do you offer?" },
    { role: "ai",     time: "10:14 PM", text: "Hi! I'm AgenticWhatsup's AI agent 🤖 We offer three plans based on your message volume:\n\n• **Starter** — Up to 500 conversations/month\n• **Professional** — Up to 2,000 conversations/month\n• **Business** — Unlimited volume\n\nWhat's your current customer message volume?" },
    { role: "client", time: "10:15 PM", text: "About 300-400 per month. Do you also handle photos and voice messages?" },
    { role: "ai",     time: "10:15 PM", text: "Absolutely ✅ That's our key differentiator:\n\n📸 **Image analysis** — Product photos, documents, screenshots\n🎙️ **Voice transcription** — Real-time audio message understanding\n\nWould you like a personalised demo for your sector?" },
  ],
  de: [
    { role: "client", time: "22:14 Uhr", text: "Hallo! Ich suche eine Lösung zur Automatisierung meiner Kundenantworten. Was bieten Sie an?" },
    { role: "ai",     time: "22:14 Uhr", text: "Hallo! Ich bin der KI-Agent von AgenticWhatsup 🤖 Wir bieten drei Pläne je nach Nachrichtenvolumen:\n\n• **Starter** — Bis zu 500 Gespräche/Monat\n• **Professional** — Bis zu 2.000 Gespräche/Monat\n• **Business** — Unbegrenztes Volumen\n\nWie hoch ist Ihr aktuelles Kundenanfragenvolumen?" },
    { role: "client", time: "22:15 Uhr", text: "Etwa 300-400 pro Monat. Können Sie auch Fotos und Sprachnachrichten verarbeiten?" },
    { role: "ai",     time: "22:15 Uhr", text: "Absolut ✅ Das ist unser Alleinstellungsmerkmal:\n\n📸 **Bildanalyse** — Produktfotos, Dokumente, Screenshots\n🎙️ **Sprachtranskription** — Echtzeit-Verständnis von Audionachrichten\n\nMöchten Sie eine personalisierte Demo für Ihre Branche?" },
  ],
  nl: [
    { role: "client", time: "22:14", text: "Goedenavond! Ik zoek een oplossing om mijn klantreacties te automatiseren. Wat biedt u aan?" },
    { role: "ai",     time: "22:14", text: "Goedenavond! Ik ben de AI-agent van AgenticWhatsup 🤖 We bieden drie formules op basis van uw berichtvolume:\n\n• **Starter** — Tot 500 gesprekken/maand\n• **Professional** — Tot 2.000 gesprekken/maand\n• **Business** — Onbeperkt volume\n\nWat is uw huidige klantberichtenvolume?" },
    { role: "client", time: "22:15", text: "Ongeveer 300-400 per maand. Verwerkt u ook foto's en spraakberichten?" },
    { role: "ai",     time: "22:15", text: "Absoluut ✅ Dat is onze sleuteldifferentiator:\n\n📸 **Beeldanalyse** — Productfoto's, documenten, screenshots\n🎙️ **Spraaktranscriptie** — Realtime begrip van audioberichten\n\nWilt u een gepersonaliseerde demo voor uw sector?" },
  ],
};

export default async function AgentCommercialPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = locale;
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || `/${l}/contact`;

  const HOW: Record<string, Array<{ step: string; title: string; desc: string }>> = {
    fr: [
      { step: "01", title: "Les clients vous écrivent", desc: "Vos clients envoient leurs messages sur votre numéro WhatsApp Business officiel — texte, photo, vocal ou document." },
      { step: "02", title: "L'IA comprend et analyse", desc: "Notre IA (GPT-4 + Vision + Whisper) analyse l'intention, le contexte, le sentiment et le format de chaque message en moins d'une seconde." },
      { step: "03", title: "Réponse instantanée + action", desc: "L'agent répond de façon naturelle, met à jour votre CRM, planifie un RDV ou escalade vers un humain si nécessaire." },
    ],
    en: [
      { step: "01", title: "Customers message you", desc: "Your customers send messages to your official WhatsApp Business number — text, photo, voice, or document." },
      { step: "02", title: "AI understands and analyses", desc: "Our AI (GPT-4 + Vision + Whisper) analyses intent, context, sentiment, and format of every message in under a second." },
      { step: "03", title: "Instant reply + action", desc: "The agent responds naturally, updates your CRM, books an appointment, or escalates to a human when needed." },
    ],
    de: [
      { step: "01", title: "Kunden schreiben Ihnen", desc: "Ihre Kunden senden Nachrichten an Ihre offizielle WhatsApp Business-Nummer — Text, Foto, Sprache oder Dokument." },
      { step: "02", title: "KI versteht und analysiert", desc: "Unsere KI (GPT-4 + Vision + Whisper) analysiert Absicht, Kontext, Stimmung und Format jeder Nachricht in unter einer Sekunde." },
      { step: "03", title: "Sofortantwort + Aktion", desc: "Der Agent antwortet natürlich, aktualisiert Ihr CRM, bucht einen Termin oder eskaliert bei Bedarf an einen Menschen." },
    ],
    nl: [
      { step: "01", title: "Klanten schrijven u", desc: "Uw klanten sturen berichten naar uw officiële WhatsApp Business-nummer — tekst, foto, spraak of document." },
      { step: "02", title: "AI begrijpt en analyseert", desc: "Onze AI (GPT-4 + Vision + Whisper) analyseert intentie, context, sentiment en formaat van elk bericht in minder dan een seconde." },
      { step: "03", title: "Onmiddellijk antwoord + actie", desc: "De agent antwoordt natuurlijk, werkt uw CRM bij, boekt een afspraak of escaleert naar een medewerker indien nodig." },
    ],
  };

  const CAPS: Record<string, Array<{ icon: string; title: string; desc: string }>> = {
    fr: [
      { icon: "clock", title: "Toujours disponible", desc: "24h/24, 7j/7, 365 jours par an — même à 3h du matin. Aucun congé, aucune maladie." },
      { icon: "globe", title: "Multilingue natif", desc: "Plus de 50 langues comprises et parlées instantanément. Français, anglais, néerlandais, allemand, arabe, et bien plus." },
      { icon: "zap", title: "Réponse en moins de 2 secondes", desc: "Vos clients n'attendent plus. Chaque message reçoit une réponse personnalisée en temps réel." },
      { icon: "users", title: "Collaboration humain-IA", desc: "L'agent escalade intelligemment vers vos équipes quand la situation l'exige. L'humain garde le contrôle." },
      { icon: "brain", title: "Connaissance de votre business", desc: "Entraîné sur vos produits, vos offres, vos procédures et votre ton de marque. Il parle comme vous." },
      { icon: "chart", title: "Analytics et performance", desc: "Métriques en temps réel : taux de résolution, sentiment client, sujets fréquents, taux de conversion." },
    ],
    en: [
      { icon: "clock", title: "Always available", desc: "24/7/365 — even at 3am. No holidays, no sick days." },
      { icon: "globe", title: "Natively multilingual", desc: "50+ languages understood and spoken instantly. French, English, Dutch, German, Arabic, and many more." },
      { icon: "zap", title: "Response in under 2 seconds", desc: "Your customers no longer wait. Every message gets a personalised reply in real time." },
      { icon: "users", title: "Human-AI collaboration", desc: "The agent intelligently escalates to your team when the situation calls for it. Humans stay in control." },
      { icon: "brain", title: "Knows your business", desc: "Trained on your products, prices, procedures, and brand tone. It speaks like you." },
      { icon: "chart", title: "Analytics and performance", desc: "Real-time metrics: resolution rate, customer sentiment, frequent topics, conversion rate." },
    ],
    de: [
      { icon: "clock", title: "Immer verfügbar", desc: "24/7/365 — auch um 3 Uhr morgens. Keine Urlaube, keine Krankentage." },
      { icon: "globe", title: "Nativ mehrsprachig", desc: "50+ Sprachen sofort verstanden und gesprochen. Deutsch, Französisch, Englisch, Niederländisch, Arabisch und mehr." },
      { icon: "zap", title: "Antwort in unter 2 Sekunden", desc: "Ihre Kunden warten nicht mehr. Jede Nachricht erhält eine personalisierte Antwort in Echtzeit." },
      { icon: "users", title: "Mensch-KI-Zusammenarbeit", desc: "Der Agent eskaliert intelligent an Ihr Team, wenn die Situation es erfordert. Menschen behalten die Kontrolle." },
      { icon: "brain", title: "Kennt Ihr Unternehmen", desc: "Trainiert auf Ihren Produkten, Preisen, Verfahren und Markentonalität. Er spricht wie Sie." },
      { icon: "chart", title: "Analytics und Performance", desc: "Echtzeit-Metriken: Lösungsrate, Kundenstimmung, häufige Themen, Konversionsrate." },
    ],
    nl: [
      { icon: "clock", title: "Altijd beschikbaar", desc: "24/7/365 — ook om 3 uur 's nachts. Geen vakanties, geen ziektedagen." },
      { icon: "globe", title: "Natively meertalig", desc: "50+ talen onmiddellijk begrepen en gesproken. Frans, Engels, Nederlands, Duits, Arabisch en meer." },
      { icon: "zap", title: "Antwoord in minder dan 2 seconden", desc: "Uw klanten wachten niet meer. Elk bericht krijgt een gepersonaliseerd antwoord in realtime." },
      { icon: "users", title: "Mens-AI-samenwerking", desc: "De agent escaleert intelligent naar uw team wanneer de situatie dat vereist. Mensen behouden de controle." },
      { icon: "brain", title: "Kent uw bedrijf", desc: "Getraind op uw producten, prijzen, procedures en merkidentiteit. Hij spreekt zoals u." },
      { icon: "chart", title: "Analytics en prestaties", desc: "Realtime statistieken: oplossingspercentage, klantensentiment, frequente onderwerpen, conversieratio." },
    ],
  };

  const USECASES: Record<string, Array<{ icon: React.ReactNode; title: string; desc: string }>> = {
    fr: [
      { icon: <ShoppingCart size={22} />, title: "Ventes & Commandes", desc: "Recommandations produits, devis, traitement des commandes, upsell et cross-sell automatisés." },
      { icon: <HeadphonesIcon size={22} />, title: "Service Client", desc: "Dépannage, gestion de compte, retours, remboursements et garanties traités en temps réel." },
      { icon: <Calendar size={22} />, title: "Prise de RDV", desc: "Planification, confirmations, reprogrammation et rappels automatiques dans votre agenda." },
      { icon: <UserCheck size={22} />, title: "Qualification de Leads", desc: "Collecte de contacts, scoring BANT, qualification et transfert vers vos commerciaux." },
      { icon: <HelpCircle size={22} />, title: "Gestion des FAQ", desc: "Réponses instantanées aux questions fréquentes 24/7 sans intervention humaine." },
      { icon: <Megaphone size={22} />, title: "Promotions & Marketing", desc: "Campagnes ciblées, relances paniers abandonnés, segmentation et messages personnalisés." },
    ],
    en: [
      { icon: <ShoppingCart size={22} />, title: "Sales & Orders", desc: "Product recommendations, quotes, order processing, automated upsell and cross-sell." },
      { icon: <HeadphonesIcon size={22} />, title: "Customer Service", desc: "Troubleshooting, account management, returns, refunds and warranties handled in real time." },
      { icon: <Calendar size={22} />, title: "Appointment Booking", desc: "Scheduling, confirmations, rescheduling and automatic reminders in your calendar." },
      { icon: <UserCheck size={22} />, title: "Lead Qualification", desc: "Contact collection, BANT scoring, qualification and handoff to your sales team." },
      { icon: <HelpCircle size={22} />, title: "FAQ Management", desc: "Instant answers to frequent questions 24/7 without human intervention." },
      { icon: <Megaphone size={22} />, title: "Promotions & Marketing", desc: "Targeted campaigns, abandoned cart recovery, segmentation and personalised messages." },
    ],
    de: [
      { icon: <ShoppingCart size={22} />, title: "Verkauf & Bestellungen", desc: "Produktempfehlungen, Angebote, Auftragsbearbeitung, automatisches Upsell und Cross-Sell." },
      { icon: <HeadphonesIcon size={22} />, title: "Kundendienst", desc: "Fehlerbehebung, Kontoverwaltung, Rücksendungen, Rückerstattungen und Garantien in Echtzeit." },
      { icon: <Calendar size={22} />, title: "Terminvereinbarung", desc: "Planung, Bestätigungen, Umplanung und automatische Erinnerungen in Ihrem Kalender." },
      { icon: <UserCheck size={22} />, title: "Lead-Qualifizierung", desc: "Kontakterfassung, BANT-Scoring, Qualifizierung und Übergabe an Ihr Vertriebsteam." },
      { icon: <HelpCircle size={22} />, title: "FAQ-Verwaltung", desc: "Sofortige Antworten auf häufige Fragen 24/7 ohne menschliches Eingreifen." },
      { icon: <Megaphone size={22} />, title: "Aktionen & Marketing", desc: "Gezielte Kampagnen, Warenkorbabbruch-Rückgewinnung, Segmentierung und personalisierte Nachrichten." },
    ],
    nl: [
      { icon: <ShoppingCart size={22} />, title: "Verkoop & Bestellingen", desc: "Productaanbevelingen, offertes, orderverwerking, geautomatiseerde upsell en cross-sell." },
      { icon: <HeadphonesIcon size={22} />, title: "Klantenservice", desc: "Probleemoplossing, accountbeheer, retouren, terugbetalingen en garanties in realtime." },
      { icon: <Calendar size={22} />, title: "Afspraken plannen", desc: "Planning, bevestigingen, herplannen en automatische herinneringen in uw agenda." },
      { icon: <UserCheck size={22} />, title: "Leadkwalificatie", desc: "Contactverzameling, BANT-scoring, kwalificatie en overdracht aan uw salesteam." },
      { icon: <HelpCircle size={22} />, title: "FAQ-beheer", desc: "Onmiddellijke antwoorden op veelgestelde vragen 24/7 zonder menselijke tussenkomst." },
      { icon: <Megaphone size={22} />, title: "Promoties & Marketing", desc: "Gerichte campagnes, verlaten winkelwagen herstel, segmentatie en gepersonaliseerde berichten." },
    ],
  };

  const CHALLENGES: Record<string, Array<{ prob: string; sol: string }>> = {
    fr: [
      { prob: "Personnel limité et coûteux", sol: "Assistant virtuel disponible 24/7 sans surcoût" },
      { prob: "Leads perdus hors heures de bureau", sol: "Réponse instantanée à toute heure" },
      { prob: "Barrières linguistiques", sol: "Support natif en 50+ langues" },
      { prob: "Tâches répétitives chronophages", sol: "Automatisation intelligente des routines" },
      { prob: "Temps de réponse trop long", sol: "Réponse garantie en moins de 2 secondes" },
      { prob: "Aucune donnée sur les conversations", sol: "Analytics complets en temps réel" },
    ],
    en: [
      { prob: "Limited and expensive staff", sol: "24/7 virtual assistant with no extra cost" },
      { prob: "Leads lost outside office hours", sol: "Instant response at any time" },
      { prob: "Language barriers", sol: "Native support in 50+ languages" },
      { prob: "Time-consuming repetitive tasks", sol: "Intelligent automation of routines" },
      { prob: "Response time too slow", sol: "Guaranteed response in under 2 seconds" },
      { prob: "No data on conversations", sol: "Full real-time analytics" },
    ],
    de: [
      { prob: "Begrenztes und teures Personal", sol: "Virtueller Assistent 24/7 ohne Mehrkosten" },
      { prob: "Verlorene Leads außerhalb der Geschäftszeiten", sol: "Sofortige Antwort zu jeder Zeit" },
      { prob: "Sprachbarrieren", sol: "Native Unterstützung in 50+ Sprachen" },
      { prob: "Zeitaufwändige Routineaufgaben", sol: "Intelligente Automatisierung von Routinen" },
      { prob: "Zu langsame Reaktionszeit", sol: "Garantierte Antwort in unter 2 Sekunden" },
      { prob: "Keine Gesprächsdaten", sol: "Vollständige Echtzeit-Analytics" },
    ],
    nl: [
      { prob: "Beperkt en duur personeel", sol: "Virtuele assistent 24/7 zonder meerkosten" },
      { prob: "Leads verloren buiten kantooruren", sol: "Onmiddellijk antwoord op elk moment" },
      { prob: "Taalbarrières", sol: "Native ondersteuning in 50+ talen" },
      { prob: "Tijdrovende repetitieve taken", sol: "Intelligente automatisering van routines" },
      { prob: "Reactietijd te traag", sol: "Gegarandeerd antwoord in minder dan 2 seconden" },
      { prob: "Geen gegevens over gesprekken", sol: "Volledige realtime analytics" },
    ],
  };

  const FULLCAPS: Record<string, Array<{ cat: string; items: string[] }>> = {
    fr: [
      { cat: "Ventes & Marketing", items: ["Recommandations produits personnalisées", "Génération de devis automatique", "Traitement et suivi des commandes", "Upsell & cross-sell intelligent", "Campagnes promotionnelles ciblées"] },
      { cat: "Service Client", items: ["Dépannage guidé pas à pas", "Gestion de compte client", "Traitement retours & remboursements", "Suivi garanties & SAV", "Escalade intelligente vers humain"] },
      { cat: "Information & Conseil", items: ["Fiches produit détaillées", "Cadrageication en temps réel", "Horaires et localisation", "Délais de livraison", "FAQ personnalisées"] },
      { cat: "Génération de Leads", items: ["Collecte automatique de contacts", "Scoring et qualification BANT", "Planification de démonstrations", "Nurturing automatisé", "Transfert CRM instantané"] },
      { cat: "Gestion des RDV", items: ["Calendrier et disponibilités live", "Confirmations automatiques", "Reprogrammation facile", "Rappels multi-canaux", "Réduction des no-shows"] },
      { cat: "Solutions Avancées", items: ["Workflows personnalisés", "Intégration CRM & ERP", "Analyse d'images & vocaux", "Mémoire conversationnelle", "Multi-agents coordonnés"] },
    ],
    en: [
      { cat: "Sales & Marketing", items: ["Personalised product recommendations", "Automatic quote generation", "Order processing and tracking", "Intelligent upsell & cross-sell", "Targeted promotional campaigns"] },
      { cat: "Customer Service", items: ["Step-by-step guided troubleshooting", "Customer account management", "Returns & refunds processing", "Warranty & after-sales tracking", "Intelligent human escalation"] },
      { cat: "Information & Advice", items: ["Detailed product sheets", "Real-time pricing", "Opening hours and location", "Delivery times", "Customised FAQs"] },
      { cat: "Lead Generation", items: ["Automatic contact collection", "BANT scoring and qualification", "Demo scheduling", "Automated nurturing", "Instant CRM handoff"] },
      { cat: "Appointment Management", items: ["Live calendar & availability", "Automatic confirmations", "Easy rescheduling", "Multi-channel reminders", "No-show reduction"] },
      { cat: "Advanced Solutions", items: ["Custom workflows", "CRM & ERP integration", "Image & voice analysis", "Conversation memory", "Coordinated multi-agent"] },
    ],
    de: [
      { cat: "Vertrieb & Marketing", items: ["Personalisierte Produktempfehlungen", "Automatische Angebotserstellung", "Auftragsbearbeitung und -verfolgung", "Intelligentes Upsell & Cross-Sell", "Gezielte Werbekampagnen"] },
      { cat: "Kundendienst", items: ["Schritt-für-Schritt-Fehlerbehebung", "Kundenkontoverwaltung", "Rücksendungen & Rückerstattungen", "Garantie & After-Sales-Verfolgung", "Intelligente Eskalation"] },
      { cat: "Information & Beratung", items: ["Detaillierte Produktblätter", "Echtzeit-Preisgestaltung", "Öffnungszeiten und Standort", "Lieferzeiten", "Individualisierte FAQs"] },
      { cat: "Lead-Generierung", items: ["Automatische Kontakterfassung", "BANT-Scoring und -Qualifizierung", "Demo-Planung", "Automatisiertes Nurturing", "Sofortige CRM-Übergabe"] },
      { cat: "Terminverwaltung", items: ["Live-Kalender & Verfügbarkeit", "Automatische Bestätigungen", "Einfache Umplanung", "Mehrkanalige Erinnerungen", "Reduzierung von No-Shows"] },
      { cat: "Erweiterte Lösungen", items: ["Benutzerdefinierte Workflows", "CRM & ERP-Integration", "Bild- & Sprachanalyse", "Gesprächsgedächtnis", "Koordinierte Multi-Agenten"] },
    ],
    nl: [
      { cat: "Verkoop & Marketing", items: ["Gepersonaliseerde productaanbevelingen", "Automatische offertes", "Orderverwerking en -tracking", "Intelligente upsell & cross-sell", "Gerichte promotiecampagnes"] },
      { cat: "Klantenservice", items: ["Stap-voor-stap probleemoplossing", "Klantaccountbeheer", "Retour- en terugbetalingsverwerking", "Garantie & after-sales tracking", "Intelligente escalatie"] },
      { cat: "Informatie & Advies", items: ["Gedetailleerde productfiches", "Realtime prijzen", "Openingsuren en locatie", "Levertijden", "Gepersonaliseerde FAQ's"] },
      { cat: "Leadgeneratie", items: ["Automatische contactverzameling", "BANT-scoring en kwalificatie", "Demoplanning", "Geautomatiseerde nurturing", "Directe CRM-overdracht"] },
      { cat: "Afsprakenbeheer", items: ["Live kalender & beschikbaarheid", "Automatische bevestigingen", "Eenvoudig herplannen", "Multikanaalherinneringen", "Vermindering no-shows"] },
      { cat: "Geavanceerde oplossingen", items: ["Aangepaste workflows", "CRM & ERP-integratie", "Beeld- & spraakanalyse", "Gespreksgeheugen", "Gecoördineerde multi-agent"] },
    ],
  };

  const IMPL: Record<string, Array<{ step: string; title: string; desc: string; detail: string }>> = {
    fr: [
      { step: "01", title: "Connectez WhatsApp", desc: "Via l'API officielle META WhatsApp Business — connexion sécurisée et cryptée en 48h.", detail: "Votre numéro professionnel reste le vôtre. Badge vert Meta disponible." },
      { step: "02", title: "Personnalisez l'IA", desc: "Nous chargeons vos produits, vos FAQ, vos procédures et votre tone of voice dans la base de connaissances.", detail: "Formation IA sur vos données en 3-5 jours. Ajustements illimités." },
      { step: "03", title: "Lancez & Mesurez", desc: "Activation en un clic. Monitoring temps réel. Analytics complets depuis votre dashboard.", detail: "Assistance à l'implémentation incluse. Support dédié les 30 premiers jours." },
    ],
    en: [
      { step: "01", title: "Connect WhatsApp", desc: "Via the official META WhatsApp Business API — secure encrypted connection within 48h.", detail: "Your professional number stays yours. Meta green badge available." },
      { step: "02", title: "Customise the AI", desc: "We load your products, FAQs, procedures, and tone of voice into the knowledge base.", detail: "AI training on your data in 3-5 days. Unlimited adjustments." },
      { step: "03", title: "Launch & Measure", desc: "One-click activation. Real-time monitoring. Full analytics from your dashboard.", detail: "Implementation support included. Dedicated support for the first 30 days." },
    ],
    de: [
      { step: "01", title: "WhatsApp verbinden", desc: "Über die offizielle META WhatsApp Business API — sichere verschlüsselte Verbindung innerhalb von 48 Stunden.", detail: "Ihre Professionelle Nummer bleibt Ihre. Meta-Grün-Abzeichen verfügbar." },
      { step: "02", title: "KI anpassen", desc: "Wir laden Ihre Produkte, FAQs, Verfahren und Markentonalität in die Wissensdatenbank.", detail: "KI-Training auf Ihren Daten in 3-5 Tagen. Unbegrenzte Anpassungen." },
      { step: "03", title: "Starten & Messen", desc: "Aktivierung per Klick. Echtzeit-Monitoring. Vollständige Analytics in Ihrem Dashboard.", detail: "Implementierungsunterstützung inbegriffen. Dedizierter Support für die ersten 30 Tage." },
    ],
    nl: [
      { step: "01", title: "WhatsApp verbinden", desc: "Via de officiële META WhatsApp Business API — veilige versleutelde verbinding binnen 48 uur.", detail: "Uw professioneel nummer blijft van u. Meta groen badge beschikbaar." },
      { step: "02", title: "AI personaliseren", desc: "We laden uw producten, FAQ's, procedures en merkidentiteit in de kennisbank.", detail: "AI-training op uw gegevens in 3-5 dagen. Onbeperkte aanpassingen." },
      { step: "03", title: "Lanceren & Meten", desc: "Activering met één klik. Realtime monitoring. Volledige analytics vanuit uw dashboard.", detail: "Implementatieondersteuning inbegrepen. Dedicated support eerste 30 dagen." },
    ],
  };

  const SECTORS: Array<{ icon: React.ReactNode; label: Record<string, string> }> = [
    { icon: <ShoppingCart size={18} />, label: { fr: "E-commerce", en: "E-commerce", de: "E-Commerce", nl: "E-commerce" } },
    { icon: <Brain size={18} />, label: { fr: "SaaS / Tech", en: "SaaS / Tech", de: "SaaS / Tech", nl: "SaaS / Tech" } },
    { icon: <Building2 size={18} />, label: { fr: "Services Pro", en: "Professional Services", de: "Professionelle Dienste", nl: "Professionele diensten" } },
    { icon: <Stethoscope size={18} />, label: { fr: "Santé & Bien-être", en: "Health & Wellness", de: "Gesundheit & Wellness", nl: "Gezondheid & Welzijn" } },
    { icon: <Utensils size={18} />, label: { fr: "Restauration", en: "Food & Hospitality", de: "Gastronomie", nl: "Horeca" } },
    { icon: <GraduationCap size={18} />, label: { fr: "Éducation", en: "Education", de: "Bildung", nl: "Onderwijs" } },
    { icon: <Home size={18} />, label: { fr: "Immobilier", en: "Real Estate", de: "Immobilien", nl: "Vastgoed" } },
    { icon: <Landmark size={18} />, label: { fr: "Finance & Assurance", en: "Finance & Insurance", de: "Finanzen & Versicherung", nl: "Financiën & Verzekering" } },
    { icon: <Plane size={18} />, label: { fr: "Voyages & Tourisme", en: "Travel & Tourism", de: "Reisen & Tourismus", nl: "Reizen & Toerisme" } },
    { icon: <Scale size={18} />, label: { fr: "Juridique", en: "Legal", de: "Recht", nl: "Juridisch" } },
    { icon: <Truck size={18} />, label: { fr: "Logistique", en: "Logistics", de: "Logistik", nl: "Logistiek" } },
    { icon: <Megaphone size={18} />, label: { fr: "Événementiel", en: "Events", de: "Veranstaltungen", nl: "Evenementen" } },
    { icon: <Users size={18} />, label: { fr: "B2B Services", en: "B2B Services", de: "B2B-Dienste", nl: "B2B-diensten" } },
    { icon: <ShieldCheck size={18} />, label: { fr: "Secteur Public", en: "Public Sector", de: "Öffentlicher Sektor", nl: "Publieke sector" } },
    { icon: <Zap size={18} />, label: { fr: "Services à domicile", en: "Home Services", de: "Heimdienste", nl: "Thuisdiensten" } },
    { icon: <Heart size={18} />, label: { fr: "ONG & Associations", en: "NGO & Non-profit", de: "NGO & Non-profit", nl: "NGO & Non-profit" } },
    { icon: <Car size={18} />, label: { fr: "Automobile", en: "Automotive", de: "Automobil", nl: "Automotive" } },
    { icon: <Bot size={18} />, label: { fr: "Marketplace", en: "Marketplace", de: "Marktplatz", nl: "Marktplaats" } },
    { icon: <Globe size={18} />, label: { fr: "Coaching & Formation", en: "Coaching & Training", de: "Coaching & Training", nl: "Coaching & Training" } },
    { icon: <BarChart3 size={18} />, label: { fr: "Marketing & Agences", en: "Marketing & Agencies", de: "Marketing & Agenturen", nl: "Marketing & Bureaus" } },
  ];

  const capIcons: Record<string, React.ReactNode> = {
    clock: <Clock size={22} />, globe: <Globe size={22} />, zap: <Zap size={22} />,
    users: <Users size={22} />, brain: <Brain size={22} />, chart: <BarChart3 size={22} />,
  };

  const impactItems: Record<string, Array<{ stat: string; label: string; color: string }>> = {
    fr: [
      { stat: "-55%", label: "Coûts de support client", color: "text-wa" },
      { stat: "24/7", label: "Disponibilité sans coût additionnel", color: "text-wa" },
      { stat: "+180%", label: "Leads qualifiés par mois", color: "text-wa" },
      { stat: "98%", label: "Taux d'ouverture des messages", color: "text-wa" },
    ],
    en: [
      { stat: "-55%", label: "Customer support costs", color: "text-wa" },
      { stat: "24/7", label: "Availability with no added cost", color: "text-wa" },
      { stat: "+180%", label: "Qualified leads per month", color: "text-wa" },
      { stat: "98%", label: "Message open rate", color: "text-wa" },
    ],
    de: [
      { stat: "-55%", label: "Kundensupportkosten", color: "text-wa" },
      { stat: "24/7", label: "Verfügbarkeit ohne Mehrkosten", color: "text-wa" },
      { stat: "+180%", label: "Qualifizierte Leads pro Monat", color: "text-wa" },
      { stat: "98%", label: "Öffnungsrate der Nachrichten", color: "text-wa" },
    ],
    nl: [
      { stat: "-55%", label: "Klantenservicekosten", color: "text-wa" },
      { stat: "24/7", label: "Beschikbaarheid zonder meerkosten", color: "text-wa" },
      { stat: "+180%", label: "Gekwalificeerde leads per maand", color: "text-wa" },
      { stat: "98%", label: "Openingspercentage berichten", color: "text-wa" },
    ],
  };

  const probItems: Record<string, { prob: Array<string>; sol: Array<string> }> = {
    fr: {
      prob: ["Prospect à 21h30 sans réponse", "Lead perdu chez un concurrent", "Revenus manqués", "Client frustré"],
      sol: ["Réponse IA en 30 secondes à 21h30", "Lead converti avant minuit", "Ventes 24h/24 et 7j/7", "Client satisfait et fidélisé"],
    },
    en: {
      prob: ["Prospect at 9:30pm with no reply", "Lead lost to a competitor", "Missed revenue", "Frustrated customer"],
      sol: ["AI reply in 30 seconds at 9:30pm", "Lead converted before midnight", "Sales 24/7", "Happy and loyal customer"],
    },
    de: {
      prob: ["Interessent um 21:30 Uhr ohne Antwort", "Lead an Konkurrenten verloren", "Entgangene Einnahmen", "Frustrierter Kunde"],
      sol: ["KI-Antwort in 30 Sekunden um 21:30 Uhr", "Lead vor Mitternacht konvertiert", "Verkäufe 24/7", "Zufriedener und treuer Kunde"],
    },
    nl: {
      prob: ["Prospect om 21:30 zonder antwoord", "Lead verloren aan concurrent", "Gemiste inkomsten", "Gefrustreerde klant"],
      sol: ["AI-antwoord in 30 seconden om 21:30", "Lead geconverteerd voor middernacht", "Verkopen 24/7", "Tevreden en trouwe klant"],
    },
  };

  const canonicalUrl = `https://agentic-whatsup.com/${l}/agent-commercial-whatsapp`;
  const pageTitles: Record<string, string> = {
    fr: "Agent Commercial IA WhatsApp 24/7 | AgenticWhatsup",
    en: "WhatsApp AI Sales Agent 24/7 | AgenticWhatsup",
    de: "WhatsApp KI-Verkaufsagent 24/7 | AgenticWhatsup",
    nl: "WhatsApp AI Verkoopassistent 24/7 | AgenticWhatsup",
  };
  const pageTitle = pageTitles[l] ?? pageTitles.fr;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        "name": pageTitle,
        "url": canonicalUrl,
        "provider": { "@type": "Organization", "@id": "https://agentic-whatsup.com/#organization", "name": "AgenticWhatsup" },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "AgenticWhatsup", "item": "https://agentic-whatsup.com" },
          { "@type": "ListItem", "position": 2, "name": pageTitle, "item": canonicalUrl },
        ],
      }) }} />
    <div className="bg-bg text-white">

      {/* ── HERO ── */}
      <section className="relative pt-24 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-wa/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-wa/10 border border-wa/20 text-wa text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <MessageCircle size={14} /> {t("heroBadge", l)}
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 whitespace-pre-line">
              {t("heroTitle", l)}
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-xl">{t("heroSub", l)}</p>
            <div className="flex flex-wrap gap-4">
              <Link href={`/${l}/contact`} className="flex items-center gap-2 bg-wa hover:bg-wa-hover text-white font-bold px-6 py-3 rounded-xl transition-colors">
                <MessageCircle size={18} /> {t("heroCta1", l)}
              </Link>
              <a href={calLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-surface border border-surface-2 hover:border-wa/40 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                <Calendar size={18} /> {t("heroCta2", l)}
              </a>
            </div>
          </div>
          {/* Chat demo */}
          <div className="bg-surface border border-surface-2 rounded-2xl p-5 shadow-2xl">
            <div className="flex items-center gap-3 pb-4 border-b border-surface-2 mb-4">
              <div className="w-10 h-10 bg-wa/20 rounded-full flex items-center justify-center">
                <Bot size={20} className="text-wa" />
              </div>
              <div>
                <div className="font-semibold text-sm">AgenticWhatsup AI</div>
                <div className="flex items-center gap-1.5 text-xs text-wa"><span className="w-1.5 h-1.5 bg-wa rounded-full inline-block" /> Online 24/7</div>
              </div>
            </div>
            <div className="space-y-3">
              {(DEMO_CHAT[l] ?? DEMO_CHAT.fr).map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "client" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${msg.role === "client" ? "bg-wa/20 text-white" : "bg-surface-2 border border-surface text-slate-200"}`}>
                    <div className="whitespace-pre-line leading-relaxed">{msg.text}</div>
                    <div className="text-[10px] text-slate-500 mt-1 text-right">{msg.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS ── */}
      <section className="py-20 px-4 bg-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t("whatTitle", l)}</h2>
          <p className="text-lg text-slate-300 leading-relaxed">{t("whatDesc", l)}</p>
          <div className="grid grid-cols-3 gap-6 mt-12">
            {[
              { label: { fr: "Langues", en: "Languages", de: "Sprachen", nl: "Talen" }, val: "50+" },
              { label: { fr: "Disponibilité", en: "Availability", de: "Verfügbarkeit", nl: "Beschikbaarheid" }, val: "24/7" },
              { label: { fr: "Temps de réponse", en: "Response time", de: "Reaktionszeit", nl: "Reactietijd" }, val: "<2s" },
            ].map((s) => (
              <div key={s.val} className="bg-surface border border-surface-2 rounded-2xl p-6">
                <div className="text-3xl font-extrabold text-wa mb-2">{s.val}</div>
                <div className="text-sm text-slate-400">{s.label[(l as Locale)] ?? s.label.fr}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">{t("howTitle", l)}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {(HOW[l] ?? HOW.fr).map((step) => (
              <div key={step.step} className="relative bg-surface border border-surface-2 rounded-2xl p-6">
                <div className="text-5xl font-black text-wa/15 mb-3">{step.step}</div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="py-20 px-4 bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">{t("capsTitle", l)}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(CAPS[l] ?? CAPS.fr).map((cap) => (
              <div key={cap.title} className="bg-surface border border-surface-2 hover:border-wa/30 rounded-2xl p-6 transition-colors">
                <div className="w-10 h-10 bg-wa/10 rounded-xl flex items-center justify-center text-wa mb-4">
                  {capIcons[cap.icon]}
                </div>
                <h3 className="font-bold mb-2">{cap.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT ── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-14">{t("impactTitle", l)}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(impactItems[l] ?? impactItems.fr).map((item) => (
              <div key={item.stat} className="bg-surface border border-surface-2 rounded-2xl p-6">
                <div className="text-4xl font-extrabold text-wa mb-3">{item.stat}</div>
                <div className="text-sm text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="py-20 px-4 bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">{t("usecasesTitle", l)}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(USECASES[l] ?? USECASES.fr).map((uc) => (
              <div key={uc.title} className="bg-surface border border-surface-2 hover:border-wa/30 rounded-2xl p-6 transition-colors">
                <div className="w-10 h-10 bg-wa/10 rounded-xl flex items-center justify-center text-wa mb-4">{uc.icon}</div>
                <h3 className="font-bold mb-2">{uc.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REAL CHAT EXAMPLES ── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">{t("chatTitle", l)}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* 24/7 example */}
            <div className="bg-surface border border-surface-2 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-wa">
                <Clock size={16} />
                {l === "fr" ? "Support 24/7 — 23h45" : l === "en" ? "24/7 Support — 11:45 PM" : l === "de" ? "24/7-Support — 23:45 Uhr" : "24/7 ondersteuning — 23:45"}
              </div>
              {[
                { role: "client", text: l === "fr" ? "Je n'arrive pas à accéder à mon compte depuis ce matin" : l === "en" ? "I can't access my account since this morning" : l === "de" ? "Ich kann seit heute Morgen nicht auf mein Konto zugreifen" : "Ik kan sinds vanochtend niet bij mijn account" },
                { role: "ai",    text: l === "fr" ? "Je suis désolé pour ce désagrément. Pouvez-vous me donner l'email associé à votre compte ? Je vais vérifier la situation immédiatement." : l === "en" ? "I'm sorry for the inconvenience. Could you give me the email linked to your account? I'll check the situation immediately." : l === "de" ? "Es tut mir leid für die Unannehmlichkeiten. Können Sie mir die mit Ihrem Konto verknüpfte E-Mail geben? Ich überprüfe die Situation sofort." : "Excuses voor het ongemak. Kunt u het e-mailadres van uw account geven? Ik controleer de situatie onmiddellijk." },
              ].map((m, i) => (
                <div key={i} className={`flex mb-12 ${m.role === "client" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${m.role === "client" ? "bg-wa/20" : "bg-surface-2 border border-surface"}`}>{m.text}</div>
                </div>
              ))}
              <div className="text-xs text-center text-wa mt-3 font-semibold">
                {l === "fr" ? "⚡ Temps de réponse : 8 secondes" : l === "en" ? "⚡ Response time: 8 seconds" : l === "de" ? "⚡ Reaktionszeit: 8 Sekunden" : "⚡ Reactietijd: 8 seconden"}
              </div>
            </div>
            {/* Multilingual example */}
            <div className="bg-surface border border-surface-2 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-wa">
                <Globe size={16} />
                {l === "fr" ? "Support multilingue" : l === "en" ? "Multilingual support" : l === "de" ? "Mehrsprachiger Support" : "Meertalige ondersteuning"}
              </div>
              {[
                { role: "client", text: "¿Cuáles son los plazos de entrega para España?" },
                { role: "ai",    text: l === "fr" ? "Para España, ofrecemos:\n\n• Estándar: 5-7 días hábiles\n• Express: 2-3 días hábiles\n• Premium: próximo día laborable\n\n¿Qué opción prefiere?" : "Para España, ofrecemos:\n\n• Estándar: 5-7 días hábiles\n• Express: 2-3 días hábiles\n• Premium: próximo día laborable\n\n¿Qué opción prefiere?" },
              ].map((m, i) => (
                <div key={i} className={`flex mb-12 ${m.role === "client" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-line ${m.role === "client" ? "bg-wa/20" : "bg-surface-2 border border-surface"}`}>{m.text}</div>
                </div>
              ))}
              <div className="text-xs text-center text-wa mt-3 font-semibold">
                🌍 {l === "fr" ? "50+ langues supportées" : l === "en" ? "50+ languages supported" : l === "de" ? "50+ Sprachen unterstützt" : "50+ talen ondersteund"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHATSAPP STATS ── */}
      <section className="py-20 px-4 bg-wa/5 border-y border-wa/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{t("statsTitle", l)}</h2>
          <p className="text-slate-400 mb-12">
            {l === "fr" ? "WhatsApp est l'application de messagerie la plus utilisée au monde. Vos clients y sont déjà." : l === "en" ? "WhatsApp is the world's most used messaging app. Your customers are already there." : l === "de" ? "WhatsApp ist die meistgenutzte Messaging-App der Welt. Ihre Kunden sind bereits dort." : "WhatsApp is de meest gebruikte messaging-app ter wereld. Uw klanten zijn er al."}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: "2,7B+", label: { fr: "Utilisateurs actifs", en: "Active users", de: "Aktive Nutzer", nl: "Actieve gebruikers" } },
              { val: "180+", label: { fr: "Pays", en: "Countries", de: "Länder", nl: "Landen" } },
              { val: "100B+", label: { fr: "Messages/jour", en: "Messages/day", de: "Nachrichten/Tag", nl: "Berichten/dag" } },
              { val: "98%", label: { fr: "Taux d'ouverture", en: "Open rate", de: "Öffnungsrate", nl: "Openingspercentage" } },
            ].map((s) => (
              <div key={s.val} className="bg-surface border border-surface-2 rounded-2xl p-6">
                <div className="text-3xl font-extrabold text-wa mb-2">{s.val}</div>
                <div className="text-xs text-slate-400">{s.label[(l as Locale)] ?? s.label.fr}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM VS SOLUTION ── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">{t("probTitle", l)}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-950/20 border border-red-800/30 rounded-2xl p-6">
              <div className="text-red-400 font-bold text-sm mb-4 uppercase tracking-wide">{t("probLabel", l)}</div>
              <ul className="space-y-3">
                {(probItems[l] ?? probItems.fr).prob.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="text-red-400 mt-0.5 shrink-0">✗</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-wa/5 border border-wa/20 rounded-2xl p-6">
              <div className="text-wa font-bold text-sm mb-4 uppercase tracking-wide">{t("solLabel", l)}</div>
              <ul className="space-y-3">
                {(probItems[l] ?? probItems.fr).sol.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle size={16} className="text-wa mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHALLENGES TABLE ── */}
      <section className="py-20 px-4 bg-surface/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">{t("challTitle", l)}</h2>
          <div className="space-y-3">
            {(CHALLENGES[l] ?? CHALLENGES.fr).map((row) => (
              <div key={row.prob} className="grid md:grid-cols-2 gap-4 bg-surface border border-surface-2 rounded-xl p-4">
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <span className="text-red-400 text-base">✗</span> {row.prob}
                </div>
                <div className="flex items-center gap-3 text-sm text-white">
                  <CheckCircle size={16} className="text-wa shrink-0" /> {row.sol}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL CAPABILITIES ── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">{t("fullcapsTitle", l)}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(FULLCAPS[l] ?? FULLCAPS.fr).map((cat) => (
              <div key={cat.cat} className="bg-surface border border-surface-2 rounded-2xl p-6">
                <h3 className="font-bold text-wa mb-4">{cat.cat}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle size={14} className="text-wa shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPLEMENTATION ── */}
      <section className="py-20 px-4 bg-surface/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">{t("implTitle", l)}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {(IMPL[l] ?? IMPL.fr).map((step) => (
              <div key={step.step} className="bg-surface border border-surface-2 rounded-2xl p-6">
                <div className="w-10 h-10 bg-wa rounded-xl flex items-center justify-center font-bold text-white mb-4">{step.step}</div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 mb-3">{step.desc}</p>
                <p className="text-xs text-wa/80 border-t border-surface-2 pt-3">{step.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-400 mt-8">
            {l === "fr" ? "✅ Assistance à l'implémentation gratuite — configuration technique et formation de votre équipe incluses" : l === "en" ? "✅ Free implementation assistance — technical setup and team training included" : l === "de" ? "✅ Kostenlose Implementierungsunterstützung — technische Einrichtung und Teamschulung inbegriffen" : "✅ Gratis implementatieondersteuning — technische configuratie en teamtraining inbegrepen"}
          </p>
        </div>
      </section>

      {/* ── SECTORS ── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">{t("sectorsTitle", l)}</h2>
          <p className="text-center text-slate-400 mb-12">
            {l === "fr" ? "Peu importe votre secteur, notre agent IA WhatsApp peut être personnalisé pour vos besoins spécifiques." : l === "en" ? "Whatever your industry, our WhatsApp AI agent can be customised to your specific needs." : l === "de" ? "Egal in welcher Branche, unser WhatsApp KI-Agent kann an Ihre spezifischen Bedürfnisse angepasst werden." : "Ongeacht uw sector kan onze WhatsApp AI-agent worden aangepast aan uw specifieke behoeften."}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
            {SECTORS.map((s) => (
              <div key={s.label.fr} className="flex items-center gap-2.5 bg-surface border border-surface-2 hover:border-wa/30 rounded-xl px-3 py-2.5 text-sm text-slate-300 transition-colors">
                <span className="text-wa shrink-0">{s.icon}</span>
                <span>{s.label[(l as Locale)] ?? s.label.fr}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={`/${l}/contact`} className="inline-flex items-center gap-2 text-wa hover:text-white text-sm font-semibold transition-colors">
              {l === "fr" ? "Discutez de vos besoins sectoriels" : l === "en" ? "Discuss your industry needs" : l === "de" ? "Besprechen Sie Ihre Branchenbedürfnisse" : "Bespreek uw sectorbehoeften"} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-4 bg-gradient-to-br from-wa/10 via-surface to-bg border-t border-surface">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{t("ctaTitle", l)}</h2>
          <p className="text-slate-300 text-lg mb-10">{t("ctaSub", l)}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`/${l}/contact`} className="flex items-center gap-2 bg-wa hover:bg-wa-hover text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors">
              <MessageCircle size={20} /> {t("ctaBtn1", l)}
            </Link>
            <a href={calLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-surface border border-surface-2 hover:border-wa/40 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors">
              <Calendar size={20} /> {t("ctaBtn2", l)}
            </a>
          </div>
          <p className="text-xs text-slate-500 mt-6">
            {l === "fr" ? "Rejoignez les entreprises qui font confiance à AgenticWhatsup pour offrir un service client exceptionnel 24h/24, 7j/7." : l === "en" ? "Join the businesses that trust AgenticWhatsup to deliver exceptional customer service 24/7." : l === "de" ? "Schließen Sie sich den Unternehmen an, die AgenticWhatsup vertrauen, um 24/7 außergewöhnlichen Kundenservice zu liefern." : "Sluit u aan bij de bedrijven die AgenticWhatsup vertrouwen voor uitzonderlijke klantenservice 24/7."}
          </p>
        </div>
      </section>
    </div>
    </>
  );
}
