import type { SimulatorConfig } from "../WhatsAppSimulator";
import { mergeWithVocalisEN, createFallbackEN } from "./vocalis-features-en";

const restaurantIntents = {
  hello: {
    text: "Welcome to **Le Gourmet AI**! I'm your AI assistant.\n\nI can help you with:\n- Booking a table\n- Checking today's menu\n- Ordering takeaway\n- Allergen information\n- Organizing a private event\n\nWhat can I do for you?",
    delay: 1200,
    quickReplies: [
      { label: "Book a table", value: "reservation" },
      { label: "Today's menu", value: "menu" },
      { label: "Order takeaway", value: "order" },
      { label: "Opening hours", value: "hours" },
    ],
  },
  reservation: {
    text: "Let's book your table!\n\nPlease tell me:\n\n**Date:** Which day?\n**Time:** At what time?\n**Guests:** How many people?\n**Preferences:** Terrace, inside, private room, accessibility?\n\nFor example: *\"Saturday 8pm, 4 people, terrace\"*\n\n**Availability this weekend:**\n- Friday: 7:30pm, 8pm, 9pm\n- Saturday: 7pm, 8:30pm, 9:30pm\n- Sunday: 12pm, 12:30pm, 1pm",
    delay: 2000,
    quickReplies: [
      { label: "Saturday 8pm, 4 guests", value: "confirm reservation" },
      { label: "Sunday lunch, 2 guests", value: "confirm reservation" },
      { label: "Other date", value: "other date" },
      { label: "Allergens?", value: "allergens" },
    ],
  },
  "confirm reservation": {
    text: "Reservation confirmed!\n\n**Restaurant:** Le Gourmet AI\n**Date:** Saturday April 19, 2026\n**Time:** 8:00pm\n**Guests:** 4 people\n**Location:** Terrace\n\nYou will receive:\n- Immediate WhatsApp confirmation\n- Reminder the day before at 6pm\n- Reminder 2 hours before\n\nAny special request? Birthday, dietary requirement?",
    delay: 2200,
    quickReplies: [
      { label: "It's a birthday", value: "event" },
      { label: "Vegetarian options?", value: "vegetarian" },
      { label: "Thank you!", value: "thanks" },
    ],
  },
  "other date": {
    text: "Here is our availability for the week:\n\n**Monday:** Closed\n**Tuesday:** 7pm, 8pm, 9pm\n**Wednesday:** 7:30pm, 8:30pm\n**Thursday:** 7pm, 8pm, 9:30pm\n**Friday:** 7:30pm, 8pm, 9pm\n**Saturday:** 7pm, 8:30pm, 9:30pm\n**Sunday:** 12pm, 12:30pm, 1pm\n\nTell me your preference!",
    delay: 1600,
    quickReplies: [
      { label: "Thursday 8pm", value: "confirm reservation" },
      { label: "Friday 9pm", value: "confirm reservation" },
    ],
  },
  menu: {
    text: "Here is **today's menu**:\n\n**Starters:**\n- Butternut velvet soup, toasted hazelnuts — estimation personnalisee\n- Salmon tartare, avocado, citrus — estimation personnalisee\n- Burrata, heirloom tomatoes, pesto — estimation personnalisee\n\n**Mains:**\n- Sea bass fillet, saffron risotto — estimation personnalisee\n- Slow-braised lamb shoulder 7h, truffle mash — estimation personnalisee\n- Porcini mushroom & 24-month Parmesan risotto — estimation personnalisee\n\n**Desserts:**\n- Chocolate fondant, molten core — estimation personnalisee\n- Tarte tatin, crème fraîche — estimation personnalisee\n- Selection of aged cheeses — estimation personnalisee\n\n**Set menu** (starter + main + dessert): **estimation personnalisee**",
    delay: 2400,
    quickReplies: [
      { label: "Wine list", value: "wine list" },
      { label: "Veggie options", value: "vegetarian" },
      { label: "Allergens?", value: "allergens" },
      { label: "Book a table", value: "reservation" },
    ],
  },
  allergens: {
    text: "Allergen information:\n\nOur menu systematically indicates the **14 major allergens**:\n\n- Gluten, Crustaceans, Eggs, Fish\n- Peanuts, Soya, Milk, Tree nuts\n- Celery, Mustard, Sesame, Sulphites\n- Lupin, Molluscs\n\n**Adaptations available:**\n- Gluten-free dishes available\n- Dairy-free options\n- Nut-free dishes on request\n\nPlease specify your allergies when booking and our chef will adapt your menu.",
    delay: 2000,
    quickReplies: [
      { label: "Gluten-free", value: "vegetarian" },
      { label: "Today's menu", value: "menu" },
      { label: "Book a table", value: "reservation" },
    ],
  },
  hours: {
    text: "Our opening hours:\n\n**Tuesday - Friday:**\n- Lunch: 12pm - 2:30pm\n- Dinner: 7pm - 10:30pm\n\n**Saturday:**\n- Dinner only: 7pm - 11pm\n\n**Sunday:**\n- Brunch: 10am - 2pm\n\n**Monday:** Closed\n\n**Address:** 42 Gastronomy Lane, London W1\n**Parking:** Valet available in the evening\n**Wheelchair access:** Yes",
    delay: 1600,
    quickReplies: [
      { label: "Book a table", value: "reservation" },
      { label: "Delivery?", value: "delivery" },
      { label: "How to get here?", value: "hours" },
    ],
  },
  delivery: {
    text: "Delivery options:\n\n**Partner platforms:**\n- **Uber Eats** — Delivery 25-35 min\n- **Deliveroo** — Delivery 20-30 min\n- **Just Eat** — Delivery 30-40 min\n\n**Click & Collect:**\n- Order here, pick up at the restaurant\n- Ready in 20 min\n- -10% on your order\n\n**Direct delivery:**\n- Within 5 km, minimum estimation personnalisee\n- Delivery charge: estimation personnalisee\n- Free above estimation personnalisee\n\nTakeaway menu available 7 days/week, 11:30am - 10pm.",
    delay: 2000,
    quickReplies: [
      { label: "Order takeaway", value: "order" },
      { label: "Today's menu", value: "menu" },
      { label: "Book in-house", value: "reservation" },
    ],
  },
  order: {
    text: "Let's place your takeaway order!\n\nHere are our **best-sellers**:\n\n1. Truffle gourmet burger, homemade fries — estimation personnalisee\n2. Salmon poke bowl, edamame, avocado — estimation personnalisee\n3. Porcini risotto (vegan option available) — estimation personnalisee\n4. Grilled chicken Caesar salad — estimation personnalisee\n5. Beef tartare, shoestring fries — estimation personnalisee\n\n**Lunch deal** (main + drink): estimation personnalisee\n\nTell me what you'd like and I'll calculate the total. Payment by card online or in-store.",
    delay: 2200,
    quickReplies: [
      { label: "Burger + fries", value: "confirm order" },
      { label: "Poke bowl", value: "confirm order" },
      { label: "Full menu", value: "menu" },
      { label: "Allergens?", value: "allergens" },
    ],
  },
  "confirm order": {
    text: "Order placed!\n\n**Summary:**\n- 1x Truffle gourmet burger — estimation personnalisee\n- 1x Homemade fries — included\n\n**Total:** estimation personnalisee\n\n**Collection:** In 20 minutes\n**Address:** 42 Gastronomy Lane, London W1\n\nPayment link sent via WhatsApp.\nYou'll receive a notification when it's ready!",
    delay: 1800,
    quickReplies: [
      { label: "Thank you!", value: "thanks" },
    ],
  },
  "dish photo": {
    text: "Send me a photo of a dish and our **AI Vision** will identify:\n\n- The dish name and composition\n- Estimated calorie count\n- Potential allergens\n- Ideal wine pairing\n\n**Example:**\n*Photo of a risotto* → \"Porcini mushroom risotto, 24-month Parmesan\"\n→ Pairing: Barolo 2019 or Meursault\n\nPerfect for finding a dish you loved or discovering our food-wine pairing suggestion!",
    delay: 2000,
    quickReplies: [
      { label: "Wine list", value: "wine list" },
      { label: "Today's menu", value: "menu" },
      { label: "Book a table", value: "reservation" },
    ],
  },
  review: {
    text: "Your feedback means a great deal to us!\n\n**Leave your review:**\n\n1. **Google** — Direct link sent via WhatsApp\n2. **TripAdvisor** — One click away\n3. **TheFork** — Rate your experience\n\n**In return:**\n- A complimentary dessert on your next visit\n- Enrollment in the loyalty program\n- Invitation to private events\n\nYour satisfaction is our priority. Negative feedback? Our chef calls you personally.",
    delay: 1800,
    quickReplies: [
      { label: "Leave a Google review", value: "review" },
      { label: "Loyalty program", value: "loyalty" },
      { label: "Book again", value: "reservation" },
    ],
  },
  event: {
    text: "Private events at Le Gourmet AI:\n\n**Our spaces:**\n- **Private dining room** — 8-16 people\n- **Vaulted room** — 20-40 people\n- **Private terrace** — 30-60 people\n- **Whole restaurant** — up to 80 people\n\n**Occasions:**\n- Birthdays, weddings, engagements\n- Seminars, team building\n- Business dinners\n\n**Included:**\n- Custom menu by the Chef\n- Personalized decoration\n- Dedicated service\n- DJ / entertainment on request\n\nFrom **estimation personnalisee**. Quote within 24h.",
    delay: 2400,
    quickReplies: [
      { label: "Request a quote", value: "booking" },
      { label: "Custom menu", value: "menu" },
      { label: "Contact chef", value: "contact chef" },
    ],
  },
  loyalty: {
    text: "**Gourmet Club** loyalty program:\n\n**How it works:**\n- estimation personnalisee spent = 1 point\n- 100 points = estimation personnalisee discount\n\n**Member perks:**\n- Complimentary dessert at sign-up\n- -15% on your birthday\n- Priority access to private events\n- Exclusive tastings (wines, seasonal menus)\n- Priority weekend reservations\n\n**Your current balance:** Sign up to start earning!\n\nFree registration, directly here on WhatsApp.",
    delay: 2000,
    quickReplies: [
      { label: "Sign me up", value: "confirm reservation" },
      { label: "Book a table", value: "reservation" },
      { label: "Today's menu", value: "menu" },
    ],
  },
  "wine list": {
    text: "Our **wine list**:\n\n**Whites:**\n- Chablis 1er Cru 2021 — estimation personnalisee value\n- Sancerre, Vacheron Estate — estimation personnalisee value\n- Meursault 2020 — estimation personnalisee value\n\n**Reds:**\n- Saint-Émilion Grand Cru 2018 — estimation personnalisee value\n- Châteauneuf-du-Pape 2019 — estimation personnalisee value\n- Barolo DOCG 2017 — estimation personnalisee value\n\n**Champagnes:**\n- Veuve Clicquot Brut — estimation personnalisee\n- Dom Pérignon 2012 — estimation personnalisee\n- Ruinart Blanc de Blancs — estimation personnalisee\n\n**Food & wine pairing:** Our AI sommelier suggests the perfect match for your menu.",
    delay: 2200,
    quickReplies: [
      { label: "Pair with my dish", value: "dish photo" },
      { label: "Today's menu", value: "menu" },
      { label: "Book a table", value: "reservation" },
    ],
  },
  vegetarian: {
    text: "Vegetarian & vegan options:\n\n**Vegetarian:**\n- Burrata, heirloom tomatoes, pesto — estimation personnalisee\n- Porcini mushroom & Parmesan risotto — estimation personnalisee\n- Homemade gnocchi, sage brown butter sauce — estimation personnalisee\n- Seasonal vegetable tart — estimation personnalisee\n\n**Vegan:**\n- Tofu poke bowl, edamame, avocado — estimation personnalisee\n- Porcini risotto (vegan version) — estimation personnalisee\n- Quinoa Buddha bowl, roasted vegetables — estimation personnalisee\n- Homemade fresh fruit sorbet — estimation personnalisee\n\n**On request:** Our chef adapts any dish on the menu. Please specify when booking!",
    delay: 2000,
    quickReplies: [
      { label: "Allergens?", value: "allergens" },
      { label: "Full menu", value: "menu" },
      { label: "Book a table", value: "reservation" },
    ],
  },
  "cancel reservation": {
    text: "Modify or cancel your reservation:\n\n**To modify:**\n- Provide your name or booking reference\n- New preferred time slot\n- Change in number of guests\n\n**To cancel:**\n- Free cancellation up to 2 hours before\n- After that, a 50% credit is applied\n\n**No-show policy:**\n- 2 no-shows → temporary suspension of online bookings\n\nGive me your name and I'll find your reservation.",
    delay: 1800,
    quickReplies: [
      { label: "Modify my booking", value: "reservation" },
      { label: "New reservation", value: "reservation" },
      { label: "Opening hours", value: "hours" },
    ],
  },
  "contact chef": {
    text: "Message to the Chef:\n\nOur Chef **Marc Dubois** (Michelin star) is here for:\n\n- **Personalized menu** — Events, allergies, preferences\n- **Special request** — Signature dish, off-menu\n- **Cooking classes** — Private sessions (4-8 people)\n- **Catering** — Events at your venue\n\nLeave your message here and the Chef will reply within 24h.\n\nOr book a direct call with him via our calendar.",
    delay: 2000,
    quickReplies: [
      { label: "Custom menu", value: "event" },
      { label: "Cooking class", value: "event" },
      { label: "Book a table", value: "reservation" },
    ],
  },
};

