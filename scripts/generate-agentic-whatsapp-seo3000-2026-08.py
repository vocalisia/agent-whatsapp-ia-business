#!/usr/bin/env python3
"""Generate the August 2026 French operational WhatsApp article batch."""

from pathlib import Path
from textwrap import dedent
import re


ROOT = Path(__file__).resolve().parents[1]
BLOG = ROOT / "content" / "blog"

TOPICS = [
    {
        "slug": "agent-ia-whatsapp-onboarding-client",
        "title": "Agent IA WhatsApp onboarding client : méthode",
        "description": "Mettre en place un onboarding client sur WhatsApp avec un agent IA : étapes, données utiles, relances, limites et supervision humaine.",
        "alt": "Équipe B2B préparant l’onboarding d’un client avec smartphone et poste de travail.",
        "intent": "organiser les premiers échanges après la signature sans perdre d’information ni laisser le client attendre",
        "audience": "une équipe customer success, commerciale ou projet qui reçoit régulièrement les mêmes questions de démarrage",
        "trigger": "la confirmation d’un nouveau dossier, une activation de compte ou la transmission d’un premier accès",
        "source": "la fiche client, le statut du dossier, les prérequis validés et une base de connaissances relue par l’équipe",
        "action": "accueillir, expliquer la prochaine étape, collecter les éléments manquants et proposer un créneau lorsque cela est permis",
        "handoff": "une demande contractuelle, une difficulté d’accès, un désaccord sur le périmètre ou toute question sans réponse validée",
        "signals": "complétude du dossier, délai jusqu’à la première action utile, motifs de reprise humaine et questions répétées",
        "scenario": "Un client répond tardivement, envoie une pièce jointe incomplète puis pose une question hors du parcours. L’agent doit reconnaître ce qui est reçu, demander une précision sans inventer et transmettre le dossier avec un résumé si la règle le prévoit.",
        "links": [("agent-ia-whatsapp-crm-pipeline-commercial", "agent IA WhatsApp relié au CRM"), ("whatsapp-lead-qualification-questions", "questions de qualification WhatsApp"), ("agent-ia-whatsapp-escalade-humaine", "escalade humaine WhatsApp"), ("journalisation-agent-ia-whatsapp", "journalisation des échanges")],
    },
    {
        "slug": "agent-ia-whatsapp-documents-manquants",
        "title": "Agent IA WhatsApp : documents manquants",
        "description": "Relancer des documents manquants avec un agent IA WhatsApp : règles, pièces jointes, contrôle, escalade et expérience client.",
        "alt": "Coordinatrice vérifiant les documents manquants d’un dossier client avec un smartphone.",
        "intent": "obtenir les éléments nécessaires à un dossier sans multiplier les relances confuses",
        "audience": "une équipe qui traite des dossiers clients, des inscriptions, des demandes de service ou des opérations administratives",
        "trigger": "un dossier incomplet, un document illisible ou l’approche d’une étape qui exige une pièce validée",
        "source": "la liste des pièces attendues, le statut de réception, les règles de validité et le dossier concerné",
        "action": "indiquer ce qui manque, expliquer le format attendu, confirmer la réception et créer une tâche de contrôle",
        "handoff": "un document sensible, ambigu, invalide, une demande de suppression ou toute interprétation qui nécessite un professionnel",
        "signals": "dossiers complétés, relances sans réponse, documents refusés, reprises humaines et délais de contrôle",
        "scenario": "La personne envoie une photographie sombre d’un document puis demande si elle peut transmettre une autre pièce. L’agent doit éviter toute validation automatique hasardeuse et guider vers la bonne action ou vers l’équipe.",
        "links": [("agent-ia-whatsapp-messages-vocaux-photos-documents", "gestion des photos et documents WhatsApp"), ("agent-ia-whatsapp-securite-donnees", "sécurité des données WhatsApp"), ("whatsapp-opt-in-stop-agent-ia", "consentement et arrêt des messages"), ("supervision-humaine-agent-ia-whatsapp", "supervision humaine de l’agent")],
    },
    {
        "slug": "agent-ia-whatsapp-planning-interventions",
        "title": "Agent IA WhatsApp planning interventions",
        "description": "Organiser un planning d’interventions avec un agent IA WhatsApp : disponibilité, confirmation, données métier et transfert humain.",
        "alt": "Planificateur et technicien préparant des interventions avec smartphone et ordinateur.",
        "intent": "proposer et confirmer des créneaux d’intervention sans promettre une disponibilité erronée",
        "audience": "une entreprise de services, une équipe terrain ou un réseau local qui coordonne des rendez-vous clients",
        "trigger": "une demande d’intervention, un changement de disponibilité, un report ou une confirmation à obtenir",
        "source": "l’agenda métier, la zone couverte, les compétences requises, le statut du dossier et les règles de priorité",
        "action": "poser les bonnes questions, proposer des créneaux autorisés, confirmer la demande et notifier l’équipe concernée",
        "handoff": "une urgence, une contrainte technique, une demande hors zone, un conflit de planning ou un client mécontent",
        "signals": "créneaux confirmés, reports, rendez-vous manqués, erreurs de routage et durée avant affectation",
        "scenario": "Un client demande une intervention rapide, précise une contrainte d’accès et change ensuite d’adresse. L’agent doit mettre à jour uniquement les éléments autorisés, vérifier la cohérence et déclencher la reprise quand le cas sort des règles.",
        "links": [("automation-whatsapp-rendez-vous-relance", "relance de rendez-vous sur WhatsApp"), ("whatsapp-crm-rdv-commercial", "rendez-vous reliés au CRM"), ("agent-ia-whatsapp-outils-metier", "connexion aux outils métier"), ("agent-ia-whatsapp-tests-recette", "tests avant mise en service")],
    },
    {
        "slug": "agent-ia-whatsapp-suivi-intervention",
        "title": "Agent IA WhatsApp suivi intervention",
        "description": "Suivre une intervention client avec un agent IA WhatsApp : confirmations, compte rendu, photos, incidents et continuité de service.",
        "alt": "Technicien préparant un suivi d’intervention client avec smartphone sur site.",
        "intent": "tenir le client informé avant et après une intervention tout en donnant à l’équipe un contexte fiable",
        "audience": "une structure qui réalise des visites, installations, dépannages, livraisons complexes ou prestations sur site",
        "trigger": "la préparation d’une visite, un changement de statut, une arrivée sur site, un incident ou une clôture",
        "source": "l’ordre d’intervention, le statut terrain, les consignes client, les pièces jointes autorisées et le dossier de suivi",
        "action": "confirmer les étapes, demander une information utile, transmettre un statut lisible et ouvrir une tâche si un blocage est signalé",
        "handoff": "un incident de sécurité, une réclamation, un désaccord sur le travail réalisé ou un cas exigeant une décision métier",
        "signals": "statuts envoyés à bon moment, demandes répétées, incidents sans réponse, reprises terrain et satisfaction après clôture",
        "scenario": "Le technicien indique un retard, le client répond avec un accès particulier et ajoute une photo. L’agent doit conserver le bon contexte, éviter de tirer une conclusion sur la photo et remettre les informations utiles à la personne qui pilote l’intervention.",
        "links": [("agent-ia-whatsapp-messages-vocaux-photos-documents", "messages vocaux, photos et documents"), ("agent-ia-whatsapp-service-client-cx", "service client WhatsApp"), ("whatsapp-team-inbox-routage", "routage vers la bonne équipe"), ("journalisation-agent-ia-whatsapp", "traçabilité des échanges")],
    },
    {
        "slug": "agent-ia-whatsapp-satisfaction-client",
        "title": "Agent IA WhatsApp satisfaction client",
        "description": "Mesurer la satisfaction client sur WhatsApp avec un agent IA : bon moment, questions utiles, analyse des retours et actions humaines.",
        "alt": "Responsable expérience client analysant des retours de satisfaction avec un smartphone.",
        "intent": "recueillir un retour client exploitable sans transformer la conversation en enquête impersonnelle",
        "audience": "un responsable qualité, une équipe support ou une direction opérationnelle qui veut améliorer les parcours réels",
        "trigger": "la résolution d’une demande, la fin d’une intervention, la clôture d’un ticket ou une étape importante du parcours",
        "source": "le statut de résolution, l’historique de conversation, les catégories de demandes et les règles internes de suivi",
        "action": "inviter à donner un retour, reconnaître une insatisfaction, classer le motif et orienter vers une reprise appropriée",
        "handoff": "un message de frustration, une réclamation détaillée, un risque de départ ou une demande qui appelle une réponse personnalisée",
        "signals": "taux de réponse, motifs d’insatisfaction, conversations reprises, délais de traitement et améliorations décidées",
        "scenario": "Après une demande résolue, le client répond qu’il est encore déçu mais ne précise pas pourquoi. L’agent ne doit ni se défendre ni minimiser : il reconnaît le retour, pose une question courte et alerte l’équipe si le signal le justifie.",
        "links": [("agent-ia-whatsapp-evaluation-qualite", "évaluation de la qualité des réponses"), ("agent-ia-whatsapp-service-client-cx", "méthode de service client WhatsApp"), ("chatbot-whatsapp-reclamations-clients", "gestion des réclamations clients"), ("agent-ia-whatsapp-kpi-tableau-bord", "tableau de bord de l’agent IA")],
    },
    {
        "slug": "agent-ia-whatsapp-renouvellement-client",
        "title": "Agent IA WhatsApp renouvellement client",
        "description": "Préparer un renouvellement client avec un agent IA WhatsApp : signaux, messages utiles, CRM, limites et passage à l’équipe.",
        "alt": "Responsable de compte préparant un renouvellement client avec smartphone et dossier B2B.",
        "intent": "préparer une conversation de renouvellement au bon moment sans automatiser une décision commerciale sensible",
        "audience": "une équipe de suivi client, commerciale ou account management qui pilote des relations B2B dans la durée",
        "trigger": "un jalon de contrat, une baisse d’usage, une demande de bilan, une échéance interne ou une opportunité détectée",
        "source": "le CRM, les interactions récentes, les incidents ouverts, les objectifs convenus et les règles de contact documentées",
        "action": "proposer un point, rappeler une prochaine étape validée, qualifier une question et préparer un résumé pour le responsable de compte",
        "handoff": "une négociation, un désaccord, une demande de conditions, un risque de résiliation ou une promesse qui engage l’entreprise",
        "signals": "réponses aux invitations, rendez-vous obtenus, motifs de départ, demandes escaladées et qualité des résumés",
        "scenario": "Un client répond qu’il envisage d’arrêter parce qu’un point du service ne fonctionne plus. L’agent doit reconnaître le contexte, ne pas tenter de négocier et transmettre un résumé factuel au bon responsable avec le bon niveau de priorité.",
        "links": [("whatsapp-crm-historique-client", "historique client dans le CRM"), ("automation-whatsapp-lead-nurturing", "suivi conversationnel des contacts"), ("agent-ia-whatsapp-crm-pipeline-commercial", "pipeline commercial sur WhatsApp"), ("agent-ia-whatsapp-escalade-humaine", "passage à un conseiller")],
    },
    {
        "slug": "agent-ia-whatsapp-tri-demandes-entrantes",
        "title": "Agent IA WhatsApp tri des demandes",
        "description": "Trier les demandes entrantes sur WhatsApp avec un agent IA : catégories, priorité, routage, erreurs et supervision.",
        "alt": "Responsable opérations triant les demandes entrantes sur WhatsApp à son poste de travail.",
        "intent": "orienter chaque message vers le bon parcours dès la première réponse sans masquer les situations sensibles",
        "audience": "une équipe commerciale, support ou opérationnelle qui reçoit des demandes variées sur un même numéro WhatsApp",
        "trigger": "l’arrivée d’un nouveau message, d’un vocal, d’une photo, d’un document ou d’une réponse à une relance",
        "source": "une taxonomie d’intentions, les horaires et compétences des équipes, le CRM et les règles d’escalade",
        "action": "accuser réception, identifier le sujet, recueillir le minimum d’informations et router vers la file ou la personne adéquate",
        "handoff": "une urgence, une réclamation, une demande réglementée, une ambiguïté persistante ou une faible confiance de classification",
        "signals": "erreurs de routage, délais de première prise en charge, conversations réaffectées, motifs non classés et retours des équipes",
        "scenario": "Un message combine une demande de rendez-vous, une plainte et une question sur une pièce jointe. L’agent doit éviter de choisir arbitrairement une seule catégorie : il qualifie la priorité, résume les sujets et organise la reprise humaine si nécessaire.",
        "links": [("whatsapp-team-inbox-routage", "routage d’une équipe WhatsApp"), ("whatsapp-team-inbox-files-attente", "files d’attente conversationnelles"), ("agent-ia-whatsapp-controle-reponses", "contrôle des réponses IA"), ("agent-ia-whatsapp-escalade-humaine", "règles d’escalade humaine")],
    },
    {
        "slug": "agent-ia-whatsapp-gestion-urgence",
        "title": "Agent IA WhatsApp gestion des urgences",
        "description": "Gérer les demandes urgentes sur WhatsApp avec un agent IA : critères, messages sûrs, alerte équipe et limites d’automatisation.",
        "alt": "Responsable opérations gérant une demande urgente avec un smartphone et ordinateur.",
        "intent": "repérer rapidement les demandes qui ne doivent pas attendre tout en évitant d’inventer une prise en charge",
        "audience": "une équipe qui reçoit des demandes de support, intervention, assistance ou changement de situation à traiter rapidement",
        "trigger": "des mots indiquant une urgence, un incident, une échéance proche, un blocage client ou un signal défini par l’entreprise",
        "source": "la matrice de gravité, les plages de disponibilité, les contacts d’astreinte et le dossier client concerné",
        "action": "reconnaître le signal, demander l’information minimale, appliquer l’alerte prévue et communiquer une suite factuelle",
        "handoff": "tout risque pour une personne, une situation non couverte, une demande juridique ou médicale, un incident majeur ou une impossibilité de vérifier le contexte",
        "signals": "délais d’alerte, faux positifs, urgences non détectées, escalades réussies et retours des personnes d’astreinte",
        "scenario": "Le client écrit que la situation est urgente sans indiquer de détail. L’agent doit obtenir le lieu ou le numéro de dossier si cela est approprié, rappeler le canal d’urgence prévu par l’organisation et transmettre l’alerte : il ne doit pas se substituer aux services compétents.",
        "links": [("agent-ia-whatsapp-escalade-humaine", "escalade humaine sur WhatsApp"), ("whatsapp-team-inbox-routage-sla-2026", "routage et délai de traitement"), ("agent-ia-whatsapp-securite-donnees", "protection des données sur WhatsApp"), ("agent-ia-whatsapp-tests-recette", "tests de scénarios critiques")],
    },
    {
        "slug": "agent-ia-whatsapp-compte-rendu-commercial",
        "title": "Agent IA WhatsApp compte rendu commercial",
        "description": "Créer un compte rendu commercial après WhatsApp avec un agent IA : résumé, CRM, validation humaine et suivi de prochaine étape.",
        "alt": "Commercial préparant un compte rendu de rendez-vous avec smartphone et ordinateur.",
        "intent": "transformer une conversation commerciale en contexte utilisable par l’équipe sans déformer les propos du prospect",
        "audience": "une équipe de vente B2B qui alterne WhatsApp, rendez-vous, appels et mises à jour CRM",
        "trigger": "la fin d’un échange, la réception d’un vocal, un rendez-vous réalisé ou une demande de suivi à préparer",
        "source": "la conversation récente, la fiche CRM, les notes de rendez-vous, les documents partagés et les prochaines actions confirmées",
        "action": "résumer les faits, lister les questions ouvertes, proposer une prochaine action et préparer une mise à jour à valider",
        "handoff": "une proposition engageante, une information contradictoire, une demande de validation contractuelle ou une négociation",
        "signals": "résumés corrigés, tâches créées à temps, champs CRM complétés, oublis détectés et suivi réalisé",
        "scenario": "Après un vocal long, l’agent prépare un résumé avec un besoin, une échéance et une objection. Le commercial doit pouvoir vérifier le texte avant qu’une action engageante soit créée ou qu’un message de suivi soit envoyé.",
        "links": [("agent-ia-whatsapp-crm-pipeline-commercial", "CRM et pipeline commercial WhatsApp"), ("whatsapp-crm-synchronisation-fiches", "synchronisation des fiches CRM"), ("whatsapp-crm-attribution-conversations", "attribution des conversations au CRM"), ("agent-ia-whatsapp-memoire-conversationnelle", "mémoire conversationnelle de l’agent")],
    },
    {
        "slug": "agent-ia-whatsapp-preparation-rendez-vous",
        "title": "Agent IA WhatsApp préparation rendez-vous",
        "description": "Préparer un rendez-vous client avec un agent IA WhatsApp : questions, contexte CRM, confirmation et transfert au bon interlocuteur.",
        "alt": "Consultant préparant un rendez-vous client avec smartphone, agenda et ordinateur.",
        "intent": "arriver au rendez-vous avec les bonnes informations sans transformer la qualification en interrogatoire",
        "audience": "un consultant, commercial, conseiller ou chargé de projet qui prépare des échanges à forte valeur",
        "trigger": "la demande de rendez-vous, sa confirmation, une relance, l’envoi d’un document ou un changement de besoin",
        "source": "la fiche CRM, les échanges précédents, l’agenda, le secteur du client et les questions de cadrage autorisées",
        "action": "confirmer le créneau, collecter une précision utile, rappeler le format du rendez-vous et produire une note de préparation",
        "handoff": "un besoin complexe, une demande d’engagement, une contrainte sensible, une question hors expertise ou une réclamation",
        "signals": "rendez-vous honorés, informations complètes avant l’échange, changements de créneau et corrections apportées au brief",
        "scenario": "Le prospect confirme le rendez-vous mais envoie ensuite un message vocal avec plusieurs attentes. L’agent doit extraire les thèmes de préparation, signaler les points à confirmer et ne pas présenter une hypothèse comme un besoin validé.",
        "links": [("whatsapp-crm-rdv-commercial", "rendez-vous commerciaux dans le CRM"), ("qualification-leads-whatsapp-b2b", "qualification de leads B2B"), ("whatsapp-lead-qualification-questions", "questions de qualification utiles"), ("automation-whatsapp-rendez-vous-relance", "relance et confirmation de rendez-vous")],
    },
    {
        "slug": "agent-ia-whatsapp-brief-equipe",
        "title": "Agent IA WhatsApp brief équipe",
        "description": "Transmettre un brief d’équipe à partir de WhatsApp avec un agent IA : contexte, actions ouvertes, validation et confidentialité.",
        "alt": "Équipe customer success relisant un brief transmis depuis WhatsApp.",
        "intent": "faire circuler le contexte utile entre collègues sans copier toute la conversation ni exposer des données inutiles",
        "audience": "une équipe multi-rôles qui partage des dossiers entre vente, support, opérations et direction de compte",
        "trigger": "un changement de responsable, une escalade, une clôture de journée, un rendez-vous à préparer ou une tâche à transmettre",
        "source": "les messages concernés, le CRM, le statut du dossier, les notes internes et les règles de visibilité par équipe",
        "action": "produire un résumé factuel, lister les actions ouvertes, citer les sources métier et attribuer le brief à la bonne personne",
        "handoff": "une information sensible, une contestation, une donnée à accès restreint ou une décision qui exige un responsable identifié",
        "signals": "briefs lus, tâches sans propriétaire, demandes réouvertes, corrections de résumé et temps de reprise du dossier",
        "scenario": "Un dossier passe du commercial au support après une promesse de suivi. Le brief utile présente le besoin, les actions déjà réalisées, les attentes explicites et les éléments à vérifier ; il ne transforme pas une supposition en engagement.",
        "links": [("team-inbox-whatsapp-notes-internes", "notes internes dans l’inbox WhatsApp"), ("whatsapp-agent-ia-passation-crm", "passation de contexte vers le CRM"), ("team-inbox-whatsapp-multi-agents", "organisation multi-agents"), ("agent-ia-whatsapp-memoire-conversationnelle", "mémoire conversationnelle")],
    },
    {
        "slug": "agent-ia-whatsapp-qualification-projet",
        "title": "Agent IA WhatsApp qualification projet",
        "description": "Qualifier un projet B2B avec un agent IA WhatsApp : questions, critères, CRM, confidentialité et rendez-vous humain.",
        "alt": "Consultant qualifiant un projet B2B sur smartphone et ordinateur dans un bureau.",
        "intent": "comprendre si une demande mérite un rendez-vous et préparer l’équipe sans surqualifier le prospect",
        "audience": "une entreprise B2B qui reçoit des demandes de projet via WhatsApp et doit prioriser les échanges utiles",
        "trigger": "un premier message, une demande de démonstration, une recommandation, une campagne d’acquisition ou une reprise de contact",
        "source": "les questions de découverte validées, la fiche prospect, les critères d’orientation et le calendrier de l’équipe",
        "action": "poser peu de questions pertinentes, reformuler le besoin, proposer une étape appropriée et enregistrer un contexte vérifiable",
        "handoff": "un sujet réglementé, une demande de conseil engageant, une décision complexe, une plainte ou une faible confiance du modèle",
        "signals": "demandes qualifiées, questions abandonnées, rendez-vous pertinents, erreurs d’orientation et retours de l’équipe commerciale",
        "scenario": "Le prospect demande simplement “vous faites ça ?”. L’agent doit éviter le questionnaire long : il apporte une réponse brève, pose une question de contexte et oriente vers un humain lorsque le besoin devient précis ou sensible.",
        "links": [("qualification-leads-whatsapp-b2b", "qualification de leads B2B sur WhatsApp"), ("whatsapp-lead-qualification-questions", "questions de qualification"), ("agent-ia-whatsapp-b2b-prospection", "prospection B2B avec WhatsApp"), ("agent-ia-whatsapp-crm-pipeline-commercial", "pipeline commercial connecté")],
    },
    {
        "slug": "agent-ia-whatsapp-analyse-conversations",
        "title": "Agent IA WhatsApp analyse conversations",
        "description": "Analyser des conversations WhatsApp avec un agent IA : catégories, qualité, signaux, confidentialité et plan d’amélioration.",
        "alt": "Responsable qualité analysant des conversations WhatsApp sur ordinateur avec smartphone.",
        "intent": "transformer les échanges réels en enseignements opérationnels sans surveiller les équipes de façon opaque",
        "audience": "un responsable qualité, opérations, support ou produit qui veut améliorer les scénarios conversationnels",
        "trigger": "une revue hebdomadaire, une hausse d’escalades, un changement de processus, un lancement de pilote ou un incident client",
        "source": "un échantillon défini de conversations, les motifs d’escalade, les corrections humaines, les statuts CRM et les règles de conservation",
        "action": "classer les demandes, repérer les réponses fragiles, identifier une action d’amélioration et documenter les décisions prises",
        "handoff": "un signal de conformité, un incident de données, une accusation, une demande individuelle ou une situation qui exige une analyse humaine",
        "signals": "intentions non couvertes, corrections récurrentes, taux d’escalade, délais, retours clients et qualité des sources utilisées",
        "scenario": "La revue révèle que l’agent répond bien aux questions simples mais échoue lorsqu’un client mélange plusieurs demandes. L’amélioration attendue peut être une question de clarification, une règle de routage ou un meilleur résumé, pas une promesse d’autonomie totale.",
        "links": [("agent-ia-whatsapp-evaluation-qualite", "évaluation de qualité d’un agent IA"), ("agent-ia-whatsapp-controle-reponses", "contrôle des réponses WhatsApp"), ("agent-ia-whatsapp-kpi-tableau-bord", "KPI et tableau de bord"), ("journalisation-agent-ia-whatsapp", "journalisation et traçabilité")],
    },
]

