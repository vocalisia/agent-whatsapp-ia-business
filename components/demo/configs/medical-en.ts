import type { SimulatorConfig, BotResponse } from "../WhatsAppSimulator";
import { mergeWithVocalisEN, createFallbackEN } from "./vocalis-features-en";

const MEDICAL_INTENTS: Record<string, BotResponse> = {
  hello: {
    text: "Hello! Welcome to **MediAssist** medical practice.\n\nI'm your AI assistant, available 24/7 for:\n• Booking appointments\n• Prescription renewals\n• Viewing your results\n• Organizing a video consultation\n\nHow can I help you?",
    delay: 1200,
    quickReplies: [
      { label: "Book appointment", value: "book appointment" },
      { label: "Video consultation", value: "video consultation" },
      { label: "Prescription", value: "prescription" },
      { label: "Lab results", value: "results" },
    ],
  },
  "book appointment": {
    text: "**Book an appointment**\n\nChoose the type of consultation:\n\n🩺 **General practice** — Dr. Martin\n• Next slots: Mon 04/21 9am, 11am, 2:30pm\n\n🦷 **Dermatology** — Dr. Leroy\n• Next slots: Tue 04/22 10am, 3pm\n\n👶 **Paediatrics** — Dr. Faure\n• Next slots: Wed 04/23 9am, 11:30am\n\n🦴 **Orthopaedics** — Dr. Roux\n• Next slots: Thu 04/24 8:30am, 2pm\n\n💓 **Cardiology** — Dr. Bernard\n• Next slots: Fri 04/25 10am\n\nWhich specialist and slot works for you?",
    delay: 2200,
    quickReplies: [
      { label: "Dr. Martin Mon 9am", value: "confirm appointment" },
      { label: "Dr. Leroy Tue 10am", value: "confirm appointment" },
      { label: "Emergency", value: "emergency" },
      { label: "Video consultation", value: "video consultation" },
    ],
  },
  "confirm appointment": {
    text: "✅ **Appointment confirmed!**\n\n**Doctor:** Dr. Martin — General practice\n**Date:** Monday April 21, 2026\n**Time:** 09:00\n**Location:** MediAssist Practice, 15 Pasteur Street, London\n\n**Automatic reminders:**\n• SMS D-2\n• WhatsApp D-1 at 6pm\n• WhatsApp H-1\n\n**Documents to bring:**\n• Health insurance card\n• Supplementary insurance card\n• Current prescriptions\n\nSee you soon!",
    delay: 2000,
    quickReplies: [
      { label: "First visit documents", value: "documents" },
      { label: "Modify appointment", value: "cancel appointment" },
      { label: "Directions", value: "hours" },
    ],
  },
  "appointment reminder": {
    text: "🔔 **Active automatic reminders**\n\nYour upcoming appointments:\n\n**1. Dr. Martin** — Mon 04/21 at 09:00\n• WhatsApp reminder sent D-1\n• Confirmation received: ✅\n\n**2. Dr. Leroy (dermatology)** — Tue 04/29 at 3:00pm\n• Reminder scheduled D-2\n• Awaiting confirmation\n\n**Reminder system:**\n• D-2: SMS reminder\n• D-1: WhatsApp with confirm/reschedule button\n• H-1: Final reminder\n\n📊 **No-show rate reduced by 68%** thanks to AI reminders.",
    delay: 2000,
    quickReplies: [
      { label: "Confirm appointment", value: "confirm appointment" },
      { label: "Reschedule", value: "cancel appointment" },
      { label: "My appointments", value: "book appointment" },
    ],
  },
  prescription: {
    text: "📝 **Prescription renewal**\n\nI can forward your request to the doctor.\n\n**Your current treatments:**\n• Levothyrox 75µg — 1 tablet/day (Dr. Martin)\n• Metformin 500mg — 2 tablets/day (Dr. Martin)\n• Vitamin D 100,000 IU — 1/quarter\n\n**To renew:**\n1️⃣ Select the treatment(s)\n2️⃣ Doctor approves within 24-48h\n3️⃣ Prescription sent to your account + pharmacy\n\n⚠️ Last consultation: 01/15/2026\nA renewal requiring an examination may be conditional on a appointment.",
    delay: 2400,
    quickReplies: [
      { label: "Renew all", value: "prescription" },
      { label: "Book check-up", value: "book appointment" },
      { label: "Send to pharmacy", value: "prescription" },
      { label: "Treatment follow-up", value: "treatment follow-up" },
    ],
  },
  results: {
    text: "🧪 **Test results**\n\nYour latest results are available:\n\n**Blood panel from 04/10/2026** (BioHealth Lab)\n• Status: ✅ Results available\n• Fasting blood glucose: 0.95 g/L (N: 0.70-1.10)\n• HbA1c: 6.2% (N: <7%)\n• TSH: 2.1 mIU/L (N: 0.4-4.0)\n• Total cholesterol: 2.10 g/L (N: <2.40)\n\n🟢 **All markers are within normal range.**\n\nDr. Martin noted: *\"Satisfactory results. Continue current treatment.\"*\n\n⚠️ These results do not replace a medical consultation.",
    delay: 2500,
    quickReplies: [
      { label: "Follow-up appointment", value: "book appointment" },
      { label: "Prescription", value: "prescription" },
      { label: "Test history", value: "results" },
      { label: "Video consultation", value: "video consultation" },
    ],
  },
  "video consultation": {
    text: "📹 **Video consultation**\n\nConsult a doctor from home:\n\n**Video consultation availability:**\n• Dr. Martin — Today 5pm, Tomorrow 9am\n• Dr. Faure — Tomorrow 2pm, 4:30pm\n\n**How it works:**\n1️⃣ Book a slot\n2️⃣ Video link sent by WhatsApp 10 min before\n3️⃣ Secure consultation (15-20 min)\n4️⃣ Prescription + summary sent afterwards\n\n**Fee:** 25 EUR (sector 1) — Direct billing possible\n**Reimbursement:** 70% NHS / private insurance top-up\n\nWhich slot works for you?",
    delay: 2200,
    quickReplies: [
      { label: "Dr. Martin 5pm", value: "confirm appointment" },
      { label: "Tomorrow 9am", value: "confirm appointment" },
      { label: "Insurance card?", value: "insurance card" },
      { label: "In-person appointment", value: "book appointment" },
    ],
  },
  emergency: {
    text: "🚨 **Medical emergency**\n\n**If life-threatening, call IMMEDIATELY:**\n• 🚑 **Ambulance: 999**\n• 🚒 Fire service: **999**\n• 🆘 European: **112**\n\n**Signs of life-threatening emergency:**\n• Chest pain / breathing difficulty\n• Loss of consciousness\n• Major bleeding\n• Stroke symptoms (face, arm, speech)\n\n**Non-life-threatening urgencies:**\n• 🏥 NHS 111: **111**\n• 📞 Out-of-hours GP: **check local service**\n• 🪧 Nearest A&E: **check NHS website**\n\n⚠️ **This chatbot does NOT replace medical advice in an emergency.**",
    delay: 1800,
    quickReplies: [
      { label: "Quick video consultation", value: "video consultation" },
      { label: "Out-of-hours GP", value: "hours" },
      { label: "Send symptom photo", value: "symptom photo" },
    ],
  },
  hours: {
    text: "🕒 **MediAssist practice hours**\n\n**Consultations:**\n• Monday - Friday: 8:30am - 7:00pm\n• Saturday: 9:00am - 1:00pm\n• Sunday: Closed (video consultation available)\n\n**Out-of-hours doctor:**\n• Evenings 7pm-8:30am: call **111**\n• Weekends/bank holidays: call **111**\n\n**Address:**\n15 Pasteur Street, London SW1\nTube: St James's Park (District/Circle)\nParking: Vinci Pasteur 50m away\n\n**Video consultation:** Available 7 days/week, 8am-10pm",
    delay: 1800,
    quickReplies: [
      { label: "Book appointment", value: "book appointment" },
      { label: "Video consultation", value: "video consultation" },
      { label: "Emergency", value: "emergency" },
      { label: "Google Maps directions", value: "hours" },
    ],
  },
  documents: {
    text: "📂 **Documents for your visit**\n\n**First consultation:**\n• 💳 NHS card / private insurance card\n• 🏥 Supplementary insurance card\n• 📝 Current prescriptions\n• 🧪 Latest test results\n• 📄 Vaccination record\n• 📷 Specialist letters\n\n**Follow-up consultation:**\n• Insurance card\n• Results of prescribed tests\n\n**Video consultation:**\n• Stable internet connection\n• Camera + microphone active\n• Quiet, well-lit room\n\nYou can send me your documents in advance here!",
    delay: 2000,
    quickReplies: [
      { label: "Book appointment", value: "book appointment" },
      { label: "Insurance card", value: "insurance card" },
      { label: "Vaccinations", value: "vaccination" },
      { label: "Video consultation", value: "video consultation" },
    ],
  },
  "insurance card": {
    text: "💳 **Insurance card & reimbursements**\n\n**Your insurance card:**\n• NHS no.: 485 777 3456\n• Status: ✅ Active\n• Updated: 12/2025\n\n**Reimbursements:**\n• GP consultation: 100% NHS (free)\n• NHS specialist (referral): free\n• Private consultant: variable\n• Lab tests: 100% NHS or co-pay\n\n**Direct billing:**\n• Active on your file\n• No upfront payment for NHS care\n• Private supplement depending on plan\n\n💡 Keep your exemption certificate up to date if eligible.",
    delay: 2000,
    quickReplies: [
      { label: "Book appointment", value: "book appointment" },
      { label: "My results", value: "results" },
      { label: "Prescription", value: "prescription" },
    ],
  },
  vaccination: {
    text: "💉 **Vaccinations**\n\n**Your vaccination record:**\n• Tetanus/diphtheria/polio: ✅ Done 03/2024 — Next: 03/2034\n• Seasonal flu: ⚠️ Due (Oct-Nov campaign)\n• COVID-19: ✅ Up to date\n• Hepatitis B: ✅ Complete\n\n**Available vaccination slots:**\n• Flu: walk-in daily (Oct-Jan)\n• Boosters: appointment with Dr. Martin\n• Travel: dedicated consultation (yellow fever, hep A...)\n\n**Children's vaccinations:**\n• Dr. Faure (paediatrics) — Digital vaccination record\n• Automatic reminders on vaccination schedule\n\nWould you like to book a vaccination appointment?",
    delay: 2200,
    quickReplies: [
      { label: "Book vaccination", value: "book appointment" },
      { label: "Travel vaccines", value: "vaccination" },
      { label: "Child's record", value: "vaccination" },
      { label: "Documents", value: "documents" },
    ],
  },
  certificate: {
    text: "📄 **Medical certificates**\n\nWhat type of certificate do you need?\n\n• 🏃 **Sports certificate** — fitness to practice\n• 🏢 **Sick note** — extension or new\n• ✈️ **Travel certificate** — fitness to fly, vaccines\n• 🚗 **Driving certificate** — medical examination\n• 🏫 **School certificate** — return to school, exemption\n\n**Process:**\n1️⃣ Appointment with doctor (in-person or video)\n2️⃣ Examination / assessment\n3️⃣ Certificate sent by email + patient portal\n\n💡 Some certificates require a mandatory in-person consultation.",
    delay: 2000,
    quickReplies: [
      { label: "Book for certificate", value: "book appointment" },
      { label: "Sports certificate", value: "certificate" },
      { label: "Sick note", value: "certificate" },
      { label: "Video consultation", value: "video consultation" },
    ],
  },
  "treatment follow-up": {
    text: "💊 **Treatment follow-up**\n\n**Your active treatments:**\n\n**1. Levothyrox 75µg**\n• Dosage: 1 tablet in the morning on an empty stomach\n• Reminder: ✅ Daily at 7:30am\n• Next TSH check: 05/15/2026\n\n**2. Metformin 500mg**\n• Dosage: 1 tablet morning + 1 evening with food\n• Reminder: ✅ 8am + 8pm\n• Next HbA1c check: 07/10/2026\n\n**3. Vitamin D 100,000 IU**\n• Dosage: 1 vial/quarter\n• Next dose: 07/01/2026\n\n🔔 **Medication reminders:** active via WhatsApp\n📊 **Adherence:** 94% this month",
    delay: 2400,
    quickReplies: [
      { label: "Renew prescription", value: "prescription" },
      { label: "Modify reminders", value: "treatment follow-up" },
      { label: "Side effects", value: "symptom photo" },
      { label: "Check-up appointment", value: "book appointment" },
    ],
  },
  "symptom photo": {
    text: "📷 **Send symptom photo**\n\nYou can send me a photo for AI pre-analysis:\n\n• Skin lesion / rash\n• Injury / swelling\n• Visible allergic reaction\n• Post-operative development\n\n---\n*Simulation:* 🔍 Analyzing...\n\n✅ **AI Pre-analysis:**\n• Area: Right forearm\n• Observation: Localized redness, 3cm, clear edges\n• Suggestion: Consistent with contact dermatitis\n• Recommendation: Dermatology consultation within 7 days\n\n⚠️ **IMPORTANT: This is NOT a medical diagnosis.**\nOnly a doctor can diagnose after clinical examination.\n\nWould you like to book with the dermatologist?",
    delay: 3000,
    quickReplies: [
      { label: "Book dermatology", value: "book appointment" },
      { label: "Video consultation", value: "video consultation" },
      { label: "Emergency", value: "emergency" },
      { label: "Treatment follow-up", value: "treatment follow-up" },
    ],
  },
  "cancel appointment": {
    text: "📅 **Cancel / Reschedule an appointment**\n\nYour upcoming appointments:\n\n**1. Dr. Martin** — Mon 04/21 at 09:00\n**2. Dr. Leroy** — Tue 04/29 at 3:00pm\n\n**Options:**\n• ❌ **Cancel** — The slot will be freed for another patient\n• 🔄 **Reschedule** — Choose a new slot\n\n⚠️ Please cancel **at least 24 hours in advance**.\nAfter 3 unexplained absences, a 20 EUR penalty may apply.\n\nWhich appointment would you like to modify?",
    delay: 2000,
    quickReplies: [
      { label: "Cancel Dr. Martin", value: "cancel appointment" },
      { label: "Reschedule Dr. Leroy", value: "book appointment" },
      { label: "Book new appointment", value: "book appointment" },
      { label: "Back to home", value: "hello" },
    ],
  },
};

