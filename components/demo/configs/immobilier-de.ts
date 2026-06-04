import type { SimulatorConfig } from "../WhatsAppSimulator";
import { mergeWithVocalisDE, createFallbackDE } from "./vocalis-features-de";

const IMMOBILIER_INTENTS_DE = {
  hallo: {
    text: "Guten Tag! Willkommen bei **ImmoPrestige**.\n\nIch bin Ihr KI-Assistent, 24 Stunden verfugbar. Was suchen Sie heute?\n\n- Eine Immobilie kaufen oder mieten?\n- Ihr Objekt bewerten lassen?\n- Einen Termin mit einem Makler?",
    delay: 1200,
    quickReplies: [
      { label: "Kaufen", value: "immobilie suchen" },
      { label: "Mieten", value: "mieten" },
      { label: "Bewertung", value: "bewertung" },
      { label: "Makler-Termin", value: "makler termin" },
      { label: "KI-Telefonie", value: "telefonie" },
      { label: "WhatsApp Funktionen", value: "whatsapp features" },
    ],
  },
  "immobilie suchen": {
    text: "Perfekt, starten wir Ihre personliche Suche.\n\nUm Ihnen die besten Objekte vorzuschlagen, benotige ich einige Kriterien:\n\n**Budget:** Was ist Ihr Maximalbudget?\n**Typ:** Wohnung, Haus, Villa, Loft?\n**Flache:** Mindestens wieviel m2?\n**Lage:** Welche Stadt oder Viertel?\n**Zimmer:** Wie viele Zimmer?\n\nZum Beispiel: *\"3-Zimmer-Wohnung, 80m2, Hamburg Altona, Budget estimation personnalisee\"*",
    delay: 2000,
    quickReplies: [
      { label: "Wohnung < 400K", value: "verfugbarkeiten" },
      { label: "Haus Vorstadt", value: "verfugbarkeiten" },
      { label: "Studio Kapitalanlage", value: "kapitalanlage" },
      { label: "Verfugbarkeiten ansehen", value: "verfugbarkeiten" },
    ],
  },
  "objektfoto": {
    text: "Schicken Sie mir ein Foto Ihres Objekts und unsere **KI-Vision** analysiert automatisch:\n\n- Geschatzte Raumflachen\n- Allgemeiner Zustand (neu / gut / renovierungsbedurftig)\n- Starken: Helligkeit, Raumhohe, Materialien\n- Architekturstil\n- Valorisierungsvorschlage vor dem Verkauf\n\nDie Analyse dauert ca. 10 Sekunden. Senden Sie Ihr Foto!",
    delay: 1800,
    quickReplies: [
      { label: "Wert schatzen", value: "bewertung" },
      { label: "Energieausweis", value: "energieausweis" },
      { label: "Zum Verkauf anbieten", value: "maklerauftrag" },
    ],
  },
  besichtigung: {
    text: "Planen wir Ihre Besichtigung.\n\n**Verfugbare Termine diese Woche:**\n\n- Dienstag 14:00 - 16:00\n- Mittwoch 10:00 - 12:00\n- Donnerstag 17:00 - 19:00\n- Samstag 09:00 - 12:00\n\nWelcher Termin passt Ihnen? Ich schicke Ihnen die Bestatigung + genaue Adresse + Anfahrtsplan per WhatsApp.\n\nSie erhalten auch eine Erinnerung 2 Stunden vor der Besichtigung.",
    delay: 1500,
    quickReplies: [
      { label: "Dienstag 14 Uhr", value: "makler termin" },
      { label: "Samstag morgen", value: "makler termin" },
      { label: "Andere Termine", value: "makler termin" },
      { label: "Virtuelle Besichtigung", value: "virtuelle besichtigung" },
    ],
  },
  bewertung: {
    text: "Unsere **KI-Bewertung** kombiniert Daten aus:\n\n- Aktueller Preis pro m2 im Viertel (Echtzeit)\n- Vergleichbare aktuelle Transaktionen\n- Zustand und Ausstattung des Objekts\n- Lokale Markttrends\n\n**Fur die Bewertung Ihres Objekts geben Sie an:**\n1. Adresse oder Viertel\n2. Wohnflache\n3. Zimmeranzahl\n4. Etage + Aufzug\n5. Baujahr\n\n*Kostenlose Bewertung in 30 Sekunden!*",
    delay: 1800,
    quickReplies: [
      { label: "Wohnung 75m2 Hamburg", value: "verfugbarkeiten" },
      { label: "Haus 120m2 Munchen", value: "verfugbarkeiten" },
      { label: "Foto senden", value: "objektfoto" },
      { label: "Bewertungs-Termin", value: "makler termin" },
    ],
  },
  finanzierung: {
    text: "**Immobilienkreditrechner**\n\nStandardparameter:\n- Zinssatz: 3,45% auf 25 Jahre\n- Empfohlenes Eigenkapital: Mind. 20%\n- Versicherung: 0,34%/Jahr\n\n**Beispiel fur estimation personnalisee:**\n- Monatliche Rate: estimation personnalisee\n- Gesamtkreditkosten: estimation personnalisee\n- Mindest-Eigenkapital: estimation personnalisee\n\n**Partnerbanken**: Commerzbank, Deutsche Bank, ING, Sparkasse\n\nNennen Sie Ihr Budget und ich simuliere fur Sie!",
    delay: 2000,
    quickReplies: [
      { label: "250K simulieren", value: "finanzierung" },
      { label: "400K simulieren", value: "finanzierung" },
      { label: "Finanzierungsberater", value: "makler termin" },
      { label: "Erforderliche Dokumente", value: "dokumente" },
    ],
  },
  dokumente: {
    text: "**Erforderliche Dokumente fur einen Kauf:**\n\n**Kaufer:**\n- Personalausweis / Reisepass\n- Letzte 3 Gehaltsabrechnungen\n- Letzte 2 Steuerbescheide\n- Kontoauszuge (3 Monate)\n- Wohnsitznachweis\n- Darlehenszusage der Bank\n\n**Verkaufer:**\n- Grundbuchauszug\n- Pflichtgutachten (Energieausweis, Asbest, Blei...)\n- Protokolle der letzten 3 Eigentumerversammlungen\n- Grundsteuer\n\nIch kann Ihnen die vollstandige Checkliste per WhatsApp senden!",
    delay: 1800,
    quickReplies: [
      { label: "Vollstandige Checkliste", value: "dokumente" },
      { label: "Energieausweis & Gutachten", value: "energieausweis" },
      { label: "Kaufnebenkosten", value: "nebenkosten" },
      { label: "Notar kontaktieren", value: "makler termin" },
    ],
  },
  maklerauftrag: {
    text: "**Maklerauftragsarten bei ImmoPrestige:**\n\n**Einfachauftrag**\n- Sie behalten die Freiheit, selbst zu verkaufen\n- Provision: 4,5% inkl. MwSt.\n\n**Alleinauftrag** (empfohlen)\n- Verkauf im Schnitt 2x schneller\n- Provision: 3,8% inkl. MwSt.\n- Professionelle Fotos + 3D-Besichtigung inklusive\n- Veroffentlichung auf 40+ Portalen\n\n**Teilalleinauftrag**\n- Sie konnen auch uber einen anderen Makler verkaufen\n- Provision: 4% inkl. MwSt.\n\nLaufzeit: 3 Monate, verlagerbar. Welcher Auftrag interessiert Sie?",
    delay: 2000,
    quickReplies: [
      { label: "Alleinauftrag", value: "makler termin" },
      { label: "Erst bewerten", value: "bewertung" },
      { label: "Detaillierte Kosten", value: "nebenkosten" },
      { label: "Makler-Termin", value: "makler termin" },
    ],
  },
  viertel: {
    text: "**KI-Viertelanalyse**\n\nNennen Sie das Viertel und ich zeige Ihnen:\n\n- **Schulen**: Kitas, Grundschulen, Gymnasien (Note + Entfernung)\n- **Verkehr**: U-Bahn, Bus, Bahn (Fahrtzeit)\n- **Einkaufen**: Supermarkte, Markte, Apotheken\n- **Gesundheit**: Krankenhauser, Arzte, Spezialisten\n- **Sicherheit**: Viertelstatistiken\n- **Preis/m2**: Entwicklung uber 5 Jahre + Trend\n- **Lebensqualitat**: Grunflachen, Larmstorun\n\n*Beispiel: Tippen Sie \"Viertel Hamburg Altona\" oder \"Berlin Prenzlauer Berg\"*",
    delay: 1800,
    quickReplies: [
      { label: "Hamburg Blankenese", value: "viertel" },
      { label: "Berlin Mitte", value: "viertel" },
      { label: "Munchen Schwabing", value: "viertel" },
      { label: "Immobilie suchen", value: "immobilie suchen" },
    ],
  },
  verfugbarkeiten: {
    text: "**Verfugbare Objekte entsprechend Ihren Kriterien:**\n\n1. **3-Zi-Wohnung - Hamburg Altona** - 72m2\n   Preis: estimation personnalisee | estimation personnalisee\n   2 SZ, Balkon, Keller, frisch renoviert\n\n2. **Haus 5-Zi - Hamburg Blankenese** - 130m2\n   Preis: estimation personnalisee | Garten 200m2\n   4 SZ, Garage, S-Bahn-nah\n\n3. **Studio - Hamburg Eimsbutteli** - 28m2\n   Preis: estimation personnalisee | ideal als Kapitalanlage\n   Mietrendite: 4,2%\n\n4. **Loft - Hamburg Hafencity** - 95m2\n   Preis: estimation personnalisee | Industriestil\n   Dachterrasse 30m2, Stellplatz\n\n5 weitere Objekte verfugbar. Welches interessiert Sie?",
    delay: 2200,
    quickReplies: [
      { label: "3-Zi-Wohnung ansehen", value: "besichtigung" },
      { label: "Haus-Details", value: "besichtigung" },
      { label: "Suche verfeinern", value: "immobilie suchen" },
      { label: "Finanzierung simulieren", value: "finanzierung" },
    ],
  },
  angebot: {
    text: "**Kaufangebot machen**\n\nUm Ihr Angebot einzureichen, bereite ich den Vorgang vor:\n\n1. **Betreffendes Objekt**: Referenz oder Adresse\n2. **Angebotsbetrag**: Vorgeschlagener Preis\n3. **Bedingungen**: Darlehen, Frist, Renovierungen...\n4. **Gultigkeit**: Dauer des Angebots (Standard 7 Tage)\n\nUnser Makler kontaktiert Sie innerhalb von **maximal 2 Stunden**.\n\nDas Angebot ist unverbindlich bis zur Unterzeichnung des Vorvertrags.\n\nMochten Sie Ihr Angebot formulieren?",
    delay: 1800,
    quickReplies: [
      { label: "Angebot machen", value: "makler termin" },
      { label: "Preis verhandeln", value: "makler termin" },
      { label: "Finanzierungsfragen", value: "finanzierung" },
      { label: "Erforderliche Dokumente", value: "dokumente" },
    ],
  },
  "vorgang verfolgen": {
    text: "**Verfolgung Ihrer Transaktion**\n\nGeben Sie Ihre Vorgangsnummer ein und ich zeige Ihnen den Echtzeit-Status:\n\n**Verfolgte Schritte:**\n- Angebot angenommen\n- Vorvertrag unterzeichnet\n- Aufschiebende Bedingungen (Darlehen, Gutachten)\n- Widerrufsfrist (14 Tage)\n- Darlehenszusage\n- Notarielle Beurkundung\n\nSie erhalten eine **WhatsApp-Benachrichtigung** bei jedem Schritt.\n\n*Format Referenz: IMMO-2026-XXXX*",
    delay: 1800,
    quickReplies: [
      { label: "Referenz eingeben", value: "vorgang verfolgen" },
      { label: "Meinen Makler kontaktieren", value: "makler termin" },
      { label: "Fehlende Dokumente", value: "dokumente" },
      { label: "Restliche Kosten", value: "nebenkosten" },
    ],
  },
  kapitalanlage: {
    text: "**Kapitalanlage-Moglichkeiten**\n\n**Top 3 des Monats:**\n\n1. **Studio Hamburg Altona** - 22m2 - estimation personnalisee\n   Geschatzte Miete: estimation personnalisee\n   Bruttorendite: **4,6%**\n\n2. **2-Zi Hamburg Eimsbutteli** - 42m2 - estimation personnalisee\n   Geschatzte Miete: estimation personnalisee\n   Bruttorendite: **4,4%**\n\n3. **1-Zi Bremen** - 30m2 - estimation personnalisee\n   Geschatzte Miete: estimation personnalisee\n   Bruttorendite: **4,5%**\n\nWir analysieren: Rendite, Steueroptimierung, Wertsteigerung, Nachfrage.\n\nWelche Art von Kapitalanlage interessiert Sie?",
    delay: 2200,
    quickReplies: [
      { label: "Mobliert vermieten", value: "kapitalanlage" },
      { label: "Rendite simulieren", value: "finanzierung" },
      { label: "Steueroptimierung", value: "nebenkosten" },
    ],
  },
  mieten: {
    text: "**Mietangebote**\n\nVerfugbare Mietobjekte:\n\n1. **2-Zi mobliert - Hamburg Mitte** - 45m2\n   Miete: estimation personnalisee inkl. NK\n   Frei ab 1. Mai\n\n2. **3-Zi leer - Hamburg Eppendorf** - 68m2\n   Miete: estimation personnalisee kalt\n   Sofort verfugbar\n\n3. **Studio - Hamburg Altona** - 25m2\n   Miete: estimation personnalisee inkl. NK\n   Frei ab 15. Mai\n\n**Mietbewerbung:** Letzte 3 Gehaltsabrechnungen, Steuerbescheid, Ausweis, Burge (oder Mieterscbutzbund).\n\nFur welches Objekt interessieren Sie sich?",
    delay: 2000,
    quickReplies: [
      { label: "2-Zi besichtigen", value: "besichtigung" },
      { label: "Mietbewerbung", value: "dokumente" },
      { label: "Buge / Kautionshilfe", value: "dokumente" },
      { label: "Andere Mietobjekte", value: "mieten" },
    ],
  },
  energieausweis: {
    text: "**Pflichtgutachten beim Immobilienverkauf**\n\n**Energieausweis (DEA)**:\n- Energieklassen A bis G (F und G = Energieschleudern)\n- Pflicht fur Kauf UND Vermietung\n- Gultigkeit: 10 Jahre\n\n**Weitere Pflichtgutachten:**\n- Asbest (vor 1995)\n- Blei (vor 1972)\n- Elektrik / Gas (> 15 Jahre)\n- Termiten (Risikogebiete)\n- Hochwasser (Risikogebiete)\n- Wohnflache (Wohnflachenberechnung)\n\n**Durchschnittliche Kosten Gesamtpaket:** 350 - estimation personnalisee\n\nUnsere Partnersachverstandigen intervenieren innerhalb von 48 Stunden.",
    delay: 2000,
    quickReplies: [
      { label: "Gutachter-Termin", value: "makler termin" },
      { label: "Renovierungskosten", value: "bewertung" },
      { label: "Sanierungsforderungen", value: "nebenkosten" },
      { label: "Zum Verkauf anbieten", value: "maklerauftrag" },
    ],
  },
  "makler termin": {
    text: "**Termin mit einem ImmoPrestige-Makler**\n\nUnsere Makler sind verfugbar:\n- **Montag - Freitag**: 9 - 19 Uhr\n- **Samstag**: 9 - 17 Uhr\n\n**Verfugbare Formate:**\n- Im Buro (Hamburg, Berlin, Munchen, Frankfurt)\n- Vor Ort (Radius 30 km)\n- Per Video (Zoom / WhatsApp Video)\n- Telefonisch\n\nNennen Sie Ihre Praferenz und ich buche einen Termin.\n\nSie erhalten eine Bestatigung + automatische Erinnerung.",
    delay: 1500,
    quickReplies: [
      { label: "Termin im Buro", value: "makler termin" },
      { label: "Video-Termin", value: "makler termin" },
      { label: "Telefonruckruf", value: "makler termin" },
      { label: "Erst Objekte ansehen", value: "verfugbarkeiten" },
    ],
  },
  nebenkosten: {
    text: "**Aufschluss der Kaufnebenkosten**\n\n**Fur ein Objekt zu estimation personnalisee:**\n\n- **Grunderwerbsteuer**: audit gratuit (6%)\n- **Notar- und Grundbuchkosten**: audit gratuit (1%)\n- **Maklerprovision**: audit gratuit (3,8%)\n  *(oft im ausgewiesenen Preis enthalten)*\n- **Finanzierungskosten**: audit gratuit\n- **Sonstiges**: audit gratuit\n\n**Gesamter Kapitalbedarf: audit gratuit**\n\nNeubau = deutlich geringere Nebenkosten (~3,5% statt ~7%).",
    delay: 2000,
    quickReplies: [
      { label: "Gesamtkredit simulieren", value: "finanzierung" },
      { label: "Fur anderen Preis", value: "nebenkosten" },
      { label: "Neubau vs. Bestand", value: "kapitalanlage" },
      { label: "Notar kontaktieren", value: "makler termin" },
    ],
  },
  "virtuelle besichtigung": {
    text: "**Virtuelle Besichtigung KI**\n\nUnsere Losung kombiniert **Web-Widget** + **KI-Fotoanalyse**:\n\n**Integriertes Widget:**\n• Sprach- oder Text-Chat auf dem Objektexpose\n• Kaufer stellt Fragen in Echtzeit\n• KI antwortet mit Objektdetails\n• Besichtigungstermin in 1 Klick buchen\n\n**KI-Fotoanalyse:**\n• Fotos des Objekts senden\n• Geschatzte Flache pro Raum\n• Allgemeiner Zustand erkannt\n• Starken automatisch erkennt\n• Valorisierungsvorschlage\n\n**Vorteile:**\n• Vorab-Qualifizierung vor physischer Besichtigung\n• Physische Besichtigungen: **-40%** (nur echte Interessenten)\n• 24/7 verfugbar ohne Makler\n• Mehrsprachig fur internationale Kaufer",
    delay: 2400,
    quickReplies: [
      { label: "Web-Widget", value: "widget" },
      { label: "Foto senden", value: "objektfoto" },
      { label: "Besichtigung planen", value: "besichtigung" },
      { label: "Preise", value: "preis" },
    ],
  },
};

