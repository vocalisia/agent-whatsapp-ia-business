import type { SimulatorConfig, BotResponse } from "../WhatsAppSimulator";
import { mergeWithVocalisEN, createFallbackEN } from "./vocalis-features-en";

const sectorIntents: Record<string, BotResponse> = {
  hello: {
    text: "Welcome to **HotelLux**! I'm your AI concierge, available 24/7.\n\nI can help you with:\n- Booking a room\n- Organising your check-in / check-out\n- Reserving the spa or restaurant\n- Planning excursions and transfers\n- Concierge services\n\nHow can I make your stay exceptional?",
    delay: 1400,
    quickReplies: [
      { label: "Book a room", value: "reservation" },
      { label: "Our rooms", value: "rooms" },
      { label: "Spa & wellness", value: "spa" },
      { label: "Restaurant", value: "hotel restaurant" },
    ],
  },
  reservation: {
    text: "**Room reservation**\n\nTo find your ideal room, please tell me:\n\n**Dates:** Arrival and departure\n**Type:** Classic, Superior, Junior Suite, Prestige Suite\n**Guests:** Number of adults and children\n**Preferences:** Sea view, high floor, king bed...\n\n**Example:** *\"Prestige Suite sea view, 2 adults, 15–18 May\"*\n\n**WhatsApp booking perks:**\n- Best rate guaranteed\n- Free upgrade subject to availability\n- Late check-out included\n\nWhat are your dates?",
    delay: 2000,
    quickReplies: [
      { label: "View rooms", value: "rooms" },
      { label: "Rates", value: "room rates" },
      { label: "Prestige Suite", value: "rooms" },
      { label: "Group / event", value: "group" },
    ],
  },
  rooms: {
    text: "**Our room categories:**\n\n**Classic** — 28m2\nQueen bed, marble bathroom, minibar\nFrom estimation personnalisee\n\n**Superior** — 35m2\nKing bed, balcony, garden view, safe\nFrom estimation personnalisee\n\n**Junior Suite** — 50m2\nSeparate lounge, jacuzzi bath, panoramic view\nFrom estimation personnalisee\n\n**Prestige Suite** — 75m2\nPrivate terrace, jacuzzi, butler service\nFrom estimation personnalisee\n\n**Penthouse** — 120m2\nDuplex, private pool, private chef\nOn request\n\nAll rooms include breakfast, wifi and spa access.",
    delay: 2400,
    quickReplies: [
      { label: "Book a suite", value: "reservation" },
      { label: "Room photo", value: "room photo" },
      { label: "Seasonal rates", value: "room rates" },
      { label: "Included services", value: "concierge" },
    ],
  },
  "room rates": {
    text: "**Seasonal rate guide**\n\n| Room | Low season | High season | Holidays |\n|------|-----------|------------|----------|\n| Classic | estimation personnalisee| estimation personnalisee| estimation personnalisee|\n| Superior | estimation personnalisee| estimation personnalisee| estimation personnalisee|\n| Junior Suite | estimation personnalisee| estimation personnalisee| estimation personnalisee|\n| Prestige Suite | estimation personnalisee| estimation personnalisee| estimation personnalisee|\n\n**Low season:** Nov – Mar (excl. holidays)\n**High season:** Apr – Oct\n**Holidays:** Christmas, New Year, Easter\n\n**Special offers:**\n- -15% for 5+ nights\n- -10% early booking (60 days)\n- Honeymoon package available\n\nRates per night, breakfast included.",
    delay: 2200,
    quickReplies: [
      { label: "Book now", value: "reservation" },
      { label: "Special package", value: "group" },
      { label: "Spa included?", value: "spa" },
      { label: "Cancellation?", value: "check-out" },
    ],
  },
  "check-in": {
    text: "**Check-in information**\n\n**Standard times:**\n- Check-in: from **3:00pm**\n- Luggage storage available from 8:00am\n\n**Early check-in:**\n- 12:00pm: gain mesure(subject to availability)\n- 10:00am: gain mesure(subject to availability)\n- Guaranteed for Prestige Suite guests\n\n**Express check-in via WhatsApp:**\n1. Send your passport / ID photo\n2. We prepare your digital key\n3. Go straight to your room!\n\n**On arrival:**\n- Complimentary welcome drink\n- Introduction to hotel services\n- Interactive hotel map\n\nWould you like an early check-in?",
    delay: 2000,
    quickReplies: [
      { label: "Early check-in", value: "check-in" },
      { label: "Airport transfer", value: "shuttle" },
      { label: "Parking", value: "parking" },
      { label: "Wifi", value: "wifi" },
    ],
  },
  "check-out": {
    text: "**Check-out information**\n\n**Standard times:**\n- Check-out: before **11:00am**\n- Express check-out: drop your key, invoice by email\n\n**Late check-out:**\n- 1:00pm: free (subject to availability)\n- 3:00pm: gain mesure\n- 6:00pm: gain mesure(half-day rate)\n\n**Cancellation policy:**\n- Flexible: free cancellation 48h before arrival\n- Non-refundable: -15% off the rate\n\n**On departure day:**\n- Breakfast served until 10:30am\n- Free luggage storage\n- Airport transfer on request\n\nNeed a late check-out?",
    delay: 1800,
    quickReplies: [
      { label: "Late check-out", value: "check-out" },
      { label: "Departure transfer", value: "shuttle" },
      { label: "Itemised invoice", value: "check-out" },
      { label: "Extend my stay", value: "reservation" },
    ],
  },
  spa: {
    text: "**Spa & Wellness — HotelLux**\n\n**Relaxation area** (complimentary for residents)\n- Heated indoor pool (28°C)\n- Finnish sauna + hammam\n- 24/7 fitness suite\n\n**Treatments on booking:**\n\n**Relaxing massage** — 60 min — estimation personnalisee\n**Sports massage** — 60 min — estimation personnalisee\n**Premium facial** — 75 min — estimation personnalisee\n**Oriental ritual** — 90 min — estimation personnalisee\n**Couples package** — 120 min — estimation personnalisee\n\n**Opening hours:** 7:00am – 9:00pm\n\nBooking recommended 24h in advance.\n\nWhich treatment interests you?",
    delay: 2200,
    quickReplies: [
      { label: "Book massage", value: "spa" },
      { label: "Couples package", value: "spa" },
      { label: "Pool hours", value: "spa" },
      { label: "Other activities", value: "excursions" },
    ],
  },
  "hotel restaurant": {
    text: "**Restaurant & Room Service**\n\n**The Garden** — Fine dining restaurant\n- Breakfast: 7:00am – 10:30am (included)\n- Lunch: 12:00pm – 2:30pm\n- Dinner: 7:00pm – 10:30pm\n- Award-winning chef, Mediterranean cuisine\n\n**The Terrace Bar** — Cocktails & tapas\n- 11:00am – midnight\n- Happy hour: 5:00pm – 7:00pm\n\n**Room Service** — 24/7\n- Full menu in your room\n- Surcharge: estimation personnalisee\n- Delivery in 30 minutes\n\n**Special menus:**\n- Vegetarian / Vegan\n- Gluten-free\n- Halal / Kosher (48h request)\n\nBook a table?",
    delay: 2200,
    quickReplies: [
      { label: "Book dinner", value: "hotel restaurant" },
      { label: "Room service", value: "hotel restaurant" },
      { label: "Today's menu", value: "hotel restaurant" },
      { label: "Spa after dinner", value: "spa" },
    ],
  },
  excursions: {
    text: "**Excursions & Local activities**\n\n**Half-day:**\n- Guided old town tour — estimation personnalisee\n- Local wine tasting — estimation personnalisee\n- Scenic hike — estimation personnalisee\n\n**Full day:**\n- Coastal cruise + lunch — estimation personnalisee\n- 4x4 hinterland safari — estimation personnalisee\n- Local cooking class — estimation personnalisee\n\n**Premium experiences:**\n- Helicopter coastal flight — estimation personnalisee\n- Scuba diving — estimation personnalisee\n- Private yacht half-day — estimation personnalisee(max 4 people)\n\nBook via WhatsApp, departing from the hotel.\n\nWhich activity appeals to you?",
    delay: 2200,
    quickReplies: [
      { label: "Coastal cruise", value: "excursions" },
      { label: "Wine tasting", value: "excursions" },
      { label: "Activity transfer", value: "shuttle" },
      { label: "Book a room", value: "reservation" },
    ],
  },
  shuttle: {
    text: "**Airport transfer service**\n\n**Private transfer:**\n- Saloon (1–3 people): estimation personnalisee\n- Van (4–7 people): estimation personnalisee\n- Minibus (8–15 people): estimation personnalisee\n\n**Average journey:** 25 minutes (subject to traffic)\n\n**Booking:**\n- Provide your flight number + arrival time\n- Driver waiting with your name sign\n- Live flight tracking\n- Chilled water and fresh towels on board\n\n**Shared shuttle:** estimation personnalisee\n(Departures every hour 6am–10pm)\n\nWould you like to book a transfer?",
    delay: 1800,
    quickReplies: [
      { label: "Arrival transfer", value: "shuttle" },
      { label: "Departure transfer", value: "shuttle" },
      { label: "Hotel parking", value: "parking" },
      { label: "Check-in info", value: "check-in" },
    ],
  },
  parking: {
    text: "**Hotel parking**\n\n**Secure covered parking:**\n- Guests: estimation personnalisee\n- Prestige Suite / Penthouse: complimentary\n- Valet parking available\n\n**Availability:** real-time via WhatsApp\n\n**Electric charging points:**\n- 4 Tesla Supercharger points\n- 2 universal points (Type 2)\n- Free charging for guests\n\n**Open-air parking:** estimation personnalisee\n\nBooking recommended during high season.\n\nNeed a parking space?",
    delay: 1600,
    quickReplies: [
      { label: "Reserve a space", value: "parking" },
      { label: "EV charging", value: "parking" },
      { label: "Airport transfer", value: "shuttle" },
      { label: "Check-in", value: "check-in" },
    ],
  },
  wifi: {
    text: "**Wifi access — HotelLux**\n\n**Free wifi throughout the hotel:**\n- Network: HotelLux-Guest\n- Password: provided at check-in\n- Speed: 100 Mbps\n\n**Premium wifi** (included in Suites):\n- Speed: 500 Mbps\n- Ideal for 4K streaming, video calls, gaming\n- Supplement: estimation personnalisee (other rooms)\n\n**Coverage:**\n- Rooms, lobby, restaurant, pool, spa\n- Conference room (dedicated network)\n\nNeed help connecting?",
    delay: 1400,
    quickReplies: [
      { label: "Connection issue", value: "wifi" },
      { label: "Conference wifi", value: "group" },
      { label: "Other services", value: "concierge" },
      { label: "Room service", value: "hotel restaurant" },
    ],
  },
  pets: {
    text: "**Pet policy**\n\n**Pets welcome!** (dogs and cats)\n\n**Conditions:**\n- Supplement: estimation personnalisee\n- Max weight: 15kg\n- 1 pet per room\n- Up-to-date vaccination record required\n\n**Included services:**\n- Food bowl and cushion in room\n- Welcome treat bag\n- List of nearby vets\n- Walking route around the hotel\n\n**Restrictions:**\n- Pets not permitted in restaurant or spa\n- Garden and terrace access permitted\n\nAre you travelling with a pet?",
    delay: 1800,
    quickReplies: [
      { label: "Book with pet", value: "reservation" },
      { label: "Nearby vet", value: "concierge" },
      { label: "Available rooms", value: "rooms" },
      { label: "Other questions", value: "concierge" },
    ],
  },
  "room photo": {
    text: "Send me a **photo or screenshot** of the room you like and our AI will identify:\n\n- **Matching room type** in our hotel\n- **Real-time availability**\n- **Rate** for your dates\n- **View** (sea, garden, city)\n\nYou can also send a photo from another hotel and we'll suggest the equivalent here!\n\nSend your image!",
    delay: 1600,
    quickReplies: [
      { label: "See our rooms", value: "rooms" },
      { label: "Rates", value: "room rates" },
      { label: "Book", value: "reservation" },
      { label: "Virtual tour", value: "rooms" },
    ],
  },
  concierge: {
    text: "**AI Concierge — At your service 24/7**\n\n**Available services:**\n\n- **Reservations**: restaurants, shows, museums\n- **Transport**: taxi, private car, car hire, helicopter\n- **Shopping**: personal shopper, deliveries\n- **Celebrations**: birthday cake, flowers, champagne\n- **Business**: printing, courier, secretarial support\n- **Health**: doctor, pharmacy, dentist\n- **Children**: babysitting, kids club activities\n\n**Response time:** < 5 minutes\n**Languages:** EN, FR, DE, IT, ES, AR\n\nWhat can I organise for you?",
    delay: 2000,
    quickReplies: [
      { label: "Restaurant in town", value: "hotel restaurant" },
      { label: "Babysitting", value: "concierge" },
      { label: "Birthday celebration", value: "concierge" },
      { label: "Excursions", value: "excursions" },
    ],
  },
  group: {
    text: "**Groups & Events — HotelLux**\n\n**Seminars & Conferences:**\n- 3 rooms (20 to 200 people)\n- Full AV equipment\n- Dedicated high-speed wifi\n- Coffee breaks + lunch included\n- available after audit/day\n\n**Weddings & Receptions:**\n- Panoramic terrace (max 150 guests)\n- Bespoke tasting menu\n- Partner wedding planner\n- Packages available after audit\n\n**Group travel:**\n- Negotiated rates from 10 rooms\n- Local guide included\n- Tailored activity programme\n\nSend us your brief for a quote within 24h.",
    delay: 2400,
    quickReplies: [
      { label: "Seminar quote", value: "group" },
      { label: "Wedding quote", value: "group" },
      { label: "Group rates", value: "room rates" },
      { label: "View event spaces", value: "concierge" },
    ],
  },
};

