import type { SimulatorConfig, BotResponse } from "../WhatsAppSimulator";
import { mergeWithVocalisEN, createFallbackEN } from "./vocalis-features-en";

const sectorIntents: Record<string, BotResponse> = {
  hello: {
    text: "Welcome to **AutoPrestige**! I'm your AI assistant.\n\nI can help you:\n- Find the ideal vehicle\n- Book a test drive\n- Get a trade-in estimate\n- Simulate financing\n\nWhat are you looking for?",
    delay: 1000,
    quickReplies: [
      { label: "Search vehicles", value: "vehicle" },
      { label: "Test drive", value: "test drive" },
      { label: "Trade-in estimate", value: "trade-in" },
      { label: "Financing", value: "financing" },
    ],
  },

  vehicle: {
    text: "**AutoPrestige vehicle search**:\n\nTo refine your selection, tell me your criteria:\n\n**Our categories:**\n- City cars (available after audit)\n- Saloons (available after audit)\n- SUV & Crossovers (available after audit)\n- Sports (available after audit)\n- Electric & Hybrid (available after audit)\n\n**Featured this week:**\n- **BMW 3 Series 320d** — estimation personnalisee | 2024 | 12,000 km\n- **Mercedes GLC 300e** — estimation personnalisee | 2025 | 5,000 km\n- **Audi A4 Avant** — estimation personnalisee | 2024 | 18,000 km\n- **Tesla Model 3** — estimation personnalisee | 2025 | 3,200 km\n\nWhat type of vehicle interests you?",
    delay: 2200,
    quickReplies: [
      { label: "SUV", value: "vehicle" },
      { label: "Electric", value: "vehicle" },
      { label: "Test drive", value: "test drive" },
      { label: "Financing", value: "financing" },
    ],
  },

  "test drive": {
    text: "**Book your test drive**:\n\nExperience the drive before you buy!\n\n**Vehicles available for test drive:**\n- BMW 3 Series — Saloon, diesel/petrol\n- Mercedes GLC — Plug-in hybrid SUV\n- Audi A4 Avant — Premium estate\n- Tesla Model 3 — 100% electric\n- Peugeot 3008 — French SUV\n\n**Next available slots:**\n- Saturday April 19 — 10am, 2pm, 4pm\n- Monday April 21 — 9am, 11am, 3pm\n- Tuesday April 22 — 10am, 2pm\n\n**Duration:** 30-min accompanied drive\n**Documents:** Valid driving licence\n\nWhich vehicle and slot?",
    delay: 2000,
    quickReplies: [
      { label: "BMW Saturday 10am", value: "confirm test drive" },
      { label: "Tesla Monday 11am", value: "confirm test drive" },
      { label: "Other vehicle", value: "vehicle" },
      { label: "Other slot", value: "test drive" },
    ],
  },

  "confirm test drive": {
    text: "Test drive confirmed!\n\n**Vehicle:** BMW 3 Series 320d\n**Date:** Saturday April 19, 2026\n**Time:** 10:00am (30 min)\n**Location:** AutoPrestige — 120 Auto Boulevard\n\n**Accompanying advisor:** Thomas M. (sales consultant)\n\nYou will receive:\n- WhatsApp confirmation\n- Reminder the day before\n- Directions + parking info\n\nRemember to bring your driving licence.\nSee you Saturday!",
    delay: 1800,
    quickReplies: [
      { label: "Thank you!", value: "thanks" },
      { label: "Financing", value: "financing" },
    ],
  },

  financing: {
    text: "**AutoPrestige financing simulator**:\n\nExample for a **BMW 3 Series** at estimation personnalisee:\n\n**Standard loan:**\n- Deposit: estimation personnalisee\n- Duration: 48 months\n- Monthly payment: **estimation personnalisee**\n- APR: 4.9%\n\n**PCP (Personal Contract Purchase):**\n- Deposit: estimation personnalisee\n- Duration: 36 months / 15,000 km/year\n- Monthly: **estimation personnalisee**\n- Optional final payment: estimation personnalisee\n\n**PCH (Personal Contract Hire):**\n- Everything included (insurance + maintenance)\n- **estimation personnalisee** over 36 months\n\nOur partners: **Barclays, Black Horse, Santander**\nDecision within **24 hours**. Would you like a personalized simulation?",
    delay: 2400,
    quickReplies: [
      { label: "Personal simulation", value: "financing" },
      { label: "PCP details", value: "financing" },
      { label: "Test drive", value: "test drive" },
      { label: "Trade-in", value: "trade-in" },
    ],
  },

  "trade-in": {
    text: "**AutoPrestige trade-in estimate**:\n\nTo ?? your vehicle, I need:\n- Make and model\n- Year of first registration\n- Mileage\n- Fuel type (petrol/diesel/hybrid/electric)\n\n**Example estimate:**\n- Peugeot 308 — 2021 — 45,000 km — Diesel\n- **Estimate: 14,500 — estimation personnalisee**\n\n**Our commitment:**\n- Free and non-binding estimate\n- Guaranteed price for **7 days**\n- Trade-in even without buying from us\n- Bank transfer within **48h** after agreement\n\nSend me your vehicle details or a photo!",
    delay: 2000,
    quickReplies: [
      { label: "Send photo", value: "vehicle photo" },
      { label: "Vehicles in stock", value: "vehicle" },
      { label: "Financing", value: "financing" },
      { label: "Back to home", value: "hello" },
    ],
  },

  "vehicle photo": {
    text: "Thank you for the photo! **AI analysis in progress**...\n\n**Analysis result:**\n\n- **Vehicle identified:** Renault Megane IV — 2020\n- **Body condition:** Good (micro-scratch on passenger door)\n- **Paint condition:** Very good (platinum grey)\n- **Alloys:** Good condition, 1 minor scuff\n\n**AI estimate:** 12,800 — estimation personnalisee\n\n**To refine:**\n- Exact mileage?\n- Full service history?\n- Valid MOT?\n\nAn expert can confirm within **24h** with physical inspection.",
    delay: 2800,
    quickReplies: [
      { label: "Confirm trade-in", value: "trade-in" },
      { label: "Physical inspection", value: "trade-in" },
      { label: "New vehicles", value: "vehicle" },
      { label: "Back to home", value: "hello" },
    ],
  },

  servicing: {
    text: "**AutoPrestige service centre**:\n\n**Our services:**\n- **Full service** — available after audit (oil change + filters + diagnostic)\n- **Oil change** — estimation personnalisee (oil + filter)\n- **Tyres** — available after audit (fitting + balancing included)\n- **Brakes** — available after audit (front pads)\n- **Air conditioning** — estimation personnalisee (recharge + disinfection)\n- **Wheel alignment** — estimation personnalisee\n\n**Next available slots:**\n- Monday April 21 — 8am, 10am, 2pm\n- Wednesday April 23 — 9am, 11am\n- Friday April 25 — 8am, 3pm\n\n**Free courtesy car** for jobs over 2 hours.\n\nWhich service do you need?",
    delay: 2200,
    quickReplies: [
      { label: "Full service", value: "confirm servicing" },
      { label: "Tyres", value: "confirm servicing" },
      { label: "Service reminder", value: "service reminder" },
      { label: "Back to home", value: "hello" },
    ],
  },

  "confirm servicing": {
    text: "Service appointment confirmed!\n\n**Service:** Full service\n**Date:** Monday April 21, 2026 — 8:00am\n**Estimated duration:** 2h30\n**Courtesy car:** Yes (Peugeot 208)\n\n**Included:**\n- Engine oil change\n- Filter replacements (air, oil, cabin)\n- 32-point electronic diagnostic\n- Fluid levels + lighting check\n\n**Price:** estimation personnalisee inc. VAT\n\nWhatsApp reminder the day before. Bring your vehicle registration.",
    delay: 1800,
    quickReplies: [
      { label: "Thank you!", value: "thanks" },
      { label: "Cancel appointment", value: "servicing" },
    ],
  },

  "service reminder": {
    text: "**Automatic service reminders**:\n\nOur AI tracks your vehicle's maintenance:\n\n**Your vehicle:** BMW 3 Series — 2024\n\n**Upcoming scheduled maintenance:**\n- **Full service** — In 2,200 km (due May 2026)\n- **Tyres** — 40% wear, replacement due August 2026\n- **MOT** — Due September 2026\n- **Brake pads** — OK status, check in 15,000 km\n\n**Active alerts:**\n- WhatsApp 30 days before due date\n- SMS 7 days before\n- Automatic appointment proposal\n\nWould you like to modify your alerts?",
    delay: 2000,
    quickReplies: [
      { label: "Modify alerts", value: "service reminder" },
      { label: "Book service", value: "servicing" },
      { label: "MOT", value: "mot" },
      { label: "Back to home", value: "hello" },
    ],
  },

  warranty: {
    text: "**AutoPrestige warranties**:\n\n**New vehicles:**\n- Manufacturer warranty: **2 to 5 years** depending on brand\n- Extension possible up to **7 years / 150,000 km**\n\n**Used vehicles:**\n- **AutoPrestige warranty**: 12 months minimum\n- **24 or 36-month** extension available\n- Covers: engine, gearbox, steering, suspension, electronics\n\n**Our commitments:**\n- Replacement vehicle during repair\n- 24/7 breakdown assistance included\n- No excess on covered parts\n\nYour current warranty expires **01/15/2028**.",
    delay: 2000,
    quickReplies: [
      { label: "Extend warranty", value: "warranty" },
      { label: "Make a claim", value: "warranty" },
      { label: "Servicing", value: "servicing" },
      { label: "Back to home", value: "hello" },
    ],
  },

  parts: {
    text: "**AutoPrestige spare parts**:\n\n**Availability:**\n- Genuine manufacturer parts\n- Certified equivalent parts\n- Accessories and equipment\n\n**Quick search:**\nTell me your vehicle + the part you need.\n\n**Examples:**\n- BMW 3 Series oil filter — **estimation personnalisee** (in stock)\n- Mercedes GLC front brake pads — **estimation personnalisee** (available D+1)\n- Audi A4 battery — **estimation personnalisee** (in stock)\n\n**Services:**\n- Delivery to dealership or home\n- Workshop fitting (preferential rate)\n- 2-year warranty on all parts\n\nWhich part are you looking for?",
    delay: 2000,
    quickReplies: [
      { label: "Search part", value: "parts" },
      { label: "Order", value: "parts" },
      { label: "Workshop appointment", value: "servicing" },
      { label: "Back to home", value: "hello" },
    ],
  },

  "used cars": {
    text: "**AutoPrestige used vehicles**:\n\nAll our vehicles are **150-point checked**:\n\n**Current selection:**\n- **Peugeot 3008 GT** — 2023 — 28,000 km — estimation personnalisee\n- **VW Golf 8 R-Line** — 2022 — 35,000 km — estimation personnalisee\n- **Renault Arkana** — 2024 — 12,000 km — estimation personnalisee\n- **BMW X1 xDrive** — 2023 — 22,000 km — estimation personnalisee\n- **Citroen C5 X** — 2024 — 8,000 km — estimation personnalisee\n\n**AutoPrestige used car advantages:**\n- 12-month warranty minimum\n- Certified complete history\n- Trade-in of your old vehicle\n- Tailored financing\n\nDoes a vehicle interest you?",
    delay: 2400,
    quickReplies: [
      { label: "Test Peugeot 3008", value: "test drive" },
      { label: "Financing", value: "financing" },
      { label: "Trade-in", value: "trade-in" },
      { label: "Back to home", value: "hello" },
    ],
  },

  promotion: {
    text: "**AutoPrestige special offers**:\n\n**Spring 2026:**\n- **-estimation personnalisee** on BMW 1 and 3 Series range\n- **PCP available after audit** on Peugeot 3008 (estimation personnalisee deposit)\n- **Scrappage scheme**: up to estimation personnalisee on electric vehicles\n- **3-year service pack** free with any new car purchase\n\n**Weekend flash:**\n- Double trade-in on your old vehicle (estimate + 10%)\n- Free set of tyres on used SUVs\n\n**Valid until April 30, 2026.**\n\nTake advantage now!",
    delay: 2000,
    quickReplies: [
      { label: "BMW on offer", value: "vehicle" },
      { label: "Simulate PCP", value: "financing" },
      { label: "Scrappage scheme", value: "vehicle" },
      { label: "Back to home", value: "hello" },
    ],
  },

  "car insurance": {
    text: "**Car insurance — AutoPrestige partners**:\n\nWe work with the best insurers:\n\n**Negotiated offers:**\n- **Comprehensive** — available after audit (max no-claims)\n- **Third party+** — available after audit\n- **Young driver** — available after audit\n\n**Included in our offers:**\n- Zero-km 24/7 breakdown assistance\n- Replacement vehicle\n- No excess on glass claims\n- Legal protection\n\n**Partners:** AXA, Allianz, Direct Line, Admiral\n\nFree simulation in **2 minutes**.\nQuote sent via WhatsApp.",
    delay: 2000,
    quickReplies: [
      { label: "Simulate insurance", value: "car insurance" },
      { label: "Car financing", value: "financing" },
      { label: "Vehicles", value: "vehicle" },
      { label: "Back to home", value: "hello" },
    ],
  },

  mot: {
    text: "**MOT — AutoPrestige**:\n\n**Our approved centre:**\n- Periodic MOT\n- Re-test\n- Pre-MOT check (recommended)\n\n**Prices:**\n- MOT: **estimation personnalisee** (government capped)\n- Re-test: **estimation personnalisee**\n- MOT + pre-check: **estimation personnalisee** (recommended)\n\n**Next available slots:**\n- Thursday April 24 — 8am, 10am, 2pm, 4pm\n- Friday April 25 — 9am, 11am\n\n**Your vehicle:** MOT due before **09/15/2026**\n\n**Duration:** Approx. 45 min\nVehicle returned same day.",
    delay: 1800,
    quickReplies: [
      { label: "Book MOT", value: "confirm servicing" },
      { label: "MOT reminder", value: "service reminder" },
      { label: "Servicing", value: "servicing" },
      { label: "Back to home", value: "hello" },
    ],
  },

  delivery: {
    text: "**AutoPrestige delivery options**:\n\n**At the dealership:**\n- Personalized handover with your advisor\n- Full vehicle presentation (1 hour)\n- Setup + feature walkthrough\n- Free\n\n**Home delivery:**\n- Delivery by transporter\n- Within 100 km: **estimation personnalisee**\n- Within 200 km: **estimation personnalisee**\n- Nationwide: **on request**\n\n**Lead times:**\n- Vehicle in stock: **48-72 hours**\n- Factory order: **3 to 6 months** depending on model\n\nDocuments handed over (registration, insurance) on delivery day.",
    delay: 2000,
    quickReplies: [
      { label: "Home delivery", value: "delivery" },
      { label: "Vehicles in stock", value: "vehicle" },
      { label: "Financing", value: "financing" },
      { label: "Back to home", value: "hello" },
    ],
  },
};

