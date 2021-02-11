const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
      headless:false
  });
  const page = await browser.newPage();
  await page.goto('https://mdev.licious.in/');
  await page.waitForSelector('img');
  await browser.close();
  await page.click('.addcartbtn')
})();