import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { MockDataService } from './mock-data.service';
import { Address } from './address';
import { Group } from './group';

@Component({
  moduleId: module.id,
  selector: 'hr-address-list',
  templateUrl: 'address-list.component.html',
  styleUrls: ['address-list.component.css']
})
export class AddressListComponent implements OnInit {

  noAddressBookName = 'All';

  addresses: Address[];
  addressBooks: string[];
  groups: Group[];

  currentAddressBook: string;

  constructor(private dataService: MockDataService) {}

  ngOnInit() {
    this.dataService.getAddresses().subscribe(res => {
      this.addresses = res;
      this.addressBooks = _.chain(this.addresses)
        .map(person => person.addressBook).uniq().value();
      this.addressBooks.unshift(this.noAddressBookName);

      this.changeGroups();
    });
  }

  getAddresses() {   // get addresses for selected address book
    if (this.currentAddressBook === this.noAddressBookName) {
      return this.addresses;
    }
    let addresses = _.filter(this.addresses, address => {
      return address.addressBook === this.currentAddressBook;
    });
    return addresses;
  }

  changeGroups() {  //
    this.groups = [];
    _.each(_.groupBy(this.getAddresses(), 'group'), (value, key) => {
      this.groups.push(new Group(key, value));
    });
    this.groups.sort((a: Group, b: Group) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }

  addressBookSelected(addressBook: string) {
    this.currentAddressBook = addressBook;
    this.changeGroups();
  }

  showSelectionBar() {
    return this.addresses && this.addresses.length > 1;
  }
}
