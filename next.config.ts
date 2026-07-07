import type { NextConfig } from "next";
import path from "path";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./lib/i18n/request.ts");

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  outputFileTracingIncludes: {
    "/[locale]/blog/[slug]": ["./content/blog/**/*.mdx"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: false,
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  async redirects() {
    return [
      // Tarifs pages
      { source: "/tarifs", destination: "/fr/contact", permanent: true },
      { source: "/fr/tarifs", destination: "/fr/contact", permanent: true },
      { source: "/en/tarifs", destination: "/en/contact", permanent: true },
      { source: "/de/tarifs", destination: "/de/contact", permanent: true },
      { source: "/nl/tarifs", destination: "/nl/contact", permanent: true },
      // Locale service indexes are legacy crawl targets; send them to the canonical service page.
      { source: "/:locale(fr|en|de|nl)/services", destination: "/:locale/services/agent-ia-whatsapp", permanent: true },
      // Ghost pages without locale prefix (legacy URLs Google still indexes)
      { source: "/blog/:slug*", destination: "/fr/blog/:slug*", permanent: true },
      { source: "/blog", destination: "/fr/blog", permanent: true },
      { source: "/services/:slug*", destination: "/fr/services/:slug*", permanent: true },
      { source: "/services", destination: "/fr/services/agent-ia-whatsapp", permanent: true },
      { source: "/secteurs/:slug*", destination: "/fr/secteurs/:slug*", permanent: true },
      { source: "/secteurs", destination: "/fr/secteurs", permanent: true },
      { source: "/comparatif/:slug*", destination: "/fr/comparatif/:slug*", permanent: true },
      { source: "/comparatif", destination: "/fr/comparatif", permanent: true },
      { source: "/auteur/:slug*", destination: "/fr/auteur/:slug*", permanent: true },
      { source: "/cas-clients", destination: "/fr/cas-clients", permanent: true },
      { source: "/integrations", destination: "/fr/integrations", permanent: true },
      { source: "/demo", destination: "/fr/demo", permanent: true },
      { source: "/securite", destination: "/fr/securite", permanent: true },
      { source: "/cookies", destination: "/fr/cookies", permanent: true },
      { source: "/mentions-legales", destination: "/fr/mentions-legales", permanent: true },
      { source: "/politique-confidentialite", destination: "/fr/politique-confidentialite", permanent: true },
      { source: "/roi", destination: "/fr/roi", permanent: true },
      { source: "/urgent", destination: "/fr/urgent", permanent: true },
      { source: "/social", destination: "/fr/social", permanent: true },
      { source: "/agent-commercial-whatsapp", destination: "/fr/agent-commercial-whatsapp", permanent: true },
      { source: "/contact", destination: "/fr/contact", permanent: true },
      // English/DE/NL legal slug aliases
      { source: "/:locale(en|de|nl)/legal", destination: "/:locale/mentions-legales", permanent: true },
      { source: "/:locale(en|de|nl)/privacy-policy", destination: "/:locale/politique-confidentialite", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
