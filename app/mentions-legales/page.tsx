import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales d'AgenticWhatsup — informations légales, éditeur, hébergeur et propriété intellectuelle.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <h1
        className="text-3xl sm:text-4xl font-extrabold text-white mb-10"
        style={{ fontFamily: "Onest, sans-serif" }}
      >
        Mentions légales
      </h1>

      <div className="space-y-10 text-slate-300 text-sm leading-relaxed">

        {/* Éditeur */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">Éditeur du site</h2>
          <p>Le site <strong className="text-white">agentic-whatsup.com</strong> est édité par :</p>
          <div className="mt-3 bg-surface border border-surface-2 rounded-xl p-5 space-y-1.5">
            <p><span className="text-slate-400">Raison sociale :</span> <strong className="text-white">VAULT 369 LTD</strong></p>
            <p><span className="text-slate-400">Forme juridique :</span> Private Limited Company (Ltd)</p>
            <p><span className="text-slate-400">Numéro d'immatriculation :</span> 16952492</p>
            <p><span className="text-slate-400">Siège social :</span> 128 City Road, EC1V 2NX, Londres, Royaume-Uni</p>
            <p><span className="text-slate-400">Bureau en Suisse :</span> Chem. Saint-Hubert 2, 1950 Sion, Suisse</p>
            <p><span className="text-slate-400">Contact :</span>{" "}
              <a href="mailto:contact@vocalis.pro" className="text-wa hover:underline">
                contact@vocalis.pro
              </a>
            </p>
            <p><span className="text-slate-400">WhatsApp :</span>{" "}
              <a href="https://wa.me/41799394222" className="text-wa hover:underline" target="_blank" rel="noopener noreferrer">
                +41 799 394 222
              </a>
            </p>
          </div>
        </section>

        {/* Directeur de publication */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">Directeur de la publication</h2>
          <p>Le représentant légal de VAULT 369 LTD.</p>
        </section>

        {/* Hébergeur */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">Hébergement</h2>
          <p>Le site est hébergé par :</p>
          <div className="mt-3 bg-surface border border-surface-2 rounded-xl p-5 space-y-1.5">
            <p><span className="text-slate-400">Société :</span> <strong className="text-white">Vercel Inc.</strong></p>
            <p><span className="text-slate-400">Adresse :</span> 340 Pine Street, Suite 900, San Francisco, CA 94104, États-Unis</p>
            <p><span className="text-slate-400">Site :</span>{" "}
              <a href="https://vercel.com" className="text-wa hover:underline" target="_blank" rel="noopener noreferrer">
                vercel.com
              </a>
            </p>
          </div>
        </section>

        {/* Propriété intellectuelle */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu de ce site (textes, images, graphiques, logo, icônes, sons, logiciels, etc.) est
            la propriété exclusive de <strong className="text-white">VAULT 369 LTD</strong> ou de ses partenaires,
            et est protégé par les lois en vigueur sur la propriété intellectuelle.
          </p>
          <p className="mt-3">
            Toute reproduction, représentation, modification, publication, adaptation totale ou partielle des éléments
            du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable
            de VAULT 369 LTD.
          </p>
        </section>

        {/* Responsabilité */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">Limitation de responsabilité</h2>
          <p>
            VAULT 369 LTD s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site,
            dont elle se réserve le droit de corriger le contenu à tout moment et sans préavis.
            VAULT 369 LTD ne peut être tenu responsable de l'utilisation faite des informations disponibles sur ce site,
            ni des dommages directs ou indirects pouvant en résulter.
          </p>
          <p className="mt-3">
            Les liens hypertextes présents sur le site peuvent renvoyer vers d'autres sites internet.
            VAULT 369 LTD n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
          </p>
        </section>

        {/* Cookies */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">Cookies</h2>
          <p>
            Ce site utilise des cookies à des fins d'analyse d'audience (Google Analytics) et d'amélioration de
            l'expérience utilisateur. Vous pouvez désactiver les cookies via les paramètres de votre navigateur.
            Pour plus d'informations, consultez notre{" "}
            <a href="/politique-confidentialite" className="text-wa hover:underline">
              Politique de confidentialité
            </a>.
          </p>
        </section>

        {/* Droit applicable */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">Droit applicable</h2>
          <p>
            Les présentes mentions légales sont régies par le droit anglais. En cas de litige,
            les tribunaux compétents seront ceux de Londres, Royaume-Uni, sauf disposition légale contraire.
          </p>
        </section>

        <p className="text-slate-500 text-xs pt-4 border-t border-surface-2">
          Dernière mise à jour : mars 2026
        </p>
      </div>
    </div>
  );
}
