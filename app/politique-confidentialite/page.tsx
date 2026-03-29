import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité d'AgenticWhatsup — collecte, utilisation et protection de vos données personnelles conformément au RGPD.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <h1
        className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
        style={{ fontFamily: "Onest, sans-serif" }}
      >
        Politique de confidentialité
      </h1>
      <p className="text-slate-400 text-sm mb-10">Dernière mise à jour : mars 2026</p>

      <div className="space-y-10 text-slate-300 text-sm leading-relaxed">

        {/* Responsable */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">1. Responsable du traitement</h2>
          <p>
            Le responsable du traitement des données collectées via le site{" "}
            <strong className="text-white">agentic-whatsup.com</strong> est :
          </p>
          <div className="mt-3 bg-surface border border-surface-2 rounded-xl p-5 space-y-1.5">
            <p><span className="text-slate-400">Société :</span> <strong className="text-white">VAULT 369 LTD</strong></p>
            <p><span className="text-slate-400">Immatriculation :</span> 16952492 (Companies House, Royaume-Uni)</p>
            <p><span className="text-slate-400">Adresse :</span> 128 City Road, EC1V 2NX, Londres, Royaume-Uni</p>
            <p><span className="text-slate-400">Contact DPO :</span>{" "}
              <a href="mailto:contact@vocalis.pro" className="text-wa hover:underline">
                contact@vocalis.pro
              </a>
            </p>
          </div>
        </section>

        {/* Données collectées */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">2. Données collectées</h2>
          <p>Nous collectons les données suivantes :</p>
          <div className="mt-3 space-y-3">
            {[
              {
                cat: "Formulaire de réservation (iClosed)",
                items: "Nom, prénom, adresse e-mail, numéro de téléphone, nom de l'entreprise, message.",
              },
              {
                cat: "Navigation (Google Analytics)",
                items: "Pages visitées, durée de session, pays, type d'appareil, source de trafic. Données anonymisées.",
              },
              {
                cat: "WhatsApp Business (service client)",
                items: "Messages échangés avec l'agent IA : texte, vocaux, photos, documents. Traités uniquement pour répondre à vos demandes.",
              },
            ].map(({ cat, items }) => (
              <div key={cat} className="bg-surface border border-surface-2 rounded-xl p-4">
                <p className="font-semibold text-white mb-1">{cat}</p>
                <p className="text-slate-400">{items}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Finalités */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">3. Finalités du traitement</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Répondre à vos demandes de devis et sessions stratégiques</li>
            <li>Gérer la relation commerciale et le suivi de projet</li>
            <li>Analyser l'audience du site pour améliorer les contenus (analytics anonymisés)</li>
            <li>Envoyer des communications commerciales avec votre consentement</li>
            <li>Respecter nos obligations légales et contractuelles</li>
          </ul>
        </section>

        {/* Base légale */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">4. Base légale</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white">Consentement</strong> — pour l'envoi de communications marketing et l'utilisation de cookies non essentiels.</li>
            <li><strong className="text-white">Exécution d'un contrat</strong> — pour traiter vos demandes et délivrer nos services.</li>
            <li><strong className="text-white">Intérêt légitime</strong> — pour l'analyse d'audience anonymisée et la sécurité du site.</li>
          </ul>
        </section>

        {/* Conservation */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">5. Durée de conservation</h2>
          <div className="bg-surface border border-surface-2 rounded-xl overflow-hidden">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-surface-2">
                  <th className="text-left text-white font-semibold px-4 py-3">Catégorie de données</th>
                  <th className="text-left text-white font-semibold px-4 py-3">Durée</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-2">
                {[
                  ["Données de contact (formulaire)", "3 ans à compter du dernier contact"],
                  ["Données contractuelles (clients)", "5 ans après la fin du contrat"],
                  ["Messages WhatsApp (agent IA)", "Configurable selon le projet (90 jours par défaut)"],
                  ["Données analytics", "26 mois (configuration Google Analytics standard)"],
                  ["Cookies essentiels", "13 mois maximum"],
                ].map(([cat, duration]) => (
                  <tr key={cat as string}>
                    <td className="px-4 py-3 text-slate-300">{cat}</td>
                    <td className="px-4 py-3 text-slate-400">{duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Destinataires */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">6. Destinataires des données</h2>
          <p>Vos données peuvent être transmises aux sous-traitants suivants, dans le strict cadre de la fourniture des services :</p>
          <ul className="mt-3 list-disc pl-5 space-y-1.5">
            <li><strong className="text-white">iClosed</strong> — outil de prise de rendez-vous en ligne</li>
            <li><strong className="text-white">Google LLC</strong> — analytics (données anonymisées, serveurs UE)</li>
            <li><strong className="text-white">Meta Platforms Ireland Ltd</strong> — infrastructure WhatsApp Business API</li>
            <li><strong className="text-white">Vercel Inc.</strong> — hébergement du site web</li>
          </ul>
          <p className="mt-3">
            Aucune donnée n'est vendue à des tiers. Les transferts hors UE sont encadrés par des clauses contractuelles types (CCT) conformes au RGPD.
          </p>
        </section>

        {/* Vos droits */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">7. Vos droits (RGPD)</h2>
          <p>Conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679), vous disposez des droits suivants :</p>
          <ul className="mt-3 list-disc pl-5 space-y-1.5">
            <li><strong className="text-white">Droit d'accès</strong> — obtenir une copie de vos données</li>
            <li><strong className="text-white">Droit de rectification</strong> — corriger des données inexactes</li>
            <li><strong className="text-white">Droit à l'effacement</strong> — demander la suppression de vos données</li>
            <li><strong className="text-white">Droit à la portabilité</strong> — recevoir vos données dans un format structuré</li>
            <li><strong className="text-white">Droit d'opposition</strong> — vous opposer à certains traitements</li>
            <li><strong className="text-white">Droit à la limitation</strong> — limiter le traitement dans certains cas</li>
          </ul>
          <p className="mt-3">
            Pour exercer ces droits, contactez-nous par e-mail :{" "}
            <a href="mailto:contact@vocalis.pro" className="text-wa hover:underline">
              contact@vocalis.pro
            </a>
            . Nous nous engageons à répondre dans un délai de <strong className="text-white">30 jours</strong>.
          </p>
          <p className="mt-3">
            Vous disposez également du droit d'introduire une réclamation auprès d'une autorité de contrôle compétente
            (ICO au Royaume-Uni, CNIL en France, PFPDT en Suisse).
          </p>
        </section>

        {/* Cookies */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">8. Politique cookies</h2>
          <p>Ce site utilise les types de cookies suivants :</p>
          <div className="mt-3 bg-surface border border-surface-2 rounded-xl overflow-hidden">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-surface-2">
                  <th className="text-left text-white font-semibold px-4 py-3">Type</th>
                  <th className="text-left text-white font-semibold px-4 py-3">Finalité</th>
                  <th className="text-left text-white font-semibold px-4 py-3">Consentement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-2">
                {[
                  ["Essentiels", "Fonctionnement du site", "Non requis"],
                  ["Analytics (GA4)", "Mesure d'audience anonymisée", "Requis"],
                  ["Tiers (iClosed)", "Prise de rendez-vous", "Requis"],
                ].map(([type, purpose, consent]) => (
                  <tr key={type as string}>
                    <td className="px-4 py-3 text-slate-300 font-medium">{type}</td>
                    <td className="px-4 py-3 text-slate-400">{purpose}</td>
                    <td className="px-4 py-3 text-slate-400">{consent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            Vous pouvez gérer vos préférences cookies à tout moment depuis les paramètres de votre navigateur.
          </p>
        </section>

        {/* Sécurité */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">9. Sécurité des données</h2>
          <p>
            Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données
            contre tout accès non autorisé, perte, destruction ou divulgation : chiffrement HTTPS, accès restreint
            aux données, hébergement sécurisé et audits réguliers.
          </p>
        </section>

        {/* Modifications */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">10. Modifications</h2>
          <p>
            Cette politique peut être mise à jour à tout moment. Toute modification substantielle sera notifiée
            via le site. La version en vigueur est celle affichée sur cette page avec la date de mise à jour.
          </p>
        </section>

        <p className="text-slate-500 text-xs pt-4 border-t border-surface-2">
          Dernière mise à jour : mars 2026 — VAULT 369 LTD
        </p>
      </div>
    </div>
  );
}
