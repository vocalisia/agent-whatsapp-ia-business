import type { BotResponse, QuickReply } from "./WhatsAppSimulator";

const AUDIT_COPY = "cadrage sur audit";

const PUBLIC_PRICE_PATTERNS: Array<[RegExp, string]> = [
  [/\b(?:EUR|USD|GBP|CHF)\s*\d[\d\s.,]*(?:\s*(?:HT|TTC|\/\s?mois|par mois|per month|\/mo|\/month|mois|voyage))?/gi, AUDIT_COPY],
  [/(?:\u20ac|€|\$|£)\s*\d[\d\s.,]*(?:\s*(?:HT|TTC|\/\s?mois|par mois|per month|\/mo|\/month|mois|voyage))?/gi, AUDIT_COPY],
  [/\b\d[\d\s.,]*(?:\s*(?:\u20ac|€|EUR|CHF|USD|GBP|euros?|dollars?|francs(?:\s+suisses)?|pounds?|£))(?:\s*(?:HT|TTC|\/\s?mois|par mois|per month|\/mo|\/month|mois|voyage))?/gi, AUDIT_COPY],
  [/\bestimation personnalis(?:ée|ee)\b/gi, AUDIT_COPY],
  [/\b(?:à partir de|a partir de|starts at|from|ab|vanaf)\s+cadrage sur audit\b/gi, AUDIT_COPY],
  [/\b(?:forfait|package|plan)\s+(?:standard|premium|pro|starter|business)?\s*:?\s*cadrage sur audit\b/gi, AUDIT_COPY],
  [/\bgrille budg[eé]taire\b/gi, "cadrage des options"],
  [/\bdevis instantan[eé]\b/gi, "cadrage express"],
  [/\bdevis\s+(?:auto|habitation|sant[eé]|pro|voyage)?\s*express\b/gi, "cadrage express"],
  [/\b(?:tarifs?|tarifaire|tarification)\b/gi, "cadrage"],
  [/\b(?:pricing|price list|prices?|costs?)\b/gi, "scope"],
  [/\b(?:preise?|kosten|kostet)\b/gi, "Umfang"],
  [/\b(?:prijzen|prijs|tarieven|kosten)\b/gi, "scope"],
  [/\b[-–]\s?\d+\s*%\s+(?:pour|réservation|reservation|souscription|discount)[^\n]*/gi, "Offre selon disponibilite"],
  [/\b\d+\s*%\s+(?:de remise|discount|pour|réservation|reservation|souscription)[^\n]*/gi, "Offre selon disponibilite"],
];

export function sanitizeSimulatorCopy(value: string): string {
  return PUBLIC_PRICE_PATTERNS.reduce(
    (clean, [pattern, replacement]) => clean.replace(pattern, replacement),
    value
  );
}

export function sanitizeQuickReplies(replies?: QuickReply[]): QuickReply[] {
  return (replies ?? []).map((reply) => ({
    ...reply,
    label: sanitizeSimulatorCopy(reply.label),
  }));
}

export function sanitizeBotResponse(response: BotResponse): BotResponse {
  return {
    ...response,
    text: sanitizeSimulatorCopy(response.text),
    quickReplies: sanitizeQuickReplies(response.quickReplies),
  };
}
