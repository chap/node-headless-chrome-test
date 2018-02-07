const puppeteer = require('puppeteer');
const test = require('tape');
const PORT = process.env.PORT || 5000

test('responds to requests', (t) => {
  t.plan(1);

  (async () => {
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    const response = await page.goto('http://0.0.0.0:'+PORT);

    t.equal(response.status(), 200);

    await browser.close();
  })();
});
