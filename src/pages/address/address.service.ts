import { Address } from "./address.model";

export class AddressService {
	private myAddress: Address[] = [];
	private addresses: Address[] = [];

	addAddress(address: Address) {
		this.addresses.push(address);
		console.log(this.addresses);
	}

	getAddress() {
		return this.addresses;
	 }
}