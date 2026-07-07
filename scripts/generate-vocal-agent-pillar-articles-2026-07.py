#!/usr/bin/env python3
"""Generate 30 voice-agent pillar articles and dedicated photo covers."""

from __future__ import annotations

import argparse
import base64
import importlib.util
import json
import os
import re
import time
import urllib.request
from urllib.parse import quote
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
BLOG_DIR = ROOT / "content" / "blog"
IMG_DIR = ROOT / "public" / "images" / "blog"
DATE = "2026-07-06"

KEYWORDS = [
    "agent vocal ia",
    "assistant vocal ia",
    "voice agent ia",
    "agent téléphonique ia",
    "agent vocal entreprise",
    "chatbot vocal ia",
    "solution agent vocal ia",
    "agent vocal pme",
]

SOURCES = {
    "meta_platform": (
        "Meta - WhatsApp Business Platform",
        "https://whatsappbusiness.com/products/business-platform/",
        "source officielle sur les conversations client, le support, le commerce et les intégrations WhatsApp Business.",
    ),
    "meta_hub": (
        "Meta - WhatsApp Business Developer Hub",
        "https://whatsappbusiness.com/developers/developer-hub/",
        "documentation officielle pour construire, tester et intégrer la plateforme WhatsApp Business.",
    ),
    "cnil_chatbots": (
        "CNIL - Chatbots et droits des personnes",
        "https://www.cnil.fr/fr/chatbots-les-conseils-de-la-cnil-pour-respecter-les-droits-des-personnes",
        "référence institutionnelle sur information des personnes, données sensibles, cookies et droits RGPD.",
    ),
    "cnil_voice": (
        "CNIL - Livre blanc assistants vocaux",
        "https://www.cnil.fr/fr/votre-ecoute-la-cnil-publie-son-livre-blanc-sur-les-assistants-vocaux",
        "référence française dédiée aux assistants vocaux, à la voix, à l'écoute et aux données personnelles.",
    ),
    "nist_rmf": (
        "NIST - AI Risk Management Framework",
        "https://www.nist.gov/itl/ai-risk-management-framework",
        "cadre institutionnel pour gouverner les risques IA, la mesure, la robustesse et la confiance.",
    ),
    "oecd_ai": (
        "OCDE - Principes sur l'intelligence artificielle",
        "https://oecd.ai/en/ai-principles",
        "principes intergouvernementaux sur robustesse, transparence, responsabilité et valeurs humaines.",
    ),
    "eu_ai": (
        "Commission européenne - AI Act",
        "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
        "cadre européen sur les systèmes d'IA, la transparence et les obligations selon les usages.",
    ),
    "bcg_agents": (
        "BCG - AI agents",
        "https://www.bcg.com/capabilities/artificial-intelligence/ai-agents",
        "analyse cabinet de conseil sur composants, workflows et impact opérationnel des agents IA.",
    ),
    "bcg_cx": (
        "BCG - AI agents and customer experience",
        "https://www.bcg.com/publications/2025/how-ai-agents-opening-golden-era-customer-experience",
        "analyse cabinet sur agents IA, expérience client et orchestration des parcours.",
    ),
    "deloitte_contact": (
        "Deloitte Digital - Generative AI in customer service",
        "https://www.deloittedigital.com/us/en/insights/research/generative-ai-customer-service.html",
        "analyse cabinet sur l'IA générative en service client, les tâches de documentation et la collaboration humain-machine.",
    ),
    "mckinsey_care": (
        "McKinsey - Gen AI in customer care",
        "https://www.mckinsey.com/capabilities/operations/our-insights/gen-ai-in-customer-care-early-successes-and-challenges",
        "retour cabinet sur premiers succès, limites et conditions d'adoption en relation client.",
    ),
    "google_helpful": (
        "Google Search Central - Contenu utile et fiable",
        "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
        "référence officielle sur sources claires, expertise, fiabilité et contenu conçu pour les personnes.",
    ),
}

