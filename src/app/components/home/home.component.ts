import { Component, OnInit } from '@angular/core';
import { ChangeLangService } from 'src/app/services/change-lang.service';
import { GetHomeImagesService } from 'src/app/services/get-home-images.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  localLang: string = localStorage.getItem('language')!;
  homeImagesArr: any[] = [];

  constructor(
    private homeImages: GetHomeImagesService,
    public _ChangeLangService: ChangeLangService
  ) {}

  ngOnInit(): void {
    this.getHomeImages();
  }

  getHomeImages(): any {
    this.homeImages.getHomeImages().subscribe({
      next: (res) => {
        this.homeImagesArr = res.data;
      },
    });
  }
}
