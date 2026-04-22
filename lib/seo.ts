const BASE_URL = "https://agentic-whatsup.com";
const LOCALES = ["fr", "en", "de", "nl"] as const;

type Alternates = {
  canonical: string;
  languages: Record<string, string>;
};

export function buildAlternates(locale: string, path: string = ""): Alternates {
  const clean = path ? (path.startsWith("/") ? path : `/${path}`) : "";
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l] = `${BASE_URL}/${l}${clean}`;
  languages["x-default"] = `${BASE_URL}/fr${clean}`;
  return {
    canonical: `${BASE_URL}/${locale}${clean}`,
    languages,
  };
}
