import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FooterIconsService {
  constructor(private http: HttpClient) {}

  getIcons(): Observable<any> {
    return this.http.get(
      'https://back.landing.alostora.online/public/api/footer_icon'
    );
  }
}
