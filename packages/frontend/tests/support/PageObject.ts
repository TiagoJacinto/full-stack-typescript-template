import { type PuppeteerPageDriver } from './PuppeteerPageDriver';

export abstract class PageObject {
  constructor(protected readonly driver: PuppeteerPageDriver, protected readonly baseUrl: string) {}

  public async open() {
    await this.driver.page.goto(this.baseUrl);
  }
}
