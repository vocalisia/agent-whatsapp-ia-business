import type { SimulatorConfig } from "../WhatsAppSimulator";
import { mergeWithVocalisNL, createFallbackNL } from "./vocalis-features-nl";

const IMMOBILIER_INTENTS_NL = {
  hallo: {
    text: "Hallo! Welkom bij **ImmoPrestige**.\n\nIk ben uw AI-assistent, 24/7 beschikbaar. Wat zoekt u vandaag?\n\n- Een woning om te kopen of te huren?\n- Een waardebepaling van uw woning?\n- Een afspraak met een agent?",
    delay: 1200,
    quickReplies: [
      { label: "Kopen", value: "woning zoeken" },
      { label: "Huren", value: "huur" },
      { label: "Waardebepaling", value: "waardebepaling" },
      { label: "Afspraak agent", value: "afspraak agent" },
      { label: "AI-telefonie", value: "telefonie" },
      { label: "WhatsApp functies", value: "whatsapp functies" },
    ],
  },
  "woning zoeken": {
    text: "Geweldig, laten we uw gepersonaliseerde zoekopdracht starten.\n\nOm de beste woningen voor u voor te stellen, heb ik enkele criteria nodig:\n\n**Budget:** Wat is uw maximumbudget?\n**Type:** Appartement, huis, villa, loft?\n**Oppervlakte:** Hoeveel m² minimum?\n**Locatie:** Welke stad of wijk?\n**Slaapkamers:** Hoeveel slaapkamers?\n\nBijvoorbeeld: *\"Appartement 3 kamers, 80m², Amsterdam centrum, budget estimation personnalisee\"*",
    delay: 2000,
    quickReplies: [
      { label: "App. Amsterdam < 400K", value: "beschikbaar aanbod" },
      { label: "Huis randgemeente", value: "beschikbaar aanbod" },
      { label: "Studio investering", value: "investering" },
      { label: "Zie beschikbaar aanbod", value: "beschikbaar aanbod" },
    ],
  },
  "woning foto": {
    text: "Stuur me een foto van uw woning en onze **AI Vision** analyseert automatisch:\n\n- Geschatte oppervlakte van de kamers\n- Algemene staat (nieuw / goed / te renoveren)\n- Sterke punten: lichtinval, plafoonhoogte, materialen\n- Architecturale stijl\n- Waardeverhogende suggesties voor verkoop\n\nDe analyse duurt ongeveer 10 seconden. Stuur uw foto!",
    delay: 1800,
    quickReplies: [
      { label: "Waarde bepalen", value: "waardebepaling" },
      { label: "EPC-label", value: "epc" },
      { label: "Te koop zetten", value: "opdracht" },
    ],
  },
  bezichtiging: {
    text: "Laten we uw bezichtiging plannen.\n\n**Beschikbare tijdsloten deze week:**\n\n- Dinsdag 14u - 16u\n- Woensdag 10u - 12u\n- Donderdag 17u - 19u\n- Zaterdag 9u - 12u\n\nWelk tijdslot past u? Ik stuur de bevestiging + het exacte adres + een routebeschrijving via WhatsApp.\n\nU ontvangt ook een herinnering 2u voor de bezichtiging.",
    delay: 1500,
    quickReplies: [
      { label: "Dinsdag 14u", value: "afspraak agent" },
      { label: "Zaterdagochtend", value: "afspraak agent" },
      { label: "Andere tijdsloten", value: "afspraak agent" },
      { label: "Virtuele bezichtiging", value: "virtuele bezichtiging" },
    ],
  },
  waardebepaling: {
    text: "Onze **AI-waardebepaling** kruist gegevens van:\n\n- Prijs per m² in de wijk (real-time)\n- Vergelijkbare recente transacties\n- Staat en uitrusting van de woning\n- Lokale markttrends\n\n**Om uw woning te waarderen, geef aan:**\n1. Adres of wijk\n2. Bewoonbare oppervlakte\n3. Aantal kamers\n4. Verdieping + lift\n5. Bouwjaar\n\n*Gratis schatting in 30 seconden!*",
    delay: 1800,
    quickReplies: [
      { label: "App. 75m² Amsterdam", value: "beschikbaar aanbod" },
      { label: "Huis 120m² Utrecht", value: "beschikbaar aanbod" },
      { label: "Foto sturen", value: "woning foto" },
      { label: "Afspraak waardebepaling", value: "afspraak agent" },
    ],
  },
  financiering: {
    text: "**Simulatie hypotheek**\n\nStandaard parameters:\n- Rente: 4,20% op 25 jaar\n- Aanbevolen eigen inbreng: min. 10%\n- Schuldsaldoverzekering: 0,34%/jaar\n\n**Voorbeeld voor estimation personnalisee:**\n- Maandlast: estimation personnalisee\n- Totale kredietkosten: estimation personnalisee\n- Minimum eigen inbreng: estimation personnalisee\n\nOnze **partnerbanken**: ABN AMRO, ING, Rabobank, Triodos\n\nGeef uw budget op en ik simuleer voor u!",
    delay: 2000,
    quickReplies: [
      { label: "Simuleer 250K", value: "financiering" },
      { label: "Simuleer 400K", value: "financiering" },
      { label: "Contact hypotheekadviseur", value: "afspraak agent" },
      { label: "Vereiste documenten", value: "documenten" },
    ],
  },
  documenten: {
    text: "**Vereiste documenten voor een aankoop:**\n\n**Koper:**\n- Identiteitsbewijs\n- Laatste 3 loonstroken\n- Laatste 2 belastingaangiften\n- Bankafschriften (3 maanden)\n- Bewijs van verblijf\n- Hypotheekbelofte\n\n**Verkoper:**\n- Eigendomsakte\n- Verplichte keuringsrapporten (EPC, asbest, elektriciteit...)\n- Verslagen van de laatste 3 AV's\n- Onroerende voorheffing\n\nIk kan u de volledige checklist via WhatsApp sturen!",
    delay: 1800,
    quickReplies: [
      { label: "Volledige checklist", value: "documenten" },
      { label: "EPC en keuringen", value: "epc" },
      { label: "Aankoopkosten", value: "kosten" },
      { label: "Notaris contacteren", value: "afspraak agent" },
    ],
  },
  opdracht: {
    text: "**Types verkoopopdrachten ImmoPrestige:**\n\n**Eenvoudige opdracht**\n- U behoudt de vrijheid zelf te verkopen\n- Commissie: 4,5% incl. btw\n\n**Exclusieve opdracht** (aanbevolen)\n- Gemiddeld 2x sneller verkoop\n- Commissie: 3,8% incl. btw\n- Professionele foto's + 3D-tour inbegrepen\n- Publicatie op 40+ portalen\n\n**Semi-exclusieve opdracht**\n- U kunt ook via een andere agent verkopen\n- Commissie: 4% incl. btw\n\nDuur: 3 maanden verlengbaar. Welke opdracht interesseert u?",
    delay: 2000,
    quickReplies: [
      { label: "Exclusieve opdracht", value: "afspraak agent" },
      { label: "Eerst waardebepaling", value: "waardebepaling" },
      { label: "Gedetailleerde kosten", value: "kosten" },
      { label: "Afspraak agent", value: "afspraak agent" },
    ],
  },
  wijk: {
    text: "**Wijkanalyse door AI**\n\nGeef de wijk op en ik geef u:\n\n- **Scholen**: crèches, lager, middelbaar (scores + afstand)\n- **Vervoer**: metro, bus, tram, trein (reistijden)\n- **Winkels**: supermarkten, markten, apotheken\n- **Gezondheid**: ziekenhuizen, huisartsen, specialisten\n- **Veiligheid**: buurtstatistieken\n- **Prijs per m²**: evolutie over 5 jaar + trend\n- **Levenskwaliteit**: groene ruimten, geluidshinder\n\n*Voorbeeld: typ \"wijk Jordaan Amsterdam\" of \"wijk Pijp Amsterdam\"*",
    delay: 1800,
    quickReplies: [
      { label: "Amsterdam Centrum", value: "wijk" },
      { label: "Utrecht Oost", value: "wijk" },
      { label: "Rotterdam Noord", value: "wijk" },
      { label: "Woning zoeken", value: "woning zoeken" },
    ],
  },
  "beschikbaar aanbod": {
    text: "**Beschikbare woningen die voldoen aan uw criteria:**\n\n1. **App. 3-kamer — Amsterdam Oost** — 72m²\n   Prijs: estimation personnalisee | estimation personnalisee²\n   2 slpk, balkon, kelder, gerenoveerd\n\n2. **Huis 5-kamer — Amstelveen** — 130m²\n   Prijs: estimation personnalisee | tuin 200m²\n   4 slpk, garage, nabij NS-station\n\n3. **Studio — Amsterdam Centrum** — 28m²\n   Prijs: estimation personnalisee | ideaal als investering\n   Huurrendement: 4,2%\n\n4. **Loft — Haarlem** — 95m²\n   Prijs: estimation personnalisee | industriële stijl\n   Terras 30m², parkeerplaats\n\n5 andere woningen beschikbaar. Welke interesseert u?",
    delay: 2200,
    quickReplies: [
      { label: "Bekijk app. Amsterdam Oost", value: "bezichtiging" },
      { label: "Details huis", value: "bezichtiging" },
      { label: "Zoekopdracht verfijnen", value: "woning zoeken" },
      { label: "Hypotheek simuleren", value: "financiering" },
    ],
  },
  bod: {
    text: "**Een bod doen**\n\nOm uw bod in te dienen, bereid ik het dossier voor:\n\n1. **Betrokken woning**: referentie of adres\n2. **Bodbedrag**: voorgestelde prijs\n3. **Voorwaarden**: lening, termijn, werken...\n4. **Geldigheid**: duur van het bod (standaard 7 dagen)\n\nOnze agent neemt contact met u op binnen **maximaal 2u** ter bevestiging.\n\nHet bod is vrijblijvend tot de ondertekening van de koopbelofte.\n\nKlaar om uw bod in te dienen?",
    delay: 1800,
    quickReplies: [
      { label: "Bod indienen", value: "afspraak agent" },
      { label: "Prijs onderhandelen", value: "afspraak agent" },
      { label: "Financieringsvragen", value: "financiering" },
      { label: "Vereiste documenten", value: "documenten" },
    ],
  },
  "dossier opvolging": {
    text: "**Opvolging van uw transactie**\n\nGeef uw dossiernummer op en ik geef u de real-time status:\n\n**Gevolgde stappen:**\n- Bod geaccepteerd\n- Koopbelofte ondertekend\n- Opschortende voorwaarden (lening, keuringen)\n- Herroepingstermijn (10 dagen)\n- Leningsakte\n- Authentieke akte\n\nU ontvangt een **WhatsApp-melding** bij elke stap.\n\n*Referentieformaat: IMMO-2026-XXXX*",
    delay: 1800,
    quickReplies: [
      { label: "Referentie invoeren", value: "dossier opvolging" },
      { label: "Mijn agent contacteren", value: "afspraak agent" },
      { label: "Ontbrekende documenten", value: "documenten" },
      { label: "Resterende kosten", value: "kosten" },
    ],
  },
  investering: {
    text: "**Vastgoedinvesteringsmogelijkheden**\n\n**Top 3 van de maand:**\n\n1. **Studio Amsterdam Noord** — 22m² — estimation personnalisee\n   Geschatte huur: estimation personnalisee\n   Bruto rendement: **4,6%**\n\n2. **2-kamer Utrecht** — 42m² — estimation personnalisee\n   Geschatte huur: estimation personnalisee\n   Bruto rendement: **4,4%**\n\n3. **1-kamer Rotterdam** — 30m² — estimation personnalisee\n   Geschatte huur: estimation personnalisee\n   Bruto rendement: **4,5%**\n\nWij analyseren: rendement, fiscaliteit, waardestijging, huurvraag.\n\nWelk type investering interesseert u?",
    delay: 2200,
    quickReplies: [
      { label: "Gemeubeld verhuren", value: "investering" },
      { label: "Rendement simuleren", value: "financiering" },
      { label: "Fiscaliteit", value: "kosten" },
    ],
  },
  huur: {
    text: "**Huurwoningen zoeken**\n\nBeschikbare huurwoningen:\n\n1. **2-kamer gemeubeld — Amsterdam Oost** — 45m²\n   Huur: estimation personnalisee\n   Vrij per 1 mei\n\n2. **3-kamer ongemeubeeld — Utrecht** — 68m²\n   Huur: estimation personnalisee\n   Onmiddellijk vrij\n\n3. **Studio — Rotterdam Centrum** — 25m²\n   Huur: estimation personnalisee\n   Vrij per 15 mei\n\n**Huurdersprofiel:** Laatste 3 loonstroken, belastingaangifte, identiteitsbewijs, borg (of huurgarantie).\n\nWelke woning interesseert u?",
    delay: 2000,
    quickReplies: [
      { label: "2-kamer Amsterdam bezichtigen", value: "bezichtiging" },
      { label: "Huurdersprofiel", value: "documenten" },
      { label: "Borg", value: "documenten" },
      { label: "Andere huurwoningen", value: "huur" },
    ],
  },
  epc: {
    text: "**Verplichte keuringsrapporten**\n\n**EPC (Energieprestatiecertificaat):**\n- Label A tot G (F en G = energieslurpers)\n- Verplicht bij verkoop EN verhuur\n- Geldigheid: 10 jaar\n\n**Andere vereiste keuringen:**\n- Asbest (vóór 2001)\n- Elektriciteit\n- Gas\n- Bodem (risicogebieden)\n- Overstromingsrisico\n- Stedenbouwkundige inlichtingen\n\n**Gemiddelde kostprijs volledig pakket:** 350 - estimation personnalisee\n\nOnze partnerkeurders komen binnen 48u langs.",
    delay: 2000,
    quickReplies: [
      { label: "Keuring afspreken", value: "afspraak agent" },
      { label: "Renovatiekosten EPC", value: "waardebepaling" },
      { label: "Renovatiepremies", value: "kosten" },
      { label: "Te koop zetten", value: "opdracht" },
    ],
  },
  "afspraak agent": {
    text: "**Afspraak met een ImmoPrestige agent**\n\nOnze agents zijn beschikbaar:\n- **Maandag - Vrijdag**: 9u - 19u\n- **Zaterdag**: 9u - 17u\n\n**Beschikbare formaten:**\n- Op kantoor (Amsterdam, Utrecht, Rotterdam, Den Haag)\n- Aan huis (straal 30 km)\n- Via video (Zoom / WhatsApp Video)\n- Telefonisch\n\nGeef uw voorkeur op en ik blokkeer een tijdslot.\n\nU ontvangt een bevestiging + automatische herinnering.",
    delay: 1500,
    quickReplies: [
      { label: "Afspraak op kantoor", value: "afspraak agent" },
      { label: "Videoafspraak", value: "afspraak agent" },
      { label: "Terugbelverzoek", value: "afspraak agent" },
      { label: "Eerst woningen bekijken", value: "beschikbaar aanbod" },
    ],
  },
  kosten: {
    text: "**Overzicht aankoopkosten**\n\n**Voor een woning van estimation personnalisee:**\n\n- **Registratierechten**: audit gratuit (8%)\n  - Verkooprecht: estimation personnalisee\n  - Notariskosten: estimation personnalisee\n  - Diverse kosten: estimation personnalisee\n\n- **Makelaarskosten**: estimation personnalisee (3,8%)\n  *(inbegrepen in de weergegeven prijs)*\n\n- **Hypotheekkosten**: audit gratuit\n- **Bankdossierkosten**: audit gratuit\n\n**Totaal te voorzien: audit gratuit**\n\nNieuwe woning = lagere kosten (~3% i.p.v. 8%).",
    delay: 2000,
    quickReplies: [
      { label: "Totale hypotheek simuleren", value: "financiering" },
      { label: "Kosten voor andere prijs", value: "kosten" },
      { label: "Nieuwbouw vs. bestaand", value: "investering" },
      { label: "Notaris contacteren", value: "afspraak agent" },
    ],
  },
  "prospectie campagne": {
    text: "📢 **Kopersprostectiecampagnes**\n\nOnze AI lanceert gerichte outbound campagnes:\n\n**Automatische uitgaande oproepen:**\n• Contact met potentiële kopers vanuit het CRM\n• Kwalificatie budget + criteria in 3 min\n• Voorstel van passende woningen in real-time\n• Automatische bezichtigingsafspraak\n\n**Gebruikte kanalen:**\n• AI-spraakoproep (Dualplex, natuurlijke stem)\n• WhatsApp template na kwalificatie\n• SMS met link naar woningfiche\n\n**Gemeten resultaten:**\n• Gekwalificeerde leads: **+75%**\n• Geplande bezichtigingen: **+50%**\n• Besparing agententijd: **20u/week**\n\nAutomatische retry + antwoordapparaat-detectie inbegrepen.",
    delay: 2400,
    quickReplies: [
      { label: "Hoe werkt het?", value: "campagnes" },
      { label: "CRM-integraties", value: "crm" },
      { label: "Lead scoring", value: "scoring" },
      { label: "Tarieven", value: "prijs" },
    ],
  },
  "verkoper oproep": {
    text: "📞 **AI-oproepen naar potentiële verkopers**\n\nOnze AI-telefonie prospecteert verkopers:\n\n1️⃣ **Detectie** van te verkopen woningen (marktsignalen)\n2️⃣ **Automatische oproep** met kantoorpresentatie\n3️⃣ **Gratis waardebepaling** aangeboden in real-time\n4️⃣ **Verkoopopdracht afspreken** indien geïnteresseerd\n5️⃣ **CRM sync** met alle verzamelde informatie\n\n**Gespreksmodi:**\n• **Pipeline** — Volledige transcriptie voor het dossier\n• **Dualplex** — Natuurlijk gesprek, quasi-menselijk\n• **Overdracht agent** mid-call bij warme verkoper\n\n**Resultaat:** 3x meer exclusieve opdrachten per maand.",
    delay: 2200,
    quickReplies: [
      { label: "AI-telefonie", value: "telefonie" },
      { label: "Stem & talen", value: "stem" },
      { label: "Dashboards", value: "dashboards" },
      { label: "Tarieven", value: "prijs" },
    ],
  },
  "virtuele bezichtiging": {
    text: "🏠 **Virtuele bezichtiging AI**\n\nOnze oplossing combineert **webwidget** + **AI fotoanalyse**:\n\n**Geïntegreerde widget:**\n• Stem- of tekstchat vanuit de woningfiche\n• Koper stelt vragen in real-time\n• AI antwoordt met details van de woning\n• Afspraak fysieke bezichtiging in 1 klik\n\n**AI fotoanalyse:**\n• Stuur foto's van de woning\n• Geschatte oppervlakte per kamer\n• Algemene staat (nieuw / goed / te renoveren)\n• Sterktes automatisch gedetecteerd\n• Waardeverhogende suggesties (homestaging)\n\n**Voordelen:**\n• Pre-kwalificatie kopers vóór fysieke bezichtiging\n• Fysieke bezichtigingen: **-40%** (alleen echte geïnteresseerden)\n• 24/7 beschikbaar zonder agent\n• Meertalig voor internationale kopers",
    delay: 2400,
    quickReplies: [
      { label: "Webwidget", value: "widget" },
      { label: "Foto sturen", value: "woning foto" },
      { label: "Bezichtiging plannen", value: "bezichtiging" },
      { label: "Tarieven", value: "prijs" },
    ],
  },
};

