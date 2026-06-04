import type { SimulatorConfig } from "../WhatsAppSimulator";
import { mergeWithVocalisDE, createFallbackDE } from "./vocalis-features-de";

const RESTAURANT_INTENTS_DE = {
  hallo: {
    text: "Willkommen im **Gourmet IA**! Ich bin Ihr KI-Assistent.\n\nIch kann Ihnen helfen bei:\n- Tischreservierung\n- Tagesmenu ansehen\n- Bestellung zum Mitnehmen\n- Allergen-Informationen\n- Privat-Events organisieren\n\nWas kann ich fur Sie tun?",
    delay: 1200,
    quickReplies: [
      { label: "Reservieren", value: "reservierung" },
      { label: "Tagesmenu", value: "speisekarte" },
      { label: "Bestellen", value: "bestellung" },
      { label: "Offnungszeiten", value: "offnungszeiten" },
    ],
  },
  reservierung: {
    text: "Reservieren wir Ihren Tisch!\n\nBitte teilen Sie mir mit:\n\n**Datum:** Welcher Tag?\n**Uhrzeit:** Um wie viel Uhr?\n**Personen:** Wie viele Personen?\n**Praferenzen:** Terrasse, Innen, Privat, barrierefrei?\n\nZum Beispiel: *\"Samstag 20 Uhr, 4 Personen, Terrasse\"*\n\n**Verfugbarkeiten dieses Wochenende:**\n- Freitag: 19:30, 20:00, 21:00\n- Samstag: 19:00, 20:30, 21:30\n- Sonntag: 12:00, 12:30, 13:00",
    delay: 2000,
    quickReplies: [
      { label: "Samstag 20 Uhr, 4 Pers.", value: "reservierung bestatigen" },
      { label: "Sonntag Mittag, 2 Pers.", value: "reservierung bestatigen" },
      { label: "Anderes Datum", value: "anderes datum" },
      { label: "Allergene?", value: "allergene" },
    ],
  },
  "reservierung bestatigen": {
    text: "Reservierung bestatigt!\n\n**Restaurant:** Le Gourmet IA\n**Datum:** Samstag, 19. April 2026\n**Uhrzeit:** 20:00 Uhr\n**Personen:** 4\n**Platz:** Terrasse\n\nSie erhalten:\n- Sofortige WhatsApp-Bestatigung\n- Erinnerung D-1 um 18 Uhr\n- Erinnerung H-2 am selben Tag\n\nEinen besonderen Wunsch? Geburtstag, Diatvorgaben?",
    delay: 2200,
    quickReplies: [
      { label: "Es ist ein Geburtstag", value: "event" },
      { label: "Vegetarische Optionen?", value: "vegetarisch" },
      { label: "Danke!", value: "danke" },
    ],
  },
  "anderes datum": {
    text: "Hier sind unsere Verfugbarkeiten der Woche:\n\n**Montag:** Geschlossen\n**Dienstag:** 19:00, 20:00, 21:00\n**Mittwoch:** 19:30, 20:30\n**Donnerstag:** 19:00, 20:00, 21:30\n**Freitag:** 19:30, 20:00, 21:00\n**Samstag:** 19:00, 20:30, 21:30\n**Sonntag:** 12:00, 12:30, 13:00\n\nTeilen Sie mir Ihre Praferenz mit!",
    delay: 1600,
    quickReplies: [
      { label: "Donnerstag 20 Uhr", value: "reservierung bestatigen" },
      { label: "Freitag 21 Uhr", value: "reservierung bestatigen" },
    ],
  },
  speisekarte: {
    text: "Hier ist das **Tagesmenu**:\n\n**Vorspeisen:**\n- Butternusskürbissuppe, gerostete Haselnusse — estimation personnalisee\n- Lachs-Tartar, Avocado, Zitrusfruchte — estimation personnalisee\n- Burrata, Flaschentomaten, Pesto — estimation personnalisee\n\n**Hauptgerichte:**\n- Wolfsbarschfilet, Safranrisotto — estimation personnalisee\n- 7h-geschmorte Lammkeule, Trufelipuree — estimation personnalisee\n- Steinpilzrisotto mit 24-Monate-Parmesan — estimation personnalisee\n\n**Desserts:**\n- Schokoladenfondant mit flussigem Kern — estimation personnalisee\n- Tarte Tatin, Creme fraiche — estimation personnalisee\n- Affinierte Kaseplatte — estimation personnalisee\n\n**Komplettes Meni** (Vorspeise + Hauptgericht + Dessert): **estimation personnalisee**",
    delay: 2400,
    quickReplies: [
      { label: "Weinkarte", value: "weinkarte" },
      { label: "Vegetarische Optionen", value: "vegetarisch" },
      { label: "Allergene?", value: "allergene" },
      { label: "Reservieren", value: "reservierung" },
    ],
  },
  allergene: {
    text: "Allergen-Informationen:\n\nUnsere Speisekarte weist systematisch die **14 gesetzlich vorgeschriebenen Allergene** aus:\n\n- Gluten, Krebstiere, Eier, Fisch\n- Erdnusse, Soja, Milch, Schalenfruchte\n- Sellerie, Senf, Sesam, Schwefeldioxid\n- Lupinen, Weichtiere\n\n**Anpassungen moglich:**\n- Glutenfreie Gerichte verfugbar\n- Laktosefreie Optionen\n- Gerichte ohne Schalenfruchte auf Anfrage\n\nBitte geben Sie Ihre Allergien bei der Reservierung an, unser Chef wird Ihr Meni anpassen.",
    delay: 2000,
    quickReplies: [
      { label: "Glutenfrei", value: "vegetarisch" },
      { label: "Tagesmenu", value: "speisekarte" },
      { label: "Reservieren", value: "reservierung" },
    ],
  },
  offnungszeiten: {
    text: "Unsere Offnungszeiten:\n\n**Dienstag - Freitag:**\n- Mittagessen: 12:00 - 14:30 Uhr\n- Abendessen: 19:00 - 22:30 Uhr\n\n**Samstag:**\n- Nur Abendessen: 19:00 - 23:00 Uhr\n\n**Sonntag:**\n- Brunch: 10:00 - 14:00 Uhr\n\n**Montag:** Geschlossen\n\n**Adresse:** Gastronomiestrasse 42, 80333 Munchen\n**Parkplatz:** Valet-Service abends verfugbar\n**Barrierefreiheit:** Ja",
    delay: 1600,
    quickReplies: [
      { label: "Reservieren", value: "reservierung" },
      { label: "Lieferung?", value: "lieferung" },
      { label: "Anfahrt?", value: "offnungszeiten" },
    ],
  },
  lieferung: {
    text: "Lieferoptionen:\n\n**Partnerplattformen:**\n- **Lieferando** — Lieferung 25-35 Min.\n- **Delivery Hero** — Lieferung 20-30 Min.\n- **Wolt** — Lieferung 30-40 Min.\n\n**Click & Collect:**\n- Hier bestellen, im Restaurant abholen\n- Fertig in 20 Min.\n- -10% auf Ihre Bestellung\n\n**Direktlieferung:**\n- Radius 5 km, Mindestbestellwert estimation personnalisee\n- Liefergebühr: estimation personnalisee\n- Kostenlos ab estimation personnalisee\n\nDie Karte zum Mitnehmen ist 7 Tage/Woche von 11:30 - 22:00 Uhr verfugbar.",
    delay: 2000,
    quickReplies: [
      { label: "Zum Mitnehmen bestellen", value: "bestellung" },
      { label: "Tagesmenu", value: "speisekarte" },
      { label: "Vor Ort reservieren", value: "reservierung" },
    ],
  },
  bestellung: {
    text: "Aufgabe Ihrer Bestellung zum Mitnehmen!\n\nHier unsere **Bestseller**:\n\n1. Gourmet-Truffelburger mit Pommes — estimation personnalisee\n2. Lachs-Poke-Bowl, Edamame, Avocado — estimation personnalisee\n3. Steinpilzrisotto (vegan moglich) — estimation personnalisee\n4. Caesar Salat mit gegrilltem Huhn — estimation personnalisee\n5. Rindfleisch-Tartar, Strohkartoffeln — estimation personnalisee\n\n**Mittagsmenu** (Hauptgericht + Getrank): estimation personnalisee\n\nNennen Sie Ihre Auswahl und ich berechne den Gesamtbetrag. Zahlung per Karte online oder vor Ort.",
    delay: 2200,
    quickReplies: [
      { label: "Burger + Pommes", value: "bestellung bestatigen" },
      { label: "Poke-Bowl", value: "bestellung bestatigen" },
      { label: "Vollstandige Karte ansehen", value: "speisekarte" },
      { label: "Allergene?", value: "allergene" },
    ],
  },
  "bestellung bestatigen": {
    text: "Bestellung aufgenommen!\n\n**Zusammenfassung:**\n- 1x Gourmet-Truffelburger — estimation personnalisee\n- 1x Pommes — inklusive\n\n**Gesamt:** estimation personnalisee\n\n**Abholung:** In 20 Minuten\n**Adresse:** Gastronomiestrasse 42, 80333 Munchen\n\nZahlungslink wird per WhatsApp gesendet.\nSie erhalten eine Benachrichtigung wenn es fertig ist!",
    delay: 1800,
    quickReplies: [
      { label: "Danke!", value: "danke" },
    ],
  },
  "gerichtsfoto": {
    text: "Schicken Sie mir ein Foto eines Gerichts und unsere **KI-Vision** identifiziert:\n\n- Name des Gerichts und Zutaten\n- Geschatzter Kaloriengehalt\n- Mogliche Allergene\n- Ideale Weinbegleitung\n\n**Beispiel:**\n*Foto eines Risottos* → \"Steinpilzrisotto, 24-Monate-Parmesan\"\n→ Begleitung: Barolo 2019 oder Meursault\n\nPerfekt um ein Gericht wiederzufinden, das Ihnen gefallen hat, oder unsere Speise-Wein-Empfehlung zu entdecken!",
    delay: 2000,
    quickReplies: [
      { label: "Weinkarte", value: "weinkarte" },
      { label: "Tagesmenu", value: "speisekarte" },
      { label: "Reservieren", value: "reservierung" },
    ],
  },
  bewertung: {
    text: "Ihre Bewertung ist uns sehr wichtig!\n\n**Hinterlassen Sie Ihre Bewertung:**\n\n1. **Google** — Direktlink per WhatsApp gesendet\n2. **TripAdvisor** — Ein Klick genugt\n3. **TheFork** — Ihre Erfahrung bewerten\n\n**Im Gegenzug:**\n- Ein Dessert bei Ihrem nachsten Besuch geschenkt\n- Anmeldung zum Treueprogramm\n- Einladung zu Privatveranstaltungen\n\nIhre Zufriedenheit hat fur uns Prioritat. Eine negative Bewertung? Unser Chef ruft Sie personlich zuruck.",
    delay: 1800,
    quickReplies: [
      { label: "Google-Bewertung abgeben", value: "bewertung" },
      { label: "Treueprogramm", value: "treueprogramm" },
      { label: "Erneut reservieren", value: "reservierung" },
    ],
  },
  event: {
    text: "Privatveranstaltungen im Gourmet IA:\n\n**Unsere Bereiche:**\n- **Privatsalon** — 8-16 Personen\n- **Gewolbesaal** — 20-40 Personen\n- **Privatisierte Terrasse** — 30-60 Personen\n- **Ganzes Restaurant** — bis zu 80 Personen\n\n**Anlasse:**\n- Geburtstage, Hochzeiten, Verlobungen\n- Seminare, Teambuilding\n- Geschaftsdinner\n\n**Inklusive:**\n- Maßgeschneidertes Menu vom Chef\n- Personalisierte Dekoration\n- Engagierter Service\n- DJ / Animation auf Anfrage\n\nBudget ab **estimation personnalisee**. Angebot in 24h.",
    delay: 2400,
    quickReplies: [
      { label: "Angebot anfragen", value: "termin" },
      { label: "Massgeschneidertes Menu", value: "speisekarte" },
      { label: "Chef kontaktieren", value: "chef kontakt" },
    ],
  },
  treueprogramm: {
    text: "Treueprogramm **Gourmet Club**:\n\n**Wie es funktioniert:**\n- estimation personnalisee = 1 Punkt\n- 100 Punkte = estimation personnalisee Nachlass\n\n**Mitgliedervorteile:**\n- Dessert bei Anmeldung geschenkt\n- -15% an Ihrem Geburtstag\n- Bevorzugter Zugang zu Privatveranstaltungen\n- Exklusive Verkostungen (Weine, Saisonmenus)\n- Bevorzugte Reservierung am Wochenende\n\n**Ihr aktuelles Guthaben:** Melden Sie sich an, um zu beginnen!\n\nKostenlose Anmeldung, direkt hier auf WhatsApp.",
    delay: 2000,
    quickReplies: [
      { label: "Anmelden", value: "reservierung bestatigen" },
      { label: "Reservieren", value: "reservierung" },
      { label: "Tagesmenu", value: "speisekarte" },
    ],
  },
  weinkarte: {
    text: "Unsere **Weinkarte**:\n\n**Weissweine:**\n- Chablis 1er Cru 2021 — estimation personnalisee value\n- Sancerre, Domaine Vacheron — estimation personnalisee value\n- Meursault 2020 — estimation personnalisee value\n\n**Rotweine:**\n- Saint-Emilion Grand Cru 2018 — estimation personnalisee value\n- Chateauneuf-du-Pape 2019 — estimation personnalisee value\n- Barolo DOCG 2017 — estimation personnalisee value\n\n**Champagner:**\n- Veuve Clicquot Brut — estimation personnalisee\n- Dom Perignon 2012 — estimation personnalisee\n- Ruinart Blanc de Blancs — estimation personnalisee\n\n**Speise-Wein-Begleitung:** Unser KI-Sommelier empfiehlt die perfekte Begleitung zu Ihrem Menu.",
    delay: 2200,
    quickReplies: [
      { label: "Begleitung zum Menu", value: "gerichtsfoto" },
      { label: "Tagesmenu", value: "speisekarte" },
      { label: "Reservieren", value: "reservierung" },
    ],
  },
  vegetarisch: {
    text: "Vegetarische & vegane Optionen:\n\n**Vegetarisch:**\n- Burrata, Flaschentomaten, Pesto — estimation personnalisee\n- Steinpilzrisotto mit Parmesan — estimation personnalisee\n- Selbstgemachte Gnocchi, Salbeibutter — estimation personnalisee\n- Dunne Saisongemisetarte — estimation personnalisee\n\n**Vegan:**\n- Tofu-Poke-Bowl, Edamame, Avocado — estimation personnalisee\n- Steinpilzrisotto (vegane Version) — estimation personnalisee\n- Buddha-Bowl Quinoa, Ofengemuse — estimation personnalisee\n- Hausgemachtes Fruchtssorbet — estimation personnalisee\n\n**Auf Anfrage:** Unser Chef passt jedes Gericht der Karte an. Bitte bei der Reservierung angeben!",
    delay: 2000,
    quickReplies: [
      { label: "Allergene?", value: "allergene" },
      { label: "Vollstandige Karte", value: "speisekarte" },
      { label: "Reservieren", value: "reservierung" },
    ],
  },
  "reservierung andern": {
    text: "Reservierung andern oder stornieren:\n\n**Zum Andern:**\n- Ihren Namen oder Reservierungsnummer angeben\n- Neuer gewunschter Termin\n- Anderung der Personenzahl\n\n**Zum Stornieren:**\n- Kostenlose Stornierung bis zu 2h vorher\n- Danach gilt ein Guthaben von 50%\n\n**No-Show-Regelung:**\n- 2 No-Shows → vorübergehende Sperrung der Online-Reservierung\n\nGeben Sie mir Ihren Namen, ich finde Ihre Reservierung.",
    delay: 1800,
    quickReplies: [
      { label: "Reservierung andern", value: "reservierung" },
      { label: "Neue Reservierung", value: "reservierung" },
      { label: "Offnungszeiten", value: "offnungszeiten" },
    ],
  },
  "chef kontakt": {
    text: "Nachricht an den Chef:\n\nUnser Chef **Markus Weber** (Michelin-Stern) steht Ihnen gerne zur Verfugung fur:\n\n- **Personalisiertes Menu** — Veranstaltungen, Allergien, Praferenzen\n- **Besonderer Wunsch** — Signaturgericht, außerhalb der Karte\n- **Kochkurse** — Private Sitzungen (4-8 Pers.)\n- **Catering** — Hausveranstaltungen\n\nHinterlassen Sie hier Ihre Nachricht, der Chef antwortet innerhalb von 24h.\n\nOder buchen Sie einen direkten Anruf mit ihm uber unseren Kalender.",
    delay: 2000,
    quickReplies: [
      { label: "Personalisiertes Menu", value: "event" },
      { label: "Kochkurs", value: "event" },
      { label: "Reservieren", value: "reservierung" },
    ],
  },
};

