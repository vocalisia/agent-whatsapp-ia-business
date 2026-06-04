import type { SimulatorConfig } from "../WhatsAppSimulator";
import { mergeWithVocalis, createFallback } from "./vocalis-features";

const GENERAL_INTENTS = {
  bonjour: {
    text: "Bonjour ! Je suis l'agent IA d'AgenticWhatsup, propulse par **Vocalis AI**.\n\nJe peux vous aider avec :\n\n- Qualifier vos leads automatiquement\n- Prendre des RDV pour vos clients\n- Analyser photos et documents\n- Repondre aux FAQ 24/7\n- Telephonie IA (appels entrants/sortants)\n- Clonage vocal & multi-langues\n\nQue souhaitez-vous savoir ?",
    delay: 1800,
    quickReplies: [
      { label: "Comment ca marche ?", value: "comment ca marche" },
      { label: "WhatsApp features", value: "whatsapp features" },
      { label: "Telephonie IA", value: "telephonie" },
      { label: "Tarifs", value: "tarif" },
    ],
  },
  salut: {
    text: "Salut ! Bienvenue sur AgenticWhatsup.\n\nJe suis votre assistant IA propulse par Vocalis. Posez-moi n'importe quelle question !",
    delay: 1400,
    quickReplies: [
      { label: "Fonctionnalites", value: "comment ca marche" },
      { label: "Clonage vocal", value: "clonage vocal" },
      { label: "Tarifs", value: "tarif" },
    ],
  },
  "comment ca marche": {
    text: "Notre agent IA fonctionne en 3 etapes :\n\n**1. Connexion** — On se branche sur votre WhatsApp Business + telephonie en 48h\n\n**2. Entrainement** — L'IA apprend vos produits, services, FAQ via la base de connaissances\n\n**3. Autonomie** — L'agent repond 24/7 :\n   - WhatsApp : texte, vocal, photos\n   - Telephone : appels entrants/sortants\n   - Web : widget chat/voix\n   - SMS : complement omnicanal\n\n**+ Flow Builder** pour designer la logique\n**+ Dashboards** pour monitorer en temps reel",
    delay: 2400,
    quickReplies: [
      { label: "Flow Builder ?", value: "flow builder" },
      { label: "Clonage vocal", value: "clonage vocal" },
      { label: "Automatisation", value: "automatisation" },
      { label: "Tarifs", value: "tarif" },
    ],
  },
  photo: {
    text: "Notre Vision IA analyse en temps reel :\n\n- Documents d'identite\n- Factures et bons de commande\n- Photos de produits defectueux\n- Biens immobiliers\n- Degats (sinistres assurance)\n- Vehicules (estimation reprise)\n\n**L'IA extrait les donnees, cree le dossier et notifie l'equipe — en 2 secondes.**",
    delay: 1800,
    quickReplies: [
      { label: "Vocal aussi ?", value: "vocal" },
      { label: "Tarifs", value: "tarif" },
    ],
  },
  demo: {
    text: "Voici ce que je peux montrer :\n\n**1. WhatsApp Business**\nTemplates Meta, nurturing, recovery panier\n\n**2. Telephonie IA**\nAppels entrants/sortants, transfert humain\n\n**3. Clonage Vocal**\n3 fournisseurs TTS, votre voix de marque\n\n**4. Flow Builder**\nLogique conversation visuelle, zero code\n\n**5. Scoring Predictif**\n15+ criteres, routing automatique\n\n**6. 10 Secteurs**\nE-commerce, medical, restaurant, auto...\n\nQue voulez-vous tester ?",
    delay: 2200,
    quickReplies: [
      { label: "WhatsApp features", value: "whatsapp features" },
      { label: "Telephonie", value: "telephonie" },
      { label: "Clonage vocal", value: "clonage vocal" },
      { label: "Scoring", value: "scoring" },
    ],
  },
  "cas clients": {
    text: "Resultats clients par secteur :\n\n**Cabinet dentaire** (Geneve)\n- 70% no-shows en moins, 200+ RDV/mois\n\n**Agence immobiliere** (Paris)\n- 3x plus de visites qualifiees\n\n**E-commerce mode** (Lyon)\n- SAV automatise 85%, reponse 4s\n\n**Restaurant** (Zurich)\n- Reservations WhatsApp +120%\n\n**Concession auto** (Bruxelles)\n- Qualification leads x2, essais routes +45%\n\n**Cabinet avocat** (Geneve)\n- Consultations planifiees +60%",
    delay: 2400,
    quickReplies: [
      { label: "Mon secteur ?", value: "secteur" },
      { label: "Prendre RDV", value: "rdv" },
    ],
  },
  secteur: {
    text: "**10 secteurs** avec demo dediee :\n\n- E-Commerce\n- Coach & Formateur\n- Assurance\n- Immobilier\n- Restaurant & Traiteur\n- Medical\n- Fitness & Salle de sport\n- Automobile\n- Juridique (avocat, notaire)\n- Hotellerie\n\nChaque agent est personnalise a votre metier avec base de connaissances dediee.",
    delay: 2000,
    quickReplies: [
      { label: "Prendre RDV", value: "rdv" },
      { label: "Tarifs", value: "tarif" },
    ],
  },
  financement: {
    text: "**Simulateur de financement IA** — exemples en temps reel :\n\n**Immobilier** (taux actuel 3.45%)\n- Budget estimation personnalisee sur 25 ans\n  → Mensualite : **estimation personnalisee**\n  → Apport minimum : estimation personnalisee\n- Budget estimation personnalisee sur 20 ans\n  → Mensualite : **estimation personnalisee**\n  → Apport minimum : estimation personnalisee\n\n**Automobile** (TAEG 4.9%)\n- Vehicule estimation personnalisee — Credit 48 mois\n  → Mensualite : **estimation personnalisee**\n- Vehicule estimation personnalisee — LOA 36 mois\n  → Loyer : **estimation personnalisee** + option d'achat\n\n**Formation / Coaching** (financement CPF)\n- Programme estimation personnalisee → estimation personnalisee reste a charge via CPF\n- Paiement 3x sans frais : **estimation personnalisee x 3**\n\nL'agent calcule **en temps reel** selon le montant, la duree et le profil du client. Quelle simulation vous interesse ?",
    delay: 2400,
    quickReplies: [
      { label: "Simulation immo", value: "financement" },
      { label: "Simulation auto", value: "financement" },
      { label: "Financement CPF", value: "financement" },
      { label: "Prendre RDV", value: "rdv" },
    ],
  },
};

