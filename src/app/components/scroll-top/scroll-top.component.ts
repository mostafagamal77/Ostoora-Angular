import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css'],
})
export class ScrollTopComponent {
  showScrollBtn: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollY = window.scrollY;

    if (scrollY >= 600) {
      this.showScrollBtn = true;
    } else {
      this.showScrollBtn = false;
    }
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
