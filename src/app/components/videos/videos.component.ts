import { Component, AfterViewInit, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoOpenService } from 'src/app/services/video-open.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
})
export class VideosComponent implements AfterViewInit {
  private sanitizer = inject(DomSanitizer);

  constructor(public _VideoOpenService: VideoOpenService) {}

  videoSrc: any;

  videosSlides: any[] = [
    {
      imgSrc: './assets/imgs/feedback.png',
      videoSrc: 'https://www.youtube.com/embed/668nUCeBHyY',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      videoSrc: 'https://www.youtube.com/embed/FbH2Gclbk6U',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      videoSrc: 'https://www.youtube.com/embed/z326fHt6w9g',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      videoSrc: 'https://www.youtube.com/embed/nqye02H_H6I',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      videoSrc: 'https://www.youtube.com/embed/DeHUFsrCYr0',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      videoSrc: 'https://www.youtube.com/embed/Z_UW5AMamKY',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      videoSrc: 'https://www.youtube.com/embed/DeHUFsrCYr0',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      videoSrc: 'https://www.youtube.com/embed/z326fHt6w9g',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      videoSrc: 'https://www.youtube.com/embed/FbH2Gclbk6U',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      videoSrc: 'https://www.youtube.com/embed/668nUCeBHyY',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      videoSrc: 'https://www.youtube.com/embed/FbH2Gclbk6U',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      videoSrc: 'https://www.youtube.com/embed/z326fHt6w9g',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      videoSrc: 'https://www.youtube.com/embed/nqye02H_H6I',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      videoSrc: 'https://www.youtube.com/embed/DeHUFsrCYr0',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      videoSrc: 'https://www.youtube.com/embed/Z_UW5AMamKY',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      videoSrc: 'https://www.youtube.com/embed/DeHUFsrCYr0',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      videoSrc: 'https://www.youtube.com/embed/z326fHt6w9g',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      videoSrc: 'https://www.youtube.com/embed/FbH2Gclbk6U',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      videoSrc: 'https://www.youtube.com/embed/668nUCeBHyY',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      videoSrc: 'https://www.youtube.com/embed/FbH2Gclbk6U',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      videoSrc: 'https://www.youtube.com/embed/z326fHt6w9g',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      videoSrc: 'https://www.youtube.com/embed/nqye02H_H6I',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      videoSrc: 'https://www.youtube.com/embed/DeHUFsrCYr0',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      videoSrc: 'https://www.youtube.com/embed/Z_UW5AMamKY',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      videoSrc: 'https://www.youtube.com/embed/DeHUFsrCYr0',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      videoSrc: 'https://www.youtube.com/embed/z326fHt6w9g',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      videoSrc: 'https://www.youtube.com/embed/FbH2Gclbk6U',
    },
  ];

  swiperConfig = {
    slidesPerView: 'auto',
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
        grid: {
          rows: 2,
          fill: 'row',
        },
      },
    },
    on: {
      init() {
        //...
      },
    },
  };

  ngAfterViewInit(): void {
    const swiperEl = document.querySelector('.videos-slider');
    if (swiperEl) {
      Object.assign(swiperEl, this.swiperConfig);
    }
  }

  openModal(event: any) {
    this.videoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      event.currentTarget.dataset.videosrc
    );
    this._VideoOpenService.openVideo.next(true);
    console.log(event.currentTarget.dataset.videosrc);
  }
}
