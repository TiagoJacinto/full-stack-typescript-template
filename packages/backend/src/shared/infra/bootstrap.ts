import { Config } from '../Config';
import { CompositionRoot } from './CompositionRoot';

const composition = CompositionRoot.getInstance(new Config('start:dev'));
const webServer = composition.webServer;

export async function bootstrap() {
  await webServer.start();
}
