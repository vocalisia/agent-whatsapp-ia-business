import type { SimulatorConfig, BotResponse } from "../WhatsAppSimulator";
import { mergeWithVocalis, createFallback } from "./vocalis-features";

const MEDICAL_INTENTS: Record<string, BotResponse> = {
  bonjour: {
    text: "Bonjour ! Bienvenue au cabinet medical **MediAssist**.\n\nJe suis votre assistant IA, disponible 24/7 pour :\n\u2022 Prendre rendez-vous\n\u2022 Renouveler une ordonnance\n\u2022 Consulter vos resultats\n\u2022 Organiser une teleconsultation\n\nComment puis-je vous aider ?",
    delay: 1200,
    quickReplies: [
      { label: "Prendre RDV", value: "prise rdv" },
      { label: "Teleconsultation", value: "teleconsultation" },
      { label: "Ordonnance", value: "ordonnance" },
      { label: "Resultats labo", value: "resultats" },
    ],
  },
  "prise rdv": {
    text: "**Prise de rendez-vous**\n\nChoisissez le type de consultation :\n\n\ud83e\ude7a **Medecine generale** — Dr. Martin\n\u2022 Prochains creneaux : Lun 21/04 9h, 11h, 14h30\n\n\ud83e\uddb7 **Dermatologie** — Dr. Leroy\n\u2022 Prochains creneaux : Mar 22/04 10h, 15h\n\n\ud83d\udc76 **Pediatrie** — Dr. Faure\n\u2022 Prochains creneaux : Mer 23/04 9h, 11h30\n\n\ud83e\uddb4 **Orthopedie** — Dr. Roux\n\u2022 Prochains creneaux : Jeu 24/04 8h30, 14h\n\n\ud83d\udc93 **Cardiologie** — Dr. Bernard\n\u2022 Prochains creneaux : Ven 25/04 10h\n\nQuel specialiste et creneau vous convient ?",
    delay: 2200,
    quickReplies: [
      { label: "Dr. Martin Lun 9h", value: "confirmer rdv med" },
      { label: "Dr. Leroy Mar 10h", value: "confirmer rdv med" },
      { label: "Urgence", value: "urgence" },
      { label: "Teleconsultation", value: "teleconsultation" },
    ],
  },
  "confirmer rdv med": {
    text: "\u2705 **Rendez-vous confirme !**\n\n**Medecin :** Dr. Martin — Medecine generale\n**Date :** Lundi 21 avril 2026\n**Heure :** 09:00\n**Lieu :** Cabinet MediAssist, 15 rue Pasteur, 75015 Paris\n\n**Rappels automatiques :**\n\u2022 SMS J-2\n\u2022 WhatsApp J-1 a 18h\n\u2022 WhatsApp H-1\n\n**Documents a apporter :**\n\u2022 Carte Vitale\n\u2022 Carte mutuelle\n\u2022 Ordonnances en cours\n\nA bientot !",
    delay: 2000,
    quickReplies: [
      { label: "Documents 1ere visite", value: "documents" },
      { label: "Modifier RDV", value: "annuler rdv" },
      { label: "Itineraire", value: "horaires" },
    ],
  },
  "rappel rdv": {
    text: "\ud83d\udd14 **Rappels automatiques actifs**\n\nVos prochains rendez-vous :\n\n**1. Dr. Martin** — Lun 21/04 a 09:00\n\u2022 Rappel WhatsApp envoye J-1\n\u2022 Confirmation recue : \u2705\n\n**2. Dr. Leroy (dermatologie)** — Mar 29/04 a 15:00\n\u2022 Rappel programme J-2\n\u2022 En attente de confirmation\n\n**Systeme de rappels :**\n\u2022 J-2 : SMS de rappel\n\u2022 J-1 : WhatsApp avec bouton confirmer/reporter\n\u2022 H-1 : Dernier rappel\n\n\ud83d\udcca **Taux de no-show reduit de 68%** grace aux rappels IA.",
    delay: 2000,
    quickReplies: [
      { label: "Confirmer RDV", value: "confirmer rdv med" },
      { label: "Reporter RDV", value: "annuler rdv" },
      { label: "Mes RDV", value: "prise rdv" },
    ],
  },
  ordonnance: {
    text: "\ud83d\udcdd **Renouvellement d'ordonnance**\n\nJe peux transmettre votre demande au medecin.\n\n**Vos traitements en cours :**\n\u2022 Levothyrox 75\u00b5g — 1 cp/jour (Dr. Martin)\n\u2022 Metformine 500mg — 2 cp/jour (Dr. Martin)\n\u2022 Vitamine D 100 000 UI — 1/trimestre\n\n**Pour renouveler :**\n1\ufe0f\u20e3 Selectionnez le(s) traitement(s)\n2\ufe0f\u20e3 Le medecin valide sous 24-48h\n3\ufe0f\u20e3 Ordonnance envoyee sur votre espace + pharmacie\n\n\u26a0\ufe0f Derniere consultation : 15/01/2026\nUn renouvellement necessitant un examen pourra etre conditionne a un RDV.",
    delay: 2400,
    quickReplies: [
      { label: "Renouveler tout", value: "ordonnance" },
      { label: "Prendre RDV controle", value: "prise rdv" },
      { label: "Envoyer a pharmacie", value: "ordonnance" },
      { label: "Suivi traitement", value: "suivi traitement" },
    ],
  },
  resultats: {
    text: "\ud83e\uddea **Resultats d'analyses**\n\nVos derniers resultats sont disponibles :\n\n**Bilan sanguin du 10/04/2026** (Labo BioSante)\n\u2022 Statut : \u2705 Resultats disponibles\n\u2022 Glycemie a jeun : 0.95 g/L (N: 0.70-1.10)\n\u2022 HbA1c : 6.2% (N: <7%)\n\u2022 TSH : 2.1 mUI/L (N: 0.4-4.0)\n\u2022 Cholesterol total : 2.10 g/L (N: <2.40)\n\n\ud83d\udfe2 **Tous les marqueurs sont dans les normes.**\n\nLe Dr. Martin a annote : *\"Resultats satisfaisants. Continuer le traitement actuel.\"*\n\n\u26a0\ufe0f Ces resultats ne remplacent pas une consultation medicale.",
    delay: 2500,
    quickReplies: [
      { label: "RDV suivi", value: "prise rdv" },
      { label: "Ordonnance", value: "ordonnance" },
      { label: "Historique analyses", value: "resultats" },
      { label: "Teleconsultation", value: "teleconsultation" },
    ],
  },
  teleconsultation: {
    text: "\ud83d\udcf9 **Teleconsultation video**\n\nConsultez un medecin depuis chez vous :\n\n**Disponibilites teleconsultation :**\n\u2022 Dr. Martin — Aujourd'hui 17h, Demain 9h\n\u2022 Dr. Faure — Demain 14h, 16h30\n\n**Deroulement :**\n1\ufe0f\u20e3 Reservez un creneau\n2\ufe0f\u20e3 Lien video envoye par WhatsApp 10 min avant\n3\ufe0f\u20e3 Consultation securisee (15-20 min)\n4\ufe0f\u20e3 Ordonnance + compte-rendu envoyes apres\n\n**Tarif :** 25\u20ac (secteur 1) — Tiers payant possible\n**Remboursement :** 70% Secu + complement mutuelle\n\nQuel creneau vous convient ?",
    delay: 2200,
    quickReplies: [
      { label: "Dr. Martin 17h", value: "confirmer rdv med" },
      { label: "Demain 9h", value: "confirmer rdv med" },
      { label: "Carte Vitale ?", value: "carte vitale" },
      { label: "RDV cabinet", value: "prise rdv" },
    ],
  },
  urgence: {
    text: "\ud83d\udea8 **Urgence medicale**\n\n**Si urgence vitale, appelez IMMEDIATEMENT :**\n\u2022 \ud83d\ude91 **SAMU : 15**\n\u2022 \ud83d\ude92 Pompiers : **18**\n\u2022 \ud83c\udd98 Europeen : **112**\n\n**Signes d'urgence vitale :**\n\u2022 Douleur thoracique / difficulte respiratoire\n\u2022 Perte de connaissance\n\u2022 Hemorragie importante\n\u2022 AVC (visage, bras, parole)\n\n**Urgences non vitales :**\n\u2022 \ud83c\udfe5 SOS Medecins : **3624**\n\u2022 \ud83d\udcde Medecin de garde : **01 45 67 89 10**\n\u2022 \ud83e\udea7 Pharmacie de garde : **3237**\n\n\u26a0\ufe0f **Ce chatbot ne remplace PAS un avis medical en situation d'urgence.**",
    delay: 1800,
    quickReplies: [
      { label: "Teleconsultation rapide", value: "teleconsultation" },
      { label: "Medecin de garde", value: "horaires" },
      { label: "Envoyer photo symptome", value: "photo symptome" },
    ],
  },
  horaires: {
    text: "\ud83d\udd52 **Horaires du cabinet MediAssist**\n\n**Consultations :**\n\u2022 Lundi - Vendredi : 8h30 - 19h00\n\u2022 Samedi : 9h00 - 13h00\n\u2022 Dimanche : Ferme (teleconsultation possible)\n\n**Medecin de garde :**\n\u2022 Soirs 19h-8h : Dr. appel au **01 45 67 89 10**\n\u2022 Week-end/feries : SOS Medecins **3624**\n\n**Adresse :**\n15 rue Pasteur, 75015 Paris\nMetro : Pasteur (L6/L12)\nParking : Vinci Pasteur a 50m\n\n**Teleconsultation :** Disponible 7j/7, 8h-22h",
    delay: 1800,
    quickReplies: [
      { label: "Prendre RDV", value: "prise rdv" },
      { label: "Teleconsultation", value: "teleconsultation" },
      { label: "Urgence", value: "urgence" },
      { label: "Itineraire Google Maps", value: "horaires" },
    ],
  },
  documents: {
    text: "\ud83d\udcc2 **Documents pour votre visite**\n\n**Premiere consultation :**\n\u2022 \ud83d\udcb3 Carte Vitale (+ attestation papier si besoin)\n\u2022 \ud83c\udfe5 Carte de mutuelle\n\u2022 \ud83d\udcdd Ordonnances en cours\n\u2022 \ud83e\uddea Derniers resultats d'analyses\n\u2022 \ud83d\udcc4 Carnet de vaccination\n\u2022 \ud83d\udcf7 Courriers de specialistes\n\n**Consultation de suivi :**\n\u2022 Carte Vitale\n\u2022 Resultats d'examens prescrits\n\n**Teleconsultation :**\n\u2022 Connexion internet stable\n\u2022 Camera + micro actifs\n\u2022 Piece calme et eclairee\n\nVous pouvez m'envoyer vos documents a l'avance ici !",
    delay: 2000,
    quickReplies: [
      { label: "Prendre RDV", value: "prise rdv" },
      { label: "Carte Vitale", value: "carte vitale" },
      { label: "Vaccinations", value: "vaccin" },
      { label: "Teleconsultation", value: "teleconsultation" },
    ],
  },
  "carte vitale": {
    text: "\ud83d\udcb3 **Carte Vitale & Securite Sociale**\n\n**Votre carte Vitale :**\n\u2022 N\u00b0 Secu : 1 85 12 75 XXX XXX XX\n\u2022 Statut : \u2705 Active\n\u2022 Mise a jour : 12/2025\n\n**Remboursements :**\n\u2022 Consultation medecin traitant : 70% (25\u20ac)\n\u2022 Specialiste avec adressage : 70%\n\u2022 Teleconsultation : 70% (meme tarif)\n\u2022 Analyses labo : 60-100%\n\n**Tiers payant :**\n\u2022 Active sur votre dossier\n\u2022 Pas d'avance de frais Secu\n\u2022 Complement mutuelle selon contrat\n\n\ud83d\udca1 Pensez a mettre a jour votre carte en pharmacie chaque trimestre.",
    delay: 2000,
    quickReplies: [
      { label: "Prendre RDV", value: "prise rdv" },
      { label: "Mes resultats", value: "resultats" },
      { label: "Ordonnance", value: "ordonnance" },
    ],
  },
  vaccin: {
    text: "\ud83d\udc89 **Vaccinations**\n\n**Votre carnet vaccinal :**\n\u2022 DTP (rappel) : \u2705 Fait 03/2024 — Prochain : 03/2034\n\u2022 Grippe saisonniere : \u26a0\ufe0f A faire (campagne oct-nov)\n\u2022 COVID-19 : \u2705 A jour\n\u2022 Hepatite B : \u2705 Complete\n\n**Creneaux vaccination disponibles :**\n\u2022 Grippe : tous les jours sans RDV (oct-jan)\n\u2022 Rappels : sur RDV avec Dr. Martin\n\u2022 Voyage : consultation dediee (fievre jaune, hep A...)\n\n**Vaccination enfants :**\n\u2022 Dr. Faure (pediatrie) — Carnet de sante numerique\n\u2022 Rappels automatiques selon calendrier vaccinal\n\nSouhaitez-vous prendre RDV pour un vaccin ?",
    delay: 2200,
    quickReplies: [
      { label: "RDV vaccination", value: "prise rdv" },
      { label: "Vaccins voyage", value: "vaccin" },
      { label: "Carnet enfant", value: "vaccin" },
      { label: "Documents", value: "documents" },
    ],
  },
  certificat: {
    text: "\ud83d\udcc4 **Certificats medicaux**\n\nQuel type de certificat souhaitez-vous ?\n\n\u2022 \ud83c\udfc3 **Certificat sportif** — aptitude a la pratique\n\u2022 \ud83c\udfe2 **Arret de travail** — prolongation ou nouveau\n\u2022 \u2708\ufe0f **Certificat voyage** — aptitude au vol, vaccins\n\u2022 \ud83d\ude97 **Certificat permis** — visite medicale\n\u2022 \ud83c\udfeb **Certificat scolaire** — PAI, eviction, retour\n\n**Procedure :**\n1\ufe0f\u20e3 RDV avec le medecin (en cabinet ou teleconsultation)\n2\ufe0f\u20e3 Examen / evaluation\n3\ufe0f\u20e3 Certificat envoye par email + espace patient\n\n\ud83d\udca1 Certains certificats sont soumis a consultation obligatoire.",
    delay: 2000,
    quickReplies: [
      { label: "RDV certificat", value: "prise rdv" },
      { label: "Certificat sport", value: "certificat" },
      { label: "Arret de travail", value: "certificat" },
      { label: "Teleconsultation", value: "teleconsultation" },
    ],
  },
  "suivi traitement": {
    text: "\ud83d\udc8a **Suivi de traitement**\n\n**Vos traitements actifs :**\n\n**1. Levothyrox 75\u00b5g**\n\u2022 Posologie : 1 cp le matin a jeun\n\u2022 Rappel : \u2705 Tous les jours a 7h30\n\u2022 Prochain controle TSH : 15/05/2026\n\n**2. Metformine 500mg**\n\u2022 Posologie : 1 cp matin + 1 cp soir au repas\n\u2022 Rappel : \u2705 8h + 20h\n\u2022 Prochain controle HbA1c : 10/07/2026\n\n**3. Vitamine D 100 000 UI**\n\u2022 Posologie : 1 ampoule/trimestre\n\u2022 Prochaine prise : 01/07/2026\n\n\ud83d\udd14 **Rappels medicaments :** actifs par WhatsApp\n\ud83d\udcca **Observance :** 94% ce mois-ci",
    delay: 2400,
    quickReplies: [
      { label: "Renouveler ordonnance", value: "ordonnance" },
      { label: "Modifier rappels", value: "suivi traitement" },
      { label: "Effets secondaires", value: "photo symptome" },
      { label: "RDV controle", value: "prise rdv" },
    ],
  },
  "photo symptome": {
    text: "\ud83d\udcf7 **Envoi photo symptome**\n\nVous pouvez m'envoyer une photo pour une pre-analyse IA :\n\n\u2022 Lesion cutanee / eruption\n\u2022 Blessure / gonflement\n\u2022 Reaction allergique visible\n\u2022 Evolution post-operatoire\n\n---\n*Simulation :* \ud83d\udd0d Analyse en cours...\n\n\u2705 **Pre-analyse IA :**\n\u2022 Zone : Avant-bras droit\n\u2022 Observation : Rougeur localisee, 3cm, bords nets\n\u2022 Suggestion : Compatible avec dermatite de contact\n\u2022 Recommandation : Consultation dermatologie sous 7 jours\n\n\u26a0\ufe0f **IMPORTANT : Ceci n'est PAS un diagnostic medical.**\nSeul un medecin peut poser un diagnostic apres examen clinique.\n\nSouhaitez-vous prendre RDV avec le dermatologue ?",
    delay: 3000,
    quickReplies: [
      { label: "RDV dermato", value: "prise rdv" },
      { label: "Teleconsultation", value: "teleconsultation" },
      { label: "Urgence", value: "urgence" },
      { label: "Suivi traitement", value: "suivi traitement" },
    ],
  },
  "annuler rdv": {
    text: "\ud83d\udcc5 **Annuler / Reporter un rendez-vous**\n\nVos prochains RDV :\n\n**1. Dr. Martin** — Lun 21/04 a 09:00\n**2. Dr. Leroy** — Mar 29/04 a 15:00\n\n**Options :**\n\u2022 \u274c **Annuler** — Le creneau sera libere pour un autre patient\n\u2022 \ud83d\udd04 **Reporter** — Choisir un nouveau creneau\n\n\u26a0\ufe0f Merci d'annuler **au moins 24h a l'avance**.\nAu-dela de 3 absences non excusees, une penalite de 20\u20ac pourra s'appliquer.\n\nQuel RDV souhaitez-vous modifier ?",
    delay: 2000,
    quickReplies: [
      { label: "Annuler Dr. Martin", value: "annuler rdv" },
      { label: "Reporter Dr. Leroy", value: "prise rdv" },
      { label: "Prendre nouveau RDV", value: "prise rdv" },
      { label: "Retour accueil", value: "bonjour" },
    ],
  },
};

