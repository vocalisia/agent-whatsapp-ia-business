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
            "Pré-diagnostic réparation à partir de photos des dégàts (pare-choc, carrosserie, vitrage) — l'agent identifie la piéce, demande l'angle complémentaire si besoin, et prépare un dossier exploitable par votre conseiller.",
            "Suivi véhicule en temps réel : 'Votre Renault Clio est en cours de contrôle géométrie, fin estimée 16h30' — supprime 70% des appels entrants 'c'est prêt ?'.",
            "Campagnes de renouvellement (pneus hiver, climatisation, vidange) ciblées par modèle, kilométrage et historique d'achat — taux de conversion 3,2× supérieur aux SMS génériques.",
          ],
        },
        {
          heading: "Pourquoi le no-show bloque plus qu'on ne le pense",
          paragraphs: [
            "Un créneau atelier non honoré bloque de la main-d'œuvre, immobilise un pont et mobilise le conseil commercial pour rien. Sur une concession multi-ponts qui subit plusieurs no-shows par semaine, la perte opérationnelle se voit vite dans le planning et dans la marge.",
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
          { label: "Temps de traitement par RDV qualifié", before: "Long et manuel", after: "Court et tracé" },
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
          a: "Oui — pour les dégàts visibles standards (pare-choc, aile, rétroviseur, vitrage, jante). L'agent identifie la piéce, demande un angle complémentaire si nécessaire, et prépare une estimation indicative basée sur vos régles métier. Pour des dégàts complexes (chàssis, mécanique interne), l'agent prend automatiquement RDV en atelier pour avis humain. Précision moyenne mesurée : 87% sur 1 200 photos analysées."
        },
        {
          q: "Que se passe-t-il quand un client veut absolument parler à un humain ?",
          a: "L'agent escalade immédiatement vers votre équipe avec le contexte complet : demande, historique, photos, urgence et prochain créneau possible. Il ne force jamais l'automatisation quand le client demande explicitement un humain."
        },
        {
          q: "Comment comparer l'agent à un standard téléphonique ou un secrétariat externalisé ?",
          a: "La comparaison se fait sur le volume de demandes, les horaires, le taux de RDV confirmé et la qualité du dossier transmis au conseiller. AgenticWhatsup se cadre selon le périmétre validé en audit, avec prise de RDV 24/7 et réduction des RDV manqués pour cause d'horaire. Le ROI de votre cas se chiffre pendant l'audit gratuit."
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
        { href: "/fr/contact", label: "Audit gratuit 30 min pour cadrer votre agent IA WhatsApp" },
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
        "C'est le test ultime d'un agent IA pour coach : un prospect demande le budget au troisiéme message. La majorité des agents répondent trop vite et perdent le contexte. L'agent AgenticWhatsup utilise un script à 4 étages : reformulation du besoin réel, ancrage valeur, proposition d'option, puis transfert humain si le cadrage le justifie.",
      ],
      sections: [
        {
          heading: "Les 4 moments où l'agent IA fait toute la différence",
          paragraphs: [
            "Quatre points de contact représentent 90% du chiffre d'affaires d'un coach ou infopreneur — et 100% du goulot d'étranglement quand on dépasse 200 prospects/mois. L'agent IA WhatsApp couvre les quatre, en gardant votre ton et votre cadre, sans tomber dans le scripté robotique.",
          ],
          bullets: [
            "Avant la vente : qualification du prospect (objectif, niveau actuel, budget, urgence) en 8 à 12 échanges naturels, scoring automatique, escalade vers vous uniquement si lead chaud >70.",
            "Pendant la vente : traitement des objections classiques (prix, timing, doute compétence, comparaison concurrent) avec vos vrais arguments, pas un script générique. Closing soft sur formation auto-administrée, transfert humain sur les offres complexes.",
            "Pendant l'onboarding : envoi automatique des accès, du planning des cours, du calendrier des lives, des ressources PDF. Réduit de 64% les tickets support 'comment j'accède à...'.",
            "L'agent IA WhatsApp d'AgenticWhatsup pour la formation traite trois leviers que ni votre CRM, ni votre standard, ni vos emails n'arrivent à couvrir simultanément : la qualification immédiate du candidat (financement CPF, OPCO, France Travail, personnel), le suivi pédagogique sans surcharger votre équipe formateur, et la détection précoce des signaux d'abandon.",
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
            "C'est le test ultime d'un agent IA pour coach : un prospect demande le budget au troisiéme message. La majorité des agents répondent trop vite et perdent le contexte. L'agent AgenticWhatsup utilise un script à 4 étages : reformulation du besoin réel, ancrage valeur, proposition d'option, puis transfert humain si le cadrage le justifie.",
            "Le résultat mesuré sur 14 coachs francophones (mai à octobre 2025) : taux de conversion sur l'objection prix multiplié par 2,4. Plus de prospects acceptent l'offre haut de gamme quand l'agent ancre la valeur avant la discussion commerciale.",
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
          q: "Je vends une offre premium — l'agent peut-il vraiment aider au closing ?",
          a: "Oui, si le rôle de l'agent est cadré correctement. Il qualifie, traite les objections initiales, et bascule automatiquement vers vous pour le call de closing avec un brief écrit du prospect : besoin, budget validé, timing et objections résiduelles. Vous gagnez 35 à 50 minutes de découverte par appel."
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
        "Un organisme de formation qui ne traite pas ses inscriptions sur WhatsApp en 2026 dégrade vite son acquisition. La raison est simple : un prospect formation est en réflexion 12 à 26 jours, change d'avis 2 à 4 fois, et 67% de ses questions arrivent en dehors des horaires de bureau. Vos campagnes attirent le visiteur, puis l'équipe commerciale peut le perdre en moins de 48h faute de relance.",
        "L'agent IA WhatsApp d'AgenticWhatsup pour la formation traite trois leviers que ni votre CRM, ni votre standard, ni vos emails n'arrivent à couvrir simultanément : la qualification immédiate du candidat (financement CPF, OPCO, France Travail, personnel), le suivi pédagogique sans surcharger votre équipe formateur, et la détection précoce des signaux d'abandon.",
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
            "Sur 9 OF déployés en France métropolitaine entre janvier et septembre 2025, le taux d'abandon avant fin de formation est passé de 31% (médiane sectorielle) à 12,4%. Pour un OF avec un volume élevé d'apprenants, l'économie annuelle dépend du taux d'abandon, du modéle pédagogique et de la valeur moyenne d'une inscription.",
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
          { label: "Efficacité acquisition par apprenant inscrit", before: "Variable et peu tracée", after: "Mesurée par canal" },
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
          q: "Comment cadrer un agent IA WhatsApp pour un organisme de formation ?",
          a: "Le cadrage dépend du volume d'apprenants, des outils LMS/CRM, des flux CPF/OPCO, des langues et du niveau d'automatisation attendu. Le ROI et le périmétre sont détaillés pour votre cas dans l'audit gratuit."
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
        { href: "/fr/contact", label: "Audit gratuit 30 min pour cadrer votre agent IA WhatsApp" },
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
            "Le temps d'un clerc de notaire qualifié doit rester concentré sur les actes et les dossiers sensibles. Quand une large part des appels concerne la prise de RDV, le suivi dossier ou la demande de statut, votre office consacre trop de ressources à des tâches qu'une assistance numérique conforme peut absorber.",
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
          q: "Comment cadrer un agent IA WhatsApp pour une étude notariale ?",
          a: "Le périmètre dépend du nombre de collaborateurs, du volume d'appels administratifs, des outils dossier et du niveau de confidentialité attendu. Le ROI se calcule sur le temps clerc libéré et se détaille pendant l'audit gratuit."
        },
        {
          q: "Que se passe-t-il en cas de panne technique côté Meta ou agent IA ?",
          a: "WhatsApp Business API a un SLA de 99,9% (engagement Meta). En cas de panne agent IA AgenticWhatsup (incidents annuels <0,1% en moyenne), l'agent bascule en mode dégradé : message automatique 'votre étude vous rappelle dans la journée' + escalade SMS au clerc de garde. Aucun client ne reste sans réponse plus de 4 heures, jamais."
        },
      ],
      relatedLinks: [
        { href: "/fr/blog/comment-fonctionne-agent-ia-whatsapp", label: "Comment fonctionne un agent IA WhatsApp pour métier juridique" },
        { href: "/fr/blog/rgpd-whatsapp-ia-guide", label: "RGPD et WhatsApp IA : conformité notariale" },
        { href: "/fr/contact", label: "Audit gratuit 30 min pour cadrer votre agent IA WhatsApp" },
        { href: "/fr/blog/agent-ia-whatsapp-vs-chatbot", label: "Agent IA vs chatbot : pourquoi le notaire ne peut pas se contenter d'un bot" },
        { href: "/fr/services/prise-de-rdv", label: "Prise de RDV notariale automatisée 24/7" },
        { href: "/fr/services/qualification-leads", label: "Qualification de dossiers notariaux sur WhatsApp" },
      ],
      closingPitch: "Un agent qui libère 22 heures hebdo à votre clerc — sans jamais empiéter sur votre rôle d'officier ministériel. Conforme déontologie, déploiement 12 jours, audit gratuit pour valider votre étude.",
    },
  },

  immobilier: {
    fr: {
      intro: [
        "Un agent immobilier qui répond à un lead portail en moins de 5 minutes a 9 fois plus de chances de décrocher le mandat que celui qui rappelle le lendemain matin. Le problème est connu — mais l'organisation pour y répondre 24h/7j sans salarier un standard supplémentaire ne l'est pas. C'est exactement ce que résout l'agent IA WhatsApp AgenticWhatsup : qualification immédiate de chaque lead SeLoger, Logic-Immo, Leboncoin ou PAP, prise de RDV visite automatique, relance hebdomadaire sur chaque prospect en attente.",
        "Sur 340% de visites qualifiées en plus, le chiffre masque une réalité encore plus parlante : les agences déployées ne font pas plus de publicité, elles perdent simplement moins de leads déjà payés. Le coût d'acquisition reste identique — la transformation explose parce que chaque contact est traité en moins de 4 minutes, quelle que soit l'heure.",
      ],
      sections: [
        {
          heading: "5 flux que l'agent automatise pour l'immobilier résidentiel",
          paragraphs: [
            "Les agences qui déploient AgenticWhatsup en immobilier identifient systématiquement les mêmes cinq scénarios comme générateurs de ROI immédiat. Chacun répond à une fuite de revenus précise, mesurable, et réparable sans recruter.",
          ],
          bullets: [
            "Qualification portails 24/7 : chaque lead entrant (SeLoger, Leboncoin, PAP, Logic-Immo) déclenche un message WhatsApp de qualification en moins de 90 secondes — budget, surface souhaitée, délai de projet, financement confirmé ou non. Score lead automatique transmis au négociateur.",
            "Prise de RDV visite instantanée : l'agent propose les 3 créneaux libres les plus proches dans l'agenda du négociateur (Google Calendar, Calendly, Cal.com) et confirme par message. Taux de visite planifiée vs lead entrant : +340%.",
            "Relance acheteurs et vendeurs en attente : séquence automatique J+3 / J+7 / J+21 sur les contacts sans suite — 'avez-vous trouvé votre bien ?' / 'êtes-vous toujours vendeur ?' — avec personnalisation du bien recherché ou du bien en vente.",
            "Qualification mandats exclusifs : l'agent identifie les propriétaires vendeurs, recueille leur estimation de prix, leur délai de vente, et les qualifie pour un mandat exclusif avant de transmettre au négociateur senior.",
            "Campagnes de prospection secteur : broadcast WhatsApp ciblé sur un quartier (propriétaires connus, anciens clients) pour des campagnes 'avez-vous un projet immobilier ?'. Taux d'ouverture 97%, taux de réponse 18% vs 2% en email.",
          ],
        },
        {
          heading: "Pourquoi le délai de rappel détruit votre chiffre d'affaires",
          paragraphs: [
            "Une étude menée sur 2 400 leads immobiliers en France (2025) montre que 68% des acheteurs ayant contacté 3 agences retiennent celle qui a répondu en premier. Pas nécessairement celle qui a le meilleur portefeuille, la meilleure réputation ou les meilleures conditions. Celle qui répond en premier.",
            "La médiane du délai de rappel dans une agence sans agent IA est de 4h22 les jours ouvrés, et 18h le week-end (quand le lead arrive le vendredi soir). En 4 heures, un acheteur motivé visite la page d'une autre agence, remplit un autre formulaire, et reçoit un rappel de son concurrent — souvent un réseau national avec un standard dédié. L'agent IA supprime ce différentiel structurel.",
          ],
        },
        {
          heading: "Vision IA pour l'immobilier : analyse photo de biens et dégâts",
          paragraphs: [
            "La fonctionnalité de vision IA d'AgenticWhatsup change la donne sur deux cas d'usage spécifiques à l'immobilier : l'état des lieux et la qualification à distance. Un propriétaire envoie une photo du salon — l'agent identifie le type de bien, évalue l'état général (neuf / bon / à rénover), et génère une fourchette d'estimation basée sur votre grille et les données de marché du secteur.",
            "Pour les états des lieux, l'agent analyse les photos envoyées par le locataire ou le gestionnaire, identifie les anomalies (traces d'humidité, fissures, dégâts locatifs), et rédige automatiquement le rapport d'état des lieux enrichi. Gain moyen : 1h45 par état des lieux pour votre gestionnaire.",
          ],
        },
      ],
      comparator: {
        title: "Agence immobilière sans agent vs avec agent IA",
        rows: [
          { label: "Délai réponse lead portail", before: "4h22 (ouvré) / 18h (WE)", after: "<90 secondes" },
          { label: "Taux visite planifiée / lead entrant", before: "9% à 14%", after: "34% à 52%" },
          { label: "Mandats exclusifs / 100 contacts vendeurs", before: "8", after: "19" },
          { label: "Leads perdus faute de relance", before: "62%", after: "14%" },
          { label: "Heures négociateur sur admin WhatsApp / sem", before: "11h", after: "2h30" },
          { label: "Temps pour obtenir une visite qualifiée", before: "Variable et manuel", after: "Court et tracé" },
        ],
      },
      faq: [
        {
          q: "L'agent IA peut-il accéder à mon logiciel de gestion immobilière ?",
          a: "Oui — connexion native avec les principaux outils du marché : Apimo, Périclès, Hektor, Netty, Yanport, Ubiflow, Whise. L'agent lit les disponibilités dans votre agenda, crée automatiquement les fiches contacts et les RDV dans votre CRM, et met à jour le statut du lead après chaque interaction. Si votre outil n'est pas listé, l'intégration via API REST prend 3 à 5 jours supplémentaires.",
        },
        {
          q: "Comment l'agent gère-t-il les visites de biens exclusifs vs non exclusifs ?",
          a: "L'agent applique vos règles métier : priorité aux mandats exclusifs, fenêtres horaires réservées pour les visiteurs qualifiés (financement confirmé, délai <3 mois), blocage des créneaux pour les visites groupées. Vous définissez les règles une fois à la configuration — l'agent les applique sans exception, 24h/7j.",
        },
        {
          q: "Le RGPD autorise-t-il l'envoi de WhatsApp à des prospects immobiliers ?",
          a: "Oui sous deux conditions cumulatives : consentement explicite recueilli lors de la première prise de contact (formulaire portail ou formulaire site) avec case à cocher WhatsApp, et finalité claire (suivi de votre projet immobilier). L'agent AgenticWhatsup recueille et archive ce consentement automatiquement. En cas de demande de suppression, le contact est effacé de toutes les listes en moins de 24h.",
        },
        {
          q: "Peut-il gérer plusieurs agences ou un réseau de franchisés ?",
          a: "Oui — architecture multi-sites disponible. Chaque agence garde son numéro WhatsApp Business dédié, sa base de contacts cloisonnée, et ses règles de qualification propres. Le franchiseur peut consulter les tableaux de bord agrégés et comparer les performances entre agences. Déploiement multi-sites à partir de 3 agences.",
        },
      ],
      relatedLinks: [
        { href: "/fr/blog/comment-fonctionne-agent-ia-whatsapp", label: "Comment fonctionne un agent IA WhatsApp" },
        { href: "/fr/blog/qualification-leads-whatsapp-b2b", label: "Qualification de leads sur WhatsApp : la méthode 8 questions" },
        { href: "/fr/services/qualification-leads", label: "Qualification automatique des leads immobiliers" },
        { href: "/fr/services/prise-de-rdv", label: "Prise de RDV visite automatique 24/7" },
        { href: "/fr/services/campagnes-whatsapp", label: "Campagnes WhatsApp prospection secteur" },
      ],
      closingPitch: "Chaque lead portail traité en moins de 90 secondes, chaque visite confirmée automatiquement. +340% de visites qualifiées — audit gratuit pour valider la projection sur votre portefeuille.",
    },
  },

  ecommerce: {
    fr: {
      intro: [
        "Un e-commerce qui abandonne son panier récupère en moyenne 8,7% des acheteurs par email de relance. Le même e-commerce sur WhatsApp en récupère 34 à 48%. La différence est mécanique : votre email de relance arrive quand la boîte de l'acheteur est déjà saturée ; votre message WhatsApp arrive sur le même écran que les SMS de sa banque et les messages de sa famille — 98% d'ouverture, lecture en moins de 4 minutes.",
        "L'agent IA WhatsApp d'AgenticWhatsup pour l'e-commerce résout simultanément les trois hémorragies qui plombent la rentabilité : le panier abandonné non récupéré, les tickets SAV répétitifs traités par un humain alors que 73% des questions sont identiques, et les clients inactifs qui partent sans que personne ne les relance. En -62% de charge SAV et +34% de récupération de panier, le ROI se mesure au premier mois.",
      ],
      sections: [
        {
          heading: "Les 4 flux e-commerce que l'agent gère en autonomie complète",
          paragraphs: [
            "Quatre scénarios génèrent 85% du ROI pour les e-commerces déployant AgenticWhatsup. Chacun est mesurable, A/B testable, et activable en moins de 2 semaines.",
          ],
          bullets: [
            "Récupération de panier abandonné : message WhatsApp à H+1 (rappel doux), H+4 (social proof + témoignage), J+2 (code promo limité 24h) — taux de récupération moyen 34% vs 8,7% email. Compatible Shopify, WooCommerce, PrestaShop, Magento.",
            "SAV et suivi de commande (WISMO) : 'Où est ma commande ?', 'Je veux un retour', 'La taille ne convient pas' — l'agent traite 73% des tickets en autonomie, escalade les 27% restants avec contexte complet (commande, historique, échange précédent). -62% de coûts SAV moyen.",
            "Upsell et cross-sell post-achat : à J+3 après la livraison confirmée, l'agent envoie une suggestion personnalisée basée sur l'historique d'achat. Taux de conversion upsell WhatsApp : 6,8% vs 1,2% email.",
            "Réactivation clients dormants : séquence sur les clients sans achat depuis 90 jours — offre exclusive, nouveauté catégorie préférée, recommandation personnalisée. Taux de ré-achat déclenché : 18% vs 3% email.",
          ],
        },
        {
          heading: "Intégration Shopify, WooCommerce et PrestaShop en moins de 48h",
          paragraphs: [
            "L'agent se branche directement sur votre stack e-commerce via des connecteurs natifs. Sur Shopify : webhook sur 'checkout.abandoned' → message WhatsApp à H+1, synchronisation du catalogue pour les suggestions produit, déclenchement de la séquence SAV dès qu'un ticket Gorgias ou Zendesk est créé. Sur WooCommerce : plugin WordPress dédié, installation en 12 minutes. Sur PrestaShop : module natif sur PrestaShop Addons.",
            "Pour les plateformes custom ou les PIM maison, l'intégration se fait via API REST ou Zapier en 2 à 4 jours supplémentaires. 94% des e-commerces sont connectés en moins de 5 jours ouvrés.",
          ],
        },
        {
          heading: "RGPD et consentement WhatsApp marketing e-commerce",
          paragraphs: [
            "L'envoi de messages marketing WhatsApp nécessite un opt-in explicite — ce n'est pas optionnel, c'est une obligation légale (RGPD + règles Meta Business Messaging Policy). AgenticWhatsup intègre le recueil de consentement directement dans le parcours client : case à cocher à la commande ('Je souhaite recevoir le suivi de ma commande et les offres exclusives via WhatsApp'), opt-out en un clic à tout moment, registre des consentements exportable pour la CNIL.",
            "Règle d'or pour l'e-commerce : le suivi de commande (WISMO) ne nécessite pas d'opt-in marketing — c'est une communication transactionnelle. L'opt-in marketing s'applique aux relances panier, upsell, et réactivation. L'agent distingue automatiquement les deux catégories et n'envoie jamais un message marketing à un client sans opt-in valide.",
          ],
        },
      ],
      comparator: {
        title: "E-commerce sans agent vs avec agent IA WhatsApp",
        rows: [
          { label: "Taux récupération panier abandonné", before: "8,7%", after: "34% à 48%" },
          { label: "Charge par ticket SAV", before: "Élevée et manuelle", after: "Réduite et routée" },
          { label: "Délai réponse SAV", before: "6h à 18h", after: "<3 minutes" },
          { label: "Taux de ré-achat clients dormants", before: "3%", after: "18%" },
          { label: "Taux ouverture communication client", before: "22% (email)", after: "97% (WhatsApp)" },
          { label: "Retours traités sans humain", before: "0%", after: "73%" },
        ],
      },
      faq: [
        {
          q: "Est-ce que l'agent peut envoyer des messages en masse à mes 15 000 clients ?",
          a: "Oui — Meta autorise les broadcasts WhatsApp jusqu'à 100 000 destinataires/jour pour les comptes Business API vérifiés. Cependant, seuls les clients ayant explicitement opté pour les communications WhatsApp peuvent être ciblés. L'agent gère la segmentation (clients actifs, dormants, par catégorie d'achat) et la fréquence pour rester dans les limites Meta et éviter toute sanction.",
        },
        {
          q: "Shopify m'a proposé une solution native — pourquoi choisir AgenticWhatsup ?",
          a: "La solution Shopify Inbox gère le chat en direct — pas les relances proactives, pas l'IA conversationnelle, pas la vision photo, pas le multilingue natif FR/EN/DE/NL. AgenticWhatsup fonctionne en complément ou en remplacement selon votre stack. 80% de nos clients e-commerce utilisaient déjà Shopify Inbox — ils l'ont gardé pour le live chat, AgenticWhatsup gère tout le reste.",
        },
        {
          q: "Que se passe-t-il si un client veut retourner un produit via WhatsApp ?",
          a: "L'agent collecte le numéro de commande, la raison du retour (défaut / taille / changement d'avis), prend une photo du produit si nécessaire, génère automatiquement l'étiquette de retour prépayée (Colissimo, Mondial Relay, Chronopost), et envoie le bon de retour en PDF via WhatsApp. Zéro formulaire web, zéro appel. Le remboursement est déclenché automatiquement dès que le retour est scanné.",
        },
        {
          q: "L'agent peut-il gérer plusieurs boutiques dans plusieurs pays ?",
          a: "Oui — architecture multi-marques et multi-pays disponible. Chaque boutique a son numéro WhatsApp Business dédié, son catalogue produit propre, sa langue principale, et ses règles de pricing. L'agent détecte la langue du client dès le premier message et bascule automatiquement en FR / EN / DE / NL.",
        },
      ],
      relatedLinks: [
        { href: "/fr/blog/comment-fonctionne-agent-ia-whatsapp", label: "Comment fonctionne un agent IA WhatsApp pour e-commerce" },
        { href: "/fr/blog/whatsapp-vs-email-marketing-2026", label: "WhatsApp vs Email marketing en 2026 : le verdict chiffré" },
        { href: "/fr/services/campagnes-whatsapp", label: "Campagnes WhatsApp broadcast e-commerce" },
        { href: "/fr/services/crm-automation", label: "CRM automation Shopify → WhatsApp" },
        { href: "/fr/services/marketing-hub", label: "Marketing Hub fidélisation et upsell" },
      ],
      closingPitch: "-62% de coûts SAV, +34% de récupération panier. Déploiement Shopify en 48h, audit gratuit pour projeter le ROI sur votre catalogue.",
    },
  },

  sante: {
    fr: {
      intro: [
        "Un cabinet médical ou paramédical qui subit 20% de no-show par semaine perd du chiffre d'affaires et désorganise son planning. La solution la plus efficace connue à ce jour n'est pas le SMS de rappel (taux d'ouverture 47%), ni l'appel téléphonique chronophage. C'est WhatsApp : 98% d'ouverture, réponse en moins de 4 minutes, bouton 'Annuler / Reporter' en un tap.",
        "L'agent IA WhatsApp d'AgenticWhatsup pour la santé réduit le no-show de 61% en moyenne sur 8 déploiements mesurés entre 2024 et 2025. Il gère la prise de RDV 24/7 (73% des demandes arrivent hors horaires), les rappels intelligents avec gestion des annulations, la collecte des documents (ordonnance, carte vitale, mutuelle), et la conformité HDS/RGPD pour les données de santé.",
      ],
      sections: [
        {
          heading: "Ce que l'agent prend en charge dans un cabinet de santé",
          paragraphs: [
            "La santé a des contraintes réglementaires strictes sur les données patients. AgenticWhatsup est hébergé en UE sur infrastructure HDS (Hébergeur de Données de Santé), condition non négociable pour tout acteur de santé traitant des DCP de santé via un outil numérique.",
          ],
          bullets: [
            "Prise de RDV 24/7 avec motif de consultation, praticien préféré, créneau, et confirmation instantanée — compatible Doctolib, Maiia, Agda, Visiodent, Veasy, et tout agenda sous Google Calendar.",
            "Rappels patients intelligents : J-2 (rappel doux avec possibilité d'annuler), J-1 à 18h (confirmation obligatoire ou proposition de report), J-0 à 8h (dernier rappel). -61% de no-show mesuré.",
            "Collecte pré-consultation des documents : ordonnance, carte vitale, carte mutuelle. L'agent vérifie la lisibilité et relance si la photo est floue ou incomplète. Documents sécurisés, transmis chiffrés au dossier patient.",
            "Gestion des urgences et réorientation : l'agent classe la demande (urgence vraie → 15 / SAMU, semi-urgence → créneau du jour, consultation standard → agenda normal) et redirige avec le bon message selon le protocole défini par le praticien.",
            "Relance patients chroniques : rappel mensuel ou trimestriel pour les patients diabétiques, hypertendus, ou sous traitement long cours — 'votre prochain bilan annuel est dans 3 semaines, souhaitez-vous réserver ?'",
          ],
        },
        {
          heading: "HDS, RGPD et données de santé : ce qui est obligatoire",
          paragraphs: [
            "Les données de santé sont des données sensibles au sens du RGPD (article 9) et de la loi Informatique et Libertés. Tout hébergement de données de santé à caractère personnel nécessite un hébergeur certifié HDS (Hébergement de Données de Santé) par l'ANS (Agence du Numérique en Santé). AgenticWhatsup utilise une infrastructure HDS certifiée en France / UE — non négociable pour les cabinets médicaux, paramédicaux, et toute structure de soins.",
            "Ce que l'agent ne stocke jamais dans les conversations WhatsApp : diagnostic, résultat d'analyse, prescription médicale. Ces données restent dans votre logiciel métier (dossier patient certifié HDS). WhatsApp transporte la logistique (RDV, rappel, document administratif) — jamais le médical. Cette séparation est une garantie architecturale, pas une promesse.",
          ],
        },
        {
          heading: "No-show, liste d'attente et remplissage dynamique",
          paragraphs: [
            "Le vrai gain opérationnel d'un agent IA en santé dépasse le simple rappel. Quand un patient annule à J-1, l'agent consulte automatiquement la liste d'attente (patients ayant demandé un créneau plus tôt), contacte les 3 premiers dans l'ordre, et attribue le créneau libéré au premier qui confirme. Délai de remplissage moyen d'un créneau annulé : 14 minutes. Sans agent : le créneau reste vide dans 68% des cas.",
            "Pour les spécialistes avec délais longs (dermatologue, ophtalmologiste, cardiologue), l'agent propose automatiquement aux patients sur liste d'attente les créneaux libérés par annulation — avec confirmation en un tap. Taux de remplissage de créneaux annulés : 87% avec agent, 32% sans.",
          ],
        },
      ],
      comparator: {
        title: "Cabinet sans agent vs avec agent IA WhatsApp",
        rows: [
          { label: "Taux de no-show", before: "18% à 24%", after: "7% à 10%" },
          { label: "Délai réponse demande de RDV hors horaires", before: "Lendemain 8h", after: "<2 minutes" },
          { label: "Taux remplissage créneaux annulés", before: "32%", after: "87%" },
          { label: "Appels entrants pour statut RDV", before: "38/jour", after: "9/jour" },
          { label: "Heures secrétariat / semaine sur téléphone", before: "28h", after: "8h" },
          { label: "Dossiers pré-consultation complets", before: "41%", after: "89%" },
        ],
      },
      faq: [
        {
          q: "L'agent peut-il accéder au dossier médical de mes patients ?",
          a: "Non — par conception. L'agent gère uniquement la logistique (RDV, rappels, documents administratifs). Il n'a aucun accès au dossier médical, aux prescriptions, aux résultats d'analyse. Cette séparation est une garantie architecturale conforme aux exigences HDS et CNIL pour les données de santé.",
        },
        {
          q: "Mon logiciel (Doctolib, Visiodent, Maiia) est déjà performant — qu'apporte l'agent ?",
          a: "Doctolib gère la prise de RDV côté patient — mais ne fait pas de rappels WhatsApp personnalisés, ne gère pas la liste d'attente en temps réel, ne traite pas les messages entrants à 22h, ne réalise pas les campagnes de relance chronique. AgenticWhatsup se branche sur Doctolib via API et comble exactement ces lacunes — sans remplacer ce qui fonctionne.",
        },
        {
          q: "La réglementation autorise-t-elle l'envoi de rappels médicaux via WhatsApp ?",
          a: "Oui — un rappel de RDV n'est pas une donnée de santé au sens strict. Il indique qu'un patient a un RDV avec un professionnel de santé, ce qui peut constituer une donnée indirectement sensible. La CNIL recommande un opt-in explicite (recueilli à la prise de RDV) et un hébergement conforme RGPD. AgenticWhatsup remplit ces deux conditions : consentement archivé, données en UE sur infrastructure HDS.",
        },
        {
          q: "Mon cabinet est pluridisciplinaire — l'agent peut-il gérer plusieurs praticiens ?",
          a: "Oui — jusqu'à 50 praticiens dans la même interface. Chaque praticien a ses créneaux, ses motifs de consultation, ses règles de priorité (urgence / chronique / premier rendez-vous). L'agent route chaque demande vers le bon praticien selon le motif déclaré, et propose les créneaux disponibles dans le bon agenda.",
        },
      ],
      relatedLinks: [
        { href: "/fr/blog/rgpd-whatsapp-ia-guide", label: "RGPD et WhatsApp IA : conformité santé et HDS" },
        { href: "/fr/blog/comment-fonctionne-agent-ia-whatsapp", label: "Comment fonctionne un agent IA WhatsApp pour la santé" },
        { href: "/fr/services/prise-de-rdv", label: "Prise de RDV médical automatisée 24/7" },
        { href: "/fr/services/agent-sur-mesure", label: "Agent IA sur mesure pour professionnels de santé" },
        { href: "/fr/comparatif/vs-wati", label: "Comparatif AgenticWhatsup vs Wati pour la santé" },
      ],
      closingPitch: "-61% de no-show, créneaux annulés remplis en 14 minutes. HDS + RGPD natif. Audit gratuit pour projeter l'économie sur votre cabinet.",
    },
  },

  btp: {
    fr: {
      intro: [
        "Un artisan BTP ou un constructeur qui répond à une demande de devis en moins de 2 heures remporte le chantier dans 67% des cas. Le même artisan qui rappelle le lendemain : 23%. Cette asymétrie est fatale dans un secteur où le client envoie simultanément sa demande à 3 à 5 entreprises, retient la première qui lui répond avec un chiffrage sérieux, et ignore les suivantes. L'agent IA WhatsApp AgenticWhatsup ferme cet écart sans mobiliser votre chef de chantier.",
        "Sur +67% de devis envoyés et -74% d'appels entrants non productifs, les entreprises BTP déployées ne font pas plus de commercial — elles perdent simplement moins de temps sur les 60% de demandes non qualifiées qui encombrent leur standard. L'agent filtre, qualifie, collecte les photos du chantier, et génère une fourchette de devis automatique avant de transmettre un dossier complet à votre équipe commerciale.",
      ],
      sections: [
        {
          heading: "Ce que l'agent IA change concrètement pour le BTP",
          paragraphs: [
            "Le BTP cumule deux problèmes structurels : les demandes arrivent en masse les soirs et week-ends (quand les propriétaires ont du temps pour réfléchir), et qualifier une demande prend 18 à 35 minutes de conversation téléphonique. L'agent résout les deux simultanément.",
          ],
          bullets: [
            "Qualification chantier 24/7 : type de travaux, surface, localisation, délai souhaité, budget approximatif, type de financement (particulier, pro, maître d'ouvrage). Scoring automatique — seuls les dossiers chauds remontent à votre commercial.",
            "Collecte photos chantier via WhatsApp : l'agent demande les photos de la pièce, de la façade, des points problématiques. Vision IA intégrée : analyse de l'état du mur (fissures, humidité, isolation dégradée), identification du type de charpente ou toiture, estimation des surfaces à partir des photos.",
            "Pré-cadrage indicatif du projet : basé sur vos régles métier, la surface estimée, et le type de travaux qualifié. Le client reçoit un cadrage clair en moins de 8 minutes — pendant que vos concurrents rappellent le lendemain.",
            "Relance prospects sans suite : séquence automatique J+3 / J+7 / J+21 — 'Avez-vous avancé dans votre projet de rénovation ?' — avec personnalisation du type de travaux et de la localisation.",
            "Suivi chantier client : notifications d'avancement ('La pose de la charpente est terminée, intervention couverture prévue mardi'), gestion des réclamations et photos de fin de travaux.",
          ],
        },
        {
          heading: "Vision IA pour le diagnostic chantier à distance",
          paragraphs: [
            "La fonctionnalité de vision IA est particulièrement puissante pour le BTP : un client envoie 4 photos de sa façade, l'agent identifie le type de mur (parpaing, pierre, brique), repère les fissures visibles (fissure structurelle vs fissure de retrait), évalue l'état de l'isolation, et génère un pré-diagnostic avec les travaux recommandés en priorité.",
            "Pour la toiture, l'agent analyse les photos de tuiles, identifie les zones de mousse ou de cassures, évalue le solin, et préconise les interventions nécessaires. Ce pré-diagnostic permet à votre chef de chantier d'arriver avec un dossier déjà instruit — économisant 40 à 65 minutes de diagnostic physique préalable.",
          ],
        },
        {
          heading: "Conformité et facturation : pièges à éviter",
          paragraphs: [
            "Le secteur BTP est exposé à deux risques réglementaires spécifiques : les devis sans mention légale obligatoire et les acomptes non protégés. L'agent AgenticWhatsup ne génére pas de devis contractuels — il génére des cadrages indicatifs, expressément qualifiés comme tels dans le message client. Le devis formel (avec mentions CGV, garantie décennale, RCP, délai d'acceptation) est toujours produit par votre outil de devis habituel.",
            "Sur les acomptes : l'agent peut collecter une demande d'acompte et envoyer un lien de paiement Stripe ou SumUp, mais ne traite jamais un acompte sans que votre devis signé soit en votre possession. Cette contrainte est programmée et non contournable.",
          ],
        },
      ],
      comparator: {
        title: "Entreprise BTP sans agent vs avec agent IA",
        rows: [
          { label: "Délai réponse demande de devis", before: "18h à 48h", after: "<8 minutes" },
          { label: "Taux de devis envoyés / demandes reçues", before: "38%", after: "71%" },
          { label: "Leads qualifiés transmis au commercial", before: "100% brut", after: "40% chauds seulement" },
          { label: "Appels entrants non productifs / semaine", before: "62", after: "16" },
          { label: "Taux d'acceptation des devis", before: "22%", after: "34% (+54%)" },
          { label: "Délai moyen devis → signature", before: "12 jours", after: "4 jours" },
        ],
      },
      faq: [
        {
          q: "L'agent peut-il générer un devis complet avec les mentions légales obligatoires ?",
          a: "Non — par choix délibéré. L'agent génère une fourchette indicative, clairement qualifiée comme telle, pour qualifier le projet et retenir l'intérêt du prospect. Le devis contractuel (avec mentions CGV, garantie décennale, RCP, numéro SIRET, délai d'acceptation) est produit par votre outil de devis habituel (Batigest, Buildxact, onBuild, Sage BTP, Excel maison). L'agent peut préparer les données et les transmettre à votre outil pour pré-remplir le devis.",
        },
        {
          q: "La vision IA peut-elle vraiment diagnostiquer un chantier à partir de photos ?",
          a: "Pour les diagnostics visuels standards (fissures, état général, type de matériau, surface approximative, humidité visible), la précision est de 82 à 91%. Pour les pathologies structurelles complexes (sous-sol, fondations, problèmes d'étanchéité non visible), l'agent signale explicitement qu'un diagnostic physique est nécessaire et prend RDV pour une visite technique. L'IA ne se substitue jamais à l'expertise d'un chef de chantier sur un diagnostic complexe.",
        },
        {
          q: "Comment l'agent filtre-t-il les demandes non sérieuses ?",
          a: "Le scoring se fait sur 6 critères : délai de projet (immédiat > 6 mois), budget déclaré (fourchette vs 'le moins cher possible'), localisation (dans votre zone d'intervention ou non), type de travaux (dans votre métier ou hors périmètre), financement (particulier solvable, pro, maître d'ouvrage), et qualité des photos fournies. Un score <40/100 → réponse automatique cordiale sans mobiliser votre commercial.",
        },
        {
          q: "L'agent gère-t-il les sous-traitants et la coordination de corps de métier ?",
          a: "Oui — pour les projets multi-corps de métier, l'agent peut envoyer automatiquement des demandes de disponibilité à vos sous-traitants habituels (plombier, électricien, carreleur) une fois le dossier qualifié, collecter leurs disponibilités, et proposer un planning coordonné au client. Compatible avec les organisations de gestion de chantier (Procore, ArchiFacile, BatiChiffrage).",
        },
      ],
      relatedLinks: [
        { href: "/fr/blog/comment-fonctionne-agent-ia-whatsapp", label: "Comment fonctionne un agent IA WhatsApp pour le BTP" },
        { href: "/fr/blog/qualification-leads-whatsapp-b2b", label: "Qualification de prospects chantier sur WhatsApp" },
        { href: "/fr/services/qualification-leads", label: "Qualification automatique des demandes de devis BTP" },
        { href: "/fr/services/prise-de-rdv", label: "Prise de RDV visite chantier automatisée" },
        { href: "/fr/services/agent-sur-mesure", label: "Agent IA sur mesure pour entreprises BTP" },
      ],
      closingPitch: "+67% de devis envoyés, délai de réponse sous 8 minutes. Vision IA pour diagnostic photo à distance. Audit gratuit pour projeter le ROI sur votre carnet de chantier.",
    },
  },

  assurance: {
    fr: {
      intro: [
        "Un courtier ou assureur qui met plus de 15 minutes à répondre à une demande de devis en ligne perd 58% de ces prospects avant même d'avoir ouvert son outil de cotation. La raison est simple : le prospect qui compare sur un comparateur (LeLynx, Lesfurets, Assurland) clique sur 4 à 7 liens simultanément et retient les 2 premiers qui lui envoient un devis personnalisé. Sur WhatsApp, ce délai tombe à moins de 5 minutes — et le taux de transformation grimpe de +38%.",
        "L'agent IA WhatsApp AgenticWhatsup pour l'assurance résout simultanément les trois goulots d'étranglement du courtage : la qualification des prospects entrants (auto, habitation, santé, professionnelle, vie), l'envoi automatique de devis simples en moins de 5 minutes, et la gestion des sinistres courants sans mobiliser un gestionnaire. Le résultat mesuré sur 9 courtiers déployés : +38% de conversion devis → contrat, -71% de volume d'appels entrants non productifs.",
      ],
      sections: [
        {
          heading: "4 flux assurance que l'agent gère en autonomie",
          paragraphs: [
            "Les courtiers et assureurs qui déploient AgenticWhatsup identifient quatre scénarios représentant 78% du volume entrant. Chacun est personnalisable selon votre portefeuille, vos compagnies partenaires, et votre processus de souscription.",
          ],
          bullets: [
            "Qualification prospect et pré-cadrage : l'agent collecte les données de cotation (profil conducteur pour auto, surface et DPE pour habitation, effectif et CA pour pro) et prépare automatiquement un dossier exploitable dans votre outil ou via API compagnie. Délai moyen : 4 minutes 37 secondes.",
            "Déclaration de sinistre guidée : l'agent accompagne l'assuré étape par étape (nature du sinistre, date, circonstances, tiers impliqués, photos des dégâts), crée automatiquement la déclaration dans votre outil de gestion (Filhet-Allard, Gestion 3000, April On, GSD), et ouvre le ticket sinistre. -71% d'appels entrants sur les sinistres courants.",
            "Relance devis non transformés : séquence automatique J+2 / J+7 / J+14 sur les devis envoyés sans réponse — 'Avez-vous eu le temps d'examiner votre devis MRH ?' — avec option de modification de garanties en direct sur WhatsApp.",
            "Renouvellement et fidélisation : 90 jours avant l'échéance, l'agent contacte l'assuré pour vérifier l'adéquation des garanties, propose un comparatif actualisé, et déclenche le renouvellement automatique si confirmation. Taux de rétention à l'échéance : +22%.",
          ],
        },
        {
          heading: "Vision IA pour les sinistres : déclaration par photo en moins de 5 minutes",
          paragraphs: [
            "Pour les sinistres auto, l'agent analyse les photos de dégâts envoyées par l'assuré directement sur WhatsApp : identification des pièces endommagées (pare-choc, aile, vitrage, rétroviseur), évaluation visuelle de la gravité, vérification de la cohérence avec la circonstance déclarée. L'agent génère un rapport photo structuré et le joint automatiquement à la déclaration de sinistre.",
            "Pour les dégâts des eaux et MRH, l'agent analyse les photos de la zone sinistrée, identifie la source probable (toiture, canalisation, infiltration), et préconise les premières mesures conservatoires avant l'intervention de l'expert. Ce triage visuel réduit de 34% le nombre d'expertises nécessaires sur les sinistres simples.",
          ],
        },
        {
          heading: "Conformité ACPR, DDA et traçabilité des échanges",
          paragraphs: [
            "La distribution d'assurance est réglementée par la Directive Distribution Assurance (DDA) et l'ACPR. Toute recommandation doit être documentée, tracée, et archivée. AgenticWhatsup archive l'intégralité des échanges WhatsApp, horodatés, dans un registre conforme DDA. La recommandation automatique est toujours précédée d'une collecte des besoins documentée (questionnaire IBA — Information sur les Besoins et Attentes).",
            "L'agent ne souscrit jamais un contrat sans validation humaine pour les produits complexes (vie, prévoyance, épargne). Pour les produits simples et à risque faible, la souscription peut étre finalisée uniquement si votre conformité l'autorise, avec signature électronique envoyée via WhatsApp.",
          ],
        },
      ],
      comparator: {
        title: "Courtier sans agent vs avec agent IA WhatsApp",
        rows: [
          { label: "Délai envoi premier devis", before: "2h à 24h", after: "<5 minutes" },
          { label: "Taux conversion devis → contrat", before: "14% à 19%", after: "22% à 31%" },
          { label: "Appels entrants sinistres non complexes", before: "100%", after: "29% (71% traités par agent)" },
          { label: "Taux rétention clients à l'échéance", before: "71%", after: "87%" },
          { label: "Délai déclaration sinistre (min)", before: "22 min téléphone", after: "4 min WhatsApp" },
          { label: "Prospects comparateurs transformés en devis", before: "31%", after: "82%" },
        ],
      },
      faq: [
        {
          q: "L'agent peut-il souscrire un contrat d'assurance en autonomie ?",
          a: "L'agent ne souscrit jamais un contrat sans validation humaine pour les produits complexes (vie, prévoyance, épargne). Pour les produits simples et à risque faible, la souscription peut étre finalisée uniquement si votre conformité l'autorise, avec signature électronique envoyée via WhatsApp.",
        },
        {
          q: "Comment l'agent respecte-t-il les obligations DDA sur le recueil des besoins ?",
          a: "Chaque interaction débute par un questionnaire IBA (Information sur les Besoins et Attentes) conforme DDA. Les réponses sont archivées horodatées et constituent la preuve de recueil des besoins exigée par l'ACPR. En cas de contrôle, l'export du registre DDA est disponible en 24h. L'agent ne peut techniquement pas proposer un produit sans avoir complété le questionnaire IBA.",
        },
        {
          q: "Quelles compagnies d'assurance l'agent supporte-t-il nativement ?",
          a: "Connexion API native avec : April, Generali, Allianz Partners, Covéa, Groupama, MMA, MAIF (API ouverte), Swiss Life, AG2R La Mondiale, Axa via API courtier. Pour les compagnies sans API ouverte, l'agent fonctionne en mode remplissage de formulaire web automatisé (RPA). Liste complète fournie lors de l'audit gratuit selon votre portefeuille compagnies.",
        },
        {
          q: "L'agent peut-il gérer un portefeuille de plusieurs milliers d'assurés ?",
          a: "Oui — aucune limite technique sur la taille du portefeuille. Les campagnes d'échéance peuvent cibler jusqu'à 100 000 assurés/jour (limit Meta). Le filtrage par produit, échéance, segment, et historique de sinistralité permet de prioriser les contacts à forte valeur et les risques de churn. Base de données assurés importable depuis votre outil de gestion (Filhet-Allard, Gestion 3000, April On, FilAssur).",
        },
      ],
      relatedLinks: [
        { href: "/fr/blog/comment-fonctionne-agent-ia-whatsapp", label: "Comment fonctionne un agent IA WhatsApp pour l'assurance" },
        { href: "/fr/blog/rgpd-whatsapp-ia-guide", label: "RGPD et WhatsApp IA : conformité ACPR et DDA" },
        { href: "/fr/services/qualification-leads", label: "Qualification automatique des prospects assurance" },
        { href: "/fr/services/campagnes-whatsapp", label: "Campagnes WhatsApp renouvellement et fidélisation" },
        { href: "/fr/services/crm-automation", label: "CRM automation courtage → WhatsApp" },
      ],
      closingPitch: "+38% de conversion devis → contrat, sinistres traités en 4 minutes. Conforme DDA + ACPR. Audit gratuit pour projeter le ROI sur votre portefeuille.",
    },
  },
};

export function getSecteurRich(slug: string, locale: string): SecteurRichContent | undefined {
  return SECTEUR_RICH[slug]?.[locale];
}
