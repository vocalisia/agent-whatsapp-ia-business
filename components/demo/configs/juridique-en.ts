import type { SimulatorConfig, BotResponse } from "../WhatsAppSimulator";
import { mergeWithVocalisEN, createFallbackEN } from "./vocalis-features-en";

const sectorIntents: Record<string, BotResponse> = {
  hello: {
    text: "Welcome to **JurisAssist**!\n\nI'm your AI legal assistant, available 24/7.\n\nI can help you with:\n- Booking a consultation\n- Identifying your area of law\n- Tracking your case\n- Analysing a legal document\n- Understanding our fees\n- Handling a legal emergency\n\nHow can I assist you?",
    delay: 1400,
    quickReplies: [
      { label: "Book consultation", value: "consultation" },
      { label: "Legal domains", value: "domains" },
      { label: "Case tracking", value: "file tracking" },
      { label: "Emergency", value: "legal emergency" },
    ],
  },
  consultation: {
    text: "**Book a legal consultation**\n\nAvailable slots:\n\n- Monday 10:00am or 3:00pm\n- Tuesday 9:00am or 2:00pm\n- Wednesday 11:00am or 4:00pm\n- Thursday 10:00am or 5:00pm\n- Friday 9:00am or 2:00pm\n\n**Formats:**\n- In office (London, Manchester, Edinburgh)\n- Video call (Zoom / WhatsApp Video)\n- By phone\n\n**First consultation:** 30 minutes free to assess your situation.\n\nWhich slot works for you?",
    delay: 2000,
    quickReplies: [
      { label: "Monday 10am", value: "confirm appointment" },
      { label: "Tuesday 2pm", value: "confirm appointment" },
      { label: "Other slot", value: "consultation" },
      { label: "Our fees", value: "fees" },
    ],
  },
  "confirm appointment": {
    text: "Appointment confirmed!\n\n**Firm:** JurisAssist\n**Format:** Video call (Zoom)\n**Duration:** 30 minutes (free initial consultation)\n\nYou will receive:\n- Immediate WhatsApp confirmation\n- Reminder 24 hours before\n- Zoom link 1 hour before\n\nPlease have any relevant documents ready.\n\nSee you soon!",
    delay: 1800,
    quickReplies: [
      { label: "Prepare documents", value: "documents" },
      { label: "Our fees", value: "fees" },
      { label: "Legal domains", value: "domains" },
    ],
  },
  domains: {
    text: "**Our areas of expertise:**\n\n**Family Law**\n- Divorce, child custody, maintenance, adoption\n\n**Property Law**\n- Tenancy disputes, leasehold, conveyancing\n\n**Commercial Law**\n- Contracts, companies, commercial disputes\n\n**Criminal Law**\n- Criminal defence, police interviews, offences\n\n**Employment Law**\n- Unfair dismissal, harassment, tribunal\n\n**Company Law**\n- Formation, transfers, liquidation\n\nWhich area do you need help with?",
    delay: 2200,
    quickReplies: [
      { label: "Family / Divorce", value: "divorce" },
      { label: "Employment", value: "contract" },
      { label: "Company formation", value: "company creation" },
      { label: "Lease / Property", value: "lease" },
    ],
  },
  fees: {
    text: "**JurisAssist fee schedule**\n\n**Initial consultation** — Free (30 min)\nAssessment of your situation + action plan\n\n**Standard consultation** — £150 / hour\nIn-depth analysis, personalised advice\n\n**Simple matter package** — £800 - £1,500\nFormal notice letter, contract review\n\n**Litigation package** — £2,000 - £5,000\nCourt representation, negotiation\n\n**Business retainer** — Bespoke\nOngoing legal support\n\n**Legal aid** accepted subject to eligibility.\n\nAll fees are confirmed before any engagement.",
    delay: 2200,
    quickReplies: [
      { label: "First consultation", value: "consultation" },
      { label: "Legal aid", value: "legal aid" },
      { label: "Business package", value: "company creation" },
      { label: "Book appointment", value: "consultation" },
    ],
  },
  documents: {
    text: "**Documents to prepare for your case:**\n\n**All matters:**\n- Valid photo ID\n- Proof of address (< 3 months)\n- Timeline of events (if in dispute)\n\n**Depending on the area:**\n- Relevant contract(s)\n- Correspondence (emails, letters)\n- Previous court decisions\n- Evidence (photos, witness statements, invoices)\n\n**AI tip:** Send me a photo of your document and I'll produce an automatic **summary** highlighting the key points.\n\nWhat documents do you have?",
    delay: 2000,
    quickReplies: [
      { label: "Send document", value: "document photo" },
      { label: "Book appointment", value: "consultation" },
      { label: "Deadlines", value: "deadlines" },
      { label: "Case tracking", value: "file tracking" },
    ],
  },
  "file tracking": {
    text: "**Legal case tracking**\n\nEnter your case reference to see real-time status.\n\n**Stages tracked:**\n- Case opened\n- Documents collected\n- Legal analysis\n- Formal notice / Negotiation\n- Court proceedings (if required)\n- Hearing\n- Decision / Judgement\n- Enforcement\n\nYou receive a **WhatsApp notification** at every update.\n\n*Reference format: JUR-2026-XXXX*",
    delay: 1800,
    quickReplies: [
      { label: "Enter reference", value: "file tracking" },
      { label: "Contact my solicitor", value: "consultation" },
      { label: "Missing documents", value: "documents" },
      { label: "Current deadlines", value: "deadlines" },
    ],
  },
  "legal emergency": {
    text: "**Legal Emergency — Immediate assistance**\n\nIf you are in an urgent situation:\n\n**Police arrest** — Right to a solicitor immediately\nCall our 24/7 emergency line\n\n**Imminent eviction** — Legal deadlines to check\nWe can apply for an emergency injunction\n\n**Domestic violence** — 999 + report to police\nEmergency legal support available\n\n**Asset seizure** — Challenge possible within 48h\n\n**Serious accident** — Preserve all evidence\n\nDescribe your situation and a solicitor will call you back within **30 minutes**.",
    delay: 2200,
    quickReplies: [
      { label: "Police arrest", value: "legal emergency" },
      { label: "Eviction", value: "lease" },
      { label: "Immediate callback", value: "consultation" },
      { label: "Legal aid", value: "legal aid" },
    ],
  },
  "document photo": {
    text: "Send me a photo of your legal document and our **AI will automatically analyse**:\n\n- **Summary of key clauses**\n- **Obligations of each party**\n- **Important deadlines and dates**\n- **Potentially unfair terms**\n- **Legal points to watch**\n\nAccepted formats: contract, lease, formal notice, judgement, articles of association, board minutes.\n\nAnalysis takes around 15 seconds. Send your document!",
    delay: 1800,
    quickReplies: [
      { label: "Analyse a contract", value: "contract" },
      { label: "Analyse a lease", value: "lease" },
      { label: "Book a solicitor", value: "consultation" },
      { label: "Fees", value: "fees" },
    ],
  },
  "formal notice": {
    text: "**Formal notice — Procedure**\n\nA formal notice is a letter requiring the recipient to act.\n\n**Steps:**\n1. Identify the dispute and legal basis\n2. Drafted by our legal team\n3. Sent by **recorded delivery**\n4. Response deadline: 8 to 15 days\n5. No response → legal action\n\n**Formal notice package:** £250\nIncludes: drafting + sending + follow-up\n\n**Amicable resolution rate: 65%**\n\nWould you like us to prepare your formal notice?",
    delay: 2000,
    quickReplies: [
      { label: "Yes, proceed", value: "consultation" },
      { label: "Required documents", value: "documents" },
      { label: "How much does it cost", value: "fees" },
      { label: "Legal deadlines", value: "deadlines" },
    ],
  },
  divorce: {
    text: "**Divorce proceedings — Overview**\n\n**Uncontested divorce**\n- Duration: 2 to 4 months\n- Average cost: £1,500 - £3,000\n- Agreement on all: assets, children, maintenance\n- No court hearing required in most cases\n\n**Contested divorce**\n- Duration: 12 to 24 months\n- Application to the Family Court\n- Interim orders possible\n\n**Issues to resolve:**\n- Child custody + contact arrangements\n- Child maintenance\n- Spousal maintenance\n- Division of assets\n- Family home\n\nWould you like a confidential consultation?",
    delay: 2400,
    quickReplies: [
      { label: "Divorce consultation", value: "consultation" },
      { label: "Required documents", value: "documents" },
      { label: "Divorce fees", value: "fees" },
      { label: "Legal aid", value: "legal aid" },
    ],
  },
  "company creation": {
    text: "**Company formation — Support**\n\n**Legal structures:**\n- **Ltd (Private Limited)** — Most common, flexible\n- **LLP** — Professional partnerships\n- **Sole trader** — Simplest structure\n- **PLC** — Large-scale projects\n- **CIC** — Community interest company\n\n**Our support:**\n1. Choosing the right structure\n2. Drafting the articles of association\n3. Companies House registration\n4. Shareholders' agreement (if needed)\n5. Founding contracts\n\n**Formation package:** from £600\nAverage timeline: 7 to 14 days.\n\nWhich structure interests you?",
    delay: 2200,
    quickReplies: [
      { label: "Ltd company", value: "company creation" },
      { label: "LLP", value: "company creation" },
      { label: "Book appointment", value: "consultation" },
      { label: "Fees", value: "fees" },
    ],
  },
  lease: {
    text: "**Tenancy disputes — Your rights**\n\n**Common issues:**\n\n**Rent arrears**\n- Formal notice → Section 8 notice → Possession order\n- Minimum timeline: 2 months after notice\n\n**Inventory disputes**\n- Challenge within 10 days\n- Independent or court-appointed surveyor\n\n**Deposit**\n- Return within 10 days (no deductions) or within 30 days\n- Formal notice if delayed\n\n**Repairs**\n- Tenant vs landlord responsibilities\n- Compliance (decent homes, EPC)\n\n**Notice periods**\n- Assured shorthold: 2 months (Section 21)\n- Fixed term: varies by contract\n\nWhat is your tenancy issue?",
    delay: 2200,
    quickReplies: [
      { label: "Rent arrears", value: "formal notice" },
      { label: "Deposit dispute", value: "formal notice" },
      { label: "Lease consultation", value: "consultation" },
      { label: "Send my lease", value: "document photo" },
    ],
  },
  contract: {
    text: "**Contract review and analysis**\n\nOur AI + solicitors analyse your contract:\n\n**What we check:**\n- Unfair or unbalanced clauses\n- Disproportionate obligations\n- Non-compete clauses\n- Termination conditions\n- Penalties and indemnities\n- Legal compliance\n\n**Contract types:**\n- Employment contracts (permanent, fixed-term, freelance)\n- Commercial agreements\n- Terms & conditions\n- Service contracts\n- Commercial lease\n\n**Review package:** £350\nTimeline: 48 working hours.\n\nSend your contract for analysis!",
    delay: 2000,
    quickReplies: [
      { label: "Send contract", value: "document photo" },
      { label: "Employment contract", value: "contract" },
      { label: "Commercial contract", value: "contract" },
      { label: "Book solicitor", value: "consultation" },
    ],
  },
  deadlines: {
    text: "**Legal deadlines and limitation periods**\n\nBeware of deadlines! After they expire, your rights are lost.\n\n**Employment law:**\n- Unfair dismissal claim: **3 months** (less one day)\n- Unpaid wages: **6 years**\n- Harassment: **6 years**\n\n**Civil law:**\n- Standard limitation period: **6 years**\n- Latent defects (property): **2 years**\n- Construction defects: **6 years**\n\n**Criminal law:**\n- Summary offence: **6 months**\n- Indictable offence: no limit in most cases\n\n**Consumer law:**\n- Online purchase cooling-off: **14 days**\n- Statutory guarantee: **6 years**\n\nCheck your deadlines before it's too late!",
    delay: 2200,
    quickReplies: [
      { label: "Urgent consultation", value: "consultation" },
      { label: "Formal notice", value: "formal notice" },
      { label: "Case tracking", value: "file tracking" },
      { label: "Fees", value: "fees" },
    ],
  },
  "legal aid": {
    text: "**Legal Aid — Eligibility**\n\nLegal aid covers your solicitor's fees.\n\n**Means test (2026):**\n- **Full legal aid**: gross income < £12,475/year\n- **Partial legal aid**: gross income < £22,325/year\n\n**What is covered:**\n- Solicitor fees\n- Barrister fees\n- Expert fees\n- Court costs\n\n**How to apply:**\n1. Complete the legal aid application form\n2. Provide tax returns\n3. Provide proof of income\n4. Submit to the Legal Aid Agency or online\n\nResponse time: 1 to 3 months.\n\nWe help you build your application.",
    delay: 2200,
    quickReplies: [
      { label: "Check eligibility", value: "legal aid" },
      { label: "Build my application", value: "consultation" },
      { label: "Our fees", value: "fees" },
      { label: "Book appointment", value: "consultation" },
    ],
  },
};

