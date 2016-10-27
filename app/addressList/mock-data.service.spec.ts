import { inject, async, fakeAsync, tick, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Http, ConnectionBackend, BaseRequestOptions, Response, ResponseOptions }
  from '@angular/http';

import { MockDataService } from './mock-data.service';

describe('MockDataService: ', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        MockDataService,
        {
          provide: Http,
          useFactory: (backend:ConnectionBackend, defaultOptions:BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }, deps: [MockBackend, BaseRequestOptions]
        }
      ]
    }).compileComponents();
  }));

  it('should get addresses',
    inject([MockDataService, MockBackend],
      fakeAsync((mockDataService: MockDataService, mockBackend: MockBackend) => {
      let resp: any;
      let successResponse = [
        {
          "name": "Carman Mooney",
          "letter": "Q",
          "addressBook": "Private",
          "addressId": "UmYVBzqH",
          "group": "V",
          "isFavourite": 1
        },
        {
          "name": "Robin Richardson",
          "letter": "X",
          "addressBook": "Familiy XYZ_ABC_34758934579384",
          "addressId": "nbGuAuMx",
          "group": "D",
          "isFavourite": 0
        }
      ];

      mockBackend.connections.subscribe((c:MockConnection) => {
        expect(c.request.url).toEqual(mockDataService.url);
        let response = new Response(new ResponseOptions({body: successResponse}));
        c.mockRespond(response);
      });

      mockDataService.getAddresses().subscribe(_resp => {
        resp = _resp;
      });
      tick();
      expect(resp).toEqual(successResponse);
    })));
});
