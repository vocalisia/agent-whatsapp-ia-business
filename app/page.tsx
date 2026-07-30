import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";

export const metadata: Metadata = {
  alternates: { canonical: "https://agentic-whatsup.com/fr" },
  robots: { index: false, follow: false },
};

// The locale-prefixed homepages are the only indexable homepages. A concrete
// permanent redirect avoids rendering an empty root document that can become
// a 404 on preview deployments and keeps the canonical entry deterministic.
export default function RootPage() {
  permanentRedirect("/fr");
}