const IMMOBILIER_KEYWORDS_DE: Record<string, string[]> = {
  hallo: [
    "hallo", "hi", "guten tag", "hey", "guten abend", "servus", "moin",
  ],
  "immobilie suchen": [
    "suche", "suchen", "finden", "kaufen", "kauf", "objekt",
    "wohnung", "haus", "villa", "loft", "duplex",
    "zimmer", "schlafzimmer", "kriterien",
  ],
  objektfoto: [
    "foto", "bild", "analysieren", "fotoanalyse", "vision", "scannen",
    "foto senden",
  ],
  besichtigung: [
    "besichtigung", "besichtigen", "objekt ansehen", "termin", "wann",
    "verfugbar",
  ],
  bewertung: [
    "bewertung", "bewerten", "wert", "wieviel wert", "preis m2",
    "evaluierung", "bewertung", "preis je meter",
  ],
  finanzierung: [
    "kredit", "darlehen", "finanzierung", "hypothek", "monatliche rate", "zinssatz",
    "bank", "mortgage", "eigenkapital", "simulieren",
  ],
  dokumente: [
    "dokument", "papier", "kaufakte", "checkliste", "nachweis",
    "unterlagen", "gehaltsabrechnung", "steuerbescheid",
  ],
  maklerauftrag: [
    "maklerauftrag", "zum verkauf", "verkaufen", "alleinauftrag", "provision",
    "maklergebuhr",
  ],
  viertel: [
    "viertel", "schule", "verkehr", "u-bahn", "einkaufen", "umgebung",
    "umfeld", "nahe",
  ],
  verfugbarkeiten: [
    "verfugbar", "dispo", "lagerbestand", "angebote", "auswahl",
    "neuigkeiten", "neue objekte",
  ],
  angebot: [
    "angebot", "vorschlagen", "verhandeln", "verhandlung", "preis",
    "gegenangebot",
  ],
  "vorgang verfolgen": [
    "verfolgen", "vorgang", "fortschritt", "wie weit", "status", "referenz",
    "vorvertrag", "notarakt",
  ],
  kapitalanlage: [
    "investieren", "kapitalanlage", "rendite", "vermietung", "rentabilitat",
    "steueroptimierung",
  ],
  mieten: [
    "mieten", "mietung", "mieter", "mietvertrag", "miete", "buge",
    "kaution",
  ],
  energieausweis: [
    "energieausweis", "gutachten", "energie", "energieeffizienz",
    "energieschleuder", "asbest", "blei",
  ],
  "makler termin": [
    "makler", "berater", "buro", "treffen",
    "ruckruf", "kontakt",
  ],
  nebenkosten: [
    "nebenkosten", "notar", "grunderwerbsteuer", "kosten", "wieviel kostet", "honorar",
    "steuer",
  ],
  "virtuelle besichtigung": ["virtuelle besichtigung", "online besichtigung", "3d besichtigung", "fernbesichtigung"],
};

