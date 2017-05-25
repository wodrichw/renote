import { TestBed, inject } from '@angular/core/testing';

import { OnLoginService } from './on-login.service';

describe('OnLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnLoginService]
    });
  });

  it('should ...', inject([OnLoginService], (service: OnLoginService) => {
    expect(service).toBeTruthy();
  }));
});
