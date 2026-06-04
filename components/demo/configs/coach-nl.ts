import type { SimulatorConfig } from "../WhatsAppSimulator";
import { mergeWithVocalisNL, createFallbackNL } from "./vocalis-features-nl";

const COACH_INTENTS_NL = {
  hallo: {
    text: "Hallo! Welkom bij **CoachPro**!\n\nIk ben uw coaching-assistent aangedreven door **Vocalis AI**.\n\nIk kan u helpen onze programma's te ontdekken, een kennismakingssessie te boeken of een persoonlijk assessment te ontvangen. Hoe kan ik u begeleiden?",
    delay: 1200,
    quickReplies: [
      { label: "Programma's", value: "programmas" },
      { label: "Kennismakingssessie", value: "kennismakingssessie" },
      { label: "Stem klonen", value: "stem klonen" },
      { label: "WhatsApp functies", value: "whatsapp functies" },
      { label: "AI-telefonie", value: "telefonie" },
      { label: "Gratis assessment", value: "gratis assessment" },
    ],
  },

  programmas: {
    text: "Onze **3 coachingprogramma's**:\n\n**1. Individueel** — Persoonlijke 1-op-1 begeleiding\n12 sessies van 60 min over 3 maanden\nWhatsApp-opvolging tussen de sessies\n\n**2. Groep** — Groepsdynamiek (6-8 personen)\n8 sessies van 90 min over 2 maanden\nPrivé WhatsApp-gemeenschap\n\n**3. VIP Intensief** — Versnelde transformatie\n20 sessies + onbeperkt WhatsApp-toegang\nMaatwerkplan + exclusieve bronnen\n\nWelk programma interesseert u?",
    delay: 2000,
    quickReplies: [
      { label: "Tarieven", value: "prijs" },
      { label: "Individueel programma", value: "individueel" },
      { label: "VIP programma", value: "vip" },
      { label: "Groepscoaching", value: "groep" },
    ],
  },

  kennismakingssessie: {
    text: "Geweldig! Laten we uw **gratis kennismakingssessie** van 30 min plannen.\n\nHier zijn de volgende beschikbare tijdsloten:\n\n**Maandag 21 april**: 10u, 14u, 17u\n**Woensdag 23 april**: 9u, 11u, 16u\n**Vrijdag 25 april**: 10u, 15u\n\nDe sessie vindt plaats via video (Zoom) of telefoon, naar uw voorkeur.\n\nWelk tijdslot past u?",
    delay: 1600,
    quickReplies: [
      { label: "Maandag 10u", value: "afspraak bevestigen" },
      { label: "Woensdag 11u", value: "afspraak bevestigen" },
      { label: "Vrijdag 15u", value: "afspraak bevestigen" },
      { label: "Andere beschikbaarheid", value: "ander tijdslot" },
    ],
  },

  beschikbaarheid: {
    text: "Hier is alle **beschikbaarheid** deze week:\n\n**Maandag**: 9u-12u / 14u-18u\n**Dinsdag**: 10u-12u / 15u-17u\n**Woensdag**: 9u-12u / 14u-17u\n**Donderdag**: 10u-12u / 14u-16u\n**Vrijdag**: 9u-12u / 14u-16u\n\nSessies duren 60 min (30 min voor kennismaking).\n\nIk kan ook avondtijdsloten aanbieden op verzoek.",
    delay: 1500,
    quickReplies: [
      { label: "Tijdslot boeken", value: "afspraak" },
      { label: "Avondsessie", value: "beschikbaarheid" },
      { label: "Weekendsessie", value: "beschikbaarheid" },
    ],
  },

  getuigenissen: {
    text: "Dit zeggen onze **klanten**:\n\n**Sophie, 34 jaar** — Individueel coaching\n\"In 3 maanden heb ik mijn loopbaanswitch verduidelijkt en mijn activiteit gelanceerd. De WhatsApp-opvolging tussen sessies maakt het verschil.\"\n\n**Marc, 42 jaar** — VIP programma\n\"Ik heb mijn omzet in 6 maanden verdubbeld. De methode is gestructureerd en de tools zijn concreet.\"\n\n**Startup Team (8 pers.)** — Groepscoaching\n\"Onze teamcohesie is getransformeerd. +40% gemeten productiviteit.\"\n\n92% van onze klanten bereikt hun doelen binnen de vooropgestelde termijn.",
    delay: 2200,
    quickReplies: [
      { label: "Bekijk programma's", value: "programmas" },
      { label: "Kennismakingssessie", value: "kennismakingssessie" },
      { label: "Coachingmethode", value: "methode" },
    ],
  },

  methode: {
    text: "Onze **CoachPro methode** steunt op 4 pijlers:\n\n**1. Diagnose** — Volledig assessment van uw situatie\nSMART-doelen, waarden, blokkades geïdentificeerd\n\n**2. Actieplan** — Persoonlijke routekaart\nConcrete stappen, succescriteria\n\n**3. Begeleiding** — Sessies + continue opvolging\nPraktijkoefeningen, wetenschappelijk gevalideerde tools\n\n**4. Verankering** — Consolidatie van verworven inzichten\nDuurzame gewoonten, progressieve autonomie\n\nWij gebruiken erkende benaderingen: NLP, transactionele analyse, cognitief-gedragscoaching.",
    delay: 2000,
    quickReplies: [
      { label: "Gratis assessment", value: "gratis assessment" },
      { label: "Getuigenissen", value: "getuigenissen" },
      { label: "Sessie boeken", value: "afspraak" },
    ],
  },

  assessment: {
    text: "Uitstekende keuze! Het **gratis assessment** is de eerste stap.\n\nIk ga u 5 snelle vragen stellen om uw situatie te beoordelen:\n\n**Vraag 1/5**: Op welk gebied wilt u groeien?\n\na) Carrière / loopbaanswitch\nb) Leiderschap / management\nc) Werk-privé balans\nd) Zelfvertrouwen\ne) Bedrijf starten",
    delay: 1800,
    quickReplies: [
      { label: "Carrière", value: "doel carriere" },
      { label: "Leiderschap", value: "doel leiderschap" },
      { label: "Balans", value: "doel balans" },
      { label: "Zelfvertrouwen", value: "doel zelfvertrouwen" },
      { label: "Ondernemerschap", value: "doel business" },
    ],
  },

  doelen: {
    text: "Het definiëren van uw **doelen** is essentieel voor effectieve coaching.\n\nHier zijn de gebieden waar wij klanten begeleiden:\n\n- Loopbaanswitch\n- Nieuwe functie / leiderschap\n- Stressmanagement en balans\n- Zelfvertrouwen en assertiviteit\n- Bedrijf starten / ontwikkelen\n- Professionele relaties\n- Prestatie en productiviteit\n\nWat is uw hoofddoel vandaag?",
    delay: 1600,
    quickReplies: [
      { label: "Gratis assessment", value: "gratis assessment" },
      { label: "Kennismakingssessie", value: "kennismakingssessie" },
      { label: "Methode", value: "methode" },
    ],
  },

  opvolging: {
    text: "De **opvolging tussen sessies** is onze kracht!\n\nTussen elke sessie profiteert u van:\n\n- **Onbeperkte WhatsApp-berichten** met uw AI-coach\n- **Praktijkoefeningen** verzonden na elke sessie\n- **Wekelijkse check-in**: kort overzicht van uw voortgang\n- **Automatische herinneringen** voor uw actiepunten\n- **Gepersonaliseerde bronnen** op basis van uw progressie\n\nHet is alsof u een coach 24/7 bij de hand heeft om uw dynamiek te behouden!",
    delay: 1800,
    quickReplies: [
      { label: "Bronnen bekijken", value: "bronnen" },
      { label: "Programma's", value: "programmas" },
      { label: "Boeken", value: "afspraak" },
    ],
  },

  bronnen: {
    text: "Hier zijn de **bronnen** inbegrepen in onze programma's:\n\n**Werkbladen:**\n- Levenswiel (globaal overzicht)\n- Eisenhower-matrix (prioriteiten)\n- Persoonlijke SWOT\n- 90-dagenactieplan\n\n**Oefeningen:**\n- Begeleide dankbaarheidsdagboek\n- Doelvisualisatie\n- Stresstechnieken\n\n**Digitale tools:**\n- Voortgangsdashboard\n- Planneringstemplates\n- Begeleide audio-meditaties\n\nIk kan u een **gratis voorbeeld** van het Levenswiel sturen!",
    delay: 2000,
    quickReplies: [
      { label: "Voorbeeld ontvangen", value: "voorbeeld" },
      { label: "Kennismakingssessie", value: "kennismakingssessie" },
      { label: "Programma's", value: "programmas" },
    ],
  },

  noodgeval: {
    text: "Ik begrijp dat u een moeilijk moment doormaakt.\n\n**Belangrijk**: Ik ben een AI-assistent en vervang geen geestelijke gezondheidsprofessional.\n\nAls u in een crissituatie verkeert:\n\n- **SOS Telefoon**: 0800 0113 (24/7)\n- **Zelfmoordlijn**: 113 (of chat op 113.nl)\n- **Noodnummer**: 112\n- **De Luisterlijn (BE)**: 0800 32 123\n\nOnze menselijke coach kan u ook snel terugbellen. Wilt u dat ik uw verzoek prioriteit geef?",
    delay: 1400,
    quickReplies: [
      { label: "Terugbelverzoek", value: "terugbel noodgeval" },
      { label: "Dank u, gaat wel", value: "hallo" },
    ],
  },

  faq: {
    text: "**Veelgestelde vragen**:\n\n**Hoe lang duurt een coaching?**\n2 tot 6 maanden afhankelijk van het gekozen programma.\n\n**Via video of persoonlijk?**\nBeide! Videocall via Zoom of persoonlijk in Genève.\n\n**Vertrouwelijkheid?**\n100% vertrouwelijk. Versleutelde gesprekken, AVG-conform.\n\n**Resultaten gegarandeerd?**\n92% van onze klanten bereikt hun doelen. Tevredenheid of gratis verlenging.\n\n**Annulering?**\nFlexibel, herprogrammering tot 24u van tevoren.\n\nNog een vraag?",
    delay: 2000,
    quickReplies: [
      { label: "Tarieven", value: "prijs" },
      { label: "Getuigenissen", value: "getuigenissen" },
      { label: "Boeken", value: "afspraak" },
    ],
  },

  betaling: {
    text: "Wij bieden verschillende **betalingsopties**:\n\n**Eenmalige betaling** — Meest voordelig\nOveschrijving, bankkaart of iDEAL\n\n**Betaling in 2 termijnen** — Kosteloos\n50% bij inschrijving + 50% halverwege\n\n**Betaling in 3 termijnen** — Kosteloos\n33% bij inschrijving + 2 maandelijkse termijnen\n\n**Betaling in 4 termijnen** — Kosteloos\n25% bij inschrijving + 3 maandelijkse termijnen\n\nProfessionele factuur beschikbaar (aftrekbaar als opleiding).\nKostenvergoeding mogelijk voor bedrijven.",
    delay: 1800,
    quickReplies: [
      { label: "Gedetailleerde tarieven", value: "prijs" },
      { label: "Boeken", value: "afspraak" },
      { label: "Aftrekbaar?", value: "aftrekbaar" },
    ],
  },

  groep: {
    text: "**Groepscoaching** is ideaal voor:\n\n**Bedrijfsteams** (6-8 personen)\n- Cohesie en communicatie\n- Conflictbeheer\n- Collectief leiderschap\n- Gemeenschappelijke doelen\n\n**Open groepen** (6-8 personen)\n- Loopbaanswitch\n- Ondernemerschap\n- Persoonlijke ontwikkeling\n\n**Formaat**: 8 sessies van 90 min over 2 maanden\n**Prijs**: estimation personnalisee\n**Bonus**: Privé WhatsApp-groepsgemeenschap\n\nVolgende sessie: **Mei 2026** — Beperkte plaatsen!",
    delay: 2000,
    quickReplies: [
      { label: "Inschrijven voor groep", value: "afspraak" },
      { label: "Individuele coaching", value: "individueel" },
      { label: "Bedrijfstarieven", value: "prijs" },
    ],
  },

  individueel: {
    text: "**Individuele coaching** is ons vlaggenschiprogramma:\n\n**Wat is inbegrepen:**\n- 12 sessies van 60 min (1/week)\n- Uitgebreid beginassessment\n- Gepersonaliseerd actieplan\n- WhatsApp-opvolging tussen sessies\n- Werkbladen en praktijkoefeningen\n- Eindevaluatie en consolidatieplan\n\n**Voor wie?**\nProfessionals in transitie, managers, ondernemers, iedereen die maatwerk begeleiding wenst.\n\n**Duur**: 3 maanden\n**Prijs**: estimation personnalisee\n\nBegin met een gratis kennismakingssessie!",
    delay: 2000,
    quickReplies: [
      { label: "Kennismakingssessie", value: "kennismakingssessie" },
      { label: "Vergelijken met VIP", value: "vip" },
      { label: "Getuigenissen", value: "getuigenissen" },
    ],
  },

  vip: {
    text: "Het **VIP Intensief** programma is ons premium aanbod:\n\n**Wat is inbegrepen:**\n- 20 sessies van 60 min\n- **Onbeperkt** WhatsApp-toegang met uw coach\n- Volledig psychometrisch assessment\n- Strategisch maatwerkplan\n- Exclusieve bronnen (masterclasses, tools)\n- 2 post-programma opvolgingssessies\n- Prioriteitsondersteuning 7/7\n\n**Gemiddelde resultaten:**\n- +67% gemeten zelfvertrouwen\n- +45% productiviteit\n- 94% doelen bereikt\n\n**Duur**: 6 maanden\n**Prijs**: estimation personnalisee (betaling in 4x mogelijk)",
    delay: 2200,
    quickReplies: [
      { label: "VIP boeken", value: "afspraak" },
      { label: "Betaling in termijnen", value: "betaling" },
      { label: "VIP getuigenissen", value: "getuigenissen" },
    ],
  },

  "relance campagne": {
    text: "**Heractivatiecampagnes voor coaching**:\n\nReactiveer uw vorige klanten en sluimerende leads!\n\n**Geautomatiseerde scenario's:**\n1. **Niet-geconverteerde lead** → herinnering dag 3 met klantgetuigenis\n2. **Afgeronde klant** → check-in na 3 maanden + opvolgingsaanbod\n3. **Afgebroken inschrijving** → herinnering + gratis kennismakingsaanbod\n4. **Lauwe lead** → nurturing met gratis content (werkbladen, oefeningen)\n\n**Gemiddelde resultaten:**\n- **28% reactivering** sluimerende leads\n- **+40% klantbehoud**\n- **3x meer referrals** dankzij automatische opvolging\n\nAlles via WhatsApp + vooraf goedgekeurde Meta-templates.",
    delay: 2200,
    quickReplies: [
      { label: "WhatsApp functies", value: "whatsapp functies" },
      { label: "Lead scoring", value: "scoring" },
      { label: "Tarieven", value: "prijs" },
      { label: "Afspraak maken", value: "afspraak" },
    ],
  },

  "kennismakingsgesprek": {
    text: "**AI-kennismakingsgesprek voor coaching**:\n\nUw spraakagent kwalificeert prospects automatisch:\n\n**Verloop van het AI-gesprek:**\n1. Persoonlijk welkom (gekloonde stem van de coach)\n2. Kwalificatievragen (doelen, budget, beschikbaarheid)\n3. Presentatie van het aangepaste programma\n4. Voorstel voor tijdslot kennismakingssessie\n5. Bevestiging via WhatsApp\n\n**Voordelen:**\n- Beschikbaar **24/7** voor het kwalificeren van leads\n- Voorkwalificatie vóór menselijke sessie\n- Automatische CRM + agenda sync\n- **+55% gekwalificeerde leads** vs webformulier\n\nDe coach spreekt alleen met echt gemotiveerde prospects!",
    delay: 2400,
    quickReplies: [
      { label: "Stem klonen", value: "stem klonen" },
      { label: "AI-telefonie", value: "telefonie" },
      { label: "Agenda", value: "agenda" },
      { label: "Tarieven", value: "prijs" },
    ],
  },

  "site widget": {
    text: "**Web-widget voor coachingwebsite**:\n\nIntegreer een AI-assistent direct op uw website:\n\n**Functies:**\n- **Tekstchat** voor snelle vragen\n- **Spraakoproep** vanuit de browser\n- **Interactief assessment** direct in de widget\n- **Afspraak boeken** zonder de pagina te verlaten\n- **Automatische leadcaptuur** in het CRM\n\n**Installatie:**\n1 JS-snippet vóór `</body>` — 2 minuten\n\n**Resultaten:**\n- **+45% conversie** bezoeker → lead\n- **-70% bounce rate** op tariefpagina\n- 24/7 beschikbaar ook als u in sessie bent\n\nAanpasbaar aan de kleuren van uw merk.",
    delay: 2200,
    quickReplies: [
      { label: "Widget details", value: "widget" },
      { label: "Automatisering", value: "automatisering" },
      { label: "Tarieven", value: "prijs" },
      { label: "Afspraak maken", value: "afspraak" },
    ],
  },
};

