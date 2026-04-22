import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });
  return {
    title: t("title"),
    description: t("metaDescription"),
    alternates: {
      canonical: `https://agentic-whatsup.com/${locale}/politique-confidentialite`,
      languages: {
        fr: "https://agentic-whatsup.com/fr/politique-confidentialite",
        en: "https://agentic-whatsup.com/en/politique-confidentialite",
        de: "https://agentic-whatsup.com/de/politique-confidentialite",
        nl: "https://agentic-whatsup.com/nl/politique-confidentialite",
        "x-default": "https://agentic-whatsup.com/fr/politique-confidentialite",
      },
    },
  };
}

export default async function PolitiqueConfidentialitePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });

  const collectedCategories = t.raw("collectedCategories") as Array<{ cat: string; items: string }>;
  const purposes = t.raw("purposes") as string[];
  const legalBases = t.raw("legalBases") as Array<{ name: string; desc: string }>;
  const retentionRows = t.raw("retentionRows") as Array<{ cat: string; duration: string }>;
  const recipients = t.raw("recipients") as Array<{ name: string; desc: string }>;
  const rights = t.raw("rights") as Array<{ name: string; desc: string }>;
  const cookiesRows = t.raw("cookiesRows") as Array<{ type: string; purpose: string; consent: string }>;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <h1
        className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
        style={{ fontFamily: "Onest, sans-serif" }}
      >
        {t("title")}
      </h1>
      <p className="text-slate-400 text-sm mb-10">{t("lastUpdate")}</p>

      <div className="space-y-10 text-slate-300 text-sm leading-relaxed">

        {/* Responsable */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">{t("controllerTitle")}</h2>
          <p dangerouslySetInnerHTML={{ __html: t("controllerIntro") }} />
          <div className="mt-3 bg-surface border border-surface-2 rounded-xl p-5 space-y-1.5">
            <p><span className="text-slate-400">{t("companyLabel")} :</span> <strong className="text-white">{t("companyValue")}</strong></p>
            <p><span className="text-slate-400">{t("regLabel")} :</span> {t("regValue")}</p>
            <p><span className="text-slate-400">{t("addressLabel")} :</span> {t("addressValue")}</p>
            <p><span className="text-slate-400">{t("dpoLabel")} :</span>{" "}
              <a href="mailto:contact@vocalis.pro" className="text-wa hover:underline">
                contact@vocalis.pro
              </a>
            </p>
          </div>
        </section>

        {/* Données collectées */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">{t("collectedTitle")}</h2>
          <p>{t("collectedIntro")}</p>
          <div className="mt-3 space-y-3">
            {collectedCategories.map(({ cat, items }) => (
              <div key={cat} className="bg-surface border border-surface-2 rounded-xl p-4">
                <p className="font-semibold text-white mb-1">{cat}</p>
                <p className="text-slate-400">{items}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Finalités */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">{t("purposeTitle")}</h2>
          <ul className="list-disc pl-5 space-y-2">
            {purposes.map((purpose) => (
              <li key={purpose}>{purpose}</li>
            ))}
          </ul>
        </section>

        {/* Base légale */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">{t("legalBasisTitle")}</h2>
          <ul className="list-disc pl-5 space-y-2">
            {legalBases.map(({ name, desc }) => (
              <li key={name}><strong className="text-white">{name}</strong> — {desc}</li>
            ))}
          </ul>
        </section>

        {/* Conservation */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">{t("retentionTitle")}</h2>
          <div className="bg-surface border border-surface-2 rounded-xl overflow-hidden">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-surface-2">
                  <th className="text-left text-white font-semibold px-4 py-3">{t("retentionCategoryHeader")}</th>
                  <th className="text-left text-white font-semibold px-4 py-3">{t("retentionDurationHeader")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-2">
                {retentionRows.map(({ cat, duration }) => (
                  <tr key={cat}>
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
          <h2 className="text-lg font-bold text-white mb-3">{t("recipientsTitle")}</h2>
          <p>{t("recipientsIntro")}</p>
          <ul className="mt-3 list-disc pl-5 space-y-1.5">
            {recipients.map(({ name, desc }) => (
              <li key={name}><strong className="text-white">{name}</strong> — {desc}</li>
            ))}
          </ul>
          <p className="mt-3">{t("recipientsNoSale")}</p>
        </section>

        {/* Vos droits */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">{t("rightsTitle")}</h2>
          <p>{t("rightsIntro")}</p>
          <ul className="mt-3 list-disc pl-5 space-y-1.5">
            {rights.map(({ name, desc }) => (
              <li key={name}><strong className="text-white">{name}</strong> — {desc}</li>
            ))}
          </ul>
          <p className="mt-3">
            {t("rightsContact")}{" "}
            <a href="mailto:contact@vocalis.pro" className="text-wa hover:underline">
              contact@vocalis.pro
            </a>
            .{" "}
            <span dangerouslySetInnerHTML={{ __html: t("rightsDelay") }} />
          </p>
          <p className="mt-3">{t("rightsAuthority")}</p>
        </section>

        {/* Cookies */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">{t("cookiesTitle")}</h2>
          <p>{t("cookiesIntro")}</p>
          <div className="mt-3 bg-surface border border-surface-2 rounded-xl overflow-hidden">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-surface-2">
                  <th className="text-left text-white font-semibold px-4 py-3">{t("cookiesTypeHeader")}</th>
                  <th className="text-left text-white font-semibold px-4 py-3">{t("cookiesPurposeHeader")}</th>
                  <th className="text-left text-white font-semibold px-4 py-3">{t("cookiesConsentHeader")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-2">
                {cookiesRows.map(({ type, purpose, consent }) => (
                  <tr key={type}>
                    <td className="px-4 py-3 text-slate-300 font-medium">{type}</td>
                    <td className="px-4 py-3 text-slate-400">{purpose}</td>
                    <td className="px-4 py-3 text-slate-400">{consent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3">{t("cookiesManage")}</p>
        </section>

        {/* Sécurité */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">{t("securityTitle")}</h2>
          <p>{t("securityText")}</p>
        </section>

        {/* Modifications */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">{t("changesTitle")}</h2>
          <p>{t("changesText")}</p>
        </section>

        <p className="text-slate-500 text-xs pt-4 border-t border-surface-2">
          {t("footer")}
        </p>
      </div>
    </div>
  );
}
