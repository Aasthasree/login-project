//Angular Imports
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
//RXJS Imports
import { Observable } from 'rxjs';
//Model
import { Customer } from '../model/customer.model';
//Service
import { CustomerService } from './customer.service';

@Injectable({ providedIn: 'root' })
export class Resolver implements Resolve<Customer> {
  constructor(private customerService: CustomerService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Customer> | Promise<Customer> | Customer {

    const customerId = route.paramMap.get('id');
    return this.customerService.getCustomer(customerId);
  }
}