const sectorKeywords: Record<string, string[]> = {
  hello: ["hello", "hi", "hey", "good morning", "good evening", "howdy"],
  vehicle: ["vehicle", "car", "auto", "model", "saloon", "suv", "city car", "sports", "electric", "hybrid", "new car", "looking for"],
  "test drive": ["test drive", "test", "try", "drive", "driving"],
  financing: ["financing", "loan", "pcp", "pch", "monthly", "payment", "borrow", "rate"],
  "trade-in": ["trade-in", "trade in", "part-exchange", "sell my car", "estimate", "valuation", "argus"],
  "vehicle photo": ["photo", "image", "scratch", "bodywork", "damage", "accident"],
  servicing: ["service", "servicing", "oil change", "tyre", "brakes", "air con", "alignment", "repair", "workshop", "mechanic"],
  "service reminder": ["reminder", "alert", "notification", "upcoming service"],
  warranty: ["warranty", "extension", "cover", "breakdown", "claim"],
  parts: ["parts", "spare parts", "filter", "battery", "bulb", "accessory"],
  "used cars": ["used", "second hand", "pre-owned", "km", "mileage"],
  promotion: ["promotion", "offer", "discount", "deal", "flash", "scrappage"],
  "car insurance": ["insurance", "insure", "comprehensive", "third party", "axa", "allianz"],
  mot: ["mot", "roadworthy", "inspection", "re-test"],
  delivery: ["delivery", "deliver", "home delivery", "transport", "lead time"],
};

const merged = mergeWithVocalisEN(sectorIntents, sectorKeywords);

export const automobileConfigEN: SimulatorConfig = {
  botName: "AutoPrestige AI",
  botAvatar: "AP",
  welcomeMessage:
    "Welcome to **AutoPrestige**! I'm your AI assistant.\n\nVehicle search, test drive, financing, trade-in, servicing — I handle it all.\n\nHow can I help you?",
  initialQuickReplies: [
    { label: "Search vehicle", value: "vehicle" },
    { label: "Test drive", value: "test drive" },
    { label: "Trade-in estimate", value: "trade-in" },
    { label: "Financing", value: "financing" },
    { label: "Servicing", value: "servicing" },
    { label: "Promotions", value: "promotion" },
  ],
  intents: merged.intents,
  keywords: merged.keywords,
  fallback: createFallbackEN([
    { label: "Vehicles", value: "vehicle" },
    { label: "Test drive", value: "test drive" },
    { label: "Financing", value: "financing" },
    { label: "Servicing", value: "servicing" },
  ]),
};

export { automobileConfigEN as automobileConfig };
export default automobileConfigEN;
