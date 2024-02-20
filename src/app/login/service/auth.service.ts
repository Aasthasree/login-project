//Angular Imports
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//RXJS Imports
import { Observable, catchError, map, tap, throwError } from 'rxjs';
//Environment
import { environment } from 'src/environments/environment.development';
//Model
import { Login, LoginResponse } from '../login-model/login-model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  baseUrl: string = environment.apiUrl;
  timeInterval: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  startTokenRefresh() {
    const expiryTimeString = localStorage.getItem('expirytime');
    const expiryTime = parseInt(expiryTimeString);

    if (!isNaN(expiryTime) && expiryTime > 0) {
      this.timeInterval = setInterval(() => {
        this.refreshAccessToken().subscribe();
      }, 100);
    } else {
      console.error('Invalid expiry time or token has expired.');
    }
  }

  refreshAccessToken(): Observable<LoginResponse> {
    const currentRefreshTokens = localStorage.getItem('refreshtoken');
    const refreshTokenEndpoint = `${this.baseUrl}signin/token/`;

    const creds = 'grant_type=refresh_token&refresh_token=' + currentRefreshTokens;

    return this.http.post<LoginResponse>(refreshTokenEndpoint, creds).pipe(
      catchError(error => {
        console.error('Error refreshing access token:', error);
        localStorage.clear();
        this.router.navigate(['/login']);
        clearInterval(this.timeInterval);
        return throwError(() => error);
      }),
      tap((response: LoginResponse) => {
        localStorage.setItem('token', response.access_token);
        localStorage.setItem('refreshtoken', response.refresh_token);
      })
    );
  }

  login(credentials: Login): Observable<LoginResponse> {
    const baseUrl = `${this.baseUrl}signin/token/`;
    const creds = 'grant_type=password&password='
      + (credentials['password'])
      + '&username='
      + (credentials['email']);

    return this.http.post<LoginResponse>(baseUrl, creds,).pipe(
      map(
        data => {
          this.startTokenRefresh();
          return data;
        }
      ),
      catchError(this.handleError.bind(this))
    );
  }

  logout(): Observable<HttpResponse<any>> {
    const url = `${this.baseUrl}signin/revoke_token/`;
    const accessToken = localStorage.getItem('token');
    const creds = `token=${accessToken}`;

    return this.http.post<any>(url, creds).pipe(
      tap(() => {
        localStorage.clear();
        this.router.navigate(['/login']);
      }),
      catchError(this.handleError.bind(this))
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 404) {
      console.error('Resource not found:', error);
      this.router.navigate(['/customer/home']);
      return throwError(() => 'The requested resource was not found.');
    } else if (error.status === 500) {
      console.error('Internal Server Error:', error);
      return throwError(() => 'An internal server error occurred.');
    } else {
      console.error('API Error:', error);
      return throwError(() => 'Something went wrong; please try again later.');
    }
  }

}