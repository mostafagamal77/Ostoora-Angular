import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ChangeLangService } from './services/change-lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Ostoraa';

  constructor(
    private translate: TranslateService,
    public _ChangeLangService: ChangeLangService
  ) {
    this.translate.setDefaultLang('en');
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
}
