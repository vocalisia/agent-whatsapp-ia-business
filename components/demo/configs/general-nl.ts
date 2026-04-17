import type { SimulatorConfig } from "../WhatsAppSimulator";
import { mergeWithVocalisNL, createFallbackNL } from "./vocalis-features-nl";

const GENERAL_INTENTS_NL = {
  hallo: {
    text: "Hallo! Ik ben de AI-agent van AgenticWhatsup, aangedreven door **Vocalis AI**.\n\nIk kan u helpen met:\n\n- Uw leads automatisch kwalificeren\n- Afspraken inplannen voor uw klanten\n- Foto's en documenten analyseren\n- FAQ's 24/7 beantwoorden\n- AI-telefonie (inkomende/uitgaande oproepen)\n- Stem klonen & meertalig\n\nWat wilt u weten?",
    delay: 1800,
    quickReplies: [
      { label: "Hoe werkt het?", value: "hoe werkt het" },
      { label: "WhatsApp functies", value: "whatsapp functies" },
      { label: "AI-telefonie", value: "telefonie" },
      { label: "Tarieven", value: "prijs" },
    ],
  },
  hoi: {
    text: "Hoi! Welkom bij AgenticWhatsup.\n\nIk ben uw AI-assistent aangedreven door Vocalis. Stel me elke vraag!",
    delay: 1400,
    quickReplies: [
      { label: "Functies", value: "hoe werkt het" },
      { label: "Stem klonen", value: "stem klonen" },
      { label: "Tarieven", value: "prijs" },
    ],
  },
  "hoe werkt het": {
    text: "Onze AI-agent werkt in 3 stappen:\n\n**1. Verbinding** — We koppelen uw WhatsApp Business + telefonie in 48u\n\n**2. Training** — De AI leert uw producten, diensten, FAQ via de kennisbank\n\n**3. Autonomie** — De agent antwoordt 24/7:\n   - WhatsApp: tekst, spraak, foto's\n   - Telefoon: inkomende/uitgaande oproepen\n   - Web: chat/spraak-widget\n   - SMS: omnichannel-aanvulling\n\n**+ Flow Builder** om de logica te ontwerpen\n**+ Dashboards** voor real-time monitoring",
    delay: 2400,
    quickReplies: [
      { label: "Flow Builder?", value: "flow builder" },
      { label: "Stem klonen", value: "stem klonen" },
      { label: "Automatisering", value: "automatisering" },
      { label: "Tarieven", value: "prijs" },
    ],
  },
  foto: {
    text: "Onze Vision AI analyseert in real-time:\n\n- Identiteitsdocumenten\n- Facturen en bestelbonnen\n- Foto's van defecte producten\n- Vastgoed\n- Schade (verzekeringsclaims)\n- Voertuigen (inruilschatting)\n\n**De AI extraheert gegevens, maakt het dossier aan en informeert het team — in 2 seconden.**",
    delay: 1800,
    quickReplies: [
      { label: "Stem ook?", value: "stem" },
      { label: "Tarieven", value: "prijs" },
    ],
  },
  demo: {
    text: "Dit kan ik tonen:\n\n**1. WhatsApp Business**\nMeta-templates, nurturing, recovery winkelwagen\n\n**2. AI-telefonie**\nInkomende/uitgaande oproepen, menselijke overdracht\n\n**3. Stem klonen**\n3 TTS-leveranciers, uw merkstem\n\n**4. Flow Builder**\nVisuele gesprekslogica, geen code\n\n**5. Voorspellende scoring**\n15+ criteria, automatische routing\n\n**6. 10 sectoren**\nE-commerce, medisch, restaurant, auto...\n\nWat wilt u testen?",
    delay: 2200,
    quickReplies: [
      { label: "WhatsApp functies", value: "whatsapp functies" },
      { label: "Telefonie", value: "telefonie" },
      { label: "Stem klonen", value: "stem klonen" },
      { label: "Scoring", value: "scoring" },
    ],
  },
  "klantcases": {
    text: "Klantresultaten per sector:\n\n**Tandartspraktijk** (Geneve)\n- 70% minder no-shows, 200+ afspraken/maand\n\n**Vastgoedkantoor** (Parijs)\n- 3x meer gekwalificeerde bezichtigingen\n\n**Mode-e-commerce** (Lyon)\n- 85% geautomatiseerde klantenservice, 4s respons\n\n**Restaurant** (Zurich)\n- WhatsApp-reserveringen +120%\n\n**Autodealer** (Brussel)\n- Lead-kwalificatie x2, proefritten +45%\n\n**Advocatenkantoor** (Geneve)\n- Geplande consultaties +60%",
    delay: 2400,
    quickReplies: [
      { label: "Mijn sector?", value: "sector" },
      { label: "Afspraak maken", value: "afspraak" },
    ],
  },
  sector: {
    text: "**10 sectoren** met speciale demo:\n\n- E-Commerce\n- Coach & Trainer\n- Verzekeringen\n- Vastgoed\n- Restaurant & Catering\n- Medisch\n- Fitness & Sportschool\n- Automotive\n- Juridisch (advocaat, notaris)\n- Horeca\n\nElke agent is aangepast aan uw vak met specifieke kennisbank.",
    delay: 2000,
    quickReplies: [
      { label: "Afspraak maken", value: "afspraak" },
      { label: "Tarieven", value: "prijs" },
    ],
  },
};

const GENERAL_KEYWORDS_NL = {
  hallo: ["hallo", "hoi", "hey", "goedemorgen", "goedenavond", "goededag", "hi", "hello"],
  "hoe werkt het": ["hoe", "werkt", "functioneert", "uitleggen", "explain", "how"],
  foto: ["foto", "afbeelding", "camera", "document", "analyseren", "picture", "scan", "vision"],
  demo: ["demo", "demonstratie", "tonen", "show", "proberen", "test", "testen"],
  "klantcases": ["klantcase", "klant case", "resultaat", "testimonial", "voorbeeld", "referentie"],
  sector: ["sector", "industrie", "branche", "vertical", "vak"],
};

const merged = mergeWithVocalisNL(GENERAL_INTENTS_NL, GENERAL_KEYWORDS_NL);

export const generalConfigNL: SimulatorConfig = {
  botName: "AgenticWhatsup",
  botAvatar: "AI",
  welcomeMessage:
    "Welkom! Ik ben de AI-agent van AgenticWhatsup, aangedreven door **Vocalis AI**.\n\nTyp een bericht of gebruik de suggesties om al onze functies te ontdekken.",
  initialQuickReplies: [
    { label: "Hallo!", value: "hallo" },
    { label: "WhatsApp functies", value: "whatsapp functies" },
    { label: "AI-telefonie", value: "telefonie" },
    { label: "Stem klonen", value: "stem klonen" },
    { label: "Tarieven", value: "prijs" },
  ],
  intents: merged.intents,
  keywords: merged.keywords,
  fallback: createFallbackNL([
    { label: "Hoe werkt het?", value: "hoe werkt het" },
    { label: "WhatsApp functies", value: "whatsapp functies" },
    { label: "AI-telefonie", value: "telefonie" },
    { label: "Tarieven", value: "prijs" },
  ]),
};