const IMMOBILIER_KEYWORDS_NL: Record<string, string[]> = {
  hallo: [
    "hallo", "hoi", "hey", "goedemorgen", "goedenavond", "hi", "hello",
  ],
  "woning zoeken": [
    "zoeken", "zoek", "vinden", "kopen", "aankoop", "woning",
    "appartement", "huis", "villa", "loft", "duplex", "criteria",
  ],
  "woning foto": [
    "foto", "afbeelding", "analyseren", "foto analyse", "vision", "scannen",
  ],
  bezichtiging: [
    "bezichtiging", "bezichtigen", "woning bekijken", "tijdslot",
  ],
  waardebepaling: [
    "waardebepaling", "waarderen", "waarde", "hoeveel waard", "prijs m²",
    "evalueren", "evaluatie", "prijs per meter",
  ],
  financiering: [
    "hypotheek", "lening", "financiering", "maandlast", "rente",
    "bank", "simuleren", "simulatie", "eigen inbreng",
  ],
  documenten: [
    "document", "papier", "aankoopsdossier", "checklist", "bewijs",
    "loonstrook", "belasting",
  ],
  opdracht: [
    "opdracht", "te koop zetten", "verkopen", "exclusief", "commissie",
    "makelaarsloon",
  ],
  wijk: [
    "wijk", "school", "vervoer", "metro", "winkels", "buurt",
    "omgeving", "nabijheid",
  ],
  "beschikbaar aanbod": [
    "beschikbaar", "aanbod", "voorraad", "catalogus", "nieuw aanbod",
  ],
  bod: [
    "bod", "aanbieden", "onderhandelen", "prijs", "tegenbod",
  ],
  "dossier opvolging": [
    "opvolging", "dossier", "vordering", "status", "referentie",
    "koopbelofte", "akte",
  ],
  investering: [
    "investeren", "investering", "rendement", "verhuur", "verhuurrendement",
    "fiscaliteit",
  ],
  huur: [
    "huren", "huur", "huurder", "huurovereenkomst", "huurprijs", "borg",
    "huurgarantie",
  ],
  epc: [
    "epc", "keuring", "energie", "energieprestatie",
    "asbest", "elektriciteit", "gaskeuring",
  ],
  "afspraak agent": [
    "agent", "adviseur", "kantoor", "ontmoeten",
    "terugbellen", "contact",
  ],
  kosten: [
    "kosten", "notaris", "belasting", "prijs", "registratierechten",
    "makelaarskosten",
  ],
  "prospectie campagne": ["prospectie campagne", "kopersprospectie", "outbound kopers"],
  "verkoper oproep": ["verkoper oproep", "verkopers prospecteren", "contact verkoper"],
  "virtuele bezichtiging": ["virtuele bezichtiging", "virtual tour", "online bezichtiging"],
};

