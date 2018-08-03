import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { map } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://reqres.in/api';

  constructor(private http : HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get(`${this.url}/users?per_page=6`)
    .pipe(
      map((result:any) => {
        return result.data
      })
    );
  }

  getUser(id:string):Observable<any>{
    return this.http.get(`${this.url}/users/${id}`)
    .pipe(
      map((result:any) => {
        return result.data
      })
    );
  }
}
