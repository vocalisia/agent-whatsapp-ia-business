import type { BotResponse, QuickReply } from "../WhatsAppSimulator";

/**
 * Shared Vocalis AI features — Dutch version.
 * These intents answer questions about the platform itself.
 */

export const VOCALIS_INTENTS_NL: Record<string, BotResponse> = {
  stem: {
    text: "Onze AI begrijpt spraakberichten!\n\n**3 beschikbare modi:**\n\n**Pipeline** — Transcriptie → LLM → TTS\nVolledige controle, alle stemmen inclusief gekloonde\n\n**Speech-to-Speech** — Ultralage latentie\nDirecte stem, zonder tussenliggende tekst\n\n**Dualplex** — Hybride modus (aanbevolen)\nBijna-directe respons + ElevenLabs-stem\n\nNauwkeurigheid > 98% in 10+ talen.",
    delay: 2200,
    quickReplies: [
      { label: "Stem klonen?", value: "stem klonen" },
      { label: "Welke talen?", value: "talen" },
      { label: "Tarieven", value: "prijs" },
    ],
  },
  "stem klonen": {
    text: "Kloon uw stem of creeer een unieke!\n\n**3 TTS-leveranciers:**\n- **ElevenLabs** — Meerdere samples, 1+ min\n- **Cartesia** — 1 audiobestand, min 10 sec\n- **Cartesia Sonic 3** — Emotiecontrole in real-time (toon, intensiteit, expressiviteit)\n\n**Instelbare parameters:**\n- Temperatuur (0.0-1.0)\n- Toon: formeel, ongedwongen, warm, gezaghebbend\n\nUw agent spreekt met UW merkstem.",
    delay: 2000,
    quickReplies: [
      { label: "Hoe werkt het?", value: "hoe werkt het" },
      { label: "Ondersteunde talen", value: "talen" },
      { label: "Tarieven", value: "prijs" },
    ],
  },
  talen: {
    text: "Ondersteunde talen:\n\n- Nederlands (+ regionale accenten)\n- Engels (US, UK, Australisch)\n- Frans, Spaans (Iberisch + Latijns)\n- Duits, Italiaans\n- Noors, Russisch, Zweeds, Fins\n\n**Automatische code-switching:**\nDe agent detecteert de taal van de klant tijdens het gesprek en schakelt automatisch over — geen extra configuratie nodig!",
    delay: 1800,
    quickReplies: [
      { label: "Tarieven", value: "prijs" },
      { label: "Afspraak maken", value: "afspraak" },
    ],
  },
  "flow builder": {
    text: "De **Flow Builder** laat u de conversatielogica ontwerpen:\n\n- Visuele beslissingsbomen\n- Multi-channel routing (stem, SMS, WhatsApp)\n- Voorwaarden en vertakkingen\n- Acties getriggerd door trefwoorden\n- De klant kiest zijn interactiekanaal\n\nGeen code — alles via drag-and-drop.",
    delay: 2000,
    quickReplies: [
      { label: "Automatisering?", value: "automatisering" },
      { label: "Webhook API?", value: "webhook" },
      { label: "Tarieven", value: "prijs" },
    ],
  },
  automatisering: {
    text: "Complete no-code automatisering:\n\n**Triggers:**\n- Einde gesprek\n- Doel bereikt\n- Nieuw gesprek\n- Lead-update\n\n**Acties:**\n- CRM-sync (HubSpot, Salesforce, Pipedrive, GoHighLevel)\n- E-mail, SMS, Slack\n- Google Sheets\n- Custom HTTP API\n- Lead-creatie in andere campagne\n\nVisuele workflow, geen code.",
    delay: 2200,
    quickReplies: [
      { label: "Webhook API", value: "webhook" },
      { label: "CRM-integraties", value: "crm" },
      { label: "Tarieven", value: "prijs" },
    ],
  },
  webhook: {
    text: "REST API + Webhooks:\n\n**Webhooks:**\n- Configuratie per assistent/campagne\n- Events: call.ended, lead updates\n- JSON-payload: ID, duur, transcript, variabelen\n\n**REST API:**\n- Volledige programmatische controle\n- Assistenten, campagnes, leads, gesprekken\n- Token-authenticatie\n- Actie \"Make a Call\" zonder campagne\n\nIntegreer Vocalis in elk systeem.",
    delay: 2000,
    quickReplies: [
      { label: "CRM-integraties", value: "crm" },
      { label: "Tarieven", value: "prijs" },
    ],
  },
  crm: {
    text: "Native CRM-integraties:\n\n- **HubSpot** — Bi-directionele sync\n- **Salesforce** — Leads + activiteiten\n- **Pipedrive** — Automatische deals\n- **GoHighLevel** — Volledige integratie\n- **Zoho** — CRM + automatisering\n- **Google Sheets** — Real-time export\n- **Zapier** — 5000+ apps\n- **Make** — Geavanceerde workflows\n- **REST API** — Custom integratie\n\nAlle leads, transcripts en resultaten automatisch gesynchroniseerd.",
    delay: 2000,
    quickReplies: [
      { label: "Afspraak maken", value: "afspraak" },
      { label: "Tarieven", value: "prijs" },
    ],
  },
  telefonie: {
    text: "Complete AI-telefonie:\n\n**Inkomende oproepen** — 24/7 auto-respons\n**Uitgaande oproepen** — Geautomatiseerd contact met prospects\n**Bulkoproepen** — Parallel volume\n\n**Functies:**\n- Antwoordapparaat-detectie + voicemail\n- Menselijke overdracht mid-call\n- DTMF (toetsen)\n- SIP/PBX-integratie\n- Geverifieerde caller ID\n- Instelbare max. duur (20-1200 sec)\n\nNummers NL, BE, US, UK, EU — vanaf 3 EUR/maand.",
    delay: 2200,
    quickReplies: [
      { label: "SMS ook?", value: "sms" },
      { label: "Tarieven", value: "prijs" },
    ],
  },
  sms: {
    text: "SMS-mogelijkheden:\n\n- SMS verzenden en ontvangen\n- Aanvulling op WhatsApp\n- Getriggerd via automatisering\n- Aanpasbare templates\n- Bezorgtracking\n\nSMS + WhatsApp + Spraak = volledige omnichannel dekking.",
    delay: 1600,
    quickReplies: [
      { label: "WhatsApp functies", value: "whatsapp functies" },
      { label: "Tarieven", value: "prijs" },
    ],
  },
  "whatsapp functies": {
    text: "WhatsApp Business-functionaliteiten:\n\n- **Meta-templates** vooraf goedgekeurd\n- **AI-conversaties** 24/7 geautomatiseerd\n- **24-uurs venster** + opvolging via template\n- **Lead-kwalificatie** + voorspellende scoring\n- **Betaallinks** + contracten + bevestigingen\n- **Recovery verlaten winkelwagen**\n- **Automatische nurturing** (verkooppaginas, masterclass)\n- **Intelligente upselling**\n- **Geautomatiseerde onboarding** klant\n- **Heractivering** sluimerende CRM-leads\n- **Integratie** Meta Ads / Google Ads",
    delay: 2400,
    quickReplies: [
      { label: "Meta-templates?", value: "templates" },
      { label: "Lead-scoring", value: "scoring" },
      { label: "Tarieven", value: "prijs" },
    ],
  },
  templates: {
    text: "Meta-berichttemplates:\n\n- Vooraf goedgekeurde berichten door Meta\n- Verplicht na 24u zonder antwoord\n- Categorieen: marketing, utility, auth\n- Dynamische variabelen (naam, afspraak, bedrag...)\n- Interactieve knoppen (CTA, snelle respons)\n\nOnze teams helpen u bij het laten goedkeuren van uw templates.",
    delay: 1800,
    quickReplies: [
      { label: "Automatisering", value: "automatisering" },
      { label: "Tarieven", value: "prijs" },
    ],
  },
  scoring: {
    text: "Voorspellende lead-scoring:\n\n**15+ B2B-criteria** geanalyseerd:\n- Gedetecteerde koopintentie\n- Geanalyseerde emotionele toon\n- Engagement in het gesprek\n- Antwoorden op kernvragen\n\n**Score > 80** → Hot lead → onmiddellijke notificatie\n**Score 50-80** → Warme lead → auto-nurturing\n**Score < 50** → Koude lead → educatieve content\n\nDynamische scripting aangepast aan het prospectprofiel.",
    delay: 2000,
    quickReplies: [
      { label: "CRM-sync", value: "crm" },
      { label: "Campagnes", value: "campagnes" },
      { label: "Tarieven", value: "prijs" },
    ],
  },
  campagnes: {
    text: "Campagnebeheer:\n\n- **Groepen uitgaande oproepen** met toegewezen assistent\n- **Automatische retry** tot doel bereikt\n- **Antwoordapparaat-detectie** + auto-terugbellen\n- **Doelvariabele** (markeer lead als behandeld)\n- **Backup-contacten** (alternatieve nummers)\n- **Dagelijkse uitgavenlimiet**\n- **Pauze/Hervatten** campagnes\n- **Lead-import** CSV met kolommapping\n- **Dynamische variabele-injectie** in de prompt\n\n**Lead-statussen:** Gemaakt → Bezig → Voltooid / Mislukt\nKanban-weergave met drag-and-drop.",
    delay: 2400,
    quickReplies: [
      { label: "Dashboards", value: "dashboards" },
      { label: "Tarieven", value: "prijs" },
    ],
  },
  dashboards: {
    text: "Real-time analytics-dashboards:\n\n- **Trendgrafieken** — oproepvolume, slagingspercentage, gem. duur\n- **KPI-tellers** — oproepen/dag, conversiepercentage, behandelde leads\n- **Verdelingsgrafieken** — oproepresultaten (taart/balken)\n- **Gefilterde tabellen** — per assistent, campagne, periode, resultaat\n- **Drag-and-drop** aanpasbare layout\n- **Gescheiden dashboards** per use case (verkoop, support, management)\n\nLive monitoring van al uw operaties.",
    delay: 2000,
    quickReplies: [
      { label: "Afspraak maken", value: "afspraak" },
      { label: "Tarieven", value: "prijs" },
    ],
  },
  "kennisbank": {
    text: "AI-kennisbanken:\n\n- **Ondersteunde formaten:** PDF, teksten, FAQ, productcatalogi, prijslijsten\n- **Individueel beheer** — toevoegen/verwijderen zonder volledige herimport\n- **Dynamische updates** — delen aanpassen\n- **Automatische raadpleging** wanneer relevante vraag gedetecteerd\n- **Gecombineerd met systeemprompt** voor complexe antwoorden\n\nUw agent kent ALLES van uw business.",
    delay: 2000,
    quickReplies: [
      { label: "Flow Builder", value: "flow builder" },
      { label: "Tarieven", value: "prijs" },
    ],
  },
  widget: {
    text: "Integreerbare web-widget:\n\n- **Tekstchat** of **spraakoproep** vanuit de browser\n- Parameters: assistantId, positie, kleur, taal\n- **Responsive** mobiel + desktop\n- **Auto-lead-creatie** CRM met formuliergegevens\n- **Automatiseringstrigger** bij elk gesprek\n- Installatie: 1 JS-snippet voor </body>\n\nUw webbezoekers worden gekwalificeerde leads.",
    delay: 1800,
    quickReplies: [
      { label: "Afspraak maken", value: "afspraak" },
      { label: "Tarieven", value: "prijs" },
    ],
  },
  agenda: {
    text: "Agenda-integraties:\n\n- **Cal.com** — Volledige configuratie\n- **Calendly** — Bi-directionele sync\n- **GoHighLevel** — Volledige integratie\n- **Google Calendar** — Lezen/schrijven\n- **Outlook** — Synchronisatie\n\nDe agent controleert real-time beschikbaarheid, stelt tijdsloten voor en bevestigt automatisch.",
    delay: 1800,
    quickReplies: [
      { label: "Afspraak maken", value: "afspraak" },
      { label: "Tarieven", value: "prijs" },
    ],
  },
  avg: {
    text: "Beveiliging en compliance:\n\n**AVG/GDPR** — 100% conform\n- Gegevens gehost in Europa\n- End-to-end versleuteling\n- Geautomatiseerd recht op vergetelheid\n- Bel-me-niet-register conformiteit\n\n**Gegevensretentie:**\n- Configureerbaar per klant\n- Permanente verwijdering mogelijk\n- Juridische verificatie uitgaande nummers\n\n**API-beveiliging:**\n- Token-authenticatie\n- Gedocumenteerde beveiligingsaanbevelingen",
    delay: 2000,
    quickReplies: [
      { label: "Afspraak maken", value: "afspraak" },
      { label: "Tarieven", value: "prijs" },
    ],
  },
  prijs: {
    text: "Onze formules:\n\n**Starter** — 97 EUR/maand\n- 1 WhatsApp-agent\n- 500 gesprekken/maand\n- FAQ + kennisbank\n\n**Business** — 247 EUR/maand\n- Multimodale agent (foto + spraak + oproepen)\n- Onbeperkte gesprekken\n- CRM + Agenda + Campagnes\n- Flow Builder + Automatiseringen\n\n**Enterprise** — Op maat\n- Multi-agents + stem klonen\n- API + Webhooks\n- Gegarandeerde SLA + custom dashboards\n\nSetup + training inbegrepen.",
    delay: 2200,
    quickReplies: [
      { label: "Gratis proef?", value: "proef" },
      { label: "Afspraak maken", value: "afspraak" },
      { label: "Typische ROI?", value: "roi" },
    ],
  },
  proef: {
    text: "Ja! We bieden een **gratis audit** van 30 minuten.\n\nTijdens dit gesprek:\n1. Analyseren we uw behoeften\n2. Tonen we de agent in actie op UW case\n3. Geven we u een concreet actieplan\n\nZonder verplichting. Wilt u reserveren?",
    delay: 1800,
    quickReplies: [
      { label: "Ja, reserveren!", value: "afspraak" },
      { label: "Meer vragen", value: "vragen" },
    ],
  },
  roi: {
    text: "Typische ROI van onze klanten:\n\n**Tijd bespaard:** 15-25u/week\n**Antwoordpercentage:** van 40% naar 95%\n**Gekwalificeerde leads:** +60%\n**No-shows:** -70%\n**Klanttevredenheid:** +35%\n\nGemiddelde payback: **3 weken**.\n\nDe agent werkt 24/7 zonder pauze, zonder salaris, zonder verloop.",
    delay: 2000,
    quickReplies: [
      { label: "Afspraak maken", value: "afspraak" },
      { label: "Tarieven", value: "prijs" },
    ],
  },
  afspraak: {
    text: "Reserveer uw gratis audit:\n\n**Volgende tijdsloten:**\n- Maandag 21 april — 10u of 14u\n- Dinsdag 22 april — 9u of 16u\n- Woensdag 23 april — 11u\n\nWelk tijdslot past u?",
    delay: 2000,
    quickReplies: [
      { label: "Maandag 10u", value: "afspraak bevestigen" },
      { label: "Dinsdag 16u", value: "afspraak bevestigen" },
      { label: "Ander tijdslot", value: "ander tijdslot" },
    ],
  },
  "afspraak bevestigen": {
    text: "Afspraak bevestigd!\n\n**Datum:** Maandag 21 april 2026\n**Tijd:** 10:00 (CET)\n**Duur:** 30 min\n**Formaat:** Google Meet-video\n\nU ontvangt:\n- Bevestigingsmail\n- WhatsApp-herinnering D-1\n- WhatsApp-herinnering U-1\n\nTot snel!",
    delay: 2200,
    quickReplies: [
      { label: "Bedankt!", value: "bedankt" },
    ],
  },
  "ander tijdslot": {
    text: "Hier zijn andere beschikbaarheden:\n\n- Donderdag 24 april — 10u, 14u, 17u\n- Vrijdag 25 april — 9u, 11u\n- Maandag 28 april — 10u, 15u\n\nOf geef uw voorkeur aan!",
    delay: 1600,
    quickReplies: [
      { label: "Donderdag 14u", value: "afspraak bevestigen" },
      { label: "Vrijdag 9u", value: "afspraak bevestigen" },
    ],
  },
  bedankt: {
    text: "Met plezier! Tot snel.\n\nIn afwachting kunt u onze andere sectoriele demos verkennen.",
    delay: 1200,
    quickReplies: [{ label: "Opnieuw beginnen", value: "hallo" }],
  },
  vragen: {
    text: "Stel me elke vraag:\n\n- Functies (stem, WhatsApp, telefonie)\n- Stem klonen & stemmen\n- Flow Builder & automatisering\n- CRM-integraties\n- Beveiliging & AVG\n- Tarieven & contract\n\nIk weet alles over Vocalis AI!",
    delay: 1200,
    quickReplies: [
      { label: "Stem klonen", value: "stem klonen" },
      { label: "WhatsApp functies", value: "whatsapp functies" },
      { label: "Telefonie", value: "telefonie" },
      { label: "Tarieven", value: "prijs" },
    ],
  },
};

