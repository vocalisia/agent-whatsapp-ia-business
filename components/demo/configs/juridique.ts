import type { SimulatorConfig, BotResponse } from "../WhatsAppSimulator";
import { mergeWithVocalis, createFallback } from "./vocalis-features";

const sectorIntents: Record<string, BotResponse> = {
  bonjour: {
    text: "Bonjour ! Bienvenue chez **JurisAssist**.\n\nJe suis votre assistant juridique IA, disponible 24h/24.\n\nJe peux vous aider a :\n- Prendre un RDV consultation\n- Identifier votre domaine de droit\n- Suivre votre dossier en cours\n- Analyser un document juridique\n- Connaitre nos honoraires\n- Gerer une urgence juridique\n\nComment puis-je vous assister ?",
    delay: 1400,
    quickReplies: [
      { label: "Consultation", value: "consultation" },
      { label: "Domaines de droit", value: "domaines" },
      { label: "Suivi dossier", value: "suivi dossier" },
      { label: "Urgence", value: "urgence juridique" },
    ],
  },
  consultation: {
    text: "**Reserver une consultation juridique**\n\nNos creneaux disponibles :\n\n- Lundi 10h00 ou 15h00\n- Mardi 9h00 ou 14h00\n- Mercredi 11h00 ou 16h00\n- Jeudi 10h00 ou 17h00\n- Vendredi 9h00 ou 14h00\n\n**Formats :**\n- En cabinet (Paris, Lyon, Geneve)\n- En visio (Zoom / WhatsApp Video)\n- Par telephone\n\n**Premiere consultation :** 30 min offertes pour evaluer votre situation.\n\nQuel creneau vous convient ?",
    delay: 2000,
    quickReplies: [
      { label: "Lundi 10h", value: "confirmer rdv" },
      { label: "Mardi 14h", value: "confirmer rdv" },
      { label: "Autre creneau", value: "autre creneau" },
      { label: "Honoraires", value: "honoraires" },
    ],
  },
  domaines: {
    text: "**Nos domaines d'expertise :**\n\n**Droit de la famille**\n- Divorce, garde d'enfants, pension alimentaire, adoption\n\n**Droit immobilier**\n- Litiges locatifs, copropriete, construction\n\n**Droit commercial**\n- Contrats, societes, litiges commerciaux\n\n**Droit penal**\n- Defense penale, gardes a vue, infractions\n\n**Droit du travail**\n- Licenciement, harcelement, prudhommes\n\n**Droit des societes**\n- Creation, cession, liquidation\n\nDans quel domaine avez-vous besoin d'aide ?",
    delay: 2200,
    quickReplies: [
      { label: "Famille / Divorce", value: "divorce" },
      { label: "Travail", value: "contrat" },
      { label: "Creation entreprise", value: "creation entreprise" },
      { label: "Bail / Immobilier", value: "bail" },
    ],
  },
  honoraires: {
    text: "**Grille tarifaire JurisAssist**\n\n**Consultation initiale** — Gratuite (30 min)\nEvaluation de votre situation + plan d'action\n\n**Consultation standard** — estimation personnalisee\nAnalyse approfondie, conseil personnalise\n\n**Forfait dossier simple** — 800 - estimation personnalisee\nLettre de mise en demeure, relecture contrat\n\n**Forfait contentieux** — 2 000 - estimation personnalisee\nRepresentation tribunal, negociation\n\n**Abonnement entreprise** — Sur mesure\nAccompagnement juridique permanent\n\n**Aide juridictionnelle** acceptee selon eligibilite.\n\nTous les honoraires sont communiques avant engagement.",
    delay: 2200,
    quickReplies: [
      { label: "Premiere consultation", value: "consultation" },
      { label: "Aide juridictionnelle", value: "aide juridictionnelle" },
      { label: "Forfait entreprise", value: "creation entreprise" },
      { label: "Prendre RDV", value: "consultation" },
    ],
  },
  documents: {
    text: "**Documents a preparer pour votre dossier :**\n\n**Tout dossier :**\n- Piece d'identite en cours de validite\n- Justificatif de domicile (< 3 mois)\n- Chronologie des faits (si litige)\n\n**Selon le domaine :**\n- Contrat(s) concerne(s)\n- Correspondances (emails, courriers)\n- Decisions de justice anterieures\n- Preuves (photos, temoignages, factures)\n\n**Astuce IA :** Envoyez-moi une photo de votre document, je vous en fais un **resume automatique** avec les points cles.\n\nQuels documents avez-vous ?",
    delay: 2000,
    quickReplies: [
      { label: "Envoyer document", value: "photo document" },
      { label: "Prendre RDV", value: "consultation" },
      { label: "Delais a respecter", value: "delais" },
      { label: "Suivi dossier", value: "suivi dossier" },
    ],
  },
  "suivi dossier": {
    text: "**Suivi de votre dossier juridique**\n\nEntrez votre reference de dossier pour voir l'etat en temps reel.\n\n**Etapes suivies :**\n- Ouverture du dossier\n- Collecte des pieces\n- Analyse juridique\n- Mise en demeure / Negociation\n- Procedure judiciaire (si necessaire)\n- Audience\n- Decision / Jugement\n- Execution\n\nVous recevez une **notification WhatsApp** a chaque avancee.\n\n*Format reference : JUR-2026-XXXX*",
    delay: 1800,
    quickReplies: [
      { label: "Entrer reference", value: "suivi dossier" },
      { label: "Contacter mon avocat", value: "consultation" },
      { label: "Documents manquants", value: "documents" },
      { label: "Delais en cours", value: "delais" },
    ],
  },
  "urgence juridique": {
    text: "**Urgence juridique — Assistance immediate**\n\nSi vous etes dans une situation urgente :\n\n**Garde a vue** — Droit a un avocat immediat\nAppelez notre ligne d'urgence 24/7\n\n**Expulsion imminente** — Delais legaux a verifier\nNous pouvons intervenir en refere\n\n**Violence conjugale** — 3919 + depot de plainte\nAccompagnement juridique d'urgence\n\n**Saisie** — Opposition possible sous 48h\n\n**Accident grave** — Preservation des preuves\n\nDecrivez votre situation et un avocat vous rappelle sous **30 minutes**.",
    delay: 2200,
    quickReplies: [
      { label: "Garde a vue", value: "urgence juridique" },
      { label: "Expulsion", value: "bail" },
      { label: "Rappel immediat", value: "consultation" },
      { label: "Aide juridictionnelle", value: "aide juridictionnelle" },
    ],
  },
  "photo document": {
    text: "Envoyez-moi une photo de votre document juridique et notre **IA analysera** automatiquement :\n\n- **Resume des clauses cles**\n- **Obligations de chaque partie**\n- **Delais et echeances importants**\n- **Clauses abusives potentielles**\n- **Points d'attention juridiques**\n\nFormats acceptes : contrat, bail, mise en demeure, jugement, statuts, PV d'assemblee.\n\nL'analyse prend environ 15 secondes. Envoyez votre document !",
    delay: 1800,
    quickReplies: [
      { label: "Analyser un contrat", value: "contrat" },
      { label: "Analyser un bail", value: "bail" },
      { label: "RDV avocat", value: "consultation" },
      { label: "Honoraires", value: "honoraires" },
    ],
  },
  "mise en demeure": {
    text: "**Mise en demeure — Procedure**\n\nLa mise en demeure est un courrier formel obligeant le destinataire a agir.\n\n**Etapes :**\n1. Identification du litige et base legale\n2. Redaction par notre equipe juridique\n3. Envoi en **recommande avec AR**\n4. Delai de reponse : 8 a 15 jours\n5. Si pas de reponse → action en justice\n\n**Forfait mise en demeure :** estimation personnalisee\nInclut : redaction + envoi + suivi\n\n**Taux de resolution amiable : 65%**\n\nSouhaitez-vous qu'on prepare votre mise en demeure ?",
    delay: 2000,
    quickReplies: [
      { label: "Oui, lancer", value: "consultation" },
      { label: "Documents requis", value: "documents" },
      { label: "Combien ca coute", value: "honoraires" },
      { label: "Delais legaux", value: "delais" },
    ],
  },
  divorce: {
    text: "**Procedure de divorce — Vue d'ensemble**\n\n**Divorce par consentement mutuel**\n- Duree : 2 a 4 mois\n- Cout moyen : 1 500 - estimation personnalisee\n- Accord sur tout : biens, enfants, pension\n- Enregistrement chez notaire (pas de juge)\n\n**Divorce contentieux**\n- Duree : 12 a 24 mois\n- Requete au juge aux affaires familiales\n- Mesures provisoires possibles\n\n**Points a regler :**\n- Garde des enfants + droit de visite\n- Pension alimentaire\n- Prestation compensatoire\n- Partage des biens\n- Logement familial\n\nSouhaitez-vous une consultation confidentielle ?",
    delay: 2400,
    quickReplies: [
      { label: "Consultation divorce", value: "consultation" },
      { label: "Documents requis", value: "documents" },
      { label: "Honoraires divorce", value: "honoraires" },
      { label: "Aide juridictionnelle", value: "aide juridictionnelle" },
    ],
  },
  "creation entreprise": {
    text: "**Creation d'entreprise — Accompagnement**\n\n**Formes juridiques :**\n- **SAS / SASU** — Flexibilite maximale\n- **SARL / valueL** — Cadre securise\n- **Micro-entreprise** — Simplicite\n- **SCI** — Gestion immobiliere\n- **SA** — Grands projets\n\n**Notre accompagnement :**\n1. Choix de la forme juridique\n2. Redaction des statuts\n3. Immatriculation au greffe\n4. Pacte d'associes (si necessaire)\n5. Contrats fondateurs\n\n**Forfait creation :** sur audit gratuit\nDelai moyen : 7 a 14 jours.\n\nQuelle structure vous interesse ?",
    delay: 2200,
    quickReplies: [
      { label: "SAS / SASU", value: "creation entreprise" },
      { label: "SARL / valueL", value: "creation entreprise" },
      { label: "RDV creation", value: "consultation" },
      { label: "Honoraires", value: "honoraires" },
    ],
  },
  bail: {
    text: "**Litiges locatifs — Vos droits**\n\n**Problemes frequents :**\n\n**Loyers impayes**\n- Mise en demeure → commandement de payer → expulsion\n- Delai minimum : 2 mois apres commandement\n\n**Etat des lieux**\n- Contestation sous 10 jours\n- Expert amiable ou judiciaire\n\n**Depot de garantie**\n- Restitution sous 1 mois (pas de retenue) ou 2 mois\n- Mise en demeure si retard\n\n**Travaux**\n- Reparations locatives vs gros oeuvre\n- Mise en conformite (decence, DPE)\n\n**Conge / Preavis**\n- 3 mois (vide) ou 1 mois (meuble / zone tendue)\n\nQuel est votre probleme locatif ?",
    delay: 2200,
    quickReplies: [
      { label: "Loyers impayes", value: "mise en demeure" },
      { label: "Depot de garantie", value: "mise en demeure" },
      { label: "Consultation bail", value: "consultation" },
      { label: "Envoyer mon bail", value: "photo document" },
    ],
  },
  contrat: {
    text: "**Relecture et analyse de contrat**\n\nNotre IA + nos avocats analysent votre contrat :\n\n**Ce qu'on verifie :**\n- Clauses abusives ou desequilibrees\n- Obligations disproportionnees\n- Clauses de non-concurrence\n- Conditions de resiliation\n- Penalites et indemnites\n- Conformite legale\n\n**Types de contrats :**\n- Contrat de travail (CDI, CDD, freelance)\n- Contrat commercial\n- CGV / CGU\n- Contrat de prestation\n- Bail commercial\n\n**Forfait relecture :** estimation personnalisee\nDelai : 48h ouvrees.\n\nEnvoyez votre contrat pour analyse !",
    delay: 2000,
    quickReplies: [
      { label: "Envoyer contrat", value: "photo document" },
      { label: "Contrat de travail", value: "contrat" },
      { label: "Contrat commercial", value: "contrat" },
      { label: "RDV avocat", value: "consultation" },
    ],
  },
  delais: {
    text: "**Delais legaux et prescriptions**\n\nAttention aux delais ! Au-dela, vos droits s'eteignent.\n\n**Droit du travail :**\n- Contestation licenciement : **12 mois**\n- Salaires impayes : **3 ans**\n- Harcelement : **5 ans**\n\n**Droit civil :**\n- Prescription de droit commun : **5 ans**\n- Vices caches immobilier : **2 ans**\n- Malfacons construction : **10 ans**\n\n**Droit penal :**\n- Contravention : **1 an**\n- Delit : **6 ans**\n- Crime : **20 ans**\n\n**Droit de la consommation :**\n- Retractation achat en ligne : **14 jours**\n- Garantie legale : **2 ans**\n\nVerifiez vos delais avant qu'il ne soit trop tard !",
    delay: 2200,
    quickReplies: [
      { label: "Consultation urgente", value: "consultation" },
      { label: "Mise en demeure", value: "mise en demeure" },
      { label: "Suivi dossier", value: "suivi dossier" },
      { label: "Honoraires", value: "honoraires" },
    ],
  },
  "aide juridictionnelle": {
    text: "**Aide juridictionnelle — Eligibilite**\n\nL'aide juridictionnelle prend en charge vos frais d'avocat.\n\n**Conditions de ressources (2026) :**\n- **Aide totale** : revenus < estimation personnalisee\n- **Aide partielle** : revenus < estimation personnalisee\n\n**Ce qui est pris en charge :**\n- Honoraires d'avocat\n- Frais d'huissier\n- Frais d'expertise\n- Frais de justice\n\n**Comment faire la demande :**\n1. Formulaire Cerfa n°16146*03\n2. Avis d'imposition\n3. Justificatifs de ressources\n4. Depot au tribunal ou en ligne\n\nDelai de reponse : 1 a 3 mois.\n\nNous vous aidons a constituer votre dossier.",
    delay: 2200,
    quickReplies: [
      { label: "Verifier eligibilite", value: "aide juridictionnelle" },
      { label: "Constituer le dossier", value: "consultation" },
      { label: "Nos honoraires", value: "honoraires" },
      { label: "Prendre RDV", value: "consultation" },
    ],
  },
};

