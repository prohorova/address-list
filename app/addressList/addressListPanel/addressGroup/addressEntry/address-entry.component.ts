import { Component, Input } from '@angular/core';
//import { Router } from '@angular/router';

import { Address } from '../../../address';

@Component({
  moduleId: module.id,
  selector: 'hr-address-entry',
  templateUrl: 'address-entry.component.html',
  styleUrls: ['address-entry.component.css']
})
export class AddressEntryComponent {
  @Input() address: Address;

  //constructor(private router: Router) {}

  selectAddress($event: any, addressId: string) {
    // redirect to address
    // this.router.navigate(['/address-details', addressId]);
    $event.preventDefault();
  }
}