ARTICLES = [
    ("agent-vocal-ia-guide-entreprise-2026", "Agent vocal IA : guide entreprise", "agent vocal ia", "déployer un agent vocal IA pour répondre, qualifier et transférer les appels sans perdre le contrôle humain", "une entreprise reçoit des appels entrants, des messages vocaux WhatsApp et des demandes de rendez-vous qui doivent être triés rapidement", "laisser une voix automatisée promettre une action sans source fiable ni reprise humaine", "relier téléphonie, WhatsApp, CRM, journalisation et supervision dans un parcours unique", ["cnil_voice", "nist_rmf", "bcg_agents", "deloitte_contact"], ["transcription-vocale-whatsapp-ia", "agent-ia-whatsapp-messages-vocaux-photos-documents", "whatsapp-ai-assistant-guide-2026"], "French enterprise operations meeting around voice AI call routing, smartphone and headset on table"),
    ("assistant-vocal-ia-service-client", "Assistant vocal IA : service client", "assistant vocal ia", "utiliser un assistant vocal IA pour aider le support à comprendre, résumer et router les demandes client", "un service client reçoit appels, vocaux et messages WhatsApp, puis doit transmettre le bon résumé à la bonne équipe", "automatiser la réponse finale sur des demandes sensibles qui devraient rester assistées", "commencer par transcription, résumé, suggestion de réponse et transfert humain avant l'autonomie", ["deloitte_contact", "mckinsey_care", "cnil_chatbots", "nist_rmf"], ["whatsapp-ai-assistant-support-client-2026", "service-client-whatsapp-messages-vocaux", "agent-ia-whatsapp-escalade-humaine"], "customer service advisor with headset reviewing AI voice transcript beside smartphone"),
    ("voice-agent-ia-definition-usages", "Voice agent IA : définition et usages", "voice agent ia", "comprendre ce qu'un voice agent IA peut faire entre appels, vocaux WhatsApp, CRM et centre de contact", "une direction compare voicebot, assistant, agent IA et centre d'appel augmenté avant de choisir une architecture", "mélanger vocabulaire marketing et capacité réelle d'action dans les outils métier", "séparer écoute, compréhension, décision, action autorisée et transfert", ["bcg_agents", "deloitte_contact", "nist_rmf", "google_helpful"], ["whatsapp-ai-agent-guide-operations-2026", "agent-ia-whatsapp-vs-chatbot", "whatsapp-ai-agent-architecture-crm-2026"], "strategy workshop comparing voice AI agent workflow, headset, smartphone and blurred laptop"),
    ("agent-telephonique-ia-pme", "Agent téléphonique IA : guide PME", "agent téléphonique ia", "mettre en place un agent téléphonique IA pour une PME sans complexifier le standard ni le CRM", "une PME veut capter les appels manqués, qualifier les demandes simples et confirmer les suites dans WhatsApp", "remplacer le standard humain par un système qui ne sait pas reconnaître les exceptions", "piloter un premier périmètre court avec messages, escalade et résumé automatique", ["cnil_voice", "deloitte_contact", "mckinsey_care", "oecd_ai"], ["agent-vocal-pme-guide", "agent-vocal-pme-standard-virtuel", "whatsapp-team-inbox-guide-2026"], "small business owner checking phone calls and WhatsApp messages at a clean office desk"),
    ("agent-vocal-entreprise-standard-telephonique", "Agent vocal entreprise : standard IA", "agent vocal entreprise", "organiser un agent vocal entreprise comme standard intelligent, pas comme simple répondeur", "une société multi-services doit orienter appels, vocaux, demandes commerciales, support et rendez-vous", "créer une file d'attente automatisée qui cache les urgences au lieu de les prioriser", "router par intention, client, compétence, urgence et preuve de contexte", ["deloitte_contact", "bcg_cx", "nist_rmf", "cnil_voice"], ["agent-vocal-entreprise-supervision", "whatsapp-team-inbox-routage-sla-2026", "service-client-whatsapp-sla-routage"], "enterprise reception desk with headset, phone console and blurred routing dashboard"),
    ("chatbot-vocal-ia-vs-agent-vocal", "Chatbot vocal IA vs agent vocal", "chatbot vocal ia", "distinguer chatbot vocal IA, voicebot à règles et agent vocal connecté aux outils métier", "une équipe voit ses menus vocaux bloquer les clients dès que la demande sort du scénario prévu", "ajouter des branches de dialogue au lieu de traiter la compréhension et la reprise humaine", "définir ce qui relève d'une réponse guidée, d'une assistance et d'une action contrôlée", ["cnil_chatbots", "cnil_voice", "bcg_agents", "google_helpful"], ["agent-ia-whatsapp-vs-chatbot", "no-code-whatsapp-chatbot-limites-agent-ia", "supervision-humaine-agent-ia-whatsapp"], "support team comparing voicebot menu flow and AI agent workflow on blurred screens"),
    ("solution-agent-vocal-ia-choisir", "Solution agent vocal IA : choisir", "solution agent vocal ia", "choisir une solution agent vocal IA selon canal, données, supervision, intégrations et mesure", "une direction compare plusieurs prestataires pour appels entrants, appels sortants et messages vocaux WhatsApp", "choisir sur une démonstration séduisante sans tester données réelles, erreurs et escalade", "évaluer sources, droits d'action, logs, qualité vocale, CRM et reprise humaine", ["nist_rmf", "oecd_ai", "bcg_agents", "mckinsey_care"], ["solution-agent-vocal-ia-integration", "whatsapp-business-solution-provider-guide-2026", "agent-ia-whatsapp-evaluation-qualite"], "executive team evaluating voice AI vendors with checklist, phone and blurred laptop dashboard"),
    ("agent-vocal-pme-guide", "Agent vocal PME : guide pratique", "agent vocal pme", "aider une PME à transformer appels manqués, vocaux et demandes simples en parcours suivi", "une petite équipe perd des opportunités parce que les appels arrivent pendant les rendez-vous, les chantiers ou hors horaires", "lancer une automatisation trop large qui fatigue les clients au lieu de filtrer les demandes", "commencer par qualification simple, rappel, prise de rendez-vous et résumé WhatsApp", ["cnil_voice", "deloitte_contact", "google_helpful", "bcg_cx"], ["agent-telephonique-ia-pme", "agent-vocal-pme-standard-virtuel", "chatbot-whatsapp-rdv-leads"], "small professional office with smartphone, headset, appointment notebook and laptop out of focus"),
    ("agent-vocal-ia-whatsapp-message-vocal", "Agent vocal IA et vocaux WhatsApp", "agent vocal ia", "traiter les messages vocaux WhatsApp comme des demandes structurées avec transcription, résumé et routage", "les clients envoient des vocaux longs, incomplets ou émotionnels que l'équipe doit comprendre rapidement", "transcrire sans tenir compte de l'intention, du ton et du besoin de reprise humaine", "convertir le vocal en résumé actionnable avec source, niveau de confiance et prochaine étape", ["cnil_voice", "cnil_chatbots", "nist_rmf", "meta_platform"], ["transcription-vocale-whatsapp-ia", "service-client-whatsapp-messages-vocaux", "agent-ia-whatsapp-messages-vocaux-photos-documents"], "close-up smartphone recording a voice message on desk with support notes and blurred laptop"),
    ("agent-vocal-ia-crm-rdv", "Agent vocal IA : CRM et RDV", "agent vocal ia", "relier un agent vocal IA au CRM et à l'agenda pour qualifier puis préparer un rendez-vous", "un prospect appelle, laisse un vocal ou écrit sur WhatsApp, puis doit être converti en fiche propre", "créer des fiches CRM incomplètes ou des rendez-vous sans contexte", "capturer intention, coordonnées, besoin, priorité et résumé avant toute confirmation", ["meta_hub", "mckinsey_care", "nist_rmf", "google_helpful"], ["whatsapp-crm-rdv-commercial", "agent-ia-whatsapp-crm-pipeline-commercial", "whatsapp-crm-score-lead"], "sales desk with CRM pipeline blurred, smartphone voice call interface glow and calendar notebook"),
    ("agent-vocal-ia-appels-entrants", "Agent vocal IA : appels entrants", "agent vocal ia", "prioriser les appels entrants avec une IA vocale capable de comprendre l'intention et transférer", "un standard reçoit des demandes commerciales, support, urgentes et administratives sur le même numéro", "traiter toutes les demandes comme équivalentes et perdre les cas importants", "classifier l'intention, vérifier le contexte et router vers la bonne file", ["deloitte_contact", "bcg_cx", "nist_rmf", "cnil_voice"], ["agent-vocal-entreprise-standard-telephonique", "whatsapp-team-inbox-routage-sla-2026", "service-client-whatsapp-centre-contact"], "modern contact center incoming call routing scene with headset and smartphone on desk"),
    ("agent-vocal-ia-appels-sortants", "Agent vocal IA : appels sortants", "agent vocal ia", "encadrer les appels sortants IA pour confirmation, rappel, qualification et suivi sans pression commerciale", "une équipe veut rappeler des prospects, confirmer des rendez-vous ou vérifier une information après demande", "faire de l'automatisation sortante sans contexte, sans préférence client et sans preuve d'origine", "déclencher uniquement depuis une action attendue, tracer la source et proposer une sortie simple", ["cnil_voice", "oecd_ai", "mckinsey_care", "google_helpful"], ["automation-whatsapp-rendez-vous-relance", "whatsapp-marketing-automation-opt-in-segmentation", "journalisation-agent-ia-whatsapp"], "business follow-up call preparation with smartphone, headset, CRM notes and natural office light"),
    ("agent-vocal-ia-recouvrement-relance", "Agent vocal IA : relance client", "agent vocal ia", "utiliser un agent vocal IA pour rappeler, expliquer et orienter une relance client avec tact", "une équipe administrative doit relancer des dossiers en retard sans dégrader la relation", "envoyer une relance vocale froide, trop insistante ou mal contextualisée", "préparer un script court, une option humaine et un résumé dans le dossier", ["cnil_voice", "nist_rmf", "bcg_cx", "google_helpful"], ["agent-ia-whatsapp-recouvrement-creance", "relance-client-preserver-relation", "automatiser-relances-impayes-crm"], "calm finance operations desk with phone headset, client folder and blurred CRM screen"),
    ("agent-vocal-ia-sante-rdv", "Agent vocal IA santé : rendez-vous", "assistant vocal ia", "préparer un assistant vocal IA santé pour orienter les appels de rendez-vous sans traiter de diagnostic", "un cabinet reçoit appels de rendez-vous, changements d'horaire et questions pratiques répétitives", "laisser l'agent répondre à une question médicale qui doit être traitée par un professionnel", "limiter le périmètre aux informations pratiques, à l'agenda et à l'escalade", ["cnil_chatbots", "cnil_voice", "nist_rmf", "eu_ai"], ["chatbot-whatsapp-prise-rendez-vous-medical", "automation-whatsapp-rendez-vous-relance", "supervision-humaine-agent-ia-whatsapp"], "medical reception desk with appointment calendar, smartphone and headset, no patient data visible"),
    ("agent-vocal-ia-immobilier-qualification", "Agent vocal IA immobilier", "agent vocal ia", "qualifier les appels immobiliers avec un agent vocal IA avant transfert au conseiller", "une agence reçoit des demandes de visite, estimation, location et suivi dossier sur plusieurs canaux", "poser trop de questions et perdre le prospect avant l'humain", "collecter uniquement projet, localisation, délai, disponibilité et prochaine étape", ["bcg_cx", "mckinsey_care", "nist_rmf", "google_helpful"], ["agent-ia-whatsapp-b2b-prospection", "whatsapp-crm-score-lead", "chatbot-whatsapp-rdv-leads"], "real estate agency desk with property folder, smartphone call glow and blurred CRM listing"),
    ("agent-vocal-ia-ecommerce-sav", "Agent vocal IA e-commerce SAV", "agent vocal ia", "traiter les appels et vocaux SAV e-commerce avec résumé, statut commande et transfert", "une boutique reçoit suivis de colis, retours, garanties et réclamations par téléphone ou WhatsApp", "répondre sans vérifier le statut réel de commande ou le motif client", "relier vocal, commande, ticket, preuve photo et reprise humaine", ["deloitte_contact", "meta_platform", "nist_rmf", "google_helpful"], ["whatsapp-shopify-integration-sav-retours-2026", "agent-ia-whatsapp-ecommerce-suivi-commande", "chatbot-whatsapp-qualification-sav"], "ecommerce support desk with return parcel, headset, smartphone and blurred order dashboard"),
    ("agent-vocal-ia-assurance-courtier", "Agent vocal IA assurance", "agent téléphonique ia", "préqualifier les appels assurance avec un agent téléphonique IA sans donner de conseil risqué", "un courtier reçoit demandes de devis, suivi de dossier, documents et questions de garantie", "présenter une réponse comme un conseil alors qu'il faut collecter puis transmettre", "séparer qualification, collecte documentaire, résumé et rappel par un conseiller", ["cnil_voice", "nist_rmf", "oecd_ai", "mckinsey_care"], ["agent-vocal-ia-crm-rdv", "whatsapp-crm-historique-client", "agent-ia-whatsapp-securite-donnees"], "insurance brokerage desk with headset, policy folder shapes, smartphone and blurred CRM"),
    ("agent-vocal-ia-centre-appel", "Agent vocal IA centre d'appel", "voice agent ia", "augmenter un centre d'appel avec voice agent IA, assistance conseiller et routage priorisé", "un plateau support veut réduire l'attente tout en gardant une qualité de reprise humaine", "mesurer uniquement le volume au lieu de la résolution et de la qualité perçue", "déployer assistance, triage, résumé, contrôle qualité et escalade progressive", ["deloitte_contact", "mckinsey_care", "bcg_cx", "nist_rmf"], ["service-client-whatsapp-centre-contact", "agent-vocal-ia-appels-entrants", "voice-agent-ia-qualite-kpi"], "contact center supervisor reviewing AI voice analytics with headsets and blurred monitors"),
    ("agent-vocal-ia-transcription-resume", "Agent vocal IA : transcription", "assistant vocal ia", "transformer appels et vocaux en transcriptions, résumés et actions exploitables par l'équipe", "une équipe perd du temps à relire ou écouter des messages longs avant de savoir quoi faire", "confondre transcription brute et compréhension opérationnelle", "produire un résumé court avec intention, contexte, source, action et niveau de confiance", ["cnil_voice", "nist_rmf", "deloitte_contact", "google_helpful"], ["transcription-vocale-whatsapp-ia", "service-client-whatsapp-messages-vocaux", "team-inbox-whatsapp-notes-internes"], "close-up laptop showing blurred transcript blocks beside smartphone voice note and headset"),
    ("agent-vocal-ia-rgpd-cnil", "Agent vocal IA : RGPD et CNIL", "agent vocal ia", "cadrer données vocales, information, consentement, minimisation et supervision pour un agent vocal IA", "une entreprise veut enregistrer, transcrire et exploiter des appels sans surexposer les données personnelles", "collecter plus de voix, d'historique et de contexte que nécessaire", "limiter les données, informer, tracer les accès et supprimer ce qui n'est plus utile", ["cnil_voice", "cnil_chatbots", "eu_ai", "nist_rmf"], ["rgpd-whatsapp-ia-guide", "whatsapp-ia-rgpd-ai-act-suisse", "agent-ia-whatsapp-securite-donnees"], "privacy review desk with headset, smartphone, consent checklist and blurred laptop screen"),
    ("agent-vocal-ia-voicebot-vs-ivr", "Voicebot, IVR et agent vocal IA", "chatbot vocal ia", "comparer IVR, voicebot et agent vocal IA pour choisir le niveau d'autonomie adapté", "un standard classique à menus devient insuffisant dès que les demandes clients sont libres", "réparer une mauvaise expérience IVR avec une couche IA mal gouvernée", "garder les menus pour les choix simples et l'IA pour compréhension, résumé et routage", ["deloitte_contact", "cnil_voice", "bcg_agents", "google_helpful"], ["chatbot-vocal-ia-vs-agent-vocal", "agent-vocal-ia-appels-entrants", "agent-ia-whatsapp-vs-chatbot"], "telephony routing board, headset and smartphone on office desk with blurred flow chart"),
    ("assistant-vocal-ia-commerce-local", "Assistant vocal IA commerce local", "assistant vocal ia", "aider un commerce local à répondre aux appels simples, horaires, disponibilité et rendez-vous", "une petite équipe en boutique ne peut pas décrocher pendant les pics d'activité", "donner une réponse obsolète sur une disponibilité ou un service", "connecter les réponses à une source simple et transférer dès que la demande devient spécifique", ["cnil_voice", "google_helpful", "bcg_cx", "meta_platform"], ["agent-vocal-pme-guide", "chatbot-whatsapp-faq-produit", "whatsapp-shopify-faq-produits"], "local shop counter with smartphone, headset, product shelves blurred and appointment notebook"),
    ("agent-telephonique-ia-multilingue", "Agent téléphonique IA multilingue", "agent téléphonique ia", "router les appels multilingues avec un agent téléphonique IA sans perdre le ton ni le contexte", "une entreprise sert des clients francophones, anglophones, germanophones et néerlandophones", "traduire sans comprendre l'intention métier ou l'urgence réelle", "séparer détection de langue, transcription, résumé, routage et validation", ["oecd_ai", "nist_rmf", "bcg_cx", "deloitte_contact"], ["whatsapp-ai-assistant-crm-multilingue", "service-client-whatsapp-multilingue", "whatsapp-crm-historique-client"], "multilingual support desk with language notes, headset, smartphone and blurred CRM screen"),
    ("agent-vocal-entreprise-supervision", "Agent vocal entreprise : supervision", "agent vocal entreprise", "superviser un agent vocal entreprise avec logs, échantillons, corrections et règles d'arrêt", "une direction support veut prouver que l'agent vocal répond correctement et sait transférer", "croire qu'un prompt initial suffit à maintenir la qualité en production", "mettre en place revue hebdomadaire, motifs d'erreur, seuils d'escalade et corrections", ["nist_rmf", "oecd_ai", "deloitte_contact", "google_helpful"], ["agent-vocal-ia-centre-appel", "voice-agent-ia-qualite-kpi", "agent-ia-whatsapp-evaluation-qualite"], "quality supervisor reviewing voice AI call samples on laptop with headset and checklist"),
    ("chatbot-vocal-ia-base-connaissance", "Chatbot vocal IA : base de connaissance", "chatbot vocal ia", "préparer une base de connaissance fiable pour un chatbot vocal IA ou un agent vocal", "l'équipe veut répondre aux questions fréquentes sans inventer de réponse ni multiplier les transferts", "brancher un modèle sur des documents incomplets, contradictoires ou non maintenus", "structurer les sources, versionner les réponses et indiquer les cas sans réponse", ["google_helpful", "nist_rmf", "cnil_chatbots", "bcg_agents"], ["chatbot-whatsapp-base-connaissance", "agent-ia-whatsapp-controle-reponses", "comment-fonctionne-agent-ia-whatsapp"], "knowledge base review meeting with headset, smartphone and blurred documentation dashboard"),
    ("solution-agent-vocal-ia-integration", "Solution agent vocal IA : intégration", "solution agent vocal ia", "intégrer une solution agent vocal IA avec téléphonie, WhatsApp, CRM, agenda et support", "une entreprise veut un parcours cohérent entre appel, message vocal WhatsApp, fiche CRM et rappel", "juxtaposer des outils qui ne partagent pas le contexte client", "définir un identifiant client, un journal d'événements et des actions autorisées", ["meta_hub", "nist_rmf", "bcg_agents", "mckinsey_care"], ["agent-vocal-ia-crm-rdv", "whatsapp-ai-agent-architecture-crm-2026", "whatsapp-business-api-webhooks-crm"], "integration architecture desk with smartphone, headset, CRM workflow blurred on monitor"),
    ("agent-vocal-pme-standard-virtuel", "Agent vocal PME : standard virtuel", "agent vocal pme", "créer un standard virtuel pour PME qui filtre les demandes et prépare la réponse humaine", "une équipe de quelques personnes veut éviter appels manqués, doublons et oublis de rappel", "faire croire au client que tout est automatisé alors que l'équipe doit reprendre certains cas", "annoncer le périmètre, collecter le minimum utile et proposer une suite claire", ["cnil_voice", "deloitte_contact", "google_helpful", "oecd_ai"], ["agent-telephonique-ia-pme", "agent-vocal-pme-guide", "whatsapp-team-inbox-guide-2026"], "small team virtual reception setup with headset, phone, calendar and laptop blurred"),
    ("voice-agent-ia-qualite-kpi", "Voice agent IA : qualité et KPI", "voice agent ia", "mesurer la qualité d'un voice agent IA avec résolution, transfert, correction et satisfaction", "un responsable veut savoir si l'agent améliore vraiment les conversations vocales", "piloter sur le nombre d'appels traités sans vérifier la pertinence des réponses", "suivre un tableau de bord qualité et relire un échantillon de conversations", ["deloitte_contact", "mckinsey_care", "nist_rmf", "bcg_cx"], ["agent-ia-whatsapp-kpi-tableau-bord", "agent-vocal-entreprise-supervision", "agent-ia-whatsapp-evaluation-qualite"], "voice AI quality dashboard blurred on laptop with headset and review checklist"),
    ("agent-vocal-ia-securite-authentification", "Agent vocal IA : sécurité", "solution agent vocal ia", "sécuriser un agent vocal IA avec authentification, droits d'action et journalisation", "l'agent peut consulter un dossier client ou préparer une action dans un outil métier", "donner trop de droits à une automatisation vocale sans preuve d'identité suffisante", "vérifier identité, limiter les actions, journaliser et bloquer les cas sensibles", ["nist_rmf", "cnil_voice", "eu_ai", "oecd_ai"], ["agent-ia-whatsapp-securite-donnees", "journalisation-agent-ia-whatsapp", "agent-vocal-ia-rgpd-cnil"], "secure voice AI workstation with headset, smartphone, lock object and blurred access dashboard"),
    ("agent-vocal-ia-vocalis-whatsapp", "Agent vocal IA et WhatsApp", "agent vocal ia", "relier appels vocaux, messages WhatsApp et agent IA pour un parcours client continu", "un prospect appelle, envoie un vocal WhatsApp, puis reçoit une confirmation ou un résumé dans le même suivi", "séparer téléphonie et messagerie alors que le client vit une seule conversation", "centraliser contexte, consentement, résumé et prochaine action dans le CRM", ["meta_platform", "cnil_voice", "bcg_cx", "deloitte_contact"], ["agent-ia-whatsapp-messages-vocaux-photos-documents", "transcription-vocale-whatsapp-ia", "whatsapp-ai-assistant-guide-2026"], "integrated voice and WhatsApp customer journey desk with smartphone, headset and CRM blurred"),
]


