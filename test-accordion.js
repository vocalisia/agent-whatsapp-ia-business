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

  // Open menu
  await page.locator('button[aria-label*="menu" i]').last().click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: "./test-screens/menu-01-open.png" });

  // Click Services accordion
  const srv = page.locator('[role="dialog"] button:has-text("Services")').first();
  console.log(`Services btn: ${await srv.count()}`);
  await srv.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: "./test-screens/menu-02-services.png", fullPage: true });

  // Count links
  const roi = await page.locator('[role="dialog"] a[href="/fr/roi"]').count();
  const urgent = await page.locator('[role="dialog"] a[href="/fr/urgent"]').count();
  const social = await page.locator('[role="dialog"] a[href="/fr/social"]').count();
  console.log(`Offers: roi=${roi} urgent=${urgent} social=${social}`);

  // Scroll menu to bottom to see all
  await page.locator('[role="dialog"] nav').first().evaluate(el => el.scrollTop = el.scrollHeight);
  await page.waitForTimeout(300);
  await page.screenshot({ path: "./test-screens/menu-03-scrolled.png" });

  // Click ROI offer
  await page.locator('[role="dialog"] a[href="/fr/roi"]').first().click();
  await page.waitForTimeout(1500);
  const dlg = await page.locator('[role="dialog"]').count();
  console.log(`After nav click: dialog count=${dlg} (expect 0 — menu closed)`);
  await page.screenshot({ path: "./test-screens/menu-04-after-nav.png" });

  await browser.close();
})().catch(e => console.error(e.message));
