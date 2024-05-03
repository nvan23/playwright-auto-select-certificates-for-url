const { chromium } = require('playwright'); // 1
 
(async () => {
    const browser = await chromium.launch({
        headless: false,
        channel: 'msedge'
    });
    const page = await browser.newPage(); // 2
    await page.goto('https://playwright.dev/', {
        waitUntil: 'networkidle', // 4
    });
 
    console.log(await page.innerHTML("body"))
    await browser.close();
})();