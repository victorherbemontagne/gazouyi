import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubscribeService {
  constructor(
    private http: HttpClient
  ) { }

  subscribe(email: string, type: string): Observable<any> {
    const url = `${environment.server_url}/analytics/subscriber?k=babycloudlab`;
    const data = {
      email: email,
      type: type,
      datetime: new Date().toISOString()
    };
    return this.http.post(url, data);
  }
}
