import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Address } from './address';

@Injectable()
export class MockDataService {

  url =
    `http://www.filltext.com/?rows=10&name={firstName}~{lastName}&pretty=true&letter={lett
erUpper|1}&addressBook=[%22Private%22,%20%22Family%22]&addressId={password}&gro
up={letterUpper|1}}&isFavourite={numberRange}`;

  constructor(private http: Http) {}

  getAddresses(): Observable<Address[]> {
    return this.http.get(this.url)
    .map(res => res.json());
  }
}
