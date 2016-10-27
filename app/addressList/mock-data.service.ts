import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Address } from './address';

@Injectable()
export class MockDataService {

  url =
    `http://www.filltext.com/?rows=50&name={firstName}~{lastName}&pretty=true&letter={letterUpper|1}&addressBook=[%22Private%22,%20%22Family%20ABCDE1231244324%22,%20%22Familiy%20XYZ_ABC_34758934579384%22]&addressId={password}&group={letterUpper|1}}&isFavourite={numberRange}`;

  constructor(private http: Http) {}

  getAddresses(): Observable<Address[]> {
    return this.http.get(this.url)
    .map(res => res.json());
  }
}
