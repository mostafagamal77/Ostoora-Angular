import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  constructor(private http: HttpClient) {}

  getVideos(): Observable<any> {
    return this.http.get(
      'https://back.landing.alostora.online/public/api/home_page_video'
    );
  }
}
