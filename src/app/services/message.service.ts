import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormMessage } from '../interfaces/form-message';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private http: HttpClient) {}

  sendMessage(message: FormMessage): Observable<any> {
    return this.http.post(
      'https://backend-landing.decorationghs.com/api/client/form_message',
      message
    );
  }
}
