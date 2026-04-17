import type { SimulatorConfig } from "../WhatsAppSimulator";
import { mergeWithVocalis, createFallback } from "./vocalis-features";

const IMMOBILIER_INTENTS = {
  greeting: {
    text: "Bonjour ! Bienvenue chez **ImmoPrestige**.\n\nJe suis votre assistant IA disponible 24h/24. Que recherchez-vous aujourd'hui ?\n\n- Un bien a l'achat ou en location ?\n- Une estimation de votre bien ?\n- Un rendez-vous avec un agent ?",
    delay: 1200,
    quickReplies: [
      { label: "Achat", value: "recherche bien" },
      { label: "Location", value: "location" },
      { label: "Estimation", value: "estimation" },
      { label: "RDV agent", value: "rdv agent" },
      { label: "Telephonie IA", value: "telephonie" },
      { label: "WhatsApp features", value: "whatsapp features" },
    ],
  },
  "recherche bien": {
    text: "Parfait, lancons votre recherche personnalisee.\n\nPour vous proposer les meilleurs biens, j'ai besoin de quelques criteres :\n\n**Budget :** Quel est votre budget max ?\n**Type :** Appartement, maison, villa, loft ?\n**Surface :** Combien de m2 minimum ?\n**Localisation :** Quelle ville ou quartier ?\n**Chambres :** Combien de chambres ?\n\nPar exemple : *\"Appartement 3 pieces, 80m2, Paris 16e, budget 600 000 EUR\"*",
    delay: 2000,
    quickReplies: [
      { label: "Appart Paris < 500K", value: "disponibilites" },
      { label: "Maison banlieue", value: "disponibilites" },
      { label: "Studio investissement", value: "investissement" },
      { label: "Voir les dispos", value: "disponibilites" },
    ],
  },
  "photo bien": {
    text: "Envoyez-moi une photo de votre bien et notre **IA Vision** analysera automatiquement :\n\n- Surface estimee des pieces\n- Etat general (neuf / bon / a renover)\n- Points forts : luminosite, hauteur sous plafond, materiaux\n- Style architectural\n- Suggestions de valorisation avant vente\n\nL'analyse prend environ 10 secondes. Envoyez votre photo !",
    delay: 1800,
    quickReplies: [
      { label: "Estimer la valeur", value: "estimation" },
      { label: "Voir le DPE", value: "dpe" },
      { label: "Mettre en vente", value: "mandat" },
    ],
  },
  visite: {
    text: "Planifions votre visite.\n\n**Creneaux disponibles cette semaine :**\n\n- Mardi 14h00 - 16h00\n- Mercredi 10h00 - 12h00\n- Jeudi 17h00 - 19h00\n- Samedi 09h00 - 12h00\n\nQuel creneau vous convient ? Je vous envoie la confirmation + l'adresse exacte + un plan d'acces par WhatsApp.\n\nVous recevrez aussi un rappel 2h avant la visite.",
    delay: 1500,
    quickReplies: [
      { label: "Mardi 14h", value: "rdv agent" },
      { label: "Samedi matin", value: "rdv agent" },
      { label: "Autres creneaux", value: "rdv agent" },
      { label: "Visite virtuelle", value: "visite virtuelle" },
    ],
  },
  estimation: {
    text: "Notre **IA d'estimation** croise les donnees de :\n\n- Prix au m2 du quartier (temps reel)\n- Transactions recentes comparables\n- Etat et prestations du bien\n- Tendances du marche local\n\n**Pour estimer votre bien, indiquez :**\n1. Adresse ou quartier\n2. Surface habitable\n3. Nombre de pieces\n4. Etage + ascenseur\n5. Annee de construction\n\n*Estimation gratuite en 30 secondes !*",
    delay: 1800,
    quickReplies: [
      { label: "Appart 75m2 Paris 11", value: "disponibilites" },
      { label: "Maison 120m2 Lyon", value: "disponibilites" },
      { label: "Envoyer photo", value: "photo bien" },
      { label: "Prendre RDV estimation", value: "rdv agent" },
    ],
  },
  financement: {
    text: "**Simulation de credit immobilier**\n\nParametres par defaut :\n- Taux : 3.45% sur 25 ans\n- Apport recommande : 10% minimum\n- Assurance : 0.34%/an\n\n**Exemple pour 300 000 EUR :**\n- Mensualite : 1 487 EUR / mois\n- Cout total du credit : 146 100 EUR\n- Apport minimum : 30 000 EUR\n\nNos **banques partenaires** : Credit Agricole, BNP Paribas, Boursorama, LCL\n\nIndiquez votre budget et je simule pour vous !",
    delay: 2000,
    quickReplies: [
      { label: "Simuler 250K", value: "financement" },
      { label: "Simuler 400K", value: "financement" },
      { label: "Contact courtier", value: "rdv agent" },
      { label: "Documents requis", value: "documents" },
    ],
  },
  documents: {
    text: "**Documents requis pour un achat :**\n\n**Acheteur :**\n- Piece d'identite\n- 3 derniers bulletins de salaire\n- 2 derniers avis d'imposition\n- Releves bancaires (3 mois)\n- Justificatif de domicile\n- Attestation d'accord de pret\n\n**Vendeur :**\n- Titre de propriete\n- Diagnostics obligatoires (DPE, amiante, plomb...)\n- PV des 3 dernieres AG\n- Taxe fonciere\n\nJe peux vous envoyer la checklist complete par WhatsApp !",
    delay: 1800,
    quickReplies: [
      { label: "Checklist complete", value: "documents" },
      { label: "DPE et diagnostics", value: "dpe" },
      { label: "Frais achat", value: "frais" },
      { label: "Contacter notaire", value: "rdv agent" },
    ],
  },
  mandat: {
    text: "**Types de mandats ImmoPrestige :**\n\n**Mandat simple**\n- Vous gardez la liberte de vendre seul\n- Commission : 4.5% TTC\n\n**Mandat exclusif** (recommande)\n- Vente en moyenne 2x plus rapide\n- Commission : 3.8% TTC\n- Photos pro + visite 3D incluses\n- Diffusion sur 40+ portails\n\n**Mandat semi-exclusif**\n- Vous pouvez vendre via un autre agent\n- Commission : 4% TTC\n\nDuree : 3 mois renouvelable. Quel mandat vous interesse ?",
    delay: 2000,
    quickReplies: [
      { label: "Mandat exclusif", value: "rdv agent" },
      { label: "Estimer d'abord", value: "estimation" },
      { label: "Frais detailles", value: "frais" },
      { label: "RDV agent", value: "rdv agent" },
    ],
  },
  quartier: {
    text: "**Analyse de quartier par IA**\n\nIndiquez le quartier et je vous donne :\n\n- **Ecoles** : creches, primaires, colleges, lycees (notes + distance)\n- **Transports** : metro, bus, tram, gare (temps de trajet)\n- **Commerces** : supermarches, marches, pharmacies\n- **Sante** : hopitaux, medecins, specialistes\n- **Securite** : statistiques du quartier\n- **Prix au m2** : evolution sur 5 ans + tendance\n- **Qualite de vie** : espaces verts, nuisances sonores\n\n*Exemple : tapez \"quartier Marais Paris\" ou \"quartier Part-Dieu Lyon\"*",
    delay: 1800,
    quickReplies: [
      { label: "Paris 16e", value: "quartier" },
      { label: "Lyon 6e", value: "quartier" },
      { label: "Bordeaux centre", value: "quartier" },
      { label: "Rechercher un bien", value: "recherche bien" },
    ],
  },
  disponibilites: {
    text: "**Biens disponibles correspondant a vos criteres :**\n\n1. **Appart T3 - Paris 11e** - 72m2\n   Prix : 485 000 EUR | 6 736 EUR/m2\n   2 ch, balcon, cave, refait neuf\n\n2. **Maison T5 - Vincennes** - 130m2\n   Prix : 890 000 EUR | jardin 200m2\n   4 ch, garage, proche RER A\n\n3. **Studio - Paris 5e** - 28m2\n   Prix : 245 000 EUR | ideal investissement\n   Rendement locatif : 4.2%\n\n4. **Loft - Montreuil** - 95m2\n   Prix : 520 000 EUR | style industriel\n   Terrasse 30m2, parking\n\n5 autres biens disponibles. Lequel vous interesse ?",
    delay: 2200,
    quickReplies: [
      { label: "Voir le T3 Paris 11e", value: "visite" },
      { label: "Details maison", value: "visite" },
      { label: "Affiner la recherche", value: "recherche bien" },
      { label: "Simuler credit", value: "financement" },
    ],
  },
  offre: {
    text: "**Faire une offre d'achat**\n\nPour soumettre votre offre, je prepare le dossier :\n\n1. **Bien concerne** : reference ou adresse\n2. **Montant de l'offre** : prix propose\n3. **Conditions** : pret, delai, travaux...\n4. **Validite** : duree de l'offre (7 jours std)\n\nNotre agent vous contactera sous **2h maximum** pour confirmer.\n\nL'offre est sans engagement jusqu'a la signature du compromis.\n\nPret a formuler votre offre ?",
    delay: 1800,
    quickReplies: [
      { label: "Faire une offre", value: "rdv agent" },
      { label: "Negocier le prix", value: "rdv agent" },
      { label: "Questions financement", value: "financement" },
      { label: "Documents requis", value: "documents" },
    ],
  },
  "suivi dossier": {
    text: "**Suivi de votre transaction**\n\nEntrez votre reference de dossier et je vous donne l'etat en temps reel :\n\n**Etapes suivies :**\n- Offre acceptee\n- Compromis signe\n- Conditions suspensives (pret, diagnostics)\n- Delai de retractation (10 jours)\n- Accord de pret\n- Signature acte authentique\n\nVous recevez une **notification WhatsApp** a chaque etape.\n\n*Format reference : IMMO-2026-XXXX*",
    delay: 1800,
    quickReplies: [
      { label: "Entrer reference", value: "suivi dossier" },
      { label: "Contacter mon agent", value: "rdv agent" },
      { label: "Documents manquants", value: "documents" },
      { label: "Frais restants", value: "frais" },
    ],
  },
  investissement: {
    text: "**Opportunites d'investissement locatif**\n\n**Top 3 du mois :**\n\n1. **Studio Paris 18e** - 22m2 - 195 000 EUR\n   Loyer estime : 750 EUR/mois\n   Rendement brut : **4.6%**\n\n2. **T2 Lyon 7e** - 42m2 - 185 000 EUR\n   Loyer estime : 680 EUR/mois\n   Rendement brut : **4.4%**\n\n3. **T1 Bordeaux** - 30m2 - 155 000 EUR\n   Loyer estime : 580 EUR/mois\n   Rendement brut : **4.5%**\n\nNous analysons : rendement, fiscalite (LMNP, Pinel), valorisation, demande locative.\n\nQuel type d'investissement vous interesse ?",
    delay: 2200,
    quickReplies: [
      { label: "LMNP meuble", value: "investissement" },
      { label: "Loi Pinel", value: "investissement" },
      { label: "Simuler rendement", value: "financement" },
      { label: "Fiscalite", value: "frais" },
    ],
  },
  location: {
    text: "**Recherche de location**\n\nBiens en location disponibles :\n\n1. **T2 meuble - Paris 10e** - 45m2\n   Loyer : 1 250 EUR/mois CC\n   Libre au 1er mai\n\n2. **T3 vide - Lyon 3e** - 68m2\n   Loyer : 950 EUR/mois HC\n   Libre immediatement\n\n3. **Studio - Marseille 6e** - 25m2\n   Loyer : 550 EUR/mois CC\n   Libre au 15 mai\n\n**Dossier locataire :** 3 fiches de paie, avis d'imposition, piece d'identite, garant (ou garantie Visale).\n\nQuel bien vous interesse ?",
    delay: 2000,
    quickReplies: [
      { label: "Visiter le T2 Paris", value: "visite" },
      { label: "Dossier locataire", value: "documents" },
      { label: "Garant / Visale", value: "documents" },
      { label: "Autres locations", value: "location" },
    ],
  },
  dpe: {
    text: "**Diagnostics immobiliers obligatoires**\n\n**DPE (Diagnostic de Performance Energetique) :**\n- Classe A a G (F et G = passoires thermiques)\n- Obligatoire pour vente ET location\n- Validite : 10 ans\n\n**Autres diagnostics requis :**\n- Amiante (avant 1997)\n- Plomb (avant 1949)\n- Electricite / Gaz (> 15 ans)\n- Termites (zones a risque)\n- ERP (risques naturels)\n- Superficie Carrez\n- Assainissement\n\n**Cout moyen pack complet :** 350 - 600 EUR\n\nNos diagnostiqueurs partenaires interviennent sous 48h.",
    delay: 2000,
    quickReplies: [
      { label: "Prendre RDV diagnostic", value: "rdv agent" },
      { label: "Cout des travaux DPE", value: "estimation" },
      { label: "Aides renovation", value: "frais" },
      { label: "Mettre en vente", value: "mandat" },
    ],
  },
  "rdv agent": {
    text: "**Rendez-vous avec un agent ImmoPrestige**\n\nNos agents sont disponibles :\n- **Lundi - Vendredi** : 9h - 19h\n- **Samedi** : 9h - 17h\n\n**Formats disponibles :**\n- En agence (Paris, Lyon, Bordeaux, Marseille)\n- A domicile (rayon 30 km)\n- En visio (Zoom / WhatsApp Video)\n- Par telephone\n\nIndiquez votre preference et je bloque un creneau.\n\nVous recevrez une confirmation + rappel automatique.",
    delay: 1500,
    quickReplies: [
      { label: "RDV en agence", value: "rdv agent" },
      { label: "RDV visio", value: "rdv agent" },
      { label: "Rappel telephonique", value: "rdv agent" },
      { label: "Voir les biens d'abord", value: "disponibilites" },
    ],
  },
  frais: {
    text: "**Decomposition des frais d'achat**\n\n**Pour un bien a 400 000 EUR :**\n\n- **Frais de notaire** : ~32 000 EUR (8%)\n  - Droits de mutation : 22 600 EUR\n  - Emoluments notaire : 3 945 EUR\n  - Frais divers : 5 455 EUR\n\n- **Frais d'agence** : 15 200 EUR (3.8%)\n  *(inclus dans le prix affiche)*\n\n- **Frais de garantie** : ~4 000 EUR\n- **Frais de dossier banque** : ~1 000 EUR\n\n**Total a prevoir : ~437 000 EUR**\n\nBien neuf = frais reduits (~3% au lieu de 8%).",
    delay: 2000,
    quickReplies: [
      { label: "Simuler credit total", value: "financement" },
      { label: "Frais pour un autre prix", value: "frais" },
      { label: "Neuf vs ancien", value: "investissement" },
      { label: "Contacter un notaire", value: "rdv agent" },
    ],
  },
  "campagne prospection": {
    text: "\ud83d\udce2 **Campagnes de prospection acheteurs**\n\nNotre IA lance des campagnes outbound ciblees :\n\n**Appels sortants automatiques :**\n\u2022 Contact acheteurs potentiels depuis le CRM\n\u2022 Qualification budget + criteres en 3 min\n\u2022 Proposition biens correspondants en temps reel\n\u2022 Prise de RDV visite automatique\n\n**Canaux utilises :**\n\u2022 Appel IA vocal (Dualplex, voix naturelle)\n\u2022 WhatsApp template post-qualification\n\u2022 SMS avec lien vers fiche bien\n\n**Resultats constates :**\n\u2022 Leads qualifies : **+75%**\n\u2022 Visites planifiees : **+50%**\n\u2022 Temps agent economise : **20h/semaine**\n\nRetry automatique + detection repondeur inclus.",
    delay: 2400,
    quickReplies: [
      { label: "Comment ca marche ?", value: "campagnes" },
      { label: "Integrations CRM", value: "crm" },
      { label: "Scoring leads", value: "scoring" },
      { label: "Tarifs", value: "tarif" },
    ],
  },
  "appel vendeur": {
    text: "\ud83d\udcde **Appels IA vers vendeurs potentiels**\n\nNotre telephonie IA prospecte les vendeurs :\n\n1\ufe0f\u20e3 **Detection** de biens a vendre (signaux marche)\n2\ufe0f\u20e3 **Appel automatique** avec presentation agence\n3\ufe0f\u20e3 **Estimation gratuite** proposee en temps reel\n4\ufe0f\u20e3 **Prise de RDV** pour mandat si interesse\n5\ufe0f\u20e3 **Sync CRM** avec toutes les infos collectees\n\n**Modes d'appel :**\n\u2022 **Pipeline** — Transcription complete pour le dossier\n\u2022 **Dualplex** — Conversation naturelle, quasi-humaine\n\u2022 **Transfert agent** mid-call si vendeur chaud\n\n**Resultat :** 3x plus de mandats exclusifs / mois.",
    delay: 2200,
    quickReplies: [
      { label: "Telephonie IA", value: "telephonie" },
      { label: "Vocal & langues", value: "vocal" },
      { label: "Dashboards", value: "dashboards" },
      { label: "Tarifs", value: "tarif" },
    ],
  },
  "visite virtuelle": {
    text: "\ud83c\udfe0 **Visite virtuelle IA**\n\nNotre solution combine **widget web** + **analyse photo IA** :\n\n**Widget integre :**\n\u2022 Chat vocal ou textuel depuis la fiche bien\n\u2022 L'acheteur pose ses questions en direct\n\u2022 L'IA repond avec les details du bien\n\u2022 Prise de RDV visite physique en 1 clic\n\n**Analyse photo IA :**\n\u2022 Envoyez les photos du bien\n\u2022 Surface estimee par piece\n\u2022 Etat general (neuf / bon / a renover)\n\u2022 Points forts detectes automatiquement\n\u2022 Suggestions de valorisation (home staging)\n\n**Avantages :**\n\u2022 Pre-qualification acheteurs avant visite physique\n\u2022 Visites physiques : **-40%** (seuls les vrais interesses)\n\u2022 Disponible 24/7 sans agent\n\u2022 Multi-langues pour acheteurs internationaux",
    delay: 2400,
    quickReplies: [
      { label: "Widget web", value: "widget" },
      { label: "Envoyer photo", value: "photo bien" },
      { label: "Planifier visite", value: "visite" },
      { label: "Tarifs", value: "tarif" },
    ],
  },
};

