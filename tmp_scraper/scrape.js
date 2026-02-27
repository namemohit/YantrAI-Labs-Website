const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto('https://www.yantrailabs.com/life', { waitUntil: 'networkidle0' });
  const html = await page.content();
  console.log(html);
  await browser.close();
})();
