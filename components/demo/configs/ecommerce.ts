import type { SimulatorConfig } from "@/components/demo/WhatsAppSimulator";
import { mergeWithVocalis, createFallback } from "./vocalis-features";

const ECOMMERCE_INTENTS = {
  bonjour: {
    text: "Bonjour ! Bienvenue chez **ModaChic** !\n\nJe suis votre assistant shopping personnel propulse par **Vocalis AI**.\n\nJe peux vous aider avec vos commandes, retours, tailles, promos et bien plus. Comment puis-je vous aider ?",
    delay: 800,
    quickReplies: [
      { label: "Suivre ma commande", value: "suivi commande" },
      { label: "Nouveau client", value: "catalogue" },
      { label: "Clonage vocal", value: "clonage vocal" },
      { label: "WhatsApp features", value: "whatsapp features" },
      { label: "Telephonie IA", value: "telephonie" },
      { label: "Promos du moment", value: "code promo" },
    ],
  },

  "suivi commande": {
    text: "Bien sur ! Voici le statut de votre derniere commande :\n\n**Commande #MC-78432**\n- Robe Elegance Noire (M) — 89,90 EUR\n- Sac Cuir Camel — 129,00 EUR\n\n**Statut :** En cours de livraison\n**Transporteur :** Colissimo\n**N de suivi :** 8R12345678901\n**Livraison estimee :** Demain avant 18h\n\nVoulez-vous autre chose ?",
    delay: 1500,
    quickReplies: [
      { label: "Modifier l'adresse", value: "livraison" },
      { label: "Probleme livraison", value: "reclamation" },
      { label: "Autre commande", value: "suivi commande" },
      { label: "Retour accueil", value: "bonjour" },
    ],
  },

  retour: {
    text: "Notre politique de retour **ModaChic** :\n\n- Retour gratuit sous **30 jours**\n- Article non porte, etiquettes intactes\n- Echange taille/couleur sans frais\n\nJe viens de generer votre **etiquette retour** :\n\n**Etiquette :** RET-MC-2026-04-78432.pdf\n**Point relais le plus proche :** Relais Colis — 12 rue du Commerce\n\nDeposez votre colis et le remboursement sera effectue sous **3-5 jours ouvrables**.",
    delay: 1800,
    quickReplies: [
      { label: "Echanger la taille", value: "guide tailles" },
      { label: "Suivi remboursement", value: "suivi commande" },
      { label: "Article defectueux", value: "photo produit" },
      { label: "Retour accueil", value: "bonjour" },
    ],
  },

  "guide tailles": {
    text: "Voici notre **guide des tailles ModaChic** :\n\n**Hauts & Robes :**\n- XS : Tour poitrine 80-84 cm\n- S : 84-88 cm\n- M : 88-92 cm\n- L : 92-96 cm\n- XL : 96-100 cm\n\n**Pantalons :**\n- 36 : Tour taille 64-68 cm\n- 38 : 68-72 cm\n- 40 : 72-76 cm\n- 42 : 76-80 cm\n\n**Astuce IA :** Envoyez-moi vos mensurations et je vous recommande la taille ideale pour chaque article !",
    delay: 1400,
    quickReplies: [
      { label: "Recommander ma taille", value: "guide tailles" },
      { label: "Voir le catalogue", value: "catalogue" },
      { label: "Echanger un article", value: "retour" },
      { label: "Retour accueil", value: "bonjour" },
    ],
  },

  stock: {
    text: "Je verifie la disponibilite pour vous...\n\nVoici les **best-sellers en stock** :\n\n- **Robe Elegance Noire** — 89,90 EUR (S, M, L)\n- **Blazer Parisienne** — 149,00 EUR (M, L, XL)\n- **Jean Slim Brut** — 69,90 EUR (36, 38, 40, 42)\n- **Pull Cachemire Ivoire** — 119,00 EUR (S, M) *dernieres pieces !*\n\nQuel article vous interesse ?",
    delay: 1200,
    quickReplies: [
      { label: "Robe Elegance", value: "catalogue" },
      { label: "Blazer Parisienne", value: "catalogue" },
      { label: "Guide des tailles", value: "guide tailles" },
      { label: "Ajouter au panier", value: "paiement" },
    ],
  },

  "photo produit": {
    text: "Merci pour la photo ! Notre **IA analyse l'image**...\n\n**Resultat de l'analyse :**\n- Article identifie : Robe Elegance Noire (ref. MC-REN-042)\n- Defaut detecte : Couture decousue au niveau de l'ourlet\n- Gravite : Defaut de fabrication confirme\n\n**Decision :** Remplacement gratuit ou remboursement integral\n\nJe genere votre bon de retour prioritaire. Vous recevrez le remplacement sous **48h** !",
    delay: 2500,
    quickReplies: [
      { label: "Remplacement", value: "retour" },
      { label: "Remboursement", value: "retour" },
      { label: "Autre probleme", value: "reclamation" },
      { label: "Retour accueil", value: "bonjour" },
    ],
  },

  "code promo": {
    text: "Voici les **offres du moment** chez ModaChic :\n\n- **SPRING26** : -20% sur la nouvelle collection printemps\n- **BIENVENUE15** : -15% pour votre 1ere commande\n- **FIDELE10** : -10% pour les membres du club (cumulable)\n\n**Vente flash :** Jusqu'a **-50%** sur les manteaux d'hiver — Plus que 23 articles !\n\nCopiez le code et ajoutez-le au panier.",
    delay: 1200,
    quickReplies: [
      { label: "Voir le catalogue", value: "catalogue" },
      { label: "Vente flash", value: "stock" },
      { label: "Devenir membre", value: "sav" },
      { label: "Retour accueil", value: "bonjour" },
    ],
  },

  livraison: {
    text: "**Options de livraison ModaChic :**\n\n- **Standard** (3-5 jours) : Gratuit des 49 EUR\n- **Express** (24h) : 5,90 EUR\n- **Point relais** (2-4 jours) : Gratuit des 29 EUR\n- **Same-day Paris** : 9,90 EUR (commande avant 14h)\n\n**Zones :** France metropolitaine, Belgique, Suisse, Luxembourg\n**Suivi :** SMS + email a chaque etape\n\nVotre commande est-elle en cours ?",
    delay: 1300,
    quickReplies: [
      { label: "Suivre ma commande", value: "suivi commande" },
      { label: "Modifier l'adresse", value: "livraison" },
      { label: "Livraison internationale", value: "livraison" },
      { label: "Retour accueil", value: "bonjour" },
    ],
  },

  paiement: {
    text: "**Moyens de paiement acceptes :**\n\n- Carte bancaire (Visa, Mastercard, Amex)\n- PayPal\n- Apple Pay / Google Pay\n- Klarna — Paiement en **3x sans frais** des 50 EUR\n- Virement bancaire\n- Carte cadeau ModaChic\n\n**Paiement 100% securise** (3D Secure, chiffrement SSL)\n\nBesoin d'aide pour finaliser votre commande ?",
    delay: 1100,
    quickReplies: [
      { label: "Payer en 3x", value: "paiement" },
      { label: "Probleme paiement", value: "reclamation" },
      { label: "Carte cadeau", value: "catalogue" },
      { label: "Retour accueil", value: "bonjour" },
    ],
  },

  reclamation: {
    text: "Je suis desole pour ce desagrement. Votre satisfaction est notre priorite.\n\n**Votre reclamation est enregistree :**\n- **Ref :** REC-MC-2026-04-1847\n- **Priorite :** Haute\n- **Delai de reponse :** Sous 2h maximum\n\nUn conseiller senior va prendre en charge votre dossier. En attendant, puis-je vous proposer un **bon d'achat de 10 EUR** en geste commercial ?",
    delay: 1600,
    quickReplies: [
      { label: "Accepter le bon", value: "code promo" },
      { label: "Parler a un humain", value: "contact humain" },
      { label: "Envoyer une photo", value: "photo produit" },
      { label: "Retour accueil", value: "bonjour" },
    ],
  },

  sav: {
    text: "**Service apres-vente ModaChic :**\n\nNotre SAV est disponible **7j/7 de 8h a 22h**.\n\nJe peux vous aider avec :\n- Suivi et modification de commande\n- Retours et echanges\n- Problemes de qualite\n- Facturation et remboursements\n- Programme de fidelite (vos points : **2 450 pts** = 24,50 EUR)\n\nQue souhaitez-vous faire ?",
    delay: 1200,
    quickReplies: [
      { label: "Mes points fidelite", value: "sav" },
      { label: "Ma facture", value: "suivi commande" },
      { label: "Supprimer mon compte", value: "contact humain" },
      { label: "Retour accueil", value: "bonjour" },
    ],
  },

  avis: {
    text: "Merci de vouloir laisser un avis ! Votre retour nous aide enormement.\n\n**Evaluez votre dernier achat :**\n- Robe Elegance Noire — Commande #MC-78432\n\nSur une echelle de 1 a 5, comment evaluez-vous :\n- La qualite du produit ?\n- La rapidite de livraison ?\n- Le service client ?\n\nRepondez simplement avec 3 chiffres (ex: 5 4 5) et j'enregistre votre avis.\n\n**Bonus :** Chaque avis = **50 points fidelite** offerts !",
    delay: 1400,
    quickReplies: [
      { label: "5 5 5", value: "avis" },
      { label: "Laisser un commentaire", value: "avis" },
      { label: "Mes points", value: "sav" },
      { label: "Retour accueil", value: "bonjour" },
    ],
  },

  catalogue: {
    text: "Decouvrez nos **collections ModaChic** :\n\n**Nouveautes Printemps 2026 :**\n- Robe Florale Provence — 79,90 EUR\n- Blazer Lin Naturel — 139,00 EUR\n- Sandales Dorees — 59,90 EUR\n\n**Best-sellers :**\n- Robe Elegance Noire — 89,90 EUR\n- Jean Slim Brut — 69,90 EUR\n- Sac Cuir Camel — 129,00 EUR\n\n**Code SPRING26** pour -20% sur les nouveautes !\n\nQuel article vous interesse ?",
    delay: 1500,
    quickReplies: [
      { label: "Nouveautes", value: "catalogue" },
      { label: "Best-sellers", value: "stock" },
      { label: "Guide des tailles", value: "guide tailles" },
      { label: "Code promo", value: "code promo" },
    ],
  },

  "panier abandonne": {
    text: "J'ai remarque que vous avez des articles dans votre panier !\n\n**Votre panier ModaChic :**\n- Blazer Parisienne (M) — 149,00 EUR\n- Foulard Soie Bordeaux — 45,00 EUR\n\n**Total :** 194,00 EUR\n**Avec SPRING26 :** ~~194,00~~ **155,20 EUR** (-20%)\n\nVotre code expire dans **2 heures**. Voulez-vous finaliser votre commande ?",
    delay: 1600,
    quickReplies: [
      { label: "Finaliser la commande", value: "paiement" },
      { label: "Modifier le panier", value: "catalogue" },
      { label: "Verifier les tailles", value: "guide tailles" },
      { label: "Plus tard", value: "bonjour" },
    ],
  },

  "contact humain": {
    text: "Bien sur, je vous transfere vers un conseiller humain.\n\n**Transfert en cours...**\n- Temps d'attente estime : **< 2 minutes**\n- Conseiller assigne : **Sophie M.** (equipe e-commerce)\n- Votre historique de conversation sera transmis\n\nEn attendant, Sophie aura acces a :\n- Votre historique de commandes\n- Votre dossier de reclamation\n- Les solutions deja proposees\n\nMerci de votre patience !",
    delay: 2000,
    quickReplies: [
      { label: "Appeler directement", value: "contact humain" },
      { label: "Envoyer un email", value: "contact humain" },
      { label: "Finalement, ca ira", value: "bonjour" },
    ],
  },

  wishlist: {
    text: "Votre **liste de souhaits ModaChic** :\n\n1. Manteau Laine Camel — 229,00 EUR *(-50% vente flash !)*\n2. Bottines Chelsea Noires — 119,00 EUR\n3. Echarpe Cachemire Grise — 89,00 EUR\n\n**Alerte :** Le Manteau Laine Camel est en promo a **114,50 EUR** ! Plus que 3 en stock.\n\nVoulez-vous l'ajouter au panier ?",
    delay: 1300,
    quickReplies: [
      { label: "Ajouter au panier", value: "paiement" },
      { label: "Voir le catalogue", value: "catalogue" },
      { label: "Alertes stock", value: "stock" },
      { label: "Retour accueil", value: "bonjour" },
    ],
  },

  // --- New sector-specific intents leveraging Vocalis features ---

  "campagne whatsapp": {
    text: "**Campagnes WhatsApp pour e-commerce** :\n\nRecuperez vos **paniers abandonnes** automatiquement !\n\n**Comment ca marche :**\n1. Client abandonne son panier\n2. Apres 1h → template WhatsApp avec rappel + code promo\n3. Apres 24h → relance avec offre exclusive\n4. Apres 48h → derniere chance + urgence stock\n\n**Resultats moyens :**\n- **35% de recovery** panier abandonne\n- **+22% CA mensuel** supplementaire\n- **ROI 8x** sur le cout des messages\n\nTemplates Meta pre-approuves inclus.",
    delay: 2200,
    quickReplies: [
      { label: "Templates Meta", value: "templates" },
      { label: "Scoring leads", value: "scoring" },
      { label: "Tarifs", value: "tarif" },
      { label: "Prendre RDV", value: "rdv" },
    ],
  },

  "appel sav": {
    text: "**Appel IA pour le SAV e-commerce** :\n\nVotre agent vocal gere les appels support automatiquement :\n\n**Cas traites par l'IA :**\n- Suivi de commande par telephone\n- Problemes de livraison\n- Demandes de retour/echange\n- Reclamations niveau 1\n- Enquetes satisfaction post-achat\n\n**Avantages :**\n- Disponible **24/7** sans file d'attente\n- Transfert humain si cas complexe\n- Transcript + CRM sync automatique\n- Voix clonee de votre marque\n\n**-60% de charge** sur votre equipe support.",
    delay: 2400,
    quickReplies: [
      { label: "Clonage vocal", value: "clonage vocal" },
      { label: "Telephonie IA", value: "telephonie" },
      { label: "CRM integrations", value: "crm" },
      { label: "Tarifs", value: "tarif" },
    ],
  },

  "template promo": {
    text: "**Templates Meta pour promos e-commerce** :\n\n**Templates pre-configures :**\n\n1. **Vente flash** — Alerte stock limite + countdown\n2. **Code promo personnalise** — Nom + historique achat\n3. **Nouvelle collection** — Visuels + lien catalogue\n4. **Fidelite** — Points accumules + recompense\n5. **Anniversaire client** — Offre exclusive\n\n**Envoi cible :**\n- Segmentation par historique d'achat\n- Timing optimal par fuseau horaire\n- A/B testing automatique\n\n**Taux d'ouverture WhatsApp : 98%** vs 20% email.",
    delay: 2200,
    quickReplies: [
      { label: "Campagne WhatsApp", value: "campagne whatsapp" },
      { label: "Automatisation", value: "automatisation" },
      { label: "Tarifs", value: "tarif" },
      { label: "Prendre RDV", value: "rdv" },
    ],
  },
};