const sectorKeywords: Record<string, string[]> = {
  bonjour: ["bonjour", "salut", "hello", "hey", "bonsoir", "coucou", "hi"],
  consultation: [
    "consultation", "rendez-vous", "rdv", "avocat", "conseiller",
    "rencontrer", "appeler",
  ],
  domaines: [
    "domaine", "specialite", "expertise", "pratique", "branche",
    "competence", "quel droit",
  ],
  honoraires: [
    "honoraire", "prix", "cout", "combien", "tarif cabinet",
    "facturer", "payer", "financement", "finance", "credit", "pret", "mensualite", "facilite",
  ],
  documents: [
    "document", "papier", "piece", "justificatif", "dossier",
    "fournir", "preparer",
  ],
  "suivi dossier": [
    "suivi", "avancement", "ou en est", "reference", "etat dossier",
    "progression",
  ],
  "urgence juridique": [
    "urgence", "urgent", "garde a vue", "expulsion", "saisie",
    "violence", "immediat",
  ],
  "photo document": [
    "photo", "scanner", "analyser document", "envoyer document",
    "image contrat",
  ],
  "mise en demeure": [
    "mise en demeure", "demeure", "recommande", "sommation",
    "injonction", "formel",
  ],
  divorce: [
    "divorce", "separation", "garde enfant", "pension alimentaire",
    "prestation compensatoire", "conjugal",
  ],
  "creation entreprise": [
    "creer", "creation", "entreprise", "societe", "sas", "sasu",
    "sarl", "eurl", "statuts", "immatriculation",
  ],
  bail: [
    "bail", "locataire", "proprietaire", "loyer", "expulsion",
    "depot garantie", "preavis", "locatif",
  ],
  contrat: [
    "contrat", "clause", "relecture", "analyser contrat", "cgv",
    "cgu", "prestation", "non-concurrence",
  ],
  delais: [
    "delai", "prescription", "date limite", "combien de temps",
    "trop tard", "perime", "forclusion",
  ],
  "aide juridictionnelle": [
    "aide juridictionnelle", "aide juridique", "gratuit avocat",
    "prise en charge", "cerfa", "ressources",
  ],
};

