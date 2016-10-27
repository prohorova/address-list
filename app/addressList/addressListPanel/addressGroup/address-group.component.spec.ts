import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddressGroupComponent } from './address-group.component';
import { Group } from '../../group';

let group = new Group("D", [{
  "name": "Robin Richardson",
  "letter": "X",
  "addressBook": "Friends",
  "addressId": "nbGuAuMx",
  "group": "D",
  "isFavourite": 0
}]);

let component: AddressGroupComponent;
let fixture: ComponentFixture<AddressGroupComponent>;

describe('AddressGroupComponent: ', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddressGroupComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressGroupComponent);
    component = fixture.componentInstance;
    component.group = group;
    fixture.detectChanges();
  });

  it('should display group name', () => {
    expect(fixture.debugElement.query(By.css('.group')).nativeElement.textContent)
      .toEqual(group.name);
  })
});