const MEDICAL_KEYWORDS: Record<string, string[]> = {
  bonjour: ["bonjour", "salut", "hello", "bonsoir", "coucou", "hey", "hi"],
  "prise rdv": ["rdv", "rendez-vous", "reserver", "consultation", "prendre rdv", "creneau", "disponibilite"],
  "rappel rdv": ["rappel", "reminder", "notification", "confirmer rdv", "no-show"],
  ordonnance: ["ordonnance", "prescription", "medicament", "renouvellement", "traitement", "pilule", "comprimes"],
  resultats: ["resultat", "analyse", "laboratoire", "labo", "bilan", "prise de sang", "biologie"],
  teleconsultation: ["teleconsultation", "visio", "video", "distance", "domicile", "en ligne", "tele"],
  urgence: ["urgence", "urgent", "samu", "15", "112", "secours", "grave", "douleur", "respir"],
  horaires: ["horaire", "heure", "ouverture", "fermeture", "quand", "adresse", "acces", "parking", "metro"],
  documents: ["document", "papier", "apporter", "premiere visite", "dossier", "piece"],
  "carte vitale": ["carte vitale", "secu", "securite sociale", "remboursement", "tiers payant", "mutuelle"],
  vaccin: ["vaccin", "vaccination", "rappel vaccin", "grippe", "covid", "carnet vaccinal", "injection"],
  certificat: ["certificat", "attestation", "arret travail", "sport", "aptitude", "medical"],
  "suivi traitement": ["suivi", "traitement", "observance", "rappel medicament", "posologie", "effets secondaires"],
  "photo symptome": ["photo", "image", "symptome", "bouton", "rougeur", "eruption", "envoyer photo", "peau"],
  "annuler rdv": ["annuler", "reporter", "deplacer", "changer rdv", "modifier rdv", "decaler"],
};

