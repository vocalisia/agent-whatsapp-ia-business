import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://agentic-whatsup.com";
const LOCALES = ["fr", "en", "de", "nl"] as const;

export type EditorialPolicySlug = "charte-editoriale" | "ethique" | "corrections" | "diversite";
type Locale = (typeof LOCALES)[number];
type PolicyCopy = {
  title: string;
  description: string;
  eyebrow: string;
  updatedLabel: string;
  contactLabel: string;
  sections: Array<{ title: string; body: string }>;
};

const common = {
  charte: {
    fr: [
      ["Objectif des contenus", "Chaque page doit aider un dirigeant, une équipe commerciale ou un responsable support à comprendre un usage concret de WhatsApp Business, de l'automatisation et des agents IA."],
      ["Sources et vérification", "Les contenus s'appuient en priorité sur les documentations officielles, les retours de déploiement, les contraintes réglementaires et les tests techniques réalisés avant publication."],
      ["Mises à jour", "Les articles stratégiques sont relus lorsque Meta, WhatsApp Business, les obligations de conformité ou les outils d'intégration évoluent."],
    ],
    en: [
      ["Content purpose", "Each page helps business leaders, sales teams or support managers understand a concrete WhatsApp Business, automation or AI agent use case."],
      ["Sources and verification", "Content prioritizes official documentation, deployment feedback, regulatory constraints and technical tests performed before publication."],
      ["Updates", "Strategic articles are reviewed when Meta, WhatsApp Business, compliance obligations or integration tools change."],
    ],
    de: [
      ["Zweck der Inhalte", "Jede Seite hilft Führungskräften, Vertriebs- oder Supportteams, konkrete Einsatzfälle von WhatsApp Business, Automatisierung und KI-Agenten zu verstehen."],
      ["Quellen und Prüfung", "Inhalte stützen sich vorrangig auf offizielle Dokumentation, Projekterfahrung, regulatorische Anforderungen und technische Tests vor der Veröffentlichung."],
      ["Aktualisierungen", "Strategische Artikel werden überprüft, wenn sich Meta, WhatsApp Business, Compliance-Anforderungen oder Integrationstools ändern."],
    ],
    nl: [
      ["Doel van de content", "Elke pagina helpt directie, sales of support om concrete toepassingen van WhatsApp Business, automatisering en AI-agents te begrijpen."],
      ["Bronnen en controle", "Content steunt eerst op officiële documentatie, implementatie-ervaring, compliance-eisen en technische tests vóór publicatie."],
      ["Updates", "Strategische artikelen worden herzien wanneer Meta, WhatsApp Business, regelgeving of integratietools veranderen."],
    ],
  },
  ethics: {
    fr: [
      ["Automatisation responsable", "Un agent IA WhatsApp doit rester au service de l'utilisateur final : réponses utiles, escalade humaine possible et périmètre clairement défini."],
      ["Consentement et conformité", "Les scénarios recommandés privilégient l'opt-in, les mécanismes STOP, la limitation des données collectées et la traçabilité des conversations sensibles."],
      ["Pas de manipulation cachée", "Les contenus n'encouragent pas les pratiques trompeuses, l'usurpation d'identité ou l'envoi de messages sans base légitime."],
    ],
    en: [
      ["Responsible automation", "A WhatsApp AI agent must serve the end user: useful replies, possible human escalation and a clearly defined operating scope."],
      ["Consent and compliance", "Recommended scenarios prioritize opt-in, STOP mechanisms, limited data collection and traceability for sensitive conversations."],
      ["No hidden manipulation", "Content does not encourage deceptive practices, impersonation or messaging without a legitimate basis."],
    ],
    de: [
      ["Verantwortungsvolle Automatisierung", "Ein WhatsApp-KI-Agent muss dem Endnutzer dienen: hilfreiche Antworten, mögliche menschliche Eskalation und klar definierter Umfang."],
      ["Einwilligung und Compliance", "Empfohlene Szenarien priorisieren Opt-in, STOP-Mechanismen, begrenzte Datenerfassung und Nachvollziehbarkeit sensibler Gespräche."],
      ["Keine verdeckte Manipulation", "Die Inhalte fördern keine täuschenden Praktiken, Identitätsmissbrauch oder Nachrichten ohne legitime Grundlage."],
    ],
    nl: [
      ["Verantwoorde automatisering", "Een WhatsApp AI-agent moet de eindgebruiker helpen: nuttige antwoorden, menselijke escalatie waar nodig en een duidelijk bereik."],
      ["Toestemming en compliance", "Aanbevolen scenario's geven prioriteit aan opt-in, STOP-mechanismen, beperkte dataverzameling en traceerbaarheid."],
      ["Geen verborgen manipulatie", "De content moedigt geen misleiding, impersonatie of berichten zonder legitieme basis aan."],
    ],
  },
  corrections: {
    fr: [
      ["Signalement", "Toute erreur factuelle, lien cassé, information obsolète ou ambiguïté peut être signalée via la page contact."],
      ["Vérification", "Les corrections sont comparées aux sources officielles disponibles, au comportement réel du produit ou aux journaux de test non sensibles."],
      ["Mise à jour visible", "Lorsqu'une page stratégique change, la date de modification peut être ajustée afin que les lecteurs et les moteurs comprennent la fraîcheur du contenu."],
    ],
    en: [
      ["Reporting", "Any factual error, broken link, outdated information or ambiguity can be reported through the contact page."],
      ["Verification", "Corrections are checked against available official sources, real product behavior or non-sensitive test logs."],
      ["Visible update", "When a strategic page changes, the modification date can be adjusted so readers and search engines understand content freshness."],
    ],
    de: [
      ["Meldung", "Sachfehler, defekte Links, veraltete Informationen oder Unklarheiten können über die Kontaktseite gemeldet werden."],
      ["Prüfung", "Korrekturen werden mit offiziellen Quellen, realem Produktverhalten oder nicht sensiblen Testprotokollen abgeglichen."],
      ["Sichtbare Aktualisierung", "Wenn eine strategische Seite geändert wird, kann das Änderungsdatum angepasst werden, damit Leser und Suchmaschinen die Aktualität erkennen."],
    ],
    nl: [
      ["Melden", "Feitelijke fouten, kapotte links, verouderde informatie of onduidelijkheden kunnen via de contactpagina worden gemeld."],
      ["Controle", "Correcties worden getoetst aan officiële bronnen, werkelijk productgedrag of niet-gevoelige testlogs."],
      ["Zichtbare update", "Wanneer een strategische pagina wijzigt, kan de wijzigingsdatum worden aangepast zodat lezers en zoekmachines de versheid begrijpen."],
    ],
  },
  diversity: {
    fr: [
      ["Couverture des usages", "Les contenus cherchent à représenter plusieurs contextes : PME, agences, commerce, services, santé, immobilier, support client et ventes B2B."],
      ["Langues et marchés", "AgenticWhatsup couvre principalement les usages francophones et européens, avec des contenus disponibles en français, anglais, allemand et néerlandais."],
      ["Amélioration continue", "Les exemples sont ajustés lorsque de nouveaux cas réels ou retours utilisateurs montrent un angle métier insuffisamment couvert."],
    ],
    en: [
      ["Use case coverage", "Content aims to represent several contexts: SMEs, agencies, commerce, services, healthcare, real estate, customer support and B2B sales."],
      ["Languages and markets", "AgenticWhatsup primarily covers French-speaking and European use cases, with content in French, English, German and Dutch."],
      ["Continuous improvement", "Examples are adjusted when real deployments or user feedback reveal an under-covered business angle."],
    ],
    de: [
      ["Abdeckung der Einsatzfälle", "Die Inhalte berücksichtigen mehrere Kontexte: KMU, Agenturen, Handel, Dienstleistungen, Gesundheit, Immobilien, Kundensupport und B2B-Vertrieb."],
      ["Sprachen und Märkte", "AgenticWhatsup deckt vor allem französischsprachige und europäische Einsatzfälle ab, mit Inhalten auf Französisch, Englisch, Deutsch und Niederländisch."],
      ["Kontinuierliche Verbesserung", "Beispiele werden angepasst, wenn reale Projekte oder Nutzerfeedback einen unzureichend abgedeckten fachlichen Blickwinkel zeigen."],
    ],
    nl: [
      ["Dekking van use cases", "De content wil meerdere contexten vertegenwoordigen: kmo's, agentschappen, handel, diensten, zorg, vastgoed, klantenservice en B2B-sales."],
      ["Talen en markten", "AgenticWhatsup behandelt vooral Franstalige en Europese toepassingen, met content in het Frans, Engels, Duits en Nederlands."],
      ["Voortdurende verbetering", "Voorbeelden worden aangepast wanneer echte implementaties of gebruikersfeedback tonen dat een zakelijke invalshoek ontbreekt."],
    ],
  },
} satisfies Record<string, Record<Locale, string[][]>>;

