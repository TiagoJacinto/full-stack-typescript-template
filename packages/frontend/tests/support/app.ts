import { type PuppeteerPageDriver } from './PuppeteerPageDriver';

export interface Pages {}

export interface App {
  pages: Pages;
}

export function createAppObject(pageDriver: PuppeteerPageDriver): App {
  return {
    pages: {},
  };
}
