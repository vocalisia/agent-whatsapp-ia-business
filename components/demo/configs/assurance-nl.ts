import type { SimulatorConfig } from "../WhatsAppSimulator";
import { mergeWithVocalisNL, createFallbackNL } from "./vocalis-features-nl";

const ASSURANCE_INTENTS_NL = {
  hallo: {
    text: "Hallo! Welkom bij **AssurPlus**.\n\nIk ben uw AI-assistent, 24/7 beschikbaar voor al uw verzekeringszaken.\n\nWat kan ik voor u doen?",
    delay: 1200,
    quickReplies: [
      { label: "Schade melden", value: "schade melden" },
      { label: "Auto offerte", value: "offerte auto" },
      { label: "Mijn dossier", value: "dossier opvolging" },
      { label: "Met adviseur spreken", value: "afspraak adviseur" },
      { label: "AI-telefonie", value: "telefonie" },
      { label: "WhatsApp functies", value: "whatsapp functies" },
    ],
  },
  "schade melden": {
    text: "Ik begeleid u stap voor stap bij het melden van uw schade.\n\n**Stap 1/4** — Type schade:\n\nOm welk type schade gaat het?\n\n• 🚗 Auto-/motorongeval\n• 🏠 Waterschade\n• 🔥 Brand\n• 💨 Natuurramp\n• 🔓 Diefstal / inbraak\n• 💥 Glasbreuk\n\nUw aangifte wordt geregistreerd onder nr. **SCH-2026-04-8741**.",
    delay: 2000,
    quickReplies: [
      { label: "🚗 Auto-ongeval", value: "schade auto" },
      { label: "🏠 Waterschade", value: "schade water" },
      { label: "🔥 Brand", value: "schade brand" },
      { label: "🔓 Diefstal", value: "schade diefstal" },
      { label: "📷 Foto sturen", value: "foto schade" },
    ],
  },
  "schade auto": {
    text: "**Auto-ongeval — Stap 2/4**\n\nBedankt. Ik heb de volgende informatie nodig:\n\n1️⃣ Datum en tijdstip van het ongeval\n2️⃣ Locatie (adres of gemeente)\n3️⃣ Beschrijving van de feiten\n4️⃣ Betrokken voertuigen\n5️⃣ Zijn er gewonden?\n\n⚠️ **Herinnering**: U heeft **5 dagen** om een auto-ongeval te melden.\n\nU kunt ook direct een **foto van de schade** sturen voor een AI-schatting.",
    delay: 2200,
    quickReplies: [
      { label: "📷 Foto sturen", value: "foto schade" },
      { label: "Benodigde documenten", value: "documenten" },
      { label: "Eigen risico auto", value: "eigen risico" },
      { label: "Pechhulp", value: "noodgeval" },
    ],
  },
  "schade water": {
    text: "**Waterschade — Stap 2/4**\n\nVoor de verwerking van uw aangifte:\n\n1️⃣ Oorsprong van het lek (dak, leiding, buurman...)\n2️⃣ Getroffen ruimten\n3️⃣ Schatting van de schade\n4️⃣ Schadeformulier ingevuld met buurman?\n\n📝 Vergeet niet het **schadeformulier** in te vullen met uw buurman indien van toepassing.\n\nUw woonverzekeringspolis **WON-7821** dekt waterschade tot **15.000 EUR**.",
    delay: 2000,
    quickReplies: [
      { label: "📷 Foto sturen", value: "foto schade" },
      { label: "Mijn dekking", value: "garanties" },
      { label: "Eigen risico woning", value: "eigen risico" },
      { label: "Afspraak expert", value: "afspraak adviseur" },
    ],
  },
  "schade brand": {
    text: "**Brand — Dringende aangifte**\n\n🚨 Als de brand nog gaande is, bel onmiddellijk **112**.\n\nEenmaal in veiligheid:\n1️⃣ Raak niets aan voor de expert langskomt\n2️⃣ Bewaar beschadigde voorwerpen\n3️⃣ Maak foto's van alle schade\n\nUw polis dekt brandschade tot **150.000 EUR** (nieuwwaarde).\n\nEen expert wordt binnen **48u** aangesteld.",
    delay: 2200,
    quickReplies: [
      { label: "🆘 Dringende hulp", value: "noodgeval" },
      { label: "Mijn dekking", value: "garanties" },
      { label: "Expert contacteren", value: "afspraak adviseur" },
    ],
  },
  "schade diefstal": {
    text: "**Diefstal / Inbraak**\n\n⚠️ **Verplichte stappen**:\n\n1️⃣ **Doe aangifte** bij de politie binnen 24u\n2️⃣ Maak een lijst van gestolen voorwerpen met geschatte waarde\n3️⃣ Verzamel facturen en foto's van de bezittingen\n4️⃣ Controleer op inbraaksporen\n\n📝 Stuur me het **aangifte-ontvangstbewijs** en ik start het dossier.\n\nAangiftetermijn: **2 werkdagen** na vaststelling van de diefstal.",
    delay: 2000,
    quickReplies: [
      { label: "Benodigde documenten", value: "documenten" },
      { label: "Mijn diefstalsdekking", value: "garanties" },
      { label: "Eigen risico diefstal", value: "eigen risico" },
      { label: "📷 Foto sturen", value: "foto schade" },
    ],
  },
  "foto schade": {
    text: "📷 **AI fotoanalyse**\n\nStuur me een foto van de schade en onze AI analyseert:\n\n• **Type schade** automatisch gedetecteerd\n• **Ernst** geschat (licht / matig / ernstig)\n• **Reparatiekosten** geschat\n• **Dekking** toepasbaar op uw polis\n\n---\n*Simulatie:* 🔍 Analyse bezig...\n\n✅ **Resultaat**:\n• Type: Achterbumper botsing\n• Ernst: Matig\n• Schatting: **1.200 EUR - 1.800 EUR**\n• Eigen risico: **300 EUR**\n• Geschatte vergoeding: **900 EUR - 1.500 EUR**\n\nWilt u deze aangifte bevestigen?",
    delay: 3000,
    quickReplies: [
      { label: "✅ Aangifte bevestigen", value: "schade melden" },
      { label: "Erkend garage", value: "noodgeval" },
      { label: "Mijn eigen risico", value: "eigen risico" },
      { label: "Dossier opvolgen", value: "dossier opvolging" },
    ],
  },
  "dossier opvolging": {
    text: "📊 **Opvolging van uw dossiers**\n\nHier is de status van uw lopende dossiers:\n\n**1. SCH-2026-03-6529** — Waterschade\n• Status: 🟢 Expert aangesteld\n• Afspraak expert: 22/04/2026 om 10u\n• Schatting: 3.200 EUR\n\n**2. SCH-2026-01-4102** — Glasbreuk\n• Status: ✅ Afgesloten — Vergoed\n• Uitgekeerd bedrag: 450 EUR\n• Datum overschrijving: 18/02/2026\n\nVoor een specifiek dossier, stuur me het **referentienummer** (bijv.: SCH-2026-XXXX).",
    delay: 2500,
    quickReplies: [
      { label: "Details dossier 6529", value: "dossier opvolging" },
      { label: "Nieuwe schade melden", value: "schade melden" },
      { label: "Ontbrekende documenten", value: "documenten" },
      { label: "Beheerder contacteren", value: "afspraak adviseur" },
    ],
  },
  offerte: {
    text: "💰 **Directe offerte**\n\nWelk type verzekering interesseert u?\n\n🚗 **Auto** — Vanaf 28 EUR/maand\n🏠 **Woning** — Vanaf 12 EUR/maand\n🏥 **Ziektekosten** — Vanaf 35 EUR/maand\n💼 **Bedrijf / BA** — Vanaf 19 EUR/maand\n✈️ **Reis** — Vanaf 8 EUR/reis\n\nIk bereken uw persoonlijk tarief in 2 minuten!",
    delay: 1800,
    quickReplies: [
      { label: "🚗 Auto offerte", value: "offerte auto" },
      { label: "🏠 Woning offerte", value: "offerte woning" },
      { label: "🏥 Ziektekosten offerte", value: "offerte ziektekosten" },
      { label: "💼 Bedrijf offerte", value: "offerte bedrijf" },
    ],
  },
  "offerte auto": {
    text: "🚗 **Snelle Auto Offerte**\n\nVoor uw tarief heb ik nodig:\n\n1️⃣ Merk en model van het voertuig\n2️⃣ Bouwjaar\n3️⃣ Jaarlijks kilometerstand\n4️⃣ Datum rijbewijs\n5️⃣ Huidige bonus-malus\n\n---\n*Simulatie*:\n\n✅ **Renault Clio V (2023)**\n• WA+: **32 EUR/maand**\n• All-risk: **48 EUR/maand**\n• Bonus 0.50 toegepast\n• Eigen risico: 300 EUR (WA+) / 150 EUR (AR)\n\n🌟 *-15% bij online afsluiting!*",
    delay: 2500,
    quickReplies: [
      { label: "✅ Online afsluiten", value: "polis" },
      { label: "Inbegrepen dekkingen", value: "garanties" },
      { label: "Groene kaart", value: "groene kaart" },
      { label: "Afspraak adviseur", value: "afspraak adviseur" },
    ],
  },
  "offerte woning": {
    text: "🏠 **Snelle Woning Offerte**\n\nEnkele gegevens voor uw tarief:\n\n1️⃣ Type (appartement / huis)\n2️⃣ Oppervlakte in m²\n3️⃣ Aantal kamers\n4️⃣ Eigenaar of huurder\n5️⃣ Alarmsysteem aanwezig?\n\n---\n*Simulatie*: Appartement 3-kamer, 65m², huurder\n\n✅ **Basis formule**: 14 EUR/maand\n✅ **Comfort formule**: 22 EUR/maand\n✅ **Premium formule**: 31 EUR/maand\n\nInbegrepen dekkingen: waterschade, brand, diefstal, BA.",
    delay: 2500,
    quickReplies: [
      { label: "Formules vergelijken", value: "garanties" },
      { label: "Afsluiten", value: "polis" },
      { label: "Eigen risico woning", value: "eigen risico" },
      { label: "Woningattest", value: "attest" },
    ],
  },
  "offerte ziektekosten": {
    text: "🏥 **Ziektekosten Offerte**\n\nVoor een persoonlijke offerte:\n\n1️⃣ Aantal te verzekeren personen\n2️⃣ Leeftijd(en)\n3️⃣ Stelsel (werknemer, ZZP, gepensioneerd)\n4️⃣ Specifieke behoeften (optiek, tandheelkunde, ziekenhuis)\n\n---\n*Simulatie*: 1 volwassene, 35 jaar, werknemer\n\n✅ **Eco**: 38 EUR/maand\n✅ **Balans**: 55 EUR/maand\n✅ **Sereniteit**: 79 EUR/maand\n\n🌟 Dekking binnen 48u, geen wachttijd.",
    delay: 2500,
    quickReplies: [
      { label: "Formules vergelijken", value: "garanties" },
      { label: "Afsluiten", value: "polis" },
      { label: "Directe betaling", value: "betaling" },
      { label: "Afspraak adviseur", value: "afspraak adviseur" },
    ],
  },
  "offerte bedrijf": {
    text: "💼 **Bedrijf / Beroepsaansprakelijkheid Offerte**\n\nUw activiteit vereist aangepaste dekking:\n\n1️⃣ Type activiteit (advies, bouw, handel...)\n2️⃣ Jaarlijkse omzet\n3️⃣ Aantal werknemers\n4️⃣ Gewenste dekkingen\n\n---\n*Simulatie*: IT-consultant, omzet 120K EUR, 1 persoon\n\n✅ **BA Pro**: 22 EUR/maand\n✅ **BA Pro + Cyber**: 38 EUR/maand\n✅ **Integraal pakket**: 55 EUR/maand\n\nBescherming uw activiteit vandaag nog.",
    delay: 2500,
    quickReplies: [
      { label: "BA Pro dekkingen", value: "garanties" },
      { label: "Afsluiten", value: "polis" },
      { label: "Afspraak adviseur", value: "afspraak adviseur" },
    ],
  },
  polis: {
    text: "📄 **Uw AssurPlus polissen**\n\n**1. Auto — All-risk** (nr. AP-AUT-782341)\n• Voertuig: Renault Clio V\n• Vervaldatum: 15/09/2026\n• Premie: 576 EUR/jaar (48 EUR/maand)\n• Bonus: 0.50\n\n**2. Woning — Comfort** (nr. AP-WON-7821)\n• Adres: Handelsstraat 12, 1011 Amsterdam\n• Vervaldatum: 01/01/2027\n• Premie: 264 EUR/jaar (22 EUR/maand)\n\nU kunt uw polissen downloaden of online wijzigen.",
    delay: 2200,
    quickReplies: [
      { label: "💾 Polis downloaden", value: "polis" },
      { label: "✏️ Polis wijzigen", value: "polis wijzigen" },
      { label: "Opzeggen", value: "opzegging" },
      { label: "Attest", value: "attest" },
    ],
  },
  attest: {
    text: "📃 **Verzekeringsattest**\n\nWelk type attest wenst u?\n\n• 🚗 **Auto** — Voertuigattest\n• 🏠 **Woning** — Woningattest\n• 🏥 **Ziektekosten** — Attestmutualiteit\n• 💼 **BA Pro** — Beroepsattest\n\n---\n*Automatische generatie*:\n\n✅ Uw auto-attest **AP-AUT-782341** is klaar!\nGeldig van 01/01/2026 tot 31/12/2026.\n\n📧 Verstuurd per e-mail naar uw geregistreerd adres.\n📱 Beschikbaar in uw klantenportaal.",
    delay: 2000,
    quickReplies: [
      { label: "Groene kaart", value: "groene kaart" },
      { label: "Woningattest", value: "attest" },
      { label: "Mijn polis", value: "polis" },
      { label: "Adres wijzigen", value: "polis wijzigen" },
    ],
  },
  "groene kaart": {
    text: "🚗 **Groene kaart (internationale verzekeringskaart)**\n\nUw groene kaart is een verplicht document om te rijden.\n\n✅ **Actieve groene kaart**:\n• Polis: AP-AUT-782341\n• Voertuig: Renault Clio V\n• Kenteken: AB-123-CD\n• Geldigheid: 01/01/2026 - 31/12/2026\n\n📥 Ik stuur u de groene kaart per e-mail en SMS.\n\n⚠️ Digitaal attest volstaat in steeds meer landen — controleer de regels van uw bestemming.",
    delay: 2000,
    quickReplies: [
      { label: "📧 Per e-mail ontvangen", value: "groene kaart" },
      { label: "Auto-attest", value: "attest" },
      { label: "Mijn autopolis", value: "polis" },
      { label: "Bestuurder toevoegen", value: "polis wijzigen" },
    ],
  },
  opzegging: {
    text: "🛑 **Polis opzeggen**\n\nWilt u opzeggen? Hier zijn uw opties:\n\n**Tussentijdse opzegging** (na 1 jaar)\n• Opzegging op elk moment\n• Ingangsdatum binnen 30 dagen\n• Geen kosten\n\n**Jaarlijkse vervaldatum**\n• Opzegtermijn 2 maanden voor vervaldatum\n• Aangetekende brief (of via ons formulier)\n\n**Gegronde reden**\n• Verhuizing, voertuig verkocht, gewijzigde situatie\n• Onmiddellijk effect\n\n💡 Wilt u dat ik eerst ons huidig aanbod vergelijk? U kunt tot **25%** besparen.",
    delay: 2200,
    quickReplies: [
      { label: "Nieuw aanbod vergelijken", value: "offerte" },
      { label: "Opzegging bevestigen", value: "opzegging" },
      { label: "Met adviseur spreken", value: "afspraak adviseur" },
      { label: "Mijn polissen", value: "polis" },
    ],
  },
  "polis wijzigen": {
    text: "✏️ **Polis wijzigen**\n\nWat wilt u wijzigen?\n\n• 🚗 **Bestuurder toevoegen/verwijderen**\n• 🏠 **Adres wijzigen**\n• 💳 **Betaalmethode wijzigen**\n• 🛡️ **Dekkingen aanpassen**\n• 🚗 **Voertuig wijzigen**\n• 👤 **Contactgegevens bijwerken**\n\nDe meeste wijzigingen zijn van kracht binnen **24u** en zonder kosten.\n\nWat wilt u wijzigen?",
    delay: 2000,
    quickReplies: [
      { label: "Bestuurder toevoegen", value: "polis wijzigen" },
      { label: "Adres wijzigen", value: "polis wijzigen" },
      { label: "Dekkingen uitbreiden", value: "garanties" },
      { label: "Afspraak adviseur", value: "afspraak adviseur" },
    ],
  },
  betaling: {
    text: "💳 **Betaling & Termijnen**\n\n**Volgende afschrijving**:\n• Datum: 01/05/2026\n• Bedrag: **70 EUR** (auto 48 EUR + woning 22 EUR)\n• Methode: Bankkaart eindigend op ****4521\n\n**Recente geschiedenis**:\n• 01/04/2026: 70 EUR ✅\n• 01/03/2026: 70 EUR ✅\n• 01/02/2026: 70 EUR ✅\n\n**Opties**:\n• Maandelijks / Driemaandelijks / Jaarlijks\n• Automatische incasso of bankkaart\n• Betalingsplan mogelijk bij moeilijkheden",
    delay: 2000,
    quickReplies: [
      { label: "Betaalmethode wijzigen", value: "polis wijzigen" },
      { label: "Betalingsplan", value: "betaling" },
      { label: "Facturen downloaden", value: "polis" },
      { label: "Boekhoudkundige contact", value: "afspraak adviseur" },
    ],
  },
  noodgeval: {
    text: "🆘 **24/7 Pechhulp**\n\n**Noodnummers**:\n• 🚑 Ambulance: **112**\n• 🚒 Brandweer: **112**\n• 🚓 Politie: **112**\n\n**AssurPlus Pechhulp**:\n📞 **0800 123 456** (gratis, 24/7)\n\n• 🚗 **Pechhulp/takelwagen**: interventie binnen 30 min\n• 🏠 **Woning noodgeval**: slotenmaker, loodgieter, elektricien\n• 🏥 **Medisch transport**: 100% gedekt\n• 🚗 **Vervangvoertuig**: binnen 2u in stedelijk gebied\n\nUw polisnummer: **AP-AUT-782341**",
    delay: 1800,
    quickReplies: [
      { label: "📞 Hulp bellen", value: "noodgeval" },
      { label: "Pechhulp auto", value: "noodgeval" },
      { label: "Schade melden", value: "schade melden" },
      { label: "Mijn polis", value: "polis" },
    ],
  },
  garanties: {
    text: "🛡️ **Uw dekkingen — All-risk polis**\n\n**Inbegrepen dekkingen**:\n• ✅ Burgerlijke aansprakelijkheid (onbeperkt)\n• ✅ Schade alle risico's\n• ✅ Diefstal en diefstalpogingen\n• ✅ Brand en explosie\n• ✅ Glasbreuk\n• ✅ Natuurramp\n• ✅ Rechtsbijstand (15.000 EUR)\n• ✅ Pechhulp 0 km\n\n**Limieten**:\n• Materiële schade: **150.000 EUR**\n• Lichamelijke schade: **Onbeperkt**\n• Vervoerde objecten: **1.500 EUR**",
    delay: 2200,
    quickReplies: [
      { label: "Mijn eigen risico", value: "eigen risico" },
      { label: "Dekking uitbreiden", value: "polis wijzigen" },
      { label: "Ziektekosten offerte", value: "offerte ziektekosten" },
      { label: "Mijn polis", value: "polis" },
    ],
  },
  "eigen risico": {
    text: "📊 **Eigen risico — Uitleg**\n\nHet eigen risico is het bedrag dat u zelf betaalt bij een schade.\n\n**Uw huidige eigen risico's**:\n\n🚗 **Auto (All-risk)**:\n• Schade: **150 EUR**\n• Diefstal: **300 EUR**\n• Glasbreuk: **0 EUR** (geen eigen risico)\n\n🏠 **Woning (Comfort)**:\n• Waterschade: **200 EUR**\n• Diefstal: **300 EUR**\n• Natuurramp: **380 EUR** (wettelijk vastgesteld)\n\n💡 **Tip**: Een hoger eigen risico van 150 EUR kan uw premie met **10-15%** verlagen.",
    delay: 2200,
    quickReplies: [
      { label: "Eigen risico aanpassen", value: "polis wijzigen" },
      { label: "Mijn dekkingen", value: "garanties" },
      { label: "Nieuwe offerte", value: "offerte" },
      { label: "Schade melden", value: "schade melden" },
    ],
  },
  "afspraak adviseur": {
    text: "📅 **Afspraak maken**\n\nKies uw contactvorm:\n\n📱 **Telefoongesprek** (15 min)\n💻 **Videovergadering** (30 min)\n🏢 **Op kantoor** (45 min)\n\n**Beschikbare tijdsloten deze week**:\n• Woe. 19/04 - 10u / 14u30\n• Don. 20/04 - 9u / 11u / 16u\n• Vrij. 21/04 - 10u30 / 15u\n\nUw vaste adviseur: **Marie Dupont**\n📞 Direct: 020 123 45 67",
    delay: 2000,
    quickReplies: [
      { label: "📱 Telefoongesprek 15 min", value: "afspraak adviseur" },
      { label: "💻 Videovergadering", value: "afspraak adviseur" },
      { label: "🏢 Op kantoor", value: "afspraak adviseur" },
      { label: "Terug naar start", value: "hallo" },
    ],
  },
  documenten: {
    text: "📂 **Benodigde documenten**\n\nAl naar gelang uw situatie:\n\n**Autoschade**:\n• Ingevuld schadeformulier\n• Foto's van de schade\n• Kopie rijbewijs\n• Aangifte-ontvangstbewijs (bij diefstal)\n\n**Woningschade**:\n• Schadeformulier waterschade\n• Foto's voor/na\n• Facturen van beschadigde goederen\n• Reparatieoffertes\n\n**Afsluiting**:\n• Identiteitsbewijs\n• IBAN\n• Bewijs van verblijf\n• Informatiedocument (auto)\n\n📷 U kunt uw documenten hier direct sturen!",
    delay: 2200,
    quickReplies: [
      { label: "📷 Document sturen", value: "foto schade" },
      { label: "Schade melden", value: "schade melden" },
      { label: "Dossier opvolgen", value: "dossier opvolging" },
      { label: "Mijn polis", value: "polis" },
    ],
  },
  "schade campagne": {
    text: "📢 **Proactieve schadecampagnes**\n\nOnze AI lanceert automatische campagnes voor schade-opvolging:\n\n**Automatische uitgaande oproepen:**\n• Expert opvolging dag 2 na aangifte\n• Herinnering ontbrekende stukken\n• Melding dossiervordering\n• Tevredenheidsonderzoek na uitbetaling\n\n**Gebruikte kanalen:**\n• AI-spraakoproep (Dualplex, natuurlijke stem)\n• WhatsApp template na 24u\n• SMS herinnering\n\n**Gemeten resultaten:**\n• Gemiddelde dossiertijd: **-40%**\n• Ontbrekende stukken: **-65%**\n• Klanttevredenheid: **+28%**\n\nCampagnes worden automatisch getriggerd via het CRM.",
    delay: 2400,
    quickReplies: [
      { label: "Hoe werkt het?", value: "campagnes" },
      { label: "CRM-integraties", value: "crm" },
      { label: "Tarieven", value: "prijs" },
      { label: "Afspraak maken", value: "afspraak" },
    ],
  },
  "expert oproep": {
    text: "📞 **AI-oproep naar expert**\n\nOnze AI-telefonie kan:\n\n1️⃣ **Expert automatisch contacteren** na aangifte\n2️⃣ **Volledig dossier doorzenden** (foto's, beschrijving, polisnr.)\n3️⃣ **Expertafspraak plannen** in real-time\n4️⃣ **Bevestiging via WhatsApp** naar verzekerde + expert\n\n**Gespreksmodi:**\n• **Pipeline** — Volledige transcriptie voor het dossier\n• **Dualplex** — Natuurlijk gesprek met de expert\n• **Menselijke overdracht** mid-call indien nodig\n\n**Resultaat:** Expert-afspraak gemaakt in **< 4u** i.p.v. 48u.",
    delay: 2200,
    quickReplies: [
      { label: "AI-telefonie", value: "telefonie" },
      { label: "Stem & talen", value: "stem" },
      { label: "Dashboards", value: "dashboards" },
      { label: "Tarieven", value: "prijs" },
    ],
  },
  "herinnering template": {
    text: "📩 **Meta-templates — Vervalherinneringen**\n\nVooraf goedgekeurde WhatsApp-templates voor verzekeringen:\n\n**1. Polisverlenging** (utility)\n> Beste {{naam}}, uw {{type}} polis verloopt op {{datum}}. Verleng in 1 klik of neem contact op met uw adviseur.\n\n**2. Betalingsherinnering** (utility)\n> {{voornaam}}, uw afschrijving van {{bedrag}} EUR staat gepland op {{datum}}. Controleer uw bankgegevens.\n\n**3. Multi-polis aanbieding** (marketing)\n> U bent bij ons autoverzekerd — profiteer van **-20%** op woningverzekering! Direct een offerte.\n\n**Voordelen:**\n• Verzending na 24u WhatsApp-venster\n• Interactieve knoppen (Verlengen / Contacteren)\n• Dynamische variabelen vanuit het CRM\n• Tracking opening + klik",
    delay: 2400,
    quickReplies: [
      { label: "Meta-templates", value: "templates" },
      { label: "Automatisering", value: "automatisering" },
      { label: "CRM sync", value: "crm" },
      { label: "Tarieven", value: "prijs" },
    ],
  },
};