const POLICY_COPY: Record<EditorialPolicySlug, Record<Locale, Omit<PolicyCopy, "sections"> & { sectionKey: keyof typeof common }>> = {
  "charte-editoriale": {
    fr: { title: "Charte éditoriale", description: "Principes de publication AgenticWhatsup : contenus utiles, vérifiés, datés et relus pour les équipes qui déploient WhatsApp Business et l'IA conversationnelle.", eyebrow: "Publication", updatedLabel: "Dernière mise à jour : juin 2026", contactLabel: "Signaler une précision à corriger", sectionKey: "charte" },
    en: { title: "Editorial policy", description: "AgenticWhatsup publishing principles: useful, checked and dated content for teams deploying WhatsApp Business and conversational AI.", eyebrow: "Publishing", updatedLabel: "Last updated: June 2026", contactLabel: "Report something to correct", sectionKey: "charte" },
    de: { title: "Redaktionelle Richtlinie", description: "AgenticWhatsup Publikationsprinzipien: nützliche, geprüfte und datierte Inhalte für Teams, die WhatsApp Business und Konversations-KI einsetzen.", eyebrow: "Publikation", updatedLabel: "Zuletzt aktualisiert: Juni 2026", contactLabel: "Korrekturhinweis senden", sectionKey: "charte" },
    nl: { title: "Redactioneel beleid", description: "Publicatieprincipes van AgenticWhatsup: nuttige, gecontroleerde en gedateerde content voor teams die WhatsApp Business en conversationele AI inzetten.", eyebrow: "Publicatie", updatedLabel: "Laatst bijgewerkt: juni 2026", contactLabel: "Correctie melden", sectionKey: "charte" },
  },
  ethique: {
    fr: { title: "Politique éthique", description: "Principes éthiques AgenticWhatsup pour l'automatisation WhatsApp : consentement, supervision humaine, sécurité des données et transparence opérationnelle.", eyebrow: "Éthique", updatedLabel: "Dernière mise à jour : juin 2026", contactLabel: "Contacter l'équipe", sectionKey: "ethics" },
    en: { title: "Ethics policy", description: "AgenticWhatsup ethics principles for WhatsApp automation: consent, human supervision, data safety and operational transparency.", eyebrow: "Ethics", updatedLabel: "Last updated: June 2026", contactLabel: "Contact the team", sectionKey: "ethics" },
    de: { title: "Ethikrichtlinie", description: "Ethikprinzipien von AgenticWhatsup für WhatsApp-Automatisierung: Einwilligung, menschliche Aufsicht, Datensicherheit und Transparenz.", eyebrow: "Ethik", updatedLabel: "Zuletzt aktualisiert: Juni 2026", contactLabel: "Team kontaktieren", sectionKey: "ethics" },
    nl: { title: "Ethisch beleid", description: "Ethische principes van AgenticWhatsup voor WhatsApp-automatisering: toestemming, menselijk toezicht, gegevensveiligheid en transparantie.", eyebrow: "Ethiek", updatedLabel: "Laatst bijgewerkt: juni 2026", contactLabel: "Neem contact op", sectionKey: "ethics" },
  },
  corrections: {
    fr: { title: "Politique de corrections", description: "Comment AgenticWhatsup reçoit, vérifie et corrige les erreurs éditoriales ou techniques signalées sur ses contenus publics.", eyebrow: "Corrections", updatedLabel: "Dernière mise à jour : juin 2026", contactLabel: "Signaler une correction", sectionKey: "corrections" },
    en: { title: "Corrections policy", description: "How AgenticWhatsup receives, checks and corrects editorial or technical errors reported on public content.", eyebrow: "Corrections", updatedLabel: "Last updated: June 2026", contactLabel: "Report a correction", sectionKey: "corrections" },
    de: { title: "Korrekturrichtlinie", description: "Wie AgenticWhatsup redaktionelle oder technische Fehler in öffentlichen Inhalten entgegennimmt, prüft und korrigiert.", eyebrow: "Korrekturen", updatedLabel: "Zuletzt aktualisiert: Juni 2026", contactLabel: "Korrektur melden", sectionKey: "corrections" },
    nl: { title: "Correctiebeleid", description: "Hoe AgenticWhatsup redactionele of technische fouten in publieke content ontvangt, controleert en corrigeert.", eyebrow: "Correcties", updatedLabel: "Laatst bijgewerkt: juni 2026", contactLabel: "Correctie melden", sectionKey: "corrections" },
  },
  diversite: {
    fr: { title: "Politique de diversité", description: "Engagement AgenticWhatsup pour des exemples, contenus et cas d'usage représentatifs de plusieurs secteurs, pays, langues et tailles d'entreprise.", eyebrow: "Diversité", updatedLabel: "Dernière mise à jour : juin 2026", contactLabel: "Proposer un retour", sectionKey: "diversity" },
    en: { title: "Diversity policy", description: "AgenticWhatsup commitment to examples, content and use cases that represent several industries, countries, languages and company sizes.", eyebrow: "Diversity", updatedLabel: "Last updated: June 2026", contactLabel: "Share feedback", sectionKey: "diversity" },
    de: { title: "Diversitätsrichtlinie", description: "AgenticWhatsup verpflichtet sich zu Beispielen, Inhalten und Einsatzfällen aus mehreren Branchen, Ländern, Sprachen und Unternehmensgrößen.", eyebrow: "Diversität", updatedLabel: "Zuletzt aktualisiert: Juni 2026", contactLabel: "Feedback senden", sectionKey: "diversity" },
    nl: { title: "Diversiteitsbeleid", description: "AgenticWhatsup streeft naar voorbeelden, content en use cases die meerdere sectoren, landen, talen en bedrijfsgroottes vertegenwoordigen.", eyebrow: "Diversiteit", updatedLabel: "Laatst bijgewerkt: juni 2026", contactLabel: "Feedback delen", sectionKey: "diversity" },
  },
};

