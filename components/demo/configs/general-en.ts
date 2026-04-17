import type { SimulatorConfig } from "../WhatsAppSimulator";
import { mergeWithVocalisEN, createFallbackEN } from "./vocalis-features-en";

const GENERAL_INTENTS = {
  hello: {
    text: "Hello! I'm the AI agent from AgenticWhatsup, powered by **Vocalis AI**.\n\nI can help you with:\n\n- Automatically qualifying your leads\n- Booking appointments for your customers\n- Analyzing photos and documents\n- Answering FAQs 24/7\n- AI telephony (inbound/outbound calls)\n- Voice cloning & multi-language\n\nWhat would you like to know?",
    delay: 1800,
    quickReplies: [
      { label: "How it works?", value: "how it works" },
      { label: "WhatsApp features", value: "whatsapp features" },
      { label: "AI Telephony", value: "telephony" },
      { label: "Pricing", value: "pricing" },
    ],
  },
  hi: {
    text: "Hi! Welcome to AgenticWhatsup.\n\nI'm your AI assistant powered by Vocalis. Ask me any question!",
    delay: 1400,
    quickReplies: [
      { label: "Features", value: "how it works" },
      { label: "Voice cloning", value: "voice cloning" },
      { label: "Pricing", value: "pricing" },
    ],
  },
  "how it works": {
    text: "Our AI agent works in 3 steps:\n\n**1. Connection** — We plug into your WhatsApp Business + telephony in 48h\n\n**2. Training** — The AI learns your products, services, FAQ via the knowledge base\n\n**3. Autonomy** — The agent responds 24/7:\n   - WhatsApp: text, voice, photos\n   - Phone: inbound/outbound calls\n   - Web: chat/voice widget\n   - SMS: omnichannel complement\n\n**+ Flow Builder** to design the logic\n**+ Dashboards** to monitor in real time",
    delay: 2400,
    quickReplies: [
      { label: "Flow Builder?", value: "flow builder" },
      { label: "Voice cloning", value: "voice cloning" },
      { label: "Automation", value: "automation" },
      { label: "Pricing", value: "pricing" },
    ],
  },
  photo: {
    text: "Our Vision AI analyzes in real time:\n\n- ID documents\n- Invoices and purchase orders\n- Defective product photos\n- Real estate\n- Damage (insurance claims)\n- Vehicles (trade-in estimation)\n\n**The AI extracts data, creates the case and notifies the team — in 2 seconds.**",
    delay: 1800,
    quickReplies: [
      { label: "Voice too?", value: "voice" },
      { label: "Pricing", value: "pricing" },
    ],
  },
  demo: {
    text: "Here's what I can show:\n\n**1. WhatsApp Business**\nMeta templates, nurturing, cart recovery\n\n**2. AI Telephony**\nInbound/outbound calls, human transfer\n\n**3. Voice Cloning**\n3 TTS providers, your brand voice\n\n**4. Flow Builder**\nVisual conversation logic, zero code\n\n**5. Predictive Scoring**\n15+ criteria, automatic routing\n\n**6. 10 Sectors**\nE-commerce, medical, restaurant, auto...\n\nWhat would you like to test?",
    delay: 2200,
    quickReplies: [
      { label: "WhatsApp features", value: "whatsapp features" },
      { label: "Telephony", value: "telephony" },
      { label: "Voice cloning", value: "voice cloning" },
      { label: "Scoring", value: "scoring" },
    ],
  },
  "case studies": {
    text: "Client results by sector:\n\n**Dental clinic** (Geneva)\n- 70% fewer no-shows, 200+ appointments/month\n\n**Real estate agency** (Paris)\n- 3x more qualified visits\n\n**Fashion e-commerce** (Lyon)\n- 85% automated customer service, 4s response\n\n**Restaurant** (Zurich)\n- WhatsApp reservations +120%\n\n**Car dealership** (Brussels)\n- Lead qualification x2, test drives +45%\n\n**Law firm** (Geneva)\n- Scheduled consultations +60%",
    delay: 2400,
    quickReplies: [
      { label: "My sector?", value: "sector" },
      { label: "Book a meeting", value: "booking" },
    ],
  },
  sector: {
    text: "**10 sectors** with dedicated demos:\n\n- E-Commerce\n- Coach & Trainer\n- Insurance\n- Real Estate\n- Restaurant & Catering\n- Medical\n- Fitness & Gym\n- Automotive\n- Legal (lawyer, notary)\n- Hospitality\n\nEach agent is customized to your business with a dedicated knowledge base.",
    delay: 2000,
    quickReplies: [
      { label: "Book a meeting", value: "booking" },
      { label: "Pricing", value: "pricing" },
    ],
  },
};

const GENERAL_KEYWORDS = {
  hello: ["hello", "hi", "hey", "yo", "good morning", "good evening"],
  "how it works": ["how", "works", "explain", "how does"],
  photo: ["photo", "image", "camera", "document", "analyze", "picture", "scan", "vision"],
  demo: ["demo", "demonstration", "show", "try", "test"],
  "case studies": ["case stud", "result", "testimonial", "example", "reference"],
  sector: ["sector", "industry", "business", "vertical"],
};

const merged = mergeWithVocalisEN(GENERAL_INTENTS, GENERAL_KEYWORDS);

export const generalConfigEN: SimulatorConfig = {
  botName: "AgenticWhatsup",
  botAvatar: "AI",
  welcomeMessage:
    "Welcome! I'm the AI agent from AgenticWhatsup, powered by **Vocalis AI**.\n\nType a message or use the suggestions to discover all our features.",
  initialQuickReplies: [
    { label: "Hello!", value: "hello" },
    { label: "WhatsApp features", value: "whatsapp features" },
    { label: "AI Telephony", value: "telephony" },
    { label: "Voice cloning", value: "voice cloning" },
    { label: "Pricing", value: "pricing" },
  ],
  intents: merged.intents,
  keywords: merged.keywords,
  fallback: createFallbackEN([
    { label: "How it works?", value: "how it works" },
    { label: "WhatsApp features", value: "whatsapp features" },
    { label: "AI Telephony", value: "telephony" },
    { label: "Pricing", value: "pricing" },
  ]),
};
