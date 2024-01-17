import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ChangeLangService } from 'src/app/services/change-lang.service';
import { CircularServicesService } from 'src/app/services/circular-services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  services: any[] = [];

  constructor(
    private _CircularServicesService: CircularServicesService,
    public _ChangeLangService: ChangeLangService
  ) {}

  ngOnInit(): void {
    this.getServices();
  }

  servicesOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    smartSpeed: 1000,
    navSpeed: 1000,
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

  getServices() {
    this._CircularServicesService.getServices().subscribe({
      next: (res) => {
        this.services = res.data;
      },
    });
  }
}
