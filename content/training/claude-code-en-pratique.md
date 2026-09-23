---
title: "Claude Code en pratique — guide de production du programme"
status: "brouillon de formation"
audience: "Dirigeants et indépendants non techniques"
format: "6 modules avec exercices, modèles et revue humaine"
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

## Module 1 — Préparer un terrain de travail propre

**Objectif :** créer un espace de test distinct d'un environnement de production.

- Identifier les données, répertoires et services hors périmètre.
- Créer ou vérifier un dépôt Git et une sauvegarde récupérable.
- Retirer les secrets, fichiers clients et exports sensibles du jeu de démonstration.
- Écrire une fiche de mission : résultat, utilisateur, contrainte, source de vérité, test attendu.

**Exercice :** transformer une demande vague (« améliore mon site ») en une mission limitée comprenant
une page concernée, un résultat attendu et une méthode de vérification.

**Livrable :** fiche de cadrage d'une page.

## Module 2 — Installer et démarrer sans raccourci risqué

**Objectif :** installer et diagnostiquer Claude Code selon la documentation officielle en vigueur.

- Vérifier le système, Node.js et le terminal disponibles.
- Installer puis lancer `claude doctor` pour vérifier l'installation.
- Comprendre l'authentification et les coûts associés au compte choisi.
- Lire chaque permission demandée et garder le périmètre minimal.

**Point de sécurité :** le programme ne normalise pas le contournement généralisé des permissions.
Toute option qui les ignore ne peut être étudiée que dans un environnement isolé, sans secrets ni
données réelles, avec une explication de son impact.

**Exercice :** installer Claude Code dans un dossier de démonstration et établir une liste des actions
autorisées ou interdites pour cet exercice.

**Livrable :** check-list d'environnement.

## Module 3 — Écrire un brief opérable

**Objectif :** transformer une intention métier en consigne vérifiable.

Le modèle de brief contient :

1. le contexte et les fichiers concernés ;
2. le résultat attendu ;
3. les contraintes techniques, éditoriales ou réglementaires ;
4. ce qui ne doit pas être modifié ;
5. les critères d'acceptation et le test demandé ;
6. le format attendu pour le compte rendu.

**Exercice :** rédiger deux versions d'un même brief, l'une vague et l'autre testable, puis comparer
les résultats obtenus.

**Livrable :** bibliothèque initiale de trois briefs réutilisables.

## Module 4 — Livrer par petites étapes

**Objectif :** installer une boucle fiable : comprendre, proposer, modifier, vérifier.

- Demander d'abord une analyse et un plan quand l'impact est incertain.
- Limiter une modification à une unité vérifiable.
- Lire le diff et la sortie des tests avant d'accepter une livraison.
- Conserver un point de retour avant une modification importante.

**Exercice :** demander une amélioration minuscule à un projet de démonstration, examiner le diff et
écrire une décision d'acceptation ou de correction.

**Livrable :** check-list de revue de livraison.

## Module 5 — Sélectionner les premiers cas d'usage

**Objectif :** choisir une tâche qui vaut l'effort sans dépendre de promesses spectaculaires.

Les premiers cas d'usage doivent être fréquents, réversibles, mesurables et peu sensibles. Exemples :

- structurer une documentation interne ;
- contrôler la cohérence d'un fichier de contenu ;
- produire une première version d'une page à faire relire ;
- analyser un échantillon de données anonymisées ;
- préparer une liste de contrôles pour une équipe.

**Exercice :** évaluer cinq tâches selon valeur, risque, réversibilité, données utilisées et besoin de
validation humaine.

**Livrable :** matrice de priorisation des cas d'usage.

## Module 6 — Maintenir un workflow fiable

**Objectif :** ne pas dépendre d'une conversation isolée ou d'un réglage opaque.

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