const merged = mergeWithVocalisDE(IMMOBILIER_INTENTS_DE, IMMOBILIER_KEYWORDS_DE);

export const immobilierConfigDE: SimulatorConfig = {
  botName: "ImmoPrestige IA",
  botAvatar: "IP",
  welcomeMessage:
    "Willkommen bei **ImmoPrestige**! Ich bin Ihr KI-Immobilienassistent.\n\nIch kann Ihnen helfen bei:\n- Immobiliensuche (Kauf/Miete)\n- Fotoanalyse eines Objekts\n- Bewertung einer Immobilie\n- Besichtigung planen\n- Finanzierung simulieren\n- Vorgang verfolgen\n\nWie kann ich Ihnen helfen?",
  initialQuickReplies: [
    { label: "Immobilie suchen", value: "immobilie suchen" },
    { label: "Mein Objekt bewerten", value: "bewertung" },
    { label: "Besichtigung buchen", value: "besichtigung" },
    { label: "Finanzierung simulieren", value: "finanzierung" },
    { label: "Verfugbare Objekte", value: "verfugbarkeiten" },
  ],
  intents: merged.intents,
  keywords: merged.keywords,
  fallback: createFallbackDE([
    { label: "Immobilie suchen", value: "immobilie suchen" },
    { label: "Mein Objekt bewerten", value: "bewertung" },
    { label: "Finanzierung simulieren", value: "finanzierung" },
    { label: "Makler-Termin", value: "makler termin" },
  ]),
};

export default immobilierConfigDE;
