import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FooterSectionService {
  constructor(private http: HttpClient) {}

  getFooter(): Observable<any> {
    return this.http.get(
      'https://backend-landing.decorationghs.com/api/footer_section'
    );
  }
}
