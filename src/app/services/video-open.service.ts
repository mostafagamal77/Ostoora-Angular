import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoOpenService {
  constructor() {}

  openReel = new BehaviorSubject(false);
  openVideo = new BehaviorSubject(false);
}