def source_lines(keys: list[str]) -> str:
    return "\n".join(f"- [{SOURCES[key][0]}]({SOURCES[key][1]}) : {SOURCES[key][2]}" for key in keys)


def link_lines(slugs: list[str]) -> str:
    seen: set[str] = set()
    clean = []
    for slug in [*slugs, "agent-vocal-ia-guide-entreprise-2026", "agent-ia-whatsapp-business", "deployer-agent-ia-whatsapp-guide-operationnel"]:
        if slug not in seen:
            clean.append(slug)
            seen.add(slug)
    return "\n".join(f"- [{slug.replace('-', ' ')}](/fr/blog/{slug})" for slug in clean)


def article_mdx(item: tuple) -> str:
    slug, title, keyword, intent, scenario, risk, method, sources, links, _photo = item
    image = f"/images/blog/{slug}.jpg"
    alt = f"Photo réaliste dédiée à {title.lower()} dans un contexte professionnel avec téléphone, casque audio, ordinateur et supervision humaine."
    return f'''---
title: "{title}"
date: "{DATE}"
dateModified: "{DATE}"
description: "{intent.capitalize()}. Sources reconnues, méthode opérationnelle, maillage Vocalis et CTA audit gratuit 30 min."
readTime: "12 min"
author: "Laurent Duplat"
coverImage: "{image}"
coverImageAlt: "{alt}"
howToSteps:
  - name: "Cartographier les conversations"
    text: "Lister appels, vocaux, messages WhatsApp, motifs de transfert et sources métier avant toute automatisation."
  - name: "Limiter les droits d'action"
    text: "Définir ce que l'agent peut dire, préparer, modifier ou transmettre sans validation humaine."
  - name: "Prévoir la reprise humaine"
    text: "Déclencher un transfert avec résumé, contexte, source consultée et prochaine action recommandée."
  - name: "Mesurer la qualité"
    text: "Relire un échantillon, suivre corrections, escalades, délais, erreurs et satisfaction conversationnelle."
---

![{title}]({image})

> **En bref :** {intent.capitalize()}. Le bon projet ne consiste pas à remplacer les humains par une voix automatique ; il consiste à capter la demande, vérifier la source, préparer l'action utile et transférer dès que le contexte le demande.

## Réponse courte

La recherche **{keyword}** correspond à une intention de décision : l'entreprise veut savoir si une voix IA peut traiter appels, vocaux WhatsApp, demandes de rendez-vous, support ou qualification commerciale sans dégrader la relation client.

Dans le cas le plus courant, {scenario}. Le risque principal est de {risk}. La méthode la plus solide consiste à {method}.

Pour relier ce sujet à l'offre téléphonie IA, la ressource de référence reste [Vocalis.pro](https://vocalis.pro/). Sur AgenticWhatsup, ce cocon explique comment la voix, WhatsApp, le CRM et la supervision humaine peuvent fonctionner ensemble.

## Ce que disent les sources reconnues

{source_lines(sources)}

À citer dans le cadrage : ces sources convergent sur trois exigences. D'abord, une IA conversationnelle doit rester gouvernée. Ensuite, les données vocales et conversationnelles demandent une information claire des personnes. Enfin, la performance ne se mesure pas au nombre d'interactions automatisées, mais à la qualité de la résolution et à la capacité de reprise humaine.

## Architecture recommandée

```text
Appel ou message vocal
-> transcription et détection d'intention
-> agent vocal IA avec règles métier
-> CRM, agenda, support ou base de connaissance
-> réponse, résumé, action autorisée ou transfert humain
-> journal qualité
```

Cette architecture évite l'effet boîte noire. L'agent vocal IA ne doit pas seulement parler : il doit savoir quelle source consulter, quelle action est permise, quelle incertitude bloque la réponse et quel humain doit reprendre.

## Méthode de déploiement

### 1. Partir des conversations réelles

Écoutez ou relisez un échantillon d'appels, messages vocaux WhatsApp et tickets support. Classez chaque échange par intention : information simple, demande commerciale, rendez-vous, suivi, réclamation, pièce jointe, urgence ou transfert.

Ce travail révèle les demandes adaptées à une première automatisation. Les meilleurs candidats sont fréquents, mesurables, peu ambigus et déjà traités de façon répétable par l'équipe.

### 2. Définir la source de vérité

Un agent vocal peut répondre seulement si la source est fiable : CRM, agenda, catalogue, base support, statut de commande ou règle interne validée. Si la source n'existe pas ou n'est pas tenue à jour, l'agent doit demander une précision ou transmettre.

### 3. Séparer assistance et autonomie

Une première version peut simplement transcrire, résumer, proposer une réponse et préparer un transfert. L'autonomie vient ensuite, quand les règles sont testées. Cette progression réduit les erreurs et rend l'équipe plus confiante.

### 4. Prévoir les cas d'arrêt

L'agent doit s'arrêter quand la demande est sensible, contradictoire, émotionnelle, hors périmètre, liée à une donnée personnelle délicate ou associée à une action qui engage l'entreprise.

### 5. Mesurer la qualité

Les indicateurs utiles : taux de reprise humaine, corrections, délai de réponse, résolution, motifs d'escalade, satisfaction, erreurs de source et conversations qui deviennent des suites qualifiées. Le volume seul ne prouve rien.

## Tableau de décision

| Décision | Question opérationnelle | Signal à vérifier |
|---|---|---|
| Canal | Appel, vocal WhatsApp ou les deux ? | Volume, urgence, complexité |
| Source | Quelle donnée fait autorité ? | CRM, agenda, ticket, base documentaire |
| Action | Que peut faire l'agent seul ? | Répondre, résumer, créer une tâche, transférer |
| Sécurité | Quelle information ne doit jamais sortir ? | Données sensibles, identité, historique limité |
| Supervision | Qui relit et corrige ? | Échantillon hebdomadaire, logs, motifs d'erreur |

## Erreurs fréquentes

### Chercher une voix parfaite avant le processus

La qualité vocale compte, mais elle ne remplace pas le processus. Une voix agréable qui répond sans source fiable reste dangereuse pour la relation client.

### Oublier les messages vocaux WhatsApp

Beaucoup de clients passent naturellement de l'appel au vocal WhatsApp. Si les deux canaux ne partagent pas le contexte, l'équipe répète les mêmes questions et perd la continuité.

### Ne pas assumer la reprise humaine

Un agent vocal sérieux doit savoir transférer tôt. La reprise humaine n'est pas un aveu d'échec : c'est une garantie de qualité.

## Maillage interne conseillé

{link_lines(links)}

## Checklist avant pilote

- Une intention prioritaire est choisie.
- Les sources métier sont à jour.
- Les actions autorisées sont limitées.
- Les données vocales sont cadrées.
- Le transfert humain est visible.
- Les conversations test incluent messages courts, longs, flous et contradictoires.
- Le CTA public renvoie vers un [audit gratuit 30 min](/fr/contact), sans grille commerciale.

## FAQ

### Un agent vocal IA peut-il remplacer un standard ?

Il peut absorber les demandes simples, qualifier et router. Il ne doit pas masquer les cas sensibles ni empêcher un transfert humain rapide.

### Quelle différence avec un chatbot vocal IA ?

Un chatbot vocal suit souvent des scénarios. Un agent vocal IA peut comprendre une intention libre, consulter une source, préparer une action et transmettre avec contexte.

### Faut-il connecter le CRM dès le départ ?

Oui si le CRM contient la source utile. Sinon, commencez par transcription, résumé et routage, puis connectez les champs nécessaires.

### Quel est le prochain pas ?

Le plus efficace est de demander un [audit gratuit 30 min](/fr/contact) pour relire les conversations vocales existantes, choisir le premier périmètre et définir les sources à connecter.
'''


