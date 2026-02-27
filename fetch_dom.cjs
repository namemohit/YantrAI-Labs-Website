const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://yantrai-labs-website-280830514033.us-central1.run.app', { waitUntil: 'networkidle0' });

    // Extract full HTML
    const html = await page.content();
    fs.writeFileSync('source_rendered.html', html);

    // Extract text content grouped by sections roughly
    const data = await page.evaluate(() => {
        const sections = Array.from(document.querySelectorAll('section, div[id]'));
        return sections.map(s => {
            return {
                id: s.id,
                className: s.className,
                text: s.innerText.substring(0, 500) // snippet
            };
        });
    });
    fs.writeFileSync('source_sections.json', JSON.stringify(data, null, 2));

    await browser.close();
})();
