import type { SimulatorConfig } from "../WhatsAppSimulator";
import { mergeWithVocalis, createFallback } from "./vocalis-features";

const COACH_INTENTS = {
  bonjour: {
    text: "Bonjour ! Ravi de vous accueillir chez **CoachPro** !\n\nJe suis votre assistant coaching propulse par **Vocalis AI**.\n\nJe peux vous aider a decouvrir nos programmes, reserver une seance decouverte ou obtenir un bilan personnalise. Comment puis-je vous accompagner ?",
    delay: 1200,
    quickReplies: [
      { label: "Programmes", value: "programmes" },
      { label: "Seance decouverte", value: "seance decouverte" },
      { label: "Clonage vocal", value: "clonage vocal" },
      { label: "WhatsApp features", value: "whatsapp features" },
      { label: "Telephonie IA", value: "telephonie" },
      { label: "Bilan gratuit", value: "bilan gratuit" },
    ],
  },

  programmes: {
    text: "Voici nos **3 programmes de coaching** :\n\n**1. Individuel** - Accompagnement 1-to-1 personnalise\n12 seances de 60 min sur 3 mois\nSuivi WhatsApp entre les seances\n\n**2. Groupe** - Dynamique collective (6-8 personnes)\n8 seances de 90 min sur 2 mois\nCommunaute privee d'entraide\n\n**3. VIP Intensif** - Transformation acceleree\n20 seances + acces illimite WhatsApp\nPlan d'action sur-mesure + ressources exclusives\n\nQuel programme vous interesse ?",
    delay: 2000,
    quickReplies: [
      { label: "Cadrage", value: "budget" },
      { label: "Programme individuel", value: "individuel" },
      { label: "Programme VIP", value: "vip" },
      { label: "Coaching groupe", value: "groupe" },
    ],
  },

  "seance decouverte": {
    text: "Parfait ! Reservons votre **seance decouverte gratuite** de 30 min.\n\nVoici les prochains creneaux disponibles :\n\n**Lundi 21 avril** : 10h00, 14h00, 17h00\n**Mercredi 23 avril** : 9h00, 11h00, 16h00\n**Vendredi 25 avril** : 10h00, 15h00\n\nLa seance se deroule en visio (Zoom) ou par telephone, selon votre preference.\n\nQuel creneau vous convient ?",
    delay: 1600,
    quickReplies: [
      { label: "Lundi 10h", value: "confirmer rdv" },
      { label: "Mercredi 11h", value: "confirmer rdv" },
      { label: "Vendredi 15h", value: "confirmer rdv" },
      { label: "Autres disponibilites", value: "autre creneau" },
    ],
  },

  disponibilites: {
    text: "Voici toutes nos **disponibilites** cette semaine :\n\n**Lundi** : 9h-12h / 14h-18h\n**Mardi** : 10h-12h / 15h-17h\n**Mercredi** : 9h-12h / 14h-17h\n**Jeudi** : 10h-12h / 14h-16h\n**Vendredi** : 9h-12h / 14h-16h\n\nLes seances durent 60 min (30 min pour la decouverte).\n\nJe peux aussi vous proposer des creneaux en soiree sur demande.",
    delay: 1500,
    quickReplies: [
      { label: "Reserver un creneau", value: "rdv" },
      { label: "Seance en soiree", value: "soiree" },
      { label: "Seance le weekend", value: "weekend" },
    ],
  },

  temoignages: {
    text: "Voici ce que disent nos **clients** :\n\n**Sophie, 34 ans** - Coaching Individuel\n\"En 3 mois, j'ai clarifie ma reconversion et lance mon activite. Le suivi WhatsApp entre les seances fait toute la difference.\"\n\n**Marc, 42 ans** - Programme VIP\n\"J'ai double mon chiffre d'affaires en 6 mois. La methode est structuree et les outils concrets.\"\n\n**Equipe Startup (8 pers.)** - Coaching Groupe\n\"Notre cohesion d'equipe s'est transformee. +40% de productivite mesuree.\"\n\n92% de nos clients atteignent leurs objectifs dans les delais prevus.",
    delay: 2200,
    quickReplies: [
      { label: "Voir les programmes", value: "programmes" },
      { label: "Seance decouverte", value: "seance decouverte" },
      { label: "Methode de coaching", value: "methode" },
    ],
  },

  methode: {
    text: "Notre **methode CoachPro** repose sur 4 piliers :\n\n**1. Diagnostic** - Bilan complet de votre situation\nObjectifs SMART, valeurs, freins identifies\n\n**2. Plan d'action** - Feuille de route personnalisee\nEtapes concretes, indicateurs de succes\n\n**3. Accompagnement** - Seances + suivi continu\nExercices pratiques, outils valides scientifiquement\n\n**4. Ancrage** - Consolidation des acquis\nHabitudes durables, autonomie progressive\n\nNous utilisons des approches reconnues : PNL, analyse transactionnelle, coaching cognitif-comportemental.",
    delay: 2000,
    quickReplies: [
      { label: "Bilan gratuit", value: "bilan gratuit" },
      { label: "Temoignages", value: "temoignages" },
      { label: "Reserver une seance", value: "rdv" },
    ],
  },

  bilan: {
    text: "Excellent choix ! Le **bilan gratuit** est la premiere etape.\n\nJe vais vous poser 5 questions rapides pour evaluer votre situation :\n\n**Question 1/5** : Dans quel domaine souhaitez-vous progresser ?\n\na) Carriere / reconversion\nb) Leadership / management\nc) Equilibre vie pro/perso\nd) Confiance en soi\ne) Lancement d'activite",
    delay: 1800,
    quickReplies: [
      { label: "Carriere", value: "objectif carriere" },
      { label: "Leadership", value: "objectif leadership" },
      { label: "Equilibre", value: "objectif equilibre" },
      { label: "Confiance", value: "objectif confiance" },
      { label: "Entrepreneuriat", value: "objectif business" },
    ],
  },

  objectifs: {
    text: "Definir vos **objectifs** est essentiel pour un coaching efficace.\n\nVoici les domaines ou nous accompagnons nos clients :\n\n- Reconversion professionnelle\n- Prise de poste / leadership\n- Gestion du stress et equilibre\n- Confiance en soi et assertivite\n- Creation / developpement d'entreprise\n- Relations professionnelles\n- Performance et productivite\n\nQuel est votre objectif principal aujourd'hui ?",
    delay: 1600,
    quickReplies: [
      { label: "Bilan gratuit", value: "bilan gratuit" },
      { label: "Seance decouverte", value: "seance decouverte" },
      { label: "Methode", value: "methode" },
    ],
  },

  suivi: {
    text: "Le **suivi inter-seances** est notre force !\n\nEntre chaque seance, vous beneficiez de :\n\n- **Messages WhatsApp illimites** avec votre coach IA\n- **Exercices pratiques** envoyes apres chaque seance\n- **Check-in hebdomadaire** : point rapide sur vos avancees\n- **Rappels automatiques** pour vos actions a realiser\n- **Ressources personnalisees** selon votre progression\n\nC'est comme avoir un coach disponible 24h/24 pour maintenir votre dynamique !",
    delay: 1800,
    quickReplies: [
      { label: "Voir les ressources", value: "ressources" },
      { label: "Programmes", value: "programmes" },
      { label: "Reserver", value: "rdv" },
    ],
  },

  ressources: {
    text: "Voici les **ressources** incluses dans nos programmes :\n\n**Fiches pratiques :**\n- Roue de la vie (bilan global)\n- Matrice d'Eisenhower (priorites)\n- SWOT personnel\n- Plan d'action 90 jours\n\n**Exercices :**\n- Journal de gratitude guide\n- Visualisation d'objectifs\n- Techniques de gestion du stress\n\n**Outils numeriques :**\n- Tableau de bord de suivi\n- Templates de planification\n- Meditations guidees audio\n\nJe peux vous envoyer un **echantillon gratuit** de la fiche Roue de la Vie !",
    delay: 2000,
    quickReplies: [
      { label: "Recevoir l'echantillon", value: "echantillon" },
      { label: "Seance decouverte", value: "seance decouverte" },
      { label: "Programmes", value: "programmes" },
    ],
  },

  urgence: {
    text: "Je comprends que vous traversez un moment difficile.\n\n**Important** : je suis un assistant IA et je ne remplace pas un professionnel de sante mentale.\n\nSi vous etes en situation de crise :\n\n- **SOS Amitie** : 09 72 39 40 50 (24h/24)\n- **Fil Sante Jeunes** : 0 800 235 236\n- **Urgences** : 15 ou 112\n- **La Main Tendue (Suisse)** : 143\n\nNotre coach humain peut aussi vous rappeler rapidement. Souhaitez-vous que je transmette votre demande en priorite ?",
    delay: 1400,
    quickReplies: [
      { label: "Demander un rappel", value: "rappel urgence" },
      { label: "Merci, ca va", value: "bonjour" },
    ],
  },

  faq: {
    text: "**Questions frequentes** :\n\n**Combien de temps dure un coaching ?**\n2 a 6 mois selon le programme choisi.\n\n**En visio ou en presentiel ?**\nLes deux ! Visio Zoom ou en cabinet a Geneve.\n\n**Confidentialite ?**\n100% confidentiel. Conversations chiffrees, RGPD conforme.\n\n**Resultats garantis ?**\n92% de nos clients atteignent leurs objectifs. Satisfaction ou prolongation gratuite.\n\n**Annulation ?**\nFlexible, reprogrammation jusqu'a 24h avant.\n\nUne autre question ?",
    delay: 2000,
    quickReplies: [
      { label: "Cadrage", value: "budget" },
      { label: "Temoignages", value: "temoignages" },
      { label: "Reserver", value: "rdv" },
    ],
  },

  paiement: {
    text: "Nous proposons plusieurs **options de paiement** :\n\n**Paiement unique** - Le plus avantageux\nVirement, carte bancaire ou Twint\n\n**Paiement en 2 fois** - Sans frais\n50% a l'inscription + 50% a mi-parcours\n\n**Paiement en 3 fois** - Sans frais\n33% a l'inscription + 2 echeances mensuelles\n\n**Paiement en 4 fois** - Sans frais\n25% a l'inscription + 3 echeances mensuelles\n\nFacture professionnelle fournie (deductible si formation).\nNote de frais possible pour les entreprises.",
    delay: 1800,
    quickReplies: [
      { label: "Cadrage détaillé", value: "budget" },
      { label: "Reserver", value: "rdv" },
      { label: "Deductible ?", value: "deductible" },
    ],
  },

  groupe: {
    text: "Le **coaching de groupe** est ideal pour :\n\n**Equipes en entreprise** (6-8 personnes)\n- Cohesion et communication\n- Gestion des conflits\n- Leadership collectif\n- Objectifs communs\n\n**Groupes ouverts** (6-8 personnes)\n- Reconversion professionnelle\n- Entrepreneuriat\n- Developpement personnel\n\n**Format** : 8 seances de 90 min sur 2 mois\n**Cadrage** : pendant la séance découverte\n**Bonus** : Communaute WhatsApp privee du groupe\n\nProchaine session : **Mai 2026** - Places limitees !",
    delay: 2000,
    quickReplies: [
      { label: "S'inscrire au groupe", value: "rdv" },
      { label: "Coaching individuel", value: "individuel" },
      { label: "Cadrage entreprise", value: "budget" },
    ],
  },

  individuel: {
    text: "Le **coaching individuel** est notre programme phare :\n\n**Ce qui est inclus :**\n- 12 seances de 60 min (1/semaine)\n- Bilan initial approfondi\n- Plan d'action personnalise\n- Suivi WhatsApp entre les seances\n- Fiches et exercices pratiques\n- Bilan final et plan de consolidation\n\n**Pour qui ?**\nProfessionnels en transition, managers, entrepreneurs, toute personne souhaitant un accompagnement sur-mesure.\n\n**Duree** : 3 mois\n**Cadrage** : pendant la séance découverte\n\nCommencez par une seance decouverte gratuite !",
    delay: 2000,
    quickReplies: [
      { label: "Seance decouverte", value: "seance decouverte" },
      { label: "Comparer avec VIP", value: "vip" },
      { label: "Temoignages", value: "temoignages" },
    ],
  },

  vip: {
    text: "Le programme **VIP Intensif** est notre offre premium :\n\n**Ce qui est inclus :**\n- 20 seances de 60 min\n- Acces WhatsApp **illimite** avec votre coach\n- Bilan psychometrique complet\n- Plan strategique sur-mesure\n- Ressources exclusives (masterclasses, outils)\n- 2 seances de suivi post-programme\n- Support prioritaire 7j/7\n\n**Resultats moyens :**\n- +67% de confiance mesuree\n- +45% de productivite\n- 94% d'objectifs atteints\n\n**Duree** : 6 mois\n**Cadrage** : pendant la séance découverte (modalités discutées en séance découverte)",
    delay: 2200,
    quickReplies: [
      { label: "Reserver VIP", value: "rdv" },
      { label: "Paiement en plusieurs fois", value: "paiement" },
      { label: "Temoignages VIP", value: "temoignages" },
    ],
  },

  // --- New sector-specific intents leveraging Vocalis features ---

  "campagne relance": {
    text: "**Campagnes de relance pour coaching** :\n\nReactivez vos anciens clients et leads dormants !\n\n**Scenarios automatises :**\n1. **Lead non converti** → relance J+3 avec temoignage client\n2. **Client termine** → check-in a 3 mois + offre suivi\n3. **Inscription abandonnee** → rappel + offre seance decouverte\n4. **Lead tiede** → nurturing avec contenus gratuits (fiches, exercices)\n\n**Resultats moyens :**\n- **28% de reactivation** leads dormants\n- **+40% de retention** client\n- **3x plus de referrals** grace au suivi automatique\n\nTout via WhatsApp + templates Meta pre-approuves.",
    delay: 2200,
    quickReplies: [
      { label: "WhatsApp features", value: "whatsapp features" },
      { label: "Scoring leads", value: "scoring" },
      { label: "Cadrage", value: "budget" },
      { label: "Prendre RDV", value: "rdv" },
    ],
  },

  "appel decouverte": {
    text: "**Appel decouverte IA pour coaching** :\n\nVotre agent vocal qualifie les prospects automatiquement :\n\n**Deroulement de l'appel IA :**\n1. Accueil personnalise (voix clonee du coach)\n2. Questions de qualification (objectifs, budget, disponibilite)\n3. Presentation du programme adapte\n4. Proposition de creneau pour seance decouverte\n5. Confirmation par WhatsApp\n\n**Avantages :**\n- Disponible **24/7** pour qualifier les leads\n- Pre-qualification avant seance humaine\n- Sync automatique CRM + calendrier\n- **+55% de leads qualifies** vs formulaire web\n\nLe coach humain ne parle qu'aux prospects vraiment motives !",
    delay: 2400,
    quickReplies: [
      { label: "Clonage vocal", value: "clonage vocal" },
      { label: "Telephonie IA", value: "telephonie" },
      { label: "Calendrier", value: "calendrier" },
      { label: "Cadrage", value: "budget" },
    ],
  },

  "widget site": {
    text: "**Widget web pour site de coaching** :\n\nIntegrez un assistant IA directement sur votre site :\n\n**Fonctionnalites :**\n- **Chat textuel** pour questions rapides\n- **Appel vocal** depuis le navigateur\n- **Bilan interactif** directement dans le widget\n- **Prise de RDV** sans quitter la page\n- **Capture lead** automatique dans le CRM\n\n**Installation :**\n1 snippet JS avant `</body>` — 2 minutes chrono\n\n**Resultats :**\n- **+45% de conversion** visiteur → lead\n- **-70% de bounce rate** sur page programme\n- Disponible 24/7 meme quand vous etes en seance\n\nPersonnalisable aux couleurs de votre marque.",
    delay: 2200,
    quickReplies: [
      { label: "Widget details", value: "widget" },
      { label: "Automatisation", value: "automatisation" },
      { label: "Cadrage", value: "budget" },
      { label: "Prendre RDV", value: "rdv" },
    ],
  },
};

