import type { SimulatorConfig } from "../WhatsAppSimulator";
import { mergeWithVocalisDE, createFallbackDE } from "./vocalis-features-de";

const ASSURANCE_INTENTS_DE = {
  hallo: {
    text: "Hallo! Willkommen bei **AssurPlus**.\n\nIch bin Ihr KI-Assistent, 24/7 verfugbar fur Ihre Versicherungsangelegenheiten.\n\nWas kann ich heute fur Sie tun?",
    delay: 1200,
    quickReplies: [
      { label: "Schaden melden", value: "schaden melden" },
      { label: "KFZ-Angebot", value: "angebot kfz" },
      { label: "Mein Vorgang", value: "vorgang verfolgen" },
      { label: "Berater kontaktieren", value: "berater termin" },
      { label: "KI-Telefonie", value: "telefonie" },
      { label: "WhatsApp Funktionen", value: "whatsapp features" },
    ],
  },
  "schaden melden": {
    text: "Ich fuhre Sie Schritt fur Schritt durch die Schadensmeldung.\n\n**Schritt 1/4** - Schadensart:\n\nUm welche Art von Schaden handelt es sich?\n\n• Auto-/Motorrad-Unfall\n• Wasserschaden\n• Feuer\n• Naturkatastrophe\n• Diebstahl / Einbruch\n• Glasbruch\n\nIhre Meldung wird unter der Nr. **SCH-2026-04-8741** erfasst.",
    delay: 2000,
    quickReplies: [
      { label: "Autounfall", value: "schaden auto" },
      { label: "Wasserschaden", value: "schaden wasser" },
      { label: "Feuer", value: "schaden feuer" },
      { label: "Diebstahl", value: "schaden diebstahl" },
      { label: "Foto senden", value: "foto schaden" },
    ],
  },
  "schaden auto": {
    text: "**Autounfall - Schritt 2/4**\n\nDanke. Ich benotige folgende Informationen:\n\n1. Datum und Uhrzeit des Unfalls\n2. Ort (Adresse oder Gemeinde)\n3. Beschreibung des Vorfalls\n4. Beteiligte Fahrzeuge\n5. Gibt es Verletzte?\n\n**Hinweis**: Sie haben **5 Tage** Zeit, einen Autounfall zu melden.\n\nSie konnen mir auch direkt ein **Foto des Schadens** schicken fur eine KI-Schatzung.",
    delay: 2200,
    quickReplies: [
      { label: "Foto senden", value: "foto schaden" },
      { label: "Erforderliche Dokumente", value: "dokumente" },
      { label: "Selbstbeteiligung Auto", value: "selbstbeteiligung" },
      { label: "Pannenhilfe", value: "notfall" },
    ],
  },
  "schaden wasser": {
    text: "**Wasserschaden - Schritt 2/4**\n\nFur die Bearbeitung Ihrer Meldung:\n\n1. Ursache des Lecks (Dach, Rohrleitung, Nachbar...)\n2. Betroffene Raume\n3. Schadensschatzung\n4. Gemeinsames Schadensprotokoll ausgefullt?\n\nVergessen Sie nicht, das **gemeinsame Schadensprotokoll** mit Ihrem Nachbarn auszufullen, falls zutreffend.\n\nIhr Hausratvertrag **HAU-7821** deckt Wasserschaden bis zu **estimation personnalisee**.",
    delay: 2000,
    quickReplies: [
      { label: "Foto senden", value: "foto schaden" },
      { label: "Mein Schutz", value: "deckungsumfang" },
      { label: "Selbstbeteiligung", value: "selbstbeteiligung" },
      { label: "Gutachter-Termin", value: "berater termin" },
    ],
  },
  "schaden feuer": {
    text: "**Feuer - Dringende Meldung**\n\nWenn das Feuer noch brennt, rufen Sie sofort **112** an.\n\nSobald Sie in Sicherheit sind:\n1. Beruhren Sie nichts vor dem Gutachterbesuch\n2. Bewahren Sie beschadigte Gegenstande auf\n3. Fotografieren Sie alle Schaden\n\nIhr Vertrag deckt Brandschaden bis zu **estimation personnalisee** (Neuwert).\n\nEin Gutachter wird innerhalb von **48 Stunden** entsandt.",
    delay: 2200,
    quickReplies: [
      { label: "Sofort-Assistance", value: "notfall" },
      { label: "Mein Schutz", value: "deckungsumfang" },
      { label: "Gutachter kontaktieren", value: "berater termin" },
    ],
  },
  "schaden diebstahl": {
    text: "**Diebstahl / Einbruch**\n\n**Pflichtschritte**:\n\n1. **Stattzeige erstatten** bei der Polizei innerhalb von 24h\n2. Gestohlene Gegenstande mit geschaftztem Wert auflisten\n3. Rechnungen und Fotos der Guter sammeln\n4. Einbruchspuren pruefen\n\nSchicken Sie mir den **Polizeibericht** und ich eroffne den Vorgang.\n\nMeldefrist: **2 Werktage** nach Feststellung des Diebstahls.",
    delay: 2000,
    quickReplies: [
      { label: "Erforderliche Dokumente", value: "dokumente" },
      { label: "Mein Diebstahlschutz", value: "deckungsumfang" },
      { label: "Selbstbeteiligung Diebstahl", value: "selbstbeteiligung" },
      { label: "Foto senden", value: "foto schaden" },
    ],
  },
  "foto schaden": {
    text: "**KI-Fotoanalyse**\n\nSchicken Sie mir ein Foto des Schadens und unsere KI analysiert:\n\n• **Schadensart** automatisch erkannt\n• **Schweregrad** geschatzt (leicht / mittel / schwer)\n• **Reparaturkosten** geschatzt\n• **Deckung** anwendbar auf Ihren Vertrag\n\n---\n*Simulation:* Analyse lauft...\n\n**Ergebnis**:\n• Art: Heckstossstange-Aufprall\n• Schweregrad: Mittel\n• Schatzung: **1.200 - estimation personnalisee**\n• Anwendbare Selbstbeteiligung: **estimation personnalisee**\n• Geschatzte Deckung: **900 - estimation personnalisee**\n\nMochten Sie diese Meldung bestatigen?",
    delay: 3000,
    quickReplies: [
      { label: "Meldung bestatigen", value: "schaden melden" },
      { label: "Vertragswerkstatt", value: "notfall" },
      { label: "Meine Selbstbeteiligung", value: "selbstbeteiligung" },
      { label: "Vorgang verfolgen", value: "vorgang verfolgen" },
    ],
  },
  "vorgang verfolgen": {
    text: "**Ihre laufenden Vorgange**\n\nHier der Status Ihrer laufenden Vorgange:\n\n**1. SCH-2026-03-6529** - Wasserschaden\n• Status: Gutachter entsandt\n• Gutachtertermin: 22.04.2026 um 10 Uhr\n• Schatzung: estimation personnalisee\n\n**2. SCH-2026-01-4102** - Glasbruch\n• Status: Abgeschlossen - Erstattet\n• Ausgezahlter Betrag: estimation personnalisee\n• Uberweisung: 18.02.2026\n\nFur einen bestimmten Vorgang senden Sie mir die **Referenznummer** (z.B.: SCH-2026-XXXX).",
    delay: 2500,
    quickReplies: [
      { label: "Details Vorgang 6529", value: "vorgang verfolgen" },
      { label: "Neuen Schaden melden", value: "schaden melden" },
      { label: "Fehlende Dokumente", value: "dokumente" },
      { label: "Sachbearbeiter kontaktieren", value: "berater termin" },
    ],
  },
  angebot: {
    text: "**Sofortangebot**\n\nFur welche Versicherungsart interessieren Sie sich?\n\nKFZ - Ab estimation personnalisee\nHausrat - Ab estimation personnalisee\nKranken / Zusatz - Ab estimation personnalisee\nBeruf / Haftpflicht - Ab estimation personnalisee\nReise - Ab estimation personnalisee\n\nIch berechne Ihren personlichen Tarif in 2 Minuten!",
    delay: 1800,
    quickReplies: [
      { label: "KFZ-Angebot", value: "angebot kfz" },
      { label: "Hausrat-Angebot", value: "angebot hausrat" },
      { label: "Kranken-Angebot", value: "angebot kranken" },
      { label: "Berufs-Angebot", value: "angebot beruf" },
    ],
  },
  "angebot kfz": {
    text: "**KFZ-Sofortangebot**\n\nFur die Berechnung Ihres Tarifs benotige ich:\n\n1. Marke und Modell des Fahrzeugs\n2. Erstzulassungsjahr\n3. Jahrliche Fahrleistung\n4. Fuherscheindatum\n5. Aktueller Schadenfreiheitsrabatt\n\n---\n*Simulation*:\n\n**Renault Clio V (2023)**\n• Teilkasko: **estimation personnalisee**\n• Vollkasko: **estimation personnalisee**\n• SF-Klasse 50% angewendet\n• Selbstbeteiligung: estimation personnalisee (TK) / estimation personnalisee (VK)\n\n*-15% bei Online-Abschluss!*",
    delay: 2500,
    quickReplies: [
      { label: "Online abschliessen", value: "vertrag" },
      { label: "Enthaltene Leistungen", value: "deckungsumfang" },
      { label: "Gruner Schein", value: "gruner schein" },
      { label: "Berater-Termin", value: "berater termin" },
    ],
  },
  "angebot hausrat": {
    text: "**Hausrat-Sofortangebot**\n\nEinige Angaben fur Ihren Tarif:\n\n1. Typ (Wohnung / Haus)\n2. Flache in m2\n3. Anzahl Zimmer\n4. Eigentumer oder Mieter\n5. Alarmanlage?\n\n---\n*Simulation*: 3-Zimmer-Wohnung, 65m2, Mieter\n\n**Basis-Tarif**: estimation personnalisee\n**Komfort-Tarif**: estimation personnalisee\n**Premium-Tarif**: estimation personnalisee\n\nEnthaltene Leistungen: Wasserschaden, Feuer, Diebstahl, Haftpflicht.",
    delay: 2500,
    quickReplies: [
      { label: "Tarife vergleichen", value: "deckungsumfang" },
      { label: "Abschliessen", value: "vertrag" },
      { label: "Selbstbeteiligung Hausrat", value: "selbstbeteiligung" },
      { label: "Wohnungsnachweis", value: "bescheinigung" },
    ],
  },
  "angebot kranken": {
    text: "**Kranken- / Zusatzversicherung**\n\nFur ein personliches Angebot:\n\n1. Anzahl der zu versichernden Personen\n2. Alter\n3. Berufsstatus (Angestellt, Selbstandig, Renter)\n4. Besondere Bedurfnisse (Zahn, Brille, Krankenhaus)\n\n---\n*Simulation*: 1 Erwachsener, 35 Jahre, Angestellt\n\n**Eco**: estimation personnalisee\n**Ausgewogen**: estimation personnalisee\n**Sorglos**: estimation personnalisee\n\nLeistungsbeginn innerhalb von 48h, keine Wartezeit.",
    delay: 2500,
    quickReplies: [
      { label: "Tarife vergleichen", value: "deckungsumfang" },
      { label: "Abschliessen", value: "vertrag" },
      { label: "Direktabrechnung", value: "zahlung" },
      { label: "Berater-Termin", value: "berater termin" },
    ],
  },
  "angebot beruf": {
    text: "**Gewerbe- / Haftpflicht-Angebot**\n\nIhre Tatigkeit benotigt einen angepassten Schutz:\n\n1. Tatigkeitsart (Beratung, Handwerk, Handel...)\n2. Jahresumsatz\n3. Anzahl Mitarbeiter\n4. Gewunschte Deckungen\n\n---\n*Simulation*: IT-Berater, Umsatz estimation personnalisee, 1 Person\n\n**Berufshaftpflicht**: estimation personnalisee\n**BH + Cyber**: estimation personnalisee\n**Komplett-Paket**: estimation personnalisee\n\nSchutzen Sie Ihre Tatigkeit ab heute.",
    delay: 2500,
    quickReplies: [
      { label: "BH-Leistungen", value: "deckungsumfang" },
      { label: "Abschliessen", value: "vertrag" },
      { label: "Berater-Termin", value: "berater termin" },
    ],
  },
  vertrag: {
    text: "**Ihre AssurPlus-Vertrage**\n\n**1. KFZ - Vollkasko** (Nr. AP-KFZ-782341)\n• Fahrzeug: Renault Clio V\n• Ablauf: 15.09.2026\n• Pramie: estimation personnalisee (estimation personnalisee)\n• SF-Klasse: 50%\n\n**2. Hausrat - Komfort** (Nr. AP-HAU-7821)\n• Adresse: Hauptstrasse 12, 10115 Berlin\n• Ablauf: 01.01.2027\n• Pramie: estimation personnalisee (estimation personnalisee)\n\nSie konnen Ihre Vertrage herunterladen oder online andern.",
    delay: 2200,
    quickReplies: [
      { label: "Vertrag herunterladen", value: "vertrag" },
      { label: "Vertrag andern", value: "vertrag andern" },
      { label: "Kundigen", value: "kundigung" },
      { label: "Bescheinigung", value: "bescheinigung" },
    ],
  },
  bescheinigung: {
    text: "**Versicherungsbescheinigung**\n\nWelche Art von Bescheinigung wunschen Sie?\n\n• KFZ - Fahrzeugbescheinigung\n• Hausrat - Wohnungsbescheinigung\n• Kranken - Zusatzbescheinigung\n• Beruf - Gewerbebescheinigung\n\n---\n*Automatische Erstellung*:\n\nIhre KFZ-Bescheinigung **AP-KFZ-782341** ist bereit!\nGultig vom 01.01.2026 bis 31.12.2026.\n\nPer E-Mail an Ihre registrierte Adresse gesendet.\nAuch in Ihrem Kundenbereich verfugbar.",
    delay: 2000,
    quickReplies: [
      { label: "Gruner Schein", value: "gruner schein" },
      { label: "Hausrat-Bescheinigung", value: "bescheinigung" },
      { label: "Mein Vertrag", value: "vertrag" },
      { label: "Adresse andern", value: "vertrag andern" },
    ],
  },
  "gruner schein": {
    text: "**Gruner Schein (Internationaler Versicherungsnachweis)**\n\nIhr gruner Schein ist ein Pflichtdokument fur den Strassenverkehr.\n\n**Aktiver Schein**:\n• Vertrag: AP-KFZ-782341\n• Fahrzeug: Renault Clio V\n• Kennzeichen: B-MC-1234\n• Gultigkeit: 01.01.2026 - 31.12.2026\n\nIch sende Ihnen den grunen Schein per E-Mail und SMS.\n\nSeit 2024 ist der gruner Schein in Papierform nicht mehr Pflicht. Die digitale Bescheinigung genugt.",
    delay: 2000,
    quickReplies: [
      { label: "Per E-Mail erhalten", value: "gruner schein" },
      { label: "KFZ-Bescheinigung", value: "bescheinigung" },
      { label: "Mein KFZ-Vertrag", value: "vertrag" },
      { label: "Fahrer hinzufugen", value: "vertrag andern" },
    ],
  },
  kundigung: {
    text: "**Vertragskundigung**\n\nSie mochten kundigen? Hier Ihre Optionen:\n\n**Ordentliche Kundigung** (nach 1 Jahr)\n• Jederzeit moglich\n• Wirkung nach 30 Tagen\n• Keine Kosten\n\n**Jahresablauf**\n• Kundigungsfrist 2 Monate vor Ablauf\n• Einschreiben (oder uber unser Formular)\n\n**Sonderkunde**\n• Umzug, Fahrzeugverkauf, Situationswechsel\n• Sofortige Wirkung\n\nBevor Sie kundigen, mochten Sie, dass ich Ihre Optionen mit unseren neuen Angeboten vergleiche? Sie konnten bis zu **25%** sparen.",
    delay: 2200,
    quickReplies: [
      { label: "Neue Angebote vergleichen", value: "angebot" },
      { label: "Kundigung bestatigen", value: "kundigung" },
      { label: "Mit Berater sprechen", value: "berater termin" },
      { label: "Meine Vertrage", value: "vertrag" },
    ],
  },
  "vertrag andern": {
    text: "**Vertragsanderung**\n\nWas mochten Sie andern?\n\n• Fahrer hinzufugen/entfernen\n• Adresse andern\n• Zahlungsmittel andern\n• Deckung erhohen/reduzieren\n• Fahrzeug wechseln\n• Kontaktdaten aktualisieren\n\nDie meisten Anderungen treten innerhalb von **24 Stunden** in Kraft und sind gebuhrenfrei.\n\nWas mochten Sie andern?",
    delay: 2000,
    quickReplies: [
      { label: "Fahrer hinzufugen", value: "vertrag andern" },
      { label: "Adresse andern", value: "vertrag andern" },
      { label: "Deckung erhohen", value: "deckungsumfang" },
      { label: "Berater-Termin", value: "berater termin" },
    ],
  },
  zahlung: {
    text: "**Zahlung & Falligkeiten**\n\n**Nachste Lastschrift**:\n• Datum: 01.05.2026\n• Betrag: **estimation personnalisee** (KFZ estimation personnalisee + Hausrat estimation personnalisee)\n• Zahlungsmittel: Karte endend auf ****4521\n\n**Letzte Buchungen**:\n• 01.04.2026: estimation personnalisee\n• 01.03.2026: estimation personnalisee\n• 01.02.2026: estimation personnalisee\n\n**Optionen**:\n• Monatlich / Vierteljahrlich / Jahrlich\n• Lastschrift oder Kreditkarte\n• Ratenzahlung bei Zahlungsschwierigkeiten moglich",
    delay: 2000,
    quickReplies: [
      { label: "Zahlungsmittel andern", value: "vertrag andern" },
      { label: "Ratenzahlung", value: "zahlung" },
      { label: "Rechnungen herunterladen", value: "vertrag" },
      { label: "Buchhaltung kontaktieren", value: "berater termin" },
    ],
  },
  notfall: {
    text: "**Assistance 24/7**\n\n**Notrufnummern**:\n• Polizei: **110**\n• Feuerwehr: **112**\n• Rettung/SAMU: **112**\n\n**AssurPlus Assistance**:\n**0800 123 456** (kostenlos, 24/7)\n\n• **Pannenhilfe/Abschleppen**: Einsatz in 30 Min.\n• **Hausrat-Notfall**: Schlosser, Klempner, Elektriker\n• **Medizinische Ruckreise**: 100% gedeckt\n• **Ersatzfahrzeug**: Innerhalb von 2h in der Stadt\n\nIhre Vertragsnummer: **AP-KFZ-782341**",
    delay: 1800,
    quickReplies: [
      { label: "Assistance anrufen", value: "notfall" },
      { label: "Pannenhilfe Auto", value: "notfall" },
      { label: "Schaden melden", value: "schaden melden" },
      { label: "Mein Vertrag", value: "vertrag" },
    ],
  },
  deckungsumfang: {
    text: "**Ihre Leistungen - Vollkasko-Vertrag**\n\n**Enthaltene Deckungen**:\n• Haftpflicht (unbegrenzt)\n• Kaskoschaden alle Unfalle\n• Diebstahl und Diebstahlversuch\n• Feuer und Explosion\n• Glasbruch\n• Naturkatastrophen\n• Rechtschutz (estimation personnalisee)\n• Assistance ab 0 km\n\n**Obergrenzen**:\n• Sachschaden: **estimation personnalisee**\n• Personenschaden: **Unbegrenzt**\n• Transportguter: **estimation personnalisee**",
    delay: 2200,
    quickReplies: [
      { label: "Meine Selbstbeteiligung", value: "selbstbeteiligung" },
      { label: "Deckung erhohen", value: "vertrag andern" },
      { label: "Kranken-Angebot", value: "angebot kranken" },
      { label: "Mein Vertrag", value: "vertrag" },
    ],
  },
  selbstbeteiligung: {
    text: "**Selbstbeteiligung - Erklarung**\n\nDie Selbstbeteiligung ist der Betrag, den Sie im Schadenfall selbst tragen.\n\n**Ihre aktuellen Selbstbehalte**:\n\n**KFZ (Vollkasko)**:\n• Kaskoschaden: **estimation personnalisee**\n• Diebstahl: **estimation personnalisee**\n• Glasbruch: **estimation personnalisee** (ohne Selbstbehalt)\n\n**Hausrat (Komfort)**:\n• Wasserschaden: **estimation personnalisee**\n• Diebstahl: **estimation personnalisee**\n• Naturkatastrophe: **estimation personnalisee** (gesetzlich festgelegt)\n\n**Tipp**: Eine Erhohung der Selbstbeteiligung um estimation personnalisee kann Ihre Pramie um **10-15%** senken.",
    delay: 2200,
    quickReplies: [
      { label: "Selbstbeteiligung andern", value: "vertrag andern" },
      { label: "Meine Leistungen", value: "deckungsumfang" },
      { label: "Neues Angebot", value: "angebot" },
      { label: "Schaden melden", value: "schaden melden" },
    ],
  },
  "berater termin": {
    text: "**Termin buchen**\n\nWahlen Sie die Kontaktart:\n\nTelefonanruf (15 Min.)\nVideokonferenz (30 Min.)\nIn der Agentur (45 Min.)\n\n**Verfugbare Termine diese Woche**:\n• Mi. 19.04 - 10:00 / 14:30\n• Do. 20.04 - 09:00 / 11:00 / 16:00\n• Fr. 21.04 - 10:30 / 15:00\n\nIhr zustandiger Berater: **Maria Schmitt**\nDirekt: 030 123 456 789",
    delay: 2000,
    quickReplies: [
      { label: "Telefonanruf 15 Min.", value: "berater termin" },
      { label: "Videokonferenz", value: "berater termin" },
      { label: "In der Agentur", value: "berater termin" },
      { label: "Zur Startseite", value: "hallo" },
    ],
  },
  dokumente: {
    text: "**Erforderliche Dokumente**\n\nJe nach Ihrer Situation:\n\n**Kfz-Schaden**:\n• Ausgefulltes gemeinsames Schadensprotokoll\n• Fotos der Schaden\n• Kopie des Fuherscheins\n• Polizeibericht (bei Diebstahl)\n\n**Hausrat-Schaden**:\n• Gemeinsames Wasserprotokoll\n• Vorher-/Nachher-Fotos\n• Rechnungen der beschadigten Guter\n• Reparaturangebote\n\n**Abschluss**:\n• Personalausweis / Reisepass\n• IBAN\n• Wohnsitznachweis\n• Schadenverlaufsbescheinigung (KFZ)\n\nSie konnen Ihre Dokumente direkt hier senden!",
    delay: 2200,
    quickReplies: [
      { label: "Dokument senden", value: "foto schaden" },
      { label: "Schaden melden", value: "schaden melden" },
      { label: "Vorgang verfolgen", value: "vorgang verfolgen" },
      { label: "Mein Vertrag", value: "vertrag" },
    ],
  },
};

