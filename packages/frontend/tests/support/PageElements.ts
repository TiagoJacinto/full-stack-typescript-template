import { ElementHandle } from 'puppeteer';

import { type PuppeteerPageDriver } from './PuppeteerPageDriver';

type ElementType = 'input' | 'button' | 'div' | 'checkbox';

export type PageElementsSelector = { selector: string; type: ElementType } | Component;

export type PageElementsConfig<T extends string> = Record<T, PageElementsSelector>;

export abstract class Component extends ElementHandle {
  constructor(protected driver: PuppeteerPageDriver) {
    super();
  }
}

export class PageElements<T extends string> {
  constructor(
    private readonly config: PageElementsConfig<T>,
    private readonly driver: PuppeteerPageDriver,
  ) {}

  async get(name: T) {
    const component = this.config[name];

    if (component instanceof Component) return component;

    let element;

    try {
      element = await this.driver.page.waitForSelector(component.selector);
    } catch (err) {
      console.log('Element not found');
      throw new Error(`Element ${name}`);
    }

    if (!element)
      throw new Error(
        `Could not load component's element ${name}: maybe it's not on the page yet.`,
      );

    return element;
  }
}
