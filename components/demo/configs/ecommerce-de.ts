import type { SimulatorConfig } from "../WhatsAppSimulator";
import { mergeWithVocalisDE, createFallbackDE } from "./vocalis-features-de";

const ECOMMERCE_INTENTS_DE = {
  hallo: {
    text: "Hallo! Willkommen bei **ModaChic**!\n\nIch bin Ihr personlicher Shopping-Assistent, angetrieben von **Vocalis AI**.\n\nIch kann Ihnen bei Bestellungen, Rucksendungen, Grossen, Aktionen und vielem mehr helfen. Wie kann ich Ihnen helfen?",
    delay: 800,
    quickReplies: [
      { label: "Bestellung verfolgen", value: "bestellung verfolgen" },
      { label: "Neukunde", value: "katalog" },
      { label: "Stimmklonung", value: "stimmklonung" },
      { label: "WhatsApp Funktionen", value: "whatsapp features" },
      { label: "KI-Telefonie", value: "telefonie" },
      { label: "Aktuelle Angebote", value: "aktionscode" },
    ],
  },

  "bestellung verfolgen": {
    text: "Naturlich! Hier ist der Status Ihrer letzten Bestellung:\n\n**Bestellung #MC-78432**\n- Elegance Noir Kleid (M) — estimation personnalisee\n- Kamel-Ledertasche — estimation personnalisee\n\n**Status:** In Zustellung\n**Spediteur:** DHL\n**Sendungsnummer:** 8R12345678901\n**Voraussichtliche Lieferung:** Morgen vor 18 Uhr\n\nKann ich Ihnen noch anderweitig helfen?",
    delay: 1500,
    quickReplies: [
      { label: "Adresse andern", value: "lieferung" },
      { label: "Lieferproblem", value: "reklamation" },
      { label: "Andere Bestellung", value: "bestellung verfolgen" },
      { label: "Zur Startseite", value: "hallo" },
    ],
  },

  rucksendung: {
    text: "Unsere **ModaChic** Ruckgabebedingungen:\n\n- Kostenlose Rucksendung innerhalb von **30 Tagen**\n- Artikel ungetragen, Etiketten intakt\n- Umtausch von Grose/Farbe kostenlos\n\nIch habe soeben Ihr **Rucksendeetikett** erstellt:\n\n**Etikett:** RET-MC-2026-04-78432.pdf\n**Nachster Paketshop:** DHL-Paketshop — Hauptstrasse 12\n\nGeben Sie das Paket ab, die Ruckerstattung erfolgt innerhalb von **3-5 Werktagen**.",
    delay: 1800,
    quickReplies: [
      { label: "Grose tauschen", value: "grosenfuhrer" },
      { label: "Ruckerstattung verfolgen", value: "bestellung verfolgen" },
      { label: "Defekter Artikel", value: "produktfoto" },
      { label: "Zur Startseite", value: "hallo" },
    ],
  },

  grosenfuhrer: {
    text: "Hier ist unser **ModaChic Grosenfuhrer**:\n\n**Oberteile & Kleider:**\n- XS: Bustumfang 80-84 cm\n- S: 84-88 cm\n- M: 88-92 cm\n- L: 92-96 cm\n- XL: 96-100 cm\n\n**Hosen:**\n- 36: Taillenumfang 64-68 cm\n- 38: 68-72 cm\n- 40: 72-76 cm\n- 42: 76-80 cm\n\n**KI-Tipp:** Schicken Sie mir Ihre Masse und ich empfehle die ideale Grose fur jeden Artikel!",
    delay: 1400,
    quickReplies: [
      { label: "Grose empfehlen", value: "grosenfuhrer" },
      { label: "Katalog ansehen", value: "katalog" },
      { label: "Artikel umtauschen", value: "rucksendung" },
      { label: "Zur Startseite", value: "hallo" },
    ],
  },

  lagerbestand: {
    text: "Ich prufe die Verfugbarkeit fur Sie...\n\nHier sind die **meistverkauften Artikel auf Lager**:\n\n- **Elegance Noir Kleid** — estimation personnalisee (S, M, L)\n- **Blazer Parisienne** — estimation personnalisee (M, L, XL)\n- **Slim Jeans Raw** — estimation personnalisee (36, 38, 40, 42)\n- **Kaschmir Pullover Elfenbein** — estimation personnalisee (S, M) *Letzte Stuck!*\n\nFur welchen Artikel interessieren Sie sich?",
    delay: 1200,
    quickReplies: [
      { label: "Elegance Kleid", value: "katalog" },
      { label: "Blazer Parisienne", value: "katalog" },
      { label: "Grosenfuhrer", value: "grosenfuhrer" },
      { label: "In den Warenkorb", value: "zahlung" },
    ],
  },

  produktfoto: {
    text: "Danke fur das Foto! Unsere **KI analysiert das Bild**...\n\n**Analyseergebnis:**\n- Identifizierter Artikel: Elegance Noir Kleid (Ref. MC-REN-042)\n- Erkannter Defekt: Aufgetrennte Naht am Saum\n- Schweregrad: Fertigungsfehler bestatigt\n\n**Entscheidung:** Kostenloser Ersatz oder vollstandige Ruckerstattung\n\nIch erstelle Ihnen einen Prioritats-Rucksendeschein. Sie erhalten den Ersatz innerhalb von **48 Stunden**!",
    delay: 2500,
    quickReplies: [
      { label: "Ersatz", value: "rucksendung" },
      { label: "Ruckerstattung", value: "rucksendung" },
      { label: "Anderes Problem", value: "reklamation" },
      { label: "Zur Startseite", value: "hallo" },
    ],
  },

  aktionscode: {
    text: "Hier sind die **aktuellen Angebote** bei ModaChic:\n\n- **FRUHLING26**: -20% auf die neue Fruhlingskollektion\n- **WILLKOMMEN15**: -15% auf Ihre 1. Bestellung\n- **TREUE10**: -10% fur Club-Mitglieder (kombinierbar)\n\n**Flash-Sale:** Bis zu **-50%** auf Wintermantel — Noch 23 Artikel!\n\nKopieren Sie den Code und fugen Sie ihn im Warenkorb ein.",
    delay: 1200,
    quickReplies: [
      { label: "Katalog ansehen", value: "katalog" },
      { label: "Flash-Sale", value: "lagerbestand" },
      { label: "Mitglied werden", value: "kundendienst" },
      { label: "Zur Startseite", value: "hallo" },
    ],
  },

  lieferung: {
    text: "**Lieferoptionen bei ModaChic:**\n\n- **Standard** (3-5 Tage): Kostenlos ab estimation personnalisee\n- **Express** (24h): estimation personnalisee\n- **Paketshop** (2-4 Tage): Kostenlos ab estimation personnalisee\n- **Same-Day Munchen**: estimation personnalisee (Bestellung vor 14 Uhr)\n\n**Gebiete:** Deutschland, Osterreich, Schweiz, Liechtenstein\n**Tracking:** SMS + E-Mail bei jedem Schritt\n\nHaben Sie gerade eine laufende Bestellung?",
    delay: 1300,
    quickReplies: [
      { label: "Bestellung verfolgen", value: "bestellung verfolgen" },
      { label: "Adresse andern", value: "lieferung" },
      { label: "Internationale Lieferung", value: "lieferung" },
      { label: "Zur Startseite", value: "hallo" },
    ],
  },

  zahlung: {
    text: "**Akzeptierte Zahlungsmethoden:**\n\n- Kreditkarte (Visa, Mastercard, Amex)\n- PayPal\n- Apple Pay / Google Pay\n- Klarna — Ratenzahlung **3x ohne Aufpreis** ab estimation personnalisee\n- Bankuberweisung\n- ModaChic Geschenkkarte\n\n**100% sichere Zahlung** (3D Secure, SSL-Verschlusselung)\n\nBenotigen Sie Hilfe beim Abschluss Ihrer Bestellung?",
    delay: 1100,
    quickReplies: [
      { label: "3x zahlen", value: "zahlung" },
      { label: "Zahlungsproblem", value: "reklamation" },
      { label: "Geschenkkarte", value: "katalog" },
      { label: "Zur Startseite", value: "hallo" },
    ],
  },

  reklamation: {
    text: "Es tut mir leid fur die Unannehmlichkeiten. Ihre Zufriedenheit hat fur uns hochste Prioritat.\n\n**Ihre Reklamation wurde erfasst:**\n- **Ref.:** REC-MC-2026-04-1847\n- **Prioritat:** Hoch\n- **Antwortzeit:** Maximal 2 Stunden\n\nEin Senior-Berater wird sich um Ihren Fall kummern. In der Zwischenzeit darf ich Ihnen einen **estimation personnalisee** als Geste anbieten?",
    delay: 1600,
    quickReplies: [
      { label: "Gutschein annehmen", value: "aktionscode" },
      { label: "Mit einem Menschen sprechen", value: "menschlicher kontakt" },
      { label: "Foto senden", value: "produktfoto" },
      { label: "Zur Startseite", value: "hallo" },
    ],
  },

  kundendienst: {
    text: "**ModaChic Kundendienst:**\n\nUnser Kundenservice ist **7 Tage die Woche von 8 bis 22 Uhr** erreichbar.\n\nIch kann Ihnen helfen mit:\n- Bestellverfolgung und Anpassung\n- Rucksendungen und Umtausch\n- Qualitatsprobleme\n- Rechnungen und Ruckerstattungen\n- Treueprogramm (Ihre Punkte: **2.450 Pkt.** = estimation personnalisee)\n\nWas mochten Sie tun?",
    delay: 1200,
    quickReplies: [
      { label: "Meine Treuepunkte", value: "kundendienst" },
      { label: "Meine Rechnung", value: "bestellung verfolgen" },
      { label: "Konto loschen", value: "menschlicher kontakt" },
      { label: "Zur Startseite", value: "hallo" },
    ],
  },

  bewertung: {
    text: "Danke, dass Sie eine Bewertung hinterlassen mochten! Ihr Feedback hilft uns sehr.\n\n**Bewerten Sie Ihren letzten Kauf:**\n- Elegance Noir Kleid — Bestellung #MC-78432\n\nAuf einer Skala von 1 bis 5, wie bewerten Sie:\n- Die Produktqualitat?\n- Die Liefergeschwindigkeit?\n- Den Kundenservice?\n\nAntworten Sie einfach mit 3 Zahlen (z.B.: 5 4 5) und ich speichere Ihre Bewertung.\n\n**Bonus:** Jede Bewertung = **50 Treuepunkte** geschenkt!",
    delay: 1400,
    quickReplies: [
      { label: "5 5 5", value: "bewertung" },
      { label: "Kommentar hinterlassen", value: "bewertung" },
      { label: "Meine Punkte", value: "kundendienst" },
      { label: "Zur Startseite", value: "hallo" },
    ],
  },

  katalog: {
    text: "Entdecken Sie unsere **ModaChic Kollektionen**:\n\n**Neuheiten Fruhling 2026:**\n- Provence Blumenkleid — estimation personnalisee\n- Naturleinen-Blazer — estimation personnalisee\n- Goldene Sandalen — estimation personnalisee\n\n**Bestseller:**\n- Elegance Noir Kleid — estimation personnalisee\n- Slim Jeans Raw — estimation personnalisee\n- Kamel-Ledertasche — estimation personnalisee\n\n**Code FRUHLING26** fur -20% auf Neuheiten!\n\nFur welchen Artikel interessieren Sie sich?",
    delay: 1500,
    quickReplies: [
      { label: "Neuheiten", value: "katalog" },
      { label: "Bestseller", value: "lagerbestand" },
      { label: "Grosenfuhrer", value: "grosenfuhrer" },
      { label: "Aktionscode", value: "aktionscode" },
    ],
  },

  "verlassener warenkorb": {
    text: "Ich habe bemerkt, dass Sie Artikel in Ihrem Warenkorb haben!\n\n**Ihr ModaChic Warenkorb:**\n- Blazer Parisienne (M) — estimation personnalisee\n- Bordeaux-Seidenschal — estimation personnalisee\n\n**Gesamt:** estimation personnalisee\n**Mit FRUHLING26:** ~~194,00~~ **estimation personnalisee** (-20%)\n\nIhr Code lauft in **2 Stunden** ab. Mochten Sie die Bestellung abschliessen?",
    delay: 1600,
    quickReplies: [
      { label: "Bestellung abschliessen", value: "zahlung" },
      { label: "Warenkorb andern", value: "katalog" },
      { label: "Grossen pruefen", value: "grosenfuhrer" },
      { label: "Spater", value: "hallo" },
    ],
  },

  "menschlicher kontakt": {
    text: "Naturlich, ich leite Sie an einen menschlichen Berater weiter.\n\n**Weiterleitung lauft...**\n- Geschatzte Wartezeit: **< 2 Minuten**\n- Zugewiesener Berater: **Anna M.** (E-Commerce-Team)\n- Ihr Gesprochsverlauf wird ubermittelt\n\nIn der Zwischenzeit hat Anna Zugriff auf:\n- Ihre Bestellhistorie\n- Ihren Reklamationsvorgang\n- Die bereits vorgeschlagenen Losungen\n\nVielen Dank fur Ihre Geduld!",
    delay: 2000,
    quickReplies: [
      { label: "Direkt anrufen", value: "menschlicher kontakt" },
      { label: "E-Mail senden", value: "menschlicher kontakt" },
      { label: "Ist doch okay", value: "hallo" },
    ],
  },

  wunschliste: {
    text: "Ihre **ModaChic Wunschliste**:\n\n1. Wollmantel Kamel — estimation personnalisee *(- 50% Flash-Sale!)*\n2. Chelsea-Stiefeletten Schwarz — estimation personnalisee\n3. Grauer Kaschmirschal — estimation personnalisee\n\n**Hinweis:** Der Wollmantel Kamel ist im Angebot fur **estimation personnalisee**! Noch 3 auf Lager.\n\nMochten Sie ihn in den Warenkorb legen?",
    delay: 1300,
    quickReplies: [
      { label: "In den Warenkorb", value: "zahlung" },
      { label: "Katalog ansehen", value: "katalog" },
      { label: "Lagerbenachrichtigung", value: "lagerbestand" },
      { label: "Zur Startseite", value: "hallo" },
    ],
  },

  "whatsapp kampagne": {
    text: "**WhatsApp-Kampagnen fur E-Commerce**:\n\nHolen Sie Ihre **verlassenen Warenkkorbe** automatisch zuruck!\n\n**So funktioniert es:**\n1. Kunde verlasst den Warenkorb\n2. Nach 1h → WhatsApp-Template mit Erinnerung + Aktionscode\n3. Nach 24h → Nachfassung mit Exklusivangebot\n4. Nach 48h → Letzte Chance + Lageringkeitshinweis\n\n**Durchschnittliche Ergebnisse:**\n- **35% Warenkorb-Recovery**\n- **+22% monatlicher Mehrumsatz**\n- **8x ROI** auf Nachrichtenkosten\n\nVorab genehmigte Meta-Templates inklusive.",
    delay: 2200,
    quickReplies: [
      { label: "Meta-Templates", value: "templates" },
      { label: "Lead-Scoring", value: "scoring" },
      { label: "Preise", value: "preis" },
      { label: "Termin buchen", value: "termin" },
    ],
  },
};

