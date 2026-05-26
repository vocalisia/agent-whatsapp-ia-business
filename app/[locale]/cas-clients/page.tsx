import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, MessageCircle, TrendingUp, Star } from "lucide-react";

const meta: Record<string, { title: string; description: string }> = {
  fr: { title: "Cas clients — Résultats mesurés avec l'agent IA WhatsApp | AgenticWhatsup", description: "Découvrez comment nos clients ont transformé leur business avec l'agent IA WhatsApp : +42% leads qualifiés, -68% abandons panier, 0 appel manqué. ROI moyen : 8×." },
  en: { title: "Client cases — Measured results with the WhatsApp AI agent | AgenticWhatsup", description: "See how our clients transformed their business with the WhatsApp AI agent: +42% qualified leads, -68% cart abandonment, 0 missed calls. Average ROI: 8×." },
  de: { title: "Kundenfälle — Gemessene Ergebnisse mit dem WhatsApp KI-Agent | AgenticWhatsup", description: "Erfahren Sie, wie unsere Kunden ihr Geschäft mit dem WhatsApp KI-Agent transformierten: +42% qualifizierte Leads, -68% Warenkorbabbrüche, 0 verpasste Anrufe." },
  nl: { title: "Klantcases — Gemeten resultaten met de WhatsApp AI-agent | AgenticWhatsup", description: "Ontdek hoe onze klanten hun bedrijf hebben getransformeerd met de WhatsApp AI-agent: +42% gekwalificeerde leads, -68% winkelwagenontwerpingen, 0 gemiste oproepen." },
};