const ASSURANCE_KEYWORDS_NL: Record<string, string[]> = {
  hallo: ["hallo", "hoi", "hey", "goedemorgen", "goedenavond", "hi", "hello"],
  "schade melden": [
    "schade", "ongeluk", "aangifte", "melden", "botsing", "crash", "aanrijding",
  ],
  "foto schade": [
    "foto", "afbeelding", "schade", "beschadiging", "foto sturen", "analyseren",
  ],
  "dossier opvolging": [
    "opvolging", "dossier", "status", "vordering", "referentie", "nummer", "sch-",
  ],
  offerte: ["offerte", "premie", "aanbod"],
  "offerte auto": ["offerte auto", "autoverzekering", "voertuig"],
  "offerte woning": ["offerte woning", "wonингverzekering", "appartement", "huis"],
  "offerte ziektekosten": ["ziektekosten", "aanvullende verzekering", "gezondheid"],
  polis: ["polis", "contract", "voorwaarden", "downloaden"],
  attest: ["attest", "certificaat", "bewijs"],
  "groene kaart": ["groene kaart", "internationale kaart", "autokaart"],
  opzegging: ["opzeggen", "opzegging", "annuleren", "stoppen", "beëindigen"],
  "polis wijzigen": ["wijzigen", "aanpassen", "bestuurder toevoegen", "bijwerken"],
  betaling: ["betaling", "betalen", "incasso", "factuur", "termijn", "maandelijks"],
  noodgeval: ["noodgeval", "pechhulp", "takel", "pech", "sos", "112", "hulp"],
  garanties: ["dekking", "garantie", "gedekt", "beschermd", "inbegrepen", "uitsluiting"],
  "eigen risico": ["eigen risico", "zelf betalen", "drempel"],
  "afspraak adviseur": ["adviseur", "kantoor", "contact", "medewerker"],
  documenten: ["document", "papier", "stuk", "aanleveren"],
  "schade auto": ["auto-ongeluk", "auto-botsing", "aanrijding auto"],
  "schade water": ["waterschade", "lek", "overstroming", "leiding"],
  "schade brand": ["brand", "vuur", "vlam", "verbrand"],
  "schade diefstal": ["diefstal", "inbraak", "gestolen", "inbreuk"],
  "schade campagne": ["schade campagne", "schade opvolging", "proactief"],
  "expert oproep": ["expert oproep", "expert contacteren", "expert telefonie"],
  "herinnering template": ["herinnering template", "vervalherinnering", "verlenging", "betalingsherinnering"],
};

