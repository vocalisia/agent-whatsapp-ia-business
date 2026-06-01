import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://agentic-whatsup.com/fr" },
  robots: { index: false, follow: false },
};

// Root path: no-content page with canonical → /fr so Googlebot
// follows the canonical instead of flagging a redirect.
export default function RootPage() {
  return null;
}
