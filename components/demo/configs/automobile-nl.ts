import type { SimulatorConfig, BotResponse } from "../WhatsAppSimulator";
import { mergeWithVocalisNL, createFallbackNL } from "./vocalis-features-nl";

const sectorIntents: Record<string, BotResponse> = {
  hallo: {
    text: "Welkom bij **AutoPrestige** ! Ik ben uw IA-assistent.\n\nIk kan u helpen met :\n- Het vinden van het ideale voertuig\n- Een proefrit reserveren\n- Uw inruilwaarde schatten\n- Een financiering simuleren\n\nWat zoekt u ?",
    delay: 1000,
    quickReplies: [
      { label: "Voertuig zoeken", value: "voertuig" },
      { label: "Proefrit", value: "proefrit" },
      { label: "Inruil schatten", value: "inruil" },
      { label: "Financiering", value: "financiering" },
    ],
  },

  voertuig: {
    text: "**Voertuig zoeken AutoPrestige** :\n\nGeef uw criteria op om de selectie te verfijnen :\n\n**Onze categorieën :**\n- Stadswagens (vanaf 15 990 EUR)\n- Berlines (vanaf 28 900 EUR)\n- SUV & Crossover (vanaf 32 500 EUR)\n- Sportwagens (vanaf 45 000 EUR)\n- Elektrisch & Hybride (vanaf 35 900 EUR)\n\n**Uitgelicht deze week :**\n- **BMW Serie 3 320d** — 38 900 EUR | 2024 | 12 000 km\n- **Mercedes GLC 300e** — 52 500 EUR | 2025 | 5 000 km\n- **Audi A4 Avant** — 41 200 EUR | 2024 | 18 000 km\n- **Tesla Model 3** — 39 990 EUR | 2025 | 3 200 km\n\nWelk type voertuig interesseert u ?",
    delay: 2200,
    quickReplies: [
      { label: "SUV", value: "voertuig" },
      { label: "Elektrisch", value: "voertuig" },
      { label: "Proefrit", value: "proefrit" },
      { label: "Financiering", value: "financiering" },
    ],
  },

  proefrit: {
    text: "**Uw proefrit reserveren** :\n\nBeleef de rijervaring voor u koopt !\n\n**Beschikbare voertuigen voor proefrit :**\n- BMW Serie 3 — Berline, diesel/benzine\n- Mercedes GLC — SUV plug-in hybride\n- Audi A4 Avant — Premium break\n- Tesla Model 3 — 100% elektrisch\n- Peugeot 3008 — Franse SUV\n\n**Volgende tijdsloten :**\n- Zaterdag 19 april — 10u, 14u, 16u\n- Maandag 21 april — 9u, 11u, 15u\n- Dinsdag 22 april — 10u, 14u\n\n**Duur :** 30 min begeleide rit\n**Documenten :** Geldig rijbewijs\n\nWelk voertuig en tijdslot wilt u ?",
    delay: 2000,
    quickReplies: [
      { label: "BMW zaterdag 10u", value: "proefrit bevestigen" },
      { label: "Tesla maandag 11u", value: "proefrit bevestigen" },
      { label: "Ander voertuig", value: "voertuig" },
      { label: "Ander tijdslot", value: "proefrit" },
    ],
  },

  "proefrit bevestigen": {
    text: "Proefrit bevestigd !\n\n**Voertuig :** BMW Serie 3 320d\n**Datum :** Zaterdag 19 april 2026\n**Uur :** 10:00 (30 min)\n**Locatie :** AutoPrestige — Autoweg 120\n\n**Begeleider :** Thomas M. (verkoopsadviseur)\n\nU ontvangt :\n- WhatsApp bevestiging\n- Herinnering de dag ervoor\n- Routebeschrijving + parking\n\nVergeet uw rijbewijs niet mee te nemen.\nTot zaterdag !",
    delay: 1800,
    quickReplies: [
      { label: "Bedankt !", value: "bedankt" },
      { label: "Financiering", value: "financiering" },
    ],
  },

  financiering: {
    text: "**Financieringssimulator AutoPrestige** :\n\nVoorbeeld voor een **BMW Serie 3** aan 38 900 EUR :\n\n**Klassieke lening :**\n- Aanbetaling : 5 000 EUR\n- Looptijd : 48 maanden\n- Maandlast : **749 EUR/maand**\n- JKP : 4,9%\n\n**Financiële leasing :**\n- Aanbetaling : 3 000 EUR\n- Looptijd : 36 maanden / 15 000 km/jaar\n- Huurprijs : **449 EUR/maand**\n- Aankoopoptie : 15 560 EUR\n\n**Operationele leasing :**\n- Alles inbegrepen (verzekering + onderhoud)\n- **549 EUR/maand** over 36 maanden\n\nOnze partners : **BNP, Cetelem, Cofidis**\nAntwoord binnen **24u**. Wilt u een gepersonaliseerde simulatie ?",
    delay: 2400,
    quickReplies: [
      { label: "Persoonlijke simulatie", value: "financiering" },
      { label: "Leasing details", value: "financiering" },
      { label: "Proefrit", value: "proefrit" },
      { label: "Inruil voertuig", value: "inruil" },
    ],
  },

  inruil: {
    text: "**Inruilschatting AutoPrestige** :\n\nVoor de schatting van uw voertuig heb ik nodig :\n- Merk en model\n- Jaar van inschrijving\n- Kilometerstand\n- Brandstof (benzine/diesel/hybride/elektrisch)\n\n**Voorbeeld schatting :**\n- Peugeot 308 — 2021 — 45 000 km — Diesel\n- **Schatting : 14 500 — 16 200 EUR**\n\n**Onze belofte :**\n- Gratis schatting en vrijblijvend\n- Gegarandeerde prijs **7 dagen**\n- Inruil ook zonder aankoop bij ons\n- Overschrijving binnen **48u** na akkoord\n\nStuur me de gegevens van uw voertuig of een foto !",
    delay: 2000,
    quickReplies: [
      { label: "Foto sturen", value: "voertuig foto" },
      { label: "Voertuigen in stock", value: "voertuig" },
      { label: "Financiering", value: "financiering" },
      { label: "Terug naar start", value: "hallo" },
    ],
  },

  "voertuig foto": {
    text: "Bedankt voor de foto ! **IA-analyse bezig**...\n\n**Analyseresultaat :**\n\n- **Voertuig herkend :** Renault Megane IV — 2020\n- **Carrosserie staat :** Goed (micro-kras rechterdeur)\n- **Lak staat :** Zeer goed (kleur platina grijs)\n- **Velgen :** Goede staat, 1 lichte schaafplek\n\n**IA-schatting :** 12 800 — 14 200 EUR\n\n**Om te verfijnen :**\n- Exacte kilometerstand ?\n- Onderhoudsboekje bijgewerkt ?\n- Geldig keuringsattest ?\n\nEen expert kan binnen **24u** bevestigen met fysieke inspectie.",
    delay: 2800,
    quickReplies: [
      { label: "Inruil bevestigen", value: "inruil" },
      { label: "Fysieke inspectie", value: "inruil" },
      { label: "Nieuwe voertuigen", value: "voertuig" },
      { label: "Terug naar start", value: "hallo" },
    ],
  },

  onderhoud: {
    text: "**Onderhoudsatelier AutoPrestige** :\n\n**Onze diensten :**\n- **Volledige beurt** — vanaf 189 EUR (olieverversing + filters + diagnose)\n- **Olieverversing** — 79 EUR (olie + filter)\n- **Banden** — vanaf 65 EUR/band (montage + balanceren inbegrepen)\n- **Remmen** — vanaf 149 EUR (voorremblokken)\n- **Airconditioning** — 89 EUR (vulling + ontsmetting)\n- **Uitlijning** — 69 EUR\n\n**Volgende tijdsloten :**\n- Maandag 21 april — 8u, 10u, 14u\n- Woensdag 23 april — 9u, 11u\n- Vrijdag 25 april — 8u, 15u\n\n**Gratis vervangwagen** bij interventies > 2u.\n\nWelke dienst wenst u ?",
    delay: 2200,
    quickReplies: [
      { label: "Volledige beurt", value: "onderhoud bevestigen" },
      { label: "Banden", value: "onderhoud bevestigen" },
      { label: "Onderhoud herinnering", value: "onderhoud herinnering" },
      { label: "Terug naar start", value: "hallo" },
    ],
  },

  "onderhoud bevestigen": {
    text: "Atelierafspraak bevestigd !\n\n**Dienst :** Volledige beurt\n**Datum :** Maandag 21 april 2026 — 8u00\n**Geschatte duur :** 2u30\n**Vervangwagen :** Ja (Peugeot 208)\n\n**Inbegrepen :**\n- Motorolieverversing\n- Vervanging filters (lucht, olie, habitacle)\n- Elektronische diagnose 32 punten\n- Niveaus + verlichting\n\n**Tarief :** 189 EUR incl. btw\n\nWhatsApp herinnering de dag ervoor. Breng uw kentekencard mee.",
    delay: 1800,
    quickReplies: [
      { label: "Bedankt !", value: "bedankt" },
      { label: "Afspraak annuleren", value: "onderhoud" },
    ],
  },

  "onderhoud herinnering": {
    text: "**Automatische onderhoudherinneringen** :\n\nOnze IA volgt de staat van uw voertuig :\n\n**Uw voertuig :** BMW Serie 3 — 2024\n\n**Volgende geplande onderhoudsbeurten :**\n- **Beurt** — Over 2 200 km (gepland mei 2026)\n- **Banden** — Slijtage 40%, vervanging gepland augustus 2026\n- **Keuring** — Vervaldatum september 2026\n- **Remblokken** — Staat OK, controle over 15 000 km\n\n**Actieve waarschuwingen :**\n- WhatsApp 30 dagen voor vervaldatum\n- SMS 7 dagen voor\n- Automatische afspraakvoorstelling\n\nWilt u uw meldingen aanpassen ?",
    delay: 2000,
    quickReplies: [
      { label: "Meldingen aanpassen", value: "onderhoud herinnering" },
      { label: "Onderhoud reserveren", value: "onderhoud" },
      { label: "Technische keuring", value: "technische keuring" },
      { label: "Terug naar start", value: "hallo" },
    ],
  },

  garantie: {
    text: "**Garanties AutoPrestige** :\n\n**Nieuwe voertuigen :**\n- Fabrieksgarantie : **2 tot 5 jaar** naargelang merk\n- Uitbreiding mogelijk tot **7 jaar / 150 000 km**\n\n**Occasievoertuigen :**\n- **AutoPrestige garantie** : minimum 12 maanden\n- Uitbreiding **24 of 36 maanden** beschikbaar\n- Dekking : motor, versnellingsbak, stuur, ophanging, elektronica\n\n**Onze engagementen :**\n- Vervangvoertuig tijdens herstelling\n- 24/7 pechverhelping inbegrepen\n- Geen vrijstelling op gedekte onderdelen\n\nUw huidige garantie vervalt op **15/01/2028**.",
    delay: 2000,
    quickReplies: [
      { label: "Garantie uitbreiden", value: "garantie" },
      { label: "Schadeclaim indienen", value: "garantie" },
      { label: "Onderhoud", value: "onderhoud" },
      { label: "Terug naar start", value: "hallo" },
    ],
  },

  onderdelen: {
    text: "**Onderdelen AutoPrestige** :\n\n**Beschikbaarheid :**\n- Originele fabrieksonderdelen\n- Gecertificeerde equivalente onderdelen\n- Accessoires en uitrusting\n\n**Snel zoeken :**\nGeef uw voertuig + het gezochte onderdeel op.\n\n**Voorbeeld :**\n- Oliefilter BMW Serie 3 — **24,90 EUR** (op stock)\n- Voorremblokken Mercedes GLC — **89,00 EUR** (beschikbaar D+1)\n- Accu Audi A4 — **179,00 EUR** (op stock)\n\n**Services :**\n- Levering aan concessie of thuis\n- Montage in atelier (voordeeltarief)\n- 2 jaar garantie op alle onderdelen\n\nWelk onderdeel zoekt u ?",
    delay: 2000,
    quickReplies: [
      { label: "Onderdeel zoeken", value: "onderdelen" },
      { label: "Bestellen", value: "onderdelen" },
      { label: "Atelierafspraak", value: "onderhoud" },
      { label: "Terug naar start", value: "hallo" },
    ],
  },

  occasion: {
    text: "**Occasievoertuigen AutoPrestige** :\n\nAl onze voertuigen zijn **150 punten gecontroleerd** :\n\n**Huidige selectie :**\n- **Peugeot 3008 GT** — 2023 — 28 000 km — 29 900 EUR\n- **VW Golf 8 R-Line** — 2022 — 35 000 km — 24 500 EUR\n- **Renault Arkana** — 2024 — 12 000 km — 27 800 EUR\n- **BMW X1 xDrive** — 2023 — 22 000 km — 36 900 EUR\n- **Citroën C5 X** — 2024 — 8 000 km — 31 200 EUR\n\n**Voordelen occasion AutoPrestige :**\n- Minimum 12 maanden garantie\n- Volledig gecertificeerde geschiedenis\n- Inruil van uw oud voertuig\n- Maatwerk financiering\n\nInteresseert een voertuig u ?",
    delay: 2400,
    quickReplies: [
      { label: "Proefrit Peugeot 3008", value: "proefrit" },
      { label: "Financiering", value: "financiering" },
      { label: "Inruil", value: "inruil" },
      { label: "Terug naar start", value: "hallo" },
    ],
  },

  actie: {
    text: "**Speciale aanbiedingen AutoPrestige** :\n\n**Lente 2026 :**\n- **-3 000 EUR** op de BMW Serie 1 en 3 gamma\n- **Leasing aan 299 EUR/maand** voor Peugeot 3008 (aanbetaling 2 500 EUR)\n- **Conversiepremie** : tot 5 000 EUR op elektrische voertuigen\n- **3 jaar onderhoudspack** gratis bij elke nieuwe aankoop\n\n**Weekend flash :**\n- Dubbele inruil op uw oud voertuig (schatting + 10%)\n- Set banden gratis bij occasion SUV's\n\n**Geldig tot 30 april 2026.**\n\nProfiteer er nu van !",
    delay: 2000,
    quickReplies: [
      { label: "BMW in actie", value: "voertuig" },
      { label: "Leasing simuleren", value: "financiering" },
      { label: "Conversiepremie", value: "voertuig" },
      { label: "Terug naar start", value: "hallo" },
    ],
  },

  autoverzekering: {
    text: "**Autoverzekering — Partners AutoPrestige** :\n\nWij werken samen met de beste verzekeraars :\n\n**Onderhandelde aanbiedingen :**\n- **Omnium** — vanaf 45 EUR/maand (50% bonus)\n- **Beperkte omnium** — vanaf 28 EUR/maand\n- **Jongere bestuurder** — vanaf 65 EUR/maand\n\n**Inbegrepen in onze aanbiedingen :**\n- 0 km bijstand 24/7\n- Vervangvoertuig\n- Glasbreuk zonder vrijstelling\n- Rechtsbijstand\n\n**Partners :** AXA, Allianz, AG Insurance, Ethias\n\nGratis simulatie in **2 minuten**.\nOfferte verstuurd via WhatsApp.",
    delay: 2000,
    quickReplies: [
      { label: "Verzekering simuleren", value: "autoverzekering" },
      { label: "Auto financiering", value: "financiering" },
      { label: "Voertuigen", value: "voertuig" },
      { label: "Terug naar start", value: "hallo" },
    ],
  },

  "technische keuring": {
    text: "**Technische keuring AutoPrestige** :\n\n**Ons erkend centrum :**\n- Periodieke technische keuring (TK)\n- Herkeuring\n- Vrijwillige controle (voor aankoop/verkoop)\n\n**Tarieven :**\n- Standaard TK : **69 EUR**\n- Herkeuring : **29 EUR**\n- TK + voorcontrole : **89 EUR** (aanbevolen)\n\n**Volgende tijdsloten :**\n- Donderdag 24 april — 8u, 10u, 14u, 16u\n- Vrijdag 25 april — 9u, 11u\n\n**Uw voertuig :** TK te vernieuwen voor **15/09/2026**\n\n**Duur :** ongeveer 45 min\nVoertuig dezelfde dag terug.",
    delay: 1800,
    quickReplies: [
      { label: "TK reserveren", value: "onderhoud bevestigen" },
      { label: "TK herinnering", value: "onderhoud herinnering" },
      { label: "Onderhoud", value: "onderhoud" },
      { label: "Terug naar start", value: "hallo" },
    ],
  },

  levering: {
    text: "**Leveringsopties AutoPrestige** :\n\n**In de showroom :**\n- Gepersonaliseerde levering met uw adviseur\n- Volledige voertuigpresentatie (1u)\n- Ingebruikname + instellingen\n- Gratis\n\n**Aan huis :**\n- Levering via dieplader\n- Straal 100 km : **149 EUR**\n- Straal 200 km : **249 EUR**\n- Heel België : **op aanvraag**\n\n**Termijnen :**\n- Voertuig op stock : **48-72u**\n- Fabrieksbestelling : **3 tot 6 maanden** naargelang model\n\nOverhandiging documenten (kentekenbewijs, verzekering) op leveringsdag.",
    delay: 2000,
    quickReplies: [
      { label: "Thuislevering", value: "levering" },
      { label: "Voertuigen op stock", value: "voertuig" },
      { label: "Financiering", value: "financiering" },
      { label: "Terug naar start", value: "hallo" },
    ],
  },
};

