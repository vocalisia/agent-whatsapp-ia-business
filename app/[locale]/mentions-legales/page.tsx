import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  return {
    title: t("title"),
    description: t("metaDescription"),
    alternates: {
      canonical: `https://agentic-whatsup.com/${locale}/mentions-legales`,
      languages: {
        fr: "https://agentic-whatsup.com/fr/mentions-legales",
        en: "https://agentic-whatsup.com/en/mentions-legales",
        de: "https://agentic-whatsup.com/de/mentions-legales",
        nl: "https://agentic-whatsup.com/nl/mentions-legales",
        "x-default": "https://agentic-whatsup.com/fr/mentions-legales",
      },
    },
  };
}

export default async function MentionsLegalesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  const canonicalUrl = `https://agentic-whatsup.com/${locale}/mentions-legales`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "name": t("title"),
        "url": canonicalUrl,
        "inLanguage": locale,
        "isPartOf": { "@id": "https://agentic-whatsup.com/#website" },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "AgenticWhatsup", "item": "https://agentic-whatsup.com" },
          { "@type": "ListItem", "position": 2, "name": t("title"), "item": canonicalUrl },
        ],
      }) }} />
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <h1
        className="text-3xl sm:text-4xl font-extrabold text-white mb-10"
        style={{ fontFamily: "Onest, sans-serif" }}
      >
        {t("title")}
      </h1>

      <div className="space-y-10 text-slate-300 text-sm leading-relaxed">

        {/* Éditeur */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">{t("editorTitle")}</h2>
          <p dangerouslySetInnerHTML={{ __html: t("editorIntro") }} />
          <div className="mt-3 bg-surface border border-surface-2 rounded-xl p-5 space-y-1.5">
            <p><span className="text-slate-400">{t("companyLabel")} :</span> <strong className="text-white">{t("companyValue")}</strong></p>
            <p><span className="text-slate-400">{t("legalFormLabel")} :</span> {t("legalFormValue")}</p>
            <p><span className="text-slate-400">{t("regNumberLabel")} :</span> {t("regNumberValue")}</p>
            <p><span className="text-slate-400">{t("addressLabel")} :</span> {t("addressValue")}</p>
            <p><span className="text-slate-400">{t("swissOfficeLabel")} :</span> {t("swissOfficeValue")}</p>
            <p><span className="text-slate-400">{t("contactLabel")} :</span>{" "}
              <a href="mailto:contact@vocalis.pro" className="text-wa hover:underline">
                contact@vocalis.pro
              </a>
            </p>
            <p><span className="text-slate-400">{t("whatsappLabel")} :</span>{" "}
              <a href="https://wa.me/41799394222" className="text-wa hover:underline" target="_blank" rel="noopener noreferrer">
                +41 799 394 222
              </a>
            </p>
          </div>
        </section>

        {/* Directeur de publication */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">{t("directorTitle")}</h2>
          <p>{t("directorText")}</p>
        </section>

        {/* Hébergeur */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">{t("hostingTitle")}</h2>
          <p>{t("hostingIntro")}</p>
          <div className="mt-3 bg-surface border border-surface-2 rounded-xl p-5 space-y-1.5">
            <p><span className="text-slate-400">{t("hostingCompanyLabel")} :</span> <strong className="text-white">{t("hostingCompanyValue")}</strong></p>
            <p><span className="text-slate-400">{t("hostingAddressLabel")} :</span> {t("hostingAddressValue")}</p>
            <p><span className="text-slate-400">{t("hostingSiteLabel")} :</span>{" "}
              <a href="https://vercel.com" className="text-wa hover:underline" target="_blank" rel="noopener noreferrer">
                vercel.com
              </a>
            </p>
          </div>
        </section>

        {/* Propriété intellectuelle */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">{t("ipTitle")}</h2>
          <p dangerouslySetInnerHTML={{ __html: t("ipText1") }} />
          <p className="mt-3">{t("ipText2")}</p>
        </section>

        {/* Responsabilité */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">{t("liabilityTitle")}</h2>
          <p>{t("liabilityText1")}</p>
          <p className="mt-3">{t("liabilityText2")}</p>
        </section>

        {/* Cookies */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">{t("cookiesTitle")}</h2>
          <p>
            {t("cookiesText")}{" "}
            <a href={`/${locale}/politique-confidentialite`} className="text-wa hover:underline">
              {t("cookiesLink")}
            </a>.
          </p>
        </section>

        {/* Droit applicable */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">{t("lawTitle")}</h2>
          <p>{t("lawText")}</p>
        </section>

        <p className="text-slate-500 text-xs pt-4 border-t border-surface-2">
          {t("lastUpdate")}
        </p>
      </div>
    </div>
    </>
  );
}