const t: Record<string, {
  badge: string; h1: string; subtitle: string;
  globalStats: Array<{ value: string; label: string }>;
  casesTitle: string;
  cases: Array<{
    sector: string; icon: string; company: string;
    challenge: string; solution: string;
    results: Array<{ value: string; label: string }>;
    quote: string; author: string;
  }>;
  roiTitle: string; roiSubtitle: string;
  roiItems: Array<{ label: string; value: string }>;
  ctaTitle: string; ctaSubtitle: string; ctaBadge: string; ctaPrimary: string; ctaSecondary: string;
}> = {
  fr: {
    badge: "ROI moyen 8× en 90 jours",
    h1: "Ce que nos clients ont accompli",
    subtitle: "Des résultats concrets, mesurés et vérifiables. Chaque chiffre correspond à un client réel avec un contexte spécifique.",
    globalStats: [
      { value: "8×", label: "ROI moyen à 90 jours" },
      { value: "< 2 sem.", label: "pour voir les premiers résultats" },
      { value: "97%", label: "de clients renouvellent" },
    ],
    casesTitle: "Études de cas",
    cases: [
      {
        sector: "Immobilier", icon: "🏠", company: "Agence immobilière — Lausanne",
        challenge: "L'agence perdait 60% de ses leads faute de réponse rapide. Les agents passaient 3h/jour à qualifier des prospects non qualifiés.",
        solution: "L'agent IA qualifie les leads entrants 24h/24, collecte budget, délai, type de bien et prend RDV directement dans Google Calendar.",
        results: [
          { value: "+42%", label: "leads qualifiés" },
          { value: "-73%", label: "temps de qualification" },
          { value: "3h", label: "libérées/jour par agent" },
        ],
        quote: "En 3 semaines, l'agent répondait à 80% des demandes sans intervention. Mes agents se concentrent sur les visites.",
        author: "Directrice, Agence Immobilière Lausanne",
      },
      {
        sector: "E-commerce", icon: "🛒", company: "Boutique mode — Bruxelles",
        challenge: "Taux d'abandon panier de 78%. Le SAV traitait 200 demandes/jour sur tailles, délais et retours — toujours les mêmes questions.",
        solution: "L'agent répond instantanément aux questions produit, propose des alternatives de taille, envoie des rappels de panier et gère les retours.",
        results: [
          { value: "-68%", label: "abandons panier" },
          { value: "-81%", label: "tickets SAV répétitifs" },
          { value: "+31%", label: "panier moyen" },
        ],
        quote: "Le ROI a été immédiat. Le premier mois on a récupéré 47 commandes perdues grâce aux relances automatiques.",
        author: "CEO, boutique e-commerce mode",
      },
      {
        sector: "Santé", icon: "🏥", company: "Cabinet médical — Genève",
        challenge: "0 secrétaire disponible en dehors des heures d'ouverture. 35% des appels non décroché = patients qui partent à la concurrence.",
        solution: "L'agent gère les prises de RDV 24h/24, répond aux questions fréquentes (remboursements, préparation), envoie les rappels automatiques.",
        results: [
          { value: "0", label: "appel manqué" },
          { value: "-52%", label: "no-shows" },
          { value: "+28%", label: "nouveaux patients" },
        ],
        quote: "Nos patients apprécient de pouvoir prendre RDV à 23h. Le taux de no-show a chuté de moitié.",
        author: "Dr. S., Médecin généraliste, Genève",
      },
      {
        sector: "Restaurant", icon: "🍽️", company: "Groupe de restaurants — Paris",
        challenge: "Téléphone saturé le week-end. Les réservations perdues représentaient 15% du CA potentiel. Gestion chaotique des groupes et demandes spéciales.",
        solution: "L'agent prend les réservations, gère les menus de groupe, envoie les confirmations et collecte les préférences alimentaires.",
        results: [
          { value: "+38%", label: "réservations en ligne" },
          { value: "-90%", label: "appels entrants" },
          { value: "+22%", label: "CA groupes" },
        ],
        quote: "Le samedi soir, l'agent gère 50 conversations en même temps pendant que notre équipe se concentre sur les clients en salle.",
        author: "Directeur opérations, Groupe Restauration",
      },
      {
        sector: "Assurance", icon: "🛡️", company: "Courtier indépendant — Zurich",
        challenge: "Cycle de vente de 3 semaines en moyenne. Prospects qui demandent un devis puis disparaissent sans signer.",
        solution: "L'agent collecte les informations de risque, envoie des devis personnalisés, relance automatiquement et répond aux objections courantes.",
        results: [
          { value: "-58%", label: "cycle de vente" },
          { value: "+35%", label: "taux de conversion" },
          { value: "4,8/5", label: "satisfaction client" },
        ],
        quote: "J'ai doublé mon portefeuille en 6 mois sans embaucher. L'agent gère toute la phase de qualification.",
        author: "Courtier indépendant, Zurich",
      },
      {
        sector: "Coach & Formation", icon: "🎯", company: "Infopreneur — Paris",
        challenge: "200 messages entrants par semaine sur les formations. Impossible de tous les traiter manuellement tout en délivrant le contenu.",
        solution: "L'agent qualifie, présente les offres, gère les objections prix et encaisse via lien de paiement Stripe intégré.",
        results: [
          { value: "+67%", label: "conversions formations" },
          { value: "-80%", label: "no-shows appels découverte" },
          { value: "3×", label: "revenu par abonné" },
        ],
        quote: "L'agent a fait 18 ventes en une nuit pendant que je dormais. C'est la meilleure décision business que j'ai prise.",
        author: "Coach business & formateur en ligne",
      },
    ],
    roiTitle: "Calculez votre ROI",
    roiSubtitle: "Basé sur la moyenne de nos 200+ clients actifs",
    roiItems: [
      { label: "Temps économisé / semaine", value: "12-18h" },
      { label: "Réduction coût SAV", value: "-60 à -80%" },
      { label: "Augmentation leads qualifiés", value: "+30 à +60%" },
      { label: "Délai de rentabilisation", value: "< 30 jours" },
      { label: "ROI moyen à 90 jours", value: "8× l'investissement" },
    ],
    ctaBadge: "Résultats garantis",
    ctaTitle: "Quel résultat voulez-vous atteindre ?",
    ctaSubtitle: "30 minutes pour analyser votre situation et estimer votre ROI potentiel.",
    ctaPrimary: "Prendre RDV — Audit gratuit",
    ctaSecondary: "Écrire sur WhatsApp",
  },
  en: {
    badge: "Average ROI 8× in 90 days",
    h1: "What our clients have achieved",
    subtitle: "Concrete, measured and verifiable results. Every figure corresponds to a real client with a specific context.",
    globalStats: [
      { value: "8×", label: "average ROI at 90 days" },
      { value: "< 2 wks", label: "to see first results" },
      { value: "97%", label: "of clients renew" },
    ],
    casesTitle: "Case studies",
    cases: [
      {
        sector: "Real estate", icon: "🏠", company: "Real estate agency — Lausanne",
        challenge: "The agency was losing 60% of leads due to slow response. Agents spent 3h/day qualifying unqualified prospects.",
        solution: "The AI agent qualifies incoming leads 24/7, collects budget, timeline, property type and books directly into Google Calendar.",
        results: [
          { value: "+42%", label: "qualified leads" },
          { value: "-73%", label: "qualification time" },
          { value: "3h", label: "freed/day per agent" },
        ],
        quote: "In 3 weeks, the agent was handling 80% of requests without intervention. My agents focus on viewings.",
        author: "Director, Real Estate Agency Lausanne",
      },
      {
        sector: "E-commerce", icon: "🛒", company: "Fashion boutique — Brussels",
        challenge: "Cart abandonment rate of 78%. Customer service handled 200 requests/day on sizes, delivery and returns — always the same questions.",
        solution: "The agent answers product questions instantly, suggests size alternatives, sends cart reminders and handles returns.",
        results: [
          { value: "-68%", label: "cart abandonment" },
          { value: "-81%", label: "repetitive support tickets" },
          { value: "+31%", label: "average basket" },
        ],
        quote: "ROI was immediate. The first month we recovered 47 lost orders thanks to automatic follow-ups.",
        author: "CEO, fashion e-commerce boutique",
      },
      {
        sector: "Healthcare", icon: "🏥", company: "Medical practice — Geneva",
        challenge: "No receptionist available outside opening hours. 35% of calls unanswered = patients going to competitors.",
        solution: "The agent handles appointments 24/7, answers common questions (reimbursements, preparation), sends automatic reminders.",
        results: [
          { value: "0", label: "missed calls" },
          { value: "-52%", label: "no-shows" },
          { value: "+28%", label: "new patients" },
        ],
        quote: "Our patients appreciate being able to book at 11pm. The no-show rate dropped by half.",
        author: "Dr. S., General practitioner, Geneva",
      },
      {
        sector: "Restaurant", icon: "🍽️", company: "Restaurant group — Paris",
        challenge: "Phone overwhelmed at weekends. Lost reservations represented 15% of potential revenue. Chaotic management of groups and special requests.",
        solution: "The agent takes reservations, manages group menus, sends confirmations and collects dietary preferences.",
        results: [
          { value: "+38%", label: "online bookings" },
          { value: "-90%", label: "inbound calls" },
          { value: "+22%", label: "group revenue" },
        ],
        quote: "On Saturday nights, the agent handles 50 conversations at once while our team focuses on in-room guests.",
        author: "Operations Director, Restaurant Group",
      },
      {
        sector: "Insurance", icon: "🛡️", company: "Independent broker — Zurich",
        challenge: "Average sales cycle of 3 weeks. Prospects requesting a quote then disappearing without signing.",
        solution: "The agent collects risk information, sends personalised quotes, follows up automatically and handles common objections.",
        results: [
          { value: "-58%", label: "sales cycle" },
          { value: "+35%", label: "conversion rate" },
          { value: "4.8/5", label: "customer satisfaction" },
        ],
        quote: "I doubled my portfolio in 6 months without hiring. The agent handles the entire qualification phase.",
        author: "Independent broker, Zurich",
      },
      {
        sector: "Coach & Training", icon: "🎯", company: "Online trainer — Paris",
        challenge: "200 incoming messages per week about courses. Impossible to handle all of them manually while also delivering content.",
        solution: "The agent qualifies, presents offers, handles price objections and collects payment via integrated Stripe link.",
        results: [
          { value: "+67%", label: "course conversions" },
          { value: "-80%", label: "discovery call no-shows" },
          { value: "3×", label: "revenue per subscriber" },
        ],
        quote: "The agent made 18 sales in one night while I slept. It's the best business decision I've made.",
        author: "Business coach & online trainer",
      },
    ],
    roiTitle: "Calculate your ROI",
    roiSubtitle: "Based on the average of our 200+ active clients",
    roiItems: [
      { label: "Time saved / week", value: "12-18h" },
      { label: "Customer service cost reduction", value: "-60 to -80%" },
      { label: "Increase in qualified leads", value: "+30 to +60%" },
      { label: "Break-even period", value: "< 30 days" },
      { label: "Average ROI at 90 days", value: "8× the investment" },
    ],
    ctaBadge: "Guaranteed results",
    ctaTitle: "What result do you want to achieve?",
    ctaSubtitle: "30 minutes to analyse your situation and estimate your potential ROI.",
    ctaPrimary: "Book a call — Free audit",
    ctaSecondary: "Write on WhatsApp",
  },
  de: {
    badge: "Durchschnittlicher ROI 8× in 90 Tagen",
    h1: "Was unsere Kunden erreicht haben",
    subtitle: "Konkrete, gemessene und nachprüfbare Ergebnisse. Jede Zahl entspricht einem echten Kunden mit einem spezifischen Kontext.",
    globalStats: [
      { value: "8×", label: "durchschnittlicher ROI nach 90 Tagen" },
      { value: "< 2 Wo.", label: "bis erste Ergebnisse sichtbar" },
      { value: "97%", label: "der Kunden verlängern" },
    ],
    casesTitle: "Fallstudien",
    cases: [
      {
        sector: "Immobilien", icon: "🏠", company: "Immobilienagentur — Lausanne",
        challenge: "Die Agentur verlor 60% ihrer Leads durch langsame Reaktionszeiten. Agenten verbrachten 3h/Tag mit der Qualifizierung ungeeigneter Interessenten.",
        solution: "Der KI-Agent qualifiziert eingehende Leads rund um die Uhr, erfasst Budget, Zeitplan, Objekttyp und bucht direkt in Google Calendar.",
        results: [
          { value: "+42%", label: "qualifizierte Leads" },
          { value: "-73%", label: "Qualifizierungszeit" },
          { value: "3h", label: "freigesetzt/Tag pro Agent" },
        ],
        quote: "In 3 Wochen erledigte der Agent 80% der Anfragen ohne Eingreifen. Meine Agenten konzentrieren sich auf Besichtigungen.",
        author: "Direktorin, Immobilienagentur Lausanne",
      },
      {
        sector: "E-Commerce", icon: "🛒", company: "Mode-Boutique — Brüssel",
        challenge: "Warenkorbabbruchrate von 78%. Der Kundenservice bearbeitete 200 Anfragen/Tag zu Größen, Lieferzeiten und Retouren — immer dieselben Fragen.",
        solution: "Der Agent beantwortet Produktfragen sofort, schlägt Größenalternativen vor, sendet Warenkorberinnerungen und verwaltet Retouren.",
        results: [
          { value: "-68%", label: "Warenkorbabbrüche" },
          { value: "-81%", label: "wiederholende Support-Tickets" },
          { value: "+31%", label: "durchschnittlicher Warenkorb" },
        ],
        quote: "Der ROI war sofort. Im ersten Monat haben wir dank automatischer Nachverfolgung 47 verlorene Bestellungen zurückgewonnen.",
        author: "CEO, Mode-E-Commerce-Boutique",
      },
      {
        sector: "Gesundheit", icon: "🏥", company: "Arztpraxis — Genf",
        challenge: "Keine Rezeptionistin außerhalb der Öffnungszeiten verfügbar. 35% unbeantwortete Anrufe = Patienten gehen zur Konkurrenz.",
        solution: "Der Agent verwaltet Termine 24/7, beantwortet häufige Fragen, sendet automatische Erinnerungen.",
        results: [
          { value: "0", label: "verpasste Anrufe" },
          { value: "-52%", label: "No-Shows" },
          { value: "+28%", label: "neue Patienten" },
        ],
        quote: "Unsere Patienten schätzen es, um 23 Uhr einen Termin vereinbaren zu können. Die No-Show-Rate hat sich halbiert.",
        author: "Dr. S., Allgemeinmediziner, Genf",
      },
      {
        sector: "Restaurant", icon: "🍽️", company: "Restaurantgruppe — Paris",
        challenge: "Telefon am Wochenende überlastet. Verlorene Reservierungen machten 15% des potenziellen Umsatzes aus.",
        solution: "Der Agent nimmt Reservierungen entgegen, verwaltet Gruppenmenüs, sendet Bestätigungen und erfasst Ernährungsvorlieben.",
        results: [
          { value: "+38%", label: "Online-Reservierungen" },
          { value: "-90%", label: "eingehende Anrufe" },
          { value: "+22%", label: "Gruppensumsatz" },
        ],
        quote: "Am Samstagabend verwaltet der Agent 50 Gespräche gleichzeitig, während sich unser Team auf die Gäste konzentriert.",
        author: "Betriebsleiter, Restaurantgruppe",
      },
      {
        sector: "Versicherung", icon: "🛡️", company: "Unabhängiger Makler — Zürich",
        challenge: "Durchschnittlicher Verkaufszyklus von 3 Wochen. Interessenten fordern ein Angebot an und verschwinden dann.",
        solution: "Der Agent erfasst Risikoinformationen, sendet personalisierte Angebote, verfolgt automatisch nach und bearbeitet häufige Einwände.",
        results: [
          { value: "-58%", label: "Verkaufszyklus" },
          { value: "+35%", label: "Konversionsrate" },
          { value: "4,8/5", label: "Kundenzufriedenheit" },
        ],
        quote: "Ich habe mein Portfolio in 6 Monaten verdoppelt, ohne einzustellen. Der Agent übernimmt die gesamte Qualifizierungsphase.",
        author: "Unabhängiger Makler, Zürich",
      },
      {
        sector: "Coach & Training", icon: "🎯", company: "Online-Trainer — Paris",
        challenge: "200 eingehende Nachrichten pro Woche über Kurse. Unmöglich alle manuell zu bearbeiten und gleichzeitig Inhalte zu liefern.",
        solution: "Der Agent qualifiziert, präsentiert Angebote, behandelt Preiseinwände und kassiert über integrierten Stripe-Link.",
        results: [
          { value: "+67%", label: "Kursverkäufe" },
          { value: "-80%", label: "No-Shows Entdeckungsgespräche" },
          { value: "3×", label: "Umsatz pro Abonnent" },
        ],
        quote: "Der Agent machte 18 Verkäufe in einer Nacht, während ich schlief. Die beste Geschäftsentscheidung, die ich je getroffen habe.",
        author: "Business-Coach & Online-Trainer",
      },
    ],
    roiTitle: "Berechnen Sie Ihren ROI",
    roiSubtitle: "Basierend auf dem Durchschnitt unserer 200+ aktiven Kunden",
    roiItems: [
      { label: "Eingesparte Zeit / Woche", value: "12-18h" },
      { label: "Kostenreduktion Kundendienst", value: "-60 bis -80%" },
      { label: "Zunahme qualifizierter Leads", value: "+30 bis +60%" },
      { label: "Amortisierungszeit", value: "< 30 Tage" },
      { label: "Durchschnittlicher ROI nach 90 Tagen", value: "8× die Investition" },
    ],
    ctaBadge: "Garantierte Ergebnisse",
    ctaTitle: "Welches Ergebnis möchten Sie erreichen?",
    ctaSubtitle: "30 Minuten, um Ihre Situation zu analysieren und Ihren potenziellen ROI zu schätzen.",
    ctaPrimary: "Termin vereinbaren — Kostenloses Audit",
    ctaSecondary: "Auf WhatsApp schreiben",
  },
  nl: {
    badge: "Gemiddeld ROI 8× in 90 dagen",
    h1: "Wat onze klanten hebben bereikt",
    subtitle: "Concrete, gemeten en verifieerbare resultaten. Elk cijfer correspondeert met een echte klant met een specifieke context.",
    globalStats: [
      { value: "8×", label: "gemiddeld ROI na 90 dagen" },
      { value: "< 2 wk.", label: "tot eerste resultaten zichtbaar" },
      { value: "97%", label: "van klanten verlengen" },
    ],
    casesTitle: "Casestudies",
    cases: [
      {
        sector: "Vastgoed", icon: "🏠", company: "Vastgoedkantoor — Lausanne",
        challenge: "Het kantoor verloor 60% van zijn leads door trage respons. Agenten besteedden 3u/dag aan het kwalificeren van niet-gekwalificeerde prospects.",
        solution: "De AI-agent kwalificeert inkomende leads 24/7, verzamelt budget, tijdlijn, woningtype en boekt direct in Google Calendar.",
        results: [
          { value: "+42%", label: "gekwalificeerde leads" },
          { value: "-73%", label: "kwalificatietijd" },
          { value: "3u", label: "vrijgemaakt/dag per agent" },
        ],
        quote: "In 3 weken behandelde de agent 80% van de aanvragen zonder tussenkomst. Mijn agenten concentreren zich op bezichtigingen.",
        author: "Directrice, Vastgoedkantoor Lausanne",
      },
      {
        sector: "E-commerce", icon: "🛒", company: "Modeboutique — Brussel",
        challenge: "Verlatingratio winkelwagen van 78%. Klantenservice behandelde 200 verzoeken/dag over maten, levertijden en retours — altijd dezelfde vragen.",
        solution: "De agent beantwoordt productvragen direct, stelt maatalternatieven voor, stuurt winkelwagenherinneringen en verwerkt retours.",
        results: [
          { value: "-68%", label: "winkelwagenverlating" },
          { value: "-81%", label: "herhalende supporttickets" },
          { value: "+31%", label: "gemiddeld winkelwagenbedrag" },
        ],
        quote: "ROI was onmiddellijk. De eerste maand herstelden we 47 verloren bestellingen dankzij automatische follow-ups.",
        author: "CEO, mode e-commerce boutique",
      },
      {
        sector: "Gezondheidszorg", icon: "🏥", company: "Medische praktijk — Genève",
        challenge: "Geen receptioniste beschikbaar buiten openingstijden. 35% onbeantwoorde oproepen = patiënten die naar concurrenten gaan.",
        solution: "De agent beheert afspraken 24/7, beantwoordt veelgestelde vragen, stuurt automatische herinneringen.",
        results: [
          { value: "0", label: "gemiste oproepen" },
          { value: "-52%", label: "no-shows" },
          { value: "+28%", label: "nieuwe patiënten" },
        ],
        quote: "Onze patiënten waarderen dat ze om 23u een afspraak kunnen maken. Het no-show percentage is gehalveerd.",
        author: "Dr. S., Huisarts, Genève",
      },
      {
        sector: "Restaurant", icon: "🍽️", company: "Restaurantgroep — Parijs",
        challenge: "Telefoon verzadigd in het weekend. Verloren reserveringen vertegenwoordigden 15% van de potentiële omzet.",
        solution: "De agent neemt reserveringen aan, beheert groepsmenus, stuurt bevestigingen en verzamelt voedingsvoorkeuren.",
        results: [
          { value: "+38%", label: "online reserveringen" },
          { value: "-90%", label: "inkomende oproepen" },
          { value: "+22%", label: "groepsomzet" },
        ],
        quote: "Op zaterdagavond beheert de agent 50 gesprekken tegelijk terwijl ons team zich op de gasten concentreert.",
        author: "Operationeel directeur, Restaurantgroep",
      },
      {
        sector: "Verzekering", icon: "🛡️", company: "Onafhankelijk makelaar — Zürich",
        challenge: "Gemiddelde verkoopcyclus van 3 weken. Prospects vragen een offerte aan en verdwijnen dan zonder te tekenen.",
        solution: "De agent verzamelt risico-informatie, stuurt gepersonaliseerde offertes, volgt automatisch op en behandelt veelvoorkomende bezwaren.",
        results: [
          { value: "-58%", label: "verkoopcyclus" },
          { value: "+35%", label: "conversiepercentage" },
          { value: "4,8/5", label: "klanttevredenheid" },
        ],
        quote: "Ik heb mijn portefeuille in 6 maanden verdubbeld zonder aan te nemen. De agent beheert de volledige kwalificatiefase.",
        author: "Onafhankelijk makelaar, Zürich",
      },
      {
        sector: "Coach & Opleiding", icon: "🎯", company: "Online trainer — Parijs",
        challenge: "200 inkomende berichten per week over cursussen. Onmogelijk om ze allemaal handmatig te verwerken terwijl ook content wordt geleverd.",
        solution: "De agent kwalificeert, presenteert aanbiedingen, behandelt prijsbezwaren en int via geïntegreerde Stripe-link.",
        results: [
          { value: "+67%", label: "cursusconversies" },
          { value: "-80%", label: "no-shows ontdekkingsgesprekken" },
          { value: "3×", label: "omzet per abonnee" },
        ],
        quote: "De agent maakte 18 verkopen in één nacht terwijl ik sliep. De beste zakelijke beslissing die ik ooit heb genomen.",
        author: "Business coach & online trainer",
      },
    ],
    roiTitle: "Bereken uw ROI",
    roiSubtitle: "Gebaseerd op het gemiddelde van onze 200+ actieve klanten",
    roiItems: [
      { label: "Bespaard tijd / week", value: "12-18u" },
      { label: "Kostenreductie klantenservice", value: "-60 tot -80%" },
      { label: "Toename gekwalificeerde leads", value: "+30 tot +60%" },
      { label: "Terugverdientijd", value: "< 30 dagen" },
      { label: "Gemiddeld ROI na 90 dagen", value: "8× de investering" },
    ],
    ctaBadge: "Gegarandeerde resultaten",
    ctaTitle: "Welk resultaat wilt u bereiken?",
    ctaSubtitle: "30 minuten om uw situatie te analyseren en uw potentiële ROI te schatten.",
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
  const canonicalUrl = `https://agentic-whatsup.com/${locale}/cas-clients`;
  const ogLocale = locale === "de" ? "de_DE" : locale === "nl" ? "nl_NL" : locale === "en" ? "en_US" : "fr_FR";
  return {
    title: m.title,
    description: m.description,
    keywords: "résultats agent IA WhatsApp, ROI WhatsApp IA, cas clients automatisation WhatsApp, études de cas agenticwhatsup, témoignages clients",
    robots: { index: true, follow: true },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        fr: "https://agentic-whatsup.com/fr/cas-clients",
        en: "https://agentic-whatsup.com/en/cas-clients",
        de: "https://agentic-whatsup.com/de/cas-clients",
        nl: "https://agentic-whatsup.com/nl/cas-clients",
        "x-default": "https://agentic-whatsup.com/fr/cas-clients",
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

export default async function CasClientsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = t[locale] ?? t.fr;
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || `/${locale}/contact`;

  const pageUrl = `https://agentic-whatsup.com/${locale}/cas-clients`;
  const pageMeta = meta[locale] ?? meta.fr;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        name: pageMeta.title,
        description: pageMeta.description,
        url: pageUrl,
        inLanguage: locale,
      },
      {
        "@type": "ItemList",
        name: c.casesTitle,
        itemListElement: c.cases.map((cas, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Article",
            headline: `${cas.sector} — ${cas.company}`,
            description: cas.challenge,
            inLanguage: locale,
            author: {
              "@type": "Organization",
              "@id": "https://agentic-whatsup.com/#organization",
              name: "AgenticWhatsup",
              url: "https://agentic-whatsup.com",
            },
            publisher: {
              "@type": "Organization",
              "@id": "https://agentic-whatsup.com/#organization",
              name: "AgenticWhatsup",
              url: "https://agentic-whatsup.com",
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
            review: {
              "@type": "Review",
              reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
              author: { "@type": "Person", name: cas.author },
              reviewBody: cas.quote,
            },
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "AgenticWhatsup", "item": "https://agentic-whatsup.com" },
          { "@type": "ListItem", "position": 2, "name": c.casesTitle, "item": pageUrl },
        ],
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <div className="text-center mb-16">
        <span className="inline-block bg-wa/10 text-wa text-xs font-semibold px-3 py-1 rounded-full mb-4">{c.badge}</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5" style={{ fontFamily: "Onest, sans-serif" }}>{c.h1}</h1>
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

      {/* Global stats */}
      <div className="grid grid-cols-3 gap-4 mb-16">
        {c.globalStats.map((s, i) => (
          <div key={i} className="bg-surface border border-surface-2 rounded-2xl p-6 text-center">
            <div className="text-wa font-extrabold text-3xl sm:text-4xl mb-1">{s.value}</div>
            <div className="text-slate-400 text-sm">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Cases */}
      <h2 className="text-white font-extrabold text-2xl mb-8" style={{ fontFamily: "Onest, sans-serif" }}>{c.casesTitle}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
        {c.cases.map((cas, i) => (
          <div key={i} className="bg-surface border border-surface-2 rounded-2xl p-6 hover:border-wa/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{cas.icon}</span>
              <div>
                <span className="text-wa text-xs font-semibold">{cas.sector}</span>
                <p className="text-white font-bold text-sm">{cas.company}</p>
              </div>
            </div>
            <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4 mb-3 text-slate-300 text-sm leading-relaxed">
              {cas.challenge}
            </div>
            <div className="bg-wa/5 border border-wa/20 rounded-xl p-4 mb-4 text-slate-300 text-sm leading-relaxed">
              {cas.solution}
            </div>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {cas.results.map((r, j) => (
                <div key={j} className="text-center bg-surface-2 rounded-xl p-3">
                  <div className="text-wa font-extrabold text-lg">{r.value}</div>
                  <div className="text-slate-500 text-xs">{r.label}</div>
                </div>
              ))}
            </div>
            <div className="border-t border-surface-2 pt-4">
              <div className="flex gap-1 mb-2">
                {[1,2,3,4,5].map(s => <Star key={s} size={12} className="text-wa fill-wa" />)}
              </div>
              <p className="text-slate-300 text-sm italic mb-2">&quot;{cas.quote}&quot;</p>
              <p className="text-slate-500 text-xs">— {cas.author}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ROI table */}
      <div className="bg-surface border border-surface-2 rounded-2xl p-8 mb-16">
        <h2 className="text-white font-extrabold text-xl mb-2 text-center" style={{ fontFamily: "Onest, sans-serif" }}>{c.roiTitle}</h2>
        <p className="text-slate-400 text-sm text-center mb-6">{c.roiSubtitle}</p>
        <div className="space-y-3">
          {c.roiItems.map((item, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-surface-2 last:border-0">
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <TrendingUp size={14} className="text-wa" />
                {item.label}
              </div>
              <span className="text-wa font-bold text-sm">{item.value}</span>
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

      {/* Internal link — agent IA WhatsApp Business */}
      <div className="mt-10 text-center">
        <p className="text-slate-400 text-sm">
          {locale === "fr"
            ? "Ces résultats ont été obtenus grâce à notre"
            : "These results were achieved with our"}
          {" "}
          <Link
            href={`/${locale}/services/agent-ia-whatsapp`}
            className="text-wa hover:underline font-medium"
          >
            {locale === "fr"
              ? "agent IA WhatsApp Business"
              : "AI agent for WhatsApp Business"}
          </Link>.
        </p>
      </div>
    </div>
  );
}
