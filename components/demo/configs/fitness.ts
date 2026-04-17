import type { SimulatorConfig, BotResponse } from "../WhatsAppSimulator";
import { mergeWithVocalis, createFallback } from "./vocalis-features";

const sectorIntents: Record<string, BotResponse> = {
  bonjour: {
    text: "Bienvenue chez **FitClub** ! Je suis votre assistant IA.\n\nJe peux vous aider a :\n- Decouvrir nos abonnements et cours\n- Reserver un essai gratuit\n- Trouver un coach personnel\n- Suivre votre progression\n\nQue puis-je faire pour vous ?",
    delay: 1000,
    quickReplies: [
      { label: "Abonnements", value: "abonnement" },
      { label: "Planning cours", value: "cours" },
      { label: "Essai gratuit", value: "essai gratuit" },
      { label: "Coach perso", value: "coach" },
    ],
  },

  abonnement: {
    text: "Nos **formules FitClub** :\n\n**Access** — 29,90 EUR/mois\n- Acces salle musculation + cardio\n- Horaires : 6h-22h\n- Vestiaires + douches\n\n**Premium** — 49,90 EUR/mois\n- Acces illimite 24/7\n- Tous les cours collectifs inclus\n- Sauna + hammam\n- 1 bilan corporel/trimestre\n\n**Elite** — 79,90 EUR/mois\n- Tout Premium inclus\n- 4 seances coach personnel/mois\n- Plan nutrition personnalise\n- Suivi progression IA\n\nSans engagement. Quelle formule vous interesse ?",
    delay: 2000,
    quickReplies: [
      { label: "Essai gratuit", value: "essai gratuit" },
      { label: "Inscription", value: "inscription" },
      { label: "Comparer formules", value: "abonnement" },
      { label: "Horaires", value: "horaires" },
    ],
  },

  cours: {
    text: "**Planning des cours FitClub** cette semaine :\n\n**Lundi**\n- 7h00 — HIIT (45 min) — Coach Julien\n- 12h15 — Yoga Flow (60 min) — Coach Sarah\n- 18h30 — CrossFit (50 min) — Coach Maxime\n\n**Mardi**\n- 7h30 — Pilates (45 min) — Coach Sarah\n- 12h00 — Boxing Fit (45 min) — Coach Karim\n- 19h00 — Body Pump (50 min) — Coach Julien\n\n**Mercredi**\n- 8h00 — Stretching (30 min) — Coach Sarah\n- 17h30 — Spinning (45 min) — Coach Maxime\n- 19h30 — Zumba (50 min) — Coach Lisa\n\nPlaces limitees a **20 personnes** par cours.\nVoulez-vous reserver ?",
    delay: 2200,
    quickReplies: [
      { label: "Reserver un cours", value: "cours" },
      { label: "Cours du week-end", value: "cours" },
      { label: "Annuler un cours", value: "annuler cours" },
      { label: "Coach personnel", value: "coach" },
    ],
  },

  "essai gratuit": {
    text: "Super choix ! Votre **essai gratuit FitClub** comprend :\n\n- **1 journee complete** d'acces illimite\n- 1 cours collectif au choix\n- 1 bilan corporel avec coach\n- Acces vestiaires + sauna\n\n**Prochains creneaux disponibles :**\n- Lundi 21 avril — 10h ou 17h\n- Mardi 22 avril — 9h ou 18h\n- Mercredi 23 avril — 14h\n\nAucun engagement, aucun paiement. Quel creneau vous convient ?",
    delay: 1800,
    quickReplies: [
      { label: "Lundi 10h", value: "confirmer essai" },
      { label: "Mardi 18h", value: "confirmer essai" },
      { label: "Autre creneau", value: "essai gratuit" },
      { label: "Questions", value: "bonjour" },
    ],
  },

  "confirmer essai": {
    text: "Essai confirme !\n\n**Date :** Lundi 21 avril 2026\n**Heure :** 10:00\n**Duree :** Journee complete\n**Lieu :** FitClub — 45 avenue de la Forme\n\n**A apporter :**\n- Tenue de sport\n- Serviette\n- Bouteille d'eau\n- Piece d'identite\n\nVous recevrez :\n- Confirmation par WhatsApp\n- Rappel la veille\n- Plan d'acces\n\nA bientot !",
    delay: 2000,
    quickReplies: [
      { label: "Merci !", value: "merci" },
      { label: "Horaires", value: "horaires" },
    ],
  },

  horaires: {
    text: "**Horaires FitClub :**\n\n**Formule Access :**\n- Lundi-Vendredi : 6h - 22h\n- Samedi : 8h - 20h\n- Dimanche : 9h - 18h\n\n**Formule Premium & Elite :**\n- Acces **24h/24, 7j/7** avec badge\n\n**Accueil & coachs :**\n- Lundi-Vendredi : 8h - 21h\n- Samedi : 9h - 18h\n- Dimanche : 10h - 16h\n\n**Jours feries :** Horaires reduits (10h-18h)",
    delay: 1400,
    quickReplies: [
      { label: "Abonnements", value: "abonnement" },
      { label: "Planning cours", value: "cours" },
      { label: "Comment venir ?", value: "horaires" },
      { label: "Essai gratuit", value: "essai gratuit" },
    ],
  },

  coach: {
    text: "Nos **coachs certifies FitClub** :\n\n**Julien D.** — Musculation & HIIT\n- 8 ans d'experience, certifie NSCA\n- Specialite : prise de masse, seche\n- Note : 4.9/5 (312 avis)\n\n**Sarah L.** — Yoga & Pilates\n- Formatrice internationale, 10 ans\n- Specialite : souplesse, posture, bien-etre\n- Note : 4.8/5 (287 avis)\n\n**Maxime R.** — CrossFit & Functional\n- Ex-athlete competition, certifie L3\n- Specialite : performance, endurance\n- Note : 4.9/5 (198 avis)\n\n**Prochaine dispo :** Demain 10h avec Julien\n\nVoulez-vous reserver une seance ?",
    delay: 2200,
    quickReplies: [
      { label: "Reserver Julien", value: "confirmer coach" },
      { label: "Reserver Sarah", value: "confirmer coach" },
      { label: "Tarifs coaching", value: "abonnement" },
      { label: "Essai gratuit", value: "essai gratuit" },
    ],
  },

  "confirmer coach": {
    text: "Seance coach reservee !\n\n**Coach :** Julien D.\n**Date :** Mardi 22 avril 2026\n**Heure :** 10:00 (60 min)\n**Lieu :** Salle coaching prive — FitClub\n\n**Programme prevu :**\n- Bilan physique complet\n- Test de force et mobilite\n- Definition de vos objectifs\n- Plan d'entrainement personnalise\n\nRappel WhatsApp envoye la veille.",
    delay: 1800,
    quickReplies: [
      { label: "Merci !", value: "merci" },
      { label: "Annuler", value: "annuler cours" },
    ],
  },

  nutrition: {
    text: "**Plan nutrition IA FitClub** :\n\nNotre IA analyse votre profil et genere un plan personnalise :\n\n**Exemple — Objectif : Prise de masse**\n\n**Petit-dejeuner :** Oeufs brouilles + avoine + banane (520 kcal)\n**Collation :** Fromage blanc + amandes (280 kcal)\n**Dejeuner :** Poulet grille + riz complet + legumes (650 kcal)\n**Gouter :** Shake proteine + fruits rouges (320 kcal)\n**Diner :** Saumon + patate douce + brocoli (580 kcal)\n\n**Total :** 2 350 kcal | 180g proteines\n\nInclus dans la formule **Elite** ou en option a **9,90 EUR/mois**.\n\nVoulez-vous votre plan personnalise ?",
    delay: 2400,
    quickReplies: [
      { label: "Mon plan perso", value: "nutrition" },
      { label: "Objectif seche", value: "nutrition" },
      { label: "Formule Elite", value: "abonnement" },
      { label: "Coach nutrition", value: "coach" },
    ],
  },

  "photo progression": {
    text: "Merci pour votre photo ! **Analyse IA en cours**...\n\n**Resultat de l'analyse corporelle :**\n\n- **Masse grasse estimee :** 18.5% (-2.3% vs mois dernier)\n- **Masse musculaire :** Progression visible au niveau des epaules et bras\n- **Posture :** Amelioration de l'alignement dorsal\n- **Score progression :** 78/100 (+12 pts)\n\n**Recommandation IA :**\n- Augmenter le volume sur les jambes\n- Maintenir le cardio actuel\n- Ajouter des exercices de gainage\n\nProchaine photo recommandee dans **4 semaines**.\nContinuez comme ca !",
    delay: 2800,
    quickReplies: [
      { label: "Historique photos", value: "photo progression" },
      { label: "Adapter programme", value: "coach" },
      { label: "Plan nutrition", value: "nutrition" },
      { label: "Retour accueil", value: "bonjour" },
    ],
  },

  "annuler cours": {
    text: "Annulation de cours :\n\n**Vos reservations actives :**\n1. HIIT — Lundi 21 avril, 7h00 (Coach Julien)\n2. Yoga Flow — Mercredi 23 avril, 12h15 (Coach Sarah)\n\n**Politique d'annulation :**\n- Gratuit jusqu'a **2h avant** le cours\n- Apres : 1 credit debite\n- 3 no-shows = suspension 1 semaine\n\nQuel cours souhaitez-vous annuler ?",
    delay: 1600,
    quickReplies: [
      { label: "Annuler HIIT lundi", value: "confirmer annulation" },
      { label: "Annuler Yoga mercredi", value: "confirmer annulation" },
      { label: "Garder mes cours", value: "cours" },
    ],
  },

  "confirmer annulation": {
    text: "Cours annule avec succes !\n\n**HIIT — Lundi 21 avril, 7h00** a ete retire de vos reservations.\n\nVotre place a ete liberee pour un autre membre.\n\nVoulez-vous reserver un autre creneau ?",
    delay: 1200,
    quickReplies: [
      { label: "Reserver un autre", value: "cours" },
      { label: "Retour accueil", value: "bonjour" },
    ],
  },

  parrainage: {
    text: "**Programme Parrainage FitClub** :\n\nParrainez vos proches et gagnez des avantages !\n\n**Pour vous (parrain) :**\n- **1 mois offert** pour chaque filleul inscrit\n- Cumul illimite\n- Bonus : gourde FitClub offerte au 3e parrainage\n\n**Pour votre filleul :**\n- **-50%** sur le premier mois\n- 1 seance coach offerte\n- Bilan corporel gratuit\n\n**Votre lien de parrainage :**\nfitclub.fr/parrain/FC-78432\n\n**Parrainages actifs :** 2 (2 mois offerts cumules)\n\nPartagez le lien par WhatsApp !",
    delay: 2000,
    quickReplies: [
      { label: "Partager le lien", value: "parrainage" },
      { label: "Mes avantages", value: "parrainage" },
      { label: "Abonnements", value: "abonnement" },
      { label: "Retour accueil", value: "bonjour" },
    ],
  },

  equipement: {
    text: "**Equipements & installations FitClub** :\n\n**Musculation :**\n- 40+ machines Technogym derniere generation\n- Espace poids libres (1-50 kg)\n- Cage a squat, rack developpe, poulie\n\n**Cardio :**\n- 25 tapis de course, velos, elliptiques\n- Rameurs Concept2\n- Ecrans individuels Netflix/YouTube\n\n**Espaces :**\n- 2 studios cours collectifs (150m2 chacun)\n- Salle coaching prive\n- Zone fonctionnelle CrossFit\n- Espace stretching\n\n**Confort :**\n- Vestiaires premium avec casiers securises\n- Fontaines a eau filtree\n- Wi-Fi gratuit\n- Parking souterrain 50 places",
    delay: 2200,
    quickReplies: [
      { label: "Sauna & spa", value: "sauna" },
      { label: "Visite virtuelle", value: "equipement" },
      { label: "Essai gratuit", value: "essai gratuit" },
      { label: "Abonnements", value: "abonnement" },
    ],
  },

  sauna: {
    text: "**Espace Bien-etre FitClub** :\n\nInclus dans les formules **Premium** et **Elite** :\n\n- **Sauna finlandais** — 80-90C, sessions de 15 min\n- **Hammam** — Vapeur eucalyptus, ideal post-entrainement\n- **Douches sensorielles** — Eau froide/chaude alternee\n- **Espace detente** — Transats, tisanes offertes\n\n**Horaires bien-etre :**\n- Lundi-Vendredi : 8h - 21h\n- Samedi-Dimanche : 9h - 19h\n\n**Bienfaits :** Recuperation musculaire, elimination des toxines, relaxation profonde.\n\nAcces ponctuel pour les Access : **5 EUR/session**.",
    delay: 1800,
    quickReplies: [
      { label: "Passer en Premium", value: "abonnement" },
      { label: "Equipements salle", value: "equipement" },
      { label: "Essai gratuit", value: "essai gratuit" },
      { label: "Retour accueil", value: "bonjour" },
    ],
  },

  inscription: {
    text: "**Inscription FitClub — Simple et rapide !**\n\n**Etapes :**\n1. Choisissez votre formule (Access, Premium, Elite)\n2. Remplissez le formulaire en ligne (2 min)\n3. Signez le contrat electronique\n4. Paiement securise (CB, prelevement, Apple Pay)\n5. Recevez votre badge d'acces par email\n\n**Documents necessaires :**\n- Piece d'identite\n- RIB (si prelevement mensuel)\n- Certificat medical de -1 an\n\n**Bonus inscription :** Bilan corporel offert + 1 seance coach decouverte !\n\nPret a vous inscrire ?",
    delay: 2000,
    quickReplies: [
      { label: "M'inscrire maintenant", value: "inscription" },
      { label: "Essai d'abord", value: "essai gratuit" },
      { label: "Comparer formules", value: "abonnement" },
      { label: "Questions", value: "bonjour" },
    ],
  },

  "gel": {
    text: "**Gel / Pause d'abonnement FitClub** :\n\n**Conditions :**\n- Pause possible apres **3 mois** d'anciennete\n- Duree : **1 a 3 mois** maximum\n- Frais de gel : **5 EUR/mois**\n- Justificatif requis : voyage, blessure, maladie\n\n**Pour geler votre abonnement :**\n1. Envoyez votre justificatif ici\n2. Indiquez la duree souhaitee\n3. Confirmation sous 24h\n\nVotre abonnement reprend automatiquement a la date prevue.\n\nVoulez-vous proceder ?",
    delay: 1800,
    quickReplies: [
      { label: "Geler 1 mois", value: "gel" },
      { label: "Geler 3 mois", value: "gel" },
      { label: "Resilier", value: "gel" },
      { label: "Retour accueil", value: "bonjour" },
    ],
  },

  renouvellement: {
    text: "**Renouvellement FitClub** :\n\n**Votre abonnement actuel :**\n- Formule : Premium (49,90 EUR/mois)\n- Depuis : Janvier 2026\n- Prochain prelevement : 1er mai 2026\n\n**Offre de renouvellement annuel :**\n- **499 EUR/an** au lieu de 598,80 EUR (-17%)\n- Equivalent a **41,60 EUR/mois**\n- 2 mois offerts\n- Seance coach bonus chaque trimestre\n\nLe renouvellement est automatique sauf resiliation **30 jours** avant echeance.",
    delay: 1800,
    quickReplies: [
      { label: "Passer a l'annuel", value: "renouvellement" },
      { label: "Changer de formule", value: "abonnement" },
      { label: "Geler abonnement", value: "gel" },
      { label: "Retour accueil", value: "bonjour" },
    ],
  },
};

