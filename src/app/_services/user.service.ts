import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3000/movies'

  constructor(private http:HttpClient) { }

 getPublicContent():Observable<any> {
  return this.http.get(this.baseUrl + 'all', {'responseType': 'text'});

}

getUserBoard(): Observable<any> {
  return this.http.get(this.baseUrl + 'user', {'responseType': 'text'});
}

getAdminBoard(): Observable<any> {
  return this.http.get(this.baseUrl + 'admin', {'responseType' : 'text'});
}

}
