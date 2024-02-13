//Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Third-party
import { ToastrModule } from 'ngx-toastr';
//Custom Module
import { AppRoutingModule } from './app-routing.module';
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
    //Custom Module
    AppRoutingModule,
    //Third-party
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