const COACH_KEYWORDS_NL: Record<string, string[]> = {
  hallo: ["hallo", "hoi", "hey", "goedemorgen", "hi", "hello", "dag", "goedendag"],
  programmas: ["programma", "formule", "aanbod", "coaching", "begeleiding", "opleiding"],
  kennismakingssessie: ["kennismakingssessie", "kennismaking", "gratis sessie"],
  beschikbaarheid: ["beschikbaarheid", "wanneer", "tijdschema", "agenda", "planning", "week"],
  getuigenissen: ["getuigenis", "beoordeling", "klantervaring", "resultaat", "succes", "feedback"],
  methode: ["methode", "aanpak", "hoe werkt het", "proces", "techniek", "tool"],
  assessment: ["assessment", "diagnose", "evaluatie", "test", "vragenlijst"],
  doelen: ["doel", "doelstelling", "ambitie", "project", "wens", "behoefte"],
  opvolging: ["opvolging", "tussen sessies", "begeleiding", "dagelijks", "support"],
  bronnen: ["bron", "werkblad", "oefening", "document", "worksheet", "praktische tool"],
  noodgeval: ["noodgeval", "dringend", "crisis", "nood", "hulp", "depressief", "angst", "paniek"],
  faq: ["faq", "vraag", "vertrouwelijkheid", "annuleren", "annulering", "duur", "video", "persoonlijk"],
  betaling: ["betaling", "betalen", "termijn", "kaart", "overschrijving", "ideal", "factuur"],
  groep: ["groep", "team", "collectief", "bedrijf", "team building"],
  individueel: ["individueel", "persoonlijk", "privé", "alleen", "1-op-1", "one to one"],
  vip: ["vip", "premium", "intensief", "exclusief", "compleet"],
  "relance campagne": ["relance campagne", "herinnering", "reactivering", "sluimerende leads", "nurturing"],
  kennismakingsgesprek: ["kennismakingsgesprek", "kwalificatiegesprek", "ai gesprek", "automatisch gesprek"],
  "site widget": ["site widget", "chat site", "website integreren", "web widget"],
};

