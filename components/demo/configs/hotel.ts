import type { SimulatorConfig, BotResponse } from "../WhatsAppSimulator";
import { mergeWithVocalis, createFallback } from "./vocalis-features";

const sectorIntents: Record<string, BotResponse> = {
  bonjour: {
    text: "Bienvenue au **HotelLux** ! Je suis votre concierge IA, disponible 24h/24.\n\nJe peux vous aider a :\n- Reserver une chambre\n- Organiser votre check-in / check-out\n- Reserver le spa ou le restaurant\n- Organiser excursions et transferts\n- Services de conciergerie\n\nComment puis-je rendre votre sejour exceptionnel ?",
    delay: 1400,
    quickReplies: [
      { label: "Reserver", value: "reservation" },
      { label: "Nos chambres", value: "chambres" },
      { label: "Spa & wellness", value: "spa" },
      { label: "Restaurant", value: "restaurant hotel" },
    ],
  },
  reservation: {
    text: "**Reservation de chambre**\n\nPour trouver la chambre ideale, indiquez :\n\n**Dates :** Arrivee et depart\n**Type :** Classique, Superieure, Suite, Prestige\n**Voyageurs :** Nombre d'adultes et enfants\n**Preferences :** Vue mer, etage eleve, lit king...\n\n**Exemple :** *\"Suite vue mer, 2 adultes, du 15 au 18 mai\"*\n\n**Avantage reservation WhatsApp :**\n- Meilleur tarif garanti\n- Upgrade gratuit selon dispo\n- Late check-out offert\n\nQuelles sont vos dates ?",
    delay: 2000,
    quickReplies: [
      { label: "Voir les chambres", value: "chambres" },
      { label: "Tarifs", value: "tarifs chambre" },
      { label: "Suite prestige", value: "chambres" },
      { label: "Groupe / evenement", value: "groupe" },
    ],
  },
  chambres: {
    text: "**Nos categories de chambres :**\n\n**Classique** — 28m2\nLit queen, salle de bain marbre, minibar\nA partir de 180 EUR/nuit\n\n**Superieure** — 35m2\nLit king, balcon, vue jardin, coffre\nA partir de 260 EUR/nuit\n\n**Suite Junior** — 50m2\nSalon separe, baignoire balneo, vue panoramique\nA partir de 420 EUR/nuit\n\n**Suite Prestige** — 75m2\nTerrasse privee, jacuzzi, butler service\nA partir de 680 EUR/nuit\n\n**Penthouse** — 120m2\nDuplex, piscine privee, chef a domicile\nSur demande\n\nToutes les chambres incluent petit-dejeuner, wifi et acces spa.",
    delay: 2400,
    quickReplies: [
      { label: "Reserver suite", value: "reservation" },
      { label: "Photo chambre", value: "photo chambre" },
      { label: "Tarifs saison", value: "tarifs chambre" },
      { label: "Services inclus", value: "conciergerie" },
    ],
  },
  "tarifs chambre": {
    text: "**Grille tarifaire par saison**\n\n| Chambre | Basse saison | Haute saison | Fetes |\n|---------|-------------|-------------|-------|\n| Classique | 180 EUR | 280 EUR | 350 EUR |\n| Superieure | 260 EUR | 380 EUR | 480 EUR |\n| Suite Junior | 420 EUR | 580 EUR | 720 EUR |\n| Suite Prestige | 680 EUR | 900 EUR | 1 200 EUR |\n\n**Basse saison :** Nov - Mars (hors fetes)\n**Haute saison :** Avril - Octobre\n**Fetes :** Noel, Nouvel An, Paques\n\n**Offres speciales :**\n- -15% pour 5+ nuits\n- -10% reservation anticipee (60j)\n- Package lune de miel disponible\n\nTarifs par nuit, petit-dejeuner inclus.",
    delay: 2200,
    quickReplies: [
      { label: "Reserver maintenant", value: "reservation" },
      { label: "Package special", value: "groupe" },
      { label: "Spa inclus ?", value: "spa" },
      { label: "Annulation ?", value: "check out" },
    ],
  },
  "check in": {
    text: "**Informations check-in**\n\n**Horaires standard :**\n- Check-in : a partir de **15h00**\n- Bagagerie disponible des 8h00\n\n**Early check-in :**\n- 12h00 : +30 EUR (selon dispo)\n- 10h00 : +60 EUR (selon dispo)\n- Garanti pour les Suites Prestige\n\n**Check-in express via WhatsApp :**\n1. Envoyez votre passeport/CI en photo\n2. On prepare votre cle digitale\n3. Allez directement en chambre !\n\n**A votre arrivee :**\n- Boisson de bienvenue offerte\n- Presentation des services\n- Plan de l'hotel interactif\n\nSouhaitez-vous un early check-in ?",
    delay: 2000,
    quickReplies: [
      { label: "Early check-in", value: "check in" },
      { label: "Navette aeroport", value: "navette" },
      { label: "Parking", value: "parking" },
      { label: "Wifi", value: "wifi" },
    ],
  },
  "check out": {
    text: "**Informations check-out**\n\n**Horaires standard :**\n- Check-out : avant **11h00**\n- Express check-out : deposez la cle, facture par email\n\n**Late check-out :**\n- 13h00 : gratuit (selon dispo)\n- 15h00 : +50 EUR\n- 18h00 : +100 EUR (demi-journee)\n\n**Politique d'annulation :**\n- Flexible : annulation gratuite 48h avant\n- Non-remboursable : -15% sur le tarif\n\n**Le jour du depart :**\n- Petit-dejeuner servi jusqu'a 10h30\n- Bagagerie gratuite\n- Navette aeroport sur demande\n\nBesoin d'un late check-out ?",
    delay: 1800,
    quickReplies: [
      { label: "Late check-out", value: "check out" },
      { label: "Navette depart", value: "navette" },
      { label: "Facture detaillee", value: "check out" },
      { label: "Prolonger sejour", value: "reservation" },
    ],
  },
  spa: {
    text: "**Spa & Wellness — HotelLux**\n\n**Espace detente** (inclus pour les residents)\n- Piscine interieure chauffee (28°C)\n- Sauna finlandais + hammam\n- Salle de fitness 24/7\n\n**Soins sur reservation :**\n\n**Massage relaxant** — 60 min — 120 EUR\n**Massage sportif** — 60 min — 140 EUR\n**Soin visage premium** — 75 min — 150 EUR\n**Ritual oriental** — 90 min — 200 EUR\n**Package couple** — 120 min — 350 EUR\n\n**Horaires :** 7h00 - 21h00\n\nReservation recommandee 24h a l'avance.\n\nQuel soin vous interesse ?",
    delay: 2200,
    quickReplies: [
      { label: "Reserver massage", value: "spa" },
      { label: "Package couple", value: "spa" },
      { label: "Horaires piscine", value: "spa" },
      { label: "Autres activites", value: "excursions" },
    ],
  },
  "restaurant hotel": {
    text: "**Restaurant & Room Service**\n\n**Le Jardin** — Restaurant gastronomique\n- Petit-dejeuner : 7h00 - 10h30 (inclus)\n- Dejeuner : 12h00 - 14h30\n- Diner : 19h00 - 22h30\n- Chef etoile, cuisine mediterraneenne\n\n**Le Bar Terrasse** — Cocktails & tapas\n- 11h00 - 00h00\n- Happy hour : 17h00 - 19h00\n\n**Room Service** — 24h/24\n- Menu complet en chambre\n- Supplement : 8 EUR\n- Livraison en 30 min\n\n**Menus speciaux :**\n- Vegetarien / Vegan\n- Sans gluten\n- Halal / Casher (sur demande 24h)\n\nReserver une table ?",
    delay: 2200,
    quickReplies: [
      { label: "Reserver diner", value: "restaurant hotel" },
      { label: "Room service", value: "restaurant hotel" },
      { label: "Menu du jour", value: "restaurant hotel" },
      { label: "Spa apres diner", value: "spa" },
    ],
  },
  excursions: {
    text: "**Excursions & Activites locales**\n\n**Demi-journee :**\n- Visite guidee vieille ville — 45 EUR/pers\n- Degustation vins locaux — 60 EUR/pers\n- Randonnee panoramique — 35 EUR/pers\n\n**Journee complete :**\n- Croisiere cotiere + dejeuner — 120 EUR/pers\n- Safari 4x4 arriere-pays — 95 EUR/pers\n- Cours de cuisine locale — 80 EUR/pers\n\n**Experiences premium :**\n- Helicoptere survol cote — 250 EUR/pers\n- Plongee sous-marine — 110 EUR/pers\n- Yacht prive demi-journee — 800 EUR (4 pers max)\n\nReservation via WhatsApp, depart depuis l'hotel.\n\nQuelle activite vous tente ?",
    delay: 2200,
    quickReplies: [
      { label: "Croisiere", value: "excursions" },
      { label: "Degustation vins", value: "excursions" },
      { label: "Navette activites", value: "navette" },
      { label: "Reservation chambre", value: "reservation" },
    ],
  },
  navette: {
    text: "**Service navette aeroport**\n\n**Transfert prive :**\n- Berline (1-3 pers) : 60 EUR\n- Van (4-7 pers) : 90 EUR\n- Minibus (8-15 pers) : 150 EUR\n\n**Trajet moyen :** 25 min (selon trafic)\n\n**Reservation :**\n- Indiquez vol + heure d'arrivee\n- Chauffeur avec pancarte a votre nom\n- Suivi vol en temps reel\n- Eau et serviettes fraiches a bord\n\n**Navette partagee :** 20 EUR/pers\n(Departs toutes les heures 6h-22h)\n\nSouhaitez-vous reserver un transfert ?",
    delay: 1800,
    quickReplies: [
      { label: "Navette arrivee", value: "navette" },
      { label: "Navette depart", value: "navette" },
      { label: "Parking hotel", value: "parking" },
      { label: "Check-in info", value: "check in" },
    ],
  },
  parking: {
    text: "**Parking hotel**\n\n**Parking couvert securise :**\n- Residents : 20 EUR/jour\n- Suite Prestige / Penthouse : gratuit\n- Voiturier disponible\n\n**Places disponibles :** en temps reel via WhatsApp\n\n**Bornes electriques :**\n- 4 bornes Tesla Supercharger\n- 2 bornes universelles (Type 2)\n- Recharge gratuite pour les residents\n\n**Parking exterieur :** 10 EUR/jour\n\nReservation recommandee en haute saison.\n\nBesoin d'une place ?",
    delay: 1600,
    quickReplies: [
      { label: "Reserver place", value: "parking" },
      { label: "Borne electrique", value: "parking" },
      { label: "Navette aeroport", value: "navette" },
      { label: "Check-in", value: "check in" },
    ],
  },
  wifi: {
    text: "**Acces Wifi — HotelLux**\n\n**Wifi gratuit dans tout l'hotel :**\n- Reseau : HotelLux-Guest\n- Mot de passe : communique au check-in\n- Debit : 100 Mbps\n\n**Wifi Premium** (inclus Suites) :\n- Debit : 500 Mbps\n- Ideal streaming 4K, visio, gaming\n- Supplement : 10 EUR/jour (autres chambres)\n\n**Couverture :**\n- Chambres, lobby, restaurant, piscine, spa\n- Salle de conference (reseau dedie)\n\nBesoin d'aide pour la connexion ?",
    delay: 1400,
    quickReplies: [
      { label: "Probleme connexion", value: "wifi" },
      { label: "Wifi conference", value: "groupe" },
      { label: "Autres services", value: "conciergerie" },
      { label: "Room service", value: "restaurant hotel" },
    ],
  },
  animaux: {
    text: "**Politique animaux de compagnie**\n\n**Animaux bienvenus !** (chiens et chats)\n\n**Conditions :**\n- Supplement : 30 EUR/nuit\n- Poids max : 15 kg\n- 1 animal par chambre\n- Carnet de vaccination a jour\n\n**Services inclus :**\n- Gamelle et coussin en chambre\n- Sac de friandises d'accueil\n- Liste des veterinaires proches\n- Parcours promenade autour de l'hotel\n\n**Restriction :**\n- Animaux non admis au restaurant et spa\n- Acces jardin et terrasse autorises\n\nVoyagez-vous avec un animal ?",
    delay: 1800,
    quickReplies: [
      { label: "Reserver avec animal", value: "reservation" },
      { label: "Veterinaire proche", value: "conciergerie" },
      { label: "Chambres dispo", value: "chambres" },
      { label: "Autres questions", value: "conciergerie" },
    ],
  },
  "photo chambre": {
    text: "Envoyez-moi une **photo ou screenshot** de la chambre souhaitee et notre IA identifiera :\n\n- **Type de chambre** correspondant\n- **Disponibilite** en temps reel\n- **Tarif** pour vos dates\n- **Vue** (mer, jardin, ville)\n\nVous pouvez aussi envoyer une photo d'un autre hotel et on vous propose l'equivalent chez nous !\n\nEnvoyez votre image !",
    delay: 1600,
    quickReplies: [
      { label: "Voir nos chambres", value: "chambres" },
      { label: "Tarifs", value: "tarifs chambre" },
      { label: "Reserver", value: "reservation" },
      { label: "Visite virtuelle", value: "chambres" },
    ],
  },
  conciergerie: {
    text: "**Conciergerie IA — A votre service 24/7**\n\n**Services disponibles :**\n\n- **Reservations** : restaurants, spectacles, musees\n- **Transport** : taxi, VTC, location voiture, helicoptere\n- **Shopping** : personal shopper, livraisons\n- **Celebrations** : gateau anniversaire, fleurs, champagne\n- **Business** : impression, coursier, secretariat\n- **Sante** : medecin, pharmacie, dentiste\n- **Enfants** : baby-sitting, activites kids club\n\n**Temps de reponse :** < 5 minutes\n**Langue :** FR, EN, DE, IT, ES, AR\n\nQue puis-je organiser pour vous ?",
    delay: 2000,
    quickReplies: [
      { label: "Restaurant en ville", value: "restaurant hotel" },
      { label: "Baby-sitting", value: "conciergerie" },
      { label: "Anniversaire", value: "conciergerie" },
      { label: "Excursions", value: "excursions" },
    ],
  },
  groupe: {
    text: "**Groupes & Evenements — HotelLux**\n\n**Seminaires & Conferences :**\n- 3 salles (20 a 200 personnes)\n- Equipement AV complet\n- Wifi haut debit dedie\n- Pauses cafe + dejeuner inclus\n- A partir de 85 EUR/pers/jour\n\n**Mariages & Receptions :**\n- Terrasse panoramique (150 pers max)\n- Menu degustation sur mesure\n- Wedding planner partenaire\n- Forfait a partir de 12 000 EUR\n\n**Groupes touristiques :**\n- Tarifs negocies des 10 chambres\n- Guide local inclus\n- Programme d'activites personnalise\n\nEnvoyez-nous votre brief pour un devis sous 24h.",
    delay: 2400,
    quickReplies: [
      { label: "Devis seminaire", value: "groupe" },
      { label: "Devis mariage", value: "groupe" },
      { label: "Tarifs groupe", value: "tarifs chambre" },
      { label: "Visiter les salles", value: "conciergerie" },
    ],
  },
};

