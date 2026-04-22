import type { SimulatorConfig } from "../WhatsAppSimulator";
import { mergeWithVocalisNL, createFallbackNL } from "./vocalis-features-nl";

const restaurantIntentsNL = {
  hallo: {
    text: "Welkom bij **Gourmet IA**! Ik ben uw AI-assistent.\n\nIk kan u helpen met:\n- Een tafel reserveren\n- Het dagmenu bekijken\n- Afhalen bestellen\n- Informatie over allergenen\n- Een privé-evenement organiseren\n\nWat kan ik voor u doen?",
    delay: 1200,
    quickReplies: [
      { label: "Reserveren", value: "reservering" },
      { label: "Dagmenu", value: "menu" },
      { label: "Bestellen", value: "bestelling" },
      { label: "Openingsuren", value: "openingsuren" },
    ],
  },
  reservering: {
    text: "Laten we uw tafel reserveren!\n\nGeef me graag mee:\n\n**Datum:** Welke dag?\n**Tijd:** Hoe laat?\n**Couverts:** Hoeveel personen?\n**Voorkeur:** Terras, binnenzaal, privé, rolstoeltoegang?\n\nBijvoorbeeld: *\"Zaterdag 20u, 4 personen, terras\"*\n\n**Beschikbaarheid dit weekend:**\n- Vrijdag: 19u30, 20u, 21u\n- Zaterdag: 19u, 20u30, 21u30\n- Zondag: 12u, 12u30, 13u",
    delay: 2000,
    quickReplies: [
      { label: "Zaterdag 20u, 4 pers.", value: "reservering bevestigen" },
      { label: "Zondag middag, 2 pers.", value: "reservering bevestigen" },
      { label: "Andere datum", value: "andere datum reservering" },
      { label: "Allergenen?", value: "allergenen" },
    ],
  },
  "reservering bevestigen": {
    text: "Reservering bevestigd!\n\n**Restaurant:** Gourmet IA\n**Datum:** Zaterdag 19 april 2026\n**Tijd:** 20u\n**Couverts:** 4 personen\n**Locatie:** Terras\n\nU ontvangt:\n- Onmiddellijke WhatsApp-bevestiging\n- Herinnering D-1 om 18u\n- Herinnering H-2 op de dag zelf\n\nHeeft u een speciale wens? Verjaardag, dieetwensen?",
    delay: 2200,
    quickReplies: [
      { label: "Het is een verjaardag", value: "evenement" },
      { label: "Vegetarische opties?", value: "vegetarisch" },
      { label: "Bedankt!", value: "bedankt" },
    ],
  },
  "andere datum reservering": {
    text: "Hier zijn onze beschikbaarheden van de week:\n\n**Maandag:** Gesloten\n**Dinsdag:** 19u, 20u, 21u\n**Woensdag:** 19u30, 20u30\n**Donderdag:** 19u, 20u, 21u30\n**Vrijdag:** 19u30, 20u, 21u\n**Zaterdag:** 19u, 20u30, 21u30\n**Zondag:** 12u, 12u30, 13u\n\nGeef uw voorkeur aan!",
    delay: 1600,
    quickReplies: [
      { label: "Donderdag 20u", value: "reservering bevestigen" },
      { label: "Vrijdag 21u", value: "reservering bevestigen" },
    ],
  },
  menu: {
    text: "Hier is het **dagmenu**:\n\n**Voorgerechten:**\n- Pompoensoep met geroosterde hazelnoten — 14 EUR\n- Zalm tartaar, avocado, citrus — 16 EUR\n- Burrata, heirloom tomaten, pesto — 15 EUR\n\n**Hoofdgerechten:**\n- Zeebaarsfilet, safraanrisotto — 28 EUR\n- Lamsschouder 7u gestoofd, truffelmousseline — 32 EUR\n- Eekhoorntjesbrood risotto, 24 maanden Parmezaan — 24 EUR\n\n**Desserts:**\n- Chocolade fondant, vloeibaar hart — 12 EUR\n- Tarte tatin, verse room — 11 EUR\n- Selectie gerijpte kazen — 14 EUR\n\n**Compleet menu** (voor + hoofd + dessert): **45 EUR**",
    delay: 2400,
    quickReplies: [
      { label: "Wijnkaart", value: "wijnkaart" },
      { label: "Vegetarische opties", value: "vegetarisch" },
      { label: "Allergenen?", value: "allergenen" },
      { label: "Reserveren", value: "reservering" },
    ],
  },
  allergenen: {
    text: "Allergeninformatie:\n\nOnze kaart vermeldt systematisch de **14 wettelijk verplichte allergenen**:\n\n- Gluten, Schaaldieren, Eieren, Vis\n- Pinda's, Soja, Melk, Noten\n- Selderij, Mosterd, Sesam, Sulfiet\n- Lupine, Weekdieren\n\n**Mogelijke aanpassingen:**\n- Glutenvrije gerechten beschikbaar\n- Lactosevrije opties\n- Notenvrije gerechten op verzoek\n\nVermeld uw allergieën bij de reservering, onze chef past uw menu aan.",
    delay: 2000,
    quickReplies: [
      { label: "Glutenvrij", value: "vegetarisch" },
      { label: "Dagmenu", value: "menu" },
      { label: "Reserveren", value: "reservering" },
    ],
  },
  openingsuren: {
    text: "Onze openingsuren:\n\n**Dinsdag - Vrijdag:**\n- Lunch: 12u - 14u30\n- Diner: 19u - 22u30\n\n**Zaterdag:**\n- Alleen diner: 19u - 23u\n\n**Zondag:**\n- Brunch: 10u - 14u\n\n**Maandag:** Gesloten\n\n**Adres:** Gastronomielaan 42, 1000 Brussel\n**Parking:** Valet beschikbaar 's avonds\n**Rolstoeltoegankelijk:** Ja",
    delay: 1600,
    quickReplies: [
      { label: "Reserveren", value: "reservering" },
      { label: "Afhalen?", value: "afhalen" },
      { label: "Hoe komt u hier?", value: "openingsuren" },
    ],
  },
  afhalen: {
    text: "Bezorg- en afhaalopties:\n\n**Partnerplatforms:**\n- **Uber Eats** — Levering 25-35 min\n- **Deliveroo** — Levering 20-30 min\n- **Takeaway** — Levering 30-40 min\n\n**Click & Collect:**\n- Hier bestellen, afhalen aan het restaurant\n- Klaar in 20 min\n- -10% op uw bestelling\n\n**Eigen bezorging:**\n- Straal 5 km, minimum 30 EUR\n- Bezorgkosten: 4,90 EUR\n- Gratis boven 60 EUR\n\nAfhaalkaart beschikbaar 7/7 van 11u30 tot 22u.",
    delay: 2000,
    quickReplies: [
      { label: "Afhaalbestelling", value: "bestelling" },
      { label: "Dagmenu", value: "menu" },
      { label: "Ter plaatse reserveren", value: "reservering" },
    ],
  },
  bestelling: {
    text: "Laten we uw afhaalbestelling plaatsen!\n\nOnze **best-sellers**:\n\n1. Gourmet truffelburger, huisgemaakte friet — 22 EUR\n2. Zalm poke bowl, edamame, avocado — 19 EUR\n3. Eekhoorntjesbroodrisotto (vegan mogelijk) — 21 EUR\n4. Caesar salade, gegrilde kip — 17 EUR\n5. Steak tartaar, dunne frieten — 24 EUR\n\n**Lunchformule** (hoofd + drank): 15,90 EUR\n\nGeef uw keuze op en ik bereken het totaal. Betaling via creditcard online of ter plaatse.",
    delay: 2200,
    quickReplies: [
      { label: "Burger + friet", value: "bestelling bevestigen" },
      { label: "Poke bowl", value: "bestelling bevestigen" },
      { label: "Volledige kaart", value: "menu" },
      { label: "Allergenen?", value: "allergenen" },
    ],
  },
  "bestelling bevestigen": {
    text: "Bestelling geregistreerd!\n\n**Overzicht:**\n- 1x Gourmet truffelburger — 22 EUR\n- 1x Huisgemaakte friet — inbegrepen\n\n**Totaal:** 22,00 EUR\n\n**Ophalen:** Over 20 minuten\n**Adres:** Gastronomielaan 42, 1000 Brussel\n\nBetalingslink verstuurd via WhatsApp.\nU krijgt een melding wanneer het klaar is!",
    delay: 1800,
    quickReplies: [
      { label: "Bedankt!", value: "bedankt" },
    ],
  },
  "gerecht foto": {
    text: "Stuur me de foto van een gerecht en onze **AI Vision** identificeert:\n\n- De naam van het gerecht en de samenstelling\n- Geschatte calorieën\n- Mogelijke allergenen\n- Ideale wijnbegeleiding\n\n**Voorbeeld:**\n*Foto van een risotto* → \"Eekhoorntjesbroodrisotto, 24 maanden Parmezaan\"\n→ Begeleiding: Barolo 2019 of Chardonnay\n\nPerfect om een gerecht dat u lekker vond terug te vinden of een gerechten-wijnbegeleiding te ontdekken!",
    delay: 2000,
    quickReplies: [
      { label: "Wijnkaart", value: "wijnkaart" },
      { label: "Dagmenu", value: "menu" },
      { label: "Reserveren", value: "reservering" },
    ],
  },
  beoordeling: {
    text: "Uw beoordeling telt enorm voor ons!\n\n**Laat uw beoordeling achter:**\n\n1. **Google** — Directe link verstuurd via WhatsApp\n2. **TripAdvisor** — Eén klik volstaat\n3. **TheFork** — Beoordeel uw ervaring\n\n**In ruil:**\n- Een gratis dessert bij uw volgende bezoek\n- Inschrijving in het loyaltyprogramma\n- Uitnodiging voor privé-avonden\n\nUw tevredenheid is onze prioriteit. Negatieve feedback? Onze chef belt u persoonlijk terug.",
    delay: 1800,
    quickReplies: [
      { label: "Google beoordeling", value: "beoordeling" },
      { label: "Loyaltyprogramma", value: "loyaliteit" },
      { label: "Opnieuw reserveren", value: "reservering" },
    ],
  },
  evenement: {
    text: "Privé-evenementen bij Gourmet IA:\n\n**Onze ruimten:**\n- **Privésalon** — 8-16 personen\n- **Gewelfd zaaltje** — 20-40 personen\n- **Geprivatiseerd terras** — 30-60 personen\n- **Volledig restaurant** — tot 80 personen\n\n**Gelegenheden:**\n- Verjaardagen, huwelijken, verlovingen\n- Seminaries, teambuilding\n- Zakendiner\n\n**Inbegrepen:**\n- Maatwerksteker van de Chef\n- Gepersonaliseerde decoratie\n- Toegewijd bedieningsteam\n- DJ / animatie op aanvraag\n\nBudget vanaf **65 EUR/persoon**. Offerte binnen 24u.",
    delay: 2400,
    quickReplies: [
      { label: "Offerte aanvragen", value: "afspraak" },
      { label: "Maatwerksteker", value: "menu" },
      { label: "Chef contacteren", value: "chef contacteren" },
    ],
  },
  loyaliteit: {
    text: "Loyaltyprogramma **Gourmet Club**:\n\n**Hoe werkt het:**\n- 1 EUR besteed = 1 punt\n- 100 punten = 10 EUR korting\n\n**Ledenvoordelen:**\n- Gratis dessert bij inschrijving\n- -15% op uw verjaardag\n- Prioriteitstoegang tot privé-avonden\n- Exclusieve proeverijen (wijnen, seizoensmenus)\n- Prioriteitsreservering in het weekend\n\n**Uw huidige saldo:** Schrijf u in om te beginnen sparen!\n\nGratis inschrijving, direct hier via WhatsApp.",
    delay: 2000,
    quickReplies: [
      { label: "Inschrijven", value: "reservering bevestigen" },
      { label: "Reserveren", value: "reservering" },
      { label: "Dagmenu", value: "menu" },
    ],
  },
  wijnkaart: {
    text: "Onze **wijnkaart**:\n\n**Witte wijnen:**\n- Chablis Premier Cru 2021 — 12 EUR / 48 EUR\n- Sancerre, Domaine Vacheron — 10 EUR / 42 EUR\n- Meursault 2020 — 16 EUR / 65 EUR\n\n**Rode wijnen:**\n- Saint-Émilion Grand Cru 2018 — 14 EUR / 58 EUR\n- Châteauneuf-du-Pape 2019 — 13 EUR / 52 EUR\n- Barolo DOCG 2017 — 18 EUR / 72 EUR\n\n**Champagnes:**\n- Veuve Clicquot Brut — 75 EUR\n- Dom Pérignon 2012 — 220 EUR\n- Ruinart Blanc de Blancs — 95 EUR\n\n**Gerechten-wijnbegeleiding:** Onze AI-sommelier stelt de perfecte combinatie voor op basis van uw menu.",
    delay: 2200,
    quickReplies: [
      { label: "Begeleiding bij menu", value: "gerecht foto" },
      { label: "Dagmenu", value: "menu" },
      { label: "Reserveren", value: "reservering" },
    ],
  },
  vegetarisch: {
    text: "Vegetarische & veganistische opties:\n\n**Vegetarisch:**\n- Burrata, heirloom tomaten, pesto — 15 EUR\n- Eekhoorntjesbroodrisotto, Parmezaan — 24 EUR\n- Huisgemaakte gnocchi, salie-botersaus — 20 EUR\n- Dunne groententaart van het seizoen — 18 EUR\n\n**Veganistisch:**\n- Tofu poke bowl, edamame, avocado — 19 EUR\n- Eekhoorntjesbroodrisotto (veganistische versie) — 24 EUR\n- Buddha bowl quinoa, geroosterde groenten — 18 EUR\n- Huisgemaakt versenfruitsorbetijs — 9 EUR\n\n**Op aanvraag:** Onze chef past elk gerecht van de kaart aan. Vermeld het bij de reservering!",
    delay: 2000,
    quickReplies: [
      { label: "Allergenen?", value: "allergenen" },
      { label: "Volledig menu", value: "menu" },
      { label: "Reserveren", value: "reservering" },
    ],
  },
  "reservering annuleren": {
    text: "Reservering wijzigen of annuleren:\n\n**Wijzigen:**\n- Geef uw naam of reserveringsnummer\n- Gewenst nieuw tijdslot\n- Wijziging aantal couverts\n\n**Annuleren:**\n- Gratis annulering tot 2u voor aanvang\n- Daarna geldt een tegoedbon van 50%\n\n**No-show beleid:**\n- 2 no-shows → tijdelijke schorsing online reserveringen\n\nGeef me uw naam, dan zoek ik uw reservering op.",
    delay: 1800,
    quickReplies: [
      { label: "Reservering wijzigen", value: "reservering" },
      { label: "Nieuwe reservering", value: "reservering" },
      { label: "Openingsuren", value: "openingsuren" },
    ],
  },
  "chef contacteren": {
    text: "Bericht aan de Chef:\n\nOnze Chef **Marc Dubois** (1 Michelin-ster) staat voor u klaar voor:\n\n- **Maatwerksteker** — Evenementen, allergieën, voorkeuren\n- **Speciale wens** — Signatuurgerecht, à la carte\n- **Kookles** — Privésessies (4-8 pers.)\n- **Catering** — Evenementen aan huis\n\nLaat hier uw bericht achter, de Chef antwoordt binnen 24u.\n\nOf reserveer een direct gesprek met hem via onze kalender.",
    delay: 2000,
    quickReplies: [
      { label: "Maatwerksteker", value: "evenement" },
      { label: "Kookles", value: "evenement" },
      { label: "Reserveren", value: "reservering" },
    ],
  },
};

