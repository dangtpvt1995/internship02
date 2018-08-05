import { ManagedNotificationModule } from './managed-notification.module';

describe('ManagedNotificationModule', () => {
  let managedNotificationModule: ManagedNotificationModule;

  beforeEach(() => {
    managedNotificationModule = new ManagedNotificationModule();
  });

  it('should create an instance', () => {
    expect(managedNotificationModule).toBeTruthy();
  });
});
