//Angular Imports
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//RXJS Imports
import { Observable } from 'rxjs';
//Environment
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  baseUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }


  login(credentials: any): Observable<any> {
    const baseUrl = `${this.baseUrl}/signin/token/`;
    const creds = 'grant_type=password&password='
      + (credentials['password'])
      + '&username='
      + (credentials['username']);

    return this.http.post<any>(baseUrl, creds,);
  }

}