const MEDICAL_KEYWORDS: Record<string, string[]> = {
  hello: ["hello", "hi", "hey", "good morning", "good evening", "howdy"],
  "book appointment": ["appointment", "book", "consultation", "schedule", "slot", "availability"],
  "appointment reminder": ["reminder", "notification", "confirm appointment", "no-show"],
  prescription: ["prescription", "medication", "renewal", "treatment", "tablets"],
  results: ["results", "test", "lab", "blood test", "analysis", "biology"],
  "video consultation": ["video consultation", "telehealth", "remote", "from home", "online", "telemedicine"],
  emergency: ["emergency", "urgent", "999", "112", "serious", "pain", "breathing"],
  hours: ["hours", "opening", "when", "address", "directions", "parking", "tube"],
  documents: ["document", "paperwork", "bring", "first visit", "file"],
  "insurance card": ["insurance", "nhs", "reimbursement", "direct billing", "card"],
  vaccination: ["vaccine", "vaccination", "booster", "flu", "covid", "vaccination record"],
  certificate: ["certificate", "sick note", "sports", "fitness", "medical letter"],
  "treatment follow-up": ["follow-up", "treatment", "adherence", "medication reminder", "side effects"],
  "symptom photo": ["photo", "image", "symptom", "rash", "redness", "send photo", "skin"],
  "cancel appointment": ["cancel", "reschedule", "change appointment", "postpone"],
};

