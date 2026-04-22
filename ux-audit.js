const { chromium, devices } = require("playwright");
const iPhone = devices["iPhone 12"];

async function auditPage(context, url, name) {
  const page = await context.newPage();
  const errors = [];
  const slowResources = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("response", (r) => {
    const t = r.timing?.()?.responseEnd;
    if (r.status() >= 400) errors.push(`HTTP ${r.status()} ${r.url()}`);
  });

  await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(1500);

  // Accept cookies to hide banner for cleaner audit
  try {
    const accept = page.locator('button:has-text("Accepter")').first();
    if (await accept.count()) await accept.click({ timeout: 2000 });
    await page.waitForTimeout(500);
  } catch {}

  // 1. Horizontal overflow
  const overflow = await page.evaluate(() => ({
    doc: document.documentElement.scrollWidth,
    view: window.innerWidth,
    body: document.body.scrollWidth,
  }));

  // 2. Touch target audit (buttons/links < 44x44)
  const smallTargets = await page.evaluate(() => {
    const MIN = 40;
    const interactive = [...document.querySelectorAll("a, button, [role=button]")];
    const viewport = { w: window.innerWidth, h: window.innerHeight };
    return interactive
      .filter((el) => {
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) return false;
        if (r.top > viewport.h || r.bottom < 0) return false;
        return r.width < MIN || r.height < MIN;
      })
      .slice(0, 10)
      .map((el) => ({
        tag: el.tagName,
        text: (el.textContent || "").trim().substring(0, 30),
        w: Math.round(el.getBoundingClientRect().width),
        h: Math.round(el.getBoundingClientRect().height),
      }));
  });

  // 3. Font size audit (should be ≥14px for body text)
  const smallFonts = await page.evaluate(() => {
    const texts = [...document.querySelectorAll("p, span, li, a, button")];
    return texts
      .filter((el) => {
        const text = (el.textContent || "").trim();
        if (text.length < 10) return false;
        const s = getComputedStyle(el);
        const size = parseFloat(s.fontSize);
        return size < 13;
      })
      .slice(0, 5)
      .map((el) => {
        const s = getComputedStyle(el);
        return { tag: el.tagName, size: s.fontSize, text: (el.textContent || "").trim().substring(0, 40) };
      });
  });

  // 4. Color contrast (text on bg)
  const contrastIssues = await page.evaluate(() => {
    function parseRgb(s) {
      const m = s.match(/\d+(\.\d+)?/g);
      if (!m) return null;
      return [+m[0], +m[1], +m[2], m[3] ? +m[3] : 1];
    }
    function luminance(rgb) {
      const [r, g, b] = rgb.slice(0, 3).map((c) => {
        const v = c / 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    }
    function contrast(rgb1, rgb2) {
      const l1 = luminance(rgb1);
      const l2 = luminance(rgb2);
      return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    }

    const els = [...document.querySelectorAll("p, span, h1, h2, h3, button, a")].slice(0, 200);
    const results = [];
    for (const el of els) {
      const text = (el.textContent || "").trim();
      if (text.length < 5) continue;
      const s = getComputedStyle(el);
      const color = parseRgb(s.color);
      let bg = null;
      let parent = el;
      while (parent) {
        const pbg = parseRgb(getComputedStyle(parent).backgroundColor);
        if (pbg && pbg[3] > 0.8 && pbg.slice(0, 3).some((c) => c > 0 || c === 0)) {
          bg = pbg;
          break;
        }
        parent = parent.parentElement;
      }
      if (!color || !bg) continue;
      const ratio = contrast(color, bg);
      if (ratio < 4.5) {
        results.push({
          ratio: ratio.toFixed(2),
          tag: el.tagName,
          text: text.substring(0, 40),
          color: s.color,
        });
      }
    }
    return results.slice(0, 5);
  });

  // Screenshot
  await page.screenshot({ path: `./test-screens/audit-${name}-top.png` });
  await page.screenshot({ path: `./test-screens/audit-${name}-full.png`, fullPage: true });

  const result = {
    url,
    overflow: overflow.doc > overflow.view + 2 ? `OVERFLOW ${overflow.doc}>${overflow.view}` : "OK",
    smallTargets: smallTargets.length,
    smallTargetsDetail: smallTargets,
    smallFonts: smallFonts.length,
    smallFontsDetail: smallFonts,
    contrastIssues: contrastIssues.length,
    contrastDetail: contrastIssues,
    errors: errors.slice(0, 8),
  };
  await page.close();
  return result;
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ ...iPhone });

  const urls = [
    ["home", "https://agentic-whatsup.com/fr"],
    ["roi", "https://agentic-whatsup.com/fr/roi"],
    ["urgent", "https://agentic-whatsup.com/fr/urgent"],
    ["social", "https://agentic-whatsup.com/fr/social"],
  ];

  for (const [name, url] of urls) {
    console.log(`\n=== ${name.toUpperCase()} ===`);
    const r = await auditPage(context, url, name);
    console.log(`Overflow: ${r.overflow}`);
    console.log(`Small touch targets (<40px): ${r.smallTargets}`);
    if (r.smallTargets) console.log("  ", JSON.stringify(r.smallTargetsDetail, null, 0));
    console.log(`Small fonts (<13px): ${r.smallFonts}`);
    if (r.smallFonts) console.log("  ", JSON.stringify(r.smallFontsDetail, null, 0));
    console.log(`Contrast issues (<4.5): ${r.contrastIssues}`);
    if (r.contrastIssues) console.log("  ", JSON.stringify(r.contrastDetail, null, 0));
    console.log(`Errors: ${r.errors.length}`);
    if (r.errors.length) console.log("  ", r.errors.slice(0, 3).join("\n   "));
  }

  await browser.close();
})().catch(e => console.error("FATAL:", e.message));