function normalizeLocale(locale: string): Locale {
  return LOCALES.includes(locale as Locale) ? (locale as Locale) : "fr";
}

function policyUrl(locale: string, policy: EditorialPolicySlug): string {
  return `${BASE_URL}/${normalizeLocale(locale)}/${policy}`;
}

function getCopy(locale: string, policy: EditorialPolicySlug): PolicyCopy {
  const currentLocale = normalizeLocale(locale);
  const copy = POLICY_COPY[policy][currentLocale];
  return {
    ...copy,
    sections: common[copy.sectionKey][currentLocale].map(([title, body]) => ({ title, body })),
  };
}

export function buildEditorialPolicyMetadata(locale: string, policy: EditorialPolicySlug): Metadata {
  const currentLocale = normalizeLocale(locale);
  const copy = getCopy(currentLocale, policy);
  return {
    title: copy.title,
    description: copy.description,
    robots: { index: true, follow: true },
    alternates: {
      canonical: policyUrl(currentLocale, policy),
      languages: {
        fr: policyUrl("fr", policy),
        en: policyUrl("en", policy),
        de: policyUrl("de", policy),
        nl: policyUrl("nl", policy),
        "x-default": policyUrl("fr", policy),
      },
    },
    openGraph: {
      type: "website",
      title: copy.title,
      description: copy.description,
      url: policyUrl(currentLocale, policy),
      siteName: "AgenticWhatsup",
    },
  };
}