const { intents, keywords } = mergeWithVocalisEN(MEDICAL_INTENTS, MEDICAL_KEYWORDS);

export const medicalConfigEN: SimulatorConfig = {
  botName: "MediAssist AI",
  botAvatar: "M+",
  welcomeMessage:
    "Hello! I'm the AI assistant at **MediAssist** practice 🏥\n\nI can help you with:\n• Booking appointments\n• Renewing a prescription\n• Viewing your results\n• Video consultation\n• Treatment follow-up\n\nHow can I help you?",
  initialQuickReplies: [
    { label: "📅 Book appointment", value: "book appointment" },
    { label: "📹 Video consultation", value: "video consultation" },
    { label: "📝 Prescription", value: "prescription" },
    { label: "🧪 Results", value: "results" },
    { label: "💉 Vaccinations", value: "vaccination" },
    { label: "🚨 Emergency", value: "emergency" },
  ],
  intents,
  keywords,
  fallback: createFallbackEN([
    { label: "Book appointment", value: "book appointment" },
    { label: "Video consultation", value: "video consultation" },
    { label: "Prescription", value: "prescription" },
    { label: "Emergency", value: "emergency" },
    { label: "Vocalis pricing", value: "pricing" },
  ]),
};

export { medicalConfigEN as medicalConfig };
export default medicalConfigEN;
