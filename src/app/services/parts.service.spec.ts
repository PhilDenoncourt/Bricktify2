/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PartsService } from './parts.service';

describe('Service: Parts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartsService]
    });
  });

  it('should exist.', inject([PartsService], (service: PartsService) => {
    expect(service).toBeTruthy();
  }));

  it('should contain parts.', inject([PartsService], (service: PartsService) => {
    expect(service.parts).toBeTruthy();
    expect(service.parts.length).toBeTruthy();
  }));
});
