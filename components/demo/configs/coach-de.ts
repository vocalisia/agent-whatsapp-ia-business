import type { SimulatorConfig } from "../WhatsAppSimulator";
import { mergeWithVocalisDE, createFallbackDE } from "./vocalis-features-de";

const COACH_INTENTS_DE = {
  hallo: {
    text: "Hallo! Herzlich willkommen bei **CoachPro**!\n\nIch bin Ihr Coaching-Assistent, angetrieben von **Vocalis AI**.\n\nIch kann Ihnen helfen, unsere Programme zu entdecken, eine Kennenlernsitzung zu buchen oder ein personliches Erstgesprach zu erhalten. Wie kann ich Sie begleiten?",
    delay: 1200,
    quickReplies: [
      { label: "Programme", value: "programme" },
      { label: "Kennenlern-Sitzung", value: "kennenlern sitzung" },
      { label: "Stimmklonung", value: "stimmklonung" },
      { label: "WhatsApp Funktionen", value: "whatsapp features" },
      { label: "KI-Telefonie", value: "telefonie" },
      { label: "Kostenlose Analyse", value: "kostenlose analyse" },
    ],
  },

  programme: {
    text: "Hier sind unsere **3 Coaching-Programme**:\n\n**1. Einzelcoaching** - Personliches 1-zu-1-Begleitung\n12 Sitzungen a 60 Min. uber 3 Monate\nWhatsApp-Begleitung zwischen den Sitzungen\n\n**2. Gruppencoaching** - Kollektive Dynamik (6-8 Personen)\n8 Sitzungen a 90 Min. uber 2 Monate\nPrivate Gemeinschaft fur gegenseitige Unterstutzung\n\n**3. VIP Intensiv** - Beschleunigte Transformation\n20 Sitzungen + uneingeschrankter WhatsApp-Zugang\nMasgeschneiderter Aktionsplan + exklusive Ressourcen\n\nFur welches Programm interessieren Sie sich?",
    delay: 2000,
    quickReplies: [
      { label: "Preise", value: "preis" },
      { label: "Einzelcoaching", value: "einzelcoaching" },
      { label: "VIP-Programm", value: "vip" },
      { label: "Gruppencoaching", value: "gruppencoaching" },
    ],
  },

  "kennenlern sitzung": {
    text: "Perfekt! Lassen Sie uns Ihre **kostenlose Kennenlernsitzung** von 30 Min. buchen.\n\nHier sind die nachsten verfugbaren Termine:\n\n**Montag, 21. April**: 10:00, 14:00, 17:00\n**Mittwoch, 23. April**: 9:00, 11:00, 16:00\n**Freitag, 25. April**: 10:00, 15:00\n\nDie Sitzung findet per Video (Zoom) oder Telefon statt, je nach Ihrer Praferenz.\n\nWelcher Termin passt Ihnen?",
    delay: 1600,
    quickReplies: [
      { label: "Montag 10 Uhr", value: "termin bestatigen" },
      { label: "Mittwoch 11 Uhr", value: "termin bestatigen" },
      { label: "Freitag 15 Uhr", value: "termin bestatigen" },
      { label: "Andere Verfugbarkeiten", value: "anderer termin" },
    ],
  },

  verfugbarkeiten: {
    text: "Hier sind alle unsere **Verfugbarkeiten** diese Woche:\n\n**Montag**: 9-12 Uhr / 14-18 Uhr\n**Dienstag**: 10-12 Uhr / 15-17 Uhr\n**Mittwoch**: 9-12 Uhr / 14-17 Uhr\n**Donnerstag**: 10-12 Uhr / 14-16 Uhr\n**Freitag**: 9-12 Uhr / 14-16 Uhr\n\nSitzungen dauern 60 Min. (30 Min. fur die Kennenlernsitzung).\n\nAuf Anfrage kann ich auch Abendtermine anbieten.",
    delay: 1500,
    quickReplies: [
      { label: "Termin buchen", value: "termin" },
      { label: "Abendtermin", value: "verfugbarkeiten" },
      { label: "Wochenende", value: "verfugbarkeiten" },
    ],
  },

  erfahrungsberichte: {
    text: "Das sagen unsere **Klienten**:\n\n**Sophie, 34 Jahre** - Einzelcoaching\n\"In 3 Monaten habe ich meinen Karrierewechsel geklart und meine Tatigkeit gestartet. Die WhatsApp-Begleitung zwischen den Sitzungen macht den Unterschied.\"\n\n**Marc, 42 Jahre** - VIP-Programm\n\"Ich habe meinen Umsatz in 6 Monaten verdoppelt. Die Methode ist strukturiert und die Werkzeuge sind konkret.\"\n\n**Startup-Team (8 Pers.)** - Gruppencoaching\n\"Unser Teamzusammenhalt hat sich transformiert. +40% gemessene Produktivitat.\"\n\n92% unserer Klienten erreichen ihre Ziele im vorgesehenen Zeitrahmen.",
    delay: 2200,
    quickReplies: [
      { label: "Programme ansehen", value: "programme" },
      { label: "Kennenlernsitzung", value: "kennenlern sitzung" },
      { label: "Coaching-Methode", value: "methode" },
    ],
  },

  methode: {
    text: "Unsere **CoachPro-Methode** basiert auf 4 Saulen:\n\n**1. Diagnose** - Vollstandige Bestandsaufnahme Ihrer Situation\nSMART-Ziele, Werte, erkannte Hindernisse\n\n**2. Aktionsplan** - Personliche Roadmap\nKonkrete Schritte, Erfolgsindikatoren\n\n**3. Begleitung** - Sitzungen + kontinuierliche Unterstutzung\nPraktische Ubungen, wissenschaftlich validierte Werkzeuge\n\n**4. Verankerung** - Festigung der Ergebnisse\nNachhaltige Gewohnheiten, schrittweise Autonomie\n\nWir verwenden anerkannte Ansatze: NLP, Transaktionsanalyse, kognitiv-behaviorales Coaching.",
    delay: 2000,
    quickReplies: [
      { label: "Kostenlose Analyse", value: "kostenlose analyse" },
      { label: "Erfahrungsberichte", value: "erfahrungsberichte" },
      { label: "Sitzung buchen", value: "termin" },
    ],
  },

  "kostenlose analyse": {
    text: "Ausgezeichnete Wahl! Die **kostenlose Analyse** ist der erste Schritt.\n\nIch stelle Ihnen 5 schnelle Fragen, um Ihre Situation zu bewerten:\n\n**Frage 1/5**: In welchem Bereich mochten Sie Fortschritte machen?\n\na) Karriere / Berufswechsel\nb) Fuhrung / Management\nc) Work-Life-Balance\nd) Selbstvertrauen\ne) Unternehmensgrundung",
    delay: 1800,
    quickReplies: [
      { label: "Karriere", value: "ziel karriere" },
      { label: "Fuhrung", value: "ziel fuhrung" },
      { label: "Balance", value: "ziel balance" },
      { label: "Selbstvertrauen", value: "ziel selbstvertrauen" },
      { label: "Unternehmertum", value: "ziel business" },
    ],
  },

  ziele: {
    text: "Die Definition Ihrer **Ziele** ist fur ein effektives Coaching unerlasslich.\n\nHier sind die Bereiche, in denen wir unsere Klienten begleiten:\n\n- Beruflicher Wandel\n- Neue Position / Fuhrung\n- Stressmanagement und Balance\n- Selbstvertrauen und Durchsetzungsfahigkeit\n- Unternehmensgrundung / -entwicklung\n- Berufliche Beziehungen\n- Leistung und Produktivitat\n\nWas ist Ihr wichtigstes Ziel heute?",
    delay: 1600,
    quickReplies: [
      { label: "Kostenlose Analyse", value: "kostenlose analyse" },
      { label: "Kennenlernsitzung", value: "kennenlern sitzung" },
      { label: "Methode", value: "methode" },
    ],
  },

  begleitung: {
    text: "Die **Zwischensitzungs-Begleitung** ist unsere Starke!\n\nZwischen jeder Sitzung profitieren Sie von:\n\n- **Unbegrenzte WhatsApp-Nachrichten** mit Ihrem KI-Coach\n- **Praktische Ubungen** nach jeder Sitzung gesendet\n- **Wochentlicher Check-in**: kurze Fortschrittsubersicht\n- **Automatische Erinnerungen** fur Ihre durchzufuhrenden Massnahmen\n- **Personalisierte Ressourcen** entsprechend Ihrem Fortschritt\n\nEs ist wie ein Coach, der 24h/24 verfugbar ist, um Ihre Dynamik aufrechtzuerhalten!",
    delay: 1800,
    quickReplies: [
      { label: "Ressourcen ansehen", value: "ressourcen" },
      { label: "Programme", value: "programme" },
      { label: "Buchen", value: "termin" },
    ],
  },

  ressourcen: {
    text: "Hier sind die in unseren Programmen enthaltenen **Ressourcen**:\n\n**Praxisleitfaden:**\n- Lebensrad (Gesamtbilanz)\n- Eisenhower-Matrix (Prioritaten)\n- Personliches SWOT\n- 90-Tage-Aktionsplan\n\n**Ubungen:**\n- Gefuhrtes Dankbarkeitstagebuch\n- Zielvisualisierung\n- Stressbewaltigung\n\n**Digitale Werkzeuge:**\n- Fortschritts-Dashboard\n- Planungsvorlagen\n- Gefuhrte Audio-Meditationen\n\nIch kann Ihnen ein **kostenloses Muster** des Lebenrad-Leitfadens senden!",
    delay: 2000,
    quickReplies: [
      { label: "Muster erhalten", value: "muster" },
      { label: "Kennenlernsitzung", value: "kennerlern sitzung" },
      { label: "Programme", value: "programme" },
    ],
  },

  notfall: {
    text: "Ich verstehe, dass Sie gerade eine schwierige Zeit durchmachen.\n\n**Wichtig**: Ich bin ein KI-Assistent und ersetze keinen Psychologen.\n\nWenn Sie sich in einer Krisensituation befinden:\n\n- **Telefonseelsorge**: 0800 111 0 111 (24h/24)\n- **Krisentelefon**: 0800 111 0 222\n- **Notruf**: 112\n- **Dargebotene Hand (Schweiz)**: 143\n\nUnser menschlicher Coach kann Sie auch schnell zuruckrufen. Mochten Sie, dass ich Ihre Anfrage mit Prioritat weiterleite?",
    delay: 1400,
    quickReplies: [
      { label: "Ruckruf anfordern", value: "ruckruf notfall" },
      { label: "Danke, es geht mir gut", value: "hallo" },
    ],
  },

  faq: {
    text: "**Haufig gestellte Fragen**:\n\n**Wie lange dauert ein Coaching?**\n2 bis 6 Monate je nach gewahiten Programm.\n\n**Per Video oder personlich?**\nBeides! Video-Zoom oder in der Praxis in Zurich.\n\n**Vertraulichkeit?**\n100% vertraulich. Verschlusselte Gesprache, DSGVO-konform.\n\n**Garantierte Ergebnisse?**\n92% unserer Klienten erreichen ihre Ziele. Zufriedenheit oder kostenlose Verlangerung.\n\n**Stornierung?**\nFlexibel, Umbuchung bis zu 24h vorher.\n\nNoch eine andere Frage?",
    delay: 2000,
    quickReplies: [
      { label: "Preise", value: "preis" },
      { label: "Erfahrungsberichte", value: "erfahrungsberichte" },
      { label: "Buchen", value: "termin" },
    ],
  },

  zahlung: {
    text: "Wir bieten mehrere **Zahlungsoptionen**:\n\n**Einmalzahlung** - Am vorteilhaftesten\nUberweisung, Kreditkarte oder Twint\n\n**Zahlung in 2 Raten** - Kostenlos\n50% bei Anmeldung + 50% auf halbem Weg\n\n**Zahlung in 3 Raten** - Kostenlos\n33% bei Anmeldung + 2 monatliche Raten\n\n**Zahlung in 4 Raten** - Kostenlos\n25% bei Anmeldung + 3 monatliche Raten\n\nProfessionelle Rechnung wird ausgestellt (abzugsfahig bei Weiterbildung).\nKostenabrechnung fur Unternehmen moglich.",
    delay: 1800,
    quickReplies: [
      { label: "Detaillierte Preise", value: "preis" },
      { label: "Buchen", value: "termin" },
      { label: "Steuerlich absetzbar?", value: "absetzbar" },
    ],
  },

  gruppencoaching: {
    text: "Das **Gruppencoaching** ist ideal fur:\n\n**Unternehmensteams** (6-8 Personen)\n- Zusammenhalt und Kommunikation\n- Konfliktmanagement\n- Kollektive Fuhrung\n- Gemeinsame Ziele\n\n**Offene Gruppen** (6-8 Personen)\n- Beruflicher Wandel\n- Unternehmertum\n- Personliche Entwicklung\n\n**Format**: 8 Sitzungen a 90 Min. uber 2 Monate\n**Preis**: 890 CHF/Person\n**Bonus**: Private WhatsApp-Gemeinschaft der Gruppe\n\nNachste Staffel: **Mai 2026** - Begrenzte Platze!",
    delay: 2000,
    quickReplies: [
      { label: "Fur Gruppe anmelden", value: "termin" },
      { label: "Einzelcoaching", value: "einzelcoaching" },
      { label: "Unternehmenspreise", value: "preis" },
    ],
  },

  einzelcoaching: {
    text: "Das **Einzelcoaching** ist unser Flaggschiff-Programm:\n\n**Enthaltene Leistungen:**\n- 12 Sitzungen a 60 Min. (1/Woche)\n- Eingehende Erstanalyse\n- Personlicher Aktionsplan\n- WhatsApp-Begleitung zwischen den Sitzungen\n- Praxisleitfaden und Ubungen\n- Abschlussbilanz und Konsolidierungsplan\n\n**Fur wen?**\nBerufstatige im Wandel, Manager, Unternehmer, alle, die eine masgeschneiderte Begleitung wunschen.\n\n**Dauer**: 3 Monate\n**Preis**: 1.800 CHF\n\nBeginnen Sie mit einer kostenlosen Kennenlernsitzung!",
    delay: 2000,
    quickReplies: [
      { label: "Kennenlernsitzung", value: "kennerlern sitzung" },
      { label: "Mit VIP vergleichen", value: "vip" },
      { label: "Erfahrungsberichte", value: "erfahrungsberichte" },
    ],
  },

  vip: {
    text: "Das **VIP Intensiv**-Programm ist unser Premium-Angebot:\n\n**Enthaltene Leistungen:**\n- 20 Sitzungen a 60 Min.\n- **Unbegrenzter** WhatsApp-Zugang zu Ihrem Coach\n- Vollstandige psychometrische Bestandsaufnahme\n- Masgeschneiderter strategischer Plan\n- Exklusive Ressourcen (Masterclasses, Werkzeuge)\n- 2 Nachfolge-Sitzungen nach Programmabschluss\n- Prioritats-Support 7 Tage/Woche\n\n**Durchschnittliche Ergebnisse:**\n- +67% gemessenes Selbstvertrauen\n- +45% Produktivitat\n- 94% der Ziele erreicht\n\n**Dauer**: 6 Monate\n**Preis**: 4.500 CHF (4x Zahlung moglich)",
    delay: 2200,
    quickReplies: [
      { label: "VIP buchen", value: "termin" },
      { label: "Ratenzahlung", value: "zahlung" },
      { label: "VIP Erfahrungsberichte", value: "erfahrungsberichte" },
    ],
  },
};