/** Shared keywords that map to Vocalis platform features (Dutch) */
export const VOCALIS_KEYWORDS_NL: Record<string, string[]> = {
  stem: ["stem", "spraak", "audio", "microfoon", "voice", "whisper", "transcri", "spreken", "vocaal"],
  "stem klonen": ["klonen", "kloon", "clone", "tts", "elevenlabs", "cartesia"],
  talen: ["taal", "talen", "engels", "spaans", "duits", "italiaans", "meertalig", "polyglot"],
  "flow builder": ["flow", "builder", "boom", "logica", "vertakking"],
  automatisering: ["automatisering", "automation", "workflow", "no-code", "nocode", "trigger", "getriggerd"],
  webhook: ["webhook", "api", "rest", "json", "endpoint", "programm"],
  crm: ["crm", "hubspot", "salesforce", "pipedrive", "gohighlevel", "zoho", "zapier", "make", "integratie"],
  telefonie: ["telefonie", "oproep", "telefoon", "bellen", "sip", "pbx", "voip", "inkomend", "uitgaand"],
  sms: ["sms", "tekstbericht"],
  "whatsapp functies": ["whatsapp functie", "whatsapp feature", "meta template"],
  templates: ["template", "meta", "vooraf goedgekeurd"],
  scoring: ["scoring", "score", "kwalificatie", "kwalificeren", "hot lead", "voorspellend"],
  campagnes: ["campagne", "campaign", "bulk", "massa", "outbound"],
  dashboards: ["dashboard", "analytics", "kpi", "grafiek", "monitoring", "statistiek"],
  "kennisbank": ["kennis", "knowledge", "bank", "pdf", "catalogus", "faq doc"],
  widget: ["widget", "embed", "integreren", "snippet"],
  agenda: ["agenda", "kalender", "calendar", "cal.com", "calendly", "outlook", "google calendar"],
  avg: ["avg", "gdpr", "rgpd", "beveiliging", "security", "gegevens", "privacy", "vertrouwelijk"],
  prijs: ["prijs", "tarief", "tarieven", "kosten", "hoeveel", "price", "pricing", "euro", "duur", "formule"],
  afspraak: ["afspraak", "reserveren", "boeken", "book", "meeting", "demo", "audit"],
  proef: ["proef", "gratis", "free", "trial"],
  roi: ["roi", "rendement", "investering", "resultaat", "performance"],
  bedankt: ["bedankt", "dank", "thanks", "super", "geweldig", "cool", "top", "perfect", "bravo"],
};

/** Merge sector-specific intents with Vocalis shared intents (Dutch). Sector takes priority. */
export function mergeWithVocalisNL(
  sectorIntents: Record<string, BotResponse>,
  sectorKeywords: Record<string, string[]>
): { intents: Record<string, BotResponse>; keywords: Record<string, string[]> } {
  return {
    intents: { ...VOCALIS_INTENTS_NL, ...sectorIntents },
    keywords: { ...VOCALIS_KEYWORDS_NL, ...sectorKeywords },
  };
}

/** Common fallback for all sectors (Dutch) */
export function createFallbackNL(sectorOptions: QuickReply[]): BotResponse {
  return {
    text: "Ik heb het niet helemaal begrepen, maar geen zorgen!\n\nIk kan u helpen met:\n- Functies van uw sector\n- AI-telefonie, WhatsApp, SMS\n- Stem klonen & talen\n- CRM-integraties & automatisering\n- Tarieven en gratis audit\n\nProbeer een van deze onderwerpen!",
    delay: 1400,
    quickReplies: sectorOptions,
  };
}