const merged = mergeWithVocalisNL(COACH_INTENTS_NL, COACH_KEYWORDS_NL);

export const coachConfigNL: SimulatorConfig = {
  botName: "CoachPro IA",
  botAvatar: "CP",
  welcomeMessage:
    "Welkom bij **CoachPro**! Ik ben uw AI-assistent aangedreven door **Vocalis AI**.\n\nIk kan u helpen met:\n- Onze coachingprogramma's ontdekken\n- Een gratis kennismakingssessie boeken\n- Een persoonlijk assessment ontvangen\n- Al uw vragen beantwoorden\n\nHoe kan ik u vandaag begeleiden?",
  initialQuickReplies: [
    { label: "Programma's", value: "programmas" },
    { label: "Kennismakingssessie", value: "kennismakingssessie" },
    { label: "Tarieven", value: "prijs" },
    { label: "Gratis assessment", value: "gratis assessment" },
  ],
  intents: merged.intents,
  keywords: merged.keywords,
  fallback: createFallbackNL([
    { label: "Programma's", value: "programmas" },
    { label: "Kennismakingssessie", value: "kennismakingssessie" },
    { label: "Gratis assessment", value: "gratis assessment" },
    { label: "Tarieven", value: "prijs" },
  ]),
};

export default coachConfigNL;
