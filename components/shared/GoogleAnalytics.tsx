"use client";

import { useEffect } from "react";
import Script from "next/script";

const GA_ID = "G-1Q10Z6C916";

export default function GoogleAnalytics() {
  useEffect(() => {
    const update = () => {
      const match = document.cookie.match(/(^| )cookie_consent=([^;]+)/);
      const accepted = match ? match[2] === "accepted" : false;
      if (typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("consent", "update", {
          analytics_storage: accepted ? "granted" : "denied",
        });
      }
    };
    window.addEventListener("cookie_consent_changed", update);
    return () => window.removeEventListener("cookie_consent_changed", update);
  }, []);

  return (
    <>
      <Script id="consent-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          var _m = document.cookie.match(/(^| )cookie_consent=([^;]+)/);
          var _c = _m ? _m[2] : null;
          gtag('consent', 'default', { analytics_storage: _c === 'accepted' ? 'granted' : 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', wait_for_update: 500 });
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-config" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  );
}
