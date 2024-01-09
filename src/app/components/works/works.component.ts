import { AfterViewInit, Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
})
export class WorksComponent implements AfterViewInit {
  worksSlides: any[] = [
    {
      imgSrc: './assets/imgs/work1.png',
      cardHeading: 'cleaning',
      cardText:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet.',
    },
    {
      imgSrc: './assets/imgs/work2.png',
      cardHeading: 'cleaning',
      cardText:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet.',
    },
    {
      imgSrc: './assets/imgs/work3.png',
      cardHeading: 'cleaning',
      cardText:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet.',
    },
    {
      imgSrc: './assets/imgs/work4.png',
      cardHeading: 'cleaning',
      cardText:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet.',
    },
    {
      imgSrc: './assets/imgs/work5.png',
      cardHeading: 'cleaning',
      cardText:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet.',
    },
    {
      imgSrc: './assets/imgs/work6.png',
      cardHeading: 'cleaning',
      cardText:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet.',
    },
    {
      imgSrc: './assets/imgs/work1.png',
      cardHeading: 'cleaning',
      cardText:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet.',
    },
    {
      imgSrc: './assets/imgs/work2.png',
      cardHeading: 'cleaning',
      cardText:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet.',
    },
    {
      imgSrc: './assets/imgs/work3.png',
      cardHeading: 'cleaning',
      cardText:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet.',
    },
    {
      imgSrc: './assets/imgs/work4.png',
      cardHeading: 'cleaning',
      cardText:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet.',
    },
    {
      imgSrc: './assets/imgs/work5.png',
      cardHeading: 'cleaning',
      cardText:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet.',
    },
    {
      imgSrc: './assets/imgs/work6.png',
      cardHeading: 'cleaning',
      cardText:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet.',
    },
    {
      imgSrc: './assets/imgs/work6.png',
      cardHeading: 'cleaning',
      cardText:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet.',
    },
    {
      imgSrc: './assets/imgs/work6.png',
      cardHeading: 'cleaning',
      cardText:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet.',
    },
    {
      imgSrc: './assets/imgs/work6.png',
      cardHeading: 'cleaning',
      cardText:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet.',
    },
    {
      imgSrc: './assets/imgs/work6.png',
      cardHeading: 'cleaning',
      cardText:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet.',
    },
    {
      imgSrc: './assets/imgs/work6.png',
      cardHeading: 'cleaning',
      cardText:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet.',
    },
    {
      imgSrc: './assets/imgs/work6.png',
      cardHeading: 'cleaning',
      cardText:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet.',
    },
    {
      imgSrc: './assets/imgs/work6.png',
      cardHeading: 'cleaning',
      cardText:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet.',
    },
    {
      imgSrc: './assets/imgs/work6.png',
      cardHeading: 'cleaning',
      cardText:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet.',
    },
    {
      imgSrc: './assets/imgs/work6.png',
      cardHeading: 'cleaning',
      cardText:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet.',
    },
    {
      imgSrc: './assets/imgs/work6.png',
      cardHeading: 'cleaning',
      cardText:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet.',
    },
  ];

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
        slidesPerView: 2.15,
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
