import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en", "de", "nl"] as const,
  defaultLocale: "fr",
});

export type Locale = (typeof routing.locales)[number];
