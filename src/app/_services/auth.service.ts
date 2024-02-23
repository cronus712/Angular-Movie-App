import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 import { HttpClient, HttpHeaders } from '@angular/common/http';
 import { Movie } from '../movie';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

 private baseUrl = 'http://localhost:3000/movies'

  httpOptions = {
  headers: new HttpHeaders ({'Content-Type' : 'application/json'})
 };

  constructor(private http : HttpClient) { }

  login(username: string, password: string) : Observable<any> {
    return this.http.post(this.baseUrl + 'signIn', {username, password},this.httpOptions);
  }

  register(username : string, password : string, email : string) {
    return this.http.post(this.baseUrl+'signUp', {username, password, email}, this.httpOptions);
  }



}
