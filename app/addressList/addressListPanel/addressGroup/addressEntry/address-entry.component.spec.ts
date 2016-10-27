import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddressEntryComponent } from './address-entry.component';
import { Address } from '../../../address';

let component: AddressEntryComponent;
let fixture: ComponentFixture<AddressEntryComponent>;

let address =  {
  "name": "Carman Mooney",
  "letter": "Q",
  "addressBook": "Family",
  "addressId": "UmYVBzqH",
  "group": "V",
  "isFavourite": 1
};

describe('AddressEntryComponent: ', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddressEntryComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressEntryComponent);
    component = fixture.componentInstance;
    component.address = address;
    fixture.detectChanges();
  });

  it('should display name', () => {
    expect(fixture.debugElement.query(By.css('.address-name')).nativeElement.textContent)
      .toEqual(address.name);
  })
});
