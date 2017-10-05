import { TestBed, inject } from '@angular/core/testing';

import { SessionStorageService } from './session-storage.service';

describe('SessionStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionStorageService]
    });
  });

  it('should be created', inject([SessionStorageService], (service: SessionStorageService) => {
    expect(service).toBeTruthy();
  }));
});
