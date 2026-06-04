import type { SimulatorConfig, BotResponse } from "../WhatsAppSimulator";
import { mergeWithVocalisDE, createFallbackDE } from "./vocalis-features-de";

const sectorIntents: Record<string, BotResponse> = {
  hallo: {
    text: "Guten Tag ! Willkommen bei **JurisAssist**.\n\nIch bin Ihr KI-Rechtsassistent, verfugbar rund um die Uhr.\n\nIch kann Ihnen helfen bei :\n- Beratungstermin vereinbaren\n- Rechtsgebiet identifizieren\n- Aktenlage verfolgen\n- Rechtsdokument analysieren\n- Honorare in Erfahrung bringen\n- Rechtlichen Notfall bewaltigen\n\nWie kann ich Ihnen helfen ?",
    delay: 1400,
    quickReplies: [
      { label: "Beratung", value: "beratung" },
      { label: "Rechtsgebiete", value: "rechtsgebiete" },
      { label: "Akte verfolgen", value: "akte verfolgen" },
      { label: "Notfall", value: "rechtsnotfall" },
    ],
  },

  beratung: {
    text: "**Rechtsberatung buchen**\n\nVerfugbare Termine :\n\n- Montag 10:00 oder 15:00 Uhr\n- Dienstag 9:00 oder 14:00 Uhr\n- Mittwoch 11:00 oder 16:00 Uhr\n- Donnerstag 10:00 oder 17:00 Uhr\n- Freitag 9:00 oder 14:00 Uhr\n\n**Formate :**\n- In der Kanzlei (Berlin, Hamburg, Munchen)\n- Per Videokonferenz (Zoom / WhatsApp Video)\n- Telefonisch\n\n**Erstgesprach :** 30 Minuten kostenlos zur Einschatzung Ihrer Situation.\n\nWelcher Termin passt Ihnen ?",
    delay: 2000,
    quickReplies: [
      { label: "Montag 10 Uhr", value: "termin bestatigen" },
      { label: "Dienstag 14 Uhr", value: "termin bestatigen" },
      { label: "Anderer Termin", value: "anderer termin" },
      { label: "Honorare", value: "honorare" },
    ],
  },

  rechtsgebiete: {
    text: "**Unsere Rechtsgebiete :**\n\n**Familienrecht**\n- Scheidung, Sorgerecht, Unterhalt, Adoption\n\n**Immobilienrecht**\n- Mietstreitigkeiten, Wohnungseigentumsrecht, Baurecht\n\n**Handelsrecht**\n- Vertrage, Gesellschaftsrecht, Handelsstreitigkeiten\n\n**Strafrecht**\n- Strafverteidigung, Ermittlungsverfahren, Straftaten\n\n**Arbeitsrecht**\n- Kundigung, Mobbing, Arbeitsgericht\n\n**Gesellschaftsrecht**\n- Grunding, Übertragung, Liquidation\n\nIn welchem Bereich benotigen Sie Hilfe ?",
    delay: 2200,
    quickReplies: [
      { label: "Familie / Scheidung", value: "scheidung" },
      { label: "Arbeitsrecht", value: "vertrag" },
      { label: "Unternehmensgrundung", value: "unternehmensgrundung" },
      { label: "Mietrecht", value: "mietrecht" },
    ],
  },

  honorare: {
    text: "**Honorartabelle JurisAssist**\n\n**Erstgesprach** — Kostenlos (30 Min)\nEinschatzung Ihrer Situation + Maßnahmenplan\n\n**Standardberatung** — estimation personnalisee\nVertiefte Analyse, personliche Beratung\n\n**Pauschalgebuhr einfach** — 800 - estimation personnalisee\nAbmahnschreiben, Vertragsprufung\n\n**Streitverfahren** — 2.000 - estimation personnalisee\nGerichtsvertretung, Verhandlung\n\n**Unternehmensabo** — Individuell\nDauerhafter Rechtsbeistand\n\n**Prozesskostenhilfe** wird je nach Berechtigung gewahrt.\n\nAlle Honorare werden vor Mandatserteilung mitgeteilt.",
    delay: 2200,
    quickReplies: [
      { label: "Erstgesprach", value: "beratung" },
      { label: "Prozesskostenhilfe", value: "prozesskostenhilfe" },
      { label: "Unternehmenspaket", value: "unternehmensgrundung" },
      { label: "Termin buchen", value: "beratung" },
    ],
  },

  dokumente: {
    text: "**Dokumente fur Ihre Akte vorbereiten :**\n\n**Fur jede Akte :**\n- Gultiger Personalausweis oder Reisepass\n- Wohnsitznachweis (< 3 Monate)\n- Sachverhaltschronologie (bei Streitigkeit)\n\n**Je nach Rechtsgebiet :**\n- Betreffende Vertrage\n- Schriftverkehr (E-Mails, Briefe)\n- Fruhere Gerichtsentscheidungen\n- Beweise (Fotos, Zeugenaussagen, Rechnungen)\n\n**KI-Tipp :** Schicken Sie mir ein Foto Ihres Dokuments, ich erstelle eine **automatische Zusammenfassung** mit den Hauptpunkten.\n\nWelche Dokumente haben Sie ?",
    delay: 2000,
    quickReplies: [
      { label: "Dokument senden", value: "dokumentenfoto" },
      { label: "Termin buchen", value: "beratung" },
      { label: "Fristen", value: "fristen" },
      { label: "Akte verfolgen", value: "akte verfolgen" },
    ],
  },

  "akte verfolgen": {
    text: "**Ihrer Rechtsakte folgen**\n\nGeben Sie Ihre Aktennummer ein, um den Status in Echtzeit zu sehen.\n\n**Verfolgte Schritte :**\n- Aktenoffnung\n- Unterlagensammlung\n- Rechtliche Analyse\n- Abmahnung / Verhandlung\n- Gerichtsverfahren (falls notig)\n- Verhandlung\n- Entscheidung / Urteil\n- Vollstreckung\n\nSie erhalten eine **WhatsApp-Benachrichtigung** bei jedem Fortschritt.\n\n*Aktenformat : JUR-2026-XXXX*",
    delay: 1800,
    quickReplies: [
      { label: "Nummer eingeben", value: "akte verfolgen" },
      { label: "Anwalt kontaktieren", value: "beratung" },
      { label: "Fehlende Unterlagen", value: "dokumente" },
      { label: "Laufende Fristen", value: "fristen" },
    ],
  },

  rechtsnotfall: {
    text: "**Rechtlicher Notfall — Sofortbestand**\n\nBei einer Notsituation :\n\n**Festnahme / Verhor** — Recht auf sofortigen Anwalt\nRufen Sie unsere 24/7-Notfallnummer an\n\n**Drohende Zwangsraumung** — Rechtliche Fristen prufen\nWir konnen im einstweiligen Rechtsschutz einschreiten\n\n**Hausliche Gewalt** — 116 016 + Strafanzeige\nRechtliche Notfallbegleitung\n\n**Pfandung** — Widerspruch innerhalb von 48 Stunden moglich\n\n**Schwerer Unfall** — Beweise sichern\n\nSchildern Sie Ihre Situation und ein Anwalt ruft Sie innerhalb von **30 Minuten** zuruck.",
    delay: 2200,
    quickReplies: [
      { label: "Festnahme / Verhor", value: "rechtsnotfall" },
      { label: "Zwangsraumung", value: "mietrecht" },
      { label: "Sofortiger Ruckruf", value: "beratung" },
      { label: "Prozesskostenhilfe", value: "prozesskostenhilfe" },
    ],
  },

  dokumentenfoto: {
    text: "Schicken Sie mir ein Foto Ihres Rechtsdokuments, und unsere **KI analysiert** automatisch :\n\n- **Zusammenfassung der Hauptklauseln**\n- **Pflichten jeder Partei**\n- **Wichtige Fristen und Termine**\n- **Potenziell missbrauliche Klauseln**\n- **Rechtliche Aufmerksamkeitspunkte**\n\nAkzeptierte Formate : Vertrag, Mietvertrag, Abmahnung, Urteil, Satzung, Protokoll.\n\nDie Analyse dauert ca. 15 Sekunden. Senden Sie Ihr Dokument !",
    delay: 1800,
    quickReplies: [
      { label: "Vertrag analysieren", value: "vertrag" },
      { label: "Mietvertrag analysieren", value: "mietrecht" },
      { label: "Anwaltstermin", value: "beratung" },
      { label: "Honorare", value: "honorare" },
    ],
  },

  abmahnung: {
    text: "**Abmahnung — Verfahren**\n\nEine Abmahnung ist ein formelles Schreiben, das den Empfanger zur Handlung verpflichtet.\n\n**Schritte :**\n1. Streitigkeitsfeststellung und Rechtsgrundlage\n2. Entwurf durch unser Rechtsteam\n3. Versand per **Einschreiben mit Ruckschein**\n4. Antwortfrist : 8 bis 15 Tage\n5. Keine Antwort → Gerichtsverfahren\n\n**Pauschale Abmahnung :** estimation personnalisee\nInklusive : Entwurf + Versand + Verfolgung\n\n**Gutliche Einigungsquote : 65 %**\n\nSollen wir Ihre Abmahnung vorbereiten ?",
    delay: 2000,
    quickReplies: [
      { label: "Ja, starten", value: "beratung" },
      { label: "Erforderliche Dokumente", value: "dokumente" },
      { label: "Was kostet es", value: "honorare" },
      { label: "Rechtliche Fristen", value: "fristen" },
    ],
  },

  scheidung: {
    text: "**Scheidungsverfahren — Überblick**\n\n**Einvernehmliche Scheidung**\n- Dauer : 2 bis 4 Monate\n- Durchschnittliche Kosten : 1.500 - estimation personnalisee\n- Einigung uber alles : Vermogen, Kinder, Unterhalt\n- Beurkundung beim Notar (kein Richter)\n\n**Streitige Scheidung**\n- Dauer : 12 bis 24 Monate\n- Antrag beim Familiengericht\n- Vorlaufige Maßnahmen moglich\n\n**Zu regelnde Punkte :**\n- Sorgerecht + Umgangsrecht\n- Kindesunterhalt\n- Trennungsunterhalt\n- Vermogensaufteilung\n- Familienheim\n\nMochten Sie eine vertrauliche Beratung ?",
    delay: 2400,
    quickReplies: [
      { label: "Scheidungsberatung", value: "beratung" },
      { label: "Erforderliche Unterlagen", value: "dokumente" },
      { label: "Scheidungskosten", value: "honorare" },
      { label: "Prozesskostenhilfe", value: "prozesskostenhilfe" },
    ],
  },

  unternehmensgrundung: {
    text: "**Unternehmensgrundung — Begleitung**\n\n**Rechtsformen :**\n- **GmbH** — Sicherer Rahmen, beliebt in Deutschland\n- **UG** — Vereinfachte GmbH (ab estimation personnalisee Stammkapital)\n- **AG** — Fur Großprojekte\n- **GbR / OHG** — Personengesellschaften\n- **Einzelunternehmen** — Einfach und schnell\n\n**Unsere Begleitung :**\n1. Wahl der Rechtsform\n2. Satzungsentwurf\n3. Eintragung beim Handelsregister\n4. Gesellschaftervertrag (falls erforderlich)\n5. Grundungsvertrage\n\n**Grundungspaket :** ab estimation personnalisee\nDurchschnittliche Dauer : 7 bis 14 Tage.\n\nWelche Gesellschaftsform interessiert Sie ?",
    delay: 2200,
    quickReplies: [
      { label: "GmbH grunden", value: "unternehmensgrundung" },
      { label: "UG grunden", value: "unternehmensgrundung" },
      { label: "Grundungsberatung", value: "beratung" },
      { label: "Honorare", value: "honorare" },
    ],
  },

  mietrecht: {
    text: "**Mietrechtsstreitigkeiten — Ihre Rechte**\n\n**Haufige Probleme :**\n\n**Mietruckstande**\n- Abmahnung → Zahlungsaufforderung → Raumung\n- Mindestfrist : 2 Monate nach Zahlungsaufforderung\n\n**Übergabeprotokoll**\n- Anfechtung innerhalb von 14 Tagen\n- Gutachter (einvernehmlich oder gerichtlich)\n\n**Kaution**\n- Ruckzahlung innerhalb von 1 Monat (keine Abzuge) oder 3 Monaten\n- Abmahnung bei Verspatung\n\n**Renovierungsarbeiten**\n- Schonheitsreparaturen vs. bauliche Unterhaltung\n- Anpassung an gesetzliche Standards\n\n**Kundigung / Kundigungsfrist**\n- 3 Monate (Eigenbedarfs-) oder gesetzliche Fristen\n\nWas ist Ihr Mietrechtsproblem ?",
    delay: 2200,
    quickReplies: [
      { label: "Mietruckstande", value: "abmahnung" },
      { label: "Kaution", value: "abmahnung" },
      { label: "Mietrechtsberatung", value: "beratung" },
      { label: "Mietvertrag einsenden", value: "dokumentenfoto" },
    ],
  },

  vertrag: {
    text: "**Vertragsprufung und -analyse**\n\nUnsere KI + unsere Anwalte analysieren Ihren Vertrag :\n\n**Was wir prufen :**\n- Missbrauliche oder unausgewogene Klauseln\n- Unverhaltnis der Verpflichtungen\n- Wettbewerbsverbote\n- Kundigungsbedingungen\n- Vertragsstrafen und Schadensersatz\n- Rechtskonformitat\n\n**Vertragstypen :**\n- Arbeitsvertrag (unbefristet, befristet, freiberuflich)\n- Handelsvertrag\n- AGB / Datenschutzerkl.\n- Dienstleistungsvertrag\n- Gewerbemietvertrag\n\n**Prufungspauschale :** estimation personnalisee\nFrist : 48 Stunden (Werktage).\n\nSchicken Sie Ihren Vertrag zur Analyse !",
    delay: 2000,
    quickReplies: [
      { label: "Vertrag einsenden", value: "dokumentenfoto" },
      { label: "Arbeitsvertrag", value: "vertrag" },
      { label: "Handelsvertrag", value: "vertrag" },
      { label: "Anwaltstermin", value: "beratung" },
    ],
  },

  fristen: {
    text: "**Rechtliche Fristen und Verjahrung**\n\nAchtung bei Fristen ! Danach erloschen Ihre Rechte.\n\n**Arbeitsrecht :**\n- Kundigung anfechten : **3 Wochen** (Klage beim Arbeitsgericht)\n- Lohnruckstande : **3 Jahre**\n- Mobbing / Belastigung : **3 Jahre**\n\n**Zivilrecht :**\n- Allgemeine Verjahrung : **3 Jahre**\n- Versteckte Mangel Immobilien : **5 Jahre**\n- Bauschaden : **5 Jahre**\n\n**Strafrecht :**\n- Ordnungswidrigkeit : **3 Jahre**\n- Vergehen : **5 Jahre**\n- Verbrechen : **20 Jahre**\n\n**Verbraucherrecht :**\n- Widerrufsrecht Online-Kauf : **14 Tage**\n- Gesetzliche Gewahrl. : **2 Jahre**\n\nPrufen Sie Ihre Fristen, bevor es zu spat ist !",
    delay: 2200,
    quickReplies: [
      { label: "Dringende Beratung", value: "beratung" },
      { label: "Abmahnung", value: "abmahnung" },
      { label: "Akte verfolgen", value: "akte verfolgen" },
      { label: "Honorare", value: "honorare" },
    ],
  },

  prozesskostenhilfe: {
    text: "**Prozesskostenhilfe (PKH) — Berechtigung**\n\nDie PKH ubernimmt Ihre Anwalts- und Gerichtskosten.\n\n**Einkommensgrenzen (2026) :**\n- **Vollstandige PKH** : Einkommen < estimation personnalisee\n- **Teilweise PKH** : Einkommen < estimation personnalisee\n\n**Was ubernommen wird :**\n- Anwaltshonorare\n- Gerichtsvollzieher\n- Sachverstandigenkosten\n- Gerichtskosten\n\n**Antragstellung :**\n1. Formular PKH-Antrag (beiFamiliengericht erhaltlich)\n2. Steuerbescheid\n3. Einkommensnachweise\n4. Einreichung beim Gericht oder online\n\nBearbeitungszeit : 1 bis 3 Monate.\n\nWir helfen Ihnen beim Zusammenstellen Ihrer Unterlagen.",
    delay: 2200,
    quickReplies: [
      { label: "Berechtigung prufen", value: "prozesskostenhilfe" },
      { label: "Unterlagen zusammenstellen", value: "beratung" },
      { label: "Unsere Honorare", value: "honorare" },
      { label: "Termin buchen", value: "beratung" },
    ],
  },
};

