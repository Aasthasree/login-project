//Angular Imports
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//RXJS Imports
import { Observable, catchError, throwError } from 'rxjs';
//Environment
import { environment } from 'src/environments/environment.development';
//Model
import { Customer, CustomerResponse } from '../customer-model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getCustomers(): Observable<CustomerResponse> {
    const url = `${this.baseUrl}api/e/customers/`;
    return this.http.get<CustomerResponse>(url).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  getCustomer(id: string): Observable<Customer> {
    const url = `${this.baseUrl}api/e/customers/${id}/`;
    return this.http.get<Customer>(url).pipe(
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