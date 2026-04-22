import type { SimulatorConfig } from "../WhatsAppSimulator";
import { mergeWithVocalisEN, createFallbackEN } from "./vocalis-features-en";

const COACH_INTENTS = {
  hello: {
    text: "Hello! Welcome to **CoachPro**!\n\nI'm your coaching assistant powered by **Vocalis AI**.\n\nI can help you discover our programs, book a free discovery session, or get a personalized assessment. How can I support you?",
    delay: 1200,
    quickReplies: [
      { label: "Programs", value: "programs" },
      { label: "Discovery session", value: "discovery session" },
      { label: "Voice cloning", value: "voice cloning" },
      { label: "WhatsApp features", value: "whatsapp features" },
      { label: "AI Telephony", value: "telephony" },
      { label: "Free assessment", value: "free assessment" },
    ],
  },

  programs: {
    text: "Here are our **3 coaching programs**:\n\n**1. Individual** - Personalized 1-to-1 coaching\n12 x 60-min sessions over 3 months\nWhatsApp follow-up between sessions\n\n**2. Group** - Collective dynamics (6-8 people)\n8 x 90-min sessions over 2 months\nPrivate peer support community\n\n**3. VIP Intensive** - Accelerated transformation\n20 sessions + unlimited WhatsApp access\nCustom action plan + exclusive resources\n\nWhich program interests you?",
    delay: 2000,
    quickReplies: [
      { label: "Pricing", value: "pricing" },
      { label: "Individual program", value: "individual" },
      { label: "VIP program", value: "vip" },
      { label: "Group coaching", value: "group" },
    ],
  },

  "discovery session": {
    text: "Let's book your **free 30-min discovery session**!\n\nUpcoming available slots:\n\n**Monday April 21**: 10am, 2pm, 5pm\n**Wednesday April 23**: 9am, 11am, 4pm\n**Friday April 25**: 10am, 3pm\n\nThe session takes place via video (Zoom) or by phone, your choice.\n\nWhich slot works for you?",
    delay: 1600,
    quickReplies: [
      { label: "Monday 10am", value: "confirm appointment" },
      { label: "Wednesday 11am", value: "confirm appointment" },
      { label: "Friday 3pm", value: "confirm appointment" },
      { label: "Other availability", value: "other slot" },
    ],
  },

  availability: {
    text: "Here is all our **availability** this week:\n\n**Monday**: 9am-12pm / 2pm-6pm\n**Tuesday**: 10am-12pm / 3pm-5pm\n**Wednesday**: 9am-12pm / 2pm-5pm\n**Thursday**: 10am-12pm / 2pm-4pm\n**Friday**: 9am-12pm / 2pm-4pm\n\nSessions last 60 min (30 min for discovery).\n\nI can also suggest evening slots on request.",
    delay: 1500,
    quickReplies: [
      { label: "Book a slot", value: "booking" },
      { label: "Evening session", value: "availability" },
      { label: "Weekend session", value: "availability" },
    ],
  },

  testimonials: {
    text: "Here's what our **clients** say:\n\n**Sophie, 34** - Individual Coaching\n\"In 3 months, I clarified my career change and launched my business. The WhatsApp follow-up between sessions makes all the difference.\"\n\n**Marc, 42** - VIP Program\n\"I doubled my revenue in 6 months. The method is structured and the tools are concrete.\"\n\n**Startup Team (8 people)** - Group Coaching\n\"Our team cohesion was transformed. +40% measured productivity.\"\n\n92% of our clients achieve their goals on schedule.",
    delay: 2200,
    quickReplies: [
      { label: "View programs", value: "programs" },
      { label: "Discovery session", value: "discovery session" },
      { label: "Coaching method", value: "method" },
    ],
  },

  method: {
    text: "Our **CoachPro method** rests on 4 pillars:\n\n**1. Diagnosis** - Full assessment of your situation\nSMART goals, values, identified blocks\n\n**2. Action Plan** - Personalized roadmap\nConcrete steps, success metrics\n\n**3. Coaching** - Sessions + continuous support\nPractical exercises, scientifically validated tools\n\n**4. Anchoring** - Consolidating progress\nLasting habits, progressive autonomy\n\nWe use recognized approaches: NLP, transactional analysis, cognitive-behavioral coaching.",
    delay: 2000,
    quickReplies: [
      { label: "Free assessment", value: "free assessment" },
      { label: "Testimonials", value: "testimonials" },
      { label: "Book a session", value: "booking" },
    ],
  },

  "free assessment": {
    text: "Great choice! The **free assessment** is the first step.\n\nI'll ask you 5 quick questions to evaluate your situation:\n\n**Question 1/5**: In which area would you like to progress?\n\na) Career / change of direction\nb) Leadership / management\nc) Work-life balance\nd) Self-confidence\ne) Starting a business",
    delay: 1800,
    quickReplies: [
      { label: "Career", value: "goal career" },
      { label: "Leadership", value: "goal leadership" },
      { label: "Balance", value: "goal balance" },
      { label: "Confidence", value: "goal confidence" },
      { label: "Entrepreneurship", value: "goal business" },
    ],
  },

  goals: {
    text: "Defining your **goals** is essential for effective coaching.\n\nHere are the areas where we support our clients:\n\n- Career transition\n- New role / leadership\n- Stress management and balance\n- Self-confidence and assertiveness\n- Starting / growing a business\n- Professional relationships\n- Performance and productivity\n\nWhat is your main goal today?",
    delay: 1600,
    quickReplies: [
      { label: "Free assessment", value: "free assessment" },
      { label: "Discovery session", value: "discovery session" },
      { label: "Method", value: "method" },
    ],
  },

  "follow-up": {
    text: "**Between-session support** is our strength!\n\nBetween each session, you benefit from:\n\n- **Unlimited WhatsApp messages** with your AI coach\n- **Practical exercises** sent after each session\n- **Weekly check-in**: quick review of your progress\n- **Automatic reminders** for your action items\n- **Personalized resources** based on your progress\n\nIt's like having a coach available 24/7 to keep your momentum going!",
    delay: 1800,
    quickReplies: [
      { label: "View resources", value: "resources" },
      { label: "Programs", value: "programs" },
      { label: "Book", value: "booking" },
    ],
  },

  resources: {
    text: "Here are the **resources** included in our programs:\n\n**Practical sheets:**\n- Wheel of Life (overall assessment)\n- Eisenhower Matrix (priorities)\n- Personal SWOT\n- 90-day action plan\n\n**Exercises:**\n- Guided gratitude journal\n- Goal visualization\n- Stress management techniques\n\n**Digital tools:**\n- Progress tracking dashboard\n- Planning templates\n- Guided audio meditations\n\nI can send you a **free sample** of the Wheel of Life sheet!",
    delay: 2000,
    quickReplies: [
      { label: "Receive sample", value: "sample" },
      { label: "Discovery session", value: "discovery session" },
      { label: "Programs", value: "programs" },
    ],
  },

  crisis: {
    text: "I understand you're going through a difficult time.\n\n**Important**: I'm an AI assistant and I do not replace a mental health professional.\n\nIf you're in crisis:\n\n- **Samaritans (UK)**: 116 123 (24/7)\n- **Crisis Text Line**: Text HOME to 741741\n- **Emergency services**: 911 / 999 / 112\n\nOur human coach can also call you back quickly. Would you like me to forward your request as a priority?",
    delay: 1400,
    quickReplies: [
      { label: "Request callback", value: "callback urgent" },
      { label: "Thanks, I'm OK", value: "hello" },
    ],
  },

  faq: {
    text: "**Frequently asked questions**:\n\n**How long does coaching last?**\n2 to 6 months depending on the program chosen.\n\n**Video or in-person?**\nBoth! Zoom video call or in-office in Geneva.\n\n**Confidentiality?**\n100% confidential. Encrypted conversations, GDPR compliant.\n\n**Guaranteed results?**\n92% of our clients achieve their goals. Satisfaction or free extension.\n\n**Cancellation?**\nFlexible, rescheduling up to 24h before.\n\nAny other questions?",
    delay: 2000,
    quickReplies: [
      { label: "Pricing", value: "pricing" },
      { label: "Testimonials", value: "testimonials" },
      { label: "Book", value: "booking" },
    ],
  },

  payment: {
    text: "We offer several **payment options**:\n\n**Single payment** - Most cost-effective\nBank transfer, credit card or Twint\n\n**2 installments** - Interest-free\n50% at registration + 50% at mid-program\n\n**3 installments** - Interest-free\n33% at registration + 2 monthly installments\n\n**4 installments** - Interest-free\n25% at registration + 3 monthly installments\n\nProfessional invoice provided (deductible if training).\nExpense reports possible for companies.",
    delay: 1800,
    quickReplies: [
      { label: "Detailed pricing", value: "pricing" },
      { label: "Book", value: "booking" },
      { label: "Tax deductible?", value: "deductible" },
    ],
  },

  group: {
    text: "**Group coaching** is ideal for:\n\n**Corporate teams** (6-8 people)\n- Cohesion and communication\n- Conflict management\n- Collective leadership\n- Shared objectives\n\n**Open groups** (6-8 people)\n- Career transitions\n- Entrepreneurship\n- Personal development\n\n**Format**: 8 x 90-min sessions over 2 months\n**Price**: 890 CHF/person\n**Bonus**: Private WhatsApp community for the group\n\nNext session: **May 2026** - Limited spots!",
    delay: 2000,
    quickReplies: [
      { label: "Join the group", value: "booking" },
      { label: "Individual coaching", value: "individual" },
      { label: "Corporate pricing", value: "pricing" },
    ],
  },

  individual: {
    text: "**Individual coaching** is our flagship program:\n\n**What's included:**\n- 12 x 60-min sessions (weekly)\n- In-depth initial assessment\n- Personalized action plan\n- WhatsApp follow-up between sessions\n- Practical sheets and exercises\n- Final review and consolidation plan\n\n**Who is it for?**\nProfessionals in transition, managers, entrepreneurs, anyone seeking tailored support.\n\n**Duration**: 3 months\n**Price**: 1,800 CHF\n\nStart with a free discovery session!",
    delay: 2000,
    quickReplies: [
      { label: "Discovery session", value: "discovery session" },
      { label: "Compare with VIP", value: "vip" },
      { label: "Testimonials", value: "testimonials" },
    ],
  },

  vip: {
    text: "The **VIP Intensive** program is our premium offer:\n\n**What's included:**\n- 20 x 60-min sessions\n- **Unlimited** WhatsApp access with your coach\n- Full psychometric assessment\n- Custom strategic plan\n- Exclusive resources (masterclasses, tools)\n- 2 post-program follow-up sessions\n- Priority support 7 days/week\n\n**Average results:**\n- +67% measured confidence\n- +45% productivity\n- 94% goals achieved\n\n**Duration**: 6 months\n**Price**: 4,500 CHF (4 installments available)",
    delay: 2200,
    quickReplies: [
      { label: "Book VIP", value: "booking" },
      { label: "Pay in installments", value: "payment" },
      { label: "VIP testimonials", value: "testimonials" },
    ],
  },

  "reactivation campaign": {
    text: "**Reactivation campaigns for coaching**:\n\nRe-engage former clients and dormant leads!\n\n**Automated scenarios:**\n1. **Unconverted lead** → follow-up D+3 with client testimonial\n2. **Completed client** → check-in at 3 months + follow-up offer\n3. **Abandoned registration** → reminder + free discovery session offer\n4. **Warm lead** → nurturing with free content (sheets, exercises)\n\n**Average results:**\n- **28% reactivation** of dormant leads\n- **+40% client retention**\n- **3x more referrals** thanks to automatic follow-up\n\nAll via WhatsApp + pre-approved Meta templates.",
    delay: 2200,
    quickReplies: [
      { label: "WhatsApp features", value: "whatsapp features" },
      { label: "Lead scoring", value: "scoring" },
      { label: "Pricing", value: "pricing" },
      { label: "Book a meeting", value: "booking" },
    ],
  },

  "ai discovery call": {
    text: "**AI discovery call for coaching**:\n\nYour voice agent qualifies prospects automatically:\n\n**AI call flow:**\n1. Personalized welcome (coach's cloned voice)\n2. Qualification questions (goals, budget, availability)\n3. Presentation of the suited program\n4. Discovery session slot proposal\n5. Confirmation via WhatsApp\n\n**Benefits:**\n- Available **24/7** to qualify leads\n- Pre-qualification before human session\n- Automatic CRM + calendar sync\n- **+55% qualified leads** vs web form\n\nThe human coach only speaks to truly motivated prospects!",
    delay: 2400,
    quickReplies: [
      { label: "Voice cloning", value: "voice cloning" },
      { label: "AI telephony", value: "telephony" },
      { label: "Calendar", value: "calendar" },
      { label: "Pricing", value: "pricing" },
    ],
  },

  "website widget": {
    text: "**Web widget for coaching website**:\n\nEmbed an AI assistant directly on your site:\n\n**Features:**\n- **Text chat** for quick questions\n- **Voice call** from the browser\n- **Interactive assessment** directly in the widget\n- **Appointment booking** without leaving the page\n- **Automatic lead capture** in CRM\n\n**Installation:**\n1 JS snippet before `</body>` — 2 minutes flat\n\n**Results:**\n- **+45% conversion** visitor → lead\n- **-70% bounce rate** on pricing page\n- Available 24/7 even when you're in a session\n\nCustomizable with your brand colors.",
    delay: 2200,
    quickReplies: [
      { label: "Widget details", value: "widget" },
      { label: "Automation", value: "automation" },
      { label: "Pricing", value: "pricing" },
      { label: "Book a meeting", value: "booking" },
    ],
  },
};

