import createMiddleware from "next-intl/middleware";
import { routing } from "./lib/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match root "/" AND all paths except Next.js internals, API routes, static files
  matcher: ["/", "/((?!api|_next|_vercel|.*\\..*).*)", "/(fr|en|de|nl)/:path*"],
};
