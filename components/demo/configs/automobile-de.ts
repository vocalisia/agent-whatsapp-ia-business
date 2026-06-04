import type { SimulatorConfig, BotResponse } from "../WhatsAppSimulator";
import { mergeWithVocalisDE, createFallbackDE } from "./vocalis-features-de";

const sectorIntents: Record<string, BotResponse> = {
  hallo: {
    text: "Willkommen bei **AutoPrestige** ! Ich bin Ihr KI-Assistent.\n\nIch kann Ihnen helfen bei :\n- Dem idealen Fahrzeug finden\n- Probefahrt reservieren\n- Inzahlungnahme schatzen\n- Finanzierung simulieren\n\nWonach suchen Sie ?",
    delay: 1000,
    quickReplies: [
      { label: "Fahrzeug suchen", value: "fahrzeug" },
      { label: "Probefahrt", value: "probefahrt" },
      { label: "Inzahlungnahme", value: "inzahlungnahme" },
      { label: "Finanzierung", value: "finanzierung" },
    ],
  },

  fahrzeug: {
    text: "**Fahrzeugsuche AutoPrestige** :\n\nBitte teilen Sie uns Ihre Kriterien mit :\n\n**Unsere Kategorien :**\n- Kleinwagen (ab estimation personnalisee)\n- Limousinen (ab estimation personnalisee)\n- SUV & Crossover (ab estimation personnalisee)\n- Sportwagen (ab estimation personnalisee)\n- Elektro & Hybrid (ab estimation personnalisee)\n\n**Diese Woche im Angebot :**\n- **BMW 3er 320d** — estimation personnalisee | 2024 | 12.000 km\n- **Mercedes GLC 300e** — estimation personnalisee | 2025 | 5.000 km\n- **Audi A4 Avant** — estimation personnalisee | 2024 | 18.000 km\n- **Tesla Model 3** — estimation personnalisee | 2025 | 3.200 km\n\nWelche Fahrzeugkategorie interessiert Sie ?",
    delay: 2200,
    quickReplies: [
      { label: "SUV", value: "fahrzeug" },
      { label: "Elektro", value: "fahrzeug" },
      { label: "Probefahrt", value: "probefahrt" },
      { label: "Finanzierung", value: "finanzierung" },
    ],
  },

  probefahrt: {
    text: "**Probefahrt reservieren** :\n\nErleben Sie das Fahrerlebnis vor dem Kauf !\n\n**Fahrzeuge fur Probefahrten :**\n- BMW 3er — Limousine, Diesel/Benzin\n- Mercedes GLC — Plug-in-Hybrid-SUV\n- Audi A4 Avant — Premium Kombi\n- Tesla Model 3 — 100 % Elektro\n- VW Tiguan — Deutsches SUV\n\n**Nachste Termine :**\n- Samstag, 19. April — 10, 14, 16 Uhr\n- Montag, 21. April — 9, 11, 15 Uhr\n- Dienstag, 22. April — 10, 14 Uhr\n\n**Dauer :** 30 Minuten begleitete Fahrt\n**Dokumente :** Gultiger Fuhrerschein\n\nWelches Fahrzeug und welcher Termin ?",
    delay: 2000,
    quickReplies: [
      { label: "BMW Sa 10 Uhr", value: "probefahrt bestatigen" },
      { label: "Tesla Mo 11 Uhr", value: "probefahrt bestatigen" },
      { label: "Anderes Fahrzeug", value: "fahrzeug" },
      { label: "Anderer Termin", value: "probefahrt" },
    ],
  },

  "probefahrt bestatigen": {
    text: "Probefahrt bestatigt !\n\n**Fahrzeug :** BMW 3er 320d\n**Datum :** Samstag, 19. April 2026\n**Uhrzeit :** 10:00 Uhr (30 Min)\n**Adresse :** AutoPrestige — Autohaus Hauptstrasse 120\n\n**Begleitung :** Thomas M. (Verkaufsberater)\n\nSie erhalten :\n- Bestatigung per WhatsApp\n- Erinnerung am Vorabend\n- Anfahrt + Parkplatz\n\nBitte Fuhrerschein mitbringen.\nBis Samstag !",
    delay: 1800,
    quickReplies: [
      { label: "Danke !", value: "danke" },
      { label: "Finanzierung", value: "finanzierung" },
    ],
  },

  finanzierung: {
    text: "**Finanzierungsrechner AutoPrestige** :\n\nBeispiel fur einen **BMW 3er** zu estimation personnalisee :\n\n**Klassischer Kredit :**\n- Anzahlung : estimation personnalisee\n- Laufzeit : 48 Monate\n- Rate : **estimation personnalisee**\n- Effektivzins : 4,9 %\n\n**Leasing :**\n- Anzahlung : estimation personnalisee\n- Laufzeit : 36 Monate / 15.000 km/Jahr\n- Rate : **estimation personnalisee**\n- Restwert : estimation personnalisee\n\n**Full-Service-Leasing :**\n- Alles inklusive (Versicherung + Wartung)\n- **estimation personnalisee** uber 36 Monate\n\nUnsere Partner : **Deutsche Bank, Santander, VW Bank**\nAntwort innerhalb von **24 Stunden**. Personliche Simulation gewunscht ?",
    delay: 2400,
    quickReplies: [
      { label: "Personl. Simulation", value: "finanzierung" },
      { label: "Leasing-Details", value: "finanzierung" },
      { label: "Probefahrt", value: "probefahrt" },
      { label: "Inzahlungnahme", value: "inzahlungnahme" },
    ],
  },

  inzahlungnahme: {
    text: "**Inzahlungnahme AutoPrestige** :\n\nFur die Schatzung Ihres Fahrzeugs benotige ich :\n- Marke und Modell\n- Erstzulassungsjahr\n- Kilometerstand\n- Antrieb (Benzin/Diesel/Hybrid/Elektro)\n\n**Schatzungsbeispiel :**\n- VW Golf VIII — 2021 — 45.000 km — Diesel\n- **Schatzwert : 14.500 — estimation personnalisee**\n\n**Unser Versprechen :**\n- Kostenlose & unverbindliche Schatzung\n- Preis garantiert fur **7 Tage**\n- Ankauf auch ohne Kauf bei uns\n- Uberweisung innerhalb **48 Stunden** nach Einigung\n\nSchicken Sie mir die Daten oder ein Foto Ihres Fahrzeugs !",
    delay: 2000,
    quickReplies: [
      { label: "Foto senden", value: "fahrzeugfoto" },
      { label: "Fahrzeuge im Bestand", value: "fahrzeug" },
      { label: "Finanzierung", value: "finanzierung" },
      { label: "Zuruck zur Ubersicht", value: "hallo" },
    ],
  },

  fahrzeugfoto: {
    text: "Danke fur das Foto ! **KI-Analyse lauft**...\n\n**Analyseergebnis :**\n\n- **Erkanntes Fahrzeug :** Volkswagen Golf IV — 2020\n- **Karosseriezustand :** Gut (kleiner Kratzer Beifahrertür)\n- **Lackzustand :** Sehr gut (Farbe Platingrau)\n- **Felgen :** Guter Zustand, 1 leichte Schramme\n\n**KI-Schatzung :** 12.800 — estimation personnalisee\n\n**Fur genauere Schatzung :**\n- Genauen Kilometerstand ?\n- Scheckheft gepflegt ?\n- Hauptuntersuchung (HU) gultig ?\n\nEin Experte kann innerhalb von **24 Stunden** nach Sichtprufung bestatigen.",
    delay: 2800,
    quickReplies: [
      { label: "Inzahlungnahme bestatigen", value: "inzahlungnahme" },
      { label: "Sichtprufung", value: "inzahlungnahme" },
      { label: "Neuwagen ansehen", value: "fahrzeug" },
      { label: "Zuruck zur Ubersicht", value: "hallo" },
    ],
  },

  wartung: {
    text: "**Werkstatt AutoPrestige** :\n\n**Unsere Leistungen :**\n- **Inspektion komplett** — ab estimation personnalisee (Olwechsel + Filter + Diagnose)\n- **Olwechsel** — estimation personnalisee (Ol + Filter)\n- **Reifen** — ab estimation personnalisee (Montage + Auswuchten inklusive)\n- **Bremsen** — ab estimation personnalisee (Vorderbremsbelage)\n- **Klimaanlage** — estimation personnalisee (Befulllung + Desinfektion)\n- **Spurvermessung** — estimation personnalisee\n\n**Nachste Termine :**\n- Montag, 21. April — 8, 10, 14 Uhr\n- Mittwoch, 23. April — 9, 11 Uhr\n- Freitag, 25. April — 8, 15 Uhr\n\n**Kostenloses Leihfahrzeug** fur Arbeiten > 2 Stunden.\n\nWelche Leistung mochten Sie ?",
    delay: 2200,
    quickReplies: [
      { label: "Inspektion", value: "wartung bestatigen" },
      { label: "Reifen", value: "wartung bestatigen" },
      { label: "Wartungserinnerung", value: "wartungserinnerung" },
      { label: "Zuruck zur Ubersicht", value: "hallo" },
    ],
  },

  "wartung bestatigen": {
    text: "Werkstatttermin bestatigt !\n\n**Leistung :** Inspektion komplett\n**Datum :** Montag, 21. April 2026 — 8:00 Uhr\n**Geschatzte Dauer :** 2,5 Stunden\n**Leihfahrzeug :** Ja (VW Polo)\n\n**Inklusive :**\n- Motorolwechsel\n- Filterwechsel (Luft, Ol, Innenraum)\n- Elektronikdiagnose (32 Punkte)\n- Flussigkeiten + Beleuchtung\n\n**Preis :** estimation personnalisee inkl. MwSt.\n\nWhatsApp-Erinnerung am Vorabend. Bitte Fahrzeugschein mitbringen.",
    delay: 1800,
    quickReplies: [
      { label: "Danke !", value: "danke" },
      { label: "Termin absagen", value: "wartung" },
    ],
  },

  wartungserinnerung: {
    text: "**Automatische Wartungserinnerungen** :\n\nUnsere KI verfolgt den Zustand Ihres Fahrzeugs :\n\n**Ihr Fahrzeug :** BMW 3er — 2024\n\n**Anstehende Wartungen :**\n- **Inspektion** — In 2.200 km (geplant Mai 2026)\n- **Reifen** — Abrieb 40 %, Wechsel geplant August 2026\n- **HU (TUV)** — Fallig September 2026\n- **Bremsbelage** — OK, Prufung in 15.000 km\n\n**Aktive Alerts :**\n- WhatsApp 30 Tage vor Falligkeitsdatum\n- SMS 7 Tage vorher\n- Automatische Terminvorschlag\n\nMochten Sie Ihre Alerts anpassen ?",
    delay: 2000,
    quickReplies: [
      { label: "Alerts anpassen", value: "wartungserinnerung" },
      { label: "Wartung buchen", value: "wartung" },
      { label: "Hauptuntersuchung", value: "hauptuntersuchung" },
      { label: "Zuruck zur Ubersicht", value: "hallo" },
    ],
  },

  garantie: {
    text: "**Garantien AutoPrestige** :\n\n**Neufahrzeuge :**\n- Herstellergarantie : **2 bis 5 Jahre** je nach Marke\n- Verlangerung moglich bis **7 Jahre / 150.000 km**\n\n**Gebrauchtfahrzeuge :**\n- **AutoPrestige-Garantie** : mindestens 12 Monate\n- Verlangerung **24 oder 36 Monate** verfugbar\n- Abdeckung : Motor, Getriebe, Lenkung, Fahrwerk, Elektronik\n\n**Unsere Versprechen :**\n- Ersatzfahrzeug wahrend Reparatur\n- Pannenhilfe 24/7 inklusive\n- Keine Selbstbeteiligung fur abgedeckte Teile\n\nIhre aktuelle Garantie lauft bis **15.01.2028**.",
    delay: 2000,
    quickReplies: [
      { label: "Garantie verlangern", value: "garantie" },
      { label: "Reklamation", value: "garantie" },
      { label: "Wartung", value: "wartung" },
      { label: "Zuruck zur Ubersicht", value: "hallo" },
    ],
  },

  ersatzteile: {
    text: "**Ersatzteile AutoPrestige** :\n\n**Verfugbarkeit :**\n- Original-Herstellerteile\n- Zertifizierte Gleichwertigteile\n- Zubehor und Ausrustung\n\n**Schnellsuche :**\nTeilen Sie uns Ihr Fahrzeug + das gewunschte Teil mit.\n\n**Beispiele :**\n- Olfilter BMW 3er — **estimation personnalisee** (auf Lager)\n- Vorderbremsbelage Mercedes GLC — **estimation personnalisee** (verfugbar J+1)\n- Batterie Audi A4 — **estimation personnalisee** (auf Lager)\n\n**Services :**\n- Lieferung ins Autohaus oder nach Hause\n- Montage in der Werkstatt (Vorzugspreis)\n- 2 Jahre Garantie auf alle Teile\n\nWelches Teil suchen Sie ?",
    delay: 2000,
    quickReplies: [
      { label: "Teil suchen", value: "ersatzteile" },
      { label: "Bestellen", value: "ersatzteile" },
      { label: "Werkstatttermin", value: "wartung" },
      { label: "Zuruck zur Ubersicht", value: "hallo" },
    ],
  },

  gebraucht: {
    text: "**Gebrauchtfahrzeuge AutoPrestige** :\n\nAlle unsere Fahrzeuge sind **150-Punkte-gepruft** :\n\n**Aktuelle Auswahl :**\n- **VW Tiguan GT** — 2023 — 28.000 km — estimation personnalisee\n- **VW Golf 8 R-Line** — 2022 — 35.000 km — estimation personnalisee\n- **Skoda Octavia** — 2024 — 12.000 km — estimation personnalisee\n- **BMW X1 xDrive** — 2023 — 22.000 km — estimation personnalisee\n- **Mercedes A-Klasse** — 2024 — 8.000 km — estimation personnalisee\n\n**Vorteile Gebrauchtwagen AutoPrestige :**\n- Mindestens 12 Monate Garantie\n- Vollstandige zertifizierte Fahrzeughistorie\n- Inzahlungnahme Ihres alten Fahrzeugs\n- Massgeschneiderte Finanzierung\n\nInteressiert Sie ein Fahrzeug ?",
    delay: 2400,
    quickReplies: [
      { label: "VW Tiguan Probefahrt", value: "probefahrt" },
      { label: "Finanzierung", value: "finanzierung" },
      { label: "Inzahlungnahme", value: "inzahlungnahme" },
      { label: "Zuruck zur Ubersicht", value: "hallo" },
    ],
  },

  angebote: {
    text: "**Sonderangebote AutoPrestige** :\n\n**Fruhling 2026 :**\n- **-estimation personnalisee** auf BMW 1er- und 3er-Modelle\n- **Leasing ab estimation personnalisee** auf VW Tiguan (estimation personnalisee Anzahlung)\n- **Umweltbonus** : bis zu estimation personnalisee Elektrofahrzeuge\n- **3 Jahre Inspektion gratis** beim Neuwagenkauf\n\n**Wochenend-Flash :**\n- Doppelte Inzahlungnahme (+10 % auf Schatzung)\n- Gratis-Reifensatz auf Gebraucht-SUVs\n\n**Gultig bis 30. April 2026.**\n\nJetzt profitieren !",
    delay: 2000,
    quickReplies: [
      { label: "BMW im Angebot", value: "fahrzeug" },
      { label: "Leasing simulieren", value: "finanzierung" },
      { label: "Umweltbonus", value: "fahrzeug" },
      { label: "Zuruck zur Ubersicht", value: "hallo" },
    ],
  },

  kfzversicherung: {
    text: "**KFZ-Versicherung — AutoPrestige-Partner** :\n\nWir arbeiten mit den besten Versicherern zusammen :\n\n**Ausgehandelte Angebote :**\n- **Vollkasko** — ab estimation personnalisee (50 % Schadenfreiheitsrabatt)\n- **Teilkasko+** — ab estimation personnalisee\n- **Jungfahrer** — ab estimation personnalisee\n\n**In unseren Angeboten inklusive :**\n- Pannenhilfe 0 km 24/7\n- Ersatzfahrzeug\n- Scheibenbruch ohne Selbstbeteiligung\n- Rechtsschutz\n\n**Partner :** Allianz, HUK-Coburg, ADAC, Zurich\n\nKostenlose Simulation in **2 Minuten**.\nAngebot per WhatsApp gesendet.",
    delay: 2000,
    quickReplies: [
      { label: "Versicherung simulieren", value: "kfzversicherung" },
      { label: "Fahrzeugfinanzierung", value: "finanzierung" },
      { label: "Fahrzeuge", value: "fahrzeug" },
      { label: "Zuruck zur Ubersicht", value: "hallo" },
    ],
  },

  hauptuntersuchung: {
    text: "**Hauptuntersuchung (HU/TUV) — AutoPrestige** :\n\n**Unser anerkanntes Zentrum :**\n- Regelmaßige Hauptuntersuchung (HU)\n- Nachprufung\n- Freiwillige Prufung (vor Kauf/Verkauf)\n\n**Preise :**\n- HU standard : **estimation personnalisee**\n- Nachprufung : **estimation personnalisee**\n- HU + Vorabcheck : **estimation personnalisee** (empfohlen)\n\n**Nachste Termine :**\n- Donnerstag, 24. April — 8, 10, 14, 16 Uhr\n- Freitag, 25. April — 9, 11 Uhr\n\n**Ihr Fahrzeug :** HU fallig vor **15.09.2026**\n\n**Dauer :** ca. 45 Minuten\nFahrzeug noch am gleichen Tag abholbereit.",
    delay: 1800,
    quickReplies: [
      { label: "HU buchen", value: "wartung bestatigen" },
      { label: "HU-Erinnerung", value: "wartungserinnerung" },
      { label: "Wartung", value: "wartung" },
      { label: "Zuruck zur Ubersicht", value: "hallo" },
    ],
  },

  lieferung: {
    text: "**Lieferoptionen AutoPrestige** :\n\n**Im Autohaus :**\n- Personliche Ubergabe mit Ihrem Berater\n- Vollstandige Fahrzeugvorstellung (1 Std)\n- Einweisung + Konfiguration\n- Kostenlos\n\n**Nach Hause :**\n- Lieferung per Tieflader\n- Radius 100 km : **estimation personnalisee**\n- Radius 200 km : **estimation personnalisee**\n- Deutschlandweit : **auf Anfrage**\n\n**Lieferzeiten :**\n- Lagerfahrzeug : **48 - 72 Stunden**\n- Werksbestellung : **3 bis 6 Monate** je nach Modell\n\nUbergabe der Dokumente (Fahrzeugschein, Versicherung) am Liefertag.",
    delay: 2000,
    quickReplies: [
      { label: "Lieferung nach Hause", value: "lieferung" },
      { label: "Fahrzeuge im Bestand", value: "fahrzeug" },
      { label: "Finanzierung", value: "finanzierung" },
      { label: "Zuruck zur Ubersicht", value: "hallo" },
    ],
  },
};

