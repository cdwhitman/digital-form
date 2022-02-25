import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../data.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class apiService {
  private formApiUrl: string =
    'https://angular-digital-form-default-rtdb.firebaseio.com/data.json';

  constructor(private http: HttpClient) {}

  fetchUserData(): Observable<Data> {
    const userKey = JSON.parse(localStorage.getItem('id')!);
    const key = userKey.name;
    return this.http.get<Data>(
      `https://angular-digital-form-default-rtdb.firebaseio.com/data/${key}.json`
    );
  }

  postFormData(data: Data): Observable<Data> {
    return this.http.post<Data>(this.formApiUrl, data);
  }

  postSecondForm(data: Data): Observable<Data> {
    const userKey = JSON.parse(localStorage.getItem('id')!);
    const key = userKey.name;
    return this.http.post<Data>(
      `https://angular-digital-form-default-rtdb.firebaseio.com/data/${key}.json`,
      data
    );
  }
}
