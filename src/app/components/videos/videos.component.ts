import { Component, AfterViewInit, inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoOpenService } from 'src/app/services/video-open.service';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
})
export class VideosComponent implements AfterViewInit, OnInit {
  private sanitizer = inject(DomSanitizer);

  constructor(
    public _VideoOpenService: VideoOpenService,
    private _VideosService: VideosService
  ) {}

  ngOnInit(): void {
    this.getVideos();
  }

  videos: any[] = [];
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

  getVideos() {
    this._VideosService.getVideos().subscribe({
      next: (res) => {
        console.log(res);
        this.videos = res.data;
        this.videos.forEach((video) => {
          console.log(video.link);
          video.link = this.sanitizer.bypassSecurityTrustResourceUrl(
            video.link
          );
        });
      },
    });
  }

  // openModal(event: any) {
  //   this.videoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
  //     event.currentTarget.dataset.videosrc
  //   );
  //   this._VideoOpenService.openVideo.next(true);
  //   console.log(event.currentTarget.dataset.videosrc);
  // }
}
