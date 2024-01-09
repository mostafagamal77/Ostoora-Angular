import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  showMenu: boolean = false;

  toggleMenu() {
    this.showMenu === false ? (this.showMenu = true) : (this.showMenu = false);
  }
}