const sectorKeywords: Record<string, string[]> = {
  hallo: ["hallo", "hi", "hey", "guten morgen", "guten tag", "guten abend"],
  beratung: ["beratung", "termin", "anwalt", "berater", "treffen", "anrufen", "besprechung"],
  rechtsgebiete: ["rechtsgebiet", "spezialgebiet", "kompetenz", "welches recht", "fachbereich"],
  honorare: ["honorar", "preis", "kosten", "wie viel", "gebuhr", "abrechnen", "zahlen"],
  dokumente: ["dokument", "unterlagen", "nachweis", "akte", "bereitstellen", "vorbereiten"],
  "akte verfolgen": ["akte", "fortschritt", "stand", "aktennummer", "status", "verlauf"],
  rechtsnotfall: ["notfall", "dringend", "festnahme", "raumung", "pfandung", "gewalt", "sofort"],
  dokumentenfoto: ["foto", "scan", "dokument analysieren", "dokument einsenden", "bild vertrag"],
  abmahnung: ["abmahnung", "abmahnen", "einschreiben", "aufforderung", "unterlassung"],
  scheidung: ["scheidung", "trennung", "sorgerecht", "kindesunterhalt", "ehegattenunterhalt", "ehe"],
  unternehmensgrundung: ["grunden", "grundung", "unternehmen", "gesellschaft", "gmbh", "ug", "ag", "gbr", "satzung", "handelsregister"],
  mietrecht: ["mietrecht", "mieter", "vermieter", "miete", "raumung", "kaution", "kundigung", "mietvertrag"],
  vertrag: ["vertrag", "klausel", "prufung", "vertrag analysieren", "agb", "datenschutz", "wettbewerbsverbot"],
  fristen: ["frist", "verjahrung", "ablauf", "wie lange", "zu spat", "erloschen"],
  prozesskostenhilfe: ["prozesskostenhilfe", "pkh", "kostenhilfe", "kostenloser anwalt", "ubernahme", "einkommensgrenzen"],
};