const COACH_KEYWORDS_DE: Record<string, string[]> = {
  hallo: ["hallo", "hi", "guten tag", "hey", "guten abend", "servus", "moin"],
  programme: ["programm", "formel", "angebot", "coaching", "begleitung", "ausbildung"],
  "kennerlern sitzung": ["kennenlernsitzung", "kennenlernen", "kostenlose sitzung"],
  verfugbarkeiten: ["verfugbarkeit", "wann", "uhrzeit", "kalender", "planung", "woche"],
  erfahrungsberichte: ["erfahrungsbericht", "bewertung", "kundenbericht", "ergebnis", "kunde", "erfolg", "feedback"],
  methode: ["methode", "ansatz", "wie funktioniert es", "funktionsweise", "prozess", "technik", "werkzeug"],
  "kostenlose analyse": ["analyse", "diagnose", "bewertung", "assessment", "test", "fragebogen"],
  ziele: ["ziel", "zweck", "ambition", "projekt", "wunsch", "bedarf"],
  begleitung: ["begleitung", "zwischen sitzungen", "begleiten", "taglich", "support"],
  ressourcen: ["ressource", "leitfaden", "ubung", "dokument", "worksheet", "praxiswerkzeug"],
  notfall: ["notfall", "dringend", "krise", "not", "hilfe", "schlecht", "deprimiert", "angst", "panik"],
  faq: ["faq", "frage", "vertraulichkeit", "stornieren", "stornierung", "dauer", "wie lange", "video", "personlich"],
  zahlung: ["zahlung", "bezahlen", "raten", "rate", "karte", "uberweisung", "twint", "rechnung"],
  gruppencoaching: ["gruppe", "team", "kollektiv", "team coaching", "unternehmen", "teambildung"],
  einzelcoaching: ["einzeln", "personlich", "privat", "allein", "1-zu-1", "one to one"],
  vip: ["vip", "premium", "intensiv", "exklusiv", "hochwertig", "vollstandig"],
};