const sectorKeywords: Record<string, string[]> = {
  hello: ["hello", "hi", "hey", "good morning", "good evening", "howdy"],
  reservation: [
    "book", "reservation", "booking", "room", "stay",
    "night", "availability",
  ],
  rooms: [
    "room", "suite", "penthouse", "category", "room type",
    "classic", "superior", "prestige",
  ],
  "room rates": [
    "room rate", "price per night", "how much per night", "room cost",
    "season", "promotion", "offer",
  ],
  "check-in": [
    "check in", "checkin", "arrival", "early", "key",
    "room key", "when can i arrive",
  ],
  "check-out": [
    "check out", "checkout", "departure", "late", "cancellation",
    "invoice", "bill", "leave",
  ],
  spa: [
    "spa", "massage", "pool", "sauna", "hammam", "treatment",
    "wellness", "relaxation", "fitness",
  ],
  "hotel restaurant": [
    "restaurant", "dinner", "lunch", "room service", "menu",
    "bar", "breakfast", "brunch",
  ],
  excursions: [
    "excursion", "activity", "visit", "tour", "cruise",
    "hike", "diving", "yacht",
  ],
  shuttle: [
    "shuttle", "transfer", "airport", "driver", "taxi", "transport",
  ],
  parking: [
    "parking", "car", "park", "charging", "electric",
    "valet", "garage",
  ],
  wifi: ["wifi", "internet", "connection", "network", "password", "speed"],
  pets: [
    "pet", "pets", "dog", "cat", "animal",
    "vet", "travelling with",
  ],
  "room photo": [
    "room photo", "room image", "see room",
    "virtual tour", "photo of room",
  ],
  concierge: [
    "concierge", "service", "babysitting",
    "birthday", "flowers", "champagne", "help",
  ],
  group: [
    "group", "seminar", "conference", "wedding", "event",
    "reception", "meeting", "team",
  ],
};

const { intents, keywords } = mergeWithVocalisEN(sectorIntents, sectorKeywords);

export const hotelConfigEN: SimulatorConfig = {
  botName: "HotelLux AI",
  botAvatar: "HL",
  welcomeMessage:
    "Welcome to **HotelLux**! I'm your AI concierge, available 24/7.\n\nI can help you with:\n- Booking a room\n- Organising check-in / check-out\n- Reserving the spa or restaurant\n- Planning excursions and transfers\n- Concierge services\n\nHow can I help you?",
  initialQuickReplies: [
    { label: "Book a room", value: "reservation" },
    { label: "Our rooms", value: "rooms" },
    { label: "Spa & wellness", value: "spa" },
    { label: "Restaurant", value: "hotel restaurant" },
    { label: "Concierge", value: "concierge" },
  ],
  intents,
  keywords,
  fallback: createFallbackEN([
    { label: "Book a room", value: "reservation" },
    { label: "Our rooms", value: "rooms" },
    { label: "Spa", value: "spa" },
    { label: "Vocalis pricing", value: "pricing" },
  ]),
};

export { hotelConfigEN as hotelConfig };
export default hotelConfigEN;