def photo_scenes() -> dict[str, tuple[int, str]]:
    scenes = {}
    for index, item in enumerate(ARTICLES):
        slug, _title, _keyword, _intent, _scenario, _risk, _method, _sources, _links, photo = item
        scenes[slug] = (
            104000 + index * 31,
            (
                "RAW photorealistic editorial photo, "
                f"{photo}, modern European business environment, natural daylight, smartphone in foreground "
                "with soft green messaging or call glow, professional headset, laptop screen heavily blurred and unreadable, "
                "realistic hands with normal anatomy, premium documentary business photography, shallow depth of field, "
                "no logos, no brand marks, no readable text, no numbers, no currency, no watermark"
            ),
        )
    return scenes


def write_articles() -> None:
    BLOG_DIR.mkdir(parents=True, exist_ok=True)
    IMG_DIR.mkdir(parents=True, exist_ok=True)
    for item in ARTICLES:
        slug = item[0]
        (BLOG_DIR / f"{slug}.mdx").write_text(article_mdx(item), encoding="utf-8", newline="\n")
    print(f"Generated {len(ARTICLES)} voice-agent MDX articles.")


def generate_photos(selected: list[str] | None = None) -> None:
    script = ROOT / "scripts" / "generate-agentic-whatsup-photo-covers.py"
    spec = importlib.util.spec_from_file_location("agentic_photo_covers", script)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"Cannot load {script}")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    scenes = photo_scenes()
    module.SCENES.update(scenes)
    slugs = selected or [item[0] for item in ARTICLES]
    missing = [slug for slug in slugs if slug not in scenes]
    if missing:
        raise SystemExit(f"Unknown photo slug(s): {', '.join(missing)}")
    pipe = module.load_pipeline()
    for slug in slugs:
        module.generate(pipe, slug)
    print(f"Generated {len(slugs)} photorealistic voice-agent covers.")


