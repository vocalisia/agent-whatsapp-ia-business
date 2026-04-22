import type { SimulatorConfig } from "../WhatsAppSimulator";
import { mergeWithVocalisEN, createFallbackEN } from "./vocalis-features-en";

const ASSURANCE_INTENTS = {
  hello: {
    text: "Hello! Welcome to **AssurPlus**.\n\nI'm your AI assistant, available 24/7 to manage your insurance.\n\nWhat can I do for you today?",
    delay: 1200,
    quickReplies: [
      { label: "File a claim", value: "file claim" },
      { label: "Auto quote", value: "auto quote" },
      { label: "My file", value: "file tracking" },
      { label: "Speak to an advisor", value: "advisor appointment" },
      { label: "AI Telephony", value: "telephony" },
      { label: "WhatsApp features", value: "whatsapp features" },
    ],
  },
  "file claim": {
    text: "I'll guide you through filing your claim step by step.\n\n**Step 1/4** - Type of claim:\n\nWhat type of claim is it?\n\n• 🚗 Auto/motorcycle accident\n• 🏠 Water damage\n• 🔥 Fire\n• 💨 Natural disaster\n• 🔓 Theft / burglary\n• 💥 Glass breakage\n\nYour claim will be registered under no. **SIN-2026-04-8741**.",
    delay: 2000,
    quickReplies: [
      { label: "🚗 Auto accident", value: "auto claim" },
      { label: "🏠 Water damage", value: "water claim" },
      { label: "🔥 Fire", value: "fire claim" },
      { label: "🔓 Theft", value: "theft claim" },
      { label: "📷 Send photo", value: "claim photo" },
    ],
  },
  "auto claim": {
    text: "**Auto accident - Step 2/4**\n\nThank you. I need the following information:\n\n1️⃣ Date and time of the accident\n2️⃣ Location (address or town)\n3️⃣ Description of events\n4️⃣ Vehicles involved\n5️⃣ Are there any injuries?\n\n⚠️ **Reminder**: You have **5 days** to declare an auto accident.\n\nYou can also send me a **photo of the damage** for an AI estimate.",
    delay: 2200,
    quickReplies: [
      { label: "📷 Send photo", value: "claim photo" },
      { label: "Required documents", value: "documents" },
      { label: "Auto excess", value: "excess" },
      { label: "Emergency assistance", value: "emergency" },
    ],
  },
  "water claim": {
    text: "**Water damage - Step 2/4**\n\nTo process your claim:\n\n1️⃣ Source of the leak (roof, pipe, neighbor...)\n2️⃣ Rooms affected\n3️⃣ Estimated damage\n4️⃣ Joint damage report completed?\n\n📝 Don't forget to complete a **joint damage report** with your neighbor if applicable.\n\nYour home policy **HAB-7821** covers water damage up to **15,000 EUR**.",
    delay: 2000,
    quickReplies: [
      { label: "📷 Send photo", value: "claim photo" },
      { label: "My coverage", value: "coverage" },
      { label: "Home excess", value: "excess" },
      { label: "Expert appointment", value: "advisor appointment" },
    ],
  },
  "fire claim": {
    text: "**Fire - Emergency declaration**\n\n🚨 If the fire is ongoing, call **911** or **112** immediately.\n\nOnce you're safe:\n1️⃣ Do not touch anything before the expert inspection\n2️⃣ Keep damaged items\n3️⃣ Take photos of all damage\n\nYour policy covers fire damage up to **150,000 EUR** (replacement value).\n\nAn expert will be dispatched within **48 hours**.",
    delay: 2200,
    quickReplies: [
      { label: "🆘 Emergency assistance", value: "emergency" },
      { label: "My coverage", value: "coverage" },
      { label: "Contact expert", value: "advisor appointment" },
    ],
  },
  "theft claim": {
    text: "**Theft / Burglary**\n\n⚠️ **Mandatory steps**:\n\n1️⃣ **File a police report** within 24 hours\n2️⃣ List stolen items with estimated value\n3️⃣ Gather receipts and photos of belongings\n4️⃣ Check for signs of break-in\n\n📝 Send me the **police report receipt** and I'll open the file.\n\nDeclaration deadline: **2 business days** after discovering the theft.",
    delay: 2000,
    quickReplies: [
      { label: "Required documents", value: "documents" },
      { label: "My theft coverage", value: "coverage" },
      { label: "Theft excess", value: "excess" },
      { label: "📷 Send photo", value: "claim photo" },
    ],
  },
  "claim photo": {
    text: "📷 **AI Photo Analysis**\n\nSend me a photo of the damage and our AI will analyze:\n\n• **Type of damage** automatically detected\n• **Severity** estimated (light / moderate / severe)\n• **Estimated repair cost**\n• **Coverage** applicable to your policy\n\n---\n*Simulation:* 🔍 Analyzing...\n\n✅ **Result**:\n• Type: Rear bumper impact\n• Severity: Moderate\n• Estimate: **1,200 EUR - 1,800 EUR**\n• Applicable excess: **300 EUR**\n• Estimated payout: **900 EUR - 1,500 EUR**\n\nWould you like to confirm this claim?",
    delay: 3000,
    quickReplies: [
      { label: "✅ Confirm claim", value: "file claim" },
      { label: "Approved garage", value: "emergency" },
      { label: "My excess", value: "excess" },
      { label: "File tracking", value: "file tracking" },
    ],
  },
  "file tracking": {
    text: "📊 **Your files status**\n\nHere is the status of your ongoing files:\n\n**1. SIN-2026-03-6529** - Water damage\n• Status: 🟢 Expert dispatched\n• Expert appointment: 04/22/2026 at 10am\n• Estimate: 3,200 EUR\n\n**2. SIN-2026-01-4102** - Glass breakage\n• Status: ✅ Closed - Reimbursed\n• Amount paid: 450 EUR\n• Transfer date: 02/18/2026\n\nFor a specific file, send me the **reference number** (e.g., SIN-2026-XXXX).",
    delay: 2500,
    quickReplies: [
      { label: "Details file 6529", value: "file tracking" },
      { label: "New claim", value: "file claim" },
      { label: "Missing documents", value: "documents" },
      { label: "Contact case manager", value: "advisor appointment" },
    ],
  },
  quote: {
    text: "💰 **Instant quote**\n\nWhich type of insurance are you interested in?\n\n🚗 **Auto** - From 28 EUR/month\n🏠 **Home** - From 12 EUR/month\n🏥 **Health** - From 35 EUR/month\n💼 **Professional / Liability** - From 19 EUR/month\n✈️ **Travel** - From 8 EUR/trip\n\nI calculate your personalized rate in 2 minutes!",
    delay: 1800,
    quickReplies: [
      { label: "🚗 Auto quote", value: "auto quote" },
      { label: "🏠 Home quote", value: "home quote" },
      { label: "🏥 Health quote", value: "health quote" },
      { label: "💼 Pro quote", value: "pro quote" },
    ],
  },
  "auto quote": {
    text: "🚗 **Express Auto Quote**\n\nTo calculate your rate, I need:\n\n1️⃣ Vehicle make and model\n2️⃣ Year of first registration\n3️⃣ Annual mileage\n4️⃣ Date of driving license\n5️⃣ Current no-claims bonus\n\n---\n*Simulation*:\n\n✅ **Renault Clio V (2023)**\n• Third party +: **32 EUR/month**\n• Comprehensive: **48 EUR/month**\n• 0.50 bonus applied\n• Excess: 300 EUR (third party+) / 150 EUR (comprehensive)\n\n🌟 *-15% for online subscription!*",
    delay: 2500,
    quickReplies: [
      { label: "✅ Subscribe online", value: "policy" },
      { label: "Included coverage", value: "coverage" },
      { label: "Insurance card", value: "insurance card" },
      { label: "Advisor meeting", value: "advisor appointment" },
    ],
  },
  "home quote": {
    text: "🏠 **Express Home Quote**\n\nA few details for your rate:\n\n1️⃣ Type (apartment / house)\n2️⃣ Area in m²\n3️⃣ Number of rooms\n4️⃣ Owner or tenant\n5️⃣ Alarm system?\n\n---\n*Simulation*: 3-room apartment, 65m², tenant\n\n✅ **Essential**: 14 EUR/month\n✅ **Comfort**: 22 EUR/month\n✅ **Premium**: 31 EUR/month\n\nIncluded coverage: water damage, fire, theft, liability.",
    delay: 2500,
    quickReplies: [
      { label: "Compare plans", value: "coverage" },
      { label: "Subscribe", value: "policy" },
      { label: "Home excess", value: "excess" },
      { label: "Accommodation certificate", value: "certificate" },
    ],
  },
  "health quote": {
    text: "🏥 **Health Insurance Quote**\n\nFor a personalized quote:\n\n1️⃣ Number of people to cover\n2️⃣ Age(s)\n3️⃣ Status (employee, self-employed, retired)\n4️⃣ Specific needs (optical, dental, hospital)\n\n---\n*Simulation*: 1 adult, 35 years old, employee\n\n✅ **Eco**: 38 EUR/month\n✅ **Balance**: 55 EUR/month\n✅ **Serenity**: 79 EUR/month\n\n🌟 Coverage starts within 48h, no waiting period.",
    delay: 2500,
    quickReplies: [
      { label: "Compare plans", value: "coverage" },
      { label: "Subscribe", value: "policy" },
      { label: "Direct billing", value: "payment" },
      { label: "Advisor meeting", value: "advisor appointment" },
    ],
  },
  "pro quote": {
    text: "💼 **Professional / Liability Insurance Quote**\n\nYour activity needs tailored coverage:\n\n1️⃣ Type of activity (consulting, construction, retail...)\n2️⃣ Annual revenue\n3️⃣ Number of employees\n4️⃣ Desired coverage\n\n---\n*Simulation*: IT Consultant, 120K EUR revenue, 1 person\n\n✅ **Liability only**: 22 EUR/month\n✅ **Liability + Cyber**: 38 EUR/month\n✅ **Complete Pack**: 55 EUR/month\n\nProtect your business today.",
    delay: 2500,
    quickReplies: [
      { label: "Liability coverage", value: "coverage" },
      { label: "Subscribe", value: "policy" },
      { label: "Advisor meeting", value: "advisor appointment" },
    ],
  },
  policy: {
    text: "📄 **Your AssurPlus policies**\n\n**1. Auto - Comprehensive** (no. AP-AUT-782341)\n• Vehicle: Renault Clio V\n• Renewal: 09/15/2026\n• Premium: 576 EUR/year (48 EUR/month)\n• Bonus: 0.50\n\n**2. Home - Comfort** (no. AP-HAB-7821)\n• Address: 12 Lilac Street, London\n• Renewal: 01/01/2027\n• Premium: 264 EUR/year (22 EUR/month)\n\nYou can download your policies or modify them online.",
    delay: 2200,
    quickReplies: [
      { label: "💾 Download policy", value: "policy" },
      { label: "✏️ Modify policy", value: "policy modification" },
      { label: "Cancel", value: "cancellation" },
      { label: "Certificate", value: "certificate" },
    ],
  },
  certificate: {
    text: "📃 **Insurance certificate**\n\nWhat type of certificate do you need?\n\n• 🚘 **Auto** - Vehicle certificate\n• 🏠 **Home** - Accommodation certificate\n• 🏥 **Health** - Health insurance certificate\n• 💼 **Liability** - Professional certificate\n\n---\n*Automatic generation*:\n\n✅ Your auto certificate **AP-AUT-782341** is ready!\nValid from 01/01/2026 to 12/31/2026.\n\n📧 Sent by email to your registered address.\n📱 Also available in your client area.",
    delay: 2000,
    quickReplies: [
      { label: "Insurance card", value: "insurance card" },
      { label: "Home certificate", value: "certificate" },
      { label: "My policy", value: "policy" },
      { label: "Update address", value: "policy modification" },
    ],
  },
  "insurance card": {
    text: "🚘 **Insurance card (international card)**\n\nYour insurance card is a mandatory document for driving.\n\n✅ **Active insurance card**:\n• Policy: AP-AUT-782341\n• Vehicle: Renault Clio V\n• Plate: AB-123-CD\n• Validity: 01/01/2026 - 12/31/2026\n\n📥 I'm sending the insurance card by email and SMS.\n\n⚠️ Since April 2024, the paper card is no longer mandatory. The digital certificate is sufficient.",
    delay: 2000,
    quickReplies: [
      { label: "📧 Receive by email", value: "insurance card" },
      { label: "Auto certificate", value: "certificate" },
      { label: "My auto policy", value: "policy" },
      { label: "Add driver", value: "policy modification" },
    ],
  },
  cancellation: {
    text: "🛑 **Policy cancellation**\n\nYou want to cancel? Here are your options:\n\n**After 1 year**\n• Cancel at any time\n• Effective within 30 days\n• No charge\n\n**Annual renewal**\n• 2-month notice before renewal\n• Registered letter (or via our form)\n\n**Legitimate reason**\n• Moving, vehicle sale, change of situation\n• Immediate effect\n\n💡 Before cancelling, would you like me to compare with our new offers? You could save up to **25%**.",
    delay: 2200,
    quickReplies: [
      { label: "Compare new offers", value: "quote" },
      { label: "Confirm cancellation", value: "cancellation" },
      { label: "Speak to an advisor", value: "advisor appointment" },
      { label: "My policies", value: "policy" },
    ],
  },
  "policy modification": {
    text: "✏️ **Policy modification**\n\nWhat would you like to modify?\n\n• 🚗 **Add/remove a driver**\n• 🏠 **Change address**\n• 💳 **Change payment method**\n• 🛡️ **Increase/reduce coverage**\n• 🚗 **Change vehicle**\n• 👤 **Update contact details**\n\nMost modifications take effect within **24 hours** and are free of charge.\n\nWhat would you like to change?",
    delay: 2000,
    quickReplies: [
      { label: "Add driver", value: "policy modification" },
      { label: "Change address", value: "policy modification" },
      { label: "Increase coverage", value: "coverage" },
      { label: "Advisor meeting", value: "advisor appointment" },
    ],
  },
  payment: {
    text: "💳 **Payment & Schedule**\n\n**Next payment**:\n• Date: 05/01/2026\n• Amount: **70 EUR** (auto 48 EUR + home 22 EUR)\n• Method: Card ending in ****4521\n\n**Recent history**:\n• 04/01/2026: 70 EUR ✅\n• 03/01/2026: 70 EUR ✅\n• 02/01/2026: 70 EUR ✅\n\n**Options**:\n• Monthly / Quarterly / Annual\n• Direct debit or card\n• Payment plan available if needed",
    delay: 2000,
    quickReplies: [
      { label: "Change payment method", value: "policy modification" },
      { label: "Payment plan", value: "payment" },
      { label: "Download invoices", value: "policy" },
      { label: "Contact billing", value: "advisor appointment" },
    ],
  },
  emergency: {
    text: "🆘 **24/7 Assistance**\n\n**Emergency numbers**:\n• 🚑 Ambulance: **911**\n• 🚒 Fire: **911**\n• 🚓 Police: **911**\n• 🆘 European: **112**\n\n**AssurPlus Assistance**:\n📞 **0 800 123 456** (free, 24/7)\n\n• 🚗 **Breakdown/towing**: response within 30 min\n• 🏠 **Home emergency**: locksmith, plumber, electrician\n• 🏥 **Medical repatriation**: 100% covered\n• 🚗 **Replacement vehicle**: within 2h in urban areas\n\nYour policy number: **AP-AUT-782341**",
    delay: 1800,
    quickReplies: [
      { label: "📞 Call assistance", value: "emergency" },
      { label: "Vehicle breakdown", value: "emergency" },
      { label: "File a claim", value: "file claim" },
      { label: "My policy", value: "policy" },
    ],
  },
  coverage: {
    text: "🛡️ **Your coverage - Comprehensive Policy**\n\n**Included coverages**:\n• ✅ Civil liability (unlimited)\n• ✅ All-accident damage\n• ✅ Theft and attempted theft\n• ✅ Fire and explosion\n• ✅ Glass breakage\n• ✅ Natural disaster\n• ✅ Legal protection (15,000 EUR)\n• ✅ Zero-km assistance\n\n**Limits**:\n• Material damage: **150,000 EUR**\n• Bodily injury: **Unlimited**\n• Transported items: **1,500 EUR**",
    delay: 2200,
    quickReplies: [
      { label: "My excess", value: "excess" },
      { label: "Increase coverage", value: "policy modification" },
      { label: "Health quote", value: "health quote" },
      { label: "My policy", value: "policy" },
    ],
  },
  excess: {
    text: "📊 **Excess - Explanation**\n\nThe excess is the amount you pay when you make a claim.\n\n**Your current excesses**:\n\n🚗 **Auto (Comprehensive)**:\n• Damage: **150 EUR**\n• Theft: **300 EUR**\n• Glass breakage: **0 EUR** (waived)\n\n🏠 **Home (Comfort)**:\n• Water damage: **200 EUR**\n• Theft: **300 EUR**\n• Natural disaster: **380 EUR** (fixed by decree)\n\n💡 **Tip**: Increasing your excess by 150 EUR can reduce your premium by **10-15%**.",
    delay: 2200,
    quickReplies: [
      { label: "Change excess", value: "policy modification" },
      { label: "My coverage", value: "coverage" },
      { label: "New quote", value: "quote" },
      { label: "File a claim", value: "file claim" },
    ],
  },
  "advisor appointment": {
    text: "📅 **Book an appointment**\n\nChoose your contact method:\n\n📱 **Phone call** (15 min)\n💻 **Video conference** (30 min)\n🏢 **In branch** (45 min)\n\n**Available slots this week**:\n• Wed. 04/19 - 10am / 2:30pm\n• Thu. 04/20 - 9am / 11am / 4pm\n• Fri. 04/21 - 10:30am / 3pm\n\nYour dedicated advisor: **Marie Dupont**\n📞 Direct: +44 123 456 789",
    delay: 2000,
    quickReplies: [
      { label: "📱 Phone 15 min", value: "advisor appointment" },
      { label: "💻 Video call", value: "advisor appointment" },
      { label: "🏢 In branch", value: "advisor appointment" },
      { label: "Back to home", value: "hello" },
    ],
  },
  documents: {
    text: "📂 **Required documents**\n\nDepending on your situation:\n\n**Auto claim**:\n• Completed joint accident report\n• Photos of damage\n• Copy of driving license\n• Police report (if theft)\n\n**Home claim**:\n• Joint water damage report\n• Before/after photos\n• Receipts for damaged items\n• Repair quotes\n\n**Subscription**:\n• ID document\n• Bank details (IBAN)\n• Proof of address\n• No-claims history (auto)\n\n📷 You can send your documents directly here!",
    delay: 2200,
    quickReplies: [
      { label: "📷 Send document", value: "claim photo" },
      { label: "File a claim", value: "file claim" },
      { label: "File tracking", value: "file tracking" },
      { label: "My policy", value: "policy" },
    ],
  },
  "proactive claims campaign": {
    text: "📢 **Proactive claims campaigns**\n\nOur AI launches automated campaigns for claims follow-up:\n\n**Automated outbound calls:**\n• Expert follow-up D+2 after declaration\n• Missing documents chase\n• File progress notification\n• Post-reimbursement satisfaction survey\n\n**Channels used:**\n• AI voice call (Dualplex, natural voice)\n• Post-24h WhatsApp template\n• SMS reminder\n\n**Observed results:**\n• Average file processing time: **-40%**\n• Missing documents: **-65%**\n• Policyholder satisfaction: **+28%**\n\nCampaigns trigger automatically via CRM.",
    delay: 2400,
    quickReplies: [
      { label: "How it works?", value: "campaigns" },
      { label: "CRM integrations", value: "crm" },
      { label: "Pricing", value: "pricing" },
      { label: "Book a meeting", value: "booking" },
    ],
  },
  "ai expert call": {
    text: "📞 **AI call to expert**\n\nOur AI telephony can:\n\n1️⃣ **Contact the expert** automatically after declaration\n2️⃣ **Transmit the full file** (photos, description, policy no.)\n3️⃣ **Schedule the expert appointment** in real time\n4️⃣ **Confirm by WhatsApp** to both the policyholder and the expert\n\n**Call modes:**\n• **Pipeline** — Complete transcription for the file\n• **Dualplex** — Natural conversation with the expert\n• **Human transfer** mid-call if needed\n\n**Result:** Expert appointment booked in **< 4h** instead of 48h.",
    delay: 2200,
    quickReplies: [
      { label: "AI telephony", value: "telephony" },
      { label: "Voice & languages", value: "voice" },
      { label: "Dashboards", value: "dashboards" },
      { label: "Pricing", value: "pricing" },
    ],
  },
  "renewal template": {
    text: "📩 **Meta Templates — Renewal reminders**\n\nPre-approved WhatsApp templates for insurance:\n\n**1. Policy renewal** (utility)\n> Hello {{name}}, your {{type}} policy expires on {{date}}. Renew in 1 click or contact your advisor.\n\n**2. Payment reminder** (utility)\n> {{first_name}}, your payment of {{amount}} EUR is scheduled for {{date}}. Please check your bank details.\n\n**3. Multi-policy offer** (marketing)\n> You're insured with us for auto — enjoy **-20%** on home! Get an instant quote here.\n\n**Benefits:**\n• Sent after the 24h WhatsApp window\n• Interactive buttons (Renew / Contact)\n• Dynamic variables from CRM\n• Open + click tracking",
    delay: 2400,
    quickReplies: [
      { label: "Meta templates", value: "templates" },
      { label: "Automation", value: "automation" },
      { label: "CRM sync", value: "crm" },
      { label: "Pricing", value: "pricing" },
    ],
  },
};

