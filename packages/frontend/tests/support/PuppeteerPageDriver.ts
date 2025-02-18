import puppeteer, { type PuppeteerLaunchOptions, type Browser, type Page } from 'puppeteer';

export class PuppeteerPageDriver {
  private constructor(public readonly browser: Browser, public readonly page: Page) {}

  static async create(options?: PuppeteerLaunchOptions) {
    const browserInstance = await puppeteer.launch(options);
    const page = await browserInstance.newPage();
    return new PuppeteerPageDriver(browserInstance, page);
  }
}
