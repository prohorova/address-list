import { Component, Input } from '@angular/core';

import { Address } from '../../../address';

@Component({
  moduleId: module.id,
  selector: 'hr-address-entry',
  templateUrl: 'address-entry.component.html',
  styleUrls: ['address-entry.component.css']
})
export class AddressEntryComponent {
  @Input() address: Address;

  selectAddress($event: any, addressId: string) {
    // redirect to address
    $event.preventDefault();
  }
}
