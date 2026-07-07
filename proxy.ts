import createMiddleware from "next-intl/middleware";
import { routing } from "./lib/i18n/routing";
import { NextResponse } from "next/server";

const handleI18nRouting = createMiddleware(routing);

const deletedRecouvrementSlugs = new Set([
  "recouvrement-creance-whatsapp-pme",
  "facture-impayee-pme-relance-whatsapp",
  "lettre-mise-en-demeure-facture-impayee",
  "modele-relance-facture-impayee",
  "mise-en-demeure-par-mail",
  "injonction-de-payer-en-ligne-facture",
  "huissier-injonction-de-payer-commissaire-justice",
  "delai-prescription-facture-cinq-ans",
  "interets-retard-b2b-calcul",
  "indemnite-forfaitaire-recouvrement-b2b",
  "saisie-attribution-bancaire-facture-impayee",
  "societe-recouvrement-comment-ca-marche",
  "agence-recouvrement-avis-choisir",
  "logiciel-relance-impaye-pme",
  "recouvrement-amiable-ou-judiciaire",
  "petites-creances-procedure-simplifiee",
  "assignation-paiement-facture-impayee",
  "relance-facture-impayee-calendrier",
  "relance-client-preserver-relation",
  "relance-whatsapp-rgpd-cadre-pme",
  "automatiser-relances-impayes-crm",
  "contestation-facture-impayee",
  "facture-impayee-client-procedure",
  "recouvrement-b2b-france-europe",
  "tableau-bord-recouvrement-pme",
  "sms-whatsapp-relance-facture-modele",
  "dossier-preuve-facture-impayee",
  "echeancier-client-promesse-paiement",
  "relance-facture-impayee-artisan",
  "agent-ia-whatsapp-recouvrement-creance",
]);

export function proxy(request: Parameters<typeof handleI18nRouting>[0]) {
  const deletedBlogMatch = request.nextUrl.pathname.match(/^\/(?:fr|en|de|nl)\/blog\/([^/?#]+)\/?$/);
  if (deletedBlogMatch && deletedRecouvrementSlugs.has(decodeURIComponent(deletedBlogMatch[1]))) {
    return new NextResponse("Gone", {
      status: 410,
      headers: {
        "Cache-Control": "no-store, max-age=0, must-revalidate",
        "X-Robots-Tag": "noindex, nofollow, noarchive",
      },
    });
  }

  const response = handleI18nRouting(request);

  // Convert 307 to 308 for permanent redirects
  if (response.status === 307) {
    const location = response.headers.get("location");
    if (location) {
      return NextResponse.redirect(location, { status: 308 });
    }
  }

  // Strip NEXT_LOCALE Set-Cookie from page HTML responses so Vercel Edge can cache them.
  // With localePrefix: "always", the cookie is redundant (locale lives in the URL path)
  // and its presence forces Cache-Control: private on every page render.
  const setCookie = response.headers.get("set-cookie");
  if (setCookie && setCookie.includes("NEXT_LOCALE")) {
    const filtered = setCookie
      .split(/,(?=[^ ])/) // split on commas not followed by space (cookie separator)
      .filter((c) => !c.trim().toLowerCase().startsWith("next_locale="))
      .join(", ");
    if (filtered) {
      response.headers.set("set-cookie", filtered);
    } else {
      response.headers.delete("set-cookie");
    }
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