const ECOMMERCE_KEYWORDS_DE: Record<string, string[]> = {
  hallo: [
    "hallo", "hi", "guten tag", "hey", "guten abend", "servus",
    "moin", "gruezi", "gruss gott",
  ],
  "bestellung verfolgen": [
    "bestellung", "verfolgen", "tracking", "paket", "wo ist",
    "geliefert", "status", "nummer", "track",
    "versand", "verschickt", "sendung",
  ],
  rucksendung: [
    "rucksendung", "zurucksenden", "umtauschen", "umtausch", "zuruckschicken",
    "rucksenden", "erstatten", "erstattung", "zurucknehmen",
    "rucksendeetikett",
  ],
  grosenfuhrer: [
    "grose", "grosen", "masse", "abmessung", "size",
    "sizing", "cm", "klein", "gros", "eng",
    "weit", "fuhrer",
  ],
  lagerbestand: [
    "lager", "verfugbar", "verfugbarkeit", "vorratig",
    "ubrig", "ausverkauft", "vergriffen", "auf lager",
    "menge",
  ],
  produktfoto: [
    "foto", "bild", "defekt", "defekter artikel", "beschadigt",
    "kaputt", "loch", "gerissen", "fleck", "foto senden",
    "qualitatsproblem",
  ],
  aktionscode: [
    "aktionscode", "rabatt", "code", "coupon", "nachlass",
    "ermassigung", "angebot", "sale", "prozent",
    "gutschein", "deal",
  ],
  lieferung: [
    "lieferung", "liefern", "lieferfrist", "versandkosten",
    "spediteur", "dhl", "hermes", "adresse", "paketshop",
  ],
  zahlung: [
    "zahlung", "bezahlen", "karte", "paypal", "uberweisung",
    "3x", "raten", "klarna", "apple pay",
    "sicher", "rechnung",
  ],
  reklamation: [
    "reklamation", "beschwerde", "problem", "unzufrieden",
    "arger", "betrug", "skandalos",
    "inakzeptabel", "beanstanden",
  ],
  kundendienst: [
    "kundendienst", "kundenservice", "kundensupport",
    "treuepunkte", "punkte", "programm", "mitglied",
    "garantie", "hilfe",
  ],
  bewertung: [
    "bewertung", "review", "bewerten", "evaluation", "benoten",
    "note", "kommentar", "feedback", "stern",
    "empfehlen", "zufrieden",
  ],
  katalog: [
    "katalog", "kollektion", "neuheit", "produkt",
    "artikel", "kleid", "hose", "jeans",
    "jacke", "tasche", "schuh", "accessoire",
    "ansehen", "durchsuchen",
  ],
  "verlassener warenkorb": [
    "warenkorb", "cart", "vergessen", "abschliessen",
    "checkout", "bestatigen", "bestellung abschliessen",
  ],
  "menschlicher kontakt": [
    "mensch", "berater", "agent", "person",
    "telefon", "email", "weiterleiten",
    "sprechen", "jemand",
  ],
  wunschliste: [
    "wunschliste", "favoriten", "wunsche", "liste", "sparen",
    "fur spater",
  ],
  "whatsapp kampagne": [
    "whatsapp kampagne", "warenkorb recovery", "warenkorb erinnerung",
    "warenkorb wiederherstellung",
  ],
};