const ASSURANCE_KEYWORDS_DE: Record<string, string[]> = {
  hallo: ["hallo", "hi", "guten tag", "guten abend", "hey", "servus", "moin"],
  "schaden melden": [
    "schaden", "unfall", "meldung", "melden", "crash", "zusammenstoss", "kollision",
  ],
  "foto schaden": [
    "foto", "bild", "schaden", "beschadigung", "foto senden", "analysieren",
  ],
  "vorgang verfolgen": [
    "vorgang", "akte", "status", "verlauf", "referenz", "nummer", "sch-",
  ],
  angebot: ["angebot", "beitrag", "offerte"],
  "angebot kfz": ["angebot kfz", "kfz versicherung", "auto", "fahrzeug"],
  "angebot hausrat": [
    "angebot hausrat", "angebot haus", "angebot wohnung", "wohngebaudeschutz",
  ],
  "angebot kranken": [
    "angebot kranken", "krankenversicherung", "zusatzversicherung",
    "gesundheit", "medizinisch",
  ],
  vertrag: [
    "vertrag", "police", "bedingungen", "herunterladen", "vertragsdokument",
  ],
  bescheinigung: ["bescheinigung", "nachweis", "bestatigung", "zertifikat"],
  "gruner schein": ["gruner schein", "internationaler schein", "kfz schein"],
  kundigung: [
    "kundigen", "kundigung", "stornieren", "aufheben", "verlassen",
  ],
  "vertrag andern": [
    "andern", "anderung", "wechseln", "fahrer hinzufugen", "aktualisieren",
  ],
  zahlung: [
    "zahlung", "bezahlen", "lastschrift", "rechnung", "falligkeit", "rate",
  ],
  notfall: [
    "notfall", "assistance", "pannenhilfe", "abschleppen", "panne",
    "sos", "hilfe", "notruf", "24/7",
  ],
  deckungsumfang: [
    "deckung", "schutz", "gedeckt", "geschutzt", "enthalten", "ausschluss",
  ],
  selbstbeteiligung: ["selbstbeteiligung", "eigenanteil", "selbstbehalt"],
  "berater termin": [
    "berater", "agentur", "kontakt", "mensch",
  ],
  dokumente: [
    "dokument", "papier", "unterlage", "einreichen",
  ],
  "schaden auto": ["autounfall", "fahrzeugunfall", "aufprall"],
  "schaden wasser": [
    "wasserschaden", "rohrbruch", "uberschwemmung", "wasser", "rohr",
  ],
  "schaden feuer": ["feuer", "brand", "flamme", "verbrannt"],
  "schaden diebstahl": ["diebstahl", "einbruch", "gestohlen", "aufbruch"],
};