const IMMOBILIER_KEYWORDS: Record<string, string[]> = {
  greeting: [
    "bonjour", "salut", "hello", "hey", "bonsoir", "coucou", "hi",
  ],
  "recherche bien": [
    "recherche", "cherche", "trouver", "acheter", "achat", "bien",
    "appartement", "maison", "villa", "loft", "duplex", "penthouse",
    "pieces", "chambres", "criteres",
  ],
  "photo bien": [
    "photo", "image", "analyser", "analyse photo", "vision", "scanner",
    "envoyer photo",
  ],
  visite: [
    "visite", "visiter", "voir le bien", "creneau", "planning",
    "disponible quand",
  ],
  estimation: [
    "estimation", "estimer", "valeur", "combien vaut", "prix m2",
    "evaluer", "evaluation", "prix au metre",
  ],
  financement: [
    "credit", "pret", "financement", "emprunt", "mensualite", "taux",
    "banque", "hypotheque", "courtier", "simuler", "simulation",
    "mortgage", "apport",
  ],
  documents: [
    "document", "papier", "dossier achat", "checklist", "justificatif",
    "piece", "bulletin", "impot",
  ],
  mandat: [
    "mandat", "mettre en vente", "vendre", "exclusif", "commission",
    "honoraires agence",
  ],
  quartier: [
    "quartier", "ecole", "transport", "metro", "commerce", "voisinage",
    "environnement", "proximite",
  ],
  disponibilites: [
    "disponible", "dispo", "stock", "catalogue", "offres", "selection",
    "nouveautes", "nouveau bien",
  ],
  offre: [
    "offre", "proposer", "negocier", "negociation", "prix",
    "contre-offre",
  ],
  "suivi dossier": [
    "suivi", "dossier", "avancement", "ou en est", "etat", "reference",
    "compromis", "acte",
  ],
  investissement: [
    "investir", "investissement", "rendement", "locatif", "rapport",
    "rentabilite", "pinel", "lmnp", "defiscalisation",
  ],
  location: [
    "louer", "location", "locataire", "bail", "loyer", "garant",
    "visale", "caution",
  ],
  dpe: [
    "dpe", "diagnostic", "energie", "performance energetique",
    "passoire", "amiante", "plomb", "carrez",
  ],
  "rdv agent": [
    "agent", "conseiller", "agence", "rencontrer",
    "rappeler", "contact",
  ],
  frais: [
    "frais", "notaire", "taxe", "cout", "combien ca coute", "honoraire",
    "droits", "mutation",
  ],
  "campagne prospection": ["campagne prospection", "prospection acheteur", "outbound acheteur", "campagne achat"],
  "appel vendeur": ["appel vendeur", "prospecter vendeur", "contact vendeur", "mandat telephonie"],
  "visite virtuelle": ["visite virtuelle", "virtual tour", "visite 3d", "visite en ligne", "visite distance"],
};

