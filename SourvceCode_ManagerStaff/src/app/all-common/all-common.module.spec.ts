import { AllCommonModule } from './all-common.module';

describe('AllCommonModule', () => {
  let allCommonModule: AllCommonModule;

  beforeEach(() => {
    allCommonModule = new AllCommonModule();
  });

  it('should create an instance', () => {
    expect(allCommonModule).toBeTruthy();
  });
});
