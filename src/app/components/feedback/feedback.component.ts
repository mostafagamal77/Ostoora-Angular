import { ChangeLangService } from './../../services/change-lang.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GetReviewsService } from 'src/app/services/get-reviews.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  reviews: any[] = [];

  starArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
  constructor(
    private _GetReviewsService: GetReviewsService,
    public _ChangeLangService: ChangeLangService
  ) {}

  ngOnInit(): void {
    this.getReviews();
  }
  getReviews() {
    this._GetReviewsService.getReviews().subscribe({
      next: (res) => {
        this.reviews = res.data;
      },
    });
  }

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
    smartSpeed: 1000,
    navSpeed: 1500,
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
