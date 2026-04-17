import type { BotResponse, QuickReply } from "../WhatsAppSimulator";

/**
 * Shared Vocalis AI features (English) — injected into every sector config.
 * These intents answer questions about the platform itself.
 */

export const VOCALIS_INTENTS_EN: Record<string, BotResponse> = {
  voice: {
    text: "Our AI understands voice messages!\n\n**3 modes available:**\n\n**Pipeline** — Transcription > LLM > TTS\nFull control, all voices including cloned ones\n\n**Speech-to-Speech** — Ultra-low latency\nDirect voice, no intermediate text\n\n**Dualplex** — Hybrid mode (recommended)\nNear-instant response + ElevenLabs voice\n\nAccuracy > 98% in 10+ languages.",
    delay: 2200,
    quickReplies: [
      { label: "Voice cloning?", value: "voice cloning" },
      { label: "Which languages?", value: "languages" },
      { label: "Pricing", value: "pricing" },
    ],
  },
  "voice cloning": {
    text: "Clone your voice or create a unique one!\n\n**3 TTS providers:**\n- **ElevenLabs** — Multiple samples, 1+ min\n- **Cartesia** — 1 audio file, min 10 sec\n- **Cartesia Sonic 3** — Real-time emotion control (tone, intensity, expressiveness)\n\n**Adjustable parameters:**\n- Temperature (0.0-1.0)\n- Tone: formal, casual, warm, authoritative\n\nYour agent speaks with YOUR brand voice.",
    delay: 2000,
    quickReplies: [
      { label: "How it works?", value: "how it works" },
      { label: "Supported languages", value: "languages" },
      { label: "Pricing", value: "pricing" },
    ],
  },
  languages: {
    text: "Supported languages:\n\n- French (+ regional accents)\n- English (US, UK, Australian)\n- Spanish (Iberian + Latin)\n- German, Italian, Dutch\n- Norwegian, Russian, Swedish, Finnish\n\n**Automatic code-switching:**\nThe agent detects the customer's language mid-conversation and switches automatically — no extra config!",
    delay: 1800,
    quickReplies: [
      { label: "Pricing", value: "pricing" },
      { label: "Book a meeting", value: "booking" },
    ],
  },
  "flow builder": {
    text: "The **Flow Builder** lets you design conversation logic:\n\n- Visual decision trees\n- Multi-channel routing (voice, SMS, WhatsApp)\n- Conditions and branching\n- Keyword-triggered actions\n- The customer chooses their interaction channel\n\nZero code — everything is drag-and-drop.",
    delay: 2000,
    quickReplies: [
      { label: "Automation?", value: "automation" },
      { label: "Webhook API?", value: "webhook" },
      { label: "Pricing", value: "pricing" },
    ],
  },
  automation: {
    text: "Complete no-code automation:\n\n**Triggers:**\n- Call ended\n- Objective reached\n- New conversation\n- Lead updated\n\n**Actions:**\n- CRM sync (HubSpot, Salesforce, Pipedrive, GoHighLevel)\n- Email, SMS, Slack\n- Google Sheets\n- Custom HTTP API\n- Lead creation in another campaign\n\nVisual workflow, zero code.",
    delay: 2200,
    quickReplies: [
      { label: "Webhook API", value: "webhook" },
      { label: "CRM integrations", value: "crm" },
      { label: "Pricing", value: "pricing" },
    ],
  },
  webhook: {
    text: "REST API + Webhooks:\n\n**Webhooks:**\n- Config per assistant/campaign\n- Events: call.ended, lead updates\n- JSON payload: ID, duration, transcript, variables\n\n**REST API:**\n- Full programmatic control\n- Assistants, campaigns, leads, calls\n- Token authentication\n- \"Make a Call\" action without campaign\n\nIntegrate Vocalis into any system.",
    delay: 2000,
    quickReplies: [
      { label: "CRM integrations", value: "crm" },
      { label: "Pricing", value: "pricing" },
    ],
  },
  crm: {
    text: "Native CRM integrations:\n\n- **HubSpot** — Bi-directional sync\n- **Salesforce** — Leads + activities\n- **Pipedrive** — Automatic deals\n- **GoHighLevel** — Full integration\n- **Zoho** — CRM + automation\n- **Google Sheets** — Real-time export\n- **Zapier** — 5000+ apps\n- **Make** — Advanced workflows\n- **REST API** — Custom integration\n\nAll leads, transcripts and outcomes synced automatically.",
    delay: 2000,
    quickReplies: [
      { label: "Book a meeting", value: "booking" },
      { label: "Pricing", value: "pricing" },
    ],
  },
  telephony: {
    text: "Complete AI telephony:\n\n**Inbound calls** — 24/7 auto-answer\n**Outbound calls** — Automated prospect outreach\n**Bulk calls** — Parallel volume\n\n**Features:**\n- Voicemail detection + voice message\n- Mid-call human transfer\n- DTMF (keypad tones)\n- SIP/PBX integration\n- Verified Caller ID\n- Configurable max duration (20-1200 sec)\n\nFR, US, UK, EU numbers — from 3$/month.",
    delay: 2200,
    quickReplies: [
      { label: "SMS too?", value: "sms" },
      { label: "Pricing", value: "pricing" },
    ],
  },
  sms: {
    text: "SMS capabilities:\n\n- Send and receive SMS\n- Complements WhatsApp\n- Triggered by automation\n- Customizable templates\n- Deliverability tracking\n\nSMS + WhatsApp + Voice = complete omnichannel coverage.",
    delay: 1600,
    quickReplies: [
      { label: "WhatsApp features", value: "whatsapp features" },
      { label: "Pricing", value: "pricing" },
    ],
  },
  "whatsapp features": {
    text: "WhatsApp Business features:\n\n- **Pre-approved Meta templates**\n- **24/7 automated AI conversations**\n- **24h window** + template follow-up\n- **Lead qualification** + predictive scoring\n- **Payment links** + contracts + confirmations\n- **Cart recovery** for abandoned carts\n- **Automatic nurturing** (sales pages, masterclass)\n- **Smart upselling**\n- **Automated customer onboarding**\n- **Dormant lead reactivation** from CRM\n- **Integration** with Meta Ads / Google Ads",
    delay: 2400,
    quickReplies: [
      { label: "Meta templates?", value: "templates" },
      { label: "Lead scoring", value: "scoring" },
      { label: "Pricing", value: "pricing" },
    ],
  },
  templates: {
    text: "Meta message templates:\n\n- Messages pre-approved by Meta\n- Required after 24h without response\n- Categories: marketing, utility, auth\n- Dynamic variables (name, appointment, amount...)\n- Interactive buttons (CTA, quick reply)\n\nOur team helps you get your templates approved.",
    delay: 1800,
    quickReplies: [
      { label: "Automation", value: "automation" },
      { label: "Pricing", value: "pricing" },
    ],
  },
  scoring: {
    text: "Predictive lead scoring:\n\n**15+ B2B criteria** analyzed:\n- Detected purchase intent\n- Analyzed emotional tone\n- Conversation engagement\n- Answers to key questions\n\n**Score > 80** > Hot lead > immediate notification\n**Score 50-80** > Warm lead > auto nurturing\n**Score < 50** > Cold lead > educational content\n\nDynamic scripting adapted to prospect profile.",
    delay: 2000,
    quickReplies: [
      { label: "CRM sync", value: "crm" },
      { label: "Campaigns", value: "campaigns" },
      { label: "Pricing", value: "pricing" },
    ],
  },
  campaigns: {
    text: "Campaign management:\n\n- **Outbound call groups** with assigned assistant\n- **Automatic retry** until objective reached\n- **Voicemail detection** + auto callback\n- **Target variable** (mark lead as processed)\n- **Backup contacts** (alternative numbers)\n- **Daily spending cap**\n- **Pause/Resume** campaigns\n- **CSV lead import** with column mapping\n- **Dynamic variable injection** into the prompt\n\n**Lead statuses:** Created > In progress > Completed / Failed\nKanban view with drag-and-drop.",
    delay: 2400,
    quickReplies: [
      { label: "Dashboards", value: "dashboards" },
      { label: "Pricing", value: "pricing" },
    ],
  },
  dashboards: {
    text: "Real-time analytics dashboards:\n\n- **Trend charts** — call volume, success rate, average duration\n- **KPI counters** — calls/day, conversion rate, leads processed\n- **Distribution charts** — call outcomes (pie/bar)\n- **Filtered tables** — by assistant, campaign, period, outcome\n- **Drag-and-drop** customizable layout\n- **Separate dashboards** per use case (sales, support, management)\n\nLive monitoring of all your operations.",
    delay: 2000,
    quickReplies: [
      { label: "Book a meeting", value: "booking" },
      { label: "Pricing", value: "pricing" },
    ],
  },
  "knowledge base": {
    text: "AI knowledge bases:\n\n- **Supported formats:** PDF, texts, FAQ, product catalogs, price lists\n- **Individual management** — add/remove without full reimport\n- **Dynamic updates** — edit portions\n- **Automatic consultation** when relevant question detected\n- **Combined with system prompt** for complex answers\n\nYour agent knows EVERYTHING about your business.",
    delay: 2000,
    quickReplies: [
      { label: "Flow Builder", value: "flow builder" },
      { label: "Pricing", value: "pricing" },
    ],
  },
  widget: {
    text: "Embeddable web widget:\n\n- **Text chat** or **voice call** from the browser\n- Parameters: assistantId, position, color, language\n- **Responsive** mobile + desktop\n- **Auto-create CRM leads** with form data\n- **Trigger automations** on every conversation\n- Installation: 1 JS snippet before </body>\n\nYour web visitors become qualified leads.",
    delay: 1800,
    quickReplies: [
      { label: "Book a meeting", value: "booking" },
      { label: "Pricing", value: "pricing" },
    ],
  },
  calendar: {
    text: "Calendar integrations:\n\n- **Cal.com** — Full config\n- **Calendly** — Bi-directional sync\n- **GoHighLevel** — Full integration\n- **Google Calendar** — Read/write\n- **Outlook** — Synchronization\n\nThe agent checks availability in real time, suggests slots and confirms automatically.",
    delay: 1800,
    quickReplies: [
      { label: "Book a meeting", value: "booking" },
      { label: "Pricing", value: "pricing" },
    ],
  },
  gdpr: {
    text: "Security and compliance:\n\n**GDPR** — 100% compliant\n- Data hosted in Europe\n- End-to-end encryption\n- Automated right to be forgotten\n- Bloctel compliance (France)\n\n**Data retention:**\n- Configurable per client\n- Permanent deletion possible\n- Legal verification of outbound numbers\n\n**API security:**\n- Token authentication\n- Documented security recommendations",
    delay: 2000,
    quickReplies: [
      { label: "Book a meeting", value: "booking" },
      { label: "Pricing", value: "pricing" },
    ],
  },
  pricing: {
    text: "Our plans:\n\n**Starter** — 97 EUR/month\n- 1 WhatsApp agent\n- 500 conversations/month\n- FAQ + knowledge base\n\n**Business** — 247 EUR/month\n- Multimodal agent (photo + voice + calls)\n- Unlimited conversations\n- CRM + Calendar + Campaigns\n- Flow Builder + Automations\n\n**Enterprise** — Custom pricing\n- Multi-agents + voice cloning\n- API + Webhooks\n- Guaranteed SLA + custom dashboards\n\nSetup + training included.",
    delay: 2200,
    quickReplies: [
      { label: "Free trial?", value: "trial" },
      { label: "Book a meeting", value: "booking" },
      { label: "Typical ROI?", value: "roi" },
    ],
  },
  trial: {
    text: "Yes! We offer a **free 30-minute audit**.\n\nDuring this call:\n1. We analyze your needs\n2. We show you the agent in action on YOUR case\n3. We give you a concrete action plan\n\nNo commitment. Want to book?",
    delay: 1800,
    quickReplies: [
      { label: "Yes, book!", value: "booking" },
      { label: "More questions", value: "questions" },
    ],
  },
  roi: {
    text: "Typical ROI from our clients:\n\n**Time saved:** 15-25h/week\n**Response rate:** from 40% to 95%\n**Qualified leads:** +60%\n**No-shows:** -70%\n**Customer satisfaction:** +35%\n\nAverage payback: **3 weeks**.\n\nThe agent works 24/7 without breaks, salary, or turnover.",
    delay: 2000,
    quickReplies: [
      { label: "Book a meeting", value: "booking" },
      { label: "Pricing", value: "pricing" },
    ],
  },
  booking: {
    text: "Book your free audit:\n\n**Upcoming slots:**\n- Monday April 21 — 10am or 2pm\n- Tuesday April 22 — 9am or 4pm\n- Wednesday April 23 — 11am\n\nWhich slot works for you?",
    delay: 2000,
    quickReplies: [
      { label: "Monday 10am", value: "confirm booking" },
      { label: "Tuesday 4pm", value: "confirm booking" },
      { label: "Other slot", value: "other slot" },
    ],
  },
  "confirm booking": {
    text: "Booking confirmed!\n\n**Date:** Monday April 21, 2026\n**Time:** 10:00 (CET)\n**Duration:** 30 min\n**Format:** Google Meet video\n\nYou will receive:\n- Confirmation email\n- WhatsApp reminder D-1\n- WhatsApp reminder H-1\n\nSee you soon!",
    delay: 2200,
    quickReplies: [
      { label: "Thanks!", value: "thanks" },
    ],
  },
  "other slot": {
    text: "Here are other availabilities:\n\n- Thursday April 24 — 10am, 2pm, 5pm\n- Friday April 25 — 9am, 11am\n- Monday April 28 — 10am, 3pm\n\nOr let me know your preference!",
    delay: 1600,
    quickReplies: [
      { label: "Thursday 2pm", value: "confirm booking" },
      { label: "Friday 9am", value: "confirm booking" },
    ],
  },
  thanks: {
    text: "My pleasure! See you very soon.\n\nMeanwhile, feel free to explore our other sector demos.",
    delay: 1200,
    quickReplies: [{ label: "Restart", value: "hello" }],
  },
  questions: {
    text: "Ask me any question:\n\n- Features (voice, WhatsApp, telephony)\n- Voice cloning & voices\n- Flow Builder & automation\n- CRM integrations\n- Security & GDPR\n- Pricing & commitment\n\nI know everything about Vocalis AI!",
    delay: 1200,
    quickReplies: [
      { label: "Voice cloning", value: "voice cloning" },
      { label: "WhatsApp features", value: "whatsapp features" },
      { label: "Telephony", value: "telephony" },
      { label: "Pricing", value: "pricing" },
    ],
  },
};

