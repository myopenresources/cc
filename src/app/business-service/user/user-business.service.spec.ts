import { TestBed, inject } from '@angular/core/testing';

import { UserBusinessService } from './user-business.service';

describe('UserBusinessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserBusinessService]
    });
  });

  it('should be created', inject([UserBusinessService], (service: UserBusinessService) => {
    expect(service).toBeTruthy();
  }));
});
