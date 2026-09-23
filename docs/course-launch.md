# Lancement — Claude Code en pratique

## Routes

- Landing publique : `/fr/formation-claude-code`
- Dashboard interne : `/fr/formation-claude-code/dashboard`

Le dashboard renvoie volontairement une 404 tant que son secret d'accès n'est pas configuré.

## Variables d'environnement à configurer

| Variable | Usage | Requis pour |
| --- | --- | --- |
| `COURSE_DASHBOARD_TOKEN` | Secret d'au moins 24 caractères pour l'espace interne | Ouvrir le dashboard |
| `RESEND_API_KEY` | Clé serveur Resend | Inscription à la séquence et lecture du volume d'audience |
| `RESEND_AUDIENCE_ID` | Audience Resend réservée aux inscrits consentants | Inscription à la séquence et lecture du volume d'audience |
| `COURSE_CHECKOUT_URL` | Payment Link HTTPS correspondant au produit | Activer l'achat direct |
| `COURSE_DELIVERY_URL` | Espace ou processus de livraison après paiement | Autoriser une campagne de vente |

Ne jamais inscrire une personne issue d'une liste achetée ou sans consentement valable. Le formulaire de
la landing enregistre la source, l'horodatage de consentement et la version du texte de consentement.

## Envoi des emails

Le dashboard affiche les cinq messages, leur cadence et les UTM. Il ne contient pas de bouton d'envoi :
un envoi est un acte commercial irréversible, qui doit être revu avec l'audience, l'expéditeur, le lien de
paiement et la livraison réellement prêts. Les métriques de délivrance, ouverture et clic doivent être
reliées à un stockage d'événements ou au tableau de bord Resend avant toute automatisation d'envoi.
