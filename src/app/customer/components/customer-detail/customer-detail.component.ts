//Angular Imports
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
//Service
import { CustomerService } from '../../service/customer.service';
//Model
import { Customer } from '../../model/customer.model';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  customerDetail: Customer;
  loading: boolean;

  constructor(
    private activeRoute: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCustomerById();
  }

  getCustomerById() {
    this.loading = true;
    const customerId = this.activeRoute.snapshot.paramMap.get('id');
    if (customerId) {
      this.customerService.getCustomer(customerId).subscribe({
        next: (data) => {
          this.customerDetail = data;
          this.loading = false;
        },

        error: (error) => {
          console.error('Error fetching customer data:', error);
          alert(error);
          this.loading = false;
        }
      });
    } else {
      this.router.navigate(['/customer/home']);
    }
  }

}