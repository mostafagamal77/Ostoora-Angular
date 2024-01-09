import { Component, Input } from '@angular/core';
import { VideoOpenService } from 'src/app/services/video-open.service';

@Component({
  selector: 'app-video-popup',
  templateUrl: './video-popup.component.html',
  styleUrls: ['./video-popup.component.css'],
})
export class VideoPopupComponent {
  constructor(public _VideoOpenService: VideoOpenService) {}

  @Input() videoSrc: any;

  closeModal() {
    this._VideoOpenService.openReel.next(false);
    this._VideoOpenService.openVideo.next(false);
  }
}
