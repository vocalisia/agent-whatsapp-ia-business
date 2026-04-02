"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

const GA_ID = "G-1Q10Z6C916";

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}

export default function GoogleAnalytics() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const check = () => setAccepted(getCookie("cookie_consent") === "accepted");
    check();

    window.addEventListener("cookie_consent_changed", check);
    return () => window.removeEventListener("cookie_consent_changed", check);
  }, []);

  if (!accepted) return null;

  return (
    <>
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