const merged = mergeWithVocalisNL(IMMOBILIER_INTENTS_NL, IMMOBILIER_KEYWORDS_NL);

export const immobilierConfigNL: SimulatorConfig = {
  botName: "ImmoPrestige IA",
  botAvatar: "IP",
  welcomeMessage:
    "Welkom bij **ImmoPrestige**! Ik ben uw AI-vastgoedassistent.\n\nIk kan u helpen met:\n- Een woning zoeken (koop/huur)\n- Een wonningfoto analyseren\n- De waarde van een woning bepalen\n- Een bezichtiging plannen\n- Een hypotheek simuleren\n- Uw dossier opvolgen\n\nHoe kan ik u helpen?",
  initialQuickReplies: [
    { label: "Woning zoeken", value: "woning zoeken" },
    { label: "Mijn woning waarderen", value: "waardebepaling" },
    { label: "Bezichtiging plannen", value: "bezichtiging" },
    { label: "Hypotheek simuleren", value: "financiering" },
    { label: "Beschikbaar aanbod", value: "beschikbaar aanbod" },
  ],
  intents: merged.intents,
  keywords: merged.keywords,
  fallback: createFallbackNL([
    { label: "Woning zoeken", value: "woning zoeken" },
    { label: "Mijn woning waarderen", value: "waardebepaling" },
    { label: "Hypotheek simuleren", value: "financiering" },
    { label: "Afspraak agent", value: "afspraak agent" },
  ]),
};

export default immobilierConfigNL;