const sectorKeywords: Record<string, string[]> = {
  hallo: ["hallo", "goedendag", "hoi", "hey", "goedeavond", "hi", "dag", "goeiedag"],
  voertuig: ["voertuig", "auto", "wagen", "model", "berline", "suv", "stadswagen", "sportwagen", "elektrisch", "hybride", "nieuw", "zoeken"],
  proefrit: ["proefrit", "testrit", "testen", "test drive", "proefrijden", "rijden"],
  financiering: ["financiering", "krediet", "leasing", "lening", "maandlast", "huurprijs", "betalen", "lenen", "rente"],
  inruil: ["inruil", "inruilen", "terugverkopen", "verkopen", "schatten", "schatting", "waarde", "argus", "terugkoop"],
  "voertuig foto": ["foto", "afbeelding", "staat", "kras", "carrosserie", "schade", "ongeluk", "botsing"],
  onderhoud: ["onderhoud", "beurt", "olieverversing", "band", "rem", "airco", "uitlijning", "herstelling", "atelier", "technicus"],
  "onderhoud herinnering": ["herinnering", "waarschuwing", "melding", "vervaldatum", "volgend onderhoud"],
  garantie: ["garantie", "uitbreiding", "dekking", "panne", "claim", "verzekering panne"],
  onderdelen: ["onderdeel", "onderdelen", "filter", "accu", "lamp", "ruitenwisser", "accessoire"],
  occasion: ["occasion", "tweedehands", "gebruikt", "km", "kilometerstand", "tweede hands"],
  actie: ["actie", "promo", "aanbieding", "korting", "vermindering", "flash", "deal", "koopje"],
  autoverzekering: ["verzekering", "verzekeren", "omnium", "beperkte omnium", "schade", "axa", "allianz"],
  "technische keuring": ["technische keuring", "keuring", "herkeuring", "inspectie", "controle"],
  levering: ["levering", "leveren", "ontvangen", "thuis", "transport", "dieplader", "leveringstermijn"],
};

const merged = mergeWithVocalisNL(sectorIntents, sectorKeywords);

export const automobileConfigNL: SimulatorConfig = {
  botName: "AutoPrestige IA",
  botAvatar: "AP",
  welcomeMessage:
    "Welkom bij **AutoPrestige** ! Ik ben uw IA-assistent.\n\nVoertuig zoeken, proefrit, financiering, inruil, onderhoud — ik regel alles.\n\nHoe kan ik u helpen ?",
  initialQuickReplies: [
    { label: "Voertuig zoeken", value: "voertuig" },
    { label: "Proefrit", value: "proefrit" },
    { label: "Inruil schatten", value: "inruil" },
    { label: "Financiering", value: "financiering" },
    { label: "Onderhoud", value: "onderhoud" },
    { label: "Acties", value: "actie" },
  ],
  intents: merged.intents,
  keywords: merged.keywords,
  fallback: createFallbackNL([
    { label: "Voertuigen", value: "voertuig" },
    { label: "Proefrit", value: "proefrit" },
    { label: "Financiering", value: "financiering" },
    { label: "Onderhoud", value: "onderhoud" },
  ]),
};

export default automobileConfigNL;
