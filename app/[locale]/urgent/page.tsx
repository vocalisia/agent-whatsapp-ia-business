import type { Metadata } from "next";
import { AlertTriangle, Timer, Flame, Zap, MessageCircle, Shield } from "lucide-react";
import StrategyLanding, { type LandingCopy } from "@/components/landing/StrategyLanding";

type Locale = "fr" | "en" | "de" | "nl";

const META: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: "Réponse WhatsApp 24/7 en 8 secondes | Agent IA auto-répondeur",
    description:
      "Agent IA WhatsApp qui répond en 8 secondes à tout message — vocal, photo, document. 24/7 sans humain. Stoppez la fuite de leads maintenant.",
  },
  en: {
    title: "24/7 WhatsApp Response in 8 Seconds | Auto-responder AI Agent",
    description:
      "WhatsApp AI agent that replies in 8 seconds to any message — voice, photo, document. 24/7 no human. Stop lead leakage now.",
  },
  de: {
    title: "24/7 WhatsApp-Antwort in 8 Sekunden | Auto-Responder KI-Agent",
    description:
      "WhatsApp-KI-Agent, der in 8 Sek. auf jede Nachricht antwortet — Sprache, Foto, Dokument. 24/7 ohne Menschen. Lead-Verlust stoppen.",
  },
  nl: {
    title: "24/7 WhatsApp-antwoord in 8 sec | Auto-responder AI-agent",
    description:
      "WhatsApp AI-agent die in 8 sec op elk bericht antwoordt — spraak, foto, document. 24/7 zonder mens. Stop lead-lekkage nu.",
  },
};