const { intents, keywords } = mergeWithVocalisDE(sectorIntents, sectorKeywords);

export const juridiqueConfigDE: SimulatorConfig = {
  botName: "JurisAssist IA",
  botAvatar: "JA",
  welcomeMessage:
    "Willkommen bei **JurisAssist** ! Ich bin Ihr KI-Rechtsassistent.\n\nIch kann Ihnen helfen bei :\n- Beratungstermin vereinbaren\n- Rechtsgebiet identifizieren\n- Aktenlage verfolgen\n- Rechtsdokument analysieren\n- Honorare in Erfahrung bringen\n\nWie kann ich Ihnen helfen ?",
  initialQuickReplies: [
    { label: "Beratung", value: "beratung" },
    { label: "Rechtsgebiete", value: "rechtsgebiete" },
    { label: "Honorare", value: "honorare" },
    { label: "Akte verfolgen", value: "akte verfolgen" },
    { label: "Notfall", value: "rechtsnotfall" },
  ],
  intents,
  keywords,
  fallback: createFallbackDE([
    { label: "Beratung", value: "beratung" },
    { label: "Rechtsgebiete", value: "rechtsgebiete" },
    { label: "Akte verfolgen", value: "akte verfolgen" },
    { label: "Vocalis-Tarife", value: "tarif" },
  ]),
};

export default juridiqueConfigDE;
