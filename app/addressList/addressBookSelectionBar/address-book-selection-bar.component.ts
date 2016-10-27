import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hr-address-book-selection-bar',
  templateUrl: 'address-book-selection-bar.component.html',
  styleUrls: ['address-book-selection-bar.component.css']
})
export class AddressBookSelectionBarComponent implements OnInit {
  @Input() addressBooks: string[];
  @Output() addressBookSelected = new EventEmitter<string>();

  selectedAddressBook: string;

  ngOnInit() {
    this.selectAddressBook(this.addressBooks[0]);
  }

  isSelected(addressBook: string) {
    return addressBook === this.selectedAddressBook;
  }

  selectAddressBook(addressBook: string) {
    this.selectedAddressBook = addressBook;
    this.addressBookSelected.emit(addressBook);
  }
}
