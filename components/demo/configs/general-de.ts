import type { SimulatorConfig } from "../WhatsAppSimulator";
import { mergeWithVocalisDE, createFallbackDE } from "./vocalis-features-de";

const GENERAL_INTENTS_DE = {
  "guten tag": {
    text: "Guten Tag! Ich bin der KI-Agent von AgenticWhatsup, angetrieben von **Vocalis AI**.\n\nIch kann Ihnen helfen mit:\n\n- Automatischer Lead-Qualifizierung\n- Terminbuchung fur Ihre Kunden\n- Analyse von Fotos und Dokumenten\n- FAQ-Antworten 24/7\n- KI-Telefonie (ein-/ausgehende Anrufe)\n- Stimmklonung & Mehrsprachigkeit\n\nWas mochten Sie wissen?",
    delay: 1800,
    quickReplies: [
      { label: "Wie funktioniert es?", value: "wie funktioniert es" },
      { label: "WhatsApp Funktionen", value: "whatsapp features" },
      { label: "KI-Telefonie", value: "telefonie" },
      { label: "Preise", value: "preis" },
    ],
  },
  hallo: {
    text: "Hallo! Willkommen bei AgenticWhatsup.\n\nIch bin Ihr KI-Assistent, angetrieben von Vocalis. Stellen Sie mir jede Frage!",
    delay: 1400,
    quickReplies: [
      { label: "Funktionen", value: "wie funktioniert es" },
      { label: "Stimmklonung", value: "stimmklonung" },
      { label: "Preise", value: "preis" },
    ],
  },
  "wie funktioniert es": {
    text: "Unser KI-Agent funktioniert in 3 Schritten:\n\n**1. Anbindung** — Wir verbinden uns mit Ihrem WhatsApp Business + Telefonie in 48h\n\n**2. Training** — Die KI lernt Ihre Produkte, Services, FAQ uber die Wissensdatenbank\n\n**3. Autonomie** — Der Agent antwortet 24/7:\n   - WhatsApp: Text, Sprache, Fotos\n   - Telefon: ein-/ausgehende Anrufe\n   - Web: Chat/Sprach-Widget\n   - SMS: Omnichannel-Erganzung\n\n**+ Flow Builder** zum Gestalten der Logik\n**+ Dashboards** fur Echtzeit-Monitoring",
    delay: 2400,
    quickReplies: [
      { label: "Flow Builder?", value: "flow builder" },
      { label: "Stimmklonung", value: "stimmklonung" },
      { label: "Automatisierung", value: "automatisierung" },
      { label: "Preise", value: "preis" },
    ],
  },
  foto: {
    text: "Unsere Vision-KI analysiert in Echtzeit:\n\n- Ausweisdokumente\n- Rechnungen und Bestellscheine\n- Fotos defekter Produkte\n- Immobilien\n- Schaden (Versicherungsfalle)\n- Fahrzeuge (Inzahlungnahme-Schatzung)\n\n**Die KI extrahiert die Daten, erstellt den Vorgang und benachrichtigt das Team — in 2 Sekunden.**",
    delay: 1800,
    quickReplies: [
      { label: "Auch Sprache?", value: "sprache" },
      { label: "Preise", value: "preis" },
    ],
  },
  demo: {
    text: "Hier ist, was ich zeigen kann:\n\n**1. WhatsApp Business**\nMeta-Templates, Nurturing, Warenkorb-Recovery\n\n**2. KI-Telefonie**\nEin-/ausgehende Anrufe, Mensch-Weiterleitung\n\n**3. Stimmklonung**\n3 TTS-Anbieter, Ihre Markenstimme\n\n**4. Flow Builder**\nVisuelle Gesprachslogik, kein Code\n\n**5. Pradiktives Scoring**\n15+ Kriterien, automatisches Routing\n\n**6. 10 Branchen**\nE-Commerce, Medizin, Restaurant, Auto...\n\nWas mochten Sie testen?",
    delay: 2200,
    quickReplies: [
      { label: "WhatsApp Funktionen", value: "whatsapp features" },
      { label: "Telefonie", value: "telefonie" },
      { label: "Stimmklonung", value: "stimmklonung" },
      { label: "Scoring", value: "scoring" },
    ],
  },
  "kundenfalle": {
    text: "Kundenergebnisse nach Branche:\n\n**Zahnarztpraxis** (Genf)\n- 70% weniger No-Shows, 200+ Termine/Monat\n\n**Immobilienagentur** (Paris)\n- 3x mehr qualifizierte Besichtigungen\n\n**Mode-E-Commerce** (Lyon)\n- Kundenservice 85% automatisiert, 4s Antwortzeit\n\n**Restaurant** (Zurich)\n- WhatsApp-Reservierungen +120%\n\n**Autohaus** (Brussel)\n- Lead-Qualifizierung x2, Probefahrten +45%\n\n**Anwaltskanzlei** (Genf)\n- Geplante Beratungen +60%",
    delay: 2400,
    quickReplies: [
      { label: "Meine Branche?", value: "branche" },
      { label: "Termin buchen", value: "termin" },
    ],
  },
  branche: {
    text: "**10 Branchen** mit dedizierter Demo:\n\n- E-Commerce\n- Coach & Trainer\n- Versicherung\n- Immobilien\n- Restaurant & Catering\n- Medizin\n- Fitness & Sportstudio\n- Automobil\n- Recht (Anwalt, Notar)\n- Hotellerie\n\nJeder Agent ist an Ihren Beruf angepasst mit dedizierter Wissensdatenbank.",
    delay: 2000,
    quickReplies: [
      { label: "Termin buchen", value: "termin" },
      { label: "Preise", value: "preis" },
    ],
  },
};

const GENERAL_KEYWORDS_DE = {
  "guten tag": ["guten tag", "guten morgen", "guten abend", "hey", "hallochen", "yo", "hi", "hello", "gruezi", "servus"],
  hallo: ["hallo", "hi"],
  "wie funktioniert es": ["wie", "funktioniert", "funktion", "erklaren", "explain", "how"],
  foto: ["foto", "bild", "kamera", "dokument", "analysieren", "picture", "scan", "vision"],
  demo: ["demo", "demonstration", "zeigen", "show", "ausprobieren", "test", "testen"],
  kundenfalle: ["kundenfall", "ergebnis", "testimonial", "beispiel", "referenz"],
  branche: ["branche", "industrie", "beruf", "vertikal", "sektor"],
};

const merged = mergeWithVocalisDE(GENERAL_INTENTS_DE, GENERAL_KEYWORDS_DE);

export const generalConfigDE: SimulatorConfig = {
  botName: "AgenticWhatsup",
  botAvatar: "AI",
  welcomeMessage:
    "Willkommen! Ich bin der KI-Agent von AgenticWhatsup, angetrieben von **Vocalis AI**.\n\nGeben Sie eine Nachricht ein oder nutzen Sie die Vorschlage, um alle unsere Funktionen zu entdecken.",
  initialQuickReplies: [
    { label: "Guten Tag!", value: "guten tag" },
    { label: "WhatsApp Funktionen", value: "whatsapp features" },
    { label: "KI-Telefonie", value: "telefonie" },
    { label: "Stimmklonung", value: "stimmklonung" },
    { label: "Preise", value: "preis" },
  ],
  intents: merged.intents,
  keywords: merged.keywords,
  fallback: createFallbackDE([
    { label: "Wie funktioniert es?", value: "wie funktioniert es" },
    { label: "WhatsApp Funktionen", value: "whatsapp features" },
    { label: "KI-Telefonie", value: "telefonie" },
    { label: "Preise", value: "preis" },
  ]),
};
