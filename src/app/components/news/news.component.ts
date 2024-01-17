import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { VideoOpenService } from 'src/app/services/video-open.service';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  private sanitizerVid = inject(DomSanitizer);

  constructor(
    public _VideoOpenService: VideoOpenService,
    private _VideosService: VideosService
  ) {}

  ngOnInit(): void {
    this.getReels();
  }
  reels: any[] = [];

  newsOptions: OwlOptions = {
    // loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 2000,
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

  getReels() {
    this._VideosService.getVideos().subscribe({
      next: (res) => {
        this.reels = res.data.reels;
        this.reels.forEach((video) => {
          video.link = this.sanitizerVid.bypassSecurityTrustResourceUrl(
            video.link
          );
        });
      },
    });
  }
}
