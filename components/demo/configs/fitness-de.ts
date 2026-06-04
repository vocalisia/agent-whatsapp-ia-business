import type { SimulatorConfig, BotResponse } from "../WhatsAppSimulator";
import { mergeWithVocalisDE, createFallbackDE } from "./vocalis-features-de";

const sectorIntents: Record<string, BotResponse> = {
  hallo: {
    text: "Willkommen bei **FitClub** ! Ich bin Ihr KI-Assistent.\n\nIch kann Ihnen helfen bei :\n- Mitgliedschaftspaketen und Kursen\n- Kostenlosem Probetag\n- Personal Coaching\n- Fortschrittsverfolgung\n\nWas kann ich fur Sie tun ?",
    delay: 1000,
    quickReplies: [
      { label: "Mitgliedschaft", value: "mitgliedschaft" },
      { label: "Kursplan", value: "kurs" },
      { label: "Kostenloser Probetag", value: "kostenloser probetag" },
      { label: "Personal Coach", value: "coach" },
    ],
  },

  mitgliedschaft: {
    text: "Unsere **FitClub-Pakete** :\n\n**Access** — estimation personnalisee\n- Zugang Kraftraum + Cardio\n- Offnungszeiten : 6 - 22 Uhr\n- Umkleide + Duschen\n\n**Premium** — estimation personnalisee\n- Unbegrenzter Zugang 24/7\n- Alle Gruppenkurse inklusive\n- Sauna + Dampfbad\n- 1 Korpermessung/Quartal\n\n**Elite** — estimation personnalisee\n- Alles aus Premium\n- 4 Personal-Training-Einheiten/Monat\n- Personalisierter Ernahrungsplan\n- KI-Fortschrittsverfolgung\n\nOhne Bindung. Welches Paket interessiert Sie ?",
    delay: 2000,
    quickReplies: [
      { label: "Kostenloser Probetag", value: "kostenloser probetag" },
      { label: "Anmelden", value: "anmeldung" },
      { label: "Pakete vergleichen", value: "mitgliedschaft" },
      { label: "Offnungszeiten", value: "offnungszeiten" },
    ],
  },

  kurs: {
    text: "**FitClub-Kursplan** diese Woche :\n\n**Montag**\n- 7:00 — HIIT (45 Min) — Coach Julian\n- 12:15 — Yoga Flow (60 Min) — Coach Sarah\n- 18:30 — CrossFit (50 Min) — Coach Max\n\n**Dienstag**\n- 7:30 — Pilates (45 Min) — Coach Sarah\n- 12:00 — Boxfit (45 Min) — Coach Karim\n- 19:00 — Body Pump (50 Min) — Coach Julian\n\n**Mittwoch**\n- 8:00 — Stretching (30 Min) — Coach Sarah\n- 17:30 — Spinning (45 Min) — Coach Max\n- 19:30 — Zumba (50 Min) — Coach Lisa\n\nMaximal **20 Personen** pro Kurs.\nMochten Sie reservieren ?",
    delay: 2200,
    quickReplies: [
      { label: "Kurs buchen", value: "kurs" },
      { label: "Wochendkurse", value: "kurs" },
      { label: "Kurs absagen", value: "kurs absagen" },
      { label: "Personal Coach", value: "coach" },
    ],
  },

  "kostenloser probetag": {
    text: "Tolle Wahl ! Ihr **kostenloser FitClub-Probetag** beinhaltet :\n\n- **1 ganzer Tag** unbegrenzter Zugang\n- 1 Gruppenkurs nach Wahl\n- 1 Korpermessung mit Coach\n- Zugang Umkleide + Sauna\n\n**Nachste verfugbare Termine :**\n- Montag, 21. April — 10 Uhr oder 17 Uhr\n- Dienstag, 22. April — 9 Uhr oder 18 Uhr\n- Mittwoch, 23. April — 14 Uhr\n\nKeine Bindung, keine Zahlung. Welcher Termin passt Ihnen ?",
    delay: 1800,
    quickReplies: [
      { label: "Montag 10 Uhr", value: "probetag bestatigen" },
      { label: "Dienstag 18 Uhr", value: "probetag bestatigen" },
      { label: "Anderer Termin", value: "kostenloser probetag" },
      { label: "Fragen", value: "hallo" },
    ],
  },

  "probetag bestatigen": {
    text: "Probetag bestatigt !\n\n**Datum :** Montag, 21. April 2026\n**Uhrzeit :** 10:00 Uhr\n**Dauer :** Ganzer Tag\n**Adresse :** FitClub — Sportstrasse 45\n\n**Bitte mitbringen :**\n- Sportkleidung\n- Handtuch\n- Trinkflasche\n- Personalausweis\n\nSie erhalten :\n- Bestatigung per WhatsApp\n- Erinnerung am Vorabend\n- Anfahrtsbeschreibung\n\nBis bald !",
    delay: 2000,
    quickReplies: [
      { label: "Danke !", value: "danke" },
      { label: "Offnungszeiten", value: "offnungszeiten" },
    ],
  },

  offnungszeiten: {
    text: "**FitClub-Offnungszeiten :**\n\n**Access-Paket :**\n- Mo-Fr : 6 - 22 Uhr\n- Sa : 8 - 20 Uhr\n- So : 9 - 18 Uhr\n\n**Premium & Elite :**\n- Zugang **24/7** mit Chip-Karte\n\n**Empfang & Coaches :**\n- Mo-Fr : 8 - 21 Uhr\n- Sa : 9 - 18 Uhr\n- So : 10 - 16 Uhr\n\n**Feiertage :** Verkurzte Zeiten (10 - 18 Uhr)",
    delay: 1400,
    quickReplies: [
      { label: "Mitgliedschaft", value: "mitgliedschaft" },
      { label: "Kursplan", value: "kurs" },
      { label: "Anfahrt", value: "offnungszeiten" },
      { label: "Kostenloser Probetag", value: "kostenloser probetag" },
    ],
  },

  coach: {
    text: "Unsere **zertifizierten FitClub-Coaches** :\n\n**Julian D.** — Krafttraining & HIIT\n- 8 Jahre Erfahrung, NSCA-zertifiziert\n- Spezialgebiet : Muskelaufbau, Definition\n- Bewertung : 4,9/5 (312 Bewertungen)\n\n**Sarah L.** — Yoga & Pilates\n- Internationale Ausbilderin, 10 Jahre\n- Spezialgebiet : Beweglichkeit, Haltung, Wohlbefinden\n- Bewertung : 4,8/5 (287 Bewertungen)\n\n**Max R.** — CrossFit & Functional\n- Ex-Wettkampfathlet, Level-3-zertifiziert\n- Spezialgebiet : Performance, Ausdauer\n- Bewertung : 4,9/5 (198 Bewertungen)\n\n**Nachste Verfugbarkeit :** Morgen 10 Uhr mit Julian\n\nMochten Sie eine Einheit buchen ?",
    delay: 2200,
    quickReplies: [
      { label: "Julian buchen", value: "coach bestatigen" },
      { label: "Sarah buchen", value: "coach bestatigen" },
      { label: "Coaching-Preise", value: "mitgliedschaft" },
      { label: "Kostenloser Probetag", value: "kostenloser probetag" },
    ],
  },

  "coach bestatigen": {
    text: "Coach-Einheit gebucht !\n\n**Coach :** Julian D.\n**Datum :** Dienstag, 22. April 2026\n**Uhrzeit :** 10:00 Uhr (60 Min)\n**Ort :** Privater Coaching-Raum — FitClub\n\n**Geplantes Programm :**\n- Vollstandige Korperanalyse\n- Kraft- und Beweglichkeitstest\n- Zielsetzung\n- Personalisierter Trainingsplan\n\nWhatsApp-Erinnerung wird am Vorabend gesendet.",
    delay: 1800,
    quickReplies: [
      { label: "Danke !", value: "danke" },
      { label: "Absagen", value: "kurs absagen" },
    ],
  },

  ernahrung: {
    text: "**KI-Ernahrungsplan FitClub** :\n\nUnsere KI analysiert Ihr Profil und erstellt einen personalisierten Plan :\n\n**Beispiel — Ziel : Muskelaufbau**\n\n**Fruhstuck :** Ruhrerei + Haferflocken + Banane (520 kcal)\n**Snack :** Quark + Mandeln (280 kcal)\n**Mittagessen :** Gegrilltes Hahnchen + Vollkornreis + Gemuse (650 kcal)\n**Nachmittagssnack :** Proteinshake + Beeren (320 kcal)\n**Abendessen :** Lachs + Sußkartoffel + Brokkoli (580 kcal)\n\n**Gesamt :** 2 350 kcal | 180 g Protein\n\nIm **Elite**-Paket inklusive oder als Option fur **estimation personnalisee**.\n\nMochten Sie Ihren personalisierten Plan ?",
    delay: 2400,
    quickReplies: [
      { label: "Mein personl. Plan", value: "ernahrung" },
      { label: "Ziel : Abnehmen", value: "ernahrung" },
      { label: "Elite-Paket", value: "mitgliedschaft" },
      { label: "Ernahrungscoach", value: "coach" },
    ],
  },

  fortschrittsfotos: {
    text: "Danke fur Ihr Foto ! **KI-Analyse lauft**...\n\n**Ergebnis der Korperanalyse :**\n\n- **Geschatzter Korperfettanteil :** 18,5 % (-2,3 % vs. letzten Monat)\n- **Muskelmasse :** Sichtbarer Fortschritt an Schultern und Armen\n- **Haltung :** Verbesserung der Ruckenausrichtung\n- **Fortschrittspunktzahl :** 78/100 (+12 Pkt)\n\n**KI-Empfehlung :**\n- Beinvolumen erhohen\n- Aktuelles Cardio beibehalten\n- Core-Ubungen hinzufugen\n\nNachste Fotoanalyse empfohlen in **4 Wochen**.\nWeiter so !",
    delay: 2800,
    quickReplies: [
      { label: "Fotoverlauf", value: "fortschrittsfotos" },
      { label: "Programm anpassen", value: "coach" },
      { label: "Ernahrungsplan", value: "ernahrung" },
      { label: "Zuruck zur Ubersicht", value: "hallo" },
    ],
  },

  "kurs absagen": {
    text: "Kurs absagen :\n\n**Ihre aktiven Buchungen :**\n1. HIIT — Montag, 21. April, 7:00 Uhr (Coach Julian)\n2. Yoga Flow — Mittwoch, 23. April, 12:15 Uhr (Coach Sarah)\n\n**Stornierungsrichtlinie :**\n- Kostenlos bis **2 Stunden vor** Kursbeginn\n- Danach : 1 Guthaben wird abgezogen\n- 3 No-Shows = 1 Woche Sperre\n\nWelchen Kurs mochten Sie absagen ?",
    delay: 1600,
    quickReplies: [
      { label: "HIIT Montag absagen", value: "absagen bestatigen" },
      { label: "Yoga Mittwoch absagen", value: "absagen bestatigen" },
      { label: "Kurse behalten", value: "kurs" },
    ],
  },

  "absagen bestatigen": {
    text: "Kurs erfolgreich abgesagt !\n\n**HIIT — Montag, 21. April, 7:00 Uhr** wurde aus Ihren Buchungen entfernt.\n\nIhr Platz wurde fur andere Mitglieder freigegeben.\n\nMochten Sie einen anderen Termin buchen ?",
    delay: 1200,
    quickReplies: [
      { label: "Anderen buchen", value: "kurs" },
      { label: "Zuruck zur Ubersicht", value: "hallo" },
    ],
  },

  empfehlungsprogramm: {
    text: "**FitClub-Empfehlungsprogramm** :\n\nEmpfehlen Sie Freunde und verdienen Sie Vorteile !\n\n**Fur Sie (Empfehler) :**\n- **1 Monat gratis** pro geworbenen Neukunden\n- Unbegrenzte Kumulierung\n- Bonus : FitClub-Trinkflasche ab 3. Empfehlung\n\n**Fur Ihren Freund :**\n- **-50 %** im ersten Monat\n- 1 gratis Coach-Einheit\n- Kostenlose Korpermessung\n\n**Ihr personlicher Empfehlungslink :**\nfitclub.de/empfehlen/FC-78432\n\n**Aktive Empfehlungen :** 2 (2 Gratis-Monate kumuliert)\n\nLink per WhatsApp teilen !",
    delay: 2000,
    quickReplies: [
      { label: "Link teilen", value: "empfehlungsprogramm" },
      { label: "Meine Vorteile", value: "empfehlungsprogramm" },
      { label: "Mitgliedschaft", value: "mitgliedschaft" },
      { label: "Zuruck zur Ubersicht", value: "hallo" },
    ],
  },

  ausrustung: {
    text: "**Ausrustung & Einrichtungen FitClub** :\n\n**Krafttraining :**\n- 40+ Technogym-Maschinen der neuesten Generation\n- Freie-Gewichte-Bereich (1 - 50 kg)\n- Squat-Rack, Bankdrucken, Kabelzug\n\n**Cardio :**\n- 25 Laufbander, Fahrrader, Ellipsentrainer\n- Concept2-Rudermaschinen\n- Individuelle Bildschirme Netflix/YouTube\n\n**Raume :**\n- 2 Kursraume (je 150 m²)\n- Privater Coaching-Raum\n- Functional-Training-Zone\n- Dehnzone\n\n**Komfort :**\n- Premium-Umkleiden mit gesicherten Schranken\n- Gefiltertes Trinkwasser\n- Kostenloses WLAN\n- Tiefgaragenstellplatze (50 Platze)",
    delay: 2200,
    quickReplies: [
      { label: "Sauna & Spa", value: "sauna" },
      { label: "Virtuelle Tour", value: "ausrustung" },
      { label: "Kostenloser Probetag", value: "kostenloser probetag" },
      { label: "Mitgliedschaft", value: "mitgliedschaft" },
    ],
  },

  sauna: {
    text: "**Wellnessbereich FitClub** :\n\nIm **Premium**- und **Elite**-Paket inklusive :\n\n- **Finnische Sauna** — 80 - 90 °C, 15-Minuten-Sessions\n- **Dampfbad** — Eukalyptus-Dampf, ideal nach dem Training\n- **Wechseldusche** — Wechsel warm/kalt\n- **Entspannungsbereich** — Liegestuhle, Krauter-Tee gratis\n\n**Wellnesszeiten :**\n- Mo-Fr : 8 - 21 Uhr\n- Sa-So : 9 - 19 Uhr\n\n**Vorteile :** Muskelregeneration, Entschlackung, tiefe Entspannung.\n\nAccess-Mitglieder : **estimation personnalisee**.",
    delay: 1800,
    quickReplies: [
      { label: "Auf Premium wechseln", value: "mitgliedschaft" },
      { label: "Ausrustung", value: "ausrustung" },
      { label: "Kostenloser Probetag", value: "kostenloser probetag" },
      { label: "Zuruck zur Ubersicht", value: "hallo" },
    ],
  },

  anmeldung: {
    text: "**FitClub-Anmeldung — Einfach und schnell !**\n\n**Schritte :**\n1. Paket wahlen (Access, Premium, Elite)\n2. Online-Formular ausfullen (2 Min)\n3. Elektronischen Vertrag unterzeichnen\n4. Sichere Zahlung (EC/Kreditkarte, Lastschrift, PayPal)\n5. Zugangs-Chip per E-Mail erhalten\n\n**Erforderliche Dokumente :**\n- Personalausweis\n- IBAN (bei Lastschrift)\n- Arztliches Attest (max. 1 Jahr alt)\n\n**Anmeldebonus :** Kostenlose Korpermessung + 1 gratis Kennenlernsitzung mit Coach !\n\nBereit zur Anmeldung ?",
    delay: 2000,
    quickReplies: [
      { label: "Jetzt anmelden", value: "anmeldung" },
      { label: "Erst Probetag", value: "kostenloser probetag" },
      { label: "Pakete vergleichen", value: "mitgliedschaft" },
      { label: "Fragen", value: "hallo" },
    ],
  },

  pause: {
    text: "**Mitgliedschaft pausieren — FitClub** :\n\n**Bedingungen :**\n- Pause moglich nach **3 Monaten** Mitgliedschaft\n- Dauer : **1 bis 3 Monate** maximal\n- Pausierungsgebuhr : **estimation personnalisee**\n- Nachweis erforderlich : Reise, Verletzung, Krankheit\n\n**So pausieren Sie :**\n1. Nachweis hier einsenden\n2. Gewunschte Dauer angeben\n3. Bestatigung innerhalb von 24 Stunden\n\nIhre Mitgliedschaft wird automatisch zum geplanten Datum fortgesetzt.\n\nMochten Sie fortfahren ?",
    delay: 1800,
    quickReplies: [
      { label: "1 Monat pausieren", value: "pause" },
      { label: "3 Monate pausieren", value: "pause" },
      { label: "Kundigen", value: "pause" },
      { label: "Zuruck zur Ubersicht", value: "hallo" },
    ],
  },

  verlangerung: {
    text: "**Mitgliedschaft verlangern — FitClub** :\n\n**Ihre aktuelle Mitgliedschaft :**\n- Paket : Premium (estimation personnalisee)\n- Seit : Januar 2026\n- Nachste Abbuchung : 1. Mai 2026\n\n**Jahresangebot :**\n- **estimation personnalisee** statt estimation personnalisee (-17 %)\n- Entspricht **estimation personnalisee**\n- 2 Gratismonate\n- Bonus-Coach-Einheit pro Quartal\n\nDie Verlangerung erfolgt automatisch, sofern keine Kundigung **30 Tage** vor Ablauf erfolgt.",
    delay: 1800,
    quickReplies: [
      { label: "Auf Jahresabo wechseln", value: "verlangerung" },
      { label: "Paket wechseln", value: "mitgliedschaft" },
      { label: "Mitgliedschaft pausieren", value: "pause" },
      { label: "Zuruck zur Ubersicht", value: "hallo" },
    ],
  },
};