export function EditorialPolicyPage({ locale, policy }: { locale: string; policy: EditorialPolicySlug }) {
  const currentLocale = normalizeLocale(locale);
  const copy = getCopy(currentLocale, policy);
  const canonicalUrl = policyUrl(currentLocale, policy);
  const contactHref = `/${currentLocale}/contact`;
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    name: copy.title,
    description: copy.description,
    url: canonicalUrl,
    inLanguage: currentLocale,
    isPartOf: { "@id": `${BASE_URL}/#website` },
    publisher: { "@id": `${BASE_URL}/#organization` },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "AgenticWhatsup", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: copy.title, item: canonicalUrl },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <p className="text-wa text-sm font-semibold mb-3">{copy.eyebrow}</p>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-tight" style={{ fontFamily: "Onest, sans-serif" }}>
        {copy.title}
      </h1>
      <p className="text-slate-400 text-lg leading-relaxed mb-4">{copy.description}</p>
      <p className="text-slate-500 text-sm mb-10">{copy.updatedLabel}</p>
      <div className="space-y-8">
        {copy.sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "Onest, sans-serif" }}>
              {section.title}
            </h2>
            <p className="text-slate-300 leading-relaxed">{section.body}</p>
          </section>
        ))}
      </div>
      <div className="mt-12 border-t border-surface-2 pt-8">
        <Link href={contactHref} className="inline-flex items-center justify-center rounded-xl bg-wa px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-wa/90">
          {copy.contactLabel}
        </Link>
      </div>
    </div>
  );
}
