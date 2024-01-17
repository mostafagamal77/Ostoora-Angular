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
      'https://backend-landing.decorationghs.com/api/service'
    );
  }

  ourWorks(): Observable<any> {
    return this.http.get(
      'https://backend-landing.decorationghs.com/api/home_page_image'
    );
  }
}
