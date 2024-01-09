import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  servicesSlides: any[] = [
    {
      text: 'play demo for courses',
      imgSrc: './assets/imgs/broom.png',
    },
    {
      text: 'best educators',
      imgSrc: './assets/imgs/broom.png',
    },
    {
      text: 'build your career',
      imgSrc: './assets/imgs/broom.png',
    },
    {
      text: 'play demo for courses',
      imgSrc: './assets/imgs/broom.png',
    },
    {
      text: 'best educators',
      imgSrc: './assets/imgs/broom.png',
    },
    {
      text: 'build your career',
      imgSrc: './assets/imgs/broom.png',
    },
  ];

  servicesOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 3,
        margin: 20,
      },
      400: {
        items: 3,
        margin: 30,
      },
    },
    nav: true,
  };
}
