import type { SimulatorConfig, BotResponse } from "../WhatsAppSimulator";
import { mergeWithVocalisEN, createFallbackEN } from "./vocalis-features-en";

const sectorIntents: Record<string, BotResponse> = {
  hello: {
    text: "Welcome to **FitClub**! I'm your AI assistant.\n\nI can help you:\n- Discover our memberships and classes\n- Book a free trial\n- Find a personal coach\n- Track your progress\n\nWhat can I do for you?",
    delay: 1000,
    quickReplies: [
      { label: "Memberships", value: "membership" },
      { label: "Class schedule", value: "classes" },
      { label: "Free trial", value: "free trial" },
      { label: "Personal coach", value: "coach" },
    ],
  },

  membership: {
    text: "Our **FitClub plans**:\n\n**Access** — estimation personnalisee\n- Weights room + cardio access\n- Hours: 6am-10pm\n- Changing rooms + showers\n\n**Premium** — estimation personnalisee\n- Unlimited 24/7 access\n- All group classes included\n- Sauna + steam room\n- 1 body assessment/quarter\n\n**Elite** — estimation personnalisee\n- Everything in Premium\n- 4 personal training sessions/month\n- Personalized nutrition plan\n- AI progress tracking\n\nNo contract required. Which plan interests you?",
    delay: 2000,
    quickReplies: [
      { label: "Free trial", value: "free trial" },
      { label: "Sign up", value: "sign up" },
      { label: "Compare plans", value: "membership" },
      { label: "Opening hours", value: "hours" },
    ],
  },

  classes: {
    text: "**FitClub class schedule** this week:\n\n**Monday**\n- 7:00am — HIIT (45 min) — Coach Julian\n- 12:15pm — Yoga Flow (60 min) — Coach Sarah\n- 6:30pm — CrossFit (50 min) — Coach Max\n\n**Tuesday**\n- 7:30am — Pilates (45 min) — Coach Sarah\n- 12:00pm — Boxing Fit (45 min) — Coach Karim\n- 7:00pm — Body Pump (50 min) — Coach Julian\n\n**Wednesday**\n- 8:00am — Stretching (30 min) — Coach Sarah\n- 5:30pm — Spinning (45 min) — Coach Max\n- 7:30pm — Zumba (50 min) — Coach Lisa\n\nLimited to **20 people** per class.\nWould you like to book?",
    delay: 2200,
    quickReplies: [
      { label: "Book a class", value: "classes" },
      { label: "Weekend classes", value: "classes" },
      { label: "Cancel a class", value: "cancel class" },
      { label: "Personal coach", value: "coach" },
    ],
  },

  "free trial": {
    text: "Great choice! Your **FitClub free trial** includes:\n\n- **1 full day** of unlimited access\n- 1 group class of your choice\n- 1 body assessment with a coach\n- Access to changing rooms + sauna\n\n**Next available slots:**\n- Monday April 21 — 10am or 5pm\n- Tuesday April 22 — 9am or 6pm\n- Wednesday April 23 — 2pm\n\nNo commitment, no payment. Which slot works for you?",
    delay: 1800,
    quickReplies: [
      { label: "Monday 10am", value: "confirm trial" },
      { label: "Tuesday 6pm", value: "confirm trial" },
      { label: "Other slot", value: "free trial" },
      { label: "Questions", value: "hello" },
    ],
  },

  "confirm trial": {
    text: "Trial confirmed!\n\n**Date:** Monday April 21, 2026\n**Time:** 10:00am\n**Duration:** Full day\n**Location:** FitClub — 45 Fitness Avenue\n\n**What to bring:**\n- Sports clothes\n- Towel\n- Water bottle\n- Photo ID\n\nYou will receive:\n- WhatsApp confirmation\n- Reminder the day before\n- Directions\n\nSee you soon!",
    delay: 2000,
    quickReplies: [
      { label: "Thank you!", value: "thanks" },
      { label: "Opening hours", value: "hours" },
    ],
  },

  hours: {
    text: "**FitClub opening hours:**\n\n**Access plan:**\n- Monday-Friday: 6am - 10pm\n- Saturday: 8am - 8pm\n- Sunday: 9am - 6pm\n\n**Premium & Elite plans:**\n- **24/7 access** with key fob\n\n**Reception & coaches:**\n- Monday-Friday: 8am - 9pm\n- Saturday: 9am - 6pm\n- Sunday: 10am - 4pm\n\n**Bank holidays:** Reduced hours (10am-6pm)",
    delay: 1400,
    quickReplies: [
      { label: "Memberships", value: "membership" },
      { label: "Class schedule", value: "classes" },
      { label: "How to get here?", value: "hours" },
      { label: "Free trial", value: "free trial" },
    ],
  },

  coach: {
    text: "Our **certified FitClub coaches**:\n\n**Julian D.** — Weights & HIIT\n- 8 years experience, NSCA certified\n- Speciality: muscle gain, cutting\n- Rating: 4.9/5 (312 reviews)\n\n**Sarah L.** — Yoga & Pilates\n- International trainer, 10 years\n- Speciality: flexibility, posture, wellness\n- Rating: 4.8/5 (287 reviews)\n\n**Max R.** — CrossFit & Functional\n- Former competition athlete, L3 certified\n- Speciality: performance, endurance\n- Rating: 4.9/5 (198 reviews)\n\n**Next availability:** Tomorrow 10am with Julian\n\nWould you like to book a session?",
    delay: 2200,
    quickReplies: [
      { label: "Book Julian", value: "confirm coach" },
      { label: "Book Sarah", value: "confirm coach" },
      { label: "Coaching prices", value: "membership" },
      { label: "Free trial", value: "free trial" },
    ],
  },

  "confirm coach": {
    text: "Coaching session booked!\n\n**Coach:** Julian D.\n**Date:** Tuesday April 22, 2026\n**Time:** 10:00am (60 min)\n**Location:** Private coaching room — FitClub\n\n**Planned program:**\n- Full physical assessment\n- Strength and mobility test\n- Define your goals\n- Personalized training plan\n\nWhatsApp reminder sent the day before.",
    delay: 1800,
    quickReplies: [
      { label: "Thank you!", value: "thanks" },
      { label: "Cancel", value: "cancel class" },
    ],
  },

  nutrition: {
    text: "**FitClub AI Nutrition plan**:\n\nOur AI analyzes your profile and generates a personalized plan:\n\n**Example — Goal: Muscle gain**\n\n**Breakfast:** Scrambled eggs + oats + banana (520 kcal)\n**Snack:** Greek yogurt + almonds (280 kcal)\n**Lunch:** Grilled chicken + brown rice + vegetables (650 kcal)\n**Snack:** Protein shake + berries (320 kcal)\n**Dinner:** Salmon + sweet potato + broccoli (580 kcal)\n\n**Total:** 2,350 kcal | 180g protein\n\nIncluded in the **Elite** plan or as an add-on at **estimation personnalisee**.\n\nWould you like your personalized plan?",
    delay: 2400,
    quickReplies: [
      { label: "My personal plan", value: "nutrition" },
      { label: "Cutting goal", value: "nutrition" },
      { label: "Elite plan", value: "membership" },
      { label: "Nutrition coach", value: "coach" },
    ],
  },

  "progress photo": {
    text: "Thank you for your photo! **AI analysis in progress**...\n\n**Body analysis result:**\n\n- **Estimated body fat:** 18.5% (-2.3% vs last month)\n- **Muscle mass:** Visible progress at shoulders and arms\n- **Posture:** Improved spinal alignment\n- **Progress score:** 78/100 (+12 pts)\n\n**AI recommendation:**\n- Increase leg volume\n- Maintain current cardio\n- Add core exercises\n\nNext photo recommended in **4 weeks**.\nKeep it up!",
    delay: 2800,
    quickReplies: [
      { label: "Photo history", value: "progress photo" },
      { label: "Adjust program", value: "coach" },
      { label: "Nutrition plan", value: "nutrition" },
      { label: "Back to home", value: "hello" },
    ],
  },

  "cancel class": {
    text: "Class cancellation:\n\n**Your active bookings:**\n1. HIIT — Monday April 21, 7:00am (Coach Julian)\n2. Yoga Flow — Wednesday April 23, 12:15pm (Coach Sarah)\n\n**Cancellation policy:**\n- Free until **2 hours before** the class\n- After: 1 credit deducted\n- 3 no-shows = 1 week suspension\n\nWhich class would you like to cancel?",
    delay: 1600,
    quickReplies: [
      { label: "Cancel HIIT Monday", value: "confirm cancel" },
      { label: "Cancel Yoga Wednesday", value: "confirm cancel" },
      { label: "Keep my classes", value: "classes" },
    ],
  },

  "confirm cancel": {
    text: "Class successfully cancelled!\n\n**HIIT — Monday April 21, 7:00am** has been removed from your bookings.\n\nYour spot has been freed for another member.\n\nWould you like to book another slot?",
    delay: 1200,
    quickReplies: [
      { label: "Book another", value: "classes" },
      { label: "Back to home", value: "hello" },
    ],
  },

  referral: {
    text: "**FitClub Referral Program**:\n\nRefer your friends and earn rewards!\n\n**For you (referrer):**\n- **1 free month** for each referred member\n- Unlimited stacking\n- Bonus: FitClub water bottle at 3rd referral\n\n**For your friend:**\n- **-50%** on the first month\n- 1 free coaching session\n- Free body assessment\n\n**Your referral link:**\nfitclub.com/referral/FC-78432\n\n**Active referrals:** 2 (2 free months accumulated)\n\nShare the link on WhatsApp!",
    delay: 2000,
    quickReplies: [
      { label: "Share the link", value: "referral" },
      { label: "My rewards", value: "referral" },
      { label: "Memberships", value: "membership" },
      { label: "Back to home", value: "hello" },
    ],
  },

  equipment: {
    text: "**FitClub equipment & facilities**:\n\n**Weights area:**\n- 40+ latest-gen Technogym machines\n- Free weights area (1-50 kg)\n- Squat rack, bench press, cable machines\n\n**Cardio:**\n- 25 treadmills, bikes, ellipticals\n- Concept2 rowing machines\n- Individual screens with Netflix/YouTube\n\n**Spaces:**\n- 2 group class studios (150m2 each)\n- Private coaching room\n- CrossFit functional zone\n- Stretching area\n\n**Comfort:**\n- Premium changing rooms with secure lockers\n- Filtered water fountains\n- Free Wi-Fi\n- Underground car park, 50 spaces",
    delay: 2200,
    quickReplies: [
      { label: "Sauna & spa", value: "sauna" },
      { label: "Virtual tour", value: "equipment" },
      { label: "Free trial", value: "free trial" },
      { label: "Memberships", value: "membership" },
    ],
  },

  sauna: {
    text: "**FitClub Wellness Area**:\n\nIncluded in **Premium** and **Elite** plans:\n\n- **Finnish sauna** — 80-90°C, 15-min sessions\n- **Steam room** — Eucalyptus vapor, ideal post-workout\n- **Sensory showers** — Alternating cold/warm water\n- **Relaxation lounge** — Sun loungers, complimentary herbal teas\n\n**Wellness hours:**\n- Monday-Friday: 8am - 9pm\n- Saturday-Sunday: 9am - 7pm\n\n**Benefits:** Muscle recovery, toxin elimination, deep relaxation.\n\nDrop-in access for Access members: **estimation personnalisee**.",
    delay: 1800,
    quickReplies: [
      { label: "Upgrade to Premium", value: "membership" },
      { label: "Gym equipment", value: "equipment" },
      { label: "Free trial", value: "free trial" },
      { label: "Back to home", value: "hello" },
    ],
  },

  "sign up": {
    text: "**FitClub sign-up — Quick and easy!**\n\n**Steps:**\n1. Choose your plan (Access, Premium, Elite)\n2. Fill in the online form (2 min)\n3. Sign the digital contract\n4. Secure payment (card, direct debit, Apple Pay)\n5. Receive your access key fob by email\n\n**Documents needed:**\n- Photo ID\n- Bank details (if direct debit)\n- Medical clearance (less than 1 year old)\n\n**Sign-up bonus:** Free body assessment + 1 introductory coaching session!\n\nReady to join?",
    delay: 2000,
    quickReplies: [
      { label: "Sign up now", value: "sign up" },
      { label: "Free trial first", value: "free trial" },
      { label: "Compare plans", value: "membership" },
      { label: "Questions", value: "hello" },
    ],
  },

  freeze: {
    text: "**FitClub membership freeze / pause**:\n\n**Conditions:**\n- Pause available after **3 months** of membership\n- Duration: **1 to 3 months** maximum\n- Freeze fee: **estimation personnalisee**\n- Supporting document required: travel, injury, illness\n\n**To freeze your membership:**\n1. Send your supporting document here\n2. State the desired duration\n3. Confirmation within 24 hours\n\nYour membership resumes automatically on the planned date.\n\nWould you like to proceed?",
    delay: 1800,
    quickReplies: [
      { label: "Freeze 1 month", value: "freeze" },
      { label: "Freeze 3 months", value: "freeze" },
      { label: "Cancel membership", value: "freeze" },
      { label: "Back to home", value: "hello" },
    ],
  },

  renewal: {
    text: "**FitClub renewal**:\n\n**Your current membership:**\n- Plan: Premium (estimation personnalisee)\n- Since: January 2026\n- Next payment: May 1st 2026\n\n**Annual renewal offer:**\n- **estimation personnalisee** instead of estimation personnalisee (-17%)\n- Equivalent to **estimation personnalisee**\n- 2 months free\n- Bonus coaching session each quarter\n\nRenewal is automatic unless cancelled **30 days** before the renewal date.",
    delay: 1800,
    quickReplies: [
      { label: "Switch to annual", value: "renewal" },
      { label: "Change plan", value: "membership" },
      { label: "Freeze membership", value: "freeze" },
      { label: "Back to home", value: "hello" },
    ],
  },
};

