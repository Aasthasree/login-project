//Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Third-party
import { ToastrModule } from 'ngx-toastr';
//Custom Module
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
//Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //Angular Modules
    BrowserModule,
    BrowserAnimationsModule,
    //Third-party
    ToastrModule.forRoot(),
    //Custom Module
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
