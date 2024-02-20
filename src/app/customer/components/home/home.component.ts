//Angular Imports
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//Model
import { CustomerResponse } from '../../customer-model/customer.model';
//Service
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customers: CustomerResponse;
  loading: boolean;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  private getCustomers() {
    this.loading = true;
    this.customerService.getCustomers().subscribe({
      next: (response) => {
        if (response) {
          this.customers = response;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
        alert(error);
        this.loading = false;
      }
    });
  }

  onClickNavigate(id: string) {
    const url = this.router.url;
    this.router.navigate([url, id]);
  }
}