const ASSURANCE_KEYWORDS: Record<string, string[]> = {
  hello: ["hello", "hi", "hey", "good morning", "good evening", "howdy"],
  "file claim": [
    "claim", "accident", "declaration", "file", "crash", "collision",
  ],
  "claim photo": [
    "photo", "image", "damage", "send photo", "analyze",
  ],
  "file tracking": [
    "tracking", "file", "status", "progress", "reference", "number", "sin-",
  ],
  quote: ["quote", "estimate", "offer"],
  "auto quote": ["auto quote", "car insurance", "vehicle insurance"],
  "home quote": [
    "home quote", "house quote", "apartment quote", "home insurance",
  ],
  "health quote": [
    "health quote", "health insurance", "supplemental", "health",
  ],
  policy: [
    "policy", "contract", "terms", "download", "policy document",
  ],
  certificate: ["certificate", "proof of insurance", "evidence"],
  "insurance card": ["insurance card", "international card", "car insurance card"],
  cancellation: [
    "cancel", "cancellation", "terminate", "stop", "leave",
  ],
  "policy modification": [
    "modify", "modification", "change", "add driver", "update",
  ],
  payment: [
    "payment", "pay", "direct debit", "invoice", "installment",
  ],
  emergency: [
    "emergency", "assistance", "breakdown", "towing", "breakdown service",
    "sos", "help", "rescue", "24/7",
  ],
  coverage: [
    "coverage", "covered", "protection", "included", "exclusion",
  ],
  excess: ["excess", "deductible", "amount payable"],
  "advisor appointment": [
    "advisor", "branch", "contact", "human",
  ],
  documents: [
    "document", "papers", "required", "provide",
  ],
  "auto claim": ["auto accident", "car accident", "crash"],
  "water claim": [
    "water damage", "leak", "flood", "water", "pipe",
  ],
  "fire claim": ["fire", "flame", "burned"],
  "theft claim": ["theft", "burglary", "stolen", "break-in"],
  "proactive claims campaign": ["proactive campaign", "claims follow-up", "automated claims"],
  "ai expert call": ["ai expert call", "expert telephony", "contact expert", "ai expert"],
  "renewal template": ["renewal template", "renewal reminder", "policy renewal", "payment reminder"],
};

