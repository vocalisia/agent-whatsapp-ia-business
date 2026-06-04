import type { SimulatorConfig, BotResponse } from "../WhatsAppSimulator";
import { mergeWithVocalisDE, createFallbackDE } from "./vocalis-features-de";

const sectorIntents: Record<string, BotResponse> = {
  hallo: {
    text: "Willkommen im **HotelLux** ! Ich bin Ihr KI-Concierge, rund um die Uhr verfugbar.\n\nIch kann Ihnen helfen bei :\n- Zimmerreservierung\n- Check-in / Check-out organisieren\n- Spa oder Restaurant reservieren\n- Ausfluge und Transfers organisieren\n- Concierge-Services\n\nWie kann ich Ihren Aufenthalt unvergesslich machen ?",
    delay: 1400,
    quickReplies: [
      { label: "Reservieren", value: "buchung" },
      { label: "Unsere Zimmer", value: "zimmer" },
      { label: "Spa & Wellness", value: "spa" },
      { label: "Restaurant", value: "hotel restaurant" },
    ],
  },

  buchung: {
    text: "**Zimmerreservierung**\n\nFur das ideale Zimmer bitte angeben :\n\n**Daten :** Anreise und Abreise\n**Typ :** Standard, Superior, Suite, Prestige\n**Reisende :** Anzahl Erwachsene und Kinder\n**Wunsche :** Meerblick, hohe Etage, Kingsize-Bett...\n\n**Beispiel :** *\"Meerblick-Suite, 2 Erwachsene, vom 15. bis 18. Mai\"*\n\n**Vorteil WhatsApp-Buchung :**\n- Bestpreis garantiert\n- Kostenloses Upgrade je nach Verfugbarkeit\n- Spates Check-out gratis\n\nWelche Daten sind Ihre ?",
    delay: 2000,
    quickReplies: [
      { label: "Zimmer ansehen", value: "zimmer" },
      { label: "Preise", value: "zimmerpreise" },
      { label: "Prestige-Suite", value: "zimmer" },
      { label: "Gruppen / Events", value: "gruppen" },
    ],
  },

  zimmer: {
    text: "**Unsere Zimmerkategorien :**\n\n**Standard** — 28 m²\nQueen-Bett, Marmorbad, Minibar\nAb estimation personnalisee\n\n**Superior** — 35 m²\nKingsize-Bett, Balkon, Gartenblick, Safe\nAb estimation personnalisee\n\n**Junior-Suite** — 50 m²\nSeparates Wohnzimmer, Whirlpool-Badewanne, Panoramablick\nAb estimation personnalisee\n\n**Prestige-Suite** — 75 m²\nPrivate Terrasse, Jacuzzi, Butler-Service\nAb estimation personnalisee\n\n**Penthouse** — 120 m²\nDuplex, privater Pool, Koch auf Anfrage\nAuf Anfrage\n\nAlle Zimmer inkl. Fruhstuck, WLAN und Spa-Zugang.",
    delay: 2400,
    quickReplies: [
      { label: "Suite reservieren", value: "buchung" },
      { label: "Zimmerfoto", value: "zimmerfoto" },
      { label: "Saisonpreise", value: "zimmerpreise" },
      { label: "Inklusive Leistungen", value: "concierge service" },
    ],
  },

  zimmerpreise: {
    text: "**Preisstaffel nach Saison**\n\n| Zimmer | Nebensaison | Hochsaison | Feiertage |\n|--------|------------|------------|----------|\n| Standard | estimation personnalisee | estimation personnalisee | estimation personnalisee |\n| Superior | estimation personnalisee | estimation personnalisee | estimation personnalisee |\n| Junior-Suite | estimation personnalisee | estimation personnalisee | estimation personnalisee |\n| Prestige-Suite | estimation personnalisee | estimation personnalisee | estimation personnalisee |\n\n**Nebensaison :** Nov - Marz (ohne Feiertage)\n**Hochsaison :** April - Oktober\n**Feiertage :** Weihnachten, Silvester, Ostern\n\n**Sonderangebote :**\n- -15 % ab 5 Nachten\n- -10 % Fruhbucher (60 Tage vorher)\n- Hochzeitspaket verfugbar\n\nPreise pro Nacht, Fruhstuck inklusive.",
    delay: 2200,
    quickReplies: [
      { label: "Jetzt buchen", value: "buchung" },
      { label: "Sonderpaket", value: "gruppen" },
      { label: "Spa inklusive ?", value: "spa" },
      { label: "Stornierung ?", value: "check out" },
    ],
  },

  "check in": {
    text: "**Check-in-Informationen**\n\n**Standardzeiten :**\n- Check-in : ab **15:00 Uhr**\n- Gepackaufbewahrung ab 8:00 Uhr verfugbar\n\n**Fruher Check-in :**\n- 12:00 Uhr : gain mesure (je nach Verfugbarkeit)\n- 10:00 Uhr : gain mesure (je nach Verfugbarkeit)\n- Garantiert fur Prestige-Suiten\n\n**Express-Check-in per WhatsApp :**\n1. Senden Sie Ihr Ausweis-/Reisepassfoto\n2. Wir bereiten Ihren digitalen Schlussel vor\n3. Direkt aufs Zimmer !\n\n**Bei Ihrer Ankunft :**\n- Willkommensgetrank gratis\n- Vorstellung der Services\n- Interaktiver Hotelplan\n\nMochten Sie einen fruhen Check-in ?",
    delay: 2000,
    quickReplies: [
      { label: "Fruher Check-in", value: "check in" },
      { label: "Flughafenshuttle", value: "shuttle" },
      { label: "Parkplatz", value: "parkplatz" },
      { label: "WLAN", value: "wlan" },
    ],
  },

  "check out": {
    text: "**Check-out-Informationen**\n\n**Standardzeiten :**\n- Check-out : bis **11:00 Uhr**\n- Express-Check-out : Schlussel abgeben, Rechnung per E-Mail\n\n**Spater Check-out :**\n- 13:00 Uhr : kostenlos (je nach Verfugbarkeit)\n- 15:00 Uhr : gain mesure\n- 18:00 Uhr : gain mesure (halber Tag)\n\n**Stornierungsbedingungen :**\n- Flexibel : kostenlose Stornierung 48 Stunden vorher\n- Nicht erstattungspfahig : -15 % auf den Preis\n\n**Am Abreisetag :**\n- Fruhstuck bis 10:30 Uhr\n- Kostenlose Gepackaufbewahrung\n- Flughafenshuttle auf Anfrage\n\nSpaten Check-out gewunscht ?",
    delay: 1800,
    quickReplies: [
      { label: "Spater Check-out", value: "check out" },
      { label: "Abflug-Shuttle", value: "shuttle" },
      { label: "Detaillierte Rechnung", value: "check out" },
      { label: "Aufenthalt verlangern", value: "buchung" },
    ],
  },

  spa: {
    text: "**Spa & Wellness — HotelLux**\n\n**Entspannungsbereich** (fur Hotelgaste inklusive)\n- Beheiztes Hallenbad (28 °C)\n- Finnische Sauna + Dampfbad\n- Fitnessraum 24/7\n\n**Behandlungen auf Reservierung :**\n\n**Entspannungsmassage** — 60 Min — estimation personnalisee\n**Sportmassage** — 60 Min — estimation personnalisee\n**Premium-Gesichtspflege** — 75 Min — estimation personnalisee\n**Orientalisches Ritual** — 90 Min — estimation personnalisee\n**Parchen-Paket** — 120 Min — estimation personnalisee\n\n**Offnungszeiten :** 7:00 - 21:00 Uhr\n\nReservierung 24 Stunden im Voraus empfohlen.\n\nWelche Behandlung interessiert Sie ?",
    delay: 2200,
    quickReplies: [
      { label: "Massage buchen", value: "spa" },
      { label: "Parchen-Paket", value: "spa" },
      { label: "Schwimmzeiten", value: "spa" },
      { label: "Weitere Aktivitaten", value: "ausfluege" },
    ],
  },

  "hotel restaurant": {
    text: "**Restaurant & Zimmerservice**\n\n**Das Gartenrestaurant** — Gourmetrestaurant\n- Fruhstuck : 7:00 - 10:30 Uhr (inklusive)\n- Mittagessen : 12:00 - 14:30 Uhr\n- Abendessen : 19:00 - 22:30 Uhr\n- Sterne-Koch, mediterrane Kuche\n\n**Die Terrassen-Bar** — Cocktails & Tapas\n- 11:00 - 00:00 Uhr\n- Happy Hour : 17:00 - 19:00 Uhr\n\n**Zimmerservice** — 24/7\n- Vollstandige Speisekarte auf dem Zimmer\n- Zuschlag : estimation personnalisee\n- Lieferung in 30 Min\n\n**Spezielle Menus :**\n- Vegetarisch / Vegan\n- Glutenfrei\n- Halal / Koscher (auf Anfrage 24 Std vorher)\n\nEinen Tisch reservieren ?",
    delay: 2200,
    quickReplies: [
      { label: "Abendessen buchen", value: "hotel restaurant" },
      { label: "Zimmerservice", value: "hotel restaurant" },
      { label: "Tagesmenu", value: "hotel restaurant" },
      { label: "Spa nach dem Dinner", value: "spa" },
    ],
  },

  ausfluege: {
    text: "**Ausflugsangebote & lokale Aktivitaten**\n\n**Halbtag :**\n- Stadtfuhrung Altstadt — estimation personnalisee\n- Lokale Weinverkostung — estimation personnalisee\n- Panorama-Wanderung — estimation personnalisee\n\n**Ganzer Tag :**\n- Kustenkreuzfahrt + Mittagessen — estimation personnalisee\n- 4x4-Safari Hinterland — estimation personnalisee\n- Lokaler Kochkurs — estimation personnalisee\n\n**Premium-Erlebnisse :**\n- Hubschrauber-Kustenrundflug — estimation personnalisee\n- Tauchen — estimation personnalisee\n- Privates Yacht-Halbtags-Charter — estimation personnalisee (max. 4 Pers.)\n\nBuchung uber WhatsApp, Abfahrt vom Hotel.\n\nWelche Aktivitat interessiert Sie ?",
    delay: 2200,
    quickReplies: [
      { label: "Kreuzfahrt", value: "ausfluege" },
      { label: "Weinverkostung", value: "ausfluege" },
      { label: "Shuttle zu Aktivitaten", value: "shuttle" },
      { label: "Zimmer buchen", value: "buchung" },
    ],
  },

  shuttle: {
    text: "**Flughafen-Shuttle-Service**\n\n**Privattransfer :**\n- Limousine (1 - 3 Pers.) : estimation personnalisee\n- Van (4 - 7 Pers.) : estimation personnalisee\n- Minibus (8 - 15 Pers.) : estimation personnalisee\n\n**Durchschnittliche Fahrtzeit :** 25 Min (je nach Verkehr)\n\n**Buchung :**\n- Flug + Ankunftszeit angeben\n- Fahrer mit Namensschild erwartet Sie\n- Echtzeit-Flugverfolgung\n- Wasser und kuhle Tucher im Fahrzeug\n\n**Sammel-Shuttle :** estimation personnalisee\n(Abfahrten jede Stunde 6 - 22 Uhr)\n\nMochten Sie einen Transfer buchen ?",
    delay: 1800,
    quickReplies: [
      { label: "Ankunfts-Shuttle", value: "shuttle" },
      { label: "Abflug-Shuttle", value: "shuttle" },
      { label: "Hotelparkplatz", value: "parkplatz" },
      { label: "Check-in-Info", value: "check in" },
    ],
  },

  parkplatz: {
    text: "**Hotelparkplatz**\n\n**Gedeckter gesicherter Parkplatz :**\n- Hotelgaste : estimation personnalisee\n- Prestige-Suite / Penthouse : kostenlos\n- Valet-Parking verfugbar\n\n**Verfugbare Platze :** Echtzeit per WhatsApp\n\n**Ladestationen :**\n- 4 Tesla-Supercharger\n- 2 Universal-Ladestationen (Typ 2)\n- Kostenlos laden fur Hotelgaste\n\n**Außenparkplatz :** estimation personnalisee\n\nReservierung in der Hochsaison empfohlen.\n\nBenoten Sie einen Stellplatz ?",
    delay: 1600,
    quickReplies: [
      { label: "Platz reservieren", value: "parkplatz" },
      { label: "Ladestation", value: "parkplatz" },
      { label: "Flughafen-Shuttle", value: "shuttle" },
      { label: "Check-in", value: "check in" },
    ],
  },

  wlan: {
    text: "**WLAN-Zugang — HotelLux**\n\n**Kostenloses WLAN im gesamten Hotel :**\n- Netzwerk : HotelLux-Guest\n- Passwort : wird beim Check-in mitgeteilt\n- Geschwindigkeit : 100 Mbit/s\n\n**Premium-WLAN** (in Suiten inklusive) :\n- Geschwindigkeit : 500 Mbit/s\n- Ideal fur 4K-Streaming, Videokonferenzen, Gaming\n- Aufpreis : estimation personnalisee (andere Zimmer)\n\n**Abdeckung :**\n- Zimmer, Lobby, Restaurant, Schwimmbad, Spa\n- Konferenzraum (dediziertes Netz)\n\nBenogen Sie Hilfe bei der Verbindung ?",
    delay: 1400,
    quickReplies: [
      { label: "Verbindungsproblem", value: "wlan" },
      { label: "Konferenz-WLAN", value: "gruppen" },
      { label: "Weitere Services", value: "concierge service" },
      { label: "Zimmerservice", value: "hotel restaurant" },
    ],
  },

  haustiere: {
    text: "**Haustierrichtlinien**\n\n**Haustiere willkommen !** (Hunde und Katzen)\n\n**Bedingungen :**\n- Aufpreis : estimation personnalisee\n- Max. Gewicht : 15 kg\n- 1 Tier pro Zimmer\n- Aktueller Impfnachweis\n\n**Inklusive Services :**\n- Napf und Decke im Zimmer\n- Willkommens-Snack-Beutel\n- Liste nahegelegener Tierarzte\n- Spaziergang-Route um das Hotel\n\n**Einschrankungen :**\n- Tiere nicht im Restaurant und Spa erlaubt\n- Zugang zu Garten und Terrasse erlaubt\n\nReisen Sie mit einem Tier ?",
    delay: 1800,
    quickReplies: [
      { label: "Mit Haustier buchen", value: "buchung" },
      { label: "Tierarzt in der Nahe", value: "concierge service" },
      { label: "Verfugbare Zimmer", value: "zimmer" },
      { label: "Weitere Fragen", value: "concierge service" },
    ],
  },

  zimmerfoto: {
    text: "Schicken Sie mir ein **Foto oder Screenshot** des gewunschten Zimmers und unsere KI erkennt :\n\n- **Entsprechendem Zimmertyp**\n- **Echtzeit-Verfugbarkeit**\n- **Preis** fur Ihre Daten\n- **Aussicht** (Meer, Garten, Stadt)\n\nSie konnen auch ein Foto eines anderen Hotels schicken und wir finden das Equivalent bei uns !\n\nBild senden !",
    delay: 1600,
    quickReplies: [
      { label: "Unsere Zimmer ansehen", value: "zimmer" },
      { label: "Preise", value: "zimmerpreise" },
      { label: "Buchen", value: "buchung" },
      { label: "Virtuelle Tour", value: "zimmer" },
    ],
  },

  "concierge service": {
    text: "**KI-Concierge — Zu Ihren Diensten 24/7**\n\n**Verfugbare Services :**\n\n- **Reservierungen** : Restaurants, Shows, Museen\n- **Transport** : Taxi, VTC, Mietwagen, Helikopter\n- **Shopping** : Personal Shopper, Lieferungen\n- **Feiern** : Geburtstagstorte, Blumen, Champagner\n- **Business** : Drucken, Kurier, Sekretariat\n- **Gesundheit** : Arzt, Apotheke, Zahnarzt\n- **Kinder** : Babysitting, Kinderprogramm\n\n**Reaktionszeit :** < 5 Minuten\n**Sprachen :** DE, EN, FR, IT, ES, AR\n\nWas kann ich fur Sie organisieren ?",
    delay: 2000,
    quickReplies: [
      { label: "Restaurant in der Stadt", value: "hotel restaurant" },
      { label: "Babysitting", value: "concierge service" },
      { label: "Geburtstag", value: "concierge service" },
      { label: "Ausflugsangebote", value: "ausfluege" },
    ],
  },

  gruppen: {
    text: "**Gruppen & Veranstaltungen — HotelLux**\n\n**Seminare & Konferenzen :**\n- 3 Sale (20 bis 200 Personen)\n- Vollstandige AV-Ausstattung\n- Dediziertes Hochgeschwindigkeits-WLAN\n- Kaffeepausen + Mittagessen inklusive\n- Ab estimation personnalisee/Tag\n\n**Hochzeiten & Empfange :**\n- Panoramaterrasse (max. 150 Pers.)\n- Massgeschneidertes Degustationsmenu\n- Wedding-Planner-Partner\n- Paket ab estimation personnalisee\n\n**Reisegruppen :**\n- Sonderpreise ab 10 Zimmern\n- Lokaler Fuhrer inklusive\n- Personalisiertes Aktivitatsprogramm\n\nBriefing einsenden fur Angebot innerhalb von 24 Stunden.",
    delay: 2400,
    quickReplies: [
      { label: "Seminar-Angebot", value: "gruppen" },
      { label: "Hochzeits-Angebot", value: "gruppen" },
      { label: "Gruppenpreise", value: "zimmerpreise" },
      { label: "Sale besichtigen", value: "concierge service" },
    ],
  },
};

