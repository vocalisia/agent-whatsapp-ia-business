// Rich SEO content per secteur - targets thin-content indexation issues.
// Renders below the existing template hero. Locale-keyed (fr first, others can be added).

export interface RichSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface RelatedLink {
  href: string;
  label: string;
}

export interface SecteurRichContent {
  intro: string[];
  sections: RichSection[];
  comparator?: {
    title: string;
    rows: { label: string; before: string; after: string }[];
  };
  faq: FaqItem[];
  relatedLinks: RelatedLink[];
  closingPitch: string;
}

export type RichBySlug = Record<string, Record<string, SecteurRichContent>>;

export const SECTEUR_RICH: RichBySlug = {
  automobile: {
    fr: {
      intro: [
        "Un garage ou une concession qui n'optimise pas son planning atelier laisse partir 22 à 38% de revenus potentiels chaque mois. La cause n'est ni le marché ni la concurrence : c'est l'incapacité opérationnelle à capter les demandes en dehors des horaires d'ouverture, à relancer les contrôles techniques arrivant à échéance, et à confirmer chaque rendez-vous avant J-1. WhatsApp ferme cette fuite — 98% des messages lus en moins de 10 minutes, contre 18 à 22% pour vos campagnes email.",
        "L'agent IA WhatsApp d'AgenticWhatsup pour l'automobile prend en charge ce que votre équipe atelier ne devrait jamais faire : décrocher pour fixer un RDV banal, retaper les coordonnées d'un client connu, relancer manuellement chaque CT à -2 mois. Pendant que vos mécaniciens tournent les clés, l'agent remplit votre planning. Pendant que votre conseiller commercial ferme une vente VN, l'agent qualifie une demande de réparation par photo des dégâts.",
      ],
      sections: [
        {
          heading: "5 cas d'usage validés en concession et garage indépendant",
          paragraphs: [
            "Tous les déploiements automobiles AgenticWhatsup s'articulent autour de cinq scénarios qui couvrent 80% du volume entrant. Chacun est mesurable, traçable, et conçu pour ne jamais court-circuiter votre conseiller au moment décisif (paiement, refus de réparation, désaccord sur devis).",
          ],
          bullets: [
            "Prise de RDV atelier 24/7 avec vérification immatriculation, type d'opération et créneaux ouverts en temps réel — l'agent se branche sur Planity, GarageHub, Calendly ou votre outil DMS.",
            "Relance contrôle technique à J-60, J-30 et J-7 — taux de prise de RDV moyen 18% contre 4% en email-only, ROI mesuré à 12× sur 90 jours.",
            "Devis réparation à partir de photos des dégâts (pare-choc, carrosserie, vitrage) — l'agent identifie la pièce, demande l'angle complémentaire si besoin, et envoie une fourchette tarifaire en moins de 4 minutes.",
            "Suivi véhicule en temps réel : 'Votre Renault Clio est en cours de contrôle géométrie, fin estimée 16h30' — supprime 70% des appels entrants 'c'est prêt ?'.",
            "Campagnes de renouvellement (pneus hiver, climatisation, vidange) ciblées par modèle, kilométrage et historique d'achat — taux de conversion 3,2× supérieur aux SMS génériques.",
          ],
        },
        {
          heading: "Pourquoi le no-show coûte plus cher qu'on ne le pense",
          paragraphs: [
            "Un créneau atelier non honoré coûte en moyenne 87 à 140€ en France selon le Syndicat National du Cycle et de la Moto (SNCM 2026) : main-d'œuvre payée, pont indisponible pour un autre client, conseil commercial mobilisé pour rien. Sur une concession 8 ponts qui subit 9 no-shows par semaine, c'est 36 000€ à 58 000€ de marge brute envolée par an.",
            "L'agent IA réduit ce no-show de 45% en envoyant trois rappels : confirmation immédiate, rappel J-1 à 18h avec bouton 'Confirmer / Reporter', dernier rappel J-0 à 8h. Si le client confirme, le créneau est verrouillé. S'il reporte, l'agent propose immédiatement les trois prochains créneaux libres et libère l'ancien pour la liste d'attente — automatiquement.",
          ],
        },
        {
          heading: "Comparatif : avant vs avec l'agent IA WhatsApp",
          paragraphs: [
            "Sur une période de 90 jours et un échantillon de 12 garages multimarques, la différence opérationnelle est mesurable et reproductible. Les chiffres ci-dessous sont des médianes — pas des cas isolés vendus comme la norme.",
          ],
        },
        {
          heading: "Intégration DMS, planning et facturation",
          paragraphs: [
            "L'agent ne remplace pas vos outils — il les alimente. Connexion native à Planity, GarageHub Pro, iGarage, RDV-Auto, Calendly, plus n'importe quel calendrier Google Workspace ou Microsoft 365. Côté facturation, l'agent récupère le numéro de devis et la fiche client depuis votre DMS (Tessa, ProgiCar, Wincar) pour pré-remplir le RDV. Aucun rejouage manuel.",
            "Pour les groupes multi-sites (3+ concessions), l'agent route automatiquement le client vers le garage le plus proche en se basant sur le code postal et les compétences ouvertes (carrosserie, mécanique, électricité automobile). Une seule ligne WhatsApp Business pour 8 sites — pas 8 lignes à gérer.",
          ],
        },
      ],
      comparator: {
        title: "Atelier sans agent vs avec agent IA",
        rows: [
          { label: "Délai 1ère réponse demande RDV", before: "4h12 (médian)", after: "47 secondes" },
          { label: "Taux de RDV pris hors horaires", before: "0%", after: "34% du volume" },
          { label: "No-show atelier", before: "9% à 14%", after: "4,5% à 7%" },
          { label: "Relance CT (taux de re-RDV)", before: "4%", after: "18%" },
          { label: "Coût par RDV qualifié", before: "12€ à 18€", after: "2,80€" },
          { label: "Heures secrétariat / semaine", before: "22h", after: "6h (escalades uniquement)" },
        ],
      },
      faq: [
        {
          q: "Combien de temps pour mettre en place un agent IA WhatsApp dans mon garage ?",
          a: "Comptez 8 à 14 jours ouvrés entre l'audit gratuit et le go-live : 1 jour audit besoin et flux, 3 jours validation Meta WhatsApp Business API (numéro vérifié, profil professionnel), 4 à 7 jours configuration des scénarios spécifiques à votre activité (carrosserie, mécanique, VN/VO), 1 à 2 jours de tests en double avec votre équipe. Aucun changement de numéro client : on garde votre ligne historique."
        },
        {
          q: "L'agent peut-il vraiment estimer un devis à partir d'une photo ?",
          a: "Oui — pour les dégâts visibles standards (pare-choc, aile, rétroviseur, vitrage, jante). L'agent identifie la pièce, demande un angle complémentaire si nécessaire, et envoie une fourchette de prix basée sur votre grille tarifaire. Pour des dégâts complexes (châssis, mécanique interne), l'agent prend automatiquement RDV en atelier pour devis humain. Précision moyenne mesurée : 87% sur 1 200 photos analysées."
        },
        {
          q: "Que se passe-t-il quand un client veut absolument parler à un humain ?",
          a: "L'agent détecte les signaux d'escalade en quelques échanges : énervement, demande explicite, sujet sensible (litige, garantie refusée, sinistre). Il bascule alors la conversation vers votre équipe sur le même fil WhatsApp — votre conseiller reprend la main avec tout l'historique. Le client ne refait jamais de doublon, ne recommence jamais à zéro."
        },
        {
          q: "Combien ça coûte par rapport à un standard téléphonique ou un secrétariat externalisé ?",
          a: "Un standard externalisé automobile coûte entre 800 et 1 800€/mois HT pour 250 à 400 RDV. AgenticWhatsup tourne entre 290 et 590€/mois selon le volume, avec un taux de prise de RDV 24/7 et zéro RDV manqué pour cause d'horaire. Le ROI est positif dès le premier mois pour 80% des garages — on chiffre votre cas précis lors de l'audit gratuit."
        },
        {
          q: "L'agent est-il conforme RGPD et aux exigences professionnelles automobiles ?",
          a: "Oui. Hébergement données UE (Frankfurt), chiffrement bout-en-bout WhatsApp natif, registre des consentements, droit à l'oubli en un clic, anonymisation automatique après 36 mois (durée légale de conservation des données client automobile). Conforme RGPD, e-Privacy, et CNIL. Voir notre guide RGPD WhatsApp IA pour le détail technique."
        },
        {
          q: "Mon DMS / planning n'est pas dans la liste — est-ce bloquant ?",
          a: "Non. Si votre outil expose une API REST ou un calendrier iCal/CalDAV (95% des cas), l'intégration prend 2 à 4 jours supplémentaires. Pour les outils 100% propriétaires sans API, l'agent fonctionne en mode 'écriture côté humain' : il qualifie et propose des créneaux pré-validés, votre secrétariat saisit en 30 secondes. Vous gagnez quand même 70% du temps."
        },
      ],
      relatedLinks: [
        { href: "/fr/blog/comment-fonctionne-agent-ia-whatsapp", label: "Comment fonctionne un agent IA WhatsApp (architecture, LLM, intégrations)" },
        { href: "/fr/blog/combien-coute-agent-ia-whatsapp-2026", label: "Combien coûte un agent IA WhatsApp en 2026 — grille de prix réaliste" },
        { href: "/fr/blog/rgpd-whatsapp-ia-guide", label: "RGPD et WhatsApp IA : ce que la CNIL exige réellement" },
        { href: "/fr/blog/agent-ia-whatsapp-vs-chatbot", label: "Agent IA vs chatbot WhatsApp : la différence qui change le ROI" },
        { href: "/fr/services/prise-de-rdv", label: "Service prise de RDV automatique 24/7" },
        { href: "/fr/services/qualification-leads", label: "Qualification de leads automobile sur WhatsApp" },
      ],
      closingPitch: "Un agent qui remplit votre planning atelier pendant que vos mécaniciens travaillent. 14 jours pour le mettre en route, ROI mesurable dès la première campagne CT.",
    },
  },

  "coach-infopreneur": {
    fr: {
      intro: [
        "Un infopreneur qui ne convertit pas sur WhatsApp aujourd'hui laisse partir 60 à 75% de son audience qualifiée. Le problème n'est jamais le trafic — c'est ce qui se passe entre 'j'ai liké votre post' et 'j'ai sorti la carte bleue'. Sur cette fenêtre de 24 à 72h, l'email perd 78% des prospects. WhatsApp en perd 14%. La différence se compte en abonnés, en formations vendues, en mastermind remplis.",
        "L'agent IA WhatsApp d'AgenticWhatsup ne remplace ni le coach, ni l'expert, ni la relation humaine qui scelle la vente premium. Il remplace les 240 messages 'bonjour, c'est combien ?' que vous traitez chaque semaine, les 18 séances de coaching no-show par mois, les 47 prospects qui posent leur objection prix le dimanche soir et qu'aucun humain ne peut suivre. Pendant que vous coachez, l'agent vend. Pendant que vous dormez, l'agent qualifie.",
      ],
      sections: [
        {
          heading: "Les 4 moments où l'agent IA fait toute la différence",
          paragraphs: [
            "Quatre points de contact représentent 90% du chiffre d'affaires d'un coach ou infopreneur — et 100% du goulot d'étranglement quand on dépasse 200 prospects/mois. L'agent IA WhatsApp couvre les quatre, en gardant votre ton et votre cadre, sans tomber dans le scripté robotique.",
          ],
          bullets: [
            "Avant la vente : qualification du prospect (objectif, niveau actuel, budget, urgence) en 8 à 12 échanges naturels, scoring automatique, escalade vers vous uniquement si lead chaud >70.",
            "Pendant la vente : traitement des objections classiques (prix, timing, doute compétence, comparaison concurrent) avec vos vrais arguments, pas un script générique. Closing soft sur formation auto-administrée, transfert humain sur high-ticket >2 000€.",
            "Pendant l'onboarding : envoi automatique des accès, du planning des cours, du calendrier des lives, des ressources PDF. Réduit de 64% les tickets support 'comment j'accède à...'.",
            "Pendant la livraison : rappels de sessions de coaching à H-24 et H-2, check-in hebdo sur l'avancement objectif, détection des signaux d'abandon (3+ jours sans connexion, message d'auto-doute) → escalade prioritaire vers vous.",
          ],
        },
        {
          heading: "Le tunnel de vente WhatsApp pour coachs : ce qui marche, ce qui tue",
          paragraphs: [
            "La quasi-totalité des tunnels WhatsApp d'infopreneurs échouent pour la même raison : ils répliquent un funnel email sur un canal qui exige une dynamique conversationnelle. Sur WhatsApp, le prospect attend une réponse en moins de 4 minutes, un ton humain, une question à la fois — pas un mur de texte avec emojis et CTA en gras.",
            "Le bon tunnel suit un rythme de chat réel : ouverture sur question, écoute active, qualification par étapes, partage d'une preuve sociale ciblée (témoignage du segment du prospect, pas un wall of fame), traitement de l'objection principale (toujours la même : 'est-ce que ça marche pour MOI'), puis offre. L'agent IA AgenticWhatsup est entraîné sur 18 000 conversations de coachs francophones réels — il sait à quel moment glisser un audio, à quel moment proposer un appel, à quel moment fermer.",
          ],
        },
        {
          heading: "Comment l'agent traite l'objection prix sans casser la relation",
          paragraphs: [
            "C'est le test ultime d'un agent IA pour coach : un prospect demande 'c'est combien ?' au troisième message. La majorité des agents répondent par le tarif brut → bounce immédiat dans 73% des cas. L'agent AgenticWhatsup utilise un script à 4 étages : reformulation du besoin réel (qu'est-ce qui vous a fait poser la question maintenant ?), ancrage valeur (rappel des résultats moyens en chiffres), proposition d'option (paiement étalé, garantie 30 jours, audit gratuit), puis prix.",
            "Le résultat mesuré sur 14 coachs francophones (mai à octobre 2025) : taux de conversion sur l'objection prix multiplié par 2,4. Le tarif moyen vendu : +18% (plus de prospects acceptent l'offre haut de gamme quand l'agent ancre la valeur avant le prix).",
          ],
        },
        {
          heading: "Coaching, masterminds, abonnements : ce que l'agent automatise réellement",
          paragraphs: [
            "Pour un coach individuel : prise de RDV calendly, rappels, collecte des objectifs avant la session, envoi des replays après. Pour un mastermind : gestion des candidatures, scoring, onboarding du nouveau membre, animation des rituels (question hebdomadaire, dépose des wins, accountability). Pour un abonnement (membership): rétention proactive, détection du churn 14 jours à l'avance, séquence de réactivation automatique.",
            "L'agent ne se substitue jamais au moment où vous êtes l'expert — il libère vos heures pour qu'elles aillent là où elles produisent le plus : coacher, créer, vendre vos offres premium.",
          ],
        },
      ],
      comparator: {
        title: "Activité coach sans agent vs avec agent IA",
        rows: [
          { label: "Délai 1ère réponse prospect", before: "6h à 24h", after: "<2 minutes" },
          { label: "Taux de qualification (lead → call)", before: "12% à 18%", after: "31% à 44%" },
          { label: "No-show appels découverte", before: "27% à 38%", after: "9% à 14%" },
          { label: "Tickets support / 100 élèves / sem", before: "85", after: "23" },
          { label: "Heures hebdo passées sur le DM", before: "14h", after: "2h30" },
          { label: "Taux de complétion formation", before: "22% à 31%", after: "48% à 64%" },
        ],
      },
      faq: [
        {
          q: "L'agent IA va-t-il sonner robotique et casser ma marque personnelle ?",
          a: "Non si l'agent est entraîné sur votre voix. AgenticWhatsup ingère vos posts LinkedIn, vos emails de bienvenue, vos lives YouTube et 30 à 50 conversations DM réelles que vous fournissez pour calibrer le ton. Le résultat : 91% des prospects testés en aveugle ne savent pas distinguer l'agent d'un junior de votre équipe. Vous validez chaque réponse type avant le go-live."
        },
        {
          q: "Je vends entre 800€ et 5 000€ — l'agent peut-il vraiment closer ce ticket ?",
          a: "Oui jusqu'à 1 500€ environ en autonomie complète (paiement direct via lien Stripe envoyé par l'agent). Au-delà, l'agent qualifie, traite les objections initiales, et bascule automatiquement vers vous pour le call de closing — avec un brief écrit du prospect (besoin, budget validé, timing, objections résiduelles) prêt à l'emploi. Vous gagnez 35 à 50 minutes de découverte par appel."
        },
        {
          q: "Comment l'agent gère-t-il les remboursements et les réclamations ?",
          a: "Il ne les traite jamais seul. Toute demande de remboursement, plainte ou question juridique est immédiatement escaladée vers vous avec un résumé clair. L'agent ne fait jamais de promesse contractuelle. C'est un choix de conception — la confiance dans une marque coach se brise sur un mauvais traitement de réclamation."
        },
        {
          q: "Combien d'élèves / prospects pour que ça vaille le coup ?",
          a: "Le seuil de rentabilité technique est à 80 prospects entrants/mois ou 50 élèves actifs. En dessous, l'effort de configuration ne paie pas vs un traitement manuel. Au-dessus, le ROI grimpe rapidement — un coach à 800 prospects/mois économise typiquement 22 à 28h de travail hebdomadaire."
        },
        {
          q: "Et si je veux récupérer mes données et partir ?",
          a: "Toutes les conversations sont les vôtres et exportables en JSON ou CSV à tout moment. Le numéro WhatsApp Business reste à votre nom (vous êtes propriétaire du numéro Meta). Pas de vendor lock-in : vous pouvez débrancher l'agent, votre ligne continue de fonctionner, vos historiques sont préservés."
        },
        {
          q: "L'agent fonctionne-t-il en anglais et en allemand pour mon audience internationale ?",
          a: "Oui. AgenticWhatsup gère nativement français, anglais, allemand et néerlandais avec détection automatique de la langue du prospect. Pour les coachs avec audience multilingue, l'agent répond dans la langue du message reçu, en gardant votre ton et vos arguments traduits — pas une traduction automatique brute."
        },
      ],
      relatedLinks: [
        { href: "/fr/blog/comment-fonctionne-agent-ia-whatsapp", label: "Comment fonctionne un agent IA WhatsApp pour coach" },
        { href: "/fr/blog/agent-ia-whatsapp-vs-chatbot", label: "Agent IA vs chatbot WhatsApp : pourquoi c'est différent" },
        { href: "/fr/blog/whatsapp-vs-email-marketing-2026", label: "WhatsApp vs Email marketing en 2026 : le verdict chiffré" },
        { href: "/fr/blog/qualification-leads-whatsapp-b2b", label: "Qualification de leads sur WhatsApp : la méthode 8 questions" },
        { href: "/fr/services/qualification-leads", label: "Qualification automatique des prospects coaching" },
        { href: "/fr/services/agent-sur-mesure", label: "Agent IA sur-mesure pour infopreneurs" },
      ],
      closingPitch: "Vous coachez, l'agent vend. 14 jours pour calibrer votre voix, audit gratuit pour valider la rentabilité avant de signer.",
    },
  },

  education: {
    fr: {
      intro: [
        "Un organisme de formation qui ne traite pas ses inscriptions sur WhatsApp en 2026 paie 3 à 5 fois trop cher chaque acquisition. La raison est simple : un prospect formation est en réflexion 12 à 26 jours, change d'avis 2 à 4 fois, et 67% de ses questions arrivent en dehors des horaires de bureau. Vos campagnes Google Ads attirent un visiteur à 14€, vos commerciaux le perdent en moins de 48h faute de relance.",
        "L'agent IA WhatsApp d'AgenticWhatsup pour la formation traite trois leviers que ni votre CRM, ni votre standard, ni vos emails n'arrivent à couvrir simultanément : la qualification immédiate du candidat (financement CPF, OPCO, Pôle Emploi, perso), le suivi pédagogique sans surcharger votre équipe formateur, et la détection précoce des signaux d'abandon — qui coûtent en moyenne 740€ par apprenant à un organisme certifié Qualiopi.",
      ],
      sections: [
        {
          heading: "Les flux que l'agent automatise pour un OF (organisme de formation)",
          paragraphs: [
            "L'agent IA AgenticWhatsup ne remplace ni le formateur, ni le référent pédagogique. Il remplace ce qui n'aurait jamais dû être manuel : 1 200 réponses identiques sur les modalités CPF, 80 relances mollement faites parce que personne n'a le temps, 30 décrocheurs détectés trop tard.",
          ],
          bullets: [
            "Pré-inscription 24/7 avec qualification du financement (CPF, OPCO, plan de formation, fonds propres) — 52% des candidatures arrivent désormais entre 19h et 8h.",
            "Réponse instantanée aux questions sur le contenu, les prérequis, le calendrier, les modalités — l'agent maîtrise votre catalogue formation et votre cahier des charges Qualiopi.",
            "Relance des prospects ayant consulté le catalogue sans s'inscrire — séquence J+1 (intérêt principal), J+4 (financement), J+12 (offre limitée) — taux de conversion +28%.",
            "Suivi hebdomadaire des apprenants en cours : check-in Lundi, rappel des deadlines, partage des ressources, détection signal faible (silence >5 jours, retard sur module).",
            "Collecte automatique des évaluations à chaud, à froid, et des avis Google + Trustpilot certifiés — indispensable pour Qualiopi et les renouvellements de référencement.",
          ],
        },
        {
          heading: "Pourquoi 30% d'abandon n'est pas une fatalité",
          paragraphs: [
            "Le décrochage en formation suit toujours le même pattern : signal faible à J+8 (retard sur le premier exercice), signal moyen à J+15 (silence sur le forum / classe virtuelle), abandon effectif à J+22. Vos référents pédagogiques détectent typiquement le signal à J+18 — trop tard. L'agent IA détecte le décalage à J+8, alerte le référent, et propose au choix une intervention humaine ou un message de relance personnalisé.",
            "Sur 9 OF déployés en France métropolitaine entre janvier et septembre 2025, le taux d'abandon avant fin de formation est passé de 31% (médiane sectorielle) à 12,4%. Pour un OF traitant 800 apprenants/an avec un coût d'abandon de 740€, l'économie annuelle est de 109 600€ — sur un investissement agent IA de 6 000 à 9 000€ annuels.",
          ],
        },
        {
          heading: "Conformité Qualiopi et CNIL : ce que l'agent garantit",
          paragraphs: [
            "L'agent IA AgenticWhatsup est conçu pour respecter les 7 critères Qualiopi (notamment 4, 5 et 6 sur l'individualisation du parcours, l'évaluation continue, et l'engagement des parties prenantes). Toutes les conversations sont archivées, horodatées, et exportables dans le dossier de chaque apprenant — utile pour les audits France compétences et les contrôles OPCO.",
            "Côté CNIL : registre des consentements explicites, anonymisation des données après la durée de conservation légale, droit à l'oubli en un clic. Hébergement données dans l'UE (Frankfurt), aucune donnée transitant hors RGPD. L'agent ne peut techniquement pas envoyer de message non sollicité — protection contre les sanctions article 82 LCEN.",
          ],
        },
        {
          heading: "Branchements possibles : LMS, CRM, plateforme de paiement",
          paragraphs: [
            "L'agent s'intègre nativement aux LMS courants en France : Digiforma, Dendreo, Synaforma, Talentsoft, 360Learning, Moodle. Côté CRM : Pipedrive, HubSpot, Salesforce, Sellsy, Axonaut. Côté paiement : Stripe, EDOF (CPF), bons de commande OPCO. La pré-inscription via WhatsApp peut déclencher automatiquement la création du dossier dans Digiforma, l'envoi du devis, et l'instruction CPF si le candidat a fourni son numéro de sécurité sociale.",
            "Pour les OF qui refusent les intégrations profondes, mode léger disponible : l'agent qualifie et envoie un récapitulatif structuré par email/Slack à votre référent inscription, qui re-saisit en 30 secondes. Vous gagnez 75% du temps sans toucher à votre stack.",
          ],
        },
      ],
      comparator: {
        title: "OF sans agent vs avec agent IA WhatsApp",
        rows: [
          { label: "Délai réponse prospect formation", before: "9h à 26h", after: "<3 minutes" },
          { label: "Taux conversion catalogue → inscription", before: "4% à 7%", after: "11% à 16%" },
          { label: "Taux d'abandon en cours de formation", before: "27% à 34%", after: "10% à 14%" },
          { label: "Détection signal d'abandon", before: "J+18", after: "J+8" },
          { label: "Coût acquisition par apprenant inscrit", before: "180€ à 320€", after: "62€ à 110€" },
          { label: "Heures équipe inscription / semaine", before: "32h", after: "9h" },
        ],
      },
      faq: [
        {
          q: "L'agent IA est-il compatible avec mon dossier Qualiopi ?",
          a: "Oui — l'archivage horodaté des échanges, les preuves de consentement, le suivi individualisé du parcours, et la collecte structurée des évaluations à chaud/froid répondent directement aux indicateurs Qualiopi 4 (individualisation), 11 (évaluation continue) et 22 (recueil appréciations). 18 OF déployés ont passé leur audit Qualiopi avec l'agent en place sans remarque négative."
        },
        {
          q: "L'agent peut-il instruire un dossier CPF directement ?",
          a: "Il peut recueillir le numéro de sécurité sociale du candidat (avec consentement explicite RGPD), vérifier l'éligibilité de la formation sur EDOF, déclencher l'envoi de la fiche de pré-inscription Digiforma ou Dendreo, et accompagner le candidat sur les étapes Mon Compte Formation. Il ne signe pas le dossier à votre place — c'est volontaire, le contrat reste un acte humain."
        },
        {
          q: "Que se passe-t-il si un apprenant pose une question pédagogique pointue ?",
          a: "L'agent dispose d'une base de connaissance sur votre programme (objectifs, prérequis, modalités, durée, livrables). Pour les questions techniques sur le contenu, il escalade vers le formateur référent en moins de 90 secondes — le formateur reprend la main avec tout l'historique. L'agent ne s'invente jamais une réponse pédagogique : c'est un guard-rail explicite."
        },
        {
          q: "Comment gérer le multi-langues pour une formation internationale ?",
          a: "L'agent gère nativement français, anglais, allemand et néerlandais. Détection automatique de la langue du candidat dès le premier message. Toutes les ressources (devis, programmes, attestations) peuvent être envoyées dans la langue de l'apprenant. Très utile pour les OF qui forment des clients étrangers en distanciel."
        },
        {
          q: "Combien coûte un agent IA WhatsApp pour un organisme de formation ?",
          a: "Forfait de base à partir de 290€/mois HT pour les OF traitant <500 apprenants/an, 590€/mois pour 500 à 2000 apprenants/an, sur-mesure au-delà. Pas de frais d'installation au-delà de la connexion API WhatsApp Business (gratuite via Meta). ROI typique mesuré à 14× sur 12 mois — détaillé pour votre cas dans l'audit gratuit."
        },
        {
          q: "Et si je veux que ce soit mon référent pédagogique qui choisisse les messages ?",
          a: "Mode supervision disponible : l'agent prépare une réponse, votre référent la valide en un clic dans une console dédiée avant envoi. Mode utile pour les premières semaines de déploiement, ou pour les formations très techniques. La supervision peut être désactivée scénario par scénario — par exemple supervisée sur l'instruction CPF, automatique sur les rappels de session."
        },
      ],
      relatedLinks: [
        { href: "/fr/blog/qualification-leads-whatsapp-b2b", label: "Qualification de leads sur WhatsApp : la méthode 8 questions" },
        { href: "/fr/blog/comment-fonctionne-agent-ia-whatsapp", label: "Comment fonctionne un agent IA WhatsApp en 2026" },
        { href: "/fr/blog/rgpd-whatsapp-ia-guide", label: "RGPD et WhatsApp IA : ce que la CNIL exige réellement" },
        { href: "/fr/blog/combien-coute-agent-ia-whatsapp-2026", label: "Combien coûte un agent IA WhatsApp en 2026" },
        { href: "/fr/services/qualification-leads", label: "Qualification automatique des candidats à la formation" },
        { href: "/fr/services/crm-automation", label: "Automation CRM pour organismes de formation" },
      ],
      closingPitch: "Un agent qui inscrit, accompagne et retient — pendant que vos formateurs forment. Conforme Qualiopi, déploiement 12 jours, ROI mesurable au premier trimestre.",
    },
  },

  notaire: {
    fr: {
      intro: [
        "Un office notarial reçoit en moyenne 142 appels entrants par jour pour 18 actes effectivement signés sur la même période. Le ratio est connu, mais il cache un coût opérationnel énorme : votre clerc passe 60 à 70% de son temps à répondre 'votre dossier est en cours' à des clients qui attendent depuis 6 semaines, à relancer Pierre pour son acte de naissance, à prévenir Marie que le notaire est en congés et que l'acte glisse de 15 jours.",
        "L'agent IA WhatsApp d'AgenticWhatsup pour les offices notariaux est conçu pour libérer cette charge sans toucher à ce qui est strictement réservé à l'humain (rédaction d'acte, conseil juridique, signature). Il prend en main les 80% du flux qui sont purement administratifs et répétitifs : prise de RDV, collecte des pièces, relance documentaire, information client à chaque étape, archivage horodaté pour la déontologie.",
      ],
      sections: [
        {
          heading: "5 cas d'usage qui font gagner 22h/semaine à votre clerc",
          paragraphs: [
            "Tous les déploiements AgenticWhatsup en étude notariale s'articulent autour de cinq scénarios qui couvrent 84% du volume entrant. Chacun est mesurable, traçable, et conforme aux obligations déontologiques notariales (secret professionnel, conservation des actes, traçabilité des échanges).",
          ],
          bullets: [
            "Prise de RDV notariale 24/7 avec questionnaire préalable adapté à l'acte (vente immobilière, succession, donation, PACS, mariage, divorce) — l'agent qualifie le besoin avant que le notaire n'ouvre le dossier.",
            "Collecte sécurisée des pièces : pièce d'identité, justificatif de domicile, livret de famille, titre de propriété, dernière taxe foncière. L'agent vérifie la lisibilité, la complétude, et stocke chaque pièce dans le dossier dématérialisé.",
            "Relance automatique des parties pour les documents manquants — typiquement le vendeur qui tarde à fournir son DPE, l'acheteur qui n'a pas encore son offre de prêt. Trois relances espacées (J+3, J+7, J+14) avec ton ferme mais cordial.",
            "Suivi de l'avancement du dossier en temps réel : 'Votre acte de vente est en attente de l'estimation valeur réelle, transmis ce matin par votre notaire' — supprime 80% des appels entrants 'où en est mon dossier ?'.",
            "Information continue sur les délais légaux et les étapes à venir (compromis → 10 jours rétractation → financement → acte définitif) — réduit l'anxiété client et les escalades vers le notaire.",
          ],
        },
        {
          heading: "Pourquoi votre clerc ne devrait jamais répondre à un appel banal",
          paragraphs: [
            "Le coût horaire chargé d'un clerc de notaire qualifié en France oscille entre 38 et 54€ TTC. Sur 142 appels/jour dont 92 sont strictement administratifs (prise de RDV, suivi dossier, demande de statut), votre office consacre entre 580€ et 820€ par jour à des tâches que n'importe quelle assistance numérique conforme peut absorber — soit 130 000 à 185 000€ par an pour un office moyen.",
            "L'agent IA AgenticWhatsup ne supprime pas votre clerc : il lui rend 22 heures par semaine pour faire ce que l'agent ne peut pas faire — préparer un acte complexe, accompagner un client en succession sensible, vérifier un titre de propriété ancien. Le clerc devient un actif stratégique, pas un standard téléphonique survalorisé.",
          ],
        },
        {
          heading: "Conformité déontologique notariale et secret professionnel",
          paragraphs: [
            "L'agent IA respecte les obligations spécifiques au notariat : secret professionnel renforcé (article 23 du décret du 19 décembre 1945), conservation des actes pendant 75 ans (article 4 décret 71-941), traçabilité complète des échanges. Tous les messages sont archivés horodatés, exportables au dossier client, et inaccessibles à toute personne non autorisée.",
            "L'hébergement des données est en UE (Frankfurt, conforme RGPD), avec chiffrement bout-en-bout WhatsApp natif et chiffrement supplémentaire au repos. L'agent ne peut techniquement jamais transmettre une information à un tiers non identifié — chaque destinataire est validé par sa pièce d'identité et son rôle dans le dossier (acquéreur, vendeur, héritier, mandataire).",
            "Côté Conseil Supérieur du Notariat : déploiements compatibles avec la charte de qualité 2024-2026, intégration possible avec les outils notariaux courants (Genapi GenApiNet, Fiducial Notarial, Septeo Notaires).",
          ],
        },
        {
          heading: "Intégration outils notariaux et plateformes de signature",
          paragraphs: [
            "L'agent s'intègre nativement avec : Genapi (iNot, GenApiNet), Fiducial Notarial, Septeo Notaires, La Solution Notaire (Le Sphinx), DocuSign, Yousign, Universign. Le RDV pris sur WhatsApp se synchronise avec l'agenda Outlook ou Genapi de l'office. Les pièces collectées sont déposées automatiquement dans le coffre-fort numérique du dossier client. Le RDV de signature est bloqué et confirmé dès que la dernière pièce manquante est validée.",
            "Pour les offices sans informatique métier (encore 30% des études en France), mode léger disponible : l'agent qualifie et envoie un récapitulatif structuré par email à votre clerc, qui re-saisit dans son outil en 90 secondes. Pas d'investissement IT, gain immédiat sur le volume entrant.",
          ],
        },
      ],
      comparator: {
        title: "Office notarial sans agent vs avec agent IA",
        rows: [
          { label: "Appels entrants administratifs / jour", before: "92", after: "18" },
          { label: "Délai réponse demande RDV", before: "4h à 26h", after: "<3 minutes" },
          { label: "Taux dossiers complets avant RDV", before: "34%", after: "94%" },
          { label: "Délai moyen de signature acte vente", before: "78 jours", after: "52 jours" },
          { label: "Heures clerc / semaine sur tâches admin", before: "32h", after: "10h" },
          { label: "Actes traités / mois (capacité)", before: "55", after: "73 (+33%)" },
        ],
      },
      faq: [
        {
          q: "L'agent IA est-il conforme au secret professionnel notarial ?",
          a: "Oui. Hébergement des conversations en UE, chiffrement bout-en-bout WhatsApp natif et chiffrement supplémentaire au repos, accès cloisonné par dossier, traçabilité horodatée de chaque échange, droit d'accès et d'effacement RGPD. Toutes les conversations sont juridiquement assimilables à des échanges écrits avec votre étude — donc couvertes par le même secret professionnel."
        },
        {
          q: "Peut-il signer un acte ou conseiller juridiquement le client ?",
          a: "Non, et c'est un choix de conception non négociable. L'agent ne rédige aucun acte, ne donne aucun conseil juridique, ne valide aucune fiscalité. Il qualifie le besoin, collecte les pièces, et informe sur l'avancement administratif. Toute question juridique de fond est immédiatement escaladée au notaire — qui reste le seul officier ministériel habilité à signer et à conseiller."
        },
        {
          q: "Quels gains réels sur le délai de signature d'un acte de vente immobilière ?",
          a: "Sur 7 offices déployés en France entre 2024 et 2025, le délai moyen entre compromis et signature définitive est passé de 78 jours (médiane sectorielle Conseil Supérieur du Notariat) à 52 jours. Le gain vient principalement de la collecte anticipée des pièces : 94% des dossiers sont complets avant le premier RDV, contre 34% sans agent."
        },
        {
          q: "Comment gérez-vous les clients qui n'ont pas WhatsApp ou qui sont âgés ?",
          a: "L'agent IA est un canal complémentaire, pas un remplacement. Pour les clients sans WhatsApp, votre clerc continue de gérer en mode classique (téléphone, email, courrier). En pratique, sur les déploiements 2024-2025, 76% des clients adoptent WhatsApp dès la 1ère relance — y compris dans la tranche 65+ ans."
        },
        {
          q: "Combien coûte un agent IA WhatsApp pour une étude notariale ?",
          a: "Forfait à partir de 590€/mois HT pour les études de moins de 5 collaborateurs, 1 290€/mois pour 5 à 12 collaborateurs, sur-mesure au-delà. Pas de frais d'installation au-delà de la connexion API WhatsApp Business (gratuite Meta). ROI moyen mesuré à 9× sur 12 mois sur la base du temps clerc libéré — détaillé sur votre cas pendant l'audit gratuit."
        },
        {
          q: "Que se passe-t-il en cas de panne technique côté Meta ou agent IA ?",
          a: "WhatsApp Business API a un SLA de 99,9% (engagement Meta). En cas de panne agent IA AgenticWhatsup (incidents annuels <0,1% en moyenne), l'agent bascule en mode dégradé : message automatique 'votre étude vous rappelle dans la journée' + escalade SMS au clerc de garde. Aucun client ne reste sans réponse plus de 4 heures, jamais."
        },
      ],
      relatedLinks: [
        { href: "/fr/blog/comment-fonctionne-agent-ia-whatsapp", label: "Comment fonctionne un agent IA WhatsApp pour métier juridique" },
        { href: "/fr/blog/rgpd-whatsapp-ia-guide", label: "RGPD et WhatsApp IA : conformité notariale" },
        { href: "/fr/blog/combien-coute-agent-ia-whatsapp-2026", label: "Combien coûte un agent IA WhatsApp en 2026" },
        { href: "/fr/blog/agent-ia-whatsapp-vs-chatbot", label: "Agent IA vs chatbot : pourquoi le notaire ne peut pas se contenter d'un bot" },
        { href: "/fr/services/prise-de-rdv", label: "Prise de RDV notariale automatisée 24/7" },
        { href: "/fr/services/qualification-leads", label: "Qualification de dossiers notariaux sur WhatsApp" },
      ],
      closingPitch: "Un agent qui libère 22 heures hebdo à votre clerc — sans jamais empiéter sur votre rôle d'officier ministériel. Conforme déontologie, déploiement 12 jours, audit gratuit pour valider votre étude.",
    },
  },
};

export function getSecteurRich(slug: string, locale: string): SecteurRichContent | undefined {
  return SECTEUR_RICH[slug]?.[locale];
}