const merged = mergeWithVocalisNL(ASSURANCE_INTENTS_NL, ASSURANCE_KEYWORDS_NL);

export const assuranceConfigNL: SimulatorConfig = {
  botName: "AssurPlus",
  botAvatar: "A+",
  welcomeMessage:
    "Hallo! Ik ben de AI-assistent van **AssurPlus** 🛡️\n\nIk kan u helpen met:\n• Schade melden\n• Uw dossier opvolgen\n• Een offerte aanvragen\n• Een attest opvragen\n• 24/7 pechhulp\n\nHoe kan ik u helpen?",
  initialQuickReplies: [
    { label: "📢 Schade melden", value: "schade melden" },
    { label: "📊 Dossier opvolgen", value: "dossier opvolging" },
    { label: "💰 Offerte", value: "offerte" },
    { label: "📃 Attest", value: "attest" },
    { label: "🚗 Groene kaart", value: "groene kaart" },
    { label: "🆘 Noodgeval", value: "noodgeval" },
  ],
  intents: merged.intents,
  keywords: merged.keywords,
  fallback: createFallbackNL([
    { label: "Schade melden", value: "schade melden" },
    { label: "Offerte", value: "offerte" },
    { label: "Dossier opvolgen", value: "dossier opvolging" },
    { label: "Pechhulp 24/7", value: "noodgeval" },
    { label: "Afspraak adviseur", value: "afspraak adviseur" },
  ]),
};

export default assuranceConfigNL;
