import { type Config } from '../Config';
import { DependenciesManager } from '../DependenciesManager';
import { type Application } from '../interfaces/application';
import { Database } from './database/database';
import { WebServer } from './http/WebServer';

type CompositionRootDependencies = {
  database: Database;
  webServer: WebServer;
};

export class CompositionRoot extends DependenciesManager<CompositionRootDependencies> {
  private static readonly instance?: CompositionRoot;

  private readonly config: Config;

  static getInstance(config: Config) {
    if (!CompositionRoot.instance) return new CompositionRoot(config);

    return CompositionRoot.instance;
  }

  private constructor(config: Config) {
    super({
      database: () => new Database(config),
      webServer: () =>
        new WebServer({
          port: 3000,
        }),
    });

    this.config = config;
    this.mountRoutes();
  }

  private mountRoutes() {}

  get application(): Application {
    return {};
  }

  get repositories() {
    return {};
  }

  get database() {
    return this.getDependency('database');
  }

  get webServer() {
    return this.getDependency('webServer');
  }
}