const restaurantKeywordsNL: Record<string, string[]> = {
  hallo: ["hallo", "hoi", "hey", "goedemorgen", "goedenavond", "hi", "hello"],
  reservering: ["reserveren", "reservering", "tafel", "couvert", "plaatsen", "booking"],
  menu: ["menu", "kaart", "gerecht", "voorgerecht", "dessert", "formule", "suggestie", "specialiteit"],
  allergenen: ["allergeen", "allergie", "gluten", "lactose", "intolerantie", "noten", "pinda"],
  openingsuren: ["openingsuren", "uur", "opening", "gesloten", "open", "wanneer", "adres", "parking"],
  afhalen: ["afhalen", "bezorging", "thuisbezorging", "delivery", "uber eats", "deliveroo", "takeaway"],
  bestelling: ["bestellen", "bestelling", "meenemen", "afhaalbestelling", "take-away", "click collect"],
  "gerecht foto": ["foto", "afbeelding", "identificeren", "welk gerecht"],
  beoordeling: ["beoordeling", "review", "score", "ster", "commentaar", "feedback", "google"],
  evenement: ["evenement", "verjaardag", "privé", "groep", "seminar", "huwelijk", "feest"],
  loyaliteit: ["loyaliteit", "loyalty", "punt", "programma", "club", "voordeel", "korting"],
  wijnkaart: ["wijn", "wine", "fles", "champagne", "rood", "wit", "sommelier", "druif"],
  vegetarisch: ["vegetarisch", "veganistisch", "veggie", "groente", "plantaardig", "zonder vlees"],
  "reservering annuleren": ["annuleren", "annulering", "wijzigen", "verplaatsen", "no show"],
  "chef contacteren": ["chef", "keuken", "kok", "catering", "kookles", "speciaal"],
};

const { intents, keywords } = mergeWithVocalisNL(restaurantIntentsNL, restaurantKeywordsNL);

export const restaurantConfigNL: SimulatorConfig = {
  botName: "Gourmet IA",
  botAvatar: "LG",
  welcomeMessage:
    "Welkom bij **Gourmet IA**! Ik ben uw AI-assistent.\n\nIk kan u helpen met:\n- Een tafel reserveren\n- Het dagmenu bekijken\n- Afhalen bestellen\n- Onze wijnen ontdekken\n- Een evenement organiseren\n\nWat wenst u?",
  initialQuickReplies: [
    { label: "Tafel reserveren", value: "reservering" },
    { label: "Dagmenu", value: "menu" },
    { label: "Afhaalbestelling", value: "bestelling" },
    { label: "Wijnkaart", value: "wijnkaart" },
    { label: "Openingsuren", value: "openingsuren" },
  ],
  intents,
  keywords,
  fallback: createFallbackNL([
    { label: "Reserveren", value: "reservering" },
    { label: "Menu", value: "menu" },
    { label: "Openingsuren", value: "openingsuren" },
    { label: "Tarieven Vocalis", value: "prijs" },
  ]),
};

export default restaurantConfigNL;