const restaurantKeywords: Record<string, string[]> = {
  hello: ["hello", "hi", "hey", "good morning", "good evening", "howdy"],
  reservation: ["book", "reservation", "table", "cover", "seat", "booking"],
  menu: ["menu", "dish", "starter", "dessert", "set menu", "special", "today's special"],
  allergens: ["allergen", "allergy", "gluten", "lactose", "intoleran", "nut", "peanut"],
  hours: ["hours", "opening", "closed", "open", "when", "address", "parking"],
  delivery: ["delivery", "deliver", "uber", "deliveroo", "just eat"],
  order: ["order", "takeaway", "take-away", "click collect"],
  "dish photo": ["photo", "image", "identify", "recognize", "which dish"],
  review: ["review", "rating", "rate", "stars", "comment", "feedback", "google review"],
  event: ["event", "birthday", "private", "group", "seminar", "wedding", "party", "team building"],
  loyalty: ["loyalty", "points", "program", "club", "reward", "discount"],
  "wine list": ["wine", "bottle", "champagne", "red", "white", "sommelier", "grape"],
  vegetarian: ["vegetarian", "vegan", "veggie", "plant-based", "no meat"],
  "cancel reservation": ["cancel", "cancellation", "modify", "change", "postpone", "no show"],
  "contact chef": ["chef", "kitchen", "cook", "catering", "cooking class", "special request"],
};

const { intents, keywords } = mergeWithVocalisEN(restaurantIntents, restaurantKeywords);

export const restaurantConfigEN: SimulatorConfig = {
  botName: "Le Gourmet AI",
  botAvatar: "LG",
  welcomeMessage:
    "Welcome to **Le Gourmet AI**! I'm your AI assistant.\n\nI can help you with:\n- Booking a table\n- Checking today's menu\n- Ordering takeaway\n- Discovering our wines\n- Organizing an event\n\nWhat would you like?",
  initialQuickReplies: [
    { label: "Book a table", value: "reservation" },
    { label: "Today's menu", value: "menu" },
    { label: "Order takeaway", value: "order" },
    { label: "Wine list", value: "wine list" },
    { label: "Opening hours", value: "hours" },
  ],
  intents,
  keywords,
  fallback: createFallbackEN([
    { label: "Book a table", value: "reservation" },
    { label: "Menu", value: "menu" },
    { label: "Opening hours", value: "hours" },
    { label: "Vocalis pricing", value: "pricing" },
  ]),
};

export { restaurantConfigEN as restaurantConfig };
export default restaurantConfigEN;
