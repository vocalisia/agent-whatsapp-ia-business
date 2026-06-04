import type { SimulatorConfig } from "../WhatsAppSimulator";
import { mergeWithVocalis, createFallback } from "./vocalis-features";

const ASSURANCE_INTENTS = {
  bonjour: {
    text: "Bonjour ! Bienvenue chez **AssurPlus**.\n\nJe suis votre assistant IA, disponible 24/7 pour gerer vos assurances.\n\nQue puis-je faire pour vous aujourd'hui ?",
    delay: 1200,
    quickReplies: [
      { label: "Declarer un sinistre", value: "declarer sinistre" },
      { label: "Devis auto", value: "devis auto" },
      { label: "Mon dossier", value: "suivi dossier" },
      { label: "Parler a un conseiller", value: "rdv conseiller" },
      { label: "Telephonie IA", value: "telephonie" },
      { label: "WhatsApp features", value: "whatsapp features" },
    ],
  },
  "declarer sinistre": {
    text: "Je vais vous guider pour declarer votre sinistre etape par etape.\n\n**Etape 1/4** - Type de sinistre :\n\nDe quel type de sinistre s'agit-il ?\n\n\u2022 \ud83d\ude97 Accident auto/moto\n\u2022 \ud83c\udfe0 Degat des eaux\n\u2022 \ud83d\udd25 Incendie\n\u2022 \ud83d\udca8 Catastrophe naturelle\n\u2022 \ud83d\udd13 Vol / cambriolage\n\u2022 \ud83d\udca5 Bris de glace\n\nVotre declaration sera enregistree sous le n\u00b0 **SIN-2026-04-8741**.",
    delay: 2000,
    quickReplies: [
      { label: "\ud83d\ude97 Accident auto", value: "sinistre auto" },
      { label: "\ud83c\udfe0 Degat des eaux", value: "sinistre eau" },
      { label: "\ud83d\udd25 Incendie", value: "sinistre incendie" },
      { label: "\ud83d\udd13 Vol", value: "sinistre vol" },
      { label: "\ud83d\udcf7 Envoyer photo", value: "photo sinistre" },
    ],
  },
  "sinistre auto": {
    text: "**Accident auto - Etape 2/4**\n\nMerci. J'ai besoin des informations suivantes :\n\n1\ufe0f\u20e3 Date et heure de l'accident\n2\ufe0f\u20e3 Lieu (adresse ou commune)\n3\ufe0f\u20e3 Description des faits\n4\ufe0f\u20e3 Vehicules impliques\n5\ufe0f\u20e3 Y a-t-il des blesses ?\n\n\u26a0\ufe0f **Rappel** : Vous avez **5 jours** pour declarer un accident auto.\n\nVous pouvez aussi m'envoyer directement une **photo des degats** pour une estimation IA.",
    delay: 2200,
    quickReplies: [
      { label: "\ud83d\udcf7 Envoyer photo", value: "photo sinistre" },
      { label: "Documents necessaires", value: "documents" },
      { label: "Franchise auto", value: "franchise" },
      { label: "Assistance depannage", value: "urgence" },
    ],
  },
  "sinistre eau": {
    text: "**Degat des eaux - Etape 2/4**\n\nPour traiter votre declaration :\n\n1\ufe0f\u20e3 Origine de la fuite (toiture, canalisation, voisin...)\n2\ufe0f\u20e3 Pieces touchees\n3\ufe0f\u20e3 Estimation des degats\n4\ufe0f\u20e3 Constat amiable degat des eaux rempli ?\n\n\ud83d\udcdd N'oubliez pas de remplir le **constat amiable** avec votre voisin si applicable.\n\nVotre contrat habitation **HAB-7821** couvre les degats des eaux jusqu'a **15 000 \u20ac**.",
    delay: 2000,
    quickReplies: [
      { label: "\ud83d\udcf7 Envoyer photo", value: "photo sinistre" },
      { label: "Ma couverture", value: "garanties" },
      { label: "Franchise habitation", value: "franchise" },
      { label: "RDV expert", value: "rdv conseiller" },
    ],
  },
  "sinistre incendie": {
    text: "**Incendie - Declaration urgente**\n\n\ud83d\udea8 Si l'incendie est en cours, appelez immediatement le **18** ou le **112**.\n\nUne fois en securite :\n1\ufe0f\u20e3 Ne touchez a rien avant le passage de l'expert\n2\ufe0f\u20e3 Conservez les objets endommages\n3\ufe0f\u20e3 Prenez des photos de tous les degats\n\nVotre contrat couvre les degats par incendie jusqu'a **150 000 \u20ac** (valeur a neuf).\n\nUn expert sera missionne sous **48h**.",
    delay: 2200,
    quickReplies: [
      { label: "\ud83c\udd98 Assistance urgente", value: "urgence" },
      { label: "Ma couverture", value: "garanties" },
      { label: "Contacter expert", value: "rdv conseiller" },
    ],
  },
  "sinistre vol": {
    text: "**Vol / Cambriolage**\n\n\u26a0\ufe0f **Etapes obligatoires** :\n\n1\ufe0f\u20e3 **Deposez plainte** au commissariat sous 24h\n2\ufe0f\u20e3 Listez les objets voles avec valeur estimee\n3\ufe0f\u20e3 Rassemblez factures et photos des biens\n4\ufe0f\u20e3 Verifiez les traces d'effraction\n\n\ud83d\udcdd Envoyez-moi le **recepisse de plainte** et je lance le dossier.\n\nDelai de declaration : **2 jours ouvrables** apres constatation du vol.",
    delay: 2000,
    quickReplies: [
      { label: "Documents necessaires", value: "documents" },
      { label: "Ma couverture vol", value: "garanties" },
      { label: "Franchise vol", value: "franchise" },
      { label: "\ud83d\udcf7 Envoyer photo", value: "photo sinistre" },
    ],
  },
  "photo sinistre": {
    text: "\ud83d\udcf7 **Analyse photo IA**\n\nEnvoyez-moi une photo du sinistre et notre IA analysera :\n\n\u2022 **Type de degat** detecte automatiquement\n\u2022 **Gravite** estimee (legere / moyenne / severe)\n\u2022 **Cout de reparation** estime\n\u2022 **Couverture** applicable a votre contrat\n\n---\n*Simulation :* \ud83d\udd0d Analyse en cours...\n\n\u2705 **Resultat** :\n\u2022 Type : Choc pare-chocs arriere\n\u2022 Gravite : Moyenne\n\u2022 Estimation : **1 200 \u20ac - 1 800 \u20ac**\n\u2022 Franchise applicable : **300 \u20ac**\n\u2022 Prise en charge estimee : **900 \u20ac - 1 500 \u20ac**\n\nSouhaitez-vous valider cette declaration ?",
    delay: 3000,
    quickReplies: [
      { label: "\u2705 Valider declaration", value: "declarer sinistre" },
      { label: "Garage agree", value: "urgence" },
      { label: "Ma franchise", value: "franchise" },
      { label: "Suivi dossier", value: "suivi dossier" },
    ],
  },
  "suivi dossier": {
    text: "\ud83d\udcca **Suivi de vos dossiers**\n\nVoici l'etat de vos dossiers en cours :\n\n**1. SIN-2026-03-6529** - Degat des eaux\n\u2022 Statut : \ud83d\udfe2 Expert missionne\n\u2022 RDV expert : 22/04/2026 a 10h\n\u2022 Estimation : 3 200 \u20ac\n\n**2. SIN-2026-01-4102** - Bris de glace\n\u2022 Statut : \u2705 Cloture - Rembourse\n\u2022 Montant verse : 450 \u20ac\n\u2022 Date virement : 18/02/2026\n\nPour un dossier specifique, envoyez-moi le **numero de reference** (ex: SIN-2026-XXXX).",
    delay: 2500,
    quickReplies: [
      { label: "Details dossier 6529", value: "suivi dossier" },
      { label: "Nouveau sinistre", value: "declarer sinistre" },
      { label: "Documents manquants", value: "documents" },
      { label: "Contacter gestionnaire", value: "rdv conseiller" },
    ],
  },
  devis: {
    text: "\ud83d\udcb0 **Devis instantane**\n\nQuel type d'assurance vous interesse ?\n\n\ud83d\ude97 **Auto** - A partir de 28 \u20ac/mois\n\ud83c\udfe0 **Habitation** - A partir de 12 \u20ac/mois\n\ud83c\udfe5 **Sante / Mutuelle** - A partir de 35 \u20ac/mois\n\ud83d\udcbc **Pro / RC** - A partir de 19 \u20ac/mois\n\u2708\ufe0f **Voyage** - A partir de 8 \u20ac/voyage\n\nJe calcule votre tarif personnalise en 2 minutes !",
    delay: 1800,
    quickReplies: [
      { label: "\ud83d\ude97 Devis auto", value: "devis auto" },
      { label: "\ud83c\udfe0 Devis habitation", value: "devis habitation" },
      { label: "\ud83c\udfe5 Devis sante", value: "devis sante" },
      { label: "\ud83d\udcbc Devis pro", value: "devis pro" },
    ],
  },
  "devis auto": {
    text: "\ud83d\ude97 **Devis Auto Express**\n\nPour calculer votre tarif, j'ai besoin de :\n\n1\ufe0f\u20e3 Marque et modele du vehicule\n2\ufe0f\u20e3 Annee de mise en circulation\n3\ufe0f\u20e3 Kilometrage annuel\n4\ufe0f\u20e3 Date permis de conduire\n5\ufe0f\u20e3 Bonus/malus actuel\n\n---\n*Simulation* :\n\n\u2705 **Renault Clio V (2023)**\n\u2022 Tiers + : **32 \u20ac/mois**\n\u2022 Tous risques : **48 \u20ac/mois**\n\u2022 Bonus 0.50 applique\n\u2022 Franchise : 300 \u20ac (tiers+) / 150 \u20ac (TR)\n\n\ud83c\udf1f *-15% pour souscription en ligne !*",
    delay: 2500,
    quickReplies: [
      { label: "\u2705 Souscrire en ligne", value: "contrat" },
      { label: "Garanties incluses", value: "garanties" },
      { label: "Carte verte", value: "carte verte" },
      { label: "RDV conseiller", value: "rdv conseiller" },
    ],
  },
  "devis habitation": {
    text: "\ud83c\udfe0 **Devis Habitation Express**\n\nQuelques infos pour votre tarif :\n\n1\ufe0f\u20e3 Type (appartement / maison)\n2\ufe0f\u20e3 Surface en m\u00b2\n3\ufe0f\u20e3 Nombre de pieces\n4\ufe0f\u20e3 Proprietaire ou locataire\n5\ufe0f\u20e3 Systeme d'alarme ?\n\n---\n*Simulation* : Appartement T3, 65m\u00b2, locataire\n\n\u2705 **Formule Essentielle** : 14 \u20ac/mois\n\u2705 **Formule Confort** : 22 \u20ac/mois\n\u2705 **Formule Premium** : 31 \u20ac/mois\n\nGaranties incluses : degat des eaux, incendie, vol, RC.",
    delay: 2500,
    quickReplies: [
      { label: "Comparer formules", value: "garanties" },
      { label: "Souscrire", value: "contrat" },
      { label: "Franchise habitation", value: "franchise" },
      { label: "Attestation logement", value: "attestation" },
    ],
  },
  "devis sante": {
    text: "\ud83c\udfe5 **Devis Sante / Mutuelle**\n\nPour un devis personnalise :\n\n1\ufe0f\u20e3 Nombre de personnes a couvrir\n2\ufe0f\u20e3 Age(s)\n3\ufe0f\u20e3 Regime (salarie, TNS, retraite)\n4\ufe0f\u20e3 Besoins specifiques (optique, dentaire, hospitalisation)\n\n---\n*Simulation* : 1 adulte, 35 ans, salarie\n\n\u2705 **Eco** : 38 \u20ac/mois\n\u2705 **Equilibre** : 55 \u20ac/mois\n\u2705 **Serenite** : 79 \u20ac/mois\n\n\ud83c\udf1f Prise en charge sous 48h, sans delai de carence.",
    delay: 2500,
    quickReplies: [
      { label: "Comparer formules", value: "garanties" },
      { label: "Souscrire", value: "contrat" },
      { label: "Tiers payant", value: "paiement" },
      { label: "RDV conseiller", value: "rdv conseiller" },
    ],
  },
  "devis pro": {
    text: "\ud83d\udcbc **Devis Professionnel / RC Pro**\n\nVotre activite necessite une couverture adaptee :\n\n1\ufe0f\u20e3 Type d'activite (conseil, BTP, commerce...)\n2\ufe0f\u20e3 Chiffre d'affaires annuel\n3\ufe0f\u20e3 Nombre de salaries\n4\ufe0f\u20e3 Couvertures souhaitees\n\n---\n*Simulation* : Consultant IT, CA 120K\u20ac, 1 personne\n\n\u2705 **RC Pro** : 22 \u20ac/mois\n\u2705 **RC Pro + Cyber** : 38 \u20ac/mois\n\u2705 **Pack Integral** : 55 \u20ac/mois\n\nProtegez votre activite des aujourd'hui.",
    delay: 2500,
    quickReplies: [
      { label: "Garanties RC Pro", value: "garanties" },
      { label: "Souscrire", value: "contrat" },
      { label: "RDV conseiller", value: "rdv conseiller" },
    ],
  },
  contrat: {
    text: "\ud83d\udcc4 **Vos contrats AssurPlus**\n\n**1. Auto - Tous Risques** (n\u00b0 AP-AUT-782341)\n\u2022 Vehicule : Renault Clio V\n\u2022 Echeance : 15/09/2026\n\u2022 Prime : 576 \u20ac/an (48 \u20ac/mois)\n\u2022 Bonus : 0.50\n\n**2. Habitation - Confort** (n\u00b0 AP-HAB-7821)\n\u2022 Adresse : 12 rue des Lilas, 75011 Paris\n\u2022 Echeance : 01/01/2027\n\u2022 Prime : 264 \u20ac/an (22 \u20ac/mois)\n\nVous pouvez telecharger vos contrats ou les modifier en ligne.",
    delay: 2200,
    quickReplies: [
      { label: "\ud83d\udcbe Telecharger contrat", value: "contrat" },
      { label: "\u270f\ufe0f Modifier contrat", value: "modification contrat" },
      { label: "Resilier", value: "resiliation" },
      { label: "Attestation", value: "attestation" },
    ],
  },
  attestation: {
    text: "\ud83d\udcc3 **Attestation d'assurance**\n\nQuel type d'attestation souhaitez-vous ?\n\n\u2022 \ud83d\ude98 **Auto** - Attestation vehicule\n\u2022 \ud83c\udfe0 **Habitation** - Attestation logement\n\u2022 \ud83c\udfe5 **Sante** - Attestation mutuelle\n\u2022 \ud83d\udcbc **RC Pro** - Attestation professionnelle\n\n---\n*Generation automatique* :\n\n\u2705 Votre attestation auto **AP-AUT-782341** est prete !\nValable du 01/01/2026 au 31/12/2026.\n\n\ud83d\udce7 Envoyee par email a votre adresse enregistree.\n\ud83d\udcf1 Disponible aussi dans votre espace client.",
    delay: 2000,
    quickReplies: [
      { label: "Carte verte", value: "carte verte" },
      { label: "Attestation habitation", value: "attestation" },
      { label: "Mon contrat", value: "contrat" },
      { label: "Modifier adresse", value: "modification contrat" },
    ],
  },
  "carte verte": {
    text: "\ud83d\ude98 **Carte verte (carte internationale)**\n\nVotre carte verte est un document obligatoire pour circuler.\n\n\u2705 **Carte verte active** :\n\u2022 Contrat : AP-AUT-782341\n\u2022 Vehicule : Renault Clio V\n\u2022 Immatriculation : AB-123-CD\n\u2022 Validite : 01/01/2026 - 31/12/2026\n\n\ud83d\udce5 Je vous envoie la carte verte par email et SMS.\n\n\u26a0\ufe0f Depuis avril 2024, la carte verte papier n'est plus obligatoire. L'attestation digitale suffit.",
    delay: 2000,
    quickReplies: [
      { label: "\ud83d\udce7 Recevoir par email", value: "carte verte" },
      { label: "Attestation auto", value: "attestation" },
      { label: "Mon contrat auto", value: "contrat" },
      { label: "Ajouter conducteur", value: "modification contrat" },
    ],
  },
  resiliation: {
    text: "\ud83d\uded1 **Resiliation de contrat**\n\nVous souhaitez resilier ? Voici vos options :\n\n**Loi Hamon** (apres 1 an)\n\u2022 Resiliation a tout moment\n\u2022 Prise d'effet sous 30 jours\n\u2022 Aucun frais\n\n**Echeance annuelle**\n\u2022 Preavis de 2 mois avant echeance\n\u2022 Lettre recommandee (ou via notre formulaire)\n\n**Motif legitime**\n\u2022 Demenagement, vente vehicule, changement situation\n\u2022 Effet immediat\n\n\ud83d\udca1 Avant de resilier, souhaitez-vous que je compare avec nos nouvelles offres ? Vous pourriez economiser jusqu'a **25%**.",
    delay: 2200,
    quickReplies: [
      { label: "Comparer nouvelles offres", value: "devis" },
      { label: "Confirmer resiliation", value: "resiliation" },
      { label: "Parler a un conseiller", value: "rdv conseiller" },
      { label: "Mes contrats", value: "contrat" },
    ],
  },
  "modification contrat": {
    text: "\u270f\ufe0f **Modification de contrat**\n\nQue souhaitez-vous modifier ?\n\n\u2022 \ud83d\ude97 **Ajouter/retirer un conducteur**\n\u2022 \ud83c\udfe0 **Changer d'adresse**\n\u2022 \ud83d\udcb3 **Modifier le moyen de paiement**\n\u2022 \ud83d\udee1\ufe0f **Augmenter/reduire les garanties**\n\u2022 \ud83d\ude97 **Changer de vehicule**\n\u2022 \ud83d\udc64 **Mettre a jour coordonnees**\n\nLa plupart des modifications prennent effet sous **24h** et sont sans frais.\n\nQue souhaitez-vous modifier ?",
    delay: 2000,
    quickReplies: [
      { label: "Ajouter conducteur", value: "modification contrat" },
      { label: "Changer adresse", value: "modification contrat" },
      { label: "Augmenter garanties", value: "garanties" },
      { label: "RDV conseiller", value: "rdv conseiller" },
    ],
  },
  paiement: {
    text: "\ud83d\udcb3 **Paiement & Echeances**\n\n**Prochain prelevement** :\n\u2022 Date : 01/05/2026\n\u2022 Montant : **70 \u20ac** (auto 48\u20ac + habitation 22\u20ac)\n\u2022 Moyen : CB se terminant par ****4521\n\n**Historique recent** :\n\u2022 01/04/2026 : 70 \u20ac \u2705\n\u2022 01/03/2026 : 70 \u20ac \u2705\n\u2022 01/02/2026 : 70 \u20ac \u2705\n\n**Options** :\n\u2022 Mensuel / Trimestriel / Annuel\n\u2022 Prelevement ou CB\n\u2022 Echeancier possible en cas de difficulte",
    delay: 2000,
    quickReplies: [
      { label: "Modifier moyen paiement", value: "modification contrat" },
      { label: "Echeancier", value: "paiement" },
      { label: "Telecharger factures", value: "contrat" },
      { label: "Contacter comptabilite", value: "rdv conseiller" },
    ],
  },
  urgence: {
    text: "\ud83c\udd98 **Assistance 24/7**\n\n**Numeros d'urgence** :\n\u2022 \ud83d\ude91 SAMU : **15**\n\u2022 \ud83d\ude92 Pompiers : **18**\n\u2022 \ud83d\ude93 Police : **17**\n\u2022 \ud83c\udd98 Europeen : **112**\n\n**Assistance AssurPlus** :\n\ud83d\udcde **0 800 123 456** (gratuit, 24/7)\n\n\u2022 \ud83d\ude97 **Depannage/remorquage** : intervention sous 30 min\n\u2022 \ud83c\udfe0 **Urgence habitation** : serrurier, plombier, electricien\n\u2022 \ud83c\udfe5 **Rapatriement sanitaire** : couvert a 100%\n\u2022 \ud83d\ude97 **Vehicule de remplacement** : sous 2h en zone urbaine\n\nVotre numero de contrat : **AP-AUT-782341**",
    delay: 1800,
    quickReplies: [
      { label: "\ud83d\udcde Appeler assistance", value: "urgence" },
      { label: "Depannage auto", value: "urgence" },
      { label: "Declarer sinistre", value: "declarer sinistre" },
      { label: "Mon contrat", value: "contrat" },
    ],
  },
  garanties: {
    text: "\ud83d\udee1\ufe0f **Vos garanties - Contrat Tous Risques**\n\n**Couvertures incluses** :\n\u2022 \u2705 Responsabilite civile (illimitee)\n\u2022 \u2705 Dommages tous accidents\n\u2022 \u2705 Vol et tentative de vol\n\u2022 \u2705 Incendie et explosion\n\u2022 \u2705 Bris de glace\n\u2022 \u2705 Catastrophe naturelle\n\u2022 \u2705 Protection juridique (15 000 \u20ac)\n\u2022 \u2705 Assistance 0 km\n\n**Plafonds** :\n\u2022 Dommages materiels : **150 000 \u20ac**\n\u2022 Corporels : **Illimite**\n\u2022 Objets transportes : **1 500 \u20ac**",
    delay: 2200,
    quickReplies: [
      { label: "Ma franchise", value: "franchise" },
      { label: "Augmenter couverture", value: "modification contrat" },
      { label: "Devis sante", value: "devis sante" },
      { label: "Mon contrat", value: "contrat" },
    ],
  },
  franchise: {
    text: "\ud83d\udcca **Franchise - Explication**\n\nLa franchise est le montant qui reste a votre charge lors d'un sinistre.\n\n**Vos franchises actuelles** :\n\n\ud83d\ude97 **Auto (Tous Risques)** :\n\u2022 Dommages : **150 \u20ac**\n\u2022 Vol : **300 \u20ac**\n\u2022 Bris de glace : **0 \u20ac** (franchise offerte)\n\n\ud83c\udfe0 **Habitation (Confort)** :\n\u2022 Degat des eaux : **200 \u20ac**\n\u2022 Vol : **300 \u20ac**\n\u2022 Catastrophe naturelle : **380 \u20ac** (fixe par arrete)\n\n\ud83d\udca1 **Astuce** : Augmenter votre franchise de 150 \u20ac peut reduire votre prime de **10-15%**.",
    delay: 2200,
    quickReplies: [
      { label: "Modifier franchise", value: "modification contrat" },
      { label: "Mes garanties", value: "garanties" },
      { label: "Nouveau devis", value: "devis" },
      { label: "Declarer sinistre", value: "declarer sinistre" },
    ],
  },
  "rdv conseiller": {
    text: "\ud83d\udcc5 **Prendre rendez-vous**\n\nChoisissez le mode de contact :\n\n\ud83d\udcf1 **Appel telephonique** (15 min)\n\ud83d\udcbb **Visioconference** (30 min)\n\ud83c\udfe2 **En agence** (45 min)\n\n**Creneaux disponibles cette semaine** :\n\u2022 Mer. 19/04 - 10h00 / 14h30\n\u2022 Jeu. 20/04 - 09h00 / 11h00 / 16h00\n\u2022 Ven. 21/04 - 10h30 / 15h00\n\nVotre conseiller dedie : **Marie Dupont**\n\ud83d\udcde Direct : 01 23 45 67 89",
    delay: 2000,
    quickReplies: [
      { label: "\ud83d\udcf1 Appel 15 min", value: "rdv conseiller" },
      { label: "\ud83d\udcbb Visioconference", value: "rdv conseiller" },
      { label: "\ud83c\udfe2 En agence", value: "rdv conseiller" },
      { label: "Retour accueil", value: "bonjour" },
    ],
  },
  documents: {
    text: "\ud83d\udcc2 **Documents necessaires**\n\nSelon votre situation :\n\n**Sinistre auto** :\n\u2022 Constat amiable rempli\n\u2022 Photos des degats\n\u2022 Copie permis de conduire\n\u2022 Recepisse de plainte (si vol)\n\n**Sinistre habitation** :\n\u2022 Constat amiable degat des eaux\n\u2022 Photos avant/apres\n\u2022 Factures des biens endommages\n\u2022 Devis de reparation\n\n**Souscription** :\n\u2022 Piece d'identite\n\u2022 RIB\n\u2022 Justificatif de domicile\n\u2022 Releve d'information (auto)\n\n\ud83d\udcf7 Vous pouvez m'envoyer vos documents directement ici !",
    delay: 2200,
    quickReplies: [
      { label: "\ud83d\udcf7 Envoyer document", value: "photo sinistre" },
      { label: "Declarer sinistre", value: "declarer sinistre" },
      { label: "Suivi dossier", value: "suivi dossier" },
      { label: "Mon contrat", value: "contrat" },
    ],
  },
  "campagne sinistre": {
    text: "\ud83d\udce2 **Campagnes proactives sinistres**\n\nNotre IA lance des campagnes automatisees pour le suivi sinistres :\n\n**Appels sortants automatiques :**\n\u2022 Suivi expert J+2 apres declaration\n\u2022 Relance pieces manquantes\n\u2022 Notification avancement dossier\n\u2022 Enquete satisfaction post-remboursement\n\n**Canaux utilises :**\n\u2022 Appel IA vocal (Dualplex, voix naturelle)\n\u2022 WhatsApp template post-24h\n\u2022 SMS de rappel\n\n**Resultats constates :**\n\u2022 Delai moyen dossier : **-40%**\n\u2022 Pieces manquantes : **-65%**\n\u2022 Satisfaction assure : **+28%**\n\nLes campagnes se declenchent automatiquement via le CRM.",
    delay: 2400,
    quickReplies: [
      { label: "Comment ca marche ?", value: "campagnes" },
      { label: "Integrations CRM", value: "crm" },
      { label: "Tarifs", value: "tarif" },
      { label: "Prendre RDV", value: "rdv" },
    ],
  },
  "appel expert": {
    text: "\ud83d\udcde **Appel IA vers expert**\n\nNotre telephonie IA peut :\n\n1\ufe0f\u20e3 **Contacter l'expert** automatiquement apres declaration\n2\ufe0f\u20e3 **Transmettre le dossier** complet (photos, description, n\u00b0 contrat)\n3\ufe0f\u20e3 **Planifier le RDV** expert-assure en temps reel\n4\ufe0f\u20e3 **Confirmer par WhatsApp** a l'assure + l'expert\n\n**Modes d'appel :**\n\u2022 **Pipeline** — Transcription complete pour le dossier\n\u2022 **Dualplex** — Conversation naturelle avec l'expert\n\u2022 **Transfert humain** mid-call si besoin\n\n**Resultat :** RDV expert pris en **< 4h** au lieu de 48h.",
    delay: 2200,
    quickReplies: [
      { label: "Telephonie IA", value: "telephonie" },
      { label: "Vocal & langues", value: "vocal" },
      { label: "Dashboards", value: "dashboards" },
      { label: "Tarifs", value: "tarif" },
    ],
  },
  "template relance": {
    text: "\ud83d\udce9 **Templates Meta — Relance echeances**\n\nTemplates WhatsApp pre-approuves pour l'assurance :\n\n**1. Renouvellement police** (utility)\n> Bonjour {{nom}}, votre contrat {{type}} arrive a echeance le {{date}}. Renouvelez en 1 clic ou contactez votre conseiller.\n\n**2. Rappel paiement** (utility)\n> {{prenom}}, votre prelevement de {{montant}} ?? est prevu le {{date}}. Verifiez vos coordonnees bancaires.\n\n**3. Offre multi-contrats** (marketing)\n> Vous etes assure auto chez nous — profitez de **-20%** sur l'habitation ! Devis instantane ici.\n\n**Avantages :**\n\u2022 Envoi apres fenetre 24h WhatsApp\n\u2022 Boutons interactifs (Renouveler / Contacter)\n\u2022 Variables dynamiques depuis le CRM\n\u2022 Tracking ouverture + clic",
    delay: 2400,
    quickReplies: [
      { label: "Templates Meta", value: "templates" },
      { label: "Automatisation", value: "automatisation" },
      { label: "CRM sync", value: "crm" },
      { label: "Tarifs", value: "tarif" },
    ],
  },
};