const COACH_KEYWORDS: Record<string, string[]> = {
  bonjour: ["bonjour", "salut", "hello", "hey", "coucou", "bonsoir", "hi"],
  programmes: ["programme", "formule", "offre", "coaching", "accompagnement", "formation"],
  "seance decouverte": ["seance decouverte", "decouverte", "seance gratuite"],
  disponibilites: ["disponibilite", "quand", "horaire", "agenda", "planning", "semaine"],
  temoignages: ["temoignage", "avis", "retour client", "resultat", "client", "succes", "experience", "feedback"],
  methode: ["methode", "approche", "comment ca marche", "fonctionnement", "processus", "technique", "outil"],
  bilan: ["bilan", "diagnostic", "evaluation", "assessment", "test", "questionnaire"],
  objectifs: ["objectif", "but", "goal", "ambition", "projet", "envie", "besoin"],
  suivi: ["suivi", "entre les seances", "accompagner", "quotidien", "support"],
  ressources: ["ressource", "fiche", "exercice", "document", "worksheet", "outil pratique"],
  urgence: ["urgence", "urgent", "crise", "detresse", "aide", "mal", "deprime", "anxiete", "panique", "suicide"],
  faq: ["faq", "question", "confidentialite", "annuler", "annulation", "duree", "combien de temps", "visio", "presentiel"],
  paiement: ["paiement", "payer", "facilite", "echeance", "carte", "virement", "twint", "facture", "mensualite", "financement", "finance", "credit", "pret", "cpf", "opco", "fif", "plan de financement"],
  groupe: ["groupe", "equipe", "collectif", "team", "entreprise", "team building"],
  individuel: ["individuel", "personnel", "prive", "seul", "1-to-1", "one to one"],
  vip: ["vip", "premium", "intensif", "exclusif", "haut de gamme", "complet"],
  "campagne relance": ["campagne relance", "relance", "reactivation", "leads dormants", "nurturing"],
  "appel decouverte": ["appel decouverte", "appel qualification", "appel ia", "appel automatique"],
  "widget site": ["widget site", "chat site", "integrer site", "widget web"],
};

const merged = mergeWithVocalis(COACH_INTENTS, COACH_KEYWORDS);

export const coachConfig: SimulatorConfig = {
  botName: "CoachPro IA",
  botAvatar: "CP",
  welcomeMessage:
    "Bienvenue chez **CoachPro** ! Je suis votre assistant IA propulse par **Vocalis AI**.\n\nJe peux vous aider a :\n- Decouvrir nos programmes de coaching\n- Reserver une seance decouverte gratuite\n- Obtenir un bilan personnalise\n- Repondre a toutes vos questions\n\nComment puis-je vous accompagner aujourd'hui ?",
  initialQuickReplies: [
    { label: "Programmes", value: "programmes" },
    { label: "Seance decouverte", value: "seance decouverte" },
    { label: "Cadrage", value: "budget" },
    { label: "Bilan gratuit", value: "bilan gratuit" },
  ],
  intents: merged.intents,
  keywords: merged.keywords,
  fallback: createFallback([
    { label: "Programmes", value: "programmes" },
    { label: "Seance decouverte", value: "seance decouverte" },
    { label: "Bilan gratuit", value: "bilan gratuit" },
    { label: "Cadrage", value: "budget" },
  ]),
};

export default coachConfig;
