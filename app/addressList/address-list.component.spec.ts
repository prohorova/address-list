import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { of } from 'Rxjs/observable/of';

import { MockDataService } from './mock-data.service';
import { AddressListComponent } from './address-list.component';
import { Address } from './address';
import { Group} from './group';

let mockData: Address[] = [
  {
    "name": "Carman Mooney",
    "letter": "Q",
    "addressBook": "Family",
    "addressId": "UmYVBzqH",
    "group": "V",
    "isFavourite": 1
  },
  {
    "name": "Robin Richardson",
    "letter": "X",
    "addressBook": "Friends",
    "addressId": "nbGuAuMx",
    "group": "D",
    "isFavourite": 0
  }
];

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

let addressBooks = ['Family', 'Friends'];

class FakeMockDataService {
  getAddresses(): Observable<Address[]> {
    return Observable.of(mockData);
  }
};

let component: AddressListComponent;
let fixture: ComponentFixture<AddressListComponent>;
let mockDataService: FakeMockDataService;

describe('Address list Component: ', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddressListComponent
      ],
      providers: [
        {provide: MockDataService, useValue: new FakeMockDataService()}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressListComponent);
    component = fixture.componentInstance;
    mockDataService = fixture.debugElement.injector.get(MockDataService);
  });

  it('should get addresses', () => {
    expect(component.addresses).not.toBeDefined();
    fixture.detectChanges();
    expect(component.addresses).toEqual(mockData);
  });

  it('should populate addressBooks', () => {
    let allAddressBooks = addressBooks;
    allAddressBooks.unshift(component.noAddressBookName);
    fixture.detectChanges();
    expect(component.addressBooks).toEqual(allAddressBooks);
  });

  it('should populate groups', () => {
    component.currentAddressBook = component.noAddressBookName;
    fixture.detectChanges();
    expect(component.groups).toEqual(groups);
  });

  it('should get groups depending on selectedGroup', () => {
    component.currentAddressBook = 'Friends';
    fixture.detectChanges();
    expect(component.groups).toEqual([groups[0]]);
  })
});
