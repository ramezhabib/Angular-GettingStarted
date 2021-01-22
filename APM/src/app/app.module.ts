import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component'
import { ProductModule } from './product-list/product/product.module';
import { AppRoutingModule } from './app-routing.module'


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    // define external modules
    BrowserModule,
    HttpClientModule,
    //ng registers routes based on order of modules specified here
    ProductModule,
    AppRoutingModule
  ],
  //defines startup component for app
  bootstrap: [AppComponent]
})
export class AppModule { }
