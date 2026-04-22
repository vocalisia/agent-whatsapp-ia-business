import type { BotResponse, QuickReply } from "../WhatsAppSimulator";

/**
 * Shared Vocalis AI features — injected into every sector config.
 * These intents answer questions about the platform itself.
 */

export const VOCALIS_INTENTS: Record<string, BotResponse> = {
  vocal: {
    text: "Notre IA comprend les messages vocaux !\n\n**3 modes disponibles :**\n\n**Pipeline** — Transcription → LLM → TTS\nControle total, toutes les voix dont clonees\n\n**Speech-to-Speech** — Ultra basse latence\nVoix directe, sans texte intermediaire\n\n**Dualplex** — Mode hybride (recommande)\nReponse quasi-instantanee + voix ElevenLabs\n\nPrecision > 98% en 10+ langues.",
    delay: 2200,
    quickReplies: [
      { label: "Clonage vocal ?", value: "clonage vocal" },
      { label: "Quelles langues ?", value: "langues" },
      { label: "Tarifs", value: "tarif" },
    ],
  },
  "clonage vocal": {
    text: "Clonez votre voix ou creez-en une unique !\n\n**3 fournisseurs TTS :**\n- **ElevenLabs** — Plusieurs echantillons, 1+ min\n- **Cartesia** — 1 fichier audio, min 10 sec\n- **Cartesia Sonic 3** — Controle emotion en temps reel (ton, intensite, expressivite)\n\n**Parametres ajustables :**\n- Temperature (0.0-1.0)\n- Ton : formel, decontracte, chaleureux, autoritaire\n\nVotre agent parle avec VOTRE voix de marque.",
    delay: 2000,
    quickReplies: [
      { label: "Comment ca marche ?", value: "comment ca marche" },
      { label: "Langues supportees", value: "langues" },
      { label: "Tarifs", value: "tarif" },
    ],
  },
  langues: {
    text: "Langues supportees :\n\n- Francais (+ accents regionaux)\n- Anglais (US, UK, Australien)\n- Espagnol (Ibere + Latino)\n- Allemand, Italien, Neerlandais\n- Norvegien, Russe, Suedois, Finnois\n\n**Code-switching automatique :**\nL'agent detecte la langue du client en pleine conversation et bascule automatiquement — aucune config supplementaire !",
    delay: 1800,
    quickReplies: [
      { label: "Tarifs", value: "tarif" },
      { label: "Prendre RDV", value: "rdv" },
    ],
  },
  "flow builder": {
    text: "Le **Flow Builder** vous permet de designer la logique de conversation :\n\n- Arbres decisionnels visuels\n- Routage multi-canal (voix, SMS, WhatsApp)\n- Conditions et branchements\n- Actions declenchees par mots-cles\n- Le client choisit son canal d'interaction\n\nZero code — tout se fait en glisser-deposer.",
    delay: 2000,
    quickReplies: [
      { label: "Automatisation ?", value: "automatisation" },
      { label: "Webhook API ?", value: "webhook" },
      { label: "Tarifs", value: "tarif" },
    ],
  },
  automatisation: {
    text: "Automatisation no-code complete :\n\n**Declencheurs :**\n- Fin d'appel\n- Objectif atteint\n- Nouvelle conversation\n- Mise a jour lead\n\n**Actions :**\n- Sync CRM (HubSpot, Salesforce, Pipedrive, GoHighLevel)\n- Email, SMS, Slack\n- Google Sheets\n- API HTTP custom\n- Creation lead dans autre campagne\n\nWorkflow visuel, zero code.",
    delay: 2200,
    quickReplies: [
      { label: "Webhook API", value: "webhook" },
      { label: "CRM integrations", value: "crm" },
      { label: "Tarifs", value: "tarif" },
    ],
  },
  webhook: {
    text: "API REST + Webhooks :\n\n**Webhooks :**\n- Config par assistant/campagne\n- Events : call.ended, lead updates\n- Payload JSON : ID, duree, transcript, variables\n\n**API REST :**\n- Controle programmatique complet\n- Assistants, campagnes, leads, appels\n- Auth par token\n- Action \"Make a Call\" sans campagne\n\nIntegrez Vocalis dans n'importe quel systeme.",
    delay: 2000,
    quickReplies: [
      { label: "CRM integrations", value: "crm" },
      { label: "Tarifs", value: "tarif" },
    ],
  },
  crm: {
    text: "Integrations CRM natives :\n\n- **HubSpot** — Sync bi-directionnelle\n- **Salesforce** — Leads + activites\n- **Pipedrive** — Deals automatiques\n- **GoHighLevel** — Full integration\n- **Zoho** — CRM + automation\n- **Google Sheets** — Export temps reel\n- **Zapier** — 5000+ apps\n- **Make** — Workflows avances\n- **API REST** — Integration custom\n\nTous les leads, transcripts et outcomes synces automatiquement.",
    delay: 2000,
    quickReplies: [
      { label: "Prendre RDV", value: "rdv" },
      { label: "Tarifs", value: "tarif" },
    ],
  },
  telephonie: {
    text: "Telephonie IA complete :\n\n**Appels entrants** — 24/7 auto-reponse\n**Appels sortants** — Contact prospects automatise\n**Appels en masse** — Volume parallele\n\n**Fonctions :**\n- Detection repondeur + message vocal\n- Transfert humain mid-call\n- DTMF (touches clavier)\n- SIP/PBX integration\n- Caller ID verifie\n- Duree max configurable (20-1200 sec)\n\nNumeros FR, US, UK, EU — des 3$/mois.",
    delay: 2200,
    quickReplies: [
      { label: "SMS aussi ?", value: "sms" },
      { label: "Tarifs", value: "tarif" },
    ],
  },
  sms: {
    text: "Capacites SMS :\n\n- Envoi et reception SMS\n- Complement a WhatsApp\n- Declenchement par automatisation\n- Templates personnalisables\n- Suivi delivrabilite\n\nSMS + WhatsApp + Voix = couverture omnicanale complete.",
    delay: 1600,
    quickReplies: [
      { label: "WhatsApp features", value: "whatsapp features" },
      { label: "Tarifs", value: "tarif" },
    ],
  },
  "whatsapp features": {
    text: "Fonctionnalites WhatsApp Business :\n\n- **Templates Meta** pre-approuves\n- **Conversations IA** automatisees 24/7\n- **Fenetre 24h** + relance par template\n- **Qualification leads** + scoring predictif\n- **Liens paiement** + contrats + confirmations\n- **Recovery panier** abandonne\n- **Nurturing** automatique (pages ventes, masterclass)\n- **Upselling** intelligent\n- **Onboarding** client automatise\n- **Reactivation** leads dormants CRM\n- **Integration** Meta Ads / Google Ads",
    delay: 2400,
    quickReplies: [
      { label: "Templates Meta ?", value: "templates" },
      { label: "Scoring leads", value: "scoring" },
      { label: "Tarifs", value: "tarif" },
    ],
  },
  templates: {
    text: "Templates de messages Meta :\n\n- Messages pre-approuves par Meta\n- Obligatoires apres 24h sans reponse\n- Categories : marketing, utility, auth\n- Variables dynamiques (nom, RDV, montant...)\n- Boutons interactifs (CTA, reponse rapide)\n\nNos equipes vous aident a faire approuver vos templates.",
    delay: 1800,
    quickReplies: [
      { label: "Automatisation", value: "automatisation" },
      { label: "Tarifs", value: "tarif" },
    ],
  },
  scoring: {
    text: "Scoring predictif des leads :\n\n**15+ criteres B2B** analyses :\n- Intention d'achat detectee\n- Ton emotionnel analyse\n- Engagement dans la conversation\n- Reponses aux questions cles\n\n**Score > 80** → Lead chaud → notification immediate\n**Score 50-80** → Lead tiede → nurturing auto\n**Score < 50** → Lead froid → contenu educatif\n\nScripting dynamique adapte au profil du prospect.",
    delay: 2000,
    quickReplies: [
      { label: "CRM sync", value: "crm" },
      { label: "Campagnes", value: "campagnes" },
      { label: "Tarifs", value: "tarif" },
    ],
  },
  campagnes: {
    text: "Gestion de campagnes :\n\n- **Groupes d'appels sortants** avec assistant assigne\n- **Retry automatique** jusqu'a objectif atteint\n- **Detection repondeur** + rappel auto\n- **Variable cible** (marque lead comme traite)\n- **Contacts backup** (numeros alternatifs)\n- **Plafond depenses** journalier\n- **Pause/Reprise** campagnes\n- **Import leads** CSV avec mapping colonnes\n- **Injection variables** dynamiques dans le prompt\n\n**Statuts lead :** Cree → En cours → Complete / Echoue\nVue Kanban avec drag-and-drop.",
    delay: 2400,
    quickReplies: [
      { label: "Dashboards", value: "dashboards" },
      { label: "Tarifs", value: "tarif" },
    ],
  },
  dashboards: {
    text: "Dashboards analytics temps reel :\n\n- **Graphiques tendance** — volume appels, taux succes, duree moyenne\n- **Compteurs KPI** — appels/jour, taux conversion, leads traites\n- **Graphiques distribution** — resultats appels (camembert/barres)\n- **Tableaux filtres** — par assistant, campagne, periode, resultat\n- **Drag-and-drop** layout personnalisable\n- **Dashboards separes** par cas d'usage (ventes, support, management)\n\nMonitoring en direct de toutes vos operations.",
    delay: 2000,
    quickReplies: [
      { label: "Prendre RDV", value: "rdv" },
      { label: "Tarifs", value: "tarif" },
    ],
  },
  "base de connaissances": {
    text: "Bases de connaissances IA :\n\n- **Formats supportes :** PDF, textes, FAQ, catalogues produits, grilles tarifaires\n- **Gestion individuelle** — ajout/suppression sans reimport complet\n- **Mises a jour dynamiques** — modifier des portions\n- **Consultation automatique** quand question pertinente detectee\n- **Combine avec prompt systeme** pour reponses complexes\n\nVotre agent connait TOUT de votre business.",
    delay: 2000,
    quickReplies: [
      { label: "Flow Builder", value: "flow builder" },
      { label: "Tarifs", value: "tarif" },
    ],
  },
  widget: {
    text: "Widget web integrable :\n\n- **Chat textuel** ou **appel vocal** depuis le navigateur\n- Parametres : assistantId, position, couleur, langue\n- **Responsive** mobile + desktop\n- **Auto-creation leads** CRM avec donnees formulaire\n- **Declenchement automatisations** a chaque conversation\n- Installation : 1 snippet JS avant </body>\n\nVos visiteurs web deviennent des leads qualifies.",
    delay: 1800,
    quickReplies: [
      { label: "Prendre RDV", value: "rdv" },
      { label: "Tarifs", value: "tarif" },
    ],
  },
  calendrier: {
    text: "Integrations calendrier :\n\n- **Cal.com** — Config complete\n- **Calendly** — Sync bi-directionnelle\n- **GoHighLevel** — Full integration\n- **Google Calendar** — Lecture/ecriture\n- **Outlook** — Synchronisation\n\nL'agent verifie les dispos en temps reel, propose des creneaux et confirme automatiquement.",
    delay: 1800,
    quickReplies: [
      { label: "Prendre RDV", value: "rdv" },
      { label: "Tarifs", value: "tarif" },
    ],
  },
  rgpd: {
    text: "Securite et conformite :\n\n**RGPD** — 100% conforme\n- Donnees hebergees en Europe\n- Chiffrement bout en bout\n- Droit a l'oubli automatise\n- Conformite Bloctel (France)\n\n**Retention donnees :**\n- Configurable par client\n- Suppression permanente possible\n- Verification legale numeros sortants\n\n**Securite API :**\n- Auth par token\n- Recommandations securite documentees",
    delay: 2000,
    quickReplies: [
      { label: "Prendre RDV", value: "rdv" },
      { label: "Tarifs", value: "tarif" },
    ],
  },
  tarif: {
    text: "Le tarif depend de votre volume WhatsApp, integrations CRM et options choisies.\n\nOn construit un devis personnalise pendant votre **session strategique gratuite** (30 min).\n\nVous repartez avec :\n- Un plan d'action chiffre\n- Une demo adaptee a votre secteur\n- Un ROI projete 90 jours\n\nAucun engagement. Reservez votre creneau.",
    delay: 2000,
    quickReplies: [
      { label: "Reserver 30 min", value: "rdv" },
      { label: "ROI typique ?", value: "roi" },
      { label: "Essai gratuit ?", value: "essai" },
    ],
  },
  essai: {
    text: "Oui ! Nous offrons un **audit gratuit** de 30 minutes.\n\nPendant cet appel :\n1. On analyse vos besoins\n2. On vous montre l'agent en action sur VOTRE cas\n3. On vous donne un plan d'action concret\n\nSans engagement. Voulez-vous reserver ?",
    delay: 1800,
    quickReplies: [
      { label: "Oui, reserver !", value: "rdv" },
      { label: "Plus de questions", value: "questions" },
    ],
  },
  roi: {
    text: "ROI typique de nos clients :\n\n**Temps economise :** 15-25h/semaine\n**Taux de reponse :** de 40% a 95%\n**Leads qualifies :** +60%\n**No-shows :** -70%\n**Satisfaction client :** +35%\n\nPayback moyen : **3 semaines**.\n\nL'agent travaille 24/7 sans pause, sans salaire, sans turnover.",
    delay: 2000,
    quickReplies: [
      { label: "Prendre RDV", value: "rdv" },
      { label: "Tarifs", value: "tarif" },
    ],
  },
  rdv: {
    text: "Reservez votre audit gratuit :\n\n**Prochains creneaux :**\n- Lundi 21 avril — 10h ou 14h\n- Mardi 22 avril — 9h ou 16h\n- Mercredi 23 avril — 11h\n\nQuel creneau vous convient ?",
    delay: 2000,
    quickReplies: [
      { label: "Lundi 10h", value: "confirmer rdv" },
      { label: "Mardi 16h", value: "confirmer rdv" },
      { label: "Autre creneau", value: "autre creneau" },
    ],
  },
  "confirmer rdv": {
    text: "RDV confirme !\n\n**Date :** Lundi 21 avril 2026\n**Heure :** 10:00 (CET)\n**Duree :** 30 min\n**Format :** Video Google Meet\n\nVous recevrez :\n- Email de confirmation\n- Rappel WhatsApp J-1\n- Rappel WhatsApp H-1\n\nA bientot !",
    delay: 2200,
    quickReplies: [
      { label: "Merci !", value: "merci" },
    ],
  },
  "autre creneau": {
    text: "Voici d'autres disponibilites :\n\n- Jeudi 24 avril — 10h, 14h, 17h\n- Vendredi 25 avril — 9h, 11h\n- Lundi 28 avril — 10h, 15h\n\nOu indiquez votre preference !",
    delay: 1600,
    quickReplies: [
      { label: "Jeudi 14h", value: "confirmer rdv" },
      { label: "Vendredi 9h", value: "confirmer rdv" },
    ],
  },
  merci: {
    text: "Avec plaisir ! A tres bientot.\n\nEn attendant, n'hesitez pas a explorer nos autres demos sectorielles.",
    delay: 1200,
    quickReplies: [{ label: "Recommencer", value: "bonjour" }],
  },
  questions: {
    text: "Posez-moi n'importe quelle question :\n\n- Fonctionnalites (vocal, WhatsApp, telephonie)\n- Clonage vocal & voix\n- Flow Builder & automatisation\n- Integrations CRM\n- Securite & RGPD\n- Tarifs & engagement\n\nJe connais tout sur Vocalis AI !",
    delay: 1200,
    quickReplies: [
      { label: "Clonage vocal", value: "clonage vocal" },
      { label: "WhatsApp features", value: "whatsapp features" },
      { label: "Telephonie", value: "telephonie" },
      { label: "Tarifs", value: "tarif" },
    ],
  },
};

