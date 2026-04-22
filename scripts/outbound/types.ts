/* eslint-disable */
export interface EmailVariables {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  role?: string;
  industry?: string;
  country?: string;
  locale: "fr" | "en";
}

export interface EmailTemplate {
  id: string;
  delayDays?: number; // 0 for first email, 3 for bump, 7 for breakup
  subjectVariants: string[]; // rotated randomly for inbox variance
  body: (vars: EmailVariables) => string;
}

export interface Lead extends EmailVariables {
  status: "pending" | "sent_1" | "sent_2" | "sent_3" | "replied" | "bounced" | "unsubscribed";
  variant: "roi" | "urgent" | "social";
  lastSentAt?: string; // ISO date
  firstSentAt?: string;
  replies?: number;
}

export interface Sequence {
  variant: "roi" | "urgent" | "social";
  locale: "fr" | "en";
  templates: EmailTemplate[];
}

export function interpolate(str: string, vars: EmailVariables): string {
  return str.replace(/\{\{(\w+)\}\}/g, (_, key) => (vars as unknown as Record<string, string>)[key] ?? `{{${key}}}`);
}

export function pickSubject(variants: string[], vars: EmailVariables): string {
  const pick = variants[Math.floor(Math.random() * variants.length)];
  return interpolate(pick, vars);
}