const { intents, keywords } = mergeWithVocalis(MEDICAL_INTENTS, MEDICAL_KEYWORDS);

const medicalConfig: SimulatorConfig = {
  botName: "MediAssist IA",
  botAvatar: "M+",
  welcomeMessage:
    "Bonjour ! Je suis l'assistant IA du cabinet **MediAssist** \ud83c\udfe5\n\nJe peux vous aider pour :\n\u2022 Prendre rendez-vous\n\u2022 Renouveler une ordonnance\n\u2022 Consulter vos resultats\n\u2022 Teleconsultation video\n\u2022 Suivi de traitement\n\nComment puis-je vous aider ?",
  initialQuickReplies: [
    { label: "\ud83d\udcc5 Prendre RDV", value: "prise rdv" },
    { label: "\ud83d\udcf9 Teleconsultation", value: "teleconsultation" },
    { label: "\ud83d\udcdd Ordonnance", value: "ordonnance" },
    { label: "\ud83e\uddea Resultats", value: "resultats" },
    { label: "\ud83d\udc89 Vaccinations", value: "vaccin" },
    { label: "\ud83d\udea8 Urgence", value: "urgence" },
  ],
  intents,
  keywords,
  fallback: createFallback([
    { label: "Prendre RDV", value: "prise rdv" },
    { label: "Teleconsultation", value: "teleconsultation" },
    { label: "Ordonnance", value: "ordonnance" },
    { label: "Urgence", value: "urgence" },
    { label: "Tarifs Vocalis", value: "tarif" },
  ]),
};

export { medicalConfig };
export default medicalConfig;
