//Angular Imports
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
//Model
import { Customer } from '../../model/customer.model';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  customerDetail: Customer;

  constructor(
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activeRoute.data.subscribe(data => {
      this.customerDetail = data['customer'];
    });
  }

}