import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  // constructor(private _http: HttpClient) {}
  // fetchData(): Observable<any> {
  //   return this._http.get('./assets/db/db.json');
  // }
}