const merged = mergeWithVocalisDE(ASSURANCE_INTENTS_DE, ASSURANCE_KEYWORDS_DE);

export const assuranceConfigDE: SimulatorConfig = {
  botName: "AssurPlus",
  botAvatar: "A+",
  welcomeMessage:
    "Hallo! Ich bin der KI-Assistent von **AssurPlus**\n\nIch kann Ihnen helfen bei:\n• Schadensmeldungen\n• Vorgangsverfolgung\n• Angeboten\n• Bescheinigungen\n• Assistance 24/7\n\nWie kann ich Ihnen helfen?",
  initialQuickReplies: [
    { label: "Schaden melden", value: "schaden melden" },
    { label: "Vorgang verfolgen", value: "vorgang verfolgen" },
    { label: "Angebot", value: "angebot" },
    { label: "Bescheinigung", value: "bescheinigung" },
    { label: "Gruner Schein", value: "gruner schein" },
    { label: "Notfall", value: "notfall" },
  ],
  intents: merged.intents,
  keywords: merged.keywords,
  fallback: createFallbackDE([
    { label: "Schaden melden", value: "schaden melden" },
    { label: "Angebot", value: "angebot" },
    { label: "Vorgang verfolgen", value: "vorgang verfolgen" },
    { label: "Assistance 24/7", value: "notfall" },
    { label: "Berater-Termin", value: "berater termin" },
  ]),
};

export default assuranceConfigDE;
