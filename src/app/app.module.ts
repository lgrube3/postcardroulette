import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AddressComponent } from '../pages/address/address.component';
import { AddressListComponent } from '../pages/address/address-list.component';
import { AddressInputComponent } from '../pages/address/address-input.component';
import { About } from '../pages/about/about';

@NgModule({
  declarations: [
    MyApp,
    AddressComponent,
    AddressListComponent,
    AddressInputComponent,
    About
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddressComponent,
    About
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
