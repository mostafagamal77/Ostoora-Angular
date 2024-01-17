import { TestBed } from '@angular/core/testing';

import { CircularServicesService } from './circular-services.service';

describe('CircularServicesService', () => {
  let service: CircularServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CircularServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