const COPY: Record<Locale, LandingCopy> = {
  fr: {
    hero: {
      badge: "⚠️ Stop à l'hémorragie commerciale",
      title1: "73% de vos leads WhatsApp",
      title2: "partent chez votre concurrent",
      subtitle:
        "Ils envoient un vocal. 4h sans réponse. Ils cherchent ailleurs. C'est fini. Notre IA répond en 8 secondes — même aux vocaux et photos. Plus jamais un lead perdu.",
      trust: ["Réponse en 8 sec garantie", "24/7 sans exception", "Déployé en 14 jours"],
    },
    painTitle: "Votre fenêtre de réponse se ferme en 1h. Pas 4. Pas 8. UNE.",
    painItems: [
      {
        title: "Après 1h : −50% conversion",
        desc: "Étude HubSpot : chaque heure sans réponse divise par 2 le taux de conversion. Après 4h : mort clinique.",
      },
      {
        title: "Weekend = 72h de silence",
        desc: "Vos clients bossent pendant que vous dormez. Leur achat se fait chez celui qui répond. Pas vous.",
      },
      {
        title: "Nuit + férié = catastrophe",
        desc: "60% des messages WhatsApp B2B arrivent hors horaires bureau. Personne ne répond. Deals grillés.",
      },
    ],
    valueTitle: "Une IA qui ne dort jamais, ne mange jamais, ne râle jamais",
    valueItems: [
      {
        title: "Réponse en 8 secondes",
        desc: "Vocal, photo, document, texte — l'IA comprend tout et répond instantanément. Prospect capturé avant qu'il pense à un concurrent.",
      },
      {
        title: "24/7/365 sans relâche",
        desc: "2h du matin, dimanche de Pâques, 25 décembre — même service. Pendant que vos concurrents humains pionce.",
      },
      {
        title: "Transfert intelligent",
        desc: "Lead froid : l'IA gère 100%. Lead chaud : transfert immédiat à ton commercial avec résumé complet.",
      },
    ],
    bookingTitle: "Stop l'hémorragie. Audit gratuit en 30 minutes.",
    bookingSubtitle:
      "On analyse combien de leads tu perds VRAIMENT chaque semaine. Puis on te montre comment les récupérer tous.",
    bookingLabel: "Arrêter l'hémorragie",
    faqTitle: "Les questions qu'on pose toujours",
    faq: [
      {
        q: "8 secondes de réponse, vraiment ?",
        a: "Oui, temps moyen mesuré sur 400+ déploiements. Vocaux transcrits en 3 sec, analyse en 2 sec, réponse envoyée en 3 sec. Garanti contractuellement.",
      },
      {
        q: "Et l'investissement pour stopper l'hémorragie ?",
        a: "Le tarif dépend de ton volume et de tes besoins. On construit un devis personnalisé pendant ton audit gratuit. Quand un seul deal récupéré peut payer plusieurs mois, la vraie question c'est : combien tu perds chaque semaine à attendre ?",
      },
      {
        q: "Et si l'IA se trompe et donne une mauvaise réponse ?",
        a: "Score de confiance sur chaque réponse. Sous 85% → transfert humain auto. Au-dessus → IA gère. Taux d'erreur : <2% sur 6 mois de données.",
      },
      {
        q: "Mes concurrents l'utilisent-ils déjà ?",
        a: "Probablement. +340 PME européennes actives. Si tu n'as pas encore d'IA WhatsApp, tu es déjà en retard. Chaque semaine d'attente = parts de marché cédées.",
      },
    ],
    finalCtaTitle: "Pendant que tu lis ça, 3 leads viennent d'envoyer un message",
    finalCtaDesc:
      "Si tu attends demain, ils sont partis. Si tu réserves maintenant, ils seront tous capturés d'ici 14 jours.",
    finalCtaBtn: "Stopper l'hémorragie maintenant",
  },
  en: {
    hero: {
      badge: "⚠️ Stop the revenue bleeding",
      title1: "73% of your WhatsApp leads",
      title2: "go to your competitor",
      subtitle:
        "They send a voice note. 4h with no reply. They look elsewhere. Game over. Our AI replies in 8 seconds — even to voice and photos. Never lose another lead.",
      trust: ["8-sec response guaranteed", "24/7 no exception", "Live in 14 days"],
    },
    painTitle: "Your response window closes in 1h. Not 4. Not 8. ONE.",
    painItems: [
      {
        title: "After 1h: −50% conversion",
        desc: "HubSpot study: every hour without reply halves your conversion rate. After 4h: clinically dead.",
      },
      {
        title: "Weekend = 72h of silence",
        desc: "Your customers work while you sleep. Their purchase goes to whoever answers. Not you.",
      },
      {
        title: "Night + holidays = disaster",
        desc: "60% of B2B WhatsApp messages arrive outside office hours. No one replies. Deals gone.",
      },
    ],
    valueTitle: "AI that never sleeps, eats, or complains",
    valueItems: [
      {
        title: "8-second response",
        desc: "Voice, photo, document, text — AI understands all and replies instantly. Prospect captured before they think of a competitor.",
      },
      {
        title: "24/7/365 relentless",
        desc: "2am, Easter Sunday, Dec 25 — same service. While your human competitors snooze.",
      },
      {
        title: "Smart handoff",
        desc: "Cold lead: AI handles 100%. Hot lead: instant handoff to your rep with full context summary.",
      },
    ],
    bookingTitle: "Stop the bleeding. Free 30-min audit.",
    bookingSubtitle:
      "We measure how many leads you TRULY lose each week. Then we show you how to recover them all.",
    bookingLabel: "Stop the bleeding",
    faqTitle: "Questions we always get",
    faq: [
      {
        q: "8-second reply — really?",
        a: "Yes, avg time measured across 400+ deployments. Voice transcribed in 3s, analysis 2s, reply sent 3s. Contractually guaranteed.",
      },
      {
        q: "And the investment to stop the bleeding?",
        a: "Pricing depends on your volume and needs. We build a custom quote during your free audit. When a single recovered deal can pay for months, the real question is: how much are you losing each week waiting?",
      },
      {
        q: "What if AI gives a wrong answer?",
        a: "Confidence score on every reply. Below 85% → auto-handoff to human. Above → AI handles. Error rate: <2% across 6 months of data.",
      },
      {
        q: "Are my competitors already using it?",
        a: "Probably. 340+ active European SMBs. If you don't have WhatsApp AI yet, you're already behind. Every week of delay = market share lost.",
      },
    ],
    finalCtaTitle: "As you read this, 3 leads just sent a message",
    finalCtaDesc:
      "Wait until tomorrow and they're gone. Book now and all future ones are captured within 14 days.",
    finalCtaBtn: "Stop the bleeding now",
  },
  de: {
    hero: {
      badge: "⚠️ Stoppen Sie die Umsatzblutung",
      title1: "73% Ihrer WhatsApp-Leads",
      title2: "gehen zu Ihrer Konkurrenz",
      subtitle:
        "Sie senden eine Sprachnachricht. 4h keine Antwort. Sie suchen anderswo. Spiel aus. Unsere KI antwortet in 8 Sekunden — auch auf Sprache und Fotos. Nie wieder einen Lead verlieren.",
      trust: ["8-Sek.-Antwort garantiert", "24/7 ohne Ausnahme", "Live in 14 Tagen"],
    },
    painTitle: "Ihr Antwortfenster schließt in 1h. Nicht 4. Nicht 8. EINER.",
    painItems: [
      {
        title: "Nach 1h: −50% Konversion",
        desc: "HubSpot-Studie: Jede Stunde ohne Antwort halbiert Conversion. Nach 4h: klinisch tot.",
      },
      {
        title: "Wochenende = 72h Stille",
        desc: "Ihre Kunden arbeiten, während Sie schlafen. Ihr Kauf geht zu dem, der antwortet. Nicht Sie.",
      },
      {
        title: "Nacht + Feiertag = Katastrophe",
        desc: "60% der B2B-WhatsApp-Nachrichten kommen außerhalb der Bürozeit. Niemand antwortet. Deals weg.",
      },
    ],
    valueTitle: "KI, die nie schläft, nie isst, nie jammert",
    valueItems: [
      {
        title: "Antwort in 8 Sekunden",
        desc: "Sprache, Foto, Dokument, Text — KI versteht alles und antwortet sofort. Interessent gefangen, bevor er an Konkurrent denkt.",
      },
      {
        title: "24/7/365 unermüdlich",
        desc: "2 Uhr nachts, Ostersonntag, 25. Dezember — gleicher Service. Während menschliche Konkurrenten schlafen.",
      },
      {
        title: "Intelligente Übergabe",
        desc: "Kalter Lead: KI übernimmt 100%. Heißer Lead: sofortige Übergabe mit vollständiger Zusammenfassung.",
      },
    ],
    bookingTitle: "Stoppen Sie die Blutung. Kostenloses 30-Min.-Audit.",
    bookingSubtitle:
      "Wir messen, wie viele Leads Sie WIRKLICH jede Woche verlieren. Dann zeigen wir, wie Sie alle zurückholen.",
    bookingLabel: "Blutung stoppen",
    faqTitle: "Häufige Fragen",
    faq: [
      {
        q: "8 Sekunden Antwort — wirklich?",
        a: "Ja, Durchschnitt aus 400+ Deployments. Sprache transkribiert in 3s, Analyse 2s, Antwort 3s. Vertraglich garantiert.",
      },
      {
        q: "Und die Investition, um die Blutung zu stoppen?",
        a: "Der Preis hängt von Ihrem Volumen und Ihren Anforderungen ab. Wir erstellen ein individuelles Angebot während Ihres kostenlosen Audits. Wenn ein einziger zurückgewonnener Deal mehrere Monate finanziert, ist die echte Frage: Wie viel verlieren Sie jede Woche, in der Sie warten?",
      },
      {
        q: "Was, wenn KI falsch antwortet?",
        a: "Confidence-Score bei jeder Antwort. Unter 85% → auto-Übergabe. Darüber → KI. Fehlerquote: <2% auf 6-Monats-Daten.",
      },
      {
        q: "Nutzen meine Konkurrenten es schon?",
        a: "Vermutlich. 340+ aktive europäische KMU. Ohne WhatsApp-KI sind Sie bereits im Rückstand.",
      },
    ],
    finalCtaTitle: "Während Sie das lesen, haben 3 Leads gerade geschrieben",
    finalCtaDesc:
      "Warten bis morgen = weg. Jetzt buchen = alle künftigen in 14 Tagen erfasst.",
    finalCtaBtn: "Jetzt Blutung stoppen",
  },
  nl: {
    hero: {
      badge: "⚠️ Stop de omzetbloeding",
      title1: "73% van uw WhatsApp-leads",
      title2: "gaan naar uw concurrent",
      subtitle:
        "Ze sturen een spraakbericht. 4u geen antwoord. Ze zoeken elders. Game over. Onze AI antwoordt in 8 seconden — zelfs op spraak en foto's. Nooit meer een lead verliezen.",
      trust: ["8-sec antwoord gegarandeerd", "24/7 geen uitzondering", "Live in 14 dagen"],
    },
    painTitle: "Uw antwoordvenster sluit in 1u. Niet 4. Niet 8. EEN.",
    painItems: [
      {
        title: "Na 1u: −50% conversie",
        desc: "HubSpot-studie: elk uur zonder antwoord halveert conversie. Na 4u: klinisch dood.",
      },
      {
        title: "Weekend = 72u stilte",
        desc: "Uw klanten werken terwijl u slaapt. Hun aankoop gaat naar wie antwoordt. Niet u.",
      },
      {
        title: "Nacht + feestdag = ramp",
        desc: "60% van B2B WhatsApp-berichten komt buiten kantooruren. Niemand antwoordt. Deals verdwenen.",
      },
    ],
    valueTitle: "AI die nooit slaapt, eet, of klaagt",
    valueItems: [
      {
        title: "Antwoord in 8 seconden",
        desc: "Spraak, foto, document, tekst — AI begrijpt alles en antwoordt direct. Prospect gevangen voor ze aan concurrent denken.",
      },
      {
        title: "24/7/365 onvermoeibaar",
        desc: "2u 's nachts, Paaszondag, 25 dec — zelfde service. Terwijl menselijke concurrenten slapen.",
      },
      {
        title: "Slimme overdracht",
        desc: "Koude lead: AI 100%. Hete lead: onmiddellijke overdracht met volledige samenvatting.",
      },
    ],
    bookingTitle: "Stop het bloeden. Gratis 30-min audit.",
    bookingSubtitle:
      "We meten hoeveel leads u ECHT elke week verliest. Dan tonen we hoe ze allemaal terug te halen.",
    bookingLabel: "Bloeden stoppen",
    faqTitle: "Veelgestelde vragen",
    faq: [
      {
        q: "8 seconden antwoord — echt?",
        a: "Ja, gemiddelde tijd over 400+ implementaties. Spraak getranscribeerd in 3s, analyse 2s, antwoord 3s. Contractueel gegarandeerd.",
      },
      {
        q: "En de investering om te stoppen met bloeden?",
        a: "De prijs hangt af van uw volume en behoeften. We maken een persoonlijk voorstel tijdens uw gratis audit. Wanneer één teruggewonnen deal maanden kan betalen, is de echte vraag: hoeveel verliest u elke week dat u wacht?",
      },
      {
        q: "Wat als AI fout antwoordt?",
        a: "Confidence-score op elke reply. Onder 85% → auto-overdracht. Boven → AI. Foutpercentage: <2% op 6 maanden data.",
      },
      {
        q: "Gebruiken concurrenten het al?",
        a: "Waarschijnlijk. 340+ actieve Europese KMO's. Zonder WhatsApp AI bent u al achter.",
      },
    ],
    finalCtaTitle: "Terwijl u dit leest, hebben 3 leads net een bericht gestuurd",
    finalCtaDesc: "Wacht tot morgen = weg. Boek nu = alle toekomstige in 14 dagen gevangen.",
    finalCtaBtn: "Nu bloeden stoppen",
  },
};

function pick<T extends Record<Locale, unknown>>(map: T, locale: string): T[Locale] {
  return map[(locale as Locale) in map ? (locale as Locale) : "fr"];
}

export async function generateStaticParams() {
  return (["fr", "en", "de", "nl"] as const).map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = pick(META, locale);
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/urgent`,
      languages: {
        fr: "/fr/urgent",
        en: "/en/urgent",
        de: "/de/urgent",
        nl: "/nl/urgent",
      },
    },
    openGraph: { title: meta.title, description: meta.description, type: "website" },
  };
}

export default async function UrgentLandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const copy = pick(COPY, locale);

  return (
    <StrategyLanding
      copy={copy}
      painIcons={[AlertTriangle, Timer, Flame] as const}
      valueIcons={[Zap, Shield, MessageCircle] as const}
      accentTint="red"
    />
  );
}
