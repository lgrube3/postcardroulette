import { Component, OnInit } from '@angular/core';

import { Address } from "./address.model";
import { AddressService } from "./address.service";

@Component({
  selector: 'app-address-list',
  template: `
    <div *ngFor="let address of addresses">
      <div class="name">
        {{address.name}}
      </div>
      <div class="address1">
        {{address.address1}}
      </div>
      <div class="address2">
        {{address.address2}}
      </div>
      <div class="city">
        {{address.city}}, {{address.state}} {{address.zip}}
      </div>
    </div>
  `
})
export class AddressListComponent implements OnInit {

  constructor(private addressService: AddressService) {}

  //address: Address = new Address('', '');
  addresses: Address[];

  ngOnInit() {
  	this.addresses = this.addressService.getAddress();
  }

  // address = new Address();

}
