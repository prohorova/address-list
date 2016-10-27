import { Component } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddressBookSelectionBarComponent }
  from './address-book-selection-bar.component';
import { Address } from '../address';

let addressBooks = ['All', 'Family', 'Friends'];

let component: AddressBookSelectionBarComponent;
let fixture: ComponentFixture<AddressBookSelectionBarComponent>;

describe('AddressBookSelectionBarComponent: ', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddressBookSelectionBarComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookSelectionBarComponent);
    component = fixture.componentInstance;
    component.addressBooks = addressBooks;
    fixture.detectChanges();
  });

  it('should get addressBooks', () => {
    expect(component.addressBooks).toEqual(addressBooks);
  });

  it('should display address books', () => {
    let addressBookEls = fixture.debugElement.queryAll(By.css('.address-book'));
    expect(addressBookEls.length).toEqual(addressBooks.length);
    expect(addressBookEls[0].nativeElement.textContent.trim()).toEqual(addressBooks[0]);
  });

  it('should raise selected event when clicked', () => {
    let addressBookFirstEl = fixture.debugElement.query(By.css('.address-book'));
    addressBookFirstEl.triggerEventHandler('click', null);
    expect(component.selectedAddressBook).toEqual(addressBooks[0]);
  })
});
