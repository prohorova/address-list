import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AddressListComponent } from './address-list.component';
import { AddressBookSelectionBarComponent } from './addressBookSelectionBar/address-book-selection-bar.component';
import { AddressListPanelComponent } from './addressListPanel/address-list-panel.component';
import { AddressGroupComponent } from './addressListPanel/addressGroup/address-group.component';
import { AddressEntryComponent } from './addressListPanel/addressGroup/addressEntry/address-entry.component';
import { MockDataService } from './mock-data.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [ AddressListComponent ],
  declarations: [
    AddressListComponent,
    AddressBookSelectionBarComponent,
    AddressListPanelComponent,
    AddressGroupComponent,
    AddressEntryComponent
  ],
  providers: [ MockDataService ]
})
export class AddressListModule { }
