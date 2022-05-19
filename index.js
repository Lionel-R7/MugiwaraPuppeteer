const puppeteer = require("puppeteer");

const f = async () => {
  const browser = await puppeteer.launch({ headless: false }); // par default --> true
  const page = await browser.newPage();
  await page.goto("https://google.com");
  //   await page.screenshot({ path: "./screenshot/example.png" });  fait un screenshot

  await browser.close();
};

f();
