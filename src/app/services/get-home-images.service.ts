import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetHomeImagesService {
  constructor(private http: HttpClient) {}

  getHomeImages(): Observable<any> {
    return this.http.get(
      'https://back.landing.alostora.online/public/api/slider_element'
    );
  }
}
