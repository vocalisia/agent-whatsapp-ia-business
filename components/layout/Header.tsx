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
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <MessageCircle className="text-wa" size={24} />
          <span className="text-white">
            WhatsAgent<span className="text-wa">IA</span>
          </span>
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
            href={`https://wa.me/${waNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-wa hover:bg-wa-hover text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
          >
            <MessageCircle size={16} />
            Audit gratuit
          </a>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
