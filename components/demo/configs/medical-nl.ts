import type { SimulatorConfig, BotResponse } from "../WhatsAppSimulator";
import { mergeWithVocalisNL, createFallbackNL } from "./vocalis-features-nl";

const MEDICAL_INTENTS_NL: Record<string, BotResponse> = {
  hallo: {
    text: "Hallo! Welkom bij de medische praktijk **MediAssist**.\n\nIk ben uw AI-assistent, 24/7 beschikbaar voor:\n• Een afspraak maken\n• Een recept verlengen\n• Uw resultaten raadplegen\n• Een teleconsultatie organiseren\n\nHoe kan ik u helpen?",
    delay: 1200,
    quickReplies: [
      { label: "Afspraak maken", value: "afspraak maken" },
      { label: "Teleconsultatie", value: "teleconsultatie" },
      { label: "Recept", value: "recept" },
      { label: "Labo resultaten", value: "resultaten" },
    ],
  },
  "afspraak maken": {
    text: "**Afspraak maken**\n\nKies het type consultatie:\n\n🩺 **Huisarts** — Dr. Jansen\n• Volgende tijdsloten: Ma 21/04 9u, 11u, 14u30\n\n🦷 **Dermatologie** — Dr. Vermeer\n• Volgende tijdsloten: Di 22/04 10u, 15u\n\n👶 **Kindergeneeskunde** — Dr. Bakker\n• Volgende tijdsloten: Wo 23/04 9u, 11u30\n\n🦴 **Orthopedie** — Dr. De Vries\n• Volgende tijdsloten: Do 24/04 8u30, 14u\n\n❤️ **Cardiologie** — Dr. Peters\n• Volgende tijdsloten: Vr 25/04 10u\n\nWelke specialist en welk tijdslot past u?",
    delay: 2200,
    quickReplies: [
      { label: "Dr. Jansen Ma 9u", value: "afspraak bevestigen" },
      { label: "Dr. Vermeer Di 10u", value: "afspraak bevestigen" },
      { label: "Spoed", value: "noodgeval" },
      { label: "Teleconsultatie", value: "teleconsultatie" },
    ],
  },
  "afspraak bevestigen": {
    text: "✅ **Afspraak bevestigd!**\n\n**Arts:** Dr. Jansen — Huisarts\n**Datum:** Maandag 21 april 2026\n**Tijd:** 09:00\n**Locatie:** MediAssist praktijk, Pasteurstraat 15, 1015 Amsterdam\n\n**Automatische herinneringen:**\n• SMS D-2\n• WhatsApp D-1 om 18u\n• WhatsApp U-1\n\n**Mee te brengen:**\n• Zorgpas\n• Aanvullende verzekeringspas\n• Lopende recepten\n\nTot snel!",
    delay: 2000,
    quickReplies: [
      { label: "Documenten 1e bezoek", value: "documenten" },
      { label: "Afspraak wijzigen", value: "afspraak annuleren" },
      { label: "Routebeschrijving", value: "openingsuren" },
    ],
  },
  "afspraak herinnering": {
    text: "🔔 **Automatische herinneringen actief**\n\nUw komende afspraken:\n\n**1. Dr. Jansen** — Ma 21/04 om 09:00\n• WhatsApp herinnering D-1 verstuurd\n• Bevestiging ontvangen: ✅\n\n**2. Dr. Vermeer (dermatologie)** — Di 29/04 om 15:00\n• Herinnering gepland D-2\n• Wachten op bevestiging\n\n**Herinneringssysteem:**\n• D-2: SMS herinnering\n• D-1: WhatsApp met bevestigen/verzetten knop\n• U-1: Laatste herinnering\n\n📊 **No-show verminderd met 68%** dankzij AI-herinneringen.",
    delay: 2000,
    quickReplies: [
      { label: "Afspraak bevestigen", value: "afspraak bevestigen" },
      { label: "Afspraak verzetten", value: "afspraak annuleren" },
      { label: "Mijn afspraken", value: "afspraak maken" },
    ],
  },
  recept: {
    text: "📝 **Recept verlengen**\n\nIk kan uw aanvraag doorsturen naar de arts.\n\n**Uw lopende behandelingen:**\n• Levothyrox 75µg — 1 tab/dag (Dr. Jansen)\n• Metformine 500mg — 2 tab/dag (Dr. Jansen)\n• Vitamine D 100.000 IE — 1/kwartaal\n\n**Om te verlengen:**\n1️⃣ Selecteer de te verlengen behandeling(en)\n2️⃣ De arts bevestigt binnen 24-48u\n3️⃣ Recept verstuurd naar uw patiëntendossier + apotheek\n\n⚠️ Laatste consultatie: 15/01/2026\nEen verlenging die een onderzoek vereist, kan een afspraak noodzaken.",
    delay: 2400,
    quickReplies: [
      { label: "Alles verlengen", value: "recept" },
      { label: "Controleafspraak", value: "afspraak maken" },
      { label: "Naar apotheek sturen", value: "recept" },
      { label: "Behandeling opvolgen", value: "behandeling opvolging" },
    ],
  },
  resultaten: {
    text: "🧪 **Analyseresultaten**\n\nUw laatste resultaten zijn beschikbaar:\n\n**Bloedonderzoek 10/04/2026** (Labo BioSante)\n• Status: ✅ Resultaten beschikbaar\n• Nuchter bloedglucose: 0,95 g/L (N: 0,70-1,10)\n• HbA1c: 6,2% (N: <7%)\n• TSH: 2,1 mIE/L (N: 0,4-4,0)\n• Totaal cholesterol: 2,10 g/L (N: <2,40)\n\n🟢 **Alle waarden zijn normaal.**\n\nDr. Jansen heeft genoteerd: *\"Bevredigende resultaten. Huidige behandeling voortzetten.\"*\n\n⚠️ Deze resultaten vervangen geen medische consultatie.",
    delay: 2500,
    quickReplies: [
      { label: "Controleafspraak", value: "afspraak maken" },
      { label: "Recept", value: "recept" },
      { label: "Geschiedenis analyses", value: "resultaten" },
      { label: "Teleconsultatie", value: "teleconsultatie" },
    ],
  },
  teleconsultatie: {
    text: "📹 **Teleconsultatie video**\n\nRaadpleeg een arts vanuit uw thuis:\n\n**Teleconsultatie beschikbaarheid:**\n• Dr. Jansen — Vandaag 17u, Morgen 9u\n• Dr. Bakker — Morgen 14u, 16u30\n\n**Verloop:**\n1️⃣ Reserveer een tijdslot\n2️⃣ Videolink verstuurd via WhatsApp 10 min voor aanvang\n3️⃣ Beveiligde consultatie (15-20 min)\n4️⃣ Recept + verslag verstuurd daarna\n\n**Tarief:** 25 EUR (sector 1) — Derdebetalersregeling mogelijk\n**Terugbetaling:** 70% ziekenfonds + aanvullend via mutualiteit\n\nWelk tijdslot past u?",
    delay: 2200,
    quickReplies: [
      { label: "Dr. Jansen 17u", value: "afspraak bevestigen" },
      { label: "Morgen 9u", value: "afspraak bevestigen" },
      { label: "Zorgpas?", value: "zorgpas" },
      { label: "Afspraak praktijk", value: "afspraak maken" },
    ],
  },
  noodgeval: {
    text: "🚨 **Medisch noodgeval**\n\n**Bij levensgevaar, bel ONMIDDELLIJK:**\n• 🚑 **112** (universeel noodnummer)\n\n**Tekenen van levensgevaar:**\n• Pijn op de borst / ademhalingsmoeilijkheden\n• Bewusteloosheid\n• Ernstige bloeding\n• CVA (gezicht, arm, spraak)\n\n**Niet-levensbedreigende spoed:**\n• 🏥 Huisartsenwacht: **1733**\n• 📞 Arts van wacht: **020 123 45 67**\n• 🪥 Apotheek van wacht: **0900-1020**\n\n⚠️ **Deze chatbot vervangt GEEN medisch advies in een noodsituatie.**",
    delay: 1800,
    quickReplies: [
      { label: "Snelle teleconsultatie", value: "teleconsultatie" },
      { label: "Arts van wacht", value: "openingsuren" },
      { label: "Foto symptoom sturen", value: "foto symptoom" },
    ],
  },
  openingsuren: {
    text: "🕒 **Openingsuren MediAssist**\n\n**Consultaties:**\n• Maandag - Vrijdag: 8u30 - 19u\n• Zaterdag: 9u - 13u\n• Zondag: Gesloten (teleconsultatie mogelijk)\n\n**Arts van wacht:**\n• 's Avonds 19u-8u: Dr. bereikbaar via **020 123 45 67**\n• Weekend/feestdagen: Huisartsenwacht **1733**\n\n**Adres:**\nPasteurstraat 15, 1015 Amsterdam\nMetro: Weesperplein (lijn 9)\nParking: Q-Park op 50m\n\n**Teleconsultatie:** Beschikbaar 7/7, 8u-22u",
    delay: 1800,
    quickReplies: [
      { label: "Afspraak maken", value: "afspraak maken" },
      { label: "Teleconsultatie", value: "teleconsultatie" },
      { label: "Noodgeval", value: "noodgeval" },
      { label: "Google Maps routebeschrijving", value: "openingsuren" },
    ],
  },
  documenten: {
    text: "📂 **Documenten voor uw bezoek**\n\n**Eerste consultatie:**\n• 💳 Zorgpas (+ papieren attestatie indien nodig)\n• 🏥 Aanvullende verzekeringspas\n• 📝 Lopende recepten\n• 🧪 Laatste analyseresultaten\n• 📄 Vaccinatieboekje\n• 📷 Brieven van specialisten\n\n**Vervolgconsultatie:**\n• Zorgpas\n• Resultaten van voorgeschreven onderzoeken\n\n**Teleconsultatie:**\n• Stabiele internetverbinding\n• Camera + microfoon actief\n• Rustige, goed verlichte ruimte\n\nU kunt uw documenten hier vooraf doorsturen!",
    delay: 2000,
    quickReplies: [
      { label: "Afspraak maken", value: "afspraak maken" },
      { label: "Zorgpas", value: "zorgpas" },
      { label: "Vaccinaties", value: "vaccin" },
      { label: "Teleconsultatie", value: "teleconsultatie" },
    ],
  },
  zorgpas: {
    text: "💳 **Zorgpas & Ziekenfonds**\n\n**Uw zorgpas:**\n• Nr.: 1 85 12 75 XXX XXX XX\n• Status: ✅ Actief\n• Bijgewerkt: 12/2025\n\n**Terugbetalingen:**\n• Consultatie huisarts: 70% (25 EUR)\n• Specialist met verwijzing: 70%\n• Teleconsultatie: 70% (zelfde tarief)\n• Labo-analyses: 60-100%\n\n**Derdebetalersregeling:**\n• Actief op uw dossier\n• Geen voorschot ziekenfonds\n• Aanvullend mutualiteit op basis van contract\n\n💡 Denk eraan uw zorgpas elk kwartaal bij te werken bij de apotheek.",
    delay: 2000,
    quickReplies: [
      { label: "Afspraak maken", value: "afspraak maken" },
      { label: "Mijn resultaten", value: "resultaten" },
      { label: "Recept", value: "recept" },
    ],
  },
  vaccin: {
    text: "💉 **Vaccinaties**\n\n**Uw vaccinatieboekje:**\n• DTP (herhalingsvaccin): ✅ Gedaan 03/2024 — Volgend: 03/2034\n• Seizoensgriep: ⚠️ Te doen (campagne okt-nov)\n• COVID-19: ✅ Up-to-date\n• Hepatitis B: ✅ Volledig\n\n**Beschikbare vaccinatietijdsloten:**\n• Griep: dagelijks zonder afspraak (okt-jan)\n• Herhalingsvaccins: op afspraak bij Dr. Jansen\n• Reisadvies: specifieke consultatie (gele koorts, hep A...)\n\n**Kindervaccinaties:**\n• Dr. Bakker (kindergeneeskunde) — Digitaal vaccinatieboekje\n• Automatische herinneringen op basis van vaccinatieschema\n\nWilt u een afspraak maken voor een vaccin?",
    delay: 2200,
    quickReplies: [
      { label: "Vaccinatieafspraak", value: "afspraak maken" },
      { label: "Reisvaccins", value: "vaccin" },
      { label: "Kinderboekje", value: "vaccin" },
      { label: "Documenten", value: "documenten" },
    ],
  },
  attest: {
    text: "📄 **Medische attesten**\n\nWelk type attest wenst u?\n\n• 🏃 **Sportattest** — geschiktheid voor sport\n• 🏢 **Ziektebriefje** — verlenging of nieuw\n• ✈️ **Reisattest** — geschiktheid voor vliegen, vaccins\n• 🚗 **Rijgeschiktheid** — medisch keuring\n• 🏫 **Schoolattest** — PAI, verzuim, terugkeer\n\n**Procedure:**\n1️⃣ Afspraak met de arts (of teleconsultatie)\n2️⃣ Onderzoek / beoordeling\n3️⃣ Attest verstuurd per e-mail + patiëntendossier\n\n💡 Sommige attesten vereisen een verplichte consultatie.",
    delay: 2000,
    quickReplies: [
      { label: "Attest afspraak", value: "afspraak maken" },
      { label: "Sportattest", value: "attest" },
      { label: "Ziektebriefje", value: "attest" },
      { label: "Teleconsultatie", value: "teleconsultatie" },
    ],
  },
  "behandeling opvolging": {
    text: "💊 **Behandelingen opvolgen**\n\n**Uw actieve behandelingen:**\n\n**1. Levothyrox 75µg**\n• Dosering: 1 tab 's ochtends op nuchtere maag\n• Herinnering: ✅ Dagelijks om 7u30\n• Volgend controle TSH: 15/05/2026\n\n**2. Metformine 500mg**\n• Dosering: 1 tab 's ochtends + 1 tab 's avonds bij maaltijd\n• Herinnering: ✅ 8u + 20u\n• Volgend controle HbA1c: 10/07/2026\n\n**3. Vitamine D 100.000 IE**\n• Dosering: 1 ampul/kwartaal\n• Volgende inname: 01/07/2026\n\n🔔 **Medicijnherinneringen:** actief via WhatsApp\n📊 **Therapietrouw:** 94% deze maand",
    delay: 2400,
    quickReplies: [
      { label: "Recept verlengen", value: "recept" },
      { label: "Herinneringen aanpassen", value: "behandeling opvolging" },
      { label: "Bijwerkingen", value: "foto symptoom" },
      { label: "Controleafspraak", value: "afspraak maken" },
    ],
  },
  "foto symptoom": {
    text: "📷 **Symptoomfoto sturen**\n\nU kunt me een foto sturen voor een AI pre-analyse:\n\n• Huidaandoening / uitslag\n• Wond / zwelling\n• Zichtbare allergische reactie\n• Postoperatieve evolutie\n\n---\n*Simulatie:* 🔍 Analyse bezig...\n\n✅ **AI pre-analyse:**\n• Zone: Rechteronderarm\n• Bevinding: Gelokaliseerde roodheid, 3cm, scherpe randen\n• Suggestie: Verenigbaar met contactdermatitis\n• Aanbeveling: Dermatologische consultatie binnen 7 dagen\n\n⚠️ **BELANGRIJK: Dit is GEEN medische diagnose.**\nAlleen een arts kan na klinisch onderzoek een diagnose stellen.\n\nWilt u een afspraak maken bij de dermatoloog?",
    delay: 3000,
    quickReplies: [
      { label: "Dermatoloog afspraak", value: "afspraak maken" },
      { label: "Teleconsultatie", value: "teleconsultatie" },
      { label: "Noodgeval", value: "noodgeval" },
      { label: "Behandeling opvolgen", value: "behandeling opvolging" },
    ],
  },
  "afspraak annuleren": {
    text: "📅 **Afspraak annuleren / verzetten**\n\nUw komende afspraken:\n\n**1. Dr. Jansen** — Ma 21/04 om 09:00\n**2. Dr. Vermeer** — Di 29/04 om 15:00\n\n**Opties:**\n• ❌ **Annuleren** — Het tijdslot wordt vrijgegeven voor een andere patiënt\n• 🔄 **Verzetten** — Nieuw tijdslot kiezen\n\n⚠️ Annuleer **minstens 24u op voorhand**.\nBij meer dan 3 niet-verontschuldigde afwezigeden kan een vergoeding van 20 EUR worden aangerekend.\n\nWelke afspraak wilt u wijzigen?",
    delay: 2000,
    quickReplies: [
      { label: "Dr. Jansen annuleren", value: "afspraak annuleren" },
      { label: "Dr. Vermeer verzetten", value: "afspraak maken" },
      { label: "Nieuwe afspraak", value: "afspraak maken" },
      { label: "Terug naar start", value: "hallo" },
    ],
  },
};