const sectorKeywords: Record<string, string[]> = {
  hallo: ["hallo", "hi", "hey", "guten morgen", "guten tag", "guten abend", "servus", "moin"],
  fahrzeug: ["fahrzeug", "auto", "wagen", "modell", "limousine", "suv", "kleinwagen", "sportwagen", "elektro", "hybrid", "neu", "suchen"],
  probefahrt: ["probefahrt", "testen", "ausprobieren", "test drive", "fahren", "fahrt"],
  finanzierung: ["finanzierung", "kredit", "leasing", "rate", "monatlich", "zahlen", "darlehen", "zinsen"],
  inzahlungnahme: ["inzahlungnahme", "ankauf", "verkaufen", "schatzen", "schatzung", "argus", "eintauschen"],
  fahrzeugfoto: ["foto", "bild", "zustand", "kratzer", "karosserie", "schaden", "unfall"],
  wartung: ["wartung", "inspektion", "olwechsel", "reifen", "bremsen", "klimaanlage", "spurvermessung", "reparatur", "werkstatt", "mechaniker"],
  wartungserinnerung: ["erinnerung", "alert", "nachricht", "fallig", "nachste wartung"],
  garantie: ["garantie", "verlangerung", "abdeckung", "panne", "reklamation", "versicherung panne"],
  ersatzteile: ["ersatzteil", "ersatzteile", "filter", "batterie", "gluhbirne", "wischer", "zubehor"],
  gebraucht: ["gebrauchtwagen", "gebraucht", "occasion", "km", "kilometerstand"],
  angebote: ["angebot", "sonderangebot", "promo", "rabatt", "reduziert", "sale", "flash", "deal", "schnappchen"],
  kfzversicherung: ["versicherung", "versichern", "vollkasko", "teilkasko", "schadenfreiheit", "allianz", "huk"],
  hauptuntersuchung: ["hauptuntersuchung", "hu", "tuv", "dekra", "nachprufung", "inspection"],
  lieferung: ["lieferung", "liefern", "erhalten", "nach hause", "transport", "tieflader", "lieferfrist"],
};

const merged = mergeWithVocalisDE(sectorIntents, sectorKeywords);

export const automobileConfigDE: SimulatorConfig = {
  botName: "AutoPrestige IA",
  botAvatar: "AP",
  welcomeMessage:
    "Willkommen bei **AutoPrestige** ! Ich bin Ihr KI-Assistent.\n\nFahrzeugsuche, Probefahrt, Finanzierung, Inzahlungnahme, Wartung — ich kummere mich um alles.\n\nWie kann ich Ihnen helfen ?",
  initialQuickReplies: [
    { label: "Fahrzeug suchen", value: "fahrzeug" },
    { label: "Probefahrt", value: "probefahrt" },
    { label: "Inzahlungnahme", value: "inzahlungnahme" },
    { label: "Finanzierung", value: "finanzierung" },
    { label: "Wartung", value: "wartung" },
    { label: "Angebote", value: "angebote" },
  ],
  intents: merged.intents,
  keywords: merged.keywords,
  fallback: createFallbackDE([
    { label: "Fahrzeuge", value: "fahrzeug" },
    { label: "Probefahrt", value: "probefahrt" },
    { label: "Finanzierung", value: "finanzierung" },
    { label: "Wartung", value: "wartung" },
  ]),
};

export default automobileConfigDE;
