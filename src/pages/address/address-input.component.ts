import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Address } from "./address.model";
import { AddressService } from "./address.service";

@Component({
  selector: 'app-address-input',
  template: `
  	<form novalidate #f="ngForm"  
          (ngSubmit)="onSubmit(f)">
      <ion-list>       
        <ion-item>
        <ion-label floating>Full Name</ion-label>
          <ion-input type="text" name="name" ngModel required></ion-input>
        </ion-item>
        <ion-item>
          <ion-label floating>Address Line 1</ion-label>
          <ion-input type="text" name="address1" ngModel required></ion-input>
        </ion-item>
        <ion-item>
          <ion-label floating>Address Line 2</ion-label>
          <ion-input type="text" name="address2" ngModel required></ion-input>
        </ion-item>
        <ion-item>
          <ion-label floating>City</ion-label>
          <ion-input type="text" name="city" ngModel required></ion-input>
        </ion-item>
        <ion-item>
          <ion-label floating>State</ion-label>
          <ion-select name="state" interface="action-sheet" ngModel required>
            <ion-option value="AL">Alabama</ion-option>
            <ion-option value="AK">Alaska</ion-option>
            <ion-option value="AZ">Arizona</ion-option>
            <ion-option value="AR">Arkansas</ion-option>
            <ion-option value="CA">California</ion-option>
            <ion-option value="CO">Colorado</ion-option>
            <ion-option value="CT">Connecticut</ion-option>
            <ion-option value="DE">Delaware</ion-option>
            <ion-option value="FL">Florida</ion-option>
            <ion-option value="GA">Georgia</ion-option>
            <ion-option value="HI">Hawaii</ion-option>
            <ion-option value="ID">Idaho</ion-option>
            <ion-option value="IL">Illinois</ion-option>
            <ion-option value="IN">Indiana</ion-option>
            <ion-option value="IA">Iowa</ion-option>
            <ion-option value="KS">Kansas</ion-option>
            <ion-option value="KY">Kentucky</ion-option>
            <ion-option value="LA">Louisiana</ion-option>
            <ion-option value="ME">Maine</ion-option>
            <ion-option value="MD">Maryland</ion-option>
            <ion-option value="MA">Massachusetts</ion-option>
            <ion-option value="MI">Michigan</ion-option>
            <ion-option value="MN">Minnesota</ion-option>
            <ion-option value="MS">Mississippi</ion-option>
            <ion-option value="MO">Missouri</ion-option>
            <ion-option value="MT">Montana</ion-option>
            <ion-option value="NE">Nebraska</ion-option>
            <ion-option value="NV">Nevada</ion-option>
            <ion-option value="NH">New Hampshire</ion-option>
            <ion-option value="NJ">New Jersey</ion-option>
            <ion-option value="NM">New Mexico</ion-option>
            <ion-option value="NY">New York</ion-option>
            <ion-option value="NC">North Carolina</ion-option>
            <ion-option value="ND">North Dakota</ion-option>
            <ion-option value="OH">Ohio</ion-option>
            <ion-option value="OK">Oklahoma</ion-option>
            <ion-option value="OR">Oregon</ion-option>
            <ion-option value="PA">Pennsylvania</ion-option>
            <ion-option value="RI">Rhode Island</ion-option>
            <ion-option value="SC">South Carolina</ion-option>
            <ion-option value="SD">South Dakota</ion-option>
            <ion-option value="TN">Tennessee</ion-option>
            <ion-option value="TX">Texas</ion-option>
            <ion-option value="UT">Utah</ion-option>
            <ion-option value="VT">Vermont</ion-option>
            <ion-option value="VA">Virginia</ion-option>
            <ion-option value="WA">Washington</ion-option>
            <ion-option value="WV">West Virginia</ion-option>
            <ion-option value="WI">Wisconsin</ion-option>
            <ion-option value="WY">Wyoming</ion-option>
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-label floating>Zip</ion-label>
          <ion-input type="text" name="zip" ngModel required></ion-input>
        </ion-item>
      
      <button class="submit" ion-button full type="submit">Submit</button>
      </ion-list>
    </form>
    
   `
})
export class AddressInputComponent {

	constructor(private addressService: AddressService) {}

	// address: Address = {
	// 	firstName: '',
	// 	lastName: ''
	// };

	onSubmit(form: any): void { 
    const address =  new Address(form.value.name, form.value.address1, form.value.address2, form.value.city, form.value.state, form.value.zip);
    this.addressService.addAddress(address);
    form.resetForm();
		//console.log('you submitted value:', form);
	}

  // address = new Address();

}
