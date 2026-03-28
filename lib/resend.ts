import { Resend } from "resend";

export function getResend(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error("RESEND_API_KEY is not configured.");
  }
  return new Resend(key);
}

export const TO_EMAIL = process.env.RESEND_TO_EMAIL ?? "contact@example.com";
