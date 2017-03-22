import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Address } from "./address.model";

@Injectable()
export class AddressService {
	private myAddress: Address[] = [];
	private addresses: Address[] = [];

	constructor(private http: Http) {}

	addAddress(address: Address) {
		//this.addresses.push(address);
		const body = JSON.stringify(address);
		const headers = new Headers({'Content-Type': 'application/json'});
		return this.http.post('http://localhost:3000/address', body, {headers: headers})
			.map((response: Response) => response.json())
			.catch((error: Response) => Observable.throw(error.json()));
	}

	getAddress() {
		return this.http.get('http://localhost:3000/address')
			.map((response: Response) => {
				const addresses = response.json().obj;
				let transformedAddresses: Address[] = [];
				for (let address of addresses) {
					transformedAddresses.push(new Address(address.name, address.address1, address.address2, address.city, address.state, address.zip))
				}
				this.addresses = transformedAddresses;
				return transformedAddresses;
			})
			.catch((error: Response) => Observable.throw(error.json()));
	 }
}