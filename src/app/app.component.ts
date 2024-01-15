import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ChangeLangService } from './services/change-lang.service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Ostoraa';

  constructor(
    private _login: LoginService,
    private translate: TranslateService,
    public _ChangeLangService: ChangeLangService
  ) {
    this.translate.setDefaultLang('en');
    this.login({
      email: 'admin@gmail.com',
      password: 'generalhouse',
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('language')) {
      this.translate.use(localStorage.getItem('language') || 'en');
      if (localStorage.getItem('language') === 'ar') {
        this._ChangeLangService.isRtl.next(true);
      }
    }
  }

  arLang(language: string) {
    this._ChangeLangService.switchLang(language);
    this._ChangeLangService.isRtl.next(true);
  }
  enLang(language: string) {
    this._ChangeLangService.switchLang(language);
    this._ChangeLangService.isRtl.next(false);
  }

  login(loginForm: any) {
    this._login.login(loginForm).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.data.token);
      },
    });
  }
}
