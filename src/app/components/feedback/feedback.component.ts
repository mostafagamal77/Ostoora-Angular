import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent {
  feedbackSlides: any[] = [
    {
      imgSrc: './assets/imgs/feedback.png',
      name: 'ahmed saad',
      opinion: 'perfect',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      name: 'ahmed saad',
      opinion: 'perfect',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      name: 'ahmed saad',
      opinion: 'perfect',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      name: 'ahmed saad',
      opinion: 'perfect',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      name: 'ahmed saad',
      opinion: 'perfect',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      name: 'ahmed saad',
      opinion: 'perfect',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      name: 'ahmed saad',
      opinion: 'perfect',
    },
    {
      imgSrc: './assets/imgs/feedback.png',
      name: 'ahmed saad',
      opinion: 'perfect',
    },
  ];

  feedbackOptions: OwlOptions = {
    loop: true,
    center: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
        margin: 20,
      },
      600: {
        items: 2,
        margin: 20,
      },
      992: {
        items: 4,
        margin: 20,
      },
    },
    nav: false,
  };
}