const sectorKeywords: Record<string, string[]> = {
  hello: ["hello", "hi", "hey", "good morning", "good evening", "howdy"],
  membership: ["membership", "plan", "subscription", "member", "join", "sign up", "pricing gym"],
  classes: ["class", "schedule", "group", "hiit", "yoga", "pilates", "crossfit", "spinning", "zumba", "boxing", "body pump", "stretching", "group session"],
  "free trial": ["trial", "free", "test", "try", "discovery", "day pass"],
  hours: ["hours", "opening", "open", "closed", "24h", "sunday", "access"],
  coach: ["coach", "trainer", "personal trainer", "coaching", "personal", "individual", "private"],
  nutrition: ["nutrition", "diet", "calories", "protein", "meal", "food", "macro", "weight"],
  "progress photo": ["photo", "progress", "before after", "transformation", "evolution", "body assessment", "body"],
  "cancel class": ["cancel", "cancellation", "unregister", "remove"],
  referral: ["referral", "refer", "friend", "recommend", "invite"],
  equipment: ["equipment", "machine", "gear", "gym floor", "weights", "treadmill", "bike"],
  sauna: ["sauna", "steam room", "spa", "wellness", "relaxation", "recovery"],
  "sign up": ["sign up", "register", "join", "start", "key fob", "membership card"],
  freeze: ["freeze", "pause", "suspend", "cancel", "cancellation", "quit", "leave"],
  renewal: ["renewal", "renew", "annual", "extend", "contract", "expiry"],
};

const merged = mergeWithVocalisEN(sectorIntents, sectorKeywords);

export const fitnessConfigEN: SimulatorConfig = {
  botName: "FitClub AI",
  botAvatar: "FC",
  welcomeMessage:
    "Welcome to **FitClub**! I'm your AI assistant.\n\nI can help with memberships, classes, coaching, nutrition and much more.\n\nHow can I help you?",
  initialQuickReplies: [
    { label: "Memberships", value: "membership" },
    { label: "Class schedule", value: "classes" },
    { label: "Free trial", value: "free trial" },
    { label: "Personal coach", value: "coach" },
    { label: "AI Nutrition", value: "nutrition" },
    { label: "Referral program", value: "referral" },
  ],
  intents: merged.intents,
  keywords: merged.keywords,
  fallback: createFallbackEN([
    { label: "Memberships", value: "membership" },
    { label: "Class schedule", value: "classes" },
    { label: "Personal coach", value: "coach" },
    { label: "Free trial", value: "free trial" },
  ]),
};

export { fitnessConfigEN as fitnessConfig };
export default fitnessConfigEN;
