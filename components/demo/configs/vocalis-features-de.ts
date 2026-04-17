import type { BotResponse, QuickReply } from "../WhatsAppSimulator";

/**
 * Gemeinsame Vocalis AI-Funktionen — in jede Sektorkonfiguration injiziert.
 * Diese Intents beantworten Fragen zur Plattform selbst.
 */

export const VOCALIS_INTENTS_DE: Record<string, BotResponse> = {
  sprache: {
    text: "Unsere KI versteht Sprachnachrichten!\n\n**3 verfugbare Modi:**\n\n**Pipeline** — Transkription → LLM → TTS\nVolle Kontrolle, alle Stimmen inkl. geklonter\n\n**Speech-to-Speech** — Ultra-niedrige Latenz\nDirekte Stimme, ohne Zwischentext\n\n**Dualplex** — Hybrid-Modus (empfohlen)\nQuasi-sofortige Antwort + ElevenLabs-Stimme\n\nGenauigkeit > 98% in 10+ Sprachen.",
    delay: 2200,
    quickReplies: [
      { label: "Stimmklonung?", value: "stimmklonung" },
      { label: "Welche Sprachen?", value: "sprachen" },
      { label: "Preise", value: "preis" },
    ],
  },
  stimmklonung: {
    text: "Klonen Sie Ihre Stimme oder erstellen Sie eine einzigartige!\n\n**3 TTS-Anbieter:**\n- **ElevenLabs** — Mehrere Samples, 1+ Min.\n- **Cartesia** — 1 Audiodatei, min. 10 Sek.\n- **Cartesia Sonic 3** — Emotionskontrolle in Echtzeit (Tonfall, Intensitat, Ausdruck)\n\n**Einstellbare Parameter:**\n- Temperatur (0.0-1.0)\n- Tonfall: formell, locker, warm, autoritar\n\nIhr Agent spricht mit IHRER Markenstimme.",
    delay: 2000,
    quickReplies: [
      { label: "Wie funktioniert es?", value: "wie funktioniert es" },
      { label: "Unterstutzte Sprachen", value: "sprachen" },
      { label: "Preise", value: "preis" },
    ],
  },
  sprachen: {
    text: "Unterstutzte Sprachen:\n\n- Deutsch (+ regionale Akzente)\n- Englisch (US, UK, australisch)\n- Spanisch (iberisch + lateinamerikanisch)\n- Franzosisch, Italienisch, Niederlandisch\n- Norwegisch, Russisch, Schwedisch, Finnisch\n\n**Automatisches Code-Switching:**\nDer Agent erkennt die Sprache des Kunden mitten im Gesprach und wechselt automatisch — keine zusatzliche Konfiguration!",
    delay: 1800,
    quickReplies: [
      { label: "Preise", value: "preis" },
      { label: "Termin buchen", value: "termin" },
    ],
  },
  "flow builder": {
    text: "Mit dem **Flow Builder** gestalten Sie die Gesprachslogik:\n\n- Visuelle Entscheidungsbaume\n- Multi-Kanal-Routing (Sprache, SMS, WhatsApp)\n- Bedingungen und Verzweigungen\n- Durch Schlusselworter ausgeloste Aktionen\n- Der Kunde wahlt seinen Interaktionskanal\n\nKein Code — alles per Drag-and-Drop.",
    delay: 2000,
    quickReplies: [
      { label: "Automatisierung?", value: "automatisierung" },
      { label: "Webhook API?", value: "webhook" },
      { label: "Preise", value: "preis" },
    ],
  },
  automatisierung: {
    text: "Vollstandige No-Code-Automatisierung:\n\n**Ausloser:**\n- Anrufende\n- Ziel erreicht\n- Neues Gesprach\n- Lead-Aktualisierung\n\n**Aktionen:**\n- CRM-Sync (HubSpot, Salesforce, Pipedrive, GoHighLevel)\n- E-Mail, SMS, Slack\n- Google Sheets\n- Custom HTTP-API\n- Lead-Erstellung in anderer Kampagne\n\nVisueller Workflow, kein Code.",
    delay: 2200,
    quickReplies: [
      { label: "Webhook API", value: "webhook" },
      { label: "CRM-Integrationen", value: "crm" },
      { label: "Preise", value: "preis" },
    ],
  },
  webhook: {
    text: "REST API + Webhooks:\n\n**Webhooks:**\n- Konfig pro Assistent/Kampagne\n- Events: call.ended, Lead-Updates\n- JSON-Payload: ID, Dauer, Transkript, Variablen\n\n**REST API:**\n- Vollstandige programmatische Kontrolle\n- Assistenten, Kampagnen, Leads, Anrufe\n- Token-Authentifizierung\n- Aktion \"Make a Call\" ohne Kampagne\n\nIntegrieren Sie Vocalis in jedes System.",
    delay: 2000,
    quickReplies: [
      { label: "CRM-Integrationen", value: "crm" },
      { label: "Preise", value: "preis" },
    ],
  },
  crm: {
    text: "Native CRM-Integrationen:\n\n- **HubSpot** — Bidirektionale Synchronisation\n- **Salesforce** — Leads + Aktivitaten\n- **Pipedrive** — Automatische Deals\n- **GoHighLevel** — Vollintegration\n- **Zoho** — CRM + Automatisierung\n- **Google Sheets** — Echtzeit-Export\n- **Zapier** — 5000+ Apps\n- **Make** — Fortgeschrittene Workflows\n- **REST API** — Custom-Integration\n\nAlle Leads, Transkripte und Ergebnisse automatisch synchronisiert.",
    delay: 2000,
    quickReplies: [
      { label: "Termin buchen", value: "termin" },
      { label: "Preise", value: "preis" },
    ],
  },
  telefonie: {
    text: "Vollstandige KI-Telefonie:\n\n**Eingehende Anrufe** — 24/7 Auto-Antwort\n**Ausgehende Anrufe** — Automatisierte Prospektkontakte\n**Massenanrufe** — Paralleles Volumen\n\n**Funktionen:**\n- Anrufbeantworter-Erkennung + Sprachnachricht\n- Mid-Call-Weiterleitung an Mensch\n- DTMF (Tastenfeld)\n- SIP/PBX-Integration\n- Verifizierte Anrufer-ID\n- Konfigurierbare Max-Dauer (20-1200 Sek.)\n\nNummern DE, US, UK, EU — ab 3 EUR/Monat.",
    delay: 2200,
    quickReplies: [
      { label: "Auch SMS?", value: "sms" },
      { label: "Preise", value: "preis" },
    ],
  },
  sms: {
    text: "SMS-Funktionen:\n\n- SMS senden und empfangen\n- Erganzung zu WhatsApp\n- Auslosung per Automatisierung\n- Anpassbare Templates\n- Zustellbarkeits-Tracking\n\nSMS + WhatsApp + Sprache = vollstandige Omnichannel-Abdeckung.",
    delay: 1600,
    quickReplies: [
      { label: "WhatsApp Funktionen", value: "whatsapp features" },
      { label: "Preise", value: "preis" },
    ],
  },
  "whatsapp features": {
    text: "WhatsApp Business-Funktionen:\n\n- **Meta-Templates** vorgenehmigt\n- **KI-Gesprache** automatisiert 24/7\n- **24-Stunden-Fenster** + Template-Follow-up\n- **Lead-Qualifizierung** + pradiktives Scoring\n- **Zahlungslinks** + Vertrage + Bestatigungen\n- **Warenkorb-Recovery** (verlassener Warenkorb)\n- **Automatisches Nurturing** (Verkaufsseiten, Masterclass)\n- **Intelligentes Upselling**\n- **Automatisiertes Kunden-Onboarding**\n- **Reaktivierung** schlafender CRM-Leads\n- **Integration** Meta Ads / Google Ads",
    delay: 2400,
    quickReplies: [
      { label: "Meta-Templates?", value: "templates" },
      { label: "Lead-Scoring", value: "scoring" },
      { label: "Preise", value: "preis" },
    ],
  },
  templates: {
    text: "Meta-Nachrichten-Templates:\n\n- Von Meta vorgenehmigte Nachrichten\n- Pflicht nach 24h ohne Antwort\n- Kategorien: Marketing, Utility, Auth\n- Dynamische Variablen (Name, Termin, Betrag...)\n- Interaktive Buttons (CTA, Schnellantwort)\n\nUnsere Teams helfen Ihnen bei der Genehmigung Ihrer Templates.",
    delay: 1800,
    quickReplies: [
      { label: "Automatisierung", value: "automatisierung" },
      { label: "Preise", value: "preis" },
    ],
  },
  scoring: {
    text: "Pradiktives Lead-Scoring:\n\n**15+ B2B-Kriterien** analysiert:\n- Erkannte Kaufabsicht\n- Emotionaler Tonfall analysiert\n- Engagement im Gesprach\n- Antworten auf Schlusselfragen\n\n**Score > 80** → Hot Lead → sofortige Benachrichtigung\n**Score 50-80** → Warm Lead → Auto-Nurturing\n**Score < 50** → Cold Lead → Bildungsinhalte\n\nDynamisches Scripting angepasst an das Prospektprofil.",
    delay: 2000,
    quickReplies: [
      { label: "CRM-Sync", value: "crm" },
      { label: "Kampagnen", value: "kampagnen" },
      { label: "Preise", value: "preis" },
    ],
  },
  kampagnen: {
    text: "Kampagnenverwaltung:\n\n- **Ausgehende Anrufgruppen** mit zugewiesenem Assistenten\n- **Automatisches Retry** bis Ziel erreicht\n- **Anrufbeantworter-Erkennung** + Auto-Ruckruf\n- **Zielvariable** (markiert Lead als bearbeitet)\n- **Backup-Kontakte** (alternative Nummern)\n- **Tagliche Ausgabenobergrenze**\n- **Pause/Fortsetzung** Kampagnen\n- **Lead-Import** CSV mit Spaltenzuordnung\n- **Injektion dynamischer Variablen** in den Prompt\n\n**Lead-Status:** Erstellt → In Bearbeitung → Abgeschlossen / Fehlgeschlagen\nKanban-Ansicht mit Drag-and-Drop.",
    delay: 2400,
    quickReplies: [
      { label: "Dashboards", value: "dashboards" },
      { label: "Preise", value: "preis" },
    ],
  },
  dashboards: {
    text: "Echtzeit-Analytics-Dashboards:\n\n- **Trend-Grafiken** — Anrufvolumen, Erfolgsrate, durchschnittliche Dauer\n- **KPI-Zahler** — Anrufe/Tag, Konversionsrate, bearbeitete Leads\n- **Verteilungs-Grafiken** — Anrufergebnisse (Kreis/Balken)\n- **Gefilterte Tabellen** — nach Assistent, Kampagne, Zeitraum, Ergebnis\n- **Drag-and-Drop**-Layout anpassbar\n- **Getrennte Dashboards** pro Anwendungsfall (Verkauf, Support, Management)\n\nLive-Monitoring aller Ihrer Operationen.",
    delay: 2000,
    quickReplies: [
      { label: "Termin buchen", value: "termin" },
      { label: "Preise", value: "preis" },
    ],
  },
  "wissensdatenbank": {
    text: "KI-Wissensdatenbanken:\n\n- **Unterstutzte Formate:** PDF, Texte, FAQ, Produktkataloge, Preislisten\n- **Individuelle Verwaltung** — Hinzufugen/Loschen ohne vollstandigen Reimport\n- **Dynamische Updates** — Teile bearbeiten\n- **Automatische Abfrage** wenn relevante Frage erkannt\n- **Kombiniert mit System-Prompt** fur komplexe Antworten\n\nIhr Agent kennt ALLES uber Ihr Geschaft.",
    delay: 2000,
    quickReplies: [
      { label: "Flow Builder", value: "flow builder" },
      { label: "Preise", value: "preis" },
    ],
  },
  widget: {
    text: "Integrierbares Web-Widget:\n\n- **Text-Chat** oder **Sprachanruf** aus dem Browser\n- Parameter: assistantId, Position, Farbe, Sprache\n- **Responsive** mobil + Desktop\n- **Auto-Lead-Erstellung** im CRM mit Formulardaten\n- **Auslosung von Automatisierungen** bei jedem Gesprach\n- Installation: 1 JS-Snippet vor </body>\n\nIhre Webbesucher werden zu qualifizierten Leads.",
    delay: 1800,
    quickReplies: [
      { label: "Termin buchen", value: "termin" },
      { label: "Preise", value: "preis" },
    ],
  },
  kalender: {
    text: "Kalender-Integrationen:\n\n- **Cal.com** — Vollstandige Konfiguration\n- **Calendly** — Bidirektionale Sync\n- **GoHighLevel** — Vollintegration\n- **Google Kalender** — Lesen/Schreiben\n- **Outlook** — Synchronisation\n\nDer Agent pruft Verfugbarkeiten in Echtzeit, schlagt Termine vor und bestatigt automatisch.",
    delay: 1800,
    quickReplies: [
      { label: "Termin buchen", value: "termin" },
      { label: "Preise", value: "preis" },
    ],
  },
  dsgvo: {
    text: "Sicherheit und Compliance:\n\n**DSGVO** — 100% konform\n- Daten in Europa gehostet\n- Ende-zu-Ende-Verschlusselung\n- Automatisiertes Recht auf Vergessenwerden\n- Bloctel-Konformitat (Frankreich)\n\n**Datenaufbewahrung:**\n- Pro Kunde konfigurierbar\n- Dauerhafte Loschung moglich\n- Rechtliche Prufung ausgehender Nummern\n\n**API-Sicherheit:**\n- Token-Authentifizierung\n- Dokumentierte Sicherheitsempfehlungen",
    delay: 2000,
    quickReplies: [
      { label: "Termin buchen", value: "termin" },
      { label: "Preise", value: "preis" },
    ],
  },
  preis: {
    text: "Unsere Pakete:\n\n**Starter** — 97 EUR/Monat\n- 1 WhatsApp-Agent\n- 500 Gesprache/Monat\n- FAQ + Wissensdatenbank\n\n**Business** — 247 EUR/Monat\n- Multimodaler Agent (Foto + Sprache + Anrufe)\n- Unbegrenzte Gesprache\n- CRM + Kalender + Kampagnen\n- Flow Builder + Automatisierungen\n\n**Enterprise** — Massgeschneidert\n- Multi-Agents + Stimmklonung\n- API + Webhooks\n- Garantiertes SLA + Custom-Dashboards\n\nSetup + Schulung inklusive.",
    delay: 2200,
    quickReplies: [
      { label: "Kostenlose Testversion?", value: "testversion" },
      { label: "Termin buchen", value: "termin" },
      { label: "Typischer ROI?", value: "roi" },
    ],
  },
  testversion: {
    text: "Ja! Wir bieten ein **kostenloses Audit** von 30 Minuten an.\n\nWahrend dieses Anrufs:\n1. Wir analysieren Ihre Bedurfnisse\n2. Wir zeigen Ihnen den Agenten in Aktion fur IHREN Anwendungsfall\n3. Wir geben Ihnen einen konkreten Aktionsplan\n\nUnverbindlich. Mochten Sie einen Termin buchen?",
    delay: 1800,
    quickReplies: [
      { label: "Ja, buchen!", value: "termin" },
      { label: "Weitere Fragen", value: "fragen" },
    ],
  },
  roi: {
    text: "Typischer ROI unserer Kunden:\n\n**Zeitersparnis:** 15-25 Std./Woche\n**Antwortrate:** von 40% auf 95%\n**Qualifizierte Leads:** +60%\n**No-Shows:** -70%\n**Kundenzufriedenheit:** +35%\n\nDurchschnittlicher Payback: **3 Wochen**.\n\nDer Agent arbeitet 24/7 ohne Pause, ohne Gehalt, ohne Fluktuation.",
    delay: 2000,
    quickReplies: [
      { label: "Termin buchen", value: "termin" },
      { label: "Preise", value: "preis" },
    ],
  },
  termin: {
    text: "Buchen Sie Ihr kostenloses Audit:\n\n**Nachste Termine:**\n- Montag 21. April — 10:00 oder 14:00\n- Dienstag 22. April — 9:00 oder 16:00\n- Mittwoch 23. April — 11:00\n\nWelcher Termin passt Ihnen?",
    delay: 2000,
    quickReplies: [
      { label: "Montag 10:00", value: "termin bestatigen" },
      { label: "Dienstag 16:00", value: "termin bestatigen" },
      { label: "Anderer Termin", value: "anderer termin" },
    ],
  },
  "termin bestatigen": {
    text: "Termin bestatigt!\n\n**Datum:** Montag 21. April 2026\n**Uhrzeit:** 10:00 (MEZ)\n**Dauer:** 30 Min.\n**Format:** Video Google Meet\n\nSie erhalten:\n- Bestatigungs-E-Mail\n- WhatsApp-Erinnerung Tag -1\n- WhatsApp-Erinnerung Stunde -1\n\nBis bald!",
    delay: 2200,
    quickReplies: [
      { label: "Danke!", value: "danke" },
    ],
  },
  "anderer termin": {
    text: "Hier sind weitere Verfugbarkeiten:\n\n- Donnerstag 24. April — 10:00, 14:00, 17:00\n- Freitag 25. April — 9:00, 11:00\n- Montag 28. April — 10:00, 15:00\n\nOder geben Sie Ihre Praferenz an!",
    delay: 1600,
    quickReplies: [
      { label: "Donnerstag 14:00", value: "termin bestatigen" },
      { label: "Freitag 9:00", value: "termin bestatigen" },
    ],
  },
  danke: {
    text: "Gerne! Bis ganz bald.\n\nIn der Zwischenzeit konnen Sie gerne unsere anderen Branchen-Demos erkunden.",
    delay: 1200,
    quickReplies: [{ label: "Neu starten", value: "guten tag" }],
  },
  fragen: {
    text: "Stellen Sie mir jede Frage:\n\n- Funktionen (Sprache, WhatsApp, Telefonie)\n- Stimmklonung & Stimmen\n- Flow Builder & Automatisierung\n- CRM-Integrationen\n- Sicherheit & DSGVO\n- Preise & Bindung\n\nIch weiss alles uber Vocalis AI!",
    delay: 1200,
    quickReplies: [
      { label: "Stimmklonung", value: "stimmklonung" },
      { label: "WhatsApp Funktionen", value: "whatsapp features" },
      { label: "Telefonie", value: "telefonie" },
      { label: "Preise", value: "preis" },
    ],
  },
};

