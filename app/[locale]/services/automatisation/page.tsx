import type { Metadata } from "next";
import { Calendar, MessageCircle, CheckCircle, Zap } from "lucide-react";

const meta: Record<string, { title: string; description: string }> = {
  fr: { title: "Automatisation WhatsApp sans code — Créez vos workflows en 15 min | AgenticWhatsup", description: "Créez des workflows d'automatisation WhatsApp sans ligne de code : confirmation de commande, relance panier, rappel RDV, suivi livraison. L'agent IA exécute tout automatiquement." },
  en: { title: "No-code WhatsApp Automation — Build your workflows in 15 min | AgenticWhatsup", description: "Create WhatsApp automation workflows without a single line of code: order confirmation, cart follow-up, appointment reminders, delivery tracking. The AI agent handles everything automatically." },
  de: { title: "WhatsApp-Automatisierung ohne Code — Workflows in 15 Min erstellen | AgenticWhatsup", description: "Erstellen Sie WhatsApp-Automatisierungsworkflows ohne Code: Bestellbestätigung, Warenkorb-Nachfassung, Terminerinnerungen, Lieferverfolgung. Der KI-Agent erledigt alles automatisch." },
  nl: { title: "WhatsApp-automatisering zonder code — Bouw workflows in 15 min | AgenticWhatsup", description: "Maak WhatsApp-automatiseringsworkflows zonder code: orderbevestiging, winkelwagen follow-up, afspraakvermindringen, bezorgtracking. De AI-agent doet alles automatisch." },
};