/** Shared keywords that map to Vocalis platform features (English) */
export const VOCALIS_KEYWORDS_EN: Record<string, string[]> = {
  voice: ["voice", "vocal", "audio", "mic", "speak", "whisper", "transcri", "talk"],
  "voice cloning": ["cloning", "clone", "tts", "elevenlabs", "cartesia"],
  languages: ["language", "english", "spanish", "german", "italian", "multilingual", "polyglot"],
  "flow builder": ["flow", "builder", "tree", "logic", "branching"],
  automation: ["automation", "workflow", "no-code", "nocode", "trigger"],
  webhook: ["webhook", "api", "rest", "json", "endpoint", "programm"],
  crm: ["crm", "hubspot", "salesforce", "pipedrive", "gohighlevel", "zoho", "zapier", "make", "integration"],
  telephony: ["telephony", "call", "phone", "sip", "pbx", "voip", "inbound", "outbound"],
  sms: ["sms", "text", "text message"],
  "whatsapp features": ["whatsapp feature", "meta template"],
  templates: ["template", "meta", "pre-approved"],
  scoring: ["scoring", "score", "qualification", "qualify", "hot lead", "predictive"],
  campaigns: ["campaign", "bulk", "outbound", "mass"],
  dashboards: ["dashboard", "analytics", "kpi", "chart", "monitoring", "statistic"],
  "knowledge base": ["knowledge", "base", "pdf", "catalog", "faq doc"],
  widget: ["widget", "embed", "integrate", "snippet"],
  calendar: ["calendar", "cal.com", "calendly", "outlook", "google calendar"],
  gdpr: ["gdpr", "rgpd", "security", "data", "privacy", "confidential", "bloctel"],
  pricing: ["pricing", "price", "cost", "how much", "euro", "expensive", "plan"],
  booking: ["booking", "book", "appointment", "meeting", "demo", "audit", "schedule"],
  trial: ["trial", "free", "test drive"],
  roi: ["roi", "return", "investment", "result", "performance"],
  thanks: ["thanks", "thank you", "great", "awesome", "cool", "top", "perfect", "bravo"],
};

/** Merge sector-specific intents with Vocalis shared intents (English). Sector takes priority. */
export function mergeWithVocalisEN(
  sectorIntents: Record<string, BotResponse>,
  sectorKeywords: Record<string, string[]>
): { intents: Record<string, BotResponse>; keywords: Record<string, string[]> } {
  return {
    intents: { ...VOCALIS_INTENTS_EN, ...sectorIntents },
    keywords: { ...VOCALIS_KEYWORDS_EN, ...sectorKeywords },
  };
}

/** Common fallback for all sectors (English) */
export function createFallbackEN(sectorOptions: QuickReply[]): BotResponse {
  return {
    text: "I didn't quite catch that, but no worries!\n\nI can help you with:\n- Features in your sector\n- AI telephony, WhatsApp, SMS\n- Voice cloning & languages\n- CRM integrations & automation\n- Pricing and free audit\n\nTry one of these topics!",
    delay: 1400,
    quickReplies: sectorOptions,
  };
}
