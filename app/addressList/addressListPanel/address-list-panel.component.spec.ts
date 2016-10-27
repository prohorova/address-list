import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddressListPanelComponent } from './address-list-panel.component';
import { Group } from '../group';

let groups = [
  new Group("D", [{
    "name": "Robin Richardson",
    "letter": "X",
    "addressBook": "Friends",
    "addressId": "nbGuAuMx",
    "group": "D",
    "isFavourite": 0
  }]),
  new Group("V", [      {
    "name": "Carman Mooney",
    "letter": "Q",
    "addressBook": "Family",
    "addressId": "UmYVBzqH",
    "group": "V",
    "isFavourite": 1
  }])];

let component: AddressListPanelComponent;
let fixture: ComponentFixture<AddressListPanelComponent>;

describe('AddressListPanelComponent : ', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddressListPanelComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressListPanelComponent);
    component = fixture.componentInstance;
    component.groups = groups;
    fixture.detectChanges();
  });

  it('should get groups', () => {
    expect(component.groups).toEqual(groups);
  })
});
