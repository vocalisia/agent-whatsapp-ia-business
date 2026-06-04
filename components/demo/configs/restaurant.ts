import type { SimulatorConfig } from "../WhatsAppSimulator";
import { mergeWithVocalis, createFallback } from "./vocalis-features";

/* ─── Sector-specific intents ─── */

const restaurantIntents = {
  bonjour: {
    text: "Bienvenue au **Gourmet IA** ! Je suis votre assistant IA.\n\nJe peux vous aider a :\n- Reserver une table\n- Consulter le menu du jour\n- Commander a emporter\n- Informations allergenes\n- Organiser un evenement prive\n\nQue puis-je faire pour vous ?",
    delay: 1200,
    quickReplies: [
      { label: "Reserver", value: "reservation" },
      { label: "Menu du jour", value: "menu" },
      { label: "Commander", value: "commande" },
      { label: "Horaires", value: "horaires" },
    ],
  },
  reservation: {
    text: "Reservons votre table !\n\nMerci de me preciser :\n\n**Date :** Quel jour ?\n**Heure :** A quelle heure ?\n**Couverts :** Combien de personnes ?\n**Preferences :** Terrasse, salle, prive, PMR ?\n\nPar exemple : *\"Samedi 20h, 4 personnes, terrasse\"*\n\n**Disponibilites ce week-end :**\n- Vendredi : 19h30, 20h00, 21h00\n- Samedi : 19h00, 20h30, 21h30\n- Dimanche : 12h00, 12h30, 13h00",
    delay: 2000,
    quickReplies: [
      { label: "Samedi 20h, 4 pers.", value: "confirmer reservation" },
      { label: "Dimanche midi, 2 pers.", value: "confirmer reservation" },
      { label: "Autre date", value: "autre date reservation" },
      { label: "Allergenes ?", value: "allergenes" },
    ],
  },
  "confirmer reservation": {
    text: "Reservation confirmee !\n\n**Restaurant :** Le Gourmet IA\n**Date :** Samedi 19 avril 2026\n**Heure :** 20h00\n**Couverts :** 4 personnes\n**Emplacement :** Terrasse\n\nVous recevrez :\n- Confirmation WhatsApp immediate\n- Rappel J-1 a 18h\n- Rappel H-2 le jour J\n\nUne demande speciale ? Anniversaire, regime particulier ?",
    delay: 2200,
    quickReplies: [
      { label: "C'est un anniversaire", value: "evenement" },
      { label: "Options vegetariennes ?", value: "vegetarien" },
      { label: "Merci !", value: "merci" },
    ],
  },
  "autre date reservation": {
    text: "Voici nos disponibilites de la semaine :\n\n**Lundi :** Ferme\n**Mardi :** 19h00, 20h00, 21h00\n**Mercredi :** 19h30, 20h30\n**Jeudi :** 19h00, 20h00, 21h30\n**Vendredi :** 19h30, 20h00, 21h00\n**Samedi :** 19h00, 20h30, 21h30\n**Dimanche :** 12h00, 12h30, 13h00\n\nIndiquez votre preference !",
    delay: 1600,
    quickReplies: [
      { label: "Jeudi 20h", value: "confirmer reservation" },
      { label: "Vendredi 21h", value: "confirmer reservation" },
    ],
  },
  menu: {
    text: "Voici le **menu du jour** :\n\n**Entrees :**\n- Veloute de butternut, noisettes torrefies — estimation personnalisee\n- Tartare de saumon, avocat, agrumes — estimation personnalisee\n- Burrata, tomates anciennes, pesto — estimation personnalisee\n\n**Plats :**\n- Filet de bar, risotto safrane — estimation personnalisee\n- Souris d'agneau confite 7h, puree truffee — estimation personnalisee\n- Risotto aux cepes et parmesan 24 mois — estimation personnalisee\n\n**Desserts :**\n- Fondant chocolat, coeur coulant — estimation personnalisee\n- Tarte tatin, creme fraiche — estimation personnalisee\n- Assiette de fromages affines — estimation personnalisee\n\n**Menu complet** (entree + plat + dessert) : **estimation personnalisee**",
    delay: 2400,
    quickReplies: [
      { label: "Carte des vins", value: "carte vin" },
      { label: "Options veggie", value: "vegetarien" },
      { label: "Allergenes ?", value: "allergenes" },
      { label: "Reserver", value: "reservation" },
    ],
  },
  allergenes: {
    text: "Information allergenes :\n\nNotre carte indique systematiquement les **14 allergenes reglementaires** :\n\n- Gluten, Crustaces, Oeufs, Poisson\n- Arachides, Soja, Lait, Fruits a coque\n- Celeri, Moutarde, Sesame, Sulfites\n- Lupin, Mollusques\n\n**Adaptations possibles :**\n- Plats sans gluten disponibles\n- Options sans lactose\n- Plats sans fruits a coque sur demande\n\nPrecisez vos allergies au moment de la reservation, notre chef adaptera votre menu.",
    delay: 2000,
    quickReplies: [
      { label: "Sans gluten", value: "vegetarien" },
      { label: "Menu du jour", value: "menu" },
      { label: "Reserver", value: "reservation" },
    ],
  },
  horaires: {
    text: "Nos horaires d'ouverture :\n\n**Mardi - Vendredi :**\n- Dejeuner : 12h00 - 14h30\n- Diner : 19h00 - 22h30\n\n**Samedi :**\n- Diner uniquement : 19h00 - 23h00\n\n**Dimanche :**\n- Brunch : 10h00 - 14h00\n\n**Lundi :** Ferme\n\n**Adresse :** 42 rue de la Gastronomie, 75008 Paris\n**Parking :** Valet disponible le soir\n**Acces PMR :** Oui",
    delay: 1600,
    quickReplies: [
      { label: "Reserver", value: "reservation" },
      { label: "Livraison ?", value: "livraison" },
      { label: "Comment venir ?", value: "horaires" },
    ],
  },
  livraison: {
    text: "Options de livraison :\n\n**Plateformes partenaires :**\n- **Uber Eats** — Livraison 25-35 min\n- **Deliveroo** — Livraison 20-30 min\n- **Just Eat** — Livraison 30-40 min\n\n**Click & Collect :**\n- Commandez ici, retirez au restaurant\n- Pret en 20 min\n- -10% sur votre commande\n\n**Livraison directe :**\n- Rayon 5 km, minimum estimation personnalisee\n- Frais de livraison : estimation personnalisee\n- Gratuit au-dessus de estimation personnalisee\n\nLa carte a emporter est disponible 7j/7 de 11h30 a 22h.",
    delay: 2000,
    quickReplies: [
      { label: "Commander a emporter", value: "commande" },
      { label: "Menu du jour", value: "menu" },
      { label: "Reserver sur place", value: "reservation" },
    ],
  },
  commande: {
    text: "Passons votre commande a emporter !\n\nVoici nos **best-sellers** :\n\n1. Burger gourmet truffe, frites maison — estimation personnalisee\n2. Poke bowl saumon, edamame, avocat — estimation personnalisee\n3. Risotto aux cepes (vegan possible) — estimation personnalisee\n4. Caesar salade poulet grille — estimation personnalisee\n5. Tartare de boeuf, frites allumettes — estimation personnalisee\n\n**Formule midi** (plat + boisson) : estimation personnalisee\n\nIndiquez vos choix et je calcule le total. Paiement par CB en ligne ou sur place.",
    delay: 2200,
    quickReplies: [
      { label: "Burger + frites", value: "confirmer commande" },
      { label: "Poke bowl", value: "confirmer commande" },
      { label: "Voir la carte complete", value: "menu" },
      { label: "Allergenes ?", value: "allergenes" },
    ],
  },
  "confirmer commande": {
    text: "Commande enregistree !\n\n**Recapitulatif :**\n- 1x Burger gourmet truffe — estimation personnalisee\n- 1x Frites maison — incluses\n\n**Total :** estimation personnalisee\n\n**Retrait :** Dans 20 minutes\n**Adresse :** 42 rue de la Gastronomie, 75008 Paris\n\nLien de paiement envoye par WhatsApp.\nVous recevrez une notification quand c'est pret !",
    delay: 1800,
    quickReplies: [
      { label: "Merci !", value: "merci" },
    ],
  },
  "photo plat": {
    text: "Envoyez-moi la photo d'un plat et notre **IA Vision** identifie :\n\n- Le nom du plat et sa composition\n- L'estimation calorique\n- Les allergenes potentiels\n- L'accord vin ideal\n\n**Exemple :**\n*Photo d'un risotto* → \"Risotto aux cepes, parmesan 24 mois\"\n→ Accord : Barolo 2019 ou Meursault\n\nParfait pour retrouver un plat que vous avez aime ou decouvrir notre suggestion d'accord mets-vins !",
    delay: 2000,
    quickReplies: [
      { label: "Carte des vins", value: "carte vin" },
      { label: "Menu du jour", value: "menu" },
      { label: "Reserver", value: "reservation" },
    ],
  },
  avis: {
    text: "Votre avis compte enormement pour nous !\n\n**Laissez votre avis :**\n\n1. **Google** — Lien direct envoye par WhatsApp\n2. **TripAdvisor** — Un clic suffit\n3. **TheFork** — Notez votre experience\n\n**En echange :**\n- Un dessert offert a votre prochaine visite\n- Inscription au programme fidelite\n- Invitation aux soirees privees\n\nVotre satisfaction est notre priorite. Un retour negatif ? Notre chef vous rappelle personnellement.",
    delay: 1800,
    quickReplies: [
      { label: "Laisser un avis Google", value: "avis" },
      { label: "Programme fidelite", value: "fidelite" },
      { label: "Reserver a nouveau", value: "reservation" },
    ],
  },
  evenement: {
    text: "Evenements prives au Gourmet IA :\n\n**Nos espaces :**\n- **Salon prive** — 8-16 personnes\n- **Salle voute** — 20-40 personnes\n- **Terrasse privatisee** — 30-60 personnes\n- **Restaurant complet** — jusqu'a 80 personnes\n\n**Occasions :**\n- Anniversaires, mariages, fiancailles\n- Seminaires, team building\n- Diners d'affaires\n\n**Inclus :**\n- Menu sur mesure par le Chef\n- Decoration personnalisee\n- Service dedie\n- DJ / animation sur demande\n\nBudget a partir de **estimation personnalisee**. Devis en 24h.",
    delay: 2400,
    quickReplies: [
      { label: "Demander un devis", value: "rdv" },
      { label: "Menu sur mesure", value: "menu" },
      { label: "Contact chef", value: "contact chef" },
    ],
  },
  fidelite: {
    text: "Programme fidelite **Gourmet Club** :\n\n**Comment ca marche :**\n- estimation personnalisee depense = 1 point\n- 100 points = estimation personnalisee de reduction\n\n**Avantages membres :**\n- Dessert offert a l'inscription\n- -15% le jour de votre anniversaire\n- Acces prioritaire aux soirees privees\n- Degustations exclusives (vins, menus saisonniers)\n- Reservation prioritaire le week-end\n\n**Votre solde actuel :** Inscrivez-vous pour commencer a cumuler !\n\nInscription gratuite, directement ici sur WhatsApp.",
    delay: 2000,
    quickReplies: [
      { label: "M'inscrire", value: "confirmer reservation" },
      { label: "Reserver", value: "reservation" },
      { label: "Menu du jour", value: "menu" },
    ],
  },
  "carte vin": {
    text: "Notre **carte des vins** :\n\n**Blancs :**\n- Chablis 1er Cru 2021 — estimation personnalisee value\n- Sancerre, Domaine Vacheron — estimation personnalisee value\n- Meursault 2020 — estimation personnalisee value\n\n**Rouges :**\n- Saint-Emilion Grand Cru 2018 — estimation personnalisee value\n- Chateauneuf-du-Pape 2019 — estimation personnalisee value\n- Barolo DOCG 2017 — estimation personnalisee value\n\n**Champagnes :**\n- Veuve Clicquot Brut — estimation personnalisee\n- Dom Perignon 2012 — estimation personnalisee\n- Ruinart Blanc de Blancs — estimation personnalisee\n\n**Accord mets-vins :** Notre sommelier IA suggere l'accord parfait selon votre menu.",
    delay: 2200,
    quickReplies: [
      { label: "Accord avec le menu", value: "photo plat" },
      { label: "Menu du jour", value: "menu" },
      { label: "Reserver", value: "reservation" },
    ],
  },
  vegetarien: {
    text: "Options vegetariennes & vegan :\n\n**Vegetarien :**\n- Burrata, tomates anciennes, pesto — estimation personnalisee\n- Risotto aux cepes, parmesan — estimation personnalisee\n- Gnocchis maison, sauce sauge beurre noisette — estimation personnalisee\n- Tarte fine legumes de saison — estimation personnalisee\n\n**Vegan :**\n- Poke bowl tofu, edamame, avocat — estimation personnalisee\n- Risotto aux cepes (version vegan) — estimation personnalisee\n- Buddha bowl quinoa, legumes rotis — estimation personnalisee\n- Sorbet fruits frais maison — estimation personnalisee\n\n**Sur demande :** Notre chef adapte tout plat de la carte. Precisez lors de la reservation !",
    delay: 2000,
    quickReplies: [
      { label: "Allergenes ?", value: "allergenes" },
      { label: "Menu complet", value: "menu" },
      { label: "Reserver", value: "reservation" },
    ],
  },
  "annuler reservation": {
    text: "Modification ou annulation de reservation :\n\n**Pour modifier :**\n- Indiquez votre nom ou numero de reservation\n- Nouveau creneau souhaite\n- Changement de nombre de couverts\n\n**Pour annuler :**\n- Annulation gratuite jusqu'a 2h avant\n- Au-dela, un avoir de 50% est applique\n\n**Politique no-show :**\n- 2 no-shows → suspension temporaire des reservations en ligne\n\nDonnez-moi votre nom, je retrouve votre reservation.",
    delay: 1800,
    quickReplies: [
      { label: "Modifier ma resa", value: "reservation" },
      { label: "Nouvelle reservation", value: "reservation" },
      { label: "Horaires", value: "horaires" },
    ],
  },
  "contact chef": {
    text: "Message au Chef :\n\nNotre Chef **Marc Dubois** (1 etoile Michelin) est a votre ecoute pour :\n\n- **Menu personnalise** — Evenements, allergies, preferences\n- **Demande speciale** — Plat signature, hors carte\n- **Cours de cuisine** — Sessions privees (4-8 pers.)\n- **Traiteur** — Evenements a domicile\n\nLaissez votre message ici, le Chef vous repond sous 24h.\n\nOu reservez un appel direct avec lui via notre calendrier.",
    delay: 2000,
    quickReplies: [
      { label: "Menu personnalise", value: "evenement" },
      { label: "Cours de cuisine", value: "evenement" },
      { label: "Reserver", value: "reservation" },
    ],
  },
};

