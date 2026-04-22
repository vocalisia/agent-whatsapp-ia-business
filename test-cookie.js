const { chromium, devices } = require("playwright");
const iPhone = devices["iPhone 12"];
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ ...iPhone });
  const page = await context.newPage();
  await page.goto("https://agentic-whatsup.com/fr", { waitUntil: "networkidle" });
  await page.waitForTimeout(2500);
  await page.screenshot({ path: "./test-screens/cookie-before.png" });

  // Check cookie banner visible + accept button reachable (not covered)
  const accept = page.locator('button:has-text("Accepter")').first();
  const acceptBox = await accept.boundingBox();
  console.log(`Accept button box: ${JSON.stringify(acceptBox)}`);
  const isClickable = await accept.evaluate((el) => {
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const topEl = document.elementFromPoint(cx, cy);
    return {
      topTag: topEl?.tagName,
      topText: topEl?.textContent?.substring(0, 40),
      isMe: topEl === el || (topEl?.closest("button") === el),
    };
  });
  console.log(`Top element at accept center: ${JSON.stringify(isClickable)}`);

  // Try to click
  await accept.click();
  await page.waitForTimeout(800);
  const bannerGone = (await page.locator('[role="dialog"][aria-labelledby="cookie-banner-msg"]').count()) === 0;
  console.log(`Banner dismissed after click: ${bannerGone}`);
  await page.screenshot({ path: "./test-screens/cookie-after.png" });

  await browser.close();
})().catch(e => console.error(e.message));
