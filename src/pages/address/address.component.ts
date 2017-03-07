import { Component  } from '@angular/core';

import { AddressListComponent } from './address-list.component';
import { AddressInputComponent } from './address-input.component';
import { AddressService } from "./address.service";

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-address',
  templateUrl: 'address.component.html',
  providers: [AddressService]
})
export class AddressComponent {

	constructor(public navCtrl: NavController) {}

}