const sectorKeywords: Record<string, string[]> = {
  hallo: ["hallo", "hi", "hey", "guten morgen", "guten tag", "guten abend", "servus", "moin"],
  mitgliedschaft: ["mitgliedschaft", "abo", "abonnement", "paket", "tarif", "beitrag", "mitglied", "anmelden", "beitreten", "preis saal"],
  kurs: ["kurs", "kurse", "plan", "gruppenkurs", "hiit", "yoga", "pilates", "crossfit", "spinning", "zumba", "boxfit", "body pump", "stretching"],
  "kostenloser probetag": ["probetraining", "probetag", "kostenlos", "testen", "ausprobieren", "trial", "schnuppern"],
  offnungszeiten: ["offnungszeiten", "uhrzeit", "wann geoffnet", "wann geschlossen", "24h", "sonntag", "zugang"],
  coach: ["coach", "trainer", "personal trainer", "coaching", "begleitung", "personal", "einzeltraining", "privat"],
  ernahrung: ["ernahrung", "diat", "kalorien", "protein", "mahlzeit", "essen", "abnehmen", "macro", "gewicht"],
  fortschrittsfotos: ["foto", "fortschritt", "vorher nachher", "transformation", "entwicklung", "korpermessung", "analyse", "body"],
  "kurs absagen": ["absagen", "stornieren", "abmelden", "ausbuchen"],
  empfehlungsprogramm: ["empfehlung", "empfehlen", "freunde werben", "einladen", "weiterempfehlen"],
  ausrustung: ["ausrustung", "gerate", "maschinen", "einrichtung", "saal", "gewichte", "laufband", "fahrrad"],
  sauna: ["sauna", "dampfbad", "spa", "wellness", "entspannung", "relaxen", "dampf", "dusche"],
  anmeldung: ["anmelden", "anmeldung", "registrieren", "beitreten", "starten", "chip", "mitglied werden"],
  pause: ["pause", "pausieren", "unterbrechen", "suspendieren", "kundigen", "kundigung", "aufhoren", "aussetzen"],
  verlangerung: ["verlangerung", "verlangern", "jahrlich", "jahresabo", "vertrag", "ablauf"],
};

