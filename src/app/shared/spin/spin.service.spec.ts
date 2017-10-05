import { TestBed, inject } from '@angular/core/testing';

import { SpinService } from './spin.service';

describe('SpinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpinService]
    });
  });

  it('should be created', inject([SpinService], (service: SpinService) => {
    expect(service).toBeTruthy();
  }));
});
