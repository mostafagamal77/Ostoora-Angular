import { Component, OnInit } from '@angular/core';
import { FooterIcons } from 'src/app/interfaces/footer-icons';
import { FooterIconsService } from 'src/app/services/footer-icons.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  icons!: FooterIcons[];

  constructor(private _FooterIconsService: FooterIconsService) {}
  ngOnInit(): void {
    this.getIcons();
  }

  getIcons() {
    setTimeout(() => {
      this._FooterIconsService.getIcons().subscribe({
        next: (res) => {
          this.icons = res.data;
        },
      });
    }, 1200);
  }
}