def mammouth_request(prompt: str, retries: int = 3) -> bytes:
    key = os.environ.get("MAMMOUTH_API_KEY") or os.environ.get("MAMMOUTH_KEY")
    if not key:
        raise SystemExit("MAMMOUTH_API_KEY or MAMMOUTH_KEY is required for --mammouth-photos.")
    payload = json.dumps(
        {
            "model": "gemini-3.1-flash-image-preview",
            "prompt": prompt,
            "size": "1280x720",
            "n": 1,
        }
    ).encode("utf-8")
    last_error = ""
    for attempt in range(1, retries + 1):
        try:
            req = urllib.request.Request(
                "https://api.mammouth.ai/v1/images/generations",
                data=payload,
                headers={
                    "Authorization": f"Bearer {key}",
                    "Content-Type": "application/json",
                },
                method="POST",
            )
            with urllib.request.urlopen(req, timeout=180) as response:
                data = json.loads(response.read().decode("utf-8"))
            item = data.get("data", [{}])[0]
            if item.get("b64_json"):
                return base64.b64decode(item["b64_json"])
            if item.get("url"):
                with urllib.request.urlopen(item["url"], timeout=180) as image_response:
                    return image_response.read()
            last_error = "No image payload returned"
        except Exception as exc:
            last_error = str(exc)
            time.sleep(3 * attempt)
    raise RuntimeError(f"Mammouth image generation failed: {last_error}")


