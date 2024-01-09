import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { VideoOpenService } from 'src/app/services/video-open.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
  private sanitizerVid = inject(DomSanitizer);

  constructor(public _VideoOpenService: VideoOpenService) {}

  videoSrc: any;

  newsSlides: any[] = [
    {
      imgSrc: './assets/imgs/news.png',
      videoSrc: 'https://www.youtube.com/embed/668nUCeBHyY',
    },
    {
      imgSrc: './assets/imgs/news.png',
      videoSrc: 'https://www.youtube.com/embed/FbH2Gclbk6U',
    },
    {
      imgSrc: './assets/imgs/news.png',
      videoSrc: 'https://www.youtube.com/embed/z326fHt6w9g',
    },
    {
      imgSrc: './assets/imgs/news.png',
      videoSrc: 'https://www.youtube.com/embed/668nUCeBHyY',
    },
    {
      imgSrc: './assets/imgs/news.png',
      videoSrc: 'https://www.youtube.com/embed/FbH2Gclbk6U',
    },
    {
      imgSrc: './assets/imgs/news.png',
      videoSrc: 'https://www.youtube.com/embed/z326fHt6w9g',
    },
    {
      imgSrc: './assets/imgs/news.png',
      videoSrc: 'https://www.youtube.com/embed/668nUCeBHyY',
    },
    {
      imgSrc: './assets/imgs/news.png',
      videoSrc: 'https://www.youtube.com/embed/FbH2Gclbk6U',
    },
    {
      imgSrc: './assets/imgs/news.png',
      videoSrc: 'https://www.youtube.com/embed/z326fHt6w9g',
    },
  ];

  newsOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3,
        margin: 20,
      },
      767: {
        items: 3,
        margin: 20,
      },
      992: {
        items: 3,
        margin: 20,
      },
    },
    nav: false,
  };

  openModal(event: any) {
    this.videoSrc = this.sanitizerVid.bypassSecurityTrustResourceUrl(
      event.target.dataset.video
    );
    this._VideoOpenService.openReel.next(true);
  }
}
