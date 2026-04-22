import type { SimulatorConfig } from "../WhatsAppSimulator";
import { mergeWithVocalisEN, createFallbackEN } from "./vocalis-features-en";

const ECOMMERCE_INTENTS = {
  hello: {
    text: "Hello! Welcome to **ModaChic**!\n\nI'm your personal shopping assistant powered by **Vocalis AI**.\n\nI can help you with your orders, returns, sizing, promotions and much more. How can I help you?",
    delay: 800,
    quickReplies: [
      { label: "Track my order", value: "order tracking" },
      { label: "New customer", value: "catalogue" },
      { label: "Voice cloning", value: "voice cloning" },
      { label: "WhatsApp features", value: "whatsapp features" },
      { label: "AI Telephony", value: "telephony" },
      { label: "Current deals", value: "promo code" },
    ],
  },

  "order tracking": {
    text: "Sure! Here is the status of your last order:\n\n**Order #MC-78432**\n- Black Elegance Dress (M) — 89.90 EUR\n- Camel Leather Bag — 129.00 EUR\n\n**Status:** Out for delivery\n**Carrier:** Colissimo\n**Tracking no:** 8R12345678901\n**Estimated delivery:** Tomorrow before 6pm\n\nAnything else I can help with?",
    delay: 1500,
    quickReplies: [
      { label: "Change address", value: "delivery" },
      { label: "Delivery issue", value: "complaint" },
      { label: "Another order", value: "order tracking" },
      { label: "Back to home", value: "hello" },
    ],
  },

  return: {
    text: "Our **ModaChic** return policy:\n\n- Free return within **30 days**\n- Item unworn, tags intact\n- Size/color exchange at no cost\n\nI just generated your **return label**:\n\n**Label:** RET-MC-2026-04-78432.pdf\n**Nearest drop-off point:** Relais Colis — 12 Commerce Street\n\nDrop off your parcel and your refund will be processed within **3-5 business days**.",
    delay: 1800,
    quickReplies: [
      { label: "Exchange size", value: "size guide" },
      { label: "Track refund", value: "order tracking" },
      { label: "Defective item", value: "product photo" },
      { label: "Back to home", value: "hello" },
    ],
  },

  "size guide": {
    text: "Here is our **ModaChic size guide**:\n\n**Tops & Dresses:**\n- XS: Bust 80-84 cm\n- S: 84-88 cm\n- M: 88-92 cm\n- L: 92-96 cm\n- XL: 96-100 cm\n\n**Trousers:**\n- 36: Waist 64-68 cm\n- 38: 68-72 cm\n- 40: 72-76 cm\n- 42: 76-80 cm\n\n**AI tip:** Send me your measurements and I'll recommend the ideal size for each item!",
    delay: 1400,
    quickReplies: [
      { label: "Recommend my size", value: "size guide" },
      { label: "Browse catalogue", value: "catalogue" },
      { label: "Exchange an item", value: "return" },
      { label: "Back to home", value: "hello" },
    ],
  },

  stock: {
    text: "Checking availability for you...\n\nHere are our **best-sellers in stock**:\n\n- **Black Elegance Dress** — 89.90 EUR (S, M, L)\n- **Parisienne Blazer** — 149.00 EUR (M, L, XL)\n- **Raw Slim Jeans** — 69.90 EUR (36, 38, 40, 42)\n- **Ivory Cashmere Sweater** — 119.00 EUR (S, M) *last pieces!*\n\nWhich item interests you?",
    delay: 1200,
    quickReplies: [
      { label: "Elegance Dress", value: "catalogue" },
      { label: "Parisienne Blazer", value: "catalogue" },
      { label: "Size guide", value: "size guide" },
      { label: "Add to cart", value: "payment" },
    ],
  },

  "product photo": {
    text: "Thank you for the photo! Our **AI is analyzing the image**...\n\n**Analysis result:**\n- Item identified: Black Elegance Dress (ref. MC-REN-042)\n- Defect detected: Unstitched seam at the hem\n- Severity: Manufacturing defect confirmed\n\n**Decision:** Free replacement or full refund\n\nI'm generating your priority return voucher. You'll receive the replacement within **48 hours**!",
    delay: 2500,
    quickReplies: [
      { label: "Replacement", value: "return" },
      { label: "Refund", value: "return" },
      { label: "Other issue", value: "complaint" },
      { label: "Back to home", value: "hello" },
    ],
  },

  "promo code": {
    text: "Here are the **current offers** at ModaChic:\n\n- **SPRING26**: -20% on the new spring collection\n- **WELCOME15**: -15% on your first order\n- **LOYAL10**: -10% for club members (stackable)\n\n**Flash sale:** Up to **-50%** on winter coats — Only 23 items left!\n\nCopy the code and apply it at checkout.",
    delay: 1200,
    quickReplies: [
      { label: "Browse catalogue", value: "catalogue" },
      { label: "Flash sale", value: "stock" },
      { label: "Become a member", value: "after-sales" },
      { label: "Back to home", value: "hello" },
    ],
  },

  delivery: {
    text: "**ModaChic delivery options:**\n\n- **Standard** (3-5 days): Free from 49 EUR\n- **Express** (24h): 5.90 EUR\n- **Pick-up point** (2-4 days): Free from 29 EUR\n- **Same-day Paris**: 9.90 EUR (order before 2pm)\n\n**Zones:** Metropolitan France, Belgium, Switzerland, Luxembourg\n**Tracking:** SMS + email at every step\n\nIs your order currently in progress?",
    delay: 1300,
    quickReplies: [
      { label: "Track my order", value: "order tracking" },
      { label: "Change address", value: "delivery" },
      { label: "International delivery", value: "delivery" },
      { label: "Back to home", value: "hello" },
    ],
  },

  payment: {
    text: "**Accepted payment methods:**\n\n- Credit/debit card (Visa, Mastercard, Amex)\n- PayPal\n- Apple Pay / Google Pay\n- Klarna — Pay in **3 installments, interest-free** from 50 EUR\n- Bank transfer\n- ModaChic gift card\n\n**100% secure payment** (3D Secure, SSL encryption)\n\nNeed help completing your order?",
    delay: 1100,
    quickReplies: [
      { label: "Pay in 3 installments", value: "payment" },
      { label: "Payment issue", value: "complaint" },
      { label: "Gift card", value: "catalogue" },
      { label: "Back to home", value: "hello" },
    ],
  },

  complaint: {
    text: "I'm sorry for the inconvenience. Your satisfaction is our priority.\n\n**Your complaint has been logged:**\n- **Ref:** REC-MC-2026-04-1847\n- **Priority:** High\n- **Response time:** Within 2 hours maximum\n\nA senior advisor will take care of your case. In the meantime, may I offer you a **10 EUR voucher** as a gesture of goodwill?",
    delay: 1600,
    quickReplies: [
      { label: "Accept voucher", value: "promo code" },
      { label: "Speak to a human", value: "human contact" },
      { label: "Send a photo", value: "product photo" },
      { label: "Back to home", value: "hello" },
    ],
  },

  "after-sales": {
    text: "**ModaChic After-Sales Service:**\n\nOur support team is available **7 days a week, 8am to 10pm**.\n\nI can help you with:\n- Order tracking and modifications\n- Returns and exchanges\n- Quality issues\n- Billing and refunds\n- Loyalty program (your points: **2,450 pts** = 24.50 EUR)\n\nWhat would you like to do?",
    delay: 1200,
    quickReplies: [
      { label: "My loyalty points", value: "after-sales" },
      { label: "My invoice", value: "order tracking" },
      { label: "Delete my account", value: "human contact" },
      { label: "Back to home", value: "hello" },
    ],
  },

  review: {
    text: "Thank you for wanting to leave a review! Your feedback helps us enormously.\n\n**Rate your last purchase:**\n- Black Elegance Dress — Order #MC-78432\n\nOn a scale of 1 to 5, how would you rate:\n- Product quality?\n- Delivery speed?\n- Customer service?\n\nSimply reply with 3 numbers (e.g., 5 4 5) and I'll save your review.\n\n**Bonus:** Each review = **50 loyalty points** awarded!",
    delay: 1400,
    quickReplies: [
      { label: "5 5 5", value: "review" },
      { label: "Leave a comment", value: "review" },
      { label: "My points", value: "after-sales" },
      { label: "Back to home", value: "hello" },
    ],
  },

  catalogue: {
    text: "Discover our **ModaChic collections**:\n\n**Spring 2026 New Arrivals:**\n- Provence Floral Dress — 79.90 EUR\n- Natural Linen Blazer — 139.00 EUR\n- Gold Sandals — 59.90 EUR\n\n**Best-sellers:**\n- Black Elegance Dress — 89.90 EUR\n- Raw Slim Jeans — 69.90 EUR\n- Camel Leather Bag — 129.00 EUR\n\n**Code SPRING26** for -20% on new arrivals!\n\nWhich item interests you?",
    delay: 1500,
    quickReplies: [
      { label: "New arrivals", value: "catalogue" },
      { label: "Best-sellers", value: "stock" },
      { label: "Size guide", value: "size guide" },
      { label: "Promo code", value: "promo code" },
    ],
  },

  "abandoned cart": {
    text: "I noticed you have items in your cart!\n\n**Your ModaChic cart:**\n- Parisienne Blazer (M) — 149.00 EUR\n- Bordeaux Silk Scarf — 45.00 EUR\n\n**Total:** 194.00 EUR\n**With SPRING26:** ~~194.00~~ **155.20 EUR** (-20%)\n\nYour code expires in **2 hours**. Would you like to complete your order?",
    delay: 1600,
    quickReplies: [
      { label: "Complete order", value: "payment" },
      { label: "Edit cart", value: "catalogue" },
      { label: "Check sizes", value: "size guide" },
      { label: "Later", value: "hello" },
    ],
  },

  "human contact": {
    text: "Of course, I'm transferring you to a human advisor.\n\n**Transfer in progress...**\n- Estimated wait time: **< 2 minutes**\n- Assigned advisor: **Sophie M.** (e-commerce team)\n- Your conversation history will be shared\n\nWhile you wait, Sophie will have access to:\n- Your order history\n- Your complaint file\n- The solutions already proposed\n\nThank you for your patience!",
    delay: 2000,
    quickReplies: [
      { label: "Call directly", value: "human contact" },
      { label: "Send an email", value: "human contact" },
      { label: "Actually, never mind", value: "hello" },
    ],
  },

  wishlist: {
    text: "Your **ModaChic wishlist**:\n\n1. Camel Wool Coat — 229.00 EUR *(-50% flash sale!)*\n2. Black Chelsea Boots — 119.00 EUR\n3. Grey Cashmere Scarf — 89.00 EUR\n\n**Alert:** The Camel Wool Coat is on sale at **114.50 EUR**! Only 3 left in stock.\n\nWould you like to add it to your cart?",
    delay: 1300,
    quickReplies: [
      { label: "Add to cart", value: "payment" },
      { label: "Browse catalogue", value: "catalogue" },
      { label: "Stock alerts", value: "stock" },
      { label: "Back to home", value: "hello" },
    ],
  },

  "whatsapp campaign": {
    text: "**WhatsApp Campaigns for e-commerce**:\n\nRecover your **abandoned carts** automatically!\n\n**How it works:**\n1. Customer abandons their cart\n2. After 1h → WhatsApp template with reminder + promo code\n3. After 24h → follow-up with exclusive offer\n4. After 48h → last chance + stock urgency\n\n**Average results:**\n- **35% cart recovery** rate\n- **+22% additional monthly revenue**\n- **8x ROI** on message costs\n\nPre-approved Meta templates included.",
    delay: 2200,
    quickReplies: [
      { label: "Meta templates", value: "templates" },
      { label: "Lead scoring", value: "scoring" },
      { label: "Pricing", value: "pricing" },
      { label: "Book a meeting", value: "booking" },
    ],
  },

  "ai support call": {
    text: "**AI Calls for e-commerce support**:\n\nYour voice agent handles support calls automatically:\n\n**Cases handled by AI:**\n- Order tracking by phone\n- Delivery issues\n- Return/exchange requests\n- Level 1 complaints\n- Post-purchase satisfaction surveys\n\n**Benefits:**\n- Available **24/7** with no queue\n- Human transfer for complex cases\n- Automatic transcript + CRM sync\n- Your brand's cloned voice\n\n**-60% load** on your support team.",
    delay: 2400,
    quickReplies: [
      { label: "Voice cloning", value: "voice cloning" },
      { label: "AI telephony", value: "telephony" },
      { label: "CRM integrations", value: "crm" },
      { label: "Pricing", value: "pricing" },
    ],
  },

  "promo template": {
    text: "**Meta Templates for e-commerce promotions**:\n\n**Pre-configured templates:**\n\n1. **Flash sale** — Limited stock alert + countdown\n2. **Personalized promo code** — Name + purchase history\n3. **New collection** — Visuals + catalogue link\n4. **Loyalty** — Accumulated points + reward\n5. **Customer birthday** — Exclusive offer\n\n**Targeted sending:**\n- Segmentation by purchase history\n- Optimal timing by timezone\n- Automatic A/B testing\n\n**WhatsApp open rate: 98%** vs 20% email.",
    delay: 2200,
    quickReplies: [
      { label: "WhatsApp campaign", value: "whatsapp campaign" },
      { label: "Automation", value: "automation" },
      { label: "Pricing", value: "pricing" },
      { label: "Book a meeting", value: "booking" },
    ],
  },
};

