import { TestBed, inject } from '@angular/core/testing';

import { HttpClientService } from './http-client.service';

describe('HttpClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientService]
    });
  });

  it('should be created', inject([HttpClientService], (service: HttpClientService) => {
    expect(service).toBeTruthy();
  }));
});
