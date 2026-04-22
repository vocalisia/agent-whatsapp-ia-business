/* eslint-disable */
import type { EmailTemplate, EmailVariables } from "../types";

export const urgentFr: EmailTemplate[] = [
  {
    id: "urgent-fr-1",
    subjectVariants: [
      "73% des leads WhatsApp de {{company}} partent ailleurs",
      "{{firstName}} — hémorragie commerciale silencieuse",
      "Combien {{company}} perd ce week-end ?",
    ],
    body: ({ firstName, company }: EmailVariables) => `${firstName},

Question directe : quand un prospect écrit sur WhatsApp à ${company} à 19h un vendredi, qui répond ?

73% des leads WhatsApp B2B partent chez le concurrent qui répond avant 1h. Votre équipe ne peut pas tenir 24/7. Nous, oui.

Notre IA répond en 8 secondes à TOUT — vocaux, photos, docs. Qualifie en BANT. Transfère à l'humain uniquement les leads chauds.

Si ça t'intéresse de stopper cette fuite : audit gratuit 30 min, on te montre exactement combien tu perds et comment on le récupère.

→ https://agentic-whatsup.com/fr/urgent?utm_source=cold&utm_campaign=urgent-fr&utm_content=e1

Laurent
`,
  },
  {
    id: "urgent-fr-2",
    delayDays: 3,
    subjectVariants: [
      "{{firstName}}, 3 leads perdus depuis vendredi",
      "Re: hémorragie {{company}}",
      "Chaque heure qui passe...",
    ],
    body: ({ firstName, company }: EmailVariables) => `${firstName},

Je remonte le fil.

Pendant que tu lis ce mail, 2 ou 3 prospects ont probablement déjà écrit à ${company} sur WhatsApp depuis vendredi soir. Sans réponse = chez le concurrent.

Étude HubSpot : après 4h sans réponse, le lead est cliniquement mort.

L'audit 30 min sert à mesurer ÇA précisément. Tu vois le volume exact que tu perds chaque semaine.

→ https://agentic-whatsup.com/fr/urgent?utm_source=cold&utm_campaign=urgent-fr&utm_content=e2

Laurent
`,
  },
  {
    id: "urgent-fr-3",
    delayDays: 7,
    subjectVariants: [
      "J'archive — {{firstName}}",
      "Dernière relance {{company}}",
      "OK je lâche",
    ],
    body: ({ firstName, company }: EmailVariables) => `${firstName},

Dernier message.

Soit le problème "fuite de leads WhatsApp" n'en est pas un pour ${company} — parfait, j'archive.
Soit tu veux savoir le volume exact que tu perds — 30 min, gratuit, chiffré.

Un "non" et je te laisse tranquille.

→ https://agentic-whatsup.com/fr/urgent?utm_source=cold&utm_campaign=urgent-fr&utm_content=e3

Laurent
`,
  },
];