const ASSURANCE_KEYWORDS: Record<string, string[]> = {
  bonjour: ["bonjour", "salut", "hello", "bonsoir", "coucou", "hey", "hi"],
  "declarer sinistre": [
    "sinistre",
    "accident",
    "declaration",
    "declarer",
    "crash",
    "accrochage",
    "collision",
  ],
  "photo sinistre": [
    "photo",
    "image",
    "degat",
    "dommage",
    "envoyer photo",
    "analyser",
  ],
  "suivi dossier": [
    "suivi",
    "dossier",
    "etat",
    "avancement",
    "reference",
    "numero",
    "sin-",
  ],
  devis: ["devis", "cotisation", "offre"],
  "devis auto": ["devis auto", "assurance auto", "voiture", "vehicule"],
  "devis habitation": [
    "devis habitation",
    "devis maison",
    "devis appartement",
    "assurance logement",
  ],
  "devis sante": [
    "devis sante",
    "mutuelle",
    "complementaire",
    "sante",
    "medical",
  ],
  contrat: [
    "contrat",
    "police",
    "conditions",
    "telecharger",
    "document contrat",
  ],
  attestation: ["attestation", "certificat", "justificatif", "preuve"],
  "carte verte": ["carte verte", "carte internationale", "carte auto"],
  resiliation: [
    "resilier",
    "resiliation",
    "annuler",
    "arreter",
    "quitter",
    "partir",
  ],
  "modification contrat": [
    "modifier",
    "modification",
    "changer",
    "ajouter conducteur",
    "mettre a jour",
    "changement",
  ],
  paiement: [
    "paiement",
    "payer",
    "prelevement",
    "facture",
    "echeance",
    "mensualite",
  ],
  urgence: [
    "urgence",
    "assistance",
    "depannage",
    "remorquage",
    "panne",
    "sos",
    "aide",
    "secours",
    "24/7",
  ],
  garanties: [
    "garantie",
    "couverture",
    "couvert",
    "protege",
    "inclus",
    "exclusion",
  ],
  franchise: ["franchise", "reste a charge", "montant a charge"],
  "rdv conseiller": [
    "conseiller",
    "agence",
    "contact",
    "humain",
  ],
  documents: [
    "document",
    "papier",
    "piece",
    "fournir",
  ],
  "sinistre auto": ["accident auto", "accident voiture", "choc"],
  "sinistre eau": [
    "degat des eaux",
    "fuite",
    "inondation",
    "eau",
    "canalisation",
  ],
  "sinistre incendie": ["incendie", "feu", "flamme", "brule"],
  "sinistre vol": ["vol", "cambriolage", "vole", "effraction"],
  "campagne sinistre": ["campagne sinistre", "suivi sinistre", "relance sinistre", "proactif"],
  "appel expert": ["appel expert", "expert telephonie", "contacter expert", "expert ia"],
  "template relance": ["template relance", "relance echeance", "renouvellement", "rappel paiement"],
};