def save_mammouth_cover(image_bytes: bytes, slug: str) -> None:
    from io import BytesIO

    from PIL import Image, ImageEnhance

    out_path = IMG_DIR / f"{slug}.jpg"
    IMG_DIR.mkdir(parents=True, exist_ok=True)
    image = Image.open(BytesIO(image_bytes)).convert("RGB")
    image = image.resize((1600, 900), Image.Resampling.LANCZOS)
    image = ImageEnhance.Color(image).enhance(0.96)
    image = ImageEnhance.Contrast(image).enhance(1.04)
    image = ImageEnhance.Sharpness(image).enhance(1.04)
    image.save(out_path, "JPEG", quality=90, optimize=True, progressive=True)
    print(f"Wrote {out_path.name} ({out_path.stat().st_size // 1024} KB)")


def pollinations_request(prompt: str, seed: int, retries: int = 3) -> bytes:
    encoded = quote(prompt[:1800])
    url = (
        "https://image.pollinations.ai/prompt/"
        f"{encoded}?width=1600&height=900&seed={seed}&model=flux&nologo=true&enhance=true"
    )
    last_error = ""
    for attempt in range(1, retries + 1):
        try:
            req = urllib.request.Request(
                url,
                headers={
                    "User-Agent": "AgenticWhatsupEditorialImageGenerator/1.0",
                    "Accept": "image/*",
                },
            )
            with urllib.request.urlopen(req, timeout=240) as response:
                return response.read()
        except Exception as exc:
            last_error = str(exc)
            time.sleep(4 * attempt)
    raise RuntimeError(f"Pollinations image generation failed: {last_error}")