const t: Record<string, {
  badge: string; h1: string; h1highlight: string; subtitle: string;
  stats: Array<{ value: string; label: string }>;
  howTitle: string;
  steps: Array<{ num: string; title: string; desc: string; example: string }>;
  usecasesTitle: string;
  usecases: Array<{ icon: string; title: string; desc: string; trigger: string; action: string }>;
  featuresTitle: string;
  features: string[];
  exampleTitle: string;
  exampleSteps: Array<{ time: string; action: string }>;
  ctaTitle: string; ctaSubtitle: string; ctaBadge: string; ctaPrimary: string; ctaSecondary: string;
}> = {
  fr: {
    badge: "Automatisation sans code",
    h1: "Créez vos workflows",
    h1highlight: "en 15 minutes chrono",
    subtitle: "Déclenchez des séquences WhatsApp automatiques sur n'importe quel événement : nouvelle commande, RDV pris, panier abandonné, livraison expédiée. Zéro code. Zéro intervention manuelle.",
    stats: [
      { value: "15 min", label: "pour créer votre 1er workflow" },
      { value: "0", label: "ligne de code requise" },
      { value: "24h/24", label: "exécution automatique" },
    ],
    howTitle: "Comment ça fonctionne",
    steps: [
      { num: "01", title: "Choisissez un déclencheur", desc: "Nouvelle commande, RDV pris, panier abandonné, formulaire rempli, tag CRM modifié... Choisissez l'événement qui lance votre séquence.", example: "Ex: commande passée sur Shopify" },
      { num: "02", title: "Définissez vos conditions", desc: "Filtrez selon le montant, la zone géographique, le statut client, le type de produit. Seuls les bons clients reçoivent le bon message.", example: "Ex: montant > estimation personnalisee ET première commande" },
      { num: "03", title: "Configurez vos actions", desc: "Message WhatsApp, délai d'attente, mise à jour CRM, notification d'équipe, lien de paiement — enchaînez autant d'étapes que nécessaire.", example: "Ex: envoyer confirmation + attendre 2j + envoyer avis" },
      { num: "04", title: "Activez et oubliez", desc: "L'agent IA exécute votre workflow 24h/24 sans intervention. Vous suivez les résultats en temps réel dans votre dashboard.", example: "Ex: 340 workflows exécutés ce mois" },
    ],
    usecasesTitle: "Workflows prêts à l'emploi",
    usecases: [
      {
        icon: "🛒",
        title: "Récupération panier abandonné",
        desc: "Relancez automatiquement les clients qui n'ont pas finalisé leur achat.",
        trigger: "Déclencheur : panier abandonné depuis 1h",
        action: "Action : WhatsApp + code promo 10% → +15% récupération",
      },
      {
        icon: "📦",
        title: "Suivi commande & livraison",
        desc: "Tenez vos clients informés à chaque étape sans effort.",
        trigger: "Déclencheur : statut commande modifié",
        action: "Action : WhatsApp automatique à chaque changement de statut",
      },
      {
        icon: "📅",
        title: "Rappels de RDV",
        desc: "Réduisez les no-shows avec des rappels automatiques avant chaque rendez-vous.",
        trigger: "Déclencheur : RDV dans 24h et 2h",
        action: "Action : rappel + lien confirmation → -52% no-shows",
      },
      {
        icon: "⭐",
        title: "Collecte d'avis",
        desc: "Demandez automatiquement un avis après chaque achat ou prestation.",
        trigger: "Déclencheur : commande livrée depuis 3 jours",
        action: "Action : demande d'avis Google ou Trustpilot",
      },
      {
        icon: "🔄",
        title: "Réactivation clients dormants",
        desc: "Relancez les clients inactifs avec une offre personnalisée au bon moment.",
        trigger: "Déclencheur : aucun achat depuis 60 jours",
        action: "Action : message personnalisé + offre exclusive",
      },
      {
        icon: "🎁",
        title: "Séquence post-achat",
        desc: "Accompagnez vos clients après l'achat pour maximiser la satisfaction et les ventes croisées.",
        trigger: "Déclencheur : commande confirmée",
        action: "Action : J+1 conseil utilisation → J+7 upsell → J+14 avis",
      },
    ],
    featuresTitle: "Ce que l'automatisation inclut",
    features: [
      "Déclencheurs illimités (commande, formulaire, CRM, tag, date...)",
      "Conditions et filtres avancés pour cibler les bons clients",
      "Délais personnalisables (minutes, heures, jours)",
      "Messages WhatsApp avec médias (image, vidéo, doc)",
      "Boutons interactifs et listes de réponse",
      "Intégration CRM automatique (mise à jour contact, pipeline)",
      "Notifications d'équipe sur Slack ou email",
      "Tests A/B sur vos messages",
      "Dashboard de performance en temps réel",
      "Arrêt automatique si le client répond",
    ],
    exampleTitle: "Exemple : workflow confirmation de commande",
    exampleSteps: [
      { time: "Immédiat", action: "Message WhatsApp : confirmation + récapitulatif commande" },
      { time: "+ 2 heures", action: "Notification expédition avec numéro de suivi" },
      { time: "+ 2 jours", action: "Vérification satisfaction : 'Votre commande est bien arrivée ?'" },
      { time: "+ 5 jours", action: "Demande d'avis Google avec lien direct" },
      { time: "+ 14 jours", action: "Suggestion produit complémentaire basée sur l'achat" },
    ],
    ctaBadge: "Opérationnel en 15 minutes",
    ctaTitle: "Votre premier workflow ce soir",
    ctaSubtitle: "On le configure ensemble pendant l'audit — vous le voyez fonctionner avant de signer.",
    ctaPrimary: "Prendre RDV",
    ctaSecondary: "Écrire sur WhatsApp",
  },
  en: {
    badge: "No-code automation",
    h1: "Build your workflows",
    h1highlight: "in 15 minutes flat",
    subtitle: "Trigger automatic WhatsApp sequences on any event: new order, appointment booked, abandoned cart, shipment dispatched. Zero code. Zero manual intervention.",
    stats: [
      { value: "15 min", label: "to create your 1st workflow" },
      { value: "0", label: "lines of code needed" },
      { value: "24/7", label: "automatic execution" },
    ],
    howTitle: "How it works",
    steps: [
      { num: "01", title: "Choose a trigger", desc: "New order, appointment booked, abandoned cart, form filled, CRM tag changed... Choose the event that starts your sequence.", example: "E.g.: order placed on Shopify" },
      { num: "02", title: "Set your conditions", desc: "Filter by amount, region, customer status, product type. Only the right customers receive the right message.", example: "E.g.: amount > estimation personnaliseeAND first order" },
      { num: "03", title: "Configure your actions", desc: "WhatsApp message, wait delay, CRM update, team notification, payment link — chain as many steps as needed.", example: "E.g.: send confirmation + wait 2d + send review request" },
      { num: "04", title: "Activate and forget", desc: "The AI agent runs your workflow 24/7 without intervention. Track results in real time on your dashboard.", example: "E.g.: 340 workflows executed this month" },
    ],
    usecasesTitle: "Ready-to-use workflows",
    usecases: [
      {
        icon: "🛒",
        title: "Abandoned cart recovery",
        desc: "Automatically follow up with customers who didn't complete their purchase.",
        trigger: "Trigger: cart abandoned for 1h",
        action: "Action: WhatsApp + 10% promo code → +15% recovery",
      },
      {
        icon: "📦",
        title: "Order & delivery tracking",
        desc: "Keep your customers informed at every step without effort.",
        trigger: "Trigger: order status changed",
        action: "Action: automatic WhatsApp at each status change",
      },
      {
        icon: "📅",
        title: "Appointment reminders",
        desc: "Reduce no-shows with automatic reminders before every appointment.",
        trigger: "Trigger: appointment in 24h and 2h",
        action: "Action: reminder + confirmation link → -52% no-shows",
      },
      {
        icon: "⭐",
        title: "Review collection",
        desc: "Automatically request a review after every purchase or service.",
        trigger: "Trigger: order delivered 3 days ago",
        action: "Action: Google or Trustpilot review request",
      },
      {
        icon: "🔄",
        title: "Dormant client reactivation",
        desc: "Re-engage inactive clients with a personalised offer at the right time.",
        trigger: "Trigger: no purchase in 60 days",
        action: "Action: personalised message + exclusive offer",
      },
      {
        icon: "🎁",
        title: "Post-purchase sequence",
        desc: "Support your clients after purchase to maximise satisfaction and cross-sells.",
        trigger: "Trigger: order confirmed",
        action: "Action: D+1 usage tip → D+7 upsell → D+14 review",
      },
    ],
    featuresTitle: "What automation includes",
    features: [
      "Unlimited triggers (order, form, CRM, tag, date...)",
      "Advanced conditions and filters to target the right customers",
      "Customisable delays (minutes, hours, days)",
      "WhatsApp messages with media (image, video, doc)",
      "Interactive buttons and reply lists",
      "Automatic CRM integration (contact update, pipeline)",
      "Team notifications on Slack or email",
      "A/B testing on your messages",
      "Real-time performance dashboard",
      "Automatic stop if the client replies",
    ],
    exampleTitle: "Example: order confirmation workflow",
    exampleSteps: [
      { time: "Immediate", action: "WhatsApp message: confirmation + order summary" },
      { time: "+ 2 hours", action: "Shipping notification with tracking number" },
      { time: "+ 2 days", action: "Satisfaction check: 'Did your order arrive safely?'" },
      { time: "+ 5 days", action: "Google review request with direct link" },
      { time: "+ 14 days", action: "Complementary product suggestion based on purchase" },
    ],
    ctaBadge: "Live in 15 minutes",
    ctaTitle: "Your first workflow tonight",
    ctaSubtitle: "We set it up together during the audit — you see it working before signing.",
    ctaPrimary: "Book a call — Free audit",
    ctaSecondary: "Write on WhatsApp",
  },
  de: {
    badge: "Automatisierung ohne Code",
    h1: "Erstellen Sie Ihre Workflows",
    h1highlight: "in 15 Minuten",
    subtitle: "Lösen Sie automatische WhatsApp-Sequenzen bei jedem Ereignis aus: neue Bestellung, Termin gebucht, verlassener Warenkorb, Versand. Null Code. Null manueller Eingriff.",
    stats: [
      { value: "15 Min", label: "für Ihren 1. Workflow" },
      { value: "0", label: "Codezeilen erforderlich" },
      { value: "24/7", label: "automatische Ausführung" },
    ],
    howTitle: "So funktioniert es",
    steps: [
      { num: "01", title: "Trigger wählen", desc: "Neue Bestellung, Termin gebucht, verlassener Warenkorb, ausgefülltes Formular, CRM-Tag geändert... Wählen Sie das Ereignis, das Ihre Sequenz startet.", example: "Z.B.: Bestellung auf Shopify aufgegeben" },
      { num: "02", title: "Bedingungen festlegen", desc: "Filtern nach Betrag, Region, Kundenstatus, Produkttyp. Nur die richtigen Kunden erhalten die richtige Nachricht.", example: "Z.B.: Betrag > estimation personnalisee UND Erstbestellung" },
      { num: "03", title: "Aktionen konfigurieren", desc: "WhatsApp-Nachricht, Wartezeit, CRM-Update, Team-Benachrichtigung, Zahlungslink — verketten Sie so viele Schritte wie nötig.", example: "Z.B.: Bestätigung senden + 2 Tage warten + Bewertung anfragen" },
      { num: "04", title: "Aktivieren und vergessen", desc: "Der KI-Agent führt Ihren Workflow 24/7 ohne Eingriff aus. Verfolgen Sie die Ergebnisse in Echtzeit.", example: "Z.B.: 340 Workflows diesen Monat ausgeführt" },
    ],
    usecasesTitle: "Gebrauchsfertige Workflows",
    usecases: [
      {
        icon: "🛒",
        title: "Warenkorb-Wiederherstellung",
        desc: "Automatisch Kunden kontaktieren, die ihren Kauf nicht abgeschlossen haben.",
        trigger: "Trigger: Warenkorb seit 1h verlassen",
        action: "Aktion: WhatsApp + 10% Rabattcode → +15% Wiederherstellung",
      },
      {
        icon: "📦",
        title: "Bestell- & Lieferverfolgung",
        desc: "Halten Sie Ihre Kunden bei jedem Schritt informiert.",
        trigger: "Trigger: Bestellstatus geändert",
        action: "Aktion: automatisches WhatsApp bei jeder Statusänderung",
      },
      {
        icon: "📅",
        title: "Terminerinnerungen",
        desc: "Reduzieren Sie No-Shows mit automatischen Erinnerungen vor jedem Termin.",
        trigger: "Trigger: Termin in 24h und 2h",
        action: "Aktion: Erinnerung + Bestätigungslink → -52% No-Shows",
      },
      {
        icon: "⭐",
        title: "Bewertungssammlung",
        desc: "Automatisch nach jedem Kauf oder jeder Dienstleistung eine Bewertung anfragen.",
        trigger: "Trigger: Bestellung seit 3 Tagen geliefert",
        action: "Aktion: Google- oder Trustpilot-Bewertungsanfrage",
      },
      {
        icon: "🔄",
        title: "Reaktivierung inaktiver Kunden",
        desc: "Reaktivieren Sie inaktive Kunden mit einem personalisierten Angebot.",
        trigger: "Trigger: kein Kauf seit 60 Tagen",
        action: "Aktion: personalisierte Nachricht + exklusives Angebot",
      },
      {
        icon: "🎁",
        title: "Post-Kauf-Sequenz",
        desc: "Begleiten Sie Ihre Kunden nach dem Kauf für maximale Zufriedenheit.",
        trigger: "Trigger: Bestellung bestätigt",
        action: "Aktion: T+1 Nutzungstipp → T+7 Upsell → T+14 Bewertung",
      },
    ],
    featuresTitle: "Was Automatisierung beinhaltet",
    features: [
      "Unbegrenzte Trigger (Bestellung, Formular, CRM, Tag, Datum...)",
      "Erweiterte Bedingungen und Filter",
      "Anpassbare Verzögerungen (Minuten, Stunden, Tage)",
      "WhatsApp-Nachrichten mit Medien (Bild, Video, Dokument)",
      "Interaktive Schaltflächen und Antwortlisten",
      "Automatische CRM-Integration",
      "Team-Benachrichtigungen auf Slack oder E-Mail",
      "A/B-Tests für Ihre Nachrichten",
      "Echtzeit-Performance-Dashboard",
      "Automatischer Stopp wenn Kunde antwortet",
    ],
    exampleTitle: "Beispiel: Bestellbestätigungs-Workflow",
    exampleSteps: [
      { time: "Sofort", action: "WhatsApp-Nachricht: Bestätigung + Bestellübersicht" },
      { time: "+ 2 Stunden", action: "Versandbenachrichtigung mit Trackingnummer" },
      { time: "+ 2 Tage", action: "Zufriedenheitsprüfung: 'Ist Ihre Bestellung gut angekommen?'" },
      { time: "+ 5 Tage", action: "Google-Bewertungsanfrage mit direktem Link" },
      { time: "+ 14 Tage", action: "Ergänzungsproduktvorschlag basierend auf dem Kauf" },
    ],
    ctaBadge: "In 15 Minuten live",
    ctaTitle: "Ihr erster Workflow heute Abend",
    ctaSubtitle: "Wir konfigurieren ihn gemeinsam beim Audit — Sie sehen ihn funktionieren, bevor Sie unterschreiben.",
    ctaPrimary: "Termin vereinbaren — Kostenloses Audit",
    ctaSecondary: "Auf WhatsApp schreiben",
  },
  nl: {
    badge: "Automatisering zonder code",
    h1: "Bouw uw workflows",
    h1highlight: "in 15 minuten",
    subtitle: "Activeer automatische WhatsApp-sequenties bij elk evenement: nieuwe bestelling, afspraak gemaakt, verlaten winkelwagen, verzending. Nul code. Nul handmatige tussenkomst.",
    stats: [
      { value: "15 min", label: "voor uw 1e workflow" },
      { value: "0", label: "regels code nodig" },
      { value: "24/7", label: "automatische uitvoering" },
    ],
    howTitle: "Hoe het werkt",
    steps: [
      { num: "01", title: "Kies een trigger", desc: "Nieuwe bestelling, afspraak gemaakt, verlaten winkelwagen, ingevuld formulier, CRM-tag gewijzigd... Kies het evenement dat uw sequentie start.", example: "Bijv.: bestelling geplaatst op Shopify" },
      { num: "02", title: "Stel uw voorwaarden in", desc: "Filter op bedrag, regio, klantstatus, producttype. Alleen de juiste klanten ontvangen het juiste bericht.", example: "Bijv.: bedrag > estimation personnaliseeEN eerste bestelling" },
      { num: "03", title: "Configureer uw acties", desc: "WhatsApp-bericht, wachttijd, CRM-update, teammelding, betaallink — koppel zoveel stappen als nodig.", example: "Bijv.: bevestiging sturen + 2 dagen wachten + review vragen" },
      { num: "04", title: "Activeer en vergeet", desc: "De AI-agent voert uw workflow 24/7 uit zonder tussenkomst. Volg resultaten in realtime op uw dashboard.", example: "Bijv.: 340 workflows uitgevoerd deze maand" },
    ],
    usecasesTitle: "Kant-en-klare workflows",
    usecases: [
      {
        icon: "🛒",
        title: "Verlaten winkelwagen terugwinnen",
        desc: "Volg automatisch klanten op die hun aankoop niet hebben afgerond.",
        trigger: "Trigger: winkelwagen 1u verlaten",
        action: "Actie: WhatsApp + 10% kortingscode → +15% terugwinning",
      },
      {
        icon: "📦",
        title: "Bestelling- & bezorgtracking",
        desc: "Houd uw klanten bij elke stap op de hoogte zonder moeite.",
        trigger: "Trigger: bestelstatus gewijzigd",
        action: "Actie: automatisch WhatsApp bij elke statuswijziging",
      },
      {
        icon: "📅",
        title: "Afspraakherinneringen",
        desc: "Verminder no-shows met automatische herinneringen vóór elke afspraak.",
        trigger: "Trigger: afspraak over 24u en 2u",
        action: "Actie: herinnering + bevestigingslink → -52% no-shows",
      },
      {
        icon: "⭐",
        title: "Reviews verzamelen",
        desc: "Vraag automatisch een review na elke aankoop of dienstverlening.",
        trigger: "Trigger: bestelling 3 dagen geleden geleverd",
        action: "Actie: Google of Trustpilot review-verzoek",
      },
      {
        icon: "🔄",
        title: "Slapende klanten reactiveren",
        desc: "Heractiveer inactieve klanten met een gepersonaliseerd aanbod.",
        trigger: "Trigger: geen aankoop in 60 dagen",
        action: "Actie: gepersonaliseerd bericht + exclusief aanbod",
      },
      {
        icon: "🎁",
        title: "Post-aankoop sequentie",
        desc: "Begeleid uw klanten na de aankoop voor maximale tevredenheid.",
        trigger: "Trigger: bestelling bevestigd",
        action: "Actie: D+1 gebruikstip → D+7 upsell → D+14 review",
      },
    ],
    featuresTitle: "Wat automatisering omvat",
    features: [
      "Onbeperkte triggers (bestelling, formulier, CRM, tag, datum...)",
      "Geavanceerde voorwaarden en filters",
      "Aanpasbare vertragingen (minuten, uren, dagen)",
      "WhatsApp-berichten met media (afbeelding, video, document)",
      "Interactieve knoppen en antwoordlijsten",
      "Automatische CRM-integratie",
      "Teammeldingen op Slack of e-mail",
      "A/B-tests voor uw berichten",
      "Realtime prestatie-dashboard",
      "Automatische stop als klant antwoordt",
    ],
    exampleTitle: "Voorbeeld: workflow orderbevestiging",
    exampleSteps: [
      { time: "Direct", action: "WhatsApp-bericht: bevestiging + besteloverzicht" },
      { time: "+ 2 uur", action: "Verzendmelding met trackingnummer" },
      { time: "+ 2 dagen", action: "Tevredenheidscheck: 'Is uw bestelling goed aangekomen?'" },
      { time: "+ 5 dagen", action: "Google review-verzoek met directe link" },
      { time: "+ 14 dagen", action: "Aanvullend productvoorstel op basis van aankoop" },
    ],
    ctaBadge: "Live in 15 minuten",
    ctaTitle: "Uw eerste workflow vanavond",
    ctaSubtitle: "We configureren het samen tijdens de audit — u ziet het werken voor u tekent.",
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
  const canonicalUrl = `https://agentic-whatsup.com/${locale}/services/automatisation`;
  const ogLocale = locale === "de" ? "de_DE" : locale === "nl" ? "nl_NL" : locale === "en" ? "en_US" : "fr_FR";
  return {
    title: m.title,
    description: m.description,
    keywords: "automatisation WhatsApp IA, workflows WhatsApp automatiques, réponses automatiques WhatsApp, agent IA WhatsApp 24h/24",
    robots: { index: true, follow: true },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        fr: "https://agentic-whatsup.com/fr/services/automatisation",
        en: "https://agentic-whatsup.com/en/services/automatisation",
        de: "https://agentic-whatsup.com/de/services/automatisation",
        nl: "https://agentic-whatsup.com/nl/services/automatisation",
        "x-default": "https://agentic-whatsup.com/fr/services/automatisation",
      },
    },
    openGraph: {
      type: "website",
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

export default async function AutomatisationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = t[locale] ?? t.fr;
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || `/${locale}/contact`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: (meta[locale] ?? meta.fr).title,
    description: (meta[locale] ?? meta.fr).description,
    url: `https://agentic-whatsup.com/${locale}/services/automatisation`,
    provider: { "@type": "Organization", name: "AgenticWhatsup", url: "https://agentic-whatsup.com" },
  };
  const pageUrl = `https://agentic-whatsup.com/${locale}/services/automatisation`;
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${pageUrl}#howto`,
    name: c.howTitle,
    description: (meta[locale] ?? meta.fr).description,
    step: c.steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.title,
      text: `${step.desc} ${step.example}`,
      url: pageUrl,
    })),
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: locale === "fr" ? "Comment creer un workflow WhatsApp sans code ?" : locale === "de" ? "Wie erstellt man einen WhatsApp-Workflow ohne Code?" : locale === "nl" ? "Hoe maak je een WhatsApp-workflow zonder code?" : "How do you create a no-code WhatsApp workflow?",
        acceptedAnswer: { "@type": "Answer", text: c.steps.map((step) => `${step.title}: ${step.desc}`).join(" ") },
      },
      {
        "@type": "Question",
        name: locale === "fr" ? "Quels workflows WhatsApp sont prets a l'emploi ?" : locale === "de" ? "Welche WhatsApp-Workflows sind sofort einsatzbereit?" : locale === "nl" ? "Welke WhatsApp-workflows zijn kant-en-klaar?" : "Which WhatsApp workflows are ready to use?",
        acceptedAnswer: { "@type": "Answer", text: c.usecases.map((usecase) => `${usecase.title}: ${usecase.desc}`).join(" ") },
      },
      {
        "@type": "Question",
        name: locale === "fr" ? "Que comprend l'automatisation WhatsApp ?" : locale === "de" ? "Was umfasst die WhatsApp-Automatisierung?" : locale === "nl" ? "Wat omvat WhatsApp-automatisering?" : "What does WhatsApp automation include?",
        acceptedAnswer: { "@type": "Answer", text: c.features.join(", ") },
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <div className="relative mb-20">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-wa/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative text-center">
          <span className="inline-flex items-center gap-2 bg-wa/10 border border-wa/20 rounded-full px-4 py-1.5 text-wa text-sm font-medium mb-6">
            <Zap size={14} /> {c.badge}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight" style={{ fontFamily: "Onest, sans-serif" }}>
            {c.h1}<br /><span className="text-wa">{c.h1highlight}</span>
          </h1>
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
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-20">
        {c.stats.map((s, i) => (
          <div key={i} className="bg-surface border border-surface-2 rounded-2xl p-6 text-center">
            <div className="text-wa font-extrabold text-3xl sm:text-4xl mb-1">{s.value}</div>
            <div className="text-slate-400 text-xs">{s.label}</div>
          </div>
        ))}
      </div>

      {/* How it works */}
      <div className="mb-20">
        <h2 className="text-white font-extrabold text-2xl mb-10 text-center" style={{ fontFamily: "Onest, sans-serif" }}>{c.howTitle}</h2>
        <div className="space-y-4">
          {c.steps.map((step, i) => (
            <div key={i} className="flex gap-5 bg-surface border border-surface-2 hover:border-wa/30 rounded-2xl p-6 transition-colors group">
              <div className="text-wa font-extrabold text-2xl font-mono shrink-0 w-10 group-hover:scale-110 transition-transform">{step.num}</div>
              <div className="flex-1">
                <h3 className="text-white font-bold mb-1">{step.title}</h3>
                <p className="text-slate-400 text-sm mb-2">{step.desc}</p>
                <span className="inline-block bg-wa/10 text-wa text-xs px-2.5 py-1 rounded-lg">{step.example}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Use cases */}
      <div className="mb-20">
        <h2 className="text-white font-extrabold text-2xl mb-8 text-center" style={{ fontFamily: "Onest, sans-serif" }}>{c.usecasesTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {c.usecases.map((uc, i) => (
            <div key={i} className="bg-surface border border-surface-2 hover:border-wa/30 rounded-2xl p-6 transition-colors">
              <div className="text-3xl mb-3">{uc.icon}</div>
              <h3 className="text-white font-bold mb-2">{uc.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{uc.desc}</p>
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2 text-slate-500">
                  <span className="text-indigo-400 shrink-0">⚡</span>
                  <span>{uc.trigger}</span>
                </div>
                <div className="flex items-start gap-2 text-wa">
                  <span className="shrink-0">→</span>
                  <span>{uc.action}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline example */}
      <div className="mb-20">
        <h2 className="text-white font-extrabold text-2xl mb-8 text-center" style={{ fontFamily: "Onest, sans-serif" }}>{c.exampleTitle}</h2>
        <div className="bg-surface border border-surface-2 rounded-2xl p-6">
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-surface-2" />
            {c.exampleSteps.map((step, i) => (
              <div key={i} className="flex items-start gap-4 mb-5 last:mb-0">
                <div className="w-14 text-right text-wa text-xs font-bold shrink-0 pt-1">{step.time}</div>
                <div className="relative z-10 w-2 h-2 rounded-full bg-wa mt-2 shrink-0" />
                <div className="flex-1 bg-surface-2 rounded-xl px-4 py-2.5">
                  <p className="text-slate-300 text-sm">{step.action}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features list */}
      <div className="mb-20">
        <h2 className="text-white font-extrabold text-2xl mb-6 text-center" style={{ fontFamily: "Onest, sans-serif" }}>{c.featuresTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {c.features.map((f, i) => (
            <div key={i} className="flex items-center gap-3 bg-surface border border-surface-2 rounded-xl p-4">
              <CheckCircle size={16} className="text-wa shrink-0" />
              <span className="text-slate-300 text-sm">{f}</span>
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