const merged = mergeWithVocalis(ASSURANCE_INTENTS, ASSURANCE_KEYWORDS);

const assuranceConfig: SimulatorConfig = {
  botName: "AssurPlus",
  botAvatar: "A+",
  welcomeMessage:
    "Bonjour ! Je suis l'assistant IA d'**AssurPlus** \ud83d\udee1\ufe0f\n\nJe peux vous aider pour :\n\u2022 Declarer un sinistre\n\u2022 Suivre votre dossier\n\u2022 Obtenir un devis\n\u2022 Demander une attestation\n\u2022 Assistance 24/7\n\nComment puis-je vous aider ?",
  initialQuickReplies: [
    { label: "\ud83d\udce2 Declarer un sinistre", value: "declarer sinistre" },
    { label: "\ud83d\udcca Suivre mon dossier", value: "suivi dossier" },
    { label: "\ud83d\udcb0 Devis", value: "devis" },
    { label: "\ud83d\udcc4 Attestation", value: "attestation" },
    { label: "\ud83d\ude98 Carte verte", value: "carte verte" },
    { label: "\ud83c\udd98 Urgence", value: "urgence" },
  ],
  intents: merged.intents,
  keywords: merged.keywords,
  fallback: createFallback([
    { label: "Declarer sinistre", value: "declarer sinistre" },
    { label: "Devis", value: "devis" },
    { label: "Suivi dossier", value: "suivi dossier" },
    { label: "Assistance 24/7", value: "urgence" },
    { label: "RDV conseiller", value: "rdv conseiller" },
  ]),
};

export { assuranceConfig };
export default assuranceConfig;
