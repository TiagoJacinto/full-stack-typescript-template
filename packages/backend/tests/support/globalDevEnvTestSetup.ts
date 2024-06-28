import { prepareDev } from '@template/backend/prepareDev';
import dotenv from 'dotenv';
import path from 'path';

export default async (): Promise<void> => {
  prepareDev();

  const nodeEnv = process.env.NODE_ENV || 'development';

  const envPath = path.join(__dirname, `../../.env.${nodeEnv}`);

  console.log('Reading env file', envPath);
  dotenv.config({ path: envPath });
};