def generate_mammouth_photos(selected: list[str] | None = None) -> None:
    scenes = photo_scenes()
    slugs = selected or [item[0] for item in ARTICLES]
    missing = [slug for slug in slugs if slug not in scenes]
    if missing:
        raise SystemExit(f"Unknown photo slug(s): {', '.join(missing)}")
    for index, slug in enumerate(slugs, start=1):
        _seed, scene = scenes[slug]
        prompt = (
            f"{scene}. Create a unique site-owned editorial hero image for agentic-whatsup.com only. "
            "No stock-photo smile, no text overlay, no UI text, no currency, no brand logo."
        )
        print(f"[{index}/{len(slugs)}] Generating Mammouth cover for {slug}...")
        save_mammouth_cover(mammouth_request(prompt), slug)
    print(f"Generated {len(slugs)} Mammouth photorealistic voice-agent covers.")


def generate_pollinations_photos(selected: list[str] | None = None) -> None:
    scenes = photo_scenes()
    slugs = selected or [item[0] for item in ARTICLES]
    missing = [slug for slug in slugs if slug not in scenes]
    if missing:
        raise SystemExit(f"Unknown photo slug(s): {', '.join(missing)}")
    for index, slug in enumerate(slugs, start=1):
        seed, scene = scenes[slug]
        prompt = (
            f"{scene}. Unique custom photorealistic editorial hero photo for this one article on agentic-whatsup.com. "
            "Natural lens realism, no text overlay, no letters, no numbers, no logos, no watermark, no currency, no UI text."
        )
        print(f"[{index}/{len(slugs)}] Generating fallback cover for {slug}...")
        save_mammouth_cover(pollinations_request(prompt, seed), slug)
    print(f"Generated {len(slugs)} fallback photorealistic voice-agent covers.")


