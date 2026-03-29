import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Agent IA WhatsApp | Automatisez vos messages clients 24/7",
    template: "%s | AgenticWhatsup",
  },
  description:
    "Le seul agent IA WhatsApp qui comprend les vocaux et analyse les photos. Automatisez vos réponses clients, qualifiez vos leads, prenez des RDV — 24h/24.",
  metadataBase: new URL("https://agentic-whatsup.com"),
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "AgenticWhatsup",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1Q10Z6C916" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-1Q10Z6C916');`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
