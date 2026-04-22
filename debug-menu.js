const { chromium, devices } = require("playwright");
const iPhone = devices["iPhone 12"];
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ ...iPhone });
  const page = await context.newPage();
  await page.goto("https://agentic-whatsup.com/fr/roi", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);
  try { const r = page.locator('button:has-text("Refuser")').first(); if (await r.count()) await r.click(); } catch {}
  await page.waitForTimeout(500);
  await page.locator('button[aria-label*="menu" i]').last().click();
  await page.waitForTimeout(1000);

  const info = await page.evaluate(() => {
    const dlg = document.querySelector('[role="dialog"]');
    if (!dlg) return { found: false };
    const s = getComputedStyle(dlg);
    return {
      outerHTML: dlg.outerHTML.substring(0, 600),
      inlineStyle: dlg.getAttribute("style"),
      className: dlg.className,
      computed: {
        position: s.position,
        top: s.top,
        bottom: s.bottom,
        left: s.left,
        right: s.right,
        height: s.height,
        width: s.width,
        display: s.display,
        visibility: s.visibility,
        opacity: s.opacity,
      },
      childrenCount: dlg.children.length,
      firstChild: dlg.firstElementChild ? {
        tag: dlg.firstElementChild.tagName,
        className: dlg.firstElementChild.className.substring(0, 200),
        scrollHeight: dlg.firstElementChild.scrollHeight,
      } : null,
      rect: dlg.getBoundingClientRect().toJSON(),
    };
  });
  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})().catch(e => console.error(e.message));
