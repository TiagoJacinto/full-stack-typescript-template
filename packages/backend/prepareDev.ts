import { checkDocker } from '@template/shared/src/scripts/checkDocker';
import { execSync } from 'child_process';
import path from 'path';

export function prepareDev(env = '.env.development'): void {
  console.log(`Preparing dev environment using ${env}`);

  checkDocker();

  const packageRoot = path.resolve(__dirname);

  const execParams = {
    cwd: packageRoot,
    stdio: 'inherit',
  } as const;

  if (env === '.env.development') return;

  execSync('docker-compose up --build -d', execParams);
  execSync(`dotenv -e ${env} -- npm run generate-prisma-client`, execParams);
  execSync(`dotenv -e ${env} -- npm run migrate`, execParams);
}
