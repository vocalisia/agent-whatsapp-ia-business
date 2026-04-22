/* eslint-disable */
import type { EmailTemplate, EmailVariables } from "../types";

export const socialFr: EmailTemplate[] = [
  {
    id: "social-fr-1",
    subjectVariants: [
      "340 PME européennes — {{company}} manque le train ?",
      "{{firstName}}, ton secteur bouge vite",
      "47 agences immo, 38 cliniques, 52 SaaS — et {{company}} ?",
    ],
    body: ({ firstName, company }: EmailVariables) => `${firstName},

340 PME européennes utilisent déjà une IA WhatsApp pour qualifier leurs leads et prendre les RDV. Parmi elles : 47 agences immo, 38 cliniques, 52 agences marketing.

Résultat mesuré sur 6 mois : conversion lead→RDV passée de 14% à 31% (+2.3×). L'équipe humaine libérée de 50% de charge admin.

J'ai une short-list de 3 ou 4 PME de ton secteur à équiper ce trimestre. Si ${company} est intéressée, 30 min d'audit gratuit pour voir si le match est bon.

→ https://agentic-whatsup.com/fr/social?utm_source=cold&utm_campaign=social-fr&utm_content=e1

Laurent
Agentic WhatsApp
`,
  },
  {
    id: "social-fr-2",
    delayDays: 3,
    subjectVariants: [
      "{{firstName}}, 2 places restantes ce trimestre",
      "Re: ton secteur bouge",
      "Un de tes concurrents m'a répondu",
    ],
    body: ({ firstName, company }: EmailVariables) => `${firstName},

Je relance rapidement.

Une étude interne sur les 340 PME équipées : les entreprises qui attendent +6 mois perdent en moyenne 8% de parts de marché à ceux qui ont basculé.

Raison simple : l'IA répond quand l'humain dort. Ton concurrent capte ton prospect pendant la nuit du jeudi.

L'audit 30 min te dit précisément où ${company} se situe vs les 340 PME déjà équipées. Tu vois les benchmarks réels de ton secteur.

→ https://agentic-whatsup.com/fr/social?utm_source=cold&utm_campaign=social-fr&utm_content=e2

Laurent
`,
  },
  {
    id: "social-fr-3",
    delayDays: 7,
    subjectVariants: [
      "J'archive {{company}} — {{firstName}}",
      "Dernière chance ce trimestre",
      "On se parle ou pas ?",
    ],
    body: ({ firstName, company }: EmailVariables) => `${firstName},

Dernier message avant archivage.

Les 340 PME équipées ne sont pas un club fermé — mais les slots ce trimestre sont limités à ~30 nouvelles entreprises (capacité équipe).

Soit ${company} veut voir les benchmarks de ton secteur — 30 min gratuit.
Soit c'est pas le bon timing — je te relance dans 6 mois.

Réponds juste un mot.

→ https://agentic-whatsup.com/fr/social?utm_source=cold&utm_campaign=social-fr&utm_content=e3

Laurent
`,
  },
];
