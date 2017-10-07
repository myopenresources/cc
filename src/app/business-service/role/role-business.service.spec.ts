import { TestBed, inject } from '@angular/core/testing';

import { RoleBusinessService } from './role-business.service';

describe('RoleBusinessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleBusinessService]
    });
  });

  it('should be created', inject([RoleBusinessService], (service: RoleBusinessService) => {
    expect(service).toBeTruthy();
  }));
});