const sectorKeywords: Record<string, string[]> = {
  bonjour: ["bonjour", "salut", "hello", "hey", "bonsoir", "coucou", "hi"],
  reservation: [
    "reserver", "reservation", "booking", "chambre", "sejour",
    "nuit", "disponibilite",
  ],
  chambres: [
    "chambre", "suite", "penthouse", "categorie", "type chambre",
    "classique", "superieure", "prestige",
  ],
  "tarifs chambre": [
    "tarif chambre", "prix nuit", "combien nuit", "cout chambre",
    "saison", "promotion", "financement", "finance", "credit", "pret", "mensualite", "paiement", "payer", "facilite",
  ],
  "check in": [
    "check in", "checkin", "arrivee", "enregistrement", "early",
    "cle chambre",
  ],
  "check out": [
    "check out", "checkout", "depart", "late", "annulation",
    "facture", "quitter",
  ],
  spa: [
    "spa", "massage", "piscine", "sauna", "hammam", "soin",
    "wellness", "detente", "fitness",
  ],
  "restaurant hotel": [
    "restaurant", "diner", "dejeuner", "room service", "menu",
    "bar", "petit-dejeuner", "brunch",
  ],
  excursions: [
    "excursion", "activite", "visite", "tour", "croisiere",
    "randonnee", "plongee", "yacht",
  ],
  navette: [
    "navette", "transfert", "aeroport", "shuttle", "chauffeur",
    "taxi", "transport",
  ],
  parking: [
    "parking", "voiture", "garer", "borne", "electrique",
    "voiturier", "garage",
  ],
  wifi: ["wifi", "internet", "connexion", "reseau", "mot de passe", "debit"],
  animaux: [
    "animal", "animaux", "chien", "chat", "pet", "compagnie",
    "veterinaire",
  ],
  "photo chambre": [
    "photo chambre", "image chambre", "voir chambre",
    "visite virtuelle",
  ],
  conciergerie: [
    "conciergerie", "concierge", "service", "baby-sitting",
    "anniversaire", "fleurs", "champagne", "aide",
  ],
  groupe: [
    "groupe", "seminaire", "conference", "mariage", "evenement",
    "event", "reception", "reunion", "equipe",
  ],
};

const { intents, keywords } = mergeWithVocalis(sectorIntents, sectorKeywords);

const hotelFallback = createFallback([
  { label: "Reserver", value: "reservation" },
  { label: "Nos chambres", value: "chambres" },
  { label: "Spa", value: "spa" },
  { label: "Tarifs Vocalis", value: "tarif" },
]);

const hotelConfig: SimulatorConfig = {
  botName: "HotelLux IA",
  botAvatar: "HL",
  welcomeMessage:
    "Bienvenue au **HotelLux** ! Je suis votre concierge IA, disponible 24h/24.\n\nJe peux vous aider a :\n- Reserver une chambre\n- Organiser check-in / check-out\n- Reserver spa ou restaurant\n- Planifier excursions et transferts\n- Services de conciergerie\n\nComment puis-je vous aider ?",
  initialQuickReplies: [
    { label: "Reserver", value: "reservation" },
    { label: "Nos chambres", value: "chambres" },
    { label: "Spa & wellness", value: "spa" },
    { label: "Restaurant", value: "restaurant hotel" },
    { label: "Conciergerie", value: "conciergerie" },
  ],
  intents,
  keywords,
  fallback: hotelFallback,
};

export { hotelConfig };
export default hotelConfig;