const RESTAURANT_KEYWORDS_DE: Record<string, string[]> = {
  hallo: ["hallo", "hi", "guten tag", "guten abend", "hey", "servus", "moin"],
  reservierung: ["reservieren", "reservierung", "tisch", "person", "platz", "booking", "buchen"],
  speisekarte: ["menu", "speisekarte", "gericht", "vorspeise", "dessert", "formular", "empfehlung", "spezialitat"],
  allergene: ["allergen", "allergie", "gluten", "laktose", "intoleran", "nusse", "erdnusse"],
  offnungszeiten: ["offnungszeit", "uhrzeit", "offnung", "geschlossen", "geoffnet", "wann", "adresse", "parkplatz"],
  lieferung: ["lieferung", "delivery", "lieferando", "wolt", "liefern"],
  bestellung: ["bestellen", "bestellung", "mitnehmen", "takeaway", "take away", "click collect"],
  gerichtsfoto: ["foto", "bild", "identifizieren", "erkennen", "welches gericht"],
  bewertung: ["bewertung", "review", "note", "stern", "kommentar", "feedback", "google bewertung"],
  event: ["event", "veranstaltung", "geburtstag", "privat", "gruppe", "seminar", "hochzeit", "feier", "teambuilding"],
  treueprogramm: ["treue", "loyalty", "punkt", "programm", "club", "vorteil", "rabatt"],
  weinkarte: ["wein", "wine", "flasche", "champagner", "rotwein", "weisswein", "sommelier", "rebsorte"],
  vegetarisch: ["vegetarisch", "vegan", "veggie", "gemuse", "pflanzlich", "ohne fleisch", "plant based"],
  "reservierung andern": ["stornieren", "stornierung", "andern", "wechseln", "verschieben", "no show"],
  "chef kontakt": ["chef", "kuche", "koch", "catering", "kochkurs", "spezial"],
};

