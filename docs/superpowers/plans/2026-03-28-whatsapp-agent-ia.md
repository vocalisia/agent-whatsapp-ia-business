# Agent IA WhatsApp — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy a complete agency website for WhatsApp AI agent services on Vercel.

**Architecture:** Next.js 14 App Router with Tailwind CSS dark theme. Blog via MDX files. Contact form via Resend API route. Static pages for services/pricing/blog. Cal.com iframe for bookings.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Lucide React, Framer Motion, gray-matter, next-mdx-remote, react-hook-form, Resend, Vercel.

---

## Task 1: Init Project + Dependencies + Config

**Files:**
- Create: `package.json` (via create-next-app)
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`
- Modify: `next.config.ts`
- Create: `.env.local`
- Create: `.env.example`

- [ ] **Step 1: Bootstrap Next.js project**

```bash
cd /c/Users/cohen.000/whatsapp-agent-ia
npx create-next-app@latest . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --yes
```

Expected: Project files created (package.json, app/, public/, etc.)

- [ ] **Step 2: Install additional dependencies**

```bash
npm install lucide-react framer-motion gray-matter next-mdx-remote react-hook-form resend
npm install -D @types/mdx
```

Expected: All packages installed without errors.

- [ ] **Step 3: Update `tailwind.config.ts`**

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0F172A",
        surface: "#1E293B",
        "surface-2": "#263348",
        wa: "#25D366",
        "wa-hover": "#1DAE52",
        indigo: {
          500: "#6366F1",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 4: Update `app/globals.css`**

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-bg text-slate-50 font-sans antialiased;
  }
  * {
    @apply box-border;
  }
}

@layer utilities {
  .text-gradient-wa {
    @apply bg-gradient-to-r from-wa to-indigo-500 bg-clip-text text-transparent;
  }
}
```

- [ ] **Step 5: Update `next.config.ts`**

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
};

export default nextConfig;
```

- [ ] **Step 6: Create `.env.local`**

```bash
RESEND_API_KEY=re_YOUR_API_KEY_HERE
RESEND_TO_EMAIL=votre@email.com
NEXT_PUBLIC_WA_NUMBER=33600000000
NEXT_PUBLIC_CAL_LINK=https://cal.com/votre-compte/demo
```

- [ ] **Step 7: Create `.env.example`**

```bash
RESEND_API_KEY=re_xxx
RESEND_TO_EMAIL=contact@example.com
NEXT_PUBLIC_WA_NUMBER=33600000000
NEXT_PUBLIC_CAL_LINK=https://cal.com/your-account/demo
```

- [ ] **Step 8: Delete boilerplate**

```bash
rm -rf app/page.tsx app/api
# On recrée page.tsx dans Task 5
```

- [ ] **Step 9: Commit**

```bash
git init
git add .
git commit -m "feat: init Next.js 14 project with Tailwind dark theme"
```

---

## Task 2: Layout — Header + Footer + MobileNav

**Files:**
- Create: `components/layout/Header.tsx`
- Create: `components/layout/Footer.tsx`
- Create: `components/layout/MobileNav.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Create `components/layout/MobileNav.tsx`**

```typescript
"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";

const links = [
  { href: "/services/agent-ia-whatsapp", label: "Services" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-2 text-slate-300 hover:text-white"
        aria-label="Menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      {open && (
        <div className="fixed inset-0 top-16 z-40 bg-bg/95 backdrop-blur-sm md:hidden">
          <nav className="flex flex-col gap-4 p-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-slate-200 hover:text-wa transition-colors py-2 border-b border-surface"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-4 bg-wa text-white font-semibold px-5 py-3 rounded-lg"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
```

- [ ] **Step 2: Create `components/layout/Header.tsx`**

```typescript
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import MobileNav from "./MobileNav";

const links = [
  { href: "/services/agent-ia-whatsapp", label: "Services" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <MessageCircle className="text-wa" size={24} />
          <span className="text-white">WhatsAgent<span className="text-wa">IA</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-wa hover:bg-wa-hover text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
          >
            <MessageCircle size={16} />
            Démo WhatsApp
          </a>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
```

- [ ] **Step 3: Create `components/layout/Footer.tsx`**