const merged = mergeWithVocalisEN(ASSURANCE_INTENTS, ASSURANCE_KEYWORDS);

export const assuranceConfigEN: SimulatorConfig = {
  botName: "AssurPlus",
  botAvatar: "A+",
  welcomeMessage:
    "Hello! I'm the AI assistant from **AssurPlus** 🛡️\n\nI can help you with:\n• Filing a claim\n• Tracking your file\n• Getting a quote\n• Requesting a certificate\n• 24/7 assistance\n\nHow can I help you?",
  initialQuickReplies: [
    { label: "📢 File a claim", value: "file claim" },
    { label: "📊 Track my file", value: "file tracking" },
    { label: "💰 Quote", value: "quote" },
    { label: "📃 Certificate", value: "certificate" },
    { label: "🚘 Insurance card", value: "insurance card" },
    { label: "🆘 Emergency", value: "emergency" },
  ],
  intents: merged.intents,
  keywords: merged.keywords,
  fallback: createFallbackEN([
    { label: "File a claim", value: "file claim" },
    { label: "Quote", value: "quote" },
    { label: "Track file", value: "file tracking" },
    { label: "24/7 Assistance", value: "emergency" },
    { label: "Advisor meeting", value: "advisor appointment" },
  ]),
};

export { assuranceConfigEN as assuranceConfig };
export default assuranceConfigEN;
