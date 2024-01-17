import { AfterViewInit, Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ChangeLangService } from 'src/app/services/change-lang.service';
import { OurServicesService } from 'src/app/services/our-services.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
})
export class WorksComponent implements AfterViewInit, OnInit {
  imgUrl: string = './assets/imgs/work1.png';
  loaded: boolean = false;
  worksTitles!: any[];
  works!: any[];

  constructor(
    private _OurServicesService: OurServicesService,
    public _ChangeLangService: ChangeLangService
  ) {}

  ngOnInit(): void {
    this.worksTitle();
    this.ourWorks();
  }

  worksTitle() {
    this._OurServicesService.worksTitle().subscribe({
      next: (res) => {
        this.worksTitles = res.data;
      },
    });
  }
  ourWorks() {
    this._OurServicesService.ourWorks().subscribe({
      next: (res) => {
        this.loaded = true;
        this.works = res.data;
      },
    });
  }

  swiperParams = {
    autoplay: {
      delay: 2500,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
      reverseDirection: true,
    },
    breakpoints: {
      0: {
        centeredSlides: false,
        loop: true,
        loopAddBlankSlides: true,
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 20,
        grid: {
          rows: 2,
          fill: 'row',
        },
      },
      767: {
        centeredSlides: true,
        grabCursor: true,
        loop: true,
        loopAddBlankSlides: true,
        slidesPerView: 2,
        spaceBetween: 30,
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
    const swiperEl = document.querySelector('.works-slider');
    if (swiperEl) {
      Object.assign(swiperEl, this.swiperParams);
    }
  }
}
