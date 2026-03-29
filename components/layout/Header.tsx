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
  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <MessageCircle className="text-wa" size={24} />
            <span className="text-white">
              Agentic<span className="text-wa">Whatsup</span>
            </span>
          </Link>
          <a
            href="https://vocalis.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 bg-surface border border-surface-2 hover:border-wa/40 rounded-full px-2.5 py-1 transition-colors group"
          >
            {/* Vocalis logo mark */}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="7" cy="7" r="6.5" stroke="#25D366" strokeWidth="1"/>
              <path d="M4 5L7 9.5L10 5" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[10px] text-slate-500 group-hover:text-slate-300 transition-colors font-medium">
              by <span className="text-slate-300">vocalis.pro</span>
            </span>
          </a>
        </div>
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
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-wa hover:bg-wa-hover text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
          >
            <MessageCircle size={16} />
            Audit gratuit
          </Link>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
