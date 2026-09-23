export type CourseEmailStep = {
  id: "e1" | "e2" | "e3" | "e4" | "e5";
  day: number;
  angle: string;
  subject: string;
  preview: string;
  objective: string;
  cta: string;
  campaign: string;
};

export const courseEmailSequence: CourseEmailStep[] = [
  {
    id: "e1",
    day: 0,
    angle: "Le coût des petits sujets qui restent ouverts",
    subject: "Vos petites idées ne devraient pas attendre le prochain devis",
    preview: "Reprendre la première version et le contrôle des tâches qui s'accumulent.",
    objective: "Faire reconnaître la dépendance créée par les micro-livraisons externes.",
    cta: "Voir la formation",
    campaign: "claude-code-e1",
  },
  {
    id: "e2",
    day: 2,
    angle: "Ce que l'on internalise, et ce que l'on garde aux experts",
    subject: "L'autonomie IA ne consiste pas à tout faire soi-même",
    preview: "Garder le cadrage, la première version et la recette ; déléguer l'expertise à forte responsabilité.",
    objective: "Positionner le cours comme un système d'autonomie encadrée, pas comme une promesse de remplacement.",
    cta: "Voir les 10 modules",
    campaign: "claude-code-e2",
  },
  {
    id: "e3",
    day: 4,
    angle: "Objection temps",
    subject: "« Je n'ai pas le temps d'apprendre » est souvent le symptôme",
    preview: "Commencer par une tâche fréquente, sûre et mesurable plutôt que vouloir tout automatiser.",
    objective: "Réduire l'objection de temps par une première application limitée.",
    cta: "Recevoir les modalités",
    campaign: "claude-code-e3",
  },
  {
    id: "e4",
    day: 6,
    angle: "Objection technique",
    subject: "Vous n'avez pas besoin d'écrire le code. Vous devez savoir accepter un livrable.",
    preview: "Un bon pilotage commence par le périmètre, les critères d'acceptation et la reprise humaine.",
    objective: "Répondre aux non-techniciens sans minimiser le besoin de vérification.",
    cta: "Découvrir la méthode",
    campaign: "claude-code-e4",
  },
  {
    id: "e5",
    day: 8,
    angle: "Offre et décision",
    subject: "Le programme Claude Code en pratique est à 297 €",
    preview: "Dix modules, des modèles de travail et des modalités transparentes avant tout paiement.",
    objective: "Présenter l'offre et inviter uniquement les personnes prêtes à appliquer une première tâche.",
    cta: "Demander le lien sécurisé",
    campaign: "claude-code-e5",
  },
];

export const courseTrackingConvention = {
  source: "newsletter",
  medium: "email",
  landingPath: "/fr/formation-claude-code",
};
