/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BrickOptionsService } from './brick-options.service';
import { ColorService } from './color.service';

describe('Service: BrickOptions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrickOptionsService, ColorService]
    });
  });

  it('should exist', inject([BrickOptionsService], (service: BrickOptionsService) => {
    expect(service).toBeTruthy();
  }));

  it('should have default options', inject([BrickOptionsService], (service: BrickOptionsService) => {
    expect(service.getCurrentOptions()).toBeTruthy();
  }));
});
