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

  constructor(private _VideosService: VideosService) {}

  ngOnInit(): void {
    this.getVideos();
  }

  videos: any[] = [];

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
        this.videos = res.data.youtube;
        this.videos.forEach((video) => {
          video.link = this.sanitizer.bypassSecurityTrustResourceUrl(
            video.link
          );
        });
      },
    });
  }
}