/** Gemeinsame Schlusselworter, die auf Vocalis-Plattformfunktionen abbilden */
export const VOCALIS_KEYWORDS_DE: Record<string, string[]> = {
  sprache: ["sprache", "stimme", "audio", "mikro", "voice", "whisper", "transkri", "sprechen", "vocal"],
  stimmklonung: ["klonung", "klon", "klonen", "tts", "elevenlabs", "cartesia", "stimmklon"],
  sprachen: ["sprache", "englisch", "spanisch", "franzosisch", "italienisch", "mehrsprachig", "polyglott", "languages"],
  "flow builder": ["flow", "builder", "baum", "logik", "verzweigung"],
  automatisierung: ["automatisierung", "automation", "workflow", "no-code", "nocode", "ausloser", "trigger"],
  webhook: ["webhook", "api", "rest", "json", "endpoint", "programm"],
  crm: ["crm", "hubspot", "salesforce", "pipedrive", "gohighlevel", "zoho", "zapier", "make", "integration"],
  telefonie: ["telefonie", "anruf", "telefon", "sip", "pbx", "voip", "eingehend", "ausgehend"],
  sms: ["sms", "textnachricht", "kurznachricht"],
  "whatsapp features": ["whatsapp feature", "whatsapp funktion", "meta template"],
  templates: ["template", "meta", "vorgenehmigt", "vorlage"],
  scoring: ["scoring", "score", "qualifizierung", "qualifizieren", "hot lead", "pradiktiv"],
  kampagnen: ["kampagne", "campaign", "masse", "bulk", "outbound"],
  dashboards: ["dashboard", "analytics", "kpi", "grafik", "monitoring", "statistik"],
  wissensdatenbank: ["wissen", "knowledge", "basis", "pdf", "katalog", "faq doc", "wissensdatenbank"],
  widget: ["widget", "embed", "einbinden", "snippet"],
  kalender: ["kalender", "calendar", "cal.com", "calendly", "outlook", "google calendar"],
  dsgvo: ["dsgvo", "gdpr", "sicherheit", "security", "daten", "privacy", "vertraulich", "datenschutz"],
  preis: ["preis", "tarif", "kosten", "wieviel", "price", "pricing", "euro", "teuer", "paket"],
  termin: ["termin", "buchen", "reservieren", "book", "meeting", "demo", "audit", "rdv"],
  testversion: ["test", "kostenlos", "gratis", "free", "trial", "probe"],
  roi: ["roi", "rendite", "investition", "ergebnis", "performance"],
  danke: ["danke", "thanks", "super", "genial", "cool", "top", "perfekt", "bravo"],
};

/** Sektor-spezifische Intents mit Vocalis-Intents zusammenfuhren. Sektor hat Prioritat. */
export function mergeWithVocalisDE(
  sectorIntents: Record<string, BotResponse>,
  sectorKeywords: Record<string, string[]>
): { intents: Record<string, BotResponse>; keywords: Record<string, string[]> } {
  return {
    intents: { ...VOCALIS_INTENTS_DE, ...sectorIntents },
    keywords: { ...VOCALIS_KEYWORDS_DE, ...sectorKeywords },
  };
}

/** Gemeinsamer Fallback fur alle Sektoren */
export function createFallbackDE(sectorOptions: QuickReply[]): BotResponse {
  return {
    text: "Ich habe nicht alles verstanden, aber keine Sorge!\n\nIch kann Ihnen helfen mit:\n- Den Funktionen Ihrer Branche\n- KI-Telefonie, WhatsApp, SMS\n- Stimmklonung & Sprachen\n- CRM-Integrationen & Automatisierung\n- Preisen und kostenlosem Audit\n\nProbieren Sie eines dieser Themen!",
    delay: 1400,
    quickReplies: sectorOptions,
  };
}