/** Shared keywords that map to Vocalis platform features */
export const VOCALIS_KEYWORDS: Record<string, string[]> = {
  vocal: ["vocal", "voix", "audio", "micro", "voice", "whisper", "transcri", "parler"],
  "clonage vocal": ["clonage", "clone", "cloner", "tts", "elevenlabs", "cartesia"],
  langues: ["langue", "anglais", "espagnol", "allemand", "italien", "multilingue", "polyglotte"],
  "flow builder": ["flow", "builder", "arbre", "logique", "branchement"],
  automatisation: ["automatisation", "automation", "workflow", "no-code", "nocode", "declencheur", "trigger"],
  webhook: ["webhook", "api", "rest", "json", "endpoint", "programm"],
  crm: ["crm", "hubspot", "salesforce", "pipedrive", "gohighlevel", "zoho", "zapier", "make", "integration"],
  telephonie: ["telephonie", "appel", "telephone", "sip", "pbx", "voip", "entrant", "sortant"],
  sms: ["sms", "texto", "message texte"],
  "whatsapp features": ["whatsapp feature", "fonctionnalite whatsapp", "template meta"],
  templates: ["template", "meta", "pre-approuve"],
  scoring: ["scoring", "score", "qualification", "qualifier", "lead chaud", "predictif"],
  campagnes: ["campagne", "campaign", "masse", "bulk", "outbound"],
  dashboards: ["dashboard", "analytics", "kpi", "graphique", "monitoring", "statistique"],
  "base de connaissances": ["connaissance", "knowledge", "base", "pdf", "catalogue", "faq doc"],
  widget: ["widget", "embed", "integrer", "snippet"],
  calendrier: ["calendrier", "calendar", "cal.com", "calendly", "outlook", "google calendar"],
  rgpd: ["rgpd", "gdpr", "securite", "security", "donnees", "privacy", "confidentiel", "bloctel"],
  tarif: ["tarif", "prix", "cout", "combien", "price", "pricing", "euro", "cher", "formule"],
  rdv: ["rdv", "rendez", "reserver", "book", "meeting", "demo", "audit"],
  essai: ["essai", "gratuit", "free", "trial"],
  roi: ["roi", "retour", "investissement", "resultat", "performance"],
  merci: ["merci", "thanks", "super", "genial", "cool", "top", "parfait", "bravo"],
};

/** Merge sector-specific intents with Vocalis shared intents. Sector takes priority. */
export function mergeWithVocalis(
  sectorIntents: Record<string, BotResponse>,
  sectorKeywords: Record<string, string[]>
): { intents: Record<string, BotResponse>; keywords: Record<string, string[]> } {
  return {
    intents: { ...VOCALIS_INTENTS, ...sectorIntents },
    keywords: { ...VOCALIS_KEYWORDS, ...sectorKeywords },
  };
}

/** Common fallback for all sectors */
export function createFallback(sectorOptions: QuickReply[]): BotResponse {
  return {
    text: "Je n'ai pas tout compris, mais pas d'inquietude !\n\nJe peux vous aider avec :\n- Les fonctionnalites de votre secteur\n- Telephonie IA, WhatsApp, SMS\n- Clonage vocal & langues\n- Integrations CRM & automatisation\n- Tarifs et audit gratuit\n\nEssayez un de ces sujets !",
    delay: 1400,
    quickReplies: sectorOptions,
  };
}
