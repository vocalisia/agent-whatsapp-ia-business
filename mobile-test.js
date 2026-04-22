const { chromium, devices } = require("playwright");
const BASE = "https://agentic-whatsup.com";
const iPhone = devices["iPhone 12"];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ ...iPhone });
  const page = await context.newPage();
  await page.goto(`${BASE}/fr/roi`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);

  // Dismiss cookies
  try {
    const refuse = page.locator('button:has-text("Refuser")').first();
    if (await refuse.count()) await refuse.click({ timeout: 2000 });
    await page.waitForTimeout(500);
  } catch {}

  // Count hamburgers
  const hams = await page.locator('button[aria-label*="menu" i]').all();
  console.log(`Hamburger buttons found: ${hams.length}`);
  for (let i = 0; i < hams.length; i++) {
    const box = await hams[i].boundingBox();
    const visible = await hams[i].isVisible();
    const label = await hams[i].getAttribute("aria-label");
    console.log(`  #${i} visible=${visible} label="${label}" box=${JSON.stringify(box)}`);
  }

  // Click via bounding box (more reliable than locator click when overlaps)
  if (hams.length) {
    const ham = hams[hams.length - 1]; // last is usually mobile
    const box = await ham.boundingBox();
    if (box) {
      await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
      await page.waitForTimeout(800);
      await page.screenshot({ path: "./test-screens/debug-after-click.png" });

      // Check DOM state
      const dialogCount = await page.locator('[role="dialog"]').count();
      const dialogVisible = dialogCount > 0 ? await page.locator('[role="dialog"]').first().isVisible() : false;
      const bodyOverflow = await page.evaluate(() => document.body.style.overflow);
      console.log(`After click: dialog count=${dialogCount} visible=${dialogVisible} body.overflow="${bodyOverflow}"`);

      if (dialogCount > 0) {
        const dlg = page.locator('[role="dialog"]').first();
        const dlgBox = await dlg.boundingBox();
        const dlgStyle = await dlg.evaluate(el => {
          const s = getComputedStyle(el);
          return { display: s.display, opacity: s.opacity, zIndex: s.zIndex, bg: s.backgroundColor, position: s.position };
        });
        console.log(`Dialog box=${JSON.stringify(dlgBox)}`);
        console.log(`Dialog style=${JSON.stringify(dlgStyle)}`);
      }
    }
  }

  // Also tap directly using touch
  console.log("\n--- Trying tap ---");
  await page.goto(`${BASE}/fr/roi`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);
  try {
    const refuse = page.locator('button:has-text("Refuser")').first();
    if (await refuse.count()) await refuse.click({ timeout: 2000 });
  } catch {}
  await page.waitForTimeout(500);

  const ham2 = page.locator('button[aria-label*="menu" i]').last();
  await ham2.tap();
  await page.waitForTimeout(800);
  await page.screenshot({ path: "./test-screens/debug-tap.png" });
  const dlg2 = await page.locator('[role="dialog"]').count();
  console.log(`Via tap: dialog count=${dlg2}`);

  await browser.close();
})().catch((e) => console.error("FATAL:", e.message));
