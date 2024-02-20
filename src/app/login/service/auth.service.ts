//Angular Imports
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//RXJS Imports
import { Observable } from 'rxjs';
//Environment
import { environment } from 'src/environments/environment.development';
//Model
import { Login, LoginResponse } from '../login-model/login-model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  baseUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  login(credentials: Login): Observable<LoginResponse> {
    const baseUrl = `${this.baseUrl}/signin/token/`;
    const creds = 'grant_type=password&password='
      + (credentials['password'])
      + '&username='
      + (credentials['email']);


    return this.http.post<LoginResponse>(baseUrl, creds,);
  }

}