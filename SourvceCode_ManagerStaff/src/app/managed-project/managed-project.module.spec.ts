import { ManagedProjectModule } from './managed-project.module';

describe('ManagedProjectModule', () => {
  let managedProjectModule: ManagedProjectModule;

  beforeEach(() => {
    managedProjectModule = new ManagedProjectModule();
  });

  it('should create an instance', () => {
    expect(managedProjectModule).toBeTruthy();
  });
});
