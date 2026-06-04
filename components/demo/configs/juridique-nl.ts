import type { SimulatorConfig, BotResponse } from "../WhatsAppSimulator";
import { mergeWithVocalisNL, createFallbackNL } from "./vocalis-features-nl";

const sectorIntents: Record<string, BotResponse> = {
  hallo: {
    text: "Goedendag ! Welkom bij **JurisAssist**.\n\nIk ben uw juridische IA-assistent, 24u/24 beschikbaar.\n\nIk kan u helpen met :\n- Een consultatie-afspraak plannen\n- Uw rechtsgebied bepalen\n- Uw dossier opvolgen\n- Een juridisch document analyseren\n- Onze honoraria raadplegen\n- Een juridische noodsituatie behandelen\n\nHoe kan ik u bijstaan ?",
    delay: 1400,
    quickReplies: [
      { label: "Consultatie", value: "consultatie" },
      { label: "Rechtsgebieden", value: "rechtsgebieden" },
      { label: "Dossier opvolging", value: "dossier opvolging" },
      { label: "Noodgeval", value: "juridische noodsituatie" },
    ],
  },

  consultatie: {
    text: "**Een juridische consultatie reserveren**\n\nBeschikbare tijdsloten :\n\n- Maandag 10u00 of 15u00\n- Dinsdag 9u00 of 14u00\n- Woensdag 11u00 of 16u00\n- Donderdag 10u00 of 17u00\n- Vrijdag 9u00 of 14u00\n\n**Formaten :**\n- Op kantoor (Brussel, Antwerpen, Gent)\n- Via videoconferentie (Zoom / WhatsApp Video)\n- Telefonisch\n\n**Eerste consultatie :** 30 min gratis om uw situatie te beoordelen.\n\nWelk tijdslot past u ?",
    delay: 2000,
    quickReplies: [
      { label: "Maandag 10u", value: "afspraak bevestigen" },
      { label: "Dinsdag 14u", value: "afspraak bevestigen" },
      { label: "Ander tijdslot", value: "ander tijdslot" },
      { label: "Honoraria", value: "honoraria" },
    ],
  },

  rechtsgebieden: {
    text: "**Onze expertisegebieden :**\n\n**Familierecht**\n- Echtscheiding, voogdij, alimentatie, adoptie\n\n**Vastgoedrecht**\n- Huurgeschillen, mede-eigendom, bouw\n\n**Handelsrecht**\n- Contracten, vennootschappen, handelsgeschillen\n\n**Strafrecht**\n- Strafrechtelijke verdediging, aanhouding, overtredingen\n\n**Arbeidsrecht**\n- Ontslag, pesterijen, arbeidsrechtbank\n\n**Vennootschapsrecht**\n- Oprichting, overdracht, vereffening\n\nIn welk domein heeft u hulp nodig ?",
    delay: 2200,
    quickReplies: [
      { label: "Familie / Echtscheiding", value: "echtscheiding" },
      { label: "Arbeid", value: "contract" },
      { label: "Bedrijf oprichten", value: "bedrijf oprichten" },
      { label: "Huur / Vastgoed", value: "huurovereenkomst" },
    ],
  },

  honoraria: {
    text: "**Tariefoverzicht JurisAssist**\n\n**Eerste consultatie** — Gratis (30 min)\nBeoordeling van uw situatie + actieplan\n\n**Standaard consultatie** — estimation personnalisee\nDiepgaande analyse, persoonlijk advies\n\n**Forfait eenvoudig dossier** — 800 - estimation personnalisee\nIngebrekestelling, contractlezing\n\n**Forfait geschil** — 2 000 - estimation personnalisee\nVertegenwoordiging rechtbank, onderhandeling\n\n**Bedrijfsabonnement** — Op maat\nPermanente juridische begeleiding\n\n**Rechtsbijstand** aanvaard naargelang voorwaarden.\n\nAlle honoraria worden vóór engagement meegedeeld.",
    delay: 2200,
    quickReplies: [
      { label: "Eerste consultatie", value: "consultatie" },
      { label: "Rechtsbijstand", value: "rechtsbijstand" },
      { label: "Bedrijfsforfait", value: "bedrijf oprichten" },
      { label: "Afspraak maken", value: "consultatie" },
    ],
  },

  documenten: {
    text: "**Voor te bereiden documenten voor uw dossier :**\n\n**Elk dossier :**\n- Geldig identiteitsbewijs\n- Bewijs van adres (< 3 maanden)\n- Chronologie van de feiten (bij geschil)\n\n**Naargelang het domein :**\n- Betrokken contract(en)\n- Correspondentie (e-mails, brieven)\n- Eerdere rechterlijke beslissingen\n- Bewijzen (foto's, getuigenissen, facturen)\n\n**IA-tip :** Stuur me een foto van uw document, ik maak er een **automatische samenvatting** van met de kernpunten.\n\nWelke documenten heeft u ?",
    delay: 2000,
    quickReplies: [
      { label: "Document sturen", value: "document foto" },
      { label: "Afspraak maken", value: "consultatie" },
      { label: "Verjaringstermijnen", value: "verjaringstermijnen" },
      { label: "Dossier opvolging", value: "dossier opvolging" },
    ],
  },

  "dossier opvolging": {
    text: "**Opvolging van uw juridisch dossier**\n\nVoer uw dossiernummer in om de stand in real-time te zien.\n\n**Gevolgde stappen :**\n- Dossier openen\n- Stukken verzamelen\n- Juridische analyse\n- Ingebrekestelling / Onderhandeling\n- Gerechtelijke procedure (indien nodig)\n- Zitting\n- Beslissing / Vonnis\n- Uitvoering\n\nU ontvangt een **WhatsApp-melding** bij elke vordering.\n\n*Referentieformaat : JUR-2026-XXXX*",
    delay: 1800,
    quickReplies: [
      { label: "Referentie ingeven", value: "dossier opvolging" },
      { label: "Mijn advocaat contacteren", value: "consultatie" },
      { label: "Ontbrekende documenten", value: "documenten" },
      { label: "Lopende termijnen", value: "verjaringstermijnen" },
    ],
  },

  "juridische noodsituatie": {
    text: "**Juridische noodsituatie — Onmiddellijke hulp**\n\nAls u in een urgente situatie bent :\n\n**Aanhouding** — Recht op onmiddellijke advocaat\nBel onze urgentielijn 24/7\n\n**Dreigende uithuiszetting** — Wettelijke termijnen controleren\nWij kunnen kort geding voeren\n\n**Partnergeweld** — 0800 30 030 + aangifte indienen\nDringende juridische begeleiding\n\n**Beslag** — Verzet mogelijk binnen 48u\n\n**Ernstig ongeval** — Bewijzen bewaren\n\nBeschrijf uw situatie en een advocaat belt u terug binnen **30 minuten**.",
    delay: 2200,
    quickReplies: [
      { label: "Aanhouding", value: "juridische noodsituatie" },
      { label: "Uithuiszetting", value: "huurovereenkomst" },
      { label: "Onmiddellijk terugbellen", value: "consultatie" },
      { label: "Rechtsbijstand", value: "rechtsbijstand" },
    ],
  },

  "document foto": {
    text: "Stuur me een foto van uw juridisch document en onze **IA analyseert** automatisch :\n\n- **Samenvatting van kernclausules**\n- **Verplichtingen van elke partij**\n- **Belangrijke termijnen en deadlines**\n- **Mogelijke onrechtmatige clausules**\n- **Juridische aandachtspunten**\n\nAanvaarde formaten : contract, huurovereenkomst, ingebrekestelling, vonnis, statuten, notulen.\n\nDe analyse duurt ongeveer 15 seconden. Stuur uw document !",
    delay: 1800,
    quickReplies: [
      { label: "Contract analyseren", value: "contract" },
      { label: "Huurovereenkomst analyseren", value: "huurovereenkomst" },
      { label: "Advocaatafspraak", value: "consultatie" },
      { label: "Honoraria", value: "honoraria" },
    ],
  },

  ingebrekestelling: {
    text: "**Ingebrekestelling — Procedure**\n\nEen ingebrekestelling is een formele brief die de ontvanger verplicht te handelen.\n\n**Stappen :**\n1. Bepaling van het geschil en wettelijke basis\n2. Opstelling door ons juridisch team\n3. Verzending per **aangetekende post met ontvangstmelding**\n4. Reactietermijn : 8 tot 15 dagen\n5. Geen reactie → gerechtelijke actie\n\n**Forfait ingebrekestelling :** estimation personnalisee\nInbegrepen : opstelling + verzending + opvolging\n\n**Minnelijke schikkingspercentage : 65%**\n\nWilt u dat wij uw ingebrekestelling opstellen ?",
    delay: 2000,
    quickReplies: [
      { label: "Ja, opstarten", value: "consultatie" },
      { label: "Vereiste documenten", value: "documenten" },
      { label: "Hoeveel kost het", value: "honoraria" },
      { label: "Wettelijke termijnen", value: "verjaringstermijnen" },
    ],
  },

  echtscheiding: {
    text: "**Echtscheidingsprocedure — Overzicht**\n\n**Onderlinge toestemming**\n- Duur : 2 tot 4 maanden\n- Gemiddelde kost : 1 500 - estimation personnalisee\n- Akkoord over alles : goederen, kinderen, alimentatie\n- Registratie bij notaris (geen rechter)\n\n**Feitelijke scheiding**\n- Duur : 12 tot 24 maanden\n- Verzoekschrift bij familierechter\n- Voorlopige maatregelen mogelijk\n\n**Te regelen punten :**\n- Voogdij kinderen + bezoekrecht\n- Alimentatie\n- Compenserende vergoeding\n- Verdeling van goederen\n- Gezinswoning\n\nWilt u een vertrouwelijke consultatie ?",
    delay: 2400,
    quickReplies: [
      { label: "Echtscheiding consultatie", value: "consultatie" },
      { label: "Vereiste documenten", value: "documenten" },
      { label: "Honoraria echtscheiding", value: "honoraria" },
      { label: "Rechtsbijstand", value: "rechtsbijstand" },
    ],
  },

  "bedrijf oprichten": {
    text: "**Bedrijf oprichten — Begeleiding**\n\n**Rechtsvorm :**\n- **BV / Eenmanszaak** — Maximale flexibiliteit\n- **NV** — Grote projecten\n- **VOF** — Eenvoudige vennootschap\n- **CV** — Coöperatieve vennootschap\n- **Vzw** — Niet-commerciële doeleinden\n\n**Onze begeleiding :**\n1. Keuze van de rechtsvorm\n2. Opstelling van de statuten\n3. Inschrijving bij de KBO\n4. Aandeelhoudersovereenkomst (indien nodig)\n5. Oprichtingscontracten\n\n**Forfait oprichting :** vanaf estimation personnalisee\nGemiddelde termijn : 7 tot 14 dagen.\n\nWelke structuur interesseert u ?",
    delay: 2200,
    quickReplies: [
      { label: "BV oprichten", value: "bedrijf oprichten" },
      { label: "NV oprichten", value: "bedrijf oprichten" },
      { label: "Afspraak oprichting", value: "consultatie" },
      { label: "Honoraria", value: "honoraria" },
    ],
  },

  huurovereenkomst: {
    text: "**Huurgeschillen — Uw rechten**\n\n**Veelvoorkomende problemen :**\n\n**Onbetaalde huur**\n- Ingebrekestelling → betalingsbevel → uithuiszetting\n- Minimale termijn : 2 maanden na betalingsbevel\n\n**Plaatsbeschrijving**\n- Betwisting binnen 10 dagen\n- Minnelijke of gerechtelijke expert\n\n**Huurwaarborg**\n- Teruggave binnen 1 maand (geen inhoudingen) of 2 maanden\n- Ingebrekestelling bij vertraging\n\n**Werken**\n- Huurherstelwerken vs grote werken\n- Conformiteit (woningkwaliteit, EPC)\n\n**Opzeg / Opzegtermijn**\n- 3 maanden (leegstand) of 1 maand (gemeubeld / kraptegebied)\n\nWat is uw huurprobleem ?",
    delay: 2200,
    quickReplies: [
      { label: "Onbetaalde huur", value: "ingebrekestelling" },
      { label: "Huurwaarborg", value: "ingebrekestelling" },
      { label: "Huur consultatie", value: "consultatie" },
      { label: "Mijn contract sturen", value: "document foto" },
    ],
  },

  contract: {
    text: "**Contractlezing en -analyse**\n\nOnze IA + onze advocaten analyseren uw contract :\n\n**Wat wij controleren :**\n- Onrechtmatige of onevenwichtige clausules\n- Disproportionele verplichtingen\n- Niet-concurrentieclausules\n- Ontbindingsvoorwaarden\n- Boetes en schadevergoedingen\n- Wettelijke conformiteit\n\n**Soorten contracten :**\n- Arbeidscontract (onbepaalde/bepaalde duur, freelance)\n- Handelscontract\n- AV / Gebruiksvoorwaarden\n- Dienstverleningscontract\n- Handelshuurovereenkomst\n\n**Forfait lezing :** estimation personnalisee\nTermijn : 48u werkdagen.\n\nStuur uw contract ter analyse !",
    delay: 2000,
    quickReplies: [
      { label: "Contract sturen", value: "document foto" },
      { label: "Arbeidscontract", value: "contract" },
      { label: "Handelscontract", value: "contract" },
      { label: "Advocaatafspraak", value: "consultatie" },
    ],
  },

  verjaringstermijnen: {
    text: "**Wettelijke termijnen en verjaringstermijnen**\n\nLet op de termijnen ! Daarna vervallen uw rechten.\n\n**Arbeidsrecht :**\n- Betwisting ontslag : **12 maanden**\n- Onbetaald loon : **3 jaar**\n- Pesterijen : **5 jaar**\n\n**Burgerlijk recht :**\n- Gewone verjaringstermijn : **5 jaar**\n- Verborgen gebreken vastgoed : **2 jaar**\n- Bouwtekortkomingen : **10 jaar**\n\n**Strafrecht :**\n- Overtreding : **1 jaar**\n- Wanbedrijf : **6 jaar**\n- Misdaad : **20 jaar**\n\n**Consumentenrecht :**\n- Herroepingstermijn online aankoop : **14 dagen**\n- Wettelijke garantie : **2 jaar**\n\nControleer uw termijnen voor het te laat is !",
    delay: 2200,
    quickReplies: [
      { label: "Dringende consultatie", value: "consultatie" },
      { label: "Ingebrekestelling", value: "ingebrekestelling" },
      { label: "Dossier opvolging", value: "dossier opvolging" },
      { label: "Honoraria", value: "honoraria" },
    ],
  },

  rechtsbijstand: {
    text: "**Rechtsbijstand — Voorwaarden**\n\nRechtsbijstand dekt uw advocaatkosten.\n\n**Inkomensgrenzen (2026) :**\n- **Volledige bijstand** : inkomsten < estimation personnalisee\n- **Gedeeltelijke bijstand** : inkomsten < estimation personnalisee\n\n**Wat wordt gedekt :**\n- Advocatenhonoraria\n- Gerechtsdeurwaarderskosten\n- Expertisekosten\n- Gerechtskosten\n\n**Hoe de aanvraag indienen :**\n1. Formulier via justitie.belgium.be\n2. Aanslagbiljet\n3. Inkomensbewijzen\n4. Indiening bij rechtbank of online\n\nAntwoordtermijn : 1 tot 3 maanden.\n\nWij helpen u bij het samenstellen van uw dossier.",
    delay: 2200,
    quickReplies: [
      { label: "Voorwaarden controleren", value: "rechtsbijstand" },
      { label: "Dossier samenstellen", value: "consultatie" },
      { label: "Onze honoraria", value: "honoraria" },
      { label: "Afspraak maken", value: "consultatie" },
    ],
  },
};