const sectorKeywords: Record<string, string[]> = {
  hallo: ["hallo", "hi", "hey", "guten morgen", "guten tag", "guten abend", "servus", "moin"],
  buchung: ["buchen", "buchung", "reservierung", "zimmer", "aufenthalt", "nacht", "verfugbarkeit", "reservieren"],
  zimmer: ["zimmer", "suite", "penthouse", "kategorie", "zimmertyp", "standard", "superior", "prestige"],
  zimmerpreise: ["zimmerpreis", "preis pro nacht", "wie viel nacht", "kosten zimmer", "saison", "angebot"],
  "check in": ["check in", "checkin", "anreise", "anmeldung", "fruher", "zimmerschlussel"],
  "check out": ["check out", "checkout", "abreise", "spat", "stornierung", "rechnung", "auschecken"],
  spa: ["spa", "massage", "schwimmbad", "sauna", "dampfbad", "behandlung", "wellness", "entspannung", "fitness"],
  "hotel restaurant": ["restaurant", "abendessen", "mittagessen", "zimmerservice", "menu", "bar", "fruhstuck", "brunch"],
  ausfluege: ["ausflug", "aktivitat", "besichtigung", "tour", "kreuzfahrt", "wanderung", "tauchen", "yacht"],
  shuttle: ["shuttle", "transfer", "flughafen", "fahrer", "taxi", "transport"],
  parkplatz: ["parkplatz", "parken", "auto, abstellen", "ladestation", "valet", "tiefgarage"],
  wlan: ["wlan", "wifi", "internet", "verbindung", "netz", "passwort", "geschwindigkeit"],
  haustiere: ["haustier", "tier", "hund", "katze", "pet", "tierarzt"],
  zimmerfoto: ["zimmerfoto", "zimmerbild", "zimmer sehen", "virtuelle tour"],
  "concierge service": ["concierge", "service", "babysitting", "geburtstag", "blumen", "champagner", "hilfe"],
  gruppen: ["gruppe", "seminar", "konferenz", "hochzeit", "event", "veranstaltung", "empfang", "besprechung", "team"],
};