def validate_generated() -> None:
    texts = []
    for item in ARTICLES:
        path = BLOG_DIR / f"{item[0]}.mdx"
        if not path.exists():
            raise SystemExit(f"Missing article: {path.name}")
        texts.append(path.read_text(encoding="utf-8"))
    text = "\n".join(texts).lower()
    missing_keywords = [keyword for keyword in KEYWORDS if keyword not in text]
    if missing_keywords:
        raise SystemExit(f"Missing keyword(s): {', '.join(missing_keywords)}")
    forbidden = re.compile(r"[$€£]|(?:EUR|USD|GBP|CHF)\s*\d|\d[\d\s.,]*(?:€|EUR|USD|GBP|CHF)", re.I)
    if forbidden.search("\n".join(texts)):
        raise SystemExit("Forbidden public pricing/currency token detected.")
    forbidden_labels = ["aio", "llm seo", "seo principal", "ancrage seo", "optimisé ia", "optimise ia"]
    if any(label in text for label in forbidden_labels):
        raise SystemExit("Forbidden internal SEO label detected.")
    body_without_urls = re.sub(r"https?://\S+", "", "\n".join(texts))
    if re.search(r"\w\?\w", body_without_urls):
        raise SystemExit("Suspicious question mark inside a word detected; check encoding.")
    print("Voice-agent article validation passed.")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--photos", action="store_true", help="Generate photorealistic covers with local RealVisXL.")
    parser.add_argument("--mammouth-photos", action="store_true", help="Generate photorealistic covers with Mammouth image API.")
    parser.add_argument("--pollinations-photos", action="store_true", help="Generate fallback custom photorealistic covers and save them locally.")
    parser.add_argument("--only", action="append", help="Generate photos only for a specific slug. Can be repeated.")
    parser.add_argument("--validate", action="store_true", help="Validate generated article source files.")
    args = parser.parse_args()

    if args.photos:
        generate_photos(args.only)
        return
    if args.mammouth_photos:
        generate_mammouth_photos(args.only)
        return
    if args.pollinations_photos:
        generate_pollinations_photos(args.only)
        return
    if args.validate:
        validate_generated()
        return
    write_articles()
    validate_generated()


if __name__ == "__main__":
    main()
