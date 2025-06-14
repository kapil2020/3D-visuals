const { chromium } = require('playwright');
const assert = require('assert');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const fileUrl = 'file://' + path.join(__dirname, '..', 'dashboard_v3.html');

  const consoleMessages = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleMessages.push(msg.text());
    }
  });

  await page.goto(fileUrl);

  // wait for networkidle to ensure scripts executed
  await page.waitForLoadState('networkidle');

  assert.strictEqual(consoleMessages.length, 0, `Console errors found:\n${consoleMessages.join('\n')}`);

  await browser.close();
})();