const ECOMMERCE_KEYWORDS: Record<string, string[]> = {
  bonjour: [
    "bonjour", "salut", "hello", "hey", "bonsoir", "coucou",
    "hi", "yo", "bjr", "slt", "bsr",
  ],
  "suivi commande": [
    "commande", "suivi", "tracking", "colis", "ou est",
    "livré", "livre", "statut", "numero", "track",
    "expedition", "expedie", "envoi", "envoye",
  ],
  retour: [
    "retour", "retourner", "echanger", "echange", "renvoyer",
    "renvoi", "rembourser", "remboursement", "reprendre",
    "etiquette retour", "bon retour",
  ],
  "guide tailles": [
    "taille", "tailles", "mesure", "mensuration", "size",
    "sizing", "cm", "petit", "grand", "ajuste",
    "large", "etroit", "guide",
  ],
  stock: [
    "stock", "disponible", "disponibilite", "dispo",
    "reste", "rupture", "epuise", "en stock",
    "quantite",
  ],
  "photo produit": [
    "photo", "image", "defaut", "defectueux", "abime",
    "casse", "trou", "dechire", "tache", "envoyer photo",
    "probleme qualite",
  ],
  "code promo": [
    "promo", "promotion", "code", "coupon", "reduction",
    "remise", "offre", "solde", "soldes", "pourcentage",
    "reduc", "bon plan", "deal",
  ],
  livraison: [
    "livraison", "livrer", "delai", "frais port",
    "expedition", "transporteur", "colissimo", "chronopost",
    "adresse", "relais",
  ],
  paiement: [
    "paiement", "payer", "carte", "paypal", "virement",
    "3x", "plusieurs fois", "klarna", "apple pay",
    "securise", "facture", "financement", "finance", "credit", "pret", "mensualite",
  ],
  reclamation: [
    "reclamation", "plainte", "probleme", "insatisfait",
    "mecontent", "nul", "arnaque", "scandaleux",
    "inacceptable", "reclamer", "pas content",
  ],
  sav: [
    "sav", "service client", "apres vente", "apres-vente",
    "fidelite", "points", "programme", "membre",
    "garantie", "assistance",
  ],
  avis: [
    "avis", "review", "evaluer", "evaluation", "noter",
    "note", "commentaire", "feedback", "etoile",
    "recommander", "satisfait",
  ],
  catalogue: [
    "catalogue", "collection", "nouveaute", "produit",
    "article", "vetement", "robe", "pantalon", "jean",
    "veste", "sac", "chaussure", "accessoire",
    "voir", "parcourir", "explorer",
  ],
  "panier abandonne": [
    "panier", "cart", "abandon", "oublie", "finaliser",
    "checkout", "valider", "terminer commande",
  ],
  "contact humain": [
    "humain", "conseiller", "agent", "personne",
    "telephone", "email", "transferer",
    "parler", "quelqu'un",
  ],
  wishlist: [
    "wishlist", "favoris", "souhaits", "liste", "envie",
    "sauvegarder", "plus tard",
  ],
  "campagne whatsapp": [
    "campagne whatsapp", "recovery panier", "relance panier",
    "abandon panier", "recuperer panier",
  ],
  "appel sav": [
    "appel sav", "support telephonique", "appel support",
    "telephone sav", "hotline",
  ],
  "template promo": [
    "template promo", "template promotion", "message promo",
    "promo whatsapp", "envoi promo",
  ],
};

const merged = mergeWithVocalis(ECOMMERCE_INTENTS, ECOMMERCE_KEYWORDS);

export const ecommerceConfig: SimulatorConfig = {
  botName: "ModaChic",
  botAvatar: "MC",
  welcomeMessage:
    "Bienvenue chez **ModaChic** ! Je suis votre assistant shopping personnel propulse par **Vocalis AI**.\n\nJe peux vous aider avec vos commandes, retours, tailles, promos et bien plus. Comment puis-je vous aider ?",
  initialQuickReplies: [
    { label: "Suivre ma commande", value: "suivi commande" },
    { label: "Retour / Echange", value: "retour" },
    { label: "Guide des tailles", value: "guide tailles" },
    { label: "Code promo", value: "code promo" },
    { label: "Voir le catalogue", value: "catalogue" },
    { label: "Parler a un conseiller", value: "contact humain" },
  ],
  intents: merged.intents,
  keywords: merged.keywords,
  fallback: createFallback([
    { label: "Suivre ma commande", value: "suivi commande" },
    { label: "Guide des tailles", value: "guide tailles" },
    { label: "Code promo", value: "code promo" },
    { label: "Parler a un humain", value: "contact humain" },
  ]),
};

export default ecommerceConfig;
