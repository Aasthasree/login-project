//Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Feature Module
import { CustomerRoutingModule } from './customer-routing.module';
//Components
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }