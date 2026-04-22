import type { SimulatorConfig } from "../WhatsAppSimulator";
import { mergeWithVocalisNL, createFallbackNL } from "./vocalis-features-nl";

const ECOMMERCE_INTENTS_NL = {
  hallo: {
    text: "Hallo! Welkom bij **ModaChic**!\n\nIk ben uw persoonlijke shopping-assistent aangedreven door **Vocalis AI**.\n\nIk kan u helpen met uw bestellingen, retours, maten, kortingen en nog veel meer. Hoe kan ik u helpen?",
    delay: 800,
    quickReplies: [
      { label: "Bestelling volgen", value: "bestelling volgen" },
      { label: "Nieuwe klant", value: "catalogus" },
      { label: "Stem klonen", value: "stem klonen" },
      { label: "WhatsApp functies", value: "whatsapp functies" },
      { label: "AI-telefonie", value: "telefonie" },
      { label: "Huidige aanbiedingen", value: "kortingscode" },
    ],
  },

  "bestelling volgen": {
    text: "Natuurlijk! Hier is de status van uw laatste bestelling:\n\n**Bestelling #MC-78432**\n- Zwarte Elegance jurk (M) — 89,90 EUR\n- Kamellederen tas — 129,00 EUR\n\n**Status:** In bezorging\n**Vervoerder:** PostNL\n**Trackingnummer:** 8R12345678901\n**Geschatte levering:** Morgen voor 18u\n\nKan ik u nog ergens anders mee helpen?",
    delay: 1500,
    quickReplies: [
      { label: "Adres wijzigen", value: "bezorging" },
      { label: "Bezorgprobleem", value: "klacht" },
      { label: "Andere bestelling", value: "bestelling volgen" },
      { label: "Terug naar start", value: "hallo" },
    ],
  },

  retour: {
    text: "Ons retourbeleid bij **ModaChic**:\n\n- Gratis retour binnen **30 dagen**\n- Artikel niet gedragen, labels intact\n- Omruilen van maat/kleur gratis\n\nIk heb uw **retourlabel** gegenereerd:\n\n**Label:** RET-MC-2026-04-78432.pdf\n**Dichtstbijzijnd afleverpunt:** PostNL punt — Handelsstraat 12\n\nBezorg uw pakket en de terugbetaling volgt binnen **3-5 werkdagen**.",
    delay: 1800,
    quickReplies: [
      { label: "Maat ruilen", value: "maatgids" },
      { label: "Terugbetaling volgen", value: "bestelling volgen" },
      { label: "Beschadigd artikel", value: "productfoto" },
      { label: "Terug naar start", value: "hallo" },
    ],
  },

  maatgids: {
    text: "Onze **maatgids van ModaChic**:\n\n**Tops & jurken:**\n- XS: Borstomvang 80-84 cm\n- S: 84-88 cm\n- M: 88-92 cm\n- L: 92-96 cm\n- XL: 96-100 cm\n\n**Broeken:**\n- 36: Taille 64-68 cm\n- 38: 68-72 cm\n- 40: 72-76 cm\n- 42: 76-80 cm\n\n**AI-tip:** Stuur uw maten en ik raad de perfecte maat aan voor elk artikel!",
    delay: 1400,
    quickReplies: [
      { label: "Maat aanbevelen", value: "maatgids" },
      { label: "Catalogus bekijken", value: "catalogus" },
      { label: "Artikel omruilen", value: "retour" },
      { label: "Terug naar start", value: "hallo" },
    ],
  },

  voorraad: {
    text: "Ik controleer de beschikbaarheid voor u...\n\nHier zijn de **best-sellers op voorraad**:\n\n- **Zwarte Elegance jurk** — 89,90 EUR (S, M, L)\n- **Parijse blazer** — 149,00 EUR (M, L, XL)\n- **Slim raw denim** — 69,90 EUR (36, 38, 40, 42)\n- **Ivoorwitte kasjmier trui** — 119,00 EUR (S, M) *laatste stuks!*\n\nWelk artikel interesseert u?",
    delay: 1200,
    quickReplies: [
      { label: "Elegance jurk", value: "catalogus" },
      { label: "Parijse blazer", value: "catalogus" },
      { label: "Maatgids", value: "maatgids" },
      { label: "In winkelwagen", value: "betaling" },
    ],
  },

  productfoto: {
    text: "Bedankt voor de foto! Onze **AI analyseert de afbeelding**...\n\n**Analyseresultaat:**\n- Artikel geïdentificeerd: Zwarte Elegance jurk (ref. MC-REN-042)\n- Defect gedetecteerd: Losgeraakte naad bij de zoom\n- Ernst: Bevestigd fabricagefout\n\n**Beslissing:** Gratis vervanging of volledige terugbetaling\n\nIk genereer uw prioriteits-retourbon. U ontvangt de vervanging binnen **48u**!",
    delay: 2500,
    quickReplies: [
      { label: "Vervanging", value: "retour" },
      { label: "Terugbetaling", value: "retour" },
      { label: "Ander probleem", value: "klacht" },
      { label: "Terug naar start", value: "hallo" },
    ],
  },

  kortingscode: {
    text: "Hier zijn de **huidige aanbiedingen** bij ModaChic:\n\n- **LENTE26**: -20% op de nieuwe lentecollectie\n- **WELKOM15**: -15% voor uw eerste bestelling\n- **TROUW10**: -10% voor clubleden (combineerbaar)\n\n**Flash-sale:** Tot **-50%** op winterjassen — Nog slechts 23 stuks!\n\nKopieer de code en voeg hem toe aan uw winkelwagen.",
    delay: 1200,
    quickReplies: [
      { label: "Catalogus bekijken", value: "catalogus" },
      { label: "Flash-sale", value: "voorraad" },
      { label: "Lid worden", value: "klantenservice" },
      { label: "Terug naar start", value: "hallo" },
    ],
  },

  bezorging: {
    text: "**Bezorgopties van ModaChic:**\n\n- **Standaard** (3-5 dagen): Gratis vanaf 49 EUR\n- **Express** (24u): 5,90 EUR\n- **Afhaalpunt** (2-4 dagen): Gratis vanaf 29 EUR\n- **Same-day Amsterdam**: 9,90 EUR (bestelling voor 14u)\n\n**Zones:** Nederland, België, Zwitserland, Luxemburg\n**Tracking:** SMS + e-mail bij elke stap\n\nLoopt uw bestelling al?",
    delay: 1300,
    quickReplies: [
      { label: "Bestelling volgen", value: "bestelling volgen" },
      { label: "Adres wijzigen", value: "bezorging" },
      { label: "Internationale bezorging", value: "bezorging" },
      { label: "Terug naar start", value: "hallo" },
    ],
  },

  betaling: {
    text: "**Geaccepteerde betaalmethoden:**\n\n- Bankkaart (Visa, Mastercard, Amex)\n- PayPal\n- Apple Pay / Google Pay\n- Klarna — Betaling in **3 termijnen** zonder kosten vanaf 50 EUR\n- Bankoverschrijving\n- ModaChic cadeaukaart\n\n**100% veilige betaling** (3D Secure, SSL-versleuteling)\n\nHulp nodig bij het afronden van uw bestelling?",
    delay: 1100,
    quickReplies: [
      { label: "In 3 termijnen betalen", value: "betaling" },
      { label: "Betalingsprobleem", value: "klacht" },
      { label: "Cadeaukaart", value: "catalogus" },
      { label: "Terug naar start", value: "hallo" },
    ],
  },

  klacht: {
    text: "Het spijt me voor dit ongemak. Uw tevredenheid is onze prioriteit.\n\n**Uw klacht is geregistreerd:**\n- **Ref:** REC-MC-2026-04-1847\n- **Prioriteit:** Hoog\n- **Reactietijd:** Binnen maximaal 2u\n\nEen senior adviseur neemt uw dossier over. Mag ik u in de tussentijd een **tegoedbon van 10 EUR** aanbieden als gebaar?",
    delay: 1600,
    quickReplies: [
      { label: "Bon accepteren", value: "kortingscode" },
      { label: "Met medewerker spreken", value: "menselijk contact" },
      { label: "Foto sturen", value: "productfoto" },
      { label: "Terug naar start", value: "hallo" },
    ],
  },

  klantenservice: {
    text: "**ModaChic klantenservice:**\n\nOnze service is beschikbaar **7/7 van 8u tot 22u**.\n\nIk kan u helpen met:\n- Bestelling volgen en wijzigen\n- Retours en omruilingen\n- Kwaliteitsproblemen\n- Facturatie en terugbetalingen\n- Loyaltyprogramma (uw punten: **2.450 pts** = 24,50 EUR)\n\nWat wilt u doen?",
    delay: 1200,
    quickReplies: [
      { label: "Mijn loyaltypunten", value: "klantenservice" },
      { label: "Mijn factuur", value: "bestelling volgen" },
      { label: "Account verwijderen", value: "menselijk contact" },
      { label: "Terug naar start", value: "hallo" },
    ],
  },

  beoordeling: {
    text: "Bedankt voor uw beoordeling! Uw feedback helpt ons enorm.\n\n**Beoordeel uw laatste aankoop:**\n- Zwarte Elegance jurk — Bestelling #MC-78432\n\nGeef op een schaal van 1 tot 5 een cijfer voor:\n- De kwaliteit van het product?\n- De leversnelheid?\n- De klantenservice?\n\nAntwoord simpelweg met 3 cijfers (bijv: 5 4 5) en ik sla uw beoordeling op.\n\n**Bonus:** Elke beoordeling = **50 loyaltypunten**!",
    delay: 1400,
    quickReplies: [
      { label: "5 5 5", value: "beoordeling" },
      { label: "Commentaar achterlaten", value: "beoordeling" },
      { label: "Mijn punten", value: "klantenservice" },
      { label: "Terug naar start", value: "hallo" },
    ],
  },

  catalogus: {
    text: "Ontdek onze **ModaChic collecties**:\n\n**Lente 2026 nieuwkomers:**\n- Bloemen Provence jurk — 79,90 EUR\n- Linnen naturel blazer — 139,00 EUR\n- Gouden sandalen — 59,90 EUR\n\n**Best-sellers:**\n- Zwarte Elegance jurk — 89,90 EUR\n- Slim raw denim — 69,90 EUR\n- Kamellederen tas — 129,00 EUR\n\n**Code LENTE26** voor -20% op nieuwkomers!\n\nWelk artikel interesseert u?",
    delay: 1500,
    quickReplies: [
      { label: "Nieuwkomers", value: "catalogus" },
      { label: "Best-sellers", value: "voorraad" },
      { label: "Maatgids", value: "maatgids" },
      { label: "Kortingscode", value: "kortingscode" },
    ],
  },

  "verlaten winkelwagen": {
    text: "Ik zie dat u nog artikelen in uw winkelwagen heeft!\n\n**Uw ModaChic winkelwagen:**\n- Parijse blazer (M) — 149,00 EUR\n- Bordeaux zijden sjaal — 45,00 EUR\n\n**Totaal:** 194,00 EUR\n**Met LENTE26:** ~~194,00~~ **155,20 EUR** (-20%)\n\nUw code verloopt over **2 uur**. Wilt u uw bestelling afronden?",
    delay: 1600,
    quickReplies: [
      { label: "Bestelling afronden", value: "betaling" },
      { label: "Winkelwagen aanpassen", value: "catalogus" },
      { label: "Maten controleren", value: "maatgids" },
      { label: "Later", value: "hallo" },
    ],
  },

  "menselijk contact": {
    text: "Natuurlijk, ik verbind u door met een medewerker.\n\n**Doorverbinden...**\n- Geschatte wachttijd: **< 2 minuten**\n- Toegewezen adviseur: **Sophie M.** (e-commerce team)\n- Uw gesprekshistorie wordt doorgegeven\n\nSophie heeft toegang tot:\n- Uw bestelhistorie\n- Uw klachtdossier\n- De al voorgestelde oplossingen\n\nBedankt voor uw geduld!",
    delay: 2000,
    quickReplies: [
      { label: "Direct bellen", value: "menselijk contact" },
      { label: "E-mail sturen", value: "menselijk contact" },
      { label: "Toch niet nodig", value: "hallo" },
    ],
  },

  verlanglijst: {
    text: "Uw **ModaChic verlanglijst**:\n\n1. Kamelwollen jas — 229,00 EUR *(- 50% flash-sale!)*\n2. Zwarte Chelsea laarzen — 119,00 EUR\n3. Grijze kasjmier sjaal — 89,00 EUR\n\n**Melding:** De kamelwollen jas is in de aanbieding voor **114,50 EUR**! Nog slechts 3 op voorraad.\n\nWilt u hem aan uw winkelwagen toevoegen?",
    delay: 1300,
    quickReplies: [
      { label: "In winkelwagen", value: "betaling" },
      { label: "Catalogus bekijken", value: "catalogus" },
      { label: "Voorraadmelding", value: "voorraad" },
      { label: "Terug naar start", value: "hallo" },
    ],
  },

  "whatsapp campagne": {
    text: "**WhatsApp campagnes voor e-commerce**:\n\nHerwin automatisch uw **verlaten winkelwagens**!\n\n**Hoe werkt het:**\n1. Klant verlaat winkelwagen\n2. Na 1u → WhatsApp template met herinnering + kortingscode\n3. Na 24u → Herinnering met exclusieve aanbieding\n4. Na 48u → Laatste kans + voorraadurgentie\n\n**Gemiddelde resultaten:**\n- **35% winkelwagen herstel**\n- **+22% maandelijkse omzet**\n- **ROI 8x** op de berichtkosten\n\nVooraf goedgekeurde Meta-templates inbegrepen.",
    delay: 2200,
    quickReplies: [
      { label: "Meta-templates", value: "templates" },
      { label: "Lead scoring", value: "scoring" },
      { label: "Tarieven", value: "prijs" },
      { label: "Afspraak maken", value: "afspraak" },
    ],
  },

  "klantenservice oproep": {
    text: "**AI-oproep voor e-commerce support**:\n\nUw spraakagent behandelt supportgesprekken automatisch:\n\n**Door AI behandelde gevallen:**\n- Bestelling volgen via telefoon\n- Bezorgproblemen\n- Retour-/omruilverzoeken\n- Klachten niveau 1\n- Tevredenheidsonderzoek na aankoop\n\n**Voordelen:**\n- Beschikbaar **24/7** zonder wachtrij\n- Doorverbinden naar mens bij complexe gevallen\n- Automatische transcript + CRM sync\n- Gekloonde merkstem\n\n**-60% werkdruk** op uw supportteam.",
    delay: 2400,
    quickReplies: [
      { label: "Stem klonen", value: "stem klonen" },
      { label: "AI-telefonie", value: "telefonie" },
      { label: "CRM-integraties", value: "crm" },
      { label: "Tarieven", value: "prijs" },
    ],
  },

  "promo template": {
    text: "**Meta-templates voor e-commerce promos**:\n\n**Vooraf geconfigureerde templates:**\n\n1. **Flash-sale** — Beperkte voorraadmelding + aftelling\n2. **Gepersonaliseerde kortingscode** — Naam + aankoophistorie\n3. **Nieuwe collectie** — Visuals + cataloguslink\n4. **Loyaliteit** — Verzamelde punten + beloning\n5. **Klantjubileum** — Exclusieve aanbieding\n\n**Gerichte verzending:**\n- Segmentatie op aankoophistorie\n- Optimale timing per tijdzone\n- Automatisch A/B testen\n\n**WhatsApp-openingspercentage: 98%** vs 20% e-mail.",
    delay: 2200,
    quickReplies: [
      { label: "WhatsApp campagne", value: "whatsapp campagne" },
      { label: "Automatisering", value: "automatisering" },
      { label: "Tarieven", value: "prijs" },
      { label: "Afspraak maken", value: "afspraak" },
    ],
  },
};

const ECOMMERCE_KEYWORDS_NL: Record<string, string[]> = {
  hallo: [
    "hallo", "hoi", "hey", "goedemorgen", "goedenavond", "hi", "hello", "dag",
  ],
  "bestelling volgen": [
    "bestelling", "volgen", "tracking", "pakket", "waar is",
    "bezorgd", "status", "nummer", "track", "verzending", "verzonden",
  ],
  retour: [
    "retour", "terugsturen", "ruilen", "omruil", "terugbrengen",
    "terugbetaling", "terugstorting", "retourlabel",
  ],
  maatgids: [
    "maat", "maten", "afmeting", "afmetingen", "size", "sizing",
    "cm", "klein", "groot", "nauw", "wijd", "gids",
  ],
  voorraad: [
    "voorraad", "beschikbaar", "beschikbaarheid", "op voorraad",
    "uitverkocht", "niet meer", "hoeveel",
  ],
  productfoto: [
    "foto", "afbeelding", "defect", "beschadigd", "kapot",
    "gat", "scheur", "vlek", "foto sturen", "kwaliteitsprobleem",
  ],
  kortingscode: [
    "korting", "aanbieding", "code", "coupon", "reductie",
    "korting", "sale", "uitverkoop", "percentage", "deal",
  ],
  bezorging: [
    "bezorging", "levering", "bezorgtijd", "verzendkosten",
    "vervoerder", "postnl", "adres", "afhaalpunt",
  ],
  betaling: [
    "betaling", "betalen", "kaart", "paypal", "overschrijving",
    "termijnen", "klarna", "apple pay", "beveiligd", "factuur",
  ],
  klacht: [
    "klacht", "probleem", "ontevreden", "niet goed",
    "slecht", "oplichting", "onaanvaardbaar", "klagen",
  ],
  klantenservice: [
    "klantenservice", "dienst", "loyaliteit", "punten", "programma",
    "lid", "garantie", "hulp",
  ],
  beoordeling: [
    "beoordeling", "review", "evalueren", "evaluatie", "beoordelen",
    "commentaar", "feedback", "ster", "aanbevelen", "tevreden",
  ],
  catalogus: [
    "catalogus", "collectie", "nieuw", "product", "artikel",
    "kleding", "jurk", "broek", "jas", "tas", "schoen",
    "bekijken", "bladeren",
  ],
  "verlaten winkelwagen": [
    "winkelwagen", "cart", "verlaten", "vergeten", "afronden",
    "checkout", "valideren", "bestelling voltooien",
  ],
  "menselijk contact": [
    "medewerker", "adviseur", "agent", "persoon",
    "telefoon", "email", "doorverbinden", "spreken",
  ],
  verlanglijst: [
    "verlanglijst", "favorieten", "wensen", "lijst", "bewaren", "later",
  ],
  "whatsapp campagne": [
    "whatsapp campagne", "winkelwagen herstel", "verlaten winkelwagen",
    "herinnering winkelwagen",
  ],
  "klantenservice oproep": [
    "support oproep", "telefonische support", "bel support", "hotline",
  ],
  "promo template": [
    "promo template", "aanbieding template", "promo bericht",
    "whatsapp promo", "verzend promo",
  ],
};

const merged = mergeWithVocalisNL(ECOMMERCE_INTENTS_NL, ECOMMERCE_KEYWORDS_NL);

export const ecommerceConfigNL: SimulatorConfig = {
  botName: "ModaChic",
  botAvatar: "MC",
  welcomeMessage:
    "Welkom bij **ModaChic**! Ik ben uw persoonlijke shopping-assistent aangedreven door **Vocalis AI**.\n\nIk kan u helpen met uw bestellingen, retours, maten, kortingen en nog veel meer. Hoe kan ik u helpen?",
  initialQuickReplies: [
    { label: "Bestelling volgen", value: "bestelling volgen" },
    { label: "Retour / Omruil", value: "retour" },
    { label: "Maatgids", value: "maatgids" },
    { label: "Kortingscode", value: "kortingscode" },
    { label: "Catalogus bekijken", value: "catalogus" },
    { label: "Met adviseur spreken", value: "menselijk contact" },
  ],
  intents: merged.intents,
  keywords: merged.keywords,
  fallback: createFallbackNL([
    { label: "Bestelling volgen", value: "bestelling volgen" },
    { label: "Maatgids", value: "maatgids" },
    { label: "Kortingscode", value: "kortingscode" },
    { label: "Met medewerker spreken", value: "menselijk contact" },
  ]),
};

export default ecommerceConfigNL;
