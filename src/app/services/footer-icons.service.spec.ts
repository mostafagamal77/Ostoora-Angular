import { TestBed } from '@angular/core/testing';

import { FooterIconsService } from './footer-icons.service';

describe('FooterIconsService', () => {
  let service: FooterIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
