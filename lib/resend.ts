import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);
export const TO_EMAIL = process.env.RESEND_TO_EMAIL ?? "contact@example.com";
