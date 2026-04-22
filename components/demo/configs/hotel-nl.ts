import type { SimulatorConfig, BotResponse } from "../WhatsAppSimulator";
import { mergeWithVocalisNL, createFallbackNL } from "./vocalis-features-nl";

const sectorIntents: Record<string, BotResponse> = {
  hallo: {
    text: "Welkom bij **HotelLux** ! Ik ben uw IA-conciërge, 24u/24 beschikbaar.\n\nIk kan u helpen met :\n- Een kamer reserveren\n- Uw check-in / check-out regelen\n- De spa of het restaurant reserveren\n- Uitstappen en transfers organiseren\n- Conciërgediensten\n\nHoe kan ik uw verblijf uitzonderlijk maken ?",
    delay: 1400,
    quickReplies: [
      { label: "Reserveren", value: "reservering" },
      { label: "Onze kamers", value: "kamers" },
      { label: "Spa & wellness", value: "spa" },
      { label: "Restaurant", value: "hotelrestaurant" },
    ],
  },

  reservering: {
    text: "**Kamerreservering**\n\nGeef ons wat informatie om de ideale kamer te vinden :\n\n**Datums :** Aankomst en vertrek\n**Type :** Klassiek, Superior, Suite, Prestige\n**Reizigers :** Aantal volwassenen en kinderen\n**Voorkeuren :** Zeezicht, hoge verdieping, kingsize bed...\n\n**Voorbeeld :** *\"Suite zeezicht, 2 volwassenen, van 15 tot 18 mei\"*\n\n**Voordeel WhatsApp-reservering :**\n- Beste tarief gegarandeerd\n- Gratis upgrade naargelang beschikbaarheid\n- Late check-out gratis\n\nWat zijn uw datums ?",
    delay: 2000,
    quickReplies: [
      { label: "Kamers bekijken", value: "kamers" },
      { label: "Tarieven", value: "kamertarieven" },
      { label: "Prestige suite", value: "kamers" },
      { label: "Groep / evenement", value: "groep" },
    ],
  },

  kamers: {
    text: "**Onze kamercategorieën :**\n\n**Klassiek** — 28m2\nQueenbed, marmeren badkamer, minibar\nVanaf 180 EUR/nacht\n\n**Superior** — 35m2\nKingbed, balkon, tuinzicht, kluis\nVanaf 260 EUR/nacht\n\n**Junior Suite** — 50m2\nAparte woonkamer, bad met bubbels, panoramisch uitzicht\nVanaf 420 EUR/nacht\n\n**Prestige Suite** — 75m2\nPrivéterras, jacuzzi, butler service\nVanaf 680 EUR/nacht\n\n**Penthouse** — 120m2\nDuplex, privézwembad, kok aan huis\nOp aanvraag\n\nAlle kamers inclusief ontbijt, wifi en spatoegang.",
    delay: 2400,
    quickReplies: [
      { label: "Suite reserveren", value: "reservering" },
      { label: "Kamer foto", value: "kamer foto" },
      { label: "Seizoensprijzen", value: "kamertarieven" },
      { label: "Inbegrepen diensten", value: "concierge" },
    ],
  },

  kamertarieven: {
    text: "**Tariefoverzicht per seizoen**\n\n| Kamer | Laagseizoen | Hoogseizoen | Feestdagen |\n|-------|-------------|-------------|------------|\n| Klassiek | 180 EUR | 280 EUR | 350 EUR |\n| Superior | 260 EUR | 380 EUR | 480 EUR |\n| Junior Suite | 420 EUR | 580 EUR | 720 EUR |\n| Prestige Suite | 680 EUR | 900 EUR | 1 200 EUR |\n\n**Laagseizoen :** Nov - Maart (excl. feestdagen)\n**Hoogseizoen :** April - Oktober\n**Feestdagen :** Kerst, Nieuwjaar, Pasen\n\n**Speciale aanbiedingen :**\n- -15% bij 5+ nachten\n- -10% vroegboekkorting (60 dagen)\n- Huwelijksreis-pakket beschikbaar\n\nPrijzen per nacht, ontbijt inbegrepen.",
    delay: 2200,
    quickReplies: [
      { label: "Nu reserveren", value: "reservering" },
      { label: "Speciaal pakket", value: "groep" },
      { label: "Spa inbegrepen ?", value: "spa" },
      { label: "Annulering ?", value: "check-out" },
    ],
  },

  "check-in": {
    text: "**Check-in informatie**\n\n**Standaardtijden :**\n- Check-in : vanaf **15u00**\n- Bagageruimte beschikbaar vanaf 8u00\n\n**Vroege check-in :**\n- 12u00 : +30 EUR (naargelang beschikbaarheid)\n- 10u00 : +60 EUR (naargelang beschikbaarheid)\n- Gegarandeerd voor Prestige Suites\n\n**Express check-in via WhatsApp :**\n1. Stuur uw paspoort/identiteitskaart als foto\n2. Wij bereiden uw digitale sleutel voor\n3. Ga rechtstreeks naar uw kamer !\n\n**Bij aankomst :**\n- Welkomstdrankje gratis\n- Presentatie van de diensten\n- Interactief hotelplan\n\nWilt u een vroege check-in ?",
    delay: 2000,
    quickReplies: [
      { label: "Vroege check-in", value: "check-in" },
      { label: "Luchthavenbus", value: "shuttle" },
      { label: "Parkeren", value: "parkeren" },
      { label: "Wifi", value: "wifi" },
    ],
  },

  "check-out": {
    text: "**Check-out informatie**\n\n**Standaardtijden :**\n- Check-out : voor **11u00**\n- Express check-out : sleutel inleveren, factuur per e-mail\n\n**Late check-out :**\n- 13u00 : gratis (naargelang beschikbaarheid)\n- 15u00 : +50 EUR\n- 18u00 : +100 EUR (halve dag)\n\n**Annuleringsbeleid :**\n- Flexibel : gratis annulering 48u voor aankomst\n- Niet-terugbetaalbaar : -15% op het tarief\n\n**Op vertrekdag :**\n- Ontbijt geserveerd tot 10u30\n- Gratis bagageopslag\n- Luchthavenbus op aanvraag\n\nHeeft u een late check-out nodig ?",
    delay: 1800,
    quickReplies: [
      { label: "Late check-out", value: "check-out" },
      { label: "Vertrekshuttle", value: "shuttle" },
      { label: "Gedetailleerde factuur", value: "check-out" },
      { label: "Verblijf verlengen", value: "reservering" },
    ],
  },

  spa: {
    text: "**Spa & Wellness — HotelLux**\n\n**Ontspanningsruimte** (inbegrepen voor gasten)\n- Verwarmd binnenzwembad (28°C)\n- Finse sauna + hammam\n- Fitnessruimte 24/7\n\n**Behandelingen op reservering :**\n\n**Ontspanningsmassage** — 60 min — 120 EUR\n**Sportmassage** — 60 min — 140 EUR\n**Premium gezichtsbehandeling** — 75 min — 150 EUR\n**Oriëntaals ritueel** — 90 min — 200 EUR\n**Koppelspakket** — 120 min — 350 EUR\n\n**Openingstijden :** 7u00 - 21u00\n\nReservering aanbevolen 24u op voorhand.\n\nWelke behandeling interesseert u ?",
    delay: 2200,
    quickReplies: [
      { label: "Massage reserveren", value: "spa" },
      { label: "Koppelspakket", value: "spa" },
      { label: "Zwembadtijden", value: "spa" },
      { label: "Andere activiteiten", value: "uitstappen" },
    ],
  },

  hotelrestaurant: {
    text: "**Restaurant & Roomservice**\n\n**De Tuin** — Gastronomisch restaurant\n- Ontbijt : 7u00 - 10u30 (inbegrepen)\n- Lunch : 12u00 - 14u30\n- Diner : 19u00 - 22u30\n- Sterrenchef, mediterrane keuken\n\n**Het Terrasbar** — Cocktails & tapas\n- 11u00 - 00u00\n- Happy hour : 17u00 - 19u00\n\n**Roomservice** — 24u/24\n- Volledig menu op kamer\n- Toeslag : 8 EUR\n- Levering in 30 min\n\n**Speciale menu's :**\n- Vegetarisch / Vegan\n- Glutenvrij\n- Halal / Koosjer (op aanvraag 24u)\n\nEen tafel reserveren ?",
    delay: 2200,
    quickReplies: [
      { label: "Diner reserveren", value: "hotelrestaurant" },
      { label: "Roomservice", value: "hotelrestaurant" },
      { label: "Menu van de dag", value: "hotelrestaurant" },
      { label: "Spa na het diner", value: "spa" },
    ],
  },

  uitstappen: {
    text: "**Uitstappen & Lokale activiteiten**\n\n**Halve dag :**\n- Begeleide stadstour — 45 EUR/pers\n- Lokale wijnproeverij — 60 EUR/pers\n- Panoramische wandeling — 35 EUR/pers\n\n**Volledige dag :**\n- Kustcruise + lunch — 120 EUR/pers\n- 4x4 safari achterland — 95 EUR/pers\n- Lokale kookles — 80 EUR/pers\n\n**Premium ervaringen :**\n- Helikoptervlucht kustlijn — 250 EUR/pers\n- Duiken — 110 EUR/pers\n- Privéjacht halve dag — 800 EUR (max 4 pers)\n\nReservering via WhatsApp, vertrek vanuit het hotel.\n\nWelke activiteit spreekt u aan ?",
    delay: 2200,
    quickReplies: [
      { label: "Cruise", value: "uitstappen" },
      { label: "Wijnproeverij", value: "uitstappen" },
      { label: "Activiteitenshuttle", value: "shuttle" },
      { label: "Kamer reserveren", value: "reservering" },
    ],
  },

  shuttle: {
    text: "**Luchthavenbus service**\n\n**Privétransfer :**\n- Berline (1-3 pers) : 60 EUR\n- Bestelwagen (4-7 pers) : 90 EUR\n- Minibus (8-15 pers) : 150 EUR\n\n**Gemiddelde rit :** 25 min (naargelang verkeer)\n\n**Reservering :**\n- Geef vlucht + aankomsttijd op\n- Chauffeur met naambord op u te wachten\n- Vluchtstatus in real-time gevolgd\n- Water en frisse handdoeken aan boord\n\n**Gedeelde bus :** 20 EUR/pers\n(Vertrekken elk uur van 6u tot 22u)\n\nWilt u een transfer reserveren ?",
    delay: 1800,
    quickReplies: [
      { label: "Aankomstbus", value: "shuttle" },
      { label: "Vertrekbus", value: "shuttle" },
      { label: "Hotelparking", value: "parkeren" },
      { label: "Check-in info", value: "check-in" },
    ],
  },

  parkeren: {
    text: "**Hotelparking**\n\n**Beveiligde overdekte parking :**\n- Gasten : 20 EUR/dag\n- Prestige Suite / Penthouse : gratis\n- Valet parking beschikbaar\n\n**Beschikbare plaatsen :** real-time via WhatsApp\n\n**Laadpalen :**\n- 4 Tesla Superchargers\n- 2 universele laadpalen (Type 2)\n- Gratis opladen voor gasten\n\n**Buitenparking :** 10 EUR/dag\n\nReservering aanbevolen in hoogseizoen.\n\nHeeft u een parkeerplaats nodig ?",
    delay: 1600,
    quickReplies: [
      { label: "Parkeerplaats reserveren", value: "parkeren" },
      { label: "Laadpaal", value: "parkeren" },
      { label: "Luchthavenbus", value: "shuttle" },
      { label: "Check-in", value: "check-in" },
    ],
  },

  wifi: {
    text: "**Wifi-toegang — HotelLux**\n\n**Gratis wifi in het hele hotel :**\n- Netwerk : HotelLux-Guest\n- Wachtwoord : meegedeeld bij check-in\n- Snelheid : 100 Mbps\n\n**Premium Wifi** (inbegrepen in Suites) :\n- Snelheid : 500 Mbps\n- Ideaal voor 4K streaming, videobellen, gaming\n- Toeslag : 10 EUR/dag (andere kamers)\n\n**Dekking :**\n- Kamers, lobby, restaurant, zwembad, spa\n- Vergaderzaal (eigen netwerk)\n\nHulp nodig met de verbinding ?",
    delay: 1400,
    quickReplies: [
      { label: "Verbindingsprobleem", value: "wifi" },
      { label: "Vergadering wifi", value: "groep" },
      { label: "Andere diensten", value: "concierge" },
      { label: "Roomservice", value: "hotelrestaurant" },
    ],
  },

  huisdieren: {
    text: "**Huisdierenbeleid**\n\n**Huisdieren welkom !** (honden en katten)\n\n**Voorwaarden :**\n- Toeslag : 30 EUR/nacht\n- Max gewicht : 15 kg\n- 1 dier per kamer\n- Bijgewerkt vaccinatieboekje\n\n**Inbegrepen diensten :**\n- Voerbak en kussen op kamer\n- Welkomstsnackzakje\n- Lijst van nabijgelegen dierenartsen\n- Wandelroute rondom het hotel\n\n**Beperking :**\n- Dieren niet toegestaan in restaurant en spa\n- Toegang tuin en terras toegestaan\n\nReist u met een huisdier ?",
    delay: 1800,
    quickReplies: [
      { label: "Reserveren met huisdier", value: "reservering" },
      { label: "Dierenarts in de buurt", value: "concierge" },
      { label: "Beschikbare kamers", value: "kamers" },
      { label: "Andere vragen", value: "concierge" },
    ],
  },

  "kamer foto": {
    text: "Stuur me een **foto of screenshot** van de gewenste kamer en onze IA identificeert :\n\n- **Overeenkomstig kamerstype**\n- **Beschikbaarheid** in real-time\n- **Tarief** voor uw datums\n- **Uitzicht** (zee, tuin, stad)\n\nU kunt ook een foto van een ander hotel sturen en wij stellen het equivalent bij ons voor !\n\nStuur uw afbeelding !",
    delay: 1600,
    quickReplies: [
      { label: "Onze kamers bekijken", value: "kamers" },
      { label: "Tarieven", value: "kamertarieven" },
      { label: "Reserveren", value: "reservering" },
      { label: "Virtuele rondleiding", value: "kamers" },
    ],
  },

  concierge: {
    text: "**IA-Conciërge — Tot uw dienst 24/7**\n\n**Beschikbare diensten :**\n\n- **Reserveringen** : restaurants, shows, musea\n- **Transport** : taxi, VTC, autohuur, helikopter\n- **Shopping** : personal shopper, leveringen\n- **Festiviteiten** : verjaardagstaart, bloemen, champagne\n- **Zakelijk** : printen, koerier, secretariaat\n- **Gezondheid** : arts, apotheek, tandarts\n- **Kinderen** : oppas, kids club activiteiten\n\n**Reactietijd :** < 5 minuten\n**Talen :** NL, FR, EN, DE, IT, ES\n\nWat kan ik voor u organiseren ?",
    delay: 2000,
    quickReplies: [
      { label: "Restaurant in de stad", value: "hotelrestaurant" },
      { label: "Kinderoppas", value: "concierge" },
      { label: "Verjaardag", value: "concierge" },
      { label: "Uitstappen", value: "uitstappen" },
    ],
  },

  groep: {
    text: "**Groepen & Evenementen — HotelLux**\n\n**Seminaries & Conferenties :**\n- 3 zalen (20 tot 200 personen)\n- Volledig AV-materiaal\n- Dedicated hogesnelheidswifi\n- Koffiepauzes + lunch inbegrepen\n- Vanaf 85 EUR/pers/dag\n\n**Bruiloften & Recepties :**\n- Panoramisch terras (max 150 pers)\n- Deustatiemenu op maat\n- Partnertrouwplanner\n- Forfait vanaf 12 000 EUR\n\n**Toeristische groepen :**\n- Onderhandelde tarieven vanaf 10 kamers\n- Lokale gids inbegrepen\n- Gepersonaliseerd activiteitenprogramma\n\nStuur ons uw briefing voor een offerte binnen 24u.",
    delay: 2400,
    quickReplies: [
      { label: "Seminarieofferte", value: "groep" },
      { label: "Bruiloftofferte", value: "groep" },
      { label: "Groepstarieven", value: "kamertarieven" },
      { label: "Zalen bezoeken", value: "concierge" },
    ],
  },
};