```typescript
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-surface-2 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg mb-3">
            <MessageCircle className="text-wa" size={20} />
            <span>WhatsAgent<span className="text-wa">IA</span></span>
          </div>
          <p className="text-slate-400 text-sm">
            Le seul agent IA WhatsApp qui voit, entend et comprend vos clients.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link href="/services/agent-ia-whatsapp" className="hover:text-wa transition-colors">Agent IA WhatsApp</Link></li>
            <li><Link href="/services/qualification-leads" className="hover:text-wa transition-colors">Qualification de leads</Link></li>
            <li><Link href="/services/campagnes-whatsapp" className="hover:text-wa transition-colors">Campagnes WhatsApp</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-3">Ressources</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link href="/blog" className="hover:text-wa transition-colors">Blog</Link></li>
            <li><Link href="/tarifs" className="hover:text-wa transition-colors">Tarifs</Link></li>
            <li><Link href="/contact" className="hover:text-wa transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-3">Légal</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link href="/mentions-legales" className="hover:text-wa transition-colors">Mentions légales</Link></li>
            <li><Link href="/politique-confidentialite" className="hover:text-wa transition-colors">Politique de confidentialité</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-surface-2 py-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} WhatsAgentIA. Tous droits réservés.
      </div>
      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-bg border-t border-surface flex">
        <a
          href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-wa text-white font-semibold py-4 text-sm"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
        <a
          href={process.env.NEXT_PUBLIC_CAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-indigo-500 text-white font-semibold py-4 text-sm"
        >
          Réserver
        </a>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Update `app/layout.tsx`**

```typescript
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Agent IA WhatsApp | Automatisez vos messages clients 24/7",
    template: "%s | WhatsAgentIA",
  },
  description:
    "Le seul agent IA WhatsApp qui comprend les vocaux et analyse les photos. Automatisez vos réponses clients, qualifiez vos leads, prenez des RDV — 24h/24.",
  metadataBase: new URL("https://whatsapp-agent-ia.vercel.app"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "WhatsAgentIA",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 5: Verify dev server starts**

```bash
npm run dev
```

Expected: Server starts on http://localhost:3000, page loads (empty for now), no TypeScript errors.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add Header, Footer, MobileNav layout components"
```

---

## Task 3: Shared Components

**Files:**
- Create: `components/shared/CTAButton.tsx`
- Create: `components/shared/FeatureCard.tsx`
- Create: `components/shared/FAQAccordion.tsx`
- Create: `components/shared/SectionTitle.tsx`

- [ ] **Step 1: Create `components/shared/CTAButton.tsx`**

```typescript
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface CTAButtonProps {
  href: string;
  label: string;
  variant?: "wa" | "outline" | "indigo";
  icon?: LucideIcon;
  external?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function CTAButton({
  href,
  label,
  variant = "wa",
  icon: Icon,
  external = false,
  size = "md",
}: CTAButtonProps) {
  const baseClass =
    "inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg";
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const variants = {
    wa: "bg-wa hover:bg-wa-hover text-white focus:ring-wa",
    outline:
      "border border-wa text-wa hover:bg-wa hover:text-white focus:ring-wa",
    indigo:
      "bg-indigo-500 hover:bg-indigo-600 text-white focus:ring-indigo-500",
  };

  const className = `${baseClass} ${sizes[size]} ${variants[variant]}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {Icon && <Icon size={18} />}
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {Icon && <Icon size={18} />}
      {label}
    </Link>
  );
}
```

- [ ] **Step 2: Create `components/shared/FeatureCard.tsx`**

```typescript
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  exclusive?: boolean;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  exclusive = false,
}: FeatureCardProps) {
  return (
    <div className="relative bg-surface rounded-xl p-6 border border-surface-2 hover:border-wa/50 transition-all duration-300 group">
      {exclusive && (
        <span className="absolute -top-3 left-4 bg-wa text-white text-xs font-bold px-3 py-1 rounded-full">
          EXCLUSIF
        </span>
      )}
      <div className="w-12 h-12 bg-wa/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-wa/20 transition-colors">
        <Icon className="text-wa" size={24} />
      </div>
      <h3 className="font-semibold text-white text-lg mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
```

- [ ] **Step 3: Create `components/shared/FAQAccordion.tsx`**

```typescript
"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="bg-surface rounded-xl border border-surface-2 overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-surface-2 transition-colors"
          >
            <span className="font-medium text-white pr-4">{item.question}</span>
            <ChevronDown
              size={20}
              className={`text-slate-400 transition-transform shrink-0 ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i && (
            <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-surface-2 pt-4">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 4: Create `components/shared/SectionTitle.tsx`**

```typescript
interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-block text-wa text-sm font-semibold uppercase tracking-wider mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add shared components (CTAButton, FeatureCard, FAQAccordion, SectionTitle)"
```

---

## Task 4: Home Page Sections

**Files:**
- Create: `components/home/Hero.tsx`
- Create: `components/home/ProblemSection.tsx`
- Create: `components/home/FeaturesGrid.tsx`
- Create: `components/home/HowItWorks.tsx`
- Create: `components/home/StatsSection.tsx`
- Create: `components/home/PricingPreview.tsx`
- Create: `components/home/FinalCTA.tsx`

- [ ] **Step 1: Create `components/home/Hero.tsx`**

```typescript
import { MessageCircle, Camera, Mic, Calendar } from "lucide-react";
import CTAButton from "@/components/shared/CTAButton";

export default function Hero() {
  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER;
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || "#contact";

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg via-surface/30 to-bg pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-wa/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-wa/10 border border-wa/20 rounded-full px-4 py-1.5 text-wa text-sm font-medium mb-6">
            <MessageCircle size={14} />
            Agent IA WhatsApp Business
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Le seul agent IA WhatsApp qui{" "}
            <span className="text-gradient-wa">voit, entend</span> et comprend
            vos clients.
          </h1>

          <p className="text-xl text-slate-400 mb-8 leading-relaxed">
            Vocaux, photos, documents — votre agent IA répond à tout, 24h/24,
            7j/7. Sans intervention humaine.
          </p>

          {/* USP pills */}
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { icon: Camera, label: "Analyse les photos" },
              { icon: Mic, label: "Comprend les vocaux" },
              { icon: Calendar, label: "Prend les RDV" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-surface border border-surface-2 rounded-full px-4 py-2 text-sm text-slate-300"
              >
                <Icon size={14} className="text-wa" />
                {label}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton
              href={calLink}
              label="Réserver une démo gratuite"
              variant="wa"
              size="lg"
              external
            />
            <CTAButton
              href={`https://wa.me/${waNumber}`}
              label="Nous écrire sur WhatsApp"
              variant="outline"
              icon={MessageCircle}
              size="lg"
              external
            />
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create `components/home/ProblemSection.tsx`**

```typescript
import { PhoneMissed, Clock, ImageOff, TrendingDown } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";

const problems = [
  {
    icon: PhoneMissed,
    title: "Vocaux ignorés",
    description:
      "Vos clients envoient des messages vocaux WhatsApp. Personne dans votre équipe n'a le temps de les écouter et y répondre.",
  },
  {
    icon: ImageOff,
    title: "Photos sans traitement",
    description:
      "Le client envoie une photo de son document, son bien, son problème. Le traitement manuel prend des heures.",
  },
  {
    icon: Clock,
    title: "Leads perdus hors horaires",
    description:
      "70% des messages arrivent en dehors des heures ouvrées. Sans réponse rapide, le prospect passe chez un concurrent.",
  },
  {
    icon: TrendingDown,
    title: "Équipe débordée",
    description:
      "Votre équipe gère des centaines de messages répétitifs au lieu de se concentrer sur les dossiers à forte valeur.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <SectionTitle
        eyebrow="Le problème"
        title="Vos clients n'attendent pas. Votre équipe, elle, est débordée."
        subtitle="Chaque message sans réponse rapide est un lead perdu. Chaque photo non traitée est un client frustré."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((p) => (
          <div
            key={p.title}
            className="bg-surface/50 rounded-xl p-6 border border-surface-2 border-l-4 border-l-red-500/50"
          >
            <p.icon className="text-red-400 mb-3" size={24} />
            <h3 className="font-semibold text-white mb-2">{p.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create `components/home/FeaturesGrid.tsx`**

```typescript
import {
  Camera,
  Mic,
  Paperclip,
  Shield,
  Calendar,
  Webhook,
} from "lucide-react";
import FeatureCard from "@/components/shared/FeatureCard";
import SectionTitle from "@/components/shared/SectionTitle";

const features = [
  {
    icon: Camera,
    title: "Vision IA — Analyse les photos",
    description:
      "Le client envoie une photo (document, bien immobilier, problème technique, produit). L'agent voit, comprend et répond via OpenAI Vision / Claude / Gemini.",
    exclusive: true,
  },
  {
    icon: Mic,
    title: "Comprend les messages vocaux",
    description:
      "Fini les vocaux ignorés. L'agent transcrit automatiquement les messages audio WhatsApp et répond de façon contextuelle, dans la langue du client.",
    exclusive: true,
  },
  {
    icon: Paperclip,
    title: "Tous les médias WhatsApp",
    description:
      "Images, audio, vidéo, documents — tout est géré, stocké et accessible. Les opérateurs peuvent également envoyer des fichiers aux clients depuis l'interface.",
    exclusive: false,
  },
  {
    icon: Shield,
    title: "RGPD automatique",
    description:
      "Rétention des données configurable (conversations, leads, SMS). Nettoyage automatique planifié — conformité RGPD sans effort ni intervention manuelle.",
    exclusive: false,
  },
  {
    icon: Calendar,
    title: "Cal.com v2 — Prise de RDV",
    description:
      "Serveurs EU, types d'événements équipe, champs dynamiques. L'agent prend les rendez-vous directement dans la conversation WhatsApp, en temps réel.",
    exclusive: false,
  },
  {
    icon: Webhook,
    title: "Webhooks & Automatisations",
    description:
      "Déclencheurs sur fin de conversation avec transcript complet, variables extraites et évaluation IA. Connecte HubSpot, Salesforce, Notion et tout outil externe.",
    exclusive: false,
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-surface/20">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Fonctionnalités"
          title="Ce que votre agent IA WhatsApp sait faire"
          subtitle="Des capacités uniques sur le marché, construites pour les entreprises qui veulent automatiser sans sacrifier la qualité."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Create `components/home/HowItWorks.tsx`**

```typescript
import SectionTitle from "@/components/shared/SectionTitle";

const steps = [
  {
    number: "01",
    title: "Analyse des besoins",
    description:
      "On identifie vos scénarios WhatsApp, volumes de messages, intégrations nécessaires (CRM, agenda, base de connaissance).",
  },
  {
    number: "02",
    title: "Configuration WhatsApp Business",
    description:
      "Connexion de votre compte Meta, configuration du numéro, création et approbation des templates de messages.",
  },
  {
    number: "03",
    title: "Développement de l'agent",
    description:
      "Personnalité vocale, base de connaissances métier, flux de conversation, intégrations CRM et Cal.com.",
  },
  {
    number: "04",
    title: "Tests & déploiement",
    description:
      "Tests avec de vrais messages, ajustements, mise en production et formation de votre équipe. Livraison en 2–3 semaines.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <SectionTitle
        eyebrow="Comment ça marche"
        title="De zéro à votre agent IA WhatsApp en 2–3 semaines"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <div key={step.number} className="relative">
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-wa/40 to-transparent z-0" />
            )}
            <div className="relative bg-surface rounded-xl p-6 border border-surface-2">
              <div className="text-4xl font-extrabold text-wa/20 mb-3">{step.number}</div>
              <h3 className="font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Create `components/home/StatsSection.tsx`**

```typescript
const stats = [
  { value: "-60%", label: "Coûts de gestion client" },
  { value: "+40%", label: "Productivité des équipes" },
  { value: "+30%", label: "Taux de réponse" },
  { value: "24/7", label: "Disponibilité" },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-wa/5 border-y border-wa/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-4xl font-extrabold text-wa mb-2">{s.value}</div>
            <div className="text-slate-400 text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Create `components/home/PricingPreview.tsx`**

```typescript
import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Sur devis",
    features: ["1 agent WhatsApp", "1 scénario", "1 intégration", "Support email"],
    cta: "Demander un devis",
    featured: false,
  },
  {
    name: "Pro",
    price: "Sur devis",
    features: [
      "Multi-scénarios",
      "Templates Meta",
      "CRM + Agenda",
      "Vision IA + Vocaux",
      "Workflows auto",
      "Support 48h",
    ],
    cta: "Demander un devis",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    features: [
      "Solution sur-mesure",
      "Multi-numéros",
      "Intégrations illimitées",
      "SLA prioritaire",
      "Onboarding dédié",
      "Support 24h",
    ],
    cta: "Nous contacter",
    featured: false,
  },
];

export default function PricingPreview() {
  return (
    <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="inline-block text-wa text-sm font-semibold uppercase tracking-wider mb-3">
          Tarifs
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Des formules adaptées à votre activité
        </h2>
        <p className="text-slate-400 text-lg">
          Chaque projet est unique. Contactez-nous pour un devis personnalisé.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-xl p-8 border flex flex-col ${
              plan.featured
                ? "bg-wa/10 border-wa/50 relative"
                : "bg-surface border-surface-2"
            }`}
          >
            {plan.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-wa text-white text-xs font-bold px-4 py-1 rounded-full">
                RECOMMANDÉ
              </div>
            )}
            <h3 className="font-bold text-xl text-white mb-1">{plan.name}</h3>
            <div className="text-2xl font-extrabold text-wa mb-6">{plan.price}</div>
            <ul className="space-y-3 flex-1 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                  <Check size={16} className="text-wa shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className={`text-center font-semibold py-3 px-6 rounded-lg transition-colors ${
                plan.featured
                  ? "bg-wa hover:bg-wa-hover text-white"
                  : "border border-wa text-wa hover:bg-wa hover:text-white"
              }`}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/tarifs" className="text-wa hover:underline text-sm font-medium">
          Voir tous les détails des tarifs →
        </Link>
      </div>
    </section>
  );
}
```

- [ ] **Step 7: Create `components/home/FinalCTA.tsx`**

```typescript
import { MessageCircle, Calendar } from "lucide-react";
import CTAButton from "@/components/shared/CTAButton";

export default function FinalCTA() {
  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER;
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || "#contact";

  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-wa/10 via-surface to-indigo-500/10 pointer-events-none" />
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Prêt à ne plus jamais manquer un message client ?
        </h2>
        <p className="text-slate-400 text-lg mb-8">
          30 minutes pour analyser vos besoins. Proposition sous 48h.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton
            href={calLink}
            label="Réserver un diagnostic gratuit"
            variant="wa"
            icon={Calendar}
            size="lg"
            external
          />
          <CTAButton
            href={`https://wa.me/${waNumber}`}
            label="Écrire sur WhatsApp"
            variant="outline"
            icon={MessageCircle}
            size="lg"
            external
          />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: add all home page sections"
```

---

## Task 5: Home Page (`app/page.tsx`)

**Files:**
- Create: `app/page.tsx`

- [ ] **Step 1: Create `app/page.tsx`**

```typescript
import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ProblemSection from "@/components/home/ProblemSection";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import HowItWorks from "@/components/home/HowItWorks";
import StatsSection from "@/components/home/StatsSection";
import PricingPreview from "@/components/home/PricingPreview";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Agent IA WhatsApp | Automatisez vos messages clients 24/7",
  description:
    "Le seul agent IA WhatsApp qui comprend les vocaux et analyse les photos de vos clients. Automatisez vos réponses, qualifiez vos leads, prenez des RDV.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ProblemSection />
      <FeaturesGrid />
      <HowItWorks />
      <PricingPreview />
      <FinalCTA />
    </>
  );
}
```

- [ ] **Step 2: Verify home page renders**

```bash
npm run dev
```

Open http://localhost:3000 — verify: Hero, stats, features grid, how it works, pricing, CTA all render correctly with dark background and green accents.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: assemble home page from sections"
```

---

## Task 6: Service Page `/services/agent-ia-whatsapp`

**Files:**
- Create: `app/services/agent-ia-whatsapp/page.tsx`

- [ ] **Step 1: Create `app/services/agent-ia-whatsapp/page.tsx`**

```typescript
import type { Metadata } from "next";
import { Camera, Mic, Paperclip, Shield, Calendar, Webhook, MessageCircle } from "lucide-react";
import CTAButton from "@/components/shared/CTAButton";
import FeatureCard from "@/components/shared/FeatureCard";
import FAQAccordion from "@/components/shared/FAQAccordion";
import SectionTitle from "@/components/shared/SectionTitle";
import HowItWorks from "@/components/home/HowItWorks";

export const metadata: Metadata = {
  title: "Agent IA WhatsApp pour Entreprises",
  description:
    "Agent IA WhatsApp qui comprend les messages vocaux et analyse les photos clients. Disponible 24/7. Intégration CRM, Cal.com, RGPD automatique.",
};

const features = [
  {
    icon: Camera,
    title: "Vision IA — Analyse les photos",
    description:
      "Le client envoie une photo de document, un bien immobilier, une pièce défectueuse. L'agent l'analyse via OpenAI Vision, Claude ou Gemini et répond ou remplit un dossier automatiquement.",
    exclusive: true,
  },
  {
    icon: Mic,
    title: "Transcription vocale automatique",
    description:
      "Fini les messages vocaux ignorés. L'agent transcrit chaque message audio selon la langue configurée et répond de façon contextuelle. Vos clients parlent, l'IA comprend.",
    exclusive: true,
  },
  {
    icon: Paperclip,
    title: "Tous les médias WhatsApp",
    description:
      "Images, audio, vidéo, documents PDF — tout est accepté, analysé et stocké. Les opérateurs peuvent aussi envoyer des fichiers aux clients depuis l'interface.",
    exclusive: false,
  },
  {
    icon: Shield,
    title: "Conformité RGPD automatique",
    description:
      "Configurez des règles de rétention par compte (conversations, leads, SMS, appels). Le nettoyage s'exécute automatiquement — vous restez conforme sans effort.",
    exclusive: false,
  },
  {
    icon: Calendar,
    title: "Cal.com v2 — RDV intégrés",
    description:
      "L'agent consulte vos disponibilités via Cal.com v2 (serveurs EU, équipes, champs dynamiques) et planifie des RDV directement dans la conversation WhatsApp.",
    exclusive: false,
  },
  {
    icon: Webhook,
    title: "Webhooks & Automatisations",
    description:
      "Déclenchez des workflows à la fin de chaque conversation : transcript complet, variables extraites, évaluation IA. Connectez HubSpot, Salesforce, Notion, ou tout outil via webhook.",
    exclusive: false,
  },
];

const faqItems = [
  {
    question: "Comment fonctionne la transcription vocale WhatsApp ?",
    answer:
      "Quand un client envoie un message vocal, notre agent IA le transcrit automatiquement en texte grâce à un modèle de reconnaissance vocale, en tenant compte de la langue configurée pour votre agent. Le transcript est ensuite traité comme un message texte normal, et l'IA formule une réponse contextuelle.",
  },
  {
    question: "Quels types de photos l'agent peut-il analyser ?",
    answer:
      "L'agent peut analyser tout type d'image : documents (CNI, justificatifs, contrats, factures), photos de biens immobiliers, captures d'écran, photos de produits défectueux, prescriptions médicales, etc. Il utilise les modèles Vision d'OpenAI, Claude ou Gemini selon votre configuration.",
  },
  {
    question: "L'agent peut-il remplir des documents avec les photos reçues ?",
    answer:
      "Oui. Si un client envoie une photo de sa pièce d'identité ou d'un formulaire, l'agent peut extraire les informations et les enregistrer dans votre CRM ou pré-remplir un dossier. Cela élimine la saisie manuelle et accélère vos processus.",
  },
  {
    question: "Faut-il un compte WhatsApp Business existant ?",
    answer:
      "Vous avez besoin d'un compte WhatsApp Business API via Meta. Nous vous accompagnons dans la création ou la connexion de votre compte, l'approbation des templates, et la configuration complète du numéro.",
  },
  {
    question: "Comment fonctionne la règle des 24h de Meta ?",
    answer:
      "Meta impose que les messages libres (non-templates) ne peuvent être envoyés que dans les 24h suivant le dernier message du client. Notre agent gère cette contrainte automatiquement : il utilise des templates pré-approuvés pour relancer les conversations inactives.",
  },
  {
    question: "L'agent peut-il gérer plusieurs langues ?",
    answer:
      "Oui. L'agent détecte automatiquement la langue du client et répond dans la même langue. Vous pouvez configurer les langues prioritaires (français, anglais, arabe, espagnol, etc.).",
  },
  {
    question: "Combien de conversations simultanées peut-il gérer ?",
    answer:
      "L'agent est scalable : il peut gérer des centaines de conversations simultanées sans dégradation de qualité. Aucune limite artificielle n'est imposée — la capacité s'adapte à votre volume.",
  },
  {
    question: "Quelle est la conformité RGPD de la solution ?",
    answer:
      "La solution inclut une gestion RGPD native : périodes de rétention configurables par type de données (conversations, leads, SMS), nettoyage automatique planifié, hébergement possible sur serveurs EU via Cal.com v2. Vos données ne transitent pas en dehors de l'UE si vous l'exigez.",
  },
];

export default function ServicePage() {
  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER;
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || "/contact";

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-wa/5 via-bg to-bg pointer-events-none" />
        <div className="relative max-w-7xl mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 bg-wa/10 border border-wa/20 rounded-full px-4 py-1.5 text-wa text-sm font-medium mb-6">
            <MessageCircle size={14} />
            Service phare
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
            Agent IA Téléphonique WhatsApp pour Entreprises
          </h1>
          <p className="text-xl text-slate-400 mb-4">
            Votre meilleur gestionnaire WhatsApp. Disponible 24/7. Comprend les vocaux.
            Analyse les photos. Ne rate jamais un message.
          </p>
          <p className="text-lg text-slate-500 mb-8">
            Automatisez votre gestion WhatsApp Business. Qualification de leads,
            prise de RDV, réponses aux questions fréquentes — à partir de votre
            première semaine d'utilisation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton
              href={calLink}
              label="Réserver un diagnostic gratuit"
              variant="wa"
              size="lg"
              external
            />
            <CTAButton
              href={`https://wa.me/${waNumber}`}
              label="Écrire sur WhatsApp"
              variant="outline"
              icon={MessageCircle}
              size="lg"
              external
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 bg-surface/20">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Fonctionnalités"
            title="Ce que votre agent IA WhatsApp peut faire"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <HowItWorks />

      {/* Pricing preview */}
      <section className="py-20 px-4 sm:px-6 bg-surface/10">
        <div className="max-w-2xl mx-auto text-center">
          <SectionTitle
            eyebrow="Tarification"
            title="Un investissement, pas un coût"
            subtitle="Chaque solution est sur-mesure. Obtenez un devis adapté à vos volumes et intégrations."
          />
          <CTAButton href="/contact" label="Demander un devis" variant="wa" size="lg" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 max-w-3xl mx-auto">
        <SectionTitle eyebrow="FAQ" title="Questions fréquentes" />
        <FAQAccordion items={faqItems} />
      </section>

      {/* Related services */}
      <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto border-t border-surface-2">
        <h3 className="text-lg font-semibold text-white mb-6">Services connexes</h3>
        <div className="flex flex-wrap gap-4">
          {[
            { href: "/services/qualification-leads", label: "Qualification de leads WhatsApp" },
            { href: "/services/campagnes-whatsapp", label: "Campagnes & templates WhatsApp" },
          ].map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="bg-surface border border-surface-2 hover:border-wa/50 text-slate-300 hover:text-wa px-5 py-3 rounded-lg text-sm font-medium transition-colors"
            >
              {s.label} →
            </a>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 text-center bg-gradient-to-r from-wa/5 to-indigo-500/5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Prêt à automatiser votre WhatsApp Business ?
          </h2>
          <p className="text-slate-400 mb-8">
            30 minutes pour analyser vos besoins. Proposition sous 48h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href={calLink} label="Réserver un diagnostic gratuit" variant="wa" size="lg" external />
            <CTAButton href="/services" label="Voir tous les services" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Verify page renders**

```bash
npm run dev
```

Open http://localhost:3000/services/agent-ia-whatsapp — verify all sections render, FAQ accordion works.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add /services/agent-ia-whatsapp page with FAQ"
```

---

## Task 7: Tarifs + Contact Pages + Resend API

**Files:**
- Create: `app/tarifs/page.tsx`
- Create: `app/contact/page.tsx`
- Create: `app/api/contact/route.ts`
- Create: `lib/resend.ts`

- [ ] **Step 1: Create `lib/resend.ts`**

```typescript
import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);
export const TO_EMAIL = process.env.RESEND_TO_EMAIL ?? "contact@example.com";
```

- [ ] **Step 2: Create `app/api/contact/route.ts`**

```typescript
import { NextRequest, NextResponse } from "next/server";
import { resend, TO_EMAIL } from "@/lib/resend";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, company, message, phone } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Champs requis manquants." },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: "WhatsAgentIA <noreply@resend.dev>",
      to: TO_EMAIL,
      subject: `Nouveau contact — ${name} (${company || "sans société"})`,
      html: `
        <h2>Nouveau message depuis le site</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || "non renseigné"}</p>
        <p><strong>Société :</strong> ${company || "non renseignée"}</p>
        <hr/>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erreur lors de l'envoi." },
      { status: 500 }
    );
  }
}
```

- [ ] **Step 3: Create `app/contact/page.tsx`**

```typescript
"use client";
import type { Metadata } from "next";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MessageCircle, Send, CheckCircle } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setError("");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setSent(true);
    } else {
      setError("Une erreur est survenue. Réessayez ou écrivez-nous sur WhatsApp.");
    }
  };

  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER;
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || "#";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
      <h1 className="text-4xl font-extrabold text-white mb-4">Contactez-nous</h1>
      <p className="text-slate-400 text-lg mb-12">
        30 minutes pour analyser vos besoins. Proposition sous 48h.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          {sent ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <CheckCircle size={48} className="text-wa mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Message envoyé !</h2>
              <p className="text-slate-400">Nous vous répondons sous 24h.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  Nom *
                </label>
                <input
                  {...register("name", { required: true })}
                  className="w-full bg-surface border border-surface-2 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-wa"
                  placeholder="Votre nom"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">Champ requis</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  Email *
                </label>
                <input
                  {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                  type="email"
                  className="w-full bg-surface border border-surface-2 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-wa"
                  placeholder="vous@example.com"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">Email invalide</p>}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Société
                  </label>
                  <input
                    {...register("company")}
                    className="w-full bg-surface border border-surface-2 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-wa"
                    placeholder="Votre société"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Téléphone
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    className="w-full bg-surface border border-surface-2 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-wa"
                    placeholder="+33..."
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  Message *
                </label>
                <textarea
                  {...register("message", { required: true })}
                  rows={5}
                  className="w-full bg-surface border border-surface-2 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-wa resize-none"
                  placeholder="Décrivez votre besoin..."
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">Champ requis</p>}
              </div>
              {error && <p className="text-red-400 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-wa hover:bg-wa-hover disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                <Send size={16} />
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </button>
            </form>
          )}
        </div>

        {/* Side info */}
        <div className="space-y-6">
          <div className="bg-surface rounded-xl p-6 border border-surface-2">
            <h3 className="font-semibold text-white mb-3">Réponse rapide sur WhatsApp</h3>
            <p className="text-slate-400 text-sm mb-4">
              Pour une réponse immédiate, écrivez-nous directement sur WhatsApp.
            </p>
            <a
              href={`https://wa.me/${waNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-wa hover:bg-wa-hover text-white font-semibold px-5 py-3 rounded-lg transition-colors text-sm w-fit"
            >
              <MessageCircle size={16} />
              Écrire sur WhatsApp
            </a>
          </div>
          <div className="bg-surface rounded-xl p-6 border border-surface-2">
            <h3 className="font-semibold text-white mb-3">Réserver un créneau</h3>
            <p className="text-slate-400 text-sm mb-4">
              Planifiez un appel de 30 minutes pour discuter de votre projet.
            </p>
            <a
              href={calLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-wa text-wa hover:bg-wa hover:text-white font-semibold px-5 py-3 rounded-lg transition-colors text-sm w-fit"
            >
              Choisir un créneau
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Create `app/tarifs/page.tsx`**

```typescript
import type { Metadata } from "next";
import { Check, MessageCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tarifs Agent IA WhatsApp",
  description:
    "Découvrez les tarifs de nos agents IA WhatsApp. Solutions Starter, Pro et Enterprise. Devis personnalisé sous 48h.",
};

const plans = [
  {
    name: "Starter",
    subtitle: "Pour démarrer l'automatisation",
    setup: "Sur devis",
    monthly: "Sur devis",
    features: [
      "1 agent WhatsApp Business",
      "1 scénario de conversation",
      "1 intégration (CRM ou agenda)",
      "Templates Meta (jusqu'à 5)",
      "Support email",
      "Livraison en 2 semaines",
    ],
    notIncluded: ["Vision IA", "Vocaux", "Webhooks avancés"],
    cta: "Demander un devis",
    featured: false,
  },
  {
    name: "Pro",
    subtitle: "Pour les équipes ambitieuses",
    setup: "Sur devis",
    monthly: "Sur devis",
    features: [
      "Multi-scénarios",
      "Templates Meta illimités",
      "CRM + Agenda intégrés",
      "Vision IA (analyse photos)",
      "Transcription vocale",
      "Workflows & webhooks",
      "Support prioritaire 48h",
      "Livraison en 3 semaines",
    ],
    notIncluded: [],
    cta: "Demander un devis",
    featured: true,
  },
  {
    name: "Enterprise",
    subtitle: "Solution sur-mesure",
    setup: "Sur devis",
    monthly: "Sur devis",
    features: [
      "Tout le plan Pro",
      "Multi-numéros WhatsApp",
      "Intégrations illimitées",
      "SLA prioritaire",
      "Onboarding dédié",
      "Support 24h/7j",
      "Formation équipe incluse",
      "Hébergement EU garanti",
    ],
    notIncluded: [],
    cta: "Nous contacter",
    featured: false,
  },
];

export default function TarifsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      <div className="text-center mb-16">
        <span className="inline-block text-wa text-sm font-semibold uppercase tracking-wider mb-3">
          Tarifs
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
          Des formules adaptées à votre activité
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Chaque projet est unique. Tous nos tarifs sont sur devis — contactez-nous
          pour une proposition personnalisée sous 48h.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-xl p-8 border flex flex-col relative ${
              plan.featured
                ? "bg-wa/10 border-wa/50"
                : "bg-surface border-surface-2"
            }`}
          >
            {plan.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-wa text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                PLUS POPULAIRE
              </div>
            )}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-1">{plan.name}</h2>
              <p className="text-slate-400 text-sm">{plan.subtitle}</p>
            </div>
            <div className="mb-8">
              <div className="text-3xl font-extrabold text-wa">{plan.setup}</div>
              <div className="text-slate-500 text-sm mt-1">+ mensuel selon usage</div>
            </div>
            <ul className="space-y-3 flex-1 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                  <Check size={16} className="text-wa shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className={`text-center font-semibold py-3 px-6 rounded-lg transition-colors ${
                plan.featured
                  ? "bg-wa hover:bg-wa-hover text-white"
                  : "border border-wa text-wa hover:bg-wa hover:text-white"
              }`}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-surface rounded-xl p-8 border border-surface-2 text-center">
        <MessageCircle className="text-wa mx-auto mb-4" size={32} />
        <h3 className="text-xl font-bold text-white mb-2">
          Vous avez des questions sur les tarifs ?
        </h3>
        <p className="text-slate-400 mb-6">
          Écrivez-nous directement sur WhatsApp — nous répondons en moins d'une heure.
        </p>
        <a
          href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-wa hover:bg-wa-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          <MessageCircle size={18} />
          Écrire sur WhatsApp
        </a>
      </div>
    </div>
  );
}
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add tarifs page, contact page, Resend API route"
```

---

## Task 8: Blog MDX Setup + Pages

**Files:**
- Modify: `next.config.ts`
- Create: `lib/mdx.ts`
- Create: `app/blog/page.tsx`
- Create: `app/blog/[slug]/page.tsx`
- Create: `components/blog/BlogCard.tsx`

- [ ] **Step 1: Update `next.config.ts` for MDX**

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
};

export default nextConfig;
```

