import { Component, OnInit } from '@angular/core';
import { ChangeLangService } from 'src/app/services/change-lang.service';
import { FooterSectionService } from 'src/app/services/footer-section.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css'],
})
export class WebsiteComponent implements OnInit {
  footerElements: any[] = [];

  constructor(
    private _FooterSectionService: FooterSectionService,
    public _ChangeLangService: ChangeLangService
  ) {}
  ngOnInit(): void {
    this.getFooter();
  }

  getFooter() {
    this._FooterSectionService.getFooter().subscribe({
      next: (res) => {
        console.log(res);
        this.footerElements = res.data;
      },
    });
  }
}
