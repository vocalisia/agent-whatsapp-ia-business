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
  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER;

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
              href={`https://wa.me/${waNumber}`}
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