const { intents, keywords } = mergeWithVocalisDE(sectorIntents, sectorKeywords);

const hotelFallbackDE = createFallbackDE([
  { label: "Buchen", value: "buchung" },
  { label: "Unsere Zimmer", value: "zimmer" },
  { label: "Spa", value: "spa" },
  { label: "Vocalis-Tarife", value: "tarif" },
]);

export const hotelConfigDE: SimulatorConfig = {
  botName: "HotelLux IA",
  botAvatar: "HL",
  welcomeMessage:
    "Willkommen im **HotelLux** ! Ich bin Ihr KI-Concierge, rund um die Uhr verfugbar.\n\nIch kann Ihnen helfen bei :\n- Zimmer buchen\n- Check-in / Check-out organisieren\n- Spa oder Restaurant reservieren\n- Ausflugsangebote und Transfers planen\n- Concierge-Services\n\nWie kann ich Ihnen helfen ?",
  initialQuickReplies: [
    { label: "Buchen", value: "buchung" },
    { label: "Unsere Zimmer", value: "zimmer" },
    { label: "Spa & Wellness", value: "spa" },
    { label: "Restaurant", value: "hotel restaurant" },
    { label: "Concierge", value: "concierge service" },
  ],
  intents,
  keywords,
  fallback: hotelFallbackDE,
};

export default hotelConfigDE;
