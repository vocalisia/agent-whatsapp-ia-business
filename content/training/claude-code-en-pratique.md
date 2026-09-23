---
title: "Claude Code en pratique — guide de production du programme"
status: "brouillon de formation"
audience: "Dirigeants et indépendants non techniques"
format: "10 modules avec exercices, modèles et revue humaine"
price: "297 EUR"
---

# Claude Code en pratique

Ce document est le socle pédagogique de la formation vendue sur `/fr/formation-claude-code`.
Il ne reprend aucun support d'un tiers. Chaque module doit être enregistré ou animé avec des
démonstrations originales, testées dans un projet de démonstration ne contenant pas de données clients.

## Promesse pédagogique

À l'issue du programme, une personne non technique doit pouvoir :

1. définir un périmètre de travail sûr ;
2. décrire un résultat et ses critères d'acceptation ;
3. demander à Claude Code une intervention limitée ;
4. relire, tester et accepter ou refuser le résultat ;
5. documenter le workflow pour qu'il soit réutilisable par une équipe.

La formation ne promet pas que l'IA remplace un développeur, un juriste, un responsable sécurité ou
une validation humaine. Elle apprend à piloter une contribution de l'IA de façon traçable.

## Module 1 — Fondations : installer et cadrer Claude Code

**Objectif :** installer Claude Code dans un espace de test distinct d'un environnement de production.

- Identifier les données, répertoires et services hors périmètre.
- Créer ou vérifier un dépôt Git et une sauvegarde récupérable.
- Retirer les secrets, fichiers clients et exports sensibles du jeu de démonstration.
- Écrire une fiche de mission : résultat, utilisateur, contrainte, source de vérité, test attendu.

**Exercice :** transformer une demande vague (« améliore mon site ») en une mission limitée comprenant
une page concernée, un résultat attendu et une méthode de vérification.

**Livrable :** environnement de démonstration et fiche de cadrage d'une page.

## Module 2 — Permissions et zones de travail

**Objectif :** choisir un périmètre de permissions adapté au risque de chaque tâche.

- Lire chaque permission demandée et garder le périmètre minimal.
- Distinguer environnement de test, outils de production et données confidentielles.
- Documenter les actions autorisées, les actions interdites et le responsable de validation.

**Point de sécurité :** le programme ne normalise pas le contournement généralisé des permissions.
Toute option qui les ignore ne peut être étudiée que dans un environnement isolé, sans secrets ni
données réelles, avec une explication de son impact.

**Exercice :** établir une liste des actions
autorisées ou interdites pour cet exercice.

**Livrable :** matrice de permissions et check-list d'environnement.

## Module 3 — Instructions de projet et Skills

**Objectif :** transformer une intention métier en consigne vérifiable et réutilisable.

Le modèle de brief contient :

1. le contexte et les fichiers concernés ;
2. le résultat attendu ;
3. les contraintes techniques, éditoriales ou réglementaires ;
4. ce qui ne doit pas être modifié ;
5. les critères d'acceptation et le test demandé ;
6. le format attendu pour le compte rendu.

**Exercice :** rédiger deux versions d'un même brief, l'une vague et l'autre testable, puis comparer
les résultats obtenus.

**Livrable :** bibliothèque initiale de trois briefs et d'un skill ciblé.

## Module 4 — Automatiser les opérations récurrentes

**Objectif :** choisir une tâche fréquente, réversible et mesurable à automatiser en premier.

- Cartographier un processus avant de choisir un outil.
- Évaluer chaque tâche selon sa fréquence, son impact, ses données et son besoin de validation humaine.
- Construire un premier workflow de préparation, contrôle ou documentation.

**Exercice :** évaluer cinq tâches et choisir un premier cas d'usage qui peut être testé sans données
clients ni action irréversible.

**Livrable :** matrice de priorisation et premier workflow documenté.

## Module 5 — Commandes et boucles de contrôle

**Objectif :** installer une boucle fiable : comprendre, proposer, modifier, vérifier.

