import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CircularServicesService {
  constructor(private http: HttpClient) {}

  getServices(): Observable<any> {
    return this.http.get(
      'https://backend-landing.decorationghs.com/api/first_section_circular_image'
    );
  }
}
