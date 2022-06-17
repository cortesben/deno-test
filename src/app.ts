import puppeteer from "https://deno.land/x/puppeteer@9.0.1/mod.ts";

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto("https://www.google.com");
await page.screenshot({ path: "src/screenshots/google.png" });

await browser.close();