const merged = mergeWithVocalis(IMMOBILIER_INTENTS, IMMOBILIER_KEYWORDS);

const immobilierConfig: SimulatorConfig = {
  botName: "ImmoPrestige IA",
  botAvatar: "IP",
  welcomeMessage:
    "Bienvenue chez **ImmoPrestige** ! Je suis votre assistant IA immobilier.\n\nJe peux vous aider a :\n- Rechercher un bien (achat/location)\n- Analyser une photo de bien\n- Estimer la valeur d'un bien\n- Planifier une visite\n- Simuler un credit\n- Suivre votre dossier\n\nComment puis-je vous aider ?",
  initialQuickReplies: [
    { label: "Rechercher un bien", value: "recherche bien" },
    { label: "Estimer mon bien", value: "estimation" },
    { label: "Prendre RDV visite", value: "visite" },
    { label: "Simuler un credit", value: "financement" },
    { label: "Voir les disponibilites", value: "disponibilites" },
  ],
  intents: merged.intents,
  keywords: merged.keywords,
  fallback: createFallback([
    { label: "Rechercher un bien", value: "recherche bien" },
    { label: "Estimer mon bien", value: "estimation" },
    { label: "Simuler un credit", value: "financement" },
    { label: "Prendre RDV", value: "rdv agent" },
  ]),
};

export { immobilierConfig };
export default immobilierConfig;
