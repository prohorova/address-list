import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AddressListModule } from './addressList/address-list.module';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AddressListModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
