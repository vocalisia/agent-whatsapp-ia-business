import type { Metadata } from "next";

const meta: Record<string, { title: string; description: string }> = {
  fr: { title: "Politique de cookies | AgenticWhatsup", description: "Découvrez comment AgenticWhatsup utilise les cookies pour améliorer votre expérience sur notre site." },
  en: { title: "Cookie Policy | AgenticWhatsup", description: "Learn how AgenticWhatsup uses cookies to improve your experience on our website." },
  de: { title: "Cookie-Richtlinie | AgenticWhatsup", description: "Erfahren Sie, wie AgenticWhatsup Cookies verwendet, um Ihre Erfahrung auf unserer Website zu verbessern." },
  nl: { title: "Cookiebeleid | AgenticWhatsup", description: "Ontdek hoe AgenticWhatsup cookies gebruikt om uw ervaring op onze website te verbeteren." },
};

const t: Record<string, {
  h1: string; lastUpdate: string;
  sections: Array<{ title: string; content: string }>;
}> = {
  fr: {
    h1: "Politique de cookies",
    lastUpdate: "Dernière mise à jour : avril 2026",
    sections: [
      { title: "Qu'est-ce qu'un cookie ?", content: "Un cookie est un petit fichier texte déposé sur votre appareil lorsque vous visitez un site web. Il permet de mémoriser vos préférences, d'analyser l'utilisation du site et d'améliorer votre expérience de navigation." },
      { title: "Cookies que nous utilisons", content: "Nous utilisons les catégories de cookies suivantes :\n\n• Cookies strictement nécessaires : indispensables au fonctionnement du site (session, sécurité). Ils ne peuvent pas être désactivés.\n\n• Cookies analytiques : Google Analytics 4 (GA4) avec consent mode v2. Ces cookies nous permettent de comprendre comment les visiteurs utilisent le site (pages vues, durée de visite, source de trafic). Ils ne sont activés qu'avec votre consentement.\n\n• Cookies de préférence : mémorisent vos choix (langue, région). Durée : 12 mois." },
      { title: "Cookies tiers", content: "Notre site peut intégrer des services tiers qui déposent leurs propres cookies :\n\n• iClosed (widget de réservation de RDV)\n• Google Analytics 4\n• Meta Pixel (si activé)\n\nCes tiers ont leurs propres politiques de confidentialité." },
      { title: "Durée de conservation", content: "Les cookies analytiques sont conservés 13 mois maximum. Les cookies de session expirent à la fermeture de votre navigateur. Les cookies de préférence sont conservés 12 mois." },
      { title: "Vos droits", content: "Conformément au RGPD (UE) 2016/679 et à la loi suisse sur la protection des données (nLPD), vous avez le droit de :\n\n• Refuser les cookies non essentiels\n• Retirer votre consentement à tout moment\n• Accéder, rectifier ou supprimer vos données\n\nVous pouvez gérer vos préférences de cookies directement dans les paramètres de votre navigateur." },
      { title: "Nous contacter", content: "Pour toute question relative à notre utilisation des cookies : contact@vocalis.pro" },
    ],
  },
  en: {
    h1: "Cookie Policy",
    lastUpdate: "Last updated: April 2026",
    sections: [
      { title: "What is a cookie?", content: "A cookie is a small text file placed on your device when you visit a website. It enables the site to remember your preferences, analyse usage and improve your browsing experience." },
      { title: "Cookies we use", content: "We use the following categories of cookies:\n\n• Strictly necessary cookies: essential for the website to function (session, security). These cannot be disabled.\n\n• Analytical cookies: Google Analytics 4 (GA4) with consent mode v2. These cookies help us understand how visitors use the site (pages viewed, visit duration, traffic source). They are only activated with your consent.\n\n• Preference cookies: remember your choices (language, region). Duration: 12 months." },
      { title: "Third-party cookies", content: "Our website may integrate third-party services that place their own cookies:\n\n• iClosed (appointment booking widget)\n• Google Analytics 4\n• Meta Pixel (if enabled)\n\nThese third parties have their own privacy policies." },
      { title: "Retention period", content: "Analytical cookies are kept for a maximum of 13 months. Session cookies expire when you close your browser. Preference cookies are kept for 12 months." },
      { title: "Your rights", content: "Under GDPR (EU) 2016/679 and Swiss data protection law (nDSG), you have the right to:\n\n• Refuse non-essential cookies\n• Withdraw your consent at any time\n• Access, rectify or delete your data\n\nYou can manage your cookie preferences directly in your browser settings." },
      { title: "Contact us", content: "For any questions about our use of cookies: contact@vocalis.pro" },
    ],
  },
  de: {
    h1: "Cookie-Richtlinie",
    lastUpdate: "Zuletzt aktualisiert: April 2026",
    sections: [
      { title: "Was ist ein Cookie?", content: "Ein Cookie ist eine kleine Textdatei, die auf Ihrem Gerät abgelegt wird, wenn Sie eine Website besuchen. Sie ermöglicht es der Website, Ihre Einstellungen zu speichern, die Nutzung zu analysieren und Ihr Surferlebnis zu verbessern." },
      { title: "Cookies, die wir verwenden", content: "Wir verwenden die folgenden Cookie-Kategorien:\n\n• Unbedingt erforderliche Cookies: unverzichtbar für die Funktion der Website (Sitzung, Sicherheit). Diese können nicht deaktiviert werden.\n\n• Analytische Cookies: Google Analytics 4 (GA4) mit Consent-Modus v2. Diese Cookies helfen uns zu verstehen, wie Besucher die Website nutzen. Sie werden nur mit Ihrer Zustimmung aktiviert.\n\n• Präferenz-Cookies: speichern Ihre Auswahl (Sprache, Region). Dauer: 12 Monate." },
      { title: "Drittanbieter-Cookies", content: "Unsere Website kann Drittanbieterdienste integrieren, die eigene Cookies setzen:\n\n• iClosed (Terminbuchungs-Widget)\n• Google Analytics 4\n• Meta Pixel (falls aktiviert)\n\nDiese Drittanbieter haben eigene Datenschutzrichtlinien." },
      { title: "Aufbewahrungsdauer", content: "Analytische Cookies werden maximal 13 Monate aufbewahrt. Sitzungs-Cookies laufen ab, wenn Sie Ihren Browser schließen. Präferenz-Cookies werden 12 Monate aufbewahrt." },
      { title: "Ihre Rechte", content: "Gemäß DSGVO (EU) 2016/679 und Schweizer Datenschutzgesetz (nDSG) haben Sie das Recht:\n\n• Nicht wesentliche Cookies abzulehnen\n• Ihre Einwilligung jederzeit zu widerrufen\n• Auf Ihre Daten zuzugreifen, sie zu berichtigen oder zu löschen\n\nSie können Ihre Cookie-Einstellungen direkt in Ihren Browsereinstellungen verwalten." },
      { title: "Kontakt", content: "Bei Fragen zur Verwendung von Cookies: contact@vocalis.pro" },
    ],
  },
  nl: {
    h1: "Cookiebeleid",
    lastUpdate: "Laatste update: april 2026",
    sections: [
      { title: "Wat is een cookie?", content: "Een cookie is een klein tekstbestand dat op uw apparaat wordt geplaatst wanneer u een website bezoekt. Het stelt de website in staat uw voorkeuren te onthouden, het gebruik te analyseren en uw browse-ervaring te verbeteren." },
      { title: "Cookies die we gebruiken", content: "We gebruiken de volgende cookiecategorieën:\n\n• Strikt noodzakelijke cookies: onmisbaar voor het functioneren van de website (sessie, beveiliging). Deze kunnen niet worden uitgeschakeld.\n\n• Analytische cookies: Google Analytics 4 (GA4) met consent mode v2. Deze cookies helpen ons begrijpen hoe bezoekers de website gebruiken. Ze worden alleen geactiveerd met uw toestemming.\n\n• Voorkeursecookies: onthouden uw keuzes (taal, regio). Duur: 12 maanden." },
      { title: "Cookies van derden", content: "Onze website kan diensten van derden integreren die hun eigen cookies plaatsen:\n\n• iClosed (afspraakreserveringswidget)\n• Google Analytics 4\n• Meta Pixel (indien ingeschakeld)\n\nDeze derde partijen hebben hun eigen privacybeleid." },
      { title: "Bewaartermijn", content: "Analytische cookies worden maximaal 13 maanden bewaard. Sessiecookies verlopen wanneer u uw browser sluit. Voorkeursecookies worden 12 maanden bewaard." },
      { title: "Uw rechten", content: "Op grond van de AVG (EU) 2016/679 en de Zwitserse wet op de gegevensbescherming (nDSG) heeft u het recht om:\n\n• Niet-essentiële cookies te weigeren\n• Uw toestemming op elk moment in te trekken\n• Uw gegevens in te zien, te rectificeren of te verwijderen\n\nU kunt uw cookievoorkeuren rechtstreeks in uw browserinstellingen beheren." },
      { title: "Contact", content: "Voor vragen over ons gebruik van cookies: contact@vocalis.pro" },
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
      languages: { fr: "/fr/cookies", en: "/en/cookies", de: "/de/cookies", nl: "/nl/cookies" },
    },
  };
}

export default async function CookiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = t[locale] ?? t.fr;
  const m = meta[locale] ?? meta.fr;
  const canonicalUrl = `https://agentic-whatsup.com/${locale}/cookies`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "name": m.title,
        "url": canonicalUrl,
        "inLanguage": locale,
        "isPartOf": { "@id": "https://agentic-whatsup.com/#website" },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "AgenticWhatsup", "item": "https://agentic-whatsup.com" },
          { "@type": "ListItem", "position": 2, "name": m.title, "item": canonicalUrl },
        ],
      }) }} />
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2" style={{ fontFamily: "Onest, sans-serif" }}>
        {c.h1}
      </h1>
      <p className="text-slate-500 text-sm mb-10">{c.lastUpdate}</p>
      <div className="space-y-8">
        {c.sections.map((s, i) => (
          <div key={i}>
            <h2 className="text-white font-bold text-lg mb-3">{s.title}</h2>
            <div className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">{s.content}</div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
