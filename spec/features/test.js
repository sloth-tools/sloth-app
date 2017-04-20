import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

import { app, stopApp } from './global-helpers';

global.before(function() {
  chai.should();
  chai.use(chaiAsPromised);
});

describe('App starts', function() {
  this.timeout(15000);

  beforeEach(() => app.start());
  after(done => done());
  afterEach(() => stopApp(app));

  it('loads the app', () => {
    return app.client
      .waitUntilWindowLoaded()
      .browserWindow.isVisible().should.eventually.be.true;
  });
});
