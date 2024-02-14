//Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
//Components
import { ValidationComponent } from './validation-component/validation.component';
//Interceptor
import { Interceptor } from './interceptor';

@NgModule({
  declarations: [
    //Components
    ValidationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    //Components
    ValidationComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ]
})
export class SharedModule { }