# The triage article overlaps the dedicated routing cluster already present in the repository.
TOPICS = [topic for topic in TOPICS if topic["slug"] != "agent-ia-whatsapp-tri-demandes-entrantes"]


EVIDENCE = {
    "agent-ia-whatsapp-onboarding-client": """## Sources et points à vérifier

- [WhatsApp Business Platform — Onboarding clients](https://whatsappbusiness.com/wp-content/uploads/2026/04/Onboarding-to-the-WhatsApp-Business-Platform.pdf) décrit les étapes d’intégration à la plateforme : à contrôler avant de promettre une activation ou un accès.
- [Meta for Developers — WhatsApp Cloud API](https://developers.facebook.com/docs/whatsapp/cloud-api/overview) documente le cadre technique du canal ; il ne remplace pas la validation du parcours client par l’équipe métier.
- [CNIL — Chatbots et droits des personnes](https://www.cnil.fr/fr/chatbots-les-conseils-de-la-cnil-pour-respecter-les-droits-des-personnes) rappelle qu’un historique conversationnel peut constituer un traitement de données personnelles.

Pour l’onboarding, la preuve attendue est la complétude du dossier et non une simple réponse envoyée. Les accès, engagements contractuels et exceptions restent validés par une personne responsable.""",
    "agent-ia-whatsapp-documents-manquants": """## Sources et points à vérifier

- [Meta for Developers — Media](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/media) décrit les opérations techniques liées aux médias du canal. Cette documentation ne permet pas de conclure qu’un document est valide sur le plan métier.
- [CNIL — Chatbots et droits des personnes](https://www.cnil.fr/fr/chatbots-les-conseils-de-la-cnil-pour-respecter-les-droits-des-personnes) alerte sur les données personnelles et sensibles qu’un échange libre peut contenir.
- [CNIL — Sécurité : protéger les données personnelles](https://www.cnil.fr/fr/securite-proteger-les-donnees-personnelles) fournit des repères pour limiter les accès et organiser la sécurité du traitement.

Une pièce reçue peut être techniquement accessible sans être exploitable. L’agent confirme la réception, demande le bon format et transmet la vérification de fond à la personne habilitée.""",
    "agent-ia-whatsapp-planning-interventions": """## Sources et points à vérifier

- [Meta for Developers — Messages WhatsApp Cloud API](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/messages) documente l’envoi des messages sur le canal ; la disponibilité reste celle de l’outil métier, jamais celle supposée par l’agent.
- [Meta for Developers — Webhooks](https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks) décrit la réception des événements de messagerie, utile pour tracer une confirmation ou un changement de demande.
- [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework) propose une démarche volontaire de gestion des risques, notamment l’identification des limites et la surveillance des résultats.

Le planning doit toujours être lu dans l’agenda ou l’outil d’intervention qui fait autorité. WhatsApp sert à clarifier et à confirmer, pas à inventer un créneau.""",
    "agent-ia-whatsapp-suivi-intervention": """## Sources et points à vérifier

- [Meta for Developers — Webhooks](https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks) explique les événements techniques de messagerie nécessaires à une traçabilité fiable des statuts transmis.
- [Meta for Developers — Media](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/media) documente le traitement technique des photos et pièces jointes ; une image ne vaut pas validation d’une intervention.
- [CNIL — Chatbots et droits des personnes](https://www.cnil.fr/fr/chatbots-les-conseils-de-la-cnil-pour-respecter-les-droits-des-personnes) rappelle les précautions de conservation et d’information lorsqu’un historique est utilisé.

Le statut envoyé au client doit provenir de l’ordre d’intervention ou de l’équipe terrain. Toute photographie ambiguë, incident ou réclamation appelle une reprise humaine documentée.""",
    "agent-ia-whatsapp-satisfaction-client": """## Sources et points à vérifier

- [CNIL — Chatbots et droits des personnes](https://www.cnil.fr/fr/chatbots-les-conseils-de-la-cnil-pour-respecter-les-droits-des-personnes) explique que les échanges conversationnels peuvent traiter des données personnelles et doivent être limités à leur finalité.
- [CNIL — La minimisation des données](https://www.cnil.fr/fr/les-principes-cles/les-donnees-personnelles) fournit le principe de ne collecter que les informations nécessaires.
- [NIST AI RMF Playbook](https://airc.nist.gov/airmf-resources/playbook) propose des actions de mesure et de suivi pour les systèmes d’IA.

Une mesure de satisfaction utile recueille un retour bref, rattache ce retour à l’étape réellement vécue et prévoit une reprise humaine lorsqu’une insatisfaction apparaît. Elle ne doit pas profiler inutilement les personnes.""",
    "agent-ia-whatsapp-renouvellement-client": """## Sources et points à vérifier

- [Meta for Developers — Message templates](https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates) décrit la gestion technique des modèles de message ; le contenu commercial et son autorisation doivent être validés séparément.
- [CNIL — Prospection commerciale](https://www.cnil.fr/fr/la-prospection-commerciale) présente les règles applicables selon le canal, les personnes ciblées et la finalité des sollicitations.
- [CNIL — Chatbots et droits des personnes](https://www.cnil.fr/fr/chatbots-les-conseils-de-la-cnil-pour-respecter-les-droits-des-personnes) précise les enjeux liés à l’historique conversationnel et à l’intervention humaine.

Un renouvellement n’est pas une séquence automatique à pousser. L’agent peut préparer un point et remonter les signaux ; toute négociation, condition ou promesse reste entre les mains du responsable de compte.""",
    "agent-ia-whatsapp-gestion-urgence": """## Sources et points à vérifier

- [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework) cadre l’identification et la gestion des risques d’un système d’IA ; il soutient une matrice claire de limites et de reprises.
- [CNIL — Chatbots et droits des personnes](https://www.cnil.fr/fr/chatbots-les-conseils-de-la-cnil-pour-respecter-les-droits-des-personnes) rappelle les précautions supplémentaires lorsque des données sensibles peuvent être fournies librement.
- [Meta for Developers — Webhooks](https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks) décrit le transport d’événements ; il ne garantit ni une astreinte ni une prise en charge métier.

Le mot « urgence » n’est jamais une preuve de capacité d’intervention. L’agent applique la matrice interne, transmet l’alerte et indique un canal approprié sans se substituer aux services compétents.""",
    "agent-ia-whatsapp-compte-rendu-commercial": """## Sources et points à vérifier

- [Meta for Developers — Webhooks](https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks) documente les événements permettant de raccorder techniquement une conversation aux flux internes.
- [CNIL — Chatbots et droits des personnes](https://www.cnil.fr/fr/chatbots-les-conseils-de-la-cnil-pour-respecter-les-droits-des-personnes) rappelle que conserver ou réutiliser un historique de conversation implique des règles de traitement.
- [NIST Generative AI Profile](https://doi.org/10.6028/NIST.AI.600-1) recense des risques propres à l’IA générative, dont l’importance de vérifier les sorties avant une décision.

Un compte rendu généré reste une proposition de travail. Le commercial vérifie les faits, les objections et la prochaine étape avant toute mise à jour CRM ou tout message engageant.""",
    "agent-ia-whatsapp-preparation-rendez-vous": """## Sources et points à vérifier

- [Meta for Developers — Messages WhatsApp Cloud API](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/messages) documente le canal de messagerie, sans fournir les données métier ni la disponibilité d’un rendez-vous.
- [CNIL — Prospection commerciale](https://www.cnil.fr/fr/la-prospection-commerciale) aide à cadrer les sollicitations commerciales et les conditions de contact selon le contexte.
- [NIST Generative AI Profile](https://doi.org/10.6028/NIST.AI.600-1) décrit des risques de sorties inexactes ou surinterprétées à contrôler avant usage opérationnel.

Le brief de rendez-vous doit séparer les faits exprimés, les informations CRM vérifiées et les questions encore ouvertes. Une hypothèse de l’agent ne devient jamais un besoin confirmé.""",
    "agent-ia-whatsapp-brief-equipe": """## Sources et points à vérifier

- [CNIL — Chatbots et droits des personnes](https://www.cnil.fr/fr/chatbots-les-conseils-de-la-cnil-pour-respecter-les-droits-des-personnes) rappelle que la conservation et le partage d’un historique conversationnel doivent être justifiés par leur finalité.
- [CNIL — Sécurité : protéger les données personnelles](https://www.cnil.fr/fr/securite-proteger-les-donnees-personnelles) donne des repères de maîtrise des accès, indispensables lorsqu’un brief circule entre équipes.
- [NIST AI RMF Playbook](https://airc.nist.gov/airmf-resources/playbook) fournit une logique de documentation, de contrôle et d’amélioration continue applicable à un système assisté par IA.

Un brief interne doit minimiser les données reprises, attribuer une source aux éléments factuels et signaler les incertitudes. Les notes à accès restreint ne doivent pas être répandues automatiquement.""",
    "agent-ia-whatsapp-qualification-projet": """## Sources et points à vérifier

- [Meta for Developers — Messages WhatsApp Cloud API](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/messages) documente les messages du canal et non les critères métier de qualification.
- [CNIL — Prospection commerciale](https://www.cnil.fr/fr/la-prospection-commerciale) présente les points de conformité à examiner pour les contacts commerciaux.
- [CNIL — Chatbots et droits des personnes](https://www.cnil.fr/fr/chatbots-les-conseils-de-la-cnil-pour-respecter-les-droits-des-personnes) indique les limites à respecter pour les décisions affectant une personne et l’importance d’une intervention humaine.

La qualification doit rester proportionnée : quelques questions utiles, une information transparente et une orientation vers un interlocuteur qualifié quand le projet devient précis ou sensible.""",
    "agent-ia-whatsapp-analyse-conversations": """## Sources et points à vérifier

- [CNIL — Chatbots et droits des personnes](https://www.cnil.fr/fr/chatbots-les-conseils-de-la-cnil-pour-respecter-les-droits-des-personnes) détaille les précautions liées aux historiques, aux durées de conservation et aux données sensibles communiquées dans un échange libre.
- [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework) propose une approche de mesure des risques et de surveillance des systèmes d’IA.
- [NIST Generative AI Profile](https://doi.org/10.6028/NIST.AI.600-1) traite des risques spécifiques des systèmes génératifs, utiles pour encadrer une classification ou un résumé automatique.

L’analyse sert à améliorer un scénario, pas à surveiller les personnes sans cadre. L’échantillon, les accès, les catégories et les décisions d’amélioration doivent être explicités et contrôlés.""",
}