const COACH_KEYWORDS: Record<string, string[]> = {
  hello: ["hello", "hi", "hey", "good morning", "good evening", "howdy"],
  programs: ["program", "package", "offer", "coaching", "accompaniment", "training"],
  "discovery session": ["discovery session", "free session", "trial session"],
  availability: ["availability", "when", "schedule", "agenda", "planning", "this week"],
  testimonials: ["testimonial", "review", "client feedback", "result", "client", "success", "experience"],
  method: ["method", "approach", "how does it work", "process", "technique", "tool"],
  "free assessment": ["assessment", "diagnosis", "evaluation", "test", "questionnaire"],
  goals: ["goal", "objective", "ambition", "project", "need", "aspiration"],
  "follow-up": ["follow-up", "between sessions", "support", "daily", "ongoing"],
  resources: ["resource", "sheet", "exercise", "document", "worksheet", "practical tool"],
  crisis: ["crisis", "emergency", "distress", "help", "struggling", "depressed", "anxiety", "panic"],
  faq: ["faq", "question", "confidential", "cancel", "cancellation", "duration", "how long", "video", "in-person"],
  payment: ["payment", "pay", "installments", "card", "transfer", "invoice", "monthly"],
  group: ["group", "team", "collective", "corporate", "team building"],
  individual: ["individual", "personal", "private", "one-to-one", "1-to-1"],
  vip: ["vip", "premium", "intensive", "exclusive", "high-end", "complete"],
  "reactivation campaign": ["reactivation campaign", "reactivation", "dormant leads", "nurturing"],
  "ai discovery call": ["ai discovery call", "qualification call", "ai call", "automatic call"],
  "website widget": ["website widget", "site chat", "embed site", "web widget"],
};

const merged = mergeWithVocalisEN(COACH_INTENTS, COACH_KEYWORDS);

export const coachConfigEN: SimulatorConfig = {
  botName: "CoachPro AI",
  botAvatar: "CP",
  welcomeMessage:
    "Welcome to **CoachPro**! I'm your AI assistant powered by **Vocalis AI**.\n\nI can help you:\n- Discover our coaching programs\n- Book a free discovery session\n- Get a personalized assessment\n- Answer all your questions\n\nHow can I support you today?",
  initialQuickReplies: [
    { label: "Programs", value: "programs" },
    { label: "Discovery session", value: "discovery session" },
    { label: "Pricing", value: "pricing" },
    { label: "Free assessment", value: "free assessment" },
  ],
  intents: merged.intents,
  keywords: merged.keywords,
  fallback: createFallbackEN([
    { label: "Programs", value: "programs" },
    { label: "Discovery session", value: "discovery session" },
    { label: "Free assessment", value: "free assessment" },
    { label: "Pricing", value: "pricing" },
  ]),
};

export default coachConfigEN;
