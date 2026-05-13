const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Full page screenshot
  await page.screenshot({ path: '/tmp/full-page.png', fullPage: true });
  console.log('Full page done');

  // Section screenshots by scrolling
  const sections = [
    { name: 'nav-hero', y: 0 },
    { name: 'problem', y: 764 },
    { name: 'features', y: 1480 },
    { name: 'workflow', y: 2382 },
    { name: 'usecases', y: 3260 },
    { name: 'howitworks', y: 4138 },
    { name: 'finalcta', y: 4884 },
  ];

  for (const s of sections) {
    await page.evaluate((y) => window.scrollTo(0, y), s.y);
    await page.waitForTimeout(300);
    await page.screenshot({ path: `/tmp/section-${s.name}.png` });
    console.log(`${s.name} done`);
  }

  await browser.close();
})();