const ECOMMERCE_KEYWORDS: Record<string, string[]> = {
  hello: [
    "hello", "hi", "hey", "good morning", "good evening", "howdy",
    "yo", "sup", "greetings",
  ],
  "order tracking": [
    "order", "track", "tracking", "parcel", "where is",
    "delivered", "status", "number", "shipment", "shipped",
    "dispatch", "dispatched", "sent",
  ],
  return: [
    "return", "exchange", "send back", "refund", "money back",
    "return label", "return slip",
  ],
  "size guide": [
    "size", "sizing", "measurement", "measurements", "cm",
    "small", "large", "fitted", "loose", "guide",
  ],
  stock: [
    "stock", "available", "availability", "in stock",
    "remaining", "out of stock", "sold out", "quantity",
  ],
  "product photo": [
    "photo", "image", "defect", "defective", "damaged",
    "broken", "hole", "torn", "stain", "send photo",
    "quality issue",
  ],
  "promo code": [
    "promo", "promotion", "code", "coupon", "discount",
    "offer", "sale", "percent", "deal",
  ],
  delivery: [
    "delivery", "deliver", "shipping", "lead time",
    "carrier", "address", "pick-up point", "pickup",
  ],
  payment: [
    "payment", "pay", "card", "paypal", "transfer",
    "installments", "klarna", "apple pay",
    "secure", "invoice",
  ],
  complaint: [
    "complaint", "issue", "problem", "unhappy",
    "disappointed", "bad", "scam", "unacceptable",
    "not satisfied",
  ],
  "after-sales": [
    "support", "customer service", "after sales", "after-sales",
    "loyalty", "points", "program", "membership",
    "warranty", "assistance",
  ],
  review: [
    "review", "rating", "rate", "evaluate", "evaluation",
    "comment", "feedback", "stars",
    "recommend", "satisfied",
  ],
  catalogue: [
    "catalogue", "catalog", "collection", "new arrival", "product",
    "item", "clothing", "dress", "trousers", "jeans",
    "jacket", "bag", "shoes", "accessory",
    "browse", "explore",
  ],
  "abandoned cart": [
    "cart", "basket", "abandoned", "forgot", "complete",
    "checkout", "finish order",
  ],
  "human contact": [
    "human", "advisor", "agent", "person",
    "phone", "email", "transfer",
    "speak", "someone",
  ],
  wishlist: [
    "wishlist", "favorites", "saved", "list",
    "save for later",
  ],
  "whatsapp campaign": [
    "whatsapp campaign", "cart recovery", "abandoned cart campaign",
    "recover cart",
  ],
  "ai support call": [
    "support call", "phone support", "call support",
    "support line", "hotline",
  ],
  "promo template": [
    "promo template", "promotion template", "promo message",
    "whatsapp promo", "send promotion",
  ],
};

const merged = mergeWithVocalisEN(ECOMMERCE_INTENTS, ECOMMERCE_KEYWORDS);

export const ecommerceConfigEN: SimulatorConfig = {
  botName: "ModaChic",
  botAvatar: "MC",
  welcomeMessage:
    "Welcome to **ModaChic**! I'm your personal shopping assistant powered by **Vocalis AI**.\n\nI can help you with your orders, returns, sizing, promotions and much more. How can I help you?",
  initialQuickReplies: [
    { label: "Track my order", value: "order tracking" },
    { label: "Return / Exchange", value: "return" },
    { label: "Size guide", value: "size guide" },
    { label: "Promo code", value: "promo code" },
    { label: "Browse catalogue", value: "catalogue" },
    { label: "Speak to an advisor", value: "human contact" },
  ],
  intents: merged.intents,
  keywords: merged.keywords,
  fallback: createFallbackEN([
    { label: "Track my order", value: "order tracking" },
    { label: "Size guide", value: "size guide" },
    { label: "Promo code", value: "promo code" },
    { label: "Speak to a human", value: "human contact" },
  ]),
};

export default ecommerceConfigEN;
