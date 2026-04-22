import type { SimulatorConfig, BotResponse } from "../WhatsAppSimulator";
import { mergeWithVocalisNL, createFallbackNL } from "./vocalis-features-nl";

const sectorIntentsNL: Record<string, BotResponse> = {
  hallo: {
    text: "Welkom bij **FitClub**! Ik ben uw AI-assistent.\n\nIk kan u helpen met:\n- Onze abonnementen en lessen ontdekken\n- Een gratis proefdag reserveren\n- Een personal coach vinden\n- Uw voortgang opvolgen\n\nWat kan ik voor u doen?",
    delay: 1000,
    quickReplies: [
      { label: "Abonnementen", value: "abonnement" },
      { label: "Lesrooster", value: "lessen" },
      { label: "Gratis proefdag", value: "gratis proefdag" },
      { label: "Personal coach", value: "coach" },
    ],
  },

  abonnement: {
    text: "Onze **FitClub formules**:\n\n**Access** — 29,90 EUR/maand\n- Toegang gewichtszaal + cardio\n- Openingsuren: 6u-22u\n- Kleedkamers + douches\n\n**Premium** — 49,90 EUR/maand\n- Onbeperkte toegang 24/7\n- Alle groepslessen inbegrepen\n- Sauna + hammam\n- 1 lichaamsanalyse/kwartaal\n\n**Elite** — 79,90 EUR/maand\n- Alles van Premium inbegrepen\n- 4 personal coaching sessies/maand\n- Gepersonaliseerd voedingsplan\n- AI-voortgangsopvolging\n\nZonder verbintenis. Welke formule interesseert u?",
    delay: 2000,
    quickReplies: [
      { label: "Gratis proefdag", value: "gratis proefdag" },
      { label: "Inschrijven", value: "inschrijving" },
      { label: "Formules vergelijken", value: "abonnement" },
      { label: "Openingsuren", value: "openingsuren" },
    ],
  },

  lessen: {
    text: "**FitClub lesrooster** deze week:\n\n**Maandag**\n- 7u — HIIT (45 min) — Coach Julien\n- 12u15 — Yoga Flow (60 min) — Coach Sarah\n- 18u30 — CrossFit (50 min) — Coach Maxime\n\n**Dinsdag**\n- 7u30 — Pilates (45 min) — Coach Sarah\n- 12u — Boxing Fit (45 min) — Coach Karim\n- 19u — Body Pump (50 min) — Coach Julien\n\n**Woensdag**\n- 8u — Stretching (30 min) — Coach Sarah\n- 17u30 — Spinning (45 min) — Coach Maxime\n- 19u30 — Zumba (50 min) — Coach Lisa\n\nBeperkt tot **20 personen** per les.\nWilt u reserveren?",
    delay: 2200,
    quickReplies: [
      { label: "Les reserveren", value: "lessen" },
      { label: "Weekendlessen", value: "lessen" },
      { label: "Les annuleren", value: "les annuleren" },
      { label: "Personal coach", value: "coach" },
    ],
  },

  "gratis proefdag": {
    text: "Uitstekende keuze! Uw **gratis FitClub proefdag** omvat:\n\n- **1 volledige dag** onbeperkte toegang\n- 1 groepsles naar keuze\n- 1 lichaamsanalyse met coach\n- Toegang kleedkamers + sauna\n\n**Volgende beschikbare tijdsloten:**\n- Maandag 21 april — 10u of 17u\n- Dinsdag 22 april — 9u of 18u\n- Woensdag 23 april — 14u\n\nGeen verbintenis, geen betaling. Welk tijdslot past u?",
    delay: 1800,
    quickReplies: [
      { label: "Maandag 10u", value: "proefdag bevestigen" },
      { label: "Dinsdag 18u", value: "proefdag bevestigen" },
      { label: "Ander tijdslot", value: "gratis proefdag" },
      { label: "Vragen", value: "hallo" },
    ],
  },

  "proefdag bevestigen": {
    text: "Proefdag bevestigd!\n\n**Datum:** Maandag 21 april 2026\n**Tijd:** 10:00\n**Duur:** Volledige dag\n**Locatie:** FitClub — Sportallee 45\n\n**Mee te brengen:**\n- Sportkleding\n- Handdoek\n- Waterfles\n- Identiteitsbewijs\n\nU ontvangt:\n- WhatsApp-bevestiging\n- Herinnering de dag ervoor\n- Routebeschrijving\n\nTot snel!",
    delay: 2000,
    quickReplies: [
      { label: "Bedankt!", value: "bedankt" },
      { label: "Openingsuren", value: "openingsuren" },
    ],
  },

  openingsuren: {
    text: "**FitClub openingsuren:**\n\n**Access formule:**\n- Maandag-Vrijdag: 6u - 22u\n- Zaterdag: 8u - 20u\n- Zondag: 9u - 18u\n\n**Premium & Elite formule:**\n- Toegang **24u/24, 7/7** met badge\n\n**Receptie & coaches:**\n- Maandag-Vrijdag: 8u - 21u\n- Zaterdag: 9u - 18u\n- Zondag: 10u - 16u\n\n**Feestdagen:** Beperkte uren (10u-18u)",
    delay: 1400,
    quickReplies: [
      { label: "Abonnementen", value: "abonnement" },
      { label: "Lesrooster", value: "lessen" },
      { label: "Routebeschrijving", value: "openingsuren" },
      { label: "Gratis proefdag", value: "gratis proefdag" },
    ],
  },

  coach: {
    text: "Onze **gecertificeerde FitClub coaches**:\n\n**Julien D.** — Krachttraining & HIIT\n- 8 jaar ervaring, NSCA-gecertificeerd\n- Specialiteit: spiermassa, vetverbranding\n- Score: 4,9/5 (312 beoordelingen)\n\n**Sarah L.** — Yoga & Pilates\n- Internationale opleider, 10 jaar\n- Specialiteit: soepelheid, houding, welzijn\n- Score: 4,8/5 (287 beoordelingen)\n\n**Maxime R.** — CrossFit & Functioneel\n- Ex-wedstrijdatleet, niveau 3 gecertificeerd\n- Specialiteit: prestatie, uithoudingsvermogen\n- Score: 4,9/5 (198 beoordelingen)\n\n**Volgende beschikbaarheid:** Morgen 10u met Julien\n\nWilt u een sessie reserveren?",
    delay: 2200,
    quickReplies: [
      { label: "Julien boeken", value: "coach bevestigen" },
      { label: "Sarah boeken", value: "coach bevestigen" },
      { label: "Coachtarieven", value: "abonnement" },
      { label: "Gratis proefdag", value: "gratis proefdag" },
    ],
  },

  "coach bevestigen": {
    text: "Coachsessie geboekt!\n\n**Coach:** Julien D.\n**Datum:** Dinsdag 22 april 2026\n**Tijd:** 10:00 (60 min)\n**Locatie:** Privé coaching ruimte — FitClub\n\n**Gepland programma:**\n- Volledig fysiek assessment\n- Kracht- en mobiliteitstest\n- Doelen bepalen\n- Persoonlijk trainingsplan\n\nWhatsApp-herinnering de dag ervoor verstuurd.",
    delay: 1800,
    quickReplies: [
      { label: "Bedankt!", value: "bedankt" },
      { label: "Annuleren", value: "les annuleren" },
    ],
  },

  voeding: {
    text: "**FitClub AI-voedingsplan**:\n\nOnze AI analyseert uw profiel en genereert een persoonlijk plan:\n\n**Voorbeeld — Doel: Spiermassa**\n\n**Ontbijt:** Roereieren + havermout + banaan (520 kcal)\n**Tussendoortje:** Kwark + amandelen (280 kcal)\n**Lunch:** Gegrilde kip + bruine rijst + groenten (650 kcal)\n**Namiddagsnack:** Eiwitshake + rood fruit (320 kcal)\n**Avondmaal:** Zalm + zoete aardappel + broccoli (580 kcal)\n\n**Totaal:** 2.350 kcal | 180g eiwitten\n\nInbegrepen in de **Elite** formule of als optie voor **9,90 EUR/maand**.\n\nWilt u uw persoonlijk plan?",
    delay: 2400,
    quickReplies: [
      { label: "Mijn persoonlijk plan", value: "voeding" },
      { label: "Doel vetverbranding", value: "voeding" },
      { label: "Elite formule", value: "abonnement" },
      { label: "Voedingscoach", value: "coach" },
    ],
  },

  "voortgang foto": {
    text: "Bedankt voor uw foto! **AI-analyse bezig**...\n\n**Resultaat lichaamsanalyse:**\n\n- **Geschat vetpercentage:** 18,5% (-2,3% vs vorige maand)\n- **Spiermassa:** Zichtbare progressie op schouders en armen\n- **Houding:** Verbetering van de ruguitlijning\n- **Progressiescore:** 78/100 (+12 punten)\n\n**AI-aanbeveling:**\n- Volume benen verhogen\n- Huidig cardio behouden\n- Core-oefeningen toevoegen\n\nVolgende foto aanbevolen over **4 weken**.\nGoed bezig!",
    delay: 2800,
    quickReplies: [
      { label: "Fotogeschiedenis", value: "voortgang foto" },
      { label: "Programma aanpassen", value: "coach" },
      { label: "Voedingsplan", value: "voeding" },
      { label: "Terug naar start", value: "hallo" },
    ],
  },

  "les annuleren": {
    text: "Les annuleren:\n\n**Uw actieve reserveringen:**\n1. HIIT — Maandag 21 april, 7u (Coach Julien)\n2. Yoga Flow — Woensdag 23 april, 12u15 (Coach Sarah)\n\n**Annuleringsbeleid:**\n- Gratis tot **2u voor** de les\n- Daarna: 1 credit afgetrokken\n- 3 no-shows = schorsing 1 week\n\nWelke les wilt u annuleren?",
    delay: 1600,
    quickReplies: [
      { label: "HIIT maandag annuleren", value: "annulering bevestigen" },
      { label: "Yoga woensdag annuleren", value: "annulering bevestigen" },
      { label: "Lessen behouden", value: "lessen" },
    ],
  },

  "annulering bevestigen": {
    text: "Les succesvol geannuleerd!\n\n**HIIT — Maandag 21 april, 7u** is verwijderd uit uw reserveringen.\n\nUw plek is vrijgekomen voor een ander lid.\n\nWilt u een andere les reserveren?",
    delay: 1200,
    quickReplies: [
      { label: "Andere les reserveren", value: "lessen" },
      { label: "Terug naar start", value: "hallo" },
    ],
  },

  parrainage: {
    text: "**FitClub Referralprogramma**:\n\nSponsor uw vrienden en verdien voordelen!\n\n**Voor u (sponsor):**\n- **1 maand gratis** per geworven lid\n- Onbeperkte cumulatie\n- Bonus: FitClub bidon bij 3e sponsoring\n\n**Voor uw vriend:**\n- **-50%** op de eerste maand\n- 1 gratis coachsessie\n- Gratis lichaamsanalyse\n\n**Uw referrallink:**\nfitclub.nl/parrain/FC-78432\n\n**Actieve sponsoringen:** 2 (2 maanden gecumuleerd)\n\nDeel de link via WhatsApp!",
    delay: 2000,
    quickReplies: [
      { label: "Link delen", value: "parrainage" },
      { label: "Mijn voordelen", value: "parrainage" },
      { label: "Abonnementen", value: "abonnement" },
      { label: "Terug naar start", value: "hallo" },
    ],
  },

  uitrusting: {
    text: "**Uitrusting & installaties FitClub**:\n\n**Krachttraining:**\n- 40+ Technogym-machines laatste generatie\n- Vrije gewichten ruimte (1-50 kg)\n- Squat rack, bankdrukken, katrol\n\n**Cardio:**\n- 25 loopbanden, fietsen, ellipticals\n- Roeiergometers Concept2\n- Individuele schermen Netflix/YouTube\n\n**Ruimten:**\n- 2 groepslesstudio's (150m² elk)\n- Privé coaching ruimte\n- Functionele CrossFit-zone\n- Stretchingruimte\n\n**Comfort:**\n- Premium kleedkamers met beveiligde lockers\n- Gefilterde waterfontijnen\n- Gratis Wi-Fi\n- Ondergrondse parking 50 plaatsen",
    delay: 2200,
    quickReplies: [
      { label: "Sauna & spa", value: "sauna" },
      { label: "Virtuele rondleiding", value: "uitrusting" },
      { label: "Gratis proefdag", value: "gratis proefdag" },
      { label: "Abonnementen", value: "abonnement" },
    ],
  },

  sauna: {
    text: "**FitClub Welzijnsruimte**:\n\nInbegrepen in **Premium** en **Elite** formules:\n\n- **Finse sauna** — 80-90°C, sessies van 15 min\n- **Hammam** — Eucalyptusstoom, ideaal na training\n- **Sensorische douches** — Koud/warm wisselend water\n- **Ontspanningsruimte** — Ligstoelen, gratis kruidenthee\n\n**Welzijnsuren:**\n- Maandag-Vrijdag: 8u - 21u\n- Zaterdag-Zondag: 9u - 19u\n\n**Voordelen:** Spierherstel, afvoer van toxines, diepe ontspanning.\n\nLosse toegang voor Access: **5 EUR/sessie**.",
    delay: 1800,
    quickReplies: [
      { label: "Naar Premium upgraden", value: "abonnement" },
      { label: "Zaaluitrusting", value: "uitrusting" },
      { label: "Gratis proefdag", value: "gratis proefdag" },
      { label: "Terug naar start", value: "hallo" },
    ],
  },

  inschrijving: {
    text: "**FitClub inschrijving — Snel en eenvoudig!**\n\n**Stappen:**\n1. Kies uw formule (Access, Premium, Elite)\n2. Vul het online formulier in (2 min)\n3. Onderteken het elektronisch contract\n4. Beveiligde betaling (bankkaart, domiciliëring, Apple Pay)\n5. Ontvang uw toegangsbadge per e-mail\n\n**Benodigde documenten:**\n- Identiteitsbewijs\n- IBAN (bij maandelijkse domiciliëring)\n- Medisch attest (minder dan 1 jaar oud)\n\n**Inschrijvingsbonus:** Gratis lichaamsanalyse + 1 kennismakingssessie coach!\n\nKlaar om in te schrijven?",
    delay: 2000,
    quickReplies: [
      { label: "Nu inschrijven", value: "inschrijving" },
      { label: "Eerst proefdag", value: "gratis proefdag" },
      { label: "Formules vergelijken", value: "abonnement" },
      { label: "Vragen", value: "hallo" },
    ],
  },

  "bevriezing": {
    text: "**FitClub abonnement bevriezen**:\n\n**Voorwaarden:**\n- Bevriezing mogelijk na **3 maanden** lidmaatschap\n- Duur: **1 tot 3 maanden** maximum\n- Bevriезingskosten: **5 EUR/maand**\n- Reden vereist: reis, blessure, ziekte\n\n**Om uw abonnement te bevriezen:**\n1. Stuur uw attest hier\n2. Geef de gewenste duur op\n3. Bevestiging binnen 24u\n\nUw abonnement hervat automatisch op de geplande datum.\n\nWilt u doorgaan?",
    delay: 1800,
    quickReplies: [
      { label: "1 maand bevriezen", value: "bevriezing" },
      { label: "3 maanden bevriezen", value: "bevriezing" },
      { label: "Opzeggen", value: "bevriezing" },
      { label: "Terug naar start", value: "hallo" },
    ],
  },

  verlenging: {
    text: "**FitClub verlenging**:\n\n**Uw huidige abonnement:**\n- Formule: Premium (49,90 EUR/maand)\n- Depuis: Januari 2026\n- Volgende afschrijving: 1 mei 2026\n\n**Jaarlijkse verlengingsaanbieding:**\n- **499 EUR/jaar** i.p.v. 598,80 EUR (-17%)\n- Equivalent aan **41,60 EUR/maand**\n- 2 maanden gratis\n- Bonus coachsessie elk kwartaal\n\nDe verlenging is automatisch tenzij u **30 dagen** voor de vervaldatum opzegt.",
    delay: 1800,
    quickReplies: [
      { label: "Jaarlijks abonnement nemen", value: "verlenging" },
      { label: "Formule wijzigen", value: "abonnement" },
      { label: "Abonnement bevriezen", value: "bevriezing" },
      { label: "Terug naar start", value: "hallo" },
    ],
  },
};

