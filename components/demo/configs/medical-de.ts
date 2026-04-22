import type { SimulatorConfig, BotResponse } from "../WhatsAppSimulator";
import { mergeWithVocalisDE, createFallbackDE } from "./vocalis-features-de";

const MEDICAL_INTENTS_DE: Record<string, BotResponse> = {
  hallo: {
    text: "Guten Tag! Willkommen in der Arztpraxis **MediAssist**.\n\nIch bin Ihr KI-Assistent, 24/7 verfugbar fur:\n• Terminvereinbarung\n• Rezeptverlangerung\n• Einsicht in Ihre Befunde\n• Organisation einer Videosprechstunde\n\nWie kann ich Ihnen helfen?",
    delay: 1200,
    quickReplies: [
      { label: "Termin buchen", value: "termin buchen" },
      { label: "Videosprechstunde", value: "videosprechstunde" },
      { label: "Rezept", value: "rezept" },
      { label: "Labor-Befunde", value: "befunde" },
    ],
  },
  "termin buchen": {
    text: "**Terminvereinbarung**\n\nWahlen Sie die Art der Konsultation:\n\nAllgemeinmedizin — Dr. Martin\n• Nachste Termine: Mo. 21.04 9:00, 11:00, 14:30\n\nDermatologie — Dr. Leroy\n• Nachste Termine: Di. 22.04 10:00, 15:00\n\nKinderheilkunde — Dr. Faure\n• Nachste Termine: Mi. 23.04 9:00, 11:30\n\nOrthopadie — Dr. Roux\n• Nachste Termine: Do. 24.04 8:30, 14:00\n\nKardiologie — Dr. Bernard\n• Nachste Termine: Fr. 25.04 10:00\n\nWelchen Arzt und welchen Termin wunschen Sie?",
    delay: 2200,
    quickReplies: [
      { label: "Dr. Martin Mo. 9 Uhr", value: "termin bestatigen med" },
      { label: "Dr. Leroy Di. 10 Uhr", value: "termin bestatigen med" },
      { label: "Notfall", value: "notfall" },
      { label: "Videosprechstunde", value: "videosprechstunde" },
    ],
  },
  "termin bestatigen med": {
    text: "**Termin bestatigt!**\n\n**Arzt:** Dr. Martin — Allgemeinmedizin\n**Datum:** Montag, 21. April 2026\n**Uhrzeit:** 09:00 Uhr\n**Ort:** Praxis MediAssist, Pasteurstrasse 15, 10115 Berlin\n\n**Automatische Erinnerungen:**\n• SMS D-2\n• WhatsApp D-1 um 18 Uhr\n• WhatsApp H-1\n\n**Mitzubringende Dokumente:**\n• Versichertenkarte (eGK)\n• Zusatzversicherungskarte\n• Aktuelle Rezepte\n\nBis bald!",
    delay: 2000,
    quickReplies: [
      { label: "Dokumente Erstbesuch", value: "dokumente" },
      { label: "Termin andern", value: "termin absagen" },
      { label: "Wegbeschreibung", value: "offnungszeiten" },
    ],
  },
  "termin erinnerung": {
    text: "**Automatische Erinnerungen aktiv**\n\nIhre nachsten Termine:\n\n**1. Dr. Martin** — Mo. 21.04 um 09:00\n• WhatsApp-Erinnerung D-1 gesendet\n• Bestatigung erhalten\n\n**2. Dr. Leroy (Dermatologie)** — Di. 29.04 um 15:00\n• Erinnerung programmiert D-2\n• Ausstehende Bestatigung\n\n**Erinnerungssystem:**\n• D-2: SMS-Erinnerung\n• D-1: WhatsApp mit Bestatigen/Verschieben-Button\n• H-1: Letzte Erinnerung\n\n**No-Show-Rate durch KI-Erinnerungen um 68% gesunken.**",
    delay: 2000,
    quickReplies: [
      { label: "Termin bestatigen", value: "termin bestatigen med" },
      { label: "Termin verschieben", value: "termin absagen" },
      { label: "Meine Termine", value: "termin buchen" },
    ],
  },
  rezept: {
    text: "**Rezeptverlangerung**\n\nIch kann Ihre Anfrage an den Arzt weiterleiten.\n\n**Ihre laufenden Behandlungen:**\n• Levothyrox 75 µg — 1 Tbl./Tag (Dr. Martin)\n• Metformin 500 mg — 2 Tbl./Tag (Dr. Martin)\n• Vitamin D 100.000 IE — 1/Quartal\n\n**Verlangerungsverfahren:**\n1. Behandlung(en) auswahlen\n2. Arzt bestatigt innerhalb von 24-48h\n3. Rezept im Patientenbereich + Apotheke gesendet\n\n**Letzte Konsultation:** 15.01.2026\nEine Verlangerung, die eine Untersuchung erfordert, kann an einen Termin geknupft sein.",
    delay: 2400,
    quickReplies: [
      { label: "Alles verlangern", value: "rezept" },
      { label: "Kontroll-Termin buchen", value: "termin buchen" },
      { label: "An Apotheke senden", value: "rezept" },
      { label: "Behandlungsverfolg.", value: "behandlung verfolgen" },
    ],
  },
  befunde: {
    text: "**Analysebefunde**\n\nIhre letzten Befunde sind verfugbar:\n\n**Blutbild vom 10.04.2026** (Labor BioGesund)\n• Status: Befunde verfugbar\n• Nuchternblutzucker: 0,95 g/L (N: 0,70-1,10)\n• HbA1c: 6,2% (N: <7%)\n• TSH: 2,1 mIU/L (N: 0,4-4,0)\n• Gesamtcholesterin: 2,10 g/L (N: <2,40)\n\n**Alle Werte im Normalbereich.**\n\nDr. Martin hat notiert: *\"Ergebnisse zufriedenstellend. Aktuelle Behandlung fortsetzen.\"*\n\n**Diese Befunde ersetzen keine arztliche Konsultation.**",
    delay: 2500,
    quickReplies: [
      { label: "Kontroll-Termin", value: "termin buchen" },
      { label: "Rezept", value: "rezept" },
      { label: "Befund-Archiv", value: "befunde" },
      { label: "Videosprechstunde", value: "videosprechstunde" },
    ],
  },
  videosprechstunde: {
    text: "**Video-Sprechstunde**\n\nKonsultieren Sie einen Arzt von zu Hause aus:\n\n**Verfugbare Videosprechstunden:**\n• Dr. Martin — Heute 17 Uhr, Morgen 9 Uhr\n• Dr. Faure — Morgen 14 Uhr, 16:30 Uhr\n\n**Ablauf:**\n1. Termin reservieren\n2. Video-Link per WhatsApp 10 Min. vorher gesendet\n3. Gesicherte Konsultation (15-20 Min.)\n4. Rezept + Bericht danach gesendet\n\n**Tarif:** 25 EUR (Kassenpatienten) — Direktabrechnung moglich\n**Erstattung:** 70% GKV + Zusatz-Krankenversicherung\n\nWelcher Termin passt Ihnen?",
    delay: 2200,
    quickReplies: [
      { label: "Dr. Martin 17 Uhr", value: "termin bestatigen med" },
      { label: "Morgen 9 Uhr", value: "termin bestatigen med" },
      { label: "Versichertenkarte?", value: "versichertenkarte" },
      { label: "Termin in der Praxis", value: "termin buchen" },
    ],
  },
  notfall: {
    text: "**Medizinischer Notfall**\n\n**Bei lebensbedrohlichem Notfall sofort anrufen:**\n• **Notruf: 112**\n• Feuerwehr: **112**\n• Polizei: **110**\n\n**Lebensbedrohliche Zeichen:**\n• Brustschmerzen / Atemnot\n• Bewusstlosigkeit\n• Starke Blutung\n• Schlaganfall (Gesicht, Arme, Sprache)\n\n**Nicht lebensbedrohliche Notfalle:**\n• Arztlicher Bereitschaftsdienst: **116 117**\n• Giftnotruf: **030 19240**\n• Notfallpraxis\n\n**Dieses Chatbot ersetzt KEINE arztliche Meinung im Notfall.**",
    delay: 1800,
    quickReplies: [
      { label: "Schnelle Videosprechst.", value: "videosprechstunde" },
      { label: "Bereitschaftsdienst", value: "offnungszeiten" },
      { label: "Symptomfoto senden", value: "symptomfoto" },
    ],
  },
  offnungszeiten: {
    text: "**Offnungszeiten der Praxis MediAssist**\n\n**Sprechstunden:**\n• Montag - Freitag: 8:30 - 19:00 Uhr\n• Samstag: 9:00 - 13:00 Uhr\n• Sonntag: Geschlossen (Videosprechstunde moglich)\n\n**Bereitschaftsdienst:**\n• Nachts 19-8 Uhr: Dr. auf Bereitschaft **030 456 789**\n• Wochenende/Feiertage: 116 117\n\n**Adresse:**\nPasteurstrasse 15, 10115 Berlin\nU-Bahn: Stadtmitte (U2/U6)\nParkplatz: 50m entfernt\n\n**Videosprechstunde:** Verfugbar 7 Tage/Woche, 8-22 Uhr",
    delay: 1800,
    quickReplies: [
      { label: "Termin buchen", value: "termin buchen" },
      { label: "Videosprechstunde", value: "videosprechstunde" },
      { label: "Notfall", value: "notfall" },
      { label: "Google Maps Route", value: "offnungszeiten" },
    ],
  },
  dokumente: {
    text: "**Dokumente fur Ihren Besuch**\n\n**Erstbesuch:**\n• Versichertenkarte (eGK)\n• Zusatzversicherungskarte\n• Aktuelle Rezepte\n• Letzte Laborbefunde\n• Impfausweis\n• Facharztbriefe\n\n**Folgebesuche:**\n• Versichertenkarte\n• Befunde verschriebener Untersuchungen\n\n**Videosprechstunde:**\n• Stabile Internetverbindung\n• Kamera + Mikrofon aktiv\n• Ruhiger, beleuchteter Raum\n\nSie konnen mir Ihre Dokumente vorab hier einsenden!",
    delay: 2000,
    quickReplies: [
      { label: "Termin buchen", value: "termin buchen" },
      { label: "Versichertenkarte", value: "versichertenkarte" },
      { label: "Impfungen", value: "impfung" },
      { label: "Videosprechstunde", value: "videosprechstunde" },
    ],
  },
  versichertenkarte: {
    text: "**Versichertenkarte & Krankenversicherung**\n\n**Ihre Versichertenkarte:**\n• Versicherten-Nr.: 1234567890\n• Status: Aktiv\n• Aktualisiert: 12/2025\n\n**Erstattungen:**\n• Hausarzt-Konsultation: 100% (GKV-Anteil)\n• Facharzt mit Uberweisung: 100%\n• Videosprechstunde: 100%\n• Laboranalysen: 100%\n\n**Direktabrechnung:**\n• Fur Ihren Akt aktiv\n• Keine Vorauszahlung GKV\n• Zusatz-Krankenversicherung je nach Vertrag\n\nBitte aktualisieren Sie Ihre Karte jahrlich in der Praxis.",
    delay: 2000,
    quickReplies: [
      { label: "Termin buchen", value: "termin buchen" },
      { label: "Meine Befunde", value: "befunde" },
      { label: "Rezept", value: "rezept" },
    ],
  },
  impfung: {
    text: "**Impfungen**\n\n**Ihr Impfausweis:**\n• TDAP (Auffrischung): Erledigt 03/2024 — Nachste: 03/2034\n• Grippe (saisonal): Noch nicht (Kampagne Okt-Nov)\n• COVID-19: Aktuell\n• Hepatitis B: Vollstandig\n\n**Verfugbare Impftermine:**\n• Grippe: Taglich ohne Termin (Okt-Jan)\n• Auffrischungen: Per Termin mit Dr. Martin\n• Reisen: Spezielle Konsultation (Gelbfieber, Hep A...)\n\n**Kinder-Impfungen:**\n• Dr. Faure (Kinderheilkunde) — Digitaler Impfausweis\n• Automatische Erinnerungen gemas Impfplan\n\nMochten Sie einen Impftermin buchen?",
    delay: 2200,
    quickReplies: [
      { label: "Impftermin buchen", value: "termin buchen" },
      { label: "Reise-Impfungen", value: "impfung" },
      { label: "Kinder-Ausweis", value: "impfung" },
      { label: "Dokumente", value: "dokumente" },
    ],
  },
  attest: {
    text: "**Attest / Bescheinigung**\n\nWelche Art von Attest wunschen Sie?\n\n• Sport-Attest — Sportfahigkeit\n• Arbeitsunfahigkeitsbescheinigung — Verlangerung oder neu\n• Reisebescheinigung — Flugtauglichkeit, Impfungen\n• Fuhrerschein-Attest — Arztliche Untersuchung\n• Schul-Attest — Ruckkehr nach Krankheit\n\n**Verfahren:**\n1. Termin beim Arzt (Praxis oder Videosprechstunde)\n2. Untersuchung / Beurteilung\n3. Attest per E-Mail + im Patientenbereich gesendet\n\nManche Atteste erfordern eine obligatorische Konsultation.",
    delay: 2000,
    quickReplies: [
      { label: "Attest-Termin", value: "termin buchen" },
      { label: "Sport-Attest", value: "attest" },
      { label: "AU-Bescheinigung", value: "attest" },
      { label: "Videosprechstunde", value: "videosprechstunde" },
    ],
  },
  "behandlung verfolgen": {
    text: "**Behandlungsverfolgung**\n\n**Ihre aktiven Behandlungen:**\n\n**1. Levothyrox 75 µg**\n• Dosierung: 1 Tbl. morgens nuchtern\n• Erinnerung: Taglich um 7:30 Uhr\n• Nachste TSH-Kontrolle: 15.05.2026\n\n**2. Metformin 500 mg**\n• Dosierung: 1 Tbl. morgens + 1 Tbl. abends\n• Erinnerung: 8:00 + 20:00 Uhr\n• Nachste HbA1c-Kontrolle: 10.07.2026\n\n**3. Vitamin D 100.000 IE**\n• Dosierung: 1 Ampulle/Quartal\n• Nachste Einnahme: 01.07.2026\n\n**Erinnerungen:** per WhatsApp aktiv\n**Einnahmetreue:** 94% diesen Monat",
    delay: 2400,
    quickReplies: [
      { label: "Rezept verlangern", value: "rezept" },
      { label: "Erinnerungen andern", value: "behandlung verfolgen" },
      { label: "Nebenwirkungen", value: "symptomfoto" },
      { label: "Kontroll-Termin", value: "termin buchen" },
    ],
  },
  symptomfoto: {
    text: "**Symptom-Foto senden**\n\nSie konnen mir ein Foto zur KI-Voranalyse senden:\n\n• Hautlasion / Ausschlag\n• Verletzung / Schwellung\n• Sichtbare allergische Reaktion\n• Postoperative Entwicklung\n\n---\n*Simulation:* Analyse lauft...\n\n**KI-Voranalyse:**\n• Bereich: Rechter Unterarm\n• Beobachtung: Lokalisierte Rotung, 3 cm, scharfe Rander\n• Hinweis: Vereinbar mit Kontaktdermatitis\n• Empfehlung: Dermatologie-Konsultation innerhalb von 7 Tagen\n\n**WICHTIG: Dies ist KEINE medizinische Diagnose.**\nNur ein Arzt kann nach klinischer Untersuchung eine Diagnose stellen.\n\nMochten Sie einen Termin beim Dermatologen buchen?",
    delay: 3000,
    quickReplies: [
      { label: "Dermato-Termin", value: "termin buchen" },
      { label: "Videosprechstunde", value: "videosprechstunde" },
      { label: "Notfall", value: "notfall" },
      { label: "Behandlungsverfolg.", value: "behandlung verfolgen" },
    ],
  },
  "termin absagen": {
    text: "**Termin absagen / verschieben**\n\nIhre nachsten Termine:\n\n**1. Dr. Martin** — Mo. 21.04 um 09:00 Uhr\n**2. Dr. Leroy** — Di. 29.04 um 15:00 Uhr\n\n**Optionen:**\n• Absagen — Der Termin wird fur andere Patienten freigegeben\n• Verschieben — Neuen Termin wahlen\n\nBitte sagen Sie **mindestens 24 Stunden vorher** ab.\nBei mehr als 3 unentschuldigten Abwesenheiten kann eine Gebuhr von 20 EUR erhoben werden.\n\nWelchen Termin mochten Sie andern?",
    delay: 2000,
    quickReplies: [
      { label: "Dr. Martin absagen", value: "termin absagen" },
      { label: "Dr. Leroy verschieben", value: "termin buchen" },
      { label: "Neuen Termin buchen", value: "termin buchen" },
      { label: "Zur Startseite", value: "hallo" },
    ],
  },
};

