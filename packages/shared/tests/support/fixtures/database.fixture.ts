import { type CompositionRoot } from '@template/backend/src/shared/infra/CompositionRoot';
import { type RegisterUserCommand } from '@template/shared/src/modules/users/endpoints/register-user.endpoint';

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

  async setupWithExistingUsers(commands: RegisterUserCommand[]) {
    const application = this.composition.application;

    for (const command of commands) {
    }
  }
}