const { intents, keywords } = mergeWithVocalisDE(RESTAURANT_INTENTS_DE, RESTAURANT_KEYWORDS_DE);

export const restaurantConfigDE: SimulatorConfig = {
  botName: "Le Gourmet IA",
  botAvatar: "LG",
  welcomeMessage:
    "Willkommen im **Gourmet IA**! Ich bin Ihr KI-Assistent.\n\nIch kann Ihnen helfen bei:\n- Tischreservierung\n- Tagesmenu ansehen\n- Bestellung zum Mitnehmen\n- Weinkarte entdecken\n- Event organisieren\n\nWas wunschen Sie?",
  initialQuickReplies: [
    { label: "Tisch reservieren", value: "reservierung" },
    { label: "Tagesmenu", value: "speisekarte" },
    { label: "Zum Mitnehmen bestellen", value: "bestellung" },
    { label: "Weinkarte", value: "weinkarte" },
    { label: "Offnungszeiten", value: "offnungszeiten" },
  ],
  intents,
  keywords,
  fallback: createFallbackDE([
    { label: "Reservieren", value: "reservierung" },
    { label: "Menu", value: "speisekarte" },
    { label: "Offnungszeiten", value: "offnungszeiten" },
    { label: "Vocalis Preise", value: "preis" },
  ]),
};

export default restaurantConfigDE;
