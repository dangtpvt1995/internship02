import { ManagedTimesheetModule } from './managed-timesheet.module';

describe('ManagedTimesheetModule', () => {
  let managedTimesheetModule: ManagedTimesheetModule;

  beforeEach(() => {
    managedTimesheetModule = new ManagedTimesheetModule();
  });

  it('should create an instance', () => {
    expect(managedTimesheetModule).toBeTruthy();
  });
});
