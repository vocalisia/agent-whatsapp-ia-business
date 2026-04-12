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
      { source: "/", destination: "/fr", permanent: true },
      { source: "/tarifs", destination: "/fr/contact", permanent: true },
      { source: "/fr/tarifs", destination: "/fr/contact", permanent: true },
      { source: "/en/tarifs", destination: "/en/contact", permanent: true },
      { source: "/de/tarifs", destination: "/de/contact", permanent: true },
      { source: "/nl/tarifs", destination: "/nl/contact", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
