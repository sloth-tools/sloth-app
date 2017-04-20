import path from 'path';
import { Application } from 'spectron';

const electronPath = path.join(
  __dirname,
  '..',
  '..',
  'node_modules',
  '.bin',
  'electron'
);

const appPath = path.join(__dirname, '..', '..');

const app = new Application({
  path: electronPath,
  env: { SPECTRON: true },
  args: [appPath]
});

const stopApp = app => app && app.isRunning() && app.stop();

export { app, stopApp };
