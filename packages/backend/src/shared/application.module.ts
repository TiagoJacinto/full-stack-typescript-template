import { type Config } from './Config';
import {
  type Dependencies,
  DependenciesManager,
  type DependencyFactories,
} from './DependenciesManager';

export abstract class ApplicationModule<T extends Dependencies> extends DependenciesManager<T> {
  private readonly _config: Config;

  constructor(dependencies: DependencyFactories<T>, config: Config) {
    super(dependencies);
    this._config = config;
  }

  protected get config() {
    return this._config;
  }

  protected get shouldBuildFakeRepository() {
    return this._config.script === 'test:unit' || this._config.env === 'development';
  }
}