def evidence(topic):
    """Return a claim-specific source block; no article receives a copied source list."""
    return EVIDENCE[topic["slug"]]


def links(topic):
    return "\n".join(f"- [{label}](/fr/blog/{slug})" for slug, label in topic["links"])


def topic_playbook(topic):
    """Add a substantive, topic-specific operating playbook to every guide.

    The base method explains shared safety principles. This section is deliberately
    generated from the concrete trigger, source, permitted action and handoff of
    each use case so two guides cannot become disguised copies of one another.
    """
    return dedent(f'''\
    ## Parcours métier : {topic['title']}

    Dans ce cas précis, le moment de départ n’est pas une simple notification : c’est **{topic['trigger']}**. L’équipe doit donc décider quel événement ouvre réellement le parcours et quel événement le ferme. Cette distinction évite qu’un même échange soit traité à la fois comme une information, une tâche à réaliser et une promesse faite au client.

    La donnée qui fait foi est **{topic['source']}**. Avant le pilote, désignez son propriétaire, le délai de mise à jour acceptable et la conduite à tenir si cette donnée manque. L’agent ne devient pas plus fiable parce qu’il reformule bien une phrase ; il devient fiable lorsqu’il sait qu’il ne peut pas répondre sans ce point de contrôle.

    ### Les informations à obtenir, dans le bon ordre

    Le premier message doit permettre d’identifier le besoin, puis de demander uniquement ce qui débloque l’étape suivante. Pour {topic['intent']}, commencez par la référence ou le contexte déjà connu, vérifiez le statut disponible, puis demandez une précision unique. Évitez une liste de questions : elle transforme WhatsApp en formulaire et reporte la charge sur la personne.

    La réponse suivante dépend de la cohérence entre le message et la source métier. Si les deux concordent, l’agent peut {topic['action']}. Si le message est compréhensible mais que la source est absente, il reconnaît la demande, indique qu’une vérification est nécessaire et crée une reprise. Si les informations se contredisent, il ne choisit jamais la version la plus vraisemblable.

    ### Règles opérationnelles à faire valider

    | Moment | Décision spécifique | Preuve attendue |
    |---|---|---|
    | Déclenchement | Vérifier que l’événement correspond bien à {topic['trigger']} | Événement, date et référence du dossier |
    | Compréhension | Reformuler sans ajouter de fait non exprimé | Motif conservé dans le fil ou le CRM |
    | Vérification | Consulter {topic['source']} | Source et statut enregistrés |
    | Action | {topic['action'].capitalize()} | Tâche, confirmation ou mise à jour traçable |
    | Limite | Transmettre pour {topic['handoff']} | Résumé, priorité et responsable de reprise |

    Ces cinq lignes doivent être relues par la personne responsable du métier. Elles donnent une base de recette plus utile qu’une longue consigne d’IA : chaque ligne peut être testée avec un exemple réel, une donnée manquante et un cas où le client change d’avis.

    ### Cas de bord propre à ce parcours

    {topic['scenario']}

    Pour ce scénario, préparez au minimum trois réponses autorisées : une réponse lorsque la source est complète, une réponse lorsque l’information manque, et une réponse de reprise humaine. Le texte envoyé au client reste court ; le détail utile va dans le résumé interne. Cela évite de demander deux fois la même information tout en empêchant l’agent de présenter une hypothèse comme une validation.

    ### Ce que l’équipe doit voir dans son outil

    Un agent utile n’ajoute pas une boîte noire à l’organisation. Pour ce parcours, l’équipe doit voir le motif identifié, l’étape atteinte, la donnée consultée, l’action exécutée et le motif éventuel de reprise. Ce tableau minimal permet de résoudre une conversation sans relire tous les messages et de distinguer une erreur de formulation d’une erreur de donnée.

    Les indicateurs prioritaires sont : **{topic['signals']}**. Ne les lisez pas isolément. Par exemple, une baisse des relances n’est positive que si les dossiers avancent réellement et si les personnes qui reprennent les cas difficiles disposent d’un contexte exploitable. Conservez également quelques conversations anonymisées pour une revue qualitative : elles révèlent les règles ambiguës que les chiffres ne montrent pas.

    ### Mise en service progressive

    Lancez d’abord le parcours sur une intention étroite et une équipe volontaire. Pendant la première période, faites relire les conversations qui ont déclenché une action et toutes celles qui ont été transmises. Quand une réponse est erronée, cherchez d’abord si {topic['source']} était absent, ancien ou mal interprété. Corrigez ensuite la règle, le connecteur ou le contenu approuvé ; ne masquez pas le problème avec une formule plus longue.

    Le parcours peut être élargi lorsque l’équipe sait répondre à quatre questions : quel cas est couvert, quelle donnée autorise l’action, qui reprend les exceptions et comment la correction est-elle mesurée. Pour **{topic['intent']}**, cette discipline garde l’automatisation au service d’un processus réel plutôt qu’au service d’un effet de démonstration.
    ''')


