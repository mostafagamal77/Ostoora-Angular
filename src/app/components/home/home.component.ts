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
    private _login: LoginService,
    private homeImages: GetHomeImagesService,
    public _ChangeLangService: ChangeLangService
  ) {
    this.login({
      email: 'admin@gmail.com',
      password: 'generalhouse',
    });
  }

  ngOnInit(): void {
    this.getHomeImages();
  }

  getHomeImages(): any {
    setTimeout(() => {
      this.homeImages.getHomeImages().subscribe({
        next: (res) => {
          this.homeImagesArr = res.data;
        },
      });
    }, 1200);
  }

  login(loginForm: any) {
    this._login.login(loginForm).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.data.token);
      },
    });
  }
}
