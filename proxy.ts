import createMiddleware from "next-intl/middleware";
import { routing } from "./lib/i18n/routing";
import { NextResponse } from "next/server";

const handleI18nRouting = createMiddleware(routing);

export function proxy(request: Parameters<typeof handleI18nRouting>[0]) {
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
