import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  alternates: { canonical: "https://agentic-whatsup.com/fr" },
  robots: { index: false, follow: false },
};

// The locale-prefixed homepages are the only indexable homepages. A concrete
// temporary fallback redirect avoids rendering an empty root document that can
// become a 404 on preview deployments. The proxy normally answers "/" first
// with a language-negotiated 307 + Vary: Accept-Language.
export default function RootPage() {
  redirect("/fr");
}