const sectorKeywords: Record<string, string[]> = {
  hallo: ["hallo", "goedendag", "hoi", "hey", "goedeavond", "hi", "dag"],
  reservering: [
    "reserveren", "reservering", "booking", "kamer", "verblijf",
    "nacht", "beschikbaarheid",
  ],
  kamers: [
    "kamer", "suite", "penthouse", "categorie", "kamerstype",
    "klassiek", "superior", "prestige",
  ],
  kamertarieven: [
    "kamertarief", "prijs nacht", "hoeveel nacht", "kamerprijs",
    "seizoen", "aanbieding",
  ],
  "check-in": [
    "check-in", "checkin", "aankomst", "registratie", "vroeg",
    "kamersleutel",
  ],
  "check-out": [
    "check-out", "checkout", "vertrek", "laat", "annulering",
    "factuur", "verlaten",
  ],
  spa: [
    "spa", "massage", "zwembad", "sauna", "hammam", "behandeling",
    "wellness", "ontspanning", "fitness",
  ],
  hotelrestaurant: [
    "restaurant", "diner", "lunch", "roomservice", "menu",
    "bar", "ontbijt", "brunch",
  ],
  uitstappen: [
    "uitstap", "activiteit", "bezoek", "tour", "cruise",
    "wandeling", "duiken", "jacht",
  ],
  shuttle: [
    "shuttle", "transfer", "luchthaven", "bus", "chauffeur",
    "taxi", "transport",
  ],
  parkeren: [
    "parking", "parkeren", "auto", "laadpaal", "elektrisch",
    "valet", "garage",
  ],
  wifi: ["wifi", "internet", "verbinding", "netwerk", "wachtwoord", "snelheid"],
  huisdieren: [
    "huisdier", "hond", "kat", "dier", "pet",
    "dierenarts",
  ],
  "kamer foto": [
    "kamer foto", "kamer afbeelding", "kamer bekijken",
    "virtuele rondleiding",
  ],
  concierge: [
    "conciërge", "concierge", "dienst", "oppas",
    "verjaardag", "bloemen", "champagne", "hulp",
  ],
  groep: [
    "groep", "seminarie", "conferentie", "bruiloft", "evenement",
    "event", "receptie", "vergadering", "team",
  ],
};

