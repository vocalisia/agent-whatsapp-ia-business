import type { SimulatorConfig } from "../WhatsAppSimulator";
import { mergeWithVocalisEN, createFallbackEN } from "./vocalis-features-en";

const IMMOBILIER_INTENTS = {
  greeting: {
    text: "Hello! Welcome to **ImmoPrestige**.\n\nI'm your AI assistant, available 24/7. What are you looking for today?\n\n- A property to buy or rent?\n- An appraisal of your property?\n- An appointment with an agent?",
    delay: 1200,
    quickReplies: [
      { label: "Buy", value: "property search" },
      { label: "Rent", value: "rental" },
      { label: "Property appraisal", value: "appraisal" },
      { label: "Agent appointment", value: "agent appointment" },
      { label: "AI Telephony", value: "telephony" },
      { label: "WhatsApp features", value: "whatsapp features" },
    ],
  },
  "property search": {
    text: "Let's start your personalized search.\n\nTo find the best properties, I need a few criteria:\n\n**Budget:** What is your maximum budget?\n**Type:** Apartment, house, villa, loft?\n**Area:** Minimum square footage?\n**Location:** Which city or neighborhood?\n**Bedrooms:** How many bedrooms?\n\nFor example: *\"3-bedroom apartment, 80m2, London Zone 2, budget estimation personnalisee\"*",
    delay: 2000,
    quickReplies: [
      { label: "Apt London < 500K", value: "listings" },
      { label: "House suburbs", value: "listings" },
      { label: "Investment studio", value: "investment" },
      { label: "View listings", value: "listings" },
    ],
  },
  "property photo": {
    text: "Send me a photo of your property and our **AI Vision** will automatically analyze:\n\n- Estimated room sizes\n- Overall condition (new / good / needs renovation)\n- Highlights: light, ceiling height, materials\n- Architectural style\n- Suggestions to add ?? before selling\n\nAnalysis takes about 10 seconds. Send your photo!",
    delay: 1800,
    quickReplies: [
      { label: "Estimate the value", value: "appraisal" },
      { label: "View energy rating", value: "energy rating" },
      { label: "List for sale", value: "mandate" },
    ],
  },
  visit: {
    text: "Let's schedule your viewing.\n\n**Available slots this week:**\n\n- Tuesday 2pm - 4pm\n- Wednesday 10am - 12pm\n- Thursday 5pm - 7pm\n- Saturday 9am - 12pm\n\nWhich slot works for you? I'll send you the confirmation + exact address + directions via WhatsApp.\n\nYou'll also receive a reminder 2 hours before.",
    delay: 1500,
    quickReplies: [
      { label: "Tuesday 2pm", value: "agent appointment" },
      { label: "Saturday morning", value: "agent appointment" },
      { label: "Other slots", value: "agent appointment" },
      { label: "Virtual tour", value: "virtual tour" },
    ],
  },
  appraisal: {
    text: "Our **AI appraisal** cross-references data from:\n\n- Local price per m² (real-time)\n- Recent comparable transactions\n- Property condition and features\n- Local market trends\n\n**To appraise your property, provide:**\n1. Address or neighborhood\n2. Living area\n3. Number of rooms\n4. Floor + elevator\n5. Year of construction\n\n*Free appraisal in 30 seconds!*",
    delay: 1800,
    quickReplies: [
      { label: "2-bed apt 75m2 London", value: "listings" },
      { label: "House 120m2 Manchester", value: "listings" },
      { label: "Send photo", value: "property photo" },
      { label: "Book appraisal", value: "agent appointment" },
    ],
  },
  financing: {
    text: "**Mortgage simulation**\n\nDefault parameters:\n- Rate: 5.25% over 25 years\n- Recommended deposit: 10% minimum\n- Insurance: 0.34%/year\n\n**Example for estimation personnalisee:**\n- Monthly payment: estimation personnalisee\n- Total cost: estimation personnalisee\n- Minimum deposit: estimation personnalisee\n\nOur **partner banks**: Halifax, Nationwide, Barclays, HSBC\n\nTell me your budget and I'll simulate for you!",
    delay: 2000,
    quickReplies: [
      { label: "Simulate 250K", value: "financing" },
      { label: "Simulate 400K", value: "financing" },
      { label: "Contact broker", value: "agent appointment" },
      { label: "Required documents", value: "documents" },
    ],
  },
  documents: {
    text: "**Documents required for purchase:**\n\n**Buyer:**\n- Photo ID\n- Last 3 payslips\n- Last 2 tax returns\n- Bank statements (3 months)\n- Proof of address\n- Mortgage agreement in principle\n\n**Seller:**\n- Title deeds\n- Mandatory surveys (energy rating, structural...)\n- Service charge accounts\n- Land Registry documents\n\nI can send you the full checklist via WhatsApp!",
    delay: 1800,
    quickReplies: [
      { label: "Full checklist", value: "documents" },
      { label: "Energy rating & surveys", value: "energy rating" },
      { label: "Purchase costs", value: "costs" },
      { label: "Contact solicitor", value: "agent appointment" },
    ],
  },
  mandate: {
    text: "**ImmoPrestige listing agreements:**\n\n**Simple agreement**\n- You keep the freedom to sell independently\n- Commission: 2.5% inc. VAT\n\n**Exclusive agreement** (recommended)\n- Sells on average 2x faster\n- Commission: 1.8% inc. VAT\n- Professional photos + 3D tour included\n- Listed on 40+ portals\n\n**Semi-exclusive**\n- You can sell through another agent\n- Commission: 2% inc. VAT\n\nDuration: 3 months renewable. Which agreement interests you?",
    delay: 2000,
    quickReplies: [
      { label: "Exclusive agreement", value: "agent appointment" },
      { label: "Appraise first", value: "appraisal" },
      { label: "Detailed costs", value: "costs" },
      { label: "Agent appointment", value: "agent appointment" },
    ],
  },
  neighborhood: {
    text: "**AI Neighborhood Analysis**\n\nTell me the area and I'll give you:\n\n- **Schools**: nurseries, primary, secondary, high school (ratings + distance)\n- **Transport**: underground, bus, tram, train (travel times)\n- **Shops**: supermarkets, markets, pharmacies\n- **Healthcare**: hospitals, GPs, specialists\n- **Safety**: neighborhood statistics\n- **Price per m²**: 5-year trend\n- **Quality of life**: green spaces, noise levels\n\n*Example: type \"Kensington London\" or \"Northern Quarter Manchester\"*",
    delay: 1800,
    quickReplies: [
      { label: "Notting Hill", value: "neighborhood" },
      { label: "Shoreditch", value: "neighborhood" },
      { label: "Canary Wharf", value: "neighborhood" },
      { label: "Search a property", value: "property search" },
    ],
  },
  listings: {
    text: "**Available properties matching your criteria:**\n\n1. **2-bed apt - Islington** - 72m2\n   Price: estimation personnalisee | estimation personnalisee\n   2 bed, balcony, storage, fully renovated\n\n2. **4-bed house - Wimbledon** - 130m2\n   Price: estimation personnalisee | 200m2 garden\n   4 bed, garage, near tube\n\n3. **Studio - Marylebone** - 28m2\n   Price: estimation personnalisee | ideal investment\n   Rental yield: 4.2%\n\n4. **Loft - Hackney** - 95m2\n   Price: estimation personnalisee | industrial style\n   30m2 terrace, parking\n\n5 more properties available. Which one interests you?",
    delay: 2200,
    quickReplies: [
      { label: "View Islington apt", value: "visit" },
      { label: "House details", value: "visit" },
      { label: "Refine search", value: "property search" },
      { label: "Simulate mortgage", value: "financing" },
    ],
  },
  offer: {
    text: "**Making an offer**\n\nTo submit your offer, I'm preparing the file:\n\n1. **Property concerned**: reference or address\n2. **Offer amount**: proposed price\n3. **Conditions**: mortgage, timing, works...\n4. **Validity**: offer duration (7 days standard)\n\nOur agent will contact you within **2 hours maximum** to confirm.\n\nThe offer is non-binding until exchange of contracts.\n\nReady to make your offer?",
    delay: 1800,
    quickReplies: [
      { label: "Make an offer", value: "agent appointment" },
      { label: "Negotiate the price", value: "agent appointment" },
      { label: "Financing questions", value: "financing" },
      { label: "Required documents", value: "documents" },
    ],
  },
  "file tracking": {
    text: "**Track your transaction**\n\nEnter your file reference and I'll give you the real-time status:\n\n**Steps tracked:**\n- Offer accepted\n- Contracts exchanged\n- Surveys completed\n- Mortgage offer received\n- Completion date set\n- Keys handed over\n\nYou receive a **WhatsApp notification** at each step.\n\n*Reference format: IMMO-2026-XXXX*",
    delay: 1800,
    quickReplies: [
      { label: "Enter reference", value: "file tracking" },
      { label: "Contact my agent", value: "agent appointment" },
      { label: "Missing documents", value: "documents" },
      { label: "Outstanding costs", value: "costs" },
    ],
  },
  investment: {
    text: "**Buy-to-let investment opportunities**\n\n**Top 3 this month:**\n\n1. **Studio - Bethnal Green** - 22m2 - estimation personnalisee\n   Estimated rent: estimation personnalisee\n   Gross yield: **5.8%**\n\n2. **1-bed - Leeds** - 42m2 - estimation personnalisee\n   Estimated rent: estimation personnalisee\n   Gross yield: **7.2%**\n\n3. **Studio - Manchester** - 30m2 - estimation personnalisee\n   Estimated rent: estimation personnalisee\n   Gross yield: **7.1%**\n\nWe analyze: yield, tax efficiency, capital growth, rental demand.\n\nWhat type of investment interests you?",
    delay: 2200,
    quickReplies: [
      { label: "Furnished lettings", value: "investment" },
      { label: "HMO investment", value: "investment" },
      { label: "Simulate yield", value: "financing" },
      { label: "Tax advice", value: "costs" },
    ],
  },
  rental: {
    text: "**Rental search**\n\nAvailable properties to rent:\n\n1. **2-bed furnished - Shoreditch** - 65m2\n   Rent: estimation personnalisee all inclusive\n   Available May 1st\n\n2. **3-bed unfurnished - Clapham** - 85m2\n   Rent: estimation personnalisee excl. bills\n   Available immediately\n\n3. **Studio - Brixton** - 25m2\n   Rent: estimation personnalisee all inclusive\n   Available May 15th\n\n**Tenant file**: last 3 payslips, tax return, photo ID, guarantor (or deposit guarantee scheme).\n\nWhich property interests you?",
    delay: 2000,
    quickReplies: [
      { label: "View Shoreditch apt", value: "visit" },
      { label: "Tenant file", value: "documents" },
      { label: "Guarantor info", value: "documents" },
      { label: "More rentals", value: "rental" },
    ],
  },
  "energy rating": {
    text: "**Mandatory property surveys**\n\n**Energy Performance Certificate (EPC):**\n- Rating A to G (F and G = poor energy efficiency)\n- Required for sale AND rental\n- Validity: 10 years\n\n**Other required surveys:**\n- Structural survey\n- Damp and timber report\n- Electrical installation report\n- Gas safety certificate\n- Environmental search\n- Flood risk assessment\n\n**Average cost full survey pack:** 500-estimation personnalisee\n\nOur partner surveyors can visit within 48 hours.",
    delay: 2000,
    quickReplies: [
      { label: "Book surveyor", value: "agent appointment" },
      { label: "Renovation cost", value: "appraisal" },
      { label: "Improvement grants", value: "costs" },
      { label: "List for sale", value: "mandate" },
    ],
  },
  "agent appointment": {
    text: "**Appointment with an ImmoPrestige agent**\n\nOur agents are available:\n- **Monday - Friday**: 9am - 7pm\n- **Saturday**: 9am - 5pm\n\n**Available formats:**\n- In branch (London, Manchester, Birmingham, Edinburgh)\n- At your property (30km radius)\n- Video call (Zoom / WhatsApp Video)\n- By phone\n\nTell me your preference and I'll book a slot.\n\nYou'll receive a confirmation + automatic reminder.",
    delay: 1500,
    quickReplies: [
      { label: "In branch", value: "agent appointment" },
      { label: "Video call", value: "agent appointment" },
      { label: "Phone callback", value: "agent appointment" },
      { label: "View listings first", value: "listings" },
    ],
  },
  costs: {
    text: "**Breakdown of purchase costs**\n\n**For a property at estimation personnalisee:**\n\n- **Stamp duty**: audit gratuit (2.5% average)\n  - Based on SDLT bands\n\n- **Legal fees**: 2,000-estimation personnalisee\n  (solicitor/conveyancer)\n\n- **Survey**: 500-estimation personnalisee\n\n- **Mortgage fees**: audit gratuit\n  (arrangement + valuation)\n\n- **Agency fee**: included in listed price\n\n**Total to budget: audit gratuit**\n\nFirst-time buyer? Stamp duty relief may apply.",
    delay: 2000,
    quickReplies: [
      { label: "Simulate total mortgage", value: "financing" },
      { label: "Costs for another price", value: "costs" },
      { label: "New vs resale", value: "investment" },
      { label: "Contact solicitor", value: "agent appointment" },
    ],
  },
  "buyer outreach campaign": {
    text: "📢 **Buyer outreach campaigns**\n\nOur AI launches targeted outbound campaigns:\n\n**Automated outbound calls:**\n• Contact potential buyers from CRM\n• Budget + criteria qualification in 3 min\n• Real-time matching property suggestions\n• Automatic viewing appointment booking\n\n**Channels used:**\n• AI voice call (Dualplex, natural voice)\n• Post-qualification WhatsApp template\n• SMS with property listing link\n\n**Observed results:**\n• Qualified leads: **+75%**\n• Scheduled viewings: **+50%**\n• Agent time saved: **20h/week**\n\nAutomatic retry + voicemail detection included.",
    delay: 2400,
    quickReplies: [
      { label: "How it works?", value: "campaigns" },
      { label: "CRM integrations", value: "crm" },
      { label: "Lead scoring", value: "scoring" },
      { label: "Pricing", value: "pricing" },
    ],
  },
  "seller outreach call": {
    text: "📞 **AI calls to potential sellers**\n\nOur AI telephony prospects sellers:\n\n1️⃣ **Detection** of properties likely to sell (market signals)\n2️⃣ **Automatic call** with agency introduction\n3️⃣ **Free appraisal** offered in real time\n4️⃣ **Appointment booking** for mandate if interested\n5️⃣ **CRM sync** with all collected information\n\n**Call modes:**\n• **Pipeline** — Complete transcription for the file\n• **Dualplex** — Natural, near-human conversation\n• **Agent transfer** mid-call if seller is hot\n\n**Result:** 3x more exclusive mandates per month.",
    delay: 2200,
    quickReplies: [
      { label: "AI telephony", value: "telephony" },
      { label: "Voice & languages", value: "voice" },
      { label: "Dashboards", value: "dashboards" },
      { label: "Pricing", value: "pricing" },
    ],
  },
  "virtual tour": {
    text: "🏠 **AI Virtual tour**\n\nOur solution combines **web widget** + **AI photo analysis**:\n\n**Integrated widget:**\n• Voice or text chat from the property listing\n• Buyer asks questions in real time\n• AI responds with property details\n• In-person viewing booked in 1 click\n\n**AI photo analysis:**\n• Send property photos\n• Room sizes estimated\n• Overall condition (new / good / needs renovation)\n• Highlights automatically detected\n• Home staging suggestions\n\n**Benefits:**\n• Pre-qualify buyers before physical viewing\n• Physical viewings: **-40%** (only serious buyers)\n• Available 24/7 without an agent\n• Multi-language for international buyers",
    delay: 2400,
    quickReplies: [
      { label: "Web widget", value: "widget" },
      { label: "Send photo", value: "property photo" },
      { label: "Book viewing", value: "visit" },
      { label: "Pricing", value: "pricing" },
    ],
  },
};