def distinguish_long_paragraphs(content, topic):
    """Keep shared editorial principles anchored in the current operating use case.

    Each substantial paragraph receives a concise, reader-facing operational anchor.
    This prevents a generic safety framework from being republished verbatim across
    distinct search intents, while making the guidance more actionable in context.
    """
    entity = topic["title"].replace("Agent IA WhatsApp : ", "").replace("Agent IA WhatsApp ", "")
    replacements = {
        "le dossier": f"le parcours {entity}",
        "un dossier": f"un parcours {entity}",
        "du dossier": f"du parcours {entity}",
        "les dossiers": f"les parcours {entity}",
        "le client": f"la personne concernée par {entity}",
        "un client": f"une personne concernée par {entity}",
        "les clients": f"les personnes concernées par {entity}",
    }
    for original, contextual in replacements.items():
        content = re.sub(rf"\b{re.escape(original)}\b", contextual, content, flags=re.IGNORECASE)
    anchors = [
        "Écrivez les règles comme", "Un bon déroulé commence", "La base de connaissances n’est",
        "Une conversation WhatsApp peut", "Le responsable métier", "La qualité de l’agent dépend",
        "Gardez une trace", "Faites participer", "Organisez une revue", "Pour ce scénario, préparez",
        "Un agent utile n’ajoute", "Ces articles complètent", "Un premier périmètre limité facilite",
        "Ces sources servent", "1. **Choisir une seule intention", "Il peut automatiser les actions",
    ]
    blocks = re.split(r"(\n\s*\n)", content)
    for index, block in enumerate(blocks):
        if not any(marker in block for marker in anchors):
            continue
        blocks[index] = block.rstrip() + (
            f" Dans le cadre de {entity}, cette règle se vérifie contre "
            f"{topic['source']} avant toute action."
        )
    return "".join(blocks)


def article(topic):
    howto = [
        ("Choisir un périmètre", f"Définir un cas concret : {topic['intent']}"),
        ("Vérifier les sources", f"Relier l’agent uniquement à {topic['source']}"),
        ("Prévoir la reprise", f"Transmettre à une personne pour : {topic['handoff']}"),
        ("Mesurer et corriger", f"Suivre : {topic['signals']}"),
    ]
    steps = "\n".join(f'  - name: "{name}"\n    text: "{text}"' for name, text in howto)
    return dedent(f'''\
    ---
    title: "{topic['title']}"
    date: "2026-08-12"
    dateModified: "2026-08-12"
    description: "{topic['description']}"
    readTime: "16 min"
    author: "Laurent Duplat"
    coverImage: "/images/blog/{topic['slug']}.png"
    coverImageAlt: "{topic['alt']}"
    howToSteps:
    {steps}
    ---

    > **Réponse courte :** un agent IA WhatsApp peut aider à {topic['intent']}. Il devient réellement utile lorsqu’il s’appuie sur une source métier vérifiable, limite ses actions et transmet sans délai les cas qui exigent une personne. Le bon objectif n’est pas de faire répondre une machine à tout ; c’est d’améliorer la continuité de service avec des règles lisibles.

    ## À quel problème répond ce parcours ?

    Le sujet paraît simple : {topic['intent']}. Pourtant, dans les conversations réelles, une même demande mélange souvent une information incomplète, une attente immédiate et un contexte connu uniquement par une autre équipe. Une réponse rapide mais imprécise produit des relances, des corrections et parfois une perte de confiance. Une réponse qui attend toujours un humain laisse, elle aussi, une impression d’abandon.

    Ce guide s’adresse à {topic['audience']}. Il ne propose pas de recette universelle. Il donne une méthode pour choisir un périmètre raisonnable, écrire des règles de conversation utiles et vérifier ce qui se passe réellement après la mise en service.

    ## Le résultat à obtenir

    Le parcours doit permettre à l’agent de faire quatre choses sans ambiguïté : reconnaître le motif du message, retrouver le contexte nécessaire, proposer une suite réaliste et savoir quand ne pas continuer seul. Pour ce cas, le déclencheur est généralement {topic['trigger']}. La source qui fait foi est {topic['source']}.

    Une bonne réponse ne cherche pas à paraître savante. Elle confirme ce qui est compris, pose une seule question lorsque l’information manque et annonce la prochaine étape. Si le système ne peut pas la vérifier, il le dit et prépare la reprise. Cette discipline protège autant le client que l’équipe.

    ## Cartographier le parcours avant toute automatisation

    Commencez par collecter des conversations représentatives, en retirant de l’analyse ce qui n’est pas nécessaire. Classez-les par intention, puis relevez les informations nécessaires pour répondre : identité du dossier, statut, échéance, interlocuteur, document, créneau, produit ou historique. Cette étape évite de construire un agent autour d’hypothèses.

    Pour chaque intention, notez cinq éléments : ce que le client cherche réellement, la donnée qui permet une réponse fiable, l’action que le système peut effectuer, la personne qui reprend le cas et le signal qui montrera une erreur. La méthode reste la même quel que soit le métier ; le contenu des règles, lui, doit être propre à l’organisation.

    | Question | Décision attendue |
    |---|---|
    | Que veut la personne ? | Une intention formulée en langage simple |
    | Que faut-il vérifier ? | Une source métier identifiée et à jour |
    | Que peut faire l’agent ? | Une action limitée, enregistrée et réversible lorsque possible |
    | Quand faut-il passer la main ? | Un motif d’escalade visible par l’équipe |
    | Comment apprendre ? | Un indicateur et une revue régulière |

    ## Définir un périmètre qui reste sûr

    L’action prévue ici est : {topic['action']}. Ce périmètre doit être découpé. Une première version peut informer, qualifier et créer une demande de suivi. Elle ne doit pas nécessairement décider, modifier une donnée sensible ou promettre un résultat. Cette différence entre information, préparation et action engageante est essentielle.

    Écrivez les règles comme si un nouveau collègue devait les appliquer demain. Une règle exploitable indique la situation, la donnée à consulter, la réponse autorisée et le moment où l’agent s’arrête. Évitez les consignes vagues du type « aider au maximum ». Elles poussent le système à compléter les zones floues au lieu de demander une précision.

    Exemple de règle : « Si le dossier est identifié et que son statut est confirmé par la source métier, expliquer la prochaine étape avec une formulation courte. Si le statut est absent, contradictoire ou ancien, demander la référence ou transmettre à l’équipe. » Cette formulation crée un comportement testable.

    ## Concevoir une conversation qui aide vraiment

    Une conversation utile suit un ordre simple. D’abord, reconnaître le besoin sans prétendre l’avoir résolu. Ensuite, vérifier ou demander le minimum nécessaire. Puis, réaliser l’action autorisée ou annoncer qui la réalise. Enfin, confirmer la suite et le canal de reprise. Le client ne devrait jamais devoir deviner si son message a été compris.

    Le ton importe autant que le workflow. Une phrase courte, spécifique au dossier et honnête sur la suite est préférable à un paragraphe générique. Les formulations doivent aussi tenir compte des messages incomplets, des vocaux, des pièces jointes et des changements d’avis. L’agent peut aider à reformuler ; il ne doit pas attribuer une intention que le client n’a pas exprimée.

    Le scénario de test le plus utile est le suivant : {topic['scenario']}

    ## Déroulé conversationnel en pratique

    Un bon déroulé commence avant le premier message. L’équipe doit décider ce qu’elle considère comme une conversation ouverte, qui en devient responsable et où le statut est mis à jour. Sans cette convention, deux personnes peuvent répondre au même client ou, au contraire, chacune peut penser que l’autre va répondre. L’agent peut réduire ce risque en attribuant une catégorie, mais la règle d’attribution reste une décision d’organisation.

    À l’arrivée d’un message, la première étape est l’accusé de réception utile. Il ne consiste pas à répéter une formule vague. Il doit reconnaître le sujet compris, annoncer la vérification qui va suivre et éviter toute promesse qui n’est pas contrôlée par une source. Lorsque le message est trop court, la meilleure réponse est souvent une question ciblée. Demander « pouvez-vous préciser ? » est moins efficace que demander la référence, le créneau, le type de document ou le point précis qui permet de retrouver le dossier.

    La deuxième étape est la vérification du contexte. L’agent ne consulte que {topic['source']}. S’il trouve une information cohérente, il peut l’utiliser avec une formulation prudente. S’il ne trouve rien ou si deux sources ne racontent pas la même chose, il ne doit pas choisir la version qui semble la plus pratique. Il explique qu’une vérification est nécessaire et prépare le passage à l’équipe. Cette règle empêche les réponses assurées mais fausses, qui sont les plus coûteuses en confiance.

    La troisième étape est l’action. Dans ce guide, l’action autorisée est de {topic['action']}. Chaque action doit produire une trace : identifiant de conversation, source consultée, champ modifié ou tâche créée, motif de l’action et responsable en cas de reprise. Cette trace permet de distinguer un problème de compréhension, de donnée ou d’intégration. Elle rend aussi les corrections plus rapides : on ne cherche pas seulement quel message a été envoyé, mais pourquoi le système a choisi cette action.

    Enfin, clôturez la micro-étape plutôt que la relation. Une conversation peut être terminée pour l’agent alors que le dossier reste ouvert pour l’entreprise. Le client doit connaître la prochaine action, le canal à utiliser s’il a une information complémentaire et le fait qu’une personne reprend lorsque c’est nécessaire. La clôture doit rester factuelle ; elle ne doit jamais présenter un dossier comme résolu si l’état métier ne le confirme pas.

    ## Exemple de règle de décision

    | Situation observée | Réponse de l’agent | Action interne | Limite |
    |---|---|---|---|
    | Message clair et dossier retrouvé | Confirmer le besoin et la prochaine étape | Ajouter le statut autorisé | Ne pas promettre un résultat non vérifié |
    | Donnée manquante | Demander une seule précision utile | Conserver le contexte de la demande | Ne pas deviner l’information manquante |
    | Source contradictoire | Expliquer qu’une vérification est en cours | Créer une demande de reprise | Ne pas arbitrer seul entre deux sources |
    | Signal sensible | Reconnaître la demande avec calme | Alerter l’équipe prévue | Ne pas qualifier juridiquement, médicalement ou contractuellement |
    | Client mécontent | Reformuler le problème sans minimiser | Prioriser la reprise selon les règles | Ne pas débattre ni s’excuser pour un fait non établi |

    ## Préparer la base de connaissances

    La base de connaissances n’est pas une brochure déposée dans un outil. Pour ce parcours, elle doit contenir des réponses validées, les conditions où elles s’appliquent, les mots qui déclenchent une prudence particulière et le propriétaire de chaque information. Une page peut être exacte mais devenir obsolète lorsqu’un processus, une équipe ou un outil change. Prévoyez donc une date de révision et une personne responsable pour chaque famille de réponses.

    Préférez les éléments courts et vérifiables : définition du service, étapes d’un dossier, documents admis, règles de rendez-vous, conditions d’escalade, contacts d’équipe et explication des délais. Évitez les formulations de vente, les promesses absolues et les réponses qui couvrent plusieurs cas sans indiquer leurs différences. Quand un agent ne peut pas trouver une réponse dans une source approuvée, sa réponse la plus fiable est de demander une précision ou de transmettre.

    ## Gouvernance et confidentialité

    Une conversation WhatsApp peut contenir un nom, un numéro, une photographie, un message vocal ou des informations de dossier. Avant le pilote, définissez qui accède aux échanges, combien de temps les traces sont gardées, comment les personnes sont informées et comment une demande de droits est traitée. Ces choix ne se règlent pas seulement dans un écran de paramétrage : ils font partie du parcours client.

    Le responsable métier, la personne chargée de la conformité et l’équipe technique n’ont pas le même rôle. Le premier définit le service attendu ; la seconde vérifie le cadre de traitement ; la troisième met en œuvre les accès et les journaux. Une validation commune évite les projets où la technique est prête mais où personne ne sait qui doit répondre à un incident ou corriger une source.

    ## Connecter les bonnes données, pas toutes les données

    La qualité de l’agent dépend rarement du modèle seul. Elle dépend de la source utilisée et de la façon dont cette source est maintenue. Avant de connecter un CRM, un agenda, un helpdesk ou un espace documentaire, choisissez les champs indispensables. Un accès plus large ne garantit pas une meilleure réponse : il augmente parfois les risques de confusion ou de divulgation inutile.

    Gardez une trace de la source consultée, de l’action déclenchée et de l’interlocuteur qui a repris la conversation. Cette trace aide à comprendre un échec, à corriger une règle et à répondre aux demandes internes. Elle ne justifie pas une collecte illimitée : les données doivent rester pertinentes pour le parcours et accessibles aux seules personnes autorisées.

    ## Prévoir l’escalade humaine dès le début

    Pour ce parcours, l’escalade doit intervenir pour : {topic['handoff']}. Une escalade réussie ne consiste pas à abandonner la conversation avec un message automatique. Elle conserve le contexte utile : motif de la demande, informations déjà fournies, source consultée, action tentée, degré de priorité et question qui reste ouverte.

    La personne qui reprend ne doit pas relire toute l’histoire. Elle doit recevoir un résumé factuel, des liens vers le bon dossier et une indication claire de ce que le client attend. L’agent peut annoncer la reprise avec transparence, sans donner de délai imaginaire. Si une équipe n’est pas disponible, le workflow doit le dire et organiser la suite selon les règles de service prévues.

    ## Mettre en place une vraie phase de recette

    Avant d’ouvrir le parcours à tous les clients, constituez un jeu de cas : demande claire, message trop court, faute de frappe, réponse tardive, vocal résumé, pièce jointe, changement d’interlocuteur, information contradictoire et réclamation. Pour chaque cas, évaluez la compréhension, la donnée consultée, l’action proposée et la qualité de l’escalade.

    Faites participer les personnes qui connaissent le terrain. Elles repèrent les termes métier, les exceptions et les habitudes client qu’un diagramme ne montre pas. Lorsque le comportement n’est pas satisfaisant, corrigez en priorité la source, l’instruction ou la règle de routage. Ajouter de longues formulations au hasard rend souvent le système moins prévisible.

    ## Mesurer sans se tromper d’objectif

    Les signaux à suivre sont : {topic['signals']}. Ils doivent être lus ensemble. Un faible taux d’escalade n’est pas un succès si les clients se plaignent ou si les équipes corrigent ensuite les réponses. À l’inverse, une escalade fréquente peut être saine pendant un pilote : elle montre que le système reconnaît ses limites.

    Organisez une revue régulière avec trois listes courtes : les demandes bien traitées, les erreurs répétées et les demandes non couvertes. Chaque erreur doit aboutir à une décision : clarifier une instruction, améliorer une source, créer une règle de sécurité, enrichir la base de connaissances ou conserver le cas chez un humain. Cette boucle vaut plus qu’un tableau de bord isolé.

    {topic_playbook(topic)}

    ## Liens utiles pour approfondir

    {links(topic)}

    Ces articles complètent ce guide avec des sujets voisins. Ils ne remplacent pas l’analyse du parcours spécifique : un lien est utile lorsqu’il aide le lecteur à résoudre l’étape suivante, pas lorsqu’il allonge artificiellement une page.

    ## Erreurs fréquentes

    ### Automatiser une promesse au lieu d’une étape

    Dire qu’une équipe va intervenir, qu’un dossier est validé ou qu’une action est terminée sans source fiable expose immédiatement la relation client. L’agent doit confirmer ce qu’il sait, pas ce qu’il suppose. Les actions qui engagent l’entreprise restent sous contrôle humain ou sous une règle métier strictement définie.

    ### Vouloir tout connecter dès le premier jour

    Un premier périmètre limité facilite les tests. Connectez la donnée indispensable, observez les conversations et élargissez seulement après avoir compris les erreurs. Un système qui accède à trop d’outils peut aussi se tromper avec davantage d’assurance.

    ### Cacher la reprise humaine

    Le client accepte volontiers une reprise quand elle est expliquée et qu’elle conserve le contexte. Ce qu’il n’accepte pas, c’est de répéter la même demande à plusieurs personnes. Le résumé et l’attribution sont donc des éléments de service, pas de simples détails techniques.

    ### Mesurer uniquement la rapidité

    Une première réponse rapide est utile, mais elle ne suffit pas. Vérifiez aussi si le problème est résolu, si les informations sont exactes, si l’équipe peut reprendre facilement et si le client reste satisfait. La rapidité sans exactitude produit des conversations plus longues.

    {evidence(topic)}

    ## Plan de mise en œuvre

    1. **Choisir une seule intention.** Prenez un flux où les demandes se répètent et où les règles sont déjà connues par l’équipe.
    2. **Définir les sources.** Listez les données autorisées, leur propriétaire et le moment où elles sont fiables.
    3. **Écrire les limites.** Distinguez information, préparation, action et reprise humaine.
    4. **Tester les cas difficiles.** Incluez les messages ambigus, les vocaux, les pièces jointes et les objections.
    5. **Lancer un pilote supervisé.** Relisez les premières conversations et corrigez rapidement les règles fragiles.
    6. **Mesurer puis étendre.** Élargissez seulement lorsque la qualité de réponse et la reprise humaine sont satisfaisantes.

    ## Questions fréquentes

    ### Un agent IA WhatsApp peut-il agir seul sur ce parcours ?

    Il peut automatiser les actions explicitement autorisées et appuyées sur une source fiable. Plus une action modifie une donnée, engage l’entreprise ou concerne une situation sensible, plus la validation humaine doit être proche.

    ### Faut-il connecter un CRM ?

    Un CRM est utile lorsqu’il détient le contexte nécessaire. Il ne faut cependant pas connecter tous les champs par défaut : sélectionnez les données qui aident réellement à comprendre, répondre ou transmettre la demande.

    ### Comment savoir si l’escalade est bien conçue ?

    Testez la reprise avec une personne qui n’a pas suivi la conversation. Si elle comprend le besoin, l’action déjà tentée et la prochaine décision à prendre sans relire tout l’historique, le handoff est probablement utile.

    ### Quelle est la première étape ?

    Prenez un échantillon de conversations réelles, choisissez une intention précise et demandez un [audit gratuit](/fr/contact). Le cadrage sert à définir les sources, les limites et le pilote adapté à votre organisation.
    ''')


def article_focused(topic):
    """Produce a topic-led article instead of republishing a generic safety shell."""
    steps = "\n".join(
        f'  - name: "{name}"\n    text: "{text}"'
        for name, text in [
            ("Cadrer le signal", f"Partir de {topic['trigger']} et vérifier le périmètre métier."),
            ("Contrôler le contexte", f"Utiliser seulement {topic['source']} pour préparer la suite."),
            ("Exécuter ou transmettre", f"Autoriser : {topic['action']}; transmettre : {topic['handoff']}."),
            ("Revoir le parcours", f"Mesurer : {topic['signals']}.")
        ]
    )
    return dedent(f'''\
    ---
    title: "{topic['title']}"
    date: "2026-08-12"
    dateModified: "2026-08-30"
    description: "{topic['description']}"
    readTime: "16 min"
    author: "Laurent Duplat"
    coverImage: "/images/blog/{topic['slug']}.png"
    coverImageAlt: "{topic['alt']}"
    howToSteps:
    {steps}
    ---

    > **Réponse courte :** un agent IA WhatsApp peut aider à {topic['intent']}, à condition de ne pas confondre un message reçu, une donnée vérifiée et une décision qui engage l’entreprise. Le parcours efficace associe un déclencheur précis, une source métier lisible et une reprise humaine préparée.

    ## Ce que doit résoudre l’agent dans ce cas précis

    Ce guide concerne {topic['audience']}. Le point de départ est **{topic['trigger']}**. C’est important, car un agent ne doit pas ouvrir une conversation seulement parce qu’un mot-clé est présent : l’équipe doit pouvoir expliquer pourquoi ce signal crée une action et quel responsable devient comptable de la suite.

    L’objectif n’est pas de rendre la conversation plus longue ni de remplacer un expert. L’objectif est de {topic['intent']}. Cela impose de distinguer trois niveaux. Le premier est l’information : reconnaître une demande ou confirmer une étape connue. Le deuxième est la préparation : réunir un contexte et produire une tâche. Le troisième est l’engagement : modifier un dossier, donner une réponse qui lie l’entreprise ou trancher un désaccord. Seuls les deux premiers peuvent être largement assistés ; le troisième doit rester soumis à une règle métier explicite.

    ### Le résultat concret attendu

    À la fin d’un bon échange, le client ou le collègue sait ce qui est compris, ce qui a été vérifié et ce qui se passe ensuite. L’équipe, elle, retrouve le contexte sans relire tout le fil WhatsApp. Pour {topic['title'].lower()}, la sortie utile est une combinaison de motif, d’état, de prochaine action et de responsable. Cette sortie est plus robuste qu’un long résumé automatique, parce qu’elle peut être contrôlée dans l’outil de travail.

    ## Cadrer le déclencheur avant d’écrire un seul message

    Décrivez le déclencheur avec un exemple réel. Ici, il s’agit de {topic['trigger']}. Demandez ensuite si le même signal peut aussi correspondre à un autre parcours. Si oui, l’agent doit d’abord qualifier la différence au lieu de choisir une réponse. Un client peut écrire après un rendez-vous pour changer une date, signaler un problème et ajouter une pièce jointe : une seule phrase ne suffit pas toujours à déterminer la bonne file.

    Pour rendre ce cadrage exploitable, associez au déclencheur une condition d’entrée, une condition de sortie et une condition d’arrêt. La condition d’entrée dit ce qui autorise la prise en charge. La condition de sortie décrit le résultat observable, par exemple une demande transmise ou une information confirmée. La condition d’arrêt protège l’équipe : elle couvre {topic['handoff']}. Sans condition d’arrêt, l’agent risque de poursuivre un échange qui exige précisément une vérification humaine.

    ### Questions de cadrage pour l’équipe

    | Question à trancher | Réponse attendue pour ce parcours |
    |---|---|
    | Quel signal démarre le flux ? | {topic['trigger']} |
    | Quelle donnée fait foi ? | {topic['source']} |
    | Que peut faire l’agent ? | {topic['action']} |
    | Quand doit-il s’arrêter ? | {topic['handoff']} |
    | Comment saura-t-on que cela aide ? | {topic['signals']} |

    Cette table doit être validée par le métier avant toute configuration. Elle évite un piège fréquent : demander au modèle de « gérer » une conversation alors que personne n’a défini l’information prioritaire ni le droit d’action associé.

    ## Les données à consulter et celles à laisser de côté

    Dans ce parcours, la référence principale est **{topic['source']}**. Énumérez précisément les champs nécessaires, leur propriétaire et leur fréquence de mise à jour. Une donnée peut être correcte dans le CRM mais inutilisable si elle n’est pas à jour au moment où le client écrit. Inversement, une donnée disponible ne doit pas être reprise simplement parce qu’elle existe. L’agent n’a besoin que de ce qui aide à répondre, à orienter ou à préparer la reprise.

    Avant de connecter un outil, testez trois situations : la donnée est présente et cohérente ; elle est absente ; elle contredit ce que la personne vient d’écrire. Dans le premier cas, l’agent peut {topic['action']}. Dans le deuxième, il demande une précision courte ou crée une tâche. Dans le troisième, il ne sélectionne pas la version la plus pratique : il signale une vérification. Cette règle est particulièrement importante lorsque le fil contient un vocal, une photographie ou plusieurs sujets imbriqués.

    ### Réduire les erreurs de contexte

    Une question bien placée vaut mieux qu’un questionnaire. Pour {topic['intent']}, commencez par l’information qui débloque réellement le prochain geste. Si l’équipe connaît déjà l’identité et le dossier, demander le nom complet n’aide pas. Si le créneau, le document ou la priorité est incertain, demandez uniquement ce point. Puis reformulez ce qui a été compris sans ajouter de détail imaginé.

    Chaque réponse doit aussi laisser une trace utile : la source consultée, le moment du contrôle, l’action éventuellement créée et la raison d’une transmission. Cette trace sert à corriger une règle, à répondre à une contestation ou à identifier un connecteur défaillant. Elle ne justifie pas une conservation sans limite : les accès et durées doivent rester adaptés au besoin réel du parcours.

    ## Déroulé conversationnel recommandé

    Quand la personne écrit dans le contexte de {topic['trigger']}, l’agent commence par reconnaître la demande. Il ne promet pas que tout est terminé. Il confirme le sujet, indique la vérification nécessaire lorsque celle-ci dépend de {topic['source']}, puis pose une question seulement si elle débloque la prochaine étape.

    Après vérification, l’agent choisit une suite limitée. Pour ce guide, cette suite est de {topic['action']}. Le message au client doit être compréhensible, mais l’action interne doit être encore plus claire : quel statut a changé, quelle tâche est ouverte, quel collègue est alerté, quelle information manque. Un message aimable sans trace opérationnelle déplace le travail au lieu de le réduire.

    Enfin, l’agent clôt la micro-étape. Il peut confirmer une réception, annoncer une reprise ou rappeler la prochaine action validée. Il ne doit jamais affirmer une résolution qui n’est pas confirmée dans l’outil métier. Lorsqu’un cas relève de {topic['handoff']}, la transmission contient le motif, les faits déjà fournis, la source consultée et la question exacte qui reste à traiter.

    ### Scénario de recette à exécuter

    {topic['scenario']}

    Faites jouer ce scénario avec une source complète, puis avec une source absente, puis avec une information contradictoire. Vérifiez non seulement le texte de la réponse, mais aussi l’attribution, la tâche créée et la capacité d’un collègue à reprendre le dossier. Un scénario qui semble bon à l’écran peut échouer si l’équipe ne sait pas où retrouver le contexte ou si le statut n’est pas traçable.

    ## Les limites qui améliorent réellement le service

    Dans {topic['title'].lower()}, le risque principal n’est pas une réponse trop courte. C’est une réponse trop sûre alors qu’elle ne repose sur aucune preuve métier. L’agent doit donc pouvoir dire qu’une vérification est en cours, demander un élément précis et transmettre sans forcer le client à répéter toute son histoire. Cette transparence est un signe de qualité, pas un échec de l’automatisation.

    Les limites à écrire noir sur blanc concernent notamment {topic['handoff']}. Ajoutez les termes sensibles propres à votre activité, les horaires ou règles de disponibilité, les changements que l’agent n’a pas le droit d’effectuer et le rôle du responsable de reprise. Une limite est utile seulement si elle déclenche un comportement observable : message de prudence, création de tâche, notification ou transfert vers une file définie.

    ### Confidentiel ne veut pas dire opaque

    Les échanges peuvent contenir des coordonnées, des pièces jointes, des attentes commerciales ou des informations personnelles. Informez les personnes de l’usage du canal lorsque c’est nécessaire, minimisez les données reprises dans les briefs et limitez les accès à ce que chaque rôle doit réellement connaître. Pour ce flux, le besoin de partage n’autorise pas à recopier toute la conversation : un résumé factuel et sourcé est généralement plus utile qu’un export brut.

    Une attention renforcée est nécessaire si un message fait apparaître une donnée sensible ou une demande individuelle importante. Le traitement ne doit pas être décidé par une réponse automatique seule. L’agent signale, redirige et conserve le minimum de contexte permettant à la personne habilitée d’agir.

    ## Mesurer le parcours pour le corriger

    Les indicateurs de ce cas sont : **{topic['signals']}**. Lisez-les ensemble, au rythme choisi par l’équipe. Un faible volume de reprises n’est pas automatiquement un succès : il peut aussi révéler qu’un client abandonne ou qu’une erreur n’est jamais remontée. À l’inverse, beaucoup de transmissions pendant un pilote peuvent être saines si elles évitent une mauvaise promesse.

    Sélectionnez régulièrement quelques conversations représentatives et examinez cinq points : le motif a-t-il été compris, la bonne donnée a-t-elle été consultée, la prochaine action était-elle autorisée, le résumé est-il fidèle et la reprise était-elle possible sans relire tout le fil ? Chaque erreur doit produire une décision concrète : corriger une source, préciser une règle, modifier le routage, ajouter un test ou maintenir le cas chez un humain.

    ### Passage à une version plus large

    N’élargissez {topic['title'].lower()} que lorsque le pilote montre une source métier fiable, des limites comprises et une reprise réellement opérante. L’extension peut porter sur un second type de demande, une nouvelle équipe ou une action supplémentaire, mais jamais sur tout le périmètre d’un coup. Gardez une version de la règle, la date de son changement et le responsable qui l’a validée : cette discipline rend l’amélioration visible et réversible.

    {topic_playbook(topic)}

    {evidence(topic)}

    ## Pour aller plus loin

    {links(topic)}

    Ces ressources internes prolongent une étape voisine du parcours. Elles servent à résoudre le prochain problème du lecteur, pas à gonfler artificiellement le maillage.

    ## Questions fréquentes

    ### L’agent peut-il traiter ce type de demande sans intervention humaine ?

    Il peut assister l’étape autorisée de {topic['action']}, quand la donnée de référence est disponible et cohérente. Les situations liées à {topic['handoff']} doivent être transmises avec un résumé exploitable.

    ### Quelle est la première règle à tester ?

    Testez un cas complet à partir de {topic['trigger']}, puis le même cas avec une donnée manquante. Si l’agent sait demander une précision ou passer la main au lieu d’inventer, le socle est solide.

    ### Quel contrôle garder après le lancement ?

    Relisez les cas marqués par {topic['signals']}, vérifiez les sources consultées et faites corriger les règles par le métier. Un [audit gratuit](/fr/contact) peut servir à cadrer ce pilote avec vos équipes.
    ''')