const sectorKeywords: Record<string, string[]> = {
  hello: ["hello", "hi", "hey", "good morning", "good evening", "howdy"],
  consultation: [
    "consultation", "appointment", "solicitor", "lawyer", "advisor",
    "meet", "call", "book",
  ],
  domains: [
    "domain", "speciality", "expertise", "practice area", "branch",
    "competence", "which law",
  ],
  fees: [
    "fee", "price", "cost", "how much", "rate",
    "invoice", "pay", "charge",
  ],
  documents: [
    "document", "paper", "proof", "evidence", "file",
    "provide", "prepare",
  ],
  "file tracking": [
    "tracking", "progress", "where is", "reference", "case status",
    "update", "advancement",
  ],
  "legal emergency": [
    "emergency", "urgent", "arrest", "eviction", "seizure",
    "violence", "immediate",
  ],
  "document photo": [
    "photo", "scan", "analyse document", "send document",
    "image contract",
  ],
  "formal notice": [
    "formal notice", "notice", "recorded delivery", "demand letter",
    "injunction", "formal",
  ],
  divorce: [
    "divorce", "separation", "custody", "maintenance",
    "spousal support", "matrimonial",
  ],
  "company creation": [
    "create", "formation", "company", "ltd", "llp",
    "sole trader", "articles", "companies house", "incorporate",
  ],
  lease: [
    "lease", "tenant", "landlord", "rent", "eviction",
    "deposit", "notice period", "tenancy",
  ],
  contract: [
    "contract", "clause", "review", "analyse contract", "terms",
    "conditions", "non-compete", "service agreement",
  ],
  deadlines: [
    "deadline", "limitation", "time limit", "how long",
    "too late", "expired", "statute",
  ],
  "legal aid": [
    "legal aid", "free legal", "no win no fee",
    "covered", "income threshold", "eligibility",
  ],
};

const { intents, keywords } = mergeWithVocalisEN(sectorIntents, sectorKeywords);

export const juridiqueConfigEN: SimulatorConfig = {
  botName: "JurisAssist AI",
  botAvatar: "JA",
  welcomeMessage:
    "Welcome to **JurisAssist**! I'm your AI legal assistant.\n\nI can help you with:\n- Booking a consultation\n- Identifying your area of law\n- Tracking your case\n- Analysing a legal document\n- Understanding our fees\n\nHow can I assist you?",
  initialQuickReplies: [
    { label: "Book consultation", value: "consultation" },
    { label: "Legal domains", value: "domains" },
    { label: "Fees", value: "fees" },
    { label: "Case tracking", value: "file tracking" },
    { label: "Emergency", value: "legal emergency" },
  ],
  intents,
  keywords,
  fallback: createFallbackEN([
    { label: "Book consultation", value: "consultation" },
    { label: "Legal domains", value: "domains" },
    { label: "Case tracking", value: "file tracking" },
    { label: "Vocalis pricing", value: "pricing" },
  ]),
};

export { juridiqueConfigEN as juridiqueConfig };
export default juridiqueConfigEN;