const { intents, keywords } = mergeWithVocalis(sectorIntents, sectorKeywords);

const juridiqueFallback = createFallback([
  { label: "Consultation", value: "consultation" },
  { label: "Domaines de droit", value: "domaines" },
  { label: "Suivi dossier", value: "suivi dossier" },
  { label: "Tarifs Vocalis", value: "tarif" },
]);

const juridqueConfig: SimulatorConfig = {
  botName: "JurisAssist IA",
  botAvatar: "JA",
  welcomeMessage:
    "Bienvenue chez **JurisAssist** ! Je suis votre assistant juridique IA.\n\nJe peux vous aider a :\n- Prendre un RDV consultation\n- Identifier votre domaine de droit\n- Suivre votre dossier en cours\n- Analyser un document juridique\n- Connaitre nos honoraires\n\nComment puis-je vous assister ?",
  initialQuickReplies: [
    { label: "Consultation", value: "consultation" },
    { label: "Domaines de droit", value: "domaines" },
    { label: "Honoraires", value: "honoraires" },
    { label: "Suivi dossier", value: "suivi dossier" },
    { label: "Urgence", value: "urgence juridique" },
  ],
  intents,
  keywords,
  fallback: juridiqueFallback,
};

export const juridiqueConfig = juridqueConfig;
export default juridqueConfig;
