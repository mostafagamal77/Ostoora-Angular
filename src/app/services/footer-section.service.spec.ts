import { TestBed } from '@angular/core/testing';

import { FooterSectionService } from './footer-section.service';

describe('FooterSectionService', () => {
  let service: FooterSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