const sectorKeywords: Record<string, string[]> = {
  hallo: ["hallo", "goedendag", "hoi", "hey", "goedeavond", "hi", "dag"],
  consultatie: [
    "consultatie", "afspraak", "advocaat", "adviseur",
    "ontmoeten", "bellen",
  ],
  rechtsgebieden: [
    "rechtsgebied", "specialiteit", "expertise", "praktijk", "tak",
    "competentie", "welk recht",
  ],
  honoraria: [
    "honorarium", "prijs", "kost", "hoeveel", "tarief kantoor",
    "factureren", "betalen",
  ],
  documenten: [
    "document", "papier", "stuk", "bewijs", "dossier",
    "aanleveren", "voorbereiden",
  ],
  "dossier opvolging": [
    "opvolging", "voortgang", "waar staat", "referentie", "dossier stand",
    "progressie",
  ],
  "juridische noodsituatie": [
    "noodgeval", "dringend", "aanhouding", "uithuiszetting", "beslag",
    "geweld", "onmiddellijk",
  ],
  "document foto": [
    "foto", "scannen", "document analyseren", "document sturen",
    "contract afbeelding",
  ],
  ingebrekestelling: [
    "ingebrekestelling", "aanmaning", "aangetekend", "sommatie",
    "bevel", "formeel",
  ],
  echtscheiding: [
    "echtscheiding", "scheiding", "voogdij kind", "alimentatie",
    "compenserende vergoeding", "huwelijk",
  ],
  "bedrijf oprichten": [
    "oprichten", "oprichting", "bedrijf", "vennootschap", "bv", "nv",
    "vzw", "statuten", "inschrijving",
  ],
  huurovereenkomst: [
    "huurovereenkomst", "huurder", "verhuurder", "huur", "uithuiszetting",
    "huurwaarborg", "opzegtermijn", "huurproblemen",
  ],
  contract: [
    "contract", "clausule", "lezing", "contract analyseren", "av",
    "gebruiksvoorwaarden", "dienstverlening", "niet-concurrentie",
  ],
  verjaringstermijnen: [
    "verjaringstermijn", "verjaring", "deadline", "hoelang",
    "te laat", "vervallen", "rechtsverval",
  ],
  rechtsbijstand: [
    "rechtsbijstand", "juridische bijstand", "gratis advocaat",
    "gedekt", "formulier", "inkomen",
  ],
};