const { intents, keywords } = mergeWithVocalisNL(sectorIntents, sectorKeywords);

const hotelFallbackNL = createFallbackNL([
  { label: "Reserveren", value: "reservering" },
  { label: "Onze kamers", value: "kamers" },
  { label: "Spa", value: "spa" },
  { label: "Tarieven Vocalis", value: "prijs" },
]);

export const hotelConfigNL: SimulatorConfig = {
  botName: "HotelLux IA",
  botAvatar: "HL",
  welcomeMessage:
    "Welkom bij **HotelLux** ! Ik ben uw IA-conciërge, 24u/24 beschikbaar.\n\nIk kan u helpen met :\n- Een kamer reserveren\n- Check-in / check-out regelen\n- Spa of restaurant reserveren\n- Uitstappen en transfers plannen\n- Conciërgediensten\n\nHoe kan ik u helpen ?",
  initialQuickReplies: [
    { label: "Reserveren", value: "reservering" },
    { label: "Onze kamers", value: "kamers" },
    { label: "Spa & wellness", value: "spa" },
    { label: "Restaurant", value: "hotelrestaurant" },
    { label: "Conciërge", value: "concierge" },
  ],
  intents,
  keywords,
  fallback: hotelFallbackNL,
};

export default hotelConfigNL;
