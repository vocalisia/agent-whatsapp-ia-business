import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./lib/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
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
      // Ghost pages without locale prefix (legacy URLs)
      { source: "/blog/:slug*", destination: "/fr/blog/:slug*", permanent: true },
      { source: "/blog", destination: "/fr/blog", permanent: true },
      { source: "/services/:slug*", destination: "/fr/services/:slug*", permanent: true },
      { source: "/contact", destination: "/fr/contact", permanent: true },
      // English/DE/NL legal slug aliases
      { source: "/:locale(en|de|nl)/legal", destination: "/:locale/mentions-legales", permanent: true },
      { source: "/:locale(en|de|nl)/privacy-policy", destination: "/:locale/politique-confidentialite", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
