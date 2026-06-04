import type { SimulatorConfig, BotResponse } from "../WhatsAppSimulator";
import { mergeWithVocalis, createFallback } from "./vocalis-features";

const sectorIntents: Record<string, BotResponse> = {
  bonjour: {
    text: "Bienvenue chez **AutoPrestige** ! Je suis votre assistant IA.\n\nJe peux vous aider a :\n- Trouver le vehicule ideal\n- Reserver un essai routier\n- Estimer votre reprise\n- Simuler un financement\n\nQue recherchez-vous ?",
    delay: 1000,
    quickReplies: [
      { label: "Rechercher un vehicule", value: "vehicule" },
      { label: "Essai routier", value: "essai" },
      { label: "Estimer reprise", value: "reprise" },
      { label: "Financement", value: "financement" },
    ],
  },

  vehicule: {
    text: "**Recherche vehicule AutoPrestige** :\n\nPour affiner la selection, indiquez vos criteres :\n\n**Nos categories :**\n- Citadines (sur audit gratuit)\n- Berlines (sur audit gratuit)\n- SUV & Crossover (sur audit gratuit)\n- Sportives (sur audit gratuit)\n- Electriques & Hybrides (sur audit gratuit)\n\n**En vedette cette semaine :**\n- **BMW Serie 3 320d** — estimation personnalisee | 2024 | 12 000 km\n- **Mercedes GLC 300e** — estimation personnalisee | 2025 | 5 000 km\n- **Audi A4 Avant** — estimation personnalisee | 2024 | 18 000 km\n- **Tesla Model 3** — estimation personnalisee | 2025 | 3 200 km\n\nQuel type de vehicule vous interesse ?",
    delay: 2200,
    quickReplies: [
      { label: "SUV", value: "vehicule" },
      { label: "Electrique", value: "vehicule" },
      { label: "Essai routier", value: "essai" },
      { label: "Financement", value: "financement" },
    ],
  },

  essai: {
    text: "**Reservez votre essai routier** :\n\nVivez l'experience de conduite avant d'acheter !\n\n**Vehicules disponibles pour essai :**\n- BMW Serie 3 — Berline, diesel/essence\n- Mercedes GLC — SUV hybride rechargeable\n- Audi A4 Avant — Break premium\n- Tesla Model 3 — 100% electrique\n- Peugeot 3008 — SUV francais\n\n**Prochains creneaux :**\n- Samedi 19 avril — 10h, 14h, 16h\n- Lundi 21 avril — 9h, 11h, 15h\n- Mardi 22 avril — 10h, 14h\n\n**Duree :** 30 min de conduite accompagnee\n**Documents :** Permis de conduire valide\n\nQuel vehicule et quel creneau ?",
    delay: 2000,
    quickReplies: [
      { label: "BMW samedi 10h", value: "confirmer essai" },
      { label: "Tesla lundi 11h", value: "confirmer essai" },
      { label: "Autre vehicule", value: "vehicule" },
      { label: "Autre creneau", value: "essai" },
    ],
  },

  "confirmer essai": {
    text: "Essai routier confirme !\n\n**Vehicule :** BMW Serie 3 320d\n**Date :** Samedi 19 avril 2026\n**Heure :** 10:00 (30 min)\n**Lieu :** AutoPrestige — 120 boulevard de l'Auto\n\n**Accompagnateur :** Thomas M. (conseiller commercial)\n\nVous recevrez :\n- Confirmation WhatsApp\n- Rappel la veille\n- Plan d'acces + parking\n\nPensez a apporter votre permis de conduire.\nA samedi !",
    delay: 1800,
    quickReplies: [
      { label: "Merci !", value: "merci" },
      { label: "Financement", value: "financement" },
    ],
  },

  financement: {
    text: "**Simulateur financement AutoPrestige** :\n\nExemple pour une **BMW Serie 3** a estimation personnalisee :\n\n**Credit classique :**\n- Apport : estimation personnalisee\n- Duree : 48 mois\n- Mensualite : **estimation personnalisee**\n- TAEG : 4.9%\n\n**LOA (Leasing) :**\n- Apport : estimation personnalisee\n- Duree : 36 mois / 15 000 km/an\n- Loyer : **estimation personnalisee**\n- Option d'achat : estimation personnalisee\n\n**LLD (Location longue duree) :**\n- Tout inclus (assurance + entretien)\n- **estimation personnalisee** sur 36 mois\n\nNos partenaires : **BNP, Cetelem, Cofidis**\nReponse sous **24h**. Voulez-vous une simulation personnalisee ?",
    delay: 2400,
    quickReplies: [
      { label: "Simulation perso", value: "financement" },
      { label: "LOA details", value: "financement" },
      { label: "Essai routier", value: "essai" },
      { label: "Reprise vehicule", value: "reprise" },
    ],
  },

  reprise: {
    text: "**Estimation reprise AutoPrestige** :\n\nPour estimer votre vehicule, j'ai besoin de :\n- Marque et modele\n- Annee de mise en circulation\n- Kilometrage\n- Motorisation (essence/diesel/hybride/electrique)\n\n**Exemple d'estimation :**\n- Peugeot 308 — 2021 — 45 000 km — Diesel\n- **Estimation : 14 500 — estimation personnalisee**\n\n**Notre engagement :**\n- Estimation gratuite et sans engagement\n- Prix garanti **7 jours**\n- Reprise meme sans achat chez nous\n- Virement sous **48h** apres accord\n\nEnvoyez-moi les infos de votre vehicule ou une photo !",
    delay: 2000,
    quickReplies: [
      { label: "Envoyer photo", value: "photo vehicule" },
      { label: "Vehicules en stock", value: "vehicule" },
      { label: "Financement", value: "financement" },
      { label: "Retour accueil", value: "bonjour" },
    ],
  },

  "photo vehicule": {
    text: "Merci pour la photo ! **Analyse IA en cours**...\n\n**Resultat de l'analyse :**\n\n- **Vehicule identifie :** Renault Megane IV — 2020\n- **Etat carrosserie :** Bon (micro-rayure portiere droite)\n- **Etat peinture :** Tres bon (couleur gris platine)\n- **Jantes :** Bon etat, 1 legere eraflure\n\n**Estimation IA :** 12 800 — estimation personnalisee\n\n**Pour affiner :**\n- Kilometrage exact ?\n- Carnet d'entretien a jour ?\n- Controle technique valide ?\n\nUn expert peut confirmer sous **24h** avec inspection physique.",
    delay: 2800,
    quickReplies: [
      { label: "Confirmer reprise", value: "reprise" },
      { label: "Inspection physique", value: "reprise" },
      { label: "Vehicules neufs", value: "vehicule" },
      { label: "Retour accueil", value: "bonjour" },
    ],
  },

  entretien: {
    text: "**Atelier entretien AutoPrestige** :\n\n**Nos prestations :**\n- **Revision complete** — sur audit gratuit (vidange + filtres + diagnostic)\n- **Vidange** — estimation personnalisee (huile + filtre)\n- **Pneumatiques** — sur audit gratuit (pose + equilibrage inclus)\n- **Freins** — sur audit gratuit (plaquettes avant)\n- **Climatisation** — estimation personnalisee (recharge + desinfection)\n- **Geometrie** — estimation personnalisee\n\n**Prochains creneaux :**\n- Lundi 21 avril — 8h, 10h, 14h\n- Mercredi 23 avril — 9h, 11h\n- Vendredi 25 avril — 8h, 15h\n\n**Vehicule de pret gratuit** pour les interventions > 2h.\n\nQuelle prestation souhaitez-vous ?",
    delay: 2200,
    quickReplies: [
      { label: "Revision complete", value: "confirmer entretien" },
      { label: "Pneus", value: "confirmer entretien" },
      { label: "Rappel entretien", value: "rappel entretien" },
      { label: "Retour accueil", value: "bonjour" },
    ],
  },

  "confirmer entretien": {
    text: "Rendez-vous atelier confirme !\n\n**Prestation :** Revision complete\n**Date :** Lundi 21 avril 2026 — 8h00\n**Duree estimee :** 2h30\n**Vehicule de pret :** Oui (Peugeot 208)\n\n**Inclus :**\n- Vidange huile moteur\n- Remplacement filtres (air, huile, habitacle)\n- Diagnostic electronique 32 points\n- Niveaux + eclairage\n\n**Tarif :** estimation personnalisee TTC\n\nRappel WhatsApp la veille. Apportez votre carte grise.",
    delay: 1800,
    quickReplies: [
      { label: "Merci !", value: "merci" },
      { label: "Annuler RDV", value: "entretien" },
    ],
  },

  "rappel entretien": {
    text: "**Rappels entretien automatiques** :\n\nNotre IA suit l'etat de votre vehicule :\n\n**Votre vehicule :** BMW Serie 3 — 2024\n\n**Prochains entretiens prevus :**\n- **Revision** — Dans 2 200 km (prevue mai 2026)\n- **Pneus** — Usure a 40%, changement prevu aout 2026\n- **Controle technique** — Echeance septembre 2026\n- **Plaquettes frein** — Etat OK, controle dans 15 000 km\n\n**Alertes activees :**\n- WhatsApp 30 jours avant echeance\n- SMS 7 jours avant\n- Prise de RDV automatique proposee\n\nVoulez-vous modifier vos alertes ?",
    delay: 2000,
    quickReplies: [
      { label: "Modifier alertes", value: "rappel entretien" },
      { label: "Reserver entretien", value: "entretien" },
      { label: "Controle technique", value: "controle technique" },
      { label: "Retour accueil", value: "bonjour" },
    ],
  },

  garantie: {
    text: "**Garanties AutoPrestige** :\n\n**Vehicules neufs :**\n- Garantie constructeur : **2 a 5 ans** selon marque\n- Extension possible jusqu'a **7 ans / 150 000 km**\n\n**Vehicules d'occasion :**\n- **Garantie AutoPrestige** : 12 mois minimum\n- Extension **24 ou 36 mois** disponible\n- Couverture : moteur, boite, direction, suspension, electronique\n\n**Nos engagements :**\n- Vehicule de remplacement pendant reparation\n- Assistance depannage 24/7 incluse\n- Aucune franchise sur les pieces couvertes\n\nVotre garantie actuelle expire le **15/01/2028**.",
    delay: 2000,
    quickReplies: [
      { label: "Etendre garantie", value: "garantie" },
      { label: "Faire une reclamation", value: "garantie" },
      { label: "Entretien", value: "entretien" },
      { label: "Retour accueil", value: "bonjour" },
    ],
  },

  pieces: {
    text: "**Pieces detachees AutoPrestige** :\n\n**Disponibilite :**\n- Pieces d'origine constructeur\n- Pieces equivalentes certifiees\n- Accessoires et equipements\n\n**Recherche rapide :**\nIndiquez votre vehicule + la piece recherchee.\n\n**Exemple :**\n- Filtre a huile BMW Serie 3 — **estimation personnalisee** (en stock)\n- Plaquettes frein AV Mercedes GLC — **estimation personnalisee** (dispo J+1)\n- Batterie Audi A4 — **estimation personnalisee** (en stock)\n\n**Services :**\n- Livraison en concession ou a domicile\n- Montage en atelier (tarif preferentiel)\n- Garantie 2 ans sur toutes les pieces\n\nQuelle piece cherchez-vous ?",
    delay: 2000,
    quickReplies: [
      { label: "Rechercher piece", value: "pieces" },
      { label: "Commander", value: "pieces" },
      { label: "RDV atelier", value: "entretien" },
      { label: "Retour accueil", value: "bonjour" },
    ],
  },

  occasion: {
    text: "**Vehicules d'occasion AutoPrestige** :\n\nTous nos vehicules sont **controles 150 points** :\n\n**Selection du moment :**\n- **Peugeot 3008 GT** — 2023 — 28 000 km — estimation personnalisee\n- **VW Golf 8 R-Line** — 2022 — 35 000 km — estimation personnalisee\n- **Renault Arkana** — 2024 — 12 000 km — estimation personnalisee\n- **BMW X1 xDrive** — 2023 — 22 000 km — estimation personnalisee\n- **Citroen C5 X** — 2024 — 8 000 km — estimation personnalisee\n\n**Avantages occasion AutoPrestige :**\n- Garantie 12 mois minimum\n- Historique complet certifie\n- Reprise de votre ancien vehicule\n- Financement sur mesure\n\nUn vehicule vous interesse ?",
    delay: 2400,
    quickReplies: [
      { label: "Essai Peugeot 3008", value: "essai" },
      { label: "Financement", value: "financement" },
      { label: "Reprise", value: "reprise" },
      { label: "Retour accueil", value: "bonjour" },
    ],
  },

  promotion: {
    text: "**Offres speciales AutoPrestige** :\n\n**Printemps 2026 :**\n- **-estimation personnalisee** sur la gamme BMW Serie 1 et 3\n- **LOA a estimation personnalisee** sur Peugeot 3008 (apport estimation personnalisee)\n- **Prime a la conversion** : jusqu'a estimation personnalisee sur les electriques\n- **Pack entretien 3 ans** offert pour tout achat neuf\n\n**Flash week-end :**\n- Double reprise sur votre ancien vehicule (estimation + 10%)\n- Jeu de pneus offert sur les SUV d'occasion\n\n**Valable jusqu'au 30 avril 2026.**\n\nProfitez-en !",
    delay: 2000,
    quickReplies: [
      { label: "BMW en promo", value: "vehicule" },
      { label: "Simuler LOA", value: "financement" },
      { label: "Prime conversion", value: "vehicule" },
      { label: "Retour accueil", value: "bonjour" },
    ],
  },

  "assurance auto": {
    text: "**Assurance auto — Partenaires AutoPrestige** :\n\nNous travaillons avec les meilleurs assureurs :\n\n**Offres negociees :**\n- **Tous risques** — sur audit gratuit (bonus 50%)\n- **Tiers+** — sur audit gratuit\n- **Jeune conducteur** — sur audit gratuit\n\n**Inclus dans nos offres :**\n- Assistance 0 km 24/7\n- Vehicule de remplacement\n- Bris de glace sans franchise\n- Protection juridique\n\n**Partenaires :** AXA, Allianz, MAIF, Groupama\n\nSimulation gratuite en **2 minutes**.\nDevis envoye par WhatsApp.",
    delay: 2000,
    quickReplies: [
      { label: "Simuler assurance", value: "assurance auto" },
      { label: "Financement auto", value: "financement" },
      { label: "Vehicules", value: "vehicule" },
      { label: "Retour accueil", value: "bonjour" },
    ],
  },

  "controle technique": {
    text: "**Controle technique AutoPrestige** :\n\n**Notre centre agree :**\n- Controle technique periodique (CT)\n- Contre-visite\n- Controle volontaire (avant achat/vente)\n\n**Tarifs :**\n- CT standard : **estimation personnalisee**\n- Contre-visite : **estimation personnalisee**\n- CT + pre-controle : **estimation personnalisee** (recommande)\n\n**Prochains creneaux :**\n- Jeudi 24 avril — 8h, 10h, 14h, 16h\n- Vendredi 25 avril — 9h, 11h\n\n**Votre vehicule :** CT a renouveler avant le **15/09/2026**\n\n**Duree :** 45 min environ\nVehicule rendu le jour meme.",
    delay: 1800,
    quickReplies: [
      { label: "Reserver CT", value: "confirmer entretien" },
      { label: "Rappel CT", value: "rappel entretien" },
      { label: "Entretien", value: "entretien" },
      { label: "Retour accueil", value: "bonjour" },
    ],
  },

  livraison: {
    text: "**Options de livraison AutoPrestige** :\n\n**En concession :**\n- Livraison personnalisee avec votre conseiller\n- Presentation complete du vehicule (1h)\n- Mise en main + parametrage\n- Gratuit\n\n**A domicile :**\n- Livraison par camion plateau\n- Rayon 100 km : **estimation personnalisee**\n- Rayon 200 km : **estimation personnalisee**\n- France entiere : **sur devis**\n\n**Delais :**\n- Vehicule en stock : **48-72h**\n- Commande usine : **3 a 6 mois** selon modele\n\nRemise des documents (carte grise, assurance) le jour de la livraison.",
    delay: 2000,
    quickReplies: [
      { label: "Livraison domicile", value: "livraison" },
      { label: "Vehicules en stock", value: "vehicule" },
      { label: "Financement", value: "financement" },
      { label: "Retour accueil", value: "bonjour" },
    ],
  },
};

