//Angular Imports
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
//service
import { CustomerService } from './customer.service';
//Model
import { Customer } from '../model/customer.model';

export const Resolver: ResolveFn<Customer> = (route, state) => {
  const customerService = inject(CustomerService);

  const customerId = route.paramMap.get('id');
  return customerService?.getCustomer(customerId);
};