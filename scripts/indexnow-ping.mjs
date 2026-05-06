// IndexNow ping for all new/updated URLs on agentic-whatsup.com
// Run: node scripts/indexnow-ping.mjs

const INDEXNOW_KEY = "254340f57d7a8f6d3a5a432252d0b44a";
const BASE = "https://agentic-whatsup.com";

const urls = [
  // Blog articles FR
  `${BASE}/fr/blog/agent-ia-whatsapp-business`,
  `${BASE}/fr/blog/comment-fonctionne-agent-ia-whatsapp`,
  `${BASE}/fr/blog/rgpd-whatsapp-ia-guide`,
  `${BASE}/fr/blog/whatsapp-cloud-api-vs-agent-ia`,
  // Blog EN new
  `${BASE}/en/blog/whatsup-ai-whatsapp-agent-2026`,
  `${BASE}/en/blog/ai-in-whatsapp-business-guide-2026`,
  // Blog DE new
  `${BASE}/de/blog/whatsup-ai-whatsapp-agent-2026`,
  `${BASE}/de/blog/ai-in-whatsapp-business-guide-2026`,
  // Blog NL new
  `${BASE}/nl/blog/whatsup-ai-whatsapp-agent-2026`,
  `${BASE}/nl/blog/ai-in-whatsapp-business-guide-2026`,
  // Author
  `${BASE}/fr/auteur/laurent-duplat`,
  `${BASE}/en/auteur/laurent-duplat`,
  `${BASE}/de/auteur/laurent-duplat`,
  `${BASE}/nl/auteur/laurent-duplat`,
  // Secteurs enrichis
  `${BASE}/fr/secteurs/immobilier`,
  `${BASE}/fr/secteurs/ecommerce`,
  `${BASE}/fr/secteurs/sante`,
  `${BASE}/fr/secteurs/btp`,
  `${BASE}/fr/secteurs/assurance`,
  `${BASE}/en/secteurs/immobilier`,
  `${BASE}/de/secteurs/immobilier`,
  `${BASE}/nl/secteurs/immobilier`,
  // Comparatifs
  `${BASE}/fr/comparatif/vs-wati`,
  `${BASE}/fr/comparatif/vs-manychat`,
  `${BASE}/fr/comparatif/vs-whatsapp-business`,
  `${BASE}/fr/comparatif/vs-respond-io`,
  `${BASE}/fr/comparatif/vs-sendpulse`,
  // RSS feeds
  `${BASE}/fr/blog/feed.xml`,
  `${BASE}/en/blog/feed.xml`,
  `${BASE}/de/blog/feed.xml`,
  `${BASE}/nl/blog/feed.xml`,
];

async function pingIndexNow() {
  const body = {
    host: "agentic-whatsup.com",
    key: INDEXNOW_KEY,
    keyLocation: `${BASE}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  const engines = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow",
  ];

  for (const engine of engines) {
    try {
      const res = await fetch(engine, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(body),
      });
      console.log(`${engine}: ${res.status} ${res.statusText}`);
    } catch (e) {
      console.error(`${engine}: FAILED`, e.message);
    }
  }
}

async function pingSitemap() {
  const sitemapUrl = encodeURIComponent(`${BASE}/sitemap.xml`);
  try {
    const res = await fetch(
      `https://www.google.com/ping?sitemap=${sitemapUrl}`
    );
    console.log(`Google sitemap ping: ${res.status}`);
  } catch (e) {
    console.error("Google sitemap ping FAILED:", e.message);
  }
}

console.log(`Pinging ${urls.length} URLs to IndexNow + Google sitemap...`);
await pingIndexNow();
await pingSitemap();
console.log("Done.");
