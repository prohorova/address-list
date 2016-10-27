import { Component, Input } from '@angular/core';

import { Group } from '../../group';

@Component({
  moduleId: module.id,
  selector: 'hr-address-group',
  templateUrl: 'address-group.component.html',
  styleUrls: ['address-group.component.css']
})
export class AddressGroupComponent {
  @Input() group: Group;
}