const IMMOBILIER_KEYWORDS: Record<string, string[]> = {
  greeting: [
    "hello", "hi", "hey", "good morning", "good evening", "howdy",
  ],
  "property search": [
    "search", "looking", "find", "buy", "purchase", "property",
    "apartment", "house", "villa", "loft", "duplex", "penthouse",
    "rooms", "bedrooms", "criteria",
  ],
  "property photo": [
    "photo", "image", "analyze", "photo analysis", "vision", "scan",
    "send photo",
  ],
  visit: [
    "visit", "viewing", "view the property", "slot", "schedule",
    "when available",
  ],
  appraisal: [
    "appraisal", "valuation", "estimate", "how much is", "price per m2",
    "evaluate", "market value",
  ],
  financing: [
    "mortgage", "loan", "financing", "borrow", "monthly payment", "rate",
    "bank", "broker", "simulate", "simulation", "deposit",
  ],
  documents: [
    "document", "paperwork", "purchase file", "checklist", "proof",
    "payslip", "tax return",
  ],
  mandate: [
    "mandate", "list for sale", "sell", "exclusive", "commission",
    "agency fee",
  ],
  neighborhood: [
    "neighborhood", "area", "school", "transport", "tube", "shops",
    "environment", "nearby",
  ],
  listings: [
    "available", "listings", "stock", "catalog", "offers", "selection",
    "new property",
  ],
  offer: [
    "offer", "propose", "negotiate", "negotiation", "price",
    "counter-offer",
  ],
  "file tracking": [
    "tracking", "file", "progress", "where are we", "status", "reference",
    "exchange", "completion",
  ],
  investment: [
    "invest", "investment", "yield", "buy-to-let", "rental income",
    "return", "hmo",
  ],
  rental: [
    "rent", "rental", "tenant", "lease", "monthly rent", "guarantor",
    "deposit",
  ],
  "energy rating": [
    "epc", "energy certificate", "energy rating", "survey",
    "structural", "damp",
  ],
  "agent appointment": [
    "agent", "advisor", "branch", "meet",
    "callback", "contact",
  ],
  costs: [
    "costs", "stamp duty", "legal fees", "survey cost", "how much",
    "solicitor", "conveyancing",
  ],
  "buyer outreach campaign": ["buyer campaign", "buyer outreach", "outbound buyers", "purchase campaign"],
  "seller outreach call": ["seller call", "prospect seller", "seller contact", "mandate telephony"],
  "virtual tour": ["virtual tour", "virtual viewing", "3d tour", "online viewing", "remote viewing"],
};

const merged = mergeWithVocalisEN(IMMOBILIER_INTENTS, IMMOBILIER_KEYWORDS);

export const immobilierConfigEN: SimulatorConfig = {
  botName: "ImmoPrestige AI",
  botAvatar: "IP",
  welcomeMessage:
    "Welcome to **ImmoPrestige**! I'm your AI real estate assistant.\n\nI can help you:\n- Search for a property (buy/rent)\n- Analyze a property photo\n- Estimate a property value\n- Schedule a viewing\n- Simulate a mortgage\n- Track your file\n\nHow can I help you?",
  initialQuickReplies: [
    { label: "Search a property", value: "property search" },
    { label: "Appraise my property", value: "appraisal" },
    { label: "Book a viewing", value: "visit" },
    { label: "Mortgage simulation", value: "financing" },
    { label: "View listings", value: "listings" },
  ],
  intents: merged.intents,
  keywords: merged.keywords,
  fallback: createFallbackEN([
    { label: "Search a property", value: "property search" },
    { label: "Appraise my property", value: "appraisal" },
    { label: "Mortgage simulation", value: "financing" },
    { label: "Book appointment", value: "agent appointment" },
  ]),
};

export { immobilierConfigEN as immobilierConfig };
export default immobilierConfigEN;
