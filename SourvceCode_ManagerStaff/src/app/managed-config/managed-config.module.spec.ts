import { ManagedConfigModule } from './managed-config.module';

describe('ManagedConfigModule', () => {
  let managedConfigModule: ManagedConfigModule;

  beforeEach(() => {
    managedConfigModule = new ManagedConfigModule();
  });

  it('should create an instance', () => {
    expect(managedConfigModule).toBeTruthy();
  });
});
