import { TestBed } from '@angular/core/testing';

import { GetHomeImagesService } from './get-home-images.service';

describe('GetDataService', () => {
  let service: GetHomeImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetHomeImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
