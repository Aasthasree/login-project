//Angular Imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//Service
import { CustomerService } from '../../service/customer.service';
//Model
import { Customer } from '../../customer-model/customer.model';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  customerDetail: Customer;

  constructor(
    private activeRoute: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCustomerById();
  }

  getCustomerById() {
    const customerId = this.activeRoute.snapshot.paramMap.get('id');
    if (customerId) {
      this.customerService.getCustomer(customerId).subscribe({
        next: (data) => {
          this.customerDetail = data;
        },
        error: (error) => {
          console.error('Error fetching customer data:', error);
          alert(error);
        }
      });
    } else {
      this.router.navigate(['/customer/home']);
    }
  }


}
