import { TestBed } from '@angular/core/testing';

import { VideoOpenService } from './video-open.service';

describe('VideoOpenService', () => {
  let service: VideoOpenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoOpenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