const sectorKeywordsNL: Record<string, string[]> = {
  hallo: ["hallo", "hoi", "hey", "goedemorgen", "goedenavond", "hi", "hello"],
  abonnement: ["abonnement", "formule", "lidmaatschap", "inschrijven", "membership", "tarief sportschool"],
  lessen: ["les", "lesrooster", "groepsles", "hiit", "yoga", "pilates", "crossfit", "spinning", "zumba", "boxing", "body pump", "stretching"],
  "gratis proefdag": ["proefdag", "gratis", "testen", "kennismaking", "trial", "dag"],
  openingsuren: ["openingsuren", "uur", "opening", "sluiting", "open", "gesloten", "24u", "zondag", "toegang"],
  coach: ["coach", "trainer", "personal trainer", "coaching", "begeleiding", "persoonlijk", "privé"],
  voeding: ["voeding", "dieet", "calorieën", "eiwit", "maaltijd", "voedingsadvies", "gewicht", "macro"],
  "voortgang foto": ["foto", "voortgang", "voor na", "transformatie", "evolutie", "lichaamsanalyse", "body"],
  "les annuleren": ["annuleren", "annulering", "uitschrijven", "verwijderen"],
  parrainage: ["parrainage", "sponsor", "vriend uitnodigen", "referral", "aanbevelen"],
  uitrusting: ["uitrusting", "machine", "materiaal", "installatie", "zaal", "gewichten", "loopband", "fiets"],
  sauna: ["sauna", "hammam", "spa", "welzijn", "ontspanning", "stoom", "douche"],
  inschrijving: ["inschrijven", "inschrijving", "aanmelden", "starten", "beginnen", "badge"],
  bevriezing: ["bevriezen", "bevriezing", "pauzeren", "opschorten", "opzeggen", "opzegging", "stoppen"],
  verlenging: ["verlenging", "verlengen", "jaarlijks", "verlengeren", "contract", "vervaldatum"],
};

const merged = mergeWithVocalisNL(sectorIntentsNL, sectorKeywordsNL);

export const fitnessConfigNL: SimulatorConfig = {
  botName: "FitClub IA",
  botAvatar: "FC",
  welcomeMessage:
    "Welkom bij **FitClub**! Ik ben uw AI-assistent.\n\nIk kan u helpen met abonnementen, lessen, coaching, voeding en nog veel meer.\n\nHoe kan ik u helpen?",
  initialQuickReplies: [
    { label: "Abonnementen", value: "abonnement" },
    { label: "Lesrooster", value: "lessen" },
    { label: "Gratis proefdag", value: "gratis proefdag" },
    { label: "Personal coach", value: "coach" },
    { label: "AI-voedingsplan", value: "voeding" },
    { label: "Referralprogramma", value: "parrainage" },
  ],
  intents: merged.intents,
  keywords: merged.keywords,
  fallback: createFallbackNL([
    { label: "Abonnementen", value: "abonnement" },
    { label: "Lesrooster", value: "lessen" },
    { label: "Personal coach", value: "coach" },
    { label: "Gratis proefdag", value: "gratis proefdag" },
  ]),
};

export default fitnessConfigNL;
