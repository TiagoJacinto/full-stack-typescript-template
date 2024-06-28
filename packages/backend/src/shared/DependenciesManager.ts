import { type ValueOf } from 'type-fest';

export type Dependencies = Record<string, NonNullable<unknown>>;

export type DependencyFactories<T extends Dependencies> = {
  [K in keyof T]: () => T[K];
};

export abstract class DependenciesManager<T extends Dependencies> {
  private readonly dependencyFactories: DependencyFactories<T>;
  private readonly dependencies = new Map<keyof T, ValueOf<T>>();

  constructor(dependencyFactories: DependencyFactories<T>) {
    this.dependencyFactories = dependencyFactories;
  }

  protected getDependency<TKey extends keyof T>(key: TKey): T[TKey] {
    if (this.dependencies.has(key)) return this.dependencies.get(key) as T[TKey];

    const newDependency = this.dependencyFactories[key]();

    this.dependencies.set(key, newDependency);
    return newDependency;
  }
}
