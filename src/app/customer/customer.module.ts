//Angular Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//Third-party
import { AngularSpinnerModule } from '@laijuthomas/angular-spinner';
//Feature Module
import { CustomerRoutingModule } from './customer-routing.module';
//Components
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    CustomerDetailComponent,
    HomeComponent,
    LayoutComponent,
    NavbarComponent,
  ],
  imports: [
    AngularSpinnerModule,
    CommonModule,
    CustomerRoutingModule,
  ]
})
export class CustomerModule { }