const MEDICAL_KEYWORDS_NL: Record<string, string[]> = {
  hallo: ["hallo", "hoi", "hey", "goedemorgen", "goedenavond", "hi", "hello"],
  "afspraak maken": ["afspraak", "reserveren", "consultatie", "afspraak maken", "tijdslot", "beschikbaarheid"],
  "afspraak herinnering": ["herinnering", "reminder", "melding", "afspraak bevestigen", "no-show"],
  recept: ["recept", "voorschrift", "medicijn", "verlenging", "behandeling", "tablet", "pillen"],
  resultaten: ["resultaat", "analyse", "labo", "laboratorium", "bloedonderzoek", "biologie"],
  teleconsultatie: ["teleconsultatie", "video", "afstand", "thuis", "online", "digitaal"],
  noodgeval: ["noodgeval", "spoed", "112", "1733", "ernstig", "pijn", "ademhaling"],
  openingsuren: ["openingsuren", "uur", "opening", "sluiting", "wanneer", "adres", "parkeren", "metro"],
  documenten: ["document", "meebrengen", "eerste bezoek", "dossier", "stuk"],
  zorgpas: ["zorgpas", "ziekenfonds", "terugbetaling", "derdebetalersregeling", "mutualiteit"],
  vaccin: ["vaccin", "vaccinatie", "griep", "covid", "vaccinatieboekje"],
  attest: ["attest", "certificaat", "ziektebriefje", "sport", "geschiktheid"],
  "behandeling opvolging": ["opvolging", "behandeling", "therapietrouw", "medicijnherinnering", "dosering", "bijwerkingen"],
  "foto symptoom": ["foto", "afbeelding", "symptoom", "plek", "roodheid", "uitslag", "foto sturen", "huid"],
  "afspraak annuleren": ["annuleren", "verzetten", "verplaatsen", "afspraak wijzigen", "verschuiven"],
};