const MEDICAL_KEYWORDS_DE: Record<string, string[]> = {
  hallo: ["hallo", "hi", "guten tag", "guten abend", "servus", "hey", "moin"],
  "termin buchen": ["termin", "arzttermin", "reservieren", "konsultation", "termin buchen", "zeitfenster", "verfugbarkeit"],
  "termin erinnerung": ["erinnerung", "reminder", "benachrichtigung", "termin bestatigen", "no-show"],
  rezept: ["rezept", "verschreibung", "medikament", "verlangerung", "behandlung", "tablette"],
  befunde: ["befund", "analyse", "labor", "blutbild", "biologie", "blutabnahme"],
  videosprechstunde: ["videosprechstunde", "video", "online", "zuhause", "digital", "fern"],
  notfall: ["notfall", "dringend", "samu", "112", "notarzt", "schwer", "schmerz", "atemnot"],
  offnungszeiten: ["offnungszeit", "uhrzeit", "offnung", "schliessen", "wann", "adresse", "anfahrt", "parkplatz", "u-bahn"],
  dokumente: ["dokument", "papier", "mitbringen", "erstbesuch", "akte", "unterlage"],
  versichertenkarte: ["versichertenkarte", "egk", "krankenversicherung", "erstattung", "direktabrechnung", "zusatzversicherung"],
  impfung: ["impfung", "impfen", "auffrischung", "grippe", "covid", "impfausweis", "injektion"],
  attest: ["attest", "bescheinigung", "arbeitsunfahigkeit", "sport", "fahrtauglichkeit", "medizinisch"],
  "behandlung verfolgen": ["verfolgen", "behandlung", "einnahmetreue", "erinnerung medikament", "dosierung", "nebenwirkung"],
  symptomfoto: ["foto", "bild", "symptom", "pickel", "rotung", "ausschlag", "foto senden", "haut"],
  "termin absagen": ["absagen", "verschieben", "verschieben", "termin andern", "termin wechseln"],
};

