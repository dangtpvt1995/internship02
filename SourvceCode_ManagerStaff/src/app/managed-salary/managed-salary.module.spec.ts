import { ManagedSalaryModule } from './managed-salary.module';

describe('ManagedSalaryModule', () => {
  let managedSalaryModule: ManagedSalaryModule;

  beforeEach(() => {
    managedSalaryModule = new ManagedSalaryModule();
  });

  it('should create an instance', () => {
    expect(managedSalaryModule).toBeTruthy();
  });
});