const merged = mergeWithVocalisDE(ECOMMERCE_INTENTS_DE, ECOMMERCE_KEYWORDS_DE);

export const ecommerceConfigDE: SimulatorConfig = {
  botName: "ModaChic",
  botAvatar: "MC",
  welcomeMessage:
    "Willkommen bei **ModaChic**! Ich bin Ihr personlicher Shopping-Assistent, angetrieben von **Vocalis AI**.\n\nIch kann Ihnen bei Bestellungen, Rucksendungen, Grossen, Aktionen und vielem mehr helfen. Wie kann ich Ihnen helfen?",
  initialQuickReplies: [
    { label: "Bestellung verfolgen", value: "bestellung verfolgen" },
    { label: "Rucksendung / Umtausch", value: "rucksendung" },
    { label: "Grosenfuhrer", value: "grosenfuhrer" },
    { label: "Aktionscode", value: "aktionscode" },
    { label: "Katalog ansehen", value: "katalog" },
    { label: "Berater kontaktieren", value: "menschlicher kontakt" },
  ],
  intents: merged.intents,
  keywords: merged.keywords,
  fallback: createFallbackDE([
    { label: "Bestellung verfolgen", value: "bestellung verfolgen" },
    { label: "Grosenfuhrer", value: "grosenfuhrer" },
    { label: "Aktionscode", value: "aktionscode" },
    { label: "Berater kontaktieren", value: "menschlicher kontakt" },
  ]),
};

export default ecommerceConfigDE;