const merged = mergeWithVocalisDE(COACH_INTENTS_DE, COACH_KEYWORDS_DE);

export const coachConfigDE: SimulatorConfig = {
  botName: "CoachPro IA",
  botAvatar: "CP",
  welcomeMessage:
    "Willkommen bei **CoachPro**! Ich bin Ihr KI-Assistent, angetrieben von **Vocalis AI**.\n\nIch kann Ihnen helfen:\n- Unsere Coaching-Programme zu entdecken\n- Eine kostenlose Kennenlernsitzung zu buchen\n- Eine personliche Analyse zu erhalten\n- Alle Ihre Fragen zu beantworten\n\nWie kann ich Sie heute begleiten?",
  initialQuickReplies: [
    { label: "Programme", value: "programme" },
    { label: "Kennenlernsitzung", value: "kennerlern sitzung" },
    { label: "Preise", value: "preis" },
    { label: "Kostenlose Analyse", value: "kostenlose analyse" },
  ],
  intents: merged.intents,
  keywords: merged.keywords,
  fallback: createFallbackDE([
    { label: "Programme", value: "programme" },
    { label: "Kennenlernsitzung", value: "kennerlern sitzung" },
    { label: "Kostenlose Analyse", value: "kostenlose analyse" },
    { label: "Preise", value: "preis" },
  ]),
};

export default coachConfigDE;