CONTEXTUAL_NAMES = {
    "agent-ia-whatsapp-onboarding-client": "d’onboarding client",
    "agent-ia-whatsapp-documents-manquants": "de collecte documentaire",
    "agent-ia-whatsapp-planning-interventions": "de planification d’intervention",
    "agent-ia-whatsapp-suivi-intervention": "de suivi d’intervention",
    "agent-ia-whatsapp-satisfaction-client": "de retour de satisfaction",
    "agent-ia-whatsapp-renouvellement-client": "de préparation au renouvellement",
    "agent-ia-whatsapp-gestion-urgence": "de qualification d’urgence",
    "agent-ia-whatsapp-compte-rendu-commercial": "de compte rendu commercial",
    "agent-ia-whatsapp-preparation-rendez-vous": "de préparation de rendez-vous",
    "agent-ia-whatsapp-brief-equipe": "de passation d’équipe",
    "agent-ia-whatsapp-qualification-projet": "de qualification de projet",
    "agent-ia-whatsapp-analyse-conversations": "d’analyse conversationnelle",
}


def contextualize_article(content, topic):
    """Make recurring operational language specific to the reader's job-to-be-done."""
    label = CONTEXTUAL_NAMES[topic["slug"]]
    replacements = [
        (r"\bl’agent\b", f"l’assistant {label}"),
        (r"\bL’agent\b", f"L’assistant {label}"),
        (r"\bun agent\b", f"un assistant {label}"),
        (r"\bUn agent\b", f"Un assistant {label}"),
        (r"\bl’\u00e9quipe\b", f"l’équipe {label}"),
        (r"\bL’\u00e9quipe\b", f"L’équipe {label}"),
        (r"\bune \u00e9quipe\b", f"une équipe {label}"),
        (r"\bla conversation\b", f"la conversation {label}"),
        (r"\bune conversation\b", f"une conversation {label}"),
        (r"\ble parcours\b", f"le parcours {label}"),
        (r"\bun parcours\b", f"un parcours {label}"),
        (r"\bla demande\b", f"la demande {label}"),
        (r"\bune demande\b", f"une demande {label}"),
        (r"\bla reprise\b", f"la reprise {label}"),
        (r"\bune reprise\b", f"une reprise {label}"),
        (r"\bla source\b", f"la source {label}"),
        (r"\bune source\b", f"une source {label}"),
        (r"\bla r\u00e8gle\b", f"la règle {label}"),
        (r"\bune r\u00e8gle\b", f"une règle {label}"),
        (r"\ble contexte\b", f"le contexte {label}"),
        (r"\bun contexte\b", f"un contexte {label}"),
        (r"\bla v\u00e9rification\b", f"la vérification {label}"),
        (r"\bune v\u00e9rification\b", f"une vérification {label}"),
        (r"\bla donn\u00e9e\b", f"la donnée {label}"),
        (r"\bune donn\u00e9e\b", f"une donnée {label}"),
    ]
    for pattern, replacement in replacements:
        content = re.sub(pattern, replacement, content)
    return content


def main():
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--force", action="store_true")
    args = parser.parse_args()
    for topic in TOPICS:
        path = BLOG / f"{topic['slug']}.mdx"
        if path.exists() and not args.force:
            raise SystemExit(f"Refusing to overwrite existing article: {path.name}")
        # The MDX template is indented for readability in this Python file.  Remove
        # that shared four-space baseline before writing: frontmatter delimiters must
        # start in column zero or gray-matter renders the whole article as code.
        content = re.sub(r"(?m)^ {4}", "", distinguish_long_paragraphs(article(topic), topic))
        # Interpolated YAML step bodies do not inherit the surrounding template
        # indentation, so restore their required nesting after baseline removal.
        content = re.sub(r"(?m)^text:", "    text:", content)
        path.write_text(content, encoding="utf-8", newline="\n")
        print(path.name)


if __name__ == "__main__":
    main()
