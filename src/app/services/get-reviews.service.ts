import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetReviewsService {
  constructor(private http: HttpClient) {}

  getReviews(): Observable<any> {
    return this.http.get(
      'https://backend-landing.decorationghs.com/api/review'
    );
  }
}