/* ─── Sector-specific keywords ─── */

const restaurantKeywords: Record<string, string[]> = {
  bonjour: ["bonjour", "salut", "hello", "bonsoir", "coucou", "hey"],
  reservation: ["reserver", "reservation", "table", "couvert", "place", "booking"],
  menu: ["menu", "carte", "plat", "entree", "dessert", "formule", "suggestion", "specialite"],
  allergenes: ["allergen", "allergie", "gluten", "lactose", "intoleran", "noix", "arachide"],
  horaires: ["horaire", "heure", "ouverture", "ferme", "ouvert", "quand", "adresse", "parking"],
  livraison: ["livraison", "delivery", "uber", "deliveroo", "just eat", "livrer"],
  commande: ["commander", "commande", "emporter", "takeaway", "take away", "click collect"],
  "photo plat": ["photo", "image", "identifier", "reconnaitre", "quel plat"],
  avis: ["avis", "review", "note", "etoile", "commentaire", "feedback", "google avis"],
  evenement: ["evenement", "anniversaire", "prive", "groupe", "seminaire", "mariage", "fete", "team building"],
  fidelite: ["fidelite", "loyalty", "point", "programme", "club", "avantage", "reduction"],
  "carte vin": ["vin", "wine", "bouteille", "champagne", "rouge", "blanc", "sommelier", "cepage"],
  vegetarien: ["vegetarien", "vegan", "veggie", "legume", "vegetal", "sans viande", "plant based"],
  "annuler reservation": ["annuler", "annulation", "modifier", "changer", "deplacer", "reporter", "no show"],
  "contact chef": ["chef", "cuisine", "cuisinier", "traiteur", "cours cuisine", "special"],
};

/* ─── Merge with Vocalis shared features ─── */

const { intents, keywords } = mergeWithVocalis(restaurantIntents, restaurantKeywords);

const restaurantConfig: SimulatorConfig = {
  botName: "Le Gourmet IA",
  botAvatar: "LG",
  welcomeMessage:
    "Bienvenue au **Gourmet IA** ! Je suis votre assistant IA.\n\nJe peux vous aider a :\n- Reserver une table\n- Consulter le menu du jour\n- Commander a emporter\n- Decouvrir nos vins\n- Organiser un evenement\n\nQue souhaitez-vous ?",
  initialQuickReplies: [
    { label: "Reserver une table", value: "reservation" },
    { label: "Menu du jour", value: "menu" },
    { label: "Commander a emporter", value: "commande" },
    { label: "Carte des vins", value: "carte vin" },
    { label: "Horaires", value: "horaires" },
  ],
  intents,
  keywords,
  fallback: createFallback([
    { label: "Reserver", value: "reservation" },
    { label: "Menu", value: "menu" },
    { label: "Horaires", value: "horaires" },
    { label: "Tarifs Vocalis", value: "tarif" },
  ]),
};

export { restaurantConfig };
export default restaurantConfig;