const GENERAL_KEYWORDS = {
  bonjour: ["bonjour", "bonsoir", "bnjr", "hey", "coucou", "yo", "hi", "hello"],
  "comment ca marche": ["comment", "marche", "fonctionne", "expliquer", "explain", "how"],
  photo: ["photo", "image", "camera", "document", "analyser", "picture", "scan", "vision"],
  demo: ["demo", "demonstration", "montrer", "show", "essayer", "test", "tester"],
  "cas clients": ["cas client", "resultat", "temoignage", "exemple", "reference"],
  secteur: ["secteur", "industrie", "metier", "vertical"],
  financement: ["financement", "finance", "credit", "pret", "emprunt", "mensualite", "taux", "banque", "loyer", "loa", "lld", "apport", "cpf", "opco"],
};

const merged = mergeWithVocalis(GENERAL_INTENTS, GENERAL_KEYWORDS);

export const generalConfig: SimulatorConfig = {
  botName: "AgenticWhatsup",
  botAvatar: "AI",
  welcomeMessage:
    "Bienvenue ! Je suis l'agent IA d'AgenticWhatsup, propulse par **Vocalis AI**.\n\nTapez un message ou utilisez les suggestions pour decouvrir toutes nos fonctionnalites.",
  initialQuickReplies: [
    { label: "Bonjour !", value: "bonjour" },
    { label: "WhatsApp features", value: "whatsapp features" },
    { label: "Telephonie IA", value: "telephonie" },
    { label: "Clonage vocal", value: "clonage vocal" },
    { label: "Tarifs", value: "tarif" },
  ],
  intents: merged.intents,
  keywords: merged.keywords,
  fallback: createFallback([
    { label: "Comment ca marche ?", value: "comment ca marche" },
    { label: "WhatsApp features", value: "whatsapp features" },
    { label: "Telephonie IA", value: "telephonie" },
    { label: "Tarifs", value: "tarif" },
  ]),
};
