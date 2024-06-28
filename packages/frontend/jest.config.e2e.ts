import { type Config } from 'jest';

import baseConfig from '../../jest.config.e2e';

export default {
  ...baseConfig,
  displayName: 'Frontend (E2E)',
} satisfies Config;