const { intents, keywords } = mergeWithVocalisNL(sectorIntents, sectorKeywords);

const juridiqueFallbackNL = createFallbackNL([
  { label: "Consultatie", value: "consultatie" },
  { label: "Rechtsgebieden", value: "rechtsgebieden" },
  { label: "Dossier opvolging", value: "dossier opvolging" },
  { label: "Tarieven Vocalis", value: "prijs" },
]);

export const juridiqueConfigNL: SimulatorConfig = {
  botName: "JurisAssist IA",
  botAvatar: "JA",
  welcomeMessage:
    "Welkom bij **JurisAssist** ! Ik ben uw juridische IA-assistent.\n\nIk kan u helpen met :\n- Een consultatie-afspraak plannen\n- Uw rechtsgebied bepalen\n- Uw dossier opvolgen\n- Een juridisch document analyseren\n- Onze honoraria raadplegen\n\nHoe kan ik u bijstaan ?",
  initialQuickReplies: [
    { label: "Consultatie", value: "consultatie" },
    { label: "Rechtsgebieden", value: "rechtsgebieden" },
    { label: "Honoraria", value: "honoraria" },
    { label: "Dossier opvolging", value: "dossier opvolging" },
    { label: "Noodgeval", value: "juridische noodsituatie" },
  ],
  intents,
  keywords,
  fallback: juridiqueFallbackNL,
};

export default juridiqueConfigNL;
