import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ChangeLangService } from 'src/app/services/change-lang.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  showMenu: boolean = false;

  constructor(
    public translate: TranslateService,
    public _ChangeLangService: ChangeLangService
  ) {}

  toggleMenu() {
    this.showMenu === false ? (this.showMenu = true) : (this.showMenu = false);
  }
}