const sectorKeywords: Record<string, string[]> = {
  bonjour: ["bonjour", "salut", "hello", "hey", "bonsoir", "coucou", "hi", "bjr"],
  abonnement: ["abonnement", "formule", "forfait", "membre", "membership", "inscription", "adherer", "adhesion", "tarif salle"],
  cours: ["cours", "planning", "collectif", "hiit", "yoga", "pilates", "crossfit", "spinning", "zumba", "boxing", "body pump", "stretching", "seance groupe"],
  "essai gratuit": ["essai", "gratuit", "tester", "decouverte", "trial", "journee"],
  horaires: ["horaire", "heure", "ouverture", "fermeture", "ouvert", "ferme", "24h", "dimanche", "acces"],
  coach: ["coach", "entraineur", "personal trainer", "coaching", "accompagnement", "personnel", "individuel", "prive"],
  nutrition: ["nutrition", "regime", "diete", "calories", "proteine", "repas", "alimentation", "manger", "macro", "poids"],
  "photo progression": ["photo", "progression", "avant apres", "transformation", "evolution", "bilan corporel", "analyse", "body"],
  "annuler cours": ["annuler", "annulation", "desinscrir", "retirer"],
  parrainage: ["parrainage", "parrain", "filleul", "parrainer", "inviter", "ami", "recommander"],
  equipement: ["equipement", "machine", "materiel", "installation", "salle", "poids", "tapis", "velo"],
  sauna: ["sauna", "hammam", "spa", "bien-etre", "detente", "relaxation", "vapeur", "douche"],
  inscription: ["inscrire", "inscription", "s'inscrire", "rejoindre", "commencer", "demarrer", "badge"],
  gel: ["gel", "geler", "pause", "suspendre", "suspension", "resilier", "resiliation", "arreter", "quitter"],
  renouvellement: ["renouvellement", "renouveler", "annuel", "prolonger", "contrat", "echeance"],
};

const merged = mergeWithVocalis(sectorIntents, sectorKeywords);

const fitnessConfig: SimulatorConfig = {
  botName: "FitClub IA",
  botAvatar: "FC",
  welcomeMessage:
    "Bienvenue chez **FitClub** ! Je suis votre assistant IA.\n\nJe peux vous aider avec vos abonnements, cours, coaching, nutrition et bien plus.\n\nComment puis-je vous aider ?",
  initialQuickReplies: [
    { label: "Abonnements", value: "abonnement" },
    { label: "Planning cours", value: "cours" },
    { label: "Essai gratuit", value: "essai gratuit" },
    { label: "Coach personnel", value: "coach" },
    { label: "Nutrition IA", value: "nutrition" },
    { label: "Parrainage", value: "parrainage" },
  ],
  intents: merged.intents,
  keywords: merged.keywords,
  fallback: createFallback([
    { label: "Abonnements", value: "abonnement" },
    { label: "Planning cours", value: "cours" },
    { label: "Coach personnel", value: "coach" },
    { label: "Essai gratuit", value: "essai gratuit" },
  ]),
};

export { fitnessConfig };
export default fitnessConfig;
