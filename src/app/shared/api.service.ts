import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../data.model';
import { Observable, Subject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class apiService {
  private formApiUrl: string =
    'https://angular-digital-form-default-rtdb.firebaseio.com/data.json';

  constructor(private http: HttpClient) {}

  fetchUserData(): Observable<Data> {
    const userKey = JSON.parse(localStorage.getItem('id')!);
    const endPoint = userKey.name;
    return this.http.get<Data>(
      `https://angular-digital-form-default-rtdb.firebaseio.com/data/${endPoint}.json`
    );
  }

  postFormData(data: Data): Observable<Data> {
    return this.http.post<Data>(this.formApiUrl, data);
  }

  patchSecondForm(data: Data): Observable<Data> {
    const userKey = JSON.parse(localStorage.getItem('id')!);
    const endPoint = userKey.name;
    return this.http.patch<Data>(
      `https://angular-digital-form-default-rtdb.firebaseio.com/data/${endPoint}.json`,
      data
    );
  }

  fetchAll() {
    return this.http.get<{ [key: string]: Data }>(this.formApiUrl).pipe(
      map((responseData) => {
        const dataArray: Data[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            dataArray.push({ ...responseData[key], id: key });
          }
        }
        return dataArray;
      })
    );
  }
}