const { intents, keywords } = mergeWithVocalisDE(MEDICAL_INTENTS_DE, MEDICAL_KEYWORDS_DE);

export const medicalConfigDE: SimulatorConfig = {
  botName: "MediAssist IA",
  botAvatar: "M+",
  welcomeMessage:
    "Guten Tag! Ich bin der KI-Assistent der Praxis **MediAssist**\n\nIch kann Ihnen helfen bei:\n• Terminvereinbarung\n• Rezeptverlangerung\n• Einsicht in Befunde\n• Video-Sprechstunde\n• Behandlungsverfolgung\n\nWie kann ich Ihnen helfen?",
  initialQuickReplies: [
    { label: "Termin buchen", value: "termin buchen" },
    { label: "Videosprechstunde", value: "videosprechstunde" },
    { label: "Rezept", value: "rezept" },
    { label: "Befunde", value: "befunde" },
    { label: "Impfungen", value: "impfung" },
    { label: "Notfall", value: "notfall" },
  ],
  intents,
  keywords,
  fallback: createFallbackDE([
    { label: "Termin buchen", value: "termin buchen" },
    { label: "Videosprechstunde", value: "videosprechstunde" },
    { label: "Rezept", value: "rezept" },
    { label: "Notfall", value: "notfall" },
    { label: "Vocalis Preise", value: "preis" },
  ]),
};

export default medicalConfigDE;
