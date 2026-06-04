/* eslint-disable */
import type { EmailTemplate, EmailVariables } from "../types";

export const roiFr: EmailTemplate[] = [
  {
    id: "roi-fr-1",
    subjectVariants: [
      "Question rapide sur {{company}}",
      "{{firstName}}, 1 chiffre qui va t'énerver",
      "Les leads WhatsApp que {{company}} perd chaque jour",
    ],
    body: ({ firstName, company }: EmailVariables) => `Salut ${firstName},

J'ai regardé ${company} rapidement — niche intéressante.

Une stat qui revient sur vos concurrents : 47% des messages WhatsApp clients ne reçoivent jamais de réponse. Sur un panier moyen typique, cela devient une fuite de chiffre d'affaires mesurable vers le concurrent qui répond plus vite.

On a bâti une IA WhatsApp qui répond en 8 secondes (vocaux, photos, docs), qualifie les leads BANT en auto et remplit l'agenda. Déployée en 14 jours.

Tu veux voir le calcul ROI chiffré sur ${company} ? 30 min, zéro argumentaire.

→ https://agentic-whatsup.com/fr/roi?utm_source=cold&utm_campaign=roi-fr&utm_content=e1

Laurent
Agentic WhatsApp
`,
  },
  {
    id: "roi-fr-2",
    delayDays: 3,
    subjectVariants: [
      "Re: Question rapide sur {{company}}",
      "{{firstName}} — 2 chiffres en plus",
      "L'un de vos concurrents a déjà basculé",
    ],
    body: ({ firstName, company }: EmailVariables) => `${firstName},

Je te relance avec 2 chiffres que j'ai oubliés la dernière fois :

1. Temps moyen de réponse WhatsApp B2B = 4h12. Après 1h, conversion divisée par 2.
2. Nos clients passent ce temps à 8 secondes. Résultat : +2.3× de conversion.

Le calcul ROI personnalisé pour ${company}, c'est 30 minutes et c'est gratuit.

Je t'ai laissé un slot direct ici : https://agentic-whatsup.com/fr/roi?utm_source=cold&utm_campaign=roi-fr&utm_content=e2

Laurent
`,
  },
  {
    id: "roi-fr-3",
    delayDays: 7,
    subjectVariants: [
      "Je ferme le dossier {{company}} ?",
      "Dernière tentative — {{firstName}}",
      "{{firstName}}, j'archive notre échange ?",
    ],
    body: ({ firstName, company }: EmailVariables) => `${firstName},

Dernier message promis.

Soit le sujet "IA WhatsApp" n'est pas priorité pour ${company} cette année → je ferme le dossier.
Soit tu veux juste voir le ROI chiffré avant de décider → 30 min, en ligne.

Réponds juste "oui" ou "non" et j'adapte.

→ https://agentic-whatsup.com/fr/roi?utm_source=cold&utm_campaign=roi-fr&utm_content=e3

Laurent
`,
  },
];
