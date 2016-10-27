import { Component, Input } from '@angular/core';

import { Group } from '../group';

@Component({
  moduleId: module.id,
  selector: 'hr-address-list-panel',
  templateUrl: 'address-list-panel.component.html',
  styleUrls: ['address-list-panel.component.css']
})
export class AddressListPanelComponent {
  @Input() groups: Group[];
}
