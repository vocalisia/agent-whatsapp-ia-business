import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER;
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || "/contact";

  return (
    <footer className="bg-surface border-t border-surface-2 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg mb-3">
            <MessageCircle className="text-wa" size={20} />
            <span>
              Agentic<span className="text-wa">Whatsup</span>
            </span>
          </div>
          <p className="text-slate-400 text-sm">
            Le seul agent IA WhatsApp qui voit, entend et comprend vos clients.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <Link
                href="/services/agent-ia-whatsapp"
                className="hover:text-wa transition-colors"
              >
                Agent IA WhatsApp
              </Link>
            </li>
            <li>
              <Link
                href="/services/qualification-leads"
                className="hover:text-wa transition-colors"
              >
                Qualification de leads
              </Link>
            </li>
            <li>
              <Link
                href="/services/campagnes-whatsapp"
                className="hover:text-wa transition-colors"
              >
                Campagnes WhatsApp
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-3">Ressources</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <Link href="/blog" className="hover:text-wa transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/tarifs" className="hover:text-wa transition-colors">
                Tarifs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-wa transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-3">Légal</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <Link
                href="/mentions-legales"
                className="hover:text-wa transition-colors"
              >
                Mentions légales
              </Link>
            </li>
            <li>
              <Link
                href="/politique-confidentialite"
                className="hover:text-wa transition-colors"
              >
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-surface-2 py-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} AgenticWhatsup. Tous droits réservés.
      </div>
      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-bg border-t border-surface flex">
        <a
          href={`https://wa.me/${waNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-wa text-white font-semibold py-4 text-sm"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
        <a
          href={calLink}
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
