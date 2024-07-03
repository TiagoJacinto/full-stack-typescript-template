import { type CompositionRoot } from '@template/backend/src/shared/infra/CompositionRoot';

export class DatabaseFixture {
  constructor(private readonly composition: CompositionRoot) {}

  async resetDatabase() {
    const connection = this.composition.database.getConnection();

    try {
      await connection.$transaction([]);
    } catch (error) {
      console.error(error);
    }
  }
}
