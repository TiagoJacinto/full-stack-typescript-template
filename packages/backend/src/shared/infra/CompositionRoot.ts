import { type Config } from '../Config';
import { WebServer } from './http/WebServer';

export class CompositionRoot {
  private static readonly instance?: CompositionRoot;

  private readonly config: Config;
  private readonly webServer: WebServer;

  static getInstance(config: Config) {
    if (!CompositionRoot.instance) return new CompositionRoot(config);

    return CompositionRoot.instance;
  }

  private constructor(config: Config) {
    this.config = config;
    this.webServer = new WebServer({
      port: 3000,
    });
  }

  get repositories() {
    return {};
  }

  getDatabase() {
    return {};
  }

  getWebServer() {
    return this.webServer;
  }
}