- Demander d'abord une analyse et un plan quand l'impact est incertain.
- Limiter une modification à une unité vérifiable.
- Lire le diff et la sortie des tests avant d'accepter une livraison.
- Conserver un point de retour avant une modification importante.

**Exercice :** demander une amélioration minuscule à un projet de démonstration, examiner le diff et
écrire une décision d'acceptation ou de correction.

**Livrable :** check-list de revue de livraison.

## Module 6 — Acquisition et campagnes Meta

**Objectif :** produire et évaluer des hypothèses de campagne sans confondre contenu généré et résultat commercial.

- Construire un brief d'offre, des angles, des variantes de messages et une matrice de créas.
- Préparer une page de destination avec critères de validation.
- Définir l'hypothèse, la mesure et le seuil de décision avant de dépenser.

**Exercice :** préparer un plan de test de campagne sans lancer de publicité ni formuler de promesse de performance.

**Livrable :** dossier de test d'acquisition prêt à faire valider.

## Module 7 — SEO, données structurées et visibilité IA

**Objectif :** construire un système éditorial qui part de sources et d'intentions réelles.

- Définir une cible, une intention, une source de preuve et une réponse utile.
- Contrôler les bases techniques : structure de page, liens, métadonnées et données structurées pertinentes.
- Faire relire les affirmations avant publication et mesurer des signaux réels, sans promettre un classement.

**Exercice :** transformer une question client en brief éditorial sourcé, puis préparer sa grille de relecture.

**Livrable :** brief SEO/GEO et check-list de publication.

## Module 8 — Transformer une expertise en formats vidéo

**Objectif :** organiser une chaîne de préparation pour les contenus courts sans automatiser la responsabilité éditoriale.

- Extraire les idées d'une matière source autorisée.
- Préparer script, découpage, sous-titres, descriptions et listes de contrôle.
- Prévoir une relecture humaine du fond, de l'image et des droits utilisés.

**Exercice :** décliner une expertise documentée en une série de trois scripts courts.

**Livrable :** kit de production vidéo et grille de validation.

## Module 9 — Prototyper une offre ou un e-commerce

**Objectif :** concevoir un MVP commercial avant de brancher un paiement, des données clients ou une campagne.

- Définir catalogue, pages, parcours, messages transactionnels et support.
- Distinguer maquette, environnement de recette et environnement de production.
- Vérifier les obligations de paiement, de confidentialité, de taxes et de service client avec les responsables compétents.

**Exercice :** rédiger les critères de recette d'un parcours d'achat fictif, sans données réelles ni paiement actif.

**Livrable :** cahier de recette d'un MVP commercial.

## Module 10 — Ressources et système de mise à jour

**Objectif :** maintenir les méthodes de travail quand les outils, les permissions et les processus évoluent.

- Documenter les instructions de projet et leurs propriétaires.
- Réviser les droits et les intégrations à fréquence définie.
- Suivre un indicateur métier et un indicateur de qualité.
- Prévoir le retour à une étape humaine et la procédure d'incident.

**Exercice :** publier une fiche de gouvernance d'un workflow : propriétaire, sources autorisées,
actions interdites, tests, journalisation, déclencheur de reprise humaine.

**Livrable :** fiche de gouvernance prête à faire valider.

## Modèles à fournir aux participants

1. fiche de cadrage de mission ;
2. modèle de brief testable ;
3. check-list de secrets et données à exclure ;
4. grille de revue de diff ;
5. matrice de priorisation ;
6. fiche de gouvernance ;
7. journal de décisions ;
8. plan de reprise humaine ;
9. fiche de contrôle avant mise en ligne ;
10. rétrospective mensuelle du workflow.

## Sources de mise à jour

Avant chaque cohorte ou mise à jour, vérifier :

- la page officielle d'installation Claude Code ;
- la référence officielle des commandes et options ;
- les éventuels changements de permissions et de configuration ;
- les conditions du compte ou fournisseur effectivement utilisé par les participants.

Ne pas promettre un gain de temps, une position SEO, un revenu ou un niveau d'automatisation sans une
mesure propre au participant et sans contexte d'application.