- [ ] **Step 2: Create `lib/mdx.ts`**

```typescript
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  readTime?: string;
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      const { data } = matter(raw);
      return { slug, ...data } as PostMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): { meta: PostMeta; content: string } {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { meta: { slug, ...data } as PostMeta, content };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
```

- [ ] **Step 3: Create `components/blog/BlogCard.tsx`**

```typescript
import Link from "next/link";
import { PostMeta } from "@/lib/mdx";
import { Clock, Calendar } from "lucide-react";

export default function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block bg-surface rounded-xl p-6 border border-surface-2 hover:border-wa/50 transition-all duration-300 group"
    >
      <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
        <span className="flex items-center gap-1">
          <Calendar size={12} />
          {new Date(post.date).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
        {post.readTime && (
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {post.readTime}
          </span>
        )}
      </div>
      <h2 className="font-semibold text-white text-lg mb-2 group-hover:text-wa transition-colors leading-tight">
        {post.title}
      </h2>
      <p className="text-slate-400 text-sm leading-relaxed">{post.description}</p>
      <span className="inline-block mt-4 text-wa text-sm font-medium group-hover:underline">
        Lire l'article →
      </span>
    </Link>
  );
}
```

- [ ] **Step 4: Create `app/blog/page.tsx`**

```typescript
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";
import BlogCard from "@/components/blog/BlogCard";

export const metadata: Metadata = {
  title: "Blog — Agent IA WhatsApp",
  description:
    "Guides, tutoriels et conseils sur l'automatisation WhatsApp Business avec l'intelligence artificielle.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
      <h1 className="text-4xl font-extrabold text-white mb-4">Blog</h1>
      <p className="text-slate-400 text-lg mb-12">
        Guides et conseils pour automatiser votre WhatsApp Business avec l'IA.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 5: Create `app/blog/[slug]/page.tsx`**

```typescript
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const { meta } = getPostBySlug(params.slug);
    return { title: meta.title, description: meta.description };
  } catch {
    return {};
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  let post;
  try {
    post = getPostBySlug(params.slug);
  } catch {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-slate-400 hover:text-wa transition-colors text-sm mb-8"
      >
        <ArrowLeft size={16} />
        Retour au blog
      </Link>
      <p className="text-wa text-sm font-medium mb-3">
        {new Date(post.meta.date).toLocaleDateString("fr-FR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
        {post.meta.title}
      </h1>
      <div className="prose prose-invert prose-wa max-w-none prose-headings:text-white prose-p:text-slate-400 prose-strong:text-white prose-li:text-slate-400 prose-a:text-wa">
        <MDXRemote source={post.content} />
      </div>
    </div>
  );
}
```

- [ ] **Step 6: Install tailwindcss typography**

```bash
npm install -D @tailwindcss/typography
```

Update `tailwind.config.ts` plugins:

```typescript
plugins: [require("@tailwindcss/typography")],
```

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: add MDX blog setup, blog list and article pages"
```

---

## Task 9: Blog Articles (5 MDX)

**Files:**
- Create: `content/blog/comment-fonctionne-agent-ia-whatsapp.mdx`
- Create: `content/blog/agent-ia-whatsapp-vs-chatbot.mdx`
- Create: `content/blog/analyser-photos-clients-ia-whatsapp.mdx`
- Create: `content/blog/5-cas-usage-agent-ia-whatsapp.mdx`
- Create: `content/blog/combien-coute-agent-ia-whatsapp-2026.mdx`

- [ ] **Step 1: Create first article**

```bash
mkdir -p content/blog
```

Create `content/blog/comment-fonctionne-agent-ia-whatsapp.mdx`:

```mdx
---
title: "Comment fonctionne un agent IA WhatsApp ?"
date: "2026-03-01"
description: "Découvrez comment un agent IA WhatsApp analyse vos messages, comprend les vocaux et répond à vos clients 24h/24 sans intervention humaine."
readTime: "6 min"
---

## Qu'est-ce qu'un agent IA WhatsApp ?

Un agent IA WhatsApp est un programme intelligent connecté à votre compte WhatsApp Business. Il reçoit les messages de vos clients, les analyse grâce à l'intelligence artificielle, et répond automatiquement — que ce soit du texte, un vocal, ou une photo.

Contrairement à un simple chatbot à menus, l'agent IA comprend le **langage naturel**. Vos clients écrivent ou parlent comme ils le feraient à un humain, et l'agent s'adapte.

## Les composants d'un agent IA WhatsApp

### 1. Le modèle de langage (LLM)

Le cerveau de l'agent. Il comprend les messages, génère des réponses contextuelles et maintient une mémoire de la conversation. Les LLMs les plus utilisés sont GPT-4 (OpenAI), Claude (Anthropic) ou Gemini (Google).

### 2. La transcription vocale

Quand un client envoie un message vocal WhatsApp, un modèle de **reconnaissance vocale** (comme Whisper) transcrit l'audio en texte. Le LLM peut ensuite traiter ce texte comme un message normal.

### 3. La vision IA

Quand un client envoie une photo, un modèle **Vision** (comme GPT-4o ou Claude 3) analyse l'image. Il peut lire un document, identifier un produit, évaluer l'état d'un bien ou extraire des informations d'une photo de pièce d'identité.

### 4. Les intégrations

L'agent peut se connecter à votre CRM (HubSpot, Salesforce), votre agenda (Cal.com, Google Calendar), votre base de données clients, ou n'importe quel outil via webhook.

## Le flux d'une conversation typique

1. **Le client envoie un message** (texte, vocal, ou photo)
2. **L'agent analyse le message** — transcription si vocal, vision si photo
3. **Le LLM génère une réponse** basée sur votre base de connaissances
4. **L'agent répond** dans WhatsApp — instantanément, 24/7
5. **Si nécessaire**, l'agent transfère à un humain avec le contexte complet

## Pourquoi c'est différent d'un SVI classique

Un Serveur Vocal Interactif (SVI) ou un chatbot à menu propose des options numérotées. L'agent IA, lui, comprend n'importe quelle formulation. "Je veux changer mon rendez-vous de mardi" est compris, sans que le client ait à taper "1" pour les RDV.

## Conclusion

Un agent IA WhatsApp bien configuré peut gérer 80% des conversations clients sans intervention humaine. Les 20% restants — les cas complexes — sont transférés à votre équipe avec tout le contexte de la conversation.
```

- [ ] **Step 2: Create second article**

Create `content/blog/agent-ia-whatsapp-vs-chatbot.mdx`:

```mdx
---
title: "Agent IA WhatsApp vs chatbot classique : quelle différence ?"
date: "2026-03-05"
description: "Chatbot à menus ou agent IA WhatsApp ? Comparatif complet pour choisir la bonne solution d'automatisation pour votre entreprise."
readTime: "5 min"
---

## Le chatbot classique : limité par sa logique de menus

Un chatbot classique fonctionne sur un arbre de décision. Il propose des options, l'utilisateur clique, et le bot suit un chemin prédéfini. C'est simple à construire, mais profondément frustrant pour vos clients.

**Problèmes du chatbot classique :**
- Ne comprend pas le langage naturel
- Bloqué si l'utilisateur sort du script
- Incapable de gérer les vocaux et les photos
- Expérience rigide et impersonnelle

## L'agent IA WhatsApp : conversationnel et multimodal

Un agent IA utilise un **LLM (Large Language Model)** pour comprendre le sens des messages, quelle que soit leur formulation. Il maintient le contexte de la conversation, comme un vrai conseiller.

**Avantages de l'agent IA :**
- Comprend toutes les formulations
- Gère les vocaux (transcription automatique)
- Analyse les photos envoyées par les clients
- Maintient la mémoire de la conversation
- S'améliore avec les retours

## Comparatif détaillé

| Critère | Chatbot classique | Agent IA WhatsApp |
|---------|------------------|------------------|
| Compréhension | Mots-clés uniquement | Langage naturel complet |
| Vocaux | ❌ Non | ✅ Oui (transcription) |
| Photos | ❌ Non | ✅ Oui (vision IA) |
| Documents | ❌ Non | ✅ Oui |
| Mémoire contexte | ❌ Non | ✅ Oui |
| Prise de RDV | Limitée | ✅ Cal.com intégré |
| RGPD | Manuel | ✅ Automatique |

## Quand choisir un chatbot classique ?

Si votre cas d'usage est très simple (FAQ de 3 questions, redirection vers un numéro), un chatbot classique peut suffire. Il est moins coûteux à mettre en place.

## Quand choisir un agent IA WhatsApp ?

Dès que vos clients envoient des demandes variées, des vocaux, des photos, ou que vous souhaitez automatiser la qualification de leads et la prise de RDV — l'agent IA est la seule solution viable.

## Conclusion

Le chatbot classique est une solution du passé. En 2026, vos clients attendent des réponses intelligentes, rapides, et adaptées à leur demande réelle. L'agent IA WhatsApp est la réponse.
```

- [ ] **Step 3: Create third article**

Create `content/blog/analyser-photos-clients-ia-whatsapp.mdx`:

```mdx
---
title: "Comment analyser les photos clients avec l'IA WhatsApp ?"
date: "2026-03-10"
description: "Votre agent IA WhatsApp peut analyser les photos envoyées par vos clients. Découvrez comment ça fonctionne et les cas d'usage concrets."
readTime: "7 min"
---

## La vision IA dans WhatsApp : une révolution pour les entreprises

Depuis l'émergence des modèles Vision (GPT-4o, Claude 3, Gemini), il est possible de donner à votre agent WhatsApp la capacité de **voir et comprendre les images**.

Quand un client envoie une photo, l'agent n'est plus bloqué. Il analyse l'image et répond de façon pertinente.

## Comment ça fonctionne techniquement ?

1. Le client envoie une photo via WhatsApp
2. L'image est transmise à un modèle Vision (OpenAI, Claude ou Gemini)
3. Le modèle décrit et analyse le contenu de l'image
4. L'agent formule une réponse basée sur cette analyse

Tout se passe en quelques secondes. Le client reçoit une réponse pertinente sans attendre.

## Cas d'usage concrets

### Immobilier
Un prospect envoie la photo d'un bien qu'il souhaite estimer. L'agent analyse les caractéristiques visibles et déclenche le processus d'estimation.

### Assurance
Un sinistré envoie une photo des dégâts. L'agent évalue la situation, crée un dossier et transfère les informations à un conseiller.

### E-commerce
Un client envoie une photo d'un produit défectueux. L'agent identifie le problème, valide la garantie et initie l'échange.

### Médical / Santé
Un patient envoie une photo d'une ordonnance. L'agent extrait les informations et pré-remplit le dossier de prise en charge.

### Documents administratifs
Un client envoie une photo de sa CNI ou d'un justificatif. L'agent extrait les données (nom, prénom, date de naissance) et les enregistre dans le CRM.

## Limites à connaître

- La qualité de l'image impacte la précision de l'analyse
- Les informations médicales ou légales sensibles doivent toujours être vérifiées par un humain
- Certaines réglementations sectorielles peuvent limiter l'automatisation complète

## Conclusion

La vision IA dans WhatsApp transforme la façon dont les entreprises traitent les demandes clients. Ce qui prenait des heures de traitement manuel se fait désormais en secondes, 24h/24.
```

- [ ] **Step 4: Create fourth article**

Create `content/blog/5-cas-usage-agent-ia-whatsapp.mdx`:

```mdx
---
title: "5 cas d'usage d'un agent IA WhatsApp en entreprise"
date: "2026-03-15"
description: "Découvrez 5 façons concrètes d'utiliser un agent IA WhatsApp pour automatiser votre service client, qualifier vos leads et améliorer vos conversions."
readTime: "8 min"
---

## 1. Qualification de leads immobiliers 24/7

**Le problème :** Les prospects immobiliers contactent les agences à toute heure, souvent le soir et le week-end. Sans réponse rapide, ils passent chez un concurrent.

**La solution :** L'agent IA WhatsApp reçoit chaque message, pose les questions de qualification (budget, localisation, type de bien, délai), analyse les photos de biens envoyées par les prospects, et transfère les leads chauds à l'agent immobilier avec un dossier complet.

**Résultats typiques :** +45% de leads qualifiés, 0 appel manqué hors horaires.

---

## 2. Prise de RDV médicaux automatisée

**Le problème :** Les cabinets médicaux reçoivent des dizaines d'appels et messages par jour pour des prises de RDV. La secrétaire passe 40% de son temps sur cette tâche.

**La solution :** L'agent IA gère les demandes de RDV via WhatsApp — il consulte le calendrier Cal.com en temps réel, propose des créneaux, confirme le RDV et envoie un rappel automatique 24h avant.

**Résultats typiques :** -70% de temps de secrétariat sur la gestion des RDV.

---

## 3. Support e-commerce et gestion des retours

**Le problème :** Les clients e-commerce envoient des photos de produits défectueux, des questions sur les commandes, des demandes de retour. Traitement manuel = coût élevé et délai long.

**La solution :** L'agent IA analyse les photos de produits défectueux, accède au statut de commande via l'API, initie les retours et remboursements selon les règles définies.

**Résultats typiques :** 80% des demandes SAV résolues sans intervention humaine.

---

## 4. Campagnes de prospection sortante

**Le problème :** La prospection manuelle via WhatsApp est chronophage et peu scalable. Envoyer 500 messages personnalisés prend une journée entière.

**La solution :** L'agent IA envoie des templates WhatsApp Business pré-approuvés à une liste de prospects, engage la conversation avec ceux qui répondent, qualifie leur intérêt et planifie un appel commercial.

**Résultats typiques :** 10x plus de prospects contactés, qualification automatique des intérêts.

---

## 5. Onboarding clients et formation

**Le problème :** L'onboarding de nouveaux clients nécessite l'envoi de nombreux documents, guides et tutoriels. Suivi difficile à grande échelle.

**La solution :** L'agent IA guide les nouveaux clients étape par étape via WhatsApp — envoi de documents PDF, réponse aux questions, validation des étapes et escalade vers un humain si nécessaire.

**Résultats typiques :** Taux d'activation clients +35%, réduction du churn en période de démarrage.

---

## Comment choisir votre cas d'usage ?

Commencez par identifier votre **volume de messages répétitifs**. Si plus de 50% de vos échanges WhatsApp concernent les mêmes 5-10 types de demandes, l'automatisation par agent IA est pertinente et rentable rapidement.
```

- [ ] **Step 5: Create fifth article**

Create `content/blog/combien-coute-agent-ia-whatsapp-2026.mdx`:

```mdx
---
title: "Combien coûte un agent IA WhatsApp en 2026 ?"
date: "2026-03-20"
description: "Découvrez les coûts réels d'un agent IA WhatsApp : développement, mensuel, API. Comparatif des options du marché pour faire le bon choix."
readTime: "6 min"
---

## Les composants du coût d'un agent IA WhatsApp

Le coût total d'un agent IA WhatsApp se décompose en plusieurs postes :

### 1. Le développement / setup (coût unique)

C'est le coût de création de l'agent : analyse des besoins, développement des scénarios, configuration de l'intégration WhatsApp Business, connexion aux outils (CRM, agenda), tests et mise en production.

**Fourchette de marché :** 1 500 € à 8 000 € selon la complexité.

### 2. Le coût mensuel (récurrent)

Comprend l'hébergement de l'agent, les appels API aux LLMs (OpenAI, Claude), les frais de téléphonie WhatsApp Business (Meta), et la maintenance.

**Fourchette de marché :** 200 € à 1 500 €/mois selon le volume de conversations.

### 3. Les frais WhatsApp Business (Meta)

Meta facture les conversations initiées par l'entreprise (templates). Les conversations initiées par le client (dans les 24h) sont gratuites.

**Tarif Meta :** Environ 0,05 € à 0,15 € par conversation initiée par l'entreprise (varie selon le pays).

## Comparaison : agence vs SaaS vs développement interne

| Option | Coût setup | Mensuel | Personnalisation | Délai |
|--------|-----------|---------|-----------------|-------|
| Agence spécialisée | 2 000–8 000 € | 200–800 € | Maximale | 2–4 semaines |
| SaaS no-code | 0–500 € | 100–500 € | Limitée | 1–3 jours |
| Développement interne | 10 000–50 000 € | 500–2 000 € | Totale | 2–6 mois |

## Quel ROI attendre ?

Si votre équipe passe 2h/jour sur WhatsApp à un coût de 25 €/h, cela représente **1 100 €/mois** de temps humain. Un agent IA à 400 €/mois génère une économie nette de **700 €/mois** dès le premier mois.

En ajoutant les leads qualifiés hors horaires (souvent +20-30% de conversions supplémentaires), le ROI est généralement atteint en **1 à 3 mois**.

## Notre recommandation

Pour une PME avec 50 à 200 conversations WhatsApp par jour, une solution développée par une agence spécialisée offre le meilleur rapport personnalisation/coût. Le no-code est adapté aux cas très simples, et le développement interne uniquement justifié pour les grandes entreprises avec des équipes tech dédiées.

## Conclusion

En 2026, un agent IA WhatsApp représente un investissement de 2 000 à 5 000 € à la mise en place, et 300 à 800 €/mois en récurrent. Pour la plupart des entreprises traitant plus de 20 messages/jour, c'est rentable en moins de 3 mois.
```

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add 5 SEO blog articles in MDX"
```

---

## Task 10: SEO — Metadata, JSON-LD, Sitemap, robots.txt

**Files:**
- Modify: `app/layout.tsx`
- Create: `app/sitemap.ts`
- Create: `public/robots.txt`
- Create: `components/shared/JsonLd.tsx`

- [ ] **Step 1: Create `components/shared/JsonLd.tsx`**

```typescript
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

- [ ] **Step 2: Add Organization JSON-LD to `app/layout.tsx`**

Add inside `<head>` via the existing layout. Update `app/layout.tsx`:

```typescript
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/shared/JsonLd";

export const metadata: Metadata = {
  title: {
    default: "Agent IA WhatsApp | Automatisez vos messages clients 24/7",
    template: "%s | WhatsAgentIA",
  },
  description:
    "Le seul agent IA WhatsApp qui comprend les vocaux et analyse les photos. Automatisez vos réponses clients, qualifiez vos leads, prenez des RDV — 24h/24.",
  metadataBase: new URL("https://whatsapp-agent-ia.vercel.app"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "WhatsAgentIA",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WhatsAgentIA",
  url: "https://whatsapp-agent-ia.vercel.app",
  description:
    "Agence spécialisée dans le développement d'agents IA WhatsApp Business pour entreprises.",
  serviceArea: "France, Belgique, Suisse",
  offers: {
    "@type": "Service",
    name: "Agent IA WhatsApp",
    description:
      "Développement d'agents IA WhatsApp capables de comprendre les vocaux et analyser les photos clients.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <JsonLd data={organizationJsonLd} />
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Create `app/sitemap.ts`**

```typescript
import { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/mdx";

const BASE_URL = "https://whatsapp-agent-ia.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogSlugs = getAllSlugs();
  const blogEntries = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/services/agent-ia-whatsapp`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/tarifs`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    ...blogEntries,
  ];
}
```

- [ ] **Step 4: Create `public/robots.txt`**

```
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://whatsapp-agent-ia.vercel.app/sitemap.xml
```

- [ ] **Step 5: Verify sitemap works**

```bash
npm run dev
```

Open http://localhost:3000/sitemap.xml — verify all URLs appear including blog posts.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add JSON-LD, sitemap, robots.txt SEO setup"
```

---

## Task 11: Build Verification + Vercel Deploy

**Files:**
- Create: `.gitignore` (verify .env.local is excluded)
- Create: `vercel.json` (optional)

- [ ] **Step 1: Verify .gitignore excludes .env.local**

```bash
grep ".env.local" .gitignore
```

Expected: `.env.local` appears in .gitignore output.

- [ ] **Step 2: Run production build locally**

```bash
npm run build
```

Expected: Build succeeds with no TypeScript errors. Note any warnings but do not proceed if there are errors.

- [ ] **Step 3: Fix any build errors before deploying**

If TypeScript errors appear, fix them in the relevant files before continuing.

- [ ] **Step 4: Initialize git and push to GitHub**

```bash
git remote add origin https://github.com/YOUR_USERNAME/whatsapp-agent-ia.git
git branch -M main
git push -u origin main
```

Note: Create the GitHub repo first at github.com/new.

- [ ] **Step 5: Deploy to Vercel**

```bash
npx vercel --prod
```

Follow the prompts:
- Set up and deploy: Y
- Which scope: select your account
- Link to existing project: N
- Project name: `whatsapp-agent-ia`
- Directory: `./`

- [ ] **Step 6: Add environment variables in Vercel dashboard**

Go to your Vercel project → Settings → Environment Variables. Add:
```
RESEND_API_KEY=re_YOUR_KEY
RESEND_TO_EMAIL=your@email.com
NEXT_PUBLIC_WA_NUMBER=33600000000
NEXT_PUBLIC_CAL_LINK=https://cal.com/your-account/demo
```

- [ ] **Step 7: Redeploy with env vars**

```bash
npx vercel --prod
```

- [ ] **Step 8: Verify deployment**

Open the Vercel URL — verify:
- Home page loads with dark theme and green accents
- Navigation links work
- /services/agent-ia-whatsapp renders with FAQ
- /tarifs renders 3 pricing cards
- /blog shows 5 articles
- /blog/[slug] renders individual articles
- /contact form renders
- /sitemap.xml returns valid XML

- [ ] **Step 9: Final commit**

```bash
git add -A
git commit -m "feat: complete WhatsAgentIA site — ready for production"
git push
```

---

## Self-Review Checklist

**Spec coverage:**
- ✅ Home page with all sections (Hero, Problem, Features, HowItWorks, Stats, Pricing, CTA)
- ✅ /services/agent-ia-whatsapp with full content + FAQ
- ✅ /tarifs with 3-column pricing
- ✅ /contact with form + Resend API route
- ✅ /blog with MDX list and article pages
- ✅ 5 SEO articles
- ✅ Dark theme with WhatsApp green (#25D366)
- ✅ 2 exclusive USP badges (Vision IA + Vocal)
- ✅ Cal.com + WhatsApp CTAs throughout
- ✅ Mobile sticky CTA
- ✅ JSON-LD Organization schema
- ✅ Sitemap + robots.txt
- ✅ Vercel deployment
- ✅ Resend env vars documented

**Pending (require user input before go-live):**
- [ ] Real WhatsApp number in NEXT_PUBLIC_WA_NUMBER
- [ ] Real Cal.com link in NEXT_PUBLIC_CAL_LINK
- [ ] Real Resend API key + destination email
- [ ] Pricing figures (currently "Sur devis")
- [ ] Real testimonials and client logos