const { intents, keywords } = mergeWithVocalisNL(MEDICAL_INTENTS_NL, MEDICAL_KEYWORDS_NL);

export const medicalConfigNL: SimulatorConfig = {
  botName: "MediAssist IA",
  botAvatar: "M+",
  welcomeMessage:
    "Hallo! Ik ben de AI-assistent van praktijk **MediAssist** 🏥\n\nIk kan u helpen met:\n• Afspraak maken\n• Recept verlengen\n• Resultaten raadplegen\n• Teleconsultatie video\n• Behandelingen opvolgen\n\nHoe kan ik u helpen?",
  initialQuickReplies: [
    { label: "📅 Afspraak maken", value: "afspraak maken" },
    { label: "📹 Teleconsultatie", value: "teleconsultatie" },
    { label: "📝 Recept", value: "recept" },
    { label: "🧪 Resultaten", value: "resultaten" },
    { label: "💉 Vaccinaties", value: "vaccin" },
    { label: "🚨 Noodgeval", value: "noodgeval" },
  ],
  intents,
  keywords,
  fallback: createFallbackNL([
    { label: "Afspraak maken", value: "afspraak maken" },
    { label: "Teleconsultatie", value: "teleconsultatie" },
    { label: "Recept", value: "recept" },
    { label: "Noodgeval", value: "noodgeval" },
    { label: "Tarieven Vocalis", value: "prijs" },
  ]),
};

export default medicalConfigNL;