const merged = mergeWithVocalisDE(sectorIntents, sectorKeywords);

export const fitnessConfigDE: SimulatorConfig = {
  botName: "FitClub IA",
  botAvatar: "FC",
  welcomeMessage:
    "Willkommen bei **FitClub** ! Ich bin Ihr KI-Assistent.\n\nIch helfe Ihnen bei Mitgliedschaften, Kursen, Coaching, Ernahrung und vielem mehr.\n\nWie kann ich Ihnen helfen ?",
  initialQuickReplies: [
    { label: "Mitgliedschaft", value: "mitgliedschaft" },
    { label: "Kursplan", value: "kurs" },
    { label: "Kostenloser Probetag", value: "kostenloser probetag" },
    { label: "Personal Coach", value: "coach" },
    { label: "KI-Ernahrung", value: "ernahrung" },
    { label: "Empfehlungsprogramm", value: "empfehlungsprogramm" },
  ],
  intents: merged.intents,
  keywords: merged.keywords,
  fallback: createFallbackDE([
    { label: "Mitgliedschaft", value: "mitgliedschaft" },
    { label: "Kursplan", value: "kurs" },
    { label: "Personal Coach", value: "coach" },
    { label: "Kostenloser Probetag", value: "kostenloser probetag" },
  ]),
};

export default fitnessConfigDE;