const sectorKeywords: Record<string, string[]> = {
  bonjour: ["bonjour", "salut", "hello", "hey", "bonsoir", "coucou", "hi", "bjr"],
  vehicule: ["vehicule", "voiture", "auto", "modele", "berline", "suv", "citadine", "sportive", "electrique", "hybride", "neuf", "cherche"],
  essai: ["essai", "essayer", "tester", "test drive", "routier", "conduire", "conduite"],
  financement: ["financement", "credit", "leasing", "loa", "lld", "mensualite", "loyer", "payer", "pret", "taux"],
  reprise: ["reprise", "reprendre", "revendre", "vendre", "estimer", "estimation", "cote", "argus", "rachat"],
  "photo vehicule": ["photo", "image", "etat", "rayure", "carrosserie", "degat", "accident", "choc"],
  entretien: ["entretien", "revision", "vidange", "pneu", "frein", "climatisation", "geometrie", "reparation", "atelier", "mecanicien"],
  "rappel entretien": ["rappel", "alerte", "notification", "echeance", "prochain entretien"],
  garantie: ["garantie", "extension", "couverture", "panne", "reclamer", "assurance panne"],
  pieces: ["piece", "pieces detachees", "filtre", "batterie", "ampoule", "essuie", "accessoire"],
  occasion: ["occasion", "occasions", "seconde main", "km", "kilometrage", "d'occasion"],
  promotion: ["promotion", "promo", "offre", "remise", "reduction", "solde", "flash", "deal", "bon plan"],
  "assurance auto": ["assurance", "assurer", "tous risques", "tiers", "sinistre", "axa", "allianz"],
  "controle technique": ["controle technique", "ct", "contre-visite", "inspection", "controle"],
  livraison: ["livraison", "livrer", "recevoir", "domicile", "transport", "plateau", "delai livraison"],
};

const merged = mergeWithVocalis(sectorIntents, sectorKeywords);

const automobileConfig: SimulatorConfig = {
  botName: "AutoPrestige IA",
  botAvatar: "AP",
  welcomeMessage:
    "Bienvenue chez **AutoPrestige** ! Je suis votre assistant IA.\n\nRecherche vehicule, essai routier, financement, reprise, entretien — je gere tout.\n\nComment puis-je vous aider ?",
  initialQuickReplies: [
    { label: "Rechercher vehicule", value: "vehicule" },
    { label: "Essai routier", value: "essai" },
    { label: "Estimation reprise", value: "reprise" },
    { label: "Financement", value: "financement" },
    { label: "Entretien", value: "entretien" },
    { label: "Promotions", value: "promotion" },
  ],
  intents: merged.intents,
  keywords: merged.keywords,
  fallback: createFallback([
    { label: "Vehicules", value: "vehicule" },
    { label: "Essai routier", value: "essai" },
    { label: "Financement", value: "financement" },
    { label: "Entretien", value: "entretien" },
  ]),
};

export { automobileConfig };
export default automobileConfig;
