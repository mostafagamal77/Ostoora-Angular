import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OurServicesService {
  constructor(private http: HttpClient) {}

  worksTitle(): Observable<any> {
    return this.http.get(
      'https://back.landing.alostora.online/public/api/service'
    );
  }

  ourWorks(): Observable<any> {
    return this.http.get(
      'https://back.landing.alostora.online/public/api/home_page_image'
    );